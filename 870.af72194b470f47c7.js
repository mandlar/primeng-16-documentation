"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[870],{22963:(y,g,s)=>{s.d(g,{N:()=>b});var u=s(14769);const a=["*"];let b=(()=>{var d;class c{}return(d=c).\u0275fac=function(f){return new(f||d)},d.\u0275cmp=u.Xpm({type:d,selectors:[["app-developmentsection"]],ngContentSelectors:a,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(f,h){1&f&&(u.F$t(),u.TgZ(0,"div",0),u._UZ(1,"i",1),u._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),u.qZA(),u.Hsn(3))},encapsulation:2}),c})()},90870:(y,g,s)=>{s.r(g),s.d(g,{SelectButtonDemoModule:()=>L});var u=s(96814),a=s(60095),b=s(39812),d=s(93189),c=s(97673),e=s(14769);let f=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,c.a,d.V,b.Qy,a.u5,a.UX,d.V]}),l})();var h=s(42129),r=s(38454),m=s(3493);let Z=(()=>{var t;class l{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.code={basic:'\n<form [formGroup]="formGroup">\n    <p-selectButton [options]="stateOptions" formControlName="value" optionLabel="label" optionValue="value"></p-selectButton>\n</form>',html:'\n<div class="card flex justify-content-center">\n    <form [formGroup]="formGroup">\n        <p-selectButton [options]="stateOptions" formControlName="value" optionLabel="label" optionValue="value"></p-selectButton>\n    </form>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'select-button-reactive-forms-demo',\n    templateUrl: './select-button-reactive-forms-demo.html'\n})\nexport class SelectButtonReactiveFormsDemo implements OnInit {\n    formGroup!: FormGroup;\n\n    stateOptions: any[] = [\n        { label: 'Off', value: 'off' },\n        { label: 'On', value: 'on' }\n    ];\n\n    ngOnInit() {\n        this.formGroup = new FormGroup({\n            value: new FormControl('on')\n        });\n    }\n}"}}ngOnInit(){this.formGroup=new a.cw({value:new a.NI("on")})}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["reactive-forms-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:5,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value","optionLabel","label","optionValue","value",3,"options"],["selector","select-button-reactive-forms-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"SelectButton can also be used with reactive forms. In this case, the "),e.TgZ(4,"i"),e._uU(5,"formControlName"),e.qZA(),e._uU(6," property is used to bind the component to a form control."),e.qZA()(),e.TgZ(7,"div",2)(8,"form",3),e._UZ(9,"p-selectButton",4),e.qZA()(),e._UZ(10,"app-code",5),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("formGroup",o.formGroup),e.xp6(1),e.Q6J("options",o.stateOptions),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,r.c,m.UN,a._Y,a.JJ,a.JL,a.sg,a.u],encapsulation:2}),l})();var _=s(22963);let B=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:42,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){1&n&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," The container element that wraps the buttons has a "),e.TgZ(7,"i"),e._uU(8,"group"),e.qZA(),e._uU(9," role whereas each button element uses "),e.TgZ(10,"i"),e._uU(11,"button"),e.qZA(),e._uU(12," role and "),e.TgZ(13,"i"),e._uU(14,"aria-pressed"),e.qZA(),e._uU(15," is updated depending on selection state. Value to describe an option is automatically set using the "),e.TgZ(16,"i"),e._uU(17,"aria-label"),e.qZA(),e._uU(18," property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only. "),e.qZA()(),e.TgZ(19,"h3"),e._uU(20,"Keyboard Support"),e.qZA(),e.TgZ(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),e._uU(26,"Key"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Function"),e.qZA()()(),e.TgZ(29,"tbody")(30,"tr")(31,"td")(32,"i"),e._uU(33,"tab"),e.qZA()(),e.TgZ(34,"td"),e._uU(35,"Moves focus to the buttons."),e.qZA()(),e.TgZ(36,"tr")(37,"td")(38,"i"),e._uU(39,"space"),e.qZA()(),e.TgZ(40,"td"),e._uU(41,"Toggles the checked state of a button."),e.qZA()()()()()()()),2&n&&(e.xp6(2),e.Q6J("title",o.title)("id",o.id))},dependencies:[r.c,_.N],encapsulation:2}),l})(),D=(()=>{var t;class l{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.value="off",this.code={basic:'\n<p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value"></p-selectButton>',html:'\n<div class="card flex justify-content-center">\n    <p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value"></p-selectButton>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'select-button-basic-demo',\n    templateUrl: './select-button-basic-demo.html'\n})\nexport class SelectButtonBasicDemo {\n    stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];\n\n    value: string = 'off';\n}"}}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:7,vars:5,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["optionLabel","label","optionValue","value",3,"options","ngModel","ngModelChange"],["selector","select-button-basic-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"SelectButton requires a value to bind and a collection of options."),e.qZA()(),e.TgZ(4,"div",2)(5,"p-selectButton",3),e.NdJ("ngModelChange",function(p){return o.value=p}),e.qZA()(),e._UZ(6,"app-code",4),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(4),e.Q6J("options",o.stateOptions)("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,r.c,m.UN,a.JJ,a.On],encapsulation:2}),l})(),O=(()=>{var t;class l{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.stateOptions2=[{label:"Option 1",value:"off"},{label:"Option 2",value:"on",constant:!0}],this.value="off",this.code={basic:'\n<p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" [disabled]="true"></p-selectButton>\n<p-selectButton [options]="stateOptions2" [(ngModel)]="value" optionLabel="label" optionValue="value" optionDisabled="constant"></p-selectButton>',html:'\n<div class="card flex justify-content-center">\n    <p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" [disabled]="true"></p-selectButton>\n    <p-selectButton [options]="stateOptions2" [(ngModel)]="value" optionLabel="label" optionValue="value" optionDisabled="constant"></p-selectButton>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'select-button-disabled-demo',\n    templateUrl: './select-button-disabled-demo.html'\n})\nexport class SelectButtonDisabledDemo {\n    stateOptions: any[] = [\n        { label: 'Off', value: 'off' },\n        { label: 'On', value: 'on' }\n    ];\n\n    stateOptions2: any[] = [\n        { label: 'Option 1', value: 'off' },\n        { label: 'Option 2', value: 'on', constant:true }\n    ];\n\n    value: string = 'off';\n}"}}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["disabled-doc"]],inputs:{id:"id",title:"title"},decls:14,vars:8,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["optionLabel","label","optionValue","value",3,"options","ngModel","disabled","ngModelChange"],["optionLabel","label","optionValue","value","optionDisabled","constant",3,"options","ngModel","ngModelChange"],["selector","select-button-disabled-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"When "),e.TgZ(4,"i"),e._uU(5,"disabled"),e.qZA(),e._uU(6," is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the "),e.TgZ(7,"i"),e._uU(8,"optionDisabled"),e.qZA(),e._uU(9," property."),e.qZA()(),e.TgZ(10,"div",2)(11,"p-selectButton",3),e.NdJ("ngModelChange",function(p){return o.value=p}),e.qZA(),e.TgZ(12,"p-selectButton",4),e.NdJ("ngModelChange",function(p){return o.value=p}),e.qZA()(),e._UZ(13,"app-code",5),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("options",o.stateOptions)("ngModel",o.value)("disabled",!0),e.xp6(1),e.Q6J("options",o.stateOptions2)("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,r.c,m.UN,a.JJ,a.On],encapsulation:2}),l})(),T=(()=>{var t;class l{constructor(){this.code={typescript:"import { SelectButtonModule } from 'primeng/selectbutton';"}}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[1,"py-3"],[3,"title","id"],[3,"code","hideToggleCode"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1)(2,"app-code",2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(1),e.Q6J("code",o.code)("hideToggleCode",!0))},dependencies:[c.h,r.c],encapsulation:2}),l})(),M=(()=>{var t;class l{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.value="off",this.code={basic:'\n<p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" class="ng-invalid ng-dirty"></p-selectButton>',html:'\n<div class="card flex justify-content-center">\n    <p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" class="ng-invalid ng-dirty"></p-selectButton>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'select-button-invalid-demo',\n    templateUrl: './select-button-invalid-demo.html'\n})\nexport class SelectButtonInvalidDemo {\n    stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];\n\n    value: string = 'off';\n}"}}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["invalid-doc"]],inputs:{id:"id",title:"title"},decls:13,vars:5,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["optionLabel","label","optionValue","value",1,"ng-invalid","ng-dirty",3,"options","ngModel","ngModelChange"],["selector","select-button-invalid-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Invalid state style is added using the "),e.TgZ(4,"i"),e._uU(5,"ng-invalid"),e.qZA(),e._uU(6," and "),e.TgZ(7,"i"),e._uU(8,"ng-dirty"),e.qZA(),e._uU(9," class to indicate a failed validation."),e.qZA()(),e.TgZ(10,"div",2)(11,"p-selectButton",3),e.NdJ("ngModelChange",function(p){return o.value=p}),e.qZA()(),e._UZ(12,"app-code",4),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("options",o.stateOptions)("ngModel",o.value),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,r.c,m.UN,a.JJ,a.On],encapsulation:2}),l})(),U=(()=>{var t;class l{constructor(){this.paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],this.code={basic:'\n<p-selectButton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value"></p-selectButton>',html:'\n<div class="card flex justify-content-center">\n    <p-selectButton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value"></p-selectButton>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'select-button-multiple-demo',\n    templateUrl: './select-button-multiple-demo.html'\n})\nexport class SelectButtonMultipleDemo {\n    value!: number;\n    \n    paymentOptions: any[] = [\n        { name: 'Option 1', value: 1 },\n        { name: 'Option 2', value: 2 },\n        { name: 'Option 3', value: 3 }\n    ];\n\n}"}}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["multiple-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:6,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["optionLabel","name","optionValue","value",3,"options","ngModel","multiple","ngModelChange"],["selector","select-button-multiple-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"SelectButton allows selecting only one item by default and setting "),e.TgZ(4,"i"),e._uU(5,"multiple"),e.qZA(),e._uU(6," option enables choosing more than one item. In multiple case, model property should be an array."),e.qZA()(),e.TgZ(7,"div",2)(8,"p-selectButton",3),e.NdJ("ngModelChange",function(p){return o.value=p}),e.qZA()(),e._UZ(9,"app-code",4),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("options",o.paymentOptions)("ngModel",o.value)("multiple",!0),e.xp6(1),e.Q6J("code",o.code))},dependencies:[c.h,r.c,m.UN,a.JJ,a.On],encapsulation:2}),l})();var A=s(38712);function C(t,l){1&t&&e._UZ(0,"i"),2&t&&e.Tol(l.$implicit.icon)}let J=(()=>{var t;class l{constructor(){this.justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}],this.code={basic:'\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">\n    <ng-template let-item pTemplate>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>',html:'\n<div class="card flex justify-content-center">\n    <p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">\n        <ng-template let-item pTemplate>\n            <i [class]="item.icon"></i>\n        </ng-template>\n    </p-selectButton>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'select-button-template-demo',\n    templateUrl: './select-button-template-demo.html'\n})\nexport class SelectButtonTemplateDemo {\n    value: any;\n\n    justifyOptions: any[] = [\n        { icon: 'pi pi-align-left', justify: 'Left' },\n        { icon: 'pi pi-align-right', justify: 'Right' },\n        { icon: 'pi pi-align-center', justify: 'Center' },\n        { icon: 'pi pi-align-justify', justify: 'Justify' }\n    ];\n\n}"}}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["template-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:5,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["optionLabel","icon",3,"options","ngModel","ngModelChange"],["pTemplate",""],["selector","select-button-template-demo",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"For custom content support define a ng-template with "),e.TgZ(4,"i"),e._uU(5,"pTemplate"),e.qZA(),e._uU(6," where the local ng-template variable refers to an option in the options collection."),e.qZA()(),e.TgZ(7,"div",2)(8,"p-selectButton",3),e.NdJ("ngModelChange",function(p){return o.value=p}),e.YNc(9,C,1,2,"ng-template",4),e.qZA()(),e._UZ(10,"app-code",5),e.qZA()),2&n&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(7),e.Q6J("options",o.justifyOptions)("ngModel",o.value),e.xp6(2),e.Q6J("code",o.code))},dependencies:[c.h,r.c,m.UN,A.jx,a.JJ,a.On],encapsulation:2}),l})();var S=s(89867);const j=function(){return["SelectButton"]};let q=(()=>{var t;class l{constructor(){this.docs=[{id:"import",label:"Import",component:T},{id:"basic",label:"Basic",component:D},{id:"reactive-forms",label:"Reactive Forms",component:Z},{id:"multiple",label:"Multiple",component:U},{id:"template",label:"Template",component:J},{id:"invalid",label:"Invalid",component:M},{id:"disabled",label:"Disabled",component:O},{id:"accessibility",label:"Accessibility",component:B}]}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular SelectButton Component","header","SelectButton","description","SelectButton is used to choose single or multiple items from a list using buttons.",3,"docs","apiDocs"]],template:function(n,o){1&n&&e._UZ(0,"app-doc",0),2&n&&e.Q6J("docs",o.docs)("apiDocs",e.DdM(2,j))},dependencies:[S.x],encapsulation:2}),l})(),F=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.Bz.forChild([{path:"",component:q}]),h.Bz]}),l})(),L=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,F,f]}),l})()}}]);