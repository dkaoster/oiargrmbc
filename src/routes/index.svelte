<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  import cjMap from '../cjMap';
  import Card from '../components/Card.svelte';
  import SettingsIcon from '../components/svg/SettingsIcon.svelte';

  // Boolean for whether we are on the client (we only want to load data on the client)
  let isClient = false;

  // Current practice level
  let currentLevel = '1';

  // Current vocab index
  let currentVocab = 0;

  // The current input string
  let inputValue = '';

  // The current set of characters, shuffled into a random order
  let currentLevelList;

  // The variable that will contain chinese words mapped to their cangjie characters (en)
  // after loaded
  let cangjieChars;

  // Checkboxes for showing or hiding the en / cj hints
  let showEn = false;
  let showCj = true;
  let randomOrder = true;

  // Show the settings dialog
  let showSettings = false;

  // Sets the shuffled list in the local variable
  const setLevelList = (list) => {
    currentVocab = 0;
    currentLevelList = randomOrder ? d3.shuffle(JSON.parse(JSON.stringify(list))) : list;
    return currentLevelList;
  }

  // Generates the en string given a chinese character or phrase
  const enString = (zhString) => zhString.split('')
    .map((char) => cangjieChars[char].toUpperCase())
    .join(' ');

  // Generates the cj string given the en characters
  const cjString = (string) => string.toUpperCase().split('')
    .map((char) => cjMap[char] || char)
    .join('');

  // Sets the local cangjie dictionary
  const setCangjieChars = (chars) => {
    cangjieChars = chars;
    return '';
  }

  // Load the cangjie dictionary on client
  $: cangjieCharsPromise = isClient && d3.json('data/all_chars.json');

  // Load the current level list
  $: currentLevelListPromise = isClient && d3.csv(`data/mandarin-${currentLevel}000.csv`);

  // If we change levels, set the current vocab index to 0
  $: { if (currentLevel) currentVocab = 0 }

  // When input is updated, we want to check if the word is complete
  $: {
    if (
      // First check if we've loaded a level
      currentLevelList
        // Check if the text is right
        && (inputValue === cjString(enString(currentLevelList[currentVocab].Traditional)))
    ) {
      // Go to the next vocab word
      currentVocab += 1;
      // Go back to 0 index if we've seen them all
      currentVocab %= currentLevelList.length;
      // reset input value
      inputValue = '';
    }
  }

  onMount(() => {
    isClient = true;
  });

  const inputCallback = (input) => { inputValue = cjString(input) };
</script>

<style>
  .controls {
    font-size: 12px;
    position: absolute;
    background-color: #fff7f4;
    padding: 5px 10px;
    border: 2px solid black;
    right: -65px;
    top: 40px;
    z-index: 1;
  }

  h1 {
    margin: 0;
    font-size: 72px;
    font-weight: 100;
  }

  p {
    margin: 0;
    font-weight: 400;
  }

  .cj-zh {
    word-spacing: 10px;
  }

  .cj-en {
    letter-spacing: 2px;
    word-spacing: 10px;
  }

  .settingsButton {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    cursor: pointer;
  }

  .option {
    margin: 5px 0;
  }

  .next, .prev {
    position: absolute;
    top: 40%;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 32px;
    padding: 0 10px;
  }

  .prev:disabled {
    color: #AAA;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }
</style>

<svelte:head>
  <title>倉頡練習</title>
  <meta name="title" content="倉頡練習">
  <meta property="og:title" content="倉頡練習">
  <meta name="twitter:title" content="倉頡練習" />
  <meta property="og:url" content="https://www.oiargrmbc.com/" />
</svelte:head>

<svelte:window
  on:click={() => { showSettings = false }}
  on:keydown={(evt) => {
    if (evt.key === 'ArrowRight') {
      currentVocab += 1;
      currentVocab %= currentLevelList.length;
    }
    if (evt.key === 'ArrowLeft' && currentVocab > 0) {
      currentVocab -= 1;
    }
  }}
/>

<Card inputTextCallback={inputCallback} inputText={inputValue} color="#9c88ff">
  <div class="wrap">
    <div class="settingsButton" on:click|stopPropagation={() => { showSettings = true }}>
      <SettingsIcon />
    </div>
    {#if showSettings}
      <div class="controls" on:click|stopPropagation>
        <div class="option">
          <label for="level">程度</label>
          <select name="level" id="level" bind:value={currentLevel}>
            {#each [...Array(10).keys()] as level}
              <option value={level + 1}>{level + 1}</option>
            {/each}
          </select>
        </div>

        <div class="option">
          <label for="en">英文字幕</label>
          <input id="en" type="checkbox" bind:checked={showEn} />
        </div>

        <div class="option">
          <label for="cj">中文字幕</label>
          <input id="cj" type="checkbox" bind:checked={showCj} />
        </div>

        <div class="option">
          <label for="order">隨機順序</label>
          <input id="order" type="checkbox" bind:checked={randomOrder} />
        </div>
      </div>
    {/if}

    {#await Promise.all([cangjieCharsPromise, currentLevelListPromise])}
      <h1>...</h1>
    {:then [chars, levelist]}
      {setCangjieChars(chars)}
      {#await Promise.resolve(setLevelList(levelist, randomOrder)) then list}
        <h1>{list[currentVocab].Traditional}</h1>
        {#if showCj}
          <p class="cj-zh">
            {cjString(enString(list[currentVocab].Traditional))}
          </p>
        {/if}
        {#if showEn}
          <p class="cj-en">
            {enString(list[currentVocab].Traditional)}
          </p>
        {/if}
        <button
          class="prev"
          disabled={currentVocab === 0}
          on:click={() => { if (currentVocab > 0) currentVocab -= 1 }}
        >ᐸ</button>
        <button
          class="next"
          on:click={() => {
            currentVocab += 1;
            currentVocab %= currentLevelList.length;
          }}
        >ᐳ</button>
      {/await}
    {/await}
  </div>
</Card>
