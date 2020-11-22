<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  // Mapping of English letters to cangjie radicals.
  const cjMap = {
    A: '日',
    B: '月',
    C: '金',
    D: '木',
    E: '水',
    F: '火',
    G: '土',
    H: '竹',
    I: '戈',
    J: '十',
    K: '大',
    L: '中',
    M: '一',
    N: '弓',
    O: '人',
    P: '心',
    Q: '手',
    R: '口',
    S: '尸',
    T: '廿',
    U: '山',
    V: '女',
    W: '田',
    X: '難',
    Y: '卜',
  };

  // Boolean for whether we are on the client (we only want to load data on the client)
  let isClient = false;

  // Current practice level
  let currentLevel = '1';

  // Current vocab index
  let currentVocab = 0;

  // The current input string
  let inputValue = '';

  // The current set of characters, shuffled into a random order
  let shuffledLevelist;

  // The variable that will contain chinese words mapped to their cangjie characters (en)
  // after loaded
  let cangjieChars;

  // Checkboxes for showing or hiding the en / cj hints
  let showEn = false;
  let showCj = true;

  // Sets the shuffled list in the local variable
  const setShuffledLevelist = (list) => {
    shuffledLevelist = d3.shuffle(list);
    return shuffledLevelist;
  }

  // Generates the en string given a chinese character or phrase
  const enString = (zhString) => zhString.split('')
    .map((char) => cangjieChars[char].toUpperCase())
    .join(' ');

  // Generates the cj string given the en characters
  const cjString = (zhString) => zhString.split('')
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

  // The current input value in cj
  $: inputValueCJ = cjString(inputValue.toUpperCase());

  // If we change levels, set the current vocab index to 0
  $: { if (currentLevel) currentVocab = 0 }

  // When input is updated, we want to check if the word is complete
  $: {
    if (
      // First check if we've loaded a level
      shuffledLevelist
        // Check if user used the native cangjie input method to type characters directly
        && (inputValue === shuffledLevelist[currentVocab].Traditional
        // Or we check against the cangjie string
        || inputValue.toUpperCase() === enString(shuffledLevelist[currentVocab].Traditional))
    ) {
      // Go to the next vocab word
      currentVocab += 1;
      // Go back to 0 index if we've seen them all
      currentVocab %= shuffledLevelist.length;
      // reset input value
      inputValue = '';
    }
  }

  onMount(() => {
    isClient = true;
  });
</script>

<style>
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F8F8F8;
  }

  .controls {
    display: flex;
    justify-content: center;
  }

  label {
    margin-left: 20px;
    margin-right: 4px;
  }

  h1 {
    margin: 30px 0 0;
    font-size: 72px;
  }

  p {
    margin: 0;
  }

  .cj-en {
    letter-spacing: 4px;
  }

  .exercise {
    margin: 30px 0;
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>倉頡練習</title>

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
</svelte:head>

<div class="wrap">
  <div class="controls">
    <label for="level">程度</label>
    <select name="level" id="level" bind:value={currentLevel}>
      {#each [...Array(10).keys()] as level}
        <option value={level + 1}>{level + 1}</option>
      {/each}
    </select>

    <label for="en">英文字幕</label>
    <input id="en" type="checkbox" bind:checked={showEn} />

    <label for="cj">倉頡字幕</label>
    <input id="cj" type="checkbox" bind:checked={showCj} />
  </div>

  {#await Promise.all([cangjieCharsPromise, currentLevelListPromise])}
    <h1>載入中...</h1>
  {:then [chars, levelist]}
    {setCangjieChars(chars)}
    {#await Promise.resolve(setShuffledLevelist(levelist)) then shuffledLevelist}
      <h1>{shuffledLevelist[currentVocab].Traditional}</h1>
      {#if showCj}
        <p class="cj-zh">
          {cjString(enString(shuffledLevelist[currentVocab].Traditional))}
        </p>
      {/if}
      {#if showEn}
        <p class="cj-en">
          {enString(shuffledLevelist[currentVocab].Traditional)}
        </p>
      {/if}
    {/await}
  {/await}

  <div>{inputValueCJ}</div>
  <input class="exercise" type="text" bind:value={inputValue}>
</div>
