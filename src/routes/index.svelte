<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let isClient = false;
  let currentLevel = '1';
  let currentVocab = 0;

  $: cangjieChars = isClient && d3.json('data/all_chars.json');
  $: currentLevelList = isClient && d3.csv(`data/mandarin-${currentLevel}000.csv`);
  $: { if(currentLevel) currentVocab = 0 }

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
    text-transform: uppercase;
  }

  input {
    margin: 30px 0
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

  {#await Promise.all([cangjieChars, currentLevelList])}
    <h1>載入中...</h1>
  {:then [chars, levelist]}
    {#await Promise.resolve(d3.shuffle(levelist)) then shuffledLevelist}
      <h1>{shuffledLevelist[currentVocab].Traditional}</h1>
      <p class="cj-en">
        {#each shuffledLevelist[currentVocab].Traditional.split('') as char}
          {chars[char]}&nbsp;
        {/each}
      </p>
    {/await}
  {/await}

  <input type="text">
</div>
