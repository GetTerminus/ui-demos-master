function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cohort-date-range-cohort-date-range-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/cohort-date-range/fesm2015/terminus-ui-cohort-date-range.js":
  /*!****************************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/cohort-date-range/fesm2015/terminus-ui-cohort-date-range.js ***!
    \****************************************************************************************************************************/

  /*! exports provided: TsCohortDateRangeChanged, TsCohortDateRangeComponent, TsCohortDateRangeModule */

  /***/
  function distLibsUiCohortDateRangeFesm2015TerminusUiCohortDateRangeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCohortDateRangeChanged", function () {
      return TsCohortDateRangeChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCohortDateRangeComponent", function () {
      return TsCohortDateRangeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCohortDateRangeModule", function () {
      return TsCohortDateRangeModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-date-range */
    "../../dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-selection-list */
    "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
    /* harmony import */


    var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ngx-tools/coercion */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /**
     * Event object emitted by {@link TsCohortDateRangeComponent} when there is date range change
     */


    var TsCohortDateRangeChanged = function TsCohortDateRangeChanged(start, end, source) {
      _classCallCheck(this, TsCohortDateRangeChanged);

      this.start = start;
      this.end = end;
      this.source = source;
    }; // Unique ID for each instance


    var nextUniqueId = 0;
    /**
     * This is the cohort-date-range UI Component
     *
     *
     * @example
     * <ts-cohort-date-range
     *              [allowCustomDates]="true"
     *              [cohorts]="myCohorts"
     *              endMaxDate="{{ new Date(2017, 4, 30) }}"
     *              endMinDate="{{ new Date(2017, 4, 1) }}"
     *              id="myID"
     *              startMaxDate="{{ new Date(2017, 4, 30) }}"
     *              startMinDate="{{ new Date(2017, 4, 1) }}"
     *              (cohortDateRangeChange)="myFunc($event)"
     * ></ts-cohort-date-range>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/cohort-date-range</example-url>
     */

    var TsCohortDateRangeComponent = /*#__PURE__*/function () {
      function TsCohortDateRangeComponent(formBuilder) {
        _classCallCheck(this, TsCohortDateRangeComponent);

        this.formBuilder = formBuilder;
        /**
         * Define the custom date cohort
         *
         * @internal
         */

        this.customDateCohort = {
          display: 'Custom Dates',
          range: {
            start: '',
            end: ''
          }
        };
        /**
         * Initialize the date range with empty start and end date
         *
         * @internal
         */

        this.formGroup = this.formBuilder.group({
          dateRange: this.formBuilder.group({
            startDate: [''],
            endDate: ['']
          }),
          cohort: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([])
        });
        /**
         * Define the default component ID
         */

        this.uid = "ts-cohort-date-range-".concat(nextUniqueId++);
        this._allowCustomDates = true;
        this._id = this.uid;
        /**
         * Disable the component
         */

        this.isDisabled = false;
        /**
         * Cohort change event emitter
         */

        this.cohortDateRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }
      /**
       * Get reference to the date range form group
       *
       * @internal
       */


      _createClass(TsCohortDateRangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSelectOnRangeChange();
        }
        /**
         * Needed for untilComponentDestroyed
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
        /**
         * Emit the change event
         *
         * @internal
         * @param event - triggered by date range change
         */

      }, {
        key: "cohortDateRangeChange",
        value: function cohortDateRangeChange(event) {
          this.cohortDateRangeChanged.emit(new TsCohortDateRangeChanged(event.start, event.end, this));
        }
        /**
         * Called when selection changed
         *
         * @internal
         * @param event - TsSelectChangeEvent
         */

      }, {
        key: "selectionChange",
        value: function selectionChange(event) {
          this.setDateRangeValues(event.value[0].range);
        }
        /**
         * Function for tracking for-loops changes
         *
         * @internal
         * @param index - The item index
         * @returns The index
         */

      }, {
        key: "trackByFn",
        value: function trackByFn(index) {
          return index;
        }
        /**
         * The display formatter for {@link TsSelectionListComponent}
         *
         * @param cohort - The cohort
         * @returns The display value for the cohort
         */

      }, {
        key: "formatter",
        value: function formatter(cohort) {
          return cohort.display;
        }
        /**
         * Update the date range form values
         *
         * @param range - The new range
         */

      }, {
        key: "setDateRangeValues",
        value: function setDateRangeValues(range) {
          var newValues = {
            startDate: range.start,
            endDate: range.end
          }; // istanbul ignore else

          if (newValues.startDate && newValues.endDate) {
            this.dateRangeFormGroup.setValue(newValues);
            this.cohortDateRangeChange(range);
          }
        }
        /**
         * Update the select when the date is manually changed to not match a cohort
         */

      }, {
        key: "updateSelectOnRangeChange",
        value: function updateSelectOnRangeChange() {
          var _this = this;

          var _a; // eslint-disable-next-line deprecation/deprecation


          (_a = this.formGroup.get('dateRange')) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(function (results) {
            if (!_this.cohorts || !_this.cohorts.length) {
              return;
            }

            var resultsStartTime = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceDateProperty"])(results.startDate).getTime();
            var resultsEndTime = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceDateProperty"])(results.endDate).getTime();

            var matchedCohorts = _this.cohorts.filter(function (cohort) {
              var cohortStartTime = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceDateProperty"])(cohort.range.start).getTime();
              var cohortEndTime = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceDateProperty"])(cohort.range.end).getTime();
              var cohortStartMatches = resultsStartTime === cohortStartTime;
              var cohortEndMatches = resultsEndTime === cohortEndTime; // istanbul ignore else

              if (cohortStartMatches && cohortEndMatches) {
                return cohort;
              }
            }); // istanbul ignore else


            if (matchedCohorts.length === 0) {
              _this.cohortControl.setValue([_this.customDateCohort]);
            }
          });
        }
      }, {
        key: "dateRangeFormGroup",
        get: function get() {
          return this.formGroup.get('dateRange');
        }
        /**
         * Get a reference to the cohort form control
         *
         * @internal
         */

      }, {
        key: "cohortControl",
        get: function get() {
          return this.formGroup.get('cohort');
        }
        /**
         * Define whether custom dates are allowed
         *
         * @param value
         */

      }, {
        key: "allowCustomDates",
        set: function set(value) {
          this._allowCustomDates = value; // If this flag is being toggled, set the original cohorts again which will add or remove the custom cohort option as needed.

          this.cohorts = this.originalCohorts;
        },
        get: function get() {
          return this._allowCustomDates;
        }
        /**
         * Define the array of date cohorts
         *
         * @param value
         */

      }, {
        key: "cohorts",
        set: function set(value) {
          if (!value) {
            return;
          }

          this.originalCohorts = value;
          this._cohorts = value.slice();

          if (this.allowCustomDates) {
            this._cohorts.push(this.customDateCohort);
          }

          var activeCohort = value.filter(function (c) {
            return c.active;
          });

          if (activeCohort.length) {
            this.cohortControl.setValue(activeCohort);
            this.setDateRangeValues(activeCohort[0].range);
          }
        },
        get: function get() {
          return this._cohorts;
        }
        /**
         * Define an ID for the component
         *
         * @param value
         */

      }, {
        key: "id",
        set: function set(value) {
          this._id = value || this.uid;
        },
        get: function get() {
          return this._id;
        }
      }]);

      return TsCohortDateRangeComponent;
    }();

    TsCohortDateRangeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_7__["TsSelectionListComponent"], {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_7__["TsSelectionListComponent"])], TsCohortDateRangeComponent.prototype, "selectionListComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsCohortDateRangeComponent.prototype, "allowCustomDates", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TsCohortDateRangeComponent.prototype, "cohorts", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsCohortDateRangeComponent.prototype, "dateLocale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsCohortDateRangeComponent.prototype, "endMaxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsCohortDateRangeComponent.prototype, "endMinDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsCohortDateRangeComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCohortDateRangeComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsCohortDateRangeComponent.prototype, "startMaxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], TsCohortDateRangeComponent.prototype, "startMinDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCohortDateRangeComponent.prototype, "cohortDateRangeChanged", void 0);
    TsCohortDateRangeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-cohort-date-range',
      template: "<ts-date-range\n  class=\"ts-cohort-date-range__date-range\"\n  [dateFormGroup]=\"dateRangeFormGroup\"\n  [dateLocale]=\"dateLocale\"\n  [isDisabled]=\"!allowCustomDates || isDisabled\"\n  (dateRangeChange)=\"cohortDateRangeChange($event)\"\n  [startMinDate]=\"startMinDate\"\n  [startMaxDate]=\"startMaxDate\"\n  [endMinDate]=\"endMinDate\"\n  [endMaxDate]=\"endMaxDate\"\n></ts-date-range>\n\n<ts-selection-list\n  label=\"Select a date range\"\n  class=\"ts-cohort-date-range__select\"\n  [isDisabled]=\"isDisabled\"\n  [allowUserInput]=\"false\"\n  [formControl]=\"cohortControl\"\n  [displayFormatter]=\"formatter\"\n  (selectionChange)=\"selectionChange($event)\"\n>\n  <ts-option\n    [value]=\"option\"\n    [option]=\"option\"\n    *ngFor=\"let option of cohorts; trackBy: trackByFn\"\n  >\n    {{ option.display }}\n  </ts-option>\n</ts-selection-list>\n",
      host: {
        'class': 'ts-cohort-date-range',
        '[class.ts-cohort-date-range--disabled]': 'isDisabled',
        '[attr.disabled]': 'isDisabled',
        '[attr.aria-disabled]': 'isDisabled',
        '[id]': 'id'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsCohortDateRange',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-cohort-date-range{--cohort-selection-list-minWidth:200px;display:block}.ts-cohort-date-range .ts-selection-list.ts-cohort-date-range__select{display:inline-block;min-width:var(--cohort-selection-list-minWidth)}.ts-date-range.ts-cohort-date-range__date-range{display:inline-block;margin-right:24px}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], TsCohortDateRangeComponent);

    var TsCohortDateRangeModule = function TsCohortDateRangeModule() {
      _classCallCheck(this, TsCohortDateRangeModule);
    };

    TsCohortDateRangeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_5__["TsDateRangeModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_6__["TsOptionModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_7__["TsSelectionListModule"]],
      exports: [TsCohortDateRangeComponent],
      declarations: [TsCohortDateRangeComponent]
    })], TsCohortDateRangeModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-cohort-date-range.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/cohort-date-range/terminus-ui-cohort-date-range.ngfactory.js":
  /*!*****************************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/cohort-date-range/terminus-ui-cohort-date-range.ngfactory.js ***!
    \*****************************************************************************************************************************/

  /*! exports provided: TsCohortDateRangeModuleNgFactory, RenderType_TsCohortDateRangeComponent, View_TsCohortDateRangeComponent_0, View_TsCohortDateRangeComponent_Host_0, TsCohortDateRangeComponentNgFactory */

  /***/
  function distLibsUiCohortDateRangeTerminusUiCohortDateRangeNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCohortDateRangeModuleNgFactory", function () {
      return TsCohortDateRangeModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsCohortDateRangeComponent", function () {
      return RenderType_TsCohortDateRangeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsCohortDateRangeComponent_0", function () {
      return View_TsCohortDateRangeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsCohortDateRangeComponent_Host_0", function () {
      return View_TsCohortDateRangeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCohortDateRangeComponentNgFactory", function () {
      return TsCohortDateRangeComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-cohort-date-range */
    "../../dist/libs/ui/cohort-date-range/fesm2015/terminus-ui-cohort-date-range.js");
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


    var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-selection-list */
    "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @terminus/ui-date-range */
    "../../dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../option/terminus-ui-option.ngfactory */
    "../../dist/libs/ui/option/terminus-ui-option.ngfactory.js");
    /* harmony import */


    var _date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../date-range/terminus-ui-date-range.ngfactory */
    "../../dist/libs/ui/date-range/terminus-ui-date-range.ngfactory.js");
    /* harmony import */


    var _selection_list_terminus_ui_selection_list_ngfactory__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../selection-list/terminus-ui-selection-list.ngfactory */
    "../../dist/libs/ui/selection-list/terminus-ui-selection-list.ngfactory.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsCohortDateRangeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_1__["TsCohortDateRangeModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_20__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_20__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_14__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_26__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_26__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_28__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_28__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_29__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_29__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_30__["TsDateRangeModule"], _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_30__["TsDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_35__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_35__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_1__["TsCohortDateRangeModule"], _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_1__["TsCohortDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_29__["TS_DATE_FORMATS"], [])]);
    });

    var styles_TsCohortDateRangeComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-cohort-date-range{--cohort-selection-list-minWidth:200px;display:block}.ts-cohort-date-range .ts-selection-list.ts-cohort-date-range__select{display:inline-block;min-width:var(--cohort-selection-list-minWidth)}.ts-date-range.ts-cohort-date-range__date-range{display:inline-block;margin-right:24px}"];

    var RenderType_TsCohortDateRangeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsCohortDateRangeComponent,
      data: {}
    });

    function View_TsCohortDateRangeComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ts-option", [["class", "ts-option"], ["role", "option"]], [[2, "ts-selected", null], [2, "ts-option--multiple", null], [2, "ts-option--active", null], [2, "ts-option--disabled", null], [2, "ts-option--template", null], [1, "tabindex", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "title", 0], [8, "id", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selectViaInteraction() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_TsOptionComponent_0"], _option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[2, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        option: [0, "option"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit;
        var currVal_11 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_10, currVal_11);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).allowMultiple;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).active;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).optionTemplate;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabIndex;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected.toString();

        var currVal_7 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).title;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_12 = _v.context.$implicit.display;

        _ck(_v, 4, 0, currVal_12);
      });
    }

    function View_TsCohortDateRangeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        selectionListComponent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "ts-date-range", [["class", "ts-cohort-date-range__date-range ts-date-range"]], null, [[null, "dateRangeChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("dateRangeChange" === en) {
          var pd_0 = _co.cohortDateRangeChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_37__["View_TsDateRangeComponent_0"], _date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_37__["RenderType_TsDateRangeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_30__["TsDateRangeComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        dateFormGroup: [0, "dateFormGroup"],
        dateLocale: [1, "dateLocale"],
        endMaxDate: [2, "endMaxDate"],
        endMinDate: [3, "endMinDate"],
        isDisabled: [4, "isDisabled"],
        startMaxDate: [5, "startMaxDate"],
        startMinDate: [6, "startMinDate"]
      }, {
        dateRangeChange: "dateRangeChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "ts-selection-list", [["class", "ts-cohort-date-range__select ts-selection-list"], ["label", "Select a date range"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-selection-list--required", null], [2, "ts-selection-list--disabled", null], [2, "ts-selection-list--single", null], [2, "ts-selection-list--multiple", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0]], [[null, "selectionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectionChange" === en) {
          var pd_0 = _co.selectionChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _selection_list_terminus_ui_selection_list_ngfactory__WEBPACK_IMPORTED_MODULE_38__["View_TsSelectionListComponent_0"], _selection_list_terminus_ui_selection_list_ngfactory__WEBPACK_IMPORTED_MODULE_38__["RenderType_TsSelectionListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_33__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TsSelectionListComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_26__["TsFormFieldControl"], null, [_terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TsSelectionListComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 4440064, [[1, 4]], 2, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_17__["TsSelectionListComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_39__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], {
        allowUserInput: [0, "allowUserInput"],
        isDisabled: [1, "isDisabled"],
        label: [2, "label"],
        displayFormatter: [3, "displayFormatter"]
      }, {
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        optionGroups: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsCohortDateRangeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.dateRangeFormGroup;
        var currVal_1 = _co.dateLocale;
        var currVal_2 = _co.endMaxDate;
        var currVal_3 = _co.endMinDate;
        var currVal_4 = !_co.allowCustomDates || _co.isDisabled;
        var currVal_5 = _co.startMaxDate;
        var currVal_6 = _co.startMinDate;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_21 = _co.cohortControl;

        _ck(_v, 6, 0, currVal_21);

        var currVal_22 = false;
        var currVal_23 = _co.isDisabled;
        var currVal_24 = "Select a date range";
        var currVal_25 = _co.formatter;

        _ck(_v, 9, 0, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_26 = _co.cohorts;
        var currVal_27 = _co.trackByFn;

        _ck(_v, 13, 0, currVal_26, currVal_27);
      }, function (_ck, _v) {
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassUntouched;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassTouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPristine;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassDirty;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassValid;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassInvalid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPending;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).isRequired;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).isDisabled;

        var currVal_16 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).allowMultiple;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).allowMultiple;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).optionIds : null;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).isRequired.toString();

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).allowMultiple;

        _ck(_v, 3, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]);
      });
    }

    function View_TsCohortDateRangeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-cohort-date-range", [["class", "ts-cohort-date-range"]], [[2, "ts-cohort-date-range--disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [8, "id", 0]], null, null, View_TsCohortDateRangeComponent_0, RenderType_TsCohortDateRangeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_1__["TsCohortDateRangeComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    var TsCohortDateRangeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-cohort-date-range", _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_1__["TsCohortDateRangeComponent"], View_TsCohortDateRangeComponent_Host_0, {
      allowCustomDates: "allowCustomDates",
      cohorts: "cohorts",
      dateLocale: "dateLocale",
      endMaxDate: "endMaxDate",
      endMinDate: "endMinDate",
      id: "id",
      isDisabled: "isDisabled",
      startMaxDate: "startMaxDate",
      startMinDate: "startMinDate"
    }, {
      cohortDateRangeChanged: "cohortDateRangeChanged"
    }, []);
    /***/

  },

  /***/
  "./src/app/components/cohort-date-range/cohort-date-range-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/cohort-date-range/cohort-date-range-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: CohortDateRangeRoutingModule */

  /***/
  function srcAppComponentsCohortDateRangeCohortDateRangeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CohortDateRangeRoutingModule", function () {
      return CohortDateRangeRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cohort-date-range.component */
    "./src/app/components/cohort-date-range/cohort-date-range.component.ts");

    var routes = [{
      path: '',
      component: _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_1__["CohortDateRangeComponent"]
    }];

    var CohortDateRangeRoutingModule = function CohortDateRangeRoutingModule() {
      _classCallCheck(this, CohortDateRangeRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/cohort-date-range/cohort-date-range.component.ngfactory.js":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/cohort-date-range/cohort-date-range.component.ngfactory.js ***!
    \***************************************************************************************/

  /*! exports provided: RenderType_CohortDateRangeComponent, View_CohortDateRangeComponent_0, View_CohortDateRangeComponent_Host_0, CohortDateRangeComponentNgFactory */

  /***/
  function srcAppComponentsCohortDateRangeCohortDateRangeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CohortDateRangeComponent", function () {
      return RenderType_CohortDateRangeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CohortDateRangeComponent_0", function () {
      return View_CohortDateRangeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CohortDateRangeComponent_Host_0", function () {
      return View_CohortDateRangeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CohortDateRangeComponentNgFactory", function () {
      return CohortDateRangeComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */
    "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dist_libs_ui_date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/date-range/terminus-ui-date-range.ngfactory */
    "../../dist/libs/ui/date-range/terminus-ui-date-range.ngfactory.js");
    /* harmony import */


    var _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-date-range */
    "../../dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js");
    /* harmony import */


    var _dist_libs_ui_cohort_date_range_terminus_ui_cohort_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/cohort-date-range/terminus-ui-cohort-date-range.ngfactory */
    "../../dist/libs/ui/cohort-date-range/terminus-ui-cohort-date-range.ngfactory.js");
    /* harmony import */


    var _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ui-cohort-date-range */
    "../../dist/libs/ui/cohort-date-range/fesm2015/terminus-ui-cohort-date-range.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cohort-date-range.component */
    "./src/app/components/cohort-date-range/cohort-date-range.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CohortDateRangeComponent = [];

    var RenderType_CohortDateRangeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_CohortDateRangeComponent,
      data: {}
    });

    function View_CohortDateRangeComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["    Start: ", "\n    End: ", "\n  "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.lastRange.start;
        var currVal_1 = _co.lastRange.end;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_CohortDateRangeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 22, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Controls"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Start date minimum and maximum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 11, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "ts-date-range", [["class", "ts-date-range"]], null, null, null, _dist_libs_ui_date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TsDateRangeComponent_0"], _dist_libs_ui_date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TsDateRangeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 245760, null, 0, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_6__["TsDateRangeComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        dateFormGroup: [0, "dateFormGroup"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 2, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["End date minimum and maximum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "ts-date-range", [["class", "ts-date-range"]], null, null, null, _dist_libs_ui_date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TsDateRangeComponent_0"], _dist_libs_ui_date_range_terminus_ui_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TsDateRangeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 245760, null, 0, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_6__["TsDateRangeComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        dateFormGroup: [0, "dateFormGroup"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 10, "ts-card", [["class", "ts-card"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, 0, 6, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "ts-cohort-date-range", [["class", "ts-cohort-date-range"]], [[2, "ts-cohort-date-range--disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [8, "id", 0]], [[null, "cohortDateRangeChanged"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("cohortDateRangeChanged" === en) {
          var pd_0 = _co.printRange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_cohort_date_range_terminus_ui_cohort_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsCohortDateRangeComponent_0"], _dist_libs_ui_cohort_date_range_terminus_ui_cohort_date_range_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsCohortDateRangeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 245760, null, 0, _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_8__["TsCohortDateRangeComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]], {
        allowCustomDates: [0, "allowCustomDates"],
        cohorts: [1, "cohorts"],
        endMaxDate: [2, "endMaxDate"],
        endMinDate: [3, "endMinDate"],
        isDisabled: [4, "isDisabled"],
        startMaxDate: [5, "startMaxDate"],
        startMinDate: [6, "startMinDate"]
      }, {
        cohortDateRangeChanged: "cohortDateRangeChanged"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CohortDateRangeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_2 = "";

        _ck(_v, 5, 0, currVal_2);

        var currVal_3 = "";

        _ck(_v, 9, 0, currVal_3);

        var currVal_11 = _co.constraintForm;

        _ck(_v, 13, 0, currVal_11);

        var currVal_12 = _co.constraintForm.get("startDateRange");

        _ck(_v, 17, 0, currVal_12);

        var currVal_13 = "";

        _ck(_v, 19, 0, currVal_13);

        var currVal_14 = _co.constraintForm.get("endDateRange");

        _ck(_v, 22, 0, currVal_14);

        var currVal_22 = _co.myForm;

        _ck(_v, 27, 0, currVal_22);

        var currVal_27 = true;
        var currVal_28 = _co.cohorts;
        var tmp_29_0 = null;
        var tmp_29_1 = null;
        var currVal_29 = (tmp_29_0 = _co.constraintForm.get("endDateRange")) == null ? null : (tmp_29_1 = tmp_29_0.get("endDate")) == null ? null : tmp_29_1.value;
        var tmp_30_0 = null;
        var tmp_30_1 = null;
        var currVal_30 = (tmp_30_0 = _co.constraintForm.get("endDateRange")) == null ? null : (tmp_30_1 = tmp_30_0.get("startDate")) == null ? null : tmp_30_1.value;
        var currVal_31 = false;
        var tmp_32_0 = null;
        var tmp_32_1 = null;
        var currVal_32 = (tmp_32_0 = _co.constraintForm.get("startDateRange")) == null ? null : (tmp_32_1 = tmp_32_0.get("endDate")) == null ? null : tmp_32_1.value;
        var tmp_33_0 = null;
        var tmp_33_1 = null;
        var currVal_33 = (tmp_33_0 = _co.constraintForm.get("startDateRange")) == null ? null : (tmp_33_1 = tmp_33_0.get("startDate")) == null ? null : tmp_33_1.value;

        _ck(_v, 31, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

        var currVal_34 = _co.lastRange;

        _ck(_v, 33, 0, currVal_34);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).tsCardTitle;

        _ck(_v, 3, 0, currVal_1);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending;

        _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassUntouched;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassTouched;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPristine;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassDirty;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassValid;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassInvalid;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPending;

        _ck(_v, 25, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).isDisabled;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).isDisabled;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).isDisabled;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).id;

        _ck(_v, 30, 0, currVal_23, currVal_24, currVal_25, currVal_26);
      });
    }

    function View_CohortDateRangeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-cohort-date-range", [], null, null, null, View_CohortDateRangeComponent_0, RenderType_CohortDateRangeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_10__["CohortDateRangeComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]], null, null)], null, null);
    }

    var CohortDateRangeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-cohort-date-range", _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_10__["CohortDateRangeComponent"], View_CohortDateRangeComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/cohort-date-range/cohort-date-range.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/cohort-date-range/cohort-date-range.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CohortDateRangeComponent */

  /***/
  function srcAppComponentsCohortDateRangeCohortDateRangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CohortDateRangeComponent", function () {
      return CohortDateRangeComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! date-fns */
    "../../node_modules/date-fns/esm/index.js");

    var currentDate = new Date();

    var CohortDateRangeComponent = /*#__PURE__*/function () {
      function CohortDateRangeComponent(formBuilder) {
        _classCallCheck(this, CohortDateRangeComponent);

        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
          dateRange: this.formBuilder.group({
            startDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            endDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          })
        });
        this.constraintForm = this.formBuilder.group({
          startDateRange: this.formBuilder.group({
            startDate: [Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(new Date(), 120)), [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            endDate: [Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(new Date(), 1)), [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          }),
          endDateRange: this.formBuilder.group({
            startDate: [Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(new Date(), 119)), [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            endDate: [Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()), [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          })
        });
        this.cohorts = [{
          display: 'Last 90 days',
          range: {
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(new Date(), 90)),
            end: currentDate
          }
        }, {
          display: 'Last full month',
          range: {
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMonths"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(currentDate), 1)),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(currentDate), 1))
          },
          active: true
        }];
      }

      _createClass(CohortDateRangeComponent, [{
        key: "printRange",
        value: function printRange(value) {
          // console.log('DEMO: formValue: ', value);
          this.lastRange = value;
        }
      }]);

      return CohortDateRangeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/cohort-date-range/cohort-date-range.module.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/components/cohort-date-range/cohort-date-range.module.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: CohortDateRangeModuleNgFactory */

  /***/
  function srcAppComponentsCohortDateRangeCohortDateRangeModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CohortDateRangeModuleNgFactory", function () {
      return CohortDateRangeModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cohort_date_range_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cohort-date-range.module */
    "./src/app/components/cohort-date-range/cohort-date-range.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _cohort_date_range_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cohort-date-range.component.ngfactory */
    "./src/app/components/cohort-date-range/cohort-date-range.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */
    "../../node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-validators */
    "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
    /* harmony import */


    var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @terminus/ui-selection-list */
    "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cohort_date_range_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./cohort-date-range-routing.module */
    "./src/app/components/cohort-date-range/cohort-date-range-routing.module.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @terminus/ui-date-range */
    "../../dist/libs/ui/date-range/fesm2015/terminus-ui-date-range.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @terminus/ui-cohort-date-range */
    "../../dist/libs/ui/cohort-date-range/fesm2015/terminus-ui-cohort-date-range.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./cohort-date-range.component */
    "./src/app/components/cohort-date-range/cohort-date-range.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var CohortDateRangeModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_cohort_date_range_module__WEBPACK_IMPORTED_MODULE_1__["CohortDateRangeModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _cohort_date_range_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CohortDateRangeComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_17__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_17__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cohort_date_range_routing_module__WEBPACK_IMPORTED_MODULE_21__["CohortDateRangeRoutingModule"], _cohort_date_range_routing_module__WEBPACK_IMPORTED_MODULE_21__["CohortDateRangeRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_25__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_25__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_28__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_16__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_17__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_17__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_34__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_34__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_35__["TsDateRangeModule"], _terminus_ui_date_range__WEBPACK_IMPORTED_MODULE_35__["TsDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_37__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_37__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_38__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_38__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_41__["TsCohortDateRangeModule"], _terminus_ui_cohort_date_range__WEBPACK_IMPORTED_MODULE_41__["TsCohortDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_42__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_42__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _cohort_date_range_module__WEBPACK_IMPORTED_MODULE_1__["CohortDateRangeModule"], _cohort_date_range_module__WEBPACK_IMPORTED_MODULE_1__["CohortDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ROUTES"], function () {
        return [[{
          path: "",
          component: _cohort_date_range_component__WEBPACK_IMPORTED_MODULE_43__["CohortDateRangeComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_34__["TS_DATE_FORMATS"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/cohort-date-range/cohort-date-range.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/cohort-date-range/cohort-date-range.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CohortDateRangeModule */

  /***/
  function srcAppComponentsCohortDateRangeCohortDateRangeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CohortDateRangeModule", function () {
      return CohortDateRangeModule;
    });

    var CohortDateRangeModule = function CohortDateRangeModule() {
      _classCallCheck(this, CohortDateRangeModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=cohort-date-range-cohort-date-range-module-ngfactory-es5.js.map