(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module-ngfactory"],{

/***/ "../../dist/libs/ui/tabs/fesm2015/terminus-ui-tabs.js":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/tabs/fesm2015/terminus-ui-tabs.js ***!
  \**************************************************************************************************/
/*! exports provided: TsTabBodyComponent, TsTabBodyHostDirective, TsTabChangeEvent, TsTabCollectionComponent, TsTabComponent, TsTabContentDirective, TsTabHeaderComponent, TsTabInkBarComponent, TsTabLabelDirective, TsTabLabelWrapperDirective, TsTabsModule, tsTabsAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabBodyComponent", function() { return TsTabBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabBodyHostDirective", function() { return TsTabBodyHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabChangeEvent", function() { return TsTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabCollectionComponent", function() { return TsTabCollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabComponent", function() { return TsTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabContentDirective", function() { return TsTabContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabHeaderComponent", function() { return TsTabHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabInkBarComponent", function() { return TsTabInkBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabLabelDirective", function() { return TsTabLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabLabelWrapperDirective", function() { return TsTabLabelWrapperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabsModule", function() { return TsTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsTabsAnimations", function() { return tsTabsAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @terminus/ngx-tools/type-guards */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-type-guards.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ngx-tools/coercion */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @terminus/ngx-tools/keycodes */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");



















/**
 * Animations used by {@link TsTabCollectionComponent}
 */
const tsTabsAnimations = {
    // This animation translates a tab along the X axis
    translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('translateTab', [
        // Note: transitions to `none` instead of 0, because some browsers might blur the content.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ transform: 'none' })),
        // NOTE:  If the tab is either on the left or right, we additionally add a `min-height` of 1px in order to ensure that the element has a
        // height before its state changes. This is necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: https://github.com/angular/material2/issues/9465
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
            minHeight: '1px',
            opacity: 0,
            transform: 'translate3d(-50%, 0, 0)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
            opacity: 0,
            minHeight: '1px',
            transform: 'translate3d(50%, 0, 0)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('200ms cubic-bezier(0.35, 0, 0.25, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('void => left-origin-center', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ transform: 'translate3d(-100%, 0, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('200ms cubic-bezier(0.35, 0, 0.25, 1)'),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('void => right-origin-center', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ transform: 'translate3d(100%, 0, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('200ms cubic-bezier(0.35, 0, 0.25, 1)'),
        ]),
    ]),
};

// Unique ID for each instance
let nextUniqueId = 0;
/**
 * A component that displays the tab content.
 *
 * NOTE: Only used internally.
 */
let TsTabBodyComponent = class TsTabBodyComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * A unique ID per instance
         */
        this.id = nextUniqueId++;
        /**
         * Emits when an animation on the tab is complete
         */
        this.translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Event emitted when the tab begins to animate towards the center as the active tab
         */
        this.centering = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins
         */
        this.beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted after the tab has left the center position
         */
        this.afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted when the tab completes its animation towards the center
         */
        this.centered = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](true);
    }
    /**
     * Computes the position state based on the specified origin position.
     * This is used if the tab is becoming visible immediately after creation.
     */
    get computedPositionFromOrigin() {
        return (Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_11__["isNumber"])(this.origin) && (this.origin < 1)) ? 'left-origin-center' : 'right-origin-center';
    }
    /**
     * Determine the computed position state that will be used for the tab-body animation trigger
     */
    get computedPositionAnimationState() {
        // eslint-disable-next-line no-negated-condition
        const position = !this.positionIndex
            ? 'center'
            : (this.positionIndex < 0)
                ? 'left'
                : (this.positionIndex > 0)
                    ? 'right'
                    : 'center';
        return position;
    }
    /**
     * The shifted index position of the tab body, where zero represents the active center tab.
     *
     * @param position
     */
    set position(position) {
        this.positionIndex = position;
        this.positionState = this.computedPositionAnimationState;
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the special position states that transition the tab
     * from the left or right before centering.
     */
    ngOnInit() {
        // Emit the correct events when a tab is moving
        this.translateTabComplete.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), 
        // Ensure that we get unique animation events, because the `.done` callback can get invoked twice in some browsers.
        // See https://github.com/angular/angular/issues/24084.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])((x, y) => x.fromState === y.fromState && x.toState === y.toState)).subscribe(event => {
            // If the transition to the center is complete, emit an event.
            if (this.isCenterPosition(event.toState) && this.isCenterPosition(this.positionState)) {
                this.centered.emit();
            }
            if (this.isCenterPosition(event.fromState) && !this.isCenterPosition(this.positionState)) {
                this.afterLeavingCenter.emit();
            }
        });
        if (this.positionState === 'center' && this.origin !== null) {
            this.positionState = this.computedPositionFromOrigin;
        }
    }
    ngOnDestroy() {
        // Needed for untilComponentDestroyed
    }
    /**
     * Emit events when a tab translation begins
     *
     * @param event - The animation event
     */
    onTranslateTabStarted(event) {
        const isCentering = this.isCenterPosition(event.toState);
        this.beforeCentering.emit(isCentering);
        if (isCentering) {
            this.centering.emit(this.elementRef.nativeElement.clientHeight);
        }
    }
    /**
     * Determine whether the provided position state is considered center (regardless of origin)
     *
     * @param position - The toState of the animation
     * @returns True if in a center position
     */
    isCenterPosition(position) {
        return position === 'center' || position === 'left-origin-center' || position === 'right-origin-center';
    }
};
TsTabBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"])
], TsTabBodyComponent.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], TsTabBodyComponent.prototype, "origin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], TsTabBodyComponent.prototype, "position", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabBodyComponent.prototype, "centering", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabBodyComponent.prototype, "beforeCentering", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabBodyComponent.prototype, "afterLeavingCenter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabBodyComponent.prototype, "centered", void 0);
TsTabBodyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'ts-tab-body',
        template: "<div\n  class=\"ts-tab-body__content\"\n  #content\n  [@translateTab]=\"{\n    value: positionState\n  }\"\n  (@translateTab.start)=\"onTranslateTabStarted($event)\"\n  (@translateTab.done)=\"translateTabComplete.next($event)\"\n>\n  <ng-template tsTabBodyHost></ng-template>\n</div>\n",
        host: { class: 'ts-tab-body' },
        animations: [tsTabsAnimations.translateTab],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        exportAs: 'tsTabBody',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tab-body{bottom:0;left:0;position:absolute;right:0;top:0;display:block;flex-basis:100%;overflow:hidden}.ts-tab-body.ts-tab-body--active{flex-grow:1;overflow-x:hidden;overflow-y:hidden;position:relative;z-index:1}.ts-tab-body__content{background-color:#fafafa;height:100%;overflow:hidden;padding:16px}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]])
], TsTabBodyComponent);

// Unique ID for each instance
let nextUniqueId$1 = 0;
/**
 * The portal host directive for the contents of the tab.
 *
 * NOTE: Only used internally.
 */
let TsTabBodyHostDirective = class TsTabBodyHostDirective extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"] {
    constructor(componentFactoryResolver, viewContainerRef, host) {
        super(componentFactoryResolver, viewContainerRef);
        this.host = host;
        /**
         * A unique ID per instance
         */
        this.id = nextUniqueId$1++;
    }
    /**
     * Set initial visibility or set up subscription for changing visibility
     */
    ngOnInit() {
        super.ngOnInit();
        this.host.beforeCentering
            .pipe(
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(this.host.isCenterPosition(this.host.positionState)), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe((isCentering) => {
            if (isCentering && !this.hasAttached()) {
                this.attach(this.host.content);
            }
        });
        this.host.afterLeavingCenter.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(() => {
            this.detach();
        });
    }
    /**
     * Trigger ngOnDestroy in the parent class
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
TsTabBodyHostDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
    { type: TsTabBodyComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => TsTabBodyComponent),] }] }
];
TsTabBodyHostDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"])({
        selector: '[tsTabBodyHost]',
        exportAs: 'tsTabBodyHost',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => TsTabBodyComponent))),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"],
        TsTabBodyComponent])
], TsTabBodyHostDirective);

/**
 * Decorates the `ng-template` tags and reads out the template from it
 *
 * @example
 * <ts-tab label="My tab">
 *              <ng-template tsTabContent>
 *                My tab content
 *              </ng-template>
 * </ts-tab>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/tabs</example-url>
 */
let TsTabContentDirective = class TsTabContentDirective {
    constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    template) {
        this.template = template;
    }
};
TsTabContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] }
];
TsTabContentDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"])({ selector: '[tsTabContent]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]])
], TsTabContentDirective);

/**
 * The ink bar is used to display and animate the line underneath the current active tab label
 *
 * NOTE: Only used internally
 */
let TsTabInkBarComponent = class TsTabInkBarComponent {
    constructor(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
    }
    /**
     * Calculate the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     *
     * @param element
     */
    alignToElement(element) {
        if (typeof requestAnimationFrame === 'undefined') {
            this.setStyles(element);
        }
        else {
            this.ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this.setStyles(element));
            });
        }
    }
    /**
     * Sets the proper styles to the ink bar element.
     *
     * @param element - The element to align the ink bar to
     */
    setStyles(element) {
        const positions = this.determineInkBarPositions(element);
        const inkBar = this.elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
    }
    /**
     * Return an object representing the correct ink bar positions
     *
     * @param element - The element to align the ink bar to
     * @returns The object of positions
     */
    determineInkBarPositions(element) {
        return {
            left: element ? `${(element.offsetLeft || 0)}px` : '0',
            width: element ? `${(element.offsetWidth || 0)}px` : '0',
        };
    }
};
TsTabInkBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] }
];
TsTabInkBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'ts-tab-ink-bar',
        template: ``,
        host: { class: 'ts-ink-bar' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        exportAs: 'tsTabInkBar',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-ink-bar{bottom:0;height:2px;position:absolute;transition:.2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.ts-ink-bar{height:0;outline:solid 2px}}.ts-tab-collection--inverted-header .ts-ink-bar{bottom:auto;top:0}.ts-tab-collection.ts-tab-collection--primary .ts-ink-bar{background-color:#00538a}.ts-tab-collection.ts-tab-collection--accent .ts-ink-bar{background-color:#2f854d}.ts-tab-collection.ts-tab-collection--warn .ts-ink-bar{background-color:#c8604d}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]])
], TsTabInkBarComponent);

/**
 * Used in the `ts-tab-collection` view to display tab labels
 *
 * NOTE: Only used internally
 */
let TsTabLabelWrapperDirective = class TsTabLabelWrapperDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // This is needed by the CdkListKeyManager - they are checking for `disabled` rather than `isDisabled`
        this.disabled = false;
        this._isDisabled = false;
    }
    /**
     * Determine the left offset
     */
    get offsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    /**
     * Determine the offset width
     */
    get offsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    /**
     * Define if the label is disabled
     *
     * @param value
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this.disabled = value;
    }
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * Set focus on the wrapper element
     */
    focus() {
        this.elementRef.nativeElement.focus();
    }
};
TsTabLabelWrapperDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsTabLabelWrapperDirective.prototype, "isDisabled", null);
TsTabLabelWrapperDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"])({
        selector: '[tsTabLabelWrapper]',
        host: {
            '[class.ts-tab-label--disabled]': 'isDisabled',
            '[attr.aria-disabled]': '!!isDisabled',
        },
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]])
], TsTabLabelWrapperDirective);

/**
 * Config used to bind passive event listeners
 */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps provide a small affordance to the label
 * next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 *
 * NOTE: This is set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * The header of the tab collection which displays a list of all the tabs in the tab collection. Includes an ink bar that follows the
 * currently selected tab. When the tabs list's width exceeds the width of the header container, then arrows will be displayed to allow the
 * user to scroll left and right across the header.
 *
 * NOTE: Only used internally.
 */
let TsTabHeaderComponent = class TsTabHeaderComponent {
    constructor(elementRef, changeDetectorRef, viewportRuler, ngZone, platform) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.viewportRuler = viewportRuler;
        this.ngZone = ngZone;
        this.platform = platform;
        /**
         * Whether the tab list can be scrolled more towards the end of the tab label list
         */
        this.disableScrollAfter = true;
        /**
         * Whether the tab list can be scrolled more towards the beginning of the tab label list
         */
        this.disableScrollBefore = true;
        /**
         * The distance in pixels that the tab labels should be translated to the left
         */
        this._scrollDistance = 0;
        /**
         * Whether the scroll distance has changed and should be applied after the view is checked
         */
        this.scrollDistanceChanged = false;
        /**
         * Whether the header should scroll to the selected index after the view has been checked
         */
        this.selectedIndexChanged = false;
        /**
         * Whether the controls for pagination should be displayed
         */
        this.showPaginationControls = false;
        /**
         * Stream that will stop the automated scrolling
         */
        this.stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._selectedIndex = 0;
        /**
         * Event emitted when a label is focused
         */
        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted when the option is selected
         */
        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        const bindEvent = () => {
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(elementRef.nativeElement, 'mouseleave')
                .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
                .subscribe(() => {
                this.stopInterval();
            });
        };
        // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
        ngZone.runOutsideAngular(bindEvent);
    }
    /**
     * Manually set the focus to the correct label
     *
     * @param value
     */
    set focusIndex(value) {
        if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
            return;
        }
        this.keyManager.setActiveItem(value);
    }
    /**
     * Tracks which element has focus (used for keyboard navigation)
     */
    get focusIndex() {
        if (this.keyManager && Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_11__["isNumber"])(this.keyManager.activeItemIndex)) {
            return this.keyManager.activeItemIndex;
        }
        return 0;
    }
    /**
     * Sets the distance in pixels that the tab header should be transformed in the X-axis
     *
     * @param value
     */
    set scrollDistance(value) {
        this.scrollTo(value);
    }
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * The index of the active tab
     *
     * @param value
     */
    set selectedIndex(value) {
        value = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceNumberProperty"])(value);
        this.selectedIndexChanged = this._selectedIndex !== value;
        this._selectedIndex = value;
        if (this.keyManager) {
            this.keyManager.updateActiveItem(value);
        }
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * After content is checked, update internals as needed
     */
    ngAfterContentChecked() {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this.tabLabelCount !== this.labelWrappers.length) {
            this.updatePagination();
            this.tabLabelCount = this.labelWrappers.length;
            this.changeDetectorRef.markForCheck();
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this.selectedIndex);
            this.checkScrollingControls();
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.changeDetectorRef.markForCheck();
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this.scrollDistanceChanged) {
            this.updateTabScrollPosition();
            this.scrollDistanceChanged = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * Align the {@link TsTabInkBarComponent} to the selected tab on load
     */
    ngAfterContentInit() {
        const realign = () => {
            this.updatePagination();
            this.alignInkBarToSelectedTab();
        };
        const viewportDefaultThrottleMs = 150;
        this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this.labelWrappers)
            .withHorizontalOrientation('ltr')
            .withWrap();
        this.keyManager.updateActiveItem(0);
        // Defer the first call in order to allow for slower browsers to lay out the elements.
        // This helps in cases where the user lands directly on a page with paginated tabs.
        typeof requestAnimationFrame === 'undefined' ? realign() : requestAnimationFrame(realign);
        // On window resize, realign the ink bar.
        this.viewportRuler.change(viewportDefaultThrottleMs).pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(() => {
            realign();
        });
        // If there is a change in the focus key manager we need to emit the `indexFocused`
        // event in order to provide a public event that notifies about focus changes. Also we realign
        // the tabs container by scrolling the new focused tab into the visible section.
        this.keyManager.change.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this.setTabFocus(newFocusIndex);
        });
    }
    /**
     * Wire up listeners for pagination clicks
     * NOTE: We need to handle these events manually because we want to bind passive event listeners.
     */
    ngAfterViewInit() {
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this.previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe(() => {
            this.handlePaginatorPress('before');
        });
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this.nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe(() => {
            this.handlePaginatorPress('after');
        });
    }
    /**
     * Needed for untilComponentDestroyed
     */
    ngOnDestroy() { }
    /**
     * Handle keyboard events on the header
     *
     * @param event - The keyboard event
     */
    handleKeydown(event) {
        // We don't handle any key bindings with a modifier key.
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
            return;
        }
        switch (event.code) {
            case _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_17__["KEYS"].HOME.code:
                this.keyManager.setFirstItemActive();
                event.preventDefault();
                break;
            case _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_17__["KEYS"].END.code:
                this.keyManager.setLastItemActive();
                event.preventDefault();
                break;
            case _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_17__["KEYS"].ENTER.code:
            case _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_17__["KEYS"].SPACE.code:
                this.selectFocusedIndex.emit(this.focusIndex);
                event.preventDefault();
                break;
            default:
                this.keyManager.onKeydown(event);
        }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    onContentChanges() {
        const textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback will fire even if the text content didn't
        // change which is inefficient and is prone to infinite loops if a poorly constructed expression is passed in.
        // See https://github.com/angular/material2/issues/14249
        if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            const zoneCallback = () => {
                this.updatePagination();
                this.alignInkBarToSelectedTab();
                this.changeDetectorRef.markForCheck();
            };
            // The content observer runs outside the `NgZone` by default, which means that we need to bring the callback back in ourselves
            this.ngZone.run(zoneCallback);
        }
    }
    /**
     * Handle click events on the pagination arrows
     *
     * @param direction - The scroll direction
     */
    handlePaginatorClick(direction) {
        this.stopInterval();
        this.scrollHeader(direction);
    }
    /**
     * Tell the {@link TsInkBarComponent} to align itself to the current label wrapper
     */
    alignInkBarToSelectedTab() {
        const labelWrappersExist = this.labelWrappers && this.labelWrappers.length;
        const selectedLabelWrapper = labelWrappersExist ? this.labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement : null;
        this.inkBar.alignToElement(selectedLabelWrapper);
    }
    /**
     * Stop the currently-running paginator interval
     */
    stopInterval() {
        this.stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     *
     * Starts scrolling the header after a certain amount of time.
     *
     * @param direction - The direction to scroll
     */
    handlePaginatorPress(direction) {
        // Avoid overlapping timers.
        this.stopInterval();
        // Start a timer after the delay and keep firing based on the interval
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
            // Keep the timer going until something tells it to stop or the component is destroyed
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.stopScrolling))
            .subscribe(() => {
            const { maxScrollDistance, distance } = this.scrollHeader(direction);
            // Stop the timer if we've reached the start or the end
            if (distance === 0 || distance >= maxScrollDistance) {
                this.stopInterval();
            }
        });
    }
    /**
     * Updates the view whether pagination should be enabled or not
     *
     * NOTE: Calling this method can be very costly in terms of performance.  It should be called as infrequently as possible from outside
     * of the {@link TsTabComponent} as it causes a reflow of the page.
     */
    updatePagination() {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    }
    /**
     * Determines if an index is valid
     *
     * If the tabs are not ready yet, we assume that the user is providing a valid index and return true.
     *
     * @param index - The index to check
     */
    isValidIndex(index) {
        if (!this.labelWrappers) {
            return true;
        }
        const tab = this.labelWrappers.toArray()[index] || null;
        return !!tab && !tab.isDisabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if scrolling is enabled
     *
     * @param tabIndex - The index of the tab to focus
     */
    setTabFocus(tabIndex) {
        if (this.showPaginationControls) {
            this.scrollToLabel(tabIndex);
        }
        if (this.labelWrappers && this.labelWrappers.length) {
            this.labelWrappers.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled by using translation.
            this.tabListContainer.nativeElement.scrollLeft = 0;
        }
    }
    /**
     * Perform the CSS transformation on the tab list that will cause the list to scroll
     */
    updateTabScrollPosition() {
        const scrollDistance = this.scrollDistance;
        const platform = this.platform;
        const translateX = -scrollDistance;
        // Don't use `translate3d` here because we don't want to create a new layer. A new layer seems to cause flickering and overflow in
        // Internet Explorer. For example, the ink bar and ripples will exceed the boundaries of the visible tab bar.
        // See https://github.com/angular/material2/issues/10276
        //
        // We round the `transform` here, because transforms with sub-pixel precision cause some browsers to blur the content of the element.
        const value = Math.round(translateX);
        this.tabList.nativeElement.style.transform = `translateX(${value}px)`;
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the position to be thrown off in some cases. We
        // have to reset it ourselves to ensure that it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing with
        // the scroll position throws off Chrome 71+ in RTL mode.
        // See https://github.com/angular/material2/issues/14689
        if (platform.TRIDENT || platform.EDGE) {
            this.tabListContainer.nativeElement.scrollLeft = 0;
        }
    }
    /**
     * Move the tab list in the 'before' or 'after' direction (towards the beginning of the list or the end of the list, respectively).
     * The distance to scroll is computed to be a third of the length of the tab list view window.
     *
     * NOTE: This is an expensive call that forces a layout reflow to compute box and scroll metrics and should be called sparingly.
     *
     * @param direction - The scroll direction
     * @returns An object defining scroll limitations
     */
    scrollHeader(direction) {
        const viewLength = this.tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const scrollAmount = (direction === 'before' ? -1 : 1) * viewLength / 3;
        return this.scrollTo(this._scrollDistance + scrollAmount);
    }
    /**
     * Move the tab list such that the desired tab label (marked by index) is moved into view
     *
     * NOTE: This is an expensive call that forces a layout reflow to compute box and scroll metrics and should be called sparingly.
     *
     * @param labelIndex - The index of the label to scroll into view
     */
    scrollToLabel(labelIndex) {
        const selectedLabel = this.labelWrappers ? this.labelWrappers.toArray()[labelIndex] : null;
        if (!selectedLabel) {
            return;
        }
        const viewLength = this.tabListContainer.nativeElement.offsetWidth;
        const labelBeforePosition = selectedLabel.offsetLeft;
        const labelAfterPosition = labelBeforePosition + selectedLabel.offsetWidth;
        const beforeVisiblePosition = this.scrollDistance;
        const afterVisiblePosition = this.scrollDistance + viewLength;
        if (labelBeforePosition < beforeVisiblePosition) {
            // Scroll header to move label to the 'before' direction
            this.scrollDistance -= beforeVisiblePosition - labelBeforePosition + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPosition > afterVisiblePosition) {
            // Scroll header to move label to the 'after' direction
            this.scrollDistance += labelAfterPosition - afterVisiblePosition + EXAGGERATED_OVERSCROLL;
        }
    }
    /**
     * Evaluate whether the pagination controls should be displayed
     *
     * If the scroll width of the tab list is wider than the size of the header container, then the pagination controls should be shown.
     *
     * NOTE: This is an expensive call that forces a layout reflow to compute box and scroll metrics and should be called sparingly.
     */
    checkPaginationEnabled() {
        const isEnabled = this.tabList.nativeElement.scrollWidth > this.elementRef.nativeElement.offsetWidth;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.changeDetectorRef.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     *
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the before button. If the header is at the
     * end of the list (scroll distance is equal to the maximum distance we can scroll), then disable the after button.
     *
     * NOTE: This is an expensive call that forces a layout reflow to compute box and scroll metrics and should be called sparingly.
     */
    checkScrollingControls() {
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Determine what is the maximum length in pixels that can be set for the scroll distance
     *
     * This is equal to the difference in width between the tab list container and tab header container.
     *
     * NOTE: This is an expensive call that forces a layout reflow to compute box and scroll metrics and should be called sparingly.
     *
     * @returns The maximum scroll distance
     */
    getMaxScrollDistance() {
        const lengthOfTabList = this.tabList.nativeElement.scrollWidth;
        const viewLength = this.tabListContainer.nativeElement.offsetWidth;
        return (lengthOfTabList - viewLength) || 0;
    }
    /**
     * Scroll the header to a given position
     *
     * @param position - The position to scroll to
     * @returns An object defining the desired scroll position
     */
    scrollTo(position) {
        const maxScrollDistance = this.getMaxScrollDistance();
        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS transformation can move the header
        this.scrollDistanceChanged = true;
        this.checkScrollingControls();
        return {
            maxScrollDistance,
            distance: this._scrollDistance,
        };
    }
};
TsTabHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ViewportRuler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(TsTabInkBarComponent, { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsTabInkBarComponent)
], TsTabHeaderComponent.prototype, "inkBar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('previousPaginator', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], TsTabHeaderComponent.prototype, "previousPaginator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('nextPaginator', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], TsTabHeaderComponent.prototype, "nextPaginator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('tabListContainer', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], TsTabHeaderComponent.prototype, "tabListContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('tabList', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], TsTabHeaderComponent.prototype, "tabList", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"])(TsTabLabelWrapperDirective),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["QueryList"])
], TsTabHeaderComponent.prototype, "labelWrappers", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], TsTabHeaderComponent.prototype, "selectedIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabHeaderComponent.prototype, "indexFocused", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabHeaderComponent.prototype, "selectFocusedIndex", void 0);
TsTabHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'ts-tab-header',
        template: "<div\n  class=\"ts-tab-header__pagination ts-tab-header__pagination--before mat-elevation-z4\"\n  #previousPaginator\n  aria-hidden=\"true\"\n  mat-ripple\n  [matRippleDisabled]=\"disableScrollBefore\"\n  [class.ts-tab-header__pagination--disabled]=\"disableScrollBefore\"\n  (click)=\"handlePaginatorClick('before')\"\n  (mousedown)=\"handlePaginatorPress('before')\"\n  (touchend)=\"stopInterval()\"\n>\n  <div class=\"ts-tab-header__pagination-chevron\"></div>\n</div>\n\n\n<div\n  class=\"ts-tab-header__labels-container\"\n  #tabListContainer\n  (keydown)=\"handleKeydown($event)\"\n>\n  <div\n    class=\"ts-tab-header__labels-container-inner\"\n    #tabList\n    role=\"tablist\"\n    (cdkObserveContent)=\"onContentChanges()\"\n  >\n    <div class=\"ts-tab-header__labels\">\n      <ng-content></ng-content>\n    </div>\n\n    <ts-tab-ink-bar></ts-tab-ink-bar>\n  </div>\n</div>\n\n\n<div\n  class=\"ts-tab-header__pagination ts-tab-header__pagination--after mat-elevation-z4\"\n  #nextPaginator\n  aria-hidden=\"true\"\n  mat-ripple\n  [matRippleDisabled]=\"disableScrollAfter\"\n  [class.ts-tab-header__pagination--disabled]=\"disableScrollAfter\"\n  (mousedown)=\"handlePaginatorPress('after')\"\n  (click)=\"handlePaginatorClick('after')\"\n  (touchend)=\"stopInterval()\"\n>\n  <div class=\"ts-tab-header__pagination-chevron\"></div>\n</div>\n",
        host: {
            'class': 'ts-tab-header',
            '[class.ts-tab-header__pagination--enabled]': 'showPaginationControls',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        exportAs: 'tsTabHeader',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tab-header{border-bottom:1px solid #cecdd1;display:flex;flex-shrink:0;overflow:hidden;position:relative}.ts-tab-label{align-items:center;box-sizing:border-box;color:#302d35;cursor:pointer;display:inline-flex;height:48px;justify-content:center;opacity:.6;padding:0 24px;position:relative;text-align:center;white-space:nowrap}.ts-tab-label:focus{outline:0}.ts-tab-label:focus:not(.ts-tab-label--disabled){opacity:1}.ts-tab-label.ts-tab-label--disabled{color:#cecdd1;cursor:not-allowed}@media screen and (-ms-high-contrast:active){.ts-tab-label{opacity:1}.ts-tab-label:focus{outline:dotted 2px}.ts-tab-label.ts-tab-label--disabled{opacity:.5}}.ts-tab-label .ts-tab-label__content{overflow:hidden;text-overflow:ellipsis;align-items:center;display:inline-block;justify-content:center;white-space:nowrap}.ts-tab-header__pagination{align-items:center;cursor:pointer;display:none;justify-content:center;min-width:32px;position:relative;-webkit-tap-highlight-color:transparent;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ts-tab-header__pagination--enabled .ts-tab-header__pagination{display:flex}.ts-tab-header__pagination .ts-tab-header__pagination-chevron{border-color:#302d35;border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.ts-tab-header__pagination--before{padding-left:4px}.ts-tab-header__pagination--before .ts-tab-header__pagination-chevron{transform:rotate(-135deg)}.ts-tab-header__pagination--after{padding-right:4px}.ts-tab-header__pagination--after .ts-tab-header__pagination-chevron{transform:rotate(45deg)}.ts-tab-header__pagination--disabled{box-shadow:none;cursor:default}.ts-tab-header__pagination--disabled .ts-tab-header__pagination-chevron{color:#999}.ts-tab-header__labels-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.ts-tab-header__labels-container-inner{flex-grow:1;position:relative;transition:transform .2s cubic-bezier(.35,0,.25,1)}.ts-tab-header__labels{display:flex}.ts-tab-collection.ts-tab-collection--primary .ts-tab-label{transition:background-color .2s cubic-bezier(.35,0,.25,1)}.ts-tab-collection.ts-tab-collection--primary .ts-tab-label:not(.ts-tab-label--disabled):focus{color:#00538a}.ts-tab-collection.ts-tab-collection--primary .ts-tab-label:not(.ts-tab-label--disabled):hover{background-color:rgba(0,83,138,.2);color:#00538a}.ts-tab-collection.ts-tab-collection--accent .ts-tab-label{transition:background-color .2s cubic-bezier(.35,0,.25,1)}.ts-tab-collection.ts-tab-collection--accent .ts-tab-label:not(.ts-tab-label--disabled):focus{color:#2f854d}.ts-tab-collection.ts-tab-collection--accent .ts-tab-label:not(.ts-tab-label--disabled):hover{background-color:rgba(47,133,77,.2);color:#2f854d}.ts-tab-collection.ts-tab-collection--warn .ts-tab-label{transition:background-color .2s cubic-bezier(.35,0,.25,1)}.ts-tab-collection.ts-tab-collection--warn .ts-tab-label:not(.ts-tab-label--disabled):focus{color:#c8604d}.ts-tab-collection.ts-tab-collection--warn .ts-tab-label:not(.ts-tab-label--disabled):hover{background-color:rgba(200,96,77,.2);color:#c8604d}.ts-tab-collection.ts-tab-collection--start .ts-tab-header__labels{justify-content:flex-start}.ts-tab-collection.ts-tab-collection--center .ts-tab-header__labels{justify-content:center}.ts-tab-collection.ts-tab-collection--end .ts-tab-header__labels{justify-content:flex-end}.ts-tab-collection.ts-tab-collection--stretch .ts-tab-header__labels .ts-tab-label{flex:1}.ts-tab-collection.ts-tab-collection--inverted-header .ts-tab-header{border-bottom:none;border-top:1px solid #cecdd1}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ViewportRuler"],
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"]])
], TsTabHeaderComponent);

/**
 * Used to flag tab labels for use with the portal directive
 */
let TsTabLabelDirective = class TsTabLabelDirective extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortal"] {
};
TsTabLabelDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"])({
        selector: '[tsTabLabel]',
        exportAs: 'tsTabLabel',
    })
], TsTabLabelDirective);

// Unique ID for each instance
let nextUniqueId$2 = 0;
/**
 * An individual tab component
 *
 * @example
 * <ts-tab
 *               ariaLabel="My label"
 *               ariaLabelledby="myId"
 *               [isDisabled]="true"
 *               label="First"
 * >
 *               My tab content!
 * </ts-tab>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/tabs</example-url>
 */
let TsTabComponent = class TsTabComponent {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        /**
         * Define a unique ID for every instance
         */
        this.id = nextUniqueId$2++;
        /**
         * Portal that will be the hosted content of the tab
         */
        this.contentPortal = null;
        /**
         * Emits whenever the internal state of the tab changes
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * The relatively indexed position where 0 represents the center, negative numbers are left, and positive numbers represent the right.
         */
        this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there was already a selected tab.
         * Provides context of what position the tab should originate from.
         */
        this.origin = null;
        /**
         * Whether the tab is currently active
         */
        this.isActive = false;
        /**
         * Define if the tab is disabled
         */
        this.isDisabled = false;
        /**
         * Simple text label for the tab (used when there is no template label)
         */
        this.label = '';
    }
    /**
     * Provides quick access to the content portal
     */
    get content() {
        return this.contentPortal;
    }
    /**
     * Inject the tab content
     */
    ngOnInit() {
        this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](this.explicitContent || this.implicitContent, this.viewContainerRef);
    }
    /**
     * Trigger event emitter for property changes
     *
     * @param changes
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('label') || changes.hasOwnProperty('isDisabled')) {
            this.stateChanges.next();
        }
    }
    /**
     * Clean up any subscriptions
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
};
TsTabComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"])(TsTabContentDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"],
        static: true,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"])
], TsTabComponent.prototype, "explicitContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"])
], TsTabComponent.prototype, "implicitContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"])(TsTabLabelDirective),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsTabLabelDirective)
], TsTabComponent.prototype, "templateLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsTabComponent.prototype, "ariaLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsTabComponent.prototype, "ariaLabelledby", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsTabComponent.prototype, "isDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsTabComponent.prototype, "label", void 0);
TsTabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'ts-tab',
        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        exportAs: 'tsTab'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]])
], TsTabComponent);

/**
 * A change event emitted on focus or selection changes
 */
class TsTabChangeEvent {
    constructor(index, tab) {
        this.index = index;
        this.tab = tab;
    }
}
// Unique ID for each instance
let nextUniqueId$3 = 0;
/**
 * A collection of {@link TsTabComponent}s
 *
 * @example
 * <ts-tab-collection
 *               headerPosition="above"
 *               [selectedIndex]="2"
 *               tabAlignment="start"
 *               theme="primary"
 *               (animationFinished)="myFunc()"
 *               (focusChange)="myFunc($event)"
 *               (selectedIndexChange)="myFunc($event)"
 *               (selectedTabChange)="myFunc($event)"
 * >
 *              <ts-tab label="First">
 *                Content 1
 *              </ts-tab>
 *
 *              <ts-tab label="Second">
 *                Content 2
 *              </ts-tab>
 * </ts-tab-collection>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/tabs</example-url>
 */
let TsTabCollectionComponent = class TsTabCollectionComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /**
         * A unique ID per instance
         */
        this.collectionId = nextUniqueId$3++;
        /**
         * Internal reference used to enable two-way binding for `selectedIndex`
         */
        this._indexToSelect = 0;
        /**
         * Snapshot of the height of the tab body wrapper before another tab is activated
         */
        this.tabBodyWrapperHeight = 0;
        /**
         * Subscription to changes in the tab labels
         */
        this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /**
         * Define the position of the tab header
         */
        this.headerPosition = 'above';
        this._selectedIndex = null;
        /**
         * Define the horizontal layout for the tabs
         */
        this.tabAlignment = 'start';
        /**
         * Define the theme for the tabs
         */
        this.theme = 'primary';
        /**
         * Event emitted when the body animation has completed
         */
        this.animationFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted when focus has changed within a tab collection
         */
        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted when the selected index changes.
         *
         * NOTE: This is to enable support for two-way binding on `[(selectedIndex)]`
         */
        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted when the tab selection has changed
         */
        this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](true);
    }
    /**
     * Define the index of the active tab
     *
     * @param value - The index to select
     */
    set selectedIndex(value) {
        this._indexToSelect = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceNumberProperty"])(value, null);
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * Set up tab and label subscriptions
     */
    ngAfterContentInit() {
        this.subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be able to re-render the content as new tabs are added or removed
        this.tabs.changes.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(() => {
            const indexToSelect = this.clampTabIndex(this._indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no explicit change that selects a different tab
            if (indexToSelect === this._selectedIndex) {
                const tabs = this.tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        this._indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.changeDetectorRef.markForCheck();
        });
    }
    /**
     * After the content is checked, this component knows what tabs have been defined and what the selected index should be. This is where we
     * can know exactly what position each tab should be in according to the new selected index, and additionally we know how a new selected
     * tab should transition in (from the left or right).
     */
    ngAfterContentChecked() {
        // Don't clamp the `selectedIndex` immediately in the setter because it can happen that the amount of tabs changes before the actual
        // change detection runs
        const indexToSelect = this._indexToSelect = this.clampTabIndex(this._indexToSelect);
        // If there is a change in selected index, emit a change event.
        // This should not trigger if the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect) {
            const isFirstRun = this.selectedIndex === null;
            if (!isFirstRun) {
                this.selectedTabChange.emit(this.createChangeEvent(indexToSelect));
            }
            // Defer changing these values until after change detection has run since the checked content may contain references to them
            Promise.resolve().then(() => {
                this.tabs.forEach((tab, index) => {
                    tab.isActive = index === indexToSelect;
                    return tab.isActive;
                });
                if (!isFirstRun) {
                    this.selectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Set up the position for each tab and optionally setup an origin on the next selected tab
        this.tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab if it doesn't have one already
            if (this._selectedIndex !== null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this._selectedIndex;
            }
        });
        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * Needed for untilComponentDestroyed
     */
    ngOnDestroy() { }
    /**
     * Re-align the ink bar to the selected tab element
     */
    realignInkBar() {
        // istanbul ignore else
        if (this.tabHeader) {
            this.tabHeader.alignInkBarToSelectedTab();
        }
    }
    /**
     * Emit an event for focus change
     *
     * @param index - The focused index
     */
    focusChanged(index) {
        this.focusChange.emit(this.createChangeEvent(index));
    }
    /**
     * Set the height of the body wrapper to the height of the activating tab
     *
     * @param tabHeight - The desired tab height
     */
    setTabBodyWrapperHeight(tabHeight) {
        if (!this.tabBodyWrapperHeight) {
            return;
        }
        const wrapper = this.tabBodyWrapper.nativeElement;
        wrapper.style.height = `${this.tabBodyWrapperHeight}px`;
        // NOTE: This conditional forces the browser to paint the height so that the animation to the new height can have an origin
        if (this.tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = `${tabHeight}px`;
        }
    }
    /**
     * Remove the height of the tab body wrapper
     */
    removeTabBodyWrapperHeight() {
        const wrapper = this.tabBodyWrapper.nativeElement;
        this.tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = '';
        this.animationFinished.emit();
    }
    /**
     * Handle click events & set a new selected index if appropriate
     *
     * @param tab - The tab that was clicked
     * @param tabHeader - The header of the tab that was clicked
     * @param index - The index of the tab that was clicked
     */
    handleClick(tab, tabHeader, index) {
        if (!tab.isDisabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
        }
    }
    /**
     * Subscribes to changes in the tab labels.
     *
     * This is needed, because the @Input for the label is on the {@link TsTabComponent}, whereas the data binding is inside the
     * {@link TsTabCollectionComponent}. In order for the binding to be updated, we need to subscribe to changes in it and trigger change
     * detection manually.
     */
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        // eslint-disable-next-line deprecation/deprecation
        this.tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(...this.tabs.map(tab => tab.stateChanges))
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe(() => this.changeDetectorRef.markForCheck());
    }
    /**
     * Clamps the given index to the bounds of 0 and the tabs length
     *
     * @param index - The index
     * @returns The clamped index
     */
    clampTabIndex(index) {
        // NOTE: Using `|| 0` ensures that values like NaN can't get through and which would otherwise throw the component into an infinite
        // loop (since `Math.max(NaN, 0) === NaN`).
        return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
    }
    /**
     * Create a new change event
     *
     * @param index - The tab index
     * @returns The change event
     */
    createChangeEvent(index) {
        let tab = null;
        if (this.tabs && this.tabs.length) {
            tab = this.tabs.toArray()[index];
        }
        return new TsTabChangeEvent(index, tab);
    }
    /**
     * Function for tracking for-loops changes
     *
     * @param index - The item index
     * @param item - The item
     * @returns The unique ID
     */
    trackByFn(index, item) {
        return item.id;
    }
};
TsTabCollectionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('tabBodyWrapper', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], TsTabCollectionComponent.prototype, "tabBodyWrapper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('tabHeader', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsTabHeaderComponent)
], TsTabCollectionComponent.prototype, "tabHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"])(TsTabComponent),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["QueryList"])
], TsTabCollectionComponent.prototype, "tabs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsTabCollectionComponent.prototype, "headerPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], TsTabCollectionComponent.prototype, "selectedIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsTabCollectionComponent.prototype, "tabAlignment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsTabCollectionComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabCollectionComponent.prototype, "animationFinished", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabCollectionComponent.prototype, "focusChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabCollectionComponent.prototype, "selectedIndexChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
], TsTabCollectionComponent.prototype, "selectedTabChange", void 0);
TsTabCollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'ts-tab-collection',
        template: "<ts-tab-header\n  #tabHeader\n  [selectedIndex]=\"selectedIndex\"\n  (indexFocused)=\"focusChanged($event)\"\n  (selectFocusedIndex)=\"selectedIndex = $event\"\n>\n\n  <div\n    class=\"ts-tab-label\"\n    [class.ts-tab-label--active]=\"selectedIndex === i\"\n    role=\"tab\"\n    tsTabLabelWrapper\n    mat-ripple\n    cdkMonitorElementFocus\n    *ngFor=\"let tab of tabs; let i = index; trackBy: trackByFn\"\n    [id]=\"'ts-tab-label-' + collectionId + '-' + i\"\n    [attr.tabIndex]=\"tab.isDisabled ? null : selectedIndex === i ? 0 : -1\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"tabs.length\"\n    [attr.aria-controls]=\"'ts-tab-content-' + collectionId + '-' + i\"\n    [attr.aria-selected]=\"selectedIndex === i\"\n    [attr.aria-label]=\"tab.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n    [attr.title]=\"tab.label || ''\"\n    [isDisabled]=\"tab.isDisabled || false\"\n    [matRippleDisabled]=\"tab.isDisabled\"\n    (click)=\"handleClick(tab, tabHeader, i)\"\n  >\n\n    <div class=\"ts-tab-label__content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">\n        {{ tab.label }}\n      </ng-template>\n    </div>\n  </div>\n</ts-tab-header>\n\n<div\n  class=\"ts-tab-collection__body-wrapper\"\n  #tabBodyWrapper\n>\n  <ts-tab-body\n    role=\"tabpanel\"\n    *ngFor=\"let tab of tabs; let i = index; trackBy: trackByFn\"\n    [id]=\"'ts-tab-content-' + collectionId + '-' + i\"\n    [attr.aria-labelledby]=\"'ts-tab-label-' + collectionId + '-' + i\"\n    [class.ts-tab-body--active]=\"selectedIndex === i\"\n    [content]=\"tab.content\"\n    [position]=\"tab.position\"\n    [origin]=\"tab.origin\"\n    (centered)=\"removeTabBodyWrapperHeight()\"\n    (centering)=\"setTabBodyWrapperHeight($event)\"\n  ></ts-tab-body>\n</div>\n",
        host: {
            'class': 'ts-tab-collection',
            '[class.ts-tab-collection--inverted-header]': 'headerPosition === "below"',
            // Themes:
            '[class.ts-tab-collection--primary]': 'theme === "primary"',
            '[class.ts-tab-collection--accent]': 'theme === "accent"',
            '[class.ts-tab-collection--warn]': 'theme === "warn"',
            // Tab alignment:
            '[class.ts-tab-collection--start]': 'tabAlignment === "start"',
            '[class.ts-tab-collection--center]': 'tabAlignment === "center"',
            '[class.ts-tab-collection--end]': 'tabAlignment === "end"',
            '[class.ts-tab-collection--stretch]': 'tabAlignment === "stretch"',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        exportAs: 'tsTabCollection',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tab-collection{display:flex;flex-direction:column}.ts-tab-collection.ts-tab-collection--inverted-header{flex-direction:column-reverse}.ts-tab-collection__body-wrapper{display:flex;overflow:hidden;position:relative;transition:height .2s cubic-bezier(.35,0,.25,1)}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]])
], TsTabCollectionComponent);

let TsTabsModule = class TsTabsModule {
};
TsTabsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        ],
        declarations: [
            TsTabBodyComponent,
            TsTabBodyHostDirective,
            TsTabCollectionComponent,
            TsTabComponent,
            TsTabContentDirective,
            TsTabHeaderComponent,
            TsTabInkBarComponent,
            TsTabLabelDirective,
            TsTabLabelWrapperDirective,
        ],
        exports: [
            TsTabCollectionComponent,
            TsTabComponent,
            TsTabContentDirective,
            TsTabLabelDirective,
            TsTabHeaderComponent,
            TsTabInkBarComponent,
            TsTabLabelWrapperDirective,
            TsTabBodyComponent,
            TsTabBodyHostDirective,
        ],
    })
], TsTabsModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-tabs.js.map


/***/ }),

/***/ "../../dist/libs/ui/tabs/terminus-ui-tabs.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/tabs/terminus-ui-tabs.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: TsTabsModuleNgFactory, RenderType_TsTabBodyComponent, View_TsTabBodyComponent_0, View_TsTabBodyComponent_Host_0, TsTabBodyComponentNgFactory, RenderType_TsTabCollectionComponent, View_TsTabCollectionComponent_0, View_TsTabCollectionComponent_Host_0, TsTabCollectionComponentNgFactory, RenderType_TsTabHeaderComponent, View_TsTabHeaderComponent_0, View_TsTabHeaderComponent_Host_0, TsTabHeaderComponentNgFactory, RenderType_TsTabInkBarComponent, View_TsTabInkBarComponent_0, View_TsTabInkBarComponent_Host_0, TsTabInkBarComponentNgFactory, RenderType_TsTabComponent, View_TsTabComponent_0, View_TsTabComponent_Host_0, TsTabComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabsModuleNgFactory", function() { return TsTabsModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsTabBodyComponent", function() { return RenderType_TsTabBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabBodyComponent_0", function() { return View_TsTabBodyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabBodyComponent_Host_0", function() { return View_TsTabBodyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabBodyComponentNgFactory", function() { return TsTabBodyComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsTabCollectionComponent", function() { return RenderType_TsTabCollectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabCollectionComponent_0", function() { return View_TsTabCollectionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabCollectionComponent_Host_0", function() { return View_TsTabCollectionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabCollectionComponentNgFactory", function() { return TsTabCollectionComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsTabHeaderComponent", function() { return RenderType_TsTabHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabHeaderComponent_0", function() { return View_TsTabHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabHeaderComponent_Host_0", function() { return View_TsTabHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabHeaderComponentNgFactory", function() { return TsTabHeaderComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsTabInkBarComponent", function() { return RenderType_TsTabInkBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabInkBarComponent_0", function() { return View_TsTabInkBarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabInkBarComponent_Host_0", function() { return View_TsTabInkBarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabInkBarComponentNgFactory", function() { return TsTabInkBarComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsTabComponent", function() { return RenderType_TsTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabComponent_0", function() { return View_TsTabComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTabComponent_Host_0", function() { return View_TsTabComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTabComponentNgFactory", function() { return TsTabComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-tabs */ "../../dist/libs/ui/tabs/fesm2015/terminus-ui-tabs.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
















var TsTabsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabsModule"], _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabsModule"], [])]); });

var styles_TsTabBodyComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tab-body{bottom:0;left:0;position:absolute;right:0;top:0;display:block;flex-basis:100%;overflow:hidden}.ts-tab-body.ts-tab-body--active{flex-grow:1;overflow-x:hidden;overflow-y:hidden;position:relative;z-index:1}.ts-tab-body__content{background-color:#fafafa;height:100%;overflow:hidden;padding:16px}"];
var RenderType_TsTabBodyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsTabBodyComponent, data: { "animation": [{ type: 7, name: "translateTab", definitions: [{ type: 0, name: "center, void, left-origin-center, right-origin-center", styles: { type: 6, styles: { transform: "none" }, offset: null }, options: undefined }, { type: 0, name: "left", styles: { type: 6, styles: { minHeight: "1px", opacity: 0, transform: "translate3d(-50%, 0, 0)" }, offset: null }, options: undefined }, { type: 0, name: "right", styles: { type: 6, styles: { opacity: 0, minHeight: "1px", transform: "translate3d(50%, 0, 0)" }, offset: null }, options: undefined }, { type: 1, expr: "* => left, * => right, left => center, right => center", animation: { type: 4, styles: null, timings: "200ms cubic-bezier(0.35, 0, 0.25, 1)" }, options: null }, { type: 1, expr: "void => left-origin-center", animation: [{ type: 6, styles: { transform: "translate3d(-100%, 0, 0)" }, offset: null }, { type: 4, styles: null, timings: "200ms cubic-bezier(0.35, 0, 0.25, 1)" }], options: null }, { type: 1, expr: "void => right-origin-center", animation: [{ type: 6, styles: { transform: "translate3d(100%, 0, 0)" }, offset: null }, { type: 4, styles: null, timings: "200ms cubic-bezier(0.35, 0, 0.25, 1)" }], options: null }], options: {} }] } });

function View_TsTabBodyComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_TsTabBodyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [["content", 1]], null, 3, "div", [["class", "ts-tab-body__content"]], [[24, "@translateTab", 0]], [[null, "@translateTab.start"], [null, "@translateTab.done"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("@translateTab.start" === en)) {
        var pd_0 = (_co.onTranslateTabStarted($event) !== false);
        ad = (pd_0 && ad);
    } if (("@translateTab.done" === en)) {
        var pd_1 = (_co.translateTabComplete.next($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](1, { value: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsTabBodyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 212992, null, 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabBodyHostDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabBodyComponent"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 1, 0, _co.positionState); _ck(_v, 0, 0, currVal_0); }); }
function View_TsTabBodyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-tab-body", [["class", "ts-tab-body"]], null, null, null, View_TsTabBodyComponent_0, RenderType_TsTabBodyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TsTabBodyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-tab-body", _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabBodyComponent"], View_TsTabBodyComponent_Host_0, { content: "content", origin: "origin", position: "position" }, { centering: "centering", beforeCentering: "beforeCentering", afterLeavingCenter: "afterLeavingCenter", centered: "centered" }, []);

var styles_TsTabCollectionComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tab-collection{display:flex;flex-direction:column}.ts-tab-collection.ts-tab-collection--inverted-header{flex-direction:column-reverse}.ts-tab-collection__body-wrapper{display:flex;overflow:hidden;position:relative;transition:height .2s cubic-bezier(.35,0,.25,1)}"];
var RenderType_TsTabCollectionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsTabCollectionComponent, data: {} });

function View_TsTabCollectionComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_TsTabCollectionComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsTabCollectionComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["CdkPortalOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]], { portal: [0, "portal"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.templateLabel; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TsTabCollectionComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](0, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.label; _ck(_v, 0, 0, currVal_0); }); }
function View_TsTabCollectionComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "div", [["cdkMonitorElementFocus", ""], ["class", "ts-tab-label mat-ripple"], ["mat-ripple", ""], ["role", "tab"], ["tsTabLabelWrapper", ""]], [[2, "ts-tab-label--active", null], [8, "id", 0], [1, "tabIndex", 0], [1, "aria-posinset", 0], [1, "aria-setsize", 0], [1, "aria-controls", 0], [1, "aria-selected", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "title", 0], [2, "mat-ripple-unbounded", null], [2, "ts-tab-label--disabled", null], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.handleClick(_v.context.$implicit, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 3), _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["CdkMonitorFocus"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, [[3, 4]], 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabLabelWrapperDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { isDisabled: [0, "isDisabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 4, "div", [["class", "ts-tab-label__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsTabCollectionComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsTabCollectionComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_13 = _v.context.$implicit.isDisabled; _ck(_v, 2, 0, currVal_13); var currVal_14 = (_v.context.$implicit.isDisabled || false); _ck(_v, 3, 0, currVal_14); var currVal_15 = _v.context.$implicit.templateLabel; _ck(_v, 6, 0, currVal_15); var currVal_16 = !_v.context.$implicit.templateLabel; _ck(_v, 8, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedIndex === _v.context.index); var currVal_1 = ((("ts-tab-label-" + _co.collectionId) + "-") + _v.context.index); var currVal_2 = (_v.context.$implicit.isDisabled ? null : ((_co.selectedIndex === _v.context.index) ? 0 : (0 - 1))); var currVal_3 = (_v.context.index + 1); var currVal_4 = _co.tabs.length; var currVal_5 = ((("ts-tab-content-" + _co.collectionId) + "-") + _v.context.index); var currVal_6 = (_co.selectedIndex === _v.context.index); var currVal_7 = (_v.context.$implicit.ariaLabel || null); var currVal_8 = ((!_v.context.$implicit.ariaLabel && _v.context.$implicit.ariaLabelledby) ? _v.context.$implicit.ariaLabelledby : null); var currVal_9 = (_v.context.$implicit.label || ""); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).unbounded; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isDisabled; var currVal_12 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).isDisabled; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); }); }
function View_TsTabCollectionComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-tab-body", [["class", "ts-tab-body"], ["role", "tabpanel"]], [[8, "id", 0], [1, "aria-labelledby", 0], [2, "ts-tab-body--active", null]], [[null, "centered"], [null, "centering"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("centered" === en)) {
        var pd_0 = (_co.removeTabBodyWrapperHeight() !== false);
        ad = (pd_0 && ad);
    } if (("centering" === en)) {
        var pd_1 = (_co.setTabBodyWrapperHeight($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_TsTabBodyComponent_0, RenderType_TsTabBodyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { content: [0, "content"], origin: [1, "origin"], position: [2, "position"] }, { centering: "centering", centered: "centered" })], function (_ck, _v) { var currVal_3 = _v.context.$implicit.content; var currVal_4 = _v.context.$implicit.origin; var currVal_5 = _v.context.$implicit.position; _ck(_v, 1, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((("ts-tab-content-" + _co.collectionId) + "-") + _v.context.index); var currVal_1 = ((("ts-tab-label-" + _co.collectionId) + "-") + _v.context.index); var currVal_2 = (_co.selectedIndex === _v.context.index); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_TsTabCollectionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { tabBodyWrapper: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { tabHeader: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 4, "ts-tab-header", [["class", "ts-tab-header"]], [[2, "ts-tab-header__pagination--enabled", null]], [[null, "indexFocused"], [null, "selectFocusedIndex"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("indexFocused" === en)) {
        var pd_0 = (_co.focusChanged($event) !== false);
        ad = (pd_0 && ad);
    } if (("selectFocusedIndex" === en)) {
        var pd_1 = ((_co.selectedIndex = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_TsTabHeaderComponent_0, RenderType_TsTabHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 7520256, [[2, 4], ["tabHeader", 4]], 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]], { selectedIndex: [0, "selectedIndex"] }, { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { labelWrappers: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsTabCollectionComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, [[1, 0], ["tabBodyWrapper", 1]], null, 2, "div", [["class", "ts-tab-collection__body-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsTabCollectionComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.selectedIndex; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.tabs; var currVal_3 = _co.trackByFn; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = _co.tabs; var currVal_5 = _co.trackByFn; _ck(_v, 9, 0, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).showPaginationControls; _ck(_v, 2, 0, currVal_0); }); }
function View_TsTabCollectionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-tab-collection", [["class", "ts-tab-collection"]], [[2, "ts-tab-collection--inverted-header", null], [2, "ts-tab-collection--primary", null], [2, "ts-tab-collection--accent", null], [2, "ts-tab-collection--warn", null], [2, "ts-tab-collection--start", null], [2, "ts-tab-collection--center", null], [2, "ts-tab-collection--end", null], [2, "ts-tab-collection--stretch", null]], null, null, View_TsTabCollectionComponent_0, RenderType_TsTabCollectionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 3325952, null, 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { tabs: 1 })], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).headerPosition === "below"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "primary"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "accent"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "warn"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabAlignment === "start"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabAlignment === "center"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabAlignment === "end"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabAlignment === "stretch"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
var TsTabCollectionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-tab-collection", _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabCollectionComponent"], View_TsTabCollectionComponent_Host_0, { headerPosition: "headerPosition", selectedIndex: "selectedIndex", tabAlignment: "tabAlignment", theme: "theme" }, { animationFinished: "animationFinished", focusChange: "focusChange", selectedIndexChange: "selectedIndexChange", selectedTabChange: "selectedTabChange" }, []);

var styles_TsTabHeaderComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-tab-header{border-bottom:1px solid #cecdd1;display:flex;flex-shrink:0;overflow:hidden;position:relative}.ts-tab-label{align-items:center;box-sizing:border-box;color:#302d35;cursor:pointer;display:inline-flex;height:48px;justify-content:center;opacity:.6;padding:0 24px;position:relative;text-align:center;white-space:nowrap}.ts-tab-label:focus{outline:0}.ts-tab-label:focus:not(.ts-tab-label--disabled){opacity:1}.ts-tab-label.ts-tab-label--disabled{color:#cecdd1;cursor:not-allowed}@media screen and (-ms-high-contrast:active){.ts-tab-label{opacity:1}.ts-tab-label:focus{outline:dotted 2px}.ts-tab-label.ts-tab-label--disabled{opacity:.5}}.ts-tab-label .ts-tab-label__content{overflow:hidden;text-overflow:ellipsis;align-items:center;display:inline-block;justify-content:center;white-space:nowrap}.ts-tab-header__pagination{align-items:center;cursor:pointer;display:none;justify-content:center;min-width:32px;position:relative;-webkit-tap-highlight-color:transparent;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ts-tab-header__pagination--enabled .ts-tab-header__pagination{display:flex}.ts-tab-header__pagination .ts-tab-header__pagination-chevron{border-color:#302d35;border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.ts-tab-header__pagination--before{padding-left:4px}.ts-tab-header__pagination--before .ts-tab-header__pagination-chevron{transform:rotate(-135deg)}.ts-tab-header__pagination--after{padding-right:4px}.ts-tab-header__pagination--after .ts-tab-header__pagination-chevron{transform:rotate(45deg)}.ts-tab-header__pagination--disabled{box-shadow:none;cursor:default}.ts-tab-header__pagination--disabled .ts-tab-header__pagination-chevron{color:#999}.ts-tab-header__labels-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.ts-tab-header__labels-container-inner{flex-grow:1;position:relative;transition:transform .2s cubic-bezier(.35,0,.25,1)}.ts-tab-header__labels{display:flex}.ts-tab-collection.ts-tab-collection--primary .ts-tab-label{transition:background-color .2s cubic-bezier(.35,0,.25,1)}.ts-tab-collection.ts-tab-collection--primary .ts-tab-label:not(.ts-tab-label--disabled):focus{color:#00538a}.ts-tab-collection.ts-tab-collection--primary .ts-tab-label:not(.ts-tab-label--disabled):hover{background-color:rgba(0,83,138,.2);color:#00538a}.ts-tab-collection.ts-tab-collection--accent .ts-tab-label{transition:background-color .2s cubic-bezier(.35,0,.25,1)}.ts-tab-collection.ts-tab-collection--accent .ts-tab-label:not(.ts-tab-label--disabled):focus{color:#2f854d}.ts-tab-collection.ts-tab-collection--accent .ts-tab-label:not(.ts-tab-label--disabled):hover{background-color:rgba(47,133,77,.2);color:#2f854d}.ts-tab-collection.ts-tab-collection--warn .ts-tab-label{transition:background-color .2s cubic-bezier(.35,0,.25,1)}.ts-tab-collection.ts-tab-collection--warn .ts-tab-label:not(.ts-tab-label--disabled):focus{color:#c8604d}.ts-tab-collection.ts-tab-collection--warn .ts-tab-label:not(.ts-tab-label--disabled):hover{background-color:rgba(200,96,77,.2);color:#c8604d}.ts-tab-collection.ts-tab-collection--start .ts-tab-header__labels{justify-content:flex-start}.ts-tab-collection.ts-tab-collection--center .ts-tab-header__labels{justify-content:center}.ts-tab-collection.ts-tab-collection--end .ts-tab-header__labels{justify-content:flex-end}.ts-tab-collection.ts-tab-collection--stretch .ts-tab-header__labels .ts-tab-label{flex:1}.ts-tab-collection.ts-tab-collection--inverted-header .ts-tab-header{border-bottom:none;border-top:1px solid #cecdd1}"];
var RenderType_TsTabHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsTabHeaderComponent, data: {} });

function View_TsTabHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { inkBar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { previousPaginator: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, { nextPaginator: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 4, { tabListContainer: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 5, { tabList: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[2, 0], ["previousPaginator", 1]], null, 2, "div", [["aria-hidden", "true"], ["class", "ts-tab-header__pagination ts-tab-header__pagination--before mat-elevation-z4 mat-ripple"], ["mat-ripple", ""]], [[2, "ts-tab-header__pagination--disabled", null], [2, "mat-ripple-unbounded", null]], [[null, "click"], [null, "mousedown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.handlePaginatorClick("before") !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_co.handlePaginatorPress("before") !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_co.stopInterval() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "div", [["class", "ts-tab-header__pagination-chevron"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, [[4, 0], ["tabListContainer", 1]], null, 6, "div", [["class", "ts-tab-header__labels-container"]], null, [[null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_co.handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, [[5, 0], ["tabList", 1]], null, 5, "div", [["class", "ts-tab-header__labels-container-inner"], ["role", "tablist"]], null, [[null, "cdkObserveContent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cdkObserveContent" === en)) {
        var pd_0 = (_co.onContentChanges() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 1196032, null, 0, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["CdkObserveContent"], [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ContentObserver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, { event: "cdkObserveContent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "ts-tab-header__labels"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "ts-tab-ink-bar", [["class", "ts-ink-bar"]], null, null, null, View_TsTabInkBarComponent_0, RenderType_TsTabInkBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 49152, [[1, 4]], 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabInkBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, [[3, 0], ["nextPaginator", 1]], null, 2, "div", [["aria-hidden", "true"], ["class", "ts-tab-header__pagination ts-tab-header__pagination--after mat-elevation-z4 mat-ripple"], ["mat-ripple", ""]], [[2, "ts-tab-header__pagination--disabled", null], [2, "mat-ripple-unbounded", null]], [[null, "mousedown"], [null, "click"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.handlePaginatorPress("after") !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.handlePaginatorClick("after") !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_co.stopInterval() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "div", [["class", "ts-tab-header__pagination-chevron"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.disableScrollBefore; _ck(_v, 6, 0, currVal_2); var currVal_5 = _co.disableScrollAfter; _ck(_v, 16, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disableScrollBefore; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).unbounded; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_3 = _co.disableScrollAfter; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).unbounded; _ck(_v, 15, 0, currVal_3, currVal_4); }); }
function View_TsTabHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-tab-header", [["class", "ts-tab-header"]], [[2, "ts-tab-header__pagination--enabled", null]], null, null, View_TsTabHeaderComponent_0, RenderType_TsTabHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 7520256, null, 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { labelWrappers: 1 })], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).showPaginationControls; _ck(_v, 0, 0, currVal_0); }); }
var TsTabHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-tab-header", _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabHeaderComponent"], View_TsTabHeaderComponent_Host_0, { selectedIndex: "selectedIndex" }, { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex" }, ["*"]);

var styles_TsTabInkBarComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-ink-bar{bottom:0;height:2px;position:absolute;transition:.2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.ts-ink-bar{height:0;outline:solid 2px}}.ts-tab-collection--inverted-header .ts-ink-bar{bottom:auto;top:0}.ts-tab-collection.ts-tab-collection--primary .ts-ink-bar{background-color:#00538a}.ts-tab-collection.ts-tab-collection--accent .ts-ink-bar{background-color:#2f854d}.ts-tab-collection.ts-tab-collection--warn .ts-ink-bar{background-color:#c8604d}"];
var RenderType_TsTabInkBarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsTabInkBarComponent, data: {} });

function View_TsTabInkBarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [], null, null); }
function View_TsTabInkBarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-tab-ink-bar", [["class", "ts-ink-bar"]], null, null, null, View_TsTabInkBarComponent_0, RenderType_TsTabInkBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabInkBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], null, null); }
var TsTabInkBarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-tab-ink-bar", _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabInkBarComponent"], View_TsTabInkBarComponent_Host_0, {}, {}, []);

var styles_TsTabComponent = [];
var RenderType_TsTabComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsTabComponent, data: {} });

function View_TsTabComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_TsTabComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { implicitContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[1, 2]], null, 0, null, View_TsTabComponent_1))], null, null); }
function View_TsTabComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 3, "ts-tab", [], null, null, null, View_TsTabComponent_0, RenderType_TsTabComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, null, 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { templateLabel: 0 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TsTabComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-tab", _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_1__["TsTabComponent"], View_TsTabComponent_Host_0, { ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby", isDisabled: "isDisabled", label: "label" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/components/tabs/tabs-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/tabs/tabs-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ "./src/app/components/tabs/tabs.component.ts");


const routes = [
    {
        path: '',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"],
    },
];
class TabsRoutingModule {
}


/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_TabsComponent, View_TabsComponent_0, View_TabsComponent_Host_0, TabsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TabsComponent", function() { return RenderType_TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TabsComponent_0", function() { return View_TabsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TabsComponent_Host_0", function() { return View_TabsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponentNgFactory", function() { return TabsComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/tabs/terminus-ui-tabs.ngfactory */ "../../dist/libs/ui/tabs/terminus-ui-tabs.ngfactory.js");
/* harmony import */ var _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @terminus/ui-tabs */ "../../dist/libs/ui/tabs/fesm2015/terminus-ui-tabs.js");
/* harmony import */ var _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/icon/terminus-ui-icon.ngfactory */ "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs.component */ "./src/app/components/tabs/tabs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 











var styles_TabsComponent = [];
var RenderType_TabsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TabsComponent, data: {} });

function View_TabsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Content 2 (dynamic) "]))], null, null); }
function View_TabsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 4, "ts-tab", [], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 770048, [[21, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 22, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 23, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, [" Content for ", " tab "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit; _ck(_v, 4, 0, currVal_1); }); }
function View_TabsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-icon", [["class", "ts-icon"], ["style", "position: relative; top: 5px;"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_4__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" First "]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).inline; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "primary"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "accent"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "warn"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).background; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_TabsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-icon", [["class", "ts-icon"], ["style", "position: relative; top: 5px;"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_4__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Second "]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).inline; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "primary"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "accent"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "warn"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).background; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_TabsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { tabCollection: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Basic Example"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 47, "ts-tab-collection", [["class", "ts-tab-collection"], ["tsVerticalSpacing", "large--2"]], [[2, "ts-tab-collection--inverted-header", null], [2, "ts-tab-collection--primary", null], [2, "ts-tab-collection--accent", null], [2, "ts-tab-collection--warn", null], [2, "ts-tab-collection--start", null], [2, "ts-tab-collection--center", null], [2, "ts-tab-collection--end", null], [2, "ts-tab-collection--stretch", null]], null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabCollectionComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 3325952, null, 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 16777216, null, null, 10, "ts-tab", [["label", "Tab 1 with a longer name"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 770048, [[2, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Tab content 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Dicta temporibus ea nostrum quam id. Delectus harum minima asperiores. Molestias aperiam dolor laboriosam fugit. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Blanditiis repudiandae alias eum. Culpa dolorem quidem iste velit modi. Esse sint quidem expedita. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Odit perferendis sit in. Excepturi voluptate libero est earum excepturi iure cupiditate. Quam perferendis fugiat magni repellat quidem consectetur officiis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 16777216, null, null, 16, "ts-tab", [["label", "2"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 770048, [[2, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 5, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Tab content 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Click"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Odit perferendis sit in. Excepturi voluptate libero est earum excepturi iure cupiditate. Quam perferendis fugiat magni repellat quidem consectetur officiis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Dicta temporibus ea nostrum quam id. Delectus harum minima asperiores. Molestias aperiam dolor laboriosam fugit. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Click"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Blanditiis repudiandae alias eum. Culpa dolorem quidem iste velit modi. Esse sint quidem expedita. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 16777216, null, null, 4, "ts-tab", [["label", "Tab 3"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 770048, [[2, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { isDisabled: [0, "isDisabled"], label: [1, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 7, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Tab content 3 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 16777216, null, null, 10, "ts-tab", [["label", "Tab 4"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 770048, [[2, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 9, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 10, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Tab content 4 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Dicta temporibus ea nostrum quam id. Delectus harum minima asperiores. Molestias aperiam dolor laboriosam fugit. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Blanditiis repudiandae alias eum. Culpa dolorem quidem iste velit modi. Esse sint quidem expedita. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Odit perferendis sit in. Excepturi voluptate libero est earum excepturi iure cupiditate. Quam perferendis fugiat magni repellat quidem consectetur officiis. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tab layouts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 32, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Header position below: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 57).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.isBelow = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Tabs horizontal alignment: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 21, "select", [["id", "alignment"], ["name", "alignment"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_p"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 3, "option", [["value", "start"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Start"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 3, "option", [["value", "center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Center"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 3, "option", [["value", "end"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["End"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 3, "option", [["value", "stretch"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Stretch"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 13, "ts-tab-collection", [["class", "ts-tab-collection"], ["tsVerticalSpacing", "large--2"]], [[2, "ts-tab-collection--inverted-header", null], [2, "ts-tab-collection--primary", null], [2, "ts-tab-collection--accent", null], [2, "ts-tab-collection--warn", null], [2, "ts-tab-collection--start", null], [2, "ts-tab-collection--center", null], [2, "ts-tab-collection--end", null], [2, "ts-tab-collection--stretch", null]], null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabCollectionComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](88, 3325952, [[1, 4], ["tabCollection", 4]], 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { headerPosition: [0, "headerPosition"], tabAlignment: [1, "tabAlignment"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 11, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 16777216, null, null, 4, "ts-tab", [["label", "First"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 770048, [[11, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 12, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 13, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Content 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 16777216, null, null, 4, "ts-tab", [["label", "Second"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 770048, [[11, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 14, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 15, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Content 2 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Events (check the console)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateIndex() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](104, null, [" Update the selected index to ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](105, null, [" ", "\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 14, "ts-tab-collection", [["class", "ts-tab-collection"], ["tsVerticalSpacing", "large--2"]], [[2, "ts-tab-collection--inverted-header", null], [2, "ts-tab-collection--primary", null], [2, "ts-tab-collection--accent", null], [2, "ts-tab-collection--warn", null], [2, "ts-tab-collection--start", null], [2, "ts-tab-collection--center", null], [2, "ts-tab-collection--end", null], [2, "ts-tab-collection--stretch", null]], [[null, "selectedIndexChange"], [null, "animationFinished"], [null, "focusChange"], [null, "selectedTabChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("selectedIndexChange" === en)) {
        var pd_0 = ((_co.eventsIndex = $event) !== false);
        ad = (pd_0 && ad);
    } if (("animationFinished" === en)) {
        var pd_1 = (_co.animationFinished() !== false);
        ad = (pd_1 && ad);
    } if (("focusChange" === en)) {
        var pd_2 = (_co.focusChange($event) !== false);
        ad = (pd_2 && ad);
    } if (("selectedIndexChange" === en)) {
        var pd_3 = (_co.indexChange($event) !== false);
        ad = (pd_3 && ad);
    } if (("selectedTabChange" === en)) {
        var pd_4 = (_co.tabChange($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabCollectionComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](108, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](109, 3325952, null, 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { selectedIndex: [0, "selectedIndex"] }, { animationFinished: "animationFinished", focusChange: "focusChange", selectedIndexChange: "selectedIndexChange", selectedTabChange: "selectedTabChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 16, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 16777216, null, null, 4, "ts-tab", [["label", "First"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](112, 770048, [[16, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 17, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 18, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Content 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 16777216, null, null, 5, "ts-tab", [["label", "Second"]], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](117, 770048, [[16, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], { label: [0, "label"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 19, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 20, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, [[19, 2]], 0, 1, null, View_TabsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](121, 16384, null, 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabContentDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Dynamic Tabs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](124, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.insertTab() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Insert a new tab at the end "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.insertTabAtLocation(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Insert a new tab at location `1` "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 5, "ts-tab-collection", [["class", "ts-tab-collection"], ["tsVerticalSpacing", "large--2"]], [[2, "ts-tab-collection--inverted-header", null], [2, "ts-tab-collection--primary", null], [2, "ts-tab-collection--accent", null], [2, "ts-tab-collection--warn", null], [2, "ts-tab-collection--start", null], [2, "ts-tab-collection--center", null], [2, "ts-tab-collection--end", null], [2, "ts-tab-collection--stretch", null]], null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabCollectionComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](130, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_7__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](131, 3325952, null, 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 21, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TabsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](134, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Custom label templates"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 16, "ts-tab-collection", [["class", "ts-tab-collection"]], [[2, "ts-tab-collection--inverted-header", null], [2, "ts-tab-collection--primary", null], [2, "ts-tab-collection--accent", null], [2, "ts-tab-collection--warn", null], [2, "ts-tab-collection--start", null], [2, "ts-tab-collection--center", null], [2, "ts-tab-collection--end", null], [2, "ts-tab-collection--stretch", null]], null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabCollectionComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabCollectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](138, 3325952, null, 1, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabCollectionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 24, { tabs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](140, 16777216, null, null, 6, "ts-tab", [], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](141, 770048, [[24, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 25, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 26, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TabsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](145, 16384, [[26, 4]], 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabLabelDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Content 1 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 16777216, null, null, 6, "ts-tab", [], null, null, null, _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsTabComponent_0"], _dist_libs_ui_tabs_terminus_ui_tabs_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsTabComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](148, 770048, [[24, 4]], 2, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 27, { explicitContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 28, { templateLabel: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TabsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](152, 16384, [[28, 4]], 0, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__["TsTabLabelDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" Content 2 "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = "large--2"; _ck(_v, 4, 0, currVal_8); var currVal_9 = "Tab 1 with a longer name"; _ck(_v, 8, 0, currVal_9); var currVal_10 = "2"; _ck(_v, 19, 0, currVal_10); var currVal_11 = true; var currVal_12 = "Tab 3"; _ck(_v, 36, 0, currVal_11, currVal_12); var currVal_13 = "Tab 4"; _ck(_v, 41, 0, currVal_13); var currVal_21 = _co.isBelow; _ck(_v, 59, 0, currVal_21); var currVal_29 = _co.alignmentControl; _ck(_v, 67, 0, currVal_29); var currVal_30 = "start"; _ck(_v, 71, 0, currVal_30); var currVal_31 = "start"; _ck(_v, 72, 0, currVal_31); var currVal_32 = "center"; _ck(_v, 75, 0, currVal_32); var currVal_33 = "center"; _ck(_v, 76, 0, currVal_33); var currVal_34 = "end"; _ck(_v, 79, 0, currVal_34); var currVal_35 = "end"; _ck(_v, 80, 0, currVal_35); var currVal_36 = "stretch"; _ck(_v, 83, 0, currVal_36); var currVal_37 = "stretch"; _ck(_v, 84, 0, currVal_37); var currVal_46 = "large--2"; _ck(_v, 87, 0, currVal_46); var currVal_47 = (_co.isBelow ? "below" : "above"); var currVal_48 = _co.alignmentControl.value; _ck(_v, 88, 0, currVal_47, currVal_48); var currVal_49 = "First"; _ck(_v, 91, 0, currVal_49); var currVal_50 = "Second"; _ck(_v, 96, 0, currVal_50); var currVal_61 = "large--2"; _ck(_v, 108, 0, currVal_61); var currVal_62 = _co.eventsIndex; _ck(_v, 109, 0, currVal_62); var currVal_63 = "First"; _ck(_v, 112, 0, currVal_63); var currVal_64 = "Second"; _ck(_v, 117, 0, currVal_64); var currVal_73 = "large--2"; _ck(_v, 130, 0, currVal_73); var currVal_74 = _co.dynamicTabs; _ck(_v, 134, 0, currVal_74); _ck(_v, 141, 0); _ck(_v, 148, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).headerPosition === "below"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).theme === "primary"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).theme === "accent"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).theme === "warn"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).tabAlignment === "start"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).tabAlignment === "center"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).tabAlignment === "end"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).tabAlignment === "stretch"); _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 56, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 69).ngClassPending; _ck(_v, 64, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).headerPosition === "below"); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).theme === "primary"); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).theme === "accent"); var currVal_41 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).theme === "warn"); var currVal_42 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).tabAlignment === "start"); var currVal_43 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).tabAlignment === "center"); var currVal_44 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).tabAlignment === "end"); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 88).tabAlignment === "stretch"); _ck(_v, 86, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45); var currVal_51 = (!_co.eventsIndex ? "1" : "0"); _ck(_v, 104, 0, currVal_51); var currVal_52 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 105, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).transform(_co.eventsIndex)) || "undefined"); _ck(_v, 105, 0, currVal_52); var currVal_53 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).headerPosition === "below"); var currVal_54 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).theme === "primary"); var currVal_55 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).theme === "accent"); var currVal_56 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).theme === "warn"); var currVal_57 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).tabAlignment === "start"); var currVal_58 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).tabAlignment === "center"); var currVal_59 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).tabAlignment === "end"); var currVal_60 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).tabAlignment === "stretch"); _ck(_v, 107, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_65 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).headerPosition === "below"); var currVal_66 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).theme === "primary"); var currVal_67 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).theme === "accent"); var currVal_68 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).theme === "warn"); var currVal_69 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).tabAlignment === "start"); var currVal_70 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).tabAlignment === "center"); var currVal_71 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).tabAlignment === "end"); var currVal_72 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 131).tabAlignment === "stretch"); _ck(_v, 129, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72); var currVal_75 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).headerPosition === "below"); var currVal_76 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).theme === "primary"); var currVal_77 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).theme === "accent"); var currVal_78 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).theme === "warn"); var currVal_79 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).tabAlignment === "start"); var currVal_80 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).tabAlignment === "center"); var currVal_81 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).tabAlignment === "end"); var currVal_82 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 138).tabAlignment === "stretch"); _ck(_v, 137, 0, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82); }); }
function View_TabsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-tabs", [], null, null, null, View_TabsComponent_0, RenderType_TabsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TabsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-tabs", _tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"], View_TabsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @terminus/ui-tabs */ "../../dist/libs/ui/tabs/fesm2015/terminus-ui-tabs.js");



class TabsComponent {
    constructor() {
        this.isBelow = false;
        this.tabAlignment$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('start');
        this.tabAlignment = 'start';
        this.alignmentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('start');
        this.dynamicTabs = ['First', 'Second', 'Third'];
    }
    /**
     * Helper for layout demo
     */
    ngOnInit() {
        this.alignmentControl.valueChanges.subscribe(newValue => {
            // Realign the ink bar when programmatically moving tab labels
            this.tabCollection.realignInkBar();
        });
    }
    /**
     * Helpers for dynamic tabs demo
     */
    insertTab() {
        this.dynamicTabs.push('Fourth');
    }
    insertTabAtLocation(index) {
        this.dynamicTabs.splice(index, 0, 'New New!');
    }
    /**
     * Helpers for events demo
     */
    updateIndex() {
        this.eventsIndex = this.eventsIndex ? 0 : 1;
    }
    animationFinished() {
        console.log('DEMO: Tab animation finished.');
    }
    focusChange(e) {
        console.log('DEMO: Tab focus changed ', e);
    }
    indexChange(e) {
        console.log('DEMO: Tab selected index changed: ', e);
    }
    tabChange(e) {
        console.log('DEMO: Selected tab changed: ', e);
    }
}


/***/ }),

/***/ "./src/app/components/tabs/tabs.module.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/components/tabs/tabs.module.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: TabsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModuleNgFactory", function() { return TabsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tabs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.module */ "./src/app/components/tabs/tabs.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component.ngfactory */ "./src/app/components/tabs/tabs.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/components/tabs/tabs-routing.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @terminus/ui-tabs */ "../../dist/libs/ui/tabs/fesm2015/terminus-ui-tabs.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tabs.component */ "./src/app/components/tabs/tabs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
























var TabsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _tabs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TabsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_9__["TabsRoutingModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_9__["TabsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_14__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_15__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_15__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_22__["TsTabsModule"], _terminus_ui_tabs__WEBPACK_IMPORTED_MODULE_22__["TsTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsModule"], _tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", component: _tabs_component__WEBPACK_IMPORTED_MODULE_23__["TabsComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/components/tabs/tabs.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/tabs/tabs.module.ts ***!
  \************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
class TabsModule {
}


/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-ngfactory-es2015.js.map