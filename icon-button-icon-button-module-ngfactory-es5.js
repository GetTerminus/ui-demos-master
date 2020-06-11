function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon-button-icon-button-module-ngfactory"], {
  /***/
  "./src/app/components/icon-button/icon-button-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/icon-button/icon-button-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: IconButtonRoutingModule */

  /***/
  function srcAppComponentsIconButtonIconButtonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconButtonRoutingModule", function () {
      return IconButtonRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _icon_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./icon-button.component */
    "./src/app/components/icon-button/icon-button.component.ts");

    var routes = [{
      path: '',
      component: _icon_button_component__WEBPACK_IMPORTED_MODULE_1__["IconButtonComponent"]
    }];

    var IconButtonRoutingModule = function IconButtonRoutingModule() {
      _classCallCheck(this, IconButtonRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/icon-button/icon-button.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ./src/app/components/icon-button/icon-button.component.ngfactory.js ***!
    \***************************************************************************/

  /*! exports provided: RenderType_IconButtonComponent, View_IconButtonComponent_0, View_IconButtonComponent_Host_0, IconButtonComponentNgFactory */

  /***/
  function srcAppComponentsIconButtonIconButtonComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_IconButtonComponent", function () {
      return RenderType_IconButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_IconButtonComponent_0", function () {
      return View_IconButtonComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_IconButtonComponent_Host_0", function () {
      return View_IconButtonComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconButtonComponentNgFactory", function () {
      return IconButtonComponentNgFactory;
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


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/icon-button/terminus-ui-icon-button.ngfactory */
    "../../dist/libs/ui/icon-button/terminus-ui-icon-button.ngfactory.js");
    /* harmony import */


    var _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-icon-button */
    "../../dist/libs/ui/icon-button/fesm2015/terminus-ui-icon-button.js");
    /* harmony import */


    var _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/button/terminus-ui-button.ngfactory */
    "../../dist/libs/ui/button/terminus-ui-button.ngfactory.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _icon_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./icon-button.component */
    "./src/app/components/icon-button/icon-button.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_IconButtonComponent = [];

    var RenderType_IconButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_IconButtonComponent,
      data: {}
    });

    function View_IconButtonComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "ts-card", [["class", "ts-card"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 11, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "ts-icon-button", [["class", "ts-icon-button"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.clickTheme("default") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TsIconButtonComponent_0"], _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TsIconButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 49152, null, 0, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_7__["TsIconButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["forum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "ts-button", [["class", "ts-button"]], null, null, null, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_9__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Test for alignment with standard button"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 0, 4, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "ts-icon-button", [["class", "ts-icon-button"], ["theme", "primary"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.clickTheme("primary") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TsIconButtonComponent_0"], _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TsIconButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 49152, null, 0, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_7__["TsIconButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["add_circle"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, 0, 4, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "ts-icon-button", [["class", "ts-icon-button"], ["theme", "accent"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.clickTheme("accent") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TsIconButtonComponent_0"], _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TsIconButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 49152, null, 0, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_7__["TsIconButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["reply_all"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 0, 4, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 2, "ts-icon-button", [["class", "ts-icon-button"], ["theme", "warn"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.clickTheme("warn") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TsIconButtonComponent_0"], _dist_libs_ui_icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TsIconButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 49152, null, 0, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_7__["TsIconButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["delete_forever"]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "start center";

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = "";

        _ck(_v, 5, 0, currVal_2);

        _ck(_v, 12, 0);

        var currVal_3 = "";

        _ck(_v, 15, 0, currVal_3);

        var currVal_4 = "";

        _ck(_v, 20, 0, currVal_4);

        var currVal_5 = "";

        _ck(_v, 25, 0, currVal_5);
      }, null);
    }

    function View_IconButtonComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-icon-button", [], null, null, null, View_IconButtonComponent_0, RenderType_IconButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _icon_button_component__WEBPACK_IMPORTED_MODULE_11__["IconButtonComponent"], [], null, null)], null, null);
    }

    var IconButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-icon-button", _icon_button_component__WEBPACK_IMPORTED_MODULE_11__["IconButtonComponent"], View_IconButtonComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/icon-button/icon-button.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/icon-button/icon-button.component.ts ***!
    \*****************************************************************/

  /*! exports provided: IconButtonComponent */

  /***/
  function srcAppComponentsIconButtonIconButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function () {
      return IconButtonComponent;
    });

    var IconButtonComponent = /*#__PURE__*/function () {
      function IconButtonComponent() {
        _classCallCheck(this, IconButtonComponent);
      }

      _createClass(IconButtonComponent, [{
        key: "clickTheme",
        value: function clickTheme(v) {
          console.log("DEMO: '".concat(v, "' icon-button clicked."));
        }
      }]);

      return IconButtonComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/icon-button/icon-button.module.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/components/icon-button/icon-button.module.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: IconButtonModuleNgFactory */

  /***/
  function srcAppComponentsIconButtonIconButtonModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconButtonModuleNgFactory", function () {
      return IconButtonModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _icon_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./icon-button.module */
    "./src/app/components/icon-button/icon-button.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _icon_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./icon-button.component.ngfactory */
    "./src/app/components/icon-button/icon-button.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _icon_button_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./icon-button-routing.module */
    "./src/app/components/icon-button/icon-button-routing.module.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @terminus/ui-icon-button */
    "../../dist/libs/ui/icon-button/fesm2015/terminus-ui-icon-button.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _icon_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./icon-button.component */
    "./src/app/components/icon-button/icon-button.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var IconButtonModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_icon_button_module__WEBPACK_IMPORTED_MODULE_1__["IconButtonModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _icon_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["IconButtonComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _icon_button_routing_module__WEBPACK_IMPORTED_MODULE_13__["IconButtonRoutingModule"], _icon_button_routing_module__WEBPACK_IMPORTED_MODULE_13__["IconButtonRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_20__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_20__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_21__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_21__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_22__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_22__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_23__["TsIconButtonModule"], _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_23__["TsIconButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_24__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_24__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _icon_button_module__WEBPACK_IMPORTED_MODULE_1__["IconButtonModule"], _icon_button_module__WEBPACK_IMPORTED_MODULE_1__["IconButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
        return [[{
          path: "",
          component: _icon_button_component__WEBPACK_IMPORTED_MODULE_25__["IconButtonComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/icon-button/icon-button.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/icon-button/icon-button.module.ts ***!
    \**************************************************************/

  /*! exports provided: IconButtonModule */

  /***/
  function srcAppComponentsIconButtonIconButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconButtonModule", function () {
      return IconButtonModule;
    });

    var IconButtonModule = function IconButtonModule() {
      _classCallCheck(this, IconButtonModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=icon-button-icon-button-module-ngfactory-es5.js.map