function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["copy-copy-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/copy/fesm2015/terminus-ui-copy.js":
  /*!**************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/copy/fesm2015/terminus-ui-copy.js ***!
    \**************************************************************************************************/

  /*! exports provided: TsCopyComponent, TsCopyModule */

  /***/
  function distLibsUiCopyFesm2015TerminusUiCopyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCopyComponent", function () {
      return TsCopyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCopyModule", function () {
      return TsCopyModule;
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ui-utilities */
    "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
    /**
     * A component to facilitate the easy copying of text
     *
     * @example
     * <ts-copy
     *              [disableInitialSelection]="true"
     *              [enableQuickCopy]="true"
     *              [format]="icon"
     *              theme="accent"
     * >My text to copy!</ts-copy>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/copy</example-url>
     */


    var TsCopyComponent = /*#__PURE__*/function () {
      /**
       * Inject services
       *
       * @param documentService
       * @param windowService
       */
      function TsCopyComponent(documentService, windowService) {
        _classCallCheck(this, TsCopyComponent);

        this.documentService = documentService;
        this.windowService = windowService;
        /**
         * Store a reference to the document object
         */

        this.document = this.documentService.document;
        /**
         * Internal flag to track if the contents have been selected
         */

        this.hasSelected = false;
        /**
         * Define the copy icon
         */

        this.icon = 'content_copy';
        /**
         * Define the color of the material ripple
         */
        // TODO: This color should be coming from a config
        // https://github.com/GetTerminus/terminus-ui/issues/1490

        this.rippleColor = '#1a237e';
        /**
         * Store a reference to the window object
         */

        this.window = this.windowService.nativeWindow;
        /**
         * Define if the initial click should select the contents
         */

        this.disableInitialSelection = false;
        /**
         * Define if the copy to clipboard functionality is enabled
         */

        this.enableQuickCopy = true;
        this._format = 'standard';
        /**
         * Define the component theme
         */

        this.theme = 'primary';
      }
      /**
       * Define the UI style
       *
       * @param value
       */


      _createClass(TsCopyComponent, [{
        key: "selectText",

        /**
         * Select the text content of the passed in element
         *
         * @param element - The element whose text should be selected
         * @param hasSelected - The flag defining if the selection has already been made
         * @param disabled - The flag defining if the selection functionality should be disabled
         * @returns The value representing if the copy was successful
         */
        value: function selectText(element, hasSelected, disabled) {
          // If this functionality is disabled OR the text has already been selected,
          // do not intercept any more clicks until the focus is reset
          if (disabled || hasSelected) {
            return false;
          }

          var selection = this.window.getSelection(); // NOTE: Adding the type of 'Range' to this causes an error with `range.selectNodeContents`
          // `Argument of type ElementRef is not assignable to type 'Node'`

          var range = this.document.createRange(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          range.selectNodeContents(element);
          selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
          selection === null || selection === void 0 ? void 0 : selection.addRange(range);
          this.hasSelected = true;
          return true;
        }
        /**
         * Reset the text selection
         * NOTE: The containing div must have a `tabindex` set or no blur event will be fired
         */

      }, {
        key: "resetSelection",
        value: function resetSelection() {
          this.hasSelected = false;
        }
        /**
         * Copy text to the user's clipboard
         *
         * @param text - The text to copy
         */

      }, {
        key: "copyToClipboard",
        value: function copyToClipboard(text) {
          // Create a hidden textarea to seed with text content
          // FIXME: During the upgrade to TS 3.7.x 'createElement' is marked as deprecated but the signature for the deprecated and new methods
          // are the same. So even when using the 'new' method, a deprecation error is still reported.
          // I believe the new format should be `this.document.createElement<textarea>('textarea');`
          // eslint-disable-next-line deprecation/deprecation
          var target = this.document.createElement('textarea');
          target.className = 'targetElement';
          target.style.position = 'absolute';
          target.style.left = '101%';
          target.style.top = '0';
          target.style.width = '1px';
          target.style.height = '1px';
          target.textContent = text; // Add the textarea, focus and select the text

          this.document.body.appendChild(target);
          target.focus();
          target.setSelectionRange(0, target.value.length); // Copy the selection or fall back to prompt

          try {
            this.document.execCommand('copy');
            target.remove();
          } catch (error) {
            // Fall back to the native alert
            this.window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
          }
        }
      }, {
        key: "format",
        set: function set(value) {
          this._format = value ? value : 'standard';

          if (this.format === 'icon' && !this.enableQuickCopy) {
            this.enableQuickCopy = true; // istanbul ignore else

            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
              throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_8__["TsUILibraryError"]("'enableQuickCopy' must be set to 'true' when using the icon only display mode");
            }
          }
        },
        get: function get() {
          return this._format;
        }
        /**
         * Return the inner text content
         *
         * @returns The text content of the inner <ng-content>
         */

      }, {
        key: "textContent",
        get: function get() {
          var hasInnerText = this.content && this.content.nativeElement && this.content.nativeElement.innerText;
          return hasInnerText ? this.content.nativeElement.innerText : '';
        }
      }]);

      return TsCopyComponent;
    }();

    TsCopyComponent.ctorParameters = function () {
      return [{
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__["TsDocumentService"]
      }, {
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__["TsWindowService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('content', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], TsCopyComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(_terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__["TsTooltipComponent"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])], TsCopyComponent.prototype, "tooltipCollection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCopyComponent.prototype, "disableInitialSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCopyComponent.prototype, "enableQuickCopy", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsCopyComponent.prototype, "format", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsCopyComponent.prototype, "theme", void 0);
    TsCopyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-copy',
      template: "<div\n  class=\"c-copy qa-copy\"\n  fxLayout=\"row\"\n  tabindex=\"0\"\n  (click)=\"selectText(content, hasSelected, disableInitialSelection)\"\n  (blur)=\"resetSelection()\"\n>\n    <div\n      #content\n      class=\"c-copy__content qa-copy-content\"\n      fxFlex=\"auto\"\n    >\n      <ts-tooltip [tooltipValue]=\"textContent\">\n        <ng-content></ng-content>\n      </ts-tooltip>\n    </div>\n\n  <div class=\"c-copy__tooltip\">\n    <ts-tooltip tooltipValue=\"Copy to clipboard\" *ngIf=\"enableQuickCopy\">\n      <div\n        class=\"c-copy__icon qa-copy-icon\"\n        (click)=\"copyToClipboard(textContent)\"\n        mat-ripple\n        [matRippleColor]=\"rippleColor\"\n      >\n        <ts-icon matSuffix fxFlex>\n          {{ icon }}\n        </ts-icon>\n      </div>\n    </ts-tooltip>\n  </div>\n</div>\n",
      host: {
        'class': 'ts-copy',
        '[class.ts-copy--standard]': 'format === "standard"',
        '[class.ts-copy--minimal]': 'format === "minimal"',
        '[class.ts-copy--icon]': 'format === "icon"',
        '[class.ts-copy--primary]': 'theme === "primary"',
        '[class.ts-copy--accent]': 'theme === "accent"',
        '[class.ts-copy--warn]': 'theme === "warn"'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsCopy',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-copy{display:block;max-width:100%}.ts-copy :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-copy h1,.ts-copy h2,.ts-copy h3,.ts-copy h4,.ts-copy h5,.ts-copy p{margin:unset}.ts-copy .c-copy{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;color:#757575;position:relative}.ts-copy .c-copy:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-copy--primary .mat-ripple-element{background-color:rgba(0,52,87,.4)!important}.ts-copy--accent .c-copy .c-copy__icon{background-color:#2f854d}.ts-copy--accent .mat-ripple-element{background-color:rgba(34,95,55,.4)!important}.ts-copy--warn .c-copy .c-copy__icon{background-color:#c8604d}.ts-copy--warn .mat-ripple-element{background-color:rgba(173,72,53,.4)!important}.ts-copy--standard{background-color:#f2f0f7;border:1px solid #cecdd1;border-radius:3px;transition:border-color .2s ease-in-out 50ms}.ts-copy--standard:focus{border:1px solid #999;outline:0;transition-delay:0}.ts-copy--minimal .c-copy__content{line-height:24px;padding:.25em .3em .25em .4em}.ts-copy--minimal .c-copy .c-copy__tooltip{bottom:3px;top:3px}.ts-copy--icon{display:inline-block}.ts-copy--icon .c-copy__content{width:35px}.ts-copy--icon .c-copy .c-copy__tooltip{opacity:1;pointer-events:auto}.ts-copy:focus .c-copy__tooltip,.ts-copy:hover .c-copy__tooltip{opacity:1;pointer-events:auto;transition-delay:70ms}.c-copy .c-copy__content{align-items:center;justify-content:center;line-height:32px;min-width:35px;overflow:hidden;white-space:nowrap}.c-copy .c-copy__content::-webkit-scrollbar{-webkit-appearance:none}.c-copy .c-copy__content::-webkit-scrollbar:vertical{width:0}.c-copy .c-copy__content::-webkit-scrollbar:horizontal{height:0}.c-copy .c-copy__content::-webkit-scrollbar-thumb{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-track{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-corner{background-color:transparent}.c-copy .c-copy__content .ts-tooltip{display:block;max-width:100%}.c-copy .c-copy__content .c-tooltip{display:block;overflow:hidden;padding:.2em 0 .2em .4em;text-overflow:ellipsis}.c-copy .c-copy__tooltip{bottom:-1px;opacity:0;pointer-events:none;position:absolute;right:-1px;top:-1px;transition:opacity .2s ease-out}.c-copy .c-copy__tooltip .ts-tooltip{height:100%}.c-copy .c-copy__tooltip .ts-icon{align-items:center;display:flex}.c-copy .c-copy__icon{cursor:pointer;background-color:#00538a;border-radius:3px;bottom:0;color:#fafafa;height:100%;padding:.25em .3em .25em .4em;transition:background-color .2s ease-in}.c-copy .mat-icon{vertical-align:bottom}.ts-copy--standard .c-copy .c-copy__icon{border-radius:0 3px 3px 0}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__["TsDocumentService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_7__["TsWindowService"]])], TsCopyComponent);

    var TsCopyModule = function TsCopyModule() {
      _classCallCheck(this, TsCopyModule);
    };

    TsCopyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_5__["TsIconModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__["TsTooltipModule"]],
      exports: [TsCopyComponent],
      declarations: [TsCopyComponent]
    })], TsCopyModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-copy.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/copy/terminus-ui-copy.ngfactory.js":
  /*!***************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/copy/terminus-ui-copy.ngfactory.js ***!
    \***************************************************************************************************/

  /*! exports provided: TsCopyModuleNgFactory, RenderType_TsCopyComponent, View_TsCopyComponent_0, View_TsCopyComponent_Host_0, TsCopyComponentNgFactory */

  /***/
  function distLibsUiCopyTerminusUiCopyNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCopyModuleNgFactory", function () {
      return TsCopyModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsCopyComponent", function () {
      return RenderType_TsCopyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsCopyComponent_0", function () {
      return View_TsCopyComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsCopyComponent_Host_0", function () {
      return View_TsCopyComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCopyComponentNgFactory", function () {
      return TsCopyComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-copy */
    "../../dist/libs/ui/copy/fesm2015/terminus-ui-copy.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../tooltip/terminus-ui-tooltip.ngfactory */
    "../../dist/libs/ui/tooltip/terminus-ui-tooltip.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../icon/terminus-ui-icon.ngfactory */
    "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsCopyModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_copy__WEBPACK_IMPORTED_MODULE_1__["TsCopyModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_20__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_20__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_1__["TsCopyModule"], _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_1__["TsCopyModule"], [])]);
    });

    var styles_TsCopyComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-copy{display:block;max-width:100%}.ts-copy :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-copy h1,.ts-copy h2,.ts-copy h3,.ts-copy h4,.ts-copy h5,.ts-copy p{margin:unset}.ts-copy .c-copy{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;color:#757575;position:relative}.ts-copy .c-copy:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-copy--primary .mat-ripple-element{background-color:rgba(0,52,87,.4)!important}.ts-copy--accent .c-copy .c-copy__icon{background-color:#2f854d}.ts-copy--accent .mat-ripple-element{background-color:rgba(34,95,55,.4)!important}.ts-copy--warn .c-copy .c-copy__icon{background-color:#c8604d}.ts-copy--warn .mat-ripple-element{background-color:rgba(173,72,53,.4)!important}.ts-copy--standard{background-color:#f2f0f7;border:1px solid #cecdd1;border-radius:3px;transition:border-color .2s ease-in-out 50ms}.ts-copy--standard:focus{border:1px solid #999;outline:0;transition-delay:0}.ts-copy--minimal .c-copy__content{line-height:24px;padding:.25em .3em .25em .4em}.ts-copy--minimal .c-copy .c-copy__tooltip{bottom:3px;top:3px}.ts-copy--icon{display:inline-block}.ts-copy--icon .c-copy__content{width:35px}.ts-copy--icon .c-copy .c-copy__tooltip{opacity:1;pointer-events:auto}.ts-copy:focus .c-copy__tooltip,.ts-copy:hover .c-copy__tooltip{opacity:1;pointer-events:auto;transition-delay:70ms}.c-copy .c-copy__content{align-items:center;justify-content:center;line-height:32px;min-width:35px;overflow:hidden;white-space:nowrap}.c-copy .c-copy__content::-webkit-scrollbar{-webkit-appearance:none}.c-copy .c-copy__content::-webkit-scrollbar:vertical{width:0}.c-copy .c-copy__content::-webkit-scrollbar:horizontal{height:0}.c-copy .c-copy__content::-webkit-scrollbar-thumb{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-track{background-color:transparent;border-color:transparent}.c-copy .c-copy__content::-webkit-scrollbar-corner{background-color:transparent}.c-copy .c-copy__content .ts-tooltip{display:block;max-width:100%}.c-copy .c-copy__content .c-tooltip{display:block;overflow:hidden;padding:.2em 0 .2em .4em;text-overflow:ellipsis}.c-copy .c-copy__tooltip{bottom:-1px;opacity:0;pointer-events:none;position:absolute;right:-1px;top:-1px;transition:opacity .2s ease-out}.c-copy .c-copy__tooltip .ts-tooltip{height:100%}.c-copy .c-copy__tooltip .ts-icon{align-items:center;display:flex}.c-copy .c-copy__icon{cursor:pointer;background-color:#00538a;border-radius:3px;bottom:0;color:#fafafa;height:100%;padding:.25em .3em .25em .4em;transition:background-color .2s ease-in}.c-copy .mat-icon{vertical-align:bottom}.ts-copy--standard .c-copy .c-copy__icon{border-radius:0 3px 3px 0}"];

    var RenderType_TsCopyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsCopyComponent,
      data: {}
    });

    function View_TsCopyComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "ts-tooltip", [["class", "ts-tooltip"], ["tooltipValue", "Copy to clipboard"]], null, null, null, _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_TsTooltipComponent_0"], _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_TsTooltipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, [[2, 4]], 0, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_20__["TsTooltipComponent"], [], {
        tooltipValue: [0, "tooltipValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 5, "div", [["class", "c-copy__icon qa-copy-icon mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.copyToClipboard(_co.textContent) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "ts-icon", [["class", "ts-icon"], ["fxFlex", ""], ["matSuffix", ""]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_TsIconComponent_0"], _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, 0, [" ", " "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "Copy to clipboard";

        _ck(_v, 1, 0, currVal_0);

        var currVal_2 = _co.rippleColor;

        _ck(_v, 3, 0, currVal_2);

        var currVal_8 = "";

        _ck(_v, 5, 0, currVal_8);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).unbounded;

        _ck(_v, 2, 0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).inline;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).theme === "primary";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).theme === "accent";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).theme === "warn";

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).background;

        _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_9 = _co.icon;

        _ck(_v, 7, 0, currVal_9);
      });
    }

    function View_TsCopyComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        tooltipCollection: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "div", [["class", "c-copy qa-copy"], ["fxLayout", "row"], ["tabindex", "0"]], null, [[null, "click"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.selectText(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4), _co.hasSelected, _co.disableInitialSelection) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _co.resetSelection() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, [[1, 0], ["content", 1]], null, 4, "div", [["class", "c-copy__content qa-copy-content"], ["fxFlex", "auto"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "ts-tooltip", [["class", "ts-tooltip"]], null, null, null, _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_TsTooltipComponent_0"], _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_TsTooltipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 49152, [[2, 4]], 0, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_20__["TsTooltipComponent"], [], {
        tooltipValue: [0, "tooltipValue"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](0, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [["class", "c-copy__tooltip"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsCopyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "auto";

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _co.textContent;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _co.enableQuickCopy;

        _ck(_v, 11, 0, currVal_3);
      }, null);
    }

    function View_TsCopyComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-copy", [["class", "ts-copy"]], [[2, "ts-copy--standard", null], [2, "ts-copy--minimal", null], [2, "ts-copy--icon", null], [2, "ts-copy--primary", null], [2, "ts-copy--accent", null], [2, "ts-copy--warn", null]], null, null, View_TsCopyComponent_0, RenderType_TsCopyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_1__["TsCopyComponent"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_25__["TsDocumentService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_25__["TsWindowService"]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).format === "standard";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).format === "minimal";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).format === "icon";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "primary";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "accent";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "warn";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
      });
    }

    var TsCopyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-copy", _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_1__["TsCopyComponent"], View_TsCopyComponent_Host_0, {
      disableInitialSelection: "disableInitialSelection",
      enableQuickCopy: "enableQuickCopy",
      format: "format",
      theme: "theme"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "../../dist/libs/ui/tooltip/terminus-ui-tooltip.ngfactory.js":
  /*!*********************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/tooltip/terminus-ui-tooltip.ngfactory.js ***!
    \*********************************************************************************************************/

  /*! exports provided: TsTooltipModuleNgFactory, RenderType_TsTooltipComponent, View_TsTooltipComponent_0, View_TsTooltipComponent_Host_0, TsTooltipComponentNgFactory */

  /***/
  function distLibsUiTooltipTerminusUiTooltipNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTooltipModuleNgFactory", function () {
      return TsTooltipModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsTooltipComponent", function () {
      return RenderType_TsTooltipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsTooltipComponent_0", function () {
      return View_TsTooltipComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsTooltipComponent_Host_0", function () {
      return View_TsTooltipComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTooltipComponentNgFactory", function () {
      return TsTooltipComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsTooltipModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__["TsTooltipModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__["TsTooltipModule"], [])]);
    });

    var styles_TsTooltipComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tooltip{display:inline-block}.ts-tooltip :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-tooltip h1,.ts-tooltip h2,.ts-tooltip h3,.ts-tooltip h4,.ts-tooltip h5,.ts-tooltip p{margin:unset}.c-tooltip--underline{border-bottom:.1em dotted;border-color:inherit;cursor:help}.mat-tooltip-panel .mat-tooltip{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;color:#302d35;overflow-wrap:break-word;white-space:normal}"];

    var RenderType_TsTooltipComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsTooltipComponent,
      data: {}
    });

    function View_TsTooltipComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        matTooltip: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 16777216, null, null, 4, "span", [["class", "c-tooltip qa-tooltip"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, {
        "c-tooltip--underline": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, [[1, 4], ["tooltip", 4]], 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        position: [0, "position"],
        message: [1, "message"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "c-tooltip qa-tooltip";

        var currVal_1 = _ck(_v, 3, 0, _co.hasUnderline);

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = _co.tooltipPosition;
        var currVal_3 = _co.tooltipValue;

        _ck(_v, 4, 0, currVal_2, currVal_3);
      }, null);
    }

    function View_TsTooltipComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-tooltip", [["class", "ts-tooltip"]], null, null, null, View_TsTooltipComponent_0, RenderType_TsTooltipComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__["TsTooltipComponent"], [], null, null)], null, null);
    }

    var TsTooltipComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-tooltip", _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_1__["TsTooltipComponent"], View_TsTooltipComponent_Host_0, {
      hasUnderline: "hasUnderline",
      tooltipPosition: "tooltipPosition",
      tooltipValue: "tooltipValue"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "./src/app/components/copy/copy-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/copy/copy-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: CopyRoutingModule */

  /***/
  function srcAppComponentsCopyCopyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopyRoutingModule", function () {
      return CopyRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _copy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./copy.component */
    "./src/app/components/copy/copy.component.ts");

    var routes = [{
      path: '',
      component: _copy_component__WEBPACK_IMPORTED_MODULE_1__["CopyComponent"]
    }];

    var CopyRoutingModule = function CopyRoutingModule() {
      _classCallCheck(this, CopyRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/copy/copy.component.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/components/copy/copy.component.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: RenderType_CopyComponent, View_CopyComponent_0, View_CopyComponent_Host_0, CopyComponentNgFactory */

  /***/
  function srcAppComponentsCopyCopyComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CopyComponent", function () {
      return RenderType_CopyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CopyComponent_0", function () {
      return View_CopyComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CopyComponent_Host_0", function () {
      return View_CopyComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopyComponentNgFactory", function () {
      return CopyComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
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


    var _dist_libs_ui_copy_terminus_ui_copy_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/copy/terminus-ui-copy.ngfactory */
    "../../dist/libs/ui/copy/terminus-ui-copy.ngfactory.js");
    /* harmony import */


    var _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-copy */
    "../../dist/libs/ui/copy/fesm2015/terminus-ui-copy.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _copy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./copy.component */
    "./src/app/components/copy/copy.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CopyComponent = [];

    var RenderType_CopyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_CopyComponent,
      data: {}
    });

    function View_CopyComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1)], function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, "");

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), _v.context.$implicit));

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_CopyComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 46, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_5__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Demo Controls "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Enable quick copy: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.canCopy = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, 0, 19, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Format: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 17, "select", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 20).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.format = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 3, "option", [["selected", "selected"], ["value", "standard"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Standard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 3, "option", [["value", "minimal"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Minimal"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 3, "option", [["value", "icon"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Icon"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, 0, 9, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Theme: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 7, "select", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.theme = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CopyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 4, "ts-card", [["class", "ts-card"], ["style", "max-width: 22rem;"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_4__["TsCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, 0, 2, "ts-copy", [["class", "ts-copy"]], [[2, "ts-copy--standard", null], [2, "ts-copy--minimal", null], [2, "ts-copy--icon", null], [2, "ts-copy--primary", null], [2, "ts-copy--accent", null], [2, "ts-copy--warn", null]], null, null, _dist_libs_ui_copy_terminus_ui_copy_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_TsCopyComponent_0"], _dist_libs_ui_copy_terminus_ui_copy_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_TsCopyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 49152, null, 0, _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_7__["TsCopyComponent"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsDocumentService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"]], {
        enableQuickCopy: [0, "enableQuickCopy"],
        format: [1, "format"],
        theme: [2, "theme"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](52, 0, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 3, 0, currVal_0);

        var currVal_2 = "";

        _ck(_v, 6, 0, currVal_2);

        var currVal_10 = _co.canCopy;

        _ck(_v, 13, 0, currVal_10);

        var currVal_18 = _co.format;

        _ck(_v, 22, 0, currVal_18);

        var currVal_19 = "standard";

        _ck(_v, 26, 0, currVal_19);

        var currVal_20 = "standard";

        _ck(_v, 27, 0, currVal_20);

        var currVal_21 = "minimal";

        _ck(_v, 30, 0, currVal_21);

        var currVal_22 = "minimal";

        _ck(_v, 31, 0, currVal_22);

        var currVal_23 = "icon";

        _ck(_v, 34, 0, currVal_23);

        var currVal_24 = "icon";

        _ck(_v, 35, 0, currVal_24);

        var currVal_32 = _co.theme;

        _ck(_v, 43, 0, currVal_32);

        var currVal_33 = _co.themes;

        _ck(_v, 47, 0, currVal_33);

        var currVal_40 = _co.canCopy;
        var currVal_41 = _co.format;
        var currVal_42 = _co.theme;

        _ck(_v, 51, 0, currVal_40, currVal_41, currVal_42);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).tsCardTitle;

        _ck(_v, 4, 0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending;

        _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassUntouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassTouched;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPristine;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassDirty;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassValid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassInvalid;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPending;

        _ck(_v, 19, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassUntouched;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassTouched;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPristine;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassDirty;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassValid;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassInvalid;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).ngClassPending;

        _ck(_v, 40, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31);

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).format === "standard";
        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).format === "minimal";
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).format === "icon";
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).theme === "primary";
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).theme === "accent";
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 51).theme === "warn";

        _ck(_v, 50, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39);

        var currVal_43 = _co.fakeUrl;

        _ck(_v, 52, 0, currVal_43);
      });
    }

    function View_CopyComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-copy", [], null, null, null, View_CopyComponent_0, RenderType_CopyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _copy_component__WEBPACK_IMPORTED_MODULE_9__["CopyComponent"], [], null, null)], null, null);
    }

    var CopyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-copy", _copy_component__WEBPACK_IMPORTED_MODULE_9__["CopyComponent"], View_CopyComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/copy/copy.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/copy/copy.component.ts ***!
    \***************************************************/

  /*! exports provided: CopyComponent */

  /***/
  function srcAppComponentsCopyCopyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopyComponent", function () {
      return CopyComponent;
    });

    var CopyComponent = function CopyComponent() {
      _classCallCheck(this, CopyComponent);

      // eslint-disable-next-line max-len
      this.fakeUrl = 'https://github.com/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom/foo/bar/baz/bing/bang/boom';
      this.canCopy = true;
      this.format = 'standard';
      this.theme = 'primary';
      this.themes = ['primary', 'accent', 'warn'];
    };
    /***/

  },

  /***/
  "./src/app/components/copy/copy.module.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/components/copy/copy.module.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: CopyModuleNgFactory */

  /***/
  function srcAppComponentsCopyCopyModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopyModuleNgFactory", function () {
      return CopyModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _copy_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./copy.module */
    "./src/app/components/copy/copy.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _copy_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./copy.component.ngfactory */
    "./src/app/components/copy/copy.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _copy_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./copy-routing.module */
    "./src/app/components/copy/copy-routing.module.ts");
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @terminus/ui-copy */
    "../../dist/libs/ui/copy/fesm2015/terminus-ui-copy.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _copy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./copy.component */
    "./src/app/components/copy/copy.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var CopyModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_copy_module__WEBPACK_IMPORTED_MODULE_1__["CopyModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _copy_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CopyComponentNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _copy_routing_module__WEBPACK_IMPORTED_MODULE_13__["CopyRoutingModule"], _copy_routing_module__WEBPACK_IMPORTED_MODULE_13__["CopyRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_18__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_18__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_19__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_19__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_22__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_26__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_26__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_27__["TsCopyModule"], _terminus_ui_copy__WEBPACK_IMPORTED_MODULE_27__["TsCopyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_28__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_28__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _copy_module__WEBPACK_IMPORTED_MODULE_1__["CopyModule"], _copy_module__WEBPACK_IMPORTED_MODULE_1__["CopyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
        return [[{
          path: "",
          component: _copy_component__WEBPACK_IMPORTED_MODULE_29__["CopyComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/copy/copy.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/copy/copy.module.ts ***!
    \************************************************/

  /*! exports provided: CopyModule */

  /***/
  function srcAppComponentsCopyCopyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopyModule", function () {
      return CopyModule;
    });

    var CopyModule = function CopyModule() {
      _classCallCheck(this, CopyModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=copy-copy-module-ngfactory-es5.js.map