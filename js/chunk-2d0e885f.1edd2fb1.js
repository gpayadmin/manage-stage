(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e885f"],{"8a44":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("j-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,switchFullscreen:"",okButtonProps:{class:{"jee-hidden":e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-form",[r("a-row",[r("a-col",{attrs:{xl:6,lg:7,md:8,sm:24}},[r("a-form-item",{attrs:{label:"错误码分类"}},[r("a-input",{attrs:{placeholder:"请输入错误码分类"},model:{value:e.exportParam.errorCodeType,callback:function(t){e.$set(e.exportParam,"errorCodeType",t)},expression:"exportParam.errorCodeType"}})],1)],1)],1)],1)],1)},a=[],i=r("0fea"),l={name:"ErrorCodeExportModal",components:{},data:function(){return{title:"",width:800,visible:!1,exportParam:{errorCodeType:""},disableSubmit:!1}},methods:{add:function(){},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){null!=this.exportParam.errorCodeType&&""!=this.exportParam.errorCodeType&&void 0!=this.exportParam.errorCodeType?Object(i["c"])("/mx/sysErrorCode/exportTxt","test.txt",{errorCodeType:this.exportParam.errorCodeType}):this.$message.error("请输入错误码分类")},submitCallback:function(){this.$emit("ok"),this.visible=!1},handleCancel:function(){this.close()}}},s=l,n=r("2877"),c=Object(n["a"])(s,o,a,!1,null,null,null);t["default"]=c.exports}}]);