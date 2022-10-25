var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{b as n,j as c}from"./jsx-runtime.df9c02e4.js";import{p as s}from"./index.babe82e5.js";import"./iframe.62dca9d5.js";const r=t(({score:e,name:o})=>n("div",{className:"flex gap-x-4",children:[c("div",{className:"w-fit px-5 py-1 font-mono outline outline-2",children:e}),n("span",{children:[o," "]})]}),"ScoreTicker"),i=r;r.defaultProps={score:0};r.propTypes={score:s.exports.PropTypes.number,name:s.exports.PropTypes.string};r.__docgenInfo={description:"",methods:[],displayName:"ScoreTicker",props:{score:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""}}};const g={parameters:{storySource:{source:`import React from 'react';

import ScoreTicker from '../components/ScoreTicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ScoreTicker',
  component: ScoreTicker,

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ScoreTicker {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    score: 100,
    name: '\u05E9\u05DE\u05E2\u05D5\u05DF'
};`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:52,line:13},startBody:{col:17,line:13},endBody:{col:52,line:13}}}}},title:"Example/ScoreTicker",component:i},p=t(e=>c(i,{...e}),"Template"),m=p.bind({});m.args={score:100,name:"\u05E9\u05DE\u05E2\u05D5\u05DF"};const f=["Primary"];export{m as Primary,f as __namedExportsOrder,g as default};
//# sourceMappingURL=ScoreTicker.stories.8b4ac752.js.map
