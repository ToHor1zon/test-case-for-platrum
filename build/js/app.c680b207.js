(function(e){function t(t){for(var s,a,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},n={app:0},o=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"09ce":function(e,t,r){},"112f":function(e,t,r){"use strict";r("b127")},"345c":function(e,t,r){"use strict";r("4af0")},"35a3":function(e,t,r){"use strict";r("3dac")},"3dac":function(e,t,r){},"4af0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"App"}},[r("div",{staticClass:"text-center my-4"},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.new-user-modal",modifiers:{"new-user-modal":!0}}],staticClass:"m-auto"},[e._v(" Добавить работника ")])],1),e.users.length?r("Table",{attrs:{users:e.sortedUsers,isAscUsersOrder:e.isAscUsersOrder},on:{sortUsers:e.sortUsers}}):e._e(),r("Modal",{attrs:{parentOptions:e.parentOptions},on:{saveUser:e.saveUserToLocalStorage}})],1)},o=[],a=r("2909"),i=(r("d81d"),r("b0c0"),r("99af"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container border border-secondary justify-content-center col-auto mx-2 col-lg-8 mx-lg-auto"},[r("div",{staticClass:"row table-header"},[r("div",{staticClass:"col p-2 pl-3 font-weight-bold"},[r("span",{on:{click:function(t){return e.$emit("sortUsers",!e.isAscUsersOrder)}}},[e._v(" ФИО "),r("TableArrow",{attrs:{isUpArrow:!1,isActive:e.isAscUsersOrder,refName:"tableHeaderArrow",className:"table-header-arrow"}})],1)]),r("div",{staticClass:"col p-2 pl-3 font-weight-bold"},[e._v("Телефон")])]),e._l(e.users,(function(e){return r("TableItem",{key:e.id,attrs:{user:e}})}))],2)}),l=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{class:["row","border","border-secondary","border-left-0","border-right-0","border-bottom-0","user-parent__wrapper",e.user.childrenUsers.length?"user-parent__wrapper--parent":""],on:{click:e.openParentItem}},[r("div",{staticClass:"text-capitalize col p-2 pl-3"},[e.user.childrenUsers.length?r("TableArrow",{attrs:{isUpArrow:!0,isActive:e.isOpenedParent}}):e._e(),e._v(" "+e._s(e.user.name)+" ")],1),r("div",{staticClass:"col p-2 pl-3"},[e._v(e._s(e.user.phone))])]),e.isOpenedParent?e._l(e.user.childrenUsers,(function(t){return r("div",{key:t.id,staticClass:"border-top row"},[r("div",{staticClass:"col p-2 pl-5"},[e._v(" "+e._s(t.name)+" ")]),r("div",{staticClass:"col p-2 pl-5"},[e._v(" "+e._s(t.phone)+" ")])])})):e._e()],2)},c=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{ref:"tableArrow",class:["table-arrow",e.isActive?"table-arrow--rotated":""]},[e._v(" "+e._s(e.isUpArrow?"▲":"▼")+" ")])},p=[],f={name:"TableArrow",props:{isUpArrow:{type:Boolean,default:!1},isActive:{type:Boolean,required:!0}}},m=f,h=(r("345c"),r("2877")),b=Object(h["a"])(m,d,p,!1,null,null,null),v=b.exports,_={name:"TableItem",components:{TableArrow:v},props:{user:{type:Object,required:!0}},data:function(){return{isOpenedParent:!1}},methods:{openParentItem:function(){this.isOpenedParent=!this.isOpenedParent}}},g=_,w=(r("112f"),Object(h["a"])(g,u,c,!1,null,null,null)),O=w.exports,y={name:"Table",components:{TableItem:O,TableArrow:v},props:{users:{type:Array,require:!0},isAscUsersOrder:{type:Boolean,require:!0}}},U=y,I=(r("35a3"),Object(h["a"])(U,i,l,!1,null,null,null)),A=I.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{ref:"newUserModal",attrs:{id:"new-user-modal",title:"Добавить сотрудника","hide-footer":""},on:{hidden:e.dropModal}},[r("b-form",[r("b-form-group",{staticClass:"modal__validated-form-group",attrs:{label:"ФИО","label-for":"new-user-name"}},[r("b-form-input",{attrs:{id:"new-user-name",state:e.nameIsValid,name:"name",autocomplete:"off",type:"text",placeholder:"Иван Иванов Иванович"},on:{focus:e.clearInputErrors,blur:e.validateName},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e.errors.name?r("span",{staticClass:"text-danger modal__error-message"},[e._v(" "+e._s(e.errors.name)+" ")]):e._e()],1),r("b-form-group",{staticClass:"modal__validated-form-group",attrs:{label:"Телефон","label-for":"new-user-phone"}},[r("b-form-input",{attrs:{id:"new-user-phone",state:e.phoneIsValid,name:"phone",autocomplete:"off",type:"text",placeholder:"89991112233"},on:{focus:e.clearInputErrors,blur:e.validatePhone},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e.errors.phone?r("span",{staticClass:"text-danger modal__error-message"},[e._v(" "+e._s(e.errors.phone)+" ")]):e._e()],1),e.parentOptions.length?r("b-form-group",{attrs:{label:"Руководитель","label-for":"new-user-parent"}},[r("b-form-select",{attrs:{options:e.parentOptions},scopedSlots:e._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:null}},[e._v("Выберите руководителя")])]},proxy:!0}],null,!1,2022889192),model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1):e._e(),r("div",{staticClass:"text-right"},[r("b-button",{staticClass:"mt-2 mr-2",attrs:{variant:"outline-success","inline-block":"",type:"submit"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("Создать")]),r("b-button",{staticClass:"mt-2",attrs:{variant:"outline-danger","inline-block":""},on:{click:e.dropModal}},[e._v("Отмена")])],1)],1)],1)},$=[],C=(r("b64b"),{name:"Modal",props:{parentOptions:{type:Array,require:!0}},data:function(){return{errors:{},nameIsValid:null,phoneIsValid:null,form:{name:"",phone:"",parentId:null,childrenUsers:[]}}},methods:{dropModal:function(){this.$bvModal.hide("new-user-modal"),this.errors={},this.nameIsValid=null,this.phoneIsValid=null,this.$set(this.form,"name",""),this.$set(this.form,"phone",""),this.$set(this.form,"parentId",null)},submitForm:function(){this.formIsValid()&&(this.$emit("saveUser",this.form),this.dropModal())},formIsValid:function(){return this.validateName(),this.validatePhone(),!Object.keys(this.errors).length},clearInputErrors:function(e){this["".concat(e.target.name,"IsValid")]=null,this.$delete(this.errors,e.target.name)},validateName:function(){return this.form.name.length?this.form.name.length>200?(this.$set(this.errors,"name","ФИО не может быть длинее 200"),void(this.nameIsValid=!1)):void(this.nameIsValid=!0):(this.$set(this.errors,"name","Требуется ввести ФИО"),void(this.nameIsValid=!1))},validatePhone:function(){var e=/^((\+7|7|8)+([0-9]){10})$/;return this.form.phone.length?e.test(this.form.phone)?void(this.phoneIsValid=!0):(this.$set(this.errors,"phone","Телефон введен некорректно"),void(this.phoneIsValid=!1)):(this.$set(this.errors,"phone","Требуется ввести телефон"),void(this.phoneIsValid=!1))}}}),j=C,P=(r("6147"),Object(h["a"])(j,x,$,!1,null,null,null)),k=P.exports,M=function(){var e=Date.now(),t=Math.round(Math.random()*Math.pow(10,5));return e+t},T=function(e,t){return e.sort((function(e,r){return t?e.name.localeCompare(r.name):r.name.localeCompare(e.name)}))},S={name:"App",components:{Table:A,Modal:k},data:function(){return{users:[],isAscUsersOrder:!0}},mounted:function(){this.updateUsersFromLocalStorage()},computed:{parentOptions:function(){return this.users.map((function(e){var t=e.id,r=e.name;return{value:t,text:r}}))},sortedUsers:function(){return T(this.users,this.isAscUsersOrder)}},methods:{saveUserToLocalStorage:function(e){var t,r=M();e.id=r,t=e.parentId?this.users.map((function(t){return t.childrenUsers=t.id===e.parentId?[].concat(Object(a["a"])(t.childrenUsers),[e]):t.childrenUsers,t})):[].concat(Object(a["a"])(this.users),[e]);var s=JSON.stringify(t);localStorage.setItem("users",s),this.updateUsersFromLocalStorage()},sortUsers:function(e){this.isAscUsersOrder=e},updateUsersFromLocalStorage:function(){var e=localStorage.getItem("users")||"[]";this.users=JSON.parse(e)}}},V=S,E=(r("034f"),Object(h["a"])(V,n,o,!1,null,null,null)),N=E.exports,q=r("5f5b");r("f9e3"),r("2dd8");s["default"].config.productionTip=!1,s["default"].use(q["a"]),new s["default"]({render:function(e){return e(N)}}).$mount("#app")},6147:function(e,t,r){"use strict";r("09ce")},"85ec":function(e,t,r){},b127:function(e,t,r){}});
//# sourceMappingURL=app.c680b207.js.map