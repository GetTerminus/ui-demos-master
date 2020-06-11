(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmation-confirmation-module-ngfactory"],{

/***/ "../../dist/libs/ui/confirmation/fesm2015/terminus-ui-confirmation.js":
/*!******************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/confirmation/fesm2015/terminus-ui-confirmation.js ***!
  \******************************************************************************************************************/
/*! exports provided: TsConfirmationDirective, TsConfirmationModule, TsConfirmationOverlayComponent, allowedOverlayPositionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsConfirmationDirective", function() { return TsConfirmationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsConfirmationModule", function() { return TsConfirmationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsConfirmationOverlayComponent", function() { return TsConfirmationOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowedOverlayPositionTypes", function() { return allowedOverlayPositionTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ngx-tools/coercion */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");












/**
 * The confirmation overlay used by {@link TsConfirmationDirective}
 */
let TsConfirmationOverlayComponent = class TsConfirmationOverlayComponent {
    constructor() {
        /**
         * Stream confirmation choices
         */
        this.confirm = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Define the space between the buttons
         */
        this.gap = _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_10__["TS_SPACING"].large[0];
    }
};
TsConfirmationOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-confirmation-overlay',
        template: "<div\n  fxLayout=\"column\"\n>\n  <p *ngIf=\"explanationText\" class=\"ts-confirmation-overlay__explanation\">\n    {{ explanationText }}\n  </p>\n\n  <div\n    fxLayout=\"row\"\n    fxLayoutAlign=\"center space-between\"\n    [fxLayoutGap]=\"gap\"\n  >\n    <ts-button\n      class=\"qa-confirmation-cancel\"\n      theme=\"warn\"\n      format=\"hollow\"\n      (clicked)=\"confirm.next(false)\"\n    >\n      {{ cancelButtonText }}\n    </ts-button>\n\n    <ts-button\n      class=\"qa-confirmation-confirm\"\n      (clicked)=\"confirm.next(true)\"\n    >\n      {{ confirmationButtonText }}\n    </ts-button>\n  </div>\n</div>\n",
        host: { class: 'ts-confirmation' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'tsConfirmation',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-confirmation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation h1,.ts-confirmation h2,.ts-confirmation h3,.ts-confirmation h4,.ts-confirmation h5,.ts-confirmation p{margin:unset}.ts-confirmation-overlay{background-color:rgba(250,250,250,.5)}.ts-confirmation-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay h1,.ts-confirmation-overlay h2,.ts-confirmation-overlay h3,.ts-confirmation-overlay h4,.ts-confirmation-overlay h5,.ts-confirmation-overlay p{margin:unset}.ts-confirmation-overlay__panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;display:block;padding:16px}.ts-confirmation-overlay__panel :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay__panel h1,.ts-confirmation-overlay__panel h2,.ts-confirmation-overlay__panel h3,.ts-confirmation-overlay__panel h4,.ts-confirmation-overlay__panel h5,.ts-confirmation-overlay__panel p{margin:unset}.ts-confirmation-overlay__panel .ts-confirmation-overlay__explanation{margin-bottom:24px}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-above::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;top:100%;border-top:12px solid #fafafa;left:50%}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-below::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;bottom:100%;border-bottom:12px solid #fafafa;left:50%;transform:translateX(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-before::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-left:12px solid #fafafa;right:-12px;top:50%;transform:translateY(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-after::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-right:12px solid #fafafa;left:-12px;top:50%;transform:translateY(-50%)}"]
    })
], TsConfirmationOverlayComponent);

/**
 * Define the allowed tooltips Used by {@link TsConfirmationOverlayComponent} position
 */
const allowedOverlayPositionTypes = [
    'above',
    'below',
    'before',
    'after',
];
/**
 * A directive to inject a confirmation step into any button
 *
 * @example
 *         <ts-button
 *           tsConfirmation
 *           cancelButtonText="Abort!"
 *           confirmationButtonText="Confirm!"
 *           explanationText="Are you sure you want to do this?"
 *           overlayPosition="before"
 *           (cancelled)="myFunction($event)"
 *         >
 *           Click me!
 *         </ts-button>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/confirmation</example-url>
 */
let TsConfirmationDirective = class TsConfirmationDirective {
    constructor(elementRef, overlay, host, changeDetectorRef) {
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.host = host;
        this.changeDetectorRef = changeDetectorRef;
        this._confirmationButtonText = 'Confirm';
        this._cancelButtonText = 'Cancel';
        this._overlayPosition = 'below';
        /**
         * An event emitted when the confirmation is cancelled
         */
        this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * Define the confirmation button text
     *
     * @param value
     */
    set confirmationButtonText(value) {
        this._confirmationButtonText = value || 'Confirm';
    }
    get confirmationButtonText() {
        return this._confirmationButtonText;
    }
    /**
     * Define the cancel button text
     *
     * @param value
     */
    set cancelButtonText(value) {
        this._cancelButtonText = value || 'Cancel';
    }
    get cancelButtonText() {
        return this._cancelButtonText;
    }
    /**
     * Define position of the overlay
     *
     * @param value
     */
    set overlayPosition(value) {
        if (value && Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && (allowedOverlayPositionTypes.indexOf(value) < 0)) {
            // eslint-disable-next-line no-console
            console.warn(`TsConfirmationOverlay: "${value}" is not an allowed position.`
                + `Allowed positions are defined by "allowedOverlayPositionTypes".`);
        }
        this._overlayPosition = value;
    }
    get overlayPosition() {
        return this._overlayPosition;
    }
    /**
     * Spawn the confirmation overlay on click
     *
     * NOTE: Even though the 'event' param is not used, the param must exist for AoT to pass.
     *
     * @param event
     */
    onClick(event) {
        this.createOverlay();
    }
    /**
     * Dismiss the confirmation overlay on pressing escape
     */
    onKeydownHandler() {
        this.dismissOverlay();
    }
    /**
     * Set a flag in the {@link TsButtonComponent} to intercept the click
     */
    ngOnInit() {
        this.host.interceptClick = true;
    }
    /**
     * Dismiss the overlay and clean up observables
     */
    ngOnDestroy() {
        this.dismissOverlay();
        this.host.interceptClick = false;
    }
    /**
     * Create and attach the confirmation overlay
     */
    createOverlay() {
        const overlayConfig = this.generateOverlayConfig(this.overlayPosition);
        // Create the overlay
        this.overlayRef = this.overlay.create(overlayConfig);
        // Wire up listeners for keydown events and overlay clicks
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(
        // NOTE: Naming controlled by the CDK
        // eslint-disable-next-line no-underscore-dangle
        this.overlayRef._keydownEvents, this.overlayRef.backdropClick())
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe(() => {
            this.dismissOverlay();
            this.cancelled.emit(true);
        });
        // Create and attach the overlay
        const userProfilePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](TsConfirmationOverlayComponent);
        this.overlayInstance = this.overlayRef.attach(userProfilePortal).instance;
        this.overlayInstance.confirmationButtonText = this.confirmationButtonText;
        this.overlayInstance.cancelButtonText = this.cancelButtonText;
        this.overlayInstance.explanationText = this.explanationText;
        // Start the progress indicator of the TsButton
        this.host.showProgress = true;
        // Subscribe to the continue event
        this.overlayInstance.confirm.subscribe((shouldProceed) => {
            if (Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(shouldProceed)) {
                this.host.clicked.emit(this.host.originalClickEvent);
                this.dismissOverlay();
            }
            else {
                this.dismissOverlay();
                this.cancelled.emit(true);
            }
        });
    }
    /**
     * Configure the overlay
     *
     * @param value
     */
    generateOverlayConfig(value = 'below') {
        let overlayPosOriginX = 'center';
        let overlayPosOriginY = 'bottom';
        let overlayPosOverlayX = 'center';
        let overlayPosOverlayY = 'top';
        let positionClass = 'ts-confirmation-overlay__panel-below';
        // Define custom offsets so that the full button is still visible after the overlay is opened
        const OFFSET_Y = 16;
        const OFFSET_X_BEFORE = -38;
        const OFFSET_X_AFTER = 38;
        let defaultOffsetY = 0;
        let defaultOffsetX = 0;
        switch (value) {
            case ('above'):
                overlayPosOriginY = 'top';
                overlayPosOverlayY = 'bottom';
                positionClass = 'ts-confirmation-overlay__panel-above';
                defaultOffsetY = -(OFFSET_Y);
                break;
            case ('below'):
                overlayPosOriginY = 'bottom';
                overlayPosOverlayY = 'top';
                positionClass = 'ts-confirmation-overlay__panel-below';
                defaultOffsetY = OFFSET_Y;
                break;
            case ('before'):
                overlayPosOriginX = 'start';
                overlayPosOriginY = 'center';
                overlayPosOverlayX = 'end';
                overlayPosOverlayY = 'center';
                positionClass = 'ts-confirmation-overlay__panel-before';
                defaultOffsetX = OFFSET_X_BEFORE;
                break;
            case ('after'):
                overlayPosOriginX = 'end';
                overlayPosOriginY = 'center';
                overlayPosOverlayX = 'start';
                overlayPosOverlayY = 'center';
                positionClass = 'ts-confirmation-overlay__panel-after';
                defaultOffsetX = OFFSET_X_AFTER;
                break;
            // skip default - unreachable
        }
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.elementRef)
            .withDefaultOffsetY(defaultOffsetY)
            .withDefaultOffsetX(defaultOffsetX)
            .withPositions([
            {
                originX: overlayPosOriginX,
                originY: overlayPosOriginY,
                overlayX: overlayPosOverlayX,
                overlayY: overlayPosOverlayY,
            },
        ]);
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            hasBackdrop: true,
            backdropClass: 'ts-confirmation-overlay',
            panelClass: ['qa-confirmation', 'ts-confirmation-overlay__panel', `${positionClass}`],
        });
    }
    /**
     * Dismiss the overlay
     */
    dismissOverlay() {
        // istanbul ignore else
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        // Stop the progress indicator of the TsButton
        this.host.showProgress = false;
        this.changeDetectorRef.markForCheck();
    }
};
TsConfirmationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] },
    { type: _terminus_ui_button__WEBPACK_IMPORTED_MODULE_5__["TsButtonComponent"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsConfirmationDirective.prototype, "confirmationButtonText", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsConfirmationDirective.prototype, "cancelButtonText", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsConfirmationDirective.prototype, "explanationText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsConfirmationDirective.prototype, "overlayPosition", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsConfirmationDirective.prototype, "cancelled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('click', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TsConfirmationDirective.prototype, "onClick", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('document:keydown.escape'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TsConfirmationDirective.prototype, "onKeydownHandler", null);
TsConfirmationDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsConfirmation]',
        host: { class: 'ts-confirmation' },
        exportAs: 'tsConfirmation',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"],
        _terminus_ui_button__WEBPACK_IMPORTED_MODULE_5__["TsButtonComponent"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], TsConfirmationDirective);

let TsConfirmationModule = class TsConfirmationModule {
};
TsConfirmationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
            _terminus_ui_button__WEBPACK_IMPORTED_MODULE_5__["TsButtonModule"],
        ],
        declarations: [
            TsConfirmationDirective,
            TsConfirmationOverlayComponent,
        ],
        exports: [TsConfirmationDirective],
        entryComponents: [TsConfirmationOverlayComponent],
    })
], TsConfirmationModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-confirmation.js.map


/***/ }),

/***/ "../../dist/libs/ui/confirmation/terminus-ui-confirmation.ngfactory.js":
/*!*******************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/confirmation/terminus-ui-confirmation.ngfactory.js ***!
  \*******************************************************************************************************************/
/*! exports provided: TsConfirmationModuleNgFactory, RenderType_TsConfirmationOverlayComponent, View_TsConfirmationOverlayComponent_0, View_TsConfirmationOverlayComponent_Host_0, TsConfirmationOverlayComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsConfirmationModuleNgFactory", function() { return TsConfirmationModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsConfirmationOverlayComponent", function() { return RenderType_TsConfirmationOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsConfirmationOverlayComponent_0", function() { return View_TsConfirmationOverlayComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsConfirmationOverlayComponent_Host_0", function() { return View_TsConfirmationOverlayComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsConfirmationOverlayComponentNgFactory", function() { return TsConfirmationOverlayComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-confirmation */ "../../dist/libs/ui/confirmation/fesm2015/terminus-ui-confirmation.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../button/terminus-ui-button.ngfactory */ "../../dist/libs/ui/button/terminus-ui-button.ngfactory.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






















var TsConfirmationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_1__["TsConfirmationModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [TsConfirmationOverlayComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_19__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_19__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_20__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_20__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_1__["TsConfirmationModule"], _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_1__["TsConfirmationModule"], [])]); });

var styles_TsConfirmationOverlayComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-confirmation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation h1,.ts-confirmation h2,.ts-confirmation h3,.ts-confirmation h4,.ts-confirmation h5,.ts-confirmation p{margin:unset}.ts-confirmation-overlay{background-color:rgba(250,250,250,.5)}.ts-confirmation-overlay :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay h1,.ts-confirmation-overlay h2,.ts-confirmation-overlay h3,.ts-confirmation-overlay h4,.ts-confirmation-overlay h5,.ts-confirmation-overlay p{margin:unset}.ts-confirmation-overlay__panel{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;display:block;padding:16px}.ts-confirmation-overlay__panel :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-confirmation-overlay__panel h1,.ts-confirmation-overlay__panel h2,.ts-confirmation-overlay__panel h3,.ts-confirmation-overlay__panel h4,.ts-confirmation-overlay__panel h5,.ts-confirmation-overlay__panel p{margin:unset}.ts-confirmation-overlay__panel .ts-confirmation-overlay__explanation{margin-bottom:24px}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-above::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;top:100%;border-top:12px solid #fafafa;left:50%}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-below::before{content:'';height:0;position:absolute;width:0;z-index:503;border-left:8px solid transparent;border-right:8px solid transparent;bottom:100%;border-bottom:12px solid #fafafa;left:50%;transform:translateX(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-before::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-left:12px solid #fafafa;right:-12px;top:50%;transform:translateY(-50%)}.ts-confirmation-overlay__panel.ts-confirmation-overlay__panel-after::before{content:'';height:0;position:absolute;width:0;z-index:503;border-bottom:8px solid transparent;border-top:8px solid transparent;border-right:12px solid #fafafa;left:-12px;top:50%;transform:translateY(-50%)}"];
var RenderType_TsConfirmationOverlayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsConfirmationOverlayComponent, data: {} });

function View_TsConfirmationOverlayComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "ts-confirmation-overlay__explanation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.explanationText; _ck(_v, 1, 0, currVal_0); }); }
function View_TsConfirmationOverlayComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsConfirmationOverlayComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center space-between"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutGap: [0, "fxLayoutGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "ts-button", [["class", "qa-confirmation-cancel ts-button"], ["format", "hollow"], ["theme", "warn"]], null, [[null, "clicked"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("clicked" === en)) {
        var pd_0 = (_co.confirm.next(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_TsButtonComponent_0"], _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_20__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { format: [0, "format"], theme: [1, "theme"] }, { clicked: "clicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](10, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 2, "ts-button", [["class", "qa-confirmation-confirm ts-button"]], null, [[null, "clicked"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("clicked" === en)) {
        var pd_0 = (_co.confirm.next(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_TsButtonComponent_0"], _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_20__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, { clicked: "clicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](13, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.explanationText; _ck(_v, 3, 0, currVal_1); var currVal_2 = "row"; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.gap; _ck(_v, 6, 0, currVal_3); var currVal_4 = "center space-between"; _ck(_v, 7, 0, currVal_4); var currVal_5 = "hollow"; var currVal_6 = "warn"; _ck(_v, 9, 0, currVal_5, currVal_6); _ck(_v, 12, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.cancelButtonText; _ck(_v, 10, 0, currVal_7); var currVal_8 = _co.confirmationButtonText; _ck(_v, 13, 0, currVal_8); }); }
function View_TsConfirmationOverlayComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-confirmation-overlay", [["class", "ts-confirmation"]], null, null, null, View_TsConfirmationOverlayComponent_0, RenderType_TsConfirmationOverlayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_1__["TsConfirmationOverlayComponent"], [], null, null)], null, null); }
var TsConfirmationOverlayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-confirmation-overlay", _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_1__["TsConfirmationOverlayComponent"], View_TsConfirmationOverlayComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/confirmation/confirmation-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationRoutingModule", function() { return ConfirmationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");


const routes = [
    {
        path: '',
        component: _confirmation_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationComponent"],
    },
];
class ConfirmationRoutingModule {
}


/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_ConfirmationComponent, View_ConfirmationComponent_0, View_ConfirmationComponent_Host_0, ConfirmationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ConfirmationComponent", function() { return RenderType_ConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConfirmationComponent_0", function() { return View_ConfirmationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConfirmationComponent_Host_0", function() { return View_ConfirmationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponentNgFactory", function() { return ConfirmationComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */ "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
/* harmony import */ var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @terminus/ui-card */ "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/button/terminus-ui-button.ngfactory */ "../../dist/libs/ui/button/terminus-ui-button.ngfactory.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ui-confirmation */ "../../dist/libs/ui/confirmation/fesm2015/terminus-ui-confirmation.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 














var styles_ConfirmationComponent = [];
var RenderType_ConfirmationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ConfirmationComponent, data: {} });

function View_ConfirmationComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_ConfirmationComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "ts-card", [["aspectRatio", "5:3"], ["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"], [], { aspectRatio: [0, "aspectRatio"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", "small--0"]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Use 'after' when the button is on the left"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 6, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 3, "ts-button", [["class", "ts-button ts-confirmation"], ["confirmationButtonText", "Custom Confirmation Button Text"], ["tsConfirmation", ""]], null, [[null, "clicked"], [null, "cancelled"], [null, "click"], ["document", "keydown.escape"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:keydown.escape" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onKeydownHandler() !== false);
        ad = (pd_1 && ad);
    } if (("clicked" === en)) {
        var pd_2 = (_co.submit() !== false);
        ad = (pd_2 && ad);
    } if (("cancelled" === en)) {
        var pd_3 = (_co.cancel($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { showProgress: [0, "showProgress"] }, { clicked: "clicked" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 212992, null, 0, _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_10__["TsConfirmationDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__["TsButtonComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { confirmationButtonText: [0, "confirmationButtonText"], explanationText: [1, "explanationText"], overlayPosition: [2, "overlayPosition"] }, { cancelled: "cancelled" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Click Me! "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "5:3"; _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_3 = "small--0"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "row"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "start"; _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.progress; _ck(_v, 11, 0, currVal_6); var currVal_7 = "Custom Confirmation Button Text"; var currVal_8 = _co.explanation; var currVal_9 = _co.myOverlayPosition; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).tsCardTitle; _ck(_v, 3, 0, currVal_2); }); }
function View_ConfirmationComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "ts-card", [["aspectRatio", "5:3"], ["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"], [], { aspectRatio: [0, "aspectRatio"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", "small--0"]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Use 'before' when the button is on the right"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 6, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 3, "ts-button", [["class", "ts-button ts-confirmation"], ["confirmationButtonText", "Custom Confirmation Button Text"], ["tsConfirmation", ""]], null, [[null, "clicked"], [null, "cancelled"], [null, "click"], ["document", "keydown.escape"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:keydown.escape" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onKeydownHandler() !== false);
        ad = (pd_1 && ad);
    } if (("clicked" === en)) {
        var pd_2 = (_co.submit() !== false);
        ad = (pd_2 && ad);
    } if (("cancelled" === en)) {
        var pd_3 = (_co.cancel($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { showProgress: [0, "showProgress"] }, { clicked: "clicked" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 212992, null, 0, _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_10__["TsConfirmationDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__["TsButtonComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { confirmationButtonText: [0, "confirmationButtonText"], explanationText: [1, "explanationText"], overlayPosition: [2, "overlayPosition"] }, { cancelled: "cancelled" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Click Me! "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "5:3"; _ck(_v, 1, 0, currVal_0); var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_3 = "small--0"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "row"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "end"; _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.progress; _ck(_v, 11, 0, currVal_6); var currVal_7 = "Custom Confirmation Button Text"; var currVal_8 = _co.explanation; var currVal_9 = _co.myOverlayPosition; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).tsCardTitle; _ck(_v, 3, 0, currVal_2); }); }
function View_ConfirmationComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "ts-card", [["aspectRatio", "5:3"], ["class", "ts-card"]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"], [], { aspectRatio: [0, "aspectRatio"], centeredContent: [1, "centeredContent"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, 0, 3, "ts-button", [["class", "ts-button ts-confirmation"], ["confirmationButtonText", "Custom Confirmation Button Text"], ["tsConfirmation", ""]], null, [[null, "clicked"], [null, "cancelled"], [null, "click"], ["document", "keydown.escape"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:keydown.escape" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).onKeydownHandler() !== false);
        ad = (pd_1 && ad);
    } if (("clicked" === en)) {
        var pd_2 = (_co.submit() !== false);
        ad = (pd_2 && ad);
    } if (("cancelled" === en)) {
        var pd_3 = (_co.cancel($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { showProgress: [0, "showProgress"] }, { clicked: "clicked" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 212992, null, 0, _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_10__["TsConfirmationDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_8__["TsButtonComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { confirmationButtonText: [0, "confirmationButtonText"], explanationText: [1, "explanationText"], overlayPosition: [2, "overlayPosition"] }, { cancelled: "cancelled" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Click Me! "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "5:3"; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.progress; _ck(_v, 3, 0, currVal_2); var currVal_3 = "Custom Confirmation Button Text"; var currVal_4 = _co.explanation; var currVal_5 = _co.myOverlayPosition; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5); }, null); }
function View_ConfirmationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", "small--0"]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Controls"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 11, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 9, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Overlay Position: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 7, "select", [["name", "myOverlayPosition"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.myOverlayPosition = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ConfirmationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ConfirmationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ConfirmationComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ConfirmationComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ""; _ck(_v, 2, 0, currVal_0); var currVal_2 = "small--0"; _ck(_v, 5, 0, currVal_2); var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_11 = "myOverlayPosition"; var currVal_12 = _co.myOverlayPosition; _ck(_v, 14, 0, currVal_11, currVal_12); var currVal_13 = _co.overlayPositions; _ck(_v, 18, 0, currVal_13); var currVal_14 = (_co.myOverlayPosition === "after"); _ck(_v, 20, 0, currVal_14); var currVal_15 = (_co.myOverlayPosition === "before"); _ck(_v, 22, 0, currVal_15); var currVal_16 = ((_co.myOverlayPosition === "above") || (_co.myOverlayPosition === "below")); _ck(_v, 24, 0, currVal_16); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).tsCardTitle; _ck(_v, 3, 0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); }); }
function View_ConfirmationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-confirmation", [], null, null, null, View_ConfirmationComponent_0, RenderType_ConfirmationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _confirmation_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationComponent"], [], null, null)], null, null); }
var ConfirmationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-confirmation", _confirmation_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationComponent"], View_ConfirmationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/confirmation/confirmation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
class ConfirmationComponent {
    constructor() {
        this.progress = false;
        this.myOverlayPosition = 'before';
        this.overlayPositions = ['above', 'below', 'before', 'after'];
        this.explanation = `Are you sure you want to do the thing you clicked to do?`;
    }
    cancel(v) {
        console.log('DEMO: Cancel: ', v);
    }
    submit() {
        console.log('DEMO: Real Submit');
        this.progress = true;
        setTimeout(() => {
            this.progress = false;
        }, 2000);
    }
}


/***/ }),

/***/ "./src/app/components/confirmation/confirmation.module.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.module.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: ConfirmationModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModuleNgFactory", function() { return ConfirmationModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _confirmation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation.module */ "./src/app/components/confirmation/confirmation.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _confirmation_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation.component.ngfactory */ "./src/app/components/confirmation/confirmation.component.ngfactory.js");
/* harmony import */ var _dist_libs_ui_confirmation_terminus_ui_confirmation_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/confirmation/terminus-ui-confirmation.ngfactory */ "../../dist/libs/ui/confirmation/terminus-ui-confirmation.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */ "../../node_modules/@angular/material/dialog/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @terminus/ui-pipes */ "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
/* harmony import */ var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @terminus/ui-validation-messages */ "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @terminus/ui-validators */ "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirmation-routing.module */ "./src/app/components/confirmation/confirmation-routing.module.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @terminus/ui-card */ "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @terminus/ui-confirmation */ "../../dist/libs/ui/confirmation/fesm2015/terminus-ui-confirmation.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @terminus/ui-checkbox */ "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
/* harmony import */ var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @terminus/ui-form-field */ "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
/* harmony import */ var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @terminus/ui-input */ "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
/* harmony import */ var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @terminus/ui-option */ "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
/* harmony import */ var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @terminus/ui-select */ "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _confirmation_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./confirmation.component */ "./src/app/components/confirmation/confirmation.component.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 















































var ConfirmationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_confirmation_module__WEBPACK_IMPORTED_MODULE_1__["ConfirmationModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _confirmation_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ConfirmationComponentNgFactory"], _dist_libs_ui_confirmation_terminus_ui_confirmation_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TsConfirmationOverlayComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_20__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_20__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_22__["ConfirmationRoutingModule"], _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_22__["ConfirmationRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_25__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_25__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_32__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_32__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_33__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_33__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_36__["TsConfirmationModule"], _terminus_ui_confirmation__WEBPACK_IMPORTED_MODULE_36__["TsConfirmationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_39__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_39__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_40__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_40__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_42__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_42__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_43__["TsSelectModule"], _terminus_ui_select__WEBPACK_IMPORTED_MODULE_43__["TsSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_44__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_44__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _confirmation_module__WEBPACK_IMPORTED_MODULE_1__["ConfirmationModule"], _confirmation_module__WEBPACK_IMPORTED_MODULE_1__["ConfirmationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTES"], function () { return [[{ path: "", component: _confirmation_component__WEBPACK_IMPORTED_MODULE_45__["ConfirmationComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_46__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_41__["TS_DATE_FORMATS"], [])]); });



/***/ }),

/***/ "./src/app/components/confirmation/confirmation.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/confirmation/confirmation.module.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModule", function() { return ConfirmationModule; });
class ConfirmationModule {
}


/***/ })

}]);
//# sourceMappingURL=confirmation-confirmation-module-ngfactory-es2015.js.map