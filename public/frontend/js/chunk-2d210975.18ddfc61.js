(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210975"],{b919:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"m-profile manage-p"},[e("b-container",{staticClass:"h-100"},[e("b-row",{staticClass:"align-items-center justify-content-center h-100"},[e("b-col",{attrs:{lg:"10"}},[e("div",{staticClass:"sign-user_card"},[e("b-form",{staticClass:"mt-4",attrs:{id:"change-email-form",method:"POST"}},[e("b-row",[e("b-col",{attrs:{lg:"3"}}),e("b-col",{staticClass:"device-margin",attrs:{lg:"6"}},[e("div",{staticClass:"change-email-from"},[e("h4",{staticClass:"mb-3"},[t._v("Change Email")]),e("input",{attrs:{type:"hidden",id:"userId",name:"userId"},domProps:{value:t.user.id}}),e("b-form-group",[e("label",[t._v("New Email")]),e("b-form-input",{staticClass:"form-control mb-0",attrs:{type:"email",id:"email",name:"email",placeholder:"",autocomplete:"off",value:t.user.email,required:""}})],1),e("div",{staticClass:"d-flex"},[e("a",{staticClass:"btn btn-hover",attrs:{href:"#"},on:{click:t.handleSubmit}},[t._v("Save")]),e("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"landing-page.profile-setting"}}},[t._v("Cancel")])],1)],1)])],1)],1)],1)])],1)],1)],1)},n=[],i=e("5530"),l=e("bcae"),r=e("2f62"),c={name:"ChangeEmail",components:{},mounted:function(){l["c"].index()},data:function(){return{}},computed:Object(i["a"])({},Object(r["b"])({authStatus:"Auth/authStatusState",user:"Auth/userState"})),methods:{handleSubmit:function(t){var a=this;t.preventDefault();var e=new FormData($("#change-email-form")[0]);this.$store.dispatch("Auth/changeEmail",e).then((function(){a.$router.push({name:"landing-page.profile-setting"})}))}}},o=c,u=e("2877"),m=Object(u["a"])(o,s,n,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d210975.18ddfc61.js.map