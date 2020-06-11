function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autocomplete-autocomplete-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/autocomplete/fesm2015/terminus-ui-autocomplete.js":
  /*!******************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/autocomplete/fesm2015/terminus-ui-autocomplete.js ***!
    \******************************************************************************************************************/

  /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, TS_AUTOCOMPLETE_SCROLL_STRATEGY, TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, TsAutocompleteChange, TsAutocompleteComponent, TsAutocompleteModule, TsAutocompletePanelComponent, TsAutocompletePanelSelectedEvent, TsAutocompleteSelectedEvent, TsAutocompleteTriggerDirective */

  /***/
  function distLibsUiAutocompleteFesm2015TerminusUiAutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return AUTOCOMPLETE_OPTION_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return AUTOCOMPLETE_PANEL_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return TS_AUTOCOMPLETE_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteChange", function () {
      return TsAutocompleteChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteComponent", function () {
      return TsAutocompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteModule", function () {
      return TsAutocompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompletePanelComponent", function () {
      return TsAutocompletePanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompletePanelSelectedEvent", function () {
      return TsAutocompletePanelSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteSelectedEvent", function () {
      return TsAutocompleteSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteTriggerDirective", function () {
      return TsAutocompleteTriggerDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @terminus/ngx-tools/coercion */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
    /* harmony import */


    var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @terminus/ngx-tools/keycodes */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /* harmony import */


    var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-utilities */
    "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "../../node_modules/@angular/material/fesm2015/autocomplete.js");
    /* harmony import */


    var _terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ngx-tools/type-guards */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-type-guards.js");

    var TsAutocompletePanelComponent_1;
    /**
     * Event object that is emitted when an autocomplete option is selected
     */

    var TsAutocompletePanelSelectedEvent = function TsAutocompletePanelSelectedEvent( // Reference to the autocomplete panel that emitted the event
    // eslint-disable-next-line deprecation/deprecation
    source, // The option that was selected
    option) {
      _classCallCheck(this, TsAutocompletePanelSelectedEvent);

      this.source = source;
      this.option = option;
    }; // Unique ID for each instance


    var nextUniqueId = 0;
    /**
     * The panel used to display autocomplete options when {@link TsOptionComponent} is in autocomplete mode.
     *
     * @deprecated Please use `TsSelectionListPanel`
     *
     * @example
     * <ts-autocomplete-panel
     *              [options]="myOptionsQueryList"
     *              [optionGroups]="myOptionGroupsQueryList"
     *              (optionsSelected)="doSomething($event)"
     * ></ts-autocomplete-panel>
     */

    var TsAutocompletePanelComponent = TsAutocompletePanelComponent_1 = /*#__PURE__*/function () {
      function TsAutocompletePanelComponent(changeDetectorRef, elementRef) {
        _classCallCheck(this, TsAutocompletePanelComponent);

        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        /**
         * Whether the autocomplete panel should be visible
         */

        this.showPanel = false;
        /**
         * Define the default component ID
         */

        this.uid = "ts-select-autocomplete-".concat(nextUniqueId++);
        /**
         * Whether the autocomplete panel is open
         */

        this.isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger
         */

        this.displayWith = null;
        this._id = this.uid;
        /**
         * Event that is emitted whenever an option from the list is selected
         */

        this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }
      /**
       * Define an ID for the component
       *
       * @param value
       */


      _createClass(TsAutocompletePanelComponent, [{
        key: "ngAfterContentInit",

        /**
         * Set up
         */
        value: function ngAfterContentInit() {
          this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["ActiveDescendantKeyManager"](this.options).withWrap(); // Set the initial visibility state.

          this.setVisibility();
        }
        /**
         * Emit the `select` event
         *
         * @param option
         */

      }, {
        key: "emitSelectEvent",
        value: function emitSelectEvent(option) {
          var event = new TsAutocompletePanelSelectedEvent(this, option);
          this.optionSelected.emit(event);
        }
        /**
         * Return the panel's scrollTop
         *
         * @returns The scrolltop number
         */

      }, {
        key: "getScrollTop",
        value: function getScrollTop() {
          return this.panel ? this.panel.nativeElement.scrollTop : 0;
        }
        /**
         * Set the panel scrollTop.
         *
         * This allows us to manually scroll to display options above or below the fold, as they are not actually being focused when active.
         *
         * @param scrollTop - The number of pixels to move
         */

      }, {
        key: "setScrollTop",
        value: function setScrollTop(scrollTop) {
          // istanbul ignore else
          if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
          }
        }
        /**
         * Set the visibility of the panel based on whether options exist
         */

      }, {
        key: "setVisibility",
        value: function setVisibility() {
          this.showPanel = !!this.options.length;
          this.changeDetectorRef.markForCheck();
        }
      }, {
        key: "id",
        set: function set(value) {
          // Note: this ID is being set internally by `TsSelectComponent` so no fallback is needed.
          this._id = value;
        },
        get: function get() {
          return this._id;
        }
      }]);

      return TsAutocompletePanelComponent;
    }();

    TsAutocompletePanelComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], TsAutocompletePanelComponent.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('panel', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])], TsAutocompletePanelComponent.prototype, "panel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TsAutocompletePanelComponent.prototype, "displayWith", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsAutocompletePanelComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], TsAutocompletePanelComponent.prototype, "optionGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], TsAutocompletePanelComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompletePanelComponent.prototype, "optionSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompletePanelComponent.prototype, "opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompletePanelComponent.prototype, "closed", void 0);
    TsAutocompletePanelComponent = TsAutocompletePanelComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ts-autocomplete-panel',
      template: "<ng-template>\n  <div\n    class=\"ts-autocomplete-panel__inner\"\n    [class.ts-autocomplete-visible]=\"showPanel\"\n    role=\"listbox\"\n    [attr.id]=\"id\"\n    #panel\n  >\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      host: {
        "class": 'ts-autocomplete-panel qa-autocomplete-panel'
      },
      providers: [{
        provide: _terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["TS_OPTION_PARENT_COMPONENT"],
        // eslint-disable-next-line deprecation/deprecation
        useExisting: TsAutocompletePanelComponent_1
      }],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      exportAs: 'tsAutocompletePanel',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-autocomplete-panel__inner{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fafafa;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#302d35;max-height:256px;max-width:none;min-width:112px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative;visibility:hidden;width:100%}@media screen and (-ms-high-contrast:active){.ts-autocomplete-panel__inner{outline:solid 1px}}.ts-autocomplete-panel__inner .ts-option.ts-option--selected:not(.ts-active):not(:hover){background:#1777b6}.ts-autocomplete-panel__inner .ts-option:not(.ts-option--template){font-size:inherit;height:3em;line-height:3em}.ts-autocomplete-panel__inner.ts-autocomplete-visible{visibility:visible}.ts-autocomplete-panel__inner.ts-autocomplete-hidden{visibility:hidden}.ts-autocomplete-panel-above .ts-autocomplete-panel__inner{border-radius:4px 4px 0 0}.ts-autocomplete-panel__inner .ts-divider-horizontal{margin-top:-1px}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], TsAutocompletePanelComponent);
    var TsAutocompleteTriggerDirective_1;
    /**
     * The following style constants are necessary to save here in order to properly calculate the scrollTop of the panel.
     * Because we are not actually focusing the active item, scroll must be handled manually.
     */
    // The height of each autocomplete option.

    var AUTOCOMPLETE_OPTION_HEIGHT = 48; // The total height of the autocomplete panel

    var AUTOCOMPLETE_PANEL_HEIGHT = 256; // Injection token that determines the scroll handling while the autocomplete panel is open

    var TS_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-autocomplete-scroll-strategy');
    /**
     * Define a scroll strategy factory
     *
     * @param overlay
     */

    var TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY = function TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
      return function () {
        return overlay.scrollStrategies.reposition();
      };
    };

    var TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: TS_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
      useFactory: TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    }; // Unique ID for each instance

    var nextUniqueId$1 = 0;
    /**
     * A directive that adds autocomplete trigger functionality to an input. Used in {@link TsSelectComponent}.
     *
     * @deprecated Please use `TsSelectionListTrigger`
     *
     * @example
     * <ts-input
     *              [tsAutocompleteTrigger]="myReferenceToAutocompletePanel"
     *              [tsAutocompleteDisabled]="false"
     *              autocomplete="off"
     *              [reopenAfterSelection]="false"
     * ></ts-input>
     */

    var TsAutocompleteTriggerDirective = TsAutocompleteTriggerDirective_1 = /*#__PURE__*/function () {
      function TsAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, ngZone, changeDetectorRef, documentService, viewportRuler, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      scrollStrategy, formField) {
        var _this = this;

        _classCallCheck(this, TsAutocompleteTriggerDirective);

        this.elementRef = elementRef;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.documentService = documentService;
        this.viewportRuler = viewportRuler;
        this.formField = formField;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused, closed autocomplete from being reopened if
         * the user switches to another browser tab and then comes back.
         */

        this.canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel
         */

        this.closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        /*
         * Note: In some cases `openPanel` can end up being called after the component is destroyed. This flag is to ensure that we don't try to
         * run change detection on a destroyed view.
         */

        this.componentDestroyed = false;
        /**
         * Whether or not the label state is being overridden
         */

        this.manuallyFloatingLabel = false;
        /**
         * Stream of autocomplete option selections
         */

        this.optionSelections = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["defer"])(function () {
          if (_this.autocompletePanel && _this.autocompletePanel.options) {
            // eslint-disable-next-line deprecation/deprecation
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"]).apply(void 0, _toConsumableArray(_this.autocompletePanel.options.map(function (option) {
              return option.selectionChange;
            })));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // In that case, return a stream that we'll replace with the real one once everything is in place.


          return _this.ngZone.onStable.asObservable() // TODO: Refactor deprecation
          // eslint-disable-next-line deprecation/deprecation
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
            return _this.optionSelections;
          }));
        });
        /**
         * Store whether the overlay is currently attached
         */

        this.overlayAttached = false;
        /**
         * Subscription to viewport size changes
         */

        this.viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_18__["Subscription"].EMPTY;
        /**
         * Define the default component ID
         */

        this.uid = "ts-autocomplete-trigger-".concat(nextUniqueId$1++);
        /**
         * The `autocomplete` attribute to be set on the input element.
         *
         * NOTE: Input has specific naming since it is accepting a standard HTML data attribute.
         */
        // eslint-disable-next-line @angular-eslint/no-input-rename

        this.autocompleteAttribute = 'off';
        this._autocompleteDisabled = false;
        this._reopenAfterSelection = false;
        /**
         * View -> model callback called when value changes
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.onChange = function () {};
        /**
         * View -> model callback called when autocomplete has been touched
         */


        this.onTouched = function () {};
        /**
         * Event handler for when the window is blurred.
         *
         * Needs to be an arrow function in order to preserve the context.
         */


        this.windowBlurHandler = function () {
          // If the user blurred the window while the autocomplete is focused, it means that it'll be
          // refocused when they come back. In this case we want to skip the first focus event, if the
          // pane was closed, in order to avoid reopening it unintentionally.
          _this.canOpenOnNextFocus = _this.document.activeElement !== _this.elementRef.nativeElement || _this.panelOpen;
        };

        if (typeof window !== 'undefined') {
          ngZone.runOutsideAngular(function () {
            window.addEventListener('blur', _this.windowBlurHandler);
          });
        }

        this.scrollStrategy = scrollStrategy;
        this.document = this.documentService.document;
      }
      /**
       * The currently active option, coerced to TsOptionComponent type
       */


      _createClass(TsAutocompleteTriggerDirective, [{
        key: "ngOnDestroy",

        /**
         * Clean up subscriptions and destroy the panel
         */
        value: function ngOnDestroy() {
          if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this.windowBlurHandler);
          }

          this.viewportSubscription.unsubscribe();
          this.componentDestroyed = true;
          this.destroyPanel();
          this.closeKeyEventStream.complete();
        }
        /**
         * Close the autocomplete suggestion panel
         *
         * @param overrideReopenFlag - Whether the panel should reopen
         */

      }, {
        key: "closePanel",
        value: function closePanel(overrideReopenFlag) {
          this.resetLabel();

          if (!this.overlayAttached) {
            return;
          }

          if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocompletePanel.closed.emit();
          }

          this.autocompletePanel.isOpen = this.overlayAttached = false;

          if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.closingActionsSubscription.unsubscribe();
          } // Note that in some cases this can end up being called after the component is destroyed.
          // Add a check to ensure that we don't try to run change detection on a destroyed view.


          if (!this.componentDestroyed) {
            // We need to trigger change detection manually, because `fromEvent` doesn't seem to do it at the proper time.  This ensures that the
            // label is reset when the user clicks outside.
            this.changeDetectorRef.detectChanges();
          }

          if (this.reopenAfterSelection && !overrideReopenFlag) {
            this.openPanel();
          } else {
            // If the panel isn't reopened immediately, we must re-subscribe to the closing actions
            this.closingActionsSubscription = this.subscribeToClosingActions();
          }
        }
        /**
         * Handle the focus event
         */

      }, {
        key: "handleFocus",
        value: function handleFocus() {
          if (!this.canOpenOnNextFocus) {
            this.canOpenOnNextFocus = true;
          } else if (this.canOpen()) {
            this.previousValue = this.elementRef.nativeElement.value;
            this.attachOverlay();
            this.floatLabel(true);
          }
        }
        /**
         * Handle input into the autocomplete trigger
         *
         * @param event - The keyboard event
         */

      }, {
        key: "handleInput",
        value: function handleInput(event) {
          var target = event.target;
          var value = target.value; // Based on `NumberValueAccessor` from forms

          if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
          } // If the input has a placeholder, IE will fire the `input` event on page load, focus and blur, in addition to when the user actually
          // changed the value. To filter out all of the extra events, we save the value on focus and between `input` events, and we check
          // whether it changed. See: https://connect.microsoft.com/IE/feedback/details/885747/


          if (this.previousValue !== value && this.document.activeElement === event.target) {
            this.previousValue = value;
            this.onChange(value);

            if (this.canOpen()) {
              this.openPanel();
            }
          }
        }
        /**
         * Handle keydown events
         *
         * @param event - The keyboard event
         */

      }, {
        key: "handleKeydown",
        value: function handleKeydown(event) {
          var keyCode = event.code; // Prevent the default action on all escape key presses. This is here primarily to bring IE in line with other browsers. By default,
          // pressing escape on IE will cause it to revert the input value to the one that it had on focus, however it won't dispatch any events
          // which means that the model value will be out of sync with the view.

          if (keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].ESCAPE.code) {
            event.preventDefault();
          }

          if (this.activeOption && keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].ENTER.code && this.panelOpen) {
            this.activeOption.selectViaInteraction();
            this.resetActiveItem();
            event.preventDefault();
          } else if (this.autocompletePanel) {
            var prevActiveItem = this.autocompletePanel.keyManager.activeItem;
            var isArrowKey = keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].UP_ARROW.code || keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].DOWN_ARROW.code;

            if (this.panelOpen || keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].TAB.code) {
              this.autocompletePanel.keyManager.onKeydown(event);
            } else if (isArrowKey && this.canOpen()) {
              this.openPanel();
            }

            if (isArrowKey || this.autocompletePanel.keyManager.activeItem !== prevActiveItem) {
              this.scrollToOption();
            }
          }
        }
        /**
         * Open the autocomplete suggestion panel
         * Subscribe to click event stream and if two conditions described below met,
         * close the panel.
         */

      }, {
        key: "openPanel",
        value: function openPanel() {
          this.attachOverlay();
          this.floatLabel();
        }
        /**
         * Register the onChange function
         *
         * NOTE: Implemented as part of ControlValueAccessor
         *
         * @param fn - The new onChange function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * Register the onTouched function
         *
         * NOTE: Implemented as part of ControlValueAccessor
         *
         * @param fn - The new onTouched function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Set the disabled state
         *
         * NOTE: Implemented as part of ControlValueAccessor
         *
         * @param isDisabled - Whether the element should be set to disabled
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.elementRef.nativeElement.disabled = isDisabled;
        }
        /**
         * Function used to write the value by the model
         *
         * NOTE: Implemented as part of ControlValueAccessor
         *
         * @param value - The value to write
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this2 = this;

          Promise.resolve(null).then(function () {
            return _this2.setTriggerValue(value);
          });
        }
        /**
         * Attach the overlay
         */

      }, {
        key: "attachOverlay",
        value: function attachOverlay() {
          var _this3 = this;

          if (!this.autocompletePanel && Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
            throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_24__["TsUILibraryError"]('TsAutocompleteTriggerDirective: Attempting to open an undefined instance of `ts-autocomplete-panel`.');
          }

          if (this.overlayRef) {
            // Update the panel width in case anything has changed
            this.overlayRef.updateSize({
              width: this.getPanelWidth()
            });
          } else {
            this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_17__["TemplatePortal"](this.autocompletePanel.template, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig()); // Use the `keydownEvents` in order to take advantage of the overlay event targeting provided by the CDK overlay.

            this.overlayRef.keydownEvents().subscribe(function (event) {
              // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
              // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
              if (event.code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].ESCAPE.code || event.code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].UP_ARROW.code && event.altKey) {
                _this3.resetActiveItem();

                _this3.closeKeyEventStream.next();
              }
            });
            this.viewportSubscription = this.viewportRuler.change().subscribe(function () {
              if (_this3.panelOpen && _this3.overlayRef) {
                _this3.overlayRef.updateSize({
                  width: _this3.getPanelWidth()
                });
              }
            });
          }

          if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.closingActionsSubscription = this.subscribeToClosingActions();
          }

          var wasOpen = this.panelOpen;
          this.autocompletePanel.setVisibility();
          this.autocompletePanel.isOpen = this.overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
          // autocomplete won't be shown if there are no options.

          if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocompletePanel.opened.emit();
          }
        }
        /**
         * Determine whether the panel can be opened
         */

      }, {
        key: "canOpen",
        value: function canOpen() {
          var element = this.elementRef.nativeElement;
          return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
        }
        /**
         * Clear any previous selected option and emit a selection change event for this option
         *
         * @param skip
         */

      }, {
        key: "clearPreviousSelectedOption",
        value: function clearPreviousSelectedOption(skip) {
          this.autocompletePanel.options.forEach(function (option) {
            // istanbul ignore else
            // NOTE: Loose check (`!=`) needed for comparing classes
            // eslint-disable-next-line eqeqeq
            if (option != skip && option.selected) {
              option.deselect();
            }
          });
        }
        /**
         * Destroy the autocomplete suggestion panel
         */

      }, {
        key: "destroyPanel",
        value: function destroyPanel() {
          // istanbul ignore else
          if (this.overlayRef) {
            this.closePanel();
            this.overlayRef.dispose();
            this.overlayRef = null;
          }
        }
        /**
         * In 'auto' mode, the label will animate down as soon as focus is lost.  This causes the value to jump when selecting an option with the
         * mouse. This method manually floats the label until the panel can be closed.
         *
         * @param shouldAnimate - Whether the label should be animated when it is floated
         */

      }, {
        key: "floatLabel",
        value: function floatLabel() {
          var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.formField && this.formField.floatLabel === 'auto') {
            if (shouldAnimate) {
              this.formField.animateAndLockLabel();
            } else {
              this.formField.floatLabel = 'always';
            }

            this.manuallyFloatingLabel = true;
          }
        }
        /**
         * Return the connected element
         *
         * @returns The ElementRef
         */

      }, {
        key: "getConnectedElement",
        value: function getConnectedElement() {
          return this.formField ? this.formField.getConnectedOverlayOrigin() : this.elementRef;
        }
        /**
         * Returns the width of the input element, so the panel width can match it
         */

      }, {
        key: "getHostWidth",
        value: function getHostWidth() {
          return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        /**
         * Create a config for an overlay
         *
         * @returns The overlay config
         */

      }, {
        key: "getOverlayConfig",
        value: function getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            backdropClass: 'ts-autocomplete__backdrop',
            direction: 'ltr',
            hasBackdrop: true,
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.scrollStrategy(),
            width: this.getPanelWidth()
          });
        }
        /**
         * Get the overlay position strategy
         *
         * @returns The position strategy
         */

      }, {
        key: "getOverlayPosition",
        value: function getOverlayPosition() {
          this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }]);
          return this.positionStrategy;
        }
        /**
         * Return the panel width
         *
         * @returns The width
         */

      }, {
        key: "getPanelWidth",
        value: function getPanelWidth() {
          return this.getHostWidth();
        }
        /**
         * Resets the active item to -1 so arrow events will activate the correct options, or to 0 if the consumer opted into it
         */

      }, {
        key: "resetActiveItem",
        value: function resetActiveItem() {
          this.autocompletePanel.keyManager.setActiveItem(-1);
        }
        /**
         * If the label has been manually elevated, return it to its normal state
         */

      }, {
        key: "resetLabel",
        value: function resetLabel() {
          // istanbul ignore else
          if (this.manuallyFloatingLabel) {
            this.formField.floatLabel = 'auto';
            this.manuallyFloatingLabel = false;
          }
        }
        /**
         * Scroll to an option
         *
         * Given that we are not actually focusing active options, we must manually adjust scroll to reveal options below the fold. First, we find
         * the offset of the option from the top of the panel. If that offset is below the fold, the new scrollTop will be the offset - the panel
         * height + the option height, so the active option will be just visible at the bottom of the panel. If that offset is above the top of
         * the visible panel, the new scrollTop will become the offset. If that offset is visible within the panel already, the scrollTop is not
         * adjusted.
         */

      }, {
        key: "scrollToOption",
        value: function scrollToOption() {
          var index = this.autocompletePanel.keyManager.activeItemIndex || 0;
          var labelCount = Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["countGroupLabelsBeforeOption"])(index, this.autocompletePanel.options, this.autocompletePanel.optionGroups);
          var newScrollPosition = Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["getOptionScrollPosition"])(index + labelCount, // FIXME: can this height be dynamic like the TsSelectComponent? https://github.com/GetTerminus/terminus-ui/issues/1153
          AUTOCOMPLETE_OPTION_HEIGHT, this.autocompletePanel.getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
          this.autocompletePanel.setScrollTop(newScrollPosition);
        }
        /**
         * Set the value of the trigger
         *
         * @param value - The value to set
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

      }, {
        key: "setTriggerValue",
        value: function setTriggerValue(value) {
          var displayFn = this.autocompletePanel && this.autocompletePanel.displayWith;
          var toDisplay = displayFn ? displayFn(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
          // The display value can also be the number zero and should not fall back to an empty string.

          var inputValue = Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["isUnset"])(toDisplay) ? toDisplay : ''; // If it is used within a {@link TsFormFieldComponent}, we should set it through the property so it can go through change detection

          if (this.formField) {
            this.formField.control.value = inputValue;
          } else {
            this.elementRef.nativeElement.value = inputValue;
          }
        }
        /**
         * This method closes the panel, and if a value is specified, also sets the associated control to that value.
         * It will also mark the control as dirty if this interaction stemmed from the user.
         *
         * @param event - The event containing the option
         */

      }, {
        key: "setValueAndClose",
        value: function setValueAndClose(event) {
          this.clearPreviousSelectedOption(event.source);
          this.setTriggerValue(event.source.value);
          this.onChange(event.source.value);
          this.elementRef.nativeElement.focus();
          this.autocompletePanel.emitSelectEvent(event.source);
          this.closePanel();
        }
        /**
         * This method listens to a stream of panel closing actions and resets the stream every time the option list changes
         *
         * @returns The subscription
         */

      }, {
        key: "subscribeToClosingActions",
        value: function subscribeToClosingActions() {
          var _this4 = this;

          var firstStable = this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1));
          var optionChanges = this.autocompletePanel.options.changes.pipe( // TODO: Refactor deprecation
          // eslint-disable-next-line deprecation/deprecation
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(function () {
            return _this4.positionStrategy.reapplyLastPosition();
          }), // Defer emitting to the stream until the next tick, because changing bindings in here will cause "changed after checked" errors.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(0)); // When the zone is stable initially, and when the option list changes...
          // eslint-disable-next-line deprecation/deprecation

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(firstStable, optionChanges).pipe( // Create a new stream of panelClosingActions, replacing any previous streams that were created, and flatten it so our stream only
          // emits closing events...
          // TODO: Refactor deprecation
          // eslint-disable-next-line deprecation/deprecation
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
            _this4.resetActiveItem();

            _this4.autocompletePanel.setVisibility();

            return _this4.panelClosingActions;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["untilComponentDestroyed"])(this)) // Set the value, close the panel, and complete.
          .subscribe(function (event) {
            if (event && event.source && event.source.value !== undefined) {
              _this4.setValueAndClose(event);
            }
          });
        }
      }, {
        key: "activeOption",
        get: function get() {
          if (this.autocompletePanel && this.autocompletePanel.keyManager) {
            return this.autocompletePanel.keyManager.activeItem;
          }

          return null;
        }
        /**
         * A stream of actions that should close the autocomplete panel, including when an option is selected, on blur, and when TAB is pressed.
         */

      }, {
        key: "panelClosingActions",
        get: function get() {
          var _this5 = this;

          var _a; // eslint-disable-next-line deprecation/deprecation


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(this.optionSelections, this.autocompletePanel.keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function () {
            return _this5.overlayAttached;
          })), this.closeKeyEventStream, // eslint-disable-next-line deprecation/deprecation
          ((_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.backdropClick()) || Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["of"])('')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function (event) {
            return event instanceof _terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["TsOptionSelectionChange"] ? event : null;
          }));
        }
        /**
         * Whether or not the autocomplete panel is open
         */

      }, {
        key: "panelOpen",
        get: function get() {
          return this.overlayAttached && this.autocompletePanel.showPanel;
        }
        /**
         * Whether the autocomplete is disabled. When disabled, the element will act as a regular input and the user won't be able to open the
         * panel.
         *
         * @param value
         */
        // eslint-disable-next-line @angular-eslint/no-input-rename

      }, {
        key: "autocompleteDisabled",
        set: function set(value) {
          this._autocompleteDisabled = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceBooleanProperty"])(value);
        },
        get: function get() {
          return this._autocompleteDisabled;
        }
        /**
         * Define if the autocomplete panel should reopen after a selection is made
         *
         * @param value
         */

      }, {
        key: "reopenAfterSelection",
        set: function set(value) {
          this._reopenAfterSelection = value;
        },
        get: function get() {
          return this._reopenAfterSelection;
        }
      }]);

      return TsAutocompleteTriggerDirective;
    }();

    TsAutocompleteTriggerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__["TsDocumentService"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [TS_AUTOCOMPLETE_SCROLL_STRATEGY]
        }]
      }, {
        type: _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__["TsFormFieldComponent"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('autocomplete'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteTriggerDirective.prototype, "autocompleteAttribute", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('tsAutocompleteDisabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsAutocompleteTriggerDirective.prototype, "autocompleteDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('tsAutocompleteTrigger'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsAutocompletePanelComponent)], TsAutocompleteTriggerDirective.prototype, "autocompletePanel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsAutocompleteTriggerDirective.prototype, "reopenAfterSelection", null);
    TsAutocompleteTriggerDirective = TsAutocompleteTriggerDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsAutocompleteTrigger]',
      host: {
        'class': 'ts-autocomplete-trigger qa-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': 'activeOption?.id',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocompletePanel?.id',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': 'handleFocus()',
        '(blur)': 'onTouched()',
        '(input)': 'handleInput($event)',
        '(keydown)': 'handleKeydown($event)'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        // eslint-disable-next-line deprecation/deprecation
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return TsAutocompleteTriggerDirective_1;
        }),
        multi: true
      }],
      exportAs: 'tsAutocompleteTrigger'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(TS_AUTOCOMPLETE_SCROLL_STRATEGY)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__["TsDocumentService"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"], Object, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__["TsFormFieldComponent"]])], TsAutocompleteTriggerDirective);
    var TsAutocompleteComponent_1;

    var TsAutocompleteSelectedEvent = /*#__PURE__*/function (_angular_material_aut) {
      _inherits(TsAutocompleteSelectedEvent, _angular_material_aut);

      var _super = _createSuper(TsAutocompleteSelectedEvent);

      function TsAutocompleteSelectedEvent() {
        _classCallCheck(this, TsAutocompleteSelectedEvent);

        return _super.apply(this, arguments);
      }

      return TsAutocompleteSelectedEvent;
    }(_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteSelectedEvent"]); // Unique ID for each instance
    // @internal


    var nextUniqueId$2 = 0;
    var DEFAULT_MINIMUM_CHARACTER_COUNT = 2;
    var DEFAULT_DEBOUNCE_DELAY = 200;
    /**
     * The event object that is emitted when the select value has changed
     */

    var TsAutocompleteChange = function TsAutocompleteChange( // eslint-disable-next-line deprecation/deprecation
    source, value) {
      _classCallCheck(this, TsAutocompleteChange);

      this.source = source;
      this.value = value;
    };
    /**
     * The autocomplete UI Component
     *
     * @deprecated Please use `TsSelectionListComponent`
     *
     * @example
     * <ts-autocomplete
     *              [allowMultiple]="allowMultiple"
     *              [displayFormatter]="formatterFunc"
     *              [valueComparator]="comparatorFunc"
     *              debounceDelay="300"
     *              displayWith="(v) => v.name"
     *              hint="Begin typing to search.."
     *              [isDisabled]="isDisabled"
     *              label="Select options:"
     *              name="product selections"
     *              options="[{}, {}, ...]"
     *              [showProgress]="inProgress"
     *              theme="primary"
     *              (closed)="panelWasClosed($event)"
     *              (opened)="panelWasOpened($event)"
     *              (optionSelected)="mySelected($event)"
     *              (optionRemoved)="myRemoved($event)"
     *              (query)="myQuery($event)"
     *              (selection)="mySelection($event)"
     * ></ts-autocomplete>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/autocomplete</example-url>
     */


    var TsAutocompleteComponent = TsAutocompleteComponent_1 = /*#__PURE__*/function () {
      function TsAutocompleteComponent(changeDetectorRef, documentService, elementRef, ngControl) {
        _classCallCheck(this, TsAutocompleteComponent);

        this.changeDetectorRef = changeDetectorRef;
        this.documentService = documentService;
        this.elementRef = elementRef;
        this.ngControl = ngControl;
        /**
         * Give the component an explicit name
         *
         * @internal
         */

        this.componentName = 'TsAutocompleteComponent';
        /**
         * Define the FormControl
         *
         * @internal
         */

        this.autocompleteFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]([]);
        /**
         * Subject used to alert the parent {@link TsFormFieldComponent} when the label gap should be recalculated
         *
         * Implemented as part of TsFormFieldControl.
         *
         * @internal
         */

        this.labelChanges = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         *
         * @internal
         */

        this.optionIds = '';
        /**
         * Whether or not the overlay panel is open
         */

        this.panelOpen = false;
        /**
         * Since the {@link TsFormFieldComponent} is inside this template, we cannot use a provider to pass this component instance to the form
         * field. Instead, we pass it manually through the template with this reference.
         *
         * @internal
         */

        this.selfReference = this;
        /*
         * Implemented as part of {@link TsFormFieldControl}
         *
         * @internal
         */

        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        /**
         * Define the default component ID
         *
         * @internal
         */

        this.uid = "ts-autocomplete-".concat(nextUniqueId$2++);
        /**
         * Management of the query string
         *
         * @internal
         */

        this.querySubject = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]('');
        /**
         * Define if multiple selections are allowed
         */

        this.allowMultiple = false;
        /**
         * Define if should allow duplicate selections
         */

        this.allowDuplicateSelections = false;
        /**
         * Define if the panel should reopen after a selection is made
         *
         * NOTE: Though it is technically 're-opening', it happens fast enough so that it doesn't appear to close at all.
         */

        this.reopenAfterSelection = false;
        this._debounceDelay = DEFAULT_DEBOUNCE_DELAY;
        /**
         * Define if the required marker should be hidden
         */

        this.hideRequiredMarker = false;
        this._id = this.uid;
        /**
         * Define if the control should be disabled
         */

        this.isDisabled = false;
        this._isRequired = false;
        this._minimumCharacters = DEFAULT_MINIMUM_CHARACTER_COUNT;
        /**
         * Define if the input should currently be showing a progress spinner
         */

        this.showProgress = false;
        /**
         * Define the component theme
         */

        this.theme = 'primary';
        /**
         * Define if validation messages should be shown immediately or on blur
         */

        this.validateOnChange = false;
        /**
         * Define the formatter for the selected items.
         *
         * @param v
         */

        this.displayFormatter = function (v) {
          return v;
        };
        /**
         * Define the comparator for the values of the options
         *
         * @param a
         * @param b
         */


        this.valueComparator = function (a, b) {
          return a === b;
        };
        /**
         * Event for when the panel is closed
         */


        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when a duplicate selection is made
         */

        this.duplicateSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the panel is opened
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emit the selected chip
         */

        this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when an option is removed
         */

        this.optionDeselected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emit the current selection
         */

        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emit the query string
         */

        this.query = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the query has changed
         */

        this.queryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the selections change
         */

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         *
         * Needed for {@link TsFormFieldComponent}.
         */

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Stub in onChange
         *
         * @internal
         *
         * Needed for ControlValueAccessor (View -> model callback called when value changes)
         */
        // istanbul ignore next

        this.onChange = function () {};
        /**
         * Stub in onTouched
         *
         * @internal
         *
         * Needed for ControlValueAccessor (View -> model callback called when select has been touched)
         */
        // istanbul ignore next


        this.onTouched = function () {};

        this.document = this.documentService.document; // This is the assigned FormControl or NgModel
        // istanbul ignore else

        if (this.ngControl) {
          // Note: we provide the value accessor through here, instead of the `providers` to avoid running into a circular import.
          this.ngControl.valueAccessor = this;
        }
      }
      /**
       * Whether the select has a value
       */


      _createClass(TsAutocompleteComponent, [{
        key: "ngOnInit",

        /**
         * Seed initial control values
         */
        value: function ngOnInit() {
          var _this6 = this;

          // Seed the control value
          // NOTE: When the consumer is using an ngModel, the value is not set on the first cycle.
          // We need to push it to the next event loop. When using a FormControl the value is there on the first run.
          // eslint-disable-next-line dot-notation
          if (this.ngControl && this.ngControl['form']) {
            // istanbul ignore else
            if (this.ngControl.value && !Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_26__["isArray"])(this.ngControl.value)) {
              throw Error('form control values must be an array of values');
            } else if (this.ngControl.value) {
              this.autocompleteFormControl.setValue(this.ngControl.value);

              if (!this.allowMultiple) {
                this.searchQuery = this.displayFormatter(this.ngControl.value[0]);
              }
            } // Support dynamic form control updates
            // istanbul ignore else


            if (this.ngControl.valueChanges) {
              this.ngControl.valueChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["untilComponentDestroyed"])(this)).subscribe(function (newValue) {
                // istanbul ignore else
                if (newValue) {
                  _this6.autocompleteFormControl.setValue(newValue, {
                    emitEvent: false
                  });

                  if (!_this6.allowMultiple) {
                    _this6.searchQuery = _this6.displayFormatter(newValue[0]);
                  }
                }
              });
            }
          } else {
            // HACK: Wait until the next detection cycle to set the value from an ngModel.
            // NOTE: Using CDR.detectChanges causes errors in children that expect TsOptionComponent to exist.
            setTimeout(function () {
              // istanbul ignore else
              if (_this6.ngControl && _this6.ngControl.value) {
                if (!Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_26__["isArray"])(_this6.ngControl.value)) {
                  throw Error('ngModel must be an array of values');
                }

                _this6.autocompleteFormControl.setValue(_this6.ngControl.value);

                if (!_this6.allowMultiple) {
                  _this6.searchQuery = _this6.displayFormatter(_this6.ngControl.value[0]);
                }
              }
            });
          } // Take a stream of query changes


          this.querySubject.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["untilComponentDestroyed"])(this), // Debounce the query changes
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["debounceTime"])(this.debounceDelay), // If the query is shorter than allowed, convert to an empty string
          // eslint-disable-next-line deprecation/deprecation
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function (query) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["of"])(query && query.length >= _this6.minimumCharacters ? query : '');
          }), // Only allow a query through if it is different from the previous query
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])()).subscribe(function (query) {
            // NOTE: When an option is selected, the full string value comes through this stream. We are checking the stream value against the
            // input element value to verify we are sending a query rather than a selected option.
            var inputValue = _this6.inputElement.nativeElement.value;
            var queryIsValid = query === inputValue || query === '';

            _this6.queryChange.emit(queryIsValid ? query : inputValue);

            if (!_this6.panelOpen) {
              _this6.open();
            }
          }); // Propagate changes from form control

          this.autocompleteFormControl.valueChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["untilComponentDestroyed"])(this)).subscribe(function (v) {
            _this6.propagateChanges();
          });
        }
        /**
         * Subscribe to the querySubject and pass values to the query emitter
         *
         * NOTE: When an option is selected, the full selected value is piped through this stream
         * somehow. Have not figured out why. Best guess is it's something due to the `matAutocomplete`
         * directive. For now, we are filtering out anything that is not a string.
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          // Take a stream of query changes
          this.querySubject.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (v) {
            return typeof v === 'string' && v.length >= _this7.minimumCharacters;
          }), // Debounce the query changes
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["debounceTime"])(this.debounceDelay), // Only allow a query through if it is different from the previous query
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])()).subscribe(function (query) {
            _this7.query.next(query);
          });
        }
        /**
         * Needed for untilComponentDestroyed
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
        /**
         * Close the overlay panel
         */

      }, {
        key: "close",
        value: function close() {
          if (this.autocompleteTrigger.panelOpen) {
            this.panelOpen = false;
            this.changeDetectorRef.markForCheck();
            this.onTouched();
            this.updateValueAndValidity(); // Alert the consumer

            this.closed.emit();
          }
        }
        /**
         * Set up a key manager to listen to keyboard events on the overlay panel
         */

      }, {
        key: "initKeyManager",
        value: function initKeyManager() {
          // We need to initialize with wrapping turned on
          this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["ActiveDescendantKeyManager"](this.options).withTypeAhead().withVerticalOrientation().withHorizontalOrientation('ltr').withWrap();
        }
        /**
         * Focus the text input
         *
         * @internal
         */

      }, {
        key: "focus",
        value: function focus() {
          this.inputElement.nativeElement.focus();
        }
        /**
         * Open the overlay panel
         */

      }, {
        key: "open",
        value: function open() {
          if (this.isDisabled || !this.options || !this.options.length || this.panelOpen) {
            return;
          }

          this.opened.emit();
        }
        /**
         * Emit a change event to set the model value
         *
         */

      }, {
        key: "propagateChanges",
        value: function propagateChanges() {
          var valueToEmit = this.autocompleteFormControl.value;
          this.value = valueToEmit;
          this.valueChange.emit(valueToEmit);
          this.onChange(valueToEmit);
          this.selectionChange.emit(new TsAutocompleteChange(this, valueToEmit));
          this.changeDetectorRef.markForCheck();
        }
        /**
         * Call FormControl updateValueAndValidity function to ensure value and valid status get updated.
         */

      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          if (this.ngControl && this.ngControl.control) {
            this.ngControl.control.updateValueAndValidity();
          }
        }
        /**
         * Sets the select's value. Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
         *
         * NOTE: Currently we are not using this, but it still must be present since this component is acting as a CVA.
         *
         * @internal
         *
         * @param value - New value to be written to the model
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {}
        /**
         * Save a callback function to be invoked when the select's value changes from user input.
         * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
         *
         * @internal
         *
         * @param fn - Callback to be triggered when the value changes
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * Save a callback function to be invoked when the select is blurred by the user.
         * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
         *
         * @internal
         *
         * @param fn - Callback to be triggered when the component has been touched
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Disables the select.
         * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
         *
         * @param isDisabled - If the component is disabled
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.isDisabled = isDisabled;
          this.changeDetectorRef.markForCheck();
          this.stateChanges.next();
        }
        /**
         * Ensure the correct element gets focus when the primary container is clicked.
         *
         * @internal
         *
         * Implemented as part of TsFormFieldControl.
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          this.focus();
        }
        /**
         * Close the dropdown and reset the query when the user leaves the input
         *
         * @param event - The keyboard or mouse event
         */

      }, {
        key: "handleInputBlur",
        value: function handleInputBlur(event) {
          // FIXME: cannot use dot syntax here since 'relatedTarget' doesn't exist on a KeyboardEvent
          // eslint-disable-next-line dot-notation
          var hasRelatedTarget = !!(event && event['relatedTarget']); // eslint-disable-next-line dot-notation

          var hasNodeName = !!(hasRelatedTarget && event['relatedTarget'].nodeName);

          if (hasRelatedTarget && hasNodeName) {
            // If the blur event comes from the user clicking an option, `event.relatedTarget.nodeName`
            // will be `TS-OPTION`.
            // istanbul ignore else
            // NOTE: TypeScript warns `Property 'nodeName' does not exist on type 'EventTarget'.`
            // eslint-disable-next-line dot-notation
            if (event['relatedTarget'].nodeName !== 'TS-OPTION') {
              this.resetAutocompleteQuery();
            }
          } else if (this.autocompleteTrigger.panelOpen) {
            this.close();
            this.autocompleteTrigger.closePanel(true);
          } // Mark this control as 'touched' to trigger any validations needed on blur


          this.onTouched();
          this.updateValueAndValidity();
        }
        /**
         * Reset input
         */

      }, {
        key: "resetAutocompleteQuery",
        value: function resetAutocompleteQuery() {
          // istanbul ignore else
          if (!this.keyManager) {
            this.initKeyManager();
          } // Deselect the option from the key manager


          this.keyManager.updateActiveItem(-1);
          this.inputElement.nativeElement.value = '';
        }
        /**
         * Select an item
         *
         * @param selection - The item to select
         */

      }, {
        key: "autocompleteSelectItem",
        value: function autocompleteSelectItem(selection) {
          var _this8 = this;

          var isDuplicate = (this.autocompleteFormControl.value || []).findIndex(function (o) {
            return _this8.valueComparator(o, selection.option.value);
          }) >= 0; // istanbul ignore else

          if (isDuplicate) {
            this.duplicateSelection.emit(new TsAutocompleteChange(this, selection.option.value));
          } // Stop the flow if the selection already exists in the array and duplicates aren't allowed


          if (!this.allowDuplicateSelections && isDuplicate) {
            return;
          }

          if (this.allowMultiple) {
            // If supporting multiple selections, reset the input text value as long as the panel should NOT reopen
            // istanbul ignore else
            if (!this.reopenAfterSelection) {
              this.close();
              this.resetAutocompleteQuery();
            } // Update the form control


            var options = (this.autocompleteFormControl.value || []).concat(selection.option.value);
            this.autocompleteFormControl.setValue(options);
          } else {
            // Update the form control
            this.autocompleteFormControl.setValue([selection.option.value]); // In single selection mode, set the query input to the selection so the user can see what was selected

            this.inputElement.nativeElement.value = selection.option.viewValue;
          } // Update the panel position in case the addition of a chip causes the select height to change
          // istanbul ignore else


          if (this.autocompleteTrigger.overlayRef) {
            this.autocompleteTrigger.overlayRef.updatePosition();
            this.changeDetectorRef.detectChanges();
          } // Notify consumers about changes


          this.optionSelected.emit(new TsAutocompleteChange(this, selection.option.value));
          this.selectionChange.emit(new TsAutocompleteChange(this, this.autocompleteFormControl.value));
        }
        /**
         * Chip component emit a focusInput event, autocomplete puts focus on input field.
         */

      }, {
        key: "focusInput",
        value: function focusInput() {
          this.focus();
        }
        /**
         * Deselect an item
         *
         * @param option - The value of the item to remove
         */

      }, {
        key: "autocompleteDeselectItem",
        value: function autocompleteDeselectItem(option) {
          var _this9 = this;

          // Remove the selection from the array of selections
          var options = (this.autocompleteFormControl.value || []).filter(function (opt) {
            return !_this9.valueComparator(opt, option.value);
          }); // Update the form control

          this.autocompleteFormControl.setValue(options); // If the only chip was removed, re-focus the input
          // istanbul ignore else

          if (options.length === 0) {
            this.focus();
          } // HACK: For some reason, triggering change detection works in the selection method above, but not here. Same issue seems present in
          // TsOptionComponent where `setActiveStyles` works by calling the CDR but `setInactiveStyles` required a timeout.


          setTimeout(function () {
            // Update the panel position in case the removal of a chip causes the select height to change
            if (_this9.autocompleteTrigger.overlayRef) {
              _this9.autocompleteTrigger.overlayRef.updatePosition();
            }
          }); // Notify consumers about changes

          this.optionDeselected.emit(new TsAutocompleteChange(this, option));
          this.selectionChange.emit(new TsAutocompleteChange(this, options));
        }
        /**
         * Function for tracking for-loops changes
         *
         * @internal
         *
         * @param index - The item index
         * @returns The unique ID
         */

      }, {
        key: "trackByFn",
        value: function trackByFn(index) {
          return index;
        }
      }, {
        key: "empty",
        get: function get() {
          return !this.autocompleteFormControl.value.length;
        }
        /**
         * Whether the input has focus
         */

      }, {
        key: "focused",
        get: function get() {
          var el = this.inputElement && this.inputElement.nativeElement;
          return this.document.activeElement === el || this.panelOpen;
        }
        /**
         * Determine if the label should float
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return this.focused || !this.empty;
        }
        /**
         * Define a debounce delay for the query stream
         *
         * @param value
         */

      }, {
        key: "debounceDelay",
        set: function set(value) {
          this._debounceDelay = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceNumberProperty"])(value, DEFAULT_DEBOUNCE_DELAY);
        },
        get: function get() {
          return this._debounceDelay;
        }
        /**
         * Define a hint for the input
         *
         * @param value
         */

      }, {
        key: "hint",
        set: function set(value) {
          this._hint = value;
        },
        get: function get() {
          return this._hint;
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
        /**
         * Define if the control is required
         *
         * @param value
         */

      }, {
        key: "isRequired",
        set: function set(value) {
          this._isRequired = value;
        },
        get: function get() {
          var ctrl = this.ngControl && this.ngControl.control;
          var requiredFormControl = !!ctrl && Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_23__["hasRequiredControl"])(ctrl);
          return this._isRequired || requiredFormControl;
        }
        /**
         * Define a minimum character count for queries
         *
         * @param value
         */

      }, {
        key: "minimumCharacters",
        set: function set(value) {
          this._minimumCharacters = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceNumberProperty"])(value, DEFAULT_MINIMUM_CHARACTER_COUNT);
        },
        get: function get() {
          return this._minimumCharacters;
        }
        /**
         * Value of the select control
         *
         * @param newValue
         */

      }, {
        key: "value",
        set: function set(newValue) {
          if (newValue !== this._value) {
            this._value = newValue;
          }
        },
        get: function get() {
          return this._value;
        }
      }]);

      return TsAutocompleteComponent;
    }();

    TsAutocompleteComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__["TsDocumentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('auto', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsAutocompletePanelComponent)], TsAutocompleteComponent.prototype, "autocompletePanel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(TsAutocompleteTriggerDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsAutocompleteTriggerDirective)], TsAutocompleteComponent.prototype, "autocompleteTrigger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chipCollection'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_10__["TsChipCollectionComponent"])], TsAutocompleteComponent.prototype, "chipCollection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('input'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])], TsAutocompleteComponent.prototype, "inputElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["TsOptionComponent"], {
      descendants: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], TsAutocompleteComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["TsOptgroupComponent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], TsAutocompleteComponent.prototype, "optionGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "allowMultiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "allowDuplicateSelections", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "reopenAfterSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], TsAutocompleteComponent.prototype, "debounceDelay", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "hideRequiredMarker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsAutocompleteComponent.prototype, "hint", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsAutocompleteComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsAutocompleteComponent.prototype, "isRequired", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], TsAutocompleteComponent.prototype, "minimumCharacters", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "showProgress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsAutocompleteComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "validateOnChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsAutocompleteComponent.prototype, "value", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsAutocompleteComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsAutocompleteComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TsAutocompleteComponent.prototype, "displayFormatter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], TsAutocompleteComponent.prototype, "valueComparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "closed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "duplicateSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "optionSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "optionDeselected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "selection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "query", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "queryChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "selectionChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsAutocompleteComponent.prototype, "valueChange", void 0);
    TsAutocompleteComponent = TsAutocompleteComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ts-autocomplete',
      template: "<ts-form-field\n  [validateOnChange]=\"validateOnChange\"\n  [control]=\"selfReference\"\n  [hideRequiredMarker]=\"hideRequiredMarker\"\n  [hint]=\"hint\"\n  [id]=\"id\"\n  [theme]=\"theme\"\n  cdk-overlay-origin\n  #origin=\"cdkOverlayOrigin\"\n>\n  <ts-label *ngIf=\"label\">\n    {{ label }}\n  </ts-label>\n\n  <div class=\"ts-autocomplete__input-wrap\">\n\n    <ng-container *ngIf=\"allowMultiple\">\n      <ts-chip-collection\n        [allowMultipleSelections]=\"true\"\n        [isDisabled]=\"false\"\n        [isReadonly]=\"false\"\n        (tabUpdateFocus)=\"focusInput()\"\n        #chipCollection=\"tsChipCollection\"\n      >\n        <ts-chip\n          *ngFor=\"let chip of autocompleteFormControl.value; trackBy: trackByFn\"\n          [isRemovable]=\"true\"\n          [isDisabled]=\"isDisabled\"\n          [value]=\"chip\"\n          (remove)=\"autocompleteDeselectItem($event.chip)\"\n        >{{ displayFormatter(chip) }}</ts-chip>\n\n        <input\n          class=\"ts-autocomplete__input qa-select-autocomplete-input\"\n          [tsAutocompleteTrigger]=\"auto\"\n          [reopenAfterSelection]=\"reopenAfterSelection\"\n          [attr.id]=\"id\"\n          [(ngModel)]=\"searchQuery\"\n          [readonly]=\"isDisabled ? 'true' : null\"\n          (ngModelChange)=\"querySubject.next($event)\"\n          (blur)=\"handleInputBlur($event)\"\n          #input\n        />\n      </ts-chip-collection>\n      <ng-template *ngTemplateOutlet=\"spinnerTemplate\"></ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"!allowMultiple\">\n      <input\n        class=\"ts-autocomplete__input qa-select-autocomplete-input\"\n        [tsAutocompleteTrigger]=\"auto\"\n        [attr.id]=\"id\"\n        [readonly]=\"isDisabled ? 'true' : null\"\n        [(ngModel)]=\"searchQuery\"\n        [value]=\"searchQuery\"\n        (ngModelChange)=\"querySubject.next($event)\"\n        (blur)=\"handleInputBlur($event)\"\n        #input\n      />\n\n      <ng-template *ngTemplateOutlet=\"spinnerTemplate\"></ng-template>\n    </ng-container>\n\n  </div>\n</ts-form-field>\n\n\n<ts-autocomplete-panel\n  class=\"ts-autocomplete\"\n  #auto=\"tsAutocompletePanel\"\n  [id]=\"id + '-panel'\"\n  [options]=\"options\"\n  [optionGroups]=\"optionGroups\"\n  (optionSelected)=\"autocompleteSelectItem($event)\"\n>\n  <!-- Outlet for options passed in by consumer -->\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n</ts-autocomplete-panel>\n\n\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #spinnerTemplate>\n  <mat-progress-spinner\n    *ngIf=\"showProgress\"\n    class=\"c-autocomplete__spinner c-autocomplete__spinner--{{theme}} qa-select-autocomplete-spinner\"\n    [ngClass]=\"{'c-autocomplete__spinner--active': showProgress}\"\n    diameter=\"21\"\n    mode=\"indeterminate\"\n  ></mat-progress-spinner>\n</ng-template>\n",
      host: {
        'class': 'ts-autocomplete',
        '[class.ts-autocomplete--required]': 'isRequired',
        '[class.ts-autocomplete--disabled]': 'isDisabled',
        '[attr.aria-owns]': 'panelOpen ? optionIds : null',
        '[attr.aria-required]': 'isRequired.toString()',
        '[attr.aria-multiselectable]': 'allowMultiple'
      },
      providers: [{
        provide: _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__["TsFormFieldControl"],
        // eslint-disable-next-line deprecation/deprecation
        useExisting: TsAutocompleteComponent_1
      }, {
        provide: _terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["TS_OPTION_PARENT_COMPONENT"],
        // eslint-disable-next-line deprecation/deprecation
        useExisting: TsAutocompleteComponent_1
      }],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      exportAs: 'tsAutocomplete',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.ts-autocomplete__input-wrap--hidden,.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-autocomplete__input-wrap .ts-chip{font-size:14px}.ts-autocomplete__input{background:0 0;border:none;color:currentColor;display:inline-block;flex:1 0 10px;font:inherit;max-width:100%;outline:0;padding:0;text-align:inherit;vertical-align:bottom;width:100%}.ts-autocomplete__input:-moz-ui-invalid{box-shadow:none}.cdk-overlay-container .ts-autocomplete__backdrop{background:0 0}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]])], TsAutocompleteComponent);
    /* eslint-disable deprecation/deprecation */
    // @deprecated Please use `TsSelectionListModule`

    var TsAutocompleteModule = function TsAutocompleteModule() {
      _classCallCheck(this, TsAutocompleteModule);
    };

    TsAutocompleteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__["TsCheckboxModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_10__["TsChipModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_12__["TsIconModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__["TsFormFieldModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_14__["TsOptionModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_15__["TsValidationMessagesModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_13__["TsInputModule"]],
      providers: [TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
      declarations: [TsAutocompleteComponent, TsAutocompletePanelComponent, TsAutocompleteTriggerDirective],
      exports: [TsAutocompleteComponent, TsAutocompletePanelComponent, TsAutocompleteTriggerDirective]
    })], TsAutocompleteModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-autocomplete.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/autocomplete/terminus-ui-autocomplete.ngfactory.js":
  /*!*******************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/autocomplete/terminus-ui-autocomplete.ngfactory.js ***!
    \*******************************************************************************************************************/

  /*! exports provided: TsAutocompleteModuleNgFactory, RenderType_TsAutocompleteComponent, View_TsAutocompleteComponent_0, View_TsAutocompleteComponent_Host_0, TsAutocompleteComponentNgFactory, RenderType_TsAutocompletePanelComponent, View_TsAutocompletePanelComponent_0, View_TsAutocompletePanelComponent_Host_0, TsAutocompletePanelComponentNgFactory */

  /***/
  function distLibsUiAutocompleteTerminusUiAutocompleteNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteModuleNgFactory", function () {
      return TsAutocompleteModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsAutocompleteComponent", function () {
      return RenderType_TsAutocompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsAutocompleteComponent_0", function () {
      return View_TsAutocompleteComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsAutocompleteComponent_Host_0", function () {
      return View_TsAutocompleteComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompleteComponentNgFactory", function () {
      return TsAutocompleteComponentNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsAutocompletePanelComponent", function () {
      return RenderType_TsAutocompletePanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsAutocompletePanelComponent_0", function () {
      return View_TsAutocompletePanelComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsAutocompletePanelComponent_Host_0", function () {
      return View_TsAutocompletePanelComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsAutocompletePanelComponentNgFactory", function () {
      return TsAutocompletePanelComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-autocomplete */
    "../../dist/libs/ui/autocomplete/fesm2015/terminus-ui-autocomplete.js");
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
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


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../chip/terminus-ui-chip.ngfactory */
    "../../dist/libs/ui/chip/terminus-ui-chip.ngfactory.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/progress-spinner/index.ngfactory */
    "../../node_modules/@angular/material/progress-spinner/index.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _form_field_terminus_ui_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ../form-field/terminus-ui-form-field.ngfactory */
    "../../dist/libs/ui/form-field/terminus-ui-form-field.ngfactory.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsAutocompleteModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_16__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TS_AUTOCOMPLETE_SCROLL_STRATEGY"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_29__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_29__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_32__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_32__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_34__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_34__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_24__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_36__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_36__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteModule"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_36__["TS_DATE_FORMATS"], [])]);
    });

    var styles_TsAutocompleteComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.ts-autocomplete__input-wrap--hidden,.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-autocomplete__input-wrap .ts-chip{font-size:14px}.ts-autocomplete__input{background:0 0;border:none;color:currentColor;display:inline-block;flex:1 0 10px;font:inherit;max-width:100%;outline:0;padding:0;text-align:inherit;vertical-align:bottom;width:100%}.ts-autocomplete__input:-moz-ui-invalid{box-shadow:none}.cdk-overlay-container .ts-autocomplete__backdrop{background:0 0}"];

    var RenderType_TsAutocompleteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsAutocompleteComponent,
      data: {}
    });

    function View_TsAutocompleteComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.label;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TsAutocompleteComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-chip", [["class", "ts-chip"], ["role", "option"]], [[2, "ts-chip--primary", null], [2, "ts-chip--accent", null], [2, "ts-chip--warn", null], [1, "tabindex", 0], [2, "ts-chip--selected", null], [2, "ts-chip--disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "remove"], [null, "blur"], [null, "click"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("blur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).handleBlur() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).handleClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).focus() !== false;
          ad = pd_2 && ad;
        }

        if ("keydown" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).handleKeydown($event) !== false;
          ad = pd_3 && ad;
        }

        if ("remove" === en) {
          var pd_4 = _co.autocompleteDeselectItem($event.chip) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_37__["View_TsChipComponent_0"], _chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_37__["RenderType_TsChipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, [[7, 4]], 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_32__["TsChipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_38__["TsDocumentService"]], {
        isDisabled: [0, "isDisabled"],
        isRemovable: [1, "isRemovable"],
        value: [2, "value"]
      }, {
        remove: "remove"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _co.isDisabled;
        var currVal_10 = true;
        var currVal_11 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_9, currVal_10, currVal_11);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "primary";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "accent";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "warn";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled ? null : 0 - 1;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled || null;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).ariaSelected;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_12 = _co.displayFormatter(_v.context.$implicit);

        _ck(_v, 2, 0, currVal_12);
      });
    }

    function View_TsAutocompleteComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_TsAutocompleteComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0, null, View_TsAutocompleteComponent_5))], null, null);
    }

    function View_TsAutocompleteComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 11, "ts-chip-collection", [["class", "ts-chip-collection"]], [[2, "ts-chip-collection--disabled", null], [2, "ts-chip-collection--vertical", null], [2, "ts-chip-collection--selectable", null], [1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-disabled", 0], [1, "aria-multiselectable", 0], [1, "aria-orientation", 0], [1, "aria-readonly", 0], [1, "aria-required", 0], [1, "aria-selectable", 0], [1, "role", 0], [8, "id", 0]], [[null, "tabUpdateFocus"], [null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).focus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).blur() !== false;
          ad = pd_1 && ad;
        }

        if ("keydown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).keydown($event) !== false;
          ad = pd_2 && ad;
        }

        if ("tabUpdateFocus" === en) {
          var pd_3 = _co.focusInput() !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_37__["View_TsChipCollectionComponent_0"], _chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_37__["RenderType_TsChipCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 5488640, [[3, 4], ["chipCollection", 4]], 1, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_32__["TsChipCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], {
        allowMultipleSelections: [0, "allowMultipleSelections"],
        isDisabled: [1, "isDisabled"],
        isReadonly: [2, "isReadonly"]
      }, {
        tabUpdateFocus: "tabUpdateFocus"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, {
        chips: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsAutocompleteComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, [[4, 0], ["input", 1]], 0, 6, "input", [["class", "ts-autocomplete__input qa-select-autocomplete-input ts-autocomplete-trigger qa-autocomplete-trigger"]], [[1, "id", 0], [8, "readOnly", 0], [1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("focusin" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).handleFocus() !== false;
          ad = pd_4 && ad;
        }

        if ("blur" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onTouched() !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).handleInput($event) !== false;
          ad = pd_6 && ad;
        }

        if ("keydown" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).handleKeydown($event) !== false;
          ad = pd_7 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_8 = (_co.searchQuery = $event) !== false;
          ad = pd_8 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_9 = _co.querySubject.next($event) !== false;
          ad = pd_9 && ad;
        }

        if ("blur" === en) {
          var pd_10 = _co.handleInputBlur($event) !== false;
          ad = pd_10 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 147456, [[2, 4]], 0, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteTriggerDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_38__["TsDocumentService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ViewportRuler"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TS_AUTOCOMPLETE_SCROLL_STRATEGY"], [2, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldComponent"]]], {
        autocompletePanel: [0, "autocompletePanel"],
        reopenAfterSelection: [1, "reopenAfterSelection"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteTriggerDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsAutocompleteComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
        ngTemplateOutlet: [0, "ngTemplateOutlet"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_13 = true;
        var currVal_14 = false;
        var currVal_15 = false;

        _ck(_v, 2, 0, currVal_13, currVal_14, currVal_15);

        var currVal_16 = _co.autocompleteFormControl.value;
        var currVal_17 = _co.trackByFn;

        _ck(_v, 5, 0, currVal_16, currVal_17);

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 18);

        var currVal_34 = _co.reopenAfterSelection;

        _ck(_v, 8, 0, currVal_33, currVal_34);

        var currVal_35 = _co.searchQuery;

        _ck(_v, 10, 0, currVal_35);

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 22);

        _ck(_v, 14, 0, currVal_36);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).orientation === "vertical";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isSelectable;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).tabIndex;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).ariaDescribedby || null;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).allowMultipleSelections;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).ariaOrientation;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isReadonly;

        var currVal_9 = false;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isSelectable;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).role;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]);

        var currVal_18 = _co.id;
        var currVal_19 = _co.isDisabled ? "true" : null;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompleteAttribute;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompleteDisabled ? null : "combobox";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompleteDisabled ? null : "list";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).activeOption == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).activeOption.id;
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompleteDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).panelOpen.toString();
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompleteDisabled || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).panelOpen ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompletePanel == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).autocompletePanel.id;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassUntouched;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassTouched;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPristine;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassDirty;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassValid;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassInvalid;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPending;

        _ck(_v, 6, 1, [currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]);
      });
    }

    function View_TsAutocompleteComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_TsAutocompleteComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0, null, View_TsAutocompleteComponent_8))], null, null);
    }

    function View_TsAutocompleteComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, [[4, 0], ["input", 1]], null, 6, "input", [["class", "ts-autocomplete__input qa-select-autocomplete-input ts-autocomplete-trigger qa-autocomplete-trigger"]], [[1, "id", 0], [8, "readOnly", 0], [8, "value", 0], [1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("focusin" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).handleFocus() !== false;
          ad = pd_4 && ad;
        }

        if ("blur" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onTouched() !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).handleInput($event) !== false;
          ad = pd_6 && ad;
        }

        if ("keydown" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).handleKeydown($event) !== false;
          ad = pd_7 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_8 = (_co.searchQuery = $event) !== false;
          ad = pd_8 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_9 = _co.querySubject.next($event) !== false;
          ad = pd_9 && ad;
        }

        if ("blur" === en) {
          var pd_10 = _co.handleInputBlur($event) !== false;
          ad = pd_10 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 147456, [[2, 4]], 0, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteTriggerDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_38__["TsDocumentService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ViewportRuler"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TS_AUTOCOMPLETE_SCROLL_STRATEGY"], [2, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldComponent"]]], {
        autocompletePanel: [0, "autocompletePanel"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteTriggerDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsAutocompleteComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
        ngTemplateOutlet: [0, "ngTemplateOutlet"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 18);

        _ck(_v, 3, 0, currVal_16);

        var currVal_17 = _co.searchQuery;

        _ck(_v, 5, 0, currVal_17);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 22);

        _ck(_v, 9, 0, currVal_18);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.id;
        var currVal_1 = _co.isDisabled ? "true" : null;
        var currVal_2 = _co.searchQuery;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompleteAttribute;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompleteDisabled ? null : "combobox";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompleteDisabled ? null : "list";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).activeOption == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).activeOption.id;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompleteDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).panelOpen.toString();
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompleteDisabled || !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).panelOpen ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompletePanel == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).autocompletePanel.id;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).ngClassPending;

        _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]);
      });
    }

    function View_TsAutocompleteComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_TsAutocompleteComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0, null, View_TsAutocompleteComponent_10))], null, null);
    }

    function View_TsAutocompleteComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_TsAutocompleteComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "mat-progress-spinner", [["class", "mat-progress-spinner"], ["diameter", "21"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_39__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_39__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
        "c-autocomplete__spinner--active": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], {
        ngClass: [0, "ngClass"],
        klass: [1, "klass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, {
        "c-autocomplete__spinner--active": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], {
        diameter: [0, "diameter"],
        mode: [1, "mode"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "c-autocomplete__spinner c-autocomplete__spinner--", _co.theme, " qa-select-autocomplete-spinner");

        var currVal_8 = _ck(_v, 2, 0, _co.showProgress);

        _ck(_v, 1, 0, currVal_7, currVal_8);

        var currVal_9 = _ck(_v, 4, 0, _co.showProgress);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "c-autocomplete__spinner c-autocomplete__spinner--", _co.theme, " qa-select-autocomplete-spinner");

        _ck(_v, 3, 0, currVal_9, currVal_10);

        var currVal_11 = "21";
        var currVal_12 = "indeterminate";

        _ck(_v, 5, 0, currVal_11, currVal_12);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._noopAnimations;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).diameter;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).diameter;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).mode === "determinate" ? 0 : null;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).mode === "determinate" ? 100 : null;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).mode === "determinate" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).value : null;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).mode;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_TsAutocompleteComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsAutocompleteComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.showProgress;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_TsAutocompleteComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        autocompletePanel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        autocompleteTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, {
        chipCollection: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 4, {
        inputElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 11, "ts-form-field", [["cdk-overlay-origin", ""], ["class", "ts-form-field"]], [[2, "ts-form-field--invalid", null], [2, "ts-form-field--float", null], [2, "ts-form-field--disabled", null], [2, "ts-form-field--focused", null], [2, "ts-form-field--accent", null], [2, "ts-form-field--warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _form_field_terminus_ui_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_41__["View_TsFormFieldComponent_0"], _form_field_terminus_ui_form_field_ngfactory__WEBPACK_IMPORTED_MODULE_41__["RenderType_TsFormFieldComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [["origin", 4]], 0, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 7520256, null, 2, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_38__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], {
        control: [0, "control"],
        hideRequiredMarker: [1, "hideRequiredMarker"],
        hint: [2, "hint"],
        id: [3, "id"],
        theme: [4, "theme"],
        validateOnChange: [5, "validateOnChange"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {
        suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 2, 1, null, View_TsAutocompleteComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 1, 4, "div", [["class", "ts-autocomplete__input-wrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsAutocompleteComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsAutocompleteComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 4, "ts-autocomplete-panel", [["class", "ts-autocomplete ts-autocomplete-panel qa-autocomplete-panel"]], null, [[null, "optionSelected"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("optionSelected" === en) {
          var pd_0 = _co.autocompleteSelectItem($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, View_TsAutocompletePanelComponent_0, RenderType_TsAutocompletePanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_34__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompletePanelComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 1097728, [[1, 4], ["auto", 4]], 0, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompletePanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        id: [0, "id"],
        optionGroups: [1, "optionGroups"],
        options: [2, "options"]
      }, {
        optionSelected: "optionSelected"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsAutocompleteComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], {
        ngTemplateOutlet: [0, "ngTemplateOutlet"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["contentTemplate", 2]], null, 0, null, View_TsAutocompleteComponent_11)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [["spinnerTemplate", 2]], null, 0, null, View_TsAutocompleteComponent_12))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_13 = _co.selfReference;
        var currVal_14 = _co.hideRequiredMarker;
        var currVal_15 = _co.hint;
        var currVal_16 = _co.id;
        var currVal_17 = _co.theme;
        var currVal_18 = _co.validateOnChange;

        _ck(_v, 6, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_19 = _co.label;

        _ck(_v, 10, 0, currVal_19);

        var currVal_20 = _co.allowMultiple;

        _ck(_v, 13, 0, currVal_20);

        var currVal_21 = !_co.allowMultiple;

        _ck(_v, 15, 0, currVal_21);

        var currVal_22 = _co.id + "-panel";
        var currVal_23 = _co.optionGroups;
        var currVal_24 = _co.options;

        _ck(_v, 18, 0, currVal_22, currVal_23, currVal_24);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21);

        _ck(_v, 20, 0, currVal_25);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).controlIsInErrorState;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldLabelFloat();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).control.isDisabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).control.focused;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).theme == "accent";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).theme == "warn";

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("untouched");

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("touched");

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("pristine");

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("dirty");

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("valid");

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("invalid");

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).shouldForward("pending");

        _ck(_v, 4, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]);
      });
    }

    function View_TsAutocompleteComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ts-autocomplete", [["class", "ts-autocomplete"]], [[2, "ts-autocomplete--required", null], [2, "ts-autocomplete--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0]], null, null, View_TsAutocompleteComponent_0, RenderType_TsAutocompleteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_33__["TsFormFieldControl"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_34__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4440064, null, 2, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_38__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        optionGroups: 1
      })], function (_ck, _v) {
        _ck(_v, 3, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isRequired;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isDisabled;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).optionIds : null;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isRequired.toString();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).allowMultiple;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      });
    }

    var TsAutocompleteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-autocomplete", _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompleteComponent"], View_TsAutocompleteComponent_Host_0, {
      allowMultiple: "allowMultiple",
      allowDuplicateSelections: "allowDuplicateSelections",
      reopenAfterSelection: "reopenAfterSelection",
      debounceDelay: "debounceDelay",
      hideRequiredMarker: "hideRequiredMarker",
      hint: "hint",
      id: "id",
      isDisabled: "isDisabled",
      isRequired: "isRequired",
      minimumCharacters: "minimumCharacters",
      showProgress: "showProgress",
      theme: "theme",
      validateOnChange: "validateOnChange",
      value: "value",
      label: "label",
      name: "name",
      displayFormatter: "displayFormatter",
      valueComparator: "valueComparator"
    }, {
      closed: "closed",
      duplicateSelection: "duplicateSelection",
      opened: "opened",
      optionSelected: "optionSelected",
      optionDeselected: "optionDeselected",
      selection: "selection",
      query: "query",
      queryChange: "queryChange",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    }, ["*"]);

    var styles_TsAutocompletePanelComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-autocomplete-panel__inner{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fafafa;border-bottom-left-radius:4px;border-bottom-right-radius:4px;color:#302d35;max-height:256px;max-width:none;min-width:112px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative;visibility:hidden;width:100%}@media screen and (-ms-high-contrast:active){.ts-autocomplete-panel__inner{outline:solid 1px}}.ts-autocomplete-panel__inner .ts-option.ts-option--selected:not(.ts-active):not(:hover){background:#1777b6}.ts-autocomplete-panel__inner .ts-option:not(.ts-option--template){font-size:inherit;height:3em;line-height:3em}.ts-autocomplete-panel__inner.ts-autocomplete-visible{visibility:visible}.ts-autocomplete-panel__inner.ts-autocomplete-hidden{visibility:hidden}.ts-autocomplete-panel-above .ts-autocomplete-panel__inner{border-radius:4px 4px 0 0}.ts-autocomplete-panel__inner .ts-divider-horizontal{margin-top:-1px}"];

    var RenderType_TsAutocompletePanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsAutocompletePanelComponent,
      data: {}
    });

    function View_TsAutocompletePanelComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["panel", 1]], null, 1, "div", [["class", "ts-autocomplete-panel__inner"], ["role", "listbox"]], [[2, "ts-autocomplete-visible", null], [1, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.showPanel;
        var currVal_1 = _co.id;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_TsAutocompletePanelComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        template: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {
        panel: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2]], null, 0, null, View_TsAutocompletePanelComponent_1))], null, null);
    }

    function View_TsAutocompletePanelComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-autocomplete-panel", [["class", "ts-autocomplete-panel qa-autocomplete-panel"]], null, null, null, View_TsAutocompletePanelComponent_0, RenderType_TsAutocompletePanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_34__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompletePanelComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1097728, null, 0, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompletePanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null);
    }

    var TsAutocompletePanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-autocomplete-panel", _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_1__["TsAutocompletePanelComponent"], View_TsAutocompletePanelComponent_Host_0, {
      displayWith: "displayWith",
      id: "id",
      optionGroups: "optionGroups",
      options: "options"
    }, {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed"
    }, ["*"]);
    /***/

  },

  /***/
  "../../node_modules/@angular/material/fesm2015/autocomplete.js":
  /*!***********************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/material/fesm2015/autocomplete.js ***!
    \***********************************************************************************************************/

  /*! exports provided: AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, getMatAutocompleteMissingPanelError */

  /***/
  function node_modulesAngularMaterialFesm2015AutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return AUTOCOMPLETE_OPTION_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return AUTOCOMPLETE_PANEL_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
      return MatAutocomplete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
      return MatAutocompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
      return MatAutocompleteOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
      return MatAutocompleteSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
      return MatAutocompleteTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
      return getMatAutocompleteMissingPanelError;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Autocomplete IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _uniqueAutocompleteIdCounter = 0;
    /**
     * Event object that is emitted when an autocomplete option is selected.
     */

    var MatAutocompleteSelectedEvent =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatAutocompleteSelectedEvent(source, option) {
      _classCallCheck(this, MatAutocompleteSelectedEvent);

      this.source = source;
      this.option = option;
    };

    if (false) {}
    /**
     * Event object that is emitted when an autocomplete option is activated.
     * @record
     */


    function MatAutocompleteActivatedEvent() {}

    if (false) {} // Boilerplate for applying mixins to MatAutocomplete.

    /**
     * \@docs-private
     */


    var MatAutocompleteBase = function MatAutocompleteBase() {
      _classCallCheck(this, MatAutocompleteBase);
    };
    /** @type {?} */


    var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
    /**
     * Default `mat-autocomplete` options that can be overridden.
     * @record
     */


    function MatAutocompleteDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `mat-autocomplete`.
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
      providedIn: 'root',
      factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
      return {
        autoActiveFirstOption: false
      };
    }

    var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteMixin) {
      _inherits(MatAutocomplete, _MatAutocompleteMixin);

      var _super2 = _createSuper(MatAutocomplete);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} defaults
       */
      function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this10;

        _classCallCheck(this, MatAutocomplete);

        _this10 = _super2.call(this);
        _this10._changeDetectorRef = _changeDetectorRef;
        _this10._elementRef = _elementRef;
        _this10._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */

        _this10.showPanel = false;
        _this10._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */

        _this10.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */

        _this10.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        _this10.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        _this10.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emits whenever an option is activated using the keyboard.
         */

        _this10.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this10._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */

        _this10.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
        _this10._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this10;
      }
      /**
       * Whether the autocomplete panel is open.
       * @return {?}
       */


      _createClass(MatAutocomplete, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this11 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap();
          this._activeOptionChanges = this._keyManager.change.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            _this11.optionActivated.emit({
              source: _this11,
              option: _this11.options.toArray()[index] || null
            });
          }); // Set the initial visibility state.

          this._setVisibility();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._activeOptionChanges.unsubscribe();
        }
        /**
         * Sets the panel scrollTop. This allows us to manually scroll to display options
         * above or below the fold, as they are not actually being focused when active.
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_setScrollTop",
        value: function _setScrollTop(scrollTop) {
          if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
          }
        }
        /**
         * Returns the panel's scrollTop.
         * @return {?}
         */

      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this.panel ? this.panel.nativeElement.scrollTop : 0;
        }
        /**
         * Panel should hide itself when the option list is empty.
         * @return {?}
         */

      }, {
        key: "_setVisibility",
        value: function _setVisibility() {
          this.showPanel = !!this.options.length;

          this._setVisibilityClasses(this._classList);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits the `select` event.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitSelectEvent",
        value: function _emitSelectEvent(option) {
          /** @type {?} */
          var event = new MatAutocompleteSelectedEvent(this, option);
          this.optionSelected.emit(event);
        }
        /**
         * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
         * @private
         * @param {?} classList
         * @return {?}
         */

      }, {
        key: "_setVisibilityClasses",
        value: function _setVisibilityClasses(classList) {
          classList['mat-autocomplete-visible'] = this.showPanel;
          classList['mat-autocomplete-hidden'] = !this.showPanel;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._isOpen && this.showPanel;
        }
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */

      }, {
        key: "autoActiveFirstOption",
        get: function get() {
          return this._autoActiveFirstOption;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "classList",
        set: function set(value) {
          if (value && value.length) {
            this._classList = value.split(' ').reduce(
            /**
            * @param {?} classList
            * @param {?} className
            * @return {?}
            */
            function (classList, className) {
              classList[className.trim()] = true;
              return classList;
            },
            /** @type {?} */
            {});
          } else {
            this._classList = {};
          }

          this._setVisibilityClasses(this._classList);

          this._elementRef.nativeElement.className = '';
        }
      }]);

      return MatAutocomplete;
    }(_MatAutocompleteMixinBase);

    MatAutocomplete.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'mat-autocomplete',
        template: "<ng-template>\n  <div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        exportAs: 'matAutocomplete',
        inputs: ['disableRipple'],
        host: {
          'class': 'mat-autocomplete'
        },
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }],
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"]
      }]
    }];
    /** @nocollapse */

    MatAutocomplete.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatAutocomplete.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
          "static": true
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
          descendants: true
        }]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      autoActiveFirstOption: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      panelWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      optionSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      optionActivated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['class']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-origin.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive applied to an element to make it usable
     * as a connection point for an autocomplete panel.
     */


    var MatAutocompleteOrigin =
    /**
     * @param {?} elementRef
     */
    function MatAutocompleteOrigin(elementRef) {
      _classCallCheck(this, MatAutocompleteOrigin);

      this.elementRef = elementRef;
    };

    MatAutocompleteOrigin.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matAutocompleteOrigin]',
        exportAs: 'matAutocompleteOrigin'
      }]
    }];
    /** @nocollapse */

    MatAutocompleteOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-trigger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The height of each autocomplete option.
     * @type {?}
     */


    var AUTOCOMPLETE_OPTION_HEIGHT = 48;
    /**
     * The total height of the autocomplete panel.
     * @type {?}
     */

    var AUTOCOMPLETE_PANEL_HEIGHT = 256;
    /**
     * Injection token that determines the scroll handling while the autocomplete panel is open.
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Provider that allows the autocomplete to register as a ControlValueAccessor.
     * \@docs-private
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatAutocompleteTrigger;
      }),
      multi: true
    };
    /**
     * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
     * \@docs-private
     * @return {?}
     */

    function getMatAutocompleteMissingPanelError() {
      return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
    }

    var MatAutocompleteTrigger = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _overlay
       * @param {?} _viewContainerRef
       * @param {?} _zone
       * @param {?} _changeDetectorRef
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _formField
       * @param {?} _document
       * @param {?=} _viewportRuler
       */
      function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this12 = this;

        _classCallCheck(this, MatAutocompleteTrigger);

        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */

        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */

        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */

        this._canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel.
         */

        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */

        this._windowBlurHandler =
        /**
        * @return {?}
        */
        function () {
          // If the user blurred the window while the autocomplete is focused, it means that it'll be
          // refocused when they come back. In this case we want to skip the first focus event, if the
          // pane was closed, in order to avoid reopening it unintentionally.
          _this12._canOpenOnNextFocus = _this12._document.activeElement !== _this12._element.nativeElement || _this12.panelOpen;
        };
        /**
         * `View -> model callback called when value changes`
         */


        this._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when autocomplete has been touched`
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */


        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */

        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */

        this.optionSelections =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(
        /**
        * @return {?}
        */
        function () {
          if (_this12.autocomplete && _this12.autocomplete.options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(_this12.autocomplete.options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.onSelectionChange;
            })));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // Return a stream that we'll replace with the real one once everything is in place.


          return _this12._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this12.optionSelections;
          }));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Whether the autocomplete is disabled. When disabled, the element will
       * act as a regular input and the user won't be able to open the panel.
       * @return {?}
       */


      _createClass(MatAutocompleteTrigger, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this13 = this;

          /** @type {?} */
          var window = this._getWindow();

          if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              window.addEventListener('blur', _this13._windowBlurHandler);
            });

            this._isInsideShadowRoot = !!Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["_getShadowRoot"])(this._element.nativeElement);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);

            if (this.panelOpen) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var window = this._getWindow();

          if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
          }

          this._viewportSubscription.unsubscribe();

          this._componentDestroyed = true;

          this._destroyPanel();

          this._closeKeyEventStream.complete();
        }
        /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */

      }, {
        key: "openPanel",

        /**
         * Opens the autocomplete suggestion panel.
         * @return {?}
         */
        value: function openPanel() {
          this._attachOverlay();

          this._floatLabel();
        }
        /**
         * Closes the autocomplete suggestion panel.
         * @return {?}
         */

      }, {
        key: "closePanel",
        value: function closePanel() {
          this._resetLabel();

          if (!this._overlayAttached) {
            return;
          }

          if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
          }

          this.autocomplete._isOpen = this._overlayAttached = false;

          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();

            this._closingActionsSubscription.unsubscribe();
          } // Note that in some cases this can end up being called after the component is destroyed.
          // Add a check to ensure that we don't try to run change detection on a destroyed view.


          if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
         * within the viewport.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._overlayAttached) {
            /** @type {?} */
            this._overlayRef.updatePosition();
          }
        }
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */

      }, {
        key: "_getOutsideClickStream",

        /**
         * Stream of clicks outside of the autocomplete panel.
         * @private
         * @return {?}
         */
        value: function _getOutsideClickStream() {
          var _this14 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'click'),
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.

            /** @type {?} */
            var clickTarget =
            /** @type {?} */
            _this14._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
            /** @type {?} */

            var formField = _this14._formField ? _this14._formField._elementRef.nativeElement : null;
            return _this14._overlayAttached && clickTarget !== _this14._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this14._overlayRef && !_this14._overlayRef.overlayElement.contains(clickTarget);
          }));
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this15 = this;

          Promise.resolve(null).then(
          /**
          * @return {?}
          */
          function () {
            return _this15._setTriggerValue(value);
          });
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._element.nativeElement.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
          // in line with other browsers. By default, pressing escape on IE will cause it to revert
          // the input value to the one that it had on focus, however it won't dispatch any events
          // which means that the model value will be out of sync with the view.

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]) {
            event.preventDefault();
          }

          if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();

            this._resetActiveItem();

            event.preventDefault();
          } else if (this.autocomplete) {
            /** @type {?} */
            var prevActiveItem = this.autocomplete._keyManager.activeItem;
            /** @type {?} */

            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"];

            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["TAB"]) {
              this.autocomplete._keyManager.onKeydown(event);
            } else if (isArrowKey && this._canOpen()) {
              this.openPanel();
            }

            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
              this._scrollToOption();
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var value = target.value; // Based on `NumberValueAccessor` from forms.

          if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
          } // If the input has a placeholder, IE will fire the `input` event on page load,
          // focus and blur, in addition to when the user actually changed the value. To
          // filter out all of the extra events, we save the value on focus and between
          // `input` events, and we check whether it changed.
          // See: https://connect.microsoft.com/IE/feedback/details/885747/


          if (this._previousValue !== value) {
            this._previousValue = value;

            this._onChange(value);

            if (this._canOpen() && this._document.activeElement === event.target) {
              this.openPanel();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
          } else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;

            this._attachOverlay();

            this._floatLabel(true);
          }
        }
        /**
         * In "auto" mode, the label will animate down as soon as focus is lost.
         * This causes the value to jump when selecting an option with the mouse.
         * This method manually floats the label until the panel can be closed.
         * @private
         * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
         * @return {?}
         */

      }, {
        key: "_floatLabel",
        value: function _floatLabel() {
          var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
              this._formField._animateAndLockLabel();
            } else {
              this._formField.floatLabel = 'always';
            }

            this._manuallyFloatingLabel = true;
          }
        }
        /**
         * If the label has been manually elevated, return it to its normal state.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetLabel",
        value: function _resetLabel() {
          if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
          }
        }
        /**
         * Given that we are not actually focusing active options, we must manually adjust scroll
         * to reveal options below the fold. First, we find the offset of the option from the top
         * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
         * the panel height + the option height, so the active option will be just visible at the
         * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
         * will become the offset. If that offset is visible within the panel already, the scrollTop is
         * not adjusted.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToOption",
        value: function _scrollToOption() {
          /** @type {?} */
          var index = this.autocomplete._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);

          if (index === 0 && labelCount === 1) {
            // If we've got one group label before the option and we're at the top option,
            // scroll the list to the top. This is better UX than scrolling the list to the
            // top of the option, because it allows the user to read the top group's label.
            this.autocomplete._setScrollTop(0);
          } else {
            /** @type {?} */
            var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

            this.autocomplete._setScrollTop(newScrollPosition);
          }
        }
        /**
         * This method listens to a stream of panel closing actions and resets the
         * stream every time the option list changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToClosingActions",
        value: function _subscribeToClosingActions() {
          var _this16 = this;

          /** @type {?} */
          var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1));
          /** @type {?} */


          var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this16._positionStrategy.reapplyLastPosition();
          }), // Defer emitting to the stream until the next tick, because changing
          // bindings in here will cause "changed after checked" errors.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var wasOpen = _this16.panelOpen;

            _this16._resetActiveItem();

            _this16.autocomplete._setVisibility();

            if (_this16.panelOpen) {
              /** @type {?} */
              _this16._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
              // event, because we may not have emitted it when the panel was attached. This
              // can happen if the users opens the panel and there are no options, but the
              // options come in slightly later or as a result of the value changing.


              if (wasOpen !== _this16.panelOpen) {
                _this16.autocomplete.opened.emit();
              }
            }

            return _this16.panelClosingActions;
          }), // when the first closing event occurs...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)) // set the value, close the panel, and complete.
          .subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this16._setValueAndClose(event);
          });
        }
        /**
         * Destroys the autocomplete suggestion panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPanel",
        value: function _destroyPanel() {
          if (this._overlayRef) {
            this.closePanel();

            this._overlayRef.dispose();

            this._overlayRef = null;
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setTriggerValue",
        value: function _setTriggerValue(value) {
          /** @type {?} */
          var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
          // The display value can also be the number zero and shouldn't fall back to an empty string.

          /** @type {?} */

          var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
          // through change detection.

          if (this._formField) {
            this._formField._control.value = inputValue;
          } else {
            this._element.nativeElement.value = inputValue;
          }

          this._previousValue = inputValue;
        }
        /**
         * This method closes the panel, and if a value is specified, also sets the associated
         * control to that value. It will also mark the control as dirty if this interaction
         * stemmed from the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_setValueAndClose",
        value: function _setValueAndClose(event) {
          if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);

            this._setTriggerValue(event.source.value);

            this._onChange(event.source.value);

            this._element.nativeElement.focus();

            this.autocomplete._emitSelectEvent(event.source);
          }

          this.closePanel();
        }
        /**
         * Clear any previous selected option and emit a selection change event for this option
         * @private
         * @param {?} skip
         * @return {?}
         */

      }, {
        key: "_clearPreviousSelectedOption",
        value: function _clearPreviousSelectedOption(skip) {
          this.autocomplete.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if (option != skip && option.selected) {
              option.deselect();
            }
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this17 = this;

          if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
          }
          /** @type {?} */


          var overlayRef = this._overlayRef;

          if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.

            overlayRef.keydownEvents().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
              // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] && event.altKey) {
                _this17._resetActiveItem();

                _this17._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                // reach the input itself and cause the overlay to be reopened.


                event.stopPropagation();
                event.preventDefault();
              }
            });

            if (this._viewportRuler) {
              this._viewportSubscription = this._viewportRuler.change().subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this17.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this17._getPanelWidth()
                  });
                }
              });
            }
          } else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());

            overlayRef.updateSize({
              width: this._getPanelWidth()
            });
          }

          if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
          }
          /** @type {?} */


          var wasOpen = this.panelOpen;

          this.autocomplete._setVisibility();

          this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
          // autocomplete won't be shown if there are no options.

          if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

          this._setStrategyPositions(strategy);

          this._positionStrategy = strategy;
          return strategy;
        }
        /**
         * Sets the positions on a position strategy based on the directive's input state.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_setStrategyPositions",
        value: function _setStrategyPositions(positionStrategy) {
          // Note that we provide horizontal fallback positions, even though by default the dropdown
          // width matches the input, because consumers can override the width. See #18854.

          /** @type {?} */
          var belowPositions = [{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }]; // The overlay edge connected to the trigger should have squared corners, while
          // the opposite end has rounded corners. We apply a CSS class to swap the
          // border-radius based on the overlay position.

          /** @type {?} */

          var panelClass = 'mat-autocomplete-panel-above';
          /** @type {?} */

          var abovePositions = [{
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            panelClass: panelClass
          }, {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            panelClass: panelClass
          }];
          /** @type {?} */

          var positions;

          if (this.position === 'above') {
            positions = abovePositions;
          } else if (this.position === 'below') {
            positions = belowPositions;
          } else {
            positions = [].concat(belowPositions, abovePositions);
          }

          positionStrategy.withPositions(positions);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getConnectedElement",
        value: function _getConnectedElement() {
          if (this.connectedTo) {
            return this.connectedTo.elementRef;
          }

          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getPanelWidth",
        value: function _getPanelWidth() {
          return this.autocomplete.panelWidth || this._getHostWidth();
        }
        /**
         * Returns the width of the input element, so the panel width can match it.
         * @private
         * @return {?}
         */

      }, {
        key: "_getHostWidth",
        value: function _getHostWidth() {
          return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        /**
         * Resets the active item to -1 so arrow events will activate the
         * correct options, or to 0 if the consumer opted into it.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetActiveItem",
        value: function _resetActiveItem() {
          this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
        }
        /**
         * Determines whether the panel can be opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_canOpen",
        value: function _canOpen() {
          /** @type {?} */
          var element = this._element.nativeElement;
          return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var _a;

          return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
        }
      }, {
        key: "autocompleteDisabled",
        get: function get() {
          return this._autocompleteDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._overlayAttached && this.autocomplete.showPanel;
        }
      }, {
        key: "panelClosingActions",
        get: function get() {
          var _this18 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this18._overlayAttached;
          })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this18._overlayAttached;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])()).pipe( // Normalize the output so we return a consistent type.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
          }));
        }
        /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */

      }, {
        key: "activeOption",
        get: function get() {
          if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
          }

          return null;
        }
      }]);

      return MatAutocompleteTrigger;
    }();

    MatAutocompleteTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: "input[matAutocomplete], textarea[matAutocomplete]",
        host: {
          'class': 'mat-autocomplete-trigger',
          '[attr.autocomplete]': 'autocompleteAttribute',
          '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
          '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
          '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
          '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
          '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
          '[attr.aria-haspopup]': '!autocompleteDisabled',
          // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
          // a little earlier. This avoids issues where IE delays the focusing of the input.
          '(focusin)': '_handleFocus()',
          '(blur)': '_onTouched()',
          '(input)': '_handleInput($event)',
          '(keydown)': '_handleKeydown($event)'
        },
        exportAs: 'matAutocompleteTrigger',
        providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    MatAutocompleteTrigger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
      }];
    };

    MatAutocompleteTrigger.propDecorators = {
      autocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocomplete']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompletePosition']
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteConnectedTo']
      }],
      autocompleteAttribute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['autocomplete']
      }],
      autocompleteDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteDisabled']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/autocomplete-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatAutocompleteModule = function MatAutocompleteModule() {
      _classCallCheck(this, MatAutocompleteModule);
    };

    MatAutocompleteModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/autocomplete/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=autocomplete.js.map

    /***/
  },

  /***/
  "./src/app/components/autocomplete/autocomplete-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/autocomplete/autocomplete-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: AutocompleteRoutingModule */

  /***/
  function srcAppComponentsAutocompleteAutocompleteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteRoutingModule", function () {
      return AutocompleteRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _autocomplete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./autocomplete.component */
    "./src/app/components/autocomplete/autocomplete.component.ts");

    var routes = [{
      path: '',
      component: _autocomplete_component__WEBPACK_IMPORTED_MODULE_1__["AutocompleteComponent"]
    }];

    var AutocompleteRoutingModule = function AutocompleteRoutingModule() {
      _classCallCheck(this, AutocompleteRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/autocomplete/autocomplete.component.ngfactory.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/autocomplete/autocomplete.component.ngfactory.js ***!
    \*****************************************************************************/

  /*! exports provided: RenderType_AutocompleteComponent, View_AutocompleteComponent_0, View_AutocompleteComponent_Host_0, AutocompleteComponentNgFactory */

  /***/
  function srcAppComponentsAutocompleteAutocompleteComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AutocompleteComponent", function () {
      return RenderType_AutocompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AutocompleteComponent_0", function () {
      return View_AutocompleteComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AutocompleteComponent_Host_0", function () {
      return View_AutocompleteComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteComponentNgFactory", function () {
      return AutocompleteComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/option/terminus-ui-option.ngfactory */
    "../../dist/libs/ui/option/terminus-ui-option.ngfactory.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */
    "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dist_libs_ui_autocomplete_terminus_ui_autocomplete_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/autocomplete/terminus-ui-autocomplete.ngfactory */
    "../../dist/libs/ui/autocomplete/terminus-ui-autocomplete.ngfactory.js");
    /* harmony import */


    var _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-autocomplete */
    "../../dist/libs/ui/autocomplete/fesm2015/terminus-ui-autocomplete.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _autocomplete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./autocomplete.component */
    "./src/app/components/autocomplete/autocomplete.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AutocompleteComponent = [];

    var RenderType_AutocompleteComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_AutocompleteComponent,
      data: {}
    });

    function View_AutocompleteComponent_1(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[2, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
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

        var currVal_12 = _v.context.$implicit.name;

        _ck(_v, 4, 0, currVal_12);
      });
    }

    function View_AutocompleteComponent_2(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[6, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        option: [0, "option"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, {
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

        var currVal_12 = _v.context.$implicit.name;

        _ck(_v, 4, 0, currVal_12);
      });
    }

    function View_AutocompleteComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        list: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 38, "ts-card", [["class", "ts-card"], ["fxFlex", ""], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 35, "form", [["fxLayout", "column"], ["fxLayout.gt-sm", "row"], ["fxLayoutGap", "1rem"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 10, "aside", [["class", "deprecated"], ["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\uD83D\uDEA8 DEPRECATED \uD83D\uDEA8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Please use "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["TsSelectionList"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", "small--1"]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Autocomplete (multiple) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 12, "ts-autocomplete", [["class", "ts-autocomplete"], ["hint", "Begin typing to select.."], ["label", "Autocomplete Example"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-autocomplete--required", null], [2, "ts-autocomplete--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0]], [[null, "queryChange"], [null, "duplicateSelection"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("queryChange" === en) {
          var pd_0 = _co.queryHasChanged($event) !== false;
          ad = pd_0 && ad;
        }

        if ("duplicateSelection" === en) {
          var pd_1 = _co.duplicate($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_autocomplete_terminus_ui_autocomplete_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TsAutocompleteComponent_0"], _dist_libs_ui_autocomplete_terminus_ui_autocomplete_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TsAutocompleteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__["TsAutocompleteComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__["TsFormFieldControl"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__["TsAutocompleteComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 4440064, null, 2, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__["TsAutocompleteComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_12__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], {
        allowMultiple: [0, "allowMultiple"],
        allowDuplicateSelections: [1, "allowDuplicateSelections"],
        reopenAfterSelection: [2, "reopenAfterSelection"],
        hint: [3, "hint"],
        showProgress: [4, "showProgress"],
        label: [5, "label"],
        displayFormatter: [6, "displayFormatter"]
      }, {
        duplicateSelection: "duplicateSelection",
        queryChange: "queryChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 2, null, View_AutocompleteComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](38, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 27, "ts-card", [["class", "ts-card"], ["fxFlex", ""], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, 0, 24, "form", [["fxLayout", "column"], ["fxLayout.gt-sm", "row"], ["fxLayoutGap", "1rem"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", "small--1"]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Autocomplete (single) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 12, "ts-autocomplete", [["class", "ts-autocomplete"], ["hint", "Begin typing to select.."], ["label", "Autocomplete Example"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-autocomplete--required", null], [2, "ts-autocomplete--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0]], [[null, "queryChange"], [null, "duplicateSelection"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("queryChange" === en) {
          var pd_0 = _co.queryHasChanged($event) !== false;
          ad = pd_0 && ad;
        }

        if ("duplicateSelection" === en) {
          var pd_1 = _co.duplicate($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_autocomplete_terminus_ui_autocomplete_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TsAutocompleteComponent_0"], _dist_libs_ui_autocomplete_terminus_ui_autocomplete_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TsAutocompleteComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__["TsAutocompleteComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_11__["TsFormFieldControl"], null, [_terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__["TsAutocompleteComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 4440064, null, 2, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_10__["TsAutocompleteComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_12__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], {
        allowMultiple: [0, "allowMultiple"],
        allowDuplicateSelections: [1, "allowDuplicateSelections"],
        reopenAfterSelection: [2, "reopenAfterSelection"],
        hint: [3, "hint"],
        showProgress: [4, "showProgress"],
        label: [5, "label"],
        displayFormatter: [6, "displayFormatter"]
      }, {
        duplicateSelection: "duplicateSelection",
        queryChange: "queryChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 2, null, View_AutocompleteComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](66, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], [])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 3, 0, currVal_0);

        var currVal_8 = "";

        _ck(_v, 10, 0, currVal_8);

        var currVal_11 = _ck(_v, 17, 0, "/components/selection-list");

        _ck(_v, 16, 0, currVal_11);

        var currVal_13 = "small--1";

        _ck(_v, 22, 0, currVal_13);

        var currVal_26 = _co.stateCtrl;

        _ck(_v, 27, 0, currVal_26);

        var currVal_27 = true;
        var currVal_28 = false;
        var currVal_29 = false;
        var currVal_30 = "Begin typing to select..";
        var currVal_31 = _co.fakeAsync;
        var currVal_32 = "Autocomplete Example";
        var currVal_33 = _co.formatter;

        _ck(_v, 30, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);

        var currVal_34 = "";

        _ck(_v, 33, 0, currVal_34);

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 35, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).transform(_co.filteredStates));

        _ck(_v, 35, 0, currVal_35);

        var currVal_37 = "";

        _ck(_v, 42, 0, currVal_37);

        var currVal_46 = "small--1";

        _ck(_v, 50, 0, currVal_46);

        var currVal_59 = _co.singleStateCtrl;

        _ck(_v, 55, 0, currVal_59);

        var currVal_60 = false;
        var currVal_61 = true;
        var currVal_62 = false;
        var currVal_63 = "Begin typing to select..";
        var currVal_64 = _co.fakeAsync;
        var currVal_65 = "Autocomplete Example";
        var currVal_66 = _co.formatter;

        _ck(_v, 58, 0, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66);

        var currVal_67 = "";

        _ck(_v, 61, 0, currVal_67);

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 63, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).transform(_co.filteredStates));

        _ck(_v, 63, 0, currVal_68);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).ngClassPending;

        _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).target;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).href;

        _ck(_v, 15, 0, currVal_9, currVal_10);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).tsCardTitle;

        _ck(_v, 20, 0, currVal_12);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassUntouched;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassTouched;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPristine;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassDirty;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassValid;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassInvalid;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 29).ngClassPending;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).isRequired;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).isDisabled;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).optionIds : null;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).isRequired.toString();

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).allowMultiple;

        _ck(_v, 24, 1, [currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]);

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).transform(_co.stateCtrl.value));

        _ck(_v, 38, 0, currVal_36);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassUntouched;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassTouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassPristine;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassDirty;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassValid;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassInvalid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).ngClassPending;

        _ck(_v, 43, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 49).tsCardTitle;

        _ck(_v, 48, 0, currVal_45);

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassUntouched;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassTouched;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassPristine;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassDirty;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassValid;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassInvalid;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ngClassPending;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).isRequired;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).isDisabled;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).optionIds : null;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).isRequired.toString();

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).allowMultiple;

        _ck(_v, 52, 1, [currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58]);

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).transform(_co.singleStateCtrl.value));

        _ck(_v, 66, 0, currVal_69);
      });
    }

    function View_AutocompleteComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-autocomplete", [], null, null, null, View_AutocompleteComponent_0, RenderType_AutocompleteComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _autocomplete_component__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"], [], null, null)], null, null);
    }

    var AutocompleteComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-autocomplete", _autocomplete_component__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"], View_AutocompleteComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/autocomplete/autocomplete.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/autocomplete/autocomplete.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AutocompleteComponent */

  /***/
  function srcAppComponentsAutocompleteAutocompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
      return AutocompleteComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");

    var AutocompleteComponent = /*#__PURE__*/function () {
      function AutocompleteComponent() {
        var _this19 = this;

        _classCallCheck(this, AutocompleteComponent);

        this.states = [{
          name: 'Arkansas',
          population: '2.978M'
        }, {
          name: 'Alabama',
          population: '3.29M'
        }, {
          name: 'Alaska',
          population: '1.341M'
        }, {
          name: 'CALIFORNIA',
          population: '39.14M'
        }, {
          name: 'Florida',
          population: '20.27M'
        }, {
          name: 'Texas',
          population: '27.47M'
        }, {
          name: 'Arizona',
          population: '24.112M'
        }, {
          name: 'Arkansas 2',
          population: '2.978M'
        }, {
          name: 'Alabama 2',
          population: '3.29M'
        }, {
          name: 'Alaska 2',
          population: '1.341M'
        }, {
          name: 'California 2',
          population: '39.14M'
        }, {
          name: 'Florida 2',
          population: '20.27M'
        }, {
          name: 'Texas 2',
          population: '27.47M'
        }, {
          name: 'Arizona 2',
          population: '24.112M'
        }, {
          name: 'Arkansas 3',
          population: '2.978M'
        }, {
          name: 'Alabama 3',
          population: '3.29M'
        }, {
          name: 'Alaska 3',
          population: '1.341M'
        }, {
          name: 'California 3',
          population: '39.14M'
        }, {
          name: 'Florida 3',
          population: '20.27M'
        }, {
          name: 'Texas 3',
          population: '27.47M'
        }, {
          name: 'Arizona 3',
          population: '24.112M'
        }];
        this.myQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.fakeAsync = false;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]([this.states[4]], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.singleStateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]([this.states[4]], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.filteredStates = this.myQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
          var val = state ? _this19.filterStates(state) : [];
          console.log('Demo: in pipe: ', state, val);
          return val;
        }));
      }

      _createClass(AutocompleteComponent, [{
        key: "filterStates",
        value: function filterStates(value) {
          var filterValue = value.toLowerCase();
          return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "log",
        value: function log(v) {
          console.log('DEMO: Form value: ', v);
        }
      }, {
        key: "queryHasChanged",
        value: function queryHasChanged(v) {
          console.log('DEMO: query string changed: ', v);
          this.myQuery$.next(v);
        }
      }, {
        key: "duplicate",
        value: function duplicate(e) {
          console.log('DEMO: Duplicate selection: ', e);
        }
      }, {
        key: "formatter",
        value: function formatter(value) {
          return value.name;
        }
      }]);

      return AutocompleteComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/autocomplete/autocomplete.module.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/components/autocomplete/autocomplete.module.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: AutocompleteModuleNgFactory */

  /***/
  function srcAppComponentsAutocompleteAutocompleteModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteModuleNgFactory", function () {
      return AutocompleteModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _autocomplete_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./autocomplete.module */
    "./src/app/components/autocomplete/autocomplete.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _autocomplete_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./autocomplete.component.ngfactory */
    "./src/app/components/autocomplete/autocomplete.component.ngfactory.js");
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


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-validators */
    "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
    /* harmony import */


    var _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @terminus/ui-autocomplete */
    "../../dist/libs/ui/autocomplete/fesm2015/terminus-ui-autocomplete.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./autocomplete-routing.module */
    "./src/app/components/autocomplete/autocomplete-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _autocomplete_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./autocomplete.component */
    "./src/app/components/autocomplete/autocomplete.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AutocompleteModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__["AutocompleteModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _autocomplete_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AutocompleteComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_19__["TS_AUTOCOMPLETE_SCROLL_STRATEGY"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_19__["TS_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_21__["AutocompleteRoutingModule"], _autocomplete_routing_module__WEBPACK_IMPORTED_MODULE_21__["AutocompleteRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_24__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_24__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_34__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_34__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_36__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_36__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_37__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_37__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_38__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_38__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_19__["TsAutocompleteModule"], _terminus_ui_autocomplete__WEBPACK_IMPORTED_MODULE_19__["TsAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_42__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_42__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_43__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_43__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _autocomplete_module__WEBPACK_IMPORTED_MODULE_1__["AutocompleteModule"], _autocomplete_module__WEBPACK_IMPORTED_MODULE_1__["AutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ROUTES"], function () {
        return [[{
          path: "",
          component: _autocomplete_component__WEBPACK_IMPORTED_MODULE_44__["AutocompleteComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__["TS_DATE_FORMATS"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/autocomplete/autocomplete.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/autocomplete/autocomplete.module.ts ***!
    \****************************************************************/

  /*! exports provided: AutocompleteModule */

  /***/
  function srcAppComponentsAutocompleteAutocompleteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteModule", function () {
      return AutocompleteModule;
    });

    var AutocompleteModule = function AutocompleteModule() {
      _classCallCheck(this, AutocompleteModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=autocomplete-autocomplete-module-ngfactory-es5.js.map