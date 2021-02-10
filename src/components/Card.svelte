<script>
  import KeyboardIcon from './svg/KeyboardIcon.svelte';
  import Keyboard from './svg/KeyboardLayout.svelte';

  export let inputText;
  export let inputTextCallback;
  export let color = '#1dd1a1';

  let text = '';
  let width;
  let showKeyboard = false;

  $: { inputTextCallback(text); text = ''; }
  $: { text = inputText }
</script>

<style>
  .card {
    border: 2px solid black;
    text-align: center;
  }

  .radical-wrap {
    padding: 20px;
    position: relative;
  }

  .input-wrap {
    padding: 10px;
    border-top: 2px solid black;
    background-color: var(--color);
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
  }

  .keyboard-icon {
    width: 60px;
    cursor: pointer;
  }

  input {
    background: none;
    color: white;
    outline: none;
    border: none;
    font-size: 24px;
    width: 180px;
    margin-left: 10px;
  }

  .keyboard {
    grid-column: 1 / 3;
    padding: 6px 10px;
    width: 400px;
  }
</style>

<svelte:window bind:innerWidth={width} />

<div class="card" style="--color: {color};">
  <div class="radical-wrap">
    <slot />
  </div>
  <div class="input-wrap">
    <input type="text" bind:value={text} onblur="this.focus()">
    {#if width > 640}
      <div class="keyboard-icon" on:click={() => { showKeyboard = !showKeyboard }}>
        <KeyboardIcon color={showKeyboard ? 'white' : 'black'} />
      </div>
      {#if showKeyboard}
        <div class="keyboard">
          <Keyboard />
        </div>
      {/if}
    {/if}
  </div>
</div>
