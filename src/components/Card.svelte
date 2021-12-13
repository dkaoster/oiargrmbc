<script>
  import { onMount } from 'svelte';
  import KeyboardIcon from './svg/KeyboardIcon.svelte';
  import Keyboard from './svg/KeyboardLayout.svelte';

  export let inputText;
  export let inputTextCallback;
  export let color = '#1dd1a1';

  let text = '';
  let width;
  let input;
  let showKeyboard = false;

  $: { inputTextCallback(text); text = ''; }
  $: { text = inputText }

  const onKeypress = (key) => {
    text += key;
    input.focus();
  };
  const globalKeypress = (evt) => onKeypress(evt.key);

  onMount(() => setTimeout(() => input.focus(), 500));
</script>

<style>
  .card {
    border: 2px solid black;
    text-align: center;
  }

  .radical-wrap {
    padding: 20px 60px;
    min-width: 320px;
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
    font-size: 18px;
    width: 100%;
    margin-left: 10px;
  }

  .keyboard {
    grid-column: 1 / 3;
    padding: 6px 10px;
    width: 400px;
  }
</style>

<svelte:window bind:innerWidth={width} on:keypress={globalKeypress} />

<div class="card" style="--color: {color};">
  <div class="radical-wrap">
    <slot />
  </div>
  <div class="input-wrap">
    <input type="text" size="15" bind:value={text} bind:this={input} on:keypress|stopPropagation>
    {#if width > 640}
      <div class="keyboard-icon" on:click={() => { showKeyboard = !showKeyboard }}>
        <KeyboardIcon color={showKeyboard ? 'white' : 'black'} />
      </div>
      {#if showKeyboard}
        <div class="keyboard">
          <Keyboard {onKeypress} />
        </div>
      {/if}
    {/if}
  </div>
</div>
