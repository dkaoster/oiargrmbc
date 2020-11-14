<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  const cjMap = {
    A: '日', B: '月', C: '金', D: '木', E: '水', F: '火', G: '土', H: '竹',
    I: '戈', J: '十', K: '大', L: '中', M: '一', N: '弓', O: '人', P: '心',
    Q: '手', R: '口', S: '尸', T: '廿', U: '山', V: '女', W: '田', X: '難',
    Y: '卜', Z: 'Z'
  };

  let isClient = false;
  let currentLevel = '1';
  let currentVocab = 0;
  let inputValue = '';
  let shuffledLevelist;
  let cangjieChars;

  $: cangjieCharsPromise = isClient && d3.json('data/all_chars.json');
  $: currentLevelListPromise = isClient && d3.csv(`data/mandarin-${currentLevel}000.csv`);
  $: { if(currentLevel) currentVocab = 0 }
  $: {
    if(
      shuffledLevelist
        && (inputValue === shuffledLevelist[currentVocab].Traditional
        || inputValue.toUpperCase() === enString(shuffledLevelist[currentVocab].Traditional))
    ) {
      currentVocab++;
      inputValue = '';
    }
  }

  const setShuffledLevelist = list => {
    shuffledLevelist = d3.shuffle(list);
    return shuffledLevelist;
  }

  const enString = zhString => zhString.split('')
    .map(char => cangjieChars[char].toUpperCase())
    .join(' ');

  const cjString = enString => enString.split('')
    .map(char => cjMap[char] || ' ')
    .join('');

  const setCangjieChars = chars => {
    cangjieChars = chars;
    return '';
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
  }

  h1 {
    margin: 30px 0 0;
    font-size: 64px;
  }

  p {
    margin: 0;
  }

  .cj-en {
    letter-spacing: 4px;
  }

  input {
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
  <select name="level" id="level" bind:value={currentLevel}>
    {#each [...Array(10).keys()] as level}
      <option value={level + 1}>{level + 1}</option>
    {/each}
  </select>

  {#await Promise.all([cangjieCharsPromise, currentLevelListPromise])}
    <h1>載入中...</h1>
  {:then [chars, levelist]}
    {setCangjieChars(chars)}
    {#await Promise.resolve(setShuffledLevelist(levelist)) then shuffledLevelist}
      <h1>{shuffledLevelist[currentVocab].Traditional}</h1>
      <p class="cj-zh">
        {cjString(enString(shuffledLevelist[currentVocab].Traditional))}
      </p>
      <p class="cj-en">
        {enString(shuffledLevelist[currentVocab].Traditional)}
      </p>
    {/await}
  {/await}

  <input type="text" bind:value={inputValue}>
</div>
