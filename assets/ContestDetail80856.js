import{a6 as We,o as r,c as w,a as s,m as y,B as he,Q as Ie,L as M,k as X,t as I,C as $,s as ve,x as ee,a7 as qe,a8 as Le,i as R,p as ce,f as u,n as E,w as b,e as B,U as Z,F as ie,a9 as Ke,aa as Be,R as He,l as pe,ab as Ge,d as O,g as Ue,r as k,ac as ge,z as se,u as U,D as j,ad as W,a2 as Qe,a3 as Ze,G as Ye,y as ze,b as oe,v as Y,ae as be,K as Xe,j as Je,q as et,T as tt}from"../index80856.js";import{s as Ve,a as at,m as nt,c as lt,b as ne,d as it,V as st,e as ot}from"./index.esm80856.js";import{s as Te}from"./index80856.js";import{a as rt}from"./index808566.js";import{A as ut,a as De,u as dt,T as Q,L as ct,s as pt,b as ft}from"./LazyDataTable80856.js";import{a as mt,s as Me}from"./index808564.js";import{u as re}from"./contest80856.js";import{u as Ee}from"./settings80856.js";import{c as Se,a as fe}from"./date80856.js";import{s as ht}from"./index808562.js";import{s as vt,a as gt}from"./index808567.js";import{u as bt}from"./user80856.js";import"./index808568.js";var yt={name:"Calendar",extends:rt,mounted:function(){console.warn("Deprecated since v4. Use DatePicker component instead.")}},Pe={name:"UploadIcon",extends:We};function wt(e,t,n,i,l,a){return r(),w("svg",y({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}Pe.render=wt;var Ct=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,Ft={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},_t=he.extend({name:"progressbar",style:Ct,classes:Ft}),$t={name:"BaseProgressBar",extends:ve,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:_t,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},Ae={name:"ProgressBar",extends:$t,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return Ie({determinate:this.determinate,indeterminate:this.indeterminate})}}},Bt=["aria-valuenow","data-p"],St=["data-p"],kt=["data-p"],xt=["data-p"];function It(e,t,n,i,l,a){return r(),w("div",y({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":a.dataP},e.ptmi("root")),[a.determinate?(r(),w("div",y({key:0,class:e.cx("value"),style:a.progressStyle,"data-p":a.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),w("div",y({key:0,class:e.cx("label"),"data-p":a.dataP},e.ptm("label")),[M(e.$slots,"default",{},function(){return[X(I(e.value+"%"),1)]})],16,kt)):$("",!0)],16,St)):a.indeterminate?(r(),w("div",y({key:1,class:e.cx("value"),"data-p":a.dataP},e.ptm("value")),null,16,xt)):$("",!0)],16,Bt)}Ae.render=It;var Lt=({dt:e})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${e("fileupload.border.color")};
    border-radius: ${e("fileupload.border.radius")};
    background: ${e("fileupload.background")};
    color: ${e("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${e("fileupload.header.padding")};
    background: ${e("fileupload.header.background")};
    color: ${e("fileupload.header.color")};
    border-style: solid;
    border-width: ${e("fileupload.header.border.width")};
    border-color: ${e("fileupload.header.border.color")};
    border-radius: ${e("fileupload.header.border.radius")};
    gap: ${e("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${e("fileupload.content.gap")};
    transition: border-color ${e("fileupload.transition.duration")};
    padding: ${e("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${e("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${e("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${e("fileupload.file.padding")};
    border-block-end: 1px solid ${e("fileupload.file.border.color")};
    gap: ${e("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-block-end: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${e("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-inline-start: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${e("fileupload.content.highlight.border.color")};
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${e("fileupload.basic.gap")};
}
`,Ut={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},zt=he.extend({name:"fileupload",style:Lt,classes:Ut}),Vt={name:"BaseFileUpload",extends:ve,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:zt,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},Re={name:"FileContent",hostName:"FileUpload",extends:ve,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,i=1024,l=3,a=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(a[0]);var c=Math.floor(Math.log(t)/Math.log(i)),p=parseFloat((t/Math.pow(i,c)).toFixed(l));return"".concat(p," ").concat(a[c])}},components:{Button:ee,Badge:qe,TimesIcon:Le}},Tt=["alt","src","width"];function Dt(e,t,n,i,l,a){var c=R("Badge"),p=R("TimesIcon"),f=R("Button");return r(!0),w(ie,null,ce(n.files,function(v,F){return r(),w("div",y({key:v.name+v.type+v.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[s("img",y({role:"presentation",class:e.cx("fileThumbnail"),alt:v.name,src:v.objectURL,width:n.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,Tt),s("div",y({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[s("div",y({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),I(v.name),17),s("span",y({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),I(a.formatSize(v.size)),17)],16),u(c,{value:n.badgeValue,class:E(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),s("div",y({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[u(f,{onClick:function(g){return e.$emit("remove",F)},text:"",rounded:"",severity:"danger",class:E(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:b(function(z){return[n.templates.fileremoveicon?(r(),B(Z(n.templates.fileremoveicon),{key:0,class:E(z.class),file:v,index:F},null,8,["class","file","index"])):(r(),B(p,y({key:1,class:z.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}Re.render=Dt;function de(e){return Pt(e)||Et(e)||je(e)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Et(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pt(e){if(Array.isArray(e))return me(e)}function le(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=je(e))||t){n&&(e=n);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(v){throw v},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,c=!0,p=!1;return{s:function(){n=n.call(e)},n:function(){var v=n.next();return c=v.done,v},e:function(v){p=!0,a=v},f:function(){try{c||n.return==null||n.return()}finally{if(p)throw a}}}}function je(e,t){if(e){if(typeof e=="string")return me(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}function me(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var ye={name:"FileUpload",extends:Vt,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,i=le(n),l;try{for(i.s();!(l=i.n()).done;){var a=l.value;!this.isFileSelected(a)&&!this.isFileLimitExceeded()&&this.validate(a)&&(this.isImage(a)&&(a.objectURL=window.URL.createObjectURL(a)),this.files.push(a))}}catch(c){i.e(c)}finally{i.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var n=new XMLHttpRequest,i=new FormData;this.$emit("before-upload",{xhr:n,formData:i});var l=le(this.files),a;try{for(l.s();!(a=l.n()).done;){var c=a.value;i.append(this.name,c,c.name)}}catch(p){l.e(p)}finally{l.f()}n.upload.addEventListener("progress",function(p){p.lengthComputable&&(t.progress=Math.round(p.loaded*100/p.total)),t.$emit("progress",{originalEvent:p,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){if(t.progress=0,n.status>=200&&n.status<300){var p;t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files}),(p=t.uploadedFiles).push.apply(p,de(t.files))}else t.$emit("error",{xhr:n,files:t.files});t.clear()}},this.url&&(n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:i}),n.withCredentials=this.withCredentials,n.send(i))}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=le(this.files),i;try{for(n.s();!(i=n.n()).done;){var l=i.value;if(l.name+l.type+l.size===t.name+t.type+t.size)return!0}}catch(a){n.e(a)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(p){return p.trim()}),i=le(n),l;try{for(i.s();!(l=i.n()).done;){var a=l.value,c=this.isWildcard(a)?this.getTypeClass(t.type)===this.getTypeClass(a):t.type==a||this.getFileExtension(t).toLowerCase()===a.toLowerCase();if(c)return!0}}catch(p){i.e(p)}finally{i.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){this.disabled||(!this.isUnstyled&&Ke(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&Be(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&Be(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,i=this.multiple||n&&n.length===1;i&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=de(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=de(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,i=1024,l=3,a=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(a[0]);var c=Math.floor(Math.log(t)/Math.log(i)),p=parseFloat((t/Math.pow(i,c)).toFixed(l));return"".concat(p," ").concat(a[c])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:ee,ProgressBar:Ae,Message:Ve,FileContent:Re,PlusIcon:ht,UploadIcon:Pe,TimesIcon:Le},directives:{ripple:He}},At=["multiple","accept","disabled"],Rt=["files"],jt=["accept","disabled","multiple"];function Ot(e,t,n,i,l,a){var c=R("Button"),p=R("ProgressBar"),f=R("Message"),v=R("FileContent");return a.isAdvanced?(r(),w("div",y({key:0,class:e.cx("root")},e.ptmi("root")),[s("input",y({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return a.onFileSelect&&a.onFileSelect.apply(a,arguments)}),multiple:e.multiple,accept:e.accept,disabled:a.chooseDisabled},e.ptm("input")),null,16,At),s("div",y({class:e.cx("header")},e.ptm("header")),[M(e.$slots,"header",{files:l.files,uploadedFiles:l.uploadedFiles,chooseCallback:a.choose,uploadCallback:a.uploader,clearCallback:a.clear},function(){return[u(c,y({label:a.chooseButtonLabel,class:a.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:a.choose,onKeydown:pe(a.choose,["enter"]),onFocus:a.onFocus,onBlur:a.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:b(function(F){return[M(e.$slots,"chooseicon",{},function(){return[(r(),B(Z(e.chooseIcon?"span":"PlusIcon"),y({class:[F.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(r(),B(c,y({key:0,class:e.cx("pcUploadButton"),label:a.uploadButtonLabel,onClick:a.uploader,disabled:a.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:b(function(F){return[M(e.$slots,"uploadicon",{},function(){return[(r(),B(Z(e.uploadIcon?"span":"UploadIcon"),y({class:[F.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):$("",!0),e.showCancelButton?(r(),B(c,y({key:1,class:e.cx("pcCancelButton"),label:a.cancelButtonLabel,onClick:a.clear,disabled:a.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:b(function(F){return[M(e.$slots,"cancelicon",{},function(){return[(r(),B(Z(e.cancelIcon?"span":"TimesIcon"),y({class:[F.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):$("",!0)]})],16),s("div",y({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return a.onDragEnter&&a.onDragEnter.apply(a,arguments)}),onDragover:t[2]||(t[2]=function(){return a.onDragOver&&a.onDragOver.apply(a,arguments)}),onDragleave:t[3]||(t[3]=function(){return a.onDragLeave&&a.onDragLeave.apply(a,arguments)}),onDrop:t[4]||(t[4]=function(){return a.onDrop&&a.onDrop.apply(a,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[M(e.$slots,"content",{files:l.files,uploadedFiles:l.uploadedFiles,removeUploadedFileCallback:a.removeUploadedFile,removeFileCallback:a.remove,progress:l.progress,messages:l.messages},function(){return[a.hasFiles?(r(),B(p,{key:0,value:l.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):$("",!0),(r(!0),w(ie,null,ce(l.messages,function(F){return r(),B(f,{key:F,severity:"error",onClose:a.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:b(function(){return[X(I(F),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),a.hasFiles?(r(),w("div",{key:1,class:E(e.cx("fileList"))},[u(v,{files:l.files,onRemove:a.remove,badgeValue:a.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):$("",!0),a.hasUploadedFiles?(r(),w("div",{key:2,class:E(e.cx("fileList"))},[u(v,{files:l.uploadedFiles,onRemove:a.removeUploadedFile,badgeValue:a.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):$("",!0)]}),e.$slots.empty&&!a.hasFiles&&!a.hasUploadedFiles?(r(),w("div",Ge(y({key:0},e.ptm("empty"))),[M(e.$slots,"empty")],16)):$("",!0)],16)],16)):a.isBasic?(r(),w("div",y({key:1,class:e.cx("root")},e.ptmi("root")),[(r(!0),w(ie,null,ce(l.messages,function(F){return r(),B(f,{key:F,severity:"error",onClose:a.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:b(function(){return[X(I(F),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),u(c,y({label:a.chooseButtonLabel,class:a.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:a.onBasicUploaderClick,onKeydown:pe(a.choose,["enter"]),onFocus:a.onFocus,onBlur:a.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:b(function(F){return[M(e.$slots,"chooseicon",{},function(){return[(r(),B(Z(e.chooseIcon?"span":"PlusIcon"),y({class:[F.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?$("",!0):M(e.$slots,"filelabel",{key:0,class:E(e.cx("filelabel"))},function(){return[s("span",{class:E(e.cx("filelabel")),files:l.files},I(a.basicFileChosenLabel),11,Rt)]}),s("input",y({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return a.onFileSelect&&a.onFileSelect.apply(a,arguments)}),onFocus:t[6]||(t[6]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:t[7]||(t[7]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},e.ptm("input")),null,16,jt)],16)):$("",!0)}ye.render=Ot;var Nt=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding-block: ${e("textarea.padding.y")};
    padding-inline: ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.p-invalid::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,Wt={root:function(t){var n=t.instance,i=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":i.autoResize,"p-textarea-sm p-inputfield-sm":i.size==="small","p-textarea-lg p-inputfield-lg":i.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},qt=he.extend({name:"textarea",style:Nt,classes:Wt}),Kt={name:"BaseTextarea",extends:mt,props:{autoResize:Boolean},style:qt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function J(e){"@babel/helpers - typeof";return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(e)}function Ht(e,t,n){return(t=Gt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gt(e){var t=Qt(e,"string");return J(t)=="symbol"?t:t+""}function Qt(e,t){if(J(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(J(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Oe={name:"Textarea",extends:Kt,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return y(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return Ie(Ht({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},Zt=["value","name","disabled","aria-invalid","data-p"];function Yt(e,t,n,i,l,a){return r(),w("textarea",y({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":a.dataP,onInput:t[0]||(t[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,Zt)}Oe.render=Yt;const Xt={class:"flex flex-col gap-1"},Jt=["for"],ea={class:"padding-detail"},ta=O({__name:"ValidateTextArea",props:{id:{},name:{},type:{},label:{},invalid:{type:Boolean},errorMessage:{},disabled:{type:Boolean},detailMode:{type:Boolean},value:{}},setup(e){return(t,n)=>{const i=Oe,l=Ve,a=at;return r(),w("div",Xt,[s("label",{class:E(["form-label",t.invalid?"form-invalid":""]),for:t.id},I(t.label),11,Jt),s("div",null,[u(a,{name:t.name},{default:b(c=>[t.detailMode?M(t.$slots,"detail",{key:1,data:c},()=>[s("p",ea,I(c.value),1)],!0):(r(),w(ie,{key:0},[t.detailMode?$("",!0):(r(),B(i,{key:0,rows:"5",cols:"90",name:t.name,invalid:t.invalid,disabled:t.disabled},null,8,["name","invalid","disabled"])),t.invalid?(r(),B(l,{key:1,severity:"error",size:"small",variant:"simple"},{default:b(()=>[X(I(t.errorMessage),1)]),_:1})):$("",!0)],64))]),_:3},8,["name"])])])}}}),ke=Ue(ta,[["__scopeId","data-v-1d0dbf4c"]]),aa={class:"w-full"},na={class:"flex align-items-center justify-content-between"},la={class:"mb-1!"},ia={key:0,class:"flex flex-wrap"},sa={class:"card m-0 flex border-1 surface-border align-items-center justify-content-between pl-4 pr-3 py-3 w-full my-2"},oa={class:"flex align-items-center relative"},ra=["src"],ua={key:0,class:"text-center min-h-[200px] flex items-center justify-center flex-col"},da=O({__name:"UploadImageCard",props:{title:{},dynamicClass:{},image_url:{},contest_id:{}},emits:["onUploadComplete"],setup(e,{emit:t}){const n=e,i=t,l=k({}),a=re(),c=k(),p=n.dynamicClass?n.dynamicClass:"",{setLoading:f}=ge(),v=async function(g){const _=g.files[0];l.value.image_url={},l.value.image=_,await F(_),z()};async function F(g){try{f(!0);const _=await a.uploadContestImageUrl(n.contest_id,{file_name:g.name,file_type:g.type}),{upload_url:C,key:h}=_;if(!(await fetch(C,{method:"PUT",body:g,headers:{"Content-Type":g.type}})).ok)throw new Error("Errore durante l'upload del file");await a.completeImageUpload(n.contest_id,{key:h}),f(!1),j("Immagine caricata con successo"),i("onUploadComplete")}catch(_){f(!1),W(_ instanceof Error?_.message:"Errore durante l'upload")}}const z=()=>{l.value.image=null,l.value.image_url=null,c.value.files=[]};return se(()=>n.image_url,g=>{g&&(l.value={image:g})}),(g,_)=>{const C=ye;return r(),w("div",aa,[s("div",na,[s("h2",la,I(g.title),1)]),s("div",{class:E(["flex-col p-0 w-full",U(p)])},[u(C,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!1,accept:"image/*",maxFileSize:2097152,id:"logo",modelValue:l.value.image,"onUpdate:modelValue":_[0]||(_[0]=h=>l.value.image=h),customUpload:!0,onSelect:v,onRemove:z,fileLimit:1,ref_key:"fileUpload",ref:c},{content:b(()=>[l.value.image&&l.value.image.url?(r(),w("div",ia,[s("div",sa,[s("div",oa,[s("img",{role:"presentation",src:l.value.image.url,width:"200",class:"shadow-2"},null,8,ra)])])])):$("",!0)]),empty:b(()=>[l.value.image?$("",!0):(r(),w("div",ua,_[1]||(_[1]=[s("b",null,"Trascina e rilascia il file qui per caricarlo.",-1),s("p",{class:"text-sm"},"(Dimensione massima 20 MB)",-1)])))]),_:1},8,["modelValue"])],2)])}}}),ca=Ue(da,[["__scopeId","data-v-acffc731"]]);class pa{static async deleteAttachment(t){return await Qe(`/attachments/${t}`)}}const fa=Ze("attachment-store",()=>{const e=k(null);async function t(n){await pa.deleteAttachment(n)}return{attachment:e,deleteAttachment:t}}),ma={class:"w-full"},ha={class:"flex align-items-center justify-content-between"},va={class:"mb-1!"},ga={class:"flex-col p-0 w-full"},ba={class:""},ya={key:0,class:"card m-0 flex border-1 surface-border items-center justify-between pl-4 pr-3 py-3 w-full my-2"},wa={class:"flex align-items-center relative"},Ca=["href"],Fa={key:0,class:"flex flex-col ml-2 file",style:{"font-size":"12px"}},_a={class:"mb-1"},$a={key:0,class:"text-center flex items-center justify-center flex-col min-h-[185px]"},Ba={class:"flex flex-col mb-4"},Sa={class:"flex justify-end gap-2"},ka=O({__name:"UploadPdfCard",props:{title:{},file:{},contest_id:{}},emits:["onUploadComplete"],setup(e,{emit:t}){const n=e,i=t,l=k({}),a=fa(),c=re(),{setLoading:p}=ge(),f=k(),v=k(),F=function(C){l.value.file_url={},l.value.file=C.files[0],v.value=!0};async function z(){try{p(!0);const C=l.value.file,h=await c.uploadContestFileUrl(n.contest_id,{file_name:C.name,file_type:C.type,name:l.value.name}),{upload_url:L,key:A}=h;if(!(await fetch(L,{method:"PUT",body:C,headers:{"Content-Type":C.type}})).ok)throw new Error("Errore durante l'upload del file");await c.completeFileUpload(n.contest_id,{key:A,file_name:l.value.name}),p(!1),j("File caricato con successo"),v.value=!1,_(),i("onUploadComplete")}catch(C){p(!1),W(C instanceof Error?C.message:"Errore durante l'upload")}}const g=async function(){const C=l.value.file.id;C?(p(!0),await a.deleteAttachment(C).then(()=>{p(!1),j("File cancellato correttamente"),_()}).catch(()=>{p(!1)})):_()},_=()=>{l.value={},f.value.files=[]};return se(()=>n.file,C=>{C&&(l.value={file:C,file_url:C.url})}),(C,h)=>{const L=ee,A=ye,N=Me,q=Ye;return r(),w("div",ma,[s("div",ha,[s("h2",va,I(C.title),1)]),s("div",ga,[u(A,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!1,accept:"application/pdf",maxFileSize:2097152,id:"logo",modelValue:l.value.file,"onUpdate:modelValue":h[2]||(h[2]=x=>l.value.file=x),customUpload:!0,onSelect:h[3]||(h[3]=x=>F(x)),onRemove:_,ref_key:"fileUpload",ref:f},{content:b(()=>{var x;return[s("div",ba,[l.value.file||l.value.file_url&&l.value.file_url.url?(r(),w("div",ya,[s("div",wa,[s("a",{href:(x=l.value.file)==null?void 0:x.url,target:"_blank",rel:"noopener noreferrer"},h[7]||(h[7]=[s("i",{class:"pi pi-file text-[35px]!"},null,-1)]),8,Ca),l.value.file&&l.value.file.name?(r(),w("div",Fa,[s("div",_a,I(l.value.file.name),1),s("div",null,[l.value.file.name?(r(),B(L,{key:0,link:"",onClick:h[0]||(h[0]=K=>g()),class:"text-red-700! p-0!",label:"Elimina",rounded:""})):$("",!0)])])):$("",!0),l.value.file.name?$("",!0):(r(),B(L,{key:1,link:"",onClick:h[1]||(h[1]=K=>g()),class:"text-red-700!",label:"Elimina",rounded:""}))])])):$("",!0)])]}),empty:b(()=>[!l.value.file_url||!l.value.file?(r(),w("div",$a,h[8]||(h[8]=[s("b",null,"Trascina e rilascia il file qui per caricarlo.",-1),s("p",{class:"text-sm"},"(Dimensione massima 2 MB)",-1)]))):$("",!0)]),_:1},8,["modelValue"])]),u(q,{visible:v.value,"onUpdate:visible":h[6]||(h[6]=x=>v.value=x),modal:"",header:"Aggiungi il titolo del file",style:{width:"25rem"},closable:!1},{default:b(()=>[s("div",Ba,[h[9]||(h[9]=s("label",{for:"username",class:"font-semibold w-24 mb-0"},"Titolo",-1)),u(N,{id:"username",class:"flex-auto",modelValue:l.value.name,"onUpdate:modelValue":h[4]||(h[4]=x=>l.value.name=x),autocomplete:"off"},null,8,["modelValue"])]),s("div",Sa,[u(L,{type:"button",label:"Save",onClick:h[5]||(h[5]=x=>z()),disabled:!l.value.name},null,8,["disabled"])])]),_:1},8,["visible"])])}}}),xa={class:"flex items-center justify-between mb-8"},Ia={class:"flex gap-4 justify-end items-center"},La={class:"flex flex-row gap-4 w-full"},Ua={class:"w-full flex gap-4"},za={class:"w-full md:w-[49.5%]"},Va={class:"w-full md:w-[49.5%] flex flex-row gap-4"},Ta={class:"w-full"},Da={class:"w-full"},Ma={class:"flex w-full items-start justify-between gap-8"},Ea=O({__name:"ContestPanelDetail",setup(e){const t=re(),n=Ee(),{setLoading:i}=ge(),l=be(),a=k([]),c=k({}),p=k(!1),f=k(),v=k(null),F=nt(lt().shape({title:ne().required("Il titolo è obbligatorio"),description:ne().required("La descrizione è obbligatoria"),short_description:ne().required("La descrizione breve è obbligatoria"),category:ne().required("La categoria è obbligatoria")})),z=k([{label:"Pubblicato",value:!0},{label:"Non pubblicato",value:!1}]),g=ze(()=>t.currentContest);function _(){a.value=[{label:"Tutti i contest",route:{name:Y.contest}}]}const C=function(){if(v.value){const o=v.value;g.value&&(o.setFieldValue("title",g.value.title||""),o.setFieldValue("short_description",g.value.short_description||""),o.setFieldValue("description",g.value.description||""),o.setFieldValue("category",g.value.category||null),o.setFieldValue("start_at",g.value.start_at?fe(g.value.start_at):null),o.setFieldValue("end_at",g.value.end_at?fe(g.value.end_at):null),o.setFieldValue("online",g.value.online||!1))}},h=async function(o){try{i(!0),await t.fetchContestDetail(o).then(()=>{i(!1),C()}).catch(()=>{i(!1)})}catch(d){console.error(d)}},L=async function(){var o,d;((d=(o=v.value)==null?void 0:o.getFieldState("online"))==null?void 0:d.value)??!1?A():N()};async function A(){try{i(!0),await t.enableContest(f.value).then(()=>{i(!1),j("Contest aggiornato con successo")})}catch(o){i(!1),W(o instanceof Error?o.message:String(o))}}async function N(){try{i(!0),await t.disableContest(f.value).then(()=>{i(!1),j("Contest aggiornato con successo")})}catch(o){i(!1),W(o+"")}}async function q(o){try{i(!0),await t.updateContest(f.value,o).then(()=>{i(!1),j("Contest aggiornato con successo")})}catch(d){i(!1),W(d.response.data.errors[0].message)}}async function x(o){try{i(!0);const d=await t.createContest(o);i(!1),j("Contest creato con successo"),Xe.push({name:Y.contestDettaglio,params:{id:d.id}})}catch(d){i(!1),W(d.response.data.errors[0].message)}}async function K(o){if(o.valid){const d={title:o.values.title,short_description:o.values.short_description,description:o.values.description,category:o.values.category,start_at:Se(o.values.start_at),end_at:Se(o.values.end_at),online:o.values.online};f.value?q(d):x(d)}}return oe(()=>{f.value=l.params.id,_(),f.value?(a.value.push({label:"Dettaglio contest",route:{name:Y.contestDettaglio,params:{id:f.value}}}),h(f.value)):a.value.push({label:"Nuovo contest",route:{name:Y.newContest}})}),se(()=>l.params.id,()=>{f.value=l.params.id,h(f.value)}),(o,d)=>{const H=ee,te=De,P=ot,ae=yt,G=Te,ue=it;return r(),w("div",null,[u(ue,{class:"flex flex-col",resolver:U(F),onSubmit:K,ref_key:"formRef",ref:v},{default:b(T=>[s("div",xa,[u(ut,{items:a.value},null,8,["items"]),s("div",Ia,[s("div",null,[u(H,{class:"w-full",label:"Annulla",type:"button",loading:p.value,variant:"outlined"},null,8,["loading"])]),s("div",null,[u(H,{class:"w-full",label:"Salva",type:"submit",loading:p.value},null,8,["loading"])])])]),u(G,{header:"DETTAGLIO CONTEST",toggleable:""},{default:b(()=>[u(P,{class:"flex items-end justify-between mb-8"},{default:b(()=>{var D,m,S;return[u(st,{name:"title",label:"Titolo*",type:"text",invalid:(D=T.title)==null?void 0:D.invalid,"error-message":(S=(m=T.title)==null?void 0:m.error)==null?void 0:S.message,class:"w-full md:max-w-[40%]"},null,8,["invalid","error-message"]),f.value?(r(),B(te,{key:0,options:z.value,optionLabel:"label",optionValue:"value",class:"w-full md:max-w-[200px] dropdown-status capitalize",onChange:L,name:"online"},null,8,["options"])):$("",!0)]}),_:2},1024),u(P,{class:"flex flex-col gap-8 w-[80%]"},{default:b(()=>{var D,m,S,V,we,Ce,Fe,_e,$e;return[s("div",La,[u(ke,{name:"short_description",label:"Descrizione breve*",invalid:(D=T.short_description)==null?void 0:D.invalid,"error-message":(S=(m=T.short_description)==null?void 0:m.error)==null?void 0:S.message,value:c.value.short_description},null,8,["invalid","error-message","value"]),u(ke,{name:"description",label:"Descrizione*",invalid:(V=T.description)==null?void 0:V.invalid,"error-message":(Ce=(we=T.description)==null?void 0:we.error)==null?void 0:Ce.message,value:c.value.description},null,8,["invalid","error-message","value"])]),s("div",Ua,[s("div",za,[d[3]||(d[3]=s("label",{for:"warnings_type",class:"text-muted-color font-500 mb-1"},"Categoria*",-1)),u(te,{modelValue:c.value.category,"onUpdate:modelValue":d[0]||(d[0]=Ne=>c.value.category=Ne),options:U(n).getUserCategories(),optionLabel:"labels.it",optionValue:"value",class:"w-full",name:"category",invalid:(Fe=T.title)==null?void 0:Fe.invalid,"error-message":($e=(_e=T.title)==null?void 0:_e.error)==null?void 0:$e.message},null,8,["modelValue","options","invalid","error-message"])]),s("div",Va,[s("div",Ta,[d[4]||(d[4]=s("label",{for:"name"},"Data inizio*",-1)),u(ae,{name:"start_at",inputId:"dateformat",dateFormat:"dd/mm/yy",manualInput:!1,placeholder:"gg/mm/aaaa"})]),s("div",Da,[d[5]||(d[5]=s("label",{for:"name"},"Data fine*",-1)),u(ae,{name:"end_at",inputId:"dateformat",dateFormat:"dd/mm/yy",manualInput:!1,placeholder:"gg/mm/aaaa"})])])])]}),_:2},1024)]),_:2},1024),f.value?(r(),B(G,{key:0,header:"MEDIA CONTEST",toggleable:"",class:"mt-5"},{default:b(()=>{var D,m;return[s("div",Ma,[u(ca,{title:"Immagine del Contest",image_url:(D=g.value)==null?void 0:D.image,contest_id:f.value,class:"flex-1 h-full",onOnUploadComplete:d[1]||(d[1]=S=>h(f.value))},null,8,["image_url","contest_id"]),u(ka,{title:"Allegato",file:(m=g.value)==null?void 0:m.attachment,contest_id:f.value,class:"flex-1 h-full",onOnUploadComplete:d[2]||(d[2]=S=>h(f.value))},null,8,["file","contest_id"])])]}),_:1})):$("",!0)]),_:1},8,["resolver"])])}}}),Pa={key:0,class:"flex flex-col mb-8"},Aa={class:"crop"},Ra={class:"flex items-center gap-x-2"},ja={class:"flex items-center gap-2"},Oa={class:"flex items-center gap-2"},Na={class:"flex items-center justify-center"},xe=10,Wa=O({__name:"ContestTableVideo",props:{contest_id:{}},setup(e){const t=e,n=re(),i=Ee(),l=bt(),{videos:a,totalContests:c}=Je(n),{onSort:p,onPage:f,onFilter:v,loadLazyData:F,isLoading:z}=dt({rows:xe},N),g=k(),_=i.getVideoCategories(),C=ze(()=>l.users),h=k(),L=k({id:{value:"",matchMode:Q.EQ},online:{value:"",matchMode:Q.EQ},created_at:{value:null,matchMode:Q.EQ},user_id:{value:"",matchMode:Q.EQ},title:{value:"",matchMode:Q.LIKE}});function A(){v(L.value)}async function N(o){if(t.contest_id){L.value.user_id.value&&o.set("user_id_eq",L.value.user_id.value.id);try{await n.fetchContestVideo(t.contest_id+"",o)}catch(d){console.error(d)}}}const q=function(o){return{name:Y.mediaDettaglio,params:{id:o}}};async function x(){try{const o=new Map;o.set("page",1),o.set("limit",1e3),await l.fetchUsers(o)}catch(o){console.error(o)}}const K=o=>{setTimeout(()=>{o.query.trim().length?h.value=C.value.filter(d=>d.full_name.toLowerCase().startsWith(o.query.toLowerCase())):h.value=[...C]},250)};return oe(()=>{_&&_.length>0&&!t.contest_id&&(g.value=_[0].value),x()}),se(()=>[t.contest_id],()=>{F()},{immediate:!0}),(o,d)=>{const H=De,te=vt,P=pt,ae=Me,G=ee,ue=gt,T=ft,D=tt;return r(),w("div",null,[o.contest_id?$("",!0):(r(),w("div",Pa,[d[2]||(d[2]=s("label",{for:"notifications_type",class:"text-muted-color font-500 mb-1"},"Categoria",-1)),u(H,{modelValue:g.value,"onUpdate:modelValue":[d[0]||(d[0]=m=>g.value=m),U(F)],options:U(_),"option-label":"labels.it","option-value":"value",class:"w-full md:w-60"},null,8,["modelValue","options","onUpdate:modelValue"])])),u(ct,{value:U(a),rows:xe,"total-records":U(c),onSort:U(p),onPage:U(f),onFilter:A,filters:L.value,"onUpdate:filters":d[1]||(d[1]=m=>L.value=m),"data-key":"id",scrollable:"",loading:U(z),rowHover:!0,showGridlines:""},{empty:b(()=>d[3]||(d[3]=[X("Non ci sono media")])),default:b(()=>[u(P,{class:"max-w-[100px]",header:"Contest",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{body:b(({data:m})=>[s("div",Aa,[u(te,{src:m.attachment_img_preview_url,alt:"Image",width:"250",preview:""},null,8,["src"])])]),_:1}),u(P,{class:"min-w-[200px]",header:"Titolo",field:"title",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!1},{filter:b(({filterModel:m,filterCallback:S})=>[s("div",Ra,[u(ae,{fluid:"",modelValue:m.value,"onUpdate:modelValue":V=>m.value=V,type:"text",placeholder:"Filtra",onKeydown:pe(V=>S(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),u(G,{class:E(m.value?"":"invisible"),icon:"pi pi-filter-slash",variant:"text",rounded:"",onClick:V=>{m.value="",S()}},null,8,["class","onClick"])])]),body:b(({data:m})=>[s("div",ja,[s("span",null,I(m.title),1)])]),_:1}),u(P,{class:"min-w-[200px]",header:"Autore",field:"user_id",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!0},{filter:b(({filterModel:m,filterCallback:S})=>[u(ue,{modelValue:m.value,"onUpdate:modelValue":V=>m.value=V,optionLabel:"full_name",optionValue:"id",suggestions:h.value,onComplete:K,onOptionSelect:V=>S(),dataKey:"id",onClear:V=>S()},null,8,["modelValue","onUpdate:modelValue","suggestions","onOptionSelect","onClear"])]),body:b(({data:m})=>{var S;return[s("div",Oa,[s("span",null,I((S=m.user)==null?void 0:S.full_name),1)])]}),_:1}),u(P,{header:"Data caricamento",field:"created_at",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!0},{body:b(({data:m})=>[s("span",null,I(U(fe)(m.created_at)),1)]),_:1}),u(P,{class:"min-w-[100px]",header:"Stato",field:"online",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,"show-clear-button":!0},{filter:b(({filterModel:m,filterCallback:S})=>[u(H,{class:"w-[200px]",modelValue:m.value,"onUpdate:modelValue":[V=>m.value=V,S],options:U(i).getVideoStatus(),"option-label":"label","option-value":"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),body:b(({data:m})=>[u(T,{value:U(i).getPrettyVideoStatus(m.online),severity:U(i).getColorVideoStatus(m.online)},null,8,["value","severity"])]),_:1}),u(P,{class:"w-[50px]","align-frozen":"right",frozen:""},{body:b(({data:m})=>[s("div",Na,[et(u(G,{type:"button","aria-haspopup":"true","aria-controls":"overlay_menu",icon:"pi pi-arrow-right",text:"",rounded:"",as:"router-link",to:q(m.id)},null,8,["to"]),[[D,"Dettaglio",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","total-records","onSort","onPage","filters","loading"])])}}}),qa=O({__name:"ContestPanelVideo",setup(e){const t=be(),n=k();return oe(()=>{n.value=t.params.id}),(i,l)=>{const a=Te;return r(),B(a,{header:"VIDEO"},{default:b(()=>[u(Wa,{contest_id:n.value,class:"mt-4"},null,8,["contest_id"])]),_:1})}}}),sn=O({__name:"ContestDetail",setup(e){const t=be(),n=k();return oe(()=>{n.value=t.params.id}),(i,l)=>(r(),w("div",null,[u(Ea,{class:"mt-4"}),n.value?(r(),B(qa,{key:0,class:"mt-8"})):$("",!0)]))}});export{sn as default};
