"use strict";(self.webpackChunkdigital_locker=self.webpackChunkdigital_locker||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Tutorial Intro",u={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/conradj3/digital-locker/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Types of work",permalink:"/docs/agile/types-of-work"},next:{title:"Create Mongodb Container",permalink:"/docs/mongodb/creating-a mongo-container"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Start your site",id:"start-your-site",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,a.kt)("p",null,"Or ",(0,a.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,a.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,a.kt)("p",null,"Generate a new Docusaurus site using the ",(0,a.kt)("strong",{parentName:"p"},"classic template"),"."),(0,a.kt)("p",null,"The classic template will automatically be added to your project after you run the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n")),(0,a.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,a.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,a.kt)("h2",{id:"start-your-site"},"Start your site"),(0,a.kt)("p",null,"Run the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," (this page) and edit some lines: the site ",(0,a.kt)("strong",{parentName:"p"},"reloads automatically")," and displays your changes."))}m.isMDXComponent=!0}}]);