"use strict";(self.webpackChunkpirateCove=self.webpackChunkpirateCove||[]).push([[420],{4420:(wn,dt,f)=>{f.r(dt),f.d(dt,{DungeonDisplayModule:()=>An});var F=f(6814),i=f(9291),ye=f(7715),ve=f(9315),Ce=f(7398);let ct=(()=>{var e;class t{constructor(n,o){this._renderer=n,this._elementRef=o,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq))},e.\u0275dir=i.lG2({type:e}),t})(),y=(()=>{var e;class t extends ct{}return(e=t).\u0275fac=function(){let r;return function(o){return(r||(r=i.n5z(e)))(o||e)}}(),e.\u0275dir=i.lG2({type:e,features:[i.qOj]}),t})();const p=new i.OlP("NgValueAccessor"),be={provide:p,useExisting:(0,i.Gpc)(()=>S),multi:!0},Me=new i.OlP("CompositionEventMode");let S=(()=>{var e;class t extends ct{constructor(n,o,s){super(n,o),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function De(){const e=(0,F.q)()?(0,F.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Me,8))},e.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){1&n&&i.NdJ("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[i._Bn([be]),i.qOj]}),t})();const d=new i.OlP("NgValidators"),m=new i.OlP("NgAsyncValidators");function bt(e){return null!=e}function Dt(e){return(0,i.QGY)(e)?(0,ye.D)(e):e}function Mt(e){let t={};return e.forEach(r=>{t=null!=r?{...t,...r}:t}),0===Object.keys(t).length?null:t}function At(e,t){return t.map(r=>r(e))}function Et(e){return e.map(t=>function Ee(e){return!e.validate}(t)?t:r=>t.validate(r))}function L(e){return null!=e?function wt(e){if(!e)return null;const t=e.filter(bt);return 0==t.length?null:function(r){return Mt(At(r,t))}}(Et(e)):null}function Y(e){return null!=e?function Ot(e){if(!e)return null;const t=e.filter(bt);return 0==t.length?null:function(r){const n=At(r,t).map(Dt);return(0,ve.D)(n).pipe((0,Ce.U)(Mt))}}(Et(e)):null}function Ft(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function St(e){return e._rawValidators}function Nt(e){return e._rawAsyncValidators}function W(e){return e?Array.isArray(e)?e:[e]:[]}function G(e,t){return Array.isArray(e)?e.includes(t):e===t}function Gt(e,t){const r=W(t);return W(e).forEach(o=>{G(r,o)||r.push(o)}),r}function xt(e,t){return W(t).filter(r=>!G(e,r))}class kt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Y(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,r){return!!this.control&&this.control.hasError(t,r)}getError(t,r){return this.control?this.control.getError(t,r):null}}class c extends kt{get formDirective(){return null}get path(){return null}}class _ extends kt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Bt{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Tt=(()=>{var e;class t extends Bt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(_,2))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){2&n&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.qOj]}),t})(),Pt=(()=>{var e;class t extends Bt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(c,10))},e.\u0275dir=i.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){2&n&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[i.qOj]}),t})();const D="VALID",k="INVALID",C="PENDING",M="DISABLED";function Z(e){return(B(e)?e.validators:e)||null}function J(e,t){return(B(t)?t.asyncValidators:e)||null}function B(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class jt{constructor(t,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===k}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Gt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Gt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(xt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(xt(t,this._rawAsyncValidators))}hasValidator(t){return G(this._rawValidators,t)}hasAsyncValidator(t){return G(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(n=>{n.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(n=>{n.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const r=Dt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,r={}){this.errors=t,this._updateControlsErrors(!1!==r.emitEvent)}get(t){let r=t;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,o)=>n&&n._find(o),this)}getError(t,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[t]:null}hasError(t,r){return!!this.getError(t,r)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(k)?k:D}_anyControlsHaveStatus(t){return this._anyControls(r=>r.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){B(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Se(e){return Array.isArray(e)?L(e):e||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Ne(e){return Array.isArray(e)?Y(e):e||null}(this._rawAsyncValidators)}}class T extends jt{constructor(t,r,n){super(Z(r),J(n,r)),this.controls=t,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,r){return this.controls[t]?this.controls[t]:(this.controls[t]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(t,r,n={}){this.registerControl(t,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(t,r,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],r&&this.registerControl(t,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,r={}){(function Ut(e,t,r){e._forEachChild((n,o)=>{if(void 0===r[o])throw new i.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(n=>{(function Ht(e,t,r){const n=e.controls;if(!(t?Object.keys(n):n).length)throw new i.vHH(1e3,"");if(!n[r])throw new i.vHH(1001,"")})(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(t,r={}){null!=t&&(Object.keys(t).forEach(n=>{const o=this.controls[n];o&&o.patchValue(t[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(t={},r={}){this._forEachChild((n,o)=>{n.reset(t[o],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(t,r,n)=>(t[n]=r.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(r,n)=>!!n._syncPendingControls()||r);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(r=>{const n=this.controls[r];n&&t(n,r)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[r,n]of Object.entries(this.controls))if(this.contains(r)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(r,n,o)=>((n.enabled||this.disabled)&&(r[o]=n.value),r))}_reduceChildren(t,r){let n=t;return this._forEachChild((o,s)=>{n=r(n,o,s)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const V=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>P}),P="always";function A(e,t,r=P){Q(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&t.valueAccessor.setDisabledState?.(e.disabled),function ke(e,t){t.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Rt(e,t)})}(e,t),function Te(e,t){const r=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};e.registerOnChange(r),t._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,t),function Be(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Rt(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function xe(e,t){if(t.valueAccessor.setDisabledState){const r=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(r),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,t)}function H(e,t,r=!0){const n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),j(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function U(e,t){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(t)})}function Q(e,t){const r=St(e);null!==t.validator?e.setValidators(Ft(r,t.validator)):"function"==typeof r&&e.setValidators([r]);const n=Nt(e);null!==t.asyncValidator?e.setAsyncValidators(Ft(n,t.asyncValidator)):"function"==typeof n&&e.setAsyncValidators([n]);const o=()=>e.updateValueAndValidity();U(t._rawValidators,o),U(t._rawAsyncValidators,o)}function j(e,t){let r=!1;if(null!==e){if(null!==t.validator){const o=St(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(l=>l!==t.validator);s.length!==o.length&&(r=!0,e.setValidators(s))}}if(null!==t.asyncValidator){const o=Nt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(l=>l!==t.asyncValidator);s.length!==o.length&&(r=!0,e.setAsyncValidators(s))}}}const n=()=>{};return U(t._rawValidators,n),U(t._rawAsyncValidators,n),r}function Rt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Yt(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}function Wt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const w=class extends jt{constructor(t=null,r,n){super(Z(r),J(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=Wt(t)?t.value:t)}setValue(t,r={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(t,r={}){this.setValue(t,r)}reset(t=this.defaultValue,r={}){this._applyFormState(t),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Yt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Yt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Wt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let Qt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275dir=i.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})();const Ye={provide:p,useExisting:(0,i.Gpc)(()=>nt),multi:!0};let nt=(()=>{var e;class t extends y{writeValue(n){this.setProperty("value",n??"")}registerOnChange(n){this.onChange=o=>{n(""==o?null:parseFloat(o))}}}return(e=t).\u0275fac=function(){let r;return function(o){return(r||(r=i.n5z(e)))(o||e)}}(),e.\u0275dir=i.lG2({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){1&n&&i.NdJ("input",function(l){return o.onChange(l.target.value)})("blur",function(){return o.onTouched()})},features:[i._Bn([Ye]),i.qOj]}),t})(),Xt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),t})();const rt=new i.OlP("NgModelWithFormControlWarning"),Je={provide:c,useExisting:(0,i.Gpc)(()=>R)};let R=(()=>{var e;class t extends c{constructor(n,o,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(n),this._setAsyncValidators(o)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(j(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){const o=this.form.get(n.path);return A(o,n,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),o}getControl(n){return this.form.get(n.path)}removeControl(n){H(n.control||null,n,!1),function Ue(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,o){this.form.get(n.path).setValue(o)}onSubmit(n){return this.submitted=!0,function Lt(e,t){e._syncPendingControls(),t.forEach(r=>{const n=r.control;"submit"===n.updateOn&&n._pendingChange&&(r.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(n),"dialog"===n?.target?.method}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{const o=n.control,s=this.form.get(n.path);o!==s&&(H(o||null,n),(e=>e instanceof w)(s)&&(A(s,n,this.callSetDisabledState),n.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){const o=this.form.get(n.path);(function qt(e,t){Q(e,t)})(o,n),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){const o=this.form.get(n.path);o&&function Pe(e,t){return j(e,t)}(o,n)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&j(this._oldForm,this)}_checkFormPresent(){}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(d,10),i.Y36(m,10),i.Y36(V,8))},e.\u0275dir=i.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,o){1&n&&i.NdJ("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([Je]),i.qOj,i.TTD]}),t})();const Ke={provide:_,useExisting:(0,i.Gpc)(()=>st)};let st=(()=>{var e;class t extends _{set isDisabled(n){}constructor(n,o,s,l,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(o),this._setAsyncValidators(s),this.valueAccessor=function tt(e,t){if(!t)return null;let r,n,o;return Array.isArray(t),t.forEach(s=>{s.constructor===S?r=s:function He(e){return Object.getPrototypeOf(e.constructor)===y}(s)?n=s:o=s}),o||n||r||null}(0,l)}ngOnChanges(n){this._added||this._setUpControl(),function K(e,t){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(t,r.currentValue)}(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return function I(e,t){return[...t.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return(e=t)._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(i.Y36(c,13),i.Y36(d,10),i.Y36(m,10),i.Y36(p,10),i.Y36(rt,8))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([Ke]),i.qOj,i.TTD]}),t})(),gn=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[Xt]}),t})(),_n=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:rt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:V,useValue:n.callSetDisabledState??P}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[gn]}),t})();var yn=f(3801),pe=f(2058);let vn=(()=>{var e;class t{constructor(){this.dungeon=[]}generate(n,o,s){this.dungeon=[];for(let a=0;a<s;a++){let u=[];for(let h=0;h<o;h++)u.push({type:"empty"});this.dungeon.push(u)}const l=this.locateRooms(n);return l&&this.generateRooms(l),this.dungeon}locateRooms(n){if(this.dungeon.length>0){let o=[],s=0;for(;o.length<n;){let l=Math.floor(Math.random()*(this.dungeon.length-2)+1),a=Math.floor(Math.random()*(this.dungeon[0].length-2)+1),u=[];if(o.forEach(h=>{u.push(((h[0]-l)**2+(h[1]-a)**2)**.5)}),u.some(h=>h<7)||(this.dungeon[l][a]={type:"room"},o.push([l,a])),s>1e3){console.log("Not enough room in dungeon for rooms!");break}s+=1}return o}}generateRooms(n){n.forEach(o=>{const s=o[0],l=o[1];let u=this.distanceAvail(l,this.dungeon[s]),h=l-Math.floor(u[0]/2),b=l+Math.floor(u[1]/2),En=this.dungeon.map(function(O,q){return O[l]}),ge=this.distanceAvail(s,En),me=s-Math.floor(ge[0]/2),_e=s+Math.floor(ge[1]/2);for(let O=me;O<=_e;O++)for(let q=h;q<=b;q++)this.initialRenderTile([O,q],[me,_e],[h,b],o)})}distanceAvail(n,o){let s=0,l=0;for(let a=n-1;a>=0;a--)if("empty"==o[a].type)s+=1;else if("room"==o[a].type)break;for(let a=n+1;a<o.length;a++)if("empty"==o[a].type)l+=1;else if("room"==o[a].type)break;return[s,l]}initialRenderTile(n,o,s,l){let a=n[0],u=n[1];("empty"==this.dungeon[a][u].type||n[0]==l[0]&&n[1]==l[1])&&(this.dungeon[a][u]={type:"room"},a==o[0]&&a==o[1]&&u==s[0]&&u==s[1]?this.dungeon[a][u].attribute="closed-room":a==o[0]&&a==o[1]&&u==s[0]?this.dungeon[a][u].attribute="deadend-l":a==o[0]&&a==o[1]&&u==s[1]?this.dungeon[a][u].attribute="deadend-r":u==s[0]&&u==s[1]&&a==o[0]?this.dungeon[a][u].attribute="deadend-t":u==s[0]&&u==s[1]&&a==o[1]?this.dungeon[a][u].attribute="deadend-b":a==o[0]&&u==s[0]?this.dungeon[a][u].attribute="corner-tl":a==o[0]&&u==s[1]?this.dungeon[a][u].attribute="corner-tr":a==o[1]&&u==s[0]?this.dungeon[a][u].attribute="corner-bl":a==o[1]&&u==s[1]?this.dungeon[a][u].attribute="corner-br":a==o[0]&&a==o[1]?this.dungeon[a][u].attribute="hall-h":u==s[0]&&u==s[1]?this.dungeon[a][u].attribute="hall-v":a==o[0]?this.dungeon[a][u].attribute="wall-t":a==o[1]?this.dungeon[a][u].attribute="wall-b":u==s[0]?this.dungeon[a][u].attribute="wall-l":u==s[1]&&(this.dungeon[a][u].attribute="wall-r"))}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),t})();var Cn=f(721);function Vn(e,t){if(1&e&&i._UZ(0,"div"),2&e){const r=t.$implicit;i.MT6("",r.type," ",r.attribute,"")}}function bn(e,t){if(1&e&&(i.TgZ(0,"div",10),i.YNc(1,Vn,1,4,"div",11),i.qZA()),2&e){const r=t.$implicit;i.xp6(1),i.Q6J("ngForOf",r)}}const Dn=[{path:"",component:(()=>{var e;class t{constructor(n){this.randomTileGenerator=n,this.dungeon=[],this.generatorForm=new T({width:new w(30),height:new w(30),roomCount:new w(4)}),this.dungeonExample=[[{type:"room",attribute:"corner-tl"},{type:"room",attribute:"wall-t"},{type:"room",attribute:"corner-tr"}],[{type:"room",attribute:"wall-l"},{type:"room",attribute:""},{type:"room",attribute:"wall-r"}],[{type:"room",attribute:"corner-bl"},{type:"room",attribute:"wall-b"},{type:"room",attribute:"corner-br"}]]}ngOnInit(){this.generate()}generate(){const n=this.generatorForm.get("width")?.value,o=this.generatorForm.get("height")?.value,s=this.generatorForm.get("roomCount")?.value;n&&o&&s&&(this.dungeon=this.randomTileGenerator.generate(s,n,o))}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(vn))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-dungeon-display"]],decls:20,vars:3,consts:[[3,"bannerName"],[1,"mx-auto","max-w-7xl","py-6","sm:px-6","lg:px-8"],[1,"grid","grid-cols-4","px-24","py-5","bg-white","rounded-t-lg"],[1,"col-span-3","grid","grid-cols-3",3,"formGroup"],["type","number","formControlName","width",1,"border-solid","border-2","border-slate-500","rounded"],["type","number","formControlName","height",1,"border-solid","border-2","border-slate-500","rounded"],["type","number","formControlName","roomCount",1,"border-solid","border-2","border-slate-500","rounded"],[1,"bg-red-300","shadow-lg","rounded",3,"click"],[1,"p-5","overflow-hidden","bg-slate-200"],["class","flex flex-row justify-center",4,"ngFor","ngForOf"],[1,"flex","flex-row","justify-center"],[3,"class",4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(i._UZ(0,"app-banner",0),i.TgZ(1,"div",1)(2,"div",2)(3,"form",3)(4,"div")(5,"label"),i._uU(6,"Width: "),i.qZA(),i._UZ(7,"input",4),i.qZA(),i.TgZ(8,"div")(9,"label"),i._uU(10,"Height: "),i.qZA(),i._UZ(11,"input",5),i.qZA(),i.TgZ(12,"div")(13,"label"),i._uU(14,"Rooms: "),i.qZA(),i._UZ(15,"input",6),i.qZA()(),i.TgZ(16,"button",7),i.NdJ("click",function(){return o.generate()}),i._uU(17,"Generate Room"),i.qZA()(),i.TgZ(18,"div",8),i.YNc(19,bn,2,1,"div",9),i.qZA()()),2&n&&(i.Q6J("bannerName","Dungeon Generator"),i.xp6(3),i.Q6J("formGroup",o.generatorForm),i.xp6(16),i.Q6J("ngForOf",o.dungeon))},dependencies:[F.sg,Cn.S,Qt,S,nt,Tt,Pt,R,st],styles:[".empty[_ngcontent-%COMP%]{width:30px;height:30px;background-color:#d3d3d3;border:solid 1px gray}.room[_ngcontent-%COMP%]{border:dashed 1px gray;width:30px;height:30px;background-color:#fff}.room[_ngcontent-%COMP%]:hover{background-color:#f2f2f2}.closed-room[_ngcontent-%COMP%]{border:solid 3px black}.corner-tl[_ngcontent-%COMP%]{border-top:solid 3px black;border-left:solid 3px black}.corner-tr[_ngcontent-%COMP%]{border-top:solid 3px black;border-right:solid 3px black}.corner-bl[_ngcontent-%COMP%]{border-bottom:solid 3px black;border-left:solid 3px black}.corner-br[_ngcontent-%COMP%]{border-bottom:solid 3px black;border-right:solid 3px black}.deadend-l[_ngcontent-%COMP%]{border:solid 3px black;border-right:none}.deadend-r[_ngcontent-%COMP%]{border:solid 3px black;border-left:none}.deadend-t[_ngcontent-%COMP%]{border:solid 3px black;border-bottom:none}.deadend-b[_ngcontent-%COMP%]{border:solid 3px black;border-top:none}.hall-h[_ngcontent-%COMP%]{border-top:solid 3px black;border-bottom:solid 3px black}.hall-v[_ngcontent-%COMP%]{border-left:solid 3px black;border-right:solid 3px black}.wall-t[_ngcontent-%COMP%]{border-top:solid 3px black}.wall-r[_ngcontent-%COMP%]{border-right:solid 3px black}.wall-b[_ngcontent-%COMP%]{border-bottom:solid 3px black}.wall-l[_ngcontent-%COMP%]{border-left:solid 3px black}"]}),t})()}];let Mn=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[pe.Bz.forChild(Dn),pe.Bz]}),t})(),An=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[F.ez,Mn,yn.s,_n]}),t})()}}]);