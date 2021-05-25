(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34173a99"],{"08bf":function(e,t,i){},"39a5":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[e.editStatus?i("a-spin",{attrs:{spinning:e.confirmLoading}},[i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户姓名",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入客户姓名!"}]}],expression:"['name', {rules: [{ required: true, message: '请输入客户姓名!' }]}]"}],attrs:{placeholder:"请输入客户姓名",readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"性别",hasFeedback:""}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{}],expression:"['sex', {}]"}],attrs:{placeholder:"请选择性别"}},[i("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),i("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证号码",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idcard",e.validatorRules.idcard],expression:"['idcard', validatorRules.idcard]"}],attrs:{placeholder:"请输入身份证号码",readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证扫描件",hasFeedback:""}},[i("j-image-upload",{attrs:{text:"上传",isMultiple:!0},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系方式",hasFeedback:""}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telphone",e.validatorRules.telphone],expression:"[ 'telphone', validatorRules.telphone]"}],attrs:{readOnly:e.disableSubmit}})],1),i("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1)],1)],1):e._e()],1)},r=[],l=i("0fea"),n=i("88bc"),s=i.n(n),o=i("2b0e"),d=i("9fb0"),c=i("e610"),u={name:"JeecgOrderCustomerModal",components:{JImageUpload:c["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"客户名",align:"center",dataIndex:"name"},{title:"性别",align:"center",dataIndex:"sex"},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"身份证扫描件",align:"center",dataIndex:"idcardPic"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"订单号码",dataIndex:"orderId",align:"center"},{title:"创建人",dataIndex:"createBy",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"更新时间",dataIndex:"updateBy",align:"center"},{title:"更新人",dataIndex:"updateTime",align:"center"}],fileList:[],disableSubmit:!1,selectedRowKeys:[],orderId:"",hiding:!1,headers:{},picUrl:"",picArray:[],previewVisible:!1,previewImage:"",addStatus:!1,editStatus:!1,confirmLoading:!1,form:this.$form.createForm(this),url:{add:"/test/order/addCustomer",edit:"/test/order/editCustomer",fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",getOrderCustomerList:"/test/order/listOrderCustomerByMainId"},validatorRules:{telphone:{rules:[{validator:this.validateMobile}]},idcard:{rules:[{validator:this.validateIdCard}]}}}},computed:{uploadAction:function(){return this.url.fileUpload}},created:function(){var e=o["default"].ls.get(d["a"]);this.headers={"X-Access-Token":e}},methods:{add:function(e){this.hiding=!0,e?(this.orderId=e,this.edit({orderId:e},"")):this.$message.warning("请选择一个客户信息")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var i=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),e.id?(this.hiding=!1,this.addStatus=!1,this.editStatus=!0,this.$nextTick((function(){i.form.setFieldsValue(s()(i.model,"id","name","sex","idcard","telphone","orderId","createBy","createTime","updateBy","updateTime"))})),setTimeout((function(){i.fileList=e.idcardPic}),5)):(this.addStatus=!1,this.editStatus=!0),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.picUrl="",this.fileList=[]},handleOk:function(){var e=this,t=this;this.form.validateFields((function(i,a){if(!i){t.confirmLoading=!0;var r="",n="";e.model.id?(r+=e.url.edit,n="put"):(r+=e.url.add,n="post");var s=Object.assign(e.model,a);s.orderId=e.orderId,""!=e.fileList?s.idcardPic=e.fileList:s.idcardPic="",Object(l["i"])(r,s,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,i){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?i():i("您的手机号码格式不正确!")},validateIdCard:function(e,t,i){!t||new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(t)?i():i("您的身份证号码格式不正确!")}}},p=u,h=(i("b277"),i("2877")),f=Object(h["a"])(p,a,r,!1,null,"34a71394",null);t["default"]=f.exports},"4e7a":function(e,t,i){},"88bc":function(e,t,i){(function(t){var i=1/0,a=9007199254740991,r="[object Arguments]",l="[object Function]",n="[object GeneratorFunction]",s="[object Symbol]",o="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=o||d||Function("return this")();function u(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)}function p(e,t){var i=-1,a=e?e.length:0,r=Array(a);while(++i<a)r[i]=t(e[i],i,e);return r}function h(e,t){var i=-1,a=t.length,r=e.length;while(++i<a)e[r+i]=t[i];return e}var f=Object.prototype,m=f.hasOwnProperty,b=f.toString,v=c.Symbol,g=f.propertyIsEnumerable,w=v?v.isConcatSpreadable:void 0,C=Math.max;function y(e,t,i,a,r){var l=-1,n=e.length;i||(i=O),r||(r=[]);while(++l<n){var s=e[l];t>0&&i(s)?t>1?y(s,t-1,i,a,r):h(r,s):a||(r[r.length]=s)}return r}function x(e,t){return e=Object(e),I(e,t,(function(t,i){return i in e}))}function I(e,t,i){var a=-1,r=t.length,l={};while(++a<r){var n=t[a],s=e[n];i(s,n)&&(l[n]=s)}return l}function L(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var i=arguments,a=-1,r=C(i.length-t,0),l=Array(r);while(++a<r)l[a]=i[t+a];a=-1;var n=Array(t+1);while(++a<t)n[a]=i[a];return n[t]=l,u(e,this,n)}}function O(e){return k(e)||S(e)||!!(w&&e&&e[w])}function j(e){if("string"==typeof e||R(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function S(e){return F(e)&&m.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==r)}var k=Array.isArray;function U(e){return null!=e&&A(e.length)&&!$(e)}function F(e){return P(e)&&U(e)}function $(e){var t=M(e)?b.call(e):"";return t==l||t==n}function A(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function P(e){return!!e&&"object"==typeof e}function R(e){return"symbol"==typeof e||P(e)&&b.call(e)==s}var _=L((function(e,t){return null==e?{}:x(e,p(y(t,1),j))}));e.exports=_}).call(this,i("c8ba"))},"980f":function(e,t,i){"use strict";var a=i("4e7a"),r=i.n(a);r.a},b277:function(e,t,i){"use strict";var a=i("08bf"),r=i.n(a);r.a},e610:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"img"},[i("a-upload",{class:e.isMultiple?"":"imgupload",attrs:{name:"file",listType:"picture-card",multiple:e.isMultiple,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,isMultiple:e.isMultiple,showUploadList:e.isMultiple},on:{change:e.handleChange,preview:e.handlePreview}},[!e.isMultiple&&e.picUrl?i("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView()}}):i("div",{staticClass:"iconp"},[i("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1),i("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handleCancel()}}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1)},r=[],l=i("2b0e"),n=i("9fb0"),s=i("0fea"),o=function(){return"-"+parseInt(1e4*Math.random()+1,10)},d=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},c={name:"JImageUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/sys/common/upload",uploadLoading:!1,picUrl:!1,headers:{},fileList:[],previewImage:"",previewVisible:!1}},props:{text:{type:String,required:!1,default:"上传"},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},isMultiple:{type:Boolean,required:!1,default:!1}},watch:{value:function(e){e instanceof Array?this.initFileList(e.join(",")):this.initFileList(e),e&&0!=e.length||(this.picUrl=!1)}},created:function(){var e=l["default"].ls.get(n["a"]);this.headers={"X-Access-Token":e}},methods:{initFileList:function(e){if(e&&0!=e.length){this.picUrl=!0;for(var t=[],i=e.split(","),a=0;a<i.length;a++){var r=Object(s["e"])(i[a]);t.push({uid:o(),name:d(i[a]),status:"done",url:r,response:{status:"history",message:i[a]}})}this.fileList=t}else this.fileList=[]},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},handleChange:function(e){this.picUrl=!1;var t=e.fileList;"done"===e.file.status?e.file.response.success&&(this.picUrl=!0,t=t.map((function(e){return e.response&&(e.url=e.response.message),e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"!==e.file.status&&"removed"!==e.file.status||this.handlePathChange()},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getAvatarView:function(){if(this.fileList.length>0){var e=this.fileList[0].url;return Object(s["e"])(e)}},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");var i=[];if(this.isMultiple)for(var a=0;a<e.length;a++){if("done"!==e[a].status)return;i.push(e[a].response.message)}else i.push(e[e.length-1].response.message);i.length>0&&(t=i.join(",")),this.$emit("change",t)},handleDelete:function(e){},handleCancel:function(){this.close(),this.previewVisible=!1},close:function(){}},model:{prop:"value",event:"change"}},u=c,p=(i("980f"),i("2877")),h=Object(p["a"])(u,a,r,!1,null,"9c9c7efa",null);t["default"]=h.exports}}]);