<script>
  export let toggleAbout;
</script>

<style>
  .cover {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    cursor: pointer;
    z-index: 10;
  }

  .about-box {
    background-color: white;
    border: 2px solid black;
    padding: 20px 30px;
    max-width: 600px;
    cursor: initial;
    position: relative;
    margin: 0 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .diagonal {
    height: 2px;
    width: 30px;
    background-color: black;
    position: absolute;
  }

  .diagonal:nth-of-type(1) {
    transform: rotate(45deg);
  }

  .diagonal:nth-of-type(2) {
    transform: rotate(-45deg);
  }
</style>

<svelte:window on:click={toggleAbout} />

<div class="cover">
  <div class="about-box" on:click|stopPropagation>
    <div class="close" on:click={toggleAbout}><div class="diagonal" /><div class="diagonal" /></div>
    <h1>這是什麼？</h1>
    <p>這是一個練習倉頡輸入法的網站。倉頡的優點在於打字不用選字，因為每一個字都有它自己的順序。</p>

    <h1>使用說明</h1>
    <p>要使用這個練習網站時，請你把你的輸入法設成「英文」或「倉頡」，因為這個網站用英文字幕去對相對的倉頡字幕。</p>
    <p>「<a href="/">倉頡練習</a>」可以練習打一些常見的字和詞彙，「<a href="letters">中文字幕練習</a>」可以練習倉頡在鍵盤上用的字幕的位置。</p>

    <h1>問題回報</h1>
    <p>如果遇到問題或有新功能的想法，請到 <a href="https://github.com/dkaoster/oiargrmbc/issues">github</a> 開問題單。也歡迎直接開 <a
      href="https://github.com/dkaoster/oiargrmbc">pull request</a>。</p>

    <h1>為什麼是豬？</h1>
    <p><a href="https://udn.com/news/story/9750/5047555" target="_blank" rel="noopener noreferrer">為什麼不是？</a></p>
  </div>
</div>
