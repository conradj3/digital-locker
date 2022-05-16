"use strict";(self.webpackChunkdigital_locker=self.webpackChunkdigital_locker||[]).push([[636],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,authors:["conrad"]},s="What is `unplanned` work?",u={unversionedId:"agile/address-unplanned-work",id:"agile/address-unplanned-work",title:"What is `unplanned` work?",description:"Unplanned work is any activity in the IT organization that can't be mapped to an authorized project, procedure or change request. Any service interruption, failed change, emergency change, or patch or security incident creates unplanned work.",source:"@site/docs/agile/address-unplanned-work.md",sourceDirName:"agile",slug:"/agile/address-unplanned-work",permalink:"/digital-locker/docs/agile/address-unplanned-work",draft:!1,editUrl:"https://github.com/conradj3/digital-locker/tree/main/docs/agile/address-unplanned-work.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,authors:["conrad"]},sidebar:"tutorialSidebar",previous:{title:"Types of work",permalink:"/digital-locker/docs/agile/types-of-work"},next:{title:"Create Mongodb Container",permalink:"/digital-locker/docs/mongodb/creating-a mongo-container"}},p={},c=[{value:"Tracking <code>unplanned</code> work",id:"tracking-unplanned-work",level:2},{value:"GitHub Laber",id:"github-laber",level:3},{value:"<strong>Source:</strong> <strong><em>.github/laber.yml</em></strong>",id:"source-githublaberyml",level:4},{value:"<strong>GitHub Action:</strong> <strong><em>.github/workflows/label.yml</em></strong>",id:"github-action-githubworkflowslabelyml",level:4},{value:"GitHub Project Labels",id:"github-project-labels",level:2},{value:"Azure DevOps",id:"azure-devops",level:2},{value:"Azure Boards Unplanned Tracking",id:"azure-boards-unplanned-tracking",level:3},{value:"How <code>unplanned</code> work can be managed",id:"how-unplanned-work-can-be-managed",level:2},{value:"How to keep <code>unplanned</code> work in check",id:"how-to-keep-unplanned-work-in-check",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-unplanned-work"},"What is ",(0,o.kt)("inlineCode",{parentName:"h1"},"unplanned")," work?"),(0,o.kt)("p",null,"Unplanned work is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"any activity in the IT organization that can't be mapped to an authorized project, procedure or change request")),". Any service interruption, failed change, emergency change, or patch or security incident creates unplanned work."),(0,o.kt)("h2",{id:"tracking-unplanned-work"},"Tracking ",(0,o.kt)("inlineCode",{parentName:"h2"},"unplanned")," work"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Labeling"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"tagging"))," is extremely important to track unplanned work.  Whether you are using ",(0,o.kt)("a",{parentName:"p",href:"https://www.github.com"},"GitHub"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.dev.azure.com"},"Azure DevOps")," or eithers its important that both infrastructure or software developers have a way of asssociating a request, change, or security incident."),(0,o.kt)("p",null,"There are many ways ",(0,o.kt)("inlineCode",{parentName:"p"},"unplanned")," work can show its face."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email"),(0,o.kt)("li",{parentName:"ul"},"Email Distributions Lists"),(0,o.kt)("li",{parentName:"ul"},"Chat Operations"),(0,o.kt)("li",{parentName:"ul"},"Phone"),(0,o.kt)("li",{parentName:"ul"},"Producer/Service owners avoiding work funnel")),(0,o.kt)("h3",{id:"github-laber"},"GitHub Laber"),(0,o.kt)("p",null,"A personal favorite for ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub")," is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/labeler"},"actions/laber"),".  There is a good set of instructions on how to set this up and it can automatically label ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Pull Requests"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Issues")),". Below is an ex"),(0,o.kt)("h4",{id:"source-githublaberyml"},(0,o.kt)("strong",{parentName:"h4"},"Source:")," ",(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("em",{parentName:"strong"},".github/laber.yml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add 'repo' label to any root file changes\nrepo:\n- '*'\n\n# Add 'source' label to any change to src files within the source dir EXCEPT for the docs sub-folder\nsource:\n- 'src/*'\n\n# Add 'blog` label to any change to *.js files as long as the `main.js` hasn't changed\nblog:\n- 'blog/*'\n\n# Add 'docs` label to any change to *.js files as long as the `main.js` hasn't changed\ndocs:\n- 'docs/*'\n")),(0,o.kt)("h4",{id:"github-action-githubworkflowslabelyml"},(0,o.kt)("strong",{parentName:"h4"},"GitHub Action:")," ",(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("em",{parentName:"strong"},".github/workflows/label.yml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# This workflow will triage pull requests and apply a label based on the\n# paths that are modified in the pull request.\n#\n# To use this workflow, you will need to set up a .github/labeler.yml\n# file with configuration.  For more information, see:\n# https://github.com/actions/labeler\n\nname: pr-labeler\non: [pull_request]\n\njobs:\n  label:\n\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      pull-requests: write\n\n    steps:\n    - uses: actions/labeler@v2\n      with:\n        repo-token: "${{ secrets.GITHUB_TOKEN }}"\n')),(0,o.kt)("h2",{id:"github-project-labels"},"GitHub Project Labels"),(0,o.kt)("p",null,"Equally important is having a set if using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Projects"))," is the use of labels that can be applied to cards which move across the Kanban lanes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Project Labels",src:n(3507).Z,width:"1907",height:"770"})),(0,o.kt)("h2",{id:"azure-devops"},"Azure DevOps"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Azure DevOps")," lacks this integration for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Pull Requests")),", it can be performed by some clever ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"REST API"))," work against if interested you can find more on this by using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/git/pull-request-labels?view=azure-devops-rest-6.0"},"Pull Docs - Azure DevOps | Request Labels"),"."),(0,o.kt)("h3",{id:"azure-boards-unplanned-tracking"},"Azure Boards Unplanned Tracking"),(0,o.kt)("p",null,"Much like ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure DevOps")," offers the same tagging within its boards.   Each board  is assigned an iteration and areapath.  Its important that product/servers owners explain to team members that if requests are coming in that they are tagged accordingly with ",(0,o.kt)("inlineCode",{parentName:"p"},"unplanned"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Azure DevOps")," boards has a advantage to ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub")," projects, this advantage is clever reporting mechanisms which can be dashboarded.  If your looking for a quick win on how to track unplanned work, I recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/previous-versions/azure/devops/report/sql-reports/unplanned-work?view=tfs-2017"},"Unplanned Work Report"),"."),(0,o.kt)("h2",{id:"how-unplanned-work-can-be-managed"},"How ",(0,o.kt)("inlineCode",{parentName:"h2"},"unplanned")," work can be managed"),(0,o.kt)("p",null,"It is extremely important, that Product/Server owners understand how to say ",(0,o.kt)("strong",{parentName:"p"},"No")," this is called ",(0,o.kt)("inlineCode",{parentName:"p"},"Prioritization"),".  Its obvious we by nature want to immediately help those in need but it detracts from your current sprint work.  Good communication between product/server owners can arrange and plan when the sideways work should be handled.  Keeping your teams on task."),(0,o.kt)("p",null,"Additionally, there are a capable other tactics that can be utilized:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Absorb")," - If you can bring it into the current sprint.  Produc/Server owners should typically budget time for the unexpected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Break Up/Carry")," - Split the work, take what capacity you can and carry the remaining to the next sprint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Substitute")," - Move an item from your current sprint out, and take on the unplanned work."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Buffer Zone")," - Leave capacity during sprint planning and bring in the work.")),(0,o.kt)("h2",{id:"how-to-keep-unplanned-work-in-check"},"How to keep ",(0,o.kt)("inlineCode",{parentName:"h2"},"unplanned")," work in check"),(0,o.kt)("p",null,"First and foremost, a plan is only good until the rubber meets the road.  Unfortunately, we cannot stop unplanned work.  But we can identify it and introduce automation, self-service which will greatly reduce the impact on your team.  While this is easily said, sometimes it is difficult to implement.  "),(0,o.kt)("p",null,"Additionally, identify members on your team that are leaders.  Don't ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"hail mary"))," your pull requests or code.  Demand the quality of code being produced meet required standards and enforce it.  This will build a team working in unison and know exactly what the requirements of a ",(0,o.kt)("inlineCode",{parentName:"p"},"user story")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"product backlog item")," item are."))}m.isMDXComponent=!0},3507:function(e,t,n){t.Z=n.p+"assets/images/gh-project-labels-e2ffddffca998137b61e0204bacf65b9.jpg"}}]);