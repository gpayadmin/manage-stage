(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f7134ca","chunk-692f0d2c","chunk-08cac0f0","chunk-4f166026","chunk-2d0b5d97","chunk-2d0b5d97","chunk-2d20fed6"],{"0b75":function(e,t,a){},"1b3c":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("b65a"),s=a("0fea"),n=a("ca00"),i=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e,t,a){e.length;for(var r="",s=0;s<10;s++)r+="*";return e.substring(0,t)+r+e.substring(e.length-a)},d={},f={},m={mixins:[r["a"]],data:function(){return{resultName:"",isorter:{column:"iCreateTime",order:"desc"},result:null,spUrl:this.getSProtocols()}},methods:c({},Object(i["c"])(["getSProtocols","getCountry"]),{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(s["j"])(this.url.list,a).then((function(e){e.success?(t.result=e.result,e.result.data[t.resultName].length>0?(t.dataSource=t.initResDatas(e.result.data[t.resultName]),t.ipagination.total=e.result.data.iTotalCount||e.result.data.total):t.dataSource=[]):t.$message.error(e.message)})).finally((function(){t.loading=!1}))}else this.$message.error("请设置url.list属性!")},searchQuery:function(){this.verifiedParams()&&this.loadData(1)},verifiedParams:function(){return!0},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.iPageNo=this.ipagination.current-1,t.iPageSize=this.ipagination.pageSize,t.sOrder=t.order,t.sColumn=t.column,delete t.order,delete t.column,Object(n["d"])(t)},handleDelete:function(e,t){var a=this;if(this.url.delete){this.loading=!0;var r=t||"iId";Object(s["j"])(this.url.delete,l({},r,e)).then((function(e){e.success?(a.$message.success(e.message),a.loadData()):(a.$message.warning(e.message),a.loading=!1)}))}else this.$message.error("请设置url.delete属性!")},initResDatas:function(e){return e},sPrAddres:function(e,t){var a=d||[],r="",s=!0,n=!1,i=void 0;try{for(var o,c=a[Symbol.iterator]();!(s=(o=c.next()).done);s=!0){var l=o.value;l.sChain==e&&(r="sAddressQueryUrl"==t?l.sAddressQueryUrl:l.sTxQueryUrl)}}catch(u){n=!0,i=u}finally{try{s||null==c.return||c.return()}finally{if(n)throw i}}return r}}),filters:{btcNum:function(e){if(!e)return"-";var t=u(e,5,5);return t},sProtocolUrl:function(e){var t=d||[],a={},r=!0,s=!1,n=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var c=i.value;c.sProtocol==e&&(a=c.data)}}catch(l){s=!0,n=l}finally{try{r||null==o.return||o.return()}finally{if(s)throw n}}return a[0]},countryVal:function(e){if(!e)return"暂无数据";var t="iId无对应国家",a=!0,r=!1,s=void 0;try{for(var n,i=f[Symbol.iterator]();!(a=(n=i.next()).done);a=!0){var o=n.value;o.iId==e&&(t=o.sCountryName)}}catch(c){r=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return t}},created:function(){f=this.getCountry(),d=this.spUrl}}},"238a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"账户昵称"}},[a("j-input",{attrs:{placeholder:"请输入账户昵称",type:"normal"},model:{value:e.queryParam.sNickName,callback:function(t){e.$set(e.queryParam,"sNickName",t)},expression:"queryParam.sNickName"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"手机号"}},[a("j-input",{attrs:{placeholder:"请输入手机号",type:"normal"},model:{value:e.queryParam.sCellphone,callback:function(t){e.$set(e.queryParam,"sCellphone",t)},expression:"queryParam.sCellphone"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"邮箱"}},[a("j-input",{attrs:{placeholder:"请输入邮箱",type:"normal"},model:{value:e.queryParam.sEmail,callback:function(t){e.$set(e.queryParam,"sEmail",t)},expression:"queryParam.sEmail"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"证件号"}},[a("a-input",{attrs:{placeholder:"请输入证件号"},model:{value:e.queryParam.sCertificateNo,callback:function(t){e.$set(e.queryParam,"sCertificateNo",t)},expression:"queryParam.sCertificateNo"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"申请时间"}},[a("a-range-picker",{attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onCreateTimeChange},model:{value:e.queryParam.iCreateTime,callback:function(t){e.$set(e.queryParam,"iCreateTime",t)},expression:"queryParam.iCreateTime"}})],1)],1),a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-form-item",{attrs:{label:"审核状态"}},[a("a-select",{attrs:{placeholder:"请选择审核状态",allowClear:""},on:{change:e.searchQuery},model:{value:e.queryParam.iStatus,callback:function(t){e.$set(e.queryParam,"iStatus",t)},expression:"queryParam.iStatus"}},[a("a-select-option",{attrs:{value:1}},[e._v("待审核")]),a("a-select-option",{attrs:{value:2}},[e._v("审核通过")]),a("a-select-option",{attrs:{value:3}},[e._v("审核驳回")])],1)],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",[a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"iId",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:null},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"sCountryName",fn:function(t,r){return a("span",{},[e._v("\n        "+e._s(e._f("countryVal")(r.iCountryId))+"\n      ")])}},{key:"iStatus",fn:function(t,r){return a("span",{},[1===t?a("div",[a("a-badge",{attrs:{status:"warning"}}),e._v("\n          待审核\n        ")],1):e._e(),2===t?a("div",[a("a-badge",{attrs:{status:"success"}}),e._v("\n          审核通过")],1):e._e(),3===t?a("div",[a("a-badge",{attrs:{status:"error"}}),e._v("\n          审核驳回\n        ")],1):e._e()])}},{key:"action",fn:function(t,r){return a("span",{},[1===r.iStatus?a("a",{on:{click:function(t){return e.handleAuth(r)}}},[e._v("审核")]):a("a",{on:{click:function(t){return e.showDetail(r)}}},[e._v("详情")])])}}])})],1),a("senior-auth-modal",{ref:"modalForm",attrs:{authData:e.authData,type:e.modalType},on:{ok:e.modalFormOk}})],1)},s=[],n=a("1b3c"),i=(a("ca00"),a("89f2"),a("5a0c")),o=a.n(i),c=a("4349"),l=a("c870"),u={name:"SeniorAuth",mixins:[n["a"]],components:{JInput:c["default"],SeniorAuthModal:l["default"]},data:function(){var e=this;return{description:"高级认证",sexDictOptions:[],isorter:{column:"",order:""},resultName:"vLiveCertificateInfo",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(t,a,r){return parseInt(r)+1+(e.ipagination.current-1)*e.ipagination.pageSize}},{title:"UID",align:"center",dataIndex:"iUserId"},{title:"账户昵称",align:"center",dataIndex:"sNickName",customRender:function(e,t,a){return e&&""!==e?e:"用户未设置"}},{title:"手机号",align:"center",dataIndex:"sCellphone"},{title:"邮箱",align:"center",dataIndex:"sEmail"},{title:"证件号",align:"center",dataIndex:"sCertificateNo"},{title:"姓名",align:"center",dataIndex:"sSurname",customRender:function(e,t){return e+t.sName}},{title:"国家",align:"center",dataIndex:"sCountryName",scopedSlots:{customRender:"sCountryName"}},{title:"审核状态",align:"center",dataIndex:"iStatus",scopedSlots:{customRender:"iStatus"}},{title:"申请时间",align:"center",dataIndex:"iCreateTime",customRender:function(e){return o()(e).format("YYYY-MM-DD HH:mm")}},{title:"审核时间",align:"center",dataIndex:"iVerifyTime",customRender:function(e){return 0!==e?o()(e).format("YYYY-MM-DD HH:mm"):""}},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],settingColumns:[],defColumns:[],url:{list:"/v1/udc/GetLiveCertificateList"},modalType:"",authData:{}}},methods:{onCreateTimeChange:function(e,t){this.queryParam.iCreateTime_Begin=o()(t[0]).startOf("day").valueOf(),this.queryParam.iCreateTime_End=o()(t[1]).endOf("day").valueOf()},handleAuth:function(e){this.authData=e,this.modalType="auth",this.$refs.modalForm.bIsSuccess=!0,this.$refs.modalForm.getData(e),this.$refs.modalForm.visible=!0},showDetail:function(e){this.authData=e,this.modalType="detail",this.$refs.modalForm.getData(e),this.$refs.modalForm.visible=!0}},created:function(){}},d=u,f=a("2877"),m=Object(f["a"])(d,r,s,!1,null,"6526f463",null);t["default"]=m.exports},"303b":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("ca00");var r,s=a("2f62");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={data:function(){return{country:""}},methods:i({},Object(s["c"])(["getCountry"])),filters:{countryVal:function(e){if(!e)return"暂无数据";var t="iId无对应国家",a=!0,s=!1,n=void 0;try{for(var i,o=r[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var c=i.value;c.iId==e&&(t=c.sCountryName)}}catch(l){s=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return t}},created:function(){r=this.getCountry()}}},4349:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-input",{attrs:{placeholder:e.placeholder,value:e.inputVal},on:{input:e.backValue}})},s=[],n="like",i="ne",o="ge",c="le",l={name:"JInput",props:{value:{type:String,required:!1},type:{type:String,required:!1,default:n},placeholder:{type:String,required:!1,default:""},trim:{type:Boolean,required:!1,default:!1}},watch:{value:{immediate:!0,handler:function(){this.initVal()}},type:function(){this.backValue({target:{value:this.inputVal}})}},model:{prop:"value",event:"change"},data:function(){return{inputVal:""}},methods:{initVal:function(){if(this.value){var e=this.value;switch(this.type){case n:-1!=e.indexOf("*")&&(e=e.substring(1,e.length-1));break;case i:e=e.substring(1);break;case o:e=e.substring(2);break;case c:e=e.substring(2);break;default:}this.inputVal=e}else this.inputVal=""},backValue:function(e){var t=e.target.value;switch(t&&!0===this.trim&&(t=t.trim()),this.type){case n:t="*"+t+"*";break;case i:t="!"+t;break;case o:t=">="+t;break;case c:t="<="+t;break;default:}this.$emit("change",t)}}},u=l,d=a("2877"),f=Object(d["a"])(u,r,s,!1,null,"9b2fd3f2",null);t["default"]=f.exports},"9e7f":function(e,t,a){"use strict";var r=a("0b75"),s=a.n(r);s.a},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("ca00"),s=a("0fea"),n=a("2b0e"),i=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{tokenHeader:{"X-Access-Token":n["default"].ls.get(i["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","50","100"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and"}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(s["d"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(r["d"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(e){this.queryParam=e||{},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(s["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(s["a"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(s["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if(e.file.status,"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,s=a.result,n=s.msg,i=s.fileUrl,o=s.fileName,c=window._CONFIG["domianURL"]+i;this.$warning({title:r,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:c,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(s["e"])(e)},downloadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(s["e"])(e);window.open(t)}else this.$message.warning("未知的文件")}}}},c870:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,okButtonProps:{props:{disabled:"detail"===e.type}},destroyOnClose:!0,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-tabs",{attrs:{type:"card",defaultActiveKey:"2"}},[a("a-tab-pane",{key:"1",attrs:{tab:"初级认证"}},[a("div",{staticStyle:{"margin-bottom":"24px"}},[a("a-alert",{attrs:{message:"审核通过",description:e.certificateInfo.sRemark,type:"success","show-icon":""}})],1),a("a-descriptions",{attrs:{title:"初级认证信息"}},[a("a-descriptions-item",{attrs:{label:"国籍"}},[e._v("\n          "+e._s(e._f("countryVal")(e.authData.iCountryId))+"\n        ")]),a("a-descriptions-item",{attrs:{label:"姓名"}},[e._v("\n          "+e._s(e.authData.sSurname)+"， "+e._s(e.authData.sName)+"\n        ")]),a("a-descriptions-item",{attrs:{label:"证件号"}},[e._v("\n          "+e._s(e.authData.sCertificateNo)+"\n        ")]),a("a-descriptions-item",{attrs:{label:"手机号"}},[e._v("\n          "+e._s(e.authData.sCellphone)+"\n        ")]),a("a-descriptions-item",{attrs:{label:"邮箱"}},[e._v("\n          "+e._s(e.authData.sEmail)+"\n        ")]),a("a-descriptions-item",{attrs:{label:"申请时间"}},[e._v("\n          "+e._s(e.moment(e.authData.iCreateTime).format("YYYY-MM-DD HH:mm:ss"))+"\n        ")]),a("a-descriptions-item",{attrs:{label:"证件正面照"}},[a("div",{staticClass:"img-warp"},[a("img",{attrs:{src:e.sFrontImg,large:e.sFrontImg,preview:"1","preview-text":"证件正面照"}})])]),a("a-descriptions-item",{attrs:{label:"证件反面照"}},[a("div",{staticClass:"img-warp"},[a("img",{attrs:{src:e.sBackImg,large:e.sBackImg,preview:"1","preview-text":"证件反面照"}})])]),a("a-descriptions-item",{attrs:{label:"手持证件照"}},[a("div",{staticClass:"img-warp"},[e.sHandImg?a("img",{attrs:{src:e.sHandImg,large:e.sHandImg,preview:"1","preview-text":"手持证件照"}}):e._e()])])],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"高级认证"}},[2===e.authData.iStatus?a("div",[a("a-alert",{attrs:{message:"审核通过",description:e.authData.sRemark,type:"success","show-icon":""}})],1):e._e(),3===e.authData.iStatus?a("div",[a("a-alert",{attrs:{message:"审核驳回",description:e.authData.sRefuseReasonCode,type:"error","show-icon":""}})],1):e._e(),a("a-descriptions",{staticStyle:{"margin-top":"24px"},attrs:{title:"高级认证信息"}},[a("a-descriptions-item",{attrs:{label:"认证视频"}},[a("div",{staticClass:"video-warp"},[a("video",{attrs:{src:e.sOssVideo,alt:"avatar",controls:"controls"}})])])],1),1===e.authData.iStatus?a("a-form",{staticStyle:{"margin-top":"24px"},attrs:{form:e.form}},[a("a-form-item",{staticStyle:{"margin-bottom":"0px"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["bIsSuccess",e.validatorRules.bIsSuccess],expression:"['bIsSuccess', validatorRules.bIsSuccess]"}],attrs:{"button-style":"solid"},on:{change:function(t){return e.bIsSuccess=t.target.value}}},[a("a-radio-button",{attrs:{value:!0}},[e._v("\n              审核通过\n            ")]),a("a-radio-button",{attrs:{value:!1}},[e._v("\n              审核驳回\n            ")])],1)],1),e.bIsSuccess?a("a-form-item",{attrs:{label:"备注",hasFeedback:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRemark",e.validatorRules.sRemark],expression:"['sRemark', validatorRules.sRemark]"}],attrs:{placeholder:"请输入备注(最多40个字)",maxLength:40,"auto-size":{minRows:4,maxRows:6},size:"large"}})],1):e._e(),e.bIsSuccess?e._e():a("a-form-item",{attrs:{label:"驳回原因",hasFeedback:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["sRefuseReasonCode",e.validatorRules.sRefuseReasonCode],expression:"['sRefuseReasonCode', validatorRules.sRefuseReasonCode]"}],attrs:{placeholder:"请输入驳回原因(最多40个字)",maxLength:40,"auto-size":{minRows:4,maxRows:6},size:"large"}})],1)],1):e._e()],1)],1)],1)},s=[],n=a("5a0c"),i=a.n(n),o=a("0fea"),c=a("2f62"),l=a("303b"),u=a("d6ec");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h={name:"SeniorAuthModal",mixins:[l["a"]],props:{type:String,authData:Object},data:function(){return{visible:!1,confirmLoading:!1,form:this.$form.createForm(this),bIsSuccess:!0,url:{LiveCertificateApproval:"/v1/udc/LiveCertificateApproval",GetCertificate:"/v1/udc/GetCertificate"},validatorRules:{bIsSuccess:{rules:[{required:!0,message:"请选择审核结果",type:"boolean"}],initialValue:!0},sRemark:{rules:[{required:!0,message:"请输入备注"}]},sRefuseReasonCode:{rules:[{required:!0,message:"请输入驳回原因",whitespace:!0}]}},certificateInfo:{},sFrontImg:"",sBackImg:"",sHandImg:"",sOssVideo:""}},computed:{title:function(){return"auth"===this.type?"高级认证审核":"认证详情"}},created:function(){},methods:f({moment:i.a},Object(c["c"])(["userInfo"]),{handleOk:function(){var e=this;this.form.validateFields((function(t,a){if(!t){e.confirmLoading=!0;var r={iLiveCertificateId:e.authData.iId,bIsSuccess:e.bIsSuccess,iUserId:e.authData.iUserId,sApprovalId:e.userInfo().username};e.bIsSuccess?(r.sRemark=a.sRemark,r.sRefuseReasonCode=" "):(r.sRemark=" ",r.sRefuseReasonCode=a.sRefuseReasonCode),Object(o["j"])(e.url.LiveCertificateApproval,r).then((function(t){t.success?(e.$emit("ok"),e.$message.success("审核完成！"),e.handleCancel()):(e.$message.error(t.message),e.confirmLoading=!1)})).catch((function(){return e.confirmLoading=!1}))}}))},handleCancel:function(){this.confirmLoading=!1,this.sFrontImg="",this.sBackImg="",this.sHandImg="",this.sOssVideo="",this.visible=!1},getData:function(e){var t=this;Object(o["j"])(this.url.GetCertificate,{iUserId:e.iUserId}).then((function(e){t.certificateInfo=e.result.data.stInfor,Object(u["a"])(t.certificateInfo.sFrontImg).then((function(e){t.sFrontImg=e})),Object(u["a"])(t.certificateInfo.sBackImg).then((function(e){t.sBackImg=e})),Object(u["a"])(t.certificateInfo.sHandImg).then((function(e){t.sHandImg=e}))})),Object(u["a"])(e.sOssVideo).then((function(e){t.sOssVideo=e}))}})},p=h,g=(a("9e7f"),a("2877")),b=Object(g["a"])(p,r,s,!1,null,"26e4c414",null);t["default"]=b.exports},d6ec:function(e,t,a){"use strict";var r=a("a34a"),s=a.n(r),n=a("0fea");function i(e,t,a,r,s,n,i){try{var o=e[n](i),c=o.value}catch(l){return void a(l)}o.done?t(c):Promise.resolve(c).then(r,s)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var n=e.apply(t,a);function o(e){i(n,r,s,o,c,"next",e)}function c(e){i(n,r,s,o,c,"throw",e)}o(void 0)}))}}t["a"]=function(){var e=o(s.a.mark((function e(t){var a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["j"])("/v1/oss/GetSignedUrl",{sOssKey:t});case 2:return a=e.sent,e.abrupt("return",a.result.data.sUrlPath);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);