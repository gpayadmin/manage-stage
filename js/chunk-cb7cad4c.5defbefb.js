(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb7cad4c"],{"88bc":function(e,t,r){(function(t){var r=1/0,n=9007199254740991,i="[object Arguments]",a="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=s||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,n=e?e.length:0,i=Array(n);while(++r<n)i[r]=t(e[r],r,e);return i}function f(e,t){var r=-1,n=t.length,i=e.length;while(++r<n)e[i+r]=t[r];return e}var h=Object.prototype,y=h.hasOwnProperty,p=h.toString,b=c.Symbol,v=h.propertyIsEnumerable,g=b?b.isConcatSpreadable:void 0,w=Math.max;function M(e,t,r,n,i){var a=-1,o=e.length;r||(r=k),i||(i=[]);while(++a<o){var l=e[a];t>0&&r(l)?t>1?M(l,t-1,r,n,i):f(i,l):n||(i[i.length]=l)}return i}function C(e,t){return e=Object(e),Q(e,t,(function(t,r){return r in e}))}function Q(e,t,r){var n=-1,i=t.length,a={};while(++n<i){var o=t[n],l=e[o];r(l,o)&&(a[o]=l)}return a}function x(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,n=-1,i=w(r.length-t,0),a=Array(i);while(++n<i)a[n]=r[t+n];n=-1;var o=Array(t+1);while(++n<t)o[n]=r[n];return o[t]=a,d(e,this,o)}}function k(e){return F(e)||j(e)||!!(g&&e&&e[g])}function S(e){if("string"==typeof e||T(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function j(e){return O(e)&&y.call(e,"callee")&&(!v.call(e,"callee")||p.call(e)==i)}var F=Array.isArray;function V(e){return null!=e&&q(e.length)&&!I(e)}function O(e){return R(e)&&V(e)}function I(e){var t=N(e)?p.call(e):"";return t==a||t==o}function q(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function R(e){return!!e&&"object"==typeof e}function T(e){return"symbol"==typeof e||R(e)&&p.call(e)==l}var A=x((function(e,t){return null==e?{}:C(e,m(M(t,1),S))}));e.exports=A}).call(this,r("c8ba"))},a551:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:500,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"币种"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sToken",{rules:[{required:!0,message:"请输入币种名称",whiteSpace:!0}]}],expression:"['sToken', {rules: [{ required: true, message: '请输入币种名称',whiteSpace:true}]}]"}],attrs:{disabled:!!e.model.iId,placeholder:"请输入币种名称"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"平台交易费率(%)"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["dFeeRate",{rules:[{required:!0,message:"请输入平台交易费率",type:"number"}]}],expression:"['dFeeRate',{rules: [{ required: true, message: '请输入平台交易费率',type:'number'}]}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入平台交易费率",min:0,max:100}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"最大交易量"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["dMaxQuantity",{rules:[{required:!0,message:"请输入最大交易量",type:"number"},{validator:this.handleVerifyMaxQuantity}]}],expression:"['dMaxQuantity',\n          {rules: [\n            { required: true, message: '请输入最大交易量',type:'number'},\n            { validator: this.handleVerifyMaxQuantity }\n            ]}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入最大交易量",min:0},on:{change:function(t){return e.dMaxQuantity=t}}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"最小交易量"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["dMinQuantity",{rules:[{required:!0,message:"请输入最小交易量",type:"number"},{validator:this.handleVerifyMinQuantity}]}],expression:"['dMinQuantity', {rules:\n          [\n            { required: true, message: '请输入最小交易量',type:'number'},\n            { validator: this.handleVerifyMinQuantity }\n            ]},\n          ]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入最小交易量",min:0},on:{change:function(t){return e.dMinQuantity=t}}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序号(大号在前)"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["iSortId",{rules:[{required:!0,message:"请输入排序号",type:"number"}]}],expression:"['iSortId', {rules: [{ required: true, message: '请输入排序号',type:'number'}]}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入排序号",min:0}})],1)],1)],1)],1)},i=[],a=r("0fea"),o=r("88bc"),l=r.n(o),s=(r("c1df"),{name:"CurrencyModal",data:function(){return{title:"操作",visible:!1,model:{},dMinQuantity:null,dMaxQuantity:null,labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/v1/otc/AddCommodity",edit:"/v1/otc/ChgCommodity"},lockVerify:!1}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.iId&&(this.model.dFeeRate=100*Number(this.model.dFeeRate),this.dMaxQuantity=this.model.dMaxQuantity=Number(this.model.dMaxQuantity),this.dMinQuantity=this.model.dMinQuantity=Number(this.model.dMinQuantity)),this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"sToken","dFeeRate","dMaxQuantity","dMinQuantity","iSortId"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,n){if(!r){t.confirmLoading=!0;var i="",o="post",l={dFeeRate:(n.dFeeRate/100).toString(),dMaxQuantity:n.dMaxQuantity.toString(),dMinQuantity:n.dMinQuantity.toString(),iSortId:n.iSortId};e.model.iId?(i+=e.url.edit,l.iCommodityId=e.model.iId):(i+=e.url.add,l.sToken=n.sToken),Object(a["i"])(i,l,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},handleVerifyMaxQuantity:function(e,t,r){this.dMinQuantity>0&&t<this.dMinQuantity&&r(new Error("最大交易量不能小于最小交易量！")),this.toVerify(),r()},handleVerifyMinQuantity:function(e,t,r){this.dMaxQuantity>0&&t>this.dMaxQuantity&&r(new Error("最小交易量不能大于最大交易量！")),this.toVerify(),r()},toVerify:function(){var e=this;this.lockVerify?setTimeout((function(){e.lockVerify=!1}),100):(this.lockVerify=!0,this.form.validateFields())}}}),u=s,c=r("2877"),d=Object(c["a"])(u,n,i,!1,null,"3761c9ce",null);t["default"]=d.exports}}]);