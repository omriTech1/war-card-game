var p=Object.defineProperty;var o=(e,t)=>p(e,"name",{value:t,configurable:!0});import{r as i,b as m,j as r}from"./jsx-runtime.df9c02e4.js";import"./index.08481e5c.js";import{p as l}from"./index.babe82e5.js";import"./iframe.62dca9d5.js";const s=o(({number:e,type:t})=>{const a=i.exports.useMemo(()=>["heart","diamond"].includes(t)?"text-red-600":"text-black",[t]),n=i.exports.useMemo(()=>{if(e===1)return"A";if(e>10)switch(e){case 11:return"J";case 12:return"Q";case 13:return"K"}else return e},[e]);return m("div",{className:"flex h-[500px] w-96 flex-col justify-between rounded-lg bg-white p-3 outline outline-1",children:[r("div",{className:`${a} text-3xl`,children:n}),r("div",{className:"flex flex-1 items-center justify-center gap-x-3 text-4xl",children:r("div",{className:"flex flex-wrap",children:Array.from(Array(e),(f,d)=>r("div",{className:`${t}`},d))})}),r("div",{className:`${a} self-end text-3xl`,children:n})]})},"Card"),c=s;s.propTypes={number:l.exports.PropTypes.number,type:l.exports.PropTypes.oneOf(["heart","diamond","club","spade"])};s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{number:{type:{name:"number"},required:!1,description:""},type:{type:{name:"enum",value:[{value:"'heart'",computed:!1},{value:"'diamond'",computed:!1},{value:"'club'",computed:!1},{value:"'spade'",computed:!1}]},required:!1,description:""}}};const C={parameters:{storySource:{source:`import React from 'react';

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

`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:45,line:13},startBody:{col:17,line:13},endBody:{col:45,line:13}}}}},title:"Example/Card",component:c},u=o(e=>r(c,{...e}),"Template"),x=u.bind({});x.args={number:12,type:"heart"};const j=["Primary"];export{x as Primary,j as __namedExportsOrder,C as default};
//# sourceMappingURL=Card.stories.a9e0197a.js.map
