(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6835d060","chunk-9ff0785c","chunk-f2daa970","chunk-68b7eed5"],{"0472":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticStyle:{background:"#fff","padding-left":"16px",height:"100%","margin-top":"5px"}},[a("div",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[e._v("部门列表")]),e.departTree.length>0?[a("a-tree",{attrs:{showLine:"",selectedKeys:e.selectedKeys,checkStrictly:!0,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,autoExpandParent:e.autoExpandParent,expandedKeys:e.iExpandedKeys},on:{select:e.onSelect,expand:e.onExpand}})]:0==e.departTree.length?a("div",{staticStyle:{"margin-top":"24px"}},[a("h3",[a("span",[e._v("您的部门下暂无有效部门信息")])])]):e._e()],2)])],1),a("a-col",{attrs:{md:20,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-tabs",{attrs:{defaultActiveKey:"2"},on:{change:e.callback}},["noDepart"!==e.selectedKeys[0]?a("a-tab-pane",{key:"1",attrs:{tab:"基本信息",forceRender:""}},[a("Dept-Base-Info",{ref:"DeptBaseInfo"})],1):e._e(),a("a-tab-pane",{key:"2",attrs:{tab:"用户信息"}},[a("Dept-User-Info",{ref:"DeptUserInfo",attrs:{noDepart:"noDepart"===e.selectedKeys[0]},on:{clearSelectedDepartKeys:e.clearSelectedDepartKeys}})],1),"noDepart"!==e.selectedKeys[0]?a("a-tab-pane",{key:"3",attrs:{tab:"部门角色",forceRender:""}},[a("dept-role-info",{ref:"DeptRoleInfo",on:{clearSelectedDepartKeys:e.clearSelectedDepartKeys}})],1):e._e()],1)],1)],1)],1)},s=[],n=a("773a"),i=a("88fe"),o=a("4ec3"),l=a("b65a"),d=a("24b9"),c={name:"DepartUserNewList",mixins:[l["a"]],components:{DeptRoleInfo:d["default"],DeptBaseInfo:n["default"],DeptUserInfo:i["default"]},data:function(){return{currentDeptId:"",topdept:"",iExpandedKeys:[],loading:!1,autoExpandParent:!0,currFlowId:"",currFlowName:"",disable:!0,treeData:[],visible:!1,departTree:[],rightClickSelectedKey:"",hiding:!0,model:{},dropTrigger:"",depart:{},disableSubmit:!1,checkedKeys:[],selectedKeys:[],autoIncr:1,currSelected:{},form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},graphDatasource:{nodes:[],edges:[]},userIdentity:""}},methods:{callback:function(e){},loadData:function(){this.refresh()},clearSelectedDepartKeys:function(){this.checkedKeys=[],this.selectedKeys=[],this.currentDeptId="",this.$refs.DeptUserInfo.currentDeptId="",this.$refs.DeptRoleInfo.currentDeptId=""},loadTree:function(){var e=this,t=this;t.treeData=[],t.departTree=[],Object(o["K"])().then((function(a){if(a.success&&a.result){for(var r=0;r<a.result.length;r++){var s=a.result[r];t.treeData.push(s),t.departTree.push(s),t.setThisExpandedKeys(s)}var n={title:"无部门",id:"noDepart",key:"noDepart"};t.treeData.push(n),t.departTree.push(n),e.onSelect([t.departTree[0].id],{node:{dataRef:t.departTree[0]}}),t.topdept=t.departTree[0].orgCode,t.$refs.DeptUserInfo.topdept=t.topdept,e.loading=!1}t.userIdentity=a.message}))},setThisExpandedKeys:function(e){e.children&&e.children.length>0&&this.iExpandedKeys.push(e.key)},refresh:function(){this.loading=!0,this.loadTree()},onExpand:function(e){this.iExpandedKeys=e,this.autoExpandParent=!1},onSearch:function(e){var t=this;e?Object(o["Y"])({keyWord:e,myDeptSearch:"1"}).then((function(e){if(e.success){t.departTree=[];for(var a=0;a<e.result.length;a++){var r=e.result[a];t.departTree.push(r)}}else t.$message.warning(e.message)})):t.loadTree()},onCheck:function(e,t){var a=t.node.dataRef;this.checkedKeys=[],this.currentDeptId=a.id,this.checkedKeys.push(a.id),this.$refs.DeptBaseInfo.open(a),this.$refs.DeptUserInfo.open(a),this.$refs.DeptRoleInfo.open(a),this.$refs.DeptUserInfo.topdept=this.topdept,this.hiding=!1},onSelect:function(e,t){var a=this,r=t.node.dataRef;this.selectedKeys=[r.id],this.checkedKeys.push(r.id),"noDepart"!==r.id?this.$nextTick((function(){a.$refs.DeptBaseInfo.open(r),a.$refs.DeptUserInfo.onClearSelected(),a.$refs.DeptUserInfo.open(r),a.$refs.DeptRoleInfo.onClearSelected(),a.$refs.DeptRoleInfo.open(r),a.topdept=a.departTree[0].orgCode,a.$refs.DeptUserInfo.topdept=a.departTree[0].orgCode})):(this.$refs.DeptUserInfo.onClearSelected(),this.$refs.DeptUserInfo.open(r),this.topdept=this.departTree[0].orgCode,this.$refs.DeptUserInfo.topdept=this.departTree[0].orgCode)}},created:function(){this.currFlowId=this.$route.params.id,this.currFlowName=this.$route.params.name}},u=c,p=(a("b901"),a("2877")),h=Object(p["a"])(u,r,s,!1,null,"12f78dad",null);t["default"]=h.exports},"1c50":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{centered:"",title:e.title,width:1e3,visible:e.visible,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:10}},[a("a-form-item",{attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入用户账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",[a("a-table",{attrs:{size:"small",bordered:"",rowKey:"id",columns:e.columns1,dataSource:e.dataSource1,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onSelectAll:e.onSelectAll,onSelect:e.onSelect,onChange:e.onSelectChange}},on:{change:e.handleTableChange}})],1)])],1)},s=[],n=a("ca00"),i=a("0fea"),o={name:"SelectUserModal",data:function(){var e=this;return{title:"添加已有用户",names:[],visible:!1,placement:"right",description:"",topdept:"",queryParam:{},columns1:[{title:"#",dataIndex:"",key:"rowIndex",width:50,align:"center",customRender:function(t,a,r){return parseInt(r)+1+(e.ipagination.current-1)*e.ipagination.pageSize}},{title:"用户账号",align:"center",width:100,dataIndex:"username"},{title:"用户名称",align:"center",width:100,dataIndex:"realname"},{title:"部门",align:"center",width:150,dataIndex:"orgCodeTxt"}],columns2:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"操作",dataIndex:"action",align:"center",width:100,scopedSlots:{customRender:"action"}}],dataSource1:[],dataSource2:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},loading:!1,selectedRowKeys:[],selectedRows:[],url:{list:"/sys/user/newlist"}}},created:function(){this.loadData()},methods:{searchQuery:function(){this.loadData(1)},searchReset:function(){this.queryParam={},this.loadData(1)},handleCancel:function(){this.visible=!1},handleOk:function(){this.dataSource2=this.selectedRowKeys,this.$emit("selectFinished",this.dataSource2),this.visible=!1},add:function(){this.visible=!0},loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.depCode=this.topdept,Object(i["d"])(this.url.list,a).then((function(e){e.success&&(t.dataSource1=e.result.records,t.ipagination.total=e.result.total)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,e.depCode=this.topdept,Object(n["d"])(e)},getQueryField:function(){},onSelectAll:function(e,t,a){if(!0===e)for(var r=0;r<a.length;r++)this.dataSource2.push(a[r]);else for(var s=0;s<a.length;s++)this.dataSource2.splice(this.dataSource2.indexOf(a[s]),1)},onSelect:function(e,t){if(!0===t)this.dataSource2.push(e);else{var a=this.dataSource2.indexOf(e);a>=0&&this.dataSource2.splice(this.dataSource2.indexOf(e),1)}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},handleDelete:function(e){this.dataSource2.splice(this.dataSource2.indexOf(e),1)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()}}},l=o,d=(a("6cb1"),a("2877")),c=Object(d["a"])(l,r,s,!1,null,"2609b3d9",null);t["default"]=c.exports},"1d64":function(e,t,a){"use strict";var r=a("b277"),s=a.n(r);s.a},3555:function(e,t,a){},"6cb1":function(e,t,a){"use strict";var r=a("8371"),s=a.n(r);s.a},"773a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{visible:e.visible}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",{}],expression:"['departName', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级部门"}},[a("a-tree-select",{staticStyle:{width:"100%",border:"none",outline:"none"},attrs:{disabled:"",dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeData,placeholder:"无"},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCode",{}],expression:"['orgCode', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{}],expression:"[ 'departOrder',{}]"}],staticStyle:{border:"0px"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"手机号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{}],expression:"['mobile', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{}],expression:"['address', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{}],expression:"['memo', {}]"}],staticStyle:{border:"0px"},attrs:{placeholder:""}})],1)],1)],1)},s=[],n=a("88bc"),i=a.n(n),o=a("4ec3"),l={name:"DeptBaseNewInfo",components:{},data:function(){return{departTree:[],id:"",model:{},visible:!1,disable:!0,treeData:[],form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:3}},wrapperCol:{xs:{span:24},sm:{span:16}}}},created:function(){this.loadTreeData()},methods:{loadTreeData:function(){var e=this;Object(o["J"])().then((function(t){if(t.success)for(var a=0;a<t.result.length;a++){var r=t.result[a];e.treeData.push(r)}}))},open:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(i()(e,"orgCategory","departName","parentId","orgCode","departOrder","mobile","fax","address","memo"))}))},clearForm:function(){this.form.resetFields(),this.treeData=[]}}},d=l,c=(a("eb9e"),a("2877")),u=Object(c["a"])(d,r,s,!1,null,"00e84c96",null);t["default"]=u.exports},8034:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!1,width:"600",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[e.designNameOption.length>0?a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:""}},[a("a-col",{attrs:{xl:24,lg:24,md:24,sm:24,xs:24}},[a("a-card",{style:{marginTop:"12px",height:"auto"}},[a("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.designNameChange},model:{value:e.designNameValue,callback:function(t){e.designNameValue=t},expression:"designNameValue"}},[a("a-row",[e._l(e.designNameOption,(function(t){return[a("a-col",{attrs:{span:6}},[a("a-checkbox",{attrs:{value:t.value}},[e._v(e._s(t.text))])],1)]}))],2)],1)],1)],1)],1)],1):a("div",[a("h3",[e._v("无可配置角色!")])])],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"2",on:{click:e.cancelCheckALL}},[e._v("取消全选")])],1),a("a-button",[e._v("\n        操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存")])],1)],1)},s=[],n=a("0fea"),i=a("d579"),o=(a("89f2"),{name:"DeptRoleUserModal",components:{JEllipsis:i["default"]},data:function(){return{currentDeptId:"",title:"部门角色分配",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/sys/sysDepartRole/deptRoleUserAdd",getDeptRoleList:"/sys/sysDepartRole/getDeptRoleList",getDeptRoleByUserId:"/sys/sysDepartRole/getDeptRoleByUserId"},designNameOption:[],userId:"",newRoleId:"",oldRoleId:"",designNameValue:[],desformList:[]}},created:function(){},methods:{add:function(e,t){this.userId=e.id,this.currentDeptId=t,this.loadDesformList(),this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,Object(n["d"])(this.url.getDeptRoleByUserId,{userId:this.userId,departId:this.currentDeptId}).then((function(e){if(e.success){var a=[],r=!0,s=!1,n=void 0;try{for(var i,o=e.result[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value;a.push(l.droleId)}}catch(d){s=!0,n=d}finally{try{r||null==o.return||o.return()}finally{if(s)throw n}}t.oldRoleId=a.join(","),t.designNameValue=a,t.newRoleId=a.join(",")}}))},close:function(){this.$emit("close"),this.visible=!1},handleSubmit:function(){var e=this;e.confirmLoading=!0;var t=this.url.add,a="post",r=Object.assign(this.model,{});r.userId=this.userId,r.newRoleId=this.newRoleId,r.oldRoleId=this.oldRoleId,Object(n["i"])(t,r,a).then((function(t){t.success?(e.$message.success(t.message),e.$emit("reload"),e.$emit("ok")):e.$message.warning(t.message)})).finally((function(){e.confirmLoading=!1,e.close()}))},handleCancel:function(){this.designNameOption=[],this.designNameValue=[],this.close()},designNameChange:function(e){this.newRoleId=e.join(",")},checkALL:function(){var e=[],t=!0,a=!1,r=void 0;try{for(var s,n=this.desformList[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var i=s.value;e.push(i.id)}}catch(o){a=!0,r=o}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}this.designNameValue=e,this.newRoleId=e.join(",")},cancelCheckALL:function(){this.designNameValue=[],this.newRoleId=""},loadDesformList:function(){var e=this;Object(n["d"])(this.url.getDeptRoleList,{departId:this.currentDeptId,userId:this.userId}).then((function(t){if(t.success){e.desformList=t.result;var a=[],r=!0,s=!1,n=void 0;try{for(var i,o=e.desformList[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value;a.push({value:l.id,text:l.roleName})}}catch(d){s=!0,n=d}finally{try{r||null==o.return||o.return()}finally{if(s)throw n}}e.designNameOption=a}}))}}}),l=o,d=(a("8403"),a("2877")),c=Object(d["a"])(l,r,s,!1,null,"11c5d21a",null);t["default"]=c.exports},8371:function(e,t,a){},8403:function(e,t,a){"use strict";var r=a("e87e8"),s=a.n(r);s.a},"88fe":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),e.noDepart?e._e():a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"-15px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAddUserDepart}},[e._v("添加已有用户")]),a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新建用户")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n            取消关联\n          ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n          "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[e.noDepart?e._e():a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n        "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),e.noDepart?e._e():a("a-divider",{attrs:{type:"vertical"}}),e.noDepart?e._e():a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n              更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDeptRole(r)}}},[e._v("分配部门角色")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定取消与选中部门关联吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("取消关联")])])],1)],1)],1)],1)}}])})],1),a("user-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("Select-User-Modal",{ref:"selectUserModal",on:{selectFinished:e.selectOK}}),a("dept-role-user-modal",{ref:"deptRoleUser"})],1)},s=[],n=a("b65a"),i=a("0fea"),o=a("1c50"),l=a("42a6"),d=a("8034"),c={name:"DeptUserInfo",mixins:[n["a"]],props:{noDepart:{Boolean:Boolean,default:!1}},components:{DeptRoleUserModal:d["default"],SelectUserModal:o["default"],UserModal:l["default"]},data:function(){return{description:"用户信息",currentDeptId:"",topdept:"",columns:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"部门",align:"center",dataIndex:"orgCode"},{title:"性别",align:"center",dataIndex:"sex_dictText"},{title:"电话",align:"center",dataIndex:"phone"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:150}],url:{list:"/sys/user/departUserList",edit:"/sys/user/editSysDepartWithUser",delete:"/sys/user/deleteUserInDepart",deleteBatch:"/sys/user/deleteUserInDepartBatch"}}},created:function(){},methods:{searchReset:function(){this.queryParam={},this.loadData(1)},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.depId=this.currentDeptId,Object(i["d"])(this.url.list,a).then((function(e){e.success&&e.result&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))}else this.$message.error("请设置url.list属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.currentDeptId)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认取消",content:"是否取消用户与选中部门的关联?",onOk:function(){Object(i["a"])(a.url.deleteBatch,{depId:a.currentDeptId,userIds:e}).then((function(e){e.success?(a.$message.success("删除用户与选中部门关系成功！"),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)}))}})}else this.$message.error("未选中任何部门，无法取消部门与用户的关联!");else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){var t=this;if(this.url.delete)if(this.currentDeptId){var a=this;Object(i["a"])(a.url.delete,{depId:this.currentDeptId,userId:e}).then((function(r){if(r.success){if(a.$message.success("删除用户与选中部门关系成功！"),t.selectedRowKeys.length>0)for(var s=0;s<t.selectedRowKeys.length;s++)if(t.selectedRowKeys[s]==e){t.selectedRowKeys.splice(s,1);break}a.loadData()}else a.$message.warning(r.message)}))}else this.$message.error("未选中任何部门，无法取消部门与用户的关联!");else this.$message.error("请设置url.delete属性!")},open:function(e){this.currentDeptId=e.id,this.loadData(1)},clearList:function(){this.currentDeptId="",this.dataSource=[]},hasSelectDept:function(){return""!=this.currentDeptId||(this.$message.error("请选择一个部门!"),!1)},handleAddUserDepart:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.selectUserModal.topdept=this.topdept,this.$refs.selectUserModal.searchQuery(),this.$refs.selectUserModal.visible=!0)},handleEdit:function(e){this.$refs.modalForm.title="编辑",this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit(e)},handleAdd:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.userDepartModel.departIdList=[this.currentDeptId],this.$refs.modalForm.add(),this.$refs.modalForm.title="新增")},selectOK:function(e){var t=this,a={};a.depId=this.currentDeptId,a.userIdList=[];for(var r=0;r<e.length;r++)a.userIdList.push(e[r]);0!==a.userIdList.length?Object(i["j"])(this.url.edit,a).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)})):this.$message.warning("没有选择人员!")},handleDeptRole:function(e){""!=this.currentDeptId?(this.$refs.deptRoleUser.add(e,this.currentDeptId),this.$refs.deptRoleUser.title="部门角色分配"):this.$message.warning("请先选择一个部门!")}}},u=c,p=(a("1d64"),a("2877")),h=Object(p["a"])(u,r,s,!1,null,"402840a5",null);t["default"]=h.exports},b277:function(e,t,a){},b901:function(e,t,a){"use strict";var r=a("f41b"),s=a.n(r);s.a},d579:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tooltip",{attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},s=[],n={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},i=n,o=a("2877"),l=Object(o["a"])(i,r,s,!1,null,"51aeca46",null);t["default"]=l.exports},e87e8:function(e,t,a){},eb9e:function(e,t,a){"use strict";var r=a("3555"),s=a.n(r);s.a},f41b:function(e,t,a){}}]);