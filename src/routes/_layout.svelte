<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  :global(body) {
    background-color: #F8F8F8;
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
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
