(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{41:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(8),i=a(1),c=[{id:1,bio:"If you\u2019re comfortable, you\u2019re not growing. As someone who wishes to apply solutions at scale and with meaningful impact, I want to gain perspectives on alternate pathways in working in a corporate world. I am 22 this year, committed to improving my communication, leadership and technical skill in technology/negotiation and in broadening my perspective. Motivated individual with a fueled passion in technology, entrepreneurship and psychology to help solve problems in the world."},{id:2,bio:""}],n=a.p+"static/media/Razer.e761964a.png",s=a.p+"static/media/GovTech.ac718298.gif",o=a.p+"static/media/ABI Research.8fb05942.png",l=a.p+"static/media/JDI.283041a2.png",d=a.p+"static/media/WOW.f34c86ac.png",m=a.p+"static/media/FinTechSOC.38f8f339.png",g=a.p+"static/media/GDSC.1c9c8c86.png",u=[{id:1,title:"Razer",img:n,link:"https://www.razer.com/"},{id:2,title:"GovTech Singapore",img:s,link:"https://www.tech.gov.sg/"},{id:3,title:"ABI Research",img:o,link:"https://www.abiresearch.com/"},{id:4,title:"JDI",img:l,link:"https://jdi.group/"},{id:5,title:"Walkers On Wheels NGO",img:d,link:"https://www.walkersonwheels.org/"},{id:6,title:"GDSC",img:g,link:"https://dsc.comp.nus.edu.sg/"},{id:7,title:"FintechSOC",img:m,link:"https://fintechsociety.comp.nus.edu.sg/"}],j=a(2),p=Object(i.createContext)(),b=function(e){var t=e.children,a=Object(i.useState)(c),n=Object(r.a)(a,2),s=n[0],o=n[1],l=Object(i.useState)(u),d=Object(r.a)(l,2),m=d[0],g=d[1];return Object(j.jsx)(p.Provider,{value:{aboutMe:s,setAboutMe:o,clientsHeading:"Some of the companies I have worked for",clientsData:m,setClientsData:g},children:t})};t.b=p},42:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-1.dbc2198e.jpg"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-2.f0108702.jpg"},44:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-1.0aa0cb76.jpg"},45:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-2.a5aae786.jpg"},46:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-1.41def4d8.jpg"},47:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-2.d2891914.jpg"},48:function(e,t,a){"use strict";var r=a(1),i=a(41),c=a(2),n=function(e){var t=e.title,a=e.image,r=e.link;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("a",{href:r,children:Object(c.jsx)("img",{src:a,className:"w-64 py-5 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer",alt:t})})})};t.a=function(){var e=Object(r.useContext)(i.b),t=e.clientsData,a=e.clientsHeading;return Object(c.jsxs)("div",{className:"mt-10 sm:mt-20",children:[Object(c.jsx)("p",{className:"font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light",children:a}),Object(c.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2",children:t.map((function(e){return Object(c.jsx)(n,{title:e.title,image:e.img,link:e.link},e.id)}))})]})}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(8),i=a(1),c=a(42),n=a(43),s=a(44),o=a(45),l=a(46),d=a(47),m=[{id:1,title:"Surf | ChatGPT for Smart Contracts",category:"Web Application",img:n.a,ProjectHeader:{title:"Surf | ChatGPT for Smart Contracts",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Military Duty Scheduler",category:"Web Application",img:o.a},{id:3,title:"Project Management UI",category:"UI/UX Design",img:l.a},{id:4,title:"Forex Trading",category:"Finance",img:d.a},{id:5,title:"GovTech Internship",category:"Web Application",img:s.a},{id:6,title:"FinTech Month Hacakthon 2023",category:"Web Application",img:c.a},{id:7,title:"Walkers On Wheels NGO",category:"Welfare",img:c.a}],g=a(2),u=Object(i.createContext)(),j=function(e){var t=Object(i.useState)(m),a=Object(r.a)(t,2),c=a[0],n=a[1],s=Object(i.useState)(""),o=Object(r.a)(s,2),l=o[0],d=o[1],j=Object(i.useState)(""),p=Object(r.a)(j,2),b=p[0],x=p[1],h=c.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),y=c.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(b)}));return Object(g.jsx)(u.Provider,{value:{projects:c,setProjects:n,searchProject:l,setSearchProject:d,searchProjectsByTitle:h,selectProject:b,setSelectProject:x,selectProjectsByCategory:y},children:e.children})}},50:function(e,t,a){"use strict";var r=a(1),i=a(6),c=a(39),n=a(13),s=a(2),o=function(e){var t=e.title,a=e.category,r=e.image;return Object(s.jsx)(c.a.div,{whileHover:{scale:1.1},initial:{opacity:0},animate:{opacity:1,delay:0},drag:!0,whiledrag:{scale:1.5},transition:{ease:"easeInOut",duration:.2,delay:0},children:Object(s.jsx)(n.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(s.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(s.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(s.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(49),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return Object(s.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(s.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(s.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(r.useContext)(l.a),t=e.projects,a=e.searchProject,c=e.setSearchProject,n=e.searchProjectsByTitle,d=e.selectProject,g=e.setSelectProject,u=e.selectProjectsByCategory;return Object(s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(s.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(s.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(s.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(s.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(s.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(s.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(s.jsx)("input",{onChange:function(e){c(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(s.jsx)(m,{setSelectProject:g})]})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?u.map((function(e){return Object(s.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):a?n.map((function(e){return Object(s.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):t.map((function(e){return Object(s.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)}))})]})}},56:function(e,t,a){"use strict";a.r(t);var r=a(13),i=a(8),c=a(23),n=a(6),s=(a.p,a.p,a.p+"static/media/Head_Product_EthanWei.665eda0f.jpeg"),o=a.p+"static/media/darkEthanWei.ad072f15.png",l=a(39);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=a(1),g=a(2);var u=function(){var e,t=["Computer Science + Psychology student at NUS \ud83e\udde0.","problem solver \ud83e\udd2f.","Head of Product at NUS Google Devloper Student Club \ud83e\udd96.","Co-Founder at Surf \ud83c\udfc4 (funded start up).","piano noob \ud83c\udfb9.","Hackathon winner \ud83c\udfc5."],a=Object(m.useState)(""),r=Object(i.a)(a,2),c=r[0],n=r[1],s=Object(m.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],j=0,p=function e(a,r){r<a.length?(n((function(e){return e+a.charAt(r)})),setTimeout((function(){e(a,r+1)}),50)):(setTimeout((function(){u(!0)}),1e3),setTimeout((function(){u(!1),n(""),e(t[j=j<t.length-1?j+1:0],0)}),2500))};return Object(m.useEffect)((function(){p(t[0],0)}),[]),Object(g.jsx)("div",(d(e={className:"variabletext ".concat(l?"highlight":"")},"className","dark:text-primary-light"),d(e,"children",c),e))},j=function(){var e=Object(c.a)(),t=Object(i.a)(e,1)[0],a="".concat("dark"===t?s:o,"?").concat((new Date).getTime());return Object(g.jsx)("div",{children:Object(g.jsxs)(l.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(g.jsxs)("div",{className:"w-full md:w-1/3 text-left m-9",children:[Object(g.jsx)(l.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:2.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Ethan"}),Object(g.jsxs)(l.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:["CS + Psych, loves football, loves piano, loves dogs, loves reading, and loves your mom.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"I am a \xa0",Object(g.jsx)(u,{})]}),Object(g.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(g.jsxs)("a",{download:"Resume 2023 Ethan Wei.pdf",href:"/files/Resume 2023 Ethan Wei.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(g.jsx)(n.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(g.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Snag my CV"})]})})]}),Object(g.jsx)(l.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 m-8",children:Object(g.jsx)("img",{src:a,alt:"Developer"},t)})]})})},p=a(48),b=a(41),x=a(50),h=a(49),y=a(18);t.default=function(){return Object(g.jsxs)("div",{className:"container mx-auto",children:[Object(g.jsx)(j,{}),Object(g.jsx)(b.a,{children:Object(g.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(g.jsx)(p.a,{})})}),Object(g.jsx)(h.b,{children:Object(g.jsx)(x.a,{})}),Object(g.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(g.jsx)(r.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(g.jsx)(y.a,{title:"More Projects"})})}),Object(g.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(g.jsx)("iframe",{title:"spotify-playlist",src:"https://open.spotify.com/embed/playlist/37i9dQZF1DWZdLqpoFOt65?utm_source=generator",width:"100%",height:"532",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})})]})}}}]);
//# sourceMappingURL=3.a00c169e.chunk.js.map