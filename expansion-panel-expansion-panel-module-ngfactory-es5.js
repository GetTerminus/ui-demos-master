function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expansion-panel-expansion-panel-module-ngfactory"], {
  /***/
  "./src/app/components/expansion-panel/expansion-panel-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/expansion-panel/expansion-panel-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ExpansionPanelRoutingModule */

  /***/
  function srcAppComponentsExpansionPanelExpansionPanelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpansionPanelRoutingModule", function () {
      return ExpansionPanelRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _expansion_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./expansion-panel.component */
    "./src/app/components/expansion-panel/expansion-panel.component.ts");

    var routes = [{
      path: '',
      component: _expansion_panel_component__WEBPACK_IMPORTED_MODULE_1__["ExpansionPanelComponent"]
    }];

    var ExpansionPanelRoutingModule = function ExpansionPanelRoutingModule() {
      _classCallCheck(this, ExpansionPanelRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/expansion-panel/expansion-panel.component.ngfactory.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/expansion-panel/expansion-panel.component.ngfactory.js ***!
    \***********************************************************************************/

  /*! exports provided: RenderType_ExpansionPanelComponent, View_ExpansionPanelComponent_0, View_ExpansionPanelComponent_Host_0, ExpansionPanelComponentNgFactory */

  /***/
  function srcAppComponentsExpansionPanelExpansionPanelComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ExpansionPanelComponent", function () {
      return RenderType_ExpansionPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExpansionPanelComponent_0", function () {
      return View_ExpansionPanelComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExpansionPanelComponent_Host_0", function () {
      return View_ExpansionPanelComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponentNgFactory", function () {
      return ExpansionPanelComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/expansion-panel/terminus-ui-expansion-panel.ngfactory */
    "../../dist/libs/ui/expansion-panel/terminus-ui-expansion-panel.ngfactory.js");
    /* harmony import */


    var _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @terminus/ui-expansion-panel */
    "../../dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/fesm2015/collections.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/checkbox/terminus-ui-checkbox.ngfactory */
    "../../dist/libs/ui/checkbox/terminus-ui-checkbox.ngfactory.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/button/terminus-ui-button.ngfactory */
    "../../dist/libs/ui/button/terminus-ui-button.ngfactory.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */
    "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _expansion_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./expansion-panel.component */
    "./src/app/components/expansion-panel/expansion-panel.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ExpansionPanelComponent = [];

    var RenderType_ExpansionPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ExpansionPanelComponent,
      data: {}
    });

    function View_ExpansionPanelComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 9, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], [[null, "opened"], [null, "closed"], [null, "expandedChange"], [null, "destroyed"], [null, "afterExpand"], [null, "afterCollapse"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("opened" === en) {
          var pd_0 = _co.panelOpened() !== false;
          ad = pd_0 && ad;
        }

        if ("closed" === en) {
          var pd_1 = _co.panelClosed() !== false;
          ad = pd_1 && ad;
        }

        if ("expandedChange" === en) {
          var pd_2 = _co.panelExpandedChange($event) !== false;
          ad = pd_2 && ad;
        }

        if ("destroyed" === en) {
          var pd_3 = _co.panelDestroyed() !== false;
          ad = pd_3 && ad;
        }

        if ("afterExpand" === en) {
          var pd_4 = _co.afterPanelExpanded() !== false;
          ad = pd_4 && ad;
        }

        if ("afterCollapse" === en) {
          var pd_5 = _co.afterPanelCollapsed() !== false;
          ad = pd_5 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, {
        closed: "closed",
        opened: "opened",
        destroyed: "destroyed",
        expandedChange: "expandedChange",
        afterExpand: "afterExpand",
        afterCollapse: "afterCollapse"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](6, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](7, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Panel Trigger "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, function (_ck, _v) {
        var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).transparentMode;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).expanded;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).panel.triggerId;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled ? 0 - 1 : 0;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).panel.id;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).isExpanded;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).panel.disabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).isExpanded;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).isTransparent;

        var currVal_10 = _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).currentPanelExpandedState, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).expandedHeight));

        _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);
      });
    }

    function View_ExpansionPanelComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Here is my deferred template! "]))], null, null);
    }

    function View_ExpansionPanelComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 19, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Single panel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 16777216, null, null, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](11, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](12, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Here is my trigger! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Delectus ex maiores deleniti dolor earum minima possimus. Minima excepturi vel quos accusamus. Cupiditate cum ut iure modi. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 61, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Accordion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 7, "ts-checkbox", [["class", "ts-checkbox"], ["tsVerticalSpacing", ""]], [[1, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.allowMultiple = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsCheckboxComponent_0"], _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsCheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 49152, null, 0, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__["TsCheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        ngModel: [0, "ngModel"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__["TsCheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Allow multiple panels to be open "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 48, "ts-accordion", [["class", "ts-accordion"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsAccordionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsAccordionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsAccordionComponent"], [], {
        multi: [0, "multi"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        triggers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], null, [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsAccordionComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 16777216, null, 0, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, 0, 9, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 180224, [[2, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](43, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](44, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, 0, 2, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerTitleComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerTitleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerTitleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Panel 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, 1, 2, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerDescriptionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerDescriptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Quod voluptatem corporis soluta assumenda. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 16777216, null, 0, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, 0, 9, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 180224, [[2, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](58, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](59, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, 0, 2, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerTitleComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerTitleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerTitleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Panel 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, 1, 2, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerDescriptionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerDescriptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Nemo magnam commodi unde. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 16777216, null, 0, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, 0, 9, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 180224, [[2, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](73, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](74, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, 0, 2, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerTitleComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerTitleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerTitleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Panel 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, 1, 2, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerDescriptionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerDescriptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Quod voluptatem corporis soluta assumenda. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 35, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](85, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Accordion with a disabled panel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 30, "ts-accordion", [["class", "ts-accordion"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsAccordionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsAccordionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](88, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsAccordionComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {
        triggers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], null, [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsAccordionComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 16777216, null, 0, 10, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](92, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 180224, [[6, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](97, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](98, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Panel 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 16777216, null, 0, 15, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](103, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
        isDisabled: [0, "isDisabled"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, 0, 9, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](107, 180224, [[6, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](108, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](109, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, 0, 2, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerTitleComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerTitleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](111, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerTitleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Panel 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, 1, 2, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerDescriptionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerDescriptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](114, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" And here is the description "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 14, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](119, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](121, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Event emitters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 7, "ts-checkbox", [["class", "ts-checkbox"], ["tsVerticalSpacing", ""]], [[1, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.loadPanel = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsCheckboxComponent_0"], _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsCheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](124, 49152, null, 0, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__["TsCheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        ngModel: [0, "ngModel"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__["TsCheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](128, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](129, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Load panel (ngIf) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ExpansionPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](132, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 14, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](134, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](136, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Panel with custom trigger heights"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 16777216, null, null, 9, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](139, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](142, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["collapsedHeight", "100px"], ["expandedHeight", "200px"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](143, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
        collapsedHeight: [0, "collapsedHeight"],
        expandedHeight: [1, "expandedHeight"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](144, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](145, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Panel Trigger (100px -> 200px) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 15, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](149, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](150, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](151, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Panel with lazy loaded template"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 16777216, null, null, 10, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](154, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](158, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](159, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](160, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Panel Trigger "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, 1, 1, null, View_ExpansionPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](163, 16384, [[11, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, null, 91, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](165, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](166, 0, null, null, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](167, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Accordion as a stepper"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](169, 0, null, null, 64, "ts-accordion", [["class", "ts-accordion"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsAccordionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsAccordionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](170, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsAccordionComponent"], [], {
        hideToggle: [0, "hideToggle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 12, {
        triggers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], null, [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsAccordionComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](173, 16777216, null, 0, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](174, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
        isExpanded: [0, "isExpanded"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 13, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](177, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](178, 180224, [[12, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](179, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](180, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Step 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](183, 0, null, 2, 4, "ts-expansion-panel-action-row", [["class", "ts-expansion-panel__action-row"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelActionRowComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelActionRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](184, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelActionRowComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](185, 0, null, 0, 2, "ts-button", [["class", "ts-button"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.nextStep() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](186, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_13__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Next "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](188, 16777216, null, 0, 22, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](189, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
        isExpanded: [0, "isExpanded"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 14, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](192, 0, null, 0, 9, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](193, 180224, [[12, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](194, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](195, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](196, 0, null, 0, 2, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerTitleComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerTitleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](197, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerTitleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Step 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](199, 0, null, 1, 2, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerDescriptionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerDescriptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](200, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" And here is the description "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](203, 0, null, 2, 7, "ts-expansion-panel-action-row", [["class", "ts-expansion-panel__action-row"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelActionRowComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelActionRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](204, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelActionRowComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](205, 0, null, 0, 2, "ts-button", [["class", "ts-button"], ["format", "hollow"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.previousStep() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](206, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_13__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        format: [0, "format"]
      }, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Previous "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](208, 0, null, 0, 2, "ts-button", [["class", "ts-button"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.nextStep() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](209, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_13__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Next "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](211, 16777216, null, 0, 22, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](212, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
        isExpanded: [0, "isExpanded"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 15, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](215, 0, null, 0, 9, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](216, 180224, [[12, 4]], 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](217, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](218, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](219, 0, null, 0, 2, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerTitleComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerTitleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](220, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerTitleComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Step 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](222, 0, null, 1, 2, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerDescriptionComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerDescriptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](223, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Quod voluptatem corporis soluta assumenda. Nemo magnam commodi unde. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 1, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](226, 0, null, 2, 7, "ts-expansion-panel-action-row", [["class", "ts-expansion-panel__action-row"]], null, null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelActionRowComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelActionRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](227, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelActionRowComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](228, 0, null, 0, 2, "ts-button", [["class", "ts-button"], ["format", "hollow"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.previousStep() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](229, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_13__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        format: [0, "format"]
      }, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Previous "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](231, 0, null, 0, 2, "ts-button", [["class", "ts-button"]], null, [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.nextStep() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](232, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_13__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" End "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](234, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](235, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](236, 0, null, null, 19, "ts-card", [["class", "ts-card"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](237, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](238, 0, null, 0, 2, "h3", [["tsCardTitle", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](239, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardComponent"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Expansion panel inside a card"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](241, 16777216, null, 0, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](242, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], {
        transparentMode: [0, "transparentMode"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 16, {
        lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](245, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).keydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](246, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](247, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](248, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 2, [" Trigger in a card "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](250, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](252, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Delectus ex maiores deleniti dolor earum minima possimus. Minima excepturi vel quos accusamus. Cupiditate cum ut iure modi. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](254, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "";

        _ck(_v, 3, 0, currVal_1);

        var currVal_13 = "";

        _ck(_v, 21, 0, currVal_13);

        var currVal_14 = "";

        _ck(_v, 23, 0, currVal_14);

        var currVal_23 = _co.allowMultiple;

        _ck(_v, 26, 0, currVal_23);

        var currVal_24 = _co.allowMultiple;

        _ck(_v, 28, 0, currVal_24);

        var currVal_25 = "";

        _ck(_v, 31, 0, currVal_25);

        var currVal_26 = _co.allowMultiple;

        _ck(_v, 34, 0, currVal_26);

        var currVal_60 = "";

        _ck(_v, 83, 0, currVal_60);

        var currVal_61 = "";

        _ck(_v, 85, 0, currVal_61);

        var currVal_76 = true;

        _ck(_v, 103, 0, currVal_76);

        var currVal_85 = "";

        _ck(_v, 119, 0, currVal_85);

        var currVal_86 = "";

        _ck(_v, 121, 0, currVal_86);

        var currVal_95 = _co.loadPanel;

        _ck(_v, 124, 0, currVal_95);

        var currVal_96 = _co.loadPanel;

        _ck(_v, 126, 0, currVal_96);

        var currVal_97 = "";

        _ck(_v, 129, 0, currVal_97);

        var currVal_98 = _co.loadPanel;

        _ck(_v, 132, 0, currVal_98);

        var currVal_99 = "";

        _ck(_v, 134, 0, currVal_99);

        var currVal_100 = "";

        _ck(_v, 136, 0, currVal_100);

        var currVal_112 = "100px";
        var currVal_113 = "200px";

        _ck(_v, 143, 0, currVal_112, currVal_113);

        var currVal_114 = "";

        _ck(_v, 149, 0, currVal_114);

        var currVal_115 = "";

        _ck(_v, 151, 0, currVal_115);

        var currVal_127 = "";

        _ck(_v, 165, 0, currVal_127);

        var currVal_128 = "";

        _ck(_v, 167, 0, currVal_128);

        var currVal_129 = true;

        _ck(_v, 170, 0, currVal_129);

        var currVal_133 = _co.activeStep === 0;

        _ck(_v, 174, 0, currVal_133);

        _ck(_v, 186, 0);

        var currVal_145 = _co.activeStep === 1;

        _ck(_v, 189, 0, currVal_145);

        var currVal_154 = "hollow";

        _ck(_v, 206, 0, currVal_154);

        _ck(_v, 209, 0);

        var currVal_158 = _co.activeStep === 2;

        _ck(_v, 212, 0, currVal_158);

        var currVal_167 = "hollow";

        _ck(_v, 229, 0, currVal_167);

        _ck(_v, 232, 0);

        var currVal_172 = true;

        _ck(_v, 242, 0, currVal_172);
      }, function (_ck, _v) {
        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transparentMode;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).expanded;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).animationMode === "NoopAnimations";

        _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).panel.triggerId;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled ? 0 - 1 : 0;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).panel.id;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).isExpanded;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).panel.disabled;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).isExpanded;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).isTransparent;

        var currVal_12 = _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).currentPanelExpandedState, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).expandedHeight));

        _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).id;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassUntouched;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassTouched;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPristine;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassDirty;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassValid;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassInvalid;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).ngClassPending;

        _ck(_v, 25, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);

        var currVal_27 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).transparentMode;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).expanded;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 38).animationMode === "NoopAnimations";

        _ck(_v, 37, 0, currVal_27, currVal_28, currVal_29);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).panel.triggerId;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).disabled ? 0 - 1 : 0;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).panel.id;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).isExpanded;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).panel.disabled;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).isExpanded;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).isTransparent;

        var currVal_37 = _ck(_v, 44, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).currentPanelExpandedState, _ck(_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).expandedHeight));

        _ck(_v, 41, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37);

        var currVal_38 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).transparentMode;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).expanded;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).animationMode === "NoopAnimations";

        _ck(_v, 52, 0, currVal_38, currVal_39, currVal_40);

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).panel.triggerId;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).disabled ? 0 - 1 : 0;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).panel.id;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isExpanded;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).panel.disabled;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isExpanded;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).isTransparent;

        var currVal_48 = _ck(_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).currentPanelExpandedState, _ck(_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).expandedHeight));

        _ck(_v, 56, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48);

        var currVal_49 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).transparentMode;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).expanded;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).animationMode === "NoopAnimations";

        _ck(_v, 67, 0, currVal_49, currVal_50, currVal_51);

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).panel.triggerId;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).disabled ? 0 - 1 : 0;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).panel.id;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).isExpanded;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).panel.disabled;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).isExpanded;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).isTransparent;

        var currVal_59 = _ck(_v, 74, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).currentPanelExpandedState, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).expandedHeight));

        _ck(_v, 71, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59);

        var currVal_62 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 92).transparentMode;

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 92).expanded;

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 92).animationMode === "NoopAnimations";

        _ck(_v, 91, 0, currVal_62, currVal_63, currVal_64);

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).panel.triggerId;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).disabled ? 0 - 1 : 0;

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).panel.id;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).isExpanded;

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).panel.disabled;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).isExpanded;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).isTransparent;

        var currVal_72 = _ck(_v, 98, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).currentPanelExpandedState, _ck(_v, 97, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 96).expandedHeight));

        _ck(_v, 95, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72);

        var currVal_73 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).transparentMode;

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).expanded;

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).animationMode === "NoopAnimations";

        _ck(_v, 102, 0, currVal_73, currVal_74, currVal_75);

        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).panel.triggerId;

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).disabled ? 0 - 1 : 0;

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).panel.id;

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).isExpanded;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).panel.disabled;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).isExpanded;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).isTransparent;

        var currVal_84 = _ck(_v, 109, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).currentPanelExpandedState, _ck(_v, 108, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 107).expandedHeight));

        _ck(_v, 106, 0, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84);

        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 124).id;

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassUntouched;

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassTouched;

        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassPristine;

        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassDirty;

        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassValid;

        var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassInvalid;

        var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).ngClassPending;

        _ck(_v, 123, 0, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94);

        var currVal_101 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 139).transparentMode;

        var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 139).expanded;

        var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 139).animationMode === "NoopAnimations";

        _ck(_v, 138, 0, currVal_101, currVal_102, currVal_103);

        var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).panel.triggerId;

        var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).disabled ? 0 - 1 : 0;

        var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).panel.id;

        var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).isExpanded;

        var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).panel.disabled;

        var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).isExpanded;

        var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).isTransparent;

        var currVal_111 = _ck(_v, 145, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).currentPanelExpandedState, _ck(_v, 144, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 143).expandedHeight));

        _ck(_v, 142, 0, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109, currVal_110, currVal_111);

        var currVal_116 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 154).transparentMode;

        var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 154).expanded;

        var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 154).animationMode === "NoopAnimations";

        _ck(_v, 153, 0, currVal_116, currVal_117, currVal_118);

        var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).panel.triggerId;

        var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).disabled ? 0 - 1 : 0;

        var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).panel.id;

        var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).isExpanded;

        var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).panel.disabled;

        var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).isExpanded;

        var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).isTransparent;

        var currVal_126 = _ck(_v, 160, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).currentPanelExpandedState, _ck(_v, 159, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 158).expandedHeight));

        _ck(_v, 157, 0, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126);

        var currVal_130 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 174).transparentMode;

        var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 174).expanded;

        var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 174).animationMode === "NoopAnimations";

        _ck(_v, 173, 0, currVal_130, currVal_131, currVal_132);

        var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).panel.triggerId;

        var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).disabled ? 0 - 1 : 0;

        var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).panel.id;

        var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).isExpanded;

        var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).panel.disabled;

        var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).isExpanded;

        var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).isTransparent;

        var currVal_141 = _ck(_v, 180, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).currentPanelExpandedState, _ck(_v, 179, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 178).expandedHeight));

        _ck(_v, 177, 0, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141);

        var currVal_142 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 189).transparentMode;

        var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 189).expanded;

        var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 189).animationMode === "NoopAnimations";

        _ck(_v, 188, 0, currVal_142, currVal_143, currVal_144);

        var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).panel.triggerId;

        var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).disabled ? 0 - 1 : 0;

        var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).panel.id;

        var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).isExpanded;

        var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).panel.disabled;

        var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).isExpanded;

        var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).isTransparent;

        var currVal_153 = _ck(_v, 195, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).currentPanelExpandedState, _ck(_v, 194, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).expandedHeight));

        _ck(_v, 192, 0, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153);

        var currVal_155 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 212).transparentMode;

        var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 212).expanded;

        var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 212).animationMode === "NoopAnimations";

        _ck(_v, 211, 0, currVal_155, currVal_156, currVal_157);

        var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).panel.triggerId;

        var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).disabled ? 0 - 1 : 0;

        var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).panel.id;

        var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).isExpanded;

        var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).panel.disabled;

        var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).isExpanded;

        var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).isTransparent;

        var currVal_166 = _ck(_v, 218, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).currentPanelExpandedState, _ck(_v, 217, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 216).expandedHeight));

        _ck(_v, 215, 0, currVal_159, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166);

        var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 239).tsCardTitle;

        _ck(_v, 238, 0, currVal_168);

        var currVal_169 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 242).transparentMode;

        var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 242).expanded;

        var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 242).animationMode === "NoopAnimations";

        _ck(_v, 241, 0, currVal_169, currVal_170, currVal_171);

        var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).panel.triggerId;

        var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).disabled ? 0 - 1 : 0;

        var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).panel.id;

        var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).isExpanded;

        var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).panel.disabled;

        var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).isExpanded;

        var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).isTransparent;

        var currVal_180 = _ck(_v, 248, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).currentPanelExpandedState, _ck(_v, 247, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 246).expandedHeight));

        _ck(_v, 245, 0, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180);
      });
    }

    function View_ExpansionPanelComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-expansion-panel", [], null, null, null, View_ExpansionPanelComponent_0, RenderType_ExpansionPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _expansion_panel_component__WEBPACK_IMPORTED_MODULE_16__["ExpansionPanelComponent"], [], null, null)], null, null);
    }

    var ExpansionPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-expansion-panel", _expansion_panel_component__WEBPACK_IMPORTED_MODULE_16__["ExpansionPanelComponent"], View_ExpansionPanelComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/expansion-panel/expansion-panel.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/expansion-panel/expansion-panel.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ExpansionPanelComponent */

  /***/
  function srcAppComponentsExpansionPanelExpansionPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function () {
      return ExpansionPanelComponent;
    });

    var ExpansionPanelComponent = /*#__PURE__*/function () {
      function ExpansionPanelComponent() {
        _classCallCheck(this, ExpansionPanelComponent);

        this.loadPanel = true;
        this.allowMultiple = false;
        this.activeStep = 0;
      }

      _createClass(ExpansionPanelComponent, [{
        key: "panelOpened",
        value: function panelOpened() {
          console.log('DEMO: Panel opened');
        }
      }, {
        key: "panelClosed",
        value: function panelClosed() {
          console.log('DEMO: Panel closed');
        }
      }, {
        key: "panelExpandedChange",
        value: function panelExpandedChange(event) {
          console.log('DEMO: Panel expanded state changed: ', event);
        }
      }, {
        key: "panelDestroyed",
        value: function panelDestroyed() {
          console.log('DEMO: Panel destroyed');
        }
      }, {
        key: "afterPanelExpanded",
        value: function afterPanelExpanded() {
          console.log('DEMO: Panel expand animation finished');
        }
      }, {
        key: "afterPanelCollapsed",
        value: function afterPanelCollapsed() {
          console.log('DEMO: Panel collapse animation finished');
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.activeStep++;
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.activeStep--;
        }
      }, {
        key: "setStep",
        value: function setStep(index) {
          this.activeStep = index;
        }
      }]);

      return ExpansionPanelComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/expansion-panel/expansion-panel.module.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/components/expansion-panel/expansion-panel.module.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: ExpansionPanelModuleNgFactory */

  /***/
  function srcAppComponentsExpansionPanelExpansionPanelModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpansionPanelModuleNgFactory", function () {
      return ExpansionPanelModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _expansion_panel_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./expansion-panel.module */
    "./src/app/components/expansion-panel/expansion-panel.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _expansion_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expansion-panel.component.ngfactory */
    "./src/app/components/expansion-panel/expansion-panel.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _expansion_panel_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./expansion-panel-routing.module */
    "./src/app/components/expansion-panel/expansion-panel-routing.module.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "../../node_modules/@angular/cdk/fesm2015/accordion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-expansion-panel */
    "../../dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _expansion_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./expansion-panel.component */
    "./src/app/components/expansion-panel/expansion-panel.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ExpansionPanelModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_expansion_panel_module__WEBPACK_IMPORTED_MODULE_1__["ExpansionPanelModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _expansion_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ExpansionPanelComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expansion_panel_routing_module__WEBPACK_IMPORTED_MODULE_9__["ExpansionPanelRoutingModule"], _expansion_panel_routing_module__WEBPACK_IMPORTED_MODULE_9__["ExpansionPanelRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_18__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_18__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_19__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_19__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_21__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_21__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_22__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_22__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_24__["TsExpansionPanelModule"], _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_24__["TsExpansionPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expansion_panel_module__WEBPACK_IMPORTED_MODULE_1__["ExpansionPanelModule"], _expansion_panel_module__WEBPACK_IMPORTED_MODULE_1__["ExpansionPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () {
        return [[{
          path: "",
          component: _expansion_panel_component__WEBPACK_IMPORTED_MODULE_26__["ExpansionPanelComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/expansion-panel/expansion-panel.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/expansion-panel/expansion-panel.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ExpansionPanelModule */

  /***/
  function srcAppComponentsExpansionPanelExpansionPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpansionPanelModule", function () {
      return ExpansionPanelModule;
    });

    var ExpansionPanelModule = function ExpansionPanelModule() {
      _classCallCheck(this, ExpansionPanelModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=expansion-panel-expansion-panel-module-ngfactory-es5.js.map