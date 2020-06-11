function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loading-overlay-loading-overlay-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/loading-overlay/fesm2015/terminus-ui-loading-overlay.js":
  /*!************************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/loading-overlay/fesm2015/terminus-ui-loading-overlay.js ***!
    \************************************************************************************************************************/

  /*! exports provided: TsLoadingOverlayComponent, TsLoadingOverlayDirective, TsLoadingOverlayModule */

  /***/
  function distLibsUiLoadingOverlayFesm2015TerminusUiLoadingOverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsLoadingOverlayComponent", function () {
      return TsLoadingOverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsLoadingOverlayDirective", function () {
      return TsLoadingOverlayDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsLoadingOverlayModule", function () {
      return TsLoadingOverlayModule;
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


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /**
     * The loading overlay component. Implemented by {@link TsLoadingOverlayDirective}
     *
     * @example
     * See {@link TsLoadingOverlayDirective}
     */


    var TsLoadingOverlayComponent = function TsLoadingOverlayComponent() {
      _classCallCheck(this, TsLoadingOverlayComponent);
    };

    TsLoadingOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-loading-overlay',
      host: {
        "class": 'ts-loading-overlay'
      },
      template: "<div class=\"c-loading-overlay qa-loading-overlay\">\n  <svg\n    class=\"c-loading-overlay__spinner\"\n    width=\"65px\"\n    height=\"65px\"\n    viewBox=\"0 0 66 66\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <circle\n      class=\"path\"\n      fill=\"none\"\n      stroke-width=\"6\"\n      stroke-linecap=\"round\"\n      cx=\"33\"\n      cy=\"33\"\n      r=\"30\"\n    ></circle>\n  </svg>\n</div>\n",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsLoadingOverlay',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}@-webkit-keyframes rotator{0%{transform:rotate(0)}100%{transform:rotate(270deg)}}@keyframes rotator{0%{transform:rotate(0)}100%{transform:rotate(270deg)}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}100%{stroke-dashoffset:187;transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}100%{stroke-dashoffset:187;transform:rotate(450deg)}}.ts-loading-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-loading-overlay h1,.ts-loading-overlay h2,.ts-loading-overlay h3,.ts-loading-overlay h4,.ts-loading-overlay h5,.ts-loading-overlay p{margin:unset}.ts-loading-overlay .c-loading-overlay{align-content:center;align-items:center;background-color:rgba(250,250,250,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;will-change:opacity;z-index:502}.c-loading-overlay--hidden{opacity:0;transition:opacity .2s}.c-loading-overlay__spinner{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}.c-loading-overlay .path{-webkit-animation:1.4s ease-in-out infinite dash;animation:1.4s ease-in-out infinite dash;stroke:#00538a;stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center}"]
    })], TsLoadingOverlayComponent);
    /**
     * The tsLoadingOverlay UI Directive.
     * Provides a spinner overlay to demonstrate loading for async data.
     *
     * @example
     * <div [tsLoadingOverlay]="true"></div>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/loading-overlay</example-url>
     */

    var TsLoadingOverlayDirective = /*#__PURE__*/function () {
      function TsLoadingOverlayDirective(elementRef, windowService, componentFactoryResolver, appRef, injector) {
        _classCallCheck(this, TsLoadingOverlayDirective);

        this.elementRef = elementRef;
        this.windowService = windowService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector; // Create the body portal host

        this.bodyPortalHost = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["DomPortalOutlet"](this.elementRef.nativeElement, this.componentFactoryResolver, this.appRef, this.injector); // Create the component portal

        this.loadingOverlayPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](TsLoadingOverlayComponent);
      }
      /**
       * Define a setter to show/hide the loading overlay
       *
       * @param value
       */


      _createClass(TsLoadingOverlayDirective, [{
        key: "ngOnInit",

        /**
         * Determine and set the needed position
         */
        value: function ngOnInit() {
          // Determine the CSS position of the element
          var position = this.windowService.nativeWindow.getComputedStyle(this.elementRef.nativeElement).getPropertyValue('position');
          this.position = this.determinePosition(position);
        }
        /**
         * Destroy the portal host if it exists
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.bodyPortalHost) {
            this.bodyPortalHost.dispose();
          }
        }
        /**
         * Return the correct position
         *
         * @param position - The current position value
         * @returns The correct position value
         */

      }, {
        key: "determinePosition",
        value: function determinePosition(position) {
          return position === 'relative' || position === 'absolute' ? position : 'relative';
        }
      }, {
        key: "tsLoadingOverlay",
        set: function set(value) {
          var shouldSet = value && this.bodyPortalHost && !this.bodyPortalHost.hasAttached();

          if (shouldSet) {
            this.bodyPortalHost.attach(this.loadingOverlayPortal);
          } else {
            this.bodyPortalHost.detach();
          }
        }
      }]);

      return TsLoadingOverlayDirective;
    }();

    TsLoadingOverlayDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsLoadingOverlayDirective.prototype, "tsLoadingOverlay", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('style.position'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsLoadingOverlayDirective.prototype, "position", void 0);
    TsLoadingOverlayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: '[tsLoadingOverlay]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_4__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])], TsLoadingOverlayDirective);

    var TsLoadingOverlayModule = function TsLoadingOverlayModule() {
      _classCallCheck(this, TsLoadingOverlayModule);
    };

    TsLoadingOverlayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      declarations: [TsLoadingOverlayComponent, TsLoadingOverlayDirective],
      entryComponents: [TsLoadingOverlayComponent],
      exports: [TsLoadingOverlayDirective]
    })], TsLoadingOverlayModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-loading-overlay.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/loading-overlay/terminus-ui-loading-overlay.ngfactory.js":
  /*!*************************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/loading-overlay/terminus-ui-loading-overlay.ngfactory.js ***!
    \*************************************************************************************************************************/

  /*! exports provided: TsLoadingOverlayModuleNgFactory, RenderType_TsLoadingOverlayComponent, View_TsLoadingOverlayComponent_0, View_TsLoadingOverlayComponent_Host_0, TsLoadingOverlayComponentNgFactory */

  /***/
  function distLibsUiLoadingOverlayTerminusUiLoadingOverlayNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsLoadingOverlayModuleNgFactory", function () {
      return TsLoadingOverlayModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsLoadingOverlayComponent", function () {
      return RenderType_TsLoadingOverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsLoadingOverlayComponent_0", function () {
      return View_TsLoadingOverlayComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsLoadingOverlayComponent_Host_0", function () {
      return View_TsLoadingOverlayComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsLoadingOverlayComponentNgFactory", function () {
      return TsLoadingOverlayComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-loading-overlay */
    "../../dist/libs/ui/loading-overlay/fesm2015/terminus-ui-loading-overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsLoadingOverlayModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_1__["TsLoadingOverlayModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [TsLoadingOverlayComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_1__["TsLoadingOverlayModule"], _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_1__["TsLoadingOverlayModule"], [])]);
    });

    var styles_TsLoadingOverlayComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}@-webkit-keyframes rotator{0%{transform:rotate(0)}100%{transform:rotate(270deg)}}@keyframes rotator{0%{transform:rotate(0)}100%{transform:rotate(270deg)}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}100%{stroke-dashoffset:187;transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}100%{stroke-dashoffset:187;transform:rotate(450deg)}}.ts-loading-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-loading-overlay h1,.ts-loading-overlay h2,.ts-loading-overlay h3,.ts-loading-overlay h4,.ts-loading-overlay h5,.ts-loading-overlay p{margin:unset}.ts-loading-overlay .c-loading-overlay{align-content:center;align-items:center;background-color:rgba(250,250,250,.8);bottom:0;display:flex;justify-content:center;left:0;position:absolute;right:0;top:0;will-change:opacity;z-index:502}.c-loading-overlay--hidden{opacity:0;transition:opacity .2s}.c-loading-overlay__spinner{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}.c-loading-overlay .path{-webkit-animation:1.4s ease-in-out infinite dash;animation:1.4s ease-in-out infinite dash;stroke:#00538a;stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center}"];

    var RenderType_TsLoadingOverlayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsLoadingOverlayComponent,
      data: {}
    });

    function View_TsLoadingOverlayComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "c-loading-overlay qa-loading-overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, ":svg:svg", [["class", "c-loading-overlay__spinner"], ["height", "65px"], ["viewBox", "0 0 66 66"], ["width", "65px"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, ":svg:circle", [["class", "path"], ["cx", "33"], ["cy", "33"], ["fill", "none"], ["r", "30"], ["stroke-linecap", "round"], ["stroke-width", "6"]], null, null, null, null, null))], null, null);
    }

    function View_TsLoadingOverlayComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-loading-overlay", [["class", "ts-loading-overlay"]], null, null, null, View_TsLoadingOverlayComponent_0, RenderType_TsLoadingOverlayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_1__["TsLoadingOverlayComponent"], [], null, null)], null, null);
    }

    var TsLoadingOverlayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-loading-overlay", _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_1__["TsLoadingOverlayComponent"], View_TsLoadingOverlayComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/loading-overlay/loading-overlay-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/loading-overlay/loading-overlay-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: LoadingOverlayRoutingModule */

  /***/
  function srcAppComponentsLoadingOverlayLoadingOverlayRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOverlayRoutingModule", function () {
      return LoadingOverlayRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./loading-overlay.component */
    "./src/app/components/loading-overlay/loading-overlay.component.ts");

    var routes = [{
      path: '',
      component: _loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__["LoadingOverlayComponent"]
    }];

    var LoadingOverlayRoutingModule = function LoadingOverlayRoutingModule() {
      _classCallCheck(this, LoadingOverlayRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/loading-overlay/loading-overlay.component.ngfactory.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/loading-overlay/loading-overlay.component.ngfactory.js ***!
    \***********************************************************************************/

  /*! exports provided: RenderType_LoadingOverlayComponent, View_LoadingOverlayComponent_0, View_LoadingOverlayComponent_Host_0, LoadingOverlayComponentNgFactory */

  /***/
  function srcAppComponentsLoadingOverlayLoadingOverlayComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoadingOverlayComponent", function () {
      return RenderType_LoadingOverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoadingOverlayComponent_0", function () {
      return View_LoadingOverlayComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoadingOverlayComponent_Host_0", function () {
      return View_LoadingOverlayComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOverlayComponentNgFactory", function () {
      return LoadingOverlayComponentNgFactory;
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


    var _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-loading-overlay */
    "../../dist/libs/ui/loading-overlay/fesm2015/terminus-ui-loading-overlay.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _loading_overlay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loading-overlay.component */
    "./src/app/components/loading-overlay/loading-overlay.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_LoadingOverlayComponent = [];

    var RenderType_LoadingOverlayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_LoadingOverlayComponent,
      data: {}
    });

    function View_LoadingOverlayComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_2__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_3__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Demo Controls "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Show loading overlay: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.isLoading = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 9, "div", [["style", "border:1px solid lightblue;padding:8px;"]], [[4, "position", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 212992, null, 0, _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_5__["TsLoadingOverlayDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]], {
        tsLoadingOverlay: [0, "tsLoadingOverlay"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sed ducimus natus iure quas. Perferendis animi rem dolores nihil. Ut est aliquid maxime quia. Laborum itaque maxime eveniet eveniet minima. Nihil odit repellendus labore sed sed assumenda. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Odio ut maxime architecto harum. Est voluptas cum ipsum omnis quidem. Molestias provident non veniam id non cumque ut. Qui atque veritatis quia voluptas. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Sed ducimus natus iure quas. Perferendis animi rem dolores nihil. Ut est aliquid maxime quia. Laborum itaque maxime eveniet eveniet minima. Nihil odit repellendus labore sed sed assumenda. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Odio ut maxime architecto harum. Est voluptas cum ipsum omnis quidem. Molestias provident non veniam id non cumque ut. Qui atque veritatis quia voluptas. "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_2 = "";

        _ck(_v, 5, 0, currVal_2);

        var currVal_10 = _co.isLoading;

        _ck(_v, 12, 0, currVal_10);

        var currVal_12 = _co.isLoading;

        _ck(_v, 16, 0, currVal_12);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).tsCardTitle;

        _ck(_v, 3, 0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).ngClassPending;

        _ck(_v, 9, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).position;

        _ck(_v, 15, 0, currVal_11);
      });
    }

    function View_LoadingOverlayComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-loading-overlay", [], null, null, null, View_LoadingOverlayComponent_0, RenderType_LoadingOverlayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _loading_overlay_component__WEBPACK_IMPORTED_MODULE_7__["LoadingOverlayComponent"], [], null, null)], null, null);
    }

    var LoadingOverlayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-loading-overlay", _loading_overlay_component__WEBPACK_IMPORTED_MODULE_7__["LoadingOverlayComponent"], View_LoadingOverlayComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/loading-overlay/loading-overlay.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/loading-overlay/loading-overlay.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoadingOverlayComponent */

  /***/
  function srcAppComponentsLoadingOverlayLoadingOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOverlayComponent", function () {
      return LoadingOverlayComponent;
    });

    var LoadingOverlayComponent = function LoadingOverlayComponent() {
      _classCallCheck(this, LoadingOverlayComponent);

      this.isLoading = true;
    };
    /***/

  },

  /***/
  "./src/app/components/loading-overlay/loading-overlay.module.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/components/loading-overlay/loading-overlay.module.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: LoadingOverlayModuleNgFactory */

  /***/
  function srcAppComponentsLoadingOverlayLoadingOverlayModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOverlayModuleNgFactory", function () {
      return LoadingOverlayModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./loading-overlay.module */
    "./src/app/components/loading-overlay/loading-overlay.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _loading_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loading-overlay.component.ngfactory */
    "./src/app/components/loading-overlay/loading-overlay.component.ngfactory.js");
    /* harmony import */


    var _dist_libs_ui_loading_overlay_terminus_ui_loading_overlay_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/loading-overlay/terminus-ui-loading-overlay.ngfactory */
    "../../dist/libs/ui/loading-overlay/terminus-ui-loading-overlay.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _loading_overlay_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./loading-overlay-routing.module */
    "./src/app/components/loading-overlay/loading-overlay-routing.module.ts");
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


    var _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ui-loading-overlay */
    "../../dist/libs/ui/loading-overlay/fesm2015/terminus-ui-loading-overlay.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _loading_overlay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./loading-overlay.component */
    "./src/app/components/loading-overlay/loading-overlay.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var LoadingOverlayModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__["LoadingOverlayModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _loading_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["LoadingOverlayComponentNgFactory"], _dist_libs_ui_loading_overlay_terminus_ui_loading_overlay_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TsLoadingOverlayComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _loading_overlay_routing_module__WEBPACK_IMPORTED_MODULE_8__["LoadingOverlayRoutingModule"], _loading_overlay_routing_module__WEBPACK_IMPORTED_MODULE_8__["LoadingOverlayRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_15__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_16__["TsLoadingOverlayModule"], _terminus_ui_loading_overlay__WEBPACK_IMPORTED_MODULE_16__["TsLoadingOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_17__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_17__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__["LoadingOverlayModule"], _loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__["LoadingOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () {
        return [[{
          path: "",
          component: _loading_overlay_component__WEBPACK_IMPORTED_MODULE_18__["LoadingOverlayComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/loading-overlay/loading-overlay.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/loading-overlay/loading-overlay.module.ts ***!
    \**********************************************************************/

  /*! exports provided: LoadingOverlayModule */

  /***/
  function srcAppComponentsLoadingOverlayLoadingOverlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOverlayModule", function () {
      return LoadingOverlayModule;
    });

    var LoadingOverlayModule = function LoadingOverlayModule() {
      _classCallCheck(this, LoadingOverlayModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=loading-overlay-loading-overlay-module-ngfactory-es5.js.map