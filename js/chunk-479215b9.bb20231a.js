(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-479215b9","chunk-2d0bdf09"],{"2dab":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{dropdownClassName:"j-date-picker",disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},n=[],s=a("c1df"),i=a.n(s),o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?i()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?i()(e,this.dateFormat):null}},methods:{moment:i.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=o,c=a("2877"),u=Object(c["a"])(l,r,n,!1,null,null,null);t["default"]=u.exports},"3c53":function(e,t,a){},"74c6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userName",{}],expression:"['userName', {}]"}],attrs:{placeholder:"请输入用户名",readOnly:""}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理人用户名"}},[a("j-select-user-by-dep",{directives:[{name:"decorator",rawName:"v-decorator",value:["agentUserName",e.validatorRules.agentUserName],expression:"['agentUserName', validatorRules.agentUserName]"}],attrs:{placeholder:"请输入代理人用户名","trigger-change":!0}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理开始时间"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["startTime",e.validatorRules.startTime],expression:"[ 'startTime', validatorRules.startTime]"}],staticStyle:{width:"100%"},attrs:{"trigger-change":!0,showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择开始时间"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"代理结束时间"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["endTime",e.validatorRules.endTime],expression:"[ 'endTime', validatorRules.endTime]"}],staticStyle:{width:"100%"},attrs:{"trigger-change":!0,showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择结束时间"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{}],expression:"[ 'status', {}]"}],staticClass:"fontiframe",attrs:{name:"radioGroup"}},[a("a-radio",{staticClass:"radioGroup",attrs:{value:"1"}},[e._v("有效")]),a("a-radio",{staticClass:"radioGroup",attrs:{value:"0"}},[e._v("无效")])],1)],1)],1)],1)],1)},n=[],s=a("88bc"),i=a.n(s),o=a("0fea"),l=a("2dab"),c=a("c14a"),u={name:"SysUserAgentModal",components:{JDate:l["default"],JSelectUserByDep:c["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},username:"",confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{agentUserName:{rules:[{required:!0,message:"请输入代理人用户名!"}]},startTime:{rules:[{required:!0,message:"请输入代理开始时间!"}]},endTime:{rules:[{required:!0,message:"请输入代理结束时间!"}]}},url:{add:"/sys/sysUserAgent/add",edit:"/sys/sysUserAgent/edit",queryByUserName:"/sys/sysUserAgent/queryByUserName"}}},created:function(){},methods:{agentSettings:function(e){this.username=e,this.init()},init:function(){var e=this,t={userName:this.username};Object(o["d"])(this.url.queryByUserName,t).then((function(t){t.success?e.edit(t.result):e.edit({userName:e.username,status:"0"})}))},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(i()(t.model,"userName","agentUserName","status","startTime","endTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var n="",s="";e.model.id?(n+=e.url.edit,s="put"):(n+=e.url.add,s="post");var i=Object.assign(e.model,r);Object(o["i"])(n,i,s).then((function(e){e.success?t.$message.success(e.message):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},d=u,h=a("2877"),m=Object(h["a"])(d,r,n,!1,null,"5e663c2e",null);t["default"]=m.exports},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,n="[object Arguments]",s="[object Function]",i="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function h(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function m(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var p=Object.prototype,f=p.hasOwnProperty,g=p.toString,v=u.Symbol,y=p.propertyIsEnumerable,b=v?v.isConcatSpreadable:void 0,w=Math.max;function S(e,t,a,r,n){var s=-1,i=e.length;a||(a=j),n||(n=[]);while(++s<i){var o=e[s];t>0&&a(o)?t>1?S(o,t-1,a,r,n):m(n,o):r||(n[n.length]=o)}return n}function C(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var r=-1,n=t.length,s={};while(++r<n){var i=t[r],o=e[i];a(o,i)&&(s[i]=o)}return s}function D(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=w(a.length-t,0),s=Array(n);while(++r<n)s[r]=a[t+r];r=-1;var i=Array(t+1);while(++r<t)i[r]=a[r];return i[t]=s,d(e,this,i)}}function j(e){return N(e)||U(e)||!!(b&&e&&e[b])}function T(e){if("string"==typeof e||F(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function U(e){return O(e)&&f.call(e,"callee")&&(!y.call(e,"callee")||g.call(e)==n)}var N=Array.isArray;function I(e){return null!=e&&R(e.length)&&!k(e)}function O(e){return B(e)&&I(e)}function k(e){var t=q(e)?g.call(e):"";return t==s||t==i}function R(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||B(e)&&g.call(e)==o}var K=D((function(e,t){return null==e?{}:C(e,h(S(t,1),T))}));e.exports=K}).call(this,a("c8ba"))},"9ee5":function(e,t,a){"use strict";var r=a("3c53"),n=a.n(r);n.a},a505:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-modal",{staticStyle:{top:"50px"},attrs:{width:e.modalWidth,visible:e.visible,title:e.title,switchFullscreen:"",cancelText:"关闭"},on:{ok:e.handleSubmit,cancel:e.close}},[a("a-row",{staticStyle:{"background-color":"#ececec",padding:"10px",margin:"-10px"},attrs:{gutter:10}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-directory-tree",{attrs:{selectable:"",selectedKeys:e.selectedDepIds,checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,expandAction:!1,expandedKeys:e.expandedKeys},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.onDepSelect}})],1)],1),a("a-col",{attrs:{md:18,sm:24}},[a("a-card",{attrs:{bordered:!1}},[e._v("\n        用户账号:\n        "),a("a-input-search",{style:{width:"150px",marginBottom:"15px"},attrs:{placeholder:"请输入账号"},on:{search:e.onSearch},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}}),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"redo"},on:{click:function(t){return e.searchReset(1)}}},[e._v("重置")]),a("a-table",{ref:"table",attrs:{scroll:e.scrollTrigger,size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},loading:e.loading},on:{change:e.handleTableChange}})],1)],1)],1)],1)},n=[],s=a("a34a"),i=a.n(s),o=a("ca00"),l=a("4ec3");function c(e,t,a,r,n,s,i){try{var o=e[s](i),l=o.value}catch(c){return void a(c)}o.done?t(l):Promise.resolve(l).then(r,n)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function i(e){c(s,r,n,i,o,"next",e)}function o(e){c(s,r,n,i,o,"throw",e)}i(void 0)}))}}var d={name:"JSelectUserByDepModal",components:{},props:["modalWidth","multi","userIds"],data:function(){return{queryParam:{username:""},columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户姓名",align:"center",dataIndex:"realname"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1===e?"男":2===e?"女":e}},{title:"手机",align:"center",dataIndex:"phone"},{title:"部门",align:"center",dataIndex:"orgCode"}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectUserRows:[],selectUserIds:[],title:"根据部门选择用户",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},selectedDepIds:[],departTree:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[]}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{userIds:{immediate:!0,handler:function(){this.initUserNames()}}},created:function(){this.resetScreenSize(),this.loadData()},methods:{initUserNames:function(){var e=this;if(this.userIds){var t=this.userIds.split(",")+",";Object(l["C"])({username:t,pageNo:1,pageSize:t.length}).then((function(t){if(t.success){var a=[],r=[];t.result.records.forEach((function(e){r.push(e["realname"]),a.push(e["id"])})),e.selectedRowKeys=a,e.$emit("initComp",r.join(","))}}))}else this.$emit("initComp","")},loadData:function(){var e=u(i.a.mark((function e(t){var a,r=this;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1===t&&(this.ipagination.current=1),!(this.selectedDepIds&&this.selectedDepIds.length>0)){e.next=6;break}return e.next=4,this.initQueryUserByDepId(this.selectedDepIds);case 4:e.next=10;break;case 6:return this.loading=!0,a=this.getQueryParams(),e.next=10,Object(l["C"])(a).then((function(e){e.success&&(r.dataSource=e.result.records,r.ipagination.total=e.result.total)})).finally((function(){r.loading=!1}));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),resetScreenSize:function(){var e=document.body.clientWidth;this.scrollTrigger=e<500?{x:800}:{}},showModal:function(){this.visible=!0,this.queryDepartTree(),this.initUserNames(),this.loadData(),this.form.resetFields()},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(o["d"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},searchReset:function(e){var t=this;0!==e&&(t.queryParam={},t.loadData(1)),t.selectedRowKeys=[],t.selectUserIds=[],t.selectedDepIds=[]},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleSubmit:function(){var e=this;this.getSelectUserRows(),e.$emit("ok",e.selectUserRows,e.selectUserIds),e.searchReset(0),e.close()},getSelectUserRows:function(e){var t=this.dataSource,a="";this.selectUserRows=[];for(var r=0,n=t.length;r<n;r++)this.selectedRowKeys.includes(t[r].id)&&(this.selectUserRows.push(t[r]),a=a+","+t[r].username);this.selectUserIds=a.substring(1)},onDepSelect:function(e){null!=e[0]&&(this.initQueryUserByDepId(e),this.selectedDepIds[0]!==e[0]&&(this.selectedDepIds=[e[0]]))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onSearch:function(){this.loadData(1)},initQueryUserByDepId:function(e){var t=this;return this.loading=!0,Object(l["S"])({id:e.toString()}).then((function(e){e.success&&(t.dataSource=e.result,t.ipagination.total=e.result.length)})).finally((function(){t.loading=!1}))},queryDepartTree:function(){var e=this;Object(l["H"])().then((function(t){t.success&&(e.departTree=t.result,e.expandedKeys=e.departTree.map((function(e){return e.id})))}))},modalFormOk:function(){this.loadData()}}},h=d,m=(a("9ee5"),a("2877")),p=Object(m["a"])(h,r,n,!1,null,"6e33dfa5",null);t["default"]=p.exports},c14a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-input-search",{attrs:{placeholder:"请先选择用户",readOnly:"",unselectable:"on"},on:{search:e.onSearchDepUser},model:{value:e.userNames,callback:function(t){e.userNames=t},expression:"userNames"}},[a("a-button",{attrs:{slot:"enterButton",disabled:e.disabled},slot:"enterButton"},[e._v("选择用户")])],1),a("j-select-user-by-dep-modal",{ref:"selectModal",attrs:{"modal-width":e.modalWidth,multi:e.multi,"user-ids":e.value},on:{ok:e.selectOK,initComp:e.initComp}})],1)},n=[],s=a("a505"),i={name:"JSelectUserByDep",components:{JSelectUserByDepModal:s["default"]},props:{modalWidth:{type:Number,default:1250,required:!1},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},multi:{type:Boolean,default:!0,required:!1}},data:function(){return{userIds:"",userNames:""}},mounted:function(){this.userIds=this.value},watch:{value:function(e){this.userIds=e}},model:{prop:"value",event:"change"},methods:{initComp:function(e){this.userNames=e},onSearchDepUser:function(){this.$refs.selectModal.showModal()},selectOK:function(e,t){if(e){var a="",r=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value;a+=","+l.realname}}catch(c){n=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(n)throw s}}this.userNames=a.substring(1),this.userIds=t}else this.userNames="",this.userIds="";this.$emit("change",this.userIds)}}},o=i,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,"bd3f15c8",null);t["default"]=c.exports}}]);