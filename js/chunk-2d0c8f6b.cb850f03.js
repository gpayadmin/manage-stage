(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8f6b"],{"56b6":function(e,a,s){"use strict";s.r(a);var o=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,destroyOnClose:!0,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[s("a-spin",{attrs:{spinning:e.confirmLoading}},[s("a-form",{attrs:{form:e.form}},[s("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"金额",hasFeedback:""}},[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sName",e.validatorRules.sName],expression:"['sName',  validatorRules.sName]"}],attrs:{placeholder:"请输入金额",maxLength:50}})],1)],1)],1)],1)},n=[],t=s("0fea"),i={name:"DepostNotionalModal",data:function(){return{chains:[],coldtotal:"",dataSourceiId:"",title:"续充",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{sName:{rules:[{required:!0,message:"请输入金额"},{validator:this.sAmount}]}},url:{list:"/v1/core/GetColdAddressList",add:"/v1/core/AddMerchantWallet"},selecedChain:null}},created:function(){},methods:{onChooseChange:function(){},sAmount:function(e,a,s){var o=/^\d+(\.\d+)?$/;0==o.test(a)&&s(new Error("请输入正确的金额")),0==a&&s(new Error("请输入正确的金额")),s()},init:function(e){},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,a=this;this.form.validateFields((function(s,o){if(!s){a.confirmLoading=!0;var n="/v1/core/PseudoRecharge",i="post",l=new Object;l.iUserId=e.model.iUserId,l.sChain=e.model.sChain,l.sToken=e.model.sToken,l.sAmount=e.form.getFieldValue("sName").toString(),Object(t["i"])(n,l,i).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1,a.close()}))}}))},handleCancel:function(){this.close()}}},l=i,r=s("2877"),c=Object(r["a"])(l,o,n,!1,null,"3562b580",null);a["default"]=c.exports}}]);