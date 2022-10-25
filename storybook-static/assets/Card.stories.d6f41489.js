var l=Object.defineProperty;var a=(e,o)=>l(e,"name",{value:o,configurable:!0});import{b as d,j as r}from"./jsx-runtime.83dc6dec.js";import"./iframe.097d1da2.js";const s=a(({number:e,type:o})=>{let t=null;const n=["heart","diamond"].includes(o)?"text-red-600":"text-black";if(e===1&&(t="A"),e>10)switch(e){case 11:t="J";break;case 12:t="Q";break;case 13:t="K";break}return d("div",{className:"h-[500px] p-3 bg-white rounded-lg outline outline-1 w-96 flex flex-col justify-between",children:[r("div",{className:`${n} text-3xl`,children:t||e}),r("div",{className:"text-4xl flex-1 flex justify-center items-center gap-x-3",children:r("div",{className:"flex flex-wrap",children:Array.from(Array(e),(x,c)=>r("div",{className:`${o}`},c))})}),r("div",{className:`${n} text-3xl self-end`,children:t||e})]})},"Card"),i=s;s.__docgenInfo={description:"",methods:[],displayName:"Card"};const h={parameters:{storySource:{source:`import React from 'react';

import Card  from '../components/Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    number: 12,
    type: 'heart'
};

`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:45,line:13},startBody:{col:17,line:13},endBody:{col:45,line:13}}}}},title:"Example/Card",component:i},p=a(e=>r(i,{...e}),"Template"),m=p.bind({});m.args={number:12,type:"heart"};const u=["Primary"];export{m as Primary,u as __namedExportsOrder,h as default};
//# sourceMappingURL=Card.stories.d6f41489.js.map
