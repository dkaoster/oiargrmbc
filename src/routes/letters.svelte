<script>
  import cjMap from '../cjMap';
  import Card from '../components/Card.svelte';

  let currentLetter;
  let inputLetter;

  // Process the given input
  $: {
    if (inputLetter) {
      if (inputLetter.length > 1) {
        inputLetter = inputLetter.slice(-1);
      }
      inputLetter = cjMap[inputLetter.toUpperCase()]
        || (Object.values(cjMap).indexOf(inputLetter) >= 0 ? inputLetter : '');
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
    font-size: 96px;
    margin: 0;
    font-weight: 100;
  }
</style>

<svelte:head>
  <title>中文字母練習</title>
  <meta name="title" content="中文字母練習">
  <meta property="og:title" content="中文字母練習">
  <meta name="twitter:title" content="中文字母練習" />
  <meta property="og:url" content="https://www.oiargrmbc.com/letters/" />
</svelte:head>

<Card inputText={inputLetter} inputTextCallback={inputLetterCallback} color="#1dd1a1">
  <h1>{currentRadical}</h1>
</Card>
