webpackJsonp([7],{FHaY:function(t,e){},hJxR:function(t,e,l){"use strict";(function(t){var o=l("7t+N"),a=(l.n(o),l("zmOW"));l.n(a);e.a={data:function(){return{rooturl:"http://49.4.80.58:3000",form:{patenttype:"",patentnumber:"",patentname:"",patentee:"",patentaddress:"",phone:"",patenteetype:"",technosphere:"",inventtype:"",applydate:"",impowerdate:"",auditdepartment:"",ts:"",reportdate:"",status:""},appendix:{id:"",scienceprojectid:"",name:"",type:"",url:""}}},created:function(){this.getdata()},methods:{download:function(){t(document).ready(function(t){t("#page-content").wordExport("知识产权补助申请表")})},onreturn:function(){this.$router.go(-1)},getdata:function(){var t=this;this.$api.get("api/Intellectualpropertyallowances/"+this.$route.query.proid,null,function(e){t.form=e,e.opinion&&t.$notify({title:"信息",message:e.opinion,duration:0,type:"error",position:"top-left"}),t.$api.get("api/Intellectualpropertyallowancestorages?filter="+encodeURI('{"where":{"intellectualpropertyallowanceid":{"like":"%'+e.id+'%"}}}'),null,function(e){t.appendix=e})})}}}}).call(e,l("7t+N"))},hKIF:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l("hJxR"),a={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticStyle:{"margin-top":"20px"},attrs:{id:"app"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("div",[l("el-button",{attrs:{icon:"el-icon-arrow-left",round:"",size:"mini"},on:{click:t.onreturn}}),t._v(" "),l("el-button",{staticStyle:{float:"right"},on:{click:t.download}},[t._v("下载文件")])],1),t._v(" "),l("div",{staticStyle:{"margin-top":"20px"},attrs:{id:"page-content"}},[l("h2",{staticStyle:{"text-align":"center"}},[t._v("知识产权补助申请表")]),t._v(" "),l("table",{staticStyle:{border:"1px solid black","border-collapse":"collapse","margin-bottom":"0px"},attrs:{width:"100%"}},[l("tbody",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("国内或国外专利")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.patenttype))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("专利号")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.patentnumber))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("专利名称")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.patentname))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("专利权人")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.patentee))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("专利权人地址")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.patentaddress))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("联系电话")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.phone))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("专利权人类型")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.patenteetype))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("技术领域")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.technosphere))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("发明类型")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.inventtype))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("申请日")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.applydate))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("授权公告日")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.impowerdate))])]),t._v(" "),l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"20%"}},[t._v("审核单位")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"70%"}},[t._v(t._s(t.form.auditdepartment))])])])])]),t._v(" "),l("h2",{staticStyle:{"text-align":"left"}},[t._v("附件")]),t._v(" "),l("table",{staticClass:"table table-bordered",staticStyle:{"margin-bottom":"0px",border:"1px solid black","border-collapse":"collapse","font-size":"16px",width:"100%"}},[l("tbody",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("tr",{staticStyle:{border:"1px solid black","border-collapse":"collapse"}},[l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse","text-align":"center","vertical-align":"middle"},attrs:{width:"20%"}},[t._v("附件")]),t._v(" "),l("td",{staticStyle:{border:"1px solid black","border-collapse":"collapse"},attrs:{width:"90%"}},[l("ul",{staticStyle:{"text-align":"center"}},t._l(t.appendix,function(e){return l("span",{key:e.id,staticStyle:{"text-align":"center"}},[l("a",{attrs:{href:t.rooturl+e.url}},[t._v(t._s(e.name.slice(14))),l("br")])])}))])])])])])])])},staticRenderFns:[]};var r=function(t){l("FHaY")},s=l("VU/8")(o.a,a,!1,r,null,null);e.default=s.exports}});