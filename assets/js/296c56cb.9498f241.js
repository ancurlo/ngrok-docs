"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[8769],{6470:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(59496),o=n(13352),r=n(7426);function i(e){let{name:t}=e;const n=(0,r.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),i=[];let s=[];for(let r=0;r<n.docs.length;r++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[r];s.push(a.createElement(o.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==s.length||n.docs.length<2||r==n.docs.length-1)&&(i.push(a.createElement("div",{className:"ngrok--cards ngrok--cards-row"},s)),s=[])}return a.createElement(a.Fragment,null,i)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(59496),o=n(45924),r=n(62515);function i(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return a.createElement("h4",{className:"fw-600"},n);case"xl":return a.createElement("h2",{className:"fw-600"},n);default:return a.createElement("h3",{className:"fw-600"},n)}}function s(e){let{size:t,title:n,icon:o}=e;return o?a.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&a.createElement(i,{size:t,title:n}),o):n?a.createElement("div",{className:"ngrok--card-heading"},a.createElement(i,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:i="",title:c,img:l="",icon:m=!1,description:d=!1,descriptionLink:g=!1}=e;i=i.toLowerCase();let u=(0,o.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==i,"ngrok--card-lg":"lg"==i,"ngrok--card-xl":"xl"==i});return a.createElement(r.Z,{to:t},a.createElement("div",{className:u},l&&a.createElement("img",{src:l}),a.createElement(s,{size:i,title:c,icon:m}),d&&a.createElement("p",null,d),g&&a.createElement("a",null,g)))}},55622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(51163),o=(n(59496),n(49613)),r=n(6470);const i={name:"amazon",title:"Amazon Integration Hub",sidebar_label:"Amazon",description:"Integrate with Amazon.com\n"},s=void 0,c={unversionedId:"integrations/amazon/index",id:"integrations/amazon/index",title:"Amazon Integration Hub",description:"Integrate with Amazon.com\n",source:"@site/docs/integrations/amazon/index.mdx",sourceDirName:"integrations/amazon",slug:"/integrations/amazon/",permalink:"/docs/integrations/amazon/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/amazon/index.mdx",tags:[],version:"current",lastUpdatedBy:"Alan Shreve",lastUpdatedAt:1693163609,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{name:"amazon",title:"Amazon Integration Hub",sidebar_label:"Amazon",description:"Integrate with Amazon.com\n"},sidebar:"docs",previous:{title:"Airship Webhooks",permalink:"/docs/integrations/airship/webhooks"},next:{title:"Amazon OAuth",permalink:"/docs/integrations/amazon/oauth"}},l={},m=[],d={toc:m},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,i.description),(0,o.kt)(r.Z,{name:i.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);