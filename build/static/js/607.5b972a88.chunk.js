"use strict";(self.webpackChunk_accounting_billing_stacklab=self.webpackChunk_accounting_billing_stacklab||[]).push([[607],{27247:function(e,t,n){var o=n(64836);t.Z=void 0;var a=o(n(45649)),r=n(80184);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},93704:function(e,t,n){var o=n(64836);t.Z=void 0;var a=o(n(45649)),r=n(80184);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"Percent")},89744:function(e,t,n){n.d(t,{Z:function(){return Y}});var o=n(4942),a=n(63366),r=n(87462),i=n(72791),l=n(28182),c=n(94419),u=n(29439),s=n(18252),p=n(88637),d=n(36229),f=n(97054),v=n(62971);function g(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function h(e,t){for(var n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreAccents,n=void 0===t||t,o=e.ignoreCase,a=void 0===o||o,r=e.limit,i=e.matchFrom,l=void 0===i?"any":i,c=e.stringify,u=e.trim,s=void 0!==u&&u;return function(e,t){var o=t.inputValue,i=t.getOptionLabel,u=s?o.trim():o;a&&(u=u.toLowerCase()),n&&(u=g(u));var p=u?e.filter((function(e){var t=(c||i)(e);return a&&(t=t.toLowerCase()),n&&(t=g(t)),"start"===l?0===t.indexOf(u):t.indexOf(u)>-1})):e;return"number"===typeof r?p.slice(0,r):p}}(),Z=function(e){var t;return null!==e.current&&(null==(t=e.current.parentElement)?void 0:t.contains(document.activeElement))};function b(e){var t,n=e.unstable_isActiveElementInListbox,o=void 0===n?Z:n,a=e.unstable_classNamePrefix,l=void 0===a?"Mui":a,c=e.autoComplete,g=void 0!==c&&c,b=e.autoHighlight,x=void 0!==b&&b,I=e.autoSelect,O=void 0!==I&&I,y=e.blurOnSelect,C=void 0!==y&&y,P=e.clearOnBlur,S=void 0===P?!e.freeSolo:P,w=e.clearOnEscape,k=void 0!==w&&w,A=e.componentName,L=void 0===A?"useAutocomplete":A,T=e.defaultValue,R=void 0===T?e.multiple?[]:null:T,D=e.disableClearable,z=void 0!==D&&D,M=e.disableCloseOnSelect,N=void 0!==M&&M,E=e.disabled,F=e.disabledItemsFocusable,j=void 0!==F&&F,H=e.disableListWrap,W=void 0!==H&&H,V=e.filterOptions,U=void 0===V?m:V,B=e.filterSelectedOptions,q=void 0!==B&&B,K=e.freeSolo,_=void 0!==K&&K,$=e.getOptionDisabled,G=e.getOptionLabel,J=void 0===G?function(e){var t;return null!=(t=e.label)?t:e}:G,Q=e.groupBy,X=e.handleHomeEndKeys,Y=void 0===X?!e.freeSolo:X,ee=e.id,te=e.includeInputInList,ne=void 0!==te&&te,oe=e.inputValue,ae=e.isOptionEqualToValue,re=void 0===ae?function(e,t){return e===t}:ae,ie=e.multiple,le=void 0!==ie&&ie,ce=e.onChange,ue=e.onClose,se=e.onHighlightChange,pe=e.onInputChange,de=e.onOpen,fe=e.open,ve=e.openOnFocus,ge=void 0!==ve&&ve,he=e.options,me=e.readOnly,Ze=void 0!==me&&me,be=e.selectOnFocus,xe=void 0===be?!e.freeSolo:be,Ie=e.value,Oe=(0,s.Z)(ee);t=function(e){var t=J(e);return"string"!==typeof t?String(t):t};var ye=i.useRef(!1),Ce=i.useRef(!0),Pe=i.useRef(null),Se=i.useRef(null),we=i.useState(null),ke=(0,u.Z)(we,2),Ae=ke[0],Le=ke[1],Te=i.useState(-1),Re=(0,u.Z)(Te,2),De=Re[0],ze=Re[1],Me=x?0:-1,Ne=i.useRef(Me),Ee=(0,p.Z)({controlled:Ie,default:R,name:L}),Fe=(0,u.Z)(Ee,2),je=Fe[0],He=Fe[1],We=(0,p.Z)({controlled:oe,default:"",name:L,state:"inputValue"}),Ve=(0,u.Z)(We,2),Ue=Ve[0],Be=Ve[1],qe=i.useState(!1),Ke=(0,u.Z)(qe,2),_e=Ke[0],$e=Ke[1],Ge=i.useCallback((function(e,n){if((le?je.length<n.length:null!==n)||S){var o;if(le)o="";else if(null==n)o="";else{var a=t(n);o="string"===typeof a?a:""}Ue!==o&&(Be(o),pe&&pe(e,o,"reset"))}}),[t,Ue,le,pe,Be,S,je]),Je=(0,p.Z)({controlled:fe,default:!1,name:L,state:"open"}),Qe=(0,u.Z)(Je,2),Xe=Qe[0],Ye=Qe[1],et=i.useState(!0),tt=(0,u.Z)(et,2),nt=tt[0],ot=tt[1],at=!le&&null!=je&&Ue===t(je),rt=Xe&&!Ze,it=rt?U(he.filter((function(e){return!q||!(le?je:[je]).some((function(t){return null!==t&&re(e,t)}))})),{inputValue:at&&nt?"":Ue,getOptionLabel:t}):[],lt=(0,d.Z)({filteredOptions:it,value:je});i.useEffect((function(){var e=je!==lt.value;_e&&!e||_&&!e||Ge(null,je)}),[je,Ge,_e,lt.value,_]);var ct=Xe&&it.length>0&&!Ze,ut=(0,f.Z)((function(e){-1===e?Pe.current.focus():Ae.querySelector('[data-tag-index="'.concat(e,'"]')).focus()}));i.useEffect((function(){le&&De>je.length-1&&(ze(-1),ut(-1))}),[je,le,De,ut]);var st=(0,f.Z)((function(e){var t=e.event,n=e.index,o=e.reason,a=void 0===o?"auto":o;if(Ne.current=n,-1===n?Pe.current.removeAttribute("aria-activedescendant"):Pe.current.setAttribute("aria-activedescendant","".concat(Oe,"-option-").concat(n)),se&&se(t,-1===n?null:it[n],a),Se.current){var r=Se.current.querySelector('[role="option"].'.concat(l,"-focused"));r&&(r.classList.remove("".concat(l,"-focused")),r.classList.remove("".concat(l,"-focusVisible")));var i=Se.current;if("listbox"!==Se.current.getAttribute("role")&&(i=Se.current.parentElement.querySelector('[role="listbox"]')),i)if(-1!==n){var c=Se.current.querySelector('[data-option-index="'.concat(n,'"]'));if(c&&(c.classList.add("".concat(l,"-focused")),"keyboard"===a&&c.classList.add("".concat(l,"-focusVisible")),i.scrollHeight>i.clientHeight&&"mouse"!==a)){var u=c,s=i.clientHeight+i.scrollTop,p=u.offsetTop+u.offsetHeight;p>s?i.scrollTop=p-i.clientHeight:u.offsetTop-u.offsetHeight*(Q?1.3:0)<i.scrollTop&&(i.scrollTop=u.offsetTop-u.offsetHeight*(Q?1.3:0))}}else i.scrollTop=0}})),pt=(0,f.Z)((function(e){var n=e.event,o=e.diff,a=e.direction,r=void 0===a?"next":a,i=e.reason,l=void 0===i?"auto":i;if(rt){var c=function(e,t){if(!Se.current||-1===e)return-1;for(var n=e;;){if("next"===t&&n===it.length||"previous"===t&&-1===n)return-1;var o=Se.current.querySelector('[data-option-index="'.concat(n,'"]')),a=!j&&(!o||o.disabled||"true"===o.getAttribute("aria-disabled"));if(!(o&&!o.hasAttribute("tabindex")||a))return n;n+="next"===t?1:-1}}(function(){var e=it.length-1;if("reset"===o)return Me;if("start"===o)return 0;if("end"===o)return e;var t=Ne.current+o;return t<0?-1===t&&ne?-1:W&&-1!==Ne.current||Math.abs(o)>1?0:e:t>e?t===e+1&&ne?-1:W||Math.abs(o)>1?e:0:t}(),r);if(st({index:c,reason:l,event:n}),g&&"reset"!==o)if(-1===c)Pe.current.value=Ue;else{var u=t(it[c]);Pe.current.value=u,0===u.toLowerCase().indexOf(Ue.toLowerCase())&&Ue.length>0&&Pe.current.setSelectionRange(Ue.length,u.length)}}})),dt=i.useCallback((function(){if(rt&&!function(){var e,n;if(-1!==Ne.current&&lt.filteredOptions&&lt.filteredOptions.length!==it.length&&(le?je.length===lt.value.length&&lt.value.every((function(e,n){return t(je[n])===t(e)})):(e=lt.value,n=je,(e?t(e):"")===(n?t(n):"")))){var o=lt.filteredOptions[Ne.current];if(o&&it.some((function(e){return t(e)===t(o)})))return!0}return!1}()){var e=le?je[0]:je;if(0!==it.length&&null!=e){if(Se.current)if(null==e)Ne.current>=it.length-1?st({index:it.length-1}):st({index:Ne.current});else{var n=it[Ne.current];if(le&&n&&-1!==h(je,(function(e){return re(n,e)})))return;var o=h(it,(function(t){return re(t,e)}));-1===o?pt({diff:"reset"}):st({index:o})}}else pt({diff:"reset"})}}),[it.length,!le&&je,q,pt,st,rt,Ue,le]),ft=(0,f.Z)((function(e){(0,v.Z)(Se,e),e&&dt()}));i.useEffect((function(){dt()}),[dt]);var vt=function(e){Xe||(Ye(!0),ot(!0),de&&de(e))},gt=function(e,t){Xe&&(Ye(!1),ue&&ue(e,t))},ht=function(e,t,n,o){if(le){if(je.length===t.length&&je.every((function(e,n){return e===t[n]})))return}else if(je===t)return;ce&&ce(e,t,n,o),He(t)},mt=i.useRef(!1),Zt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"selectOption",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",a=n,r=t;if(le){var i=h(r=Array.isArray(je)?je.slice():[],(function(e){return re(t,e)}));-1===i?r.push(t):"freeSolo"!==o&&(r.splice(i,1),a="removeOption")}Ge(e,r),ht(e,r,a,{option:t}),N||e&&(e.ctrlKey||e.metaKey)||gt(e,a),(!0===C||"touch"===C&&mt.current||"mouse"===C&&!mt.current)&&Pe.current.blur()};var bt=function(e,t){if(le){""===Ue&&gt(e,"toggleInput");var n=De;-1===De?""===Ue&&"previous"===t&&(n=je.length-1):((n+="next"===t?1:-1)<0&&(n=0),n===je.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;for(var n=e;;){if("next"===t&&n===je.length||"previous"===t&&-1===n)return-1;var o=Ae.querySelector('[data-tag-index="'.concat(n,'"]'));if(o&&o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),ze(n),ut(n)}},xt=function(e){ye.current=!0,Be(""),pe&&pe(e,"","clear"),ht(e,le?[]:null,"clear")},It=function(e){return function(t){if(e.onKeyDown&&e.onKeyDown(t),!t.defaultMuiPrevented&&(-1!==De&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(ze(-1),ut(-1)),229!==t.which))switch(t.key){case"Home":rt&&Y&&(t.preventDefault(),pt({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":rt&&Y&&(t.preventDefault(),pt({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),pt({diff:-5,direction:"previous",reason:"keyboard",event:t}),vt(t);break;case"PageDown":t.preventDefault(),pt({diff:5,direction:"next",reason:"keyboard",event:t}),vt(t);break;case"ArrowDown":t.preventDefault(),pt({diff:1,direction:"next",reason:"keyboard",event:t}),vt(t);break;case"ArrowUp":t.preventDefault(),pt({diff:-1,direction:"previous",reason:"keyboard",event:t}),vt(t);break;case"ArrowLeft":bt(t,"previous");break;case"ArrowRight":bt(t,"next");break;case"Enter":if(-1!==Ne.current&&rt){var n=it[Ne.current],o=!!$&&$(n);if(t.preventDefault(),o)return;Zt(t,n,"selectOption"),g&&Pe.current.setSelectionRange(Pe.current.value.length,Pe.current.value.length)}else _&&""!==Ue&&!1===at&&(le&&t.preventDefault(),Zt(t,Ue,"createOption","freeSolo"));break;case"Escape":rt?(t.preventDefault(),t.stopPropagation(),gt(t,"escape")):k&&(""!==Ue||le&&je.length>0)&&(t.preventDefault(),t.stopPropagation(),xt(t));break;case"Backspace":if(le&&!Ze&&""===Ue&&je.length>0){var a=-1===De?je.length-1:De,r=je.slice();r.splice(a,1),ht(t,r,"removeOption",{option:je[a]})}break;case"Delete":if(le&&!Ze&&""===Ue&&je.length>0&&-1!==De){var i=De,l=je.slice();l.splice(i,1),ht(t,l,"removeOption",{option:je[i]})}}}},Ot=function(e){$e(!0),ge&&!ye.current&&vt(e)},yt=function(e){o(Se)?Pe.current.focus():($e(!1),Ce.current=!0,ye.current=!1,O&&-1!==Ne.current&&rt?Zt(e,it[Ne.current],"blur"):O&&_&&""!==Ue?Zt(e,Ue,"blur","freeSolo"):S&&Ge(e,je),gt(e,"blur"))},Ct=function(e){var t=e.target.value;Ue!==t&&(Be(t),ot(!1),pe&&pe(e,t,"input")),""===t?z||le||ht(e,null,"clear"):vt(e)},Pt=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));Ne.current!==t&&st({event:e,index:t,reason:"mouse"})},St=function(e){st({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"touch"}),mt.current=!0},wt=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));Zt(e,it[t],"selectOption"),mt.current=!1},kt=function(e){return function(t){var n=je.slice();n.splice(e,1),ht(t,n,"removeOption",{option:je[e]})}},At=function(e){Xe?gt(e,"toggleInput"):vt(e)},Lt=function(e){e.currentTarget.contains(e.target)&&e.target.getAttribute("id")!==Oe&&e.preventDefault()},Tt=function(e){e.currentTarget.contains(e.target)&&(Pe.current.focus(),xe&&Ce.current&&Pe.current.selectionEnd-Pe.current.selectionStart===0&&Pe.current.select(),Ce.current=!1)},Rt=function(e){""!==Ue&&Xe||At(e)},Dt=_&&Ue.length>0;Dt=Dt||(le?je.length>0:null!==je);var zt=it;if(Q){new Map;zt=it.reduce((function(e,t,n){var o=Q(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e}),[])}return E&&_e&&yt(),{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)({"aria-owns":ct?"".concat(Oe,"-listbox"):null},e,{onKeyDown:It(e),onMouseDown:Lt,onClick:Tt})},getInputLabelProps:function(){return{id:"".concat(Oe,"-label"),htmlFor:Oe}},getInputProps:function(){return{id:Oe,value:Ue,onBlur:yt,onFocus:Ot,onChange:Ct,onMouseDown:Rt,"aria-activedescendant":rt?"":null,"aria-autocomplete":g?"both":"list","aria-controls":ct?"".concat(Oe,"-listbox"):void 0,"aria-expanded":ct,autoComplete:"off",ref:Pe,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:E}},getClearProps:function(){return{tabIndex:-1,onClick:xt}},getPopupIndicatorProps:function(){return{tabIndex:-1,onClick:At}},getTagProps:function(e){var t=e.index;return(0,r.Z)({key:t,"data-tag-index":t,tabIndex:-1},!Ze&&{onDelete:kt(t)})},getListboxProps:function(){return{role:"listbox",id:"".concat(Oe,"-listbox"),"aria-labelledby":"".concat(Oe,"-label"),ref:ft,onMouseDown:function(e){e.preventDefault()}}},getOptionProps:function(e){var n=e.index,o=e.option,a=(le?je:[je]).some((function(e){return null!=e&&re(o,e)})),r=!!$&&$(o);return{key:t(o),tabIndex:-1,role:"option",id:"".concat(Oe,"-option-").concat(n),onMouseMove:Pt,onClick:wt,onTouchStart:St,"data-option-index":n,"aria-disabled":r,"aria-selected":a}},id:Oe,inputValue:Ue,value:je,dirty:Dt,expanded:rt&&Ae,popupOpen:rt,focused:_e||-1!==De,anchorEl:Ae,setAnchorEl:Le,focusedTag:De,groupedOptions:zt}}var x,I,O=n(12065),y=n(94366),C=n(79834),P=n(27938),S=n(13400),w=n(85771),k=n(86779),A=n(55891),L=n(56059),T=n(96285),R=n(8799),D=n(89059),z=n(31402),M=n(66934),N=n(97902),E=n(14036),F=n(42071),j=n(80184),H=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],W=["ref"],V=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.fullWidth,r=n.hasClearIcon,i=n.hasPopupIcon,l=n.inputFocused,c=n.size;return[(0,o.Z)({},"& .".concat(N.Z.tag),t.tag),(0,o.Z)({},"& .".concat(N.Z.tag),t["tagSize".concat((0,E.Z)(c))]),(0,o.Z)({},"& .".concat(N.Z.inputRoot),t.inputRoot),(0,o.Z)({},"& .".concat(N.Z.input),t.input),(0,o.Z)({},"& .".concat(N.Z.input),l&&t.inputFocused),t.root,a&&t.fullWidth,i&&t.hasPopupIcon,r&&t.hasClearIcon]}})((function(e){var t,n,a,i,l,c=e.ownerState;return(0,r.Z)((t={},(0,o.Z)(t,"&.".concat(N.Z.focused," .").concat(N.Z.clearIndicator),{visibility:"visible"}),(0,o.Z)(t,"@media (pointer: fine)",(0,o.Z)({},"&:hover .".concat(N.Z.clearIndicator),{visibility:"visible"})),t),c.fullWidth&&{width:"100%"},(l={},(0,o.Z)(l,"& .".concat(N.Z.tag),(0,r.Z)({margin:3,maxWidth:"calc(100% - 6px)"},"small"===c.size&&{margin:2,maxWidth:"calc(100% - 4px)"})),(0,o.Z)(l,"& .".concat(N.Z.inputRoot),(n={flexWrap:"wrap"},(0,o.Z)(n,".".concat(N.Z.hasPopupIcon,"&, .").concat(N.Z.hasClearIcon,"&"),{paddingRight:30}),(0,o.Z)(n,".".concat(N.Z.hasPopupIcon,".").concat(N.Z.hasClearIcon,"&"),{paddingRight:56}),(0,o.Z)(n,"& .".concat(N.Z.input),{width:0,minWidth:30}),n)),(0,o.Z)(l,"& .".concat(k.Z.root),{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}}),(0,o.Z)(l,"& .".concat(k.Z.root,".").concat(A.Z.sizeSmall),(0,o.Z)({},"& .".concat(k.Z.input),{padding:"2px 4px 3px 0"})),(0,o.Z)(l,"& .".concat(L.Z.root),(a={padding:9},(0,o.Z)(a,".".concat(N.Z.hasPopupIcon,"&, .").concat(N.Z.hasClearIcon,"&"),{paddingRight:39}),(0,o.Z)(a,".".concat(N.Z.hasPopupIcon,".").concat(N.Z.hasClearIcon,"&"),{paddingRight:65}),(0,o.Z)(a,"& .".concat(N.Z.input),{padding:"7.5px 4px 7.5px 5px"}),(0,o.Z)(a,"& .".concat(N.Z.endAdornment),{right:9}),a)),(0,o.Z)(l,"& .".concat(L.Z.root,".").concat(A.Z.sizeSmall),(0,o.Z)({paddingTop:6,paddingBottom:6,paddingLeft:6},"& .".concat(N.Z.input),{padding:"2.5px 4px 2.5px 8px"})),(0,o.Z)(l,"& .".concat(T.Z.root),(i={paddingTop:19,paddingLeft:8},(0,o.Z)(i,".".concat(N.Z.hasPopupIcon,"&, .").concat(N.Z.hasClearIcon,"&"),{paddingRight:39}),(0,o.Z)(i,".".concat(N.Z.hasPopupIcon,".").concat(N.Z.hasClearIcon,"&"),{paddingRight:65}),(0,o.Z)(i,"& .".concat(T.Z.input),{padding:"7px 4px"}),(0,o.Z)(i,"& .".concat(N.Z.endAdornment),{right:9}),i)),(0,o.Z)(l,"& .".concat(T.Z.root,".").concat(A.Z.sizeSmall),(0,o.Z)({paddingBottom:1},"& .".concat(T.Z.input),{padding:"2.5px 4px"})),(0,o.Z)(l,"& .".concat(A.Z.hiddenLabel),{paddingTop:8}),(0,o.Z)(l,"& .".concat(T.Z.root,".").concat(A.Z.hiddenLabel),(0,o.Z)({paddingTop:0,paddingBottom:0},"& .".concat(N.Z.input),{paddingTop:16,paddingBottom:17})),(0,o.Z)(l,"& .".concat(T.Z.root,".").concat(A.Z.hiddenLabel,".").concat(A.Z.sizeSmall),(0,o.Z)({},"& .".concat(N.Z.input),{paddingTop:8,paddingBottom:9})),(0,o.Z)(l,"& .".concat(N.Z.input),(0,r.Z)({flexGrow:1,textOverflow:"ellipsis",opacity:0},c.inputFocused&&{opacity:1})),l))})),U=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:function(e,t){return t.endAdornment}})({position:"absolute",right:0,top:"calc(50% - 14px)"}),B=(0,M.ZP)(S.Z,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:function(e,t){return t.clearIndicator}})({marginRight:-2,padding:4,visibility:"hidden"}),q=(0,M.ZP)(S.Z,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:function(e,t){var n=e.ownerState;return(0,r.Z)({},t.popupIndicator,n.popupOpen&&t.popupIndicatorOpen)}})((function(e){var t=e.ownerState;return(0,r.Z)({padding:2,marginRight:-2},t.popupOpen&&{transform:"rotate(180deg)"})})),K=(0,M.ZP)(y.Z,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[(0,o.Z)({},"& .".concat(N.Z.option),t.option),t.popper,n.disablePortal&&t.popperDisablePortal]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({zIndex:(t.vars||t).zIndex.modal},n.disablePortal&&{position:"absolute"})})),_=(0,M.ZP)(P.Z,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:function(e,t){return t.paper}})((function(e){var t=e.theme;return(0,r.Z)({},t.typography.body1,{overflow:"auto"})})),$=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:function(e,t){return t.loading}})((function(e){var t=e.theme;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}})),G=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:function(e,t){return t.noOptions}})((function(e){var t=e.theme;return{color:(t.vars||t).palette.text.secondary,padding:"14px 16px"}})),J=(0,M.ZP)("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:function(e,t){return t.listbox}})((function(e){var t,n,a=e.theme;return(0,o.Z)({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative"},"& .".concat(N.Z.option),(n={minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16},(0,o.Z)(n,a.breakpoints.up("sm"),{minHeight:"auto"}),(0,o.Z)(n,"&.".concat(N.Z.focused),{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,o.Z)(n,'&[aria-disabled="true"]',{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"}),(0,o.Z)(n,"&.".concat(N.Z.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,o.Z)(n,'&[aria-selected="true"]',(t={backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,O.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},(0,o.Z)(t,"&.".concat(N.Z.focused),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,O.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}}),(0,o.Z)(t,"&.".concat(N.Z.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,O.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),t)),n))})),Q=(0,M.ZP)(C.Z,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:function(e,t){return t.groupLabel}})((function(e){var t=e.theme;return{backgroundColor:(t.vars||t).palette.background.paper,top:-8}})),X=(0,M.ZP)("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:function(e,t){return t.groupUl}})((0,o.Z)({padding:0},"& .".concat(N.Z.option),{paddingLeft:24})),Y=i.forwardRef((function(e,t){var n,o,u,s,p,d=(0,z.Z)({props:e,name:"MuiAutocomplete"}),f=(d.autoComplete,d.autoHighlight,d.autoSelect,d.blurOnSelect,d.ChipProps),v=d.className,g=d.clearIcon,h=void 0===g?x||(x=(0,j.jsx)(R.Z,{fontSize:"small"})):g,m=d.clearOnBlur,Z=(void 0===m&&d.freeSolo,d.clearOnEscape,d.clearText),O=void 0===Z?"Clear":Z,C=d.closeText,S=void 0===C?"Close":C,k=d.componentsProps,A=void 0===k?{}:k,L=d.defaultValue,T=(void 0===L&&d.multiple,d.disableClearable),M=void 0!==T&&T,Y=(d.disableCloseOnSelect,d.disabled),ee=void 0!==Y&&Y,te=(d.disabledItemsFocusable,d.disableListWrap,d.disablePortal),ne=void 0!==te&&te,oe=(d.filterSelectedOptions,d.forcePopupIcon),ae=void 0===oe?"auto":oe,re=d.freeSolo,ie=void 0!==re&&re,le=d.fullWidth,ce=void 0!==le&&le,ue=d.getLimitTagsText,se=void 0===ue?function(e){return"+".concat(e)}:ue,pe=d.getOptionLabel,de=void 0===pe?function(e){var t;return null!=(t=e.label)?t:e}:pe,fe=d.groupBy,ve=d.handleHomeEndKeys,ge=(void 0===ve&&d.freeSolo,d.includeInputInList,d.limitTags),he=void 0===ge?-1:ge,me=d.ListboxComponent,Ze=void 0===me?"ul":me,be=d.ListboxProps,xe=d.loading,Ie=void 0!==xe&&xe,Oe=d.loadingText,ye=void 0===Oe?"Loading\u2026":Oe,Ce=d.multiple,Pe=void 0!==Ce&&Ce,Se=d.noOptionsText,we=void 0===Se?"No options":Se,ke=(d.openOnFocus,d.openText),Ae=void 0===ke?"Open":ke,Le=d.PaperComponent,Te=void 0===Le?P.Z:Le,Re=d.PopperComponent,De=void 0===Re?y.Z:Re,ze=d.popupIcon,Me=void 0===ze?I||(I=(0,j.jsx)(D.Z,{})):ze,Ne=d.readOnly,Ee=void 0!==Ne&&Ne,Fe=d.renderGroup,je=d.renderInput,He=d.renderOption,We=d.renderTags,Ve=d.selectOnFocus,Ue=(void 0===Ve&&d.freeSolo,d.size),Be=void 0===Ue?"medium":Ue,qe=d.slotProps,Ke=void 0===qe?{}:qe,_e=(0,a.Z)(d,H),$e=b((0,r.Z)({},d,{componentName:"Autocomplete"})),Ge=$e.getRootProps,Je=$e.getInputProps,Qe=$e.getInputLabelProps,Xe=$e.getPopupIndicatorProps,Ye=$e.getClearProps,et=$e.getTagProps,tt=$e.getListboxProps,nt=$e.getOptionProps,ot=$e.value,at=$e.dirty,rt=$e.expanded,it=$e.id,lt=$e.popupOpen,ct=$e.focused,ut=$e.focusedTag,st=$e.anchorEl,pt=$e.setAnchorEl,dt=$e.inputValue,ft=$e.groupedOptions,vt=!M&&!ee&&at&&!Ee,gt=(!ie||!0===ae)&&!1!==ae,ht=Je().onMouseDown,mt=(null!=be?be:{}).ref,Zt=tt(),bt=Zt.ref,xt=(0,a.Z)(Zt,W),It=(0,F.Z)(bt,mt),Ot=(0,r.Z)({},d,{disablePortal:ne,expanded:rt,focused:ct,fullWidth:ce,hasClearIcon:vt,hasPopupIcon:gt,inputFocused:-1===ut,popupOpen:lt,size:Be}),yt=function(e){var t=e.classes,n=e.disablePortal,o=e.expanded,a=e.focused,r=e.fullWidth,i=e.hasClearIcon,l=e.hasPopupIcon,u=e.inputFocused,s=e.popupOpen,p=e.size,d={root:["root",o&&"expanded",a&&"focused",r&&"fullWidth",i&&"hasClearIcon",l&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",u&&"inputFocused"],tag:["tag","tagSize".concat((0,E.Z)(p))],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",s&&"popupIndicatorOpen"],popper:["popper",n&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return(0,c.Z)(d,N.q,t)}(Ot);if(Pe&&ot.length>0){var Ct=function(e){return(0,r.Z)({className:yt.tag,disabled:ee},et(e))};p=We?We(ot,Ct,Ot):ot.map((function(e,t){return(0,j.jsx)(w.Z,(0,r.Z)({label:de(e),size:Be},Ct({index:t}),f))}))}if(he>-1&&Array.isArray(p)){var Pt=p.length-he;!ct&&Pt>0&&(p=p.splice(0,he)).push((0,j.jsx)("span",{className:yt.tag,children:se(Pt)},p.length))}var St=Fe||function(e){return(0,j.jsxs)("li",{children:[(0,j.jsx)(Q,{className:yt.groupLabel,ownerState:Ot,component:"div",children:e.group}),(0,j.jsx)(X,{className:yt.groupUl,ownerState:Ot,children:e.children})]},e.key)},wt=He||function(e,t){return(0,j.jsx)("li",(0,r.Z)({},e,{children:de(t)}))},kt=function(e,t){var n=nt({option:e,index:t});return wt((0,r.Z)({},n,{className:yt.option}),e,{selected:n["aria-selected"],index:t,inputValue:dt})},At=null!=(n=Ke.clearIndicator)?n:A.clearIndicator,Lt=null!=(o=Ke.paper)?o:A.paper,Tt=null!=(u=Ke.popper)?u:A.popper,Rt=null!=(s=Ke.popupIndicator)?s:A.popupIndicator;return(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(V,(0,r.Z)({ref:t,className:(0,l.Z)(yt.root,v),ownerState:Ot},Ge(_e),{children:je({id:it,disabled:ee,fullWidth:!0,size:"small"===Be?"small":void 0,InputLabelProps:Qe(),InputProps:(0,r.Z)({ref:pt,className:yt.inputRoot,startAdornment:p,onClick:function(e){e.target===e.currentTarget&&ht(e)}},(vt||gt)&&{endAdornment:(0,j.jsxs)(U,{className:yt.endAdornment,ownerState:Ot,children:[vt?(0,j.jsx)(B,(0,r.Z)({},Ye(),{"aria-label":O,title:O,ownerState:Ot},At,{className:(0,l.Z)(yt.clearIndicator,null==At?void 0:At.className),children:h})):null,gt?(0,j.jsx)(q,(0,r.Z)({},Xe(),{disabled:ee,"aria-label":lt?S:Ae,title:lt?S:Ae,ownerState:Ot},Rt,{className:(0,l.Z)(yt.popupIndicator,null==Rt?void 0:Rt.className),children:Me})):null]})}),inputProps:(0,r.Z)({className:yt.input,disabled:ee,readOnly:Ee},Je())})})),st?(0,j.jsx)(K,(0,r.Z)({as:De,disablePortal:ne,style:{width:st?st.clientWidth:null},ownerState:Ot,role:"presentation",anchorEl:st,open:lt},Tt,{className:(0,l.Z)(yt.popper,null==Tt?void 0:Tt.className),children:(0,j.jsxs)(_,(0,r.Z)({ownerState:Ot,as:Te},Lt,{className:(0,l.Z)(yt.paper,null==Lt?void 0:Lt.className),children:[Ie&&0===ft.length?(0,j.jsx)($,{className:yt.loading,ownerState:Ot,children:ye}):null,0!==ft.length||ie||Ie?null:(0,j.jsx)(G,{className:yt.noOptions,ownerState:Ot,role:"presentation",onMouseDown:function(e){e.preventDefault()},children:we}),ft.length>0?(0,j.jsx)(J,(0,r.Z)({as:Ze,className:yt.listbox,ownerState:Ot},xt,be,{ref:It,children:ft.map((function(e,t){return fe?St({key:e.key,group:e.group,children:e.options.map((function(t,n){return kt(t,e.index+n)}))}):kt(e,t)}))})):null]}))})):null]})}))},8799:function(e,t,n){n(72791);var o=n(74223),a=n(80184);t.Z=(0,o.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},4560:function(e,t,n){n.d(t,{C:function(){return u}});var o=n(4942),a=n(87462),r=(n(72791),n(36314)),i=n(12022),l=n(80184),c=function(e){return e.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)?"multi-panel-UI-view":e.match(/^([A-Za-z]*)(DigitalClock)$/)?"Tall-UI-view":e.match(/^Static([A-Za-z]+)/)||e.match(/^([A-Za-z]+)(Calendar|Clock)$/)?"UI-view":e.match(/^MultiInput([A-Za-z]+)RangeField$/)||e.match(/^([A-Za-z]+)RangePicker$/)?"multi-input-range-field":e.match(/^SingleInput([A-Za-z]+)RangeField$/)?"single-input-range-field":"single-input-field"};function u(e){var t=e.children,n=e.components,u=e.sx,s=new Set,p=new Set;n.forEach((function(e){s.add(c(e)),p.add(function(e){return e.includes("DateTime")?"date-time":e.includes("Date")?"date":"time"}(e))}));var d,f,v=function(e){return"row"===e?s.has("UI-view")||s.has("Tall-UI-view")?3:2:s.has("UI-view")?4:3},g=(0,a.Z)({overflow:"auto",pt:1},u);return n.length>2||s.has("multi-input-range-field")||s.has("single-input-range-field")||s.has("multi-panel-UI-view")||s.has("UI-view")||p.has("date-time")?(d="column",f=v("column")):(d={xs:"column",lg:"row"},f={xs:v("column"),lg:v("row")}),s.has("UI-view")||(g=s.has("single-input-range-field")?p.has("date-time")?(0,a.Z)({},g,(0,o.Z)({},"& > .".concat(i.Z.root),{minWidth:{xs:300,md:400}})):(0,a.Z)({},g,(0,o.Z)({},"& > .".concat(i.Z.root),{minWidth:300})):p.has("date-time")?(0,a.Z)({},g,(0,o.Z)({},"& > .".concat(i.Z.root),{minWidth:270})):(0,a.Z)({},g,(0,o.Z)({},"& > .".concat(i.Z.root),{minWidth:200}))),(0,l.jsx)(r.Z,{direction:d,spacing:f,sx:g,children:t})}}}]);
//# sourceMappingURL=607.5b972a88.chunk.js.map