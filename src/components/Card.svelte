<script>
  export let inputText;
  export let inputTextCallback;
  export let color = '#1dd1a1';

  let text = '';

  $: { inputTextCallback(text); text = ''; }
  $: { text = inputText }
</script>

<style>
  .card {
    background-color: white;
    border: 1px solid #DDD;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .card > * {
    padding: 20px;
  }

  .input-wrap {
    background-color: var(--color);
  }

  input {
    background: none;
    color: white;
    outline: none;
    border: none;
    font-size: 24px;
    width: 180px;
    text-align: center;
  }
</style>

<div class="card" style="--color: {color};">
  <div class="radical-wrap">
    <slot />
  </div>
  <div class="input-wrap">
    <input type="text" bind:value={text}>
  </div>
</div>
