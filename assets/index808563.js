import{B as v,Q as u,o as e,c as l,L as d,m as o,t as c,e as g,n as f,U as m,C as y,s as b}from"../index80856.js";var h=({dt:a})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${a("avatar.width")};
    height: ${a("avatar.height")};
    font-size: ${a("avatar.font.size")};
    background: ${a("avatar.background")};
    color: ${a("avatar.color")};
    border-radius: ${a("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${a("avatar.icon.size")};
    width: ${a("avatar.icon.size")};
    height: ${a("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${a("avatar.lg.width")};
    height: ${a("avatar.lg.width")};
    font-size: ${a("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${a("avatar.lg.icon.size")};
    width: ${a("avatar.lg.icon.size")};
    height: ${a("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${a("avatar.xl.width")};
    height: ${a("avatar.xl.width")};
    font-size: ${a("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${a("avatar.xl.icon.size")};
    width: ${a("avatar.xl.icon.size")};
    height: ${a("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${a("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${a("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${a("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${a("avatar.xl.group.offset")};
}
`,$={root:function(r){var t=r.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},z=v.extend({name:"avatar",style:h,classes:$}),S={name:"BaseAvatar",extends:b,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:z,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function i(a){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},i(a)}function p(a,r,t){return(r=w(r))in a?Object.defineProperty(a,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[r]=t,a}function w(a){var r=P(a,"string");return i(r)=="symbol"?r:r+""}function P(a,r){if(i(a)!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var s=t.call(a,r);if(i(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}var k={name:"Avatar",extends:S,inheritAttrs:!1,emits:["error"],methods:{onError:function(r){this.$emit("error",r)}},computed:{dataP:function(){return u(p(p({},this.shape,this.shape),this.size,this.size))}}},E=["aria-labelledby","aria-label","data-p"],B=["data-p"],L=["data-p"],x=["src","alt","data-p"];function A(a,r,t,s,j,n){return e(),l("div",o({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptmi("root"),{"data-p":n.dataP}),[d(a.$slots,"default",{},function(){return[a.label?(e(),l("span",o({key:0,class:a.cx("label")},a.ptm("label"),{"data-p":n.dataP}),c(a.label),17,B)):a.$slots.icon?(e(),g(m(a.$slots.icon),{key:1,class:f(a.cx("icon"))},null,8,["class"])):a.icon?(e(),l("span",o({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon"),{"data-p":n.dataP}),null,16,L)):a.image?(e(),l("img",o({key:3,src:a.image,alt:a.ariaLabel,onError:r[0]||(r[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},a.ptm("image"),{"data-p":n.dataP}),null,16,x)):y("",!0)]})],16,E)}k.render=A;export{k as s};
