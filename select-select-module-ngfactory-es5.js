function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module-ngfactory"], {
  /***/
  "./src/app/components/select/select-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/select/select-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SelectRoutingModule */

  /***/
  function srcAppComponentsSelectSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectRoutingModule", function () {
      return SelectRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/components/select/select.component.ts");

    var routes = [{
      path: '',
      component: _select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]
    }];

    var SelectRoutingModule = function SelectRoutingModule() {
      _classCallCheck(this, SelectRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/select/select.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/components/select/select.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_SelectComponent, View_SelectComponent_0, View_SelectComponent_Host_0, SelectComponentNgFactory */

  /***/
  function srcAppComponentsSelectSelectComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SelectComponent", function () {
      return RenderType_SelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SelectComponent_0", function () {
      return View_SelectComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SelectComponent_Host_0", function () {
      return View_SelectComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponentNgFactory", function () {
      return SelectComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/option/terminus-ui-option.ngfactory */
    "../../dist/libs/ui/option/terminus-ui-option.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory */
    "../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/select/terminus-ui-select.ngfactory */
    "../../dist/libs/ui/select/terminus-ui-select.ngfactory.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ui-select */
    "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/components/select/select.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_SelectComponent = [];

    var RenderType_SelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_SelectComponent,
      data: {}
    });

    function View_SelectComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 27, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null);
    }

    function View_SelectComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["class", "myClass"], ["style", "padding: 8px 0;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 2, "h4", [["tsOptionDisplay", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, [[7, 4]], 0, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionDisplayDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["An example of a larger template."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](8, null, ["Slug: ", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit == null ? null : _v.context.$implicit.foo;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _v.context.$implicit == null ? null : _v.context.$implicit.slug;

        _ck(_v, 8, 0, currVal_1);
      });
    }

    function View_SelectComponent_2(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[2, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        option: [1, "option"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[6, 2]], 0, 0, null, View_SelectComponent_3))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit == null ? null : _v.context.$implicit.disabled;
        var currVal_11 = _v.context.$implicit;
        var currVal_12 = _v.context.$implicit.slug;

        _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12);
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
      });
    }

    function View_SelectComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 40, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null);
    }

    function View_SelectComponent_6(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[11, 4], [9, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        option: [1, "option"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 12, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 13, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit == null ? null : _v.context.$implicit.disabled;
        var currVal_11 = _v.context.$implicit;
        var currVal_12 = _v.context.$implicit.slug;

        _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12);
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

        var currVal_13 = _v.context.$implicit.foo;

        _ck(_v, 4, 0, currVal_13);
      });
    }

    function View_SelectComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ts-select-optgroup", [["class", "ts-optgroup"], ["role", "group"]], [[2, "ts-optgroup--disabled", null], [1, "id", 0], [1, "aria-disabled", 0], [1, "aria-labelledby", 0]], null, null, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptgroupComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptgroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"], null, [_terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptgroupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, [[10, 4]], 1, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptgroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        label: [1, "label"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, {
        optgroupOptions: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_SelectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_4 = _v.context.$implicit.disabled;
        var currVal_5 = _v.context.$implicit.foo;

        _ck(_v, 2, 0, currVal_4, currVal_5);

        var currVal_6 = _v.context.$implicit.children;

        _ck(_v, 5, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        var currVal_2 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).labelId;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_SelectComponent_7(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[15, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        option: [1, "option"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 17, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 18, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit == null ? null : _v.context.$implicit.disabled;
        var currVal_11 = _v.context.$implicit;
        var currVal_12 = _v.context.$implicit.slug;

        _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12);
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

        var currVal_13 = _v.context.$implicit.slug;

        _ck(_v, 4, 0, currVal_13);
      });
    }

    function View_SelectComponent_9(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[22, 4], [20, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        option: [1, "option"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 23, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 24, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit == null ? null : _v.context.$implicit.disabled;
        var currVal_11 = _v.context.$implicit;
        var currVal_12 = _v.context.$implicit.slug;

        _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12);
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

        var currVal_13 = _v.context.$implicit.foo;

        _ck(_v, 4, 0, currVal_13);
      });
    }

    function View_SelectComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ts-select-optgroup", [["class", "ts-optgroup"], ["role", "group"]], [[2, "ts-optgroup--disabled", null], [1, "id", 0], [1, "aria-disabled", 0], [1, "aria-labelledby", 0]], null, null, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptgroupComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptgroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"], null, [_terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptgroupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, [[21, 4]], 1, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptgroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        label: [1, "label"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 22, {
        optgroupOptions: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_SelectComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_4 = _v.context.$implicit.disabled;
        var currVal_5 = _v.context.$implicit.foo;

        _ck(_v, 2, 0, currVal_4, currVal_5);

        var currVal_6 = _v.context.$implicit.children;

        _ck(_v, 5, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        var currVal_2 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).isDisabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).labelId;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_SelectComponent_10(_l) {
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
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[26, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        isDisabled: [0, "isDisabled"],
        option: [1, "option"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 30, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 31, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit == null ? null : _v.context.$implicit.disabled;
        var currVal_11 = _v.context.$implicit;
        var currVal_12 = _v.context.$implicit.slug;

        _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12);
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

        var currVal_13 = _v.context.$implicit.slug;

        _ck(_v, 4, 0, currVal_13);
      });
    }

    function View_SelectComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 30, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 10, "aside", [["class", "deprecated"], ["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\uD83D\uDEA8 DEPRECATED \uD83D\uDEA8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Please use "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["TsSelectionList"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 0, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Demo Controls "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, 0, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.log(_co.myForm) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Log form value "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, 0, 9, "ts-toggle", [["class", "ts-toggle"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.useSpacing = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsToggleComponent_0"], _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_9__["TsToggleComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_9__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Create space around select "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, 0, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["(useful for testing panel position logic)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 174, "form", [["fxLayout", "column"], ["fxLayoutGap", "1rem"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 39, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", "small--1"]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Single Select "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, 0, 2, "h5", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["With custom trigger"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, 0, 26, "ts-select", [["class", "ts-select"], ["hint", "Select a single option"], ["label", "Single select"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-select--required", null], [2, "ts-select--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0], [1, "tabindex", 0]], [[null, "selectionChange"], [null, "optionSelected"], [null, "optionDeselected"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectionChange" === en) {
          var pd_1 = _co.isChanged($event) !== false;
          ad = pd_1 && ad;
        }

        if ("optionSelected" === en) {
          var pd_2 = _co.isSelected($event) !== false;
          ad = pd_2 && ad;
        }

        if ("optionDeselected" === en) {
          var pd_3 = _co.isDeselected($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_15__["TsFormFieldControl"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 1818624, null, 3, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_18__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], {
        hint: [0, "hint"],
        label: [1, "label"]
      }, {
        optionDeselected: "optionDeselected",
        optionSelected: "optionSelected",
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        customTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MAT_CHECKBOX_DEFAULT_OPTIONS"], {
        clickAction: "noop"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, 0, 4, "ts-select-trigger", [["class", "ts-select-custom-trigger qa-select-custom-trigger"]], [[1, "id", 0]], null, null, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectTriggerComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 49152, [[1, 4]], 0, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectTriggerComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" My custom trigger! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, 0, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](66, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, 1, 6, "ts-option", [["class", "ts-option"], ["role", "option"]], [[2, "ts-selected", null], [2, "ts-option--multiple", null], [2, "ts-option--active", null], [2, "ts-option--disabled", null], [2, "ts-option--template", null], [1, "tabindex", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "title", 0], [8, "id", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).selectViaInteraction() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 9617408, [[2, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, 0, 2, "h4", [["tsOptionDisplay", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 16384, [[5, 4]], 0, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionDisplayDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["None"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 1, 2, null, View_SelectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](78, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SelectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 24, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](86, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Single Select w/Optgroups "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, 0, 14, "ts-select", [["class", "ts-select"], ["hint", "Select a single option"], ["label", "Single select"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-select--required", null], [2, "ts-select--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0], [1, "tabindex", 0]], [[null, "selectionChange"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectionChange" === en) {
          var pd_1 = _co.isChanged($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_15__["TsFormFieldControl"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](92, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](94, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](95, 1818624, null, 3, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_18__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], {
        allowMultiple: [0, "allowMultiple"],
        hint: [1, "hint"],
        label: [2, "label"]
      }, {
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, {
        customTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](99, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MAT_CHECKBOX_DEFAULT_OPTIONS"], {
        clickAction: "noop"
      }, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 1, 2, null, View_SelectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](102, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](105, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 24, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](108, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](109, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](111, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](112, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Multiple "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, 0, 14, "ts-select", [["class", "ts-select"], ["hint", "Select one or more options"], ["label", "Multiple select"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-select--required", null], [2, "ts-select--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0], [1, "tabindex", 0]], [[null, "opened"], [null, "closed"], [null, "selectionChange"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("opened" === en) {
          var pd_1 = _co.panelChange(true) !== false;
          ad = pd_1 && ad;
        }

        if ("closed" === en) {
          var pd_2 = _co.panelChange(false) !== false;
          ad = pd_2 && ad;
        }

        if ("selectionChange" === en) {
          var pd_3 = _co.isChanged($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_15__["TsFormFieldControl"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](117, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](119, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](120, 1818624, null, 3, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_18__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], {
        allowMultiple: [0, "allowMultiple"],
        hint: [1, "hint"],
        label: [2, "label"]
      }, {
        closed: "closed",
        opened: "opened",
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 14, {
        customTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 15, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 16, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](124, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MAT_CHECKBOX_DEFAULT_OPTIONS"], {
        clickAction: "noop"
      }, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 1, 2, null, View_SelectComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](127, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](130, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](132, 0, null, null, 24, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](133, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](134, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](136, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](137, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Multiple w/Optgroups "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, 0, 14, "ts-select", [["class", "ts-select"], ["hint", "Select one or more options"], ["label", "Multiple select"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-select--required", null], [2, "ts-select--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0], [1, "tabindex", 0]], [[null, "opened"], [null, "closed"], [null, "selectionChange"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("opened" === en) {
          var pd_1 = _co.panelChange(true) !== false;
          ad = pd_1 && ad;
        }

        if ("closed" === en) {
          var pd_2 = _co.panelChange(false) !== false;
          ad = pd_2 && ad;
        }

        if ("selectionChange" === en) {
          var pd_3 = _co.isChanged($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_15__["TsFormFieldControl"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](142, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](144, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](145, 1818624, null, 3, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_18__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], {
        allowMultiple: [0, "allowMultiple"],
        hint: [1, "hint"],
        label: [2, "label"]
      }, {
        closed: "closed",
        opened: "opened",
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 19, {
        customTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 20, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 21, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](149, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MAT_CHECKBOX_DEFAULT_OPTIONS"], {
        clickAction: "noop"
      }, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 1, 2, null, View_SelectComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](152, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](154, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](155, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 36, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](158, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](159, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](161, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_5__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](162, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Single Select w/ Filtering, refresh request, & high count message "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, 0, 26, "ts-select", [["class", "ts-select"], ["hint", "Select a single option"], ["label", "Single select"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-select--required", null], [2, "ts-select--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0], [1, "tabindex", 0]], [[null, "selectionChange"], [null, "queryChange"], [null, "optionSelected"], [null, "optionDeselected"], [null, "optionsRefreshRequested"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("selectionChange" === en) {
          var pd_1 = _co.isChanged($event) !== false;
          ad = pd_1 && ad;
        }

        if ("queryChange" === en) {
          var pd_2 = _co.onFilterOptions($event) !== false;
          ad = pd_2 && ad;
        }

        if ("optionSelected" === en) {
          var pd_3 = _co.isSelected($event) !== false;
          ad = pd_3 && ad;
        }

        if ("optionDeselected" === en) {
          var pd_4 = _co.isDeselected($event) !== false;
          ad = pd_4 && ad;
        }

        if ("optionsRefreshRequested" === en) {
          var pd_5 = _co.refreshRequested() !== false;
          ad = pd_5 && ad;
        }

        return ad;
      }, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_15__["TsFormFieldControl"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](166, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], [[8, null], [8, null], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](168, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](169, 1818624, null, 3, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_18__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], {
        compareWith: [0, "compareWith"],
        hint: [1, "hint"],
        isFilterable: [2, "isFilterable"],
        label: [3, "label"],
        showRefineSearchMessage: [4, "showRefineSearchMessage"],
        showRefresh: [5, "showRefresh"],
        totalHiddenResults: [6, "totalHiddenResults"]
      }, {
        optionDeselected: "optionDeselected",
        optionSelected: "optionSelected",
        optionsRefreshRequested: "optionsRefreshRequested",
        queryChange: "queryChange",
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 25, {
        customTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 26, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 27, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](173, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_6__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MAT_CHECKBOX_DEFAULT_OPTIONS"], {
        clickAction: "noop"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectComponent"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](176, 0, null, 0, 4, "ts-select-trigger", [["class", "ts-select-custom-trigger qa-select-custom-trigger"]], [[1, "id", 0]], null, null, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsSelectTriggerComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsSelectTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](177, 49152, [[25, 4]], 0, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_16__["TsSelectTriggerComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" My custom trigger! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](179, 0, null, 0, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](180, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](181, 0, null, 1, 6, "ts-option", [["class", "ts-option"], ["role", "option"]], [[2, "ts-selected", null], [2, "ts-option--multiple", null], [2, "ts-option--active", null], [2, "ts-option--disabled", null], [2, "ts-option--template", null], [1, "tabindex", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "title", 0], [8, "id", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).selectViaInteraction() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](182, 9617408, [[26, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TS_OPTGROUP_PARENT_COMPONENT"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 28, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 29, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](185, 0, null, 0, 2, "h4", [["tsOptionDisplay", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](186, 16384, [[29, 4]], 0, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_1__["TsOptionDisplayDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["None"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 1, 2, null, View_SelectComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](189, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](191, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](192, null, [" FormControl value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](194, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](195, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](196, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](197, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](198, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](199, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](200, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](201, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](202, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](203, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](204, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](205, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](206, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](207, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = "";

        _ck(_v, 4, 0, currVal_1);

        var currVal_4 = _ck(_v, 11, 0, "/components/selection-list");

        _ck(_v, 10, 0, currVal_4);

        var currVal_5 = "";

        _ck(_v, 15, 0, currVal_5);

        var currVal_13 = _co.useSpacing;

        _ck(_v, 24, 0, currVal_13);

        var currVal_14 = _co.useSpacing;

        _ck(_v, 32, 0, currVal_14);

        var currVal_22 = "column";

        _ck(_v, 34, 0, currVal_22);

        var currVal_23 = "1rem";

        _ck(_v, 35, 0, currVal_23);

        var currVal_24 = _co.myForm;

        _ck(_v, 37, 0, currVal_24);

        var currVal_25 = "";

        _ck(_v, 42, 0, currVal_25);

        var currVal_27 = "small--1";

        _ck(_v, 45, 0, currVal_27);

        var currVal_28 = "";

        _ck(_v, 48, 0, currVal_28);

        var currVal_42 = _co.myForm.get("myChoices1");

        _ck(_v, 52, 0, currVal_42);

        var currVal_43 = "Select a single option";
        var currVal_44 = "Single select";

        _ck(_v, 55, 0, currVal_43, currVal_44);

        var currVal_45 = "";

        _ck(_v, 59, 0, currVal_45);

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 75, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 76).transform(_co.singleWithCustomTrigger));

        _ck(_v, 75, 0, currVal_58);

        var currVal_60 = _co.useSpacing;

        _ck(_v, 81, 0, currVal_60);

        var currVal_61 = "";

        _ck(_v, 84, 0, currVal_61);

        var currVal_63 = "";

        _ck(_v, 87, 0, currVal_63);

        var currVal_77 = _co.myForm.get("myChoices2");

        _ck(_v, 92, 0, currVal_77);

        var currVal_78 = false;
        var currVal_79 = "Select a single option";
        var currVal_80 = "Single select";

        _ck(_v, 95, 0, currVal_78, currVal_79, currVal_80);

        var currVal_81 = "";

        _ck(_v, 99, 0, currVal_81);

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 102, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 103).transform(_co.itemsWithGroups));

        _ck(_v, 102, 0, currVal_82);

        var currVal_84 = "";

        _ck(_v, 109, 0, currVal_84);

        var currVal_86 = "";

        _ck(_v, 112, 0, currVal_86);

        var currVal_100 = _co.myForm.get("myChoices3");

        _ck(_v, 117, 0, currVal_100);

        var currVal_101 = true;
        var currVal_102 = "Select one or more options";
        var currVal_103 = "Multiple select";

        _ck(_v, 120, 0, currVal_101, currVal_102, currVal_103);

        var currVal_104 = "";

        _ck(_v, 124, 0, currVal_104);

        var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 127, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 128).transform(_co.singleWithCustomTrigger));

        _ck(_v, 127, 0, currVal_105);

        var currVal_107 = "";

        _ck(_v, 134, 0, currVal_107);

        var currVal_109 = "";

        _ck(_v, 137, 0, currVal_109);

        var currVal_123 = _co.myForm.get("myChoices3");

        _ck(_v, 142, 0, currVal_123);

        var currVal_124 = true;
        var currVal_125 = "Select one or more options";
        var currVal_126 = "Multiple select";

        _ck(_v, 145, 0, currVal_124, currVal_125, currVal_126);

        var currVal_127 = "";

        _ck(_v, 149, 0, currVal_127);

        var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 152, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 153).transform(_co.itemsWithGroups));

        _ck(_v, 152, 0, currVal_128);

        var currVal_130 = "";

        _ck(_v, 159, 0, currVal_130);

        var currVal_132 = "";

        _ck(_v, 162, 0, currVal_132);

        var currVal_146 = _co.myForm.get("myChoices1");

        _ck(_v, 166, 0, currVal_146);

        var currVal_147 = _co.comparator;
        var currVal_148 = "Select a single option";
        var currVal_149 = true;
        var currVal_150 = "Single select";
        var currVal_151 = true;
        var currVal_152 = true;
        var currVal_153 = 972;

        _ck(_v, 169, 0, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153);

        var currVal_154 = "";

        _ck(_v, 173, 0, currVal_154);

        var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 189, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 190).transform(_co.firstOptions));

        _ck(_v, 189, 0, currVal_167);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).target;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).href;

        _ck(_v, 9, 0, currVal_2, currVal_3);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassUntouched;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassTouched;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassPristine;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassDirty;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassValid;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassInvalid;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).ngClassPending;

        _ck(_v, 21, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassUntouched;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassTouched;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPristine;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassDirty;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassValid;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassInvalid;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPending;

        _ck(_v, 33, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).tsCardTitle;

        _ck(_v, 43, 0, currVal_26);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassUntouched;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassTouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassPristine;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassDirty;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassValid;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassInvalid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).ngClassPending;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).isRequired;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).isDisabled;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).optionIds : null;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).isRequired.toString();

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).allowMultiple;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).tabIndex;

        _ck(_v, 50, 1, [currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]);

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).id;

        _ck(_v, 62, 0, currVal_46);

        var tmp_47_0 = null;
        var currVal_47 = (tmp_47_0 = _co.myForm.get("myChoices1")) == null ? null : tmp_47_0.value;

        _ck(_v, 66, 0, currVal_47);

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).selected;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).allowMultiple;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).active;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).isDisabled;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).optionTemplate;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).tabIndex;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).selected.toString();

        var currVal_55 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).isDisabled;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).title;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).id;

        _ck(_v, 67, 0, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57);

        var tmp_59_0 = null;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).transform((tmp_59_0 = _co.myForm.get("myChoices1")) == null ? null : tmp_59_0.value));

        _ck(_v, 78, 0, currVal_59);

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).tsCardTitle;

        _ck(_v, 85, 0, currVal_62);

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassUntouched;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassTouched;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassPristine;

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassDirty;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassValid;

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassInvalid;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).ngClassPending;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).isRequired;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).isDisabled;

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).optionIds : null;

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).isRequired.toString();

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).allowMultiple;

        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 95).tabIndex;

        _ck(_v, 89, 1, [currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76]);

        var tmp_83_0 = null;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 105, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).transform((tmp_83_0 = _co.myForm.get("myChoices2")) == null ? null : tmp_83_0.value));

        _ck(_v, 105, 0, currVal_83);

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 111).tsCardTitle;

        _ck(_v, 110, 0, currVal_85);

        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassUntouched;

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassTouched;

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassPristine;

        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassDirty;

        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassValid;

        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassInvalid;

        var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 119).ngClassPending;

        var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).isRequired;

        var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).isDisabled;

        var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).optionIds : null;

        var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).isRequired.toString();

        var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).allowMultiple;

        var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 120).tabIndex;

        _ck(_v, 114, 1, [currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99]);

        var tmp_106_0 = null;

        var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 130, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).transform((tmp_106_0 = _co.myForm.get("myChoices3")) == null ? null : tmp_106_0.value));

        _ck(_v, 130, 0, currVal_106);

        var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 136).tsCardTitle;

        _ck(_v, 135, 0, currVal_108);

        var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassUntouched;

        var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassTouched;

        var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassPristine;

        var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassDirty;

        var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassValid;

        var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassInvalid;

        var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 144).ngClassPending;

        var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).isRequired;

        var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).isDisabled;

        var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).optionIds : null;

        var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).isRequired.toString();

        var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).allowMultiple;

        var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).tabIndex;

        _ck(_v, 139, 1, [currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122]);

        var tmp_129_0 = null;

        var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 155, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 156).transform((tmp_129_0 = _co.myForm.get("myChoices3")) == null ? null : tmp_129_0.value));

        _ck(_v, 155, 0, currVal_129);

        var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 161).tsCardTitle;

        _ck(_v, 160, 0, currVal_131);

        var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassUntouched;

        var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassTouched;

        var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassPristine;

        var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassDirty;

        var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassValid;

        var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassInvalid;

        var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 168).ngClassPending;

        var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).isRequired;

        var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).isDisabled;

        var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).optionIds : null;

        var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).isRequired.toString();

        var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).allowMultiple;

        var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 169).tabIndex;

        _ck(_v, 164, 1, [currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145]);

        var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 177).id;

        _ck(_v, 176, 0, currVal_155);

        var tmp_156_0 = null;
        var currVal_156 = (tmp_156_0 = _co.myForm.get("myChoices1")) == null ? null : tmp_156_0.value;

        _ck(_v, 180, 0, currVal_156);

        var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).selected;

        var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).allowMultiple;

        var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).active;

        var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).isDisabled;

        var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).optionTemplate;

        var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).tabIndex;

        var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).selected.toString();

        var currVal_164 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).isDisabled;

        var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).title;

        var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 182).id;

        _ck(_v, 181, 0, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166);

        var tmp_168_0 = null;

        var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 192, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 193).transform((tmp_168_0 = _co.myForm.get("myChoices1")) == null ? null : tmp_168_0.value));

        _ck(_v, 192, 0, currVal_168);
      });
    }

    function View_SelectComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-select", [], null, null, null, View_SelectComponent_0, RenderType_SelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _select_component__WEBPACK_IMPORTED_MODULE_20__["SelectComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-select", _select_component__WEBPACK_IMPORTED_MODULE_20__["SelectComponent"], View_SelectComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/select/select.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/select/select.component.ts ***!
    \*******************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppComponentsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
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

    var SelectComponent = /*#__PURE__*/function () {
      function SelectComponent(formBuilder) {
        _classCallCheck(this, SelectComponent);

        this.formBuilder = formBuilder;
        this.simpleItems = [1, 2, 3, 4];
        this.initialSimpleItemsSelection = 2;
        this.useSpacing = false;
        this.obj = {
          id: 3,
          text: 'baz'
        };
        this.singleWithCustomTrigger = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([{
          foo: 'Foo bar baz foo bar baz foo bar baz',
          slug: 'foo',
          bar: {
            id: 1,
            text: 'foo'
          }
        }, {
          foo: 'Bar Hic saepe ad sunt temporibus.',
          slug: 'bar',
          bar: {
            id: 2,
            text: 'bar'
          }
        }, {
          // eslint-disable-next-line max-len
          foo: 'Consequuntur eum eveniet accusamus ea saepe. Alias occaecati eos reprehenderit expedita. Ab perferendis nemo molestias nulla est inventore voluptate.',

          /*
           *foo: 'Consequuntur eum eveniet accusamus ea saepe.',
           */
          slug: 'con',
          disabled: false,
          bar: this.obj
        }, {
          foo: 'Eligendi magni quod quas',
          slug: 'eli'
        }, {
          foo: 'Necessitatibus corporis officiis atque sed.',
          slug: 'nec',
          disabled: true
        }, {
          foo: 'Baz Neque numquam reiciendis',
          slug: 'baz',
          disabled: true
        }, {
          foo: 'Vel eos nam porro. Vel eos nam porro.',
          slug: 'vel'
        }, {
          foo: 'Dolores ducimus magnamomnis.',
          slug: 'dol'
        }, {
          foo: 'Dolorem neque quae ducimus',
          slug: 'neq'
        }, {
          foo: 'Foo2 bar baz foo bar baz foo bar baz',
          slug: 'foo2'
        }, {
          foo: 'Bar2 Hic saepe ad sunt temporibus.',
          slug: 'bar2'
        }, {
          foo: 'Consequuntur eum eveniet accusamus ea saepe.',
          slug: 'con2',
          disabled: true
        }, {
          foo: 'Eligendi2 magni quod quas',
          slug: 'eli2'
        }, {
          foo: 'Necessitatibus2 corporis officiis atque sed.',
          slug: 'nec2',
          disabled: true
        }, {
          foo: 'Baz2 Neque numquam reiciendis',
          slug: 'baz2',
          disabled: true
        }, {
          foo: 'Vel2 eos nam porro. Vel eos nam porro.',
          slug: 'vel2'
        }, {
          foo: 'Dolores2 ducimus magnamomnis.',
          slug: 'dol2'
        }, {
          foo: 'Dolorem2 neque quae ducimus',
          slug: 'neq2'
        }]);
        this.itemsWithGroups = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([{
          foo: 'Foo bar baz foo bar baz foo bar baz',
          slug: 'foo',
          children: [{
            foo: 'Baz Neque numquam reiciendis ipsa perspiciatis voluptatem.',
            slug: 'baz'
          }, {
            foo: 'Vel eos nam porro. Vel eos nam porro.',
            slug: 'vel'
          }]
        }, {
          foo: 'Bar Hic saepe ad adipisci totam porro sunt temporibus.',
          slug: 'bar',
          children: [{
            foo: 'Consequuntur eum eveniet accusamus ea saepe.',
            slug: 'con'
          }, {
            foo: 'Eligendi magni quod quas commodi ratione necessitatibus.',
            slug: 'eli',
            disabled: true
          }, {
            foo: 'Necessitatibus corporis officiis atque sed.',
            slug: 'nec'
          }]
        }, {
          foo: 'Dolores ducimus magnam eius quo omnis.',
          slug: 'dol',
          disabled: true,
          children: [{
            foo: 'Dolorem neque quae ducimus dolore molestiae dolorem.',
            slug: 'neq'
          }, {
            foo: 'Explicabo quos harum culpa labore aut cupiditate vero.',
            slug: 'quos'
          }]
        }]);
        this.label = 'Select a Thing';
        this.blank = 'none';
        this.multipleAllowed = true;
        this.myForm = this.formBuilder.group({
          myChoices1: [
          /*
           *this.obj,
           */
          'bar2'],
          myChoices2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
          myChoices3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.myQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.fakeAsync = false;
        this.comparator = this.compareByValue;
        this.firstOptions = this.singleWithCustomTrigger;

        this.myFormatUIFn = function (v) {
          return v.name;
        };

        this.firstOptions = this.singleWithCustomTrigger;
      }

      _createClass(SelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "compareByValue",
        value: function compareByValue(f1, f2) {
          /*
           *console.log('in compareByValue: ', f1, f2);
           */
          return f1 && f2 && f1.text === f2.text;
        }
      }, {
        key: "compareByReference",
        value: function compareByReference(f1, f2) {
          /*
           *console.log('in compareByReference: ', f1, f2, f1 === f2);
           */
          return f1 === f2;
        }
      }, {
        key: "panelChange",
        value: function panelChange(e) {
          console.log("DEMO: Panel ".concat(e ? 'opened' : 'closed'));
        }
      }, {
        key: "isChanged",
        value: function isChanged(e) {
          console.log('DEMO: changed: ', e);
          this.firstOptions = this.singleWithCustomTrigger;
        }
      }, {
        key: "isSelected",
        value: function isSelected(v) {
          console.log('DEMO: optionSelected: ', v);
        }
      }, {
        key: "isDeselected",
        value: function isDeselected(v) {
          console.log('DEMO: optionDeselected: ', v);
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
        key: "onFilterOptions",
        value: function onFilterOptions(v) {
          console.log('DEMO: filtering options: ', v);

          if (v) {
            var regex = new RegExp(v, 'i');
            this.firstOptions = this.singleWithCustomTrigger.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) {
              return a.filter(function (i) {
                return i.slug.match(regex);
              });
            }));
          } else {
            this.firstOptions = this.singleWithCustomTrigger;
          }
        }
      }, {
        key: "duplicate",
        value: function duplicate(e) {
          console.log('DEMO: Duplicate selection: ', e);
        }
      }, {
        key: "refreshRequested",
        value: function refreshRequested() {
          console.log('DEMO: Options refresh requested!');
        }
      }]);

      return SelectComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/select/select.module.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/components/select/select.module.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: SelectModuleNgFactory */

  /***/
  function srcAppComponentsSelectSelectModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectModuleNgFactory", function () {
      return SelectModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _select_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./select.module */
    "./src/app/components/select/select.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _select_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select.component.ngfactory */
    "./src/app/components/select/select.component.ngfactory.js");
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


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
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


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _select_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./select-routing.module */
    "./src/app/components/select/select-routing.module.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/chips */
    "../../node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @terminus/ui-select */
    "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/components/select/select.component.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var SelectModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_select_module__WEBPACK_IMPORTED_MODULE_1__["SelectModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _select_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["SelectComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _select_routing_module__WEBPACK_IMPORTED_MODULE_24__["SelectRoutingModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_24__["SelectRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_27__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_27__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_28__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_28__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_30__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_30__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_31__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_31__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_36__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_36__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_25__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_39__["TsSelectModule"], _terminus_ui_select__WEBPACK_IMPORTED_MODULE_39__["TsSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_40__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_40__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_42__["TsToggleModule"], _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_42__["TsToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _select_module__WEBPACK_IMPORTED_MODULE_1__["SelectModule"], _select_module__WEBPACK_IMPORTED_MODULE_1__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () {
        return [[{
          path: "",
          component: _select_component__WEBPACK_IMPORTED_MODULE_43__["SelectComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_44__["ENTER"]]
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__["TS_DATE_FORMATS"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/select/select.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/select/select.module.ts ***!
    \****************************************************/

  /*! exports provided: SelectModule */

  /***/
  function srcAppComponentsSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectModule", function () {
      return SelectModule;
    });

    var SelectModule = function SelectModule() {
      _classCallCheck(this, SelectModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=select-select-module-ngfactory-es5.js.map