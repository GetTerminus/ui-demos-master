(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~drawer-drawer-module-ngfactory~expansion-panel-expansion-panel-module-ngfactory"],{

/***/ "../../dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js ***!
  \************************************************************************************************************************/
/*! exports provided: TS_ACCORDION, TS_EXPANSION_PANEL_ANIMATION_TIMING, TS_EXPANSION_PANEL_DEFAULT_OPTIONS, TsAccordionComponent, TsExpansionPanelActionRowComponent, TsExpansionPanelComponent, TsExpansionPanelContentDirective, TsExpansionPanelModule, TsExpansionPanelTriggerComponent, TsExpansionPanelTriggerDescriptionComponent, TsExpansionPanelTriggerTitleComponent, tsExpansionPanelAnimations, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ACCORDION", function() { return TS_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_EXPANSION_PANEL_ANIMATION_TIMING", function() { return TS_EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return TS_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsAccordionComponent", function() { return TsAccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelActionRowComponent", function() { return TsExpansionPanelActionRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelComponent", function() { return TsExpansionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelContentDirective", function() { return TsExpansionPanelContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelModule", function() { return TsExpansionPanelModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelTriggerComponent", function() { return TsExpansionPanelTriggerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelTriggerDescriptionComponent", function() { return TsExpansionPanelTriggerDescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelTriggerTitleComponent", function() { return TsExpansionPanelTriggerTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsExpansionPanelAnimations", function() { return tsExpansionPanelAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/accordion */ "../../node_modules/@angular/cdk/fesm2015/accordion.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @terminus/ngx-tools/keycodes */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
















/**
 * Time and timing curve for expansion panel animation
 */
const TS_EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead to a situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 */
const tsExpansionPanelAnimations = {
    /**
     * Animation that rotates the indicator arrow
     */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(TS_EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /**
     * Animation that expands and collapses the panel trigger height
     */
    expansionTriggerHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('expansionHeight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '{{collapsedHeight}}' }), { params: { collapsedHeight: '48px' } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '{{expandedHeight}}' }), { params: { expandedHeight: '64px' } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(TS_EXPANSION_PANEL_ANIMATION_TIMING),
        ])),
    ]),
    /**
     * Animation that expands and collapses the panel content
     */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
            height: '0px',
            visibility: 'hidden',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
            height: '*',
            visibility: 'visible',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])(TS_EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
};

/**
 * Token used to provide a {@link TsAccordionComponent} to {@link TsExpansionPanelComponent}.
 *
 * Used primarily to avoid circular imports between `TsAccordionComponent` and `TsExpansionPanelComponent`.
 */
const TS_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('TS_ACCORDION');

/**
 * {@link TsExpansionPanelComponent} content that will be rendered lazily when the panel is opened for the first time.
 *
 * @example
 * <ts-expansion-panel>
 *               <ts-expansion-panel-trigger>
 *                 Panel trigger
 *               </ts-expansion-panel-trigger>
 *
 *               <ng-template tsExpansionPanelContent>
 *                 Panel content
 *               </ng-template>
 * </ts-expansion-panel>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/expansion-panel</example-url>
 */
// eslint-disable-next-line @angular-eslint/directive-selector
let TsExpansionPanelContentDirective = class TsExpansionPanelContentDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(template) {
        this.template = template;
    }
};
TsExpansionPanelContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
];
TsExpansionPanelContentDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"])({ selector: 'ng-template[tsExpansionPanelContent]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]])
], TsExpansionPanelContentDirective);

/**
 * Injection token that can be used to configure the defalt options for the expansion panel component.
 */
const TS_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('TS_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * Unique ID for each panel trigger ID
 */
let nextUniqueId = 0;
const ɵ0 = undefined;
/**
 * An expansion panel component to show/hide content
 *
 * @example
 * <ts-expansion-panel
 *               [hideToggle]="true"
 *               [isExpanded]="true"
 *               [isDisabled]="true"
 *               [transparentMode]="false"
 *               (opened)="panelOpened()"
 *               (closed)="panelClosed()"
 *               (expandedChange)="panelStateChanged($event)"
 *               (destroyed)="componentDestroyed()"
 *               (afterCollapse)="collapseAnimationDone"
 *               (afterExpand)="expandAnimationDone()"
 * >
 *               <ts-expansion-panel-trigger>
 *                 Panel trigger
 *               </ts-expansion-panel-trigger>
 *
 *               Panel content
 * </ts-expansion-panel>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/expansion-panel</example-url>
 */
let TsExpansionPanelComponent = class TsExpansionPanelComponent extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__["CdkAccordionItem"] {
    constructor(_changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, documentService, accordion, animationMode, defaultOptions) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._uniqueSelectionDispatcher = _uniqueSelectionDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this.documentService = documentService;
        this.animationMode = animationMode;
        /**
         * Stream of body animation done events
         */
        this.bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * The ID for the associated trigger element. Used for a11y labelling.
         */
        this.triggerId = `ts-expansion-panel-trigger-${nextUniqueId++}`;
        /**
         * Stream that emits for changes in `@Input` properties
         */
        this.inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._hideToggle = false;
        this._transparentMode = false;
        /**
         * The event emitted after the panel body's expansion animation finishes
         */
        this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * The event emitted after the panel body's collapse animation finishes
         */
        this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.accordion = accordion;
        // We need a Subject with distinctUntilChanged, because the `done` event fires twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        this.bodyAnimationDone.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_10__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])((x, y) => x.fromState === y.fromState && x.toState === y.toState)).subscribe(event => {
            // istanbul ignore else
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        });
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /**
     * Get the current expanded state
     */
    get currentExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * Determine whether the expansion panel's content contains the currently-focused element
     */
    get contentContainsFocus() {
        if (this.panelBody && this.documentService.document) {
            const focusedElement = this.documentService.document.activeElement;
            const bodyElement = this.panelBody.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
    /**
     * Determine if the toggle indicator should be hidden
     *
     * @param value
     */
    set hideToggle(value) {
        this._hideToggle = value;
    }
    get hideToggle() {
        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
    }
    /**
     * Define if the panel should be disabled
     *
     * NOTE: CdkAccordionItem defines an input called `disabled`.
     * This alias is to conform to our existing naming convention.
     *
     * @param value
     */
    set isDisabled(value) {
        this.disabled = value;
    }
    get isDisabled() {
        return this.disabled;
    }
    /**
     * Define if the panel should be open
     *
     * NOTE: CdkAccordionItem defines an input called `expanded`.
     * This alias is to conform to our existing naming convention.
     *
     * @param value
     */
    set isExpanded(value) {
        this.expanded = value;
    }
    get isExpanded() {
        return this.expanded;
    }
    /**
     * Support for transparent mode. Default set to false
     *
     * @param value
     */
    set transparentMode(value) {
        this._transparentMode = value;
    }
    get transparentMode() {
        return this._transparentMode;
    }
    /**
     * If a lazy-loaded template exists, inject it after the panel is opened
     */
    ngAfterContentInit() {
        // istanbul ignore else
        if (this.lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(() => this.expanded && !this.portal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(() => {
                this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this.lazyContent.template, this._viewContainerRef);
            });
        }
    }
    /**
     * Send any input changes through the Subject stream
     *
     * @param changes
     */
    ngOnChanges(changes) {
        this.inputChanges.next(changes);
    }
    /**
     * Destroy the parent and finalize any subscriptions
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputChanges.complete();
    }
};
TsExpansionPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_14__["TsDocumentService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [TS_ACCORDION,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [TS_EXPANSION_PANEL_DEFAULT_OPTIONS,] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"])(TsExpansionPanelContentDirective),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsExpansionPanelContentDirective)
], TsExpansionPanelComponent.prototype, "lazyContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('panelBody', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])
], TsExpansionPanelComponent.prototype, "panelBody", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsExpansionPanelComponent.prototype, "hideToggle", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsExpansionPanelComponent.prototype, "isDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsExpansionPanelComponent.prototype, "isExpanded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsExpansionPanelComponent.prototype, "transparentMode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])
], TsExpansionPanelComponent.prototype, "afterExpand", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])
], TsExpansionPanelComponent.prototype, "afterCollapse", void 0);
TsExpansionPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-expansion-panel',
        template: "<ng-content select=\"ts-expansion-panel-trigger\"></ng-content>\n\n<div\n  class=\"ts-expansion-panel__content\"\n  role=\"region\"\n  [@bodyExpansion]=\"currentExpandedState\"\n  (@bodyExpansion.done)=\"bodyAnimationDone.next($event)\"\n  [attr.aria-labelledby]=\"triggerId\"\n  [attr.aria-hidden]=\"!expanded\"\n  [id]=\"id\"\n  #panelBody\n>\n  <div class=\"ts-expansion-panel__body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"portal\"></ng-template>\n  </div>\n\n  <ng-content select=\"ts-expansion-panel-action-row\"></ng-content>\n</div>\n",
        // NOTE: @Outputs are defined here rather than using decorators since we are extending the @Outputs of the base class
        // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
        outputs: [
            'opened',
            'closed',
            'expandedChange',
            'destroyed',
        ],
        animations: [tsExpansionPanelAnimations.bodyExpansion],
        host: {
            'class': 'ts-expansion-panel',
            '[class.ts-expansion-panel--shadow]': '!transparentMode',
            '[class.ts-expansion-panel--expanded]': 'expanded',
            '[class.ts-expansion-panel--animation-noopable]': 'animationMode === "NoopAnimations"',
        },
        providers: [
            // Provide TsAccordionComponent as undefined to prevent nested expansion panels from registering to the same accordion.
            {
                provide: TS_ACCORDION,
                useValue: ɵ0,
            },
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsExpansionPanel',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-expansion-panel{background:#fafafa;border-radius:4px;box-sizing:content-box;color:#302d35;display:block;margin:0;overflow:hidden}@media screen and (-ms-high-contrast:active){.ts-expansion-panel{outline:solid 1px}}.ts-expansion-panel.ts-expansion-panel--shadow{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.ts-accordion .ts-expansion-panel{border-radius:0}.ts-accordion .ts-expansion-panel:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px}.ts-accordion .ts-expansion-panel:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.ng-animate-disabled .ts-expansion-panel,.ts-expansion-panel.ng-animate-disabled,.ts-expansion-panel.ts-expansion-panel--animation-noopable{transition:none}.ts-expansion-panel .ts-expansion-panel__body{padding:0}.ts-expansion-panel--shadow .ts-expansion-panel__body{padding:0 24px 16px}.ts-expansion-panel__content{display:flex;flex-direction:column;overflow:visible}.ts-expansion-panel__action-row{border-top:1px solid #cecdd1;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.ts-expansion-panel__action-row .ts-button{margin-left:8px}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(TS_ACCORDION)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(TS_EXPANSION_PANEL_DEFAULT_OPTIONS)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"],
        _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["UniqueSelectionDispatcher"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"],
        _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_14__["TsDocumentService"], Object, String, Object])
], TsExpansionPanelComponent);

/**
 * Trigger to open/close a {@link TsExpansionPanelComponent}
 *
 * @example
 * <ts-expansion-panel>
 *               <ts-expansion-panel-trigger
 *                 collapsedHeight="100px"
 *                 expandedHeight="150px"
 *               >
 *                 Panel trigger
 *               </ts-expansion-panel-trigger>
 *
 *               Panel content
 * </ts-expansion-panel>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/expansion-panel</example-url>
 */
let TsExpansionPanelTriggerComponent = class TsExpansionPanelTriggerComponent {
    constructor(panel, elementRef, focusMonitor, changeDetectorRef, defaultOptions) {
        this.panel = panel;
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.changeDetectorRef = changeDetectorRef;
        const accordionHideToggleChange = panel.accordion
            // NOTE: Underscore naming controlled by Material
            // eslint-disable-next-line no-underscore-dangle
            ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(changes => !!changes.hideToggle))
            : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        // Since the toggle state depends on an @Input on the panel, we need to subscribe and trigger change detection manually.
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel.inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(changes => !!(changes.hideToggle || changes.disabled)))).pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_10__["untilComponentDestroyed"])(this))
            .subscribe(() => this.changeDetectorRef.markForCheck());
        // Avoid focus being lost if the panel contained the focused element and was closed.
        panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(() => panel.contentContainsFocus), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_10__["untilComponentDestroyed"])(this)).subscribe(() => focusMonitor.focusVia(elementRef, 'program'));
        // Subscribe to trigger focus events
        focusMonitor.monitor(elementRef).subscribe(origin => {
            if (origin && panel.accordion) {
                panel.accordion.handleTriggerFocus(this);
            }
        });
        // Set the default options if they exist
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * Determine the current expanded state string of the panel
     */
    get currentPanelExpandedState() {
        return this.panel.currentExpandedState;
    }
    /**
     * Determine if the panel is currently expanded
     */
    get isExpanded() {
        return this.panel.expanded;
    }
    /**
     * Determine if current mode is transparent
     */
    get isTransparent() {
        return this.panel.transparentMode;
    }
    /**
     * Whether the associated panel is disabled.
     *
     * Implemented as a part of `FocusableOption`.
     */
    get disabled() {
        return this.panel.disabled;
    }
    /** Gets whether the expand indicator should be shown. */
    get shouldShowToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Stop monitoring focus events
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    /**
     * Focuses the panel trigger.
     *
     * Implemented as a part of `FocusableOption`.
     *
     * @param origin - Origin of the action that triggered the focus.
     */
    focus(origin = 'program') {
        this.focusMonitor.focusVia(this.elementRef, origin);
    }
    /**
     * Toggle the expanded state of the panel
     */
    toggle() {
        this.panel.toggle();
    }
    /**
     * Handle keydown event calling to toggle() if appropriate
     *
     * @param event
     */
    keydown(event) {
        const { code } = event;
        const isSelectionKey = (code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_6__["KEYS"].SPACE.code) || (code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_6__["KEYS"].ENTER.code);
        if (isSelectionKey) {
            // istanbul ignore else
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event)) {
                event.preventDefault();
                this.toggle();
            }
        }
        else if (this.panel.accordion) {
            this.panel.accordion.handleTriggerKeydown(event);
        }
    }
};
TsExpansionPanelTriggerComponent.ctorParameters = () => [
    { type: TsExpansionPanelComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [TS_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsExpansionPanelTriggerComponent.prototype, "collapsedHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsExpansionPanelTriggerComponent.prototype, "expandedHeight", void 0);
TsExpansionPanelTriggerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        animations: [
            tsExpansionPanelAnimations.indicatorRotate,
            tsExpansionPanelAnimations.expansionTriggerHeight,
        ],
        selector: 'ts-expansion-panel-trigger',
        template: "<span\n  class=\"ts-expansion-panel__trigger-content\"\n  role=\"button\"\n>\n  <ng-content select=\"ts-expansion-panel-trigger-title\"></ng-content>\n  <ng-content select=\"ts-expansion-panel-trigger-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n<span\n  class=\"ts-expansion-panel__indicator\"\n  [@indicatorRotate]=\"currentPanelExpandedState\"\n  *ngIf=\"shouldShowToggle\"\n></span>\n",
        host: {
            'class': 'ts-expansion-panel__trigger',
            'role': 'button',
            '[attr.id]': 'panel.triggerId',
            '[attr.tabindex]': 'disabled ? -1 : 0',
            '[attr.aria-controls]': 'panel.id',
            '[attr.aria-expanded]': 'isExpanded',
            '[attr.aria-disabled]': 'panel.disabled',
            '[class.ts-expansion-panel__trigger--expanded]': 'isExpanded',
            '[class.ts-expansion-panel__trigger--transparent]': 'isTransparent',
            '(click)': 'toggle()',
            '(keydown)': 'keydown($event)',
            '[@expansionHeight]': `{
      value: currentPanelExpandedState,
      params: {
        collapsedHeight: collapsedHeight,
        expandedHeight: expandedHeight
      }
    }`,
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsExpansionPanelTrigger',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-expansion-panel__trigger{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;align-items:center;border-radius:inherit;display:flex;flex-direction:row;padding:0 24px}.ts-expansion-panel__trigger:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-expansion-panel__trigger.ts-expansion-panel__trigger--transparent{padding:0}.ts-expansion-panel__trigger:focus,.ts-expansion-panel__trigger:hover{outline:0}.ts-expansion-panel__trigger.ts-expansion-panel__trigger--expanded:focus,.ts-expansion-panel__trigger.ts-expansion-panel__trigger--expanded:hover{background:inherit}.ts-expansion-panel__trigger[aria-disabled=true]{color:#cecdd1}.ts-expansion-panel__trigger[aria-disabled=true] .ts-expansion-panel__trigger-description,.ts-expansion-panel__trigger[aria-disabled=true] .ts-expansion-panel__trigger-title{color:inherit}.ts-expansion-panel__trigger:not([aria-disabled=true]){cursor:pointer}@media (hover:none){.ts-expansion-panel:not(.ts-expansion-panel--expanded):not([aria-disabled=true]) .ts-expansion-panel__trigger:hover{background:#fafafa}}.ts-expansion-panel__trigger-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.ts-expansion-panel__trigger-description,.ts-expansion-panel__trigger-title{display:flex;flex-grow:0;margin-right:32px}.ts-expansion-panel__trigger-description{color:#757575;flex-grow:2}.ts-expansion-panel__indicator::after{border-style:solid;border-width:0 2px 2px 0;color:#999;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]).cdk-keyboard-focused,.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]).cdk-program-focused,.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]):hover{background:#f2f0f7}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(TS_EXPANSION_PANEL_DEFAULT_OPTIONS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TsExpansionPanelComponent,
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], Object])
], TsExpansionPanelTriggerComponent);

var TsAccordionComponent_1;
/**
 * Component to allow multiple {@link TsExpansionPanelComponent}'s to function as an accordion.
 *
 * @example
 * <ts-accordion
 *               [multi]="true"
 *               [hideToggle]="true"
 *               (destroyed)="accordionDestroyed()"
 * >
 *               <ts-expansion-panel>
 *                 ...
 *               </ts-expansion-panel>
 *
 *               <ts-expansion-panel>
 *                 ...
 *               </ts-expansion-panel>
 *
 *               <ts-expansion-panel>
 *                 ...
 *               </ts-expansion-panel>
 * </ts-accordion>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/expansion-panel</example-url>
 */
let TsAccordionComponent = TsAccordionComponent_1 = class TsAccordionComponent extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__["CdkAccordion"] {
    constructor() {
        super(...arguments);
        this._hideToggle = false;
        /**
         * The event emitted as the accordion is destroyed
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    /**
     * Determine if the toggle indicator should be hidden
     *
     * @param value
     */
    set hideToggle(value) {
        this._hideToggle = value;
    }
    get hideToggle() {
        return this._hideToggle;
    }
    /**
     * Initialize the key manager
     */
    ngAfterContentInit() {
        this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this.triggers).withWrap();
    }
    /**
     * Alert consumers when the accordion is destroyed
     */
    ngOnDestroy() {
        this.destroyed.emit();
    }
    /**
     * Handle keyboard events coming in from the panel triggers
     *
     * @param event
     */
    handleTriggerKeydown(event) {
        const { code } = event;
        const manager = this.keyManager;
        if (code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_6__["KEYS"].HOME.code) {
            manager.setFirstItemActive();
            event.preventDefault();
        }
        else if (code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_6__["KEYS"].END.code) {
            manager.setLastItemActive();
            event.preventDefault();
        }
        else {
            this.keyManager.onKeydown(event);
        }
    }
    /**
     * Handle focus events for the trigger
     *
     * @param trigger - The trigger component that is receiving focus
     */
    handleTriggerFocus(trigger) {
        this.keyManager.updateActiveItem(trigger);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"])(TsExpansionPanelTriggerComponent, { descendants: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"])
], TsAccordionComponent.prototype, "triggers", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsAccordionComponent.prototype, "hideToggle", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"])
], TsAccordionComponent.prototype, "destroyed", void 0);
TsAccordionComponent = TsAccordionComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-accordion',
        template: `<ng-content></ng-content>`,
        // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: ['multi'],
        providers: [
            {
                provide: TS_ACCORDION,
                useExisting: TsAccordionComponent_1,
            },
        ],
        host: { class: 'ts-accordion' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsAccordion'
    })
], TsAccordionComponent);

/**
 * {@link TsExpansionPanelComponent} action row that will be rendered at the bottom of the panel.
 *
 * @example
 * <ts-expansion-panel>
 *               <ts-expansion-panel-trigger>
 *                 Panel trigger
 *               </ts-expansion-panel-trigger>
 *
 *               Panel content
 *
 *               <ts-expansion-panel-action-row>
 *                 <button>Next</button>
 *               </ts-expansion-panel-action-row>
 * </ts-expansion-panel>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/expansion-panel</example-url>
 */
let TsExpansionPanelActionRowComponent = class TsExpansionPanelActionRowComponent {
};
TsExpansionPanelActionRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-expansion-panel-action-row',
        template: `<ng-content></ng-content>`,
        host: { class: 'ts-expansion-panel__action-row' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsExpansionPanelActionRow'
    })
], TsExpansionPanelActionRowComponent);

let TsExpansionPanelTriggerDescriptionComponent = class TsExpansionPanelTriggerDescriptionComponent {
};
TsExpansionPanelTriggerDescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-expansion-panel-trigger-description',
        template: `<ng-content></ng-content>`,
        host: { class: 'ts-expansion-panel__trigger-description' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsExpansionPanelTriggerDescription'
    })
], TsExpansionPanelTriggerDescriptionComponent);

let TsExpansionPanelTriggerTitleComponent = class TsExpansionPanelTriggerTitleComponent {
};
TsExpansionPanelTriggerTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ts-expansion-panel-trigger-title',
        template: `<ng-content></ng-content>`,
        host: { class: 'ts-expansion-panel__trigger-title' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        exportAs: 'tsExpansionPanelTriggerTitle'
    })
], TsExpansionPanelTriggerTitleComponent);

let TsExpansionPanelModule = class TsExpansionPanelModule {
};
TsExpansionPanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__["CdkAccordionModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        ],
        declarations: [
            TsExpansionPanelComponent,
            TsExpansionPanelTriggerComponent,
            TsExpansionPanelTriggerTitleComponent,
            TsExpansionPanelTriggerDescriptionComponent,
            TsExpansionPanelContentDirective,
            TsExpansionPanelActionRowComponent,
            TsAccordionComponent,
        ],
        exports: [
            TsExpansionPanelComponent,
            TsExpansionPanelTriggerComponent,
            TsExpansionPanelTriggerTitleComponent,
            TsExpansionPanelTriggerDescriptionComponent,
            TsExpansionPanelContentDirective,
            TsExpansionPanelActionRowComponent,
            TsAccordionComponent,
        ],
    })
], TsExpansionPanelModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-expansion-panel.js.map


/***/ }),

/***/ "../../dist/libs/ui/expansion-panel/terminus-ui-expansion-panel.ngfactory.js":
/*!*************************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/expansion-panel/terminus-ui-expansion-panel.ngfactory.js ***!
  \*************************************************************************************************************************/
/*! exports provided: TsExpansionPanelModuleNgFactory, RenderType_TsExpansionPanelComponent, View_TsExpansionPanelComponent_0, View_TsExpansionPanelComponent_Host_0, TsExpansionPanelComponentNgFactory, RenderType_TsExpansionPanelActionRowComponent, View_TsExpansionPanelActionRowComponent_0, View_TsExpansionPanelActionRowComponent_Host_0, TsExpansionPanelActionRowComponentNgFactory, RenderType_TsExpansionPanelTriggerComponent, View_TsExpansionPanelTriggerComponent_0, View_TsExpansionPanelTriggerComponent_Host_0, TsExpansionPanelTriggerComponentNgFactory, RenderType_TsExpansionPanelTriggerTitleComponent, View_TsExpansionPanelTriggerTitleComponent_0, View_TsExpansionPanelTriggerTitleComponent_Host_0, TsExpansionPanelTriggerTitleComponentNgFactory, RenderType_TsExpansionPanelTriggerDescriptionComponent, View_TsExpansionPanelTriggerDescriptionComponent_0, View_TsExpansionPanelTriggerDescriptionComponent_Host_0, TsExpansionPanelTriggerDescriptionComponentNgFactory, RenderType_TsAccordionComponent, View_TsAccordionComponent_0, View_TsAccordionComponent_Host_0, TsAccordionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelModuleNgFactory", function() { return TsExpansionPanelModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsExpansionPanelComponent", function() { return RenderType_TsExpansionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelComponent_0", function() { return View_TsExpansionPanelComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelComponent_Host_0", function() { return View_TsExpansionPanelComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelComponentNgFactory", function() { return TsExpansionPanelComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsExpansionPanelActionRowComponent", function() { return RenderType_TsExpansionPanelActionRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelActionRowComponent_0", function() { return View_TsExpansionPanelActionRowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelActionRowComponent_Host_0", function() { return View_TsExpansionPanelActionRowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelActionRowComponentNgFactory", function() { return TsExpansionPanelActionRowComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsExpansionPanelTriggerComponent", function() { return RenderType_TsExpansionPanelTriggerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelTriggerComponent_0", function() { return View_TsExpansionPanelTriggerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelTriggerComponent_Host_0", function() { return View_TsExpansionPanelTriggerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelTriggerComponentNgFactory", function() { return TsExpansionPanelTriggerComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsExpansionPanelTriggerTitleComponent", function() { return RenderType_TsExpansionPanelTriggerTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelTriggerTitleComponent_0", function() { return View_TsExpansionPanelTriggerTitleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelTriggerTitleComponent_Host_0", function() { return View_TsExpansionPanelTriggerTitleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelTriggerTitleComponentNgFactory", function() { return TsExpansionPanelTriggerTitleComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsExpansionPanelTriggerDescriptionComponent", function() { return RenderType_TsExpansionPanelTriggerDescriptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelTriggerDescriptionComponent_0", function() { return View_TsExpansionPanelTriggerDescriptionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsExpansionPanelTriggerDescriptionComponent_Host_0", function() { return View_TsExpansionPanelTriggerDescriptionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsExpansionPanelTriggerDescriptionComponentNgFactory", function() { return TsExpansionPanelTriggerDescriptionComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsAccordionComponent", function() { return RenderType_TsAccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsAccordionComponent_0", function() { return View_TsAccordionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsAccordionComponent_Host_0", function() { return View_TsAccordionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsAccordionComponentNgFactory", function() { return TsAccordionComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-expansion-panel */ "../../dist/libs/ui/expansion-panel/fesm2015/terminus-ui-expansion-panel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "../../node_modules/@angular/cdk/fesm2015/accordion.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 









var TsExpansionPanelModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelModule"], _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelModule"], [])]); });

var styles_TsExpansionPanelComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-expansion-panel{background:#fafafa;border-radius:4px;box-sizing:content-box;color:#302d35;display:block;margin:0;overflow:hidden}@media screen and (-ms-high-contrast:active){.ts-expansion-panel{outline:solid 1px}}.ts-expansion-panel.ts-expansion-panel--shadow{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.ts-accordion .ts-expansion-panel{border-radius:0}.ts-accordion .ts-expansion-panel:first-of-type{border-top-left-radius:4px;border-top-right-radius:4px}.ts-accordion .ts-expansion-panel:last-of-type{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.ng-animate-disabled .ts-expansion-panel,.ts-expansion-panel.ng-animate-disabled,.ts-expansion-panel.ts-expansion-panel--animation-noopable{transition:none}.ts-expansion-panel .ts-expansion-panel__body{padding:0}.ts-expansion-panel--shadow .ts-expansion-panel__body{padding:0 24px 16px}.ts-expansion-panel__content{display:flex;flex-direction:column;overflow:visible}.ts-expansion-panel__action-row{border-top:1px solid #cecdd1;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.ts-expansion-panel__action-row .ts-button{margin-left:8px}"];
var RenderType_TsExpansionPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsExpansionPanelComponent, data: { "animation": [{ type: 7, name: "bodyExpansion", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { height: "0px", visibility: "hidden" }, offset: null }, options: undefined }, { type: 0, name: "expanded", styles: { type: 6, styles: { height: "*", visibility: "visible" }, offset: null }, options: undefined }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }] } });

function View_TsExpansionPanelComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null); }
function View_TsExpansionPanelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { panelBody: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, [[1, 0], ["panelBody", 1]], null, 5, "div", [["class", "ts-expansion-panel__content"], ["role", "region"]], [[24, "@bodyExpansion", 0], [1, "aria-labelledby", 0], [1, "aria-hidden", 0], [8, "id", 0]], [[null, "@bodyExpansion.done"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("@bodyExpansion.done" === en)) {
        var pd_0 = (_co.bodyAnimationDone.next($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "div", [["class", "ts-expansion-panel__body"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsExpansionPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 212992, null, 0, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], { portal: [0, "portal"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.portal; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentExpandedState; var currVal_1 = _co.triggerId; var currVal_2 = !_co.expanded; var currVal_3 = _co.id; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_TsExpansionPanelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 3, "ts-expansion-panel", [["class", "ts-expansion-panel"]], [[2, "ts-expansion-panel--shadow", null], [2, "ts-expansion-panel--expanded", null], [2, "ts-expansion-panel--animation-noopable", null]], null, null, View_TsExpansionPanelComponent_0, RenderType_TsExpansionPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], [3, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TS_ACCORDION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TS_ACCORDION"], undefined, [])], null, function (_ck, _v) { var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).transparentMode; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).expanded; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var TsExpansionPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-expansion-panel", _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelComponent"], View_TsExpansionPanelComponent_Host_0, { expanded: "expanded", disabled: "disabled", hideToggle: "hideToggle", isDisabled: "isDisabled", isExpanded: "isExpanded", transparentMode: "transparentMode" }, { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange", afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, ["ts-expansion-panel-trigger", "*", "ts-expansion-panel-action-row"]);

var styles_TsExpansionPanelActionRowComponent = [];
var RenderType_TsExpansionPanelActionRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsExpansionPanelActionRowComponent, data: {} });

function View_TsExpansionPanelActionRowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsExpansionPanelActionRowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-expansion-panel-action-row", [["class", "ts-expansion-panel__action-row"]], null, null, null, View_TsExpansionPanelActionRowComponent_0, RenderType_TsExpansionPanelActionRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelActionRowComponent"], [], null, null)], null, null); }
var TsExpansionPanelActionRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-expansion-panel-action-row", _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelActionRowComponent"], View_TsExpansionPanelActionRowComponent_Host_0, {}, {}, ["*"]);

var styles_TsExpansionPanelTriggerComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-expansion-panel__trigger{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;align-items:center;border-radius:inherit;display:flex;flex-direction:row;padding:0 24px}.ts-expansion-panel__trigger:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-expansion-panel__trigger.ts-expansion-panel__trigger--transparent{padding:0}.ts-expansion-panel__trigger:focus,.ts-expansion-panel__trigger:hover{outline:0}.ts-expansion-panel__trigger.ts-expansion-panel__trigger--expanded:focus,.ts-expansion-panel__trigger.ts-expansion-panel__trigger--expanded:hover{background:inherit}.ts-expansion-panel__trigger[aria-disabled=true]{color:#cecdd1}.ts-expansion-panel__trigger[aria-disabled=true] .ts-expansion-panel__trigger-description,.ts-expansion-panel__trigger[aria-disabled=true] .ts-expansion-panel__trigger-title{color:inherit}.ts-expansion-panel__trigger:not([aria-disabled=true]){cursor:pointer}@media (hover:none){.ts-expansion-panel:not(.ts-expansion-panel--expanded):not([aria-disabled=true]) .ts-expansion-panel__trigger:hover{background:#fafafa}}.ts-expansion-panel__trigger-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.ts-expansion-panel__trigger-description,.ts-expansion-panel__trigger-title{display:flex;flex-grow:0;margin-right:32px}.ts-expansion-panel__trigger-description{color:#757575;flex-grow:2}.ts-expansion-panel__indicator::after{border-style:solid;border-width:0 2px 2px 0;color:#999;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]).cdk-keyboard-focused,.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]).cdk-program-focused,.ts-expansion-panel:not(.ts-expansion-panel--expanded) .ts-expansion-panel__trigger:not([aria-disabled=true]):hover{background:#f2f0f7}"];
var RenderType_TsExpansionPanelTriggerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsExpansionPanelTriggerComponent, data: { "animation": [{ type: 7, name: "indicatorRotate", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { transform: "rotate(0deg)" }, offset: null }, options: undefined }, { type: 0, name: "expanded", styles: { type: 6, styles: { transform: "rotate(180deg)" }, offset: null }, options: undefined }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, { type: 7, name: "expansionHeight", definitions: [{ type: 0, name: "collapsed, void", styles: { type: 6, styles: { height: "{{collapsedHeight}}" }, offset: null }, options: { params: { collapsedHeight: "48px" } } }, { type: 0, name: "expanded", styles: { type: 6, styles: { height: "{{expandedHeight}}" }, offset: null }, options: { params: { expandedHeight: "64px" } } }, { type: 1, expr: "expanded <=> collapsed, void => collapsed", animation: { type: 3, steps: [{ type: 11, selector: "@indicatorRotate", animation: { type: 9, options: null }, options: { optional: true } }, { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }], options: null }, options: null }], options: {} }] } });

function View_TsExpansionPanelTriggerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "span", [["class", "ts-expansion-panel__indicator"]], [[24, "@indicatorRotate", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentPanelExpandedState; _ck(_v, 0, 0, currVal_0); }); }
function View_TsExpansionPanelTriggerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "span", [["class", "ts-expansion-panel__trigger-content"], ["role", "button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsExpansionPanelTriggerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shouldShowToggle; _ck(_v, 5, 0, currVal_0); }, null); }
function View_TsExpansionPanelTriggerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ts-expansion-panel-trigger", [["class", "ts-expansion-panel__trigger"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "ts-expansion-panel__trigger--expanded", null], [2, "ts-expansion-panel__trigger--transparent", null], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).toggle() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).keydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_TsExpansionPanelTriggerComponent_0, RenderType_TsExpansionPanelTriggerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelTriggerComponent"], [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TS_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, { collapsedHeight: 0, expandedHeight: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { value: 0, params: 1 })], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).panel.triggerId; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled ? (0 - 1) : 0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).panel.id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isExpanded; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).panel.disabled; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isExpanded; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isTransparent; var currVal_7 = _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).currentPanelExpandedState, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).expandedHeight)); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
var TsExpansionPanelTriggerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-expansion-panel-trigger", _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelTriggerComponent"], View_TsExpansionPanelTriggerComponent_Host_0, { collapsedHeight: "collapsedHeight", expandedHeight: "expandedHeight" }, {}, ["ts-expansion-panel-trigger-title", "ts-expansion-panel-trigger-description", "*"]);

var styles_TsExpansionPanelTriggerTitleComponent = [];
var RenderType_TsExpansionPanelTriggerTitleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsExpansionPanelTriggerTitleComponent, data: {} });

function View_TsExpansionPanelTriggerTitleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsExpansionPanelTriggerTitleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-expansion-panel-trigger-title", [["class", "ts-expansion-panel__trigger-title"]], null, null, null, View_TsExpansionPanelTriggerTitleComponent_0, RenderType_TsExpansionPanelTriggerTitleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelTriggerTitleComponent"], [], null, null)], null, null); }
var TsExpansionPanelTriggerTitleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-expansion-panel-trigger-title", _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelTriggerTitleComponent"], View_TsExpansionPanelTriggerTitleComponent_Host_0, {}, {}, ["*"]);

var styles_TsExpansionPanelTriggerDescriptionComponent = [];
var RenderType_TsExpansionPanelTriggerDescriptionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsExpansionPanelTriggerDescriptionComponent, data: {} });

function View_TsExpansionPanelTriggerDescriptionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsExpansionPanelTriggerDescriptionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-expansion-panel-trigger-description", [["class", "ts-expansion-panel__trigger-description"]], null, null, null, View_TsExpansionPanelTriggerDescriptionComponent_0, RenderType_TsExpansionPanelTriggerDescriptionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelTriggerDescriptionComponent"], [], null, null)], null, null); }
var TsExpansionPanelTriggerDescriptionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-expansion-panel-trigger-description", _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsExpansionPanelTriggerDescriptionComponent"], View_TsExpansionPanelTriggerDescriptionComponent_Host_0, {}, {}, ["*"]);

var styles_TsAccordionComponent = [];
var RenderType_TsAccordionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsAccordionComponent, data: {} });

function View_TsAccordionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_TsAccordionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "ts-accordion", [["class", "ts-accordion"]], null, null, null, View_TsAccordionComponent_0, RenderType_TsAccordionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TS_ACCORDION"], null, [_terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsAccordionComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1753088, null, 1, _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsAccordionComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { triggers: 1 })], null, null); }
var TsAccordionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-accordion", _terminus_ui_expansion_panel__WEBPACK_IMPORTED_MODULE_1__["TsAccordionComponent"], View_TsAccordionComponent_Host_0, { multi: "multi", hideToggle: "hideToggle" }, { destroyed: "destroyed" }, ["*"]);



/***/ }),

/***/ "../../node_modules/@angular/cdk/fesm2015/accordion.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/cdk/fesm2015/accordion.js ***!
  \***************************************************************************************************/
/*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion.
 * @type {?}
 */
let nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
    constructor() {
        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */
        this.id = `cdk-accordion-${nextId++}`;
        this._multi = false;
    }
    /**
     * Whether the accordion should allow multiple expanded accordion items simultaneously.
     * @return {?}
     */
    get multi() { return this._multi; }
    /**
     * @param {?} multi
     * @return {?}
     */
    set multi(multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi); }
    /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    openAll() {
        this._openCloseAll(true);
    }
    /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    closeAll() {
        this._openCloseAll(false);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _openCloseAll(expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
CdkAccordion.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion',
            },] }
];
CdkAccordion.propDecorators = {
    multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
let nextId$1 = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _expansionDispatcher
     */
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */
        this.id = `cdk-accordion-child-${nextId$1++}`;
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */
        this._removeUniqueSelectionListener = (/**
         * @return {?}
         */
        () => { });
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((/**
             * @param {?} id
             * @param {?} accordionId
             * @return {?}
             */
            (id, accordionId) => {
                if (this.accordion && !this.accordion.multi &&
                    this.accordion.id === accordionId && this.id !== id) {
                    this.expanded = false;
                }
            }));
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /**
     * Whether the AccordionItem is expanded.
     * @return {?}
     */
    get expanded() { return this._expanded; }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded);
        // Only emit events and update the internal value if the value changes.
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 * @type {?}
                 */
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the AccordionItem is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled); }
    /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe((/**
         * @param {?} expanded
         * @return {?}
         */
        expanded => {
            // Only change expanded state if item is enabled
            if (!this.disabled) {
                this.expanded = expanded;
            }
        }));
    }
}
CdkAccordionItem.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                    // to the same accordion.
                    { provide: CdkAccordion, useValue: ɵ0 },
                ],
            },] }
];
/** @nocollapse */
CdkAccordionItem.ctorParameters = () => [
    { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }
];
CdkAccordionItem.propDecorators = {
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkAccordionModule {
}
CdkAccordionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [CdkAccordion, CdkAccordionItem],
                declarations: [CdkAccordion, CdkAccordionItem],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=accordion.js.map


/***/ })

}]);
//# sourceMappingURL=default~drawer-drawer-module-ngfactory~expansion-panel-expansion-panel-module-ngfactory-es2015.js.map