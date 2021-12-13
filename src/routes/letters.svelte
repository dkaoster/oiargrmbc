<script>
  import cjMap from '../cjMap';
  import Card from '../components/Card.svelte';

  let currentLetter;
  let inputLetter;

  // Process the given input
  $: {
    // If there is anything in our inputLetter string
    if (inputLetter) {
      // Get the last character in the string
      if (inputLetter.length > 1) inputLetter = inputLetter.slice(-1);

      // If they typed an english letter, we map it to the CJ letter
      inputLetter = cjMap[inputLetter.toUpperCase()]
        // Or they typed a CJ letter, we leave it alone.
        || (Object.values(cjMap).indexOf(inputLetter) >= 0 ? inputLetter : '');
    }

    // Check to see if we should move on to the next letter
    if (inputLetter === undefined || inputLetter === cjMap[currentLetter]) {
      // Filter out the last tested letter from a list because we don't want
      // to repeat the same letter twice
      const letters = Object.keys(cjMap).filter((l) => l !== currentLetter);

      // Pick a new random letter
      currentLetter = letters[Math.floor(Math.random() * letters.length)];

      // Reset the input letter string
      inputLetter = '';
    }
  }

  // The current radical we want to test
  $: currentRadical = cjMap[currentLetter] || '';

  // The callback to update the string inside inputLetter
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
