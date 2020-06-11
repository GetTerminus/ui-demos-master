(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module-ngfactory"],{

/***/ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/sort/fesm2015/terminus-ui-sort.js ***!
  \**************************************************************************************************/
/*! exports provided: TS_SORT_HEADER_INTL_PROVIDER, TS_SORT_HEADER_INTL_PROVIDER_FACTORY, TsSortDirective, TsSortHeaderComponent, TsSortHeaderIntl, TsSortModule, tsSortAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_SORT_HEADER_INTL_PROVIDER", function() { return TS_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return TS_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSortDirective", function() { return TsSortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSortHeaderComponent", function() { return TsSortHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSortHeaderIntl", function() { return TsSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSortModule", function() { return TsSortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsSortAnimations", function() { return tsSortAnimations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @terminus/ngx-tools/coercion */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
/* harmony import */ var _terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @terminus/ngx-tools/type-guards */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-type-guards.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");












/**
 * To modify the labels and text displayed, create a new instance of TsSortHeaderIntl and
 * include it in a custom provider.
 */
let TsSortHeaderIntl = class TsSortHeaderIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * ARIA label for the sorting button
         *
         * @param id
         */
        this.sortButtonLabel = (id) => `Change sorting for ${id}`;
        /**
         * A label to describe the current sort (visible only to screenreaders)
         *
         * @param id
         * @param direction
         */
        this.sortDescriptionLabel = (id, direction) => `Sorted by ${id} ${direction === 'asc' ? 'ascending' : 'descending'}`;
    }
};
TsSortHeaderIntl = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TsSortHeaderIntl);
/**
 * Factory to return an instance of TsSortHeaderIntl
 *
 * @param parentIntl
 */
const TS_SORT_HEADER_INTL_PROVIDER_FACTORY = (parentIntl) => parentIntl || new TsSortHeaderIntl();
/**
 * TsSortHeaderIntl provider declaration
 */
const TS_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an TsSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: TsSortHeaderIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), TsSortHeaderIntl]],
    useFactory: TS_SORT_HEADER_INTL_PROVIDER_FACTORY,
};

const getSortDuplicateSortableIdError = (id) => Error(`Cannot have two TsSortables with the same id (${id}).`);
const getSortHeaderNotContainedWithinSortError = () => Error(`TsSortHeader must be placed within a parent element with the TsSort directive.`);
const getSortHeaderMissingIdError = () => Error(`TsSortHeader must be provided with a unique id.`);
const getSortInvalidDirectionError = (direction) => Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);

/**
 * Container for TsSortables to manage the sort state and provide default sort parameters
 *
 * @example
 *
 * <ts-table [dataSource]="dataSource" tsSort>
 *   ...
 * </ts-table>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/table</example-url>
 */
let TsSortDirective = class TsSortDirective {
    constructor() {
        /**
         * Store the disabled flag
         */
        this.disabled = false;
        /**
         * Collection of all registered sortables that this directive manages
         */
        this.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * The direction to set when an TsSortable is initially sorted.
         *
         * May be overridden by the TsSortable's sort start.
         */
        this.start = 'asc';
        this._direction = '';
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         *
         * May be overridden by the TsSortable's disable clear input.
         */
        this.disableClear = false;
        /**
         * Event emitted when the user changes either the active sort or sort direction
         */
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * The sort direction of the currently active TsSortable
     *
     * @param direction
     */
    set direction(direction) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
        }
        this._direction = direction;
    }
    get direction() {
        return this._direction;
    }
    /**
     * Trigger next on all changes
     */
    ngOnChanges() {
        this._stateChanges.next();
    }
    /**
     * Complete the observable on destroy
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * Register function to be used by the contained TsSortables. Adds the TsSortable to the
     * collection of TsSortables.
     *
     * @param sortable
     */
    register(sortable) {
        if (!sortable.id && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            throw getSortHeaderMissingIdError();
        }
        if (this.sortables.has(sortable.id) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            throw getSortDuplicateSortableIdError(sortable.id);
        }
        this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained TsSortables. Removes the TsSortable from the
     * collection of contained TsSortables.
     *
     * @param sortable
     */
    deregister(sortable) {
        this.sortables.delete(sortable.id);
    }
    /**
     * Sets the active sort id and determines the new sort direction
     *
     * @param sortable
     */
    sort(sortable) {
        if (this.active === sortable.id) {
            this.direction = this.getNextSortDirection(sortable);
        }
        else {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
        }
        this.sortChange.next({
            active: this.active,
            direction: this.direction,
        });
    }
    /**
     * Returns the next sort direction of the active sortable, checking for potential overrides
     *
     * @param sortable
     */
    getNextSortDirection(sortable) {
        if (!sortable) {
            return '';
        }
        // Get the sort direction cycle with the potential sortable overrides.
        const disableClearDoesntExist = Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__["isNull"])(sortable.disableClear) || Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(sortable.disableClear);
        const disableClear = disableClearDoesntExist ? this.disableClear : sortable.disableClear;
        const sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
        // Get and return the next direction in the cycle
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortActive'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsSortDirective.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortStart'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsSortDirective.prototype, "start", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortDirection'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSortDirective.prototype, "direction", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortDisableClear'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSortDirective.prototype, "disableClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('tsSortChange'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSortDirective.prototype, "sortChange", void 0);
TsSortDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[tsSort]',
        exportAs: 'tsSort',
        // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: ['disabled: tsSortDisabled'],
    })
], TsSortDirective);
/**
 * Returns the sort direction cycle to use given the provided parameters of order and clear
 *
 * @param start
 * @param disableClear
 */
function getSortDirectionCycle(start, disableClear) {
    const sortOrder = ['asc', 'desc'];
    if (start === 'desc') {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push('');
    }
    return sortOrder;
}

const SORT_ANIMATION_TRANSITION = `${_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["AnimationDurations"].ENTERING} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["AnimationCurves"].STANDARD_CURVE}`;
/** Animations used by TsSort. */
const tsSortAnimations = {
    /**
     * Animation that moves the sort indicator
     */
    indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicator', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translateY(0px)' })),
        // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translateY(10px)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc <=> desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
     * Animation that rotates the left pointer of the indicator based on the sorting direction
     */
    leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('leftPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc <=> desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
     * Animation that rotates the right pointer of the indicator based on the sorting direction
     */
    rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('rightPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc <=> desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
     * Animation that moves the indicator in and out of view when sorting is enabled/disabled
     */
    indicatorToggle: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicatorToggle', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'translateY(25%)',
                opacity: 0,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'none',
                opacity: 1,
            }),
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'none',
                opacity: 1,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'translateY(-25%)',
                opacity: 0,
            }),
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'translateY(-25%)',
                opacity: 0,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'none',
                opacity: 1,
            }),
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('desc => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'none',
                opacity: 1,
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                transform: 'translateY(25%)',
                opacity: 0,
            }),
        ]))),
    ]),
};

/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent TsSortDirective.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 *
 * @example
 * <ts-header-cell *tsHeaderCellDef ts-sort-header>
 *              Created
 * </ts-header-cell>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/table</example-url>
 */
let TsSortHeaderComponent = class TsSortHeaderComponent {
    constructor(_intl, changeDetectorRef, _sort, _cdkColumnDef) {
        this._intl = _intl;
        this.changeDetectorRef = changeDetectorRef;
        this._sort = _sort;
        this._cdkColumnDef = _cdkColumnDef;
        this.disabled = false;
        /**
         * Sets the position of the arrow that displays when sorted
         */
        this.arrowPosition = 'after';
        if (!_sort && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            throw getSortHeaderNotContainedWithinSortError();
        }
    }
    /**
     * Overrides the disable clear value of the containing TsSort for this TsSortable
     *
     * @param value
     */
    set disableClear(value) {
        /* istanbul ignore if */
        if (!Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__["isBoolean"])(value) && value && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            // eslint-disable-next-line no-console
            console.warn(`TsSortHeaderComponent: "disableClear" value is not a boolean. `
                + `String values of 'true' and 'false' will no longer be coerced to a true boolean with the next release.`);
        }
        this._disableClear = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
    get disableClear() {
        return this._disableClear;
    }
    /**
     * Default to cdk column name
     */
    ngOnInit() {
        // Mark directive for change detection after any of these changes
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort._stateChanges, this._intl.changes)
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this))
            .subscribe(() => this.changeDetectorRef.markForCheck());
        if (!this.id && this._cdkColumnDef) {
            this.id = this._cdkColumnDef.name;
        }
        this._sort.register(this);
    }
    /**
     * Deregister sort and unsubscribe from observables
     */
    ngOnDestroy() {
        this._sort.deregister(this);
    }
    /**
     * Handles click events on the header
     */
    _handleClick() {
        if (!this._isDisabled()) {
            this._sort.sort(this);
        }
    }
    /**
     * Whether this TsSortHeader is currently sorted in either ascending or descending order
     */
    _isSorted() {
        return this._sort.active === this.id
            && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    }
    /**
     * Whether this TsSortHeader is disabled
     */
    _isDisabled() {
        return this._sort.disabled || this.disabled;
    }
};
TsSortHeaderComponent.ctorParameters = () => [
    { type: TsSortHeaderIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: TsSortDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ts-sort-header'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsSortHeaderComponent.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsSortHeaderComponent.prototype, "arrowPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsSortHeaderComponent.prototype, "start", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsSortHeaderComponent.prototype, "disableClear", null);
TsSortHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // NOTE: This component needs to be added to another component so we need a non-element selector
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: '[ts-sort-header]',
        // tslint:enable: component-selector
        template: "<div\n  class=\"ts-sort-header-container\"\n  [class.ts-sort-header-position-before]=\"arrowPosition == 'before'\"\n>\n  <button\n    class=\"ts-sort-header-button\"\n    type=\"button\"\n    [attr.aria-label]=\"_intl.sortButtonLabel(id)\"\n    [attr.disabled]=\"_isDisabled() || null\"\n    (click)=\"_handleClick()\"\n  >\n    <ng-content></ng-content>\n\n    <ts-icon\n      class=\"ts-sort-header-container__icon\"\n      [class.ts-sort-header-container__icon--hidden]=\"_isSorted()\"\n    >swap_vert</ts-icon>\n\n    <div\n      class=\"ts-sort-header-arrow\"\n      *ngIf=\"_isSorted()\"\n      [@indicatorToggle]=\"_sort.direction\"\n    >\n      <div class=\"ts-sort-header-stem\"></div>\n\n      <div class=\"ts-sort-header-indicator\" [@indicator]=\"_sort.direction\" >\n        <div class=\"ts-sort-header-pointer-left\" [@leftPointer]=\"_sort.direction\"></div>\n        <div class=\"ts-sort-header-pointer-right\" [@rightPointer]=\"_sort.direction\"></div>\n        <div class=\"ts-sort-header-pointer-middle\"></div>\n      </div>\n    </div>\n  </button>\n</div>\n\n<span class=\"cdk-visually-hidden\" *ngIf=\"_isSorted()\">\n  &nbsp;{{ _intl.sortDescriptionLabel(id, _sort.direction) }}\n</span>\n",
        host: {
            'class': 'ts-sortable',
            '[class.ts-sort-header-sorted]': '_isSorted()',
            '[class.ts-sort-header-disabled]': '_isDisabled()',
        },
        preserveWhitespaces: false,
        // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: ['disabled'],
        animations: [
            tsSortAnimations.indicator,
            tsSortAnimations.leftPointer,
            tsSortAnimations.rightPointer,
            tsSortAnimations.indicatorToggle,
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        exportAs: 'tsSortHeader',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-sort-header-container{align-items:center;display:flex;position:relative}.ts-sort-header-disabled .ts-sort-header-container{cursor:default}.ts-sort-header-container__icon{opacity:0;position:absolute;right:0;top:50%;transform:translate(22%,-42%);transition:opacity .2s ease-out .2s}.ts-sort-header-container__icon--hidden{opacity:0;transition:opacity .1s ease-out .1s}.ts-sort-header-position-before{flex-direction:row-reverse}.ts-sort-header-button{align-items:center;background:0 0;border:none;color:currentColor;cursor:pointer;display:block;font:inherit;outline:0;overflow:hidden;padding:0 1.4em 0 0;position:relative;text-overflow:ellipsis}.ts-sort-header-button:focus .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden),.ts-sort-header-button:hover .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden){opacity:1}.ts-sort-header-arrow{display:flex;height:12px;margin:-2px 0 0 6px;min-width:12px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:12px}.ts-sort-header-position-before .ts-sort-header-arrow{margin:0 6px 0 0}.ts-sort-header-stem{align-items:center;background:currentColor;display:flex;height:10px;margin:auto;width:2px}.ts-sort-header-indicator{align-items:center;display:flex;height:2px;left:0;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:100%}.ts-sort-header-pointer-middle{background:currentColor;height:2px;margin:auto;transform:rotate(45deg);width:2px}.ts-sort-header-pointer-left,.ts-sort-header-pointer-right{background:currentColor;height:2px;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:6px}.ts-sort-header-pointer-left{left:0;transform-origin:right}.ts-sort-header-pointer-right{right:0;transform-origin:left}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TsSortHeaderIntl,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
        TsSortDirective,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"]])
], TsSortHeaderComponent);

/**
 * Much of this was lifted directly from Angular Material. I highly recommend checking out their
 * source code: https://github.com/angular/material2/tree/master/src/lib/sort
 */
let TsSortModule = class TsSortModule {
};
TsSortModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_3__["TsIconModule"],
        ],
        providers: [TS_SORT_HEADER_INTL_PROVIDER],
        declarations: [
            TsSortDirective,
            TsSortHeaderComponent,
        ],
        exports: [
            TsSortDirective,
            TsSortHeaderComponent,
        ],
    })
], TsSortModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-sort.js.map


/***/ }),

/***/ "../../dist/libs/ui/sort/terminus-ui-sort.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/sort/terminus-ui-sort.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: TsSortModuleNgFactory, RenderType_TsSortHeaderComponent, View_TsSortHeaderComponent_0, View_TsSortHeaderComponent_Host_0, TsSortHeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSortModuleNgFactory", function() { return TsSortModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsSortHeaderComponent", function() { return RenderType_TsSortHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsSortHeaderComponent_0", function() { return View_TsSortHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsSortHeaderComponent_Host_0", function() { return View_TsSortHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSortHeaderComponentNgFactory", function() { return TsSortHeaderComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-sort */ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/terminus-ui-icon.ngfactory */ "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/fesm2015/table.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 











var TsSortModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderIntl"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TS_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortModule"], [])]); });

var styles_TsSortHeaderComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-sort-header-container{align-items:center;display:flex;position:relative}.ts-sort-header-disabled .ts-sort-header-container{cursor:default}.ts-sort-header-container__icon{opacity:0;position:absolute;right:0;top:50%;transform:translate(22%,-42%);transition:opacity .2s ease-out .2s}.ts-sort-header-container__icon--hidden{opacity:0;transition:opacity .1s ease-out .1s}.ts-sort-header-position-before{flex-direction:row-reverse}.ts-sort-header-button{align-items:center;background:0 0;border:none;color:currentColor;cursor:pointer;display:block;font:inherit;outline:0;overflow:hidden;padding:0 1.4em 0 0;position:relative;text-overflow:ellipsis}.ts-sort-header-button:focus .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden),.ts-sort-header-button:hover .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden){opacity:1}.ts-sort-header-arrow{display:flex;height:12px;margin:-2px 0 0 6px;min-width:12px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:12px}.ts-sort-header-position-before .ts-sort-header-arrow{margin:0 6px 0 0}.ts-sort-header-stem{align-items:center;background:currentColor;display:flex;height:10px;margin:auto;width:2px}.ts-sort-header-indicator{align-items:center;display:flex;height:2px;left:0;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:100%}.ts-sort-header-pointer-middle{background:currentColor;height:2px;margin:auto;transform:rotate(45deg);width:2px}.ts-sort-header-pointer-left,.ts-sort-header-pointer-right{background:currentColor;height:2px;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:6px}.ts-sort-header-pointer-left{left:0;transform-origin:right}.ts-sort-header-pointer-right{right:0;transform-origin:left}"];
var RenderType_TsSortHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsSortHeaderComponent, data: { "animation": [{ type: 7, name: "indicator", definitions: [{ type: 0, name: "asc", styles: { type: 6, styles: { transform: "translateY(0px)" }, offset: null }, options: undefined }, { type: 0, name: "desc", styles: { type: 6, styles: { transform: "translateY(10px)" }, offset: null }, options: undefined }, { type: 1, expr: "asc <=> desc", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, { type: 7, name: "leftPointer", definitions: [{ type: 0, name: "asc", styles: { type: 6, styles: { transform: "rotate(-45deg)" }, offset: null }, options: undefined }, { type: 0, name: "desc", styles: { type: 6, styles: { transform: "rotate(45deg)" }, offset: null }, options: undefined }, { type: 1, expr: "asc <=> desc", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, { type: 7, name: "rightPointer", definitions: [{ type: 0, name: "asc", styles: { type: 6, styles: { transform: "rotate(45deg)" }, offset: null }, options: undefined }, { type: 0, name: "desc", styles: { type: 6, styles: { transform: "rotate(-45deg)" }, offset: null }, options: undefined }, { type: 1, expr: "asc <=> desc", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }, { type: 7, name: "indicatorToggle", definitions: [{ type: 1, expr: "void => asc", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateY(25%)", opacity: 0 }, offset: null }, { type: 6, styles: { transform: "none", opacity: 1 }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 1, expr: "asc => void", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "none", opacity: 1 }, offset: null }, { type: 6, styles: { transform: "translateY(-25%)", opacity: 0 }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 1, expr: "void => desc", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "translateY(-25%)", opacity: 0 }, offset: null }, { type: 6, styles: { transform: "none", opacity: 1 }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }, { type: 1, expr: "desc => void", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { transform: "none", opacity: 1 }, offset: null }, { type: 6, styles: { transform: "translateY(25%)", opacity: 0 }, offset: null }] }, timings: "225ms cubic-bezier(0.4,0.0,0.2,1)" }, options: null }], options: {} }] } });

function View_TsSortHeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "ts-sort-header-arrow"]], [[24, "@indicatorToggle", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "div", [["class", "ts-sort-header-stem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["class", "ts-sort-header-indicator"]], [[24, "@indicator", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "ts-sort-header-pointer-left"]], [[24, "@leftPointer", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "ts-sort-header-pointer-right"]], [[24, "@rightPointer", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "div", [["class", "ts-sort-header-pointer-middle"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._sort.direction; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co._sort.direction; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co._sort.direction; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co._sort.direction; _ck(_v, 4, 0, currVal_3); }); }
function View_TsSortHeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "cdk-visually-hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" \u00A0", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._intl.sortDescriptionLabel(_co.id, _co._sort.direction); _ck(_v, 1, 0, currVal_0); }); }
function View_TsSortHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "ts-sort-header-container"]], [[2, "ts-sort-header-position-before", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "button", [["class", "ts-sort-header-button"], ["type", "button"]], [[1, "aria-label", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co._handleClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "ts-icon", [["class", "ts-sort-header-container__icon ts-icon"]], [[2, "ts-sort-header-container__icon--hidden", null], [2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["swap_vert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsSortHeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsSortHeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co._isSorted(); _ck(_v, 7, 0, currVal_9); var currVal_10 = _co._isSorted(); _ck(_v, 9, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.arrowPosition == "before"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co._intl.sortButtonLabel(_co.id); var currVal_2 = (_co._isDisabled() || null); _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co._isSorted(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).theme === "primary"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).theme === "accent"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).theme === "warn"); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).background; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_TsSortHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "ts-sortable"], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null]], null, null, View_TsSortHeaderComponent_0, RenderType_TsSortHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkColumnDef"]]], { id: [0, "id"] }, null)], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isSorted(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var TsSortHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[ts-sort-header]", _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderComponent"], View_TsSortHeaderComponent_Host_0, { disabled: "disabled", id: "ts-sort-header", arrowPosition: "arrowPosition", start: "start", disableClear: "disableClear" }, {}, ["*"]);



/***/ }),

/***/ "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/table/fesm2015/terminus-ui-table.js ***!
  \****************************************************************************************************/
/*! exports provided: TS_TABLE_MIN_COLUMN_WIDTH, TsCellDefDirective, TsCellDirective, TsColumnDefDirective, TsFooterCellDefDirective, TsFooterCellDirective, TsFooterRowComponent, TsFooterRowDefDirective, TsHeaderCellDefDirective, TsHeaderCellDirective, TsHeaderCellResizeEvent, TsHeaderRowComponent, TsHeaderRowDefDirective, TsRowComponent, TsRowDefDirective, TsTableColumnsChangeEvent, TsTableComponent, TsTableDataSource, TsTableModule, setColumnAlignment, tsTableColumnAlignmentTypesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TABLE_MIN_COLUMN_WIDTH", function() { return TS_TABLE_MIN_COLUMN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsCellDefDirective", function() { return TsCellDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsCellDirective", function() { return TsCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsColumnDefDirective", function() { return TsColumnDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsFooterCellDefDirective", function() { return TsFooterCellDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsFooterCellDirective", function() { return TsFooterCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsFooterRowComponent", function() { return TsFooterRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsFooterRowDefDirective", function() { return TsFooterRowDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsHeaderCellDefDirective", function() { return TsHeaderCellDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsHeaderCellDirective", function() { return TsHeaderCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsHeaderCellResizeEvent", function() { return TsHeaderCellResizeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsHeaderRowComponent", function() { return TsHeaderRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsHeaderRowDefDirective", function() { return TsHeaderRowDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsRowComponent", function() { return TsRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsRowDefDirective", function() { return TsRowDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTableColumnsChangeEvent", function() { return TsTableColumnsChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTableComponent", function() { return TsTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTableDataSource", function() { return TsTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTableModule", function() { return TsTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnAlignment", function() { return setColumnAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsTableColumnAlignmentTypesArray", function() { return tsTableColumnAlignmentTypesArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @terminus/ui-paginator */ "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
/* harmony import */ var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @terminus/ui-sort */ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ui-utilities */ "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");















var TsColumnDefDirective_1;
/**
 * An array of the allowed {@link TsTableColumnAlignment} for checking values
 */
const tsTableColumnAlignmentTypesArray = [
    'left',
    'center',
    'right',
];
/**
 * Column definition for the {@link TsTableComponent}.
 *
 * Defines a set of cells available for a table column.
 */
let TsColumnDefDirective = TsColumnDefDirective_1 = class TsColumnDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
        /**
         * Define if the column should stick to the start
         */
        this.sticky = false;
        /**
         * Define if a column should stick to the end
         */
        this.stickyEnd = false;
    }
};
TsColumnDefDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('tsColumnDef'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsColumnDefDirective.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsColumnDefDirective.prototype, "alignment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsColumnDefDirective.prototype, "sticky", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsColumnDefDirective.prototype, "stickyEnd", void 0);
TsColumnDefDirective = TsColumnDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsColumnDef]',
        providers: [
            {
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
                useExisting: TsColumnDefDirective_1,
            },
            {
                provide: 'MAT_SORT_HEADER_COLUMN_DEF',
                useExisting: TsColumnDefDirective_1,
            },
        ],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], TsColumnDefDirective);

var TsCellDefDirective_1, TsHeaderCellDefDirective_1, TsHeaderCellDirective_1, TsFooterCellDefDirective_1;
/**
 * The minimum width for columns
 */
const TS_TABLE_MIN_COLUMN_WIDTH = 70;
// Unique ID for each instance
let cellNextUniqueId = 0;
let headerNextUniqueId = 0;
/**
 * Set the column alignment styles
 *
 * @param column - The column definition
 * @param renderer - The Renderer2
 * @param elementRef - The element ref to add the class to
 */
function setColumnAlignment(column, renderer, elementRef) {
    if (column.alignment) {
        // Verify the alignment value is allowed
        if (tsTableColumnAlignmentTypesArray.indexOf(column.alignment) < 0 && Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
            throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_10__["TsUILibraryError"](`TsCellDirective: "${column.alignment}" is not an allowed alignment.`
                + `See "TsTableColumnAlignment" type for available options.`);
        }
        renderer.addClass(elementRef.nativeElement, `ts-cell--align-${column.alignment}`);
    }
}
/**
 * Cell definition for the {@link TsTableComponent}.
 *
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
let TsCellDefDirective = TsCellDefDirective_1 = class TsCellDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
};
TsCellDefDirective = TsCellDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsCellDef]',
        providers: [{
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
                useExisting: TsCellDefDirective_1,
            }],
    })
], TsCellDefDirective);
/**
 * Header cell definition for the {@link TsTableComponent}.
 *
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
let TsHeaderCellDefDirective = TsHeaderCellDefDirective_1 = class TsHeaderCellDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
};
TsHeaderCellDefDirective = TsHeaderCellDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsHeaderCellDef]',
        providers: [{
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
                useExisting: TsHeaderCellDefDirective_1,
            }],
    })
], TsHeaderCellDefDirective);
/**
 * Define the event object for header cell resize events
 */
class TsHeaderCellResizeEvent {
    constructor(
    // The header cell instance that originated the event
    instance, 
    // The new width
    width) {
        this.instance = instance;
        this.width = width;
    }
}
/**
 * Header cell template container that adds the right classes and role.
 */
let TsHeaderCellDirective = TsHeaderCellDirective_1 = class TsHeaderCellDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
    constructor(columnDef, elementRef, renderer, documentService, ngZone) {
        super(columnDef, elementRef);
        this.columnDef = columnDef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.documentService = documentService;
        this.ngZone = ngZone;
        /**
         * Stream used inside takeUntil pipes
         */
        this.killStream$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Define the class for the resizable element
         */
        this.resizerClass = 'ts-header-cell__resizer';
        /**
         * Store the starting offset when a resize event begins
         */
        this.startOffsetX = 0;
        /**
         * Store the starting width of a cell before resizing
         */
        this.startWidth = 0;
        /**
         * Define the default component ID
         */
        this.uid = `ts-table-header-cell-${headerNextUniqueId++}`;
        /**
         * Store the current cell width
         */
        this.width = 'auto';
        /**
         * Event emitted when the cell is resized
         */
        this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * Return the current set width
     */
    get cellWidth() {
        return parseInt(this.width, 0);
    }
    /**
     * Return a reference to the resize element
     */
    get resizeElement() {
        return this.elementRef.nativeElement.querySelector(`.${this.resizerClass}`);
    }
    /**
     * Initial setup
     */
    ngOnInit() {
        this.column = this.columnDef;
        this.elementRef.nativeElement.classList.add(`ts-column-${this.column.cssClassFriendlyName}`);
        // eslint-disable-next-line no-underscore-dangle
        if (this.column._stickyEnd) {
            this.elementRef.nativeElement.classList.add(`ts-table__column--sticky-end`);
        }
        if (this.column.sticky) {
            this.elementRef.nativeElement.classList.add(`ts-table__column--sticky`);
        }
        setColumnAlignment(this.column, this.renderer, this.elementRef);
    }
    /**
     * Remove all event listeners when destroyed
     */
    ngOnDestroy() {
        this.killStream$.complete();
    }
    /**
     * Inject the resize 'grabber' element.
     *
     * Called by {@link TsTableComponent}
     */
    injectResizeElement() {
        // If the element has been injected before, remove it
        if (this.resizeElement) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.resizeElement);
        }
        const resizeElement = this.renderer.createElement('span');
        resizeElement.classList.add(this.resizerClass);
        resizeElement.classList.add(`${this.resizerClass}--${this.columnDef.cssClassFriendlyName}`);
        resizeElement.title = 'Drag to resize column.';
        this.renderer.appendChild(this.elementRef.nativeElement, resizeElement);
        this.ngZone.runOutsideAngular(() => {
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'mousedown')
                .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
                .subscribe(e => this.onResizeColumn(e));
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'click')
                .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
                .subscribe(e => e.stopPropagation());
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'mouseenter')
                .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
                .subscribe(() => this.syncHoverClass(true));
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'mouseleave')
                .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
                .subscribe(() => this.syncHoverClass(false));
        });
    }
    /**
     * Return the new width if above the minimum width
     *
     * @param start - The starting width
     * @param difference - The amount moved
     * @returns The final column width
     */
    static determineWidth(start, difference) {
        const total = start + difference;
        return (total >= TS_TABLE_MIN_COLUMN_WIDTH) ? total : TS_TABLE_MIN_COLUMN_WIDTH;
    }
    /**
     * Save initial width and offset, bind to more events
     *
     * @param event - The mouse event
     */
    onResizeColumn(event) {
        this.startOffsetX = event.clientX;
        this.startWidth = this.cellWidth;
        // TODO: Refactor deprecation
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.documentService.document, 'mousemove')
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.killStream$)).subscribe(e => {
            const diff = e.clientX - this.startOffsetX;
            const newWidth = TsHeaderCellDirective_1.determineWidth(this.startWidth, diff);
            // istanbul ignore else
            if (newWidth) {
                this.setColumnWidth(newWidth);
            }
        });
        // TODO: Refactor deprecation
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.documentService.document, 'mouseup')
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
            this.startOffsetX = 0;
            this.startWidth = 0;
            this.killStream$.next(void 0);
            this.resized.emit(new TsHeaderCellResizeEvent(this, this.elementRef.nativeElement.offsetWidth));
        });
    }
    /**
     * Set the column width style and save the width
     *
     * @param width - The width to set
     */
    setColumnWidth(width) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
        this.width = `${width}px`;
    }
    /**
     * Sync the hovered class
     *
     * @param isHovered - Whether the resize element is currently hovered
     */
    syncHoverClass(isHovered) {
        isHovered
            ? this.renderer.addClass(this.elementRef.nativeElement, 'ts-cell--resizing')
            : this.renderer.removeClass(this.elementRef.nativeElement, 'ts-cell--resizing');
    }
};
TsHeaderCellDirective.ctorParameters = () => [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsDocumentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsHeaderCellDirective.prototype, "resized", void 0);
TsHeaderCellDirective = TsHeaderCellDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        // eslint-disable-next-line @angular-eslint/directive-selector
        selector: 'ts-header-cell, th[ts-header-cell]',
        host: {
            'class': 'ts-header-cell',
            'role': 'columnheader',
            '[id]': 'uid',
        },
        exportAs: 'tsHeaderCell',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
        _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsDocumentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], TsHeaderCellDirective);
/**
 * Cell template container that adds the right classes and role.
 */
let TsCellDirective = class TsCellDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
    constructor(elementRef, columnDef, renderer) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.columnDef = columnDef;
        this.renderer = renderer;
        /**
         * Define the default component ID
         */
        this.uid = `ts-table-cell-${cellNextUniqueId++}`;
    }
    /**
     * Initial setup
     */
    ngOnInit() {
        // HACK: Changing the type in the constructor from `CdkColumnDef` to `TsColumnDefDirective` doesn't seem to play well with the CDK.
        // Coercing the type here is a hack, but allows us to reference properties that do not exist on the underlying `CdkColumnDef`.
        this.column = this.columnDef;
        // Set a custom class for each column
        this.elementRef.nativeElement.classList.add(`ts-column-${this.column.cssClassFriendlyName}`);
        setColumnAlignment(this.column, this.renderer, this.elementRef);
        // eslint-disable-next-line no-underscore-dangle
        if (this.column._stickyEnd) {
            this.elementRef.nativeElement.classList.add(`ts-table__column--sticky-end`);
        }
        if (this.column.sticky) {
            this.elementRef.nativeElement.classList.add(`ts-table__column--sticky`);
        }
    }
};
TsCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
TsCellDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        // eslint-disable-next-line @angular-eslint/directive-selector
        selector: 'ts-cell, td[ts-cell]',
        host: {
            class: 'ts-cell',
            role: 'gridcell',
        },
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])
], TsCellDirective);
/**
 * Footer cell definition for the mat-table.
 *
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
let TsFooterCellDefDirective = TsFooterCellDefDirective_1 = class TsFooterCellDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
};
TsFooterCellDefDirective = TsFooterCellDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsFooterCellDef]',
        providers: [{
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
                useExisting: TsFooterCellDefDirective_1,
            }],
    })
], TsFooterCellDefDirective);
/**
 * Footer cell template container that adds the right classes and role.
 */
let TsFooterCellDirective = class TsFooterCellDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.columnDef = columnDef;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * Initial setup
     */
    ngOnInit() {
        // HACK: Changing the type in the constructor from `CdkColumnDef` to `TsColumnDefDirective` doesn't seem to play well with the CDK.
        // Coercing the type here is a hack, but allows us to reference properties that do not exist on the underlying `CdkColumnDef`.
        this.column = this.columnDef;
        // Set a custom class for each column
        this.elementRef.nativeElement.classList.add(`ts-column-${this.column.cssClassFriendlyName}`);
        setColumnAlignment(this.column, this.renderer, this.elementRef);
        // eslint-disable-next-line no-underscore-dangle
        if (this.column._stickyEnd) {
            this.elementRef.nativeElement.classList.add(`ts-table__column--sticky-end`);
        }
        if (this.column.sticky) {
            this.elementRef.nativeElement.classList.add(`ts-table__column--sticky`);
        }
    }
};
TsFooterCellDirective.ctorParameters = () => [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
TsFooterCellDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        // eslint-disable-next-line @angular-eslint/directive-selector
        selector: 'ts-footer-cell, td[ts-footer-cell]',
        host: {
            class: 'ts-footer-cell',
            role: 'gridcell',
        },
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])
], TsFooterCellDirective);

var TsHeaderRowDefDirective_1, TsFooterRowDefDirective_1, TsFooterRowComponent_1, TsRowDefDirective_1;
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
let TsHeaderRowComponent = class TsHeaderRowComponent extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
};
TsHeaderRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
TsHeaderRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-header-row, tr[ts-header-row]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
        host: {
            class: 'ts-header-row',
            role: 'row',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'tsHeaderRow',
        preserveWhitespaces: false
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], TsHeaderRowComponent);
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
let TsRowComponent = class TsRowComponent extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
};
TsRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
TsRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-row, tr[ts-row]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
        host: {
            class: 'ts-row',
            role: 'row',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'tsRow',
        preserveWhitespaces: false
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
], TsRowComponent);
/**
 * Header row definition for the {@link TsTableComponent}.
 *
 * Captures the header row's template and other header properties such as the columns to display.
 */
let TsHeaderRowDefDirective = TsHeaderRowDefDirective_1 = class TsHeaderRowDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
};
TsHeaderRowDefDirective = TsHeaderRowDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsHeaderRowDef]',
        providers: [
            {
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
                useExisting: TsHeaderRowDefDirective_1,
            },
            {
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
                useExisting: TsHeaderRowComponent,
            },
        ],
        // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: [
            'columns: tsHeaderRowDef',
            'sticky: tsHeaderRowDefSticky',
        ],
    })
], TsHeaderRowDefDirective);
/**
 * Footer row definition for the {@link TsTableComponent}.
 *
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
let TsFooterRowDefDirective = TsFooterRowDefDirective_1 = class TsFooterRowDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
};
TsFooterRowDefDirective = TsFooterRowDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsFooterRowDef]',
        providers: [{
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
                useExisting: TsFooterRowDefDirective_1,
            }],
        // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: [
            'columns: tsFooterRowDef',
            'sticky: tsFooterRowDefSticky',
        ],
    })
], TsFooterRowDefDirective);
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
let TsFooterRowComponent = TsFooterRowComponent_1 = class TsFooterRowComponent extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
};
TsFooterRowComponent = TsFooterRowComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-footer-row, tr[ts-footer-row]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
        host: {
            class: 'ts-footer-row',
            role: 'row',
        },
        providers: [{
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
                useExisting: TsFooterRowComponent_1,
            }],
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'tsFooterRow'
    })
], TsFooterRowComponent);
/**
 * Data row definition for the {@link TsTableComponent}.
 *
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
let TsRowDefDirective = TsRowDefDirective_1 = class TsRowDefDirective extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
};
TsRowDefDirective = TsRowDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
        selector: '[tsRowDef]',
        providers: [
            {
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
                useExisting: TsRowDefDirective_1,
            },
            {
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
                useExisting: TsRowComponent,
            },
        ],
        // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: [
            'columns: tsRowDefColumns',
            'when: tsRowDefWhen',
        ],
    })
], TsRowDefDirective);

var TsTableComponent_1;
/**
 * The default debounce delay for column sizing update calls
 */
const COLUMN_DEBOUNCE_DELAY = 100;
const VIEWPORT_DEBOUNCE = 500;
/**
 * The payload for a columns change event
 */
class TsTableColumnsChangeEvent {
    constructor(
    // The table instance that originated the event
    table, 
    // The updated array of columns
    columns) {
        this.table = table;
        this.columns = columns;
    }
}
// Unique ID for each instance
let nextUniqueId = 0;
/**
 * The primary data table implementation
 *
 * @example
 *  <ts-table
 *               [columns]="myColumns"
 *               [dataSource]="dataSource"
 *               [multiTemplateDataRows]="false"
 *               [trackBy]="myTrackByFn"
 *               (columnsChange)="columnsWereUpdated($event)
 *               #myTable="tsTable"
 *  >
 *               <ng-container tsColumnDef="title">
 *                 <ts-header-cell *tsHeaderCellDef>
 *                   Title
 *                 </ts-header-cell>
 *                 <ts-cell *tsCellDef="let item">
 *                   {{ item.title }}
 *                 </ts-cell>
 *               </ng-container>
 *
 *               <ng-container tsColumnDef="id">
 *                 <ts-header-cell *tsHeaderCellDef>
 *                   ID
 *                 </ts-header-cell>
 *                 <ts-cell *tsCellDef="let item">
 *                   {{ item.id }},
 *                 </ts-cell>
 *               </ng-container>
 *
 *               <ts-header-row *tsHeaderRowDef="myTable.columnNames"></ts-header-row>
 *               <ts-row *tsRowDef="let row; columns: myTable.columnNames;"></ts-row>
 *  </ts-table>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/table</example-url>
 */
let TsTableComponent = TsTableComponent_1 = 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class TsTableComponent extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
    constructor(platform, renderer, differs, changeDetectorRef, role, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document, dir, elementRef, ngZone, windowService, viewportRuler) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform);
        this.platform = platform;
        this.renderer = renderer;
        this.differs = differs;
        this.changeDetectorRef = changeDetectorRef;
        this.document = document;
        this.dir = dir;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.windowService = windowService;
        this.viewportRuler = viewportRuler;
        /**
         * Combined stream of all of the columns resized events
         */
        this.columnResizeChanges$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(() => {
            if (this.headerCells && this.headerCells.length) {
                // TODO: Refactor deprecation
                // eslint-disable-next-line deprecation/deprecation
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...this.headerCells.map(cell => cell.resized)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('instance'), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // In that case, return a stream that we'll replace with the real one once everything is in place.
            return this.ngZone.onStable
                .asObservable()
                // TODO: Refactor deprecation
                // eslint-disable-next-line deprecation/deprecation
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => this.columnResizeChanges$));
        });
        /**
         * Create a debounced function to update CDK sticky styles
         */
        this.debouncedStickyColumnUpdate = Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["debounce"])(this.updateStickyColumnStyles, COLUMN_DEBOUNCE_DELAY);
        /**
         * Store a mutable array of internal column definitions
         */
        this.columnsInternal = [];
        /**
         * Override the sticky CSS class set by the `CdkTable`
         */
        this.stickyCssClass = 'ts-table--sticky';
        /**
         * Define the default component ID
         */
        this.uid = `ts-table-${nextUniqueId++}`;
        this._columns = [];
        /**
         * Define the density of the cells
         */
        this.density = 'comfy';
        this._id = this.uid;
        /**
         * Emit when a column is resized
         *
         * NOTE: This output is not debounce or throttled and may be called repeatedly
         */
        this.columnsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * Return a simple array of column names
     *
     * Used by {@link TsHeaderRowDefDirective} and {@link TsRowDefDirective}.
     */
    get columnNames() {
        return this.columns.map(c => c.name);
    }
    /**
     * Build array of columns to emit out to the consumer
     */
    get columnsToSendToConsumer() {
        const internalColumns = this.getFreshColumnsCopy(this.columnsInternal);
        const userColumns = this.getFreshColumnsCopy();
        const lastIndex = internalColumns.length - 1;
        // Reset the last column width to the consumer defined width
        internalColumns[lastIndex].width = userColumns[lastIndex].width;
        return internalColumns;
    }
    /**
     * Return the width of the element wrapping the table
     */
    get containerWidth() {
        return this.parentElement.offsetWidth;
    }
    /**
     * Determine if the container around the table has overflow (ie the table is scrollable)
     */
    get hasOverflowX() {
        return this.parentElement.scrollWidth > this.tableWidth;
    }
    /**
     * Return the parent HTMLElement
     */
    get parentElement() {
        return this.elementRef.nativeElement.parentNode;
    }
    /**
     * Determine the remaining space in the table after the columns take up their needed width
     */
    get remainingTableSpace() {
        // NOTE: The outer borders take up 2px so we subtract them here to avoid a 2px overflow.
        const borderOffset = 2;
        const remainingWidth = (this.containerWidth - this.totalWidthOfColumns) - borderOffset;
        return (remainingWidth > 0) ? remainingWidth : 0;
    }
    /**
     * Return the width of the table
     */
    get tableWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    /**
     * Return the total width of all visible columns
     */
    get totalWidthOfColumns() {
        const currentWidths = this.headerCells.map(hc => hc.cellWidth);
        const userWidths = this.columns.map(v => v.width);
        const columnsToReduce = currentWidths.slice();
        // NOTE: Since the last column is never resized by the user, we should use the original size for the last column and the current
        // size for all other columns.
        const lastIndex = userWidths.length - 1;
        columnsToReduce[lastIndex] = this.columns[lastIndex].width;
        return columnsToReduce.reduce((a, b) => a + b, 0);
    }
    /**
     * Define the array of columns
     *
     * @param value
     */
    set columns(value) {
        // istanbul ignore else
        if (value && (value.length > 0)) {
            this._columns = this.getFreshColumnsCopy(value);
            this.columnsInternal = this.getFreshColumnsCopy(value);
        }
    }
    get columns() {
        return this._columns;
    }
    /**
     * Define a custom ID
     *
     * @param value
     */
    set id(value) {
        this._id = value || this.uid;
    }
    get id() {
        return this._id;
    }
    /**
     * Subscribe to viewport changes
     */
    ngOnInit() {
        super.ngOnInit();
        this.viewportChange$ = this.viewportRuler.change(VIEWPORT_DEBOUNCE).pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this));
        this.viewportChange$.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(() => {
            this.windowService.nativeWindow.requestAnimationFrame(() => {
                this.updateInternalColumns(this.getFreshColumnsCopy());
                this.columnsChange.emit(new TsTableColumnsChangeEvent(this, this.columnsToSendToConsumer));
            });
        });
    }
    /**
     * Set up header cell changes subscription
     */
    ngAfterViewChecked() {
        this.subscribeToHeaderCellChanges();
    }
    /**
     * Subscribe to column resize events
     */
    ngAfterContentInit() {
        this.columnResizeChanges$
            .subscribe(v => {
            this.updateLastColumnWidth();
            // Update the recorded width for the changed column
            const found = this.columnsInternal.find(column => column.name === v.columnDef.name);
            // istanbul ignore else
            if (found) {
                found.width = v.cellWidth;
            }
            this.columnsChange.emit(new TsTableColumnsChangeEvent(this, this.columnsToSendToConsumer));
        });
    }
    /**
     * NOTE: Must be present for `untilComponentDestroyed`
     */
    ngOnDestroy() {
        // istanbul ignore else
        if (this.headerCellSubscription) {
            this.headerCellSubscription.unsubscribe();
        }
    }
    /**
     * Adjusts the last column of the array to fill any remaining space inside the table
     *
     * NOTE: Due to issues during testing, we have not made this function static.
     *
     * @param columns - The array of columns to adjust
     * @param remainingWidth - The remaining table width to be added to the last column
     * @returns The adjusted array of columns
     */
    addRemainingSpaceToLastColumn(columns, remainingWidth) {
        const lastColumn = columns[columns.length - 1];
        lastColumn.width = lastColumn.width + remainingWidth;
        return columns;
    }
    /**
     * Return a fresh clone of the passed in array of columns
     *
     * @param columns - The array of columns to clone
     * @returns The array of fresh columns
     */
    getFreshColumnsCopy(columns = this.columns) {
        return columns.slice().map(c => (Object.assign({}, c)));
    }
    /**
     * Set the column widths for all columns passed in
     *
     * @param columns - The array of columns
     */
    setAllColumnsToDefinedWidths(columns) {
        for (const column of columns) {
            this.setColumnWidthStyle(column.name, column.width, false);
        }
        this.updateStickyCellsIfNeeded();
    }
    /**
     * Set the width for a specific column
     *
     * @param columnName - The name of the column that needs it's width updated
     * @param width - The width to set
     * @param updateStickCells - Whether the sticky cells should be updated
     */
    setColumnWidthStyle(columnName, width, updateStickCells = true) {
        // eslint-disable-next-line no-underscore-dangle
        const columnDirective = this.headerCells.find(cell => cell.columnDef._name === columnName);
        // istanbul ignore else
        if (columnDirective) {
            columnDirective.setColumnWidth(width);
            // istanbul ignore else
            if (updateStickCells) {
                this.updateStickyCellsIfNeeded();
            }
        }
    }
    /**
     * Set up subscription to header cell changes
     */
    subscribeToHeaderCellChanges() {
        if (this.headerCellSubscription) {
            this.headerCellSubscription.unsubscribe();
        }
        this.headerCellSubscription = this.headerCells.changes
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this))
            .subscribe(() => {
            // 1. Set user widths
            this.setAllColumnsToDefinedWidths(this.getFreshColumnsCopy());
            // 2. Add space to last column as needed
            this.updateLastColumnWidth();
            // 3. Set all widths to internal columns
            this.setAllColumnsToDefinedWidths(this.getFreshColumnsCopy(this.columnsInternal));
            // 4. Alert the consumer
            this.columnsChange.emit(new TsTableColumnsChangeEvent(this, this.columnsToSendToConsumer));
            // Inject the header cell resize element in every cell except the last (last column is not resizable)
            this.headerCells.forEach((headerCellDirective, i) => {
                if (i !== this.headerCells.length - 1) {
                    headerCellDirective.injectResizeElement();
                }
            });
        });
    }
    /**
     * Update the internal columns array and set widths
     *
     * @param columns - The array of columns to update
     */
    updateInternalColumns(columns) {
        // If there is space left over, add all remaining space to the last column
        if (!this.hasOverflowX) {
            columns = this.addRemainingSpaceToLastColumn(columns, this.remainingTableSpace);
        }
        this.columnsInternal = columns;
        this.setAllColumnsToDefinedWidths(this.columnsInternal);
    }
    /**
     * Update the last column's width and update the internal columns
     */
    updateLastColumnWidth() {
        // 1. Determine last column width
        const columns = this.getFreshColumnsCopy();
        const lastIndex = columns.length - 1;
        const lastColumn = columns[lastIndex];
        let newWidth = lastColumn.width;
        if (!this.hasOverflowX) {
            newWidth = lastColumn.width + this.remainingTableSpace;
        }
        // 2. Set the width
        this.setColumnWidthStyle(lastColumn.name, newWidth);
        // 3. Update internal columns
        this.columnsInternal[lastIndex].width = newWidth;
    }
    /**
     * Trigger an update on sticky cells if they exist
     */
    updateStickyCellsIfNeeded() {
        // NOTE: To lessen the thrashing, only call the sticky column updater if there are defined sticky columns
        const stickyCells = this.headerCells.toArray().filter(c => c.columnDef.sticky || c.columnDef.stickyEnd);
        // istanbul ignore else
        if (stickyCells.length) {
            this.debouncedStickyColumnUpdate();
        }
    }
};
TsTableComponent.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(TsHeaderCellDirective, { descendants: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])
], TsTableComponent.prototype, "headerCells", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(TsRowComponent),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])
], TsTableComponent.prototype, "rows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
], TsTableComponent.prototype, "columns", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsTableComponent.prototype, "density", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsTableComponent.prototype, "id", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsTableComponent.prototype, "columnsChange", void 0);
TsTableComponent = TsTableComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-table, table[ts-table]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
        host: {
            'class': 'ts-table',
            '[class.ts-table--comfy]': 'density === "comfy"',
            '[class.ts-table--compact]': 'density === "compact"',
            '[id]': 'id',
        },
        providers: [{
                provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
                useExisting: TsTableComponent_1,
            }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        exportAs: 'tsTable',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-table{--table-bg:#fafafa;--header-bg:#cecdd1;--header-text-color:#302d35;--border-color:#cecdd1;--header-border-color:#999;--drop-bg:#e8eef3;--z-index-base-context:2;--z-index-resize-background:calc(var(--z-index-base-context) + 1);--z-index-resize-grabber:calc(var(--z-index-resize-background) + 1);--cell-padding:16px;--sticky-end-z:50;--grip-vertical-adjustment:50%;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border-collapse:separate;border-spacing:unset;max-height:100%;table-layout:fixed;width:100%}.ts-table :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-table h1,.ts-table h2,.ts-table h3,.ts-table h4,.ts-table h5,.ts-table p{margin:unset}.ts-table:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-table.ts-table--compact{--cell-padding:4px;--grip-vertical-adjustment:calc(50% - 4px)}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell{overflow:hidden}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell .ts-header-cell__resizer{transform:translateX(40%)}.ts-table .ts-header-row{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;background-color:var(--header-bg);color:var(--header-text-color);font-weight:700;transition:background-color .2s ease-out}.ts-table .ts-header-row::after{content:'';display:block}.ts-table .ts-row{border-bottom:1px solid var(--border-color)}.ts-table .ts-row:hover .ts-cell{background-color:var(--drop-bg)}.ts-table .ts-row::after{content:'';display:inline-block;min-height:inherit}.ts-table .ts-cell,.ts-table .ts-footer-cell,.ts-table .ts-header-cell{min-height:inherit;position:relative;text-align:left;word-wrap:break-word}.ts-table .ts-cell.ts-table__column--sticky-end,.ts-table .ts-footer-cell.ts-table__column--sticky-end,.ts-table .ts-header-cell.ts-table__column--sticky-end{border-left:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-footer-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-header-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end){border-right:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-column-no-wrap,.ts-table .ts-footer-cell.ts-column-no-wrap,.ts-table .ts-header-cell.ts-column-no-wrap{white-space:nowrap}.ts-table .ts-cell--align-right,.ts-table .ts-footer-cell--align-right,.ts-table .ts-header-cell--align-right{text-align:right}.ts-table .ts-cell--align-right .ts-sort-header-container,.ts-table .ts-footer-cell--align-right .ts-sort-header-container,.ts-table .ts-header-cell--align-right .ts-sort-header-container{justify-content:flex-end}.ts-table .ts-cell--align-left,.ts-table .ts-footer-cell--align-left,.ts-table .ts-header-cell--align-left{text-align:left}.ts-table .ts-cell--align-center,.ts-table .ts-footer-cell--align-center,.ts-table .ts-header-cell--align-center{text-align:center}.ts-table .ts-cell,.ts-table .ts-footer-cell{background-color:var(--table-bg);overflow:hidden;padding:var(--cell-padding);text-overflow:ellipsis;transition:background-color .2s ease-out;white-space:nowrap}.ts-table .ts-cell.ts-table__column--sticky,.ts-table .ts-footer-cell.ts-table__column--sticky{background-color:var(--table-bg)}.ts-table .ts-header-cell{background-color:var(--header-bg);border-color:var(--header-border-color);padding:var(--cell-padding)}.ts-table .ts-header-cell:not(:last-of-type){position:relative}.ts-table .ts-header-cell:not(:last-of-type)::after{background-color:var(--header-border-color);bottom:0;content:'';display:block;left:calc(100% - 1px);opacity:0;position:absolute;top:0;transition:opacity .2s ease-out;width:1px;z-index:var(--z-index-base-context)}.ts-table .ts-header-cell:not(:last-of-type):focus::after,.ts-table .ts-header-cell:not(:last-of-type):hover::after{opacity:1}.ts-table .ts-header-cell.ts-sort-header-sorted{color:#2f854d}.ts-table .ts-header-cell:nth-child(1){z-index:39!important}.ts-table .ts-header-cell:nth-child(2){z-index:38!important}.ts-table .ts-header-cell:nth-child(3){z-index:37!important}.ts-table .ts-header-cell:nth-child(4){z-index:36!important}.ts-table .ts-header-cell:nth-child(5){z-index:35!important}.ts-table .ts-header-cell:nth-child(6){z-index:34!important}.ts-table .ts-header-cell:nth-child(7){z-index:33!important}.ts-table .ts-header-cell:nth-child(8){z-index:32!important}.ts-table .ts-header-cell:nth-child(9){z-index:31!important}.ts-table .ts-header-cell:nth-child(10){z-index:30!important}.ts-table .ts-header-cell:nth-child(11){z-index:29!important}.ts-table .ts-header-cell:nth-child(12){z-index:28!important}.ts-table .ts-header-cell:nth-child(13){z-index:27!important}.ts-table .ts-header-cell:nth-child(14){z-index:26!important}.ts-table .ts-header-cell:nth-child(15){z-index:25!important}.ts-table .ts-header-cell:nth-child(16){z-index:24!important}.ts-table .ts-header-cell:nth-child(17){z-index:23!important}.ts-table .ts-header-cell:nth-child(18){z-index:22!important}.ts-table .ts-header-cell:nth-child(19){z-index:21!important}.ts-table .ts-header-cell:nth-child(20){z-index:20!important}.ts-table .ts-header-cell:nth-child(21){z-index:19!important}.ts-table .ts-header-cell:nth-child(22){z-index:18!important}.ts-table .ts-header-cell:nth-child(23){z-index:17!important}.ts-table .ts-header-cell:nth-child(24){z-index:16!important}.ts-table .ts-header-cell:nth-child(25){z-index:15!important}.ts-table .ts-header-cell:nth-child(26){z-index:14!important}.ts-table .ts-header-cell:nth-child(27){z-index:13!important}.ts-table .ts-header-cell:nth-child(28){z-index:12!important}.ts-table .ts-header-cell:nth-child(29){z-index:11!important}.ts-table .ts-header-cell:nth-child(30){z-index:10!important}.ts-table .ts-header-cell:nth-child(31){z-index:9!important}.ts-table .ts-header-cell:nth-child(32){z-index:8!important}.ts-table .ts-header-cell:nth-child(33){z-index:7!important}.ts-table .ts-header-cell:nth-child(34){z-index:6!important}.ts-table .ts-header-cell:nth-child(35){z-index:5!important}.ts-table .ts-header-cell:nth-child(36){z-index:4!important}.ts-table .ts-header-cell:nth-child(37){z-index:3!important}.ts-table .ts-header-cell:nth-child(38){z-index:2!important}.ts-table .ts-header-cell:nth-child(39){z-index:1!important}.ts-table .ts-header-cell:nth-child(40){z-index:0!important}.ts-table .ts-header-cell.ts-table__column--sticky-end{z-index:var(--sticky-end-z)!important}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer{opacity:1}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer::before{width:7px}.ts-table .ts-header-cell__resizer{bottom:-1px;cursor:col-resize;display:block;opacity:0;position:absolute;right:0;top:-1px;transform:translateX(50%);transition:opacity .2s ease-out;width:24px;z-index:calc(var(--z-index-resize-background))}.ts-table .ts-header-cell__resizer::before{background-color:#00538a;bottom:1px;content:'';display:block;left:50%;position:absolute;top:0;transform:translateX(-50%);transition:width .1s ease-out;width:1px}.ts-table .ts-header-cell__resizer::after{--grabber-icon-font-size:14px;color:#f2f0f7;content:'\\2026';display:block;font-size:var(--grabber-icon-font-size);height:11px;left:50%;position:absolute;top:30%;transform:rotate(90deg) translate(var(--grip-vertical-adjustment),-3px);z-index:var(--z-index-resize-grabber)}"]
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"])('role')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], String, Object, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]])
], TsTableComponent);

/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using {@link TsSortDirective}), and paginator (using {@link TsPaginatorComponent}).
 */
class TsTableDataSource {
    /**
     * Set up data and change subscriptions
     *
     * @param initialData
     */
    constructor(initialData = []) {
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /**
     * Array of data that should be rendered by the table, where each object represents one row.
     *
     * @param data
     */
    set data(data) {
        this._data.next(data);
    }
    get data() {
        return this._data.value;
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with the
     * provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        if (this._renderChangesSubscription) {
            this._renderChangesSubscription.unsubscribe();
        }
        // Watch for base data or filter changes to provide a filtered set of data.
        this._renderChangesSubscription = this._data
            // Watched for paged data changes and send the result to the table to render.
            .subscribe(data => this._renderData.next(data));
    }
    /**
     * Used by the {@link TsTableComponent}. Called when it connects to the data source.
     */
    connect() {
        return this._renderData;
    }
    /**
     * Used by the {@link TsTableComponent}. Called when it is destroyed. No-op.
     */
    disconnect() { }
}

// NOTE: Moving declarations/exports items into shared array breaks documentation generation.
let TsTableModule = class TsTableModule {
};
TsTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_4__["TsPaginatorModule"],
            _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_5__["TsSortModule"],
        ],
        declarations: [
            // Table
            TsTableComponent,
            // Template definitions
            TsHeaderCellDefDirective,
            TsHeaderRowDefDirective,
            TsColumnDefDirective,
            TsCellDefDirective,
            TsRowDefDirective,
            TsFooterCellDefDirective,
            TsFooterRowDefDirective,
            // Cell directives
            TsHeaderCellDirective,
            TsCellDirective,
            TsFooterCellDirective,
            // Row directives
            TsHeaderRowComponent,
            TsRowComponent,
            TsFooterRowComponent,
        ],
        exports: [
            // Table
            TsTableComponent,
            // Template definitions
            TsHeaderCellDefDirective,
            TsHeaderRowDefDirective,
            TsColumnDefDirective,
            TsCellDefDirective,
            TsRowDefDirective,
            TsFooterCellDefDirective,
            TsFooterRowDefDirective,
            // Cell directives
            TsHeaderCellDirective,
            TsCellDirective,
            TsFooterCellDirective,
            // Row directives
            TsHeaderRowComponent,
            TsRowComponent,
            TsFooterRowComponent,
        ],
    })
], TsTableModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-table.js.map


/***/ }),

/***/ "../../dist/libs/ui/table/terminus-ui-table.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/table/terminus-ui-table.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: TsTableModuleNgFactory, RenderType_TsHeaderRowComponent, View_TsHeaderRowComponent_0, View_TsHeaderRowComponent_Host_0, TsHeaderRowComponentNgFactory, RenderType_TsRowComponent, View_TsRowComponent_0, View_TsRowComponent_Host_0, TsRowComponentNgFactory, RenderType_TsFooterRowComponent, View_TsFooterRowComponent_0, View_TsFooterRowComponent_Host_0, TsFooterRowComponentNgFactory, RenderType_TsTableComponent, View_TsTableComponent_0, View_TsTableComponent_Host_0, TsTableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTableModuleNgFactory", function() { return TsTableModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsHeaderRowComponent", function() { return RenderType_TsHeaderRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsHeaderRowComponent_0", function() { return View_TsHeaderRowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsHeaderRowComponent_Host_0", function() { return View_TsHeaderRowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsHeaderRowComponentNgFactory", function() { return TsHeaderRowComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsRowComponent", function() { return RenderType_TsRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsRowComponent_0", function() { return View_TsRowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsRowComponent_Host_0", function() { return View_TsRowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsRowComponentNgFactory", function() { return TsRowComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsFooterRowComponent", function() { return RenderType_TsFooterRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsFooterRowComponent_0", function() { return View_TsFooterRowComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsFooterRowComponent_Host_0", function() { return View_TsFooterRowComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsFooterRowComponentNgFactory", function() { return TsFooterRowComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsTableComponent", function() { return RenderType_TsTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTableComponent_0", function() { return View_TsTableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsTableComponent_Host_0", function() { return View_TsTableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTableComponentNgFactory", function() { return TsTableComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-table */ "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */ "../../node_modules/@angular/material/dialog/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */ "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ui-pipes */ "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
/* harmony import */ var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @terminus/ui-validation-messages */ "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @terminus/ui-validators */ "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
/* harmony import */ var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @terminus/ui-selection-list */ "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @terminus/ui-sort */ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @terminus/ui-menu */ "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @terminus/ui-checkbox */ "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
/* harmony import */ var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @terminus/ui-option */ "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
/* harmony import */ var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @terminus/ui-chip */ "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
/* harmony import */ var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @terminus/ui-form-field */ "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
/* harmony import */ var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @terminus/ui-input */ "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
/* harmony import */ var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @terminus/ui-tooltip */ "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
/* harmony import */ var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @terminus/ui-paginator */ "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













































var TsTableModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_19__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_19__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortHeaderIntl"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TS_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_32__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_32__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_33__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_33__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_36__["TsMenuModule"], _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_36__["TsMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_43__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_43__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_44__["TsPaginatorModule"], _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_44__["TsPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableModule"], _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TS_DATE_FORMATS"], [])]); });

var styles_TsHeaderRowComponent = [];
var RenderType_TsHeaderRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsHeaderRowComponent, data: {} });

function View_TsHeaderRowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_TsHeaderRowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-header-row", [["class", "ts-header-row"], ["role", "row"]], null, null, null, View_TsHeaderRowComponent_0, RenderType_TsHeaderRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsHeaderRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
var TsHeaderRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-header-row, tr[ts-header-row]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsHeaderRowComponent"], View_TsHeaderRowComponent_Host_0, {}, {}, []);

var styles_TsRowComponent = [];
var RenderType_TsRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsRowComponent, data: {} });

function View_TsRowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_TsRowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-row", [["class", "ts-row"], ["role", "row"]], null, null, null, View_TsRowComponent_0, RenderType_TsRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
var TsRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-row, tr[ts-row]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsRowComponent"], View_TsRowComponent_Host_0, {}, {}, []);

var styles_TsFooterRowComponent = [];
var RenderType_TsFooterRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsFooterRowComponent, data: {} });

function View_TsFooterRowComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_TsFooterRowComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-footer-row", [["class", "ts-footer-row"], ["role", "row"]], null, null, null, View_TsFooterRowComponent_0, RenderType_TsFooterRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkFooterRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsFooterRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsFooterRowComponent"], [], null, null)], null, null); }
var TsFooterRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-footer-row, tr[ts-footer-row]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsFooterRowComponent"], View_TsFooterRowComponent_Host_0, {}, {}, []);

var styles_TsTableComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-table{--table-bg:#fafafa;--header-bg:#cecdd1;--header-text-color:#302d35;--border-color:#cecdd1;--header-border-color:#999;--drop-bg:#e8eef3;--z-index-base-context:2;--z-index-resize-background:calc(var(--z-index-base-context) + 1);--z-index-resize-grabber:calc(var(--z-index-resize-background) + 1);--cell-padding:16px;--sticky-end-z:50;--grip-vertical-adjustment:50%;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border-collapse:separate;border-spacing:unset;max-height:100%;table-layout:fixed;width:100%}.ts-table :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-table h1,.ts-table h2,.ts-table h3,.ts-table h4,.ts-table h5,.ts-table p{margin:unset}.ts-table:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-table.ts-table--compact{--cell-padding:4px;--grip-vertical-adjustment:calc(50% - 4px)}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell{overflow:hidden}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell .ts-header-cell__resizer{transform:translateX(40%)}.ts-table .ts-header-row{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;background-color:var(--header-bg);color:var(--header-text-color);font-weight:700;transition:background-color .2s ease-out}.ts-table .ts-header-row::after{content:'';display:block}.ts-table .ts-row{border-bottom:1px solid var(--border-color)}.ts-table .ts-row:hover .ts-cell{background-color:var(--drop-bg)}.ts-table .ts-row::after{content:'';display:inline-block;min-height:inherit}.ts-table .ts-cell,.ts-table .ts-footer-cell,.ts-table .ts-header-cell{min-height:inherit;position:relative;text-align:left;word-wrap:break-word}.ts-table .ts-cell.ts-table__column--sticky-end,.ts-table .ts-footer-cell.ts-table__column--sticky-end,.ts-table .ts-header-cell.ts-table__column--sticky-end{border-left:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-footer-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-header-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end){border-right:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-column-no-wrap,.ts-table .ts-footer-cell.ts-column-no-wrap,.ts-table .ts-header-cell.ts-column-no-wrap{white-space:nowrap}.ts-table .ts-cell--align-right,.ts-table .ts-footer-cell--align-right,.ts-table .ts-header-cell--align-right{text-align:right}.ts-table .ts-cell--align-right .ts-sort-header-container,.ts-table .ts-footer-cell--align-right .ts-sort-header-container,.ts-table .ts-header-cell--align-right .ts-sort-header-container{justify-content:flex-end}.ts-table .ts-cell--align-left,.ts-table .ts-footer-cell--align-left,.ts-table .ts-header-cell--align-left{text-align:left}.ts-table .ts-cell--align-center,.ts-table .ts-footer-cell--align-center,.ts-table .ts-header-cell--align-center{text-align:center}.ts-table .ts-cell,.ts-table .ts-footer-cell{background-color:var(--table-bg);overflow:hidden;padding:var(--cell-padding);text-overflow:ellipsis;transition:background-color .2s ease-out;white-space:nowrap}.ts-table .ts-cell.ts-table__column--sticky,.ts-table .ts-footer-cell.ts-table__column--sticky{background-color:var(--table-bg)}.ts-table .ts-header-cell{background-color:var(--header-bg);border-color:var(--header-border-color);padding:var(--cell-padding)}.ts-table .ts-header-cell:not(:last-of-type){position:relative}.ts-table .ts-header-cell:not(:last-of-type)::after{background-color:var(--header-border-color);bottom:0;content:'';display:block;left:calc(100% - 1px);opacity:0;position:absolute;top:0;transition:opacity .2s ease-out;width:1px;z-index:var(--z-index-base-context)}.ts-table .ts-header-cell:not(:last-of-type):focus::after,.ts-table .ts-header-cell:not(:last-of-type):hover::after{opacity:1}.ts-table .ts-header-cell.ts-sort-header-sorted{color:#2f854d}.ts-table .ts-header-cell:nth-child(1){z-index:39!important}.ts-table .ts-header-cell:nth-child(2){z-index:38!important}.ts-table .ts-header-cell:nth-child(3){z-index:37!important}.ts-table .ts-header-cell:nth-child(4){z-index:36!important}.ts-table .ts-header-cell:nth-child(5){z-index:35!important}.ts-table .ts-header-cell:nth-child(6){z-index:34!important}.ts-table .ts-header-cell:nth-child(7){z-index:33!important}.ts-table .ts-header-cell:nth-child(8){z-index:32!important}.ts-table .ts-header-cell:nth-child(9){z-index:31!important}.ts-table .ts-header-cell:nth-child(10){z-index:30!important}.ts-table .ts-header-cell:nth-child(11){z-index:29!important}.ts-table .ts-header-cell:nth-child(12){z-index:28!important}.ts-table .ts-header-cell:nth-child(13){z-index:27!important}.ts-table .ts-header-cell:nth-child(14){z-index:26!important}.ts-table .ts-header-cell:nth-child(15){z-index:25!important}.ts-table .ts-header-cell:nth-child(16){z-index:24!important}.ts-table .ts-header-cell:nth-child(17){z-index:23!important}.ts-table .ts-header-cell:nth-child(18){z-index:22!important}.ts-table .ts-header-cell:nth-child(19){z-index:21!important}.ts-table .ts-header-cell:nth-child(20){z-index:20!important}.ts-table .ts-header-cell:nth-child(21){z-index:19!important}.ts-table .ts-header-cell:nth-child(22){z-index:18!important}.ts-table .ts-header-cell:nth-child(23){z-index:17!important}.ts-table .ts-header-cell:nth-child(24){z-index:16!important}.ts-table .ts-header-cell:nth-child(25){z-index:15!important}.ts-table .ts-header-cell:nth-child(26){z-index:14!important}.ts-table .ts-header-cell:nth-child(27){z-index:13!important}.ts-table .ts-header-cell:nth-child(28){z-index:12!important}.ts-table .ts-header-cell:nth-child(29){z-index:11!important}.ts-table .ts-header-cell:nth-child(30){z-index:10!important}.ts-table .ts-header-cell:nth-child(31){z-index:9!important}.ts-table .ts-header-cell:nth-child(32){z-index:8!important}.ts-table .ts-header-cell:nth-child(33){z-index:7!important}.ts-table .ts-header-cell:nth-child(34){z-index:6!important}.ts-table .ts-header-cell:nth-child(35){z-index:5!important}.ts-table .ts-header-cell:nth-child(36){z-index:4!important}.ts-table .ts-header-cell:nth-child(37){z-index:3!important}.ts-table .ts-header-cell:nth-child(38){z-index:2!important}.ts-table .ts-header-cell:nth-child(39){z-index:1!important}.ts-table .ts-header-cell:nth-child(40){z-index:0!important}.ts-table .ts-header-cell.ts-table__column--sticky-end{z-index:var(--sticky-end-z)!important}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer{opacity:1}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer::before{width:7px}.ts-table .ts-header-cell__resizer{bottom:-1px;cursor:col-resize;display:block;opacity:0;position:absolute;right:0;top:-1px;transform:translateX(50%);transition:opacity .2s ease-out;width:24px;z-index:calc(var(--z-index-resize-background))}.ts-table .ts-header-cell__resizer::before{background-color:#00538a;bottom:1px;content:'';display:block;left:50%;position:absolute;top:0;transform:translateX(-50%);transition:width .1s ease-out;width:1px}.ts-table .ts-header-cell__resizer::after{--grabber-icon-font-size:14px;color:#f2f0f7;content:'\\2026';display:block;font-size:var(--grabber-icon-font-size);height:11px;left:50%;position:absolute;top:30%;transform:rotate(90deg) translate(var(--grip-vertical-adjustment),-3px);z-index:var(--z-index-resize-grabber)}"];
var RenderType_TsTableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsTableComponent, data: {} });

function View_TsTableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { _rowOutlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { _headerRowOutlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, { _footerRowOutlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[2, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["HeaderRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, [[1, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["DataRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, [[3, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["FooterRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
function View_TsTableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "ts-table", [["class", "ts-table"]], [[2, "ts-table--comfy", null], [2, "ts-table--compact", null], [8, "id", 0]], null, null, View_TsTableComponent_0, RenderType_TsTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTable"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 11780096, null, 6, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableComponent"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ViewportRuler"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { _contentFooterRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { headerCells: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { rows: 1 })], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).density === "comfy"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).density === "compact"); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var TsTableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-table, table[ts-table]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableComponent"], View_TsTableComponent_Host_0, { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows", columns: "columns", density: "density", id: "id" }, { columnsChange: "columnsChange" }, ["caption"]);



/***/ }),

/***/ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/cdk/fesm2015/drag-drop.js ***!
  \***************************************************************************************************/
/*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");









/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-styling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Extended CSSStyleDeclaration that includes a couple of drag-related
 * properties that aren't in the built-in TS typings.
 * @record
 */
function DragCSSStyleDeclaration() { }
if (false) {}
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    const userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/transition-duration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    const computedStyle = getComputedStyle(element);
    /** @type {?} */
    const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    const property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    prop => prop === 'transform' || prop === 'all'));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    const propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    const value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    part => part.trim()));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/client-rect.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    const clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    const { top, bottom, left, right } = clientRect;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param {?} rect ClientRect to check against.
 * @param {?} threshold Threshold around the ClientRect.
 * @param {?} pointerX Coordinates along the X axis.
 * @param {?} pointerY Coordinates along the Y axis.
 * @return {?}
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    const { top, right, bottom, left, width, height } = rect;
    /** @type {?} */
    const xThreshold = width * threshold;
    /** @type {?} */
    const yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/parent-position-tracker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object holding the scroll position of something.
 * @record
 */
function ScrollPosition() { }
if (false) {}
/**
 * Keeps track of the scroll position and dimensions of the parents of an element.
 */
class ParentPositionTracker {
    /**
     * @param {?} _document
     * @param {?} _viewportRuler
     */
    constructor(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /**
         * Cached positions of the scrollable parent elements.
         */
        this.positions = new Map();
    }
    /**
     * Clears the cached positions.
     * @return {?}
     */
    clear() {
        this.positions.clear();
    }
    /**
     * Caches the positions. Should be called at the beginning of a drag sequence.
     * @param {?} elements
     * @return {?}
     */
    cache(elements) {
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        }));
    }
    /**
     * Handles scrolling while a drag is taking place.
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        /** @type {?} */
        const cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        /** @type {?} */
        const scrolledParentNode = target === this._document ? target.documentElement : target;
        /** @type {?} */
        const scrollPosition = cachedPosition.scrollPosition;
        /** @type {?} */
        let newTop;
        /** @type {?} */
        let newLeft;
        if (target === this._document) {
            /** @type {?} */
            const viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = ((/** @type {?} */ (target))).scrollTop;
            newLeft = ((/** @type {?} */ (target))).scrollLeft;
        }
        /** @type {?} */
        const topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        const leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach((/**
         * @param {?} position
         * @param {?} node
         * @return {?}
         */
        (position, node) => {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Object that can be used to configure the behavior of DragRef.
 * @record
 */
function DragRefConfig() { }
if (false) {}
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
const activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Internal compile-time-only representation of a `DragRef`.
 * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
 * \@docs-private
 * @record
 */
function DragRefInternal() { }
/**
 * Template that can be used to create a drag helper element (e.g. a preview or a placeholder).
 * @record
 * @template T
 */
function DragHelperTemplate() { }
if (false) {}
/**
 * Template that can be used to create a drag preview element.
 * @record
 * @template T
 */
function DragPreviewTemplate() { }
if (false) {}
/**
 * Point on the page or within an element.
 * @record
 */
function Point() { }
if (false) {}
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * @template T
 */
class DragRef {
    /**
     * @param {?} element
     * @param {?} _config
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (this._handles.length) {
                /** @type {?} */
                const targetHandle = this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => {
                    /** @type {?} */
                    const target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
                    this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!this.disabled) {
                this._initializeDragSequence(this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            if (!this._hasStartedDragging) {
                /** @type {?} */
                const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
                /** @type {?} */
                const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
                /** @type {?} */
                const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
                    if (!isDelayElapsed) {
                        this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!this._dropContainer || !this._dropContainer.isDragging()) {
                        this._hasStartedDragging = true;
                        this._ngZone.run((/**
                         * @return {?}
                         */
                        () => this._startDragSequence(event)));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) {
                    this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
            this._hasMoved = true;
            this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (this._dropContainer) {
                this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                const activeTransform = this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
                this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
                    this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (this._moveEvents.observers.length) {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this._moveEvents.next({
                        source: this,
                        pointerPosition: constrainedPointerPosition,
                        event,
                        distance: this._getDragDistance(constrainedPointerPosition),
                        delta: this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._endDragSequence(event);
        });
        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._toggleNativeDragInteractions();
        }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._placeholder;
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._rootElement;
    }
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     * @return {?}
     */
    getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    withHandles(handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        handle => Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle)));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => toggleNativeDragInteractions(handle, false)));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    withPreviewTemplate(template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    withPlaceholderTemplate(template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    withRootElement(rootElement) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            (/** @type {?} */ (this))._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            }));
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    withBoundaryElement(boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            () => (/** @type {?} */ (this))._containInsideBoundaryOnResize()));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
        }
        removeNode(this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._anchor = (/** @type {?} */ (null));
    }
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    disableHandle(handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    enableHandle(handle) {
        this._disabledHandles.delete(handle);
    }
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    _withDropContainer(container) {
        this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        /** @type {?} */
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    setFreeDragPosition(value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    _sortFromLastPointerPosition() {
        /** @type {?} */
        const position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
        }
    }
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    _removeSubscriptions() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    }
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPreview() {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    }
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPlaceholder() {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    _endDragSequence(event) {
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            () => {
                this._cleanupDragArtifacts(event);
                this._cleanupCachedDimensions();
                this._dragDropRegistry.stopDragging(this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.ended.next({
                    source: this,
                    distance: this._getDragDistance(this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    }
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    _startDragSequence(event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        /** @type {?} */
        const dropContainer = this._dropContainer;
        if (dropContainer) {
            /** @type {?} */
            const element = this._rootElement;
            /** @type {?} */
            const parent = (/** @type {?} */ (element.parentNode));
            /** @type {?} */
            const preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            const placeholder = this._placeholder = this._createPlaceholderElement();
            /** @type {?} */
            const anchor = this._anchor = this._anchor || this._document.createComment('');
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild(parent.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this._initialContainer = this._initialIndex = (/** @type {?} */ (undefined));
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    _initializeDragSequence(referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        const isDragging = this.isDragging();
        /** @type {?} */
        const isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        const isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        const rootElement = this._rootElement;
        /** @type {?} */
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @param {?} scrollEvent
         * @return {?}
         */
        scrollEvent => {
            this._updateOnScroll(scrollEvent);
        }));
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        /** @type {?} */
        const previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        const pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    }
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    _cleanupDragArtifacts(event) {
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        (/** @type {?} */ (this._anchor.parentNode)).replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = (/** @type {?} */ (this._dropContainer));
            /** @type {?} */
            const currentIndex = container.getItemIndex(this);
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            /** @type {?} */
            const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
            /** @type {?} */
            const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            this.ended.next({ source: this, distance });
            this.dropped.next({
                item: this,
                currentIndex,
                previousIndex: this._initialIndex,
                container: container,
                previousContainer: this._initialContainer,
                isPointerOverContainer,
                distance
            });
            container.drop(this, currentIndex, this._initialContainer, isPointerOverContainer, distance, this._initialIndex);
            this._dropContainer = this._initialContainer;
        }));
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    _updateActiveDropContainer({ x, y }) {
        // Drop container that draggable has been moved into.
        /** @type {?} */
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                // Notify the old container that the item has left.
                this.exited.next({ item: this, container: (/** @type {?} */ (this._dropContainer)) });
                (/** @type {?} */ (this._dropContainer)).exit(this);
                // Notify the new container that the item has entered.
                this._dropContainer = (/** @type {?} */ (newContainer));
                this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? this._initialIndex : undefined);
                this.entered.next({
                    item: this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    _createPreviewElement() {
        /** @type {?} */
        const previewConfig = this._previewTemplate;
        /** @type {?} */
        const previewClass = this.previewClass;
        /** @type {?} */
        const previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        let preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            /** @type {?} */
            const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            /** @type {?} */
            const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, (/** @type {?} */ (rootRect)));
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            /** @type {?} */
            const element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: `${this._config.zIndex || 1000}`
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                className => preview.classList.add(className)));
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    _animatePreviewToPlaceholder() {
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        const placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        const duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                /** @type {?} */
                const handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (!event || (event.target === this._preview && event.propertyName === 'transform')) {
                        this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                const timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                this._preview.addEventListener('transitionend', handler);
            }));
        }));
    }
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    _createPlaceholderElement() {
        /** @type {?} */
        const placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        let placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    _getPointerPositionInElement(referenceElement, event) {
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        const scrollPosition = this._getViewportScrollPosition();
        /** @type {?} */
        const x = point.pageX - referenceRect.left - scrollPosition.left;
        /** @type {?} */
        const y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    }
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        const point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        /** @type {?} */
        const scrollPosition = this._getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} point
     * @return {?}
     */
    _getConstrainedPointerPosition(point) {
        /** @type {?} */
        const constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            const { x: pickupX, y: pickupY } = this._pickupPositionInElement;
            /** @type {?} */
            const boundaryRect = this._boundaryRect;
            /** @type {?} */
            const previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            const minY = boundaryRect.top + pickupY;
            /** @type {?} */
            const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            const minX = boundaryRect.left + pickupX;
            /** @type {?} */
            const maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    }
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        /** @type {?} */
        const delta = this._pointerDirectionDelta;
        /** @type {?} */
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        const changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        const changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    }
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    }
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _removeRootElementListeners(element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    _applyRootElementTransform(x, y) {
        /** @type {?} */
        const transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    _getDragDistance(currentPosition) {
        /** @type {?} */
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    }
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        /** @type {?} */
        const leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        const rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        const topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y, x });
        }
    }
    /**
     * Gets the drag start delay, based on the event type.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getDragStartDelay(event) {
        /** @type {?} */
        const value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    }
    /**
     * Updates the internal state of the draggable element when scrolling has occurred.
     * @private
     * @param {?} event
     * @return {?}
     */
    _updateOnScroll(event) {
        /** @type {?} */
        const scrollDifference = this._parentPositions.handleScroll(event);
        // ClientRect dimensions are based on the page's scroll position so
        // we have to update the cached boundary ClientRect if the user has scrolled.
        if (this._boundaryRect && scrollDifference) {
            adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
        }
    }
    /**
     * Gets the scroll position of the viewport.
     * @private
     * @return {?}
     */
    _getViewportScrollPosition() {
        /** @type {?} */
        const cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    }
}
if (false) {}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    const clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    const descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    const descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (let i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        const cloneCanvases = clone.querySelectorAll('canvas');
        for (let i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            const correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param {?} node Node to be removed.
 * @return {?}
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    const rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return (/** @type {?} */ (rootNodes[0]));
    }
    /** @type {?} */
    const wrapper = _document.createElement('div');
    rootNodes.forEach((/**
     * @param {?} node
     * @return {?}
     */
    node => wrapper.appendChild(node)));
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param {?} target Element that needs to be resized.
 * @param {?} sourceRect Dimensions of the source element.
 * @return {?}
 */
function matchElementSize(target, sourceRect) {
    target.style.width = `${sourceRect.width}px`;
    target.style.height = `${sourceRect.height}px`;
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    const from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    const to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    const target = array[from];
    /** @type {?} */
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drop-list-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const AUTO_SCROLL_STEP = 2;
/**
 * Entry in the position cache for draggable items.
 * \@docs-private
 * @record
 */
function CachedItemPosition() { }
if (false) {}
/** @enum {number} */
const AutoScrollVerticalDirection = {
    NONE: 0, UP: 1, DOWN: 2,
};
/** @enum {number} */
const AutoScrollHorizontalDirection = {
    NONE: 0, LEFT: 1, RIGHT: 2,
};
/**
 * Internal compile-time-only representation of a `DropListRef`.
 * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
 * \@docs-private
 * @record
 */
function DropListRefInternal() { }
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * @template T
 */
class DropListRef {
    /**
     * @param {?} element
     * @param {?} _dragDropRegistry
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     */
    constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly.
         */
        this._cachedShadowRoot = null;
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        () => {
            this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const node = this._scrollNode;
                if (this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
    }
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
    }
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._isDragging;
    }
    /**
     * Starts dragging an item.
     * @return {?}
     */
    start() {
        /** @type {?} */
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        this.beforeStarted.next();
        this._isDragging = true;
        // We need to disable scroll snapping while the user is dragging, because it breaks automatic
        // scrolling. The browser seems to round the value based on the snapping points which means
        // that we can't increment/decrement the scroll position.
        this._initialScrollSnap = styles.msScrollSnapType || ((/** @type {?} */ (styles))).scrollSnapType || '';
        ((/** @type {?} */ (styles))).scrollSnapType = styles.msScrollSnapType = 'none';
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._startReceiving(this)));
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?=} index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     * @return {?}
     */
    enter(item, pointerX, pointerY, index) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        let newIndex;
        if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
            if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
        }
        else {
            newIndex = index;
        }
        /** @type {?} */
        const activeDraggables = this._activeDraggables;
        /** @type {?} */
        const currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        const placeholder = item.getPlaceholderElement();
        /** @type {?} */
        let newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            const element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            /** @type {?} */
            const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
            if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
                element.insertBefore(placeholder, activeDraggables[0].getRootElement());
                activeDraggables.unshift(item);
            }
            else {
                element.appendChild(placeholder);
                activeDraggables.push(item);
            }
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed and also parent rects.
        this._cacheItemPositions();
        this._cacheParentPositions();
        this.entered.next({ item, container: this, currentIndex: this.getItemIndex(item) });
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._reset();
        this.exited.next({ item, container: this });
    }
    /**
     * Drops an item into this container.
     * \@breaking-change 11.0.0 `previousIndex` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?} distance Distance the user has dragged since the start of the dragging sequence.
     * @param {?=} previousIndex Index of the item when dragging started.
     *
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
        this._reset();
        // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.
        if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
        }
        this.dropped.next({ item,
            currentIndex,
            previousIndex,
            container: this,
            previousContainer,
            isPointerOverContainer,
            distance
        });
    }
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    withItems(items) {
        /** @type {?} */
        const previousItems = (/** @type {?} */ (this))._draggables;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item._withDropContainer((/** @type {?} */ (this)))));
        if ((/** @type {?} */ (this)).isDragging()) {
            /** @type {?} */
            const draggedItems = previousItems.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.isDragging()));
            // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.
            if (draggedItems.every((/**
             * @param {?} item
             * @return {?}
             */
            item => items.indexOf(item) === -1))) {
                (/** @type {?} */ (this))._reset();
            }
            else {
                (/** @type {?} */ (this))._cacheItems();
            }
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    connectedTo(connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    withOrientation(orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @template THIS
     * @this {THIS}
     * @param {?} elements Elements that can be scrolled.
     * @return {THIS}
     */
    withScrollableParents(elements) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])((/** @type {?} */ (this)).element);
        // We always allow the current element to be scrollable
        // so we need to ensure that it's in the array.
        (/** @type {?} */ (this))._scrollableElements =
            elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Gets the scrollable parents that are registered with this drop container.
     * @return {?}
     */
    getScrollableParents() {
        return this._scrollableElements;
    }
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        const items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
    }
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    isReceiving() {
        return this._activeSiblings.size > 0;
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    _sortItem(item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled ||
            !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        const siblings = this._itemPositions;
        /** @type {?} */
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
        /** @type {?} */
        const siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        const delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        const oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        (sibling, index) => {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            const isDraggedItem = sibling.drag === item;
            /** @type {?} */
            const offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            const elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = `translate3d(${Math.round(sibling.offset)}px, 0, 0)`;
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = `translate3d(0, ${Math.round(sibling.offset)}px, 0)`;
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    }
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    _startScrollingIfNecessary(pointerX, pointerY) {
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        let scrollNode;
        /** @type {?} */
        let verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        let horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling any of the parent containers.
        this._parentPositions.positions.forEach((/**
         * @param {?} position
         * @param {?} element
         * @return {?}
         */
        (position, element) => {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === this._document || !position.clientRect || scrollNode) {
                return;
            }
            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections((/** @type {?} */ (element)), position.clientRect, pointerX, pointerY);
                if (verticalScrollDirection || horizontalScrollDirection) {
                    scrollNode = (/** @type {?} */ (element));
                }
            }
        }));
        // Otherwise check if we can start scrolling the viewport.
        if (!verticalScrollDirection && !horizontalScrollDirection) {
            const { width, height } = this._viewportRuler.getViewportSize();
            /** @type {?} */
            const clientRect = { width, height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
            }
            else {
                this._stopScrolling();
            }
        }
    }
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    _stopScrolling() {
        this._stopScrollTimers.next();
    }
    /**
     * Caches the positions of the configured scrollable parents.
     * @private
     * @return {?}
     */
    _cacheParentPositions() {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        this._parentPositions.cache(this._scrollableElements);
        // The list element is always in the `scrollableElements`
        // so we can take advantage of the cached `ClientRect`.
        this._clientRect = (/** @type {?} */ ((/** @type {?} */ (this._parentPositions.positions.get(element))).clientRect));
    }
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    _cacheItemPositions() {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        drag => {
            /** @type {?} */
            const elementToMeasure = drag.getVisibleElement();
            return { drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    }
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    _reset() {
        this._isDragging = false;
        /** @type {?} */
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        ((/** @type {?} */ (styles))).scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const rootElement = item.getRootElement();
            if (rootElement) {
                rootElement.style.transform = '';
            }
        }));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._stopReceiving(this)));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
    }
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getSiblingOffsetPx(currentIndex, siblings, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            const start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            const end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    }
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getItemOffsetPx(currentPosition, newPosition, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        let itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    }
    /**
     * Checks if pointer is entering in the first position
     * @private
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @return {?}
     */
    _shouldEnterAsFirstChild(pointerX, pointerY) {
        if (!this._activeDraggables.length) {
            return false;
        }
        /** @type {?} */
        const itemPositions = this._itemPositions;
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
        // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
        /** @type {?} */
        const reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
            /** @type {?} */
            const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        }
        else {
            /** @type {?} */
            const firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
    }
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        ({ drag, clientRect }, _, array) => {
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                const direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === this._previousSwap.drag && direction === this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        }));
    }
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    _cacheItems() {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheParentPositions();
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    _isOverContainer(x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _getSiblingContainerFromPosition(item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._canReceive(item, x, y)));
    }
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _canReceive(item, x, y) {
        if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
        }
        /** @type {?} */
        const elementFromPoint = (/** @type {?} */ (this._getShadowRoot().elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    }
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    _startReceiving(sibling) {
        /** @type {?} */
        const activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheParentPositions();
            this._listenToScrollEvents();
        }
    }
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    _stopReceiving(sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    _listenToScrollEvents() {
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.isDragging()) {
                /** @type {?} */
                const scrollDifference = this._parentPositions.handleScroll(event);
                if (scrollDifference) {
                    // Since we know the amount that the user has scrolled we can shift all of the
                    // client rectangles ourselves. This is cheaper than re-measuring everything and
                    // we can avoid inconsistent behavior where we might be measuring the element before
                    // its position has changed.
                    this._itemPositions.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ clientRect }) => {
                        adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                    }));
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    this._itemPositions.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ drag }) => {
                        if (this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    }));
                }
            }
            else if (this.isReceiving()) {
                this._cacheParentPositions();
            }
        }));
    }
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     * @private
     * @return {?}
     */
    _getShadowRoot() {
        if (!this._cachedShadowRoot) {
            /** @type {?} */
            const shadowRoot = (/** @type {?} */ (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element))));
            this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
    }
}
if (false) {}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    const { top, bottom, height } = clientRect;
    /** @type {?} */
    const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    const { left, right, width } = clientRect;
    /** @type {?} */
    const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    let verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    let horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        const scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        const scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-registry.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
const activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
    /**
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(_ngZone, _document) {
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    registerDropContainer(drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    }
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    registerDragItem(drag) {
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                this._document.addEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    }
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    removeDropContainer(drop) {
        this._dropInstances.delete(drop);
    }
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    removeDragItem(drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    startDragging(drag, event) {
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            const isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerMove.next((/** @type {?} */ (e)))),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerUp.next((/** @type {?} */ (e)))),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.scroll.next(e)),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                (config, name) => {
                    this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    }
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    stopDragging(drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    }
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    isDragging(drag) {
        return this._activeDragInstances.has(drag);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDragItem(instance)));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDropContainer(instance)));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    }
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    _clearGlobalListeners() {
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        (config, name) => {
            this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    }
}
DragDropRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DragDropRegistry.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
/** @nocollapse */ DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
const DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
    /**
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
}
DragDrop.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DragDrop.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] },
    { type: DragDropRegistry }
];
/** @nocollapse */ DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Event emitted when the user starts dragging a draggable.
 * @record
 * @template T
 */
function CdkDragStart() { }
if (false) {}
/**
 * Event emitted when the user releases an item, before any animations have started.
 * @record
 * @template T
 */
function CdkDragRelease() { }
if (false) {}
/**
 * Event emitted when the user stops dragging a draggable.
 * @record
 * @template T
 */
function CdkDragEnd() { }
if (false) {}
/**
 * Event emitted when the user moves an item into a new drop container.
 * @record
 * @template T, I
 */
function CdkDragEnter() { }
if (false) {}
/**
 * Event emitted when the user removes an item from a
 * drop container by moving it into another one.
 * @record
 * @template T, I
 */
function CdkDragExit() { }
if (false) {}
/**
 * Event emitted when the user drops a draggable item inside a drop container.
 * @record
 * @template T, O
 */
function CdkDragDrop() { }
if (false) {}
/**
 * Event emitted as the user is dragging a draggable item.
 * @record
 * @template T
 */
function CdkDragMove() { }
if (false) {}
/**
 * Event emitted when the user swaps the position of two drag items.
 * @record
 * @template T, I
 */
function CdkDragSortEvent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-parent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-handle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
class CdkDragHandle {
    /**
     * @param {?} element
     * @param {?=} parentDrag
     */
    constructor(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    /**
     * Whether starting to drag through this handle is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._stateChanges.next(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
CdkDragHandle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkDragHandle]',
                host: {
                    'class': 'cdk-drag-handle'
                }
            },] }
];
/** @nocollapse */
CdkDragHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
CdkDragHandle.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragHandleDisabled',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-placeholder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
class CdkDragPlaceholder {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPlaceholder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ng-template[cdkDragPlaceholder]'
            },] }
];
/** @nocollapse */
CdkDragPlaceholder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPlaceholder.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag-preview.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
class CdkDragPreview {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    /**
     * Whether the preview should preserve the same size as the item that is being dragged.
     * @return {?}
     */
    get matchSize() { return this._matchSize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set matchSize(value) { this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
}
CdkDragPreview.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'ng-template[cdkDragPreview]'
            },] }
];
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPreview.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 * @type {?}
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
/**
 * Object that can be used to configure the drag
 * items and drop lists within a module or a component.
 * @record
 */
function DragDropConfig() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
class CdkDrag {
    /**
     * @param {?} element
     * @param {?} dropContainer
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} config
     * @param {?} _dir
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     */
    constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            movedEvent => ({
                source: this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            })))).subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ?
                config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ?
                config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.
        if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);
            dropContainer.addItem(this);
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._dragRef.getRootElement();
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._updateRootElement();
            // Listen for any newly-added handles.
            this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                /** @type {?} */
                const childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle._parentDrag === this))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle.element));
                this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                return (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })))));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            handleInstance => {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                const dragRef = this._dragRef;
                /** @type {?} */
                const handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (this.freeDragPosition) {
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        const positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    }
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    _updateRootElement() {
        /** @type {?} */
        const element = this.element.nativeElement;
        /** @type {?} */
        const rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error(`cdkDrag must be attached to an element node. ` +
                `Currently attached to "${rootElement.nodeName}".`);
        }
        this._dragRef.withRootElement(rootElement || element);
    }
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    _getBoundaryElement() {
        /** @type {?} */
        const boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    }
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _syncInputs(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            if (!ref.isDragging()) {
                /** @type {?} */
                const dir = this._dir;
                /** @type {?} */
                const dragStartDelay = this.dragStartDelay;
                /** @type {?} */
                const placeholder = this._placeholderTemplate ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                /** @type {?} */
                const preview = this._previewTemplate ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    matchSize: this._previewTemplate.matchSize,
                    viewContainer: this._viewContainerRef
                } : null;
                ref.disabled = this.disabled;
                ref.lockAxis = this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = this.constrainPosition;
                ref.previewClass = this.previewClass;
                ref
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    }
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.started.subscribe((/**
         * @return {?}
         */
        () => {
            this.started.emit({ source: this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        () => {
            this.released.emit({ source: this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.ended.emit({ source: this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: event.container.data,
                item: this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: event.container.data,
                item: this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: this,
                distance: event.distance
            });
        }));
    }
    /**
     * Assigns the default input values based on a provided config object.
     * @private
     * @param {?} config
     * @return {?}
     */
    _assignDefaults(config) {
        const { lockAxis, dragStartDelay, constrainPosition, previewClass, boundaryElement, draggingDisabled, rootElementSelector } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
            this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
            this.previewClass = previewClass;
        }
        if (boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
        }
    }
}
CdkDrag.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            },] }
];
/** @nocollapse */
CdkDrag.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
CdkDrag.propDecorators = {
    _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
    _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPreview,] }],
    _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkDragPlaceholder,] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragData',] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragLockAxis',] }],
    rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragRootElement',] }],
    boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragBoundary',] }],
    dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragStartDelay',] }],
    freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragFreeDragPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragDisabled',] }],
    constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragConstrainPosition',] }],
    previewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragPreviewClass',] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragStarted',] }],
    released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragReleased',] }],
    ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEnded',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragExited',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragDropped',] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragMoved',] }]
};
if (false) {}
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    let currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drop-list-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
class CdkDropListGroup {
    constructor() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    /**
     * Whether starting a dragging sequence from inside this group is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._items.clear();
    }
}
CdkDropListGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup',
            },] }
];
CdkDropListGroup.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListGroupDisabled',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/directives/drop-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Internal compile-time-only representation of a `CdkDropList`.
 * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
 * \@docs-private
 * @record
 */
function CdkDropListInternal() { }
const ɵ0 = undefined;
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
class CdkDropList {
    /**
     * @param {?} element
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     * @param {?=} _dir
     * @param {?=} _group
     * @param {?=} _scrollDispatcher
     * @param {?=} config
     */
    constructor(element, dragDrop, _changeDetectorRef, _dir, _group, _scrollDispatcher, config) {
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        (drag, drop) => {
            return this.enterPredicate(drag.data, drop.data);
        });
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    /**
     * Whether starting a dragging sequence from this container is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (!!this._group && this._group.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        // Usually we sync the directive and ref state right before dragging starts, in order to have
        // a single point of failure and to avoid having to use setters for everything. `disabled` is
        // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
        // the user in a disabled state, so we also need to sync it as it's being set.
        this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * Registers an items with the drop list.
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /**
     * Removes an item from the drop list.
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /**
     * Gets the registered items in the list, sorted by their position in the DOM.
     * @return {?}
     */
    getSortedItems() {
        return Array.from(this._unsortedItems).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Starts dragging an item.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    start() {
        this._dropListRef.start();
    }
    /**
     * Drops an item into this container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     *
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, { x: 0, y: 0 });
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    enter(item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._dropListRef.exit(item._dragRef);
    }
    /**
     * Figures out the index of an item in the container.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    }
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _setupInputSyncSubscription(ref) {
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => ref.withDirection(value)));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            drop => {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    list => list.id === drop)))) : drop;
            }));
            if (this._group) {
                this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                drop => {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!this._scrollableParentsResolved && this._scrollDispatcher) {
                /** @type {?} */
                const scrollableParents = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map((/**
                 * @param {?} scrollable
                 * @return {?}
                 */
                scrollable => scrollable.getElementRef().nativeElement));
                this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                this._scrollableParentsResolved = true;
            }
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            drop => drop && drop !== this)).map((/**
             * @param {?} list
             * @return {?}
             */
            list => list._dropListRef)))
                .withOrientation(this.orientation);
        }));
    }
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            this._syncItemsWithRef();
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: this,
                item: event.item.data
            });
            this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * Assigns the default input values based on a provided config object.
     * @private
     * @param {?} config
     * @return {?}
     */
    _assignDefaults(config) {
        const { lockAxis, draggingDisabled, sortingDisabled, listAutoScrollDisabled, listOrientation } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    }
    /**
     * Syncs up the registered drag items with underlying drop list ref.
     * @private
     * @return {?}
     */
    _syncItemsWithRef() {
        this._dropListRef.withItems(this.getSortedItems().map((/**
         * @param {?} item
         * @return {?}
         */
        item => item._dragRef)));
    }
}
/**
 * Keeps track of the drop lists that are currently on the page.
 */
CdkDropList._dropLists = [];
CdkDropList.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CdkDropListGroup, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                }
            },] }
];
/** @nocollapse */
CdkDropList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] }
];
CdkDropList.propDecorators = {
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListConnectedTo',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListData',] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListOrientation',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListLockAxis',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListDisabled',] }],
    sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListSortingDisabled',] }],
    enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListEnterPredicate',] }],
    autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListDropped',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListExited',] }],
    sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListSorted',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropModule {
}
DragDropModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=drag-drop.js.map


/***/ }),

/***/ "../../node_modules/@angular/cdk/fesm2015/table.js":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/cdk/fesm2015/table.js ***!
  \***********************************************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");










/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/can-stick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface for a mixin to provide a directive with a function that checks if the sticky input has
 * been changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @record
 */
function CanStick() { }
if (false) {}
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinHasStickyInput(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            this._hasStickyChanged = false;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */
        get sticky() { return this._sticky; }
        /**
         * @param {?} v
         * @return {?}
         */
        set sticky(v) {
            /** @type {?} */
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        hasStickyChanged() {
            /** @type {?} */
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('CDK_TABLE');
/**
 * Configurable options for `CdkTextColumn`.
 * @record
 * @template T
 */
function TextColumnOptions() { }
if (false) {}
/**
 * Injection token that can be used to specify the text column options.
 * @type {?}
 */
const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('text-column-options');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base interface for a cell definition. Captures a column's cell template definition.
 * @record
 */
function CellDef() { }
if (false) {}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[cdkCellDef]' },] }
];
/** @nocollapse */
CdkCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] }
];
if (false) {}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[cdkHeaderCellDef]' },] }
];
/** @nocollapse */
CdkHeaderCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] }
];
if (false) {}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[cdkFooterCellDef]' },] }
];
/** @nocollapse */
CdkFooterCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] }
];
if (false) {}
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
class CdkColumnDefBase {
}
/** @type {?} */
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    /**
     * @param {?=} _table
     */
    constructor(_table) {
        super();
        this._table = _table;
        this._stickyEnd = false;
    }
    /**
     * Unique name for this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (name) {
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        }
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     * @return {?}
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set stickyEnd(v) {
        /** @type {?} */
        const prevValue = this._stickyEnd;
        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
CdkColumnDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }],
            },] }
];
/** @nocollapse */
CdkColumnDef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] }
];
CdkColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['stickyEnd',] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"], args: [CdkCellDef,] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"], args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"], args: [CdkFooterCellDef,] }]
};
if (false) {}
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
class BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        /** @type {?} */
        const columnClassName = `cdk-column-${columnDef.cssClassFriendlyName}`;
        elementRef.nativeElement.classList.add(columnClassName);
    }
}
/**
 * Header cell template container that adds the right classes and role.
 */
class CdkHeaderCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader',
                },
            },] }
];
/** @nocollapse */
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
/**
 * Footer cell template container that adds the right classes and role.
 */
class CdkFooterCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell',
                },
            },] }
];
/** @nocollapse */
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
/**
 * Cell template container that adds the right classes and role.
 */
class CdkCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell',
                },
            },] }
];
/** @nocollapse */
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @type {?}
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
class BaseRowDef {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"] }
];
/** @nocollapse */
BaseRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"] }
];
if (false) {}
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
class CdkHeaderRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky'],
            },] }
];
/** @nocollapse */
CdkHeaderRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] }
];
if (false) {}
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
class CdkFooterRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky'],
            },] }
];
/** @nocollapse */
CdkFooterRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] }
];
if (false) {}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
}
CdkRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
            },] }
];
/** @nocollapse */
CdkRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] }
];
if (false) {}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is false
 * @record
 * @template T
 */
function CdkCellOutletRowContext() { }
if (false) {}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 * @record
 * @template T
 */
function CdkCellOutletMultiRowContext() { }
if (false) {}
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
class CdkCellOutlet {
    /**
     * @param {?} _viewContainer
     */
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
CdkCellOutlet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[cdkCellOutlet]' },] }
];
/** @nocollapse */
CdkCellOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] }
];
if (false) {}
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class CdkHeaderRow {
}
CdkHeaderRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row',
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None
            }] }
];
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
class CdkFooterRow {
}
CdkFooterRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row',
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None
            }] }
];
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class CdkRow {
}
CdkRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row',
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/sticky-styler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * \@docs-private
 * @type {?}
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
class StickyStyler {
    /**
     * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, _isBrowser = true) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    clearStickyPositioning(rows, stickyDirections) {
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            this._removeStickyStyle(row, stickyDirections);
            for (let i = 0; i < row.children.length; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                this._removeStickyStyle(cell, stickyDirections);
            }
        }
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        /** @type {?} */
        const hasStickyColumns = stickyStartStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state)) || stickyEndStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state));
        if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
        }
        /** @type {?} */
        const firstRow = rows[0];
        /** @type {?} */
        const numCells = firstRow.children.length;
        /** @type {?} */
        const cellWidths = this._getCellWidths(firstRow);
        /** @type {?} */
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        /** @type {?} */
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        /** @type {?} */
        const isRtl = this.direction === 'rtl';
        for (const row of rows) {
            for (let i = 0; i < numCells; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }
                if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
            }
        }
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on.
        /** @type {?} */
        const rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
        /** @type {?} */
        let stickyHeight = 0;
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
                continue;
            }
            /** @type {?} */
            const row = rows[rowIndex];
            if (this._isNativeHtmlTable) {
                for (let j = 0; j < row.children.length; j++) {
                    /** @type {?} */
                    const cell = (/** @type {?} */ (row.children[j]));
                    this._addStickyStyle(cell, position, stickyHeight);
                }
            }
            else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
            }
            if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
            }
            stickyHeight += row.getBoundingClientRect().height;
        }
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        /** @type {?} */
        const tfoot = (/** @type {?} */ (tableElement.querySelector('tfoot')));
        if (stickyStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => !state))) {
            this._removeStickyStyle(tfoot, ['bottom']);
        }
        else {
            this._addStickyStyle(tfoot, 'bottom', 0);
        }
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        element.style.zIndex = this._getCalculatedZIndex(element);
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        /** @type {?} */
        const hasDirection = STICKY_DIRECTIONS.some((/**
         * @param {?} dir
         * @return {?}
         */
        dir => !!element.style[dir]));
        if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        element.style.zIndex = this._getCalculatedZIndex(element);
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    _getCalculatedZIndex(element) {
        /** @type {?} */
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        /** @type {?} */
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of (/** @type {?} */ (STICKY_DIRECTIONS))) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    _getCellWidths(row) {
        /** @type {?} */
        const cellWidths = [];
        /** @type {?} */
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            let cell = (/** @type {?} */ (firstRowCells[i]));
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * \@docs-private
 * @param {?} name
 * @return {?}
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * \@docs-private
 * @param {?} data
 * @return {?}
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * \@docs-private
 * @return {?}
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * \@docs-private
 * @return {?}
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface used to provide an outlet for rows to be inserted into.
 * @record
 */
function RowOutlet() { }
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
class DataRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[rowOutlet]' },] }
];
/** @nocollapse */
DataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
class HeaderRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[headerRowOutlet]' },] }
];
/** @nocollapse */
HeaderRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * \@docs-private
 */
class FooterRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{ selector: '[footerRowOutlet]' },] }
];
/** @nocollapse */
FooterRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
];
if (false) {}
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Interface used to conveniently type the possible context interfaces for the render row.
 * \@docs-private
 * @record
 * @template T
 */
function RowContext() { }
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_5__["EmbeddedViewRef"] {
}
/**
 * Set of properties that represents the identity of a single rendered row.
 *
 * When the table needs to determine the list of rows to render, it will do so by iterating through
 * each data object and evaluating its list of row templates to display (when multiTemplateDataRows
 * is false, there is only one template per data object). For each pair of data object and row
 * template, a `RenderRow` is added to the list of rows to render. If the data object and row
 * template pair has already been rendered, the previously used `RenderRow` is added; else a new
 * `RenderRow` is * created. Once the list is complete and all data objects have been itereated
 * through, a diff is performed to determine the changes that need to be made to the rendered rows.
 *
 * \@docs-private
 * @record
 * @template T
 */
function RenderRow() { }
if (false) {}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 * @template T
 */
class CdkTable {
    /**
     * @param {?} _differs
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} role
     * @param {?} _dir
     * @param {?} _document
     * @param {?} _platform
     */
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["isDevMode"])() && fn != null && typeof fn !== 'function' && (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     * @return {?}
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((/**
         * @param {?} _i
         * @param {?} dataRow
         * @return {?}
         */
        (_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        /** @type {?} */
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} prevIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, prevIndex, currentIndex) => {
            if (record.previousIndex == null) {
                this._insertRow(record.item, (/** @type {?} */ (currentIndex)));
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (prevIndex)));
            }
            else {
                /** @type {?} */
                const view = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (prevIndex)))));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        }));
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const rowView = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (record.currentIndex)))));
            rowView.context.$implicit = record.item.data;
        }));
        this.updateStickyColumnStyles();
    }
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    setHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    }
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    setFooterRowDef(footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    }
    /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyHeaderRowStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._headerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyFooterRowStyles() {
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._footerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    updateStickyColumnStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const dataRows = this._getRenderedRows(this._rowOutlet);
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((/**
         * @param {?} headerRow
         * @param {?} i
         * @return {?}
         */
        (headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        }));
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            // Collect all the rows rendered with this row definition.
            /** @type {?} */
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        }));
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((/**
         * @param {?} footerRow
         * @param {?} i
         * @return {?}
         */
        (footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        }));
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @private
     * @return {?}
     */
    _getAllRenderRows() {
        /** @type {?} */
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        /** @type {?} */
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            /** @type {?} */
            let data = this._data[i];
            /** @type {?} */
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                /** @type {?} */
                let renderRow = renderRowsForData[j];
                /** @type {?} */
                const cache = (/** @type {?} */ (this._cachedRenderRowsMap.get(renderRow.data)));
                if (cache.has(renderRow.rowDef)) {
                    (/** @type {?} */ (cache.get(renderRow.rowDef))).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @private
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        /** @type {?} */
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            /** @type {?} */
            const cachedRenderRows = (cache && cache.has(rowDef)) ? (/** @type {?} */ (cache.get(rowDef))) : [];
            if (cachedRenderRows.length) {
                /** @type {?} */
                const dataRow = (/** @type {?} */ (cachedRenderRows.shift()));
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        }));
    }
    /**
     * Update the map containing the content's column definitions.
     * @private
     * @return {?}
     */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        /** @type {?} */
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => {
            if (this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        }));
    }
    /**
     * Update the list of all available row definitions that can be used.
     * @private
     * @return {?}
     */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        /** @type {?} */
        const defaultRowDefs = this._rowDefs.filter((/**
         * @param {?} def
         * @return {?}
         */
        def => !def.when));
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @private
     * @return {?}
     */
    _renderUpdatedColumns() {
        /** @type {?} */
        const columnsDiffReducer = (/**
         * @param {?} acc
         * @param {?} def
         * @return {?}
         */
        (acc, def) => acc || !!def.getColumnsDiff());
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        /** @type {?} */
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this._data = data || [];
            this.renderRows();
        }));
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @private
     * @return {?}
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._headerRowOutlet, def, i)));
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @private
     * @return {?}
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._footerRowOutlet, def, i)));
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @private
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    _addStickyColumnStyles(rows, rowDef) {
        /** @type {?} */
        const columnDefs = Array.from(rowDef.columns || []).map((/**
         * @param {?} columnName
         * @return {?}
         */
        columnName => {
            /** @type {?} */
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
            }
            return (/** @type {?} */ (columnDef));
        }));
        /** @type {?} */
        const stickyStartStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.sticky));
        /** @type {?} */
        const stickyEndStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.stickyEnd));
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    }
    /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    _getRenderedRows(rowOutlet) {
        /** @type {?} */
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            const viewRef = ((/** @type {?} */ ((/** @type {?} */ (rowOutlet.viewContainer.get(i))))));
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        /** @type {?} */
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter((/**
             * @param {?} def
             * @return {?}
             */
            def => !def.when || def.when(dataIndex, data)));
        }
        else {
            /** @type {?} */
            let rowDef = this._rowDefs.find((/**
             * @param {?} def
             * @return {?}
             */
            def => def.when && def.when(dataIndex, data))) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @private
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    _insertRow(renderRow, renderIndex) {
        /** @type {?} */
        const rowDef = renderRow.rowDef;
        /** @type {?} */
        const context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @private
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    _updateRowIndexContext() {
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /**
     * Gets the column definitions for the provided row def.
     * @private
     * @param {?} rowDef
     * @return {?}
     */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, (/**
         * @param {?} columnId
         * @return {?}
         */
        columnId => {
            /** @type {?} */
            const column = this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        }));
    }
    /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @private
     * @return {?}
     */
    _applyNativeTableSections() {
        /** @type {?} */
        const documentFragment = this._document.createDocumentFragment();
        /** @type {?} */
        const sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        for (const section of sections) {
            /** @type {?} */
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @private
     * @return {?}
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @private
     * @return {?}
     */
    _checkStickyStates() {
        /** @type {?} */
        const stickyCheckReducer = (/**
         * @param {?} acc
         * @param {?} d
         * @return {?}
         */
        (acc, d) => {
            return acc || d.hasStickyChanged();
        });
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @private
     * @return {?}
     */
    _setupStickyStyler() {
        /** @type {?} */
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        }));
    }
    /**
     * Filters definitions that belong to this table from a QueryList.
     * @private
     * @template I
     * @param {?} items
     * @return {?}
     */
    _getOwnDefs(items) {
        return items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item._table || item._table === this));
    }
}
CdkTable.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
                providers: [{ provide: CDK_TABLE, useExisting: CdkTable }]
            }] }
];
/** @nocollapse */
CdkTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Attribute"], args: ['role',] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"], args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"], args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"], args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"], args: [CdkFooterRowDef, {
                    descendants: true
                },] }]
};
if (false) {}
/**
 * Utility function that gets a merged list of the entries in an array and values of a Set.
 * @template T
 * @param {?} array
 * @param {?} set
 * @return {?}
 */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 * @template T
 */
class CdkTextColumn {
    /**
     * @param {?} _table
     * @param {?} _options
     */
    constructor(_table, _options) {
        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */
        this.justify = 'start';
        this._options = _options || {};
    }
    /**
     * Column name that should be used to reference this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((/**
                 * @param {?} data
                 * @param {?} name
                 * @return {?}
                 */
                (data, name) => ((/** @type {?} */ (data)))[name]));
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     * @return {?}
     */
    _createDefaultHeaderText() {
        /** @type {?} */
        const name = this.name;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["isDevMode"])() && !name) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /**
     * Synchronizes the column definition name with the text column name.
     * @private
     * @return {?}
     */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default
            }] }
];
/** @nocollapse */
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
];
class CdkTableModule {
}
CdkTableModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=table.js.map


/***/ }),

/***/ "./src/app/components/table/table-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/table/table-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function() { return TableRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "./src/app/components/table/table.component.ts");


const routes = [
    {
        path: '',
        component: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
    },
];
class TableRoutingModule {
}


/***/ }),

/***/ "./src/app/components/table/table.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/table/table.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_TableComponent, View_TableComponent_0, View_TableComponent_Host_0, TableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TableComponent", function() { return RenderType_TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TableComponent_0", function() { return View_TableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TableComponent_Host_0", function() { return View_TableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponentNgFactory", function() { return TableComponentNgFactory; });
/* harmony import */ var _table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.component.scss.shim.ngstyle */ "./src/app/components/table/table.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/checkbox/terminus-ui-checkbox.ngfactory */ "../../dist/libs/ui/checkbox/terminus-ui-checkbox.ngfactory.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @terminus/ui-checkbox */ "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/icon/terminus-ui-icon.ngfactory */ "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ui-table */ "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/sort/terminus-ui-sort.ngfactory */ "../../dist/libs/ui/sort/terminus-ui-sort.ngfactory.js");
/* harmony import */ var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @terminus/ui-sort */ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
/* harmony import */ var _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/table/terminus-ui-table.ngfactory */ "../../dist/libs/ui/table/terminus-ui-table.ngfactory.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _dist_libs_ui_menu_terminus_ui_menu_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/menu/terminus-ui-menu.ngfactory */ "../../dist/libs/ui/menu/terminus-ui-menu.ngfactory.js");
/* harmony import */ var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @terminus/ui-menu */ "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _dist_libs_ui_paginator_terminus_ui_paginator_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/paginator/terminus-ui-paginator.ngfactory */ "../../dist/libs/ui/paginator/terminus-ui-paginator.ngfactory.js");
/* harmony import */ var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @terminus/ui-paginator */ "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





























var styles_TableComponent = [_table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TableComponent, data: {} });

function View_TableComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null); }
function View_TableComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 18, "ts-checkbox", [["cdkDrag", ""], ["class", "cdk-drag ts-checkbox"], ["theme", "accent"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null], [1, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = ($event.stopPropagation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCheckboxComponent_0"], _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _handles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _previewTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _placeholderTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__["TsCheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { formControl: [0, "formControl"], theme: [1, "theme"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__["TsCheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_p"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "ts-icon", [["cdkDragHandle", ""], ["class", "cdk-drag-handle ts-icon"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (($event.preventDefault() && $event.stopPropagation()) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 147456, [[4, 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDragHandle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["drag_indicator"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, 0, 1, null, View_TableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, [[6, 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDragPlaceholder"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_10 = _v.context.$implicit.control; var currVal_11 = "accent"; _ck(_v, 6, 0, currVal_10, currVal_11); var currVal_12 = _v.context.$implicit.control; _ck(_v, 8, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = _v.context.$implicit.display; _ck(_v, 13, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).inline; var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).theme === "primary"); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).theme === "accent"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).theme === "warn"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).background; _ck(_v, 14, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); }); }
function View_TableComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "form", [["cdkDropList", ""], ["cdkDropListLockAxis", "y"], ["class", "cdk-drop-list"], ["novalidate", ""]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "cdkDropListDropped"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("cdkDropListDropped" === en)) {
        var pd_2 = (_co.columnDropped($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"]]], { lockAxis: [0, "lockAxis"] }, { dropped: "cdkDropListDropped" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_11 = "y"; _ck(_v, 2, 0, currVal_11); var currVal_12 = _co.columnsForm; _ck(_v, 4, 0, currVal_12); var currVal_13 = _co.allPossibleColumns; _ck(_v, 9, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isDragging(); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isReceiving(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }); }
function View_TableComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TEST footer content"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], { id: [0, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Updated"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 1, 0, currVal_3); _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_TableComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.updated_at, "shortDate")); _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comments"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.comments; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["427"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], { id: [0, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Assignee"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 1, 0, currVal_3); _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_TableComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.login; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], { id: [0, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Number"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 1, 0, currVal_3); _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_TableComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.number; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Labels"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ","]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_TableComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TableComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = _v.context.$implicit.labels; _ck(_v, 3, 0, currVal_0); }, null); }
function View_TableComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], { id: [0, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Created"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 1, 0, currVal_3); _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled(); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_TableComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.created_at, "shortDate")); _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.latestCreationDate; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Body "]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "truncate"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sanitize(_v.context.$implicit.body); _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.state; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ID"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); }); }
function View_TableComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid; _ck(_v, 0, 0, currVal_0); }); }
function View_TableComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "ts-icon", [["class", "ts-icon"], ["theme", "accent"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]], { theme: [0, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["open_in_new"]))], function (_ck, _v) { _ck(_v, 1, 0); var currVal_6 = "accent"; _ck(_v, 4, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.html_url, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).theme === "primary"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).theme === "accent"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).theme === "warn"); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).background; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_TableComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_TableComponent_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "tr", [["class", "ts-header-row"], ["role", "row"], ["ts-header-row", ""]], null, null, null, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsHeaderRowComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsHeaderRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_TableComponent_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "tr", [["class", "ts-row"], ["role", "row"], ["ts-row", ""]], null, null, null, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsRowComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[12, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_TableComponent_40(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "ts-footer-row"], ["role", "row"], ["ts-footer-row", ""]], null, null, null, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsFooterRowComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsFooterRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowComponent"], [], null, null)], null, null); }
function View_TableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { sort: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { paginator: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, { myTable: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 44, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"], ["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_21__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 32, "div", [["style", "font-size: 12px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" To get around GitHub rate limiting, we cache response data by default. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Clear cached data and/or disable below. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "label", [["style", "margin-right: 1rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Use cached data: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.useCachedData = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearCachedData() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Clear cached GitHub data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 15, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Table density: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 13, "select", [["id", "density"], ["name", "density"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.density = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "option", [["value", "comfy"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comfy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 3, "option", [["value", "compact"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Compact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 4, "ts-menu", [["class", "ts-menu"], ["theme", "accent"]], [[2, "ts-menu--disabled", null]], null, null, _dist_libs_ui_menu_terminus_ui_menu_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_TsMenuComponent_0"], _dist_libs_ui_menu_terminus_ui_menu_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_TsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 4308992, null, 0, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_23__["TsMenuComponent"], [], { menuItemsTemplate: [0, "menuItemsTemplate"], theme: [1, "theme"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 1, "ts-icon", [["class", "ts-icon"], ["svgIcon", "table_large_plus"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Edit Columns "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["columns", 2]], null, 0, null, View_TableComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 196, "div", [["class", "example-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 195, "table", [["class", "ts-table"], ["ts-table", ""], ["tsSort", ""], ["tsVerticalSpacing", ""]], [[2, "ts-table--comfy", null], [2, "ts-table--compact", null], [8, "id", 0]], [[null, "columnsChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("columnsChange" === en)) {
        var pd_0 = (_co.columnsChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsTableComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTable"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsTableComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, [[1, 4]], 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_21__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tsVerticalSpacing: [0, "tsVerticalSpacing"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 11780096, [[3, 4], ["myTable", 4]], 6, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsTableComponent"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsWindowService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]], { trackBy: [0, "trackBy"], dataSource: [1, "dataSource"], columns: [2, "columns"], density: [3, "density"] }, { columnsChange: "columnsChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _contentFooterRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { headerCells: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { rows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], sticky: [1, "sticky"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[14, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[13, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], alignment: [1, "alignment"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[17, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[16, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[18, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 13, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], alignment: [1, "alignment"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[20, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0, null, View_TableComponent_12)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[23, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[22, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[24, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], alignment: [1, "alignment"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[26, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[25, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[27, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[29, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[28, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](153, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[30, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](157, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[32, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[31, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[33, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](179, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[35, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](182, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[34, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[36, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](195, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[38, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[37, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](201, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[39, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](205, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], alignment: [1, "alignment"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](211, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[41, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[40, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](217, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](221, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](227, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[44, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](230, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[43, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](233, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[45, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 3, null, View_TableComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](237, 540672, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CDK_TABLE"]]], { columns: [0, "columns"], sticky: [1, "sticky"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[9, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderRowDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 3, null, View_TableComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](241, 540672, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CDK_TABLE"]]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkRowDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](244, 540672, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CDK_TABLE"]]], { columns: [0, "columns"], sticky: [1, "sticky"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterRowDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end start"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](247, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](248, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 1, "ts-paginator", [["class", "ts-paginator"], ["recordCountTooHighMessage", "Please refine your filters."]], null, [[null, "pageSelect"], [null, "recordsPerPageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("pageSelect" === en)) {
        var pd_0 = (_co.onPageSelect($event) !== false);
        ad = (pd_0 && ad);
    } if (("recordsPerPageChange" === en)) {
        var pd_1 = (_co.perPageChange($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _dist_libs_ui_paginator_terminus_ui_paginator_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_TsPaginatorComponent_0"], _dist_libs_ui_paginator_terminus_ui_paginator_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_TsPaginatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](250, 4767744, [[2, 4]], 0, _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_26__["TsPaginatorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { totalRecords: [0, "totalRecords"], recordCountTooHighMessage: [1, "recordCountTooHighMessage"] }, { pageSelect: "pageSelect", recordsPerPageChange: "recordsPerPageChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.log() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Log column definitions"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 5, 0, currVal_0); var currVal_1 = "space-between center"; _ck(_v, 6, 0, currVal_1); var currVal_2 = ""; _ck(_v, 7, 0, currVal_2); var currVal_10 = _co.useCachedData; _ck(_v, 19, 0, currVal_10); var currVal_18 = "density"; var currVal_19 = _co.density; _ck(_v, 30, 0, currVal_18, currVal_19); var currVal_20 = "comfy"; _ck(_v, 34, 0, currVal_20); var currVal_21 = "comfy"; _ck(_v, 35, 0, currVal_21); var currVal_22 = "compact"; _ck(_v, 38, 0, currVal_22); var currVal_23 = "compact"; _ck(_v, 39, 0, currVal_23); var currVal_24 = ""; _ck(_v, 42, 0, currVal_24); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48); var currVal_27 = "accent"; _ck(_v, 44, 0, currVal_26, currVal_27); var currVal_33 = "table_large_plus"; _ck(_v, 46, 0, currVal_33); var currVal_37 = ""; _ck(_v, 53, 0, currVal_37); var currVal_38 = _co.trackBy; var currVal_39 = _co.dataSource; var currVal_40 = _co.visibleColumns; var currVal_41 = _co.density; _ck(_v, 54, 0, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_42 = "title"; var currVal_43 = ""; _ck(_v, 63, 0, currVal_42, currVal_43); var currVal_44 = "updated"; var currVal_45 = "right"; _ck(_v, 79, 0, currVal_44, currVal_45); var currVal_46 = "comments"; var currVal_47 = "right"; _ck(_v, 95, 0, currVal_46, currVal_47); var currVal_48 = "assignee"; _ck(_v, 109, 0, currVal_48); var currVal_49 = "number"; var currVal_50 = "right"; _ck(_v, 125, 0, currVal_49, currVal_50); var currVal_51 = "labels"; _ck(_v, 141, 0, currVal_51); var currVal_52 = "created"; _ck(_v, 157, 0, currVal_52); var currVal_53 = "body"; _ck(_v, 173, 0, currVal_53); var currVal_54 = "state"; _ck(_v, 189, 0, currVal_54); var currVal_55 = "id"; var currVal_56 = "right"; _ck(_v, 205, 0, currVal_55, currVal_56); var currVal_57 = "html_url"; _ck(_v, 221, 0, currVal_57); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).columnNames; var currVal_59 = true; _ck(_v, 237, 0, currVal_58, currVal_59); var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).columnNames; _ck(_v, 241, 0, currVal_60); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).columnNames; var currVal_62 = true; _ck(_v, 244, 0, currVal_61, currVal_62); var currVal_63 = "row"; _ck(_v, 247, 0, currVal_63); var currVal_64 = "end start"; _ck(_v, 248, 0, currVal_64); var currVal_65 = _co.resultsLength; var currVal_66 = "Please refine your filters."; _ck(_v, 250, 0, currVal_65, currVal_66); }, function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending; _ck(_v, 16, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending; _ck(_v, 27, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).isDisabled; _ck(_v, 43, 0, currVal_25); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).inline; var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).theme === "primary"); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).theme === "accent"); var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).theme === "warn"); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).background; _ck(_v, 45, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).density === "comfy"); var currVal_35 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).density === "compact"); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).id; _ck(_v, 50, 0, currVal_34, currVal_35, currVal_36); }); }
function View_TableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "demo-table", [], null, null, null, View_TableComponent_0, RenderType_TableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _table_component__WEBPACK_IMPORTED_MODULE_27__["TableComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("demo-table", _table_component__WEBPACK_IMPORTED_MODULE_27__["TableComponent"], View_TableComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/table/table.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/table/table.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
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
var styles = [".example-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rlcm1pbnVzLW9zcy90ZXJtaW51cy1vc3MvYXBwcy9zaG93Y2FzZS11aS9zcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJhcHBzL3Nob3djYXNlLXVpL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FDQ2I7O0FERUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQ0N4QiIsImZpbGUiOiJhcHBzL3Nob3djYXNlLXVpL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cnVuY2F0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHJ1bmNhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuIl19 */"];



/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: ExampleHttpDao, TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ui-paginator */ "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
/* harmony import */ var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ui-sort */ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
/* harmony import */ var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ui-table */ "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");











/**
 * An example database that the data source uses to retrieve data for the table.
 */
class ExampleHttpDao {
    constructor(http) {
        this.http = http;
    }
    getRepoIssues(sort, order, page, perPage) {
        console.log('Hitting the GitHub API');
        const href = `https://api.github.com/search/issues`;
        const requestUrl = `${href}?q=repo:GetTerminus/terminus-ui`;
        const requestParams = `&sort=${sort}&order=${order}&page=${page + 1}&per_page=${perPage}`;
        return this.http.get(`${requestUrl}${requestParams}`);
    }
}
class TableComponent {
    constructor(domSanitizer, http, formBuilder, changeDetectorRef) {
        this.domSanitizer = domSanitizer;
        this.http = http;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.columnsSource = [
            {
                display: 'Title',
                name: 'title',
                width: 300,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            },
            {
                display: 'Comments',
                name: 'comments',
                width: 100,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            },
            {
                display: 'Number',
                name: 'number',
                width: 100,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            },
            {
                display: 'Updated',
                name: 'updated',
                width: 200,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            },
            {
                display: 'State',
                name: 'state',
                width: 100,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            },
            {
                display: 'Labels',
                name: 'labels',
                width: 200,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            },
            // {
            //   display: 'Body',
            //   name: 'body',
            //   width: '260px',
            //   control: new FormControl(true),
            // },
            {
                display: 'Assignee',
                name: 'assignee',
                width: 200,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            },
            {
                display: 'ID',
                name: 'id',
                width: 100,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            },
            {
                display: 'Created',
                name: 'created',
                width: 100,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            },
            {
                display: 'View',
                name: 'html_url',
                width: 100,
                control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true),
            },
        ];
        this.savedResponse = null;
        this.useCachedData = true;
        this.allPossibleColumns = this.columnsSource.slice();
        this.columnsForm = this.formBuilder.group({});
        this.dataSource = new _terminus_ui_table__WEBPACK_IMPORTED_MODULE_10__["TsTableDataSource"]();
        this.resultsLength = 0;
        this.density = 'comfy';
        this.visibleColumns = [];
        this.allFormControlChanges$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...this.allPossibleColumns.map(c => c.control && c.control.valueChanges));
        this.latestCreationDate = new Date(2020, 2, 23);
    }
    ngOnInit() {
        this.setVisibleColumns();
    }
    ngAfterViewInit() {
        this.setUpTable();
        this.allFormControlChanges$.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe(change => {
            this.setVisibleColumns();
        });
    }
    // NOTE: Needed for untilComponentDestroyed
    ngOnDestroy() { }
    setVisibleColumns() {
        this.visibleColumns = this.allPossibleColumns.filter(c => c.control && c.control.value);
        console.log('DEMO: setVisibleColumns', this.visibleColumns);
    }
    /**
     * Set up the database, sorting and API calls
     */
    setUpTable() {
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => {
            this.paginator.currentPageIndex = 0;
        });
        // Fetch new data anytime the sort is changed, the page is changed, or the records shown per
        // page is changed
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sort.sortChange, this.paginator.pageSelect, this.paginator.recordsPerPageChange)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => {
            if (this.useCachedData && this.savedResponse && this.savedResponse.items) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.savedResponse);
            }
            return this.exampleDatabase.getRepoIssues(this.sort.active, this.sort.direction, this.paginator.currentPageIndex, this.paginator.recordsPerPage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => {
            // console.log('Demo: fetched data: ', data);
            this.savedResponse = data;
            this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() => {
            console.warn('GitHub API rate limit has been reached!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        })).subscribe(data => {
            this.dataSource.data = data;
        });
    }
    clearCachedData() {
        this.savedResponse = null;
    }
    /**
     * Sanitize HTML content before injecting it
     *
     * @param content - The HTML to sanitize
     * @returns The safe HTML
     */
    sanitize(content) {
        return this.domSanitizer.bypassSecurityTrustHtml(content);
    }
    /**
     * Reorder columns list when a list item is dropped
     *
     * @param event - The drop event
     */
    columnDropped(event) {
        const columns = this.allPossibleColumns.slice();
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(columns, event.previousIndex, event.currentIndex);
        this.allPossibleColumns = columns;
        this.setVisibleColumns();
        this.changeDetectorRef.detectChanges();
    }
    trackBy(index, item) {
        return item.number;
    }
    // Log functions for Demo purposes
    perPageChange(e) {
        console.log('DEMO: Records per page changed: ', e);
    }
    onPageSelect(e) {
        console.log('DEMO: Page selected: ', e);
    }
    columnsChange(e) {
        // NOTE: Commented out due to the volume - uncomment as needed for demo purposes.
        console.log('DEMO: Columns change: ', e);
    }
    log() {
        console.log('Demo: columns: ', this.myTable.columns);
    }
}


/***/ }),

/***/ "./src/app/components/table/table.module.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/components/table/table.module.ngfactory.js ***!
  \************************************************************/
/*! exports provided: TableModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModuleNgFactory", function() { return TableModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.module */ "./src/app/components/table/table.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _table_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.component.ngfactory */ "./src/app/components/table/table.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */ "../../node_modules/@angular/material/dialog/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/tooltip/index.ngfactory */ "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @terminus/ui-pipes */ "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
/* harmony import */ var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @terminus/ui-validation-messages */ "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @terminus/ui-validators */ "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
/* harmony import */ var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @terminus/ui-selection-list */ "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @terminus/ui-sort */ "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _table_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./table-routing.module */ "./src/app/components/table/table-routing.module.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @terminus/ui-card */ "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @terminus/ui-checkbox */ "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @terminus/ui-button */ "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
/* harmony import */ var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @terminus/ui-menu */ "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
/* harmony import */ var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @terminus/ui-option */ "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
/* harmony import */ var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @terminus/ui-chip */ "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
/* harmony import */ var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @terminus/ui-form-field */ "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
/* harmony import */ var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @terminus/ui-input */ "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
/* harmony import */ var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @terminus/ui-tooltip */ "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
/* harmony import */ var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @terminus/ui-paginator */ "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @terminus/ui-select */ "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @terminus/ui-table */ "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

























































var TableModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_table_module__WEBPACK_IMPORTED_MODULE_1__["TableModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _table_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TableComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_16__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_16__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_23__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_23__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortHeaderIntl"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TS_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_29__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_29__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_31__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _table_routing_module__WEBPACK_IMPORTED_MODULE_32__["TableRoutingModule"], _table_routing_module__WEBPACK_IMPORTED_MODULE_32__["TableRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_35__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_35__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_36__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_36__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_42__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_42__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_43__["TsMenuModule"], _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_43__["TsMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_44__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_44__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_45__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_45__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_46__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_46__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_48__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_48__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_49__["TsPaginatorModule"], _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_49__["TsPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_51__["TsSelectModule"], _terminus_ui_select__WEBPACK_IMPORTED_MODULE_51__["TsSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_52__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_52__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_53__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_53__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_54__["TsTableModule"], _terminus_ui_table__WEBPACK_IMPORTED_MODULE_54__["TsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _table_module__WEBPACK_IMPORTED_MODULE_1__["TableModule"], _table_module__WEBPACK_IMPORTED_MODULE_1__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_31__["ROUTES"], function () { return [[{ path: "", component: _table_component__WEBPACK_IMPORTED_MODULE_55__["TableComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__["TS_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_56__["ENTER"]] }, [])]); });



/***/ }),

/***/ "./src/app/components/table/table.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/table/table.module.ts ***!
  \**************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
class TableModule {
}


/***/ })

}]);
//# sourceMappingURL=table-table-module-ngfactory-es2015.js.map