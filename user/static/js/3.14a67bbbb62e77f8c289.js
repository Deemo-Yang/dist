webpackJsonp([3],{FWey:function(e,t){},GI9F:function(e,t){},MpTN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=new(n("7+uW").default),l={data:function(){return{collapse:!1,fullscreen:!1,name:"",message:2}},computed:{username:function(){var e=localStorage.getItem("companyname");return e||this.name}},methods:{handleCommand:function(e){"loginout"==e&&(localStorage.clear(),this.$router.push("/login"))},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),e._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"el-icon-rank"})])],1),e._v(" "),e._m(1),e._v(" "),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n                    "+e._s(e.username)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[this._v(" "),t("i",{staticClass:"el-icon-menu"}),this._v(" 创业创新项目综合管理系统")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"user-avator"},[t("img",{attrs:{src:"static/img/img.jpg"}})])}]};var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":e.onRoutes,collapse:e.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[e._l(e.items,function(t){return[t.subs?[n("el-submenu",{key:t.index,attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._v(" "),e._l(t.subs,function(t){return[t.nsubs?[n("el-submenu",{key:t.index,attrs:{index:t.index}},[n("template",{slot:"title"},[e._v(e._s(t.title))]),e._v(" "),e._l(t.nsubs,function(t,s){return n("el-menu-item",{key:s,attrs:{index:t.index}},[e._v("\n                                    "+e._s(t.title)+"\n                                ")])})],2)]:[n("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v("\n                                "+e._s(t.title)+"\n                            ")])]]})],2)]:[n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]]})],2)],1)},staticRenderFns:[]};var c={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:n("VU/8")(l,i,!1,function(e){n("FWey")},"data-v-6fabcf4b",null).exports,vSidebar:n("VU/8")({data:function(){return{collapse:!1,items:[{icon:"el-icon-setting",index:"/editor",title:"公司信息"},{icon:"el-icon-edit-outline",index:"1",title:"项目申报",subs:[{index:"/form",title:"一、科技计划项目"},{index:"3",title:"二、知识产权试点示范计划",nsubs:[{index:"/gcompany",title:"1.知识产权试点/示范企业认定申请表"},{index:"/worker",title:"2.知识产权先进个人/优秀工作者认定申请表"}]},{index:"4",title:"三、创新创业培育扶持计划",nsubs:[{index:"/psubsidy",title:"1.知识产权补助申请表"},{index:"/apply",title:"2.省市项目区级配套补助资金申请表"}]}]},{icon:"el-icon-tickets",index:"2",title:"已申报项目",subs:[{index:"/table",title:"一、科技计划项目"},{index:"5",title:"二、知识产权试点示范计划",nsubs:[{index:"/gctable",title:"1.知识产权试点/示范企业认定申请表"},{index:"/gwtable",title:"2.知识产权先进个人/优秀工作者认定申请表"}]},{index:"6",title:"三、创新创业培育扶持计划",nsubs:[{index:"/pstable",title:"1.知识产权补助申请表"},{index:"/fatable",title:"2.省市项目区级配套补助资金申请表"}]}]}]}},computed:{onRoutes:function(){return this.$route.path}}},a,!1,function(e){n("GI9F")},"data-v-6d240125",null).exports},created:function(){var e=this;s.$on("collapse",function(t){e.collapse=t}),s.$on("tags",function(t){for(var n=[],s=0,l=t.length;s<l;s++)t[s].name&&n.push(t[s].name);e.tagsList=n})}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("v-head"),this._v(" "),t("v-sidebar"),this._v(" "),t("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[t("div",{staticClass:"content"},[t("transition",{attrs:{name:"move",mode:"out-in"}},[t("keep-alive",{attrs:{include:this.tagsList}},[t("router-view")],1)],1)],1)])],1)},staticRenderFns:[]},o=n("VU/8")(c,r,!1,null,null,null);t.default=o.exports}});