(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(18),r=n.n(c),i=(n(27),n(8)),s=Object(o.createContext)(),a=n(1);var d,u,j,l=function(e){var t=e.children,n=Object(o.useState)(25),c=Object(i.a)(n,2),r=c[0],d=c[1],u=Object(o.useState)(!1),j=Object(i.a)(u,2),l=j[0],m=j[1],b=Object(o.useState)(5),p=Object(i.a)(b,2),h=p[0],O=p[1],x=Object(o.useState)(25),v=Object(i.a)(x,2),f={time:r,setTime:d,paused:l,setPaused:m,intervalTime:h,setIntervalTime:O,secondInput:v[0],setSecondInput:v[1]};return Object(a.jsx)(s.Provider,{value:f,children:t})},m=n(2),b=function(){return Object(o.useEffect)((function(){new Audio("https://www.soundjay.com/buttons/beep-01a.mp3").play()}),[]),Object(a.jsx)("h2",{children:"Fim da Atividade! Hora do Intervalo!"})},p=n(9),h=n(10),O=h.a.div(d||(d=Object(p.a)(["\n  flex-grow: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px;\n"]))),x=h.a.div(u||(u=Object(p.a)(["\n  flex-grow: 1;\n  background: white;\n  height: 10px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color:darkred;\n"]))),v=h.a.div(j||(j=Object(p.a)(["\n  height: 100%;\n  border-radius: 5px;\n  background: green;\n  box-shadow: 0 0 0.75em green;\n"]))),f=function(e){var t=e.progress;return Object(a.jsx)(O,{children:Object(a.jsx)(x,{children:Object(a.jsx)(v,{style:{width:"".concat(t,"%")}})})})},g=(n(17),n.p+"static/media/pomodoro.0ce5c56f.png"),T=function(){var e=Object(o.useContext)(s),t=e.time,n=e.setTime,c=e.paused,r=e.setPaused,i=e.intervalTime,d=e.setIntervalTime,u=e.secondInput,j=e.setSecondInput;Object(o.useEffect)((function(){var e=setInterval((function(){!c&&t>0&&n((function(e){return e-1})),!c&&0===t&&i>0&&d((function(e){return e-1})),c||0!==t||0!==i||n(u)}),1e3);return function(){clearInterval(e)}}));return Object(a.jsxs)("div",{className:"pomodoro-container",children:[Object(a.jsx)("h1",{children:"Cronometro - T\xe9cnica Pomodoro"}),Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{className:"pomodoro-img",src:g,alt:"pomodoro"})}),Object(a.jsx)("div",{children:0===t?Object(a.jsx)(b,{}):Object(a.jsxs)("div",{className:"activity-container",children:[Object(a.jsxs)("h1",{children:["Tempo de atividade: ",t," segundos "]}),Object(a.jsx)(f,{progress:t})]})}),Object(a.jsx)("div",{children:0===t&&Object(a.jsxs)("h2",{children:["Tempo de intervalo: ",i," segundos"]})}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("button",{onClick:function(){n(25),r(!1)},children:"Resetar"}),Object(a.jsx)("button",{onClick:function(){r((function(e){return!e}))},children:"Pausar"}),Object(a.jsx)("label",{htmlFor:"seconds",children:Object(a.jsx)("input",{type:"number",name:"seconds",placeholder:"Segundos",onChange:function(e){return j(e.target.value)}})}),Object(a.jsx)("button",{onClick:function(){return n(u)},children:"Novo tempo de atividade"})]})]})},w=n(6),C=function(){return Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)("h1",{children:"Desafio - Pomodoro"}),Object(a.jsx)("p",{children:"Bem vindos ao Teste T\xe9cnico de Henrique Z\xf3zimo para a VilaApps!"}),Object(a.jsx)("br",{}),Object(a.jsxs)("h3",{children:["A ",Object(a.jsx)("a",{href:"https://brasilescola.uol.com.br/dicas-de-estudo/tecnica-pomodoro-que-e-e-como-funciona.htm",target:"_blank",rel:"noreferrer",children:"T\xe9cnica Pomodoro"})," \xe9 um m\xe9todo de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A t\xe9cnica usa um cron\xf4metro para dividir o trabalho em intervalos, tradicionalmente de 25 minutos de dura\xe7\xe3o, separados por intervalos curtos - 5 minutos. Por\xe9m, buscando uma maior praticidade para esta p\xe1gina que \xe9 uma avalia\xe7\xe3o t\xe9cnica, os temporizadores estar\xe3o em segundos e n\xe3o em minutos. Ou seja, os 25 minutos de dura\xe7\xe3o ser\xe3o 25 segundos e os 5 minutos de intervalo ser\xe3o 5 segundos."]}),Object(a.jsx)(w.b,{to:"/pomodoro/chronometer",children:"Ligar cron\xf4metro"})]})};var I=function(){return Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/pomodoro",component:C}),Object(a.jsx)(m.a,{path:"/pomodoro/chronometer",component:T})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};r.a.render(Object(a.jsx)(l,{children:Object(a.jsx)(w.a,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.ce192cc6.chunk.js.map