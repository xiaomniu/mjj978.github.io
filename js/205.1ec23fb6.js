"use strict";(self["webpackChunkhmmj_h5_90"]=self["webpackChunkhmmj_h5_90"]||[]).push([[205],{9205:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"register-page"},[s("van-nav-bar",{attrs:{title:"注册"}}),s("van-form",{on:{submit:e.onSubmit}},[s("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"},{pattern:/^\w{5,}$/,message:"用户名必须 5 位以上"}]},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),s("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"},{pattern:/^\w{6,}$/,message:"密码必须 6 位以上"}]},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"primary","native-type":"submit"}},[e._v("注册")])],1),s("router-link",{staticClass:"link",attrs:{to:"/login"}},[e._v("有账号，去登陆")])],1)],1)},a=[],n=(t(560),t(2900)),u={name:"RegisterPage",data(){return{username:"",password:""}},methods:{async onSubmit(e){console.log("submit",e);const s=await(0,n.z2)(e);console.log(s),this.$toast.success("注册成功"),this.$router.push("/login")}}},o=u,i=t(1001),l=(0,i.Z)(o,r,a,!1,null,"6327ab6c",null),c=l.exports},2900:function(e,s,t){t.d(s,{bG:function(){return u},x4:function(){return n},z2:function(){return a}});var r=t(1374);const a=e=>r.Z.post("/user/register",e),n=e=>r.Z.post("/user/login",e),u=()=>r.Z.get("/user/currentUser")}}]);
//# sourceMappingURL=205.1ec23fb6.js.map