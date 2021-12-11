<script context="module">
  /**
   * Layout Wrapper
   */
  export function load(props) {
    return {
      // We need to know which path we are currently on in order to display
      // the correct path icon inside the navigation.
      props: { segment: props.page.path },
    };
  }
</script>

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
    overflow-x: hidden;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="{fontString}&display=swap" />
  <link rel="stylesheet" href="{fontString}&display=swap" media="print" onload="this.media='all'" />
  <noscript>
    <link rel="stylesheet" href="{fontString}&display=swap" />
  </noscript>

  <script async defer data-domain="oiargrmbc.com" src="https://plausible.io/js/plausible.js"></script>

  <meta name="keywords" content="倉頡, 練習, 中文, 輸入法">
  <meta name="description" content="練習倉頡輸入法">
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.oiargrmbc.com/oiargrmbc.jpg" />
  <meta property="og:site_name" content="OIARGRMBC" />
  <meta property="og:locale" content="zh" />
  <meta property="og:description" content="練習倉頡輸入法">
  <meta name="twitter:card" content="summary_large_image">
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>
