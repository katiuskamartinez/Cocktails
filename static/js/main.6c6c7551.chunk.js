(this["webpackJsonpnueva-app"]=this["webpackJsonpnueva-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(6),s=n.n(i),a=(n(11),n(3)),j=n(2),o=n(0),l=function(e){var t=e.msg;return Object(o.jsx)("div",{style:{padding:"1rem",marginBotton:"1rem",textAlign:"center",color:"#fff",fontWeight:"bold",backgroundColor:"#dc3545"},children:Object(o.jsx)("p",{children:t})})},d=(n(13),function(e){var t=e.drinkData;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"cars",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"car",children:[Object(o.jsx)("div",{className:"name",children:Object(o.jsx)("h2",{children:e.strDrink})}),Object(o.jsx)("img",{src:e.strDrinkThumb,alt:e.strDrinkThumb}),e.strCategory,Object(o.jsx)("h3",{children:"Ingredients:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:e.strIngredient1}),Object(o.jsx)("li",{children:e.strIngredient2}),Object(o.jsx)("li",{children:e.strIngredient3}),Object(o.jsx)("li",{children:e.strIngredient4}),Object(o.jsx)("li",{children:e.strIngredient5})]}),Object(o.jsx)("h3",{children:"Instructions:"}),Object(o.jsx)("p",{children:e.strInstructions})]},t)}))})})})}),u=function(e){var t=e.search,n=e.drinkData;return n?Object(o.jsx)(o.Fragment,{children:n.drinks?Object(o.jsx)(d,{drinkData:n.drinks}):Object(o.jsx)(l,{msg:"Error:No se encontr\xf3 ".concat(t.drink)})}):null},h=n(4),b={drink:""};var O=function(e){var t=e.handleSearch,n=Object(r.useState)(b),c=Object(a.a)(n,2),i=c[0],s=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.drink?(t(i),s(b)):alert("dato incompleto")},className:"form",children:[Object(o.jsx)("input",{type:"text",placeholder:"Cocktail",name:"drink",value:i.drink,onChange:function(e){s(Object(j.a)(Object(j.a)({},i),{},Object(h.a)({},e.target.name,e.target.value)))}}),Object(o.jsx)("button",{type:"submit",value:"enviar",children:"Search"})]})})},x=(n(14),function(){return Object(o.jsx)("div",{className:"lds-hourglass"})}),f=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(null),s=Object(a.a)(i,2),l=s[0],d=s[1],h=Object(r.useState)(!1),b=Object(a.a)(h,2),f=b[0],m=b[1];Object(r.useEffect)((function(){if(null!==n){!function(){var e=n.drink,t="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(e);m(!0),function(){var e=function(e,t){var n={accept:"application/json"},r=new AbortController;return t.signal=r.signal,t.method=t.method||"GET",t.headers=t.headers?Object(j.a)(Object(j.a)({},n),t.headers):n,t.body=JSON.stringify(t.body)||!1,t.body||delete t.body,setTimeout((function(){return r.abort()}),5e3),fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject({err:!0,status:e.status||"00",statusText:e.statusText||"Ocurri\xf3 un error"})})).catch((function(e){return e}))};return{get:function(t){return e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})},post:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="POST",e(t,n)},put:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="PUT",e(t,n)},del:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.method="DELETE",e(t,n)}}}().get(t).then((function(e){d(e)})),m(!1)}()}}),[n]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{handleSearch:function(e){c(e)}}),f&&Object(o.jsx)(x,{}),!1===f?Object(o.jsx)(u,{search:n,drinkData:l}):null]})},m=(n(15),function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"types",children:[Object(o.jsx)("h4",{children:"Margarita"}),Object(o.jsx)("h4",{children:"Mojito"}),Object(o.jsx)("h4",{children:"Martini"}),Object(o.jsx)("h4",{children:"Daiquiri"}),Object(o.jsx)("h4",{children:"Caipirinha"}),Object(o.jsx)("h4",{children:"Tom Collins"}),Object(o.jsx)("h4",{children:"Paloma"}),Object(o.jsx)("h4",{children:"Bloody Mary"}),Object(o.jsx)("h4",{children:"Daiquir\xed"})]})})}),g=(n(16),function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)("div",{className:"img",children:[Object(o.jsx)("h1",{children:"Look for your Cocktail"}),Object(o.jsx)(f,{})]}),Object(o.jsx)(m,{})]})});s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.6c6c7551.chunk.js.map