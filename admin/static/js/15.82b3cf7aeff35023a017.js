webpackJsonp([15],{Ysye:function(t,e){},zHaw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"basetable",data:function(){return{select_word:"",selectTab:"table",tabledata:[],tabledata1:[],tabledata2:[],Companys:[],dialogVisible:!1,innerVisible1:!1,innerVisible2:!1,active:0,dialogid:"",dialogType:"",activeStatus:"",reviewStatus:"",currentPage:1,currentPage1:1,currentPage2:1,pagesize:10,total:0,opinionFile:[]}},created:function(){this.getdata()},computed:{tableData:function(){for(var t in this.tabledata)for(var e in this.Companys)this.tabledata[t].companyid===this.Companys[e].id&&this.$set(this.tabledata,t,{id:this.tabledata[t].id,num:this.tabledata[t].id.toString().padStart(5,"0"),projectname:this.tabledata[t].projectname,companyname:this.Companys[e].companyname,reportdate:this.tabledata[t].reportdate,status:this.tabledata[t].status});return this.tabledata},tableData1:function(){for(var t in this.tabledata1)for(var e in this.Companys)this.tabledata1[t].companyid===this.Companys[e].id&&this.$set(this.tabledata1,t,{id:this.tabledata1[t].id,num:this.tabledata1[t].id.toString().padStart(5,"0"),projectname:this.tabledata1[t].projectname,companyname:this.Companys[e].companyname,reportdate:this.tabledata1[t].reportdate,status:this.tabledata1[t].status});return this.tabledata1},tableData2:function(){for(var t in this.tabledata2)for(var e in this.Companys)this.tabledata2[t].companyid===this.Companys[e].id&&this.$set(this.tabledata2,t,{id:this.tabledata2[t].id,num:this.tabledata2[t].id.toString().padStart(5,"0"),projectname:this.tabledata2[t].projectname,companyname:this.Companys[e].companyname,reportdate:this.tabledata2[t].reportdate,status:this.tabledata2[t].status});return this.tabledata2},buttonValue1:function(){if(6===this.active||5===this.reviewStatus)return!0},buttonValue2:function(){if(0===this.active)return!0}},methods:{getdata:function(){var t=this;this.tabledata=[],this.tabledata1=[],this.tabledata2=[],this.$api.get("/api/Companys",null,function(e){t.Companys=e}),this.$api.get("api/Districtfunds?filter="+encodeURI('{"where":{"and":[{"status":1}]}}'),null,function(e){for(var a in e);t.tabledata=e}),this.$api.get("api/Districtfunds?filter="+encodeURI('{"where":{"and":[{"status":{"nin":[1]}},{"status":{"nin":[2]}},{"status":{"nin":[5]}},{"status":{"nin":[0]}},{"status":{"nin":[-1]}},{"status":{"nin":[9]}},{"status":{"nin":[11]}}]}}'),null,function(e){t.tabledata1=e}),this.$api.get("api/Districtfunds?filter="+encodeURI('{"where":{"or":[{"status":2},{"status":3}]}}'),null,function(e){t.tabledata2=e})},prodelete:function(t,e,a){var i=this;this.$api.get("api/Sciprojectsupportconditions?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectsupportconditions/"+t[0].id,null,function(t){})}),this.$api.get("api/Sciprojectcontents?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectcontents/"+t[0].id,null,function(t){})}),this.$api.get("api/Sciprojectoutputs?filter="+encodeURI('{"where":{"scienceprojectid":{"like":"%'+e.id+'%"}}}'),null,function(t){0!==t.length&&i.$api.delete("api/Sciprojectoutputs/"+t[0].id,null,function(t){}),a(e)})},mainprodelete:function(t){var e=this;this.$api.delete("api/Scienceprojs/"+t.id,null,function(t){e.getdata()})},refresh:function(){this.getdata()},set2:function(t,e){var a=this;this.$confirm("是否不通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"danger"}).then(function(){a.dialogVisible=!0,a.dialogid=e.id,a.dialogType="nopass",a.opinionFile=[],a.$api.patch("/api/Districtfunds/"+e.id,{status:2},function(t){console.log(t),a.getdata()})})},set3:function(t,e){var a=this;this.$confirm("是否通过审核?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then(function(){a.dialogVisible=!0,a.dialogid=e.id,a.dialogType="pass",a.opinionFile=[]})},setn1:function(t,e){var a=this;this.$prompt("请输入修改意见","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var i=t.value;a.$api.patch("/api/Districtfunds/"+e.id,{status:-1,opinion:i},function(t){console.log(t),a.getdata()})}).catch(function(){a.$message({type:"info",message:"取消"})})},set1:function(t,e){var a=this;this.$api.patch("/api/Districtfunds/"+e.id,{status:1},function(t){console.log(t),a.getdata()})},current_change:function(t){this.currentPage=t},current_change1:function(t){this.currentPage1=t},current_change2:function(t){this.currentPage2=t},check:function(t,e){this.$router.push({path:"/table6",query:{proid:e.id}})},search:function(){var t,e=this;this.$api.get("api/Companys?filter="+encodeURI('{"where":{"companyname":{"like":"%'+this.select_word+'%"}}}'),null,function(a){switch(console.log(a),t=a,e.selectTab){case"table":for(var i in console.log(111),e.tabledata=[],t)e.$api.get("api/Districtfunds?filter="+encodeURI('{"where":{"and":[{"status":1},{"companyid":"'+t[i].id+'"}]}}'),null,function(t){for(var a in t)e.$set(e.tabledata,a,t[a])});break;case"table1":for(var n in console.log(222),e.tabledata1=[],t)e.$api.get("api/Districtfunds?filter="+encodeURI('{"where":{"and":[{"status":{"nin":[1,2,5,0,-1,9,11]}},{"companyid":"'+t[n].id+'"}]}}'),null,function(t){for(var a in t)e.$set(e.tabledata1,a,t[a])});break;case"table2":for(var s in console.log(333),e.tabledata2=[],t)e.$api.get("api/Districtfunds?filter="+encodeURI('{"where":{"and":[{"status":2},{"status":3},{"companyid":"'+t[s].id+'"}]}}'),null,function(t){for(var a in t)e.$set(e.tabledata2,a,t[a])})}})},uploadSuccess:function(t){this.opinionFile.push({id:0,name:t[0].name,url:t[0].url,type:"opinion",districtfundsid:this.dialogid})},uploadConfirm:function(){var t=this;this.$api.post("/api/Districtfundsstorages",this.opinionFile[0],function(e){"pass"===t.dialogType?t.$api.patch("/api/Districtfunds/"+t.dialogid,{status:3},function(e){console.log(e),t.getdata(),t.dialogVisible=!1}):"nopass"===t.dialogType&&t.$api.patch("/api/Districtfunds/"+t.dialogid,{status:2},function(e){console.log(e),t.getdata(),t.dialogVisible=!1})})},handleRemove:function(){this.opinionFile=[]}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),t._v("区级扶持补助资金申请表")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("label",{staticStyle:{"font-size":"13px",color:"#6f7180"}},[t._v("公司名称筛选")]),t._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"公司名称筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-refresh",round:""},on:{click:t.refresh}},[t._v("刷新")])],1),t._v(" "),a("el-tabs",{model:{value:t.selectTab,callback:function(e){t.selectTab=e},expression:"selectTab"}},[a("el-tab-pane",{attrs:{label:"待处理",name:"table"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"申报单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("初审")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"详情",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1,width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"通过审核"}},[a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",round:""},on:{click:function(a){t.set3(e.$index,e.row)}}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"返回重新修改"}},[a("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-edit",round:""},on:{click:function(a){t.setn1(e.$index,e.row)}}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"不通过审核"}},[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",round:""},on:{click:function(a){t.set2(e.$index,e.row)}}})],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.tableData.length},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.current_change}})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"处理完成",name:"table2"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData2.slice((t.currentPage2-1)*t.pagesize,t.currentPage2*t.pagesize),fit:!0}},[a("el-table-column",{attrs:{prop:"num",label:"编号",resizable:!1,sortable:"",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyname",label:"申报单位",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reportdate",label:"填报时间",sortable:"",resizable:!1,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"等待操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[2===e.row.status?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("不通过")]):t._e(),t._v(" "),3===e.row.status?a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("通过")]):t._e()],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"详情",align:"center",resizable:!1,width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage2,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.tableData2.length},on:{"update:currentPage":function(e){t.currentPage2=e},"current-change":t.current_change2}})],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"评审意见表扫描件上传",visible:t.dialogVisible,width:"30%","close-on-click-modal":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"http://49.4.80.58:3000/api/StorageFiles/upload","on-remove":t.handleRemove,"on-success":t.uploadSuccess,multiple:"",limit:1,"list-type":"file-list","file-list":t.opinionFile}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传一个文件，只能上传jpg/png/pdf文件")])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.uploadConfirm}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("Ysye")},"data-v-4c43f923",null);e.default=s.exports}});