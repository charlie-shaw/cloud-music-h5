import{_ as e}from"./u-icon.b5f0b7ed.js";import{E as t,G as n,H as o,r as i,o as a,c as l,w as r,a as u,O as s,d,x as p,v as c,i as f,T as h}from"./index-45478141.js";import{_ as y,r as m}from"./home.0b29f6a1.js";const g=y({name:"u-input",mixins:[n,o,{props:{modelValue:{type:[String,Number],default:t.input.value},type:{type:String,default:t.input.type},fixed:{type:Boolean,default:t.input.fixed},disabled:{type:Boolean,default:t.input.disabled},disabledColor:{type:String,default:t.input.disabledColor},clearable:{type:Boolean,default:t.input.clearable},password:{type:Boolean,default:t.input.password},maxlength:{type:[String,Number],default:t.input.maxlength},placeholder:{type:String,default:t.input.placeholder},placeholderClass:{type:String,default:t.input.placeholderClass},placeholderStyle:{type:[String,Object],default:t.input.placeholderStyle},showWordLimit:{type:Boolean,default:t.input.showWordLimit},confirmType:{type:String,default:t.input.confirmType},confirmHold:{type:Boolean,default:t.input.confirmHold},holdKeyboard:{type:Boolean,default:t.input.holdKeyboard},focus:{type:Boolean,default:t.input.focus},autoBlur:{type:Boolean,default:t.input.autoBlur},disableDefaultPadding:{type:Boolean,default:t.input.disableDefaultPadding},cursor:{type:[String,Number],default:t.input.cursor},cursorSpacing:{type:[String,Number],default:t.input.cursorSpacing},selectionStart:{type:[String,Number],default:t.input.selectionStart},selectionEnd:{type:[String,Number],default:t.input.selectionEnd},adjustPosition:{type:Boolean,default:t.input.adjustPosition},inputAlign:{type:String,default:t.input.inputAlign},fontSize:{type:[String,Number],default:t.input.fontSize},color:{type:String,default:t.input.color},prefixIcon:{type:String,default:t.input.prefixIcon},prefixIconStyle:{type:[String,Object],default:t.input.prefixIconStyle},suffixIcon:{type:String,default:t.input.suffixIcon},suffixIconStyle:{type:[String,Object],default:t.input.suffixIconStyle},border:{type:String,default:t.input.border},readonly:{type:Boolean,default:t.input.readonly},shape:{type:String,default:t.input.shape},formatter:{type:[Function,null],default:t.input.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}}],data:()=>({innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:e=>e}),watch:{modelValue:{immediate:!0,handler(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{isShowClear(){const{clearable:e,readonly:t,focused:n,innerValue:o}=this;return!!e&&!t&&!!n&&""!==o},inputClass(){let e=[],{border:t,disabled:n,shape:o}=this;return"surround"===t&&(e=e.concat(["u-border","u-input--radius"])),e.push(`u-input--${o}`),"bottom"===t&&(e=e.concat(["u-border-bottom","u-input--no-radius"])),e.join(" ")},wrapperStyle(){const e={};return this.disabled&&(e.backgroundColor=this.disabledColor),"none"===this.border?e.padding="0":(e.paddingTop="6px",e.paddingBottom="6px",e.paddingLeft="9px",e.paddingRight="9px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},inputStyle(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),textAlign:this.inputAlign}}},emits:["update:modelValue","focus","blur","change","confirm","clear","keyboardheightchange"],methods:{setFormatter(e){this.innerFormatter=e},onInput(e){let{value:t=""}=e.detail||{};const n=(this.formatter||this.innerFormatter)(t);this.innerValue=t,this.$nextTick((()=>{this.innerValue=n,this.valueChange()}))},onBlur(e){this.$emit("blur",e.detail.value),uni.$u.sleep(50).then((()=>{this.focused=!1})),uni.$u.formValidate(this,"blur")},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",this.innerValue)},onkeyboardheightchange(e){this.$emit("keyboardheightchange",e)},valueChange(){const e=this.innerValue;this.$nextTick((()=>{this.$emit("update:modelValue",e),this.changeFromInner=!0,this.$emit("change",e),uni.$u.formValidate(this,"change")}))},onClear(){this.innerValue="",this.$nextTick((()=>{this.valueChange(),this.$emit("clear")}))},clickHandler(){}}},[["render",function(t,n,o,y,g,b){const S=m(i("u-icon"),e),x=f,_=h;return a(),l(x,{class:c(["u-input",b.inputClass]),style:p([b.wrapperStyle])},{default:r((()=>[u(x,{class:"u-input__content"},{default:r((()=>[t.prefixIcon||t.$slots.prefix?(a(),l(x,{key:0,class:"u-input__content__prefix-icon"},{default:r((()=>[s(t.$slots,"prefix",{},(()=>[u(S,{name:t.prefixIcon,size:"18",customStyle:t.prefixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):d("",!0),u(x,{class:"u-input__content__field-wrapper",onClick:b.clickHandler},{default:r((()=>[u(_,{class:"u-input__content__field-wrapper__field",style:p([b.inputStyle]),type:t.type,focus:t.focus,cursor:t.cursor,value:g.innerValue,"auto-blur":t.autoBlur,disabled:t.disabled||t.readonly,maxlength:t.maxlength,placeholder:t.placeholder,"placeholder-style":t.placeholderStyle,"placeholder-class":t.placeholderClass,"confirm-type":t.confirmType,"confirm-hold":t.confirmHold,"hold-keyboard":t.holdKeyboard,"cursor-spacing":t.cursorSpacing,"adjust-position":t.adjustPosition,"selection-end":t.selectionEnd,"selection-start":t.selectionStart,password:t.password||"password"===t.type||void 0,ignoreCompositionEvent:t.ignoreCompositionEvent,onInput:b.onInput,onBlur:b.onBlur,onFocus:b.onFocus,onConfirm:b.onConfirm,onKeyboardheightchange:b.onkeyboardheightchange},null,8,["style","type","focus","cursor","value","auto-blur","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","password","ignoreCompositionEvent","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])])),_:1},8,["onClick"]),b.isShowClear?(a(),l(x,{key:1,class:"u-input__content__clear",onClick:b.onClear},{default:r((()=>[u(S,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):d("",!0),t.suffixIcon||t.$slots.suffix?(a(),l(x,{key:2,class:"u-input__content__subfix-icon"},{default:r((()=>[s(t.$slots,"suffix",{},(()=>[u(S,{name:t.suffixIcon,size:"18",customStyle:t.suffixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):d("",!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-8fe2b64b"]]);export{g as _};
