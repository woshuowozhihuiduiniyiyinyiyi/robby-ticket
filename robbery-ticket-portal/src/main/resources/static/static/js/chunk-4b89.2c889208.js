(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4b89"],{ZwYD:function(e,t,r){},eGdN:function(e,t,r){"use strict";var o=r("ZwYD");r.n(o).a},kP7L:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticStyle:{padding:"20px"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.itemInfos,expression:"itemInfos"}],attrs:{id:"foo"},domProps:{value:e.itemInfos},on:{input:function(t){t.target.composing||(e.itemInfos=t.target.value)}}}),e._v(" "),r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0"},attrs:{span:24}},[r("el-form",{ref:"form",attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"微信昵称"}},[r("el-input",{attrs:{placeholder:"请输入微信昵称"},model:{value:e.form.ownerWxNickName,callback:function(t){e.$set(e.form,"ownerWxNickName",t)},expression:"form.ownerWxNickName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{attrs:{placeholder:"请输入乘客姓名"},model:{value:e.form.passengerName,callback:function(t){e.$set(e.form,"passengerName",t)},expression:"form.passengerName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"身份证号"}},[r("el-input",{attrs:{placeholder:"请输入乘客身份证号"},model:{value:e.form.passengerIdCard,callback:function(t){e.$set(e.form,"passengerIdCard",t)},expression:"form.passengerIdCard"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"抢票人员"}},[r("el-input",{attrs:{placeholder:"请输入抢票人员"},model:{value:e.form.robbingUserName,callback:function(t){e.$set(e.form,"robbingUserName",t)},expression:"form.robbingUserName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态"}},[r("el-select",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[r("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),r("el-option",{attrs:{label:"抢票中",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"交易成功",value:"2"}}),e._v(" "),r("el-option",{attrs:{label:"交易关闭",value:"3"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"创建日期"}},[r("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.form.createDateMin,callback:function(t){e.$set(e.form,"createDateMin",t)},expression:"form.createDateMin"}}),e._v(" "),r("span",[e._v("-")]),e._v(" "),r("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.form.createDateMax,callback:function(t){e.$set(e.form,"createDateMax",t)},expression:"form.createDateMax"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所选出发日期"}},[r("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",placeholder:"选择日期时间",timestamp:""},model:{value:e.form.expectDateMin,callback:function(t){e.$set(e.form,"expectDateMin",t)},expression:"form.expectDateMin"}}),e._v(" "),r("span",[e._v("-")]),e._v(" "),r("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetime",timestamp:"",placeholder:"选择日期时间"},model:{value:e.form.expectDateMax,callback:function(t){e.$set(e.form,"expectDateMax",t)},expression:"form.expectDateMax"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.getInfo}},[e._v("查询")])],1),e._v(" "),r("el-form-item")],1)],1),e._v(" "),r("el-col",[r("el-col",{attrs:{span:6}},[e._v("总订单条数 ："),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.homeData.totalOrderCount))])]),e._v(" "),r("el-col",{attrs:{span:6}},[e._v("抢票中："),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.homeData.robbingCount))])]),e._v(" "),r("el-col",{attrs:{span:6}},[e._v("交易成功："),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.homeData.successCount))])]),e._v(" "),r("el-col",{attrs:{span:6}},[e._v("总收益："),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.homeData.totalProfit))])])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.orderList,"highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),r("el-table-column",{attrs:{label:"微信昵称",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.ownerInfo.wxNickname))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"expectDate",label:"所选出发日期",width:"160"}}),e._v(" "),r("el-table-column",{attrs:{prop:"origin",label:"出发地",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"destination",label:"目的地",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"trainNumber",label:"车次",width:"200"}}),e._v(" "),r("el-table-column",{attrs:{prop:"seat",label:"座位",width:"140"}}),e._v(" "),r("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.passengerList[0]?r("span",e._l(t.row.passengerList,function(t,o){return r("span",{key:o},[e._v("\n              "+e._s(t.name)+"、\n            ")])})):r("span")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"身份证号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.passengerList[0]?r("span",e._l(t.row.passengerList,function(t,o){return r("span",{key:o},[e._v("\n              "+e._s(t.idCard)+"、\n            ")])})):r("span")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"price",label:"抢票服务费",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"profit",label:"收益",width:"80"}}),e._v(" "),r("el-table-column",{attrs:{prop:"robbingTicketUserName",label:"抢票人员",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"statusStr",label:"状态",width:"80"}}),e._v(" "),r("el-table-column",{attrs:{prop:"createdAtStr",label:"创建时间",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{staticClass:"copyInfo",attrs:{size:"small","data-clipboard-target":"#foo"},on:{click:function(r){e.copyInfo(t.row)}}},[e._v("复制")]),e._v(" "),1===t.row.status?r("el-button",{attrs:{size:"small"},on:{click:function(r){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]):r("el-button",{attrs:{size:"small"},on:{click:function(r){e.handleEdit(t.$index,t.row)}}},[e._v("查看详情")])]}}])})],1),e._v(" "),r("el-col",{staticClass:"toolbar",staticStyle:{padding:"20px"},attrs:{span:24}},[r("el-button",{attrs:{disabled:0===e.multipleSelection.length,type:"warning"},on:{click:e.batch}},[e._v("批量删除")]),e._v(" "),r("el-pagination",{staticStyle:{float:"right"},attrs:{"page-size":e.param.page.size,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,50,100],total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t},close:function(t){e.handleClose("orderListForm")}}},[r("div",{staticClass:"el-dialog__title",staticStyle:{margin:"-30px 0 20px 0"}},[e._v(e._s(e.dialogOption.title))]),e._v(" "),r("el-form",{ref:"orderListForm",staticClass:"active",attrs:{"label-position":"left",rules:e.rules,model:e.orderListForm,"label-width":"120px"}},[r("el-form-item",{staticStyle:{display:"none"},model:{value:e.orderListForm.id,callback:function(t){e.$set(e.orderListForm,"id",t)},expression:"orderListForm.id"}}),e._v(" "),r("el-form-item",{attrs:{label:"微信号",prop:"ownerInfo.wxAccount"}},[r("el-input",{attrs:{disabled:"","auto-complete":"off"},model:{value:e.orderListForm.ownerInfo.wxAccount,callback:function(t){e.$set(e.orderListForm.ownerInfo,"wxAccount",t)},expression:"orderListForm.ownerInfo.wxAccount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信昵称",prop:"ownerInfo.wxNickname"}},[r("el-input",{attrs:{disabled:"","auto-complete":"off"},model:{value:e.orderListForm.ownerInfo.wxNickname,callback:function(t){e.$set(e.orderListForm.ownerInfo,"wxNickname",t)},expression:"orderListForm.ownerInfo.wxNickname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"ownerInfo.phone",rules:[{required:!0,message:"手机号码不能为空"}]}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status,"auto-complete":"off"},model:{value:e.orderListForm.ownerInfo.phone,callback:function(t){e.$set(e.orderListForm.ownerInfo,"phone",t)},expression:"orderListForm.ownerInfo.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出发地",prop:"origin"}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status,"auto-complete":"off"},model:{value:e.orderListForm.origin,callback:function(t){e.$set(e.orderListForm,"origin",t)},expression:"orderListForm.origin"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"目的地",prop:"destination"}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status,"auto-complete":"off"},model:{value:e.orderListForm.destination,callback:function(t){e.$set(e.orderListForm,"destination",t)},expression:"orderListForm.destination"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出发日期",prop:"departureDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期时间",disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status},model:{value:e.orderListForm.departureDate,callback:function(t){e.$set(e.orderListForm,"departureDate",t)},expression:"orderListForm.departureDate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所选出发日期",prop:"expectDateArr"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"dates",placeholder:"选择一个或多个日期","value-format":"yyyy-MM-dd","auto-complete":"off"},model:{value:e.expectDateArr,callback:function(t){e.expectDateArr=t},expression:"expectDateArr"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"车次",prop:"trainNumber"}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status,"auto-complete":"off"},model:{value:e.orderListForm.trainNumber,callback:function(t){e.$set(e.orderListForm,"trainNumber",t)},expression:"orderListForm.trainNumber"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"座位",prop:"seat"}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status,"auto-complete":"off"},model:{value:e.orderListForm.seat,callback:function(t){e.$set(e.orderListForm,"seat",t)},expression:"orderListForm.seat"}})],1),e._v(" "),e._l(e.orderListForm.passengerList,function(t,o){return r("el-form-item",{key:o,attrs:{label:"乘客信息"}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status},model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"domain.name"}}),r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status},model:{value:t.idCard,callback:function(r){e.$set(t,"idCard",r)},expression:"domain.idCard"}}),e._v(" "),r("el-button",{on:{click:e.addDomain}},[e._v("+")]),e._v(" "),r("el-button",{on:{click:function(r){r.preventDefault(),e.removeDomain(t)}}},[e._v("-")])],1)}),e._v(" "),r("el-form-item",{attrs:{label:"抢票服务费",prop:"price"}},[r("el-input",{attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status,"auto-complete":"off"},model:{value:e.orderListForm.price,callback:function(t){e.$set(e.orderListForm,"price",t)},expression:"orderListForm.price"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"接单人员",prop:"portalUserId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{disabled:1!==e.numberState&&2==e.orderListForm.status||1!==e.numberState&&3==e.orderListForm.status},model:{value:e.orderListForm.portalUserId,callback:function(t){e.$set(e.orderListForm,"portalUserId",t)},expression:"orderListForm.portalUserId"}},e._l(e.userOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.orderListForm.status,callback:function(t){e.$set(e.orderListForm,"status",t)},expression:"orderListForm.status"}},e._l(e.statusOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.status}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"抢票人员",prop:"robbingTicketUserId"}},[r("el-select",{staticStyle:{width:"100%"},model:{value:e.orderListForm.robbingTicketUserId,callback:function(t){e.$set(e.orderListForm,"robbingTicketUserId",t)},expression:"orderListForm.robbingTicketUserId"}},e._l(e.ticketOption,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"抢票价格",prop:"robbingPrice"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.orderListForm.robbingPrice,callback:function(t){e.$set(e.orderListForm,"robbingPrice",t)},expression:"orderListForm.robbingPrice"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"120px"}},[r("el-button",{attrs:{loading:e.submitLogining,type:"primary"},on:{click:function(t){e.onsavaorderList("orderListForm")}}},[e._v("保存")])],1)],2)],1)],1)};o._withStripped=!0;var a=r("6ZY3"),i=r.n(a),s=r("Nlzp"),n={data:function(){return{itemInfos:"",numberState:0,homeData:{},ticketOption:[],userOption:[],statusOption:[{status:"",label:"请选择"},{status:1,label:"抢票中"},{status:2,label:"交易成功"},{status:3,label:"交易关闭"}],total:null,listLoading:!1,submitLogining:!1,dialogOption:{title:"新增",status:!1},rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"change"}],origin:[{required:!0,message:"请输入出发地",trigger:"change"}],destination:[{required:!0,message:"请输入目的地",trigger:"change"}],trainNumber:[{required:!0,message:"请输入车次",trigger:"change"}],seat:[{required:!0,message:"请输入座位",trigger:"change"}],price:[{required:!0,message:"请输入抢票服务费",trigger:"change"}]},Backup:{passengerList:[{name:"",idCard:""}]},expectDateArr:[],orderListForm:{id:"",ownerInfo:{wxAccount:"",wxNickname:"",phone:""},origin:"",destination:"",departureDate:"",trainNumber:"",seat:"",price:"",robbingPrice:"",expectDate:"",passengerList:[{name:"",idCard:""}]},multipleSelection:[],orderIdList:[],orderList:[],NumberValue:0,form:{},addFormVisible:!1,param:{page:{page:1,size:10}}}},mounted:function(){this.getOrderData(),this.getOrderList(),this.getUserList(),this.getTicketUserLIist()},methods:{copyInfo:function(e){var t=this;this.itemInfos=e.expectDate+",  "+e.origin+"-"+e.destination+",  "+e.trainNumber+",  "+e.seat+"\r\n";for(var r=0;r<e.passengerList.length;r++)this.itemInfos+=e.passengerList[r].name+","+e.passengerList[r].idCard+"\r\n";this.itemInfos+="共"+e.passengerList.length+"人\r\n春节票服务费："+e.price/e.passengerList.length+"元/人   共"+e.price+"元\r\n先抢票后付款";var o=new this.clipboard(".copyInfo",{text:function(){return t.itemInfos}});o.on("success",function(){t.$message({message:"复制成功！",type:"success"})}),o.on("error",function(){t.$message({message:"复制失败，请手动选择复制！",type:"error"})})},removeDomain:function(e){var t=this.orderListForm.passengerList.indexOf(e);-1!==t&&this.orderListForm.passengerList.splice(t,1)},addDomain:function(){this.orderListForm.passengerList.push({name:"",idCard:""})},batch:function(){var e=this;this.$confirm("确定删除任务?","Prompt",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(function(){s.a.orderApi.deleteOrder(e.orderIdList).then(function(t){e.getOrderList()})}).catch(function(){})},handleSelectionChange:function(e){this.multipleSelection=e,this.orderIdList=this.multipleSelection.map(function(e){return e.id})},cleardata:function(){this.form.queryText=""},handleEdit:function(e,t){var r=this;this.numberState=0,this.param.id=t.id,s.a.orderApi.getOrderDetail(this.param).then(function(e){console.log(e);var t=e.data;r.orderListForm=t,r.expectDateArr=t.expectDate.split("、"),console.log(r.orderListForm)}),this.addFormVisible=!0,this.dialogOption.title="查看详情"},onsavaorderList:function(e){var t=this,r=i()([],this.expectDateArr);this.orderListForm.expectDate=r.join(",").replace(/,/g,"、");var o={};o.id=this.orderListForm.id,o.phone=this.orderListForm.ownerInfo.phone,o.ownerId=this.orderListForm.ownerInfo.id,o.origin=this.orderListForm.origin,o.destination=this.orderListForm.destination,o.expectDate=this.orderListForm.expectDate,o.departureDate=this.orderListForm.departureDate,o.trainNumber=this.orderListForm.trainNumber,o.seat=this.orderListForm.seat,o.passengerList=this.orderListForm.passengerList,o.price=this.orderListForm.price,o.portalUserId=this.orderListForm.portalUserId,o.robbingTicketUserId=this.orderListForm.robbingTicketUserId,o.status=this.orderListForm.status,o.robbingPrice=this.orderListForm.robbingPrice,this.submitLogining=!0,this.$refs[e].validate(function(e){if(!e)return t.$notify.error({title:"错误",message:"请填写完信息"}),t.submitLogining=!1,console.log("error submit!!"),!1;s.a.orderApi.orderSave(o).then(function(e){t.addFormVisible=!1,t.orderListForm.passengerList=t.Backup.passengerList,t.$notify({title:"成功",message:"修改成功",type:"success"}),t.submitLogining=!1,t.getOrderList()})})},handleCurrentChange:function(e){this.param.page.page=e,this.param[this.form.queryParam]=this.form.queryText,this.getOrderList()},handleSizeChange:function(e){this.param.page.size=e,this.param[this.form.queryParam]=this.form.queryText,this.getOrderList()},handleClose:function(e){this.$refs[e].resetFields(),delete this.param.id,this.orderListForm.id="",this.orderListForm.ownerInfo.wxAccount=null,this.orderListForm.ownerInfo.wxNickname=null,this.orderListForm.ownerInfo.phone=null,this.orderListForm.passengerList=this.Backup.passengerList,this.addFormVisible=!1},handleAdd:function(){this.numberState=1,this.dialogOption.title="新增",this.addFormVisible=!0},getInfo:function(){this.param=this.form;var e={page:1,size:10};this.param.page=e,this.getOrderList()},getOrderData:function(){var e=this;s.a.orderApi.getOrderData(this.param).then(function(t){e.homeData=t.data})},getTicketUserLIist:function(){var e=this;s.a.orderApi.ticketUserList(this.param).then(function(t){e.ticketOption=t.data})},getUserList:function(){var e=this;s.a.orderApi.getUserList(this.param).then(function(t){e.userOption=t.data})},getOrderList:function(){var e=this;this.listLoading=!0,s.a.orderApi.getOrderList(this.param).then(function(t){console.log(t.data),e.orderList=t.data.list,e.total=t.data.total,e.listLoading=!1})}}},l=(r("eGdN"),r("ZrdR")),d=Object(l.a)(n,o,[],!1,null,null,null);d.options.__file="src/views/table/index.vue";t.default=d.exports}}]);