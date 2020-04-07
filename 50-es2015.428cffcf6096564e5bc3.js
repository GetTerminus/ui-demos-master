(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"7/VV":function(t,e,a){"use strict";a.r(e),a.d(e,"CohortDateRangeModule",(function(){return L}));var n=a("2kYt"),r=a("nIj0"),o=a("4mc+"),s=a("EM62"),c=a("40Bj"),i=a("tzvs"),l=a("OXHR"),d=a("hA27"),u=a("7sjG"),h=a("HRj5");function g(t,e){if(1&t&&(Object(s.pc)(0,"ts-option",3),Object(s.fd)(1),Object(s.oc)()),2&t){const t=e.$implicit;Object(s.Ic)("value",t)("option",t),Object(s.Vb)(1),Object(s.hd)(" ",t.display," ")}}class D{constructor(t,e,a){this.start=t,this.end=e,this.source=a}}let m=0,b=(()=>{class t{constructor(t){this.formBuilder=t,this.customDateCohort={display:"Custom Dates",range:{start:"",end:""}},this.formGroup=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[""],endDate:[""]}),cohort:new r.g([])}),this.uid=`ts-cohort-date-range-${m++}`,this._allowCustomDates=!0,this._id=this.uid,this.isDisabled=!1,this.cohortDateRangeChanged=new s.u}get dateRangeFormGroup(){return this.formGroup.get("dateRange")}get cohortControl(){return this.formGroup.get("cohort")}set allowCustomDates(t){this._allowCustomDates=t,this.cohorts=this.originalCohorts}get allowCustomDates(){return this._allowCustomDates}set cohorts(t){if(!t)return;this.originalCohorts=t,this._cohorts=t.slice(),this.allowCustomDates&&this._cohorts.push(this.customDateCohort);const e=t.filter(t=>t.active);e.length&&(this.cohortControl.setValue(e),this.setDateRangeValues(e[0].range))}get cohorts(){return this._cohorts}set id(t){this._id=t||this.uid}get id(){return this._id}ngOnInit(){this.updateSelectOnRangeChange()}ngOnDestroy(){}cohortDateRangeChange(t){this.cohortDateRangeChanged.emit(new D(t.start,t.end,this))}selectionChange(t){this.setDateRangeValues(t.value[0].range)}trackByFn(t){return t}formatter(t){return t.display}setDateRangeValues(t){const e={startDate:t.start,endDate:t.end};e.startDate&&e.endDate&&(this.dateRangeFormGroup.setValue(e),this.cohortDateRangeChange(t))}updateSelectOnRangeChange(){var t;null===(t=this.formGroup.get("dateRange"))||void 0===t||t.valueChanges.pipe(Object(h.j)(this)).subscribe(t=>{if(!this.cohorts||!this.cohorts.length)return;const e=Object(u.c)(t.startDate).getTime(),a=Object(u.c)(t.endDate).getTime();0===this.cohorts.filter(t=>{const n=Object(u.c)(t.range.start).getTime(),r=Object(u.c)(t.range.end).getTime();if(e===n&&a===r)return t}).length&&this.cohortControl.setValue([this.customDateCohort])})}}return t.\u0275fac=function(e){return new(e||t)(Object(s.jc)(r.f))},t.\u0275cmp=Object(s.dc)({type:t,selectors:[["ts-cohort-date-range"]],viewQuery:function(t,e){var a;1&t&&Object(s.bd)(d.a,!0),2&t&&Object(s.Qc)(a=Object(s.yc)())&&(e.selectionListComponent=a.first)},hostAttrs:[1,"ts-cohort-date-range"],hostVars:5,hostBindings:function(t,e){2&t&&(Object(s.sc)("id",e.id),Object(s.Wb)("disabled",e.isDisabled)("aria-disabled",e.isDisabled),Object(s.ac)("ts-cohort-date-range--disabled",e.isDisabled))},inputs:{allowCustomDates:"allowCustomDates",cohorts:"cohorts",dateLocale:"dateLocale",endMaxDate:"endMaxDate",endMinDate:"endMinDate",id:"id",isDisabled:"isDisabled",startMaxDate:"startMaxDate",startMinDate:"startMinDate"},outputs:{cohortDateRangeChanged:"cohortDateRangeChanged"},exportAs:["tsCohortDateRange"],decls:3,vars:13,consts:[[1,"ts-cohort-date-range__date-range",3,"dateFormGroup","dateLocale","isDisabled","startMinDate","startMaxDate","endMinDate","endMaxDate","dateRangeChange"],["label","Select a date range",1,"ts-cohort-date-range__select",3,"isDisabled","allowUserInput","formControl","displayFormatter","selectionChange"],[3,"value","option",4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","option"]],template:function(t,e){1&t&&(Object(s.pc)(0,"ts-date-range",0),Object(s.xc)("dateRangeChange",(function(t){return e.cohortDateRangeChange(t)})),Object(s.oc)(),Object(s.pc)(1,"ts-selection-list",1),Object(s.xc)("selectionChange",(function(t){return e.selectionChange(t)})),Object(s.dd)(2,g,2,3,"ts-option",2),Object(s.oc)()),2&t&&(Object(s.Ic)("dateFormGroup",e.dateRangeFormGroup)("dateLocale",e.dateLocale)("isDisabled",!e.allowCustomDates||e.isDisabled)("startMinDate",e.startMinDate)("startMaxDate",e.startMaxDate)("endMinDate",e.endMinDate)("endMaxDate",e.endMaxDate),Object(s.Vb)(1),Object(s.Ic)("isDisabled",e.isDisabled)("allowUserInput",!1)("formControl",e.cohortControl)("displayFormatter",e.formatter),Object(s.Vb)(1),Object(s.Ic)("ngForOf",e.cohorts)("ngForTrackBy",e.trackByFn))},directives:[i.a,d.a,r.q,r.h,n.s,l.c],styles:[".ts-cohort-date-range{--cohort-selection-list-minWidth:200px;display:block}.ts-cohort-date-range .ts-selection-list.ts-cohort-date-range__select{display:inline-block;min-width:var(--cohort-selection-list-minWidth)}.ts-date-range.ts-cohort-date-range__date-range{display:inline-block;margin-right:24px}"],encapsulation:2,changeDetection:0}),t})(),p=(()=>{class t{}return t.\u0275mod=Object(s.hc)({type:t}),t.\u0275inj=Object(s.gc)({factory:function(e){return new(e||t)},imports:[[n.c,c.a,r.y,i.b,l.e,d.b]]}),t})();var f=a("/Gcv"),j=a("sEIs"),O=a("JuBR"),C=a("mrqE");function v(t){Object(C.a)(1,arguments);var e=Object(O.a)(t);return e.setHours(0,0,0,0),e}var R=a("N1LS");function w(t,e){Object(C.a)(2,arguments);var a=Object(O.a)(t),n=Object(R.a)(e);return a.setDate(a.getDate()+n),a}function M(t,e){Object(C.a)(2,arguments);var a=Object(R.a)(e);return w(t,-a)}function y(t){Object(C.a)(1,arguments);var e=Object(O.a)(t);return e.setHours(23,59,59,999),e}function F(t){Object(C.a)(1,arguments);var e=Object(O.a)(t),a=e.getFullYear(),n=e.getMonth(),r=new Date(0);return r.setFullYear(a,n+1,0),r.setHours(0,0,0,0),r.getDate()}function B(t,e){Object(C.a)(2,arguments);var a=Object(O.a)(t),n=Object(R.a)(e),r=a.getMonth()+n,o=new Date(0);o.setFullYear(a.getFullYear(),r,1),o.setHours(0,0,0,0);var s=F(o);return a.setMonth(r,Math.min(s,a.getDate())),a}function x(t,e){Object(C.a)(2,arguments);var a=Object(R.a)(e);return B(t,-a)}function V(t){Object(C.a)(1,arguments);var e=Object(O.a)(t);return e.setDate(1),e.setHours(0,0,0,0),e}function G(t,e){if(1&t&&(s.pc(0,"pre"),s.fd(1),s.oc()),2&t){const t=s.Bc();s.Vb(1),s.id("    Start: ",t.lastRange.start,"\n    End: ",t.lastRange.end,"\n  ")}}const I=new Date,_=[{path:"",component:(()=>{class t{constructor(t){this.formBuilder=t,this.myForm=this.formBuilder.group({dateRange:this.formBuilder.group({startDate:[null,[r.B.required]],endDate:[null,[r.B.required]]})}),this.constraintForm=this.formBuilder.group({startDateRange:this.formBuilder.group({startDate:[v(M(new Date,120)),[r.B.required]],endDate:[v(M(new Date,1)),[r.B.required]]}),endDateRange:this.formBuilder.group({startDate:[v(M(new Date,119)),[r.B.required]],endDate:[y(new Date),[r.B.required]]})}),this.cohorts=[{display:"Last 90 days",range:{start:v(M(new Date,90)),end:I}},{display:"Last full month",range:{start:v(x(V(I),1)),end:y(M(V(I),1))},active:!0}]}printRange(t){this.lastRange=t}}return t.\u0275fac=function(e){return new(e||t)(s.jc(r.f))},t.\u0275cmp=s.dc({type:t,selectors:[["demo-cohort-date-range"]],decls:15,vars:12,consts:[["tsVerticalSpacing",""],["tsCardTitle","","tsVerticalSpacing",""],["novalidate","",3,"formGroup"],[3,"dateFormGroup"],[3,"cohorts","allowCustomDates","isDisabled","startMinDate","startMaxDate","endMinDate","endMaxDate","cohortDateRangeChanged"],[4,"ngIf"]],template:function(t,e){if(1&t&&(s.pc(0,"ts-card",0),s.pc(1,"h3",1),s.fd(2,"Demo Controls"),s.oc(),s.pc(3,"div"),s.pc(4,"div",0),s.fd(5,"Start date minimum and maximum"),s.oc(),s.pc(6,"form",2),s.kc(7,"ts-date-range",3),s.pc(8,"div",0),s.fd(9,"End date minimum and maximum"),s.oc(),s.kc(10,"ts-date-range",3),s.oc(),s.oc(),s.oc(),s.pc(11,"ts-card"),s.pc(12,"form",2),s.pc(13,"ts-cohort-date-range",4),s.xc("cohortDateRangeChanged",(function(t){return e.printRange(t)})),s.oc(),s.oc(),s.dd(14,G,2,2,"pre",5),s.oc()),2&t){var a=null,n=null;const t=null==(a=e.constraintForm.get("startDateRange"))||null==(n=a.get("startDate"))?null:n.value;var r=null,o=null;const u=null==(r=e.constraintForm.get("startDateRange"))||null==(o=r.get("endDate"))?null:o.value;var c=null,i=null;const h=null==(c=e.constraintForm.get("endDateRange"))||null==(i=c.get("startDate"))?null:i.value;var l=null,d=null;const g=null==(l=e.constraintForm.get("endDateRange"))||null==(d=l.get("endDate"))?null:d.value;s.Vb(6),s.Ic("formGroup",e.constraintForm),s.Vb(1),s.Ic("dateFormGroup",e.constraintForm.get("startDateRange")),s.Vb(3),s.Ic("dateFormGroup",e.constraintForm.get("endDateRange")),s.Vb(2),s.Ic("formGroup",e.myForm),s.Vb(1),s.Ic("cohorts",e.cohorts)("allowCustomDates",!0)("isDisabled",!1)("startMinDate",t)("startMaxDate",u)("endMinDate",h)("endMaxDate",g),s.Vb(1),s.Ic("ngIf",e.lastRange)}},directives:[o.a,f.c,o.c,r.D,r.r,r.k,i.a,b,n.t],encapsulation:2}),t})()}];let k=(()=>{class t{}return t.\u0275mod=s.hc({type:t}),t.\u0275inj=s.gc({factory:function(e){return new(e||t)},imports:[[j.e.forChild(_)],j.e]}),t})(),L=(()=>{class t{}return t.\u0275mod=s.hc({type:t}),t.\u0275inj=s.gc({factory:function(e){return new(e||t)},imports:[[n.c,k,r.m,r.y,o.b,p,i.b,f.b]]}),t})()}}]);