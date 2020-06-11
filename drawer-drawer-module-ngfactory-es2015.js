(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drawer-drawer-module-ngfactory"],{

/***/ "../../dist/libs/ui/drawer/fesm2015/terminus-ui-drawer.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/drawer/fesm2015/terminus-ui-drawer.js ***!
  \******************************************************************************************************/
/*! exports provided: TS_DRAWER_DEFAULT_COLLAPSE_SIZE, TS_DRAWER_DEFAULT_EXPAND_SIZE, TsDrawerComponent, TsDrawerContainerComponent, TsDrawerContentComponent, TsDrawerFooterComponent, TsDrawerHeaderComponent, TsDrawerModule, throwTsDuplicatedDrawerError, tsDrawerAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_DRAWER_DEFAULT_COLLAPSE_SIZE", function() { return TS_DRAWER_DEFAULT_COLLAPSE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_DRAWER_DEFAULT_EXPAND_SIZE", function() { return TS_DRAWER_DEFAULT_EXPAND_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerComponent", function() { return TsDrawerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerContainerComponent", function() { return TsDrawerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerContentComponent", function() { return TsDrawerContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerFooterComponent", function() { return TsDrawerFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerHeaderComponent", function() { return TsDrawerHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerModule", function() { return TsDrawerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwTsDuplicatedDrawerError", function() { return throwTsDuplicatedDrawerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsDrawerAnimations", function() { return tsDrawerAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ui-utilities */ "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
/* harmony import */ var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ngx-tools/keycodes */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
















let TsDrawerContentComponent = class TsDrawerContentComponent extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["CdkScrollable"] {
    constructor(elementRef, scrollDispatcher, ngZone) {
        super(elementRef, scrollDispatcher, ngZone);
        this.leftMargin = null;
        this.rightMargin = null;
    }
};
TsDrawerContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
TsDrawerContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-drawer-content',
        template: '<ng-content></ng-content>',
        host: { class: 'ts-drawer-content' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatcher"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]])
], TsDrawerContentComponent);

/**
 * Animations used by the {@link TsDrawerComponent}.
 */
const tsDrawerAnimations = {
    // Animation that expands and collapses a drawer.
    transformDrawer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transform', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            transform: 'none',
            visibility: 'visible',
            width: '{{ expandedSize }}',
        }), { params: { expandedSize: '12.5rem' } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            'box-shadow': 'none',
            'visibility': 'visible',
            'width': '{{ collapsedSize }}',
        }), { params: { collapsedSize: '3.75rem' } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void-shadow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            visibility: 'visible',
            width: '{{ collapsedSize }}',
        }), { params: { collapsedSize: '3.75rem' } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void <=> open, open-instant => void, void-shadow <=> open, open-instant => void-shadow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ]),
};

const TS_DRAWER_DEFAULT_COLLAPSE_SIZE = '3.75rem';
const TS_DRAWER_DEFAULT_EXPAND_SIZE = '12.5rem';
/**
 * This drawer component corresponds to a drawer that is nested inside a {@link TsDrawerContainerComponent}
 *
 * @example
 * <ts-drawer
 *              [collapsedSize]="collapsedSize"
 *              [expandedSize]="expandedSize"
 *              [hideShadowWhenCollapsed]="true"
 *              [isExpanded]="isExpanded"
 *              [mode]="mode"
 *              [position]="position"
 *              [role]="role"
 *              (expandedChange)="expandedChanged($event)"
 *              (expandedStart)="expandedStarted($event)"
 *              (collapsedStart)="collapsedStarted($event)"
 *              (positionChange)="positionChanged($event)"
 * ></ts-drawer>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/drawer</example-url>
 */
let TsDrawerComponent = class TsDrawerComponent {
    constructor(elementRef, platform, ngZone, renderer) {
        this.elementRef = elementRef;
        this.platform = platform;
        this.ngZone = ngZone;
        this.renderer = renderer;
        /**
         * Define animation state, defaults to void state
         */
        this.animationState = this.hideShadowWhenCollapsed ? 'void' : 'void-shadow';
        /**
         * Emits whenever the drawer has started animating.
         */
        this.animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Emits whenever the drawer is done animating.
         */
        this.animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Emits when the component is destroyed.
         */
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether the drawer is initialized. Used for disabling the initial animation.
         */
        this.enableAnimations = false;
        /**
         * An observable that emits when the drawer mode changes. This is used by the drawer container to
         * to know when the mode changes so it can adapt the margins on the content.
         */
        this.modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._collapsedSize = '3.75rem';
        this._expandedSize = '12.75rem';
        this._hideShadowWhenCollapsed = true;
        this._isExpanded = false;
        this._mode = 'overlay';
        this._position = 'start';
        /**
         * Define the aria role label, default to nothing
         */
        this.role = '';
        /**
         * Event emitted when the drawer open state is changed.
         *
         * NOTE: This has to be async in order to avoid some issues with two-way bindings - setting isAsync to true.
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        /**
         * Event emitted when the drawer's position changes.
         */
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Re-enter the zone only if the `ESC` key is pressed
         */
        this.ngZone.runOutsideAngular(() => {
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.elementRef.nativeElement, 'keydown')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(event => event.code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_13__["KEYS"].ESCAPE.code && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event)), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(event => this.ngZone.run(() => {
                this.collapse();
                event.stopPropagation();
                event.preventDefault();
            }));
        });
        // We need a Subject with distinctUntilChanged, because the `done` event fires twice on some browsers.
        this.animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])((x, y) => x.fromState === y.fromState && x.toState === y.toState), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe((event) => {
            const { fromState, toState } = event;
            if ((toState.indexOf('open') === 0 && (fromState === 'void' || fromState === 'void-shadow'))
                || (toState === 'void' && fromState.indexOf('open') === 0)
                || (toState === 'void-shadow' && fromState.indexOf('open') === 0)) {
                this.expandedChange.emit(this.isExpanded);
            }
        });
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.expandedSize);
    }
    /**
     * Collapsed drawer width
     *
     * @param value
     */
    set collapsedSize(value) {
        this._collapsedSize = Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["isUnset"])(value) ? TS_DRAWER_DEFAULT_COLLAPSE_SIZE : value;
    }
    get collapsedSize() {
        return this._collapsedSize;
    }
    /**
     * Expanded drawer width
     *
     * @param value
     */
    set expandedSize(value) {
        this._expandedSize = Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["isUnset"])(value) ? TS_DRAWER_DEFAULT_EXPAND_SIZE : value;
    }
    get expandedSize() {
        return this._expandedSize;
    }
    /**
     * Hide shadow when drawer is collapsed
     *
     * @param value
     */
    set hideShadowWhenCollapsed(value) {
        this._hideShadowWhenCollapsed = value;
    }
    get hideShadowWhenCollapsed() {
        return this._hideShadowWhenCollapsed;
    }
    /**
     * Define whether the drawer is open
     *
     * @param value
     */
    set isExpanded(value) {
        this.toggle(value);
    }
    get isExpanded() {
        return this._isExpanded;
    }
    /**
     * Mode of the drawer, overlay or push
     *
     * @param value
     */
    set mode(value) {
        this._mode = value;
        this.modeChanged.next();
    }
    get mode() {
        return this._mode;
    }
    /**
     * The side that the drawer is attached to.
     *
     * @param value
     */
    set position(value) {
        // Make sure we have a valid value.
        value = value === 'end' ? 'end' : 'start';
        if (value !== this._position) {
            this._position = value;
            this.positionChanged.emit();
        }
    }
    get position() {
        return this._position;
    }
    /**
     * Event emitted when the drawer has been expanded.
     */
    get expandedStream() {
        return this.expandedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(o => o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(() => { }));
    }
    /**
     * Event emitted when the drawer has started expanding.
     */
    get expandedStart() {
        return this.animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(e => e.fromState !== e.toState && e.toState.indexOf('open') === 0), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(() => { }));
    }
    /**
     * Event emitted when the drawer has been collapsed.
     */
    get collapsedStream() {
        return this.expandedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(o => !o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(() => { }));
    }
    /**
     * Event emitted when the drawer has started collapsing.
     */
    get collapsedStart() {
        return this.animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(e => e.fromState !== e.toState && e.toState === 'void'), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(() => { }));
    }
    /**
     * Enable the animations after the lifecycle hooks have run, in order to avoid animating drawers that are open by default.
     */
    ngAfterContentChecked() {
        if (this.platform.isBrowser) {
            this.enableAnimations = true;
        }
    }
    /**
     * Complete the observable on destroy
     */
    ngOnDestroy() {
        this.modeChanged.complete();
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * Expand the drawer.
     *
     * @returns Promise<TsDrawerToggleResult>
     */
    expand() {
        return this.toggle(true);
    }
    /**
     * Collapse the drawer.
     *
     * @returns Promise<TsDrawerToggleResult>
     */
    collapse() {
        return this.toggle(false);
    }
    /**
     * Toggle this drawer.
     *
     * @param isOpen - whether the drawer should be open.
     * @returns  Promise<TsDrawerToggleResult>
     */
    toggle(isOpen = !this.isExpanded) {
        this._isExpanded = isOpen;
        if (isOpen) {
            this.animationState = this.enableAnimations ? 'open' : 'open-instant';
        }
        else {
            this.animationState = this.hideShadowWhenCollapsed ? 'void' : 'void-shadow';
        }
        return new Promise(resolve => {
            this.expandedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(open => resolve(open ? 'open' : 'close'));
        });
    }
    /**
     * We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
     * In Ivy the `host` bindings will be merged when this class is extended, whereas in
     * ViewEngine they're overwritten.
     * TODO: we move this back into `host` once Ivy is turned on by default.
     *
     * @param event
     */
    animationStartListener(event) {
        this.animationStarted.next(event);
    }
    /**
     * We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
     * In Ivy the `host` bindings will be merged when this class is extended, whereas in
     * ViewEngine they're overwritten.
     * TODO: move this back into `host` once Ivy is turned on by default.
     *
     * @param event
     */
    animationDoneListener(event) {
        this.animationEnd.next(event);
    }
};
TsDrawerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsDrawerComponent.prototype, "collapsedSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsDrawerComponent.prototype, "expandedSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsDrawerComponent.prototype, "hideShadowWhenCollapsed", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsDrawerComponent.prototype, "isExpanded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsDrawerComponent.prototype, "mode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsDrawerComponent.prototype, "position", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsDrawerComponent.prototype, "role", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsDrawerComponent.prototype, "expandedChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])('isExpanded'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TsDrawerComponent.prototype, "expandedStream", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TsDrawerComponent.prototype, "expandedStart", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])('closed'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TsDrawerComponent.prototype, "collapsedStream", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TsDrawerComponent.prototype, "collapsedStart", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])('positionChanged'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsDrawerComponent.prototype, "positionChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('@transform.start', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TsDrawerComponent.prototype, "animationStartListener", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('@transform.done', ['$event']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TsDrawerComponent.prototype, "animationDoneListener", null);
TsDrawerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-drawer',
        template: "<ng-content select=\"ts-drawer-header\"></ng-content>\n<div class=\"ts-drawer__inner-container\">\n  <ng-content></ng-content>\n</div>\n<ng-content select=\"ts-drawer-footer\"></ng-content>\n",
        animations: [tsDrawerAnimations.transformDrawer],
        host: {
            'class': 'ts-drawer',
            // set align to null is to prevent the browser from aligning text based on value
            '[attr.align]': 'null',
            '[attr.role]': 'role',
            '[class.ts-drawer--end]': 'position === "end"',
            '[class.ts-drawer--overlay]': 'mode === "overlay"',
            '[class.ts-drawer--push]': 'mode === "push"',
            'tabIndex': '-1',
            '[@transform]': `{
        value: animationState,
        params: {
            collapsedSize: collapsedSize,
            expandedSize: expandedSize
        }
    }`,
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsDrawer',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]])
], TsDrawerComponent);

var TsDrawerContainerComponent_1;
/**
 * Throws an exception when two TsDrawer are matching the same position with same mode.
 *
 * @param position - drawer's position
 */
function throwTsDuplicatedDrawerError(position) {
    throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_10__["TsUILibraryError"](`TsDrawerContainer: Only one drawer can be in push mode on '"${position}" position'.`);
}
/**
 * This is used to convert margin measurement from rem to px.
 */
const MARGIN_SIZE_CONVERSION = 16;
/**
 * The drawer container UI Component
 *
 * @example
 * <ts-drawer-container
 *              [hasBackdrop]="hasBackdrop"
 *              (backdropClick)="backdropClicked($event)"
 * ></ts-drawer-container>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/drawer</example-url>
 */
let TsDrawerContainerComponent = TsDrawerContainerComponent_1 = class TsDrawerContainerComponent {
    constructor(element, ngZone, renderer, changeDetectorRef, animationMode) {
        this.element = element;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.animationMode = animationMode;
        /**
         * The drawer at the start/end position.
         */
        this.start = null;
        this.end = null;
        this.openDrawerCount = 0;
        /**
         * Emits on every ngDoCheck. Used for debouncing reflows.
         */
        this.doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Margins to be applied to the content. These are used to push / shrink the drawer content when a
         * drawer is open. We use margin rather than transform even for push mode because transform breaks
         * fixed position elements inside of the transformed element.
         */
        this.contentMargins = {
            left: null,
            right: null,
        };
        /**
         * Used to notify anyone that's listening to content margin changes.
         */
        this.contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether the drawer container should have a backdrop while one of the drawers is open.
         *
         * If set to `true`, the backdrop will be enabled for all contained drawers.
         */
        this.hasBackdrop = false;
        /**
         * Event emitted when the drawer backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * Whether the container is being pushed to the side by one of the drawers.
     */
    get isPushed() {
        return (TsDrawerContainerComponent_1.isDrawerOpen(this.start) && this.start.mode === 'push')
            || (TsDrawerContainerComponent_1.isDrawerOpen(this.end) && this.end.mode === 'push');
    }
    /**
     * Define whether backdrop is shown.
     */
    get isShowingBackdrop() {
        return (TsDrawerContainerComponent_1.isDrawerOpen(this.start) && this.hasBackdrop)
            || (TsDrawerContainerComponent_1.isDrawerOpen(this.end) && this.hasBackdrop);
    }
    /**
     * After drawer initiated, subscribe to drawer and content changes.
     */
    ngAfterContentInit() {
        const contentEle = this.content ? this.content.getElementRef().nativeElement : null;
        this.drawers.changes.pipe(
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(() => {
            this.validateDrawers();
            this.drawers.forEach((drawer) => {
                this.adjustDrawerOnChange(drawer);
                this.drawerPositionOnChange(drawer);
                this.drawerModeOnChange(drawer);
            });
            if (!this.drawers.length
                || TsDrawerContainerComponent_1.isDrawerOpen(this.start)
                || TsDrawerContainerComponent_1.isDrawerOpen(this.end)) {
                this.updateContentMargins();
            }
            this.changeDetectorRef.markForCheck();
        });
        // Arbitrary debounce time, less than a frame at 60fps
        this.doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(() => this.updateContentMargins());
        this.contentMarginChanges.subscribe(e => {
            if (this.content) {
                this.content.leftMargin = e.left;
                this.content.rightMargin = e.right;
                this.renderer.setStyle(contentEle, 'margin-left', e.left ? `${e.left.toString()}px` : 0);
                this.renderer.setStyle(contentEle, 'margin-right', e.right ? `${e.right.toString()}px` : 0);
                this.changeDetectorRef.markForCheck();
            }
        });
    }
    /**
     * Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
     */
    ngDoCheck() {
        if (this.isPushed) {
            this.ngZone.runOutsideAngular(() => this.doCheckSubject.next());
        }
    }
    /**
     * Complete the observable on destroy
     */
    ngOnDestroy() {
        this.contentMarginChanges.complete();
        this.doCheckSubject.complete();
    }
    /**
     * Calls `expand` of drawers
     */
    expand() {
        this.drawers.forEach(drawer => drawer.expand());
    }
    /**
     * Calls `collapse` of drawers
     */
    collapse() {
        this.drawers.forEach(drawer => drawer.collapse());
    }
    /**
     * Recalculates and updates the inline styles for the content.
     */
    updateContentMargins() {
        let left = 0;
        let right = 0;
        left = this.start ? this.marginCalculation(this.start, 'left', 0) : left;
        right = this.end ? this.marginCalculation(this.end, 'right', 0) : right;
        // If either `right` or `left` is zero, don't set a style to the element. This
        // allows users to specify a custom size via CSS class in SSR scenarios where the
        // measured widths will always be zero. Note that we reset to `null` here, rather
        // than below, in order to ensure that the types in the `if` below are consistent.
        left = left || null;
        right = right || null;
        if (left !== this.contentMargins.left || right !== this.contentMargins.right) {
            this.contentMargins = {
                left,
                right,
            };
            // Pull back into the NgZone since in some cases we could be outside.
            this.ngZone.run(() => this.contentMarginChanges.next(this.contentMargins));
        }
    }
    /**
     * For drawers in `overlay` mode, they don't affect the content.
     * For drawers in `push` mode they should shrink the content. We do this by adding to the
     * left margin (for left drawer) or right margin (for right the drawer).
     * If the content margin has already been set and there are more than 1 opening windows on the same size, do not update.
     *
     * @param drawer - drawer component,
     * @param side - left of right side where the drawer expands
     * @param margin - margin on that side of drawer
     * @returns - calculated margin on the specific side.
     */
    marginCalculation(drawer, side, margin) {
        let sideMargin;
        if (this.content) {
            sideMargin = side === 'left' ? this.content.leftMargin : this.content.rightMargin;
        }
        if (drawer && drawer.isExpanded) {
            if (drawer.mode === 'push') {
                const width = parseFloat(drawer.expandedSize.replace(/[^0-9.]/g, ''));
                const measurement = drawer.expandedSize.match(/[a-zA-Z]+/g) || '';
                const coefficient = measurement.includes('px') ? 1 : MARGIN_SIZE_CONVERSION;
                margin += width * coefficient;
            }
            else if (this.content && sideMargin && this.openDrawerCount <= 1) {
                margin = 0;
            }
            else if (this.content && sideMargin && this.openDrawerCount > 1) {
                margin = this.contentMargins[side] || 0;
            }
        }
        return margin;
    }
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     *
     * @param drawer - TsDrawerComponent
     */
    adjustDrawerOnChange(drawer) {
        drawer.animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(event => event.fromState !== event.toState), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.drawers.changes), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe(event => {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && this.animationMode !== 'NoopAnimations') {
                this.element.nativeElement.classList.add('ts-drawer-transition');
            }
            this.validateDrawers();
            this.updateContentMargins();
            this.changeDetectorRef.markForCheck();
        });
        drawer.expandedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.drawers.changes))
            .subscribe(() => {
            this.setContainerClass(drawer.isExpanded);
            this.validateDrawers();
        });
    }
    /**
     * Subscribes to drawer positionChanged event in order to re-validate drawers when the position changes.
     *
     * @param drawer - TsDrawerComponent
     */
    drawerPositionOnChange(drawer) {
        // NOTE: We need to wait for the microtask queue to be empty before validating,
        // since both drawers may be swapping positions at the same time.
        drawer.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.drawers.changes)).subscribe(() => {
            this.ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(() => {
                this.validateDrawers();
            });
        });
    }
    /**
     * Subscribes to changes in drawer mode so we can run change detection.
     *
     * @param drawer
     */
    drawerModeOnChange(drawer) {
        // istanbul ignore else
        if (drawer) {
            drawer.modeChanged
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.drawers.changes), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
                .subscribe(() => {
                this.validateDrawers();
                this.updateContentMargins();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Toggles the 'ts-drawer--expanded' class on the main 'ts-drawer-container' element.
     *
     * @param isAdd - whether drawer is expanding
     */
    setContainerClass(isAdd) {
        if (isAdd) {
            this.element.nativeElement.classList.add('ts-drawer-container--expanded');
        }
        else {
            this.element.nativeElement.classList.remove('ts-drawer-container--expanded');
        }
    }
    /**
     * Validate the state of the drawer children components.
     */
    validateDrawers() {
        this.start = this.end = null;
        this.openDrawerCount = 0;
        this.drawers.forEach(drawer => {
            this.openDrawerCount = this.openDrawerCount + (drawer.isExpanded ? 1 : 0);
            if (drawer.position === 'end' && drawer.isExpanded) {
                this.end = drawer;
            }
            else if (drawer.position === 'start' && drawer.isExpanded) {
                this.start = drawer;
            }
        });
        // Ensure that we have at most one start and one end drawer with push mode.
        const seen = new Set();
        const hasDuplicates = this.drawers.filter(d => d.mode === 'push').some(currentObject => seen.size === seen.add(currentObject.position).size);
        if (hasDuplicates) {
            throwTsDuplicatedDrawerError(seen.values().next().value);
        }
        this.changeDetectorRef.markForCheck();
    }
    /**
     * When backdrop is clicked, emit backdropClick event and collapse the drawer
     */
    onBackdropClicked() {
        this.backdropClick.emit();
        this.closeModalDrawer();
    }
    /**
     * Collapse all the drawers if hasBackdrop is true
     */
    closeModalDrawer() {
        // Close all open drawers where closing is not disabled.
        [this.start, this.end]
            .filter(drawer => drawer && this.hasBackdrop)
            .forEach(drawer => drawer && drawer.collapse());
    }
    /**
     * Whether drawer is currently expanded
     *
     * @param drawer
     * @returns boolean
     */
    static isDrawerOpen(drawer) {
        return drawer != null && drawer.isExpanded;
    }
};
TsDrawerContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"])(TsDrawerComponent),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"])
], TsDrawerContainerComponent.prototype, "drawers", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"])(TsDrawerContentComponent),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsDrawerContentComponent)
], TsDrawerContainerComponent.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsDrawerContainerComponent.prototype, "hasBackdrop", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsDrawerContainerComponent.prototype, "backdropClick", void 0);
TsDrawerContainerComponent = TsDrawerContainerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-drawer-container',
        template: "<div\n  class=\"ts-drawer__backdrop\"\n  (click)=\"onBackdropClicked()\"\n  *ngIf=\"hasBackdrop\"\n  [class.ts-drawer__backdrop--visible]=\"isShowingBackdrop\"\n></div>\n\n<ng-content select=\"ts-drawer\"></ng-content>\n\n<ng-content select=\"ts-drawer-content\">\n</ng-content>\n",
        host: {
            'class': 'ts-drawer-container',
            '[class.ts-drawer-container-explicit-backdrop]': 'hasBackdrop',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsDrawerContainer',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], String])
], TsDrawerContainerComponent);

/**
 * The footer component for the {@link TsDrawerComponent}
 *
 * @example
 * <ts-drawer-footer>
 *              My content.
 * </ts-drawer-footer>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/drawer</example-url>
 */
let TsDrawerFooterComponent = class TsDrawerFooterComponent {
};
TsDrawerFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-drawer-footer',
        template: "<ng-content></ng-content>\n",
        host: { class: 'ts-drawer-footer' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsDrawerFooter',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"]
    })
], TsDrawerFooterComponent);

/**
 * The header component for the {@link TsDrawerComponent}
 *
 * @example
 * <ts-drawer-header>
 *              My content.
 * </ts-drawer-header>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/drawer</example-url>
 */
let TsDrawerHeaderComponent = class TsDrawerHeaderComponent {
};
TsDrawerHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-drawer-header',
        template: "<ng-content></ng-content>\n",
        host: { class: 'ts-drawer-header' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsDrawerHeader',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"]
    })
], TsDrawerHeaderComponent);

let TsDrawerModule = class TsDrawerModule {
};
TsDrawerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"],
        ],
        declarations: [
            TsDrawerComponent,
            TsDrawerContainerComponent,
            TsDrawerContentComponent,
            TsDrawerFooterComponent,
            TsDrawerHeaderComponent,
        ],
        exports: [
            TsDrawerComponent,
            TsDrawerContainerComponent,
            TsDrawerContentComponent,
            TsDrawerFooterComponent,
            TsDrawerHeaderComponent,
        ],
    })
], TsDrawerModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-drawer.js.map


/***/ }),

/***/ "../../dist/libs/ui/drawer/terminus-ui-drawer.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/drawer/terminus-ui-drawer.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: TsDrawerModuleNgFactory, RenderType_TsDrawerComponent, View_TsDrawerComponent_0, View_TsDrawerComponent_Host_0, TsDrawerComponentNgFactory, RenderType_TsDrawerContainerComponent, View_TsDrawerContainerComponent_0, View_TsDrawerContainerComponent_Host_0, TsDrawerContainerComponentNgFactory, RenderType_TsDrawerContentComponent, View_TsDrawerContentComponent_0, View_TsDrawerContentComponent_Host_0, TsDrawerContentComponentNgFactory, RenderType_TsDrawerHeaderComponent, View_TsDrawerHeaderComponent_0, View_TsDrawerHeaderComponent_Host_0, TsDrawerHeaderComponentNgFactory, RenderType_TsDrawerFooterComponent, View_TsDrawerFooterComponent_0, View_TsDrawerFooterComponent_Host_0, TsDrawerFooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerModuleNgFactory", function() { return TsDrawerModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsDrawerComponent", function() { return RenderType_TsDrawerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerComponent_0", function() { return View_TsDrawerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerComponent_Host_0", function() { return View_TsDrawerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerComponentNgFactory", function() { return TsDrawerComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsDrawerContainerComponent", function() { return RenderType_TsDrawerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerContainerComponent_0", function() { return View_TsDrawerContainerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerContainerComponent_Host_0", function() { return View_TsDrawerContainerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerContainerComponentNgFactory", function() { return TsDrawerContainerComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsDrawerContentComponent", function() { return RenderType_TsDrawerContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerContentComponent_0", function() { return View_TsDrawerContentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerContentComponent_Host_0", function() { return View_TsDrawerContentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerContentComponentNgFactory", function() { return TsDrawerContentComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsDrawerHeaderComponent", function() { return RenderType_TsDrawerHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerHeaderComponent_0", function() { return View_TsDrawerHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerHeaderComponent_Host_0", function() { return View_TsDrawerHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerHeaderComponentNgFactory", function() { return TsDrawerHeaderComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsDrawerFooterComponent", function() { return RenderType_TsDrawerFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerFooterComponent_0", function() { return View_TsDrawerFooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsDrawerFooterComponent_Host_0", function() { return View_TsDrawerFooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsDrawerFooterComponentNgFactory", function() { return TsDrawerFooterComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-drawer */ "../../dist/libs/ui/drawer/fesm2015/terminus-ui-drawer.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 









var TsDrawerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerModule"], _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerModule"], [])]); });

var styles_TsDrawerComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"];
var RenderType_TsDrawerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsDrawerComponent, data: { "animation": [{ type: 7, name: "transform", definitions: [{ type: 0, name: "open, open-instant", styles: { type: 6, styles: { transform: "none", visibility: "visible", width: "{{ expandedSize }}" }, offset: null }, options: { params: { expandedSize: "12.5rem" } } }, { type: 0, name: "void", styles: { type: 6, styles: { "box-shadow": "none", visibility: "visible", width: "{{ collapsedSize }}" }, offset: null }, options: { params: { collapsedSize: "3.75rem" } } }, { type: 0, name: "void-shadow", styles: { type: 6, styles: { visibility: "visible", width: "{{ collapsedSize }}" }, offset: null }, options: { params: { collapsedSize: "3.75rem" } } }, { type: 1, expr: "void => open-instant", animation: { type: 4, styles: null, timings: "0ms" }, options: null }, { type: 1, expr: "void <=> open, open-instant => void, void-shadow <=> open, open-instant => void-shadow", animation: { type: 4, styles: null, timings: "400ms cubic-bezier(0.25, 0.8, 0.25, 1)" }, options: null }], options: {} }] } });

function View_TsDrawerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "div", [["class", "ts-drawer__inner-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], null, null); }
function View_TsDrawerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ts-drawer", [["class", "ts-drawer"], ["tabIndex", "-1"]], [[1, "align", 0], [1, "role", 0], [2, "ts-drawer--end", null], [2, "ts-drawer--overlay", null], [2, "ts-drawer--push", null], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).animationStartListener($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).animationDoneListener($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_TsDrawerComponent_0, RenderType_TsDrawerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2277376, null, 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { collapsedSize: 0, expandedSize: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { value: 0, params: 1 })], null, function (_ck, _v) { var currVal_0 = null; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).role; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).position === "end"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "overlay"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "push"); var currVal_5 = _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).animationState, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).collapsedSize, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).expandedSize)); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
var TsDrawerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-drawer", _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerComponent"], View_TsDrawerComponent_Host_0, { collapsedSize: "collapsedSize", expandedSize: "expandedSize", hideShadowWhenCollapsed: "hideShadowWhenCollapsed", isExpanded: "isExpanded", mode: "mode", position: "position", role: "role" }, { expandedChange: "expandedChange", expandedStream: "isExpanded", expandedStart: "expandedStart", collapsedStream: "closed", collapsedStart: "collapsedStart", positionChanged: "positionChanged" }, ["ts-drawer-header", "*", "ts-drawer-footer"]);

var styles_TsDrawerContainerComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"];
var RenderType_TsDrawerContainerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsDrawerContainerComponent, data: {} });

function View_TsDrawerContainerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "ts-drawer__backdrop"]], [[2, "ts-drawer__backdrop--visible", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onBackdropClicked() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isShowingBackdrop; _ck(_v, 0, 0, currVal_0); }); }
function View_TsDrawerContainerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsDrawerContainerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasBackdrop; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TsDrawerContainerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ts-drawer-container", [["class", "ts-drawer-container"]], [[2, "ts-drawer-container-explicit-backdrop", null]], null, null, View_TsDrawerContainerComponent_0, RenderType_TsDrawerContainerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1490944, null, 2, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerContainerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { content: 0 })], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).hasBackdrop; _ck(_v, 0, 0, currVal_0); }); }
var TsDrawerContainerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-drawer-container", _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerContainerComponent"], View_TsDrawerContainerComponent_Host_0, { hasBackdrop: "hasBackdrop" }, { backdropClick: "backdropClick" }, ["ts-drawer", "ts-drawer-content"]);

var styles_TsDrawerContentComponent = [];
var RenderType_TsDrawerContentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsDrawerContentComponent, data: {} });

function View_TsDrawerContentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsDrawerContentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-drawer-content", [["class", "ts-drawer-content"]], null, null, null, View_TsDrawerContentComponent_0, RenderType_TsDrawerContentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerContentComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TsDrawerContentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-drawer-content", _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerContentComponent"], View_TsDrawerContentComponent_Host_0, {}, {}, ["*"]);

var styles_TsDrawerHeaderComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"];
var RenderType_TsDrawerHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsDrawerHeaderComponent, data: {} });

function View_TsDrawerHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsDrawerHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-drawer-header", [["class", "ts-drawer-header"]], null, null, null, View_TsDrawerHeaderComponent_0, RenderType_TsDrawerHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerHeaderComponent"], [], null, null)], null, null); }
var TsDrawerHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-drawer-header", _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerHeaderComponent"], View_TsDrawerHeaderComponent_Host_0, {}, {}, ["*"]);

var styles_TsDrawerFooterComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-drawer-container{position:relative;z-index:1;box-sizing:border-box;display:block;-webkit-overflow-scrolling:touch}.ng-animate-disabled .ts-drawer-container .ts-drawer-content,.ng-animate-disabled .ts-drawer-container .ts-drawer__backdrop,.ts-drawer-container.ng-animate-disabled .ts-drawer-content,.ts-drawer-container.ng-animate-disabled .ts-drawer__backdrop{transition:none}.ts-drawer__backdrop{bottom:0;left:0;position:absolute;right:0;top:0;display:block;visibility:hidden;z-index:3}.ts-drawer__backdrop.ts-drawer__backdrop--visible{visibility:visible}.ts-drawer-transition .ts-drawer__backdrop{transition-duration:.4s;transition-property:background-color,visibility;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.ts-drawer-transition .ts-drawer-content{transition-duration:.4s;transition-property:transform,margin-left,margin-right;transition-timing-function:cubic-bezier(cubic-bezier(.25,.8,.25,1))}.ts-drawer__inner-container{flex:1 0 0;overflow-y:scroll}.ts-drawer{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background-color:#fafafa;bottom:0;box-sizing:border-box;display:flex;flex-direction:column;overflow-y:auto;position:absolute;top:0;z-index:3}.ts-drawer.ts-drawer--push{z-index:2}.ts-drawer.ts-drawer--end{right:0}.ts-drawer .ts-drawer-header{border-bottom:1px solid #cecdd1;display:block;max-width:inherit;overflow-wrap:break-word;top:0;width:inherit;z-index:5}.ts-drawer .ts-drawer-footer{border-top:1px solid #cecdd1;bottom:0;max-width:inherit;overflow-wrap:break-word;width:inherit;z-index:5}"];
var RenderType_TsDrawerFooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsDrawerFooterComponent, data: {} });

function View_TsDrawerFooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsDrawerFooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-drawer-footer", [["class", "ts-drawer-footer"]], null, null, null, View_TsDrawerFooterComponent_0, RenderType_TsDrawerFooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerFooterComponent"], [], null, null)], null, null); }
var TsDrawerFooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-drawer-footer", _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_1__["TsDrawerFooterComponent"], View_TsDrawerFooterComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./src/app/components/drawer/drawer-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/drawer/drawer-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DrawerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerRoutingModule", function() { return DrawerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.component */ "./src/app/components/drawer/drawer.component.ts");


const routes = [
    {
        path: '',
        component: _drawer_component__WEBPACK_IMPORTED_MODULE_1__["DrawerComponent"],
    },
];
class DrawerRoutingModule {
}


/***/ }),

/***/ "./src/app/components/drawer/drawer.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.ngfactory.js ***!
  \*****************************************************************/
/*! exports provided: RenderType_DrawerComponent, View_DrawerComponent_0, View_DrawerComponent_Host_0, DrawerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DrawerComponent", function() { return RenderType_DrawerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DrawerComponent_0", function() { return View_DrawerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DrawerComponent_Host_0", function() { return View_DrawerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponentNgFactory", function() { return DrawerComponentNgFactory; });
/* harmony import */ var _drawer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer.component.scss.shim.ngstyle */ "./src/app/components/drawer/drawer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/radio-group/terminus-ui-radio-group.ngfactory */ "../../dist/libs/ui/radio-group/terminus-ui-radio-group.ngfactory.js");
/* harmony import */ var _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @terminus/ui-radio-group */ "../../dist/libs/ui/radio-group/fesm2015/terminus-ui-radio-group.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/drawer/terminus-ui-drawer.ngfactory */ "../../dist/libs/ui/drawer/terminus-ui-drawer.ngfactory.js");
/* harmony import */ var _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ui-drawer */ "../../dist/libs/ui/drawer/fesm2015/terminus-ui-drawer.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/button/terminus-ui-button.ngfactory */ "../../dist/libs/ui/button/terminus-ui-button.ngfactory.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/expansion-panel/terminus-ui-expansion-panel.ngfactory */ "../../dist/libs/ui/expansion-panel/terminus-ui-expansion-panel.ngfactory.js");
/* harmony import */ var _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @terminus/ui-expansion-panel */ "../../dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./drawer.component */ "./src/app/components/drawer/drawer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




















var styles_DrawerComponent = [_drawer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DrawerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DrawerComponent, data: {} });

function View_DrawerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { drawerContainer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "ts-radio-group", [["class", "ts-radio-group"], ["label", "Position:"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsRadioGroupComponent_0"], _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsRadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 245760, null, 0, _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__["TsRadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]], { formControl: [0, "formControl"], formatUILabelFn: [1, "formatUILabelFn"], formatModelValueFn: [2, "formatModelValueFn"], label: [3, "label"], options: [4, "options"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__["TsRadioGroupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 85, "ts-drawer-container", [["class", "drawer-container ts-drawer-container"]], [[2, "ts-drawer-container-explicit-backdrop", null]], null, null, _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsDrawerContainerComponent_0"], _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsDrawerContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 1490944, [[1, 4], ["drawerContainer", 4]], 2, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__["TsDrawerContainerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { hasBackdrop: [0, "hasBackdrop"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 41, "ts-drawer", [["class", "first-drawer ts-drawer"], ["collapsedSize", "2rem"], ["expandedSize", "12rem"], ["tabIndex", "-1"]], [[1, "align", 0], [1, "role", 0], [2, "ts-drawer--end", null], [2, "ts-drawer--overlay", null], [2, "ts-drawer--push", null], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).animationStartListener($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).animationDoneListener($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsDrawerComponent_0"], _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsDrawerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 2277376, [[2, 4], ["drawer", 4]], 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__["TsDrawerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { collapsedSize: [0, "collapsedSize"], expandedSize: [1, "expandedSize"], hideShadowWhenCollapsed: [2, "hideShadowWhenCollapsed"], isExpanded: [3, "isExpanded"], mode: [4, "mode"], position: [5, "position"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](15, { collapsedSize: 0, expandedSize: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, { value: 0, params: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 3, "ts-drawer-header", [["class", "ts-drawer-header"]], null, null, null, _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsDrawerHeaderComponent_0"], _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsDrawerHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__["TsDrawerHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["HEADER"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 13, "div", [["class", "drawer-content"], ["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "p", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "ts-button", [["class", "ts-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_12__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_13__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["First Drawer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "ts-radio-group", [["class", "radio ts-radio-group"], ["label", "Mode:"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsRadioGroupComponent_0"], _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsRadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 245760, null, 0, _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__["TsRadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]], { formControl: [0, "formControl"], formatUILabelFn: [1, "formatUILabelFn"], formatModelValueFn: [2, "formatModelValueFn"], label: [3, "label"], options: [4, "options"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__["TsRadioGroupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 1, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 16777216, null, null, 14, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsExpansionPanelComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsExpansionPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_13__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TS_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 4, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsExpansionPanelTriggerComponent_0"], _dist_libs_ui_expansion_panel_terminus_ui_expansion_panel_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsExpansionPanelTriggerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_15__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](42, { collapsedHeight: 0, expandedHeight: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](43, { value: 0, params: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, [" Collapse and Expand! "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" And here is my standard panel content. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 1, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Consequatur fugiat eius placeat tenetur consectetur labore. Laborum architecto animi. Inventore quod unde ea quae doloribus maxime. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 2, 3, "ts-drawer-footer", [["class", "ts-drawer-footer"]], null, null, null, _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsDrawerFooterComponent_0"], _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsDrawerFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 49152, null, 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__["TsDrawerFooterComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 0, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["THIS IS MY FOOTER"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, 0, 17, "ts-drawer", [["class", "second-drawer ts-drawer"], ["collapsedSize", "0rem"], ["tabIndex", "-1"]], [[1, "align", 0], [1, "role", 0], [2, "ts-drawer--end", null], [2, "ts-drawer--overlay", null], [2, "ts-drawer--push", null], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).animationStartListener($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).animationDoneListener($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsDrawerComponent_0"], _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsDrawerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 2277376, [[2, 4], ["drawer2", 4]], 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__["TsDrawerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { collapsedSize: [0, "collapsedSize"], mode: [1, "mode"], position: [2, "position"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](57, { collapsedSize: 0, expandedSize: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](58, { value: 0, params: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 1, 13, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "p", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 2, "ts-button", [["class", "ts-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_12__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_13__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Second Drawer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 5, "ts-radio-group", [["class", "ts-radio-group"], ["label", "Mode2:"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsRadioGroupComponent_0"], _dist_libs_ui_radio_group_terminus_ui_radio_group_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsRadioGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 245760, null, 0, _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__["TsRadioGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]], { formControl: [0, "formControl"], formatUILabelFn: [1, "formatUILabelFn"], formatModelValueFn: [2, "formatModelValueFn"], label: [3, "label"], options: [4, "options"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_4__["TsRadioGroupComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_p"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, 1, 21, "ts-drawer-content", [["class", "ts-drawer-content"]], null, null, null, _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsDrawerContentComponent_0"], _dist_libs_ui_drawer_terminus_ui_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsDrawerContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 245760, [[3, 4]], 0, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_8__["TsDrawerContentComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, 0, 19, "div", [["style", "margin: 0px 100px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 4, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "ts-button", [["class", "ts-button"]], null, [[null, "clicked"]], function (_v, en, $event) { var ad = true; if (("clicked" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_12__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_13__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { isDisabled: [0, "isDisabled"], theme: [1, "theme"] }, { clicked: "clicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Toggle first drawer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 4, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 2, "ts-button", [["class", "ts-button"]], null, [[null, "clicked"]], function (_v, en, $event) { var ad = true; if (("clicked" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_TsButtonComponent_0"], _dist_libs_ui_button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_12__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_13__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { isDisabled: [0, "isDisabled"], theme: [1, "theme"] }, { clicked: "clicked" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Toggle 2nd drawer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 2, "div", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_2__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" This is the drawer content... The #1 software development tool used by agile teams. Visual regression testing is the ability to cross-reference snapshots of a product, highlighting pixel differences \u2014 returning fast feedback on the current state of the screen. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 0, "img", [["src", "https://via.placeholder.com/502x250?text=Visit+New+Site+Now"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 3, "div", [["fxlayout", "row wrap"], ["style", "flex-flow: row wrap; box-sizing: border-box; display: flex;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 0, "img", [["src", "https://via.placeholder.com/250x300?text=View Side by Side"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0\u00A0\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 0, "img", [["src", "https://via.placeholder.com/240x300?text=This is 240x300 size"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ""; _ck(_v, 2, 0, currVal_0); var currVal_8 = _co.positionControl; var currVal_9 = _co.uiFormatter; var currVal_10 = _co.modelFormatter; var currVal_11 = "Position:"; var currVal_12 = _co.positions; _ck(_v, 4, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.positionControl; _ck(_v, 6, 0, currVal_13); var currVal_15 = false; _ck(_v, 10, 0, currVal_15); var currVal_22 = "2rem"; var currVal_23 = "12rem"; var currVal_24 = false; var currVal_25 = false; var currVal_26 = _co.modeControl.value; var currVal_27 = _co.positionControl.value; _ck(_v, 14, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_28 = ""; _ck(_v, 22, 0, currVal_28); var currVal_29 = ""; _ck(_v, 24, 0, currVal_29); _ck(_v, 26, 0); var currVal_37 = _co.modeControl; var currVal_38 = _co.uiFormatter; var currVal_39 = _co.modelFormatter; var currVal_40 = "Mode:"; var currVal_41 = _co.items; _ck(_v, 30, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_42 = _co.modeControl; _ck(_v, 32, 0, currVal_42); var currVal_60 = "0rem"; var currVal_61 = _co.mode2Control.value; var currVal_62 = _co.position2Control.value; _ck(_v, 56, 0, currVal_60, currVal_61, currVal_62); var currVal_63 = ""; _ck(_v, 60, 0, currVal_63); var currVal_64 = ""; _ck(_v, 62, 0, currVal_64); _ck(_v, 64, 0); var currVal_72 = _co.mode2Control; var currVal_73 = _co.uiFormatter; var currVal_74 = _co.modelFormatter; var currVal_75 = "Mode2:"; var currVal_76 = _co.items; _ck(_v, 68, 0, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76); var currVal_77 = _co.mode2Control; _ck(_v, 70, 0, currVal_77); _ck(_v, 74, 0); var currVal_78 = ""; _ck(_v, 77, 0, currVal_78); var currVal_79 = false; var currVal_80 = _co.theme; _ck(_v, 79, 0, currVal_79, currVal_80); var currVal_81 = ""; _ck(_v, 82, 0, currVal_81); var currVal_82 = false; var currVal_83 = _co.theme; _ck(_v, 84, 0, currVal_82, currVal_83); var currVal_84 = ""; _ck(_v, 87, 0, currVal_84); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).hasBackdrop; _ck(_v, 9, 0, currVal_14); var currVal_16 = null; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).role; var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).position === "end"); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).mode === "overlay"); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).mode === "push"); var currVal_21 = _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).animationState, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).collapsedSize, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).expandedSize)); _ck(_v, 13, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassUntouched; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassTouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPristine; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassDirty; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassValid; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassInvalid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_43 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).transparentMode; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).expanded; var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).animationMode === "NoopAnimations"); _ck(_v, 36, 0, currVal_43, currVal_44, currVal_45); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).panel.triggerId; var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled ? (0 - 1) : 0); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).panel.id; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).isExpanded; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).panel.disabled; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).isExpanded; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).isTransparent; var currVal_53 = _ck(_v, 43, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).currentPanelExpandedState, _ck(_v, 42, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).expandedHeight)); _ck(_v, 40, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53); var currVal_54 = null; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).role; var currVal_56 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).position === "end"); var currVal_57 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).mode === "overlay"); var currVal_58 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).mode === "push"); var currVal_59 = _ck(_v, 58, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).animationState, _ck(_v, 57, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).collapsedSize, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).expandedSize)); _ck(_v, 55, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassUntouched; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassTouched; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassPristine; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassDirty; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassValid; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassInvalid; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).ngClassPending; _ck(_v, 67, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71); }); }
function View_DrawerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "demo-drawer", [], null, null, null, View_DrawerComponent_0, RenderType_DrawerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _drawer_component__WEBPACK_IMPORTED_MODULE_19__["DrawerComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null)], null, null); }
var DrawerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("demo-drawer", _drawer_component__WEBPACK_IMPORTED_MODULE_19__["DrawerComponent"], View_DrawerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/drawer/drawer.component.scss.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.scss.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".drawer-container[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 25%;\n}\n\n.drawer-card[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n\n.first-drawer[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rlcm1pbnVzLW9zcy90ZXJtaW51cy1vc3MvYXBwcy9zaG93Y2FzZS11aS9zcmMvYXBwL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsImFwcHMvc2hvd2Nhc2UtdWkvc3JjL2FwcC9jb21wb25lbnRzL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtBQ0NWOztBRENBO0VBQ0UsaUJBQWlCO0FDRW5COztBREFBO0VBRUksa0JBQWtCO0FDRXRCIiwiZmlsZSI6ImFwcHMvc2hvd2Nhc2UtdWkvc3JjL2FwcC9jb21wb25lbnRzL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAyNSU7XG59XG4uZHJhd2VyLWNhcmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cbi5maXJzdC1kcmF3ZXIge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4iLCIuZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAyNSU7XG59XG5cbi5kcmF3ZXItY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xufVxuXG4uZmlyc3QtZHJhd2VyIC5jb250ZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/components/drawer/drawer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/drawer/drawer.component.ts ***!
  \*******************************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @terminus/ui-drawer */ "../../dist/libs/ui/drawer/fesm2015/terminus-ui-drawer.js");



class DrawerComponent {
    constructor(formBuilder, zone) {
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.myForm = this.formBuilder.group({
            isSmall: false,
            isCentered: true,
            myRadioGroup: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
            ],
            myRadioGroup2: [
                'bar2_value',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
            ],
        });
        this.modeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('push');
        this.mode2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('overlay');
        this.items = [{
                display: 'Overlay the Content',
                value: 'overlay',
            }, {
                display: 'Push Over the Content',
                value: 'push',
            }];
        this.positionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('start');
        this.position2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('end');
        this.positions = [{
                display: 'First drawer opens on the left',
                value: 'start',
            }, {
                display: 'First drawer opens on the right',
                value: 'end',
            }];
        this.uiFormatter = v => v.display;
        this.modelFormatter = v => v.value;
        this.theme = 'warn';
        this.position = 'end';
    }
}


/***/ }),

/***/ "./src/app/components/drawer/drawer.module.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/components/drawer/drawer.module.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: DrawerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerModuleNgFactory", function() { return DrawerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _drawer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.module */ "./src/app/components/drawer/drawer.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _drawer_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawer.component.ngfactory */ "./src/app/components/drawer/drawer.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @terminus/ui-pipes */ "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
/* harmony import */ var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ui-validation-messages */ "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drawer_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drawer-routing.module */ "./src/app/components/drawer/drawer-routing.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @terminus/ui-card */ "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @terminus/ui-radio-group */ "../../dist/libs/ui/radio-group/fesm2015/terminus-ui-radio-group.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @terminus/ui-drawer */ "../../dist/libs/ui/drawer/fesm2015/terminus-ui-drawer.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/accordion */ "../../node_modules/@angular/cdk/fesm2015/accordion.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @terminus/ui-expansion-panel */ "../../dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js");
/* harmony import */ var _drawer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./drawer.component */ "./src/app/components/drawer/drawer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



































var DrawerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_drawer_module__WEBPACK_IMPORTED_MODULE_1__["DrawerModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _drawer_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DrawerComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_8__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_8__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_9__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _drawer_routing_module__WEBPACK_IMPORTED_MODULE_11__["DrawerRoutingModule"], _drawer_routing_module__WEBPACK_IMPORTED_MODULE_11__["DrawerRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_17__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_18__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_18__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_7__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_8__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_8__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_24__["TsRadioGroupModule"], _terminus_ui_radio_group__WEBPACK_IMPORTED_MODULE_24__["TsRadioGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_27__["TsDrawerModule"], _terminus_ui_drawer__WEBPACK_IMPORTED_MODULE_27__["TsDrawerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_30__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_30__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_31__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_31__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["TsExpansionPanelModule"], _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["TsExpansionPanelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _drawer_module__WEBPACK_IMPORTED_MODULE_1__["DrawerModule"], _drawer_module__WEBPACK_IMPORTED_MODULE_1__["DrawerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () { return [[{ path: "", component: _drawer_component__WEBPACK_IMPORTED_MODULE_34__["DrawerComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/components/drawer/drawer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/drawer/drawer.module.ts ***!
  \****************************************************/
/*! exports provided: DrawerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerModule", function() { return DrawerModule; });
class DrawerModule {
}


/***/ })

}]);
//# sourceMappingURL=drawer-drawer-module-ngfactory-es2015.js.map