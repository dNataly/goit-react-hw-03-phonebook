(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={formInput:"ContactForm_formInput__2VXRu",formItem:"ContactForm_formItem__31vzM",formButton:"ContactForm_formButton__fthjp"}},,,function(t,e,n){t.exports={list:"ContactList_list__2cE9S",listName:"ContactList_listName__33qvU",listItem:"ContactList_listItem__2qeAn"}},,,,function(t,e,n){t.exports={formBtn:"FormButton_formBtn__1jcFa"}},function(t,e,n){t.exports={filterInput:"Filter_filterInput__AdX91"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=(n(16),n(11)),i=n(3),u=(n(17),n(21)),l=n(5),m=n.n(l),b=n(9),j=n.n(b),f=n(0),d=function(t){var e=t.type,n=void 0===e?"button":e,a=t.disabled,c=void 0!==a&&a,r=t.onClick,o=t.label;return Object(f.jsx)("button",{className:j.a.formBtn,type:n,disabled:c,onClick:r,children:o})},O=function(t){var e=t.contacts,n=t.removeContact;return Object(f.jsx)("ul",{className:m.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:m.a.listItem,children:[Object(f.jsx)("span",{className:m.a.listName,children:a}),Object(f.jsx)("span",{className:m.a.listNumber,children:c}),Object(f.jsx)(d,{label:"Remove",onClick:function(){return n(e)}})]},e)}))})},h=n(2),p=n.n(h);function x(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],b=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}};return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,l),o(""),m("")},className:p.a.form,children:[Object(f.jsxs)("label",{className:p.a.formItem,children:["Name",Object(f.jsx)("input",{className:p.a.formInput,type:"text",name:"name",value:r,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:p.a.formItem,children:["Number",Object(f.jsx)("input",{className:p.a.formInput,name:"number",type:"tel",value:l,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)(d,{type:"submit",className:p.a.formBtn,label:"Add contact"})]})})}var v=n(10),C=n.n(v),_=function(t){var e=t.onChange;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:["Find contacts by name:",Object(f.jsx)("input",{className:C.a.filterInput,type:"text",name:"filter",onChange:e})]})})},N="contacts";function I(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],m=o[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem(N));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem(N,JSON.stringify(n))}),[n]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{onSubmit:function(t,e){if(function(t){return t=t.toLowerCase(),n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(t))alert("".concat(t," is already in contacts)"));else{var a={id:Object(u.a)(),name:t,phoneNumber:e};c((function(t){return[a].concat(Object(s.a)(t))}))}}}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(_,{onChange:function(t){m(t.target.value)}}),Object(f.jsx)(O,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())})),removeContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.15cb10c0.chunk.js.map