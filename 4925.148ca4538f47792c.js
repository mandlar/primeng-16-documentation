"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4925],{22963:(_,m,a)=>{a.d(m,{N:()=>y});var p=a(14769);const v=["*"];let y=(()=>{var d;class r{}return(d=r).\u0275fac=function(u){return new(u||d)},d.\u0275cmp=p.Xpm({type:d,selectors:[["app-developmentsection"]],ngContentSelectors:v,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(u,g){1&u&&(p.F$t(),p.TgZ(0,"div",0),p._UZ(1,"i",1),p._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),p.qZA(),p.Hsn(3))},encapsulation:2}),r})()},34925:(_,m,a)=>{a.r(m),a.d(m,{OverlayDemoModule:()=>ee});var p=a(96814),v=a(61323),y=a(43820),d=a(93189),r=a(97673),e=a(14769);let u=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,r.a,y.U8,v.hJ,d.V,d.V]}),s})();var g=a(42129),f=a(95438),Z=a(49906),c=a(38454);const b=function(){return{breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"}};let T=(()=>{var t;class s{constructor(){this.overlayVisible=!1,this.code={basic:'\n<p-button (click)="toggle()" label="Show Overlay"></p-button>\n<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: \'640px\', direction: \'bottom\', contentStyleClass: \'h-20rem\' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">\n    Content\n</p-overlay>',html:'\n<div class="card flex justify-content-center">\n    <p-button (click)="toggle()" label="Show Overlay"></p-button>\n    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: \'640px\', direction: \'bottom\', contentStyleClass: \'h-20rem\' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">\n        Content\n    </p-overlay>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'overlay-basic-demo',\n    templateUrl: './overlay-basic-demo.html' \n})\nexport class OverlayBasicDemo {\n    overlayVisible: boolean = false;\n\n    toggle() {\n        this.overlayVisible = !this.overlayVisible;\n    }\n}"}}toggle(){this.overlayVisible=!this.overlayVisible}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:9,vars:6,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-4 surface-overlay shadow-2 border-round",3,"visible","responsive","visibleChange"],["selector","overlay-basic-demo",3,"code"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Overlay is a container to display content in an overlay window. All the options mentioned above can be used as props for this component."),e.qZA()(),e.TgZ(4,"div",2)(5,"p-button",3),e.NdJ("click",function(){return i.toggle()}),e.qZA(),e.TgZ(6,"p-overlay",4),e.NdJ("visibleChange",function(h){return i.overlayVisible=h}),e._uU(7," Content "),e.qZA()(),e._UZ(8,"app-code",5),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(5),e.Q6J("visible",i.overlayVisible)("responsive",e.DdM(5,b)),e.xp6(2),e.Q6J("code",i.code))},dependencies:[r.h,f.aV,Z.zx,c.c],encapsulation:2}),s})();const O=["docsectiontext"];let A=(()=>{var t;class s{constructor(){this.code={typescript:"\nimport { PrimeNGConfig, OverlayOptions } from 'primeng/api';\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    appendTo: 'body'\n};"}}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["appendto-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(O,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:6,vars:5,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""],[3,"code","hideToggleCode"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"Overlay can be mounted into its location, body or DOM element instance using this option."),e.qZA()(),e._UZ(5,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3),e.xp6(4),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),s})();const U=["docsectiontext"];let D=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["auto-zindex-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(U,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:8,vars:3,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"The "),e.TgZ(5,"i"),e._uU(6,"autoZIndex"),e.qZA(),e._uU(7," determines whether to automatically manage layering. Its default value is 'false'."),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3))},dependencies:[c.c],encapsulation:2}),s})();const x=["docsectiontext"];let C=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["base-zindex-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(x,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:8,vars:3,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"The "),e.TgZ(5,"i"),e._uU(6,"baseZIndex"),e.qZA(),e._uU(7," is base zIndex value to use in layering. Its default value is 0."),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3))},dependencies:[c.c],encapsulation:2}),s})();const q=["docsectiontext"];let w=(()=>{var t;class s{constructor(){this.code={typescript:"\nimport { PrimeNGConfig, OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent } from 'primeng/api';\nimport { AnimationEvent } from '@angular/animations';\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    onBeforeShow: (event?: OverlayOnBeforeShowEvent) => {};    // Callback to invoke before the overlay is shown.\n    onShow: (event?: OverlayOnShowEvent) => {};                // Callback to invoke when the overlay is shown.\n    onBeforeHide: (event?: OverlayOnBeforeHideEvent) => {};    // Callback to invoke before the overlay is hidden.\n    onHide: (event?: OverlayOnHideEvent) => {};                // Callback to invoke when the overlay is hidden.\n    onAnimationStart: (event?: AnimationEvent) => {};          // Callback to invoke when the animation is started.\n    onAnimationDone: (event?: AnimationEvent) => {};           // Callback to invoke when the animation is done.\n};"}}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(q,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:4,vars:5,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""],[3,"code","hideToggleCode"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1,2)(3,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3),e.xp6(2),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),s})();const S=["docsectiontext"];let Q=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["hide-on-escape-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(S,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:11,vars:3,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"The "),e.TgZ(5,"i"),e._uU(6,"hideOnEscape"),e.qZA(),e._uU(7," determines to hide the overlay when escape key pressed. Accepts boolean, default value is "),e.TgZ(8,"i"),e._uU(9,"false"),e.qZA(),e._uU(10,"."),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3))},dependencies:[c.c],encapsulation:2}),s})(),k=(()=>{var t;class s{constructor(){this.code={typescript:"import { OverlayModule } from 'primeng/overlay';"}}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[1,"py-3"],[3,"title","id"],[3,"code","hideToggleCode"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1)(2,"app-code",2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(1),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),s})();const M=["docsectiontext"];let I=(()=>{var t;class s{constructor(){this.code={typescript:"\nimport { PrimeNGConfig, OverlayOptions } from 'primeng/api';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig) {}\n\n    ngOnInit() {\n        this.primengConfig.overlayOptions: OverlayOptions = {\n            mode: 'modal'\n        };\n    } \n}"},this.code2={basic:"\nimport { PrimeNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';\n\nconst responsiveOptions: ResponsiveOverlayOptions = {\n    // style?: any;                                     // Style of component in given breakpoint or media query\n    // styleClass?: string;                             // Style class of component in given breakpoint or media query\n    // contentStyle?: any;                              // Style of content in given breakpoint or media query\n    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query\n    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.\n    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.\n    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.\n    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.\n}\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    responsive: responsiveOptions\n};"}}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["mode-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(M,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:12,vars:5,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""],[3,"code","hideToggleCode"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4," It has two valid values; "),e.TgZ(5,"i"),e._uU(6,"overlay"),e.qZA(),e._uU(7," and "),e.TgZ(8,"i"),e._uU(9,"modal"),e.qZA(),e._uU(10,". In overlay mode, a container element is opened like overlaypanel or dropdown's panel. In modal mode, the container element behaves like popup. This behaviour is similar to a dialog component. "),e.qZA()(),e._UZ(11,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3),e.xp6(10),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),s})();const E=["docsectiontext"];let J=(()=>{var t;class s{constructor(){this.code={basic:"\nimport { PrimeNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';\n\nconst responsiveOptions: ResponsiveOverlayOptions = {\n    // style?: any;                                     // Style of component in given breakpoint or media query\n    // styleClass?: string;                             // Style class of component in given breakpoint or media query\n    // contentStyle?: any;                              // Style of content in given breakpoint or media query\n    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query\n    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.\n    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.\n    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.\n    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.\n}\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    responsive: responsiveOptions\n};"}}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["responsive-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(E,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:45,vars:5,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""],[3,"code","hideToggleCode"],[1,"doc-section-description"],[1,"card"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"It is the option used to determine in which mode it should appear according to the given "),e.TgZ(5,"i"),e._uU(6,"media"),e.qZA(),e._uU(7," or "),e.TgZ(8,"i"),e._uU(9,"breakpoint"),e.qZA(),e._uU(10,"."),e.qZA()(),e._UZ(11,"app-code",3),e.TgZ(12,"p",4),e._uU(13,"Valid values of the "),e.TgZ(14,"i"),e._uU(15,"direction"),e.qZA(),e._uU(16," property would be;"),e.qZA(),e.TgZ(17,"div",5)(18,"ul")(19,"li"),e._uU(20,"center (default)"),e.qZA(),e.TgZ(21,"li"),e._uU(22,"top"),e.qZA(),e.TgZ(23,"li"),e._uU(24,"top-start"),e.qZA(),e.TgZ(25,"li"),e._uU(26,"top-end"),e.qZA(),e.TgZ(27,"li"),e._uU(28,"bottom"),e.qZA(),e.TgZ(29,"li"),e._uU(30,"bottom-start"),e.qZA(),e.TgZ(31,"li"),e._uU(32,"bottom-end"),e.qZA(),e.TgZ(33,"li"),e._uU(34,"left"),e.qZA(),e.TgZ(35,"li"),e._uU(36,"left-start"),e.qZA(),e.TgZ(37,"li"),e._uU(38,"left-end"),e.qZA(),e.TgZ(39,"li"),e._uU(40,"right"),e.qZA(),e.TgZ(41,"li"),e._uU(42,"right-start"),e.qZA(),e.TgZ(43,"li"),e._uU(44,"right-end"),e.qZA()()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3),e.xp6(10),e.Q6J("code",i.code)("hideToggleCode",!0))},dependencies:[r.h,c.c],encapsulation:2}),s})();const G=["docsectiontext"];let B=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(G,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:17,vars:3,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"The "),e.TgZ(5,"i"),e._uU(6,"style"),e.qZA(),e._uU(7," and "),e.TgZ(8,"i"),e._uU(9,"styleClass"),e.qZA(),e._uU(10," are used to define styles that will be added to all overlay components. In addition, it can be used in "),e.TgZ(11,"i"),e._uU(12,"contentStyle"),e.qZA(),e._uU(13," and "),e.TgZ(14,"i"),e._uU(15,"contentStyleClass"),e.qZA(),e._uU(16," classes."),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3))},dependencies:[c.c],encapsulation:2}),s})();const H=["docsectiontext"];let R=(()=>{var t;class s{constructor(){this.code={basic:"\nimport { PrimeNGConfig, OverlayOptions } from 'primeng/api';\n\nthis.primengConfig.overlayOptions: OverlayOptions = {\n    appendTo: 'body'\n};"}}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["target-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(H,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:26,vars:3,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""],[1,"card"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"The "),e.TgZ(5,"i"),e._uU(6,"target"),e.qZA(),e._uU(7," is used to detect the element that will be used to position the overlay. Valid values would be;"),e.qZA()(),e.TgZ(8,"div",3)(9,"ul")(10,"li"),e._uU(11,"@prev (default)"),e.qZA(),e.TgZ(12,"li"),e._uU(13,"@next"),e.qZA(),e.TgZ(14,"li"),e._uU(15,"@parent"),e.qZA(),e.TgZ(16,"li"),e._uU(17,"@grandparent"),e.qZA(),e.TgZ(18,"li"),e._uU(19,"Use "),e.TgZ(20,"em"),e._uU(21,"CSS selector"),e.qZA()(),e.TgZ(22,"li"),e._uU(23,"Use "),e.TgZ(24,"em"),e._uU(25,"() => HTMLElement"),e.qZA()()()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3))},dependencies:[c.c],encapsulation:2}),s})();var V=a(38712);function F(t,s){1&t&&e._uU(0),2&t&&e.hij(" Content - ",s.$implicit.mode," ")}const z=function(){return{breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"}};let N=(()=>{var t;class s{constructor(){this.overlayVisible=!1,this.code={basic:'\n<p-button (click)="toggle()" label="Show Overlay"></p-button>\n<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: \'640px\', direction: \'bottom\', contentStyleClass: \'h-20rem\' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">\n    <ng-template pTemplate="content" let-option>\n        Content - {{option.mode}}\n    </ng-template>\n</p-overlay>',html:'\n<div class="card flex justify-content-center">\n    <p-button (click)="toggle()" label="Show Overlay"></p-button>\n    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: \'640px\', direction: \'bottom\', contentStyleClass: \'h-20rem\' }" contentStyleClass="p-4 surface-overlay shadow-2 border-round">\n        <ng-template pTemplate="content" let-option>\n            Content - {{option.mode}}\n        </ng-template>\n    </p-overlay>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'overlay-template-demo',\n    templateUrl: './overlay-template-demo.html' \n})\nexport class OverlayTemplateDemo {\n    overlayVisible: boolean = false;\n\n    toggle() {\n        this.overlayVisible = !this.overlayVisible;\n    }\n}"}}toggle(){this.overlayVisible=!this.overlayVisible}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["overlay-template-demo"]],inputs:{id:"id",title:"title"},decls:12,vars:6,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-4 surface-overlay shadow-2 border-round",3,"visible","responsive","visibleChange"],["pTemplate","content"],["selector","overlay-template-demo",3,"code"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Content can be customized with the "),e.TgZ(4,"i"),e._uU(5,"content"),e.qZA(),e._uU(6," template."),e.qZA()(),e.TgZ(7,"div",2)(8,"p-button",3),e.NdJ("click",function(){return i.toggle()}),e.qZA(),e.TgZ(9,"p-overlay",4),e.NdJ("visibleChange",function(h){return i.overlayVisible=h}),e.YNc(10,F,1,1,"ng-template",5),e.qZA()(),e._UZ(11,"app-code",6),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id),e.xp6(8),e.Q6J("visible",i.overlayVisible)("responsive",e.DdM(5,z)),e.xp6(2),e.Q6J("code",i.code))},dependencies:[r.h,f.aV,V.jx,Z.zx,c.c],encapsulation:2}),s})();const X=["docsectiontext"];let P=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["transition-options-doc"]],viewQuery:function(o,i){if(1&o&&e.Gf(X,7),2&o){let l;e.iGM(l=e.CRH())&&(i.docsectiontext=l.first)}},inputs:{id:"id",title:"title"},decls:11,vars:3,consts:[[1,"py-3"],[3,"title","id","level"],["docsectiontext",""]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1,2)(3,"p"),e._uU(4,"Transition options of the show or hide animation. The default value of "),e.TgZ(5,"i"),e._uU(6,"showTransitionOptions"),e.qZA(),e._uU(7," is '.12s cubic-bezier(0, 0, 0.2, 1)' and the default value of "),e.TgZ(8,"i"),e._uU(9,"hideTransitionOptions"),e.qZA(),e._uU(10," is '.1s linear'."),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("title",i.title)("id",i.id)("level",3))},dependencies:[c.c],encapsulation:2}),s})();var j=a(22963);let K=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:90,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,i){1&o&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," Overlay component uses "),e.TgZ(7,"i"),e._uU(8,"dialog"),e.qZA(),e._uU(9," role and since any attribute is passed to the root element you may define attributes like "),e.TgZ(10,"i"),e._uU(11,"aria-label"),e.qZA(),e._uU(12," or "),e.TgZ(13,"i"),e._uU(14,"aria-labelledby"),e.qZA(),e._uU(15," to describe the popup contents. In addition "),e.TgZ(16,"i"),e._uU(17,"aria-modal"),e.qZA(),e._uU(18," is added since focus is kept within the popup. "),e.qZA(),e.TgZ(19,"p"),e._uU(20," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e.TgZ(21,"i"),e._uU(22,"tabIndex"),e.qZA(),e._uU(23," would be necessary. Overlay adds "),e.TgZ(24,"i"),e._uU(25,"aria-expanded"),e.qZA(),e._uU(26," state attribute and "),e.TgZ(27,"i"),e._uU(28,"aria-controls"),e.qZA(),e._uU(29," to the trigger so that the relation between the trigger and the popup is defined. "),e.qZA(),e.TgZ(30,"h3"),e._uU(31,"Overlay Keyboard Support"),e.qZA(),e.TgZ(32,"p"),e._uU(33,"When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),e.TgZ(34,"i"),e._uU(35,"autofocus"),e.qZA(),e._uU(36," to an element within the popup."),e.qZA(),e.TgZ(37,"div",1)(38,"table",2)(39,"thead")(40,"tr")(41,"th"),e._uU(42,"Key"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"Function"),e.qZA()()(),e.TgZ(45,"tbody")(46,"tr")(47,"td")(48,"i"),e._uU(49,"tab"),e.qZA()(),e.TgZ(50,"td"),e._uU(51,"Moves focus to the next the focusable element within the popup."),e.qZA()(),e.TgZ(52,"tr")(53,"td")(54,"i"),e._uU(55,"shift"),e.qZA(),e._uU(56," + "),e.TgZ(57,"i"),e._uU(58,"tab"),e.qZA()(),e.TgZ(59,"td"),e._uU(60,"Moves focus to the previous the focusable element within the popup."),e.qZA()(),e.TgZ(61,"tr")(62,"td")(63,"i"),e._uU(64,"escape"),e.qZA()(),e.TgZ(65,"td"),e._uU(66,"Closes the popup and moves focus to the trigger."),e.qZA()()()()(),e.TgZ(67,"h3"),e._uU(68,"Close Button Keyboard Support"),e.qZA(),e.TgZ(69,"div",1)(70,"table",2)(71,"thead")(72,"tr")(73,"th"),e._uU(74,"Key"),e.qZA(),e.TgZ(75,"th"),e._uU(76,"Function"),e.qZA()()(),e.TgZ(77,"tbody")(78,"tr")(79,"td")(80,"i"),e._uU(81,"enter"),e.qZA()(),e.TgZ(82,"td"),e._uU(83,"Closes the popup and moves focus to the trigger."),e.qZA()(),e.TgZ(84,"tr")(85,"td")(86,"i"),e._uU(87,"space"),e.qZA()(),e.TgZ(88,"td"),e._uU(89,"Closes the popup and moves focus to the trigger."),e.qZA()()()()()()()()),2&o&&(e.xp6(2),e.Q6J("title",i.title)("id",i.id))},dependencies:[c.c,j.N],encapsulation:2}),s})();var W=a(89867);const L=function(){return["Overlay","OverlayOptions"]};let $=(()=>{var t;class s{constructor(){this.docs=[{id:"import",label:"Import",component:k},{id:"basic",label:"Basic",component:T},{id:"template",label:"Template",component:N},{id:"options",label:"Options",children:[{id:"mode",label:"Mode",component:I},{id:"responsive",label:"Responsive",component:J},{id:"append-to",label:"AppendTo",component:A},{id:"target",label:"Target",component:R},{id:"style",label:"Style",component:B},{id:"base-z-index",label:"BaseZIndex",component:C},{id:"auto-z-index",label:"AutoZIndex",component:D},{id:"hide-on-escape",label:"HideOnEscape",component:Q},{id:"transition-options",label:"ShowTransitionOptions and HideTransitionOptions",component:P},{id:"events",label:"Events",component:w}]},{id:"accessibility",label:"Accessibility",component:K}]}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Overlay API - PrimeNG","header","Overlay API","description","This API allows overlay components to be controlled from the PrimeNGConfig. In this way, all overlay components in the application can have the same behavior.",3,"docs","apiDocs"]],template:function(o,i){1&o&&e._UZ(0,"app-doc",0),2&o&&e.Q6J("docs",i.docs)("apiDocs",e.DdM(2,L))},dependencies:[W.x],encapsulation:2}),s})(),Y=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:$}]),g.Bz]}),s})(),ee=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,Y,u]}),s})()}}]);