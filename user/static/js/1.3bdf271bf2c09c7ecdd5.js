webpackJsonp([1],{GF4k:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("j8vk"),i=r.n(s),o=r("mtWM"),n=r.n(o),a={data:function(){return{img:i.a,fileList:[],rooturl:"http://49.4.80.58:3000",ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},computed:{},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r=t;n.a.post("http://49.4.80.58:3000/api/myusers/login",{username:t.ruleForm.username,password:t.$md5(t.ruleForm.password)}).then(function(e){console.log(e),r.$api.get("/api/Companys",null,function(t){for(var s in t)t[s].usersid===e.data.userId&&(1===t[s].status?(localStorage.setItem("userid",e.data.userId),localStorage.setItem("companyid",t[s].id),localStorage.setItem("companyname",t[s].companyname),r.$router.push("/editor"),console.log(localStorage.getItem("companyid"))):null===t[s].opinion?r.$message.error("用户未通过审核！"):r.$message.error("用户未通过审核！"+t[s].opinion))})}).catch(function(e){r.$alert("用户名或密码不正确","登录失败",{confirmButtonText:"确定",type:"error"})})})},register:function(){this.$router.push("/register")},sysJump:function(){window.open("http://49.4.80.58:3000/")}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"relative",width:"100%",height:"100%",background:"no-repeat url('../static/img/pic3.jpg')"}},[r("div",{staticClass:"backgroud",staticStyle:{position:"fixed","z-index":"100",top:"0",left:"0",background:"rgba(0, 0, 0, 0.5)",width:"100%",height:"100%",overflow:"hidden"}}),e._v(" "),e._m(0),e._v(" "),r("el-button",{staticStyle:{float:"right",position:"relative","z-index":"101",margin:"3% 5% 0 0"},attrs:{type:"primary"},on:{click:e.sysJump}},[e._v("后台管理系统")]),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"ms-login"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm("ruleForm")}},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登录")])],1),e._v(" "),r("div",{staticClass:"register-btn"},[r("el-button",{attrs:{type:"success"},on:{click:e.register}},[e._v("注册")])],1),e._v(" "),r("el-popover",{staticStyle:{"margin-left":"80%","text-align":"center"},attrs:{placement:"top",width:"200",trigger:"click"}},[r("div",{attrs:{align:"center"}},[e._v("请致电64310233修改密码")]),e._v(" "),r("el-button",{attrs:{slot:"reference",size:"middle",type:"text"},slot:"reference"},[e._v("忘记密码")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{float:"left",position:"relative","z-index":"101"}},[t("img",{attrs:{src:r("ZBJ4"),height:"57",width:"300"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ms-title"},[this._v("昆明滇池国家旅游度假区"),t("br"),this._v("创业创新项目综合管理系统")])}]};var u=r("VU/8")(a,l,!1,function(e){r("cfPC")},"data-v-c421b09e",null);t.default=u.exports},ZBJ4:function(e,t,r){e.exports=r.p+"static/img/logo.c33388b.png"},cfPC:function(e,t){},j8vk:function(e,t,r){e.exports=r.p+"static/img/pic3.12e356f.jpg"}});