<script>
  import Nav from '../components/Nav.svelte';

  export let segment;

  const fontString = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400';
</script>

<style>
  :global(body) {
    background-color: #fff7f4;
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="{fontString}&display=swap" />
  <link rel="stylesheet" href="{fontString}&display=swap" media="print" onload="this.media='all'" />
  <noscript>
    <link rel="stylesheet" href="{fontString}&display=swap" />
  </noscript>
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
