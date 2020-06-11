function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chip-chip-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js":
  /*!**************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/menu/fesm2015/terminus-ui-menu.js ***!
    \**************************************************************************************************/

  /*! exports provided: TsMenuComponent, TsMenuModule */

  /***/
  function distLibsUiMenuFesm2015TerminusUiMenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsMenuComponent", function () {
      return TsMenuComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsMenuModule", function () {
      return TsMenuModule;
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /**
     * A presentational component to render a dropdown menu.
     *
     * @example
     * <ts-menu
     *              [defaultOpened]="false"
     *              format="filled"
     *              [isDisabled]="false"
     *              [menuItemsTemplate]="myTemplate"
     *              menuPositionX="20px"
     *              menuPositionY="20px"
     *              theme="accent"
     *              triggerType="utility"
     * >Select Item</ts-menu>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/menu</example-url>
     */


    var TsMenuComponent = /*#__PURE__*/function () {
      function TsMenuComponent() {
        _classCallCheck(this, TsMenuComponent);

        /**
         * Define the default icon for the trigger button
         */
        this.TRIGGER_ICON_DEFAULT = 'arrow_drop_down';
        /**
         * Define the utility icon for the trigger button
         */

        this.TRIGGER_ICON_UTILITY = 'more_vert';
        /**
         * Define if the menu should overlap the trigger
         */

        this.shouldOverlapTrigger = false;
        /**
         * Define if the menu should be opened by default
         */

        this.defaultOpened = false;
        /**
         * Define the button format
         */

        this.format = 'filled';
        /**
         * Define if the menu should be disabled
         */

        this.isDisabled = false;
        /**
         * Define the X menu position
         */

        this.menuPositionX = 'after';
        /**
         * Define the Y menu position
         */

        this.menuPositionY = 'below';
        /**
         * Define the menu theme
         */

        this.theme = 'primary';
        /**
         * Define the type of trigger {@link TsMenuTriggerTypes}
         *
         * - 'utility' will expose a simple fab trigger: `⋮`
         * - 'default' will expose a standard {@link TsButtonComponent}
         */

        this.triggerType = 'default';
      }
      /**
       * Return if the current menu is a utility menu
       */


      _createClass(TsMenuComponent, [{
        key: "ngOnInit",

        /**
         * Set the triggerIcon based on the triggerType
         */
        value: function ngOnInit() {
          this.triggerIcon = this.triggerType === 'default' ? this.TRIGGER_ICON_DEFAULT : this.TRIGGER_ICON_UTILITY;
        }
        /**
         * After the view has initialized, open the menu if it is defaulted to 'open'
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.defaultOpened) {
            this.trigger.openMenu();
          }
        }
      }, {
        key: "isUtilityMenu",
        get: function get() {
          return this.triggerType === 'utility';
        }
      }]);

      return TsMenuComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])], TsMenuComponent.prototype, "trigger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsMenuComponent.prototype, "defaultOpened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsMenuComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsMenuComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], TsMenuComponent.prototype, "menuItemsTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsMenuComponent.prototype, "menuPositionX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsMenuComponent.prototype, "menuPositionY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsMenuComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsMenuComponent.prototype, "triggerType", void 0);
    TsMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-menu',
      template: "<div\n  class=\"c-menu qa-menu\"\n  [ngClass]=\"{'c-menu--utility': isUtilityMenu}\"\n>\n  <mat-menu\n    #menu=\"matMenu\"\n    [yPosition]=\"menuPositionY\"\n    [xPosition]=\"menuPositionX\"\n    [overlapTrigger]=\"shouldOverlapTrigger\"\n    backdropClass=\"ts-menu__backdrop\"\n    class=\"ts-menu__panel\"\n  >\n    <ng-container [ngTemplateOutlet]=\"menuItemsTemplate\"></ng-container>\n  </mat-menu>\n\n  <ts-button\n    *ngIf=\"!isUtilityMenu\"\n    class=\"c-menu__trigger qa-menu-trigger\"\n    [theme]=\"theme\"\n    [format]=\"format\"\n    [matMenuTriggerFor]=\"menu\"\n    [isDisabled]=\"isDisabled\"\n    [attr.data-disabled]=\"isDisabled\"\n    format=\"filled\"\n  >\n    <ng-content></ng-content>\n\n    <ts-icon class=\"c-menu__caret\">\n      {{ triggerIcon }}\n    </ts-icon>\n  </ts-button>\n\n  <button\n    *ngIf=\"isUtilityMenu\"\n    class=\"c-menu__trigger c-menu__trigger--utility qa-menu-trigger\"\n    mat-icon-button\n    [matMenuTriggerFor]=\"menu\"\n    [disabled]=\"isDisabled\"\n  >\n    <ts-icon>\n      {{ triggerIcon }}\n    </ts-icon>\n  </button>\n</div>\n",
      host: {
        'class': 'ts-menu',
        '[class.ts-menu--disabled]': 'isDisabled'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsMenu',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-menu{--menu-caret-icon-adjustment:-.4em;display:inline-block}.ts-menu :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-menu h1,.ts-menu h2,.ts-menu h3,.ts-menu h4,.ts-menu h5,.ts-menu p{margin:unset}.ts-menu--disabled{cursor:not-allowed}.ts-menu ts-button[data-disabled=true]{pointer-events:none}.ts-menu .c-menu{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;max-height:12rem}.ts-menu .c-menu:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.c-menu .c-menu__trigger .mat-button-wrapper{display:inline-block}.c-menu .c-menu__trigger .c-icon{vertical-align:middle}.c-menu .c-menu__trigger .c-button .c-menu__caret{margin-right:var(--menu-caret-icon-adjustment)}.ts-menu__panel .mat-menu-content{background-color:var(--ts-color-base-white)}.ts-menu__panel .mat-menu-content>*{display:block}.ts-menu__panel .ts-checkbox{background-color:var(--ts-color-base-white)}.ts-menu__panel .cdk-drag-placeholder{min-height:50px}.ts-checkbox.cdk-drag-preview{align-items:center;display:flex;flex-direction:row;padding:0 var(--ts-space-inset-500)}.c-card .c-menu.c-menu--utility{position:absolute;right:var(--ts-space-inset-200);top:var(--ts-space-inset-200)}"]
    })], TsMenuComponent);

    var TsMenuModule = function TsMenuModule() {
      _classCallCheck(this, TsMenuModule);
    };

    TsMenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_5__["TsButtonModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_6__["TsIconModule"]],
      exports: [TsMenuComponent],
      declarations: [TsMenuComponent]
    })], TsMenuModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-menu.js.map

    /***/
  },

  /***/
  "./src/app/components/chip/chip-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/chip/chip-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ChipRoutingModule */

  /***/
  function srcAppComponentsChipChipRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipRoutingModule", function () {
      return ChipRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _chip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chip.component */
    "./src/app/components/chip/chip.component.ts");

    var routes = [{
      path: '',
      component: _chip_component__WEBPACK_IMPORTED_MODULE_1__["ChipComponent"]
    }];

    var ChipRoutingModule = function ChipRoutingModule() {
      _classCallCheck(this, ChipRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/chip/chip.component.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/components/chip/chip.component.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: RenderType_ChipComponent, View_ChipComponent_0, View_ChipComponent_Host_0, ChipComponentNgFactory */

  /***/
  function srcAppComponentsChipChipComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ChipComponent", function () {
      return RenderType_ChipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ChipComponent_0", function () {
      return View_ChipComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ChipComponent_Host_0", function () {
      return View_ChipComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipComponentNgFactory", function () {
      return ChipComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/chip/terminus-ui-chip.ngfactory */
    "../../dist/libs/ui/chip/terminus-ui-chip.ngfactory.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */
    "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _chip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chip.component */
    "./src/app/components/chip/chip.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ChipComponent = [];

    var RenderType_ChipComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ChipComponent,
      data: {}
    });

    function View_ChipComponent_1(_l) {
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
          var pd_4 = _co.removeChip($event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsChipComponent_0"], _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsChipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, [[1, 4]], 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_3__["TsDocumentService"]], {
        isDisabled: [0, "isDisabled"],
        isRemovable: [1, "isRemovable"],
        isSelectable: [2, "isSelectable"],
        value: [3, "value"]
      }, {
        remove: "remove"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = _co.disabled;
        var currVal_10 = !_co.readonly && _co.removable;
        var currVal_11 = _co.selectable;
        var currVal_12 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_9, currVal_10, currVal_11, currVal_12);
      }, function (_ck, _v) {
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

        var currVal_13 = _v.context.$implicit;

        _ck(_v, 2, 0, currVal_13);
      });
    }

    function View_ChipComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 60, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Chip"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 48, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 15, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Orientation: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 13, "select", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.orientation = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "option", [["selected", "selected"], ["value", "horizontal"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Horizontal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 3, "option", [["value", "vertical"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Vertical"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 9, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Chip Collection Disabled: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.disabled = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 9, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Allow chip removal: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.removable = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Allow chip selection: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.selectable = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, 0, 4, "ts-chip-collection", [["class", "ts-chip-collection"]], [[2, "ts-chip-collection--disabled", null], [2, "ts-chip-collection--vertical", null], [2, "ts-chip-collection--selectable", null], [1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-disabled", 0], [1, "aria-multiselectable", 0], [1, "aria-orientation", 0], [1, "aria-readonly", 0], [1, "aria-required", 0], [1, "aria-selectable", 0], [1, "role", 0], [8, "id", 0]], [[null, "collectionChange"], [null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).focus() !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).blur() !== false;
          ad = pd_1 && ad;
        }

        if ("keydown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).keydown($event) !== false;
          ad = pd_2 && ad;
        }

        if ("collectionChange" === en) {
          var pd_3 = _co.change($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsChipCollectionComponent_0"], _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsChipCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 5488640, null, 1, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], {
        allowMultipleSelections: [0, "allowMultipleSelections"],
        isDisabled: [1, "isDisabled"],
        isSelectable: [2, "isSelectable"],
        orientation: [3, "orientation"]
      }, {
        collectionChange: "collectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        chips: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_ChipComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 23, "ts-card", [["class", "ts-card"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Badge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, 0, 5, "div", [["tsVerticalSpacing", "small--1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 3, "ts-chip", [["class", "ts-chip"], ["role", "option"], ["tsChipBadge", ""]], [[2, "ts-chip--primary", null], [2, "ts-chip--accent", null], [2, "ts-chip--warn", null], [1, "tabindex", 0], [2, "ts-chip--selected", null], [2, "ts-chip--disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "blur"], [null, "click"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("blur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).handleBlur() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).handleClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).focus() !== false;
          ad = pd_2 && ad;
        }

        if ("keydown" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).handleKeydown($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsChipComponent_0"], _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsChipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 180224, null, 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_3__["TsDocumentService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 81920, null, 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipBadgeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["One"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, 0, 5, "div", [["tsVerticalSpacing", "small--1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 3, "ts-chip", [["class", "ts-chip"], ["role", "option"], ["theme", "accent"], ["tsChipBadge", ""]], [[2, "ts-chip--primary", null], [2, "ts-chip--accent", null], [2, "ts-chip--warn", null], [1, "tabindex", 0], [2, "ts-chip--selected", null], [2, "ts-chip--disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "blur"], [null, "click"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("blur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).handleBlur() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).handleClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).focus() !== false;
          ad = pd_2 && ad;
        }

        if ("keydown" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).handleKeydown($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsChipComponent_0"], _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsChipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 180224, null, 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_3__["TsDocumentService"]], {
        theme: [0, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 81920, null, 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipBadgeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Two"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, 0, 5, "div", [["tsVerticalSpacing", "small--1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 3, "ts-chip", [["class", "ts-chip"], ["role", "option"], ["theme", "warn"], ["tsChipBadge", ""]], [[2, "ts-chip--primary", null], [2, "ts-chip--accent", null], [2, "ts-chip--warn", null], [1, "tabindex", 0], [2, "ts-chip--selected", null], [2, "ts-chip--disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "blur"], [null, "click"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("blur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).handleBlur() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).handleClick($event) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).focus() !== false;
          ad = pd_2 && ad;
        }

        if ("keydown" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).handleKeydown($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsChipComponent_0"], _dist_libs_ui_chip_terminus_ui_chip_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsChipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 180224, null, 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_3__["TsDocumentService"]], {
        theme: [0, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 81920, null, 0, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipBadgeDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_2__["TsChipComponent"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Three"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_2 = "";

        _ck(_v, 5, 0, currVal_2);

        var currVal_3 = "";

        _ck(_v, 8, 0, currVal_3);

        var currVal_11 = _co.orientation;

        _ck(_v, 14, 0, currVal_11);

        var currVal_12 = "horizontal";

        _ck(_v, 18, 0, currVal_12);

        var currVal_13 = "horizontal";

        _ck(_v, 19, 0, currVal_13);

        var currVal_14 = "vertical";

        _ck(_v, 22, 0, currVal_14);

        var currVal_15 = "vertical";

        _ck(_v, 23, 0, currVal_15);

        var currVal_16 = "";

        _ck(_v, 28, 0, currVal_16);

        var currVal_24 = _co.disabled;

        _ck(_v, 34, 0, currVal_24);

        var currVal_25 = "";

        _ck(_v, 38, 0, currVal_25);

        var currVal_33 = _co.removable;

        _ck(_v, 44, 0, currVal_33);

        var currVal_41 = _co.selectable;

        _ck(_v, 52, 0, currVal_41);

        var currVal_55 = true;
        var currVal_56 = _co.disabled;
        var currVal_57 = _co.selectable;
        var currVal_58 = _co.orientation;

        _ck(_v, 57, 0, currVal_55, currVal_56, currVal_57, currVal_58);

        var currVal_59 = _co.options;

        _ck(_v, 60, 0, currVal_59);

        var currVal_61 = "";

        _ck(_v, 65, 0, currVal_61);

        var currVal_62 = "small--1";

        _ck(_v, 68, 0, currVal_62);

        _ck(_v, 71, 0);

        var currVal_72 = "small--1";

        _ck(_v, 74, 0, currVal_72);

        var currVal_82 = "accent";

        _ck(_v, 76, 0, currVal_82);

        _ck(_v, 77, 0);

        var currVal_83 = "small--1";

        _ck(_v, 80, 0, currVal_83);

        var currVal_93 = "warn";

        _ck(_v, 82, 0, currVal_93);

        _ck(_v, 83, 0);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).tsCardTitle;

        _ck(_v, 3, 0, currVal_1);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassUntouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassTouched;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPristine;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassDirty;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassValid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassInvalid;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPending;

        _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassUntouched;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassTouched;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassPristine;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassDirty;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassValid;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassInvalid;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).ngClassPending;

        _ck(_v, 31, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassUntouched;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassTouched;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassPristine;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassDirty;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassValid;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassInvalid;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 46).ngClassPending;

        _ck(_v, 41, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassUntouched;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassTouched;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassPristine;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassDirty;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassValid;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassInvalid;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassPending;

        _ck(_v, 49, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40);

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isDisabled;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).orientation === "vertical";

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isSelectable;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).tabIndex;
        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ariaDescribedby || null;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isDisabled;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).allowMultipleSelections;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).ariaOrientation;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isReadonly;

        var currVal_51 = false;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isSelectable;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).role;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).id;

        _ck(_v, 56, 1, [currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54]);

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).tsCardTitle;

        _ck(_v, 63, 0, currVal_60);

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).theme === "primary";
        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).theme === "accent";
        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).theme === "warn";
        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).isDisabled ? null : 0 - 1;

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).selected;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).isDisabled;

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).isDisabled || null;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).isDisabled;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).ariaSelected;

        _ck(_v, 69, 0, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71);

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).theme === "primary";
        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).theme === "accent";
        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).theme === "warn";
        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).isDisabled ? null : 0 - 1;

        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).selected;

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).isDisabled;

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).isDisabled || null;

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).isDisabled;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).ariaSelected;

        _ck(_v, 75, 0, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81);

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).theme === "primary";
        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).theme === "accent";
        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).theme === "warn";
        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).isDisabled ? null : 0 - 1;

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).selected;

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).isDisabled;

        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).isDisabled || null;

        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).isDisabled;

        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).ariaSelected;

        _ck(_v, 81, 0, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92);
      });
    }

    function View_ChipComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-chip", [], null, null, null, View_ChipComponent_0, RenderType_ChipComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _chip_component__WEBPACK_IMPORTED_MODULE_9__["ChipComponent"], [], null, null)], null, null);
    }

    var ChipComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-chip", _chip_component__WEBPACK_IMPORTED_MODULE_9__["ChipComponent"], View_ChipComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/chip/chip.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chip/chip.component.ts ***!
    \***************************************************/

  /*! exports provided: ChipComponent */

  /***/
  function srcAppComponentsChipChipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipComponent", function () {
      return ChipComponent;
    });

    var ChipComponent = /*#__PURE__*/function () {
      function ChipComponent() {
        _classCallCheck(this, ChipComponent);

        this.orientation = 'horizontal';
        this.removable = true;
        this.disabled = false;
        this.readonly = false;
        this.selectable = true;
        this.optionsOriginal = ['banana', 'apple', 'orange', 'pear'];
        this.options = this.optionsOriginal.slice();
      }

      _createClass(ChipComponent, [{
        key: "removeChip",
        value: function removeChip(event) {
          console.log('DEMO: remove chip: ', event);

          if (!event.chip.value) {
            return;
          }

          var index = this.options.indexOf(event.chip.value);

          if (index < 0) {
            return;
          }

          this.options.splice(index, 1);
        }
      }, {
        key: "change",
        value: function change(value) {
          console.log('DEMO: collection change triggered: value: ', value);
        }
      }]);

      return ChipComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/chip/chip.module.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/components/chip/chip.module.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: ChipModuleNgFactory */

  /***/
  function srcAppComponentsChipChipModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipModuleNgFactory", function () {
      return ChipModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chip_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chip.module */
    "./src/app/components/chip/chip.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _chip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chip.component.ngfactory */
    "./src/app/components/chip/chip.component.ngfactory.js");
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


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _chip_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./chip-routing.module */
    "./src/app/components/chip/chip-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @terminus/ui-menu */
    "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _chip_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./chip.component */
    "./src/app/components/chip/chip.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ChipModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_chip_module__WEBPACK_IMPORTED_MODULE_1__["ChipModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _chip_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ChipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _chip_routing_module__WEBPACK_IMPORTED_MODULE_12__["ChipRoutingModule"], _chip_routing_module__WEBPACK_IMPORTED_MODULE_12__["ChipRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_23__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_23__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_24__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_24__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_25__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_25__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_26__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_26__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_29__["TsMenuModule"], _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_29__["TsMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_30__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_30__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _chip_module__WEBPACK_IMPORTED_MODULE_1__["ChipModule"], _chip_module__WEBPACK_IMPORTED_MODULE_1__["ChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[{
          path: "",
          component: _chip_component__WEBPACK_IMPORTED_MODULE_31__["ChipComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/chip/chip.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/chip/chip.module.ts ***!
    \************************************************/

  /*! exports provided: ChipModule */

  /***/
  function srcAppComponentsChipChipModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipModule", function () {
      return ChipModule;
    });

    var ChipModule = function ChipModule() {
      _classCallCheck(this, ChipModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=chip-chip-module-ngfactory-es5.js.map