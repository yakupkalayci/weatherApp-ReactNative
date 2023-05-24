import * as React from 'react';
import { Svg, Circle, G, Path } from 'react-native-svg';

function SvgUk(props) {
  return (
    <Svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
      <Circle cx={256} cy={256} fill="#f0f0f0" r={256} />
      <G fill="#0052b4">
        <Path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z" />
      </G>
      <G fill="#d80027">
        <Path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
        <Path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803z" />
      </G>
    </Svg>
  );
}

export default SvgUk;
