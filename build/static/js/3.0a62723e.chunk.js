(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{41:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(8),i=a(1),c=[{id:1,bio:"If you\u2019re comfortable, you\u2019re not growing. As someone who wishes to apply solutions at scale and with meaningful impact, I want to gain perspectives on alternate pathways in working in a corporate world. I am 22 this year, committed to improving my communication, leadership and technical skill in technology/negotiation and in broadening my perspective. Motivated individual with a fueled passion in technology, entrepreneurship and psychology to help solve problems in the world."},{id:2,bio:""}],s=a.p+"static/media/Razer.e761964a.png",n=a.p+"static/media/GovTech.ac718298.gif",o=a.p+"static/media/ABI Research.8fb05942.png",l=a.p+"static/media/JDI.a654f8d7.png",d=a.p+"static/media/WOW.f34c86ac.png",m=a.p+"static/media/FinTechSOC.ca04cc22.png",g=a.p+"static/media/GDSC.1c9c8c86.png",j=[{id:1,title:"Razer",img:s,link:"https://www.razer.com/"},{id:2,title:"GovTech Singapore",img:n,link:"https://www.tech.gov.sg/"},{id:3,title:"ABI Research",img:o,link:"https://www.abiresearch.com/"},{id:4,title:"JDI",img:l,link:"https://jdi.group/"},{id:5,title:"Walkers On Wheels NGO",img:d,link:"https://www.walkersonwheels.org/"},{id:6,title:"GDSC",img:g,link:"https://dsc.comp.nus.edu.sg/"},{id:7,title:"FintechSOC",img:m,link:"https://fintechsociety.comp.nus.edu.sg/"}],p=a(2),x=Object(i.createContext)(),u=function(e){var t=e.children,a=Object(i.useState)(c),s=Object(r.a)(a,2),n=s[0],o=s[1],l=Object(i.useState)(j),d=Object(r.a)(l,2),m=d[0],g=d[1];return Object(p.jsx)(x.Provider,{value:{aboutMe:n,setAboutMe:o,clientsHeading:"Some of the companies I have worked for",clientsData:m,setClientsData:g},children:t})};t.b=x},42:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-1.dbc2198e.jpg"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-2.f0108702.jpg"},44:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-1.0aa0cb76.jpg"},45:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-2.a5aae786.jpg"},46:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-1.41def4d8.jpg"},47:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-2.d2891914.jpg"},48:function(e,t,a){"use strict";var r=a(1),i=a(41),c=a(2),s=function(e){var t=e.title,a=e.image,r=e.link;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("a",{href:r,children:Object(c.jsx)("img",{src:a,className:"w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer",alt:t})})})};t.a=function(){var e=Object(r.useContext)(i.b),t=e.clientsData,a=e.clientsHeading;return Object(c.jsxs)("div",{className:"mt-10 sm:mt-20",children:[Object(c.jsx)("p",{className:"font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light",children:a}),Object(c.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2",children:t.map((function(e){return Object(c.jsx)(s,{title:e.title,image:e.img,link:e.link},e.id)}))})]})}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return p}));var r=a(8),i=a(1),c=a(42),s=a(43),n=a(44),o=a(45),l=a(46),d=a(47),m=[{id:1,title:"Surf | ChatGPT for Smart Contracts",category:"Web Application",img:s.a,ProjectHeader:{title:"Surf | ChatGPT for Smart Contracts",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Military Duty Scheduler",category:"Web Application",img:o.a},{id:3,title:"Project Management UI",category:"UI/UX Design",img:l.a},{id:4,title:"Forex Trading",category:"Finance",img:d.a},{id:5,title:"GovTech Internship",category:"Web Application",img:n.a},{id:6,title:"FinTech Month Hacakthon 2023",category:"Web Application",img:c.a},{id:7,title:"Walkers On Wheels NGO",category:"Welfare",img:c.a}],g=a(2),j=Object(i.createContext)(),p=function(e){var t=Object(i.useState)(m),a=Object(r.a)(t,2),c=a[0],s=a[1],n=Object(i.useState)(""),o=Object(r.a)(n,2),l=o[0],d=o[1],p=Object(i.useState)(""),x=Object(r.a)(p,2),u=x[0],b=x[1],h=c.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),y=c.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(u)}));return Object(g.jsx)(j.Provider,{value:{projects:c,setProjects:s,searchProject:l,setSearchProject:d,searchProjectsByTitle:h,selectProject:u,setSelectProject:b,selectProjectsByCategory:y},children:e.children})}},50:function(e,t,a){"use strict";var r=a(1),i=a(6),c=a(39),s=a(13),n=a(2),o=function(e){var t=e.title,a=e.category,r=e.image;return Object(n.jsx)(c.a.div,{whileHover:{scale:1.1},initial:{opacity:0},animate:{opacity:1,delay:0},drag:!0,whiledrag:{scale:1.5},transition:{ease:"easeInOut",duration:.2,delay:0},children:Object(n.jsx)(s.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(49),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(r.useContext)(l.a),t=e.projects,a=e.searchProject,c=e.setSearchProject,s=e.searchProjectsByTitle,d=e.selectProject,g=e.setSelectProject,j=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){c(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:g})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?j.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):a?s.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):t.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)}))})]})}},58:function(e,t,a){"use strict";a.r(t);var r=a(13),i=a(8),c=a(23),s=a(6),n=(a.p,a.p,a.p+"static/media/Head_Product_EthanWei.665eda0f.jpeg"),o=a(39),l=a(2),d=function(){var e=Object(c.a)();Object(i.a)(e,1)[0];return Object(l.jsxs)("div",{children:[Object(l.jsx)("script",{src:"../../script.js",defer:!0}),Object(l.jsxs)(o.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(l.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(l.jsx)(o.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Ethan"}),Object(l.jsxs)(o.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:["Computer Science + Psychology, loves football, loves piano, loves dogs, loves reading, and loves your mum. \xa0",Object(l.jsx)("span",{class:".variabletext"})]}),Object(l.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(l.jsxs)("a",{download:"Resume 2023 Ethan Wei.pdf",href:"/files/Resume 2023 Ethan Wei.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(l.jsx)(s.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(l.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(l.jsx)(o.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(l.jsx)("img",{src:n,alt:"Developer"})})]})]})},m=a(48),g=a(41),j=a(50),p=a(49),x=a(18);t.default=function(){return Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)(d,{}),Object(l.jsx)(g.a,{children:Object(l.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(l.jsx)(m.a,{})})}),Object(l.jsx)(p.b,{children:Object(l.jsx)(j.a,{})}),Object(l.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(l.jsx)(r.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(l.jsx)(x.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.0a62723e.chunk.js.map