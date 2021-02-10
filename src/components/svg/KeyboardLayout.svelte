<script>
  import CJMap from '../../cjMap';

  export let onKeypress;

  const handleClick = (evt) => {
    const letter = evt.target.parentElement.getAttribute('data-letter');
    if (letter) onKeypress(letter);
  };
</script>

<svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 196.06" width="100%" on:click={handleClick}>
  <defs>
    <style>
      .cls-1 {
        fill: white;
        fill-opacity: 0.6;
        cursor: pointer;
      }

      .cls-1:hover, .cls-2:hover, .cls-3:hover, .cls-4:hover {
        fill-opacity: 1;
      }

      .cls-2, .cls-3, .cls-4 {
        fill: #DDD;
        fill-opacity: 0.6;
      }

      .letter-label {
        font-size: 24px;
        text-anchor: middle;
        dominant-baseline: middle;
        pointer-events: none;
      }
    </style>
  </defs>
  <g id="layer1">
    <rect id="rect2987" class="cls-1" width="36" height="36" rx="7"/>
    <g id="use3757" data-letter="W">
      <rect id="rect2987-2" data-name="rect2987" class="cls-1" x="100" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={100 + 18} y={40 + 20}>{CJMap.W}</text>
    </g>
    <g id="use3759" data-letter="E">
      <rect id="rect2987-3" data-name="rect2987" class="cls-1" x="140" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={140 + 18} y={40 + 20}>{CJMap.E}</text>
    </g>
    <g id="use3761" data-letter="R">
      <rect id="rect2987-4" data-name="rect2987" class="cls-1" x="180" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={180 + 18} y={40 + 20}>{CJMap.R}</text>
    </g>
    <g id="use3763" data-letter="T">
      <rect id="rect2987-5" data-name="rect2987" class="cls-1" x="220" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={220 + 18} y={40 + 20}>{CJMap.T}</text>
    </g>
    <g id="use3765" data-letter="Y">
      <rect id="rect2987-6" data-name="rect2987" class="cls-1" x="260" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={260 + 18} y={40 + 20}>{CJMap.Y}</text>
    </g>
    <g id="use3767" data-letter="U">
      <rect id="rect2987-7" data-name="rect2987" class="cls-1" x="300" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={300 + 18} y={40 + 20}>{CJMap.U}</text>
    </g>
    <g id="use3769" data-letter="I">
      <rect id="rect2987-8" data-name="rect2987" class="cls-1" x="340" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={340 + 18} y={40 + 20}>{CJMap.I}</text>
    </g>
    <g id="use3771" data-letter="O">
      <rect id="rect2987-9" data-name="rect2987" class="cls-1" x="380" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={380 + 18} y={40 + 20}>{CJMap.O}</text>
    </g>
    <g id="use3773" data-letter="P">
      <rect id="rect2987-10" data-name="rect2987" class="cls-1" x="420" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={420 + 18} y={40 + 20}>{CJMap.P}</text>
    </g>
    <g id="use3775">
      <rect id="rect2987-11" data-name="rect2987" class="cls-1" x="460" y="40" width="36" height="36" rx="7"/>
    </g>
    <g id="use3777">
      <rect id="rect2987-12" data-name="rect2987" class="cls-1" x="500" y="40" width="36" height="36" rx="7"/>
    </g>
    <g id="use3779" data-letter="A">
      <rect id="rect2987-13" data-name="rect2987" class="cls-1" x="70" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={70 + 18} y={80 + 20}>{CJMap.A}</text>
    </g>
    <g id="use3781" data-letter="S">
      <rect id="rect2987-14" data-name="rect2987" class="cls-1" x="110" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={110 + 18} y={80 + 20}>{CJMap.S}</text>
    </g>
    <g id="use3783" data-letter="D">
      <rect id="rect2987-15" data-name="rect2987" class="cls-1" x="150" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={150 + 18} y={80 + 20}>{CJMap.D}</text>
    </g>
    <g id="use3785" data-letter="F">
      <rect id="rect2987-16" data-name="rect2987" class="cls-1" x="190" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={190 + 18} y={80 + 20}>{CJMap.F}</text>
    </g>
    <g id="use3787" data-letter="G">
      <rect id="rect2987-17" data-name="rect2987" class="cls-1" x="230" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={230 + 18} y={80 + 20}>{CJMap.G}</text>
    </g>
    <g id="use3789" data-letter="H">
      <rect id="rect2987-18" data-name="rect2987" class="cls-1" x="270" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={270 + 18} y={80 + 20}>{CJMap.H}</text>
    </g>
    <g id="use3791" data-letter="J">
      <rect id="rect2987-19" data-name="rect2987" class="cls-1" x="310" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={310 + 18} y={80 + 20}>{CJMap.J}</text>
    </g>
    <g id="use3793" data-letter="K">
      <rect id="rect2987-20" data-name="rect2987" class="cls-1" x="350" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={350 + 18} y={80 + 20}>{CJMap.K}</text>
    </g>
    <g id="use3795" data-letter="L">
      <rect id="rect2987-21" data-name="rect2987" class="cls-1" x="390" y="80" width="36" height="36" rx="7"/>
      <text class="letter-label" x={390 + 18} y={80 + 20}>{CJMap.L}</text>
    </g>
    <g id="use3797">
      <rect id="rect2987-22" data-name="rect2987" class="cls-1" x="430" y="80" width="36" height="36" rx="7"/>
    </g>
    <g id="use3799">
      <rect id="rect2987-23" data-name="rect2987" class="cls-1" x="470" y="80" width="36" height="36" rx="7"/>
    </g>
    <g id="use3803">
      <rect id="rect2987-24" data-name="rect2987" class="cls-1" x="90" y="120" width="36" height="36" rx="7"/>
    </g>
    <g id="use3805" data-letter="X">
      <rect id="rect2987-25" data-name="rect2987" class="cls-1" x="130" y="120" width="36" height="36" rx="7"/>
      <text class="letter-label" x={130 + 18} y={120 + 20}>{CJMap.X}</text>
    </g>
    <g id="use3807" data-letter="C">
      <rect id="rect2987-26" data-name="rect2987" class="cls-1" x="170" y="120" width="36" height="36" rx="7"/>
      <text class="letter-label" x={170 + 18} y={120 + 20}>{CJMap.C}</text>
    </g>
    <g id="use3809" data-letter="V">
      <rect id="rect2987-27" data-name="rect2987" class="cls-1" x="210" y="120" width="36" height="36" rx="7"/>
      <text class="letter-label" x={210 + 18} y={120 + 20}>{CJMap.V}</text>
    </g>
    <g id="use3811" data-letter="B">
      <rect id="rect2987-28" data-name="rect2987" class="cls-1" x="250" y="120" width="36" height="36" rx="7"/>
      <text class="letter-label" x={250 + 18} y={120 + 20}>{CJMap.B}</text>
    </g>
    <g id="use3813" data-letter="N">
      <rect id="rect2987-29" data-name="rect2987" class="cls-1" x="290" y="120" width="36" height="36" rx="7"/>
      <text class="letter-label" x={290 + 18} y={120 + 20}>{CJMap.N}</text>
    </g>
    <g id="use3815" data-letter="M">
      <rect id="rect2987-30" data-name="rect2987" class="cls-1" x="330" y="120" width="36" height="36" rx="7"/>
      <text class="letter-label" x={330 + 18} y={120 + 20}>{CJMap.M}</text>
    </g>
    <g id="use3817">
      <rect id="rect2987-31" data-name="rect2987" class="cls-1" x="370" y="120" width="36" height="36" rx="7"/>
    </g>
    <g id="use3819">
      <rect id="rect2987-32" data-name="rect2987" class="cls-1" x="410" y="120" width="36" height="36" rx="7"/>
    </g>
    <g id="use3821">
      <rect id="rect2987-33" data-name="rect2987" class="cls-1" x="450" y="120" width="36" height="36" rx="7"/>
    </g>
    <g id="use3825">
      <rect id="rect2987-34" data-name="rect2987" class="cls-1" x="40" width="36" height="36" rx="7"/>
    </g>
    <g id="use3827">
      <rect id="rect2987-35" data-name="rect2987" class="cls-1" x="80" width="36" height="36" rx="7"/>
    </g>
    <g id="use3829">
      <rect id="rect2987-36" data-name="rect2987" class="cls-1" x="120" width="36" height="36" rx="7"/>
    </g>
    <g id="use3831">
      <rect id="rect2987-37" data-name="rect2987" class="cls-1" x="160" width="36" height="36" rx="7"/>
    </g>
    <g id="use3833">
      <rect id="rect2987-38" data-name="rect2987" class="cls-1" x="200" width="36" height="36" rx="7"/>
    </g>
    <g id="use3835">
      <rect id="rect2987-39" data-name="rect2987" class="cls-1" x="240" width="36" height="36" rx="7"/>
    </g>
    <g id="use3837">
      <rect id="rect2987-40" data-name="rect2987" class="cls-1" x="280" width="36" height="36" rx="7"/>
    </g>
    <g id="use3839">
      <rect id="rect2987-41" data-name="rect2987" class="cls-1" x="320" width="36" height="36" rx="7"/>
    </g>
    <g id="use3841">
      <rect id="rect2987-42" data-name="rect2987" class="cls-1" x="360" width="36" height="36" rx="7"/>
    </g>
    <g id="use3843">
      <rect id="rect2987-43" data-name="rect2987" class="cls-1" x="400" width="36" height="36" rx="7"/>
    </g>
    <g id="use3847">
      <rect id="rect2987-44" data-name="rect2987" class="cls-1" x="440" width="36" height="36" rx="7"/>
    </g>
    <g id="use3849">
      <rect id="rect2987-45" data-name="rect2987" class="cls-1" x="480" width="36" height="36" rx="7"/>
    </g>
    <g id="use3853" data-letter="Q">
      <rect id="rect2987-46" data-name="rect2987" class="cls-1" x="60" y="40" width="36" height="36" rx="7"/>
      <text class="letter-label" x={60 + 18} y={40 + 20}>{CJMap.Q}</text>
    </g>
    <rect id="rect3924" class="cls-2" y="80" width="66" height="36" rx="7"/>
    <rect id="rect4074" class="cls-2" y="40" width="56" height="36" rx="7"/>
    <g id="use4373">
      <rect id="rect4074-2" data-name="rect4074" class="cls-2" y="160" width="56" height="36" rx="7"/>
    </g>
    <g id="use4375">
      <rect id="rect4074-3" data-name="rect4074" class="cls-2" x="100" y="160" width="56" height="36" rx="7"/>
    </g>
    <g id="use4377">
      <rect id="rect4074-4" data-name="rect4074" class="cls-2" x="540" y="160" width="56" height="36" rx="7"/>
    </g>
    <g id="use4379">
      <rect id="rect4074-5" data-name="rect4074" class="cls-2" x="440" y="160.06" width="56" height="36" rx="7"/>
    </g>
    <g data-letter=" ">
      <rect id="use3907" class="cls-1" x="160" y="160" width="275" height="36" rx="7" />
    </g>
  </g>
  <g id="g3130">
    <rect id="rect3132" class="cls-3" x="540" y="40" width="56" height="36" rx="7"/>
    <rect id="rect3134" class="cls-4" y="120" width="86" height="36" rx="7"/>
    <rect id="rect3136" class="cls-4" x="510" y="80" width="86" height="36" rx="7"/>
    <rect id="rect3911" class="cls-4" x="490" y="120" width="106" height="36" rx="7"/>
    <rect id="rect4530" class="cls-4" x="520" width="76" height="36" rx="7"/>
  </g>
</svg>
