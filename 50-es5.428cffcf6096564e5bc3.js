function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"7/VV":function(t,e,a){"use strict";a.r(e),a.d(e,"CohortDateRangeModule",(function(){return E}));var n=a("2kYt"),r=a("nIj0"),o=a("4mc+"),s=a("EM62"),c=a("40Bj"),i=a("tzvs"),l=a("OXHR"),u=a("hA27"),d=a("7sjG"),h=a("HRj5");function g(t,e){if(1&t&&(Object(s.pc)(0,"ts-option",3),Object(s.fd)(1),Object(s.oc)()),2&t){var a=e.$implicit;Object(s.Ic)("value",a)("option",a),Object(s.Vb)(1),Object(s.hd)(" ",a.display," ")}}var f,D,m=function t(e,a,n){_classCallCheck(this,t),this.start=e,this.end=a,this.source=n},b=0,p=((D=function(){function t(e){_classCallCheck(this,t),this.formBuilder=e,this.customDateCohort={display:"Custom Dates",range:{start:"",end:""}},this.formGroup=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[""],endDate:[""]}),cohort:new r.g([])}),this.uid="ts-cohort-date-range-".concat(b++),this._allowCustomDates=!0,this._id=this.uid,this.isDisabled=!1,this.cohortDateRangeChanged=new s.u}return _createClass(t,[{key:"ngOnInit",value:function(){this.updateSelectOnRangeChange()}},{key:"ngOnDestroy",value:function(){}},{key:"cohortDateRangeChange",value:function(t){this.cohortDateRangeChanged.emit(new m(t.start,t.end,this))}},{key:"selectionChange",value:function(t){this.setDateRangeValues(t.value[0].range)}},{key:"trackByFn",value:function(t){return t}},{key:"formatter",value:function(t){return t.display}},{key:"setDateRangeValues",value:function(t){var e={startDate:t.start,endDate:t.end};e.startDate&&e.endDate&&(this.dateRangeFormGroup.setValue(e),this.cohortDateRangeChange(t))}},{key:"updateSelectOnRangeChange",value:function(){var t,e=this;null===(t=this.formGroup.get("dateRange"))||void 0===t||t.valueChanges.pipe(Object(h.j)(this)).subscribe((function(t){if(e.cohorts&&e.cohorts.length){var a=Object(d.c)(t.startDate).getTime(),n=Object(d.c)(t.endDate).getTime();0===e.cohorts.filter((function(t){var e=Object(d.c)(t.range.start).getTime(),r=Object(d.c)(t.range.end).getTime();if(a===e&&n===r)return t})).length&&e.cohortControl.setValue([e.customDateCohort])}}))}},{key:"dateRangeFormGroup",get:function(){return this.formGroup.get("dateRange")}},{key:"cohortControl",get:function(){return this.formGroup.get("cohort")}},{key:"allowCustomDates",set:function(t){this._allowCustomDates=t,this.cohorts=this.originalCohorts},get:function(){return this._allowCustomDates}},{key:"cohorts",set:function(t){if(t){this.originalCohorts=t,this._cohorts=t.slice(),this.allowCustomDates&&this._cohorts.push(this.customDateCohort);var e=t.filter((function(t){return t.active}));e.length&&(this.cohortControl.setValue(e),this.setDateRangeValues(e[0].range))}},get:function(){return this._cohorts}},{key:"id",set:function(t){this._id=t||this.uid},get:function(){return this._id}}]),t}()).\u0275fac=function(t){return new(t||D)(Object(s.jc)(r.f))},D.\u0275cmp=Object(s.dc)({type:D,selectors:[["ts-cohort-date-range"]],viewQuery:function(t,e){var a;1&t&&Object(s.bd)(u.a,!0),2&t&&Object(s.Qc)(a=Object(s.yc)())&&(e.selectionListComponent=a.first)},hostAttrs:[1,"ts-cohort-date-range"],hostVars:5,hostBindings:function(t,e){2&t&&(Object(s.sc)("id",e.id),Object(s.Wb)("disabled",e.isDisabled)("aria-disabled",e.isDisabled),Object(s.ac)("ts-cohort-date-range--disabled",e.isDisabled))},inputs:{allowCustomDates:"allowCustomDates",cohorts:"cohorts",dateLocale:"dateLocale",endMaxDate:"endMaxDate",endMinDate:"endMinDate",id:"id",isDisabled:"isDisabled",startMaxDate:"startMaxDate",startMinDate:"startMinDate"},outputs:{cohortDateRangeChanged:"cohortDateRangeChanged"},exportAs:["tsCohortDateRange"],decls:3,vars:13,consts:[[1,"ts-cohort-date-range__date-range",3,"dateFormGroup","dateLocale","isDisabled","startMinDate","startMaxDate","endMinDate","endMaxDate","dateRangeChange"],["label","Select a date range",1,"ts-cohort-date-range__select",3,"isDisabled","allowUserInput","formControl","displayFormatter","selectionChange"],[3,"value","option",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","option"]],template:function(t,e){1&t&&(Object(s.pc)(0,"ts-date-range",0),Object(s.xc)("dateRangeChange",(function(t){return e.cohortDateRangeChange(t)})),Object(s.oc)(),Object(s.pc)(1,"ts-selection-list",1),Object(s.xc)("selectionChange",(function(t){return e.selectionChange(t)})),Object(s.dd)(2,g,2,3,"ts-option",2),Object(s.oc)()),2&t&&(Object(s.Ic)("dateFormGroup",e.dateRangeFormGroup)("dateLocale",e.dateLocale)("isDisabled",!e.allowCustomDates||e.isDisabled)("startMinDate",e.startMinDate)("startMaxDate",e.startMaxDate)("endMinDate",e.endMinDate)("endMaxDate",e.endMaxDate),Object(s.Vb)(1),Object(s.Ic)("isDisabled",e.isDisabled)("allowUserInput",!1)("formControl",e.cohortControl)("displayFormatter",e.formatter),Object(s.Vb)(1),Object(s.Ic)("ngForOf",e.cohorts)("ngForTrackBy",e.trackByFn))},directives:[i.a,u.a,r.q,r.h,n.s,l.c],styles:[".ts-cohort-date-range{--cohort-selection-list-minWidth:200px;display:block}.ts-cohort-date-range .ts-selection-list.ts-cohort-date-range__select{display:inline-block;min-width:var(--cohort-selection-list-minWidth)}.ts-date-range.ts-cohort-date-range__date-range{display:inline-block;margin-right:24px}"],encapsulation:2,changeDetection:0}),D),C=((f=function t(){_classCallCheck(this,t)}).\u0275mod=Object(s.hc)({type:f}),f.\u0275inj=Object(s.gc)({factory:function(t){return new(t||f)},imports:[[n.c,c.a,r.y,i.b,l.e,u.b]]}),f),j=a("/Gcv"),O=a("sEIs"),v=a("JuBR"),y=a("mrqE");function R(t){Object(y.a)(1,arguments);var e=Object(v.a)(t);return e.setHours(0,0,0,0),e}var w=a("N1LS");function k(t,e){Object(y.a)(2,arguments);var a=Object(v.a)(t),n=Object(w.a)(e);return a.setDate(a.getDate()+n),a}function M(t,e){Object(y.a)(2,arguments);var a=Object(w.a)(e);return k(t,-a)}function F(t){Object(y.a)(1,arguments);var e=Object(v.a)(t);return e.setHours(23,59,59,999),e}function _(t){Object(y.a)(1,arguments);var e=Object(v.a)(t),a=e.getFullYear(),n=e.getMonth(),r=new Date(0);return r.setFullYear(a,n+1,0),r.setHours(0,0,0,0),r.getDate()}function B(t,e){Object(y.a)(2,arguments);var a=Object(v.a)(t),n=Object(w.a)(e),r=a.getMonth()+n,o=new Date(0);o.setFullYear(a.getFullYear(),r,1),o.setHours(0,0,0,0);var s=_(o);return a.setMonth(r,Math.min(s,a.getDate())),a}function x(t,e){Object(y.a)(2,arguments);var a=Object(w.a)(e);return B(t,-a)}function V(t){Object(y.a)(1,arguments);var e=Object(v.a)(t);return e.setDate(1),e.setHours(0,0,0,0),e}function G(t,e){if(1&t&&(s.pc(0,"pre"),s.fd(1),s.oc()),2&t){var a=s.Bc();s.Vb(1),s.id("    Start: ",a.lastRange.start,"\n    End: ",a.lastRange.end,"\n  ")}}var I,L,q,S=new Date,T=[{path:"",component:(I=function(){function t(e){_classCallCheck(this,t),this.formBuilder=e,this.myForm=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[null,[r.B.required]],endDate:[null,[r.B.required]]})}),this.constraintForm=this.formBuilder.group({startDateRange:this.formBuilder.group({startDate:[R(M(new Date,120)),[r.B.required]],endDate:[R(M(new Date,1)),[r.B.required]]}),endDateRange:this.formBuilder.group({startDate:[R(M(new Date,119)),[r.B.required]],endDate:[F(new Date),[r.B.required]]})}),this.cohorts=[{display:"Last 90 days",range:{start:R(M(new Date,90)),end:S}},{display:"Last full month",range:{start:R(x(V(S),1)),end:F(M(V(S),1))},active:!0}]}return _createClass(t,[{key:"printRange",value:function(t){this.lastRange=t}}]),t}(),I.\u0275fac=function(t){return new(t||I)(s.jc(r.f))},I.\u0275cmp=s.dc({type:I,selectors:[["demo-cohort-date-range"]],decls:15,vars:12,consts:[["tsVerticalSpacing",""],["tsCardTitle","","tsVerticalSpacing",""],["novalidate","",3,"formGroup"],[3,"dateFormGroup"],[3,"cohorts","allowCustomDates","isDisabled","startMinDate","startMaxDate","endMinDate","endMaxDate","cohortDateRangeChanged"],[4,"ngIf"]],template:function(t,e){if(1&t&&(s.pc(0,"ts-card",0),s.pc(1,"h3",1),s.fd(2,"Demo Controls"),s.oc(),s.pc(3,"div"),s.pc(4,"div",0),s.fd(5,"Start date minimum and maximum"),s.oc(),s.pc(6,"form",2),s.kc(7,"ts-date-range",3),s.pc(8,"div",0),s.fd(9,"End date minimum and maximum"),s.oc(),s.kc(10,"ts-date-range",3),s.oc(),s.oc(),s.oc(),s.pc(11,"ts-card"),s.pc(12,"form",2),s.pc(13,"ts-cohort-date-range",4),s.xc("cohortDateRangeChanged",(function(t){return e.printRange(t)})),s.oc(),s.oc(),s.dd(14,G,2,2,"pre",5),s.oc()),2&t){var a=null,n=null,r=null==(a=e.constraintForm.get("startDateRange"))||null==(n=a.get("startDate"))?null:n.value,o=null,c=null,i=null==(o=e.constraintForm.get("startDateRange"))||null==(c=o.get("endDate"))?null:c.value,l=null,u=null,d=null==(l=e.constraintForm.get("endDateRange"))||null==(u=l.get("startDate"))?null:u.value,h=null,g=null,f=null==(h=e.constraintForm.get("endDateRange"))||null==(g=h.get("endDate"))?null:g.value;s.Vb(6),s.Ic("formGroup",e.constraintForm),s.Vb(1),s.Ic("dateFormGroup",e.constraintForm.get("startDateRange")),s.Vb(3),s.Ic("dateFormGroup",e.constraintForm.get("endDateRange")),s.Vb(2),s.Ic("formGroup",e.myForm),s.Vb(1),s.Ic("cohorts",e.cohorts)("allowCustomDates",!0)("isDisabled",!1)("startMinDate",r)("startMaxDate",i)("endMinDate",d)("endMaxDate",f),s.Vb(1),s.Ic("ngIf",e.lastRange)}},directives:[o.a,j.c,o.c,r.D,r.r,r.k,i.a,p,n.t],encapsulation:2}),I)}],H=((q=function t(){_classCallCheck(this,t)}).\u0275mod=s.hc({type:q}),q.\u0275inj=s.gc({factory:function(t){return new(t||q)},imports:[[O.e.forChild(T)],O.e]}),q),E=((L=function t(){_classCallCheck(this,t)}).\u0275mod=s.hc({type:L}),L.\u0275inj=s.gc({factory:function(t){return new(t||L)},imports:[[n.c,H,r.m,r.y,o.b,C,i.b,j.b]]}),L)}}]);