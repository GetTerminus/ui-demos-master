function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~autocomplete-autocomplete-module-ngfactory~autofocus-autofocus-module-ngfactory~breakpoints-~e91fee36"], {
  /***/
  "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js":
  /*!**************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/card/fesm2015/terminus-ui-card.js ***!
    \**************************************************************************************************/

  /*! exports provided: TsCardComponent, TsCardModule, TsCardTitleDirective, foo */

  /***/
  function distLibsUiCardFesm2015TerminusUiCardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCardComponent", function () {
      return TsCardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCardModule", function () {
      return TsCardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCardTitleDirective", function () {
      return TsCardTitleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "foo", function () {
      return foo;
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ngx-tools/coercion */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
    /* harmony import */


    var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-utilities */
    "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
    /**
     * Unique ID for each instance
     */


    var nextUniqueId = 0;
    /**
     * A presentational component to render a card
     *
     * @example
     * <ts-card
     *              aspectRatio="3:5"
     *              border="right"
     *              [centeredContent]="true"
     *              [isDisabled]="true"
     *              [flat]="true"
     *              id="my-id"
     *              [supportsInteraction]="true"
     *              theme="primary"
     *              [utilityMenuTemplate]="myTemplate"
     * >Here is my card!</ts-card>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/card</example-url>
     */

    var TsCardComponent = /*#__PURE__*/function () {
      function TsCardComponent() {
        _classCallCheck(this, TsCardComponent);

        /**
         * Define the default component ID
         */
        this.uid = "ts-card-".concat(nextUniqueId++);
        this._border = 'none';
        /**
         * Define if the card should center child content
         */

        this.centeredContent = false;
        /**
         * Define if the card is disabled
         */

        this.isDisabled = false;
        /**
         * Define if the card should not have a drop shadow
         */

        this.flat = false;
        this._id = this.uid;
        /**
         * Define if the card should support interaction (via hover)
         *
         * NOTE: This only alters style; not functionality
         */

        this.supportsInteraction = false;
        this._theme = 'primary';
      }
      /**
       * Getter to return a border class if the border is set
       */


      _createClass(TsCardComponent, [{
        key: "borderClass",
        get: function get() {
          return !this.border || this.border === 'none' ? '' : "c-card--border-".concat(this.border);
        }
        /**
         * Define if the card should conform to a fixed aspect ratio
         *
         * @param value - The aspect ratio. See {@link TsAspectRatioTypes} for possible values.
         */

      }, {
        key: "aspectRatio",
        set: function set(value) {
          var x = parseInt(value.split(':')[0], 10);
          var y = parseInt(value.split(':')[1], 10);
          var percentageMultiplier = 100;
          var percentage = y / x * percentageMultiplier;
          var percentageMaxLength = 2;
          this.aspectRatioPadding = "".concat(percentage.toFixed(percentageMaxLength), "%");
        }
        /**
         * Define if a border should be present on the card. {@link TsCardBorderOptions}
         *
         * @param value
         */

      }, {
        key: "border",
        set: function set(value) {
          this._border = value ? value : 'none';
        },
        get: function get() {
          return this._border;
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
         * Define the card theme
         *
         * @param value
         */

      }, {
        key: "theme",
        set: function set(value) {
          this._theme = value ? value : 'primary';
        },
        get: function get() {
          return this._theme;
        }
      }]);

      return TsCardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsCardComponent.prototype, "aspectRatio", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsCardComponent.prototype, "border", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCardComponent.prototype, "centeredContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCardComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCardComponent.prototype, "flat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsCardComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCardComponent.prototype, "supportsInteraction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsCardComponent.prototype, "theme", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], TsCardComponent.prototype, "utilityMenuTemplate", void 0);
    TsCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-card',
      template: "<div\n  class=\"c-card qa-card {{ borderClass }} c-card--{{ theme }}\"\n  [ngClass]=\"{\n    'c-card--interaction': supportsInteraction,\n    'c-card--centered': centeredContent,\n    'c-card--aspect': aspectRatioPadding,\n    'c-card--disabled': isDisabled,\n    'c-card--right-spacing': utilityMenuTemplate || isDisabled,\n    'c-card--flat': flat\n  }\"\n  [style.paddingTop]=\"aspectRatioPadding\"\n  [attr.id]=\"id\"\n>\n  <div\n    class=\"c-card__inner\"\n    mat-ripple\n    [matRippleDisabled]=\"!supportsInteraction || isDisabled\"\n  >\n    <ng-content></ng-content>\n  </div>\n\n  <ng-container\n    *ngIf=\"utilityMenuTemplate\"\n    [ngTemplateOutlet]=\"utilityMenuTemplate\"\n  ></ng-container>\n\n  <ts-icon\n    *ngIf=\"isDisabled && !utilityMenuTemplate\"\n    class=\"c-card__lock qa-card-lock\"\n  >lock_outline</ts-icon>\n</div>\n",
      host: {
        "class": 'ts-card'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsCard',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-card{--card-disabled-opacity:.5;--card-disabled-menu-opacity:.3;display:flex;flex-flow:row nowrap}.ts-card :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-card h1,.ts-card h2,.ts-card h3,.ts-card h4,.ts-card h5,.ts-card p{margin:unset}.ts-card .c-card{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;background-color:var(--ts-color-light);position:relative;transition:height var(--ts-animation-time-duration-200) var(--ts-animation-easing-ease);width:100%}.ts-card .c-card:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-card .c-card:not(.c-card--aspect),.ts-card .c-card:not(.c-card--interaction){align-items:stretch;display:flex;flex-direction:row;justify-content:center}.c-card .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;width:100%}.c-card .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card .c-card__inner .c-card__title-accent-border{border-left:2px solid var(--ts-color-primary-500);padding-left:8px}.c-card .c-card__inner .c-card__title-accent-border[theme=accent]{border-left-color:var(--ts-color-accent-500)}.c-card .c-card__inner .c-card__title-accent-border[theme=warn]{border-left-color:var(--ts-color-warn-500)}.c-card--interaction:not(.c-card--disabled) .c-card__inner{min-height:calc(100% - 48px);padding:24px;vertical-align:top;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 250ms cubic-bezier(.4,0,.2,1);cursor:pointer}.c-card--interaction:not(.c-card--disabled) .c-card__inner:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.c-card--interaction:not(.c-card--disabled) .c-card__inner .c-card__title{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;letter-spacing:.005em}.c-card--centered .c-card__inner{align-items:center;display:flex;justify-content:center}.c-card--aspect .c-card__inner{bottom:0;left:0;position:absolute;right:0;top:0}.c-card--disabled .c-card__inner{opacity:var(--card-disabled-opacity)}.c-card--disabled .c-menu{opacity:var(--card-disabled-menu-opacity);pointer-events:none}.c-card--disabled .c-card__lock{--lock-top-alignment:2px;--lock-scale:.7;color:var(--ts-color-utility-500);position:absolute;right:var(--ts-space-inline-600);top:calc(var(--ts-space-inline-600) - var(--lock-top-alignment));transform:scale(var(--lock-scale))}.c-card--right-spacing .c-card__inner{padding-right:var(--ts-space-base-large4)}.c-card--flat>.c-card__inner{border:1px solid var(--ts-color-utility-300);box-shadow:none}.c-card--border-bottom.c-card--primary .c-card__inner{border-bottom:2px solid var(--ts-color-primary-500)}.c-card--border-bottom.c-card--accent .c-card__inner{border-bottom:2px solid var(--ts-color-accent-500)}.c-card--border-bottom.c-card--warn .c-card__inner{border-bottom:2px solid var(--ts-color-warn-500)}.c-card--border-left.c-card--primary .c-card__inner{border-left:2px solid var(--ts-color-primary-500)}.c-card--border-left.c-card--accent .c-card__inner{border-left:2px solid var(--ts-color-accent-500)}.c-card--border-left.c-card--warn .c-card__inner{border-left:2px solid var(--ts-color-warn-500)}.c-card--border-right.c-card--primary .c-card__inner{border-right:2px solid var(--ts-color-primary-500)}.c-card--border-right.c-card--accent .c-card__inner{border-right:2px solid var(--ts-color-accent-500)}.c-card--border-right.c-card--warn .c-card__inner{border-right:2px solid var(--ts-color-warn-500)}.c-card--border-top.c-card--primary .c-card__inner{border-top:2px solid var(--ts-color-primary-500)}.c-card--border-top.c-card--accent .c-card__inner{border-top:2px solid var(--ts-color-accent-500)}.c-card--border-top.c-card--warn .c-card__inner{border-top:2px solid var(--ts-color-warn-500)}.c-card__inner .ts-table~.ts-loading-overlay .c-loading-overlay{left:-var(--ts-space-inline-600);right:-var(--ts-space-inline-600)}"]
    })], TsCardComponent);

    var TsCardTitleDirective = /*#__PURE__*/function () {
      /**
       * Verify the directive is nested within a {@link TsCardComponent}
       *
       * @param parent
       */
      function TsCardTitleDirective(parent) {
        _classCallCheck(this, TsCardTitleDirective);

        /**
         * Define the component theme
         */
        this.theme = 'primary';
        /**
         * Set the card title class
         */

        this.tsCardTitle = 'c-card__title';

        if (!(parent instanceof TsCardComponent) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
          throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_6__["TsUILibraryError"]("The 'tsCardTitle' directive must be inside a <ts-card> component.");
        }
      }
      /**
       * Option to add a border to the header
       *
       * @param value
       */


      _createClass(TsCardTitleDirective, [{
        key: "tsTitleAccentBorder",
        set: function set(value) {
          // istanbul ignore else
          if (Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value)) {
            this.tsCardTitle = "".concat(this.tsCardTitle, " c-card__title-accent-border");
          }
        }
      }]);

      return TsCardTitleDirective;
    }();

    TsCardTitleDirective.ctorParameters = function () {
      return [{
        type: TsCardComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsCardTitleDirective.prototype, "tsTitleAccentBorder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsCardTitleDirective.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsCardTitleDirective.prototype, "tsCardTitle", void 0);
    TsCardTitleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: '[tsCardTitle]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TsCardComponent])], TsCardTitleDirective);

    var foo = function foo() {
      return true;
    };

    var TsCardModule = function TsCardModule() {
      _classCallCheck(this, TsCardModule);
    };

    TsCardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_4__["TsIconModule"]],
      declarations: [TsCardComponent, TsCardTitleDirective],
      exports: [TsCardComponent, TsCardTitleDirective]
    })], TsCardModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-card.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~autocomplete-autocomplete-module-ngfactory~autofocus-autofocus-module-ngfactory~breakpoints-~e91fee36-es5.js.map