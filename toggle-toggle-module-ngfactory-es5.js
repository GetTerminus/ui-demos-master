function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["toggle-toggle-module-ngfactory"], {
  /***/
  "./src/app/components/toggle/toggle-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/toggle/toggle-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: ToggleRoutingModule */

  /***/
  function srcAppComponentsToggleToggleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleRoutingModule", function () {
      return ToggleRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toggle.component */
    "./src/app/components/toggle/toggle.component.ts");

    var routes = [{
      path: '',
      component: _toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]
    }];

    var ToggleRoutingModule = function ToggleRoutingModule() {
      _classCallCheck(this, ToggleRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/toggle/toggle.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/components/toggle/toggle.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_ToggleComponent, View_ToggleComponent_0, View_ToggleComponent_Host_0, ToggleComponentNgFactory */

  /***/
  function srcAppComponentsToggleToggleComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ToggleComponent", function () {
      return RenderType_ToggleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToggleComponent_0", function () {
      return View_ToggleComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToggleComponent_Host_0", function () {
      return View_ToggleComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleComponentNgFactory", function () {
      return ToggleComponentNgFactory;
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


    var _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory */
    "../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./toggle.component */
    "./src/app/components/toggle/toggle.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ToggleComponent = [];

    var RenderType_ToggleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ToggleComponent,
      data: {}
    });

    function View_ToggleComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 21, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Form"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 15, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 7, "ts-toggle", [["class", "ts-toggle"], ["tsVerticalSpacing", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "selectionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectionChange" === en) {
          var pd_0 = _co.isChanged($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TsToggleComponent_0"], _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TsToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_6__["TsToggleComponent"], [], {
        formControl: [0, "formControl"],
        isDisabled: [1, "isDisabled"],
        isRequired: [2, "isRequired"],
        name: [3, "name"]
      }, {
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_6__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Toggle Me!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.log(_co.myForm.value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Log form value"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 9, "ts-card", [["class", "ts-card"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 0, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Seed via @Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, 0, 4, "ts-toggle", [["class", "ts-toggle"], ["name", "two"], ["tsVerticalSpacing", ""]], null, [[null, "selectionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("selectionChange" === en) {
          var pd_0 = _co.isChanged($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TsToggleComponent_0"], _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TsToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_6__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_6__["TsToggleComponent"], [], {
        isChecked: [0, "isChecked"],
        isDisabled: [1, "isDisabled"],
        name: [2, "name"]
      }, {
        selectionChange: "selectionChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Toggle Me!"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = "";

        _ck(_v, 4, 0, currVal_1);

        var currVal_9 = _co.myForm;

        _ck(_v, 8, 0, currVal_9);

        var currVal_17 = _co.myForm.get("myToggle");

        var currVal_18 = _co.isDisabled;
        var currVal_19 = _co.required;
        var currVal_20 = _co.name;

        _ck(_v, 12, 0, currVal_17, currVal_18, currVal_19, currVal_20);

        var currVal_21 = _co.myForm.get("myToggle");

        _ck(_v, 14, 0, currVal_21);

        var currVal_22 = "";

        _ck(_v, 17, 0, currVal_22);

        var currVal_23 = "";

        _ck(_v, 25, 0, currVal_23);

        var currVal_24 = "";

        _ck(_v, 29, 0, currVal_24);

        var currVal_25 = true;
        var currVal_26 = true;
        var currVal_27 = "two";

        _ck(_v, 30, 0, currVal_25, currVal_26, currVal_27);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassUntouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassTouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPristine;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassDirty;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassValid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassInvalid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ngClassPending;

        _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPending;

        _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
      });
    }

    function View_ToggleComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-toggle", [], null, null, null, View_ToggleComponent_0, RenderType_ToggleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _toggle_component__WEBPACK_IMPORTED_MODULE_7__["ToggleComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]], null, null)], null, null);
    }

    var ToggleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-toggle", _toggle_component__WEBPACK_IMPORTED_MODULE_7__["ToggleComponent"], View_ToggleComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/toggle/toggle.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/toggle/toggle.component.ts ***!
    \*******************************************************/

  /*! exports provided: ToggleComponent */

  /***/
  function srcAppComponentsToggleToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleComponent", function () {
      return ToggleComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");

    var ToggleComponent = /*#__PURE__*/function () {
      function ToggleComponent(formBuilder) {
        _classCallCheck(this, ToggleComponent);

        this.formBuilder = formBuilder;
        this.isChecked = false;
        this.isDisabled = false;
        this.name = 'myToggle';
        this.required = true;
        this.myForm = this.formBuilder.group({
          myToggle: [null, []]
        });
      }

      _createClass(ToggleComponent, [{
        key: "isChanged",
        value: function isChanged(e) {
          console.log('in changed: ', e);
        }
      }, {
        key: "log",
        value: function log(v) {
          console.log('DEMO: From value: ', v);
        }
      }]);

      return ToggleComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/toggle/toggle.module.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/components/toggle/toggle.module.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: ToggleModuleNgFactory */

  /***/
  function srcAppComponentsToggleToggleModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleModuleNgFactory", function () {
      return ToggleModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _toggle_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toggle.module */
    "./src/app/components/toggle/toggle.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toggle.component.ngfactory */
    "./src/app/components/toggle/toggle.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _toggle_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./toggle-routing.module */
    "./src/app/components/toggle/toggle-routing.module.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _toggle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./toggle.component */
    "./src/app/components/toggle/toggle.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ToggleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_toggle_module__WEBPACK_IMPORTED_MODULE_1__["ToggleModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _toggle_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ToggleComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _toggle_routing_module__WEBPACK_IMPORTED_MODULE_8__["ToggleRoutingModule"], _toggle_routing_module__WEBPACK_IMPORTED_MODULE_8__["ToggleRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_16__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_16__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_18__["TsToggleModule"], _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_18__["TsToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _toggle_module__WEBPACK_IMPORTED_MODULE_1__["ToggleModule"], _toggle_module__WEBPACK_IMPORTED_MODULE_1__["ToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () {
        return [[{
          path: "",
          component: _toggle_component__WEBPACK_IMPORTED_MODULE_19__["ToggleComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/toggle/toggle.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/toggle/toggle.module.ts ***!
    \****************************************************/

  /*! exports provided: ToggleModule */

  /***/
  function srcAppComponentsToggleToggleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleModule", function () {
      return ToggleModule;
    });

    var ToggleModule = function ToggleModule() {
      _classCallCheck(this, ToggleModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=toggle-toggle-module-ngfactory-es5.js.map