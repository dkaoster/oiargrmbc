<script>
  import cjMap from '../cjMap';
  import Card from '../components/Card.svelte';

  let currentLetter;
  let inputLetter;

  $: {
    if (inputLetter) {
      if (inputLetter.length > 1) {
        inputLetter = inputLetter.slice(-1);
      }
      inputLetter = cjMap[inputLetter.toUpperCase()] || '';
    }
    if (inputLetter === undefined || inputLetter === cjMap[currentLetter]) {
      const letters = Object.keys(cjMap).filter((l) => l !== currentLetter);
      currentLetter = letters[Math.floor(Math.random() * letters.length)];
      inputLetter = '';
    }
  }

  $: currentRadical = cjMap[currentLetter] || '';

  const inputLetterCallback = (letter) => { inputLetter = letter };
</script>

<style>
  h1 {
    font-size: 72px;
    margin: 0;
  }
</style>

<svelte:head>
  <title>中文字母練習</title>
</svelte:head>

<Card inputText={inputLetter} inputTextCallback={inputLetterCallback}>
  <h1>{currentRadical}</h1>
</Card>
