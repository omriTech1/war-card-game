var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{b as t,j as n}from"./jsx-runtime.83dc6dec.js";import"./iframe.097d1da2.js";const s=r(({score:e=0,name:o})=>t("div",{className:"flex gap-x-4",children:[n("div",{className:"outline outline-2 w-fit px-5 py-1 font-mono",children:e}),t("span",{children:[o," "]})]}),"ScoreTicker"),c=s;s.__docgenInfo={description:"",methods:[],displayName:"ScoreTicker",props:{score:{defaultValue:{value:"0",computed:!1},required:!1}}};const u={parameters:{storySource:{source:`import React from 'react';

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
};`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:52,line:13},startBody:{col:17,line:13},endBody:{col:52,line:13}}}}},title:"Example/ScoreTicker",component:c},a=r(e=>n(c,{...e}),"Template"),l=a.bind({});l.args={score:100,name:"\u05E9\u05DE\u05E2\u05D5\u05DF"};const g=["Primary"];export{l as Primary,g as __namedExportsOrder,u as default};
//# sourceMappingURL=ScoreTicker.stories.6883e633.js.map
