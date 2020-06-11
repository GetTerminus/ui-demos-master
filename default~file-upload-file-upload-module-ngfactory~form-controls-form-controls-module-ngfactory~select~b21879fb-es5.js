function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~file-upload-file-upload-module-ngfactory~form-controls-form-controls-module-ngfactory~select~b21879fb"], {
  /***/
  "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js":
  /*!******************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js ***!
    \******************************************************************************************************/

  /*! exports provided: TsSlideToggleChange, TsToggleComponent, TsToggleModule */

  /***/
  function distLibsUiToggleFesm2015TerminusUiToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSlideToggleChange", function () {
      return TsSlideToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsToggleComponent", function () {
      return TsToggleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsToggleModule", function () {
      return TsToggleModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-utilities */
    "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");

    var TsToggleComponent_1;
    /**
     * Expose the MatSlideToggleChange event as TsSlideToggleChange. Used by {@link TsToggleComponent}
     */

    var TsSlideToggleChange = /*#__PURE__*/function (_angular_material_sli) {
      _inherits(TsSlideToggleChange, _angular_material_sli);

      var _super = _createSuper(TsSlideToggleChange);

      function TsSlideToggleChange() {
        _classCallCheck(this, TsSlideToggleChange);

        return _super.apply(this, arguments);
      }

      return TsSlideToggleChange;
    }(_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleChange"]);
    /**
     * The is a toggle component
     *
     * @example
     * <ts-toggle
     *              arialLabel="Disable my thing"
     *              [formControl]="yourHelperToGetFormControl('thingIsDisabled')"
     *              [isDisabled]="true"
     *              [isRequired]="true"
     *              labelPosition="before"
     *              name="My toggle"
     *              theme="accent"
     *              (selectionChange)="myMethod($event)"
     * >My Toggle!</ts-toggle>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/toggle</example-url>
     */


    var TsToggleComponent = TsToggleComponent_1 = /*#__PURE__*/function (_terminus_ui_utilitie) {
      _inherits(TsToggleComponent, _terminus_ui_utilitie);

      var _super2 = _createSuper(TsToggleComponent);

      function TsToggleComponent() {
        var _this;

        _classCallCheck(this, TsToggleComponent);

        _this = _super2.apply(this, arguments);
        _this._isChecked = false;
        /**
         * Define if the toggle should be disabled
         */

        _this.isDisabled = false;
        /**
         * Define if the toggle is required
         */

        _this.isRequired = false;
        /**
         * Define the position of the label
         */

        _this.labelPosition = 'after';
        /**
         * Define the input name for the toggle
         */

        _this.name = 'toggle';
        /**
         * Define the theme
         */

        _this.theme = 'primary';
        /**
         * Emit an event each time the toggle value changes
         */

        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        return _this;
      }
      /**
       * Allow the checked state to be set
       *
       * @param value
       */


      _createClass(TsToggleComponent, [{
        key: "isChecked",
        set: function set(value) {
          this._isChecked = value;
          this.value = this._isChecked;
        },
        get: function get() {
          return this._isChecked;
        }
      }]);

      return TsToggleComponent;
    }(_terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_5__["TsReactiveFormBaseComponent"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsToggleComponent.prototype, "ariaLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsToggleComponent.prototype, "isChecked", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsToggleComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsToggleComponent.prototype, "isRequired", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsToggleComponent.prototype, "labelPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsToggleComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsToggleComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], TsToggleComponent.prototype, "selectionChange", void 0);
    TsToggleComponent = TsToggleComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-toggle',
      template: "<mat-slide-toggle\n  class=\"c-toggle qa-toggle\"\n  [(ngModel)]=\"value\"\n  [required]=\"isRequired\"\n  [labelPosition]=\"labelPosition\"\n  [color]=\"theme\"\n  [aria-label]=\"ariaLabel\"\n  [disabled]=\"isDisabled\"\n  [name]=\"name\"\n  (change)=\"selectionChange.emit($event)\"\n>\n  <ng-content></ng-content>\n</mat-slide-toggle>\n",
      host: {
        "class": 'ts-toggle'
      },
      providers: [Object(_terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_5__["ControlValueAccessorProviderFactory"])(TsToggleComponent_1)],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsToggle',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-toggle{display:inline-block}.ts-toggle :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-toggle h1,.ts-toggle h2,.ts-toggle h3,.ts-toggle h4,.ts-toggle h5,.ts-toggle p{margin:unset}"]
    })], TsToggleComponent);

    var TsToggleModule = function TsToggleModule() {
      _classCallCheck(this, TsToggleModule);
    };

    TsToggleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]],
      exports: [TsToggleComponent],
      declarations: [TsToggleComponent]
    })], TsToggleModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-toggle.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory.js":
  /*!*******************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/toggle/terminus-ui-toggle.ngfactory.js ***!
    \*******************************************************************************************************/

  /*! exports provided: TsToggleModuleNgFactory, RenderType_TsToggleComponent, View_TsToggleComponent_0, View_TsToggleComponent_Host_0, TsToggleComponentNgFactory */

  /***/
  function distLibsUiToggleTerminusUiToggleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsToggleModuleNgFactory", function () {
      return TsToggleModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsToggleComponent", function () {
      return RenderType_TsToggleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsToggleComponent_0", function () {
      return View_TsToggleComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsToggleComponent_Host_0", function () {
      return View_TsToggleComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsToggleComponentNgFactory", function () {
      return TsToggleComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _node_modules_angular_material_slide_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/slide-toggle/index.ngfactory */
    "../../node_modules/@angular/material/slide-toggle/index.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsToggleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__["TsToggleModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__["TsToggleModule"], _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__["TsToggleModule"], [])]);
    });

    var styles_TsToggleComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-toggle{display:inline-block}.ts-toggle :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-toggle h1,.ts-toggle h2,.ts-toggle h3,.ts-toggle h4,.ts-toggle h5,.ts-toggle p{margin:unset}"];

    var RenderType_TsToggleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsToggleComponent,
      data: {}
    });

    function View_TsToggleComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, "mat-slide-toggle", [["class", "c-toggle qa-toggle mat-slide-toggle"]], [[1, "required", 0], [8, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.value = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("change" === en) {
          var pd_1 = _co.selectionChange.emit($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_slide_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatSlideToggle_0"], _node_modules_angular_material_slide_toggle_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatSlideToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleRequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleRequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]]], {
        disabled: [0, "disabled"],
        color: [1, "color"],
        name: [2, "name"],
        labelPosition: [3, "labelPosition"],
        ariaLabel: [4, "ariaLabel"],
        required: [5, "required"]
      }, {
        change: "change"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        isDisabled: [1, "isDisabled"],
        model: [2, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](0, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_16 = _co.isRequired;

        _ck(_v, 1, 0, currVal_16);

        var currVal_17 = _co.isRequired;

        _ck(_v, 2, 0, currVal_17);

        var currVal_18 = _co.isDisabled;
        var currVal_19 = _co.theme;
        var currVal_20 = _co.name;
        var currVal_21 = _co.labelPosition;
        var currVal_22 = _co.ariaLabel;
        var currVal_23 = _co.isRequired;

        _ck(_v, 4, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_24 = _co.name;
        var currVal_25 = _co.isDisabled;
        var currVal_26 = _co.value;

        _ck(_v, 6, 0, currVal_24, currVal_25, currVal_26);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).required ? "" : null;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).id;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).disabled ? null : 0 - 1;
        var currVal_3 = null;
        var currVal_4 = null;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).checked;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).disabled;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).labelPosition == "before";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPending;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]);
      });
    }

    function View_TsToggleComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-toggle", [["class", "ts-toggle"]], null, null, null, View_TsToggleComponent_0, RenderType_TsToggleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__["TsToggleComponent"], [], null, null)], null, null);
    }

    var TsToggleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-toggle", _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_1__["TsToggleComponent"], View_TsToggleComponent_Host_0, {
      formControl: "formControl",
      ariaLabel: "ariaLabel",
      isChecked: "isChecked",
      isDisabled: "isDisabled",
      isRequired: "isRequired",
      labelPosition: "labelPosition",
      name: "name",
      theme: "theme"
    }, {
      selectionChange: "selectionChange"
    }, ["*"]);
    /***/

  },

  /***/
  "../../node_modules/@angular/material/fesm2015/slide-toggle.js":
  /*!***********************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/material/fesm2015/slide-toggle.js ***!
    \***********************************************************************************************************/

  /*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */

  /***/
  function node_modulesAngularMaterialFesm2015SlideToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function () {
      return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function () {
      return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function () {
      return MatSlideToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function () {
      return MatSlideToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function () {
      return MatSlideToggleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function () {
      return MatSlideToggleRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function () {
      return _MatSlideToggleRequiredValidatorModule;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default `mat-slide-toggle` options that can be overridden.
     * @record
     */


    function MatSlideToggleDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-slide-toggle`.
     * @type {?}
     */


    var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return {
          disableToggleValue: false
        };
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids for slide-toggle components.

    /** @type {?} */

    var nextUniqueId = 0;
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggle;
      }),
      multi: true
    };
    /**
     * Change event object emitted by a MatSlideToggle.
     */

    var MatSlideToggleChange =
    /**
     * @param {?} source
     * @param {?} checked
     */
    function MatSlideToggleChange(source, checked) {
      _classCallCheck(this, MatSlideToggleChange);

      this.source = source;
      this.checked = checked;
    };

    if (false) {} // Boilerplate for applying mixins to MatSlideToggle.

    /**
     * \@docs-private
     */


    var MatSlideToggleBase =
    /**
     * @param {?} _elementRef
     */
    function MatSlideToggleBase(_elementRef) {
      _classCallCheck(this, MatSlideToggleBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
    /**
     * Represents a slidable "switch" toggle that can be moved between on and off.
     */


    var MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleMixinB) {
      _inherits(MatSlideToggle, _MatSlideToggleMixinB);

      var _super3 = _createSuper(MatSlideToggle);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} tabIndex
       * @param {?} _ngZone
       * @param {?} defaults
       * @param {?=} _animationMode
       * @param {?=} _dir
       */
      function MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex,
      /**
       * @deprecated `_ngZone` and `_dir` parameters to be removed.
       * @breaking-change 10.0.0
       */
      _ngZone, defaults, _animationMode, _dir) {
        var _this2;

        _classCallCheck(this, MatSlideToggle);

        _this2 = _super3.call(this, elementRef);
        _this2._focusMonitor = _focusMonitor;
        _this2._changeDetectorRef = _changeDetectorRef;
        _this2.defaults = defaults;
        _this2._animationMode = _animationMode;

        _this2._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        _this2._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this2._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
        _this2._required = false;
        _this2._checked = false;
        /**
         * Name value will be applied to the input element if present.
         */

        _this2.name = null;
        /**
         * A unique id for the slide-toggle input. If none is supplied, it will be auto-generated.
         */

        _this2.id = _this2._uniqueId;
        /**
         * Whether the label should appear after or before the slide-toggle. Defaults to 'after'.
         */

        _this2.labelPosition = 'after';
        /**
         * Used to set the aria-label attribute on the underlying input element.
         */

        _this2.ariaLabel = null;
        /**
         * Used to set the aria-labelledby attribute on the underlying input element.
         */

        _this2.ariaLabelledby = null;
        /**
         * An event will be dispatched each time the slide-toggle changes its value.
         */

        _this2.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */

        _this2.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle is dragged.
         * This event is always emitted when the user drags the slide toggle to make a change greater
         * than 50%. It does not mean the slide toggle's value is changed. The event is not emitted when
         * the user toggles the slide toggle to change its value.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         */

        _this2.dragChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this2.tabIndex = parseInt(tabIndex) || 0;
        return _this2;
      }
      /**
       * Whether the slide-toggle is required.
       * @return {?}
       */


      _createClass(MatSlideToggle, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this3 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
              _this3._inputElement.nativeElement.focus();
            } else if (!focusOrigin) {
              // When a focused element becomes disabled, the browser *immediately* fires a blur event.
              // Angular does not expect events to be raised during change detection, so any state
              // change (such as a form control's 'ng-touched') will cause a changed-after-checked
              // error. See https://github.com/angular/angular/issues/17793. To work around this,
              // we defer telling the form control it has been touched until the next tick.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this3._onTouched();
              });
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Method being called whenever the underlying input emits a change event.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onChangeEvent",
        value: function _onChangeEvent(event) {
          // We always have to stop propagation on the change event.
          // Otherwise the change event, from the input element, will bubble up and
          // emit its event object to the component's `change` output.
          event.stopPropagation();
          this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
          // `disableToggleValue: true`, the slide toggle's value does not change, and the
          // checked state of the underlying input needs to be changed back.

          if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
          } // Sync the value from the underlying input element with the component instance.


          this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
          // there is no change event, when the checked state changes programmatically.

          this._emitChangeEvent();
        }
        /**
         * Method being called whenever the slide-toggle has been clicked.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInputClick",
        value: function _onInputClick(event) {
          // We have to stop propagation for click events on the visual hidden input element.
          // By default, when a user clicks on a label element, a generated click event will be
          // dispatched on the associated input element. Since we are using a label element as our
          // root container, the click event on the `slide-toggle` will be executed twice.
          // The real click event will bubble up, and the generated click event also tries to bubble up.
          // This will lead to multiple click events.
          // Preventing bubbling for the second event will solve that issue.
          event.stopPropagation();
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = !!value;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the slide-toggle.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
        }
        /**
         * Toggles the checked state of the slide-toggle.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.checked = !this.checked;

          this._onChange(this.checked);
        }
        /**
         * Emits a change event on the `change` output. Also notifies the FormControl about the change.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._onChange(this.checked);

          this.change.emit(new MatSlideToggleChange(this, this.checked));
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */

      }, {
        key: "_onLabelTextChange",
        value: function _onLabelTextChange() {
          // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
          // slide-toggle component will be only marked for check, but no actual change detection runs
          // automatically. Instead of going back into the zone in order to trigger a change detection
          // which causes *all* components to be checked (if explicitly marked or not using OnPush),
          // we only trigger an explicit change detection for the slide-toggle view and its children.
          this._changeDetectorRef.detectChanges();
        }
      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the slide-toggle element is checked or not.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */

      }, {
        key: "inputId",
        get: function get() {
          return "".concat(this.id || this._uniqueId, "-input");
        }
      }]);

      return MatSlideToggle;
    }(_MatSlideToggleMixinBase);

    MatSlideToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-slide-toggle',
        exportAs: 'matSlideToggle',
        host: {
          'class': 'mat-slide-toggle',
          '[id]': 'id',
          // Needs to be `-1` so it can still receive programmatic focus.
          '[attr.tabindex]': 'disabled ? null : -1',
          '[attr.aria-label]': 'null',
          '[attr.aria-labelledby]': 'null',
          '[class.mat-checked]': 'checked',
          '[class.mat-disabled]': 'disabled',
          '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
          '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
        },
        template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
        providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
        inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
      }]
    }];
    /** @nocollapse */

    MatSlideToggle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSlideToggle.propDecorators = {
      _thumbEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['thumbContainer']
      }],
      _thumbBarEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['toggleBar']
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-labelledby']
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      toggleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      dragChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['input']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-required-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlideToggleRequiredValidator;
      }),
      multi: true
    };
    /**
     * Validator for Material slide-toggle components with the required attribute in a
     * template-driven form. The default validator for required form controls asserts
     * that the control value is not undefined but that is not appropriate for a slide-toggle
     * where the value is always defined.
     *
     * Required slide-toggle form controls are valid when checked.
     */

    var MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
      _inherits(MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

      var _super4 = _createSuper(MatSlideToggleRequiredValidator);

      function MatSlideToggleRequiredValidator() {
        _classCallCheck(this, MatSlideToggleRequiredValidator);

        return _super4.apply(this, arguments);
      }

      return MatSlideToggleRequiredValidator;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"]);

    MatSlideToggleRequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
        providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/slide-toggle-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This module is used by both original and MDC-based slide-toggle implementations.
     */
    // tslint:disable-next-line:class-name

    var _MatSlideToggleRequiredValidatorModule = function _MatSlideToggleRequiredValidatorModule() {
      _classCallCheck(this, _MatSlideToggleRequiredValidatorModule);
    };

    _MatSlideToggleRequiredValidatorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [MatSlideToggleRequiredValidator],
        declarations: [MatSlideToggleRequiredValidator]
      }]
    }];

    var MatSlideToggleModule = function MatSlideToggleModule() {
      _classCallCheck(this, MatSlideToggleModule);
    };

    MatSlideToggleModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
        exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        declarations: [MatSlideToggle]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/slide-toggle/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=slide-toggle.js.map

    /***/
  },

  /***/
  "../../node_modules/@angular/material/slide-toggle/index.ngfactory.js":
  /*!******************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/material/slide-toggle/index.ngfactory.js ***!
    \******************************************************************************************************************/

  /*! exports provided: _MatSlideToggleRequiredValidatorModuleNgFactory, MatSlideToggleModuleNgFactory, RenderType_MatSlideToggle, View_MatSlideToggle_0, View_MatSlideToggle_Host_0, MatSlideToggleNgFactory */

  /***/
  function node_modulesAngularMaterialSlideToggleIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModuleNgFactory", function () {
      return _MatSlideToggleRequiredValidatorModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleModuleNgFactory", function () {
      return MatSlideToggleModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatSlideToggle", function () {
      return RenderType_MatSlideToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSlideToggle_0", function () {
      return View_MatSlideToggle_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSlideToggle_Host_0", function () {
      return View_MatSlideToggle_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlideToggleNgFactory", function () {
      return MatSlideToggleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var _MatSlideToggleRequiredValidatorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], [])]);
    });

    var MatSlideToggleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], [])]);
    });

    var styles_MatSlideToggle = [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"];

    var RenderType_MatSlideToggle = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatSlideToggle,
      data: {}
    });

    function View_MatSlideToggle_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        _thumbEl: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        _thumbBarEl: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, {
        _inputElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, [["label", 1]], null, 13, "label", [["class", "mat-slide-toggle-label"]], [[1, "for", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [[2, 0], ["toggleBar", 1]], null, 7, "div", [["class", "mat-slide-toggle-bar"]], [[2, "mat-slide-toggle-bar-no-side-margin", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[3, 0], ["input", 1]], null, 0, "input", [["class", "mat-slide-toggle-input cdk-visually-hidden"], ["role", "switch"], ["type", "checkbox"]], [[8, "id", 0], [8, "required", 0], [8, "tabIndex", 0], [8, "checked", 0], [8, "disabled", 0], [1, "name", 0], [1, "aria-checked", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0]], [[null, "change"], [null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co._onChangeEvent($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co._onInputClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, [[1, 0], ["thumbContainer", 1]], null, 5, "div", [["class", "mat-slide-toggle-thumb-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "div", [["class", "mat-slide-toggle-thumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 3, "div", [["class", "mat-slide-toggle-ripple mat-focus-indicator mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
        centered: [0, "centered"],
        radius: [1, "radius"],
        animation: [2, "animation"],
        disabled: [3, "disabled"],
        trigger: [4, "trigger"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](10, {
        enterDuration: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "div", [["class", "mat-ripple-element mat-slide-toggle-persistent-ripple"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, [["labelContent", 1]], null, 4, "span", [["class", "mat-slide-toggle-content"]], null, [[null, "cdkObserveContent"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("cdkObserveContent" === en) {
          var pd_0 = _co._onLabelTextChange() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 1196032, null, 0, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["CdkObserveContent"], [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ContentObserver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, {
        event: "cdkObserveContent"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "span", [["style", "display:none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\xA0"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_12 = true;
        var currVal_13 = 20;

        var currVal_14 = _ck(_v, 10, 0, 150);

        var currVal_15 = _co.disableRipple || _co.disabled;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3);

        _ck(_v, 9, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.inputId;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).textContent || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).textContent.trim();

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.inputId;
        var currVal_3 = _co.required;
        var currVal_4 = _co.tabIndex;
        var currVal_5 = _co.checked;
        var currVal_6 = _co.disabled;
        var currVal_7 = _co.name;

        var currVal_8 = _co.checked.toString();

        var currVal_9 = _co.ariaLabel;
        var currVal_10 = _co.ariaLabelledby;

        _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).unbounded;

        _ck(_v, 8, 0, currVal_11);
      });
    }

    function View_MatSlideToggle_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-slide-toggle", [["class", "mat-slide-toggle"]], [[8, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null]], null, null, View_MatSlideToggle_0, RenderType_MatSlideToggle)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled ? null : 0 - 1;
        var currVal_2 = null;
        var currVal_3 = null;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).checked;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).labelPosition == "before";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
      });
    }

    var MatSlideToggleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-slide-toggle", _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"], View_MatSlideToggle_Host_0, {
      disabled: "disabled",
      disableRipple: "disableRipple",
      color: "color",
      tabIndex: "tabIndex",
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: "aria-label",
      ariaLabelledby: "aria-labelledby",
      required: "required",
      checked: "checked"
    }, {
      change: "change",
      toggleChange: "toggleChange",
      dragChange: "dragChange"
    }, ["*"]);
    /***/

  }
}]);
//# sourceMappingURL=default~file-upload-file-upload-module-ngfactory~form-controls-form-controls-module-ngfactory~select~b21879fb-es5.js.map