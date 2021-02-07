<script>
  export let segment;
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    top: 0;
  }

  .nav-inner {
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }

  img {
    width: 40px;
  }

  a {
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 8px;
  }

  a:hover {
    background-color: #DDD;
  }

  a.active {
    background-color: #CCC;
  }
</style>

<nav>
  <div class="nav-inner">
    <img src="apple-touch-icon.png" alt="logo">

    <div class="links">
      <a class:active={!segment} href="/">倉頡練習</a>
      <a class:active={segment === 'letters'} href="letters">中文字母練習</a>
    </div>
  </div>
</nav>