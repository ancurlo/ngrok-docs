"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[50408],{82804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(51163),a=(n(59496),n(49613));const r={description:"Develop and test Orbit webhooks from localhost"},i="Orbit Webhooks",p={unversionedId:"integrations/orbit/webhooks",id:"integrations/orbit/webhooks",title:"Orbit Webhooks",description:"Develop and test Orbit webhooks from localhost",source:"@site/docs/integrations/orbit/webhooks.md",sourceDirName:"integrations/orbit",slug:"/integrations/orbit/webhooks",permalink:"/docs/integrations/orbit/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/orbit/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Orbit webhooks from localhost"},sidebar:"docs",previous:{title:"Orbit",permalink:"/docs/integrations/orbit/"},next:{title:"PagerDuty",permalink:"/docs/integrations/pagerduty/"}},l={},s=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Orbit",id:"setup-webhook",level:2},{value:"Run Webhooks with Orbit and ngrok",id:"run-webhooks-with-orbit-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:s},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"orbit-webhooks"},"Orbit Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate Orbit webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Orbit webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Orbit by using Webhooks.\nOrbit webhooks can be used to notify an external application whenever specific events occur in your Orbit account."),(0,a.kt)("p",null,"By integrating ngrok with Orbit, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test Orbit webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Orbit")," in real-time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay Orbit Webhook requests")," with a single click and without spending time reproducing events manually in your Orbit account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with Orbit validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Orbit).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Orbit"),(0,a.kt)("p",null,"To register a webhook on your Orbit account follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://app.orbit.love/"},"Orbit Home")," page and sign in using your Orbit account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Home")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Workspace Settings")," at the left menu and then click ",(0,a.kt)("strong",{parentName:"p"},"Webhooks"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," page, click ",(0,a.kt)("strong",{parentName:"p"},"+ New Webhook"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"New webhook")," page, enter a name in the ",(0,a.kt)("strong",{parentName:"p"},"Webhook Name")," field, select ",(0,a.kt)("strong",{parentName:"p"},"a new activity is added to a member")," in the ",(0,a.kt)("strong",{parentName:"p"},"Event Subscription")," field, and then enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,a.kt)("strong",{parentName:"p"},"Webhook URL")," field (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"orbit URL to Publish",src:n(14801).Z,width:"1218",height:"707"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create Webhook"),"."))),(0,a.kt)("h3",{id:"run-webhooks-with-orbit-and-ngrok"},"Run Webhooks with Orbit and ngrok"),(0,a.kt)("p",null,"Orbit sends different request body contents depending on the event that is being triggered."),(0,a.kt)("p",null,"You can trigger new calls from Orbit to your application by following the instructions below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://app.orbit.love/"},"Orbit Home")," page, sign in, click ",(0,a.kt)("strong",{parentName:"p"},"Members")," at the left menu, and click one of your members.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Member")," popup, click ",(0,a.kt)("strong",{parentName:"p"},"Actions")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Add Activity"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Add activity")," popup, select an activity in the ",(0,a.kt)("strong",{parentName:"p"},"Activity Type")," field, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," in the ",(0,a.kt)("strong",{parentName:"p"},"Title")," field, and then click ",(0,a.kt)("strong",{parentName:"p"},"Submit"),"."))),(0,a.kt)("p",null,"Confirm your localhost app receives an event notification and logs both headers and body in the terminal."),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect Orbit's webhooks call, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by Orbit."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:n(53692).Z,width:"1073",height:"562"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Orbit. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Orbit.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"id")," field inside the body of the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your Orbit webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://app.orbit.love/"},"Orbit Home")," page, sign in, click ",(0,a.kt)("strong",{parentName:"p"},"Workspace Settings")," at the left menu, and then click ",(0,a.kt)("strong",{parentName:"p"},"Webhooks"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Action")," (represented by the three dots icon) for your webhook and click ",(0,a.kt)("strong",{parentName:"p"},"Update"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Update Webhook")," page, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"12345")," in the ",(0,a.kt)("strong",{parentName:"p"},"Webhook Secret")," field and click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your webhook secret}")," with the value from the previous step:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook orbit --verify-webhook-secret {your webhook secret}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access ",(0,a.kt)("a",{parentName:"p",href:"https://app.orbit.love/"},"Orbit Home")," page, sign in, and add a new activity to a member."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}u.isMDXComponent=!0},53692:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_introspection_orbit_webhooks-d18588483b6801030353b43e39000170.png"},14801:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_url_configuration_orbit-0785aba2ac3eb930d5193043c8cd7861.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);