webpackJsonp([19],{"/KUe":function(t,e){},"8C4o":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"basetable",data:function(){return{select_word:"",tabledata:[],tabledata1:[],tabledata2:[],form2id:[],form3id:[],form4id:[],files:[]}},created:function(){this.getdata()},computed:{tableData:function(){for(var t in this.tabledata)this.$set(this.tabledata,t,{id:this.tabledata[t].id,num:this.tabledata[t].id.toString().padStart(5,"0"),projectname:this.tabledata[t].projectname,companyname:localStorage.getItem("companyname"),reportdate:this.tabledata[t].reportdate,status:this.tabledata[t].status});return this.tabledata},tableData1:function(){for(var t in this.tabledata1)this.$set(this.tabledata1,t,{id:this.tabledata1[t].id,num:this.tabledata1[t].id.toString().padStart(5,"0"),projectname:this.tabledata1[t].projectname,companyname:localStorage.getItem("companyname"),reportdate:this.tabledata1[t].reportdate,status:this.tabledata1[t].status});return this.tabledata1},tableData2:function(){for(var t in this.tabledata2)this.$set(this.tabledata2,t,{id:this.tabledata2[t].id,num:this.tabledata2[t].id.toString().padStart(5,"0"),projectname:this.tabledata2[t].projectname,companyname:localStorage.getItem("companyname"),reportdate:this.tabledata2[t].reportdate,status:this.tabledata2[t].status});return this.tabledata2}},methods:{getdata:function(){var t=this;this.tabledata=[],this.tabledata1=[],this.tabledata2=[],this.$api.get("api/Scienceprojs?filter="+encodeURI('{"where":{"and":[{"companyid":'+parseInt(localStorage.getItem("companyid"))+'},{"status":0}]}}'),null,function(e){t.tabledata=e}),this.$api.get("api/Scienceprojs?filter="+encodeURI('{"where":{"and":[{"companyid":'+parseInt(localStorage.getItem("companyid"))+'},{"status":{"nin":[0]}},{"status":{"nin":[-1]}}]}}'),null,function(e){t.tabledata1=e}),this.$api.get("api/Scienceprojs?filter="+encodeURI('{"where":{"and":[{"companyid":'+parseInt(localStorage.getItem("companyid"))+'},{"status":-1}]}}'),null,function(e){t.tabledata2=e})},edit:function(t,e){this.$router.push({path:"/form",query:{proid:e.id}})},otherget:function(){var t=this;this.form2id=[],this.form3id=[],this.form4id=[],this.files=[],this.$api.get("api/Scienceprojs?filter="+encodeURI('{"where":{"and":[{"companyid":'+parseInt(localStorage.getItem("companyid"))+'},{"status":0}]}}'),null,function(e){for(var a in e)t.$api.get("api/Sciprojectsupportconditions?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e[a].id+'%"}}}'),null,function(e){0!==e.length&&t.form2id.push({proid:e[0].scienceprojectid,formid:e[0].id})}),t.$api.get("api/Sciprojectcontents?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e[a].id+'%"}}}'),null,function(e){0!==e.length&&t.form3id.push({proid:e[0].scienceprojectid,formid:e[0].id})}),t.$api.get("api/Sciprojectoutputs?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e[a].id+'%"}}}'),null,function(e){0!==e.length&&t.form4id.push({proid:e[0].scienceprojectid,formid:e[0].id})}),t.$api.get("api/Sciencestorages?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e[a].id+'%"}}}'),null,function(e){if(0!==e.length)for(var a in e)t.files.push({proid:e[a].scienceprojectid,fileid:e[a].id})})})},prodelete:function(t,e,a){var i=this;this.$confirm("是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.$api.get("api/Sciencestorages?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length?i.$alert("请先将项目中已上传文件删除","删除错误",{confirmButtonText:"确定",type:"warning"}):i.$api.get("api/Sciprojectsupportconditions?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectsupportconditions/"+t[0].id,null,function(t){}),i.$api.get("api/Sciprojectcontents?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectcontents/"+t[0].id,null,function(t){}),i.$api.get("api/Sciprojectoutputs?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length?i.$api.delete("api/Sciprojectoutputs/"+t[0].id,null,function(t){a(e)}):a(e)})})})})})},mainprodelete:function(t){var e=this;this.$api.delete("api/Scienceprojs/"+t.id,null,function(t){e.getdata(),e.$message.success("删除成功！")})},refresh:function(){this.getdata()},check:function(t,e){this.$router.push({path:"/table1",query:{proid:e.id}})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-refresh",round:""},on:{click:t.refresh}},[t._v("刷新")])],1),t._v(" "),a("el-tabs",[a("el-tab-pane",{attrs:{label:"草稿箱"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"申报单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("待提交")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.edit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.prodelete(e.$index,e.row,t.mainprodelete)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已提交申请"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData1,fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"申报单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[1===e.row.status?a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("初审")]):t._e(),t._v(" "),2===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("初审不通过")]):t._e(),t._v(" "),3===e.row.status?a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("专家评审")]):t._e(),t._v(" "),4===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("立项")]):t._e(),t._v(" "),5===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("专家评审不通过")]):t._e(),t._v(" "),6===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("签订合同")]):t._e(),t._v(" "),7===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("中期检查")]):t._e(),t._v(" "),8===e.row.status?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("验收")]):t._e(),t._v(" "),9===e.row.status?a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("验收通过")]):t._e(),t._v(" "),10===e.row.status?a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("重新验收")]):t._e(),t._v(" "),11===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("验收不通过")]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"返回待修改申请"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData2,fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"申报单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("待修改")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.edit(e.$index,e.row)}}},[t._v("修改")])]}}])})],1)],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"crumbs"},[e("span",[e("i",{staticClass:"el-icon-tickets"}),this._v("科技项目详情")])])}]};var l=a("VU/8")(i,n,!1,function(t){a("/KUe")},"data-v-2cc9e604",null);e.default=l.exports}});