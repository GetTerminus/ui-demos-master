function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cohort-date-range-cohort-date-range-module-ngfactory~date-range-date-range-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js":
  /*!**************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js ***!
    \**************************************************************************************************************/

  /*! exports provided: TsDateRangeComponent, TsDateRangeModule */

  /***/
  function distLibsUiDateRangeFesm2015TerminusUiDateRangeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsDateRangeComponent", function () {
      return TsDateRangeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsDateRangeModule", function () {
      return TsDateRangeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /**
     * This is the date-range UI Component
     *
     * @example
     * <ts-date-range
     *              [dateFormGroup]="myForm.get('dateRange')"
     *              endMaxDate="{{ new Date(2017, 4, 30) }}"
     *              endMinDate="{{ new Date(2017, 4, 1) }}"
     *              [isDisabled]="true"
     *              startingView="year"
     *              startMaxDate="{{ new Date(2017, 4, 30) }}"
     *              startMinDate="{{ new Date(2017, 4, 1) }}"
     *              theme="primary"
     *              (dateRangeChange)="myMethod($event)"
     *              (endSelected)="myMethod($event)"
     *              (startSelected)="myMethod($event)"
     * ></ts-date-range>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/date-range</example-url>
     */


    var TsDateRangeComponent = /*#__PURE__*/function () {
      function TsDateRangeComponent(changeDetectorRef) {
        _classCallCheck(this, TsDateRangeComponent);

        this.changeDetectorRef = changeDetectorRef;
        /**
         * Expose the minimum date for the endDate
         *
         * NOTE: `any` is used since we cannot seem to use union types in a BehaviorSubject and the value could be a Date or undefined
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.endMinDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
        /**
         * Define the end date label
         */

        this.endLabel = 'End date';
        /**
         * The internal FormControl to manage the end date
         */

        this.internalEndControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        /**
         * The internal FormControl to manage the start date
         */

        this.internalStartControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        /**
         * Define the separator between the two date inputs
         */

        this.separator = '-';
        /**
         * Expose the maximum date for the startDate
         *
         * NOTE: `any` is used since we cannot seem to use union types in a BehaviorSubject and the value could be a Date or undefined
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.startMaxDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
        /**
         * Define the start date label
         */

        this.startLabel = 'Start date';
        /**
         * Define if the range should be disabled
         */

        this.isDisabled = false;
        /**
         * Define the starting view for both datepickers
         */

        this.startingView = 'month';
        /**
         * Define the component theme
         */

        this.theme = 'primary';
        /**
         * Event emitted anytime the range is changed
         */

        this.dateRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Output the end date when selected
         */

        this.endSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Output the start date when selected
         */

        this.startSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }
      /**
       * Getter to return the date range as an object
       *
       * @returns The current date range
       */


      _createClass(TsDateRangeComponent, [{
        key: "ngOnInit",

        /**
         * Seed initial date range values
         */
        value: function ngOnInit() {
          // Seed values from a passed in form group
          if (this.dateFormGroup) {
            this.initializeMinAndMax(this.dateFormGroup);
          } // istanbul ignore else


          if (!this.endDateControl.value) {
            this.startMaxDate$.next(this.startMaxDate);
          } // istanbul ignore else


          if (!this.startDateControl.value) {
            this.endMinDate$.next(this.endMinDate);
          }

          this.setUpFormControlSync();
        }
        /**
         * Needed for untilComponentDestroyed
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
        /**
         * Set up subscriptions to sync the internal FormControl to the external FormControl
         */

      }, {
        key: "setUpFormControlSync",
        value: function setUpFormControlSync() {
          var _this = this;

          if (!this.dateFormGroup) {
            return;
          }

          var startCtrl = this.dateFormGroup.get('startDate');
          var endCtrl = this.dateFormGroup.get('endDate');

          if (!startCtrl || !endCtrl) {
            return;
          }

          this.changeDetectorRef.detectChanges(); // HACK: This is to fix on an initial load, date range value isn't populating correctly.

          this.internalStartControl.setValue(startCtrl.value);
          this.internalEndControl.setValue(endCtrl.value); // START DATE

          startCtrl.valueChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe(function (value) {
            _this.internalStartControl.setValue(value);

            _this.endMinDate$.next(value);
          });
          startCtrl.statusChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe(function () {
            _this.internalStartControl.setErrors(startCtrl.errors);
          }); // END DATE

          endCtrl.valueChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe(function (value) {
            _this.internalEndControl.setValue(value);

            _this.startMaxDate$.next(value);
          });
          endCtrl.statusChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe(function () {
            _this.internalEndControl.setErrors(endCtrl.errors);
          });
          this.changeDetectorRef.detectChanges();
        }
        /**
         * Set up initial min and max dates
         *
         * @param formGroup - The date form group
         */

      }, {
        key: "initializeMinAndMax",
        value: function initializeMinAndMax(formGroup) {
          var startControl = formGroup.get('startDate');
          var endControl = formGroup.get('endDate');
          var startControlValue = startControl ? startControl.value
          /* istanbul ignore next - Unreachable */
          : undefined;
          var endControlValue = endControl ? endControl.value
          /* istanbul ignore next - Unreachable */
          : undefined;
          var startValueToUse = startControlValue || this.endMinDate;
          var endValueToUse = endControlValue || this.endMinDate;
          this.endMinDate$.next(startValueToUse);
          this.startMaxDate$.next(endValueToUse);
        }
        /**
         * Emit the selected start date and date range
         *
         * @param date
         */

      }, {
        key: "startDateSelected",
        value: function startDateSelected(date) {
          if (date) {
            this.endMinDate$.next(date); // Update the form value if a formGroup was passed in
            // istanbul ignore else

            if (this.dateFormGroup && this.startDateControl) {
              this.startDateControl.setValue(date);
            }

            this.startSelected.emit(date);
            this.dateRangeChange.emit(this.dateRange);
          } else {
            // If no startDate was selected, reset to the original endMinDate
            this.endMinDate$.next(this.endMinDate);
          }
        }
        /**
         * Emit the selected end date and date range
         *
         * @param date
         */

      }, {
        key: "endDateSelected",
        value: function endDateSelected(date) {
          if (date) {
            this.startMaxDate$.next(date); // Update the form value if a formGroup was passed in
            // istanbul ignore else

            if (this.dateFormGroup && this.endDateControl) {
              this.endDateControl.setValue(date);
            }

            this.endSelected.emit(date);
            this.dateRangeChange.emit(this.dateRange);
          } else {
            // If no endDate was selected, reset to the original startMaxDate
            this.startMaxDate$.next(this.startMaxDate);
          }
        }
        /**
         * Update dates when the start date input receives a blur event
         *
         * @param date - The date entered
         */

      }, {
        key: "startBlur",
        value: function startBlur(date) {
          var ctrl = this.dateFormGroup ? this.dateFormGroup.get('startDate')
          /* istanbul ignore next - Untestable */
          : null;
          var value = date ? date : null; // Update the max date for the end date control

          this.endMinDate$.next(value); // Update the consumer's control
          // istanbul ignore else

          if (ctrl) {
            ctrl.setValue(value);
            ctrl.markAsTouched();
            ctrl.updateValueAndValidity();
            this.dateRangeChange.emit(this.dateRange);
          }
        }
        /**
         * Update dates when the end date input receives a blur event
         *
         * @param date - The date entered
         */

      }, {
        key: "endBlur",
        value: function endBlur(date) {
          var ctrl = this.dateFormGroup ? this.dateFormGroup.get('endDate')
          /* istanbul ignore next - Untestable */
          : null;
          var value = date ? date : null; // Update the max date for the start date control

          this.startMaxDate$.next(value); // Update the consumer's control
          // istanbul ignore else

          if (ctrl) {
            ctrl.setValue(value);
            ctrl.markAsTouched();
            ctrl.updateValueAndValidity();
            this.dateRangeChange.emit(this.dateRange);
          }
        }
      }, {
        key: "dateRange",
        get: function get() {
          return {
            start: this.startDateControl.value,
            end: this.endDateControl.value
          };
        }
        /**
         * Provide quick access to the endDate form control
         */

      }, {
        key: "endDateControl",
        get: function get() {
          var ctrl = this.dateFormGroup ? this.dateFormGroup.get('endDate') : null;
          return ctrl ? ctrl : this.internalEndControl;
        }
        /**
         * Provide quick access to the startDate form control
         */

      }, {
        key: "startDateControl",
        get: function get() {
          var ctrl = this.dateFormGroup ? this.dateFormGroup.get('startDate') : null;
          return ctrl ? ctrl : this.internalStartControl;
        }
        /**
         * Define the form group to attach the date range to
         *
         * @param value
         */

      }, {
        key: "dateFormGroup",
        set: function set(value) {
          this._dateFormGroup = value;
        },
        get: function get() {
          return this._dateFormGroup;
        }
      }]);

      return TsDateRangeComponent;
    }();

    TsDateRangeComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], TsDateRangeComponent.prototype, "dateFormGroup", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsDateRangeComponent.prototype, "dateLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsDateRangeComponent.prototype, "endMaxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsDateRangeComponent.prototype, "endMinDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsDateRangeComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsDateRangeComponent.prototype, "startingView", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsDateRangeComponent.prototype, "startMaxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsDateRangeComponent.prototype, "startMinDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsDateRangeComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], TsDateRangeComponent.prototype, "dateRangeChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], TsDateRangeComponent.prototype, "endSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], TsDateRangeComponent.prototype, "startSelected", void 0);
    TsDateRangeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-date-range',
      template: "<div\n  class=\"c-date-range qa-date-range\"\n  fxLayout=\"row\"\n  fxLayoutAlign=\"start center\"\n  fxLayoutGap=\".6em\"\n>\n  <ts-input\n    class=\"c-date-range--start qa-date-range-start-datepicker\"\n    [dateLocale]=\"dateLocale\"\n    [formControl]=\"internalStartControl\"\n    [label]=\"startLabel\"\n    [maxDate]=\"startMaxDate$ | async\"\n    [minDate]=\"startMinDate\"\n    [startingView]=\"startingView\"\n    [isDisabled]=\"isDisabled || startDateControl.disabled\"\n    [theme]=\"theme\"\n    mask=\"date\"\n    [datepicker]=\"true\"\n    (selected)=\"startDateSelected($event)\"\n    (inputBlur)=\"startBlur($event)\"\n    #start\n  ></ts-input>\n\n  <span class=\"c-date-range__separator\">\n    {{ separator }}\n  </span>\n\n  <ts-input\n    class=\"c-date-range--end qa-date-range-end-datepicker\"\n    [dateLocale]=\"dateLocale\"\n    [formControl]=\"internalEndControl\"\n    [label]=\"endLabel\"\n    [maxDate]=\"endMaxDate\"\n    [minDate]=\"endMinDate$ | async\"\n    [startingView]=\"startingView\"\n    [isDisabled]=\"isDisabled || endDateControl.disabled\"\n    [theme]=\"theme\"\n    mask=\"date\"\n    [datepicker]=\"true\"\n    (selected)=\"endDateSelected($event)\"\n    (inputBlur)=\"endBlur($event)\"\n    #end\n  ></ts-input>\n</div>\n",
      host: {
        "class": 'ts-date-range'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsDateRange',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-date-range{display:block}.ts-date-range :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-date-range h1,.ts-date-range h2,.ts-date-range h3,.ts-date-range h4,.ts-date-range h5,.ts-date-range p{margin:unset}.c-date-range .c-date-range__separator{color:#999;margin-top:-1.2em}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])], TsDateRangeComponent);

    var TsDateRangeModule = function TsDateRangeModule() {
      _classCallCheck(this, TsDateRangeModule);
    };

    TsDateRangeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_4__["TsInputModule"]],
      exports: [TsDateRangeComponent],
      declarations: [TsDateRangeComponent]
    })], TsDateRangeModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-date-range.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/date-range/terminus-ui-date-range.ngfactory.js":
  /*!***************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/date-range/terminus-ui-date-range.ngfactory.js ***!
    \***************************************************************************************************************/

  /*! exports provided: TsDateRangeModuleNgFactory, RenderType_TsDateRangeComponent, View_TsDateRangeComponent_0, View_TsDateRangeComponent_Host_0, TsDateRangeComponentNgFactory */

  /***/
  function distLibsUiDateRangeTerminusUiDateRangeNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsDateRangeModuleNgFactory", function () {
      return TsDateRangeModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsDateRangeComponent", function () {
      return RenderType_TsDateRangeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsDateRangeComponent_0", function () {
      return View_TsDateRangeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsDateRangeComponent_Host_0", function () {
      return View_TsDateRangeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsDateRangeComponentNgFactory", function () {
      return TsDateRangeComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-date-range */
    "../../dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */
    "../../node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ui-validators */
    "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../input/terminus-ui-input.ngfactory */
    "../../dist/libs/ui/input/terminus-ui-input.ngfactory.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsDateRangeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_1__["TsDateRangeModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_25__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_25__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_27__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_27__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_1__["TsDateRangeModule"], _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_1__["TsDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TS_DATE_FORMATS"], [])]);
    });

    var styles_TsDateRangeComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-date-range{display:block}.ts-date-range :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-date-range h1,.ts-date-range h2,.ts-date-range h3,.ts-date-range h4,.ts-date-range h5,.ts-date-range p{margin:unset}.c-date-range .c-date-range__separator{color:#999;margin-top:-1.2em}"];

    var RenderType_TsDateRangeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsDateRangeComponent,
      data: {}
    });

    function View_TsDateRangeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["class", "c-date-range qa-date-range"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", ".6em"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 6, "ts-input", [["class", "c-date-range--start qa-date-range-start-datepicker ts-input"], ["mask", "date"]], [[2, "ts-input--datepicker", null]], [[null, "selected"], [null, "inputBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selected" === en) {
          var pd_0 = _co.startDateSelected($event) !== false;
          ad = pd_0 && ad;
        }

        if ("inputBlur" === en) {
          var pd_1 = _co.startBlur($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_TsInputComponent_0"], _input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_TsInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_25__["TsFormFieldControl"], null, [_terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"], "en-US", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 6209536, [["start", 4]], 0, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["AutofillMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_31__["TsDocumentService"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"], [8, null], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"]], [8, null]], {
        dateLocale: [0, "dateLocale"],
        datepicker: [1, "datepicker"],
        formControl: [2, "formControl"],
        isDisabled: [3, "isDisabled"],
        label: [4, "label"],
        mask: [5, "mask"],
        maxDate: [6, "maxDate"],
        minDate: [7, "minDate"],
        startingView: [8, "startingView"],
        theme: [9, "theme"]
      }, {
        inputBlur: "inputBlur",
        selected: "selected"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TS_DATE_FORMATS"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "span", [["class", "c-date-range__separator"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 6, "ts-input", [["class", "c-date-range--end qa-date-range-end-datepicker ts-input"], ["mask", "date"]], [[2, "ts-input--datepicker", null]], [[null, "selected"], [null, "inputBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selected" === en) {
          var pd_0 = _co.endDateSelected($event) !== false;
          ad = pd_0 && ad;
        }

        if ("inputBlur" === en) {
          var pd_1 = _co.endBlur($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_TsInputComponent_0"], _input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_TsInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_25__["TsFormFieldControl"], null, [_terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"], "en-US", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 6209536, [["end", 4]], 0, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TsInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["AutofillMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_31__["TsDocumentService"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"], [8, null], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"]], [8, null]], {
        dateLocale: [0, "dateLocale"],
        datepicker: [1, "datepicker"],
        formControl: [2, "formControl"],
        isDisabled: [3, "isDisabled"],
        label: [4, "label"],
        mask: [5, "mask"],
        maxDate: [6, "maxDate"],
        minDate: [7, "minDate"],
        startingView: [8, "startingView"],
        theme: [9, "theme"]
      }, {
        inputBlur: "inputBlur",
        selected: "selected"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_28__["TS_DATE_FORMATS"], [])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = ".6em";

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = "start center";

        _ck(_v, 3, 0, currVal_2);

        var currVal_4 = _co.dateLocale;
        var currVal_5 = true;
        var currVal_6 = _co.internalStartControl;
        var currVal_7 = _co.isDisabled || _co.startDateControl.disabled;
        var currVal_8 = _co.startLabel;
        var currVal_9 = "date";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 8, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).transform(_co.startMaxDate$));

        var currVal_11 = _co.startMinDate;
        var currVal_12 = _co.startingView;
        var currVal_13 = _co.theme;

        _ck(_v, 8, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);

        var currVal_16 = _co.dateLocale;
        var currVal_17 = true;
        var currVal_18 = _co.internalEndControl;
        var currVal_19 = _co.isDisabled || _co.endDateControl.disabled;
        var currVal_20 = _co.endLabel;
        var currVal_21 = "date";
        var currVal_22 = _co.endMaxDate;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 17, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).transform(_co.endMinDate$));

        var currVal_24 = _co.startingView;
        var currVal_25 = _co.theme;

        _ck(_v, 17, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).datepicker;

        _ck(_v, 4, 0, currVal_3);

        var currVal_14 = _co.separator;

        _ck(_v, 12, 0, currVal_14);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).datepicker;

        _ck(_v, 13, 0, currVal_15);
      });
    }

    function View_TsDateRangeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-date-range", [["class", "ts-date-range"]], null, null, null, View_TsDateRangeComponent_0, RenderType_TsDateRangeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_1__["TsDateRangeComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TsDateRangeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-date-range", _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_1__["TsDateRangeComponent"], View_TsDateRangeComponent_Host_0, {
      dateFormGroup: "dateFormGroup",
      dateLocale: "dateLocale",
      endMaxDate: "endMaxDate",
      endMinDate: "endMinDate",
      isDisabled: "isDisabled",
      startingView: "startingView",
      startMaxDate: "startMaxDate",
      startMinDate: "startMinDate",
      theme: "theme"
    }, {
      dateRangeChange: "dateRangeChange",
      endSelected: "endSelected",
      startSelected: "startSelected"
    }, []);
    /***/

  }
}]);
//# sourceMappingURL=default~cohort-date-range-cohort-date-range-module-ngfactory~date-range-date-range-module-ngfactory-es5.js.map