"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6528],{96528:(S,r,c)=>{c.r(r),c.d(r,{BadgeDemoModule:()=>Q});var u=c(96814),p=c(42129),g=c(93189),d=c(97673),m=c(3208),b=c(61323),e=c(14769);let v=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,p.Bz,d.a,g.V,m.TX,b.hJ,g.V]}),a})();var n=c(38454);let y=(()=>{var t;class a{constructor(){this.code={typescript:"import { BadgeModule } from 'primeng/badge';"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[1,"py-3"],[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0),e._UZ(1,"app-docsectiontext",1)(2,"app-code",2),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(1),e.Q6J("code",s.code)("hideToggleCode",!0))},dependencies:[d.h,n.c],encapsulation:2}),a})();var l=c(22481);let Z=(()=>{var t;class a{constructor(){this.code={basic:'\n<p-badge value="4" size="large" severity="warning"></p-badge>',html:'\n<div class="card flex justify-content-center">\n    <p-badge value="2"></p-badge>\n    <p-badge value="4" size="large" severity="warning"></p-badge>\n    <p-badge value="6" size="xlarge" severity="success"></p-badge>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'badge-size-demo',\n    templateUrl: './badge-size-demo.html'\n})\nexport class BadgeSizeDemo {}"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["badge-size-demo"]],inputs:{id:"id",title:"title"},decls:18,vars:3,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["value","2"],["value","4","size","large","severity","warning"],["value","6","size","xlarge","severity","success"],["selector","badge-size-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Badge sizes are adjusted with the "),e.TgZ(4,"i"),e._uU(5,"size"),e.qZA(),e._uU(6," property that accepts "),e.TgZ(7,"i"),e._uU(8,"large"),e.qZA(),e._uU(9," and "),e.TgZ(10,"i"),e._uU(11,"xlarge"),e.qZA(),e._uU(12," as the possible alternatives to the default size. Currently sizes only apply to component mode."),e.qZA()(),e.TgZ(13,"div",2),e._UZ(14,"p-badge",3)(15,"p-badge",4)(16,"p-badge",5),e.qZA(),e._UZ(17,"app-code",6),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(16),e.Q6J("code",s.code))},dependencies:[d.h,n.c,l.Ct],encapsulation:2}),a})(),f=(()=>{var t;class a{constructor(){this.code={basic:'\n<p-badge [value]="2"></p-badge>',html:'\n<div class="card flex justify-content-center">\n    <p-badge [value]="2"></p-badge>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'badge-basic-demo',\n    templateUrl: './badge-basic-demo.html'\n})\nexport class BadgeBasicDemo {}"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["badge-basic-demo"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"value"],["selector","badge-basic-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Content of the badge is specified using the "),e.TgZ(4,"i"),e._uU(5,"value"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"p-badge",3),e.qZA(),e._UZ(9,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(7),e.Q6J("value",2),e.xp6(1),e.Q6J("code",s.code))},dependencies:[d.h,n.c,l.Ct],encapsulation:2}),a})();var U=c(49906);let h=(()=>{var t;class a{constructor(){this.code={basic:'\n<p-button label="Emails" badge="8" styleClass="mr-2"></p-button>',html:'\n<div class="card flex justify-content-center">\n    <p-button label="Emails" badge="8" styleClass="mr-2"></p-button>\n    <p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'badge-button-demo',\n    templateUrl: './badge-button-demo.html'\n})\nexport class BadgeButtonDemo {}"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["badge-button-demo"]],inputs:{id:"id",title:"title"},decls:8,vars:3,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["label","Emails","badge","8","styleClass","mr-2"],["label","Messages","icon","pi pi-users","styleClass","p-button-warning","badge","8","badgeClass","p-badge-danger"],["selector","badge-button-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Buttons have built-in support for badges to display a badge inline."),e.qZA()(),e.TgZ(4,"div",2),e._UZ(5,"p-button",3)(6,"p-button",4),e.qZA(),e._UZ(7,"app-code",5),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(6),e.Q6J("code",s.code))},dependencies:[d.h,n.c,U.zx],encapsulation:2}),a})(),D=(()=>{var t;class a{constructor(){this.code={basic:'\n<i class="pi pi-bell text-3xl" pBadge value="2"></i>',html:'\n<div class="card flex justify-content-center">\n    <i class="pi pi-bell text-3xl" pBadge value="2"></i>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'badge-directive-demo',\n    templateUrl: './badge-directive-demo.html'\n})\nexport class BadgeDirectiveDemo {}"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["badge-directive-demo"]],inputs:{id:"id",title:"title"},decls:10,vars:3,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["pBadge","","value","2",1,"pi","pi-bell","text-3xl"],["selector","badge-directive-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Content of the badge is specified using the "),e.TgZ(4,"i"),e._uU(5,"value"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"i",3),e.qZA(),e._UZ(9,"app-code",4),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(8),e.Q6J("code",s.code))},dependencies:[d.h,n.c,l.lM],encapsulation:2}),a})(),A=(()=>{var t;class a{constructor(){this.code={basic:'\n<i class="pi pi-bell mr-4 p-text-secondary" pBadge style="font-size: 2rem" value="2"></i>',html:'\n<div class="card flex justify-content-center">\n    <i class="pi pi-bell mr-4 p-text-secondary" pBadge style="font-size: 2rem" value="2"></i>\n    <i class="pi pi-calendar mr-4 p-text-secondary" pBadge style="font-size: 2rem" [value]="\'10+\'" severity="danger"></i>\n    <i class="pi pi-envelope p-text-secondary" pBadge style="font-size: 2rem" severity="danger"></i>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'badge-position-demo',\n    templateUrl: './badge-position-demo.html'\n})\nexport class BadgePositionDemo {}"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["badge-position-demo"]],inputs:{id:"id",title:"title"},decls:12,vars:4,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center"],["pBadge","","value","2",1,"pi","pi-bell","mr-4","p-text-secondary",2,"font-size","2rem"],["pBadge","","severity","danger",1,"pi","pi-calendar","mr-4","p-text-secondary",2,"font-size","2rem",3,"value"],["pBadge","","severity","danger",1,"pi","pi-envelope","p-text-secondary",2,"font-size","2rem"],["selector","badge-position-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"A Badge can be positioned at the top right corner of an element by adding "),e.TgZ(4,"i"),e._uU(5,"p-overlay-badge"),e.qZA(),e._uU(6," style class to the element and embedding the badge inside."),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"i",3)(9,"i",4)(10,"i",5),e.qZA(),e._UZ(11,"app-code",6),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(8),e.Q6J("value","10+"),e.xp6(2),e.Q6J("code",s.code))},dependencies:[d.h,n.c,l.lM],encapsulation:2}),a})(),T=(()=>{var t;class a{constructor(){this.code={basic:'\n<p-badge [value]="2" severity="success"></p-badge>',html:'\n<div class="card flex justify-content-center gap-2">\n    <p-badge [value]="2" severity="success"></p-badge>\n    <p-badge [value]="9" severity="info"></p-badge>\n    <p-badge [value]="3" severity="warning"></p-badge>\n    <p-badge [value]="12" severity="danger"></p-badge>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'badge-severity-demo',\n    templateUrl: './badge-severity-demo.html'\n})\nexport class BadgeSeverityDemo {}"}}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["badge-severity-demo"]],inputs:{id:"id",title:"title"},decls:21,vars:7,consts:[[1,"py-3"],[3,"title","id"],[1,"card","flex","justify-content-center","gap-2"],["severity","success",3,"value"],["severity","info",3,"value"],["severity","warning",3,"value"],["severity","danger",3,"value"],["selector","badge-severity-demo",3,"code"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Severity defines the color of the badge, possible values are "),e.TgZ(4,"i"),e._uU(5,"success"),e.qZA(),e._uU(6,", "),e.TgZ(7,"i"),e._uU(8,"info"),e.qZA(),e._uU(9,", "),e.TgZ(10,"i"),e._uU(11,"warning"),e.qZA(),e._uU(12," and "),e.TgZ(13,"i"),e._uU(14,"danger"),e.qZA()()(),e.TgZ(15,"div",2),e._UZ(16,"p-badge",3)(17,"p-badge",4)(18,"p-badge",5)(19,"p-badge",6),e.qZA(),e._UZ(20,"app-code",7),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(15),e.Q6J("value",2),e.xp6(1),e.Q6J("value",9),e.xp6(1),e.Q6J("value",3),e.xp6(1),e.Q6J("value",12),e.xp6(1),e.Q6J("code",s.code))},dependencies:[d.h,n.c,l.Ct],encapsulation:2}),a})();const B=function(){return["/theming"]};let _=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:61,vars:4,consts:[[1,"py-3"],[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"app-docsectiontext",1)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",2),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",3)(8,"table",4)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-badge"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Badge element"),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-overlay-badge"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Wrapper of a badge and its target."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-badge-dot"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Badge element with no value."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-badge-success"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Badge element with success severity."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-badge-info"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Badge element with info severity."),e.qZA()(),e.TgZ(41,"tr")(42,"td"),e._uU(43,"p-badge-warning"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"Badge element with warning severity."),e.qZA()(),e.TgZ(46,"tr")(47,"td"),e._uU(48,"p-badge-danger"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Badge element with danger severity."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"p-badge-lg"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"Large badge element"),e.qZA()(),e.TgZ(56,"tr")(57,"td"),e._uU(58,"p-badge-xl"),e.qZA(),e.TgZ(59,"td"),e._uU(60,"Extra large badge element"),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",s.title)("id",s.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,B)))},dependencies:[p.rH,n.c],encapsulation:2}),a})(),x=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:15,vars:2,consts:[[3,"title","id"]],template:function(i,s){1&i&&(e.TgZ(0,"app-docsectiontext",0)(1,"h3"),e._uU(2,"Screen Reader"),e.qZA(),e.TgZ(3,"p"),e._uU(4," Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, "),e.TgZ(5,"i"),e._uU(6,"aria-live"),e.qZA(),e._uU(7," may be utilized as well. In case badges need to be tabbable, "),e.TgZ(8,"i"),e._uU(9,"tabIndex"),e.qZA(),e._uU(10," can be added to implement custom key handlers. "),e.qZA(),e.TgZ(11,"h3"),e._uU(12,"Keyboard Support"),e.qZA(),e.TgZ(13,"p"),e._uU(14,"Component does not include any interactive elements."),e.qZA()()),2&i&&e.Q6J("title",s.title)("id",s.id)},dependencies:[n.c],encapsulation:2}),a})();var q=c(89867);const z=function(){return["Badge","BadgeDirective"]};let C=(()=>{var t;class a{constructor(){this.docs=[{id:"import",label:"Import",component:y},{id:"basic",label:"Basic",component:f},{id:"directive",label:"Directive",component:D},{id:"severity",label:"Severity",component:T},{id:"size",label:"Size",component:Z},{id:"position",label:"Position",component:A},{id:"button",label:"Button",component:h},{id:"style",label:"Style",component:_},{id:"accessibility",label:"Accessibility",component:x}]}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Badge Component","header","Badge","description","Badge is a small status indicator for another element.",3,"docs","apiDocs"]],template:function(i,s){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",s.docs)("apiDocs",e.DdM(2,z))},dependencies:[q.x],encapsulation:2}),a})(),J=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:C}]),p.Bz]}),a})(),Q=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,J,v]}),a})()}}]);