(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~autofocus-autofocus-module-ngfactory~chart-chart-module-ngfactory~confirmation-confirmation-~725fd03c"],{

/***/ "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/select/fesm2015/terminus-ui-select.js ***!
  \******************************************************************************************************/
/*! exports provided: DEFAULT_COMPARE_WITH, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, TS_SELECT_PANEL_VIEWPORT_PADDING, TsSelectChange, TsSelectComponent, TsSelectModule, TsSelectTriggerComponent, tsSelectAnimations, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COMPARE_WITH", function() { return DEFAULT_COMPARE_WITH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_SELECT_PANEL_VIEWPORT_PADDING", function() { return TS_SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSelectChange", function() { return TsSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSelectComponent", function() { return TsSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSelectModule", function() { return TsSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsSelectTriggerComponent", function() { return TsSelectTriggerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsSelectAnimations", function() { return tsSelectAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @terminus/ui-checkbox */ "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
/* harmony import */ var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @terminus/ui-form-field */ "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @terminus/ui-input */ "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
/* harmony import */ var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ui-option */ "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
/* harmony import */ var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @terminus/ui-validation-messages */ "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @terminus/ngx-tools/browser */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
/* harmony import */ var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @terminus/ngx-tools/coercion */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
/* harmony import */ var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @terminus/ngx-tools/keycodes */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");
/* harmony import */ var _terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @terminus/ngx-tools/type-guards */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-type-guards.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
/* harmony import */ var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @terminus/ui-spacing */ "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");




























/**
 * The defined panel animations for the {@link TsSelectComponent}
 */
const tsSelectAnimations = {
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["style"])({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            transform: 'scaleY(1)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 24px)',
            transform: 'scaleY(1)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_26__["style"])({ opacity: 0 }))),
    ]),
};

// Unique ID for each instance
let nextUniqueId = 0;
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 *
 * @deprecated Please use `TsSelectionListTriggerDirective`
 */
let TsSelectTriggerComponent = class TsSelectTriggerComponent {
    constructor() {
        /**
         * Define the default component ID
         */
        this.uid = `ts-select-trigger-${nextUniqueId++}`;
        this._id = this.uid;
    }
    /**
     * Define an ID for the component
     *
     * @param value
     */
    set id(value) {
        this._id = value || this.uid;
    }
    get id() {
        return this._id;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSelectTriggerComponent.prototype, "id", null);
TsSelectTriggerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-select-trigger',
        template: `<ng-content></ng-content>`,
        host: {
            'class': 'ts-select-custom-trigger qa-select-custom-trigger',
            '[attr.id]': 'id',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'tsSelectTrigger'
    })
], TsSelectTriggerComponent);

var TsSelectComponent_1;
/**
 * The following style constants are necessary to save here in order to properly calculate the alignment of the selected option over the
 * trigger element.
 */
// The max height of the select's overlay panel
const SELECT_PANEL_MAX_HEIGHT = 256;
// The panel's padding on the x-axis
const SELECT_PANEL_PADDING_X = 16;
const SELECT_ITEM_HEIGHT = 3;
// The panel's x axis padding if it is indented (e.g. there is an option group)
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
// The height of the select items in `em` units
const SELECT_ITEM_HEIGHT_EM = SELECT_ITEM_HEIGHT;
/**
 * Distance between the panel edge and the option text in multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 20 = 44
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = 0;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at this value or more away from the viewport boundary
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
const DEFAULT_DELIMITER = ',';
/**
 * The default compare with function used when the consumer does not define one
 *
 * @param o1
 * @param o2
 */
const DEFAULT_COMPARE_WITH = (o1, o2) => o1 === o2;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at this value or more away from the viewport boundary
 */
const TS_SELECT_PANEL_VIEWPORT_PADDING = 8;
/**
 * The event object that is emitted when the select value has changed
 */
class TsSelectChange {
    constructor(
    // Reference to the select that emitted the change event
    // eslint-disable-next-line deprecation/deprecation
    source, 
    // The current value
    value) {
        this.source = source;
        this.value = value;
    }
}
// Unique ID for each instance
let nextUniqueId$1 = 0;
const DEFAULT_VIEWPORT_MARGIN = 100;
const ɵ0 = { clickAction: 'noop' };
/**
 * A component to create a select menu
 *
 * @deprecated Please use `TsSelectionListComponent`
 *
 * @example
 * <ts-select
 *              [allowMultiple]="true"
 *              [compareWith]="myCompareFn"
 *              delimiter=","
 *              [hideRequiredMarker]="true"
 *              hint="My hint!"
 *              id="my-id"
 *              [isDisabled]="true"
 *              [isFilterable]="true"
 *              [isRequired]="true"
 *              label="My label!"
 *              placeholder="My placeholder!"
 *              [showProgress]="true"
 *              [showRefineSearchMessage]="true"
 *              [showRefresh]="true"
 *              [sortComparator]="myComparator"
 *              tabIndex="-1"
 *              theme="primary"
 *              [totalHiddenResults]="1278"
 *              [validateOnChange]="true"
 *              value="My value!"
 *              (closed)="panelWasClosed($event)"
 *              (duplicateSelection)="duplicateWasSelected($event)"
 *              (opened)="panelWasOpened($event)"
 *              (optionDeselected)="optionWasDeselected($event)"
 *              (optionSelected)="optionWasSelected($event)"
 *              (optionsRefreshRequested)="refreshWasSelected()"
 *              (queryChange)="searchQueryChanged($event)"
 *              (selectionChange)="aSelectionWasChanged($event)"
 *              (valueChange)="theValueWasChanged($event)"
 * ></ts-select>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/select</example-url>
 */
let TsSelectComponent = TsSelectComponent_1 = class TsSelectComponent {
    constructor(viewportRuler, changeDetectorRef, ngZone, documentService, elementRef, ngControl) {
        this.viewportRuler = viewportRuler;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.documentService = documentService;
        this.elementRef = elementRef;
        this.ngControl = ngControl;
        /**
         * Give the component an explicit name
         */
        this.componentName = 'TsSelectComponent';
        /**
         * Define the flex layout gap
         */
        this.flexGap = _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_25__["TS_SPACING"].small[0];
        /**
         * Subject used to alert the parent {@link FormFieldComponent} when the label gap should be recalculated
         *
         * Implemented as part of TsFormFieldControl.
         */
        this.labelChanges = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. This will be changed based on the y-position of the selected option.
         */
        this.offsetY = 0;
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */
        this.optionIds = '';
        /**
         * Combined stream of all of the child options' change events
         */
        this.optionSelectionChanges = 
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(...this.options.map(option => option.selectionChange)));
        /**
         * Emits when the panel element is finished transforming in.
         */
        this.panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        /**
         * Whether or not the overlay panel is open
         */
        this.panelOpen = false;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely).
         */
        this.positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */
        this.scrollTop = 0;
        /**
         * Store the search query
         */
        this.searchQuery = '';
        // Since the FormFieldComponent is inside this template, we cannot use a provider to pass this component instance to the form field.
        // Instead, we pass it manually through the template with this reference.
        this.selfReference = this;
        /*
         * Implemented as part of TsFormFieldControl.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        /**
         * The value of the select panel's transform-origin property
         */
        this.transformOrigin = 'top';
        /**
         * The cached font-size of the trigger element
         */
        this.triggerFontSize = 0;
        /**
         * Define the default component ID
         */
        this.uid = `ts-select-${nextUniqueId$1++}`;
        /**
         * Management of the query string
         */
        this.querySubject = new rxjs__WEBPACK_IMPORTED_MODULE_18__["BehaviorSubject"]('');
        /**
         * Margin between select panel edge and viewport edge
         */
        this.viewportMarginSpacing = DEFAULT_VIEWPORT_MARGIN;
        /**
         * Define if multiple selections are allowed
         */
        this.allowMultiple = false;
        this._compareWith = DEFAULT_COMPARE_WITH;
        this._delimiter = DEFAULT_DELIMITER;
        /**
         * Define if the required marker should be hidden
         */
        this.hideRequiredMarker = false;
        this._id = this.uid;
        /**
         * Define if the control should be disabled
         */
        this.isDisabled = false;
        /**
         * Define if the select is filterable
         */
        this.isFilterable = false;
        this._isRequired = false;
        /**
         * Define whether a validation or a hint needed.
         */
        this.noValidationOrHint = false;
        /**
         * Define if the component should currently be showing a progress spinner
         */
        this.showProgress = false;
        /**
         * Define if the component should expose a message telling the user to refine their search
         */
        this.showRefineSearchMessage = false;
        /**
         * Define if the select should show an option to trigger a refresh (by emitting an event)
         */
        this.showRefresh = false;
        this._tabIndex = 0;
        /**
         * Define the component theme
         */
        this.theme = 'primary';
        /**
         * Define if validation messages should be shown immediately or on blur
         */
        this.validateOnChange = false;
        /**
         * Event for when the panel is closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when a duplicate selection is made
         */
        this.duplicateSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the panel is opened
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when an option is removed
         */
        this.optionDeselected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when an option is selected
         */
        this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the user requests a refresh of the available options
         */
        this.optionsRefreshRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the query has changed, used by filterable select
         */
        this.queryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event for when the selections change
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         *
         * Needed for {@link TsFormFieldComponent}.
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Stub in onChange
         *
         * Needed for ControlValueAccessor (View -> model callback called when value changes)
         */
        // istanbul ignore next
        this.onChange = () => { };
        /**
         * Stub in onTouched
         *
         * Needed for ControlValueAccessor (View -> model callback called when select has been touched)
         */
        // istanbul ignore next
        this.onTouched = () => { };
        this.document = this.documentService.document;
        // This is the assigned FormControl or NgModel
        // istanbul ignore else
        if (this.ngControl) {
            // Note: we provide the value accessor through here, instead of the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * Whether all options are selected
     */
    get allOptionsSelected() {
        return Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["allOptionsAreSelected"])(this.options);
    }
    /**
     * Whether the select has a value
     */
    get empty() {
        return this.selectionModel && this.selectionModel.isEmpty();
    }
    /**
     * Whether the input has focus
     */
    get focused() {
        const el = this.inputElement && this.inputElement.nativeElement;
        return (this.document.activeElement === el) || this.panelOpen;
    }
    /**
     * Calculates the amount of items in the select. This includes options and group labels.
     */
    get itemCount() {
        return this.options.length + this.optionGroups.length;
    }
    /**
     * Calculates the height of the options
     *
     * Only called if at least one option exists
     */
    get itemHeight() {
        // Try to use the 2nd option in case the first option is blank or a filter etc. Fall back to the first item if needed.
        const options = this.options.toArray();
        const option = options[1] || options[0];
        return option && option.elementRef.nativeElement.offsetHeight;
    }
    /**
     * Whether at least 1 option is selected, but not all options
     */
    get someOptionsSelected() {
        return Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["someOptionsAreSelected"])(this.options);
    }
    /**
     * Determine if the label should float
     */
    get shouldLabelFloat() {
        return this.focused || !this.empty || this.searchQuery.length > 0;
    }
    /**
     * The value displayed in the select trigger
     */
    get selectTriggerValue() {
        if (this.allowMultiple) {
            const selectedOptions = this.selectionModel.selected.map(option => option.viewValue);
            return selectedOptions.join(`${this.delimiter} `);
        }
        return this.selectionModel.selected[0].viewValue;
    }
    /**
     * The currently selected option or options
     */
    get selected() {
        return this.allowMultiple ? this.selectionModel.selected : this.selectionModel.selected[0];
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     *
     * Learn more about `compareWith` in the Angular docs:
     * https://angular.io/api/forms/SelectControlValueAccessor#customizing-option-selection
     *
     * @param fn
     */
    set compareWith(fn) {
        if (typeof fn !== 'function' && Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
            // eslint-disable-next-line no-console
            console.warn(`TsSelectComponent: "compareWith" must be a function. Falling back to the default.`);
            this._compareWith = DEFAULT_COMPARE_WITH;
        }
        this._compareWith = fn;
        // A different comparator means the selection could change so we need to reinitialize any selections
        if (this.selectionModel) {
            this.initializeSelection();
        }
    }
    get compareWith() {
        return this._compareWith;
    }
    /**
     * Define the delimiter used in the list of selected options
     *
     * @param value
     */
    set delimiter(value) {
        this._delimiter = Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_23__["isString"])(value) ? value : DEFAULT_DELIMITER;
    }
    get delimiter() {
        return this._delimiter;
    }
    /**
     * Define a hint for the input
     *
     * @param value
     */
    set hint(value) {
        this._hint = value;
    }
    get hint() {
        return this._hint;
    }
    /**
     * Define an ID for the component
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
     * Define if the control is required
     *
     * @param value
     */
    set isRequired(value) {
        this._isRequired = value;
    }
    get isRequired() {
        const ctrl = this.ngControl && this.ngControl.control;
        const requiredFormControl = !!ctrl && Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["hasRequiredControl"])(ctrl);
        return this._isRequired || requiredFormControl;
    }
    /**
     * Define the label text
     *
     * @param value
     */
    set label(value) {
        this._label = value;
    }
    get label() {
        return this._label;
    }
    /**
     * Placeholder to be shown if no value has been selected
     *
     * @param value
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    get placeholder() {
        return this._placeholder;
    }
    /**
     * Define the tab index for the component
     *
     * @param value
     */
    set tabIndex(value) {
        this._tabIndex = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceNumberProperty"])(value);
    }
    get tabIndex() {
        return this._tabIndex;
    }
    /**
     * Value of the select control
     *
     * @param newValue
     */
    set value(newValue) {
        if (newValue !== this._value) {
            this._value = newValue;
        }
    }
    get value() {
        return this._value;
    }
    /**
     * Trigger change detection when the underlying form changes
     */
    ngOnInit() {
        // TODO: re-initialize the selection model if this.allowMultiple changes (rather than throw error like material)
        this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["SelectionModel"](this.allowMultiple);
        // Seed the control value
        // NOTE: When the consumer is using an ngModel, the value is not set on the first cycle.
        // We need to push it to the next event loop. When using a FormControl the value is there on the first run.
        // istanbul ignore else
        // eslint-disable-next-line dot-notation
        if (this.ngControl && this.ngControl['form']) {
            // Support dynamic form control updates
            // istanbul ignore else
            if (this.ngControl.valueChanges) {
                this.ngControl.valueChanges
                    .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this))
                    .subscribe(newValue => {
                    // istanbul ignore else
                    if (newValue) {
                        this.setSelectionByValue(newValue);
                    }
                });
            }
        }
    }
    /**
     * Initialize the key manager and set up change listeners
     */
    ngAfterContentInit() {
        this.initKeyManager();
        // NOTE: Known bug: This event will come through twice for each selection.
        // NOTE: Selection model is created during OnInit so it cannot be null here
        this.selectionModel.changed.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this)).subscribe(event => {
            event.added.forEach(option => {
                option.select();
                this.optionSelected.emit(new TsSelectChange(this, option.value));
            });
            event.removed.forEach(option => {
                option.deselect();
                this.optionDeselected.emit(new TsSelectChange(this, option.value));
            });
        });
        // If the array changes, reset options
        this.options.changes.pipe(
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(null), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this)).subscribe(() => {
            this.resetOptions();
            this.initializeSelection();
        });
    }
    /**
     * Trigger updates when the label is dynamically changed
     *
     * @param changes
     */
    ngOnChanges(changes) {
        // Let the parent FormField know that it should update the ouline gap for the new label
        // istanbul ignore else
        if ((!!(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["inputHasChanged"])(changes, 'label')) && !changes.label.firstChange)) {
            // Trigger change detection first so that the FormField will be working with the latest version
            this.changeDetectorRef.detectChanges();
            this.labelChanges.next();
        }
    }
    /**
     * Cleanup
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /**
     * Toggles the overlay panel open or closed.
     */
    toggle() {
        // istanbul ignore else
        if (!this.isDisabled) {
            this.panelOpen ? this.close() : this.open();
        }
    }
    /**
     * Open the overlay panel
     */
    open() {
        if (this.isDisabled || !this.options || !this.options.length || this.panelOpen) {
            return;
        }
        this.triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.
        this.triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement)['font-size'], 10);
        this.panelOpen = true;
        this.keyManager.withHorizontalOrientation(null);
        this.highlightCorrectOption();
        this.changeDetectorRef.markForCheck();
        // Set the font size on the panel element once it exists.
        this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe(() => {
            // istanbul ignore else
            if (this.triggerFontSize && this.overlayDir.overlayRef && this.overlayDir.overlayRef.overlayElement) {
                this.overlayDir.overlayRef.overlayElement.style.fontSize = `${this.triggerFontSize}px`;
            }
            this.options.first.elementRef.nativeElement.getBoundingClientRect();
            this.calculateOverlayPosition();
        });
        // Alert the consumer
        this.opened.emit();
    }
    /**
     * Close the overlay panel
     */
    close() {
        if (this.panelOpen) {
            this.panelOpen = false;
            this.keyManager.withHorizontalOrientation('ltr');
            this.changeDetectorRef.markForCheck();
            this.onTouched();
            this.updateValueAndValidity();
            // Alert the consumer
            this.closed.emit();
        }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached
     */
    onAttached() {
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe(() => {
            this.changeDetectorRef.detectChanges();
            this.setPanelScrollTop(this.scrollTop);
        });
    }
    /**
     * Handles all keydown events on the select
     *
     * @param event - The KeyboardEvent
     */
    handleKeydown(event) {
        if (this.isDisabled) {
            return;
        }
        this.panelOpen ? this.handleOpenKeydown(event) : this.handleClosedKeydown(event);
    }
    /**
     * Handle keyboard events when the select panel is closed
     *
     * @param event - The KeyboardEvent
     */
    handleClosedKeydown(event) {
        const keyCode = event.code;
        const arrowKeys = [_terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].DOWN_ARROW.code, _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].UP_ARROW.code, _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].LEFT_ARROW.code, _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].RIGHT_ARROW.code];
        const isArrowKey = arrowKeys.indexOf(keyCode) >= 0;
        const isOpenKey = keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].ENTER.code || keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].SPACE.code;
        // Open the select on ALT + arrow key to match the native <select>
        if (isOpenKey || ((this.allowMultiple || event.altKey) && isArrowKey)) {
            // Prevent the page from scrolling down when space is pressed
            event.preventDefault();
            this.open();
        }
        else if (!this.allowMultiple) {
            this.keyManager.onKeydown(event);
        }
    }
    /**
     * Handle keyboard events when the select panel is open
     *
     * @param event - The KeyboardEvent
     */
    // eslint-disable-next-line complexity
    handleOpenKeydown(event) {
        const keyCode = event.code;
        const isArrowKey = keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].DOWN_ARROW.code || keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].UP_ARROW.code;
        const manager = this.keyManager;
        const target = event.target;
        const isFilter = this.isFilterable && target.tagName.toLowerCase() === 'input';
        if (keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].HOME.code || keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].END.code) {
            // Focus the first/last item with HOME/END respectively
            event.preventDefault();
            keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].HOME.code ? manager.setFirstItemActive() : manager.setLastItemActive();
        }
        else if (isArrowKey && event.altKey) {
            // Close the select on ALT+ARROW to match the native <select>
            event.preventDefault();
            this.close();
        }
        else if ((keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].ENTER.code || (keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].SPACE.code && !isFilter)) && manager.activeItem) {
            // Select the active item with SPACE or ENTER
            event.preventDefault();
            manager.activeItem.selectViaInteraction();
        }
        else if (this.allowMultiple && keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].A.code && event.ctrlKey) {
            // Select all with CTRL+A
            event.preventDefault();
            const hasDeselectedOptions = this.options.some(opt => !opt.isDisabled && !opt.selected);
            this.options.forEach(option => {
                // istanbul ignore else
                if (!option.isDisabled) {
                    hasDeselectedOptions ? option.select() : option.deselect();
                }
            });
        }
        else {
            const shouldSelect = this.allowMultiple && isArrowKey && event.shiftKey;
            if (isArrowKey && event.shiftKey) {
                if (keyCode === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_22__["KEYS"].DOWN_ARROW.code) {
                    manager.setNextItemActive();
                }
                else {
                    manager.setPreviousItemActive();
                }
            }
            else {
                manager.onKeydown(event);
            }
            if (shouldSelect && manager.activeItem) {
                manager.activeItem.selectViaInteraction();
            }
        }
    }
    /**
     * Drops current option subscriptions and IDs and resets from scratch
     */
    resetOptions() {
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this.options.changes), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this)).subscribe(event => {
            this.onSelect(event.source, event.isUserInput);
            // istanbul ignore else
            if (event.isUserInput && !this.allowMultiple && this.panelOpen) {
                this.close();
                this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        // eslint-disable-next-line deprecation/deprecation
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(...this.options.map(option => option.stateChanges))
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this))
            .subscribe(() => {
            this.changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
        this.setOptionIds();
    }
    /**
     * Handle the selection when an option is clicked
     *
     * @param option - The selected option
     * @param isUserInput - Whether this selection happened from a user's click
     */
    onSelect(option, isUserInput) {
        const wasSelected = this.selectionModel.isSelected(option);
        // If not in multiple selection mode, clear any existing selection first
        if (option.value == null && !this.allowMultiple) {
            option.deselect();
            this.selectionModel.clear();
            this.propagateChanges(option.value);
        }
        else {
            option.selected ? this.selectionModel.select(option) : this.selectionModel.deselect(option);
            // istanbul ignore else
            if (isUserInput) {
                this.keyManager.setActiveItem(option);
            }
            // istanbul ignore else
            if (this.allowMultiple) {
                this.sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `TsOptionComponent`.
                    this.focus();
                }
            }
        }
        // Only propagate if the selected option is not already in the selectionModel
        if (wasSelected !== this.selectionModel.isSelected(option)) {
            this.propagateChanges();
        }
        this.stateChanges.next();
    }
    /**
     * Records option IDs to pass to the aria-owns property
     */
    setOptionIds() {
        this.optionIds = this.options.map(option => option.id).join(' ');
    }
    /**
     * Set up a key manager to listen to keyboard events on the overlay panel
     */
    initKeyManager() {
        this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead()
            .withVerticalOrientation()
            .withHorizontalOrientation('ltr');
        this.keyManager.tabOut.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this)).subscribe(() => {
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            this.focus();
            this.close();
        });
        this.keyManager.change.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_24__["untilComponentDestroyed"])(this)).subscribe(() => {
            if (this.panelOpen && this.panel) {
                this.scrollActiveOptionIntoView();
            }
            else if (!this.panelOpen && !this.allowMultiple && this.keyManager.activeItem) {
                this.keyManager.activeItem.selectViaInteraction();
            }
        });
    }
    /**
     * Focus the correct element
     *
     * When in standard select mode we should focus the select itself.
     */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    /**
     * Sort the selected values in the selectedModel based on their order in the panel
     */
    sortValues() {
        // istanbul ignore else
        if (this.allowMultiple) {
            const options = this.options.toArray();
            this.selectionModel
                .sort((a, b) => {
                if (this.sortComparator) {
                    return this.sortComparator(a, b, options);
                }
                return options.indexOf(a) - options.indexOf(b);
            });
            this.stateChanges.next();
        }
    }
    /**
     * Emit a change event to set the model value
     *
     * @param fallbackValue - A fallback value to use when no selection exists
     */
    propagateChanges(fallbackValue) {
        let valueToEmit;
        if (this.allowMultiple) {
            valueToEmit = this.selected.map(option => option.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this.value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this.onChange(valueToEmit);
        this.selectionChange.emit(new TsSelectChange(this, valueToEmit));
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Call FormControl updateValueAndValidity function to ensure value and valid status get updated.
     */
    updateValueAndValidity() {
        if (this.ngControl && this.ngControl.control) {
            this.ngControl.control.updateValueAndValidity();
        }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
     *
     * NOTE: Currently we are not using this, but it still must be present since this component is acting as a CVA.
     *
     * @param value - New value to be written to the model
     */
    writeValue(value) { }
    /**
     * Save a callback function to be invoked when the select's value changes from user input.
     * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
     *
     * @param fn - Callback to be triggered when the value changes
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Save a callback function to be invoked when the select is blurred by the user.
     * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
     *
     * @param fn - Callback to be triggered when the component has been touched
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Disables the select.
     * Part of the ControlValueAccessor interface required to integrate with Angular's core forms API.
     *
     * @param isDisabled - If the component is disabled
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        this.changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Initialize any existing selections into the selectionModel
     */
    initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            this.setSelectionByValue(this.ngControl ? this.ngControl.value : this.value);
        });
    }
    /**
     * Sets the selected option based on a value.
     * If no option can be found with the designated value, the select trigger is cleared.
     *
     * @param value - The value to use to look up options
     */
    setSelectionByValue(value) {
        if (this.allowMultiple && value) {
            value = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_21__["coerceArray"])(value);
            this.selectionModel.clear();
            value.forEach((currentValue) => this.selectOptionByValue(currentValue));
            this.sortValues();
        }
        else {
            this.selectionModel.clear();
            const correspondingOption = this.selectOptionByValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this.keyManager.setActiveItem(correspondingOption);
            }
        }
        this.changeDetectorRef.markForCheck();
    }
    /**
     * Find and select an option based on its value
     *
     * @param value - The value to use when searching for a matching option
     * @returns Option that has the corresponding value
     */
    selectOptionByValue(value) {
        const correspondingOption = this.options.find((option) => {
            try {
                // Treat null as a special reset value.
                return option.value != null && this.compareWith(option.value, value);
            }
            catch (error) {
                // istanbul ignore else
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
                    // Notify developers of errors in their comparator.
                    // eslint-disable-next-line no-console
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this.selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    }
    /**
     * Scroll the active option into view
     */
    scrollActiveOptionIntoView() {
        const activeOptionIndex = this.keyManager.activeItemIndex || 0;
        const labelCount = Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
        const total = Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["getOptionScrollPosition"])(activeOptionIndex + labelCount, this.itemHeight, this.getPanelScrollTop(), SELECT_PANEL_MAX_HEIGHT);
        this.setPanelScrollTop(total);
    }
    /**
     * Calculate the scroll position and x- and y- offsets of the overlay panel
     */
    calculateOverlayPosition() {
        const itemHeight = this.itemHeight;
        const items = this.itemCount;
        const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        const maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        // NOTE: Since we are checking the `empty` value first, we know that the selection model is not empty
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        let selectedOptionOffset = this.empty ? 0 : this.getOptionIndex(this.selectionModel.selected[0]);
        // Make sure we take into account optgroups also
        selectedOptionOffset += Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const scrollBuffer = panelHeight / 2;
        this.scrollTop = this.calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this.offsetY = this.calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this.checkOverlayWithinViewport(maxScroll);
    }
    /**
     * Calculate the scroll position of the select's overlay panel
     *
     * This attempts to center the selected option in the panel. If the option is too high or too low in the panel to be scrolled to the
     * center, it clamps the scroll position to the min or max scroll positions respectively.
     *
     * @param selectedIndex - The index of the item to scroll to
     * @param scrollBuffer - The amount to buffer the scroll
     * @param maxScroll - The maximum amount the panel can scroll
     */
    calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this.itemHeight;
        const optionOffsetFromScrollTop = itemHeight * selectedIndex;
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the scroll container, then subtracts the scroll
        // buffer to scroll the option down to the center of the overlay panel. Half the option height must be re-added to the scrollTop so the
        // option is centered based on its middle, not its top edge.
        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the top start corner of the trigger.
     * It has to be adjusted in order for the selected option to be aligned over the trigger when the panel opens.
     *
     * @param selectedIndex - The index of the selected item
     * @param scrollBuffer - The number of pixels to buffer the scroll by
     * @param maxScroll - The farthest the panel can scroll
     * @returns The overlay's Y offset
     */
    calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        // NOTE: scrollBuffer is half of the panel height - which is really half of SELECT_PANEL_MAX_HEIGHT (when many options exist)
        // NOTE: maxScroll is the height of all options minus the height of the panel
        const itemHeight = this.itemHeight;
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const optionHeightAdjustment = (itemHeight - (this.triggerRect ? this.triggerRect.height : 0)) / 2;
        const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        // scrollbuffer - options
        let optionOffsetFromPanelTop;
        if (this.scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this.scrollTop === maxScroll) {
            const firstDisplayedIndex = this.itemCount - maxOptionsDisplayed;
            const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            const partialItemHeight = itemHeight - (((this.itemCount * itemHeight) - SELECT_PANEL_MAX_HEIGHT) % itemHeight);
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = (selectedDisplayIndex * itemHeight) + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            optionOffsetFromPanelTop = scrollBuffer - (itemHeight / 2);
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round((optionOffsetFromPanelTop * -1) - optionHeightAdjustment);
    }
    /**
     * Check that the attempted overlay position will fit within the viewport.
     *
     * If it will not fit, tries to adjust the scroll position and the associated y-offset so the panel can open fully on-screen.
     * If it still won't fit, sets the offset back to 0 to allow the fallback position to take over.
     *
     * @param maxScroll - The maximum amount to allow the panel to scroll
     */
    checkOverlayWithinViewport(maxScroll) {
        const itemHeight = this.itemHeight;
        const viewportSize = this.viewportRuler.getViewportSize();
        // Space between top of trigger and top of viewport
        const topSpaceAvailable = this.triggerRect ? (this.triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING) : 0;
        // Viewport height - trigger bottom - viewport padding
        const bottomSpaceAvailable = viewportSize.height - (this.triggerRect ? this.triggerRect.bottom : 0) - SELECT_PANEL_VIEWPORT_PADDING;
        const panelHeightTop = Math.abs(this.offsetY);
        // 256 when maxed out
        const totalPanelHeight = Math.min(this.itemCount * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        // total panel - offsetY - trigger height
        const panelHeightBottom = totalPanelHeight - panelHeightTop - (this.triggerRect ? this.triggerRect.height : 0);
        if (panelHeightBottom > bottomSpaceAvailable) {
            this.adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this.adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this.transformOrigin = this.getOriginBasedOnOption();
        }
    }
    /**
     * Adjust the overlay panel up to fit in the viewport
     *
     * @param panelHeightBottom - The height of the panel bottom
     * @param bottomSpaceAvailable - The amount of available space at the bottom
     */
    adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this.scrollTop -= distanceBelowViewport;
        // Don't allow the offset to be set below 0
        this.offsetY = (this.offsetY - distanceBelowViewport) < 0 ? 0 : this.offsetY - distanceBelowViewport;
        this.transformOrigin = this.getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take effect.
        // istanbul ignore else
        if (this.scrollTop <= 0) {
            this.scrollTop = 0;
            this.offsetY = 0;
            this.transformOrigin = `50% bottom 0px`;
        }
    }
    /**
     * Adjusts the overlay panel down to fit in the viewport
     *
     * @param panelHeightTop - The height of the panel top
     * @param topSpaceAvailable - The amount of available space at the top
     * @param maxScroll - The maximum amount the panel can be scrolled
     */
    adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this.scrollTop += distanceAboveViewport;
        // Don't allow the offset to be set below 0
        this.offsetY = (this.offsetY + distanceAboveViewport) < 0 ? 0 : this.offsetY + distanceAboveViewport;
        this.transformOrigin = this.getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        // istanbul ignore else
        if (this.scrollTop >= maxScroll) {
            this.scrollTop = maxScroll;
            this.offsetY = 0;
            this.transformOrigin = `50% top 0px`;
            return;
        }
    }
    /**
     * Set the transform origin point based on the selected option
     *
     * @returns The transform origin CSS string
     */
    getOriginBasedOnOption() {
        const itemHeight = this.itemHeight;
        /* eslint-disable @typescript-eslint/no-magic-numbers */
        const optionHeightAdjustment = (itemHeight - (this.triggerRect ? this.triggerRect.height : 0)) / 2;
        const originY = Math.abs(this.offsetY) - optionHeightAdjustment + (itemHeight / 2);
        /* eslint-enable @typescript-eslint/no-magic-numbers */
        return `50% ${originY}px 0px`;
    }
    /**
     * Get the index of the provided option in the option list
     *
     * @param option - The option whose index should be found
     * @returns The index of the option
     */
    getOptionIndex(option) {
        return this.options.reduce((result, current, index) => {
            // eslint-disable-next-line no-undefined
            const optionIndexIfCurrent = option === current ? index : undefined;
            return Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_23__["isUndefined"])(result) ? optionIndexIfCurrent : result;
            // eslint-disable-next-line no-undefined
        }, undefined);
    }
    /**
     * Highlight the selected item.
     *
     * If no option is selected, it will highlight the first item instead.
     */
    highlightCorrectOption() {
        // istanbul ignore else
        if (this.keyManager) {
            if (this.empty) {
                this.keyManager.setFirstItemActive();
            }
            else {
                this.keyManager.setActiveItem(this.selectionModel.selected[0]);
            }
        }
    }
    /**
     * Toggle the selection all options
     *
     * If any are selected, it will unselect all & vice-versa.
     */
    toggleAllOptions() {
        Object(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["toggleAllOptions"])(this.options);
    }
    /**
     * Ensure the correct element gets focus when the primary container is clicked.
     *
     * Implemented as part of TsFormFieldControl.
     */
    onContainerClick() {
        this.focus();
        // istanbul ignore else
        if (!this.isDisabled) {
            this.open();
        }
    }
    /**
     * Get the panel's scrollTop
     *
     * @returns The scrollTop number
     */
    getPanelScrollTop() {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    }
    /**
     * Set the panel's scrollTop
     *
     * This allows us to manually scroll to display options above or below the fold, as they are not actually being focused when active.
     *
     *
     * @param scrollTop - The number to set scrollTop to
     */
    setPanelScrollTop(scrollTop) {
        // istanbul ignore else
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    }
};
TsSelectComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__["TsDocumentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"])(TsSelectTriggerComponent),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsSelectTriggerComponent)
], TsSelectComponent.prototype, "customTrigger", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('input'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], TsSelectComponent.prototype, "inputElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('labelElement'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], TsSelectComponent.prototype, "labelElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('trigger'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], TsSelectComponent.prototype, "trigger", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"])
], TsSelectComponent.prototype, "overlayDir", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('panel'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], TsSelectComponent.prototype, "panel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["TsOptionComponent"], { descendants: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])
], TsSelectComponent.prototype, "options", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(_terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["TsOptgroupComponent"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])
], TsSelectComponent.prototype, "optionGroups", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "allowMultiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
], TsSelectComponent.prototype, "compareWith", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSelectComponent.prototype, "delimiter", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "hideRequiredMarker", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSelectComponent.prototype, "hint", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSelectComponent.prototype, "id", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "isDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "isFilterable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
], TsSelectComponent.prototype, "isRequired", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSelectComponent.prototype, "label", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "noValidationOrHint", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsSelectComponent.prototype, "placeholder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "showProgress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "showRefineSearchMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "showRefresh", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
], TsSelectComponent.prototype, "sortComparator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], TsSelectComponent.prototype, "tabIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TsSelectComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], TsSelectComponent.prototype, "totalHiddenResults", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsSelectComponent.prototype, "validateOnChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], TsSelectComponent.prototype, "value", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "closed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "duplicateSelection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "opened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "optionDeselected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "optionSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "optionsRefreshRequested", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "queryChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "selectionChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"])
], TsSelectComponent.prototype, "valueChange", void 0);
TsSelectComponent = TsSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ts-select',
        template: "<ts-form-field\n  [validateOnChange]=\"validateOnChange\"\n  [control]=\"selfReference\"\n  [hideRequiredMarker]=\"hideRequiredMarker\"\n  [hint]=\"hint\"\n  [id]=\"id\"\n  [noValidationOrHint]=\"noValidationOrHint\"\n  [theme]=\"theme\"\n  cdk-overlay-origin\n  #origin=\"cdkOverlayOrigin\"\n>\n  <ts-label *ngIf=\"label\">\n    {{ label }}\n  </ts-label>\n\n  <!--\n     -SELECT TRIGGER\n     -->\n    <div\n      class=\"ts-select-trigger qa-select-trigger\"\n      [attr.id]=\"id\"\n      [attr.tabindex]=\"tabIndex\"\n      aria-hidden=\"true\"\n      (click)=\"toggle()\"\n      #trigger\n    >\n      <div class=\"ts-select-value\" [ngSwitch]=\"empty\">\n        <span\n          class=\"ts-select-placeholder\"\n          *ngSwitchCase=\"true\"\n        >\n          {{ placeholder || '\\u00A0' }}\n        </span>\n\n        <span class=\"ts-select-value-text qa-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n          <span *ngSwitchDefault [attr.title]=\"selectTriggerValue\">\n            {{ selectTriggerValue || '\\u00A0' }}\n          </span>\n\n          <ng-content select=\"ts-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n        </span>\n      </div>\n\n      <div class=\"ts-select-arrow-wrapper qa-select-arrow-wrapper\">\n        <div class=\"ts-select-arrow\"></div>\n      </div>\n    </div>\n</ts-form-field>\n\n\n<!--\n   -SELECT PANEL\n   -->\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayViewportMargin]=\"viewportMarginSpacing\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayMinWidth]=\"triggerRect?.width\"\n  [cdkConnectedOverlayWidth]=\"triggerRect?.width\"\n  (backdropClick)=\"close()\"\n  (attach)=\"onAttached()\"\n  (detach)=\"close()\"\n>\n\n  <div\n    #panel\n    class=\"ts-select-panel ts-{{ theme }} qa-select-panel\"\n    [class.ts-select-panel--multiple]=\"allowMultiple\"\n    [class.ts-select-panel--filter]=\"isFilterable\"\n    [@transformPanel]=\"allowMultiple ? 'showing-multiple' : 'showing'\"\n    (@transformPanel.done)=\"panelDoneAnimatingStream.next($event.toState)\"\n    [style.transformOrigin]=\"transformOrigin\"\n    [style.font-size.px]=\"triggerFontSize\"\n    (keydown)=\"handleKeydown($event)\"\n  >\n    <div class=\"ts-select-panel__filter-input\" *ngIf=\"isFilterable\">\n      <ts-input\n        label=\"Begin typing to filter...\"\n        [ngModel]=\"searchQuery\"\n        (ngModelChange)=\"queryChange.emit($event)\"\n      ></ts-input>\n    </div>\n\n    <div\n      class=\"ts-select-panel__toggle-all qa-select-toggle-all\"\n      (click)=\"toggleAllOptions()\"\n      *ngIf=\"allowMultiple\"\n    >\n      <ts-checkbox\n        [isChecked]=\"allOptionsSelected\"\n        [isIndeterminate]=\"someOptionsSelected\"\n        theme=\"accent\"\n      >\n        {{ someOptionsSelected ? 'Deselect' : 'Select' }} All\n\n        <span\n          class=\"ts-select-panel__count qa-select-selected-count\"\n          *ngIf=\"selectionModel?.selected.length\"\n        >\n          {{ selectionModel?.selected.length }} selected\n        </span>\n      </ts-checkbox>\n    </div>\n\n    <!-- Outlet for options passed in by consumer -->\n    <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n\n    <div\n      class=\"ts-select-panel__refresh\"\n      *ngIf=\"showRefresh\"\n      (click)=\"optionsRefreshRequested.emit()\"\n    >\n      <ts-icon>refresh</ts-icon>\n      <span>\n        Refresh &amp; reload to bring in new choices.\n      </span>\n    </div>\n\n    <div\n      class=\"ts-select-panel__refine\"\n      *ngIf=\"showRefineSearchMessage\"\n    >\n      Narrow your search to reveal {{ totalHiddenResults ? totalHiddenResults + ' ' : '' }}hidden results.\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n",
        host: {
            'class': 'ts-select',
            '[class.ts-select--required]': 'isRequired',
            '[class.ts-select--disabled]': 'isDisabled',
            '[attr.aria-owns]': 'panelOpen ? optionIds : null',
            '[attr.aria-required]': 'isRequired.toString()',
            '[attr.aria-multiselectable]': 'allowMultiple',
            '[attr.tabindex]': 'tabIndex',
            '(keydown)': 'handleKeydown($event)',
        },
        animations: [
            tsSelectAnimations.transformPanel,
        ],
        providers: [
            {
                provide: _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_10__["TsFormFieldControl"],
                // eslint-disable-next-line deprecation/deprecation
                useExisting: TsSelectComponent_1,
            },
            {
                provide: _terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["TS_OPTION_PARENT_COMPONENT"],
                // eslint-disable-next-line deprecation/deprecation
                useExisting: TsSelectComponent_1,
            },
            // Since we handle all option selection/deselection functionality we tell the underlying MatCheckbox to do nothing on click.
            {
                provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MAT_CHECKBOX_DEFAULT_OPTIONS"],
                useValue: ɵ0,
            },
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'tsSelect',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-select{display:block;outline:0}.ts-select :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-select h1,.ts-select h2,.ts-select h3,.ts-select h4,.ts-select h5,.ts-select p{margin:unset}.ts-select .ts-form-field.ts-form-field--float .ts-select-arrow-wrapper,.ts-select .ts-form-field:not(.ts-form-field--float) .ts-select-arrow-wrapper{display:table-cell;transform:translateY(-10%);vertical-align:middle}.ts-select .ts-select-trigger{box-sizing:border-box;cursor:pointer;display:inline-table;position:relative}.ts-select .ts-select-trigger--hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-option--disabled .ts-select .ts-select-trigger,.ts-select.ts-select--disabled .ts-select-trigger{cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ts-select.ts-select--disabled .ts-select-arrow{color:#999}.ts-select .ts-select-value{display:table-cell;max-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.ts-select .ts-select-value-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ts-select .ts-select-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;height:0;margin:0 4px;width:0}.cdk-overlay-pane .ts-select-panel__filter-input{background-color:#fafafa;border-bottom:1px solid #cecdd1;left:0;padding:8px;position:absolute;right:-24px;top:0;width:calc(100% - 16px);z-index:501}.cdk-overlay-pane .ts-select-panel__filter-input .ts-form-field .ts-form-field__wrapper{padding-bottom:0}.ts-select-panel{max-height:256px;overflow:auto}.ts-select-panel.ts-select-panel--filter{padding-top:85px}.ts-select-panel .ts-optgroup .ts-option .ts-checkbox{padding-left:16px}.ts-select-panel .ts-select-panel__toggle-all{background-color:#f2f0f7;border-bottom:1px solid #999;position:relative}.ts-select-panel .ts-select-panel__toggle-all .ts-checkbox{line-height:3em}.ts-select-panel .ts-select-panel__count{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;color:#999;position:absolute;right:12px}.ts-select-panel .ts-select-panel__refresh{letter-spacing:.01em;font-weight:500;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;background-color:#f2f0f7;color:#757575;cursor:pointer;height:48px;line-height:48px;padding:0 16px;transition:color .2s}.ts-select-panel .ts-select-panel__refresh .ts-icon{height:24px;vertical-align:text-bottom}.ts-select-panel .ts-select-panel__refresh:focus,.ts-select-panel .ts-select-panel__refresh:hover{color:#00538a}.ts-select-panel .ts-select-panel__refine{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;color:#999;font-style:italic;padding:12px 16px}.ts-paginator .ts-select{display:inline-block;position:relative;width:5em}.ts-paginator .ts-select.ts-select--disabled .ts-select-arrow-wrapper{transform:translateY(0)}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_20__["TsDocumentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]])
], TsSelectComponent);

// @deprecated Please use `TsSelectionListModule`
let TsSelectModule = class TsSelectModule {
};
TsSelectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_9__["TsCheckboxModule"],
            _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_10__["TsFormFieldModule"],
            _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_11__["TsIconModule"],
            _terminus_ui_input__WEBPACK_IMPORTED_MODULE_12__["TsInputModule"],
            _terminus_ui_option__WEBPACK_IMPORTED_MODULE_13__["TsOptionModule"],
            _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"],
        ],
        exports: [
            TsSelectComponent,
            TsSelectTriggerComponent,
        ],
        declarations: [
            TsSelectComponent,
            TsSelectTriggerComponent,
        ],
    })
], TsSelectModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-select.js.map


/***/ }),

/***/ "../../node_modules/@angular/material/fesm2015/chips.js":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/material/fesm2015/chips.js ***!
  \****************************************************************************************************/
/*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm2015/form-field.js");















/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents an event fired on an individual `mat-chip`.
 * @record
 */
function MatChipEvent() { }
if (false) {}
/**
 * Event object emitted by MatChip when selected or deselected.
 */
class MatChipSelectionChange {
    /**
     * @param {?} source
     * @param {?} selected
     * @param {?=} isUserInput
     */
    constructor(source, selected, isUserInput = false) {
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
}
if (false) {}
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
class MatChipBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {}
/** @type {?} */
const _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatChipBase)), 'primary'), -1);
/**
 * Dummy directive to add CSS class to chip avatar.
 * \@docs-private
 */
class MatChipAvatar {
}
MatChipAvatar.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'mat-chip-avatar, [matChipAvatar]',
                host: { 'class': 'mat-chip-avatar' }
            },] }
];
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * \@docs-private
 */
class MatChipTrailingIcon {
}
MatChipTrailingIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                host: { 'class': 'mat-chip-trailing-icon' }
            },] }
];
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
class MatChip extends _MatChipMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} platform
     * @param {?} globalRippleOptions
     * @param {?=} animationMode
     * @param {?=} _changeDetectorRef
     * @param {?=} tabIndex
     * @param {?=} _document
     */
    constructor(_elementRef, _ngZone, platform, globalRippleOptions, 
    // @breaking-change 8.0.0 `animationMode` parameter to become required.
    animationMode, _changeDetectorRef, tabIndex, 
    // @breaking-change 11.0.0 `_document` parameter to become required.
    _document) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the chip has focus.
         */
        this._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */
        this.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */
        this._chipListMultiple = false;
        this._selected = false;
        this._selectable = true;
        this._removable = true;
        /**
         * Emits when the chip is focused.
         */
        this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emits when the chip is blured.
         */
        this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._addHostClassName();
        // Dynamically create the ripple target, append it within the chip, and use it as the
        // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
        // the proper styles.
        this._chipRippleTarget = (_document || document).createElement('div');
        this._chipRippleTarget.classList.add('mat-chip-ripple');
        this._elementRef.nativeElement.appendChild(this._chipRippleTarget);
        this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](this, _ngZone, this._chipRippleTarget, platform);
        this._chipRipple.setupTriggerEvents(_elementRef);
        this.rippleConfig = globalRippleOptions || {};
        this._animationsDisabled = animationMode === 'NoopAnimations';
        this.tabIndex = tabIndex != null ? (parseInt(tabIndex) || -1) : -1;
    }
    /**
     * Whether ripples are disabled on interaction
     * \@docs-private
     * @return {?}
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
    }
    /**
     * Whether the chip is selected.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        /** @type {?} */
        const coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        if (coercedValue !== this._selected) {
            this._selected = coercedValue;
            this._dispatchSelectionChange();
        }
    }
    /**
     * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
     * @return {?}
     */
    get value() {
        return this._value !== undefined
            ? this._value
            : this._elementRef.nativeElement.textContent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) { this._value = value; }
    /**
     * Whether or not the chip is selectable. When a chip is not selectable,
     * changes to its selected state are always ignored. By default a chip is
     * selectable, and it becomes non-selectable if its parent chip list is
     * not selectable.
     * @return {?}
     */
    get selectable() { return this._selectable && this.chipListSelectable; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     * @return {?}
     */
    get removable() { return this._removable; }
    /**
     * @param {?} value
     * @return {?}
     */
    set removable(value) {
        this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * The ARIA selected applied to the chip.
     * @return {?}
     */
    get ariaSelected() {
        // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
        // it adds noise to NVDA users where "not selected" will be read out for each chip.
        return this.selectable && (this._chipListMultiple || this.selected) ?
            this.selected.toString() : null;
    }
    /**
     * @return {?}
     */
    _addHostClassName() {
        /** @type {?} */
        const basicChipAttrName = 'mat-basic-chip';
        /** @type {?} */
        const element = (/** @type {?} */ (this._elementRef.nativeElement));
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    }
    /**
     * Selects the chip.
     * @return {?}
     */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    }
    /**
     * Deselects the chip.
     * @return {?}
     */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    }
    /**
     * Select this chip and emit selected event
     * @return {?}
     */
    selectViaInteraction() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._markForCheck();
        }
    }
    /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    toggleSelected(isUserInput = false) {
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._markForCheck();
        return this.selected;
    }
    /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    focus() {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    }
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    remove() {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    }
    /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    }
    /**
     * Handle custom key presses.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    }
    /**
     * @return {?}
     */
    _blur() {
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this._hasFocus = false;
                this._onBlur.next({ chip: this });
            }));
        }));
    }
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    _dispatchSelectionChange(isUserInput = false) {
        this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this._selected
        });
    }
    /**
     * @private
     * @return {?}
     */
    _markForCheck() {
        // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
    }
}
MatChip.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
                inputs: ['color', 'disabled', 'disableRipple', 'tabIndex'],
                exportAs: 'matChip',
                host: {
                    'class': 'mat-chip mat-focus-indicator',
                    '[attr.tabindex]': 'disabled ? null : tabIndex',
                    'role': 'option',
                    '[class.mat-chip-selected]': 'selected',
                    '[class.mat-chip-with-avatar]': 'avatar',
                    '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                    '[class.mat-chip-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationsDisabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                },
            },] }
];
/** @nocollapse */
MatChip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
MatChip.propDecorators = {
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatChipAvatar,] }],
    trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatChipTrailingIcon,] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                 * @return {?}
                 */
                () => MatChipRemove)),] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
if (false) {}
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
class MatChipRemove {
    /**
     * @param {?} _parentChip
     * @param {?=} elementRef
     */
    constructor(_parentChip, 
    // @breaking-change 11.0.0 `elementRef` parameter to be made required.
    elementRef) {
        this._parentChip = _parentChip;
        // @breaking-change 11.0.0 Remove null check for `elementRef`.
        if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
        }
    }
    /**
     * Calls the parent chip's public `remove()` method if applicable.
     * @param {?} event
     * @return {?}
     */
    _handleClick(event) {
        /** @type {?} */
        const parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    }
}
MatChipRemove.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[matChipRemove]',
                host: {
                    'class': 'mat-chip-remove mat-chip-trailing-icon',
                    '(click)': '_handleClick($event)',
                }
            },] }
];
/** @nocollapse */
MatChipRemove.ctorParameters = () => [
    { type: MatChip },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chip-default-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default options, for the chips module, that can be overridden.
 * @record
 */
function MatChipsDefaultOptions() { }
if (false) {}
/**
 * Injection token to be used to override the default options for the chips module.
 * @type {?}
 */
const MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chip-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
class MatChipListBase {
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
if (false) {}
/** @type {?} */
const _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
/** @type {?} */
let nextUniqueId = 0;
/**
 * Change event object that is emitted when the chip list value has changed.
 */
class MatChipListChange {
    /**
     * @param {?} source
     * @param {?} value
     */
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
if (false) {}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
class MatChipList extends _MatChipListMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} _dir
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} _defaultErrorStateMatcher
     * @param {?} ngControl
     */
    constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        this._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Uid of the chip list
         */
        this._uid = `mat-chip-list-${nextUniqueId++}`;
        /**
         * Tab index for the chip list.
         */
        this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        this._userTabIndex = null;
        /**
         * Function when touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * Function when changed
         */
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._multiple = false;
        this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this._required = false;
        this._disabled = false;
        /**
         * Orientation of the chip list.
         */
        this.ariaOrientation = 'horizontal';
        this._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * The array of selected chips inside chip list.
     * @return {?}
     */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /**
     * The ARIA role applied to the chip list.
     * @return {?}
     */
    get role() { return this.empty ? null : 'listbox'; }
    /**
     * Whether the user should be allowed to select multiple chips.
     * @return {?}
     */
    get multiple() { return this._multiple; }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.writeValue(value);
        this._value = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get id() {
        return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * Whether any chips or the matChipInput inside of this chip-list has focus.
     * @return {?}
     */
    get focused() {
        return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get empty() {
        return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get shouldLabelFloat() { return !this.empty || this.focused; }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     * @return {?}
     */
    get selectable() { return this._selectable; }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        if (this.chips) {
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip.chipListSelectable = this._selectable));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tabIndex(value) {
        this._userTabIndex = value;
        this._tabIndex = value;
    }
    /**
     * Combined stream of all of the child chips' selection change events.
     * @return {?}
     */
    get chipSelectionChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip.selectionChange)));
    }
    /**
     * Combined stream of all of the child chips' focus change events.
     * @return {?}
     */
    get chipFocusChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip._onFocus)));
    }
    /**
     * Combined stream of all of the child chips' blur change events.
     * @return {?}
     */
    get chipBlurChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip._onBlur)));
    }
    /**
     * Combined stream of all of the child chips' remove change events.
     * @return {?}
     */
    get chipRemoveChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(...this.chips.map((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip.destroyed)));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            dir => this._keyManager.withHorizontalOrientation(dir)));
        }
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            this._allowFocusEscape();
        }));
        // When the list changes, re-subscribe
        this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        () => {
            if (this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this._syncChipsState();
                }));
            }
            this._resetChips();
            // Reset chips selected/deselected status
            this._initializeSelection();
            // Check to see if we need to update our tab index
            this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            this._updateFocusForDestroyedChips();
            this.stateChanges.next();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
            if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    }
    /**
     * Associates an HTML input element with this chip list.
     * @param {?} inputElement
     * @return {?}
     */
    registerInput(inputElement) {
        this._chipInput = inputElement;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) { this._ariaDescribedby = ids.join(' '); }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput(options);
            this.stateChanges.next();
        }
    }
    /**
     * Attempt to focus an input if we have one.
     * @param {?=} options
     * @return {?}
     */
    _focusInput(options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["HOME"]) {
                this._keyManager.setFirstItemActive();
                event.preventDefault();
            }
            else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["END"]) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else {
                this._keyManager.onKeydown(event);
            }
            this.stateChanges.next();
        }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     * @protected
     * @return {?}
     */
    _updateTabIndex() {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @protected
     * @return {?}
     */
    _updateFocusForDestroyedChips() {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                /** @type {?} */
                const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    _isInputEmpty(element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            let input = (/** @type {?} */ (element));
            return !input.value;
        }
        return false;
    }
    /**
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip.deselect()));
        if (Array.isArray(value)) {
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            currentValue => this._selectValue(currentValue, isUserInput)));
            this._sortValues();
        }
        else {
            /** @type {?} */
            const correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    }
    /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput = true) {
        /** @type {?} */
        const correspondingChip = this.chips.find((/**
         * @param {?} chip
         * @return {?}
         */
        chip => {
            return chip.value != null && this._compareWith(chip.value, value);
        }));
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    }
    /**
     * @private
     * @return {?}
     */
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            if (this.ngControl || this._value) {
                this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                this.stateChanges.next();
            }
        }));
    }
    /**
     * Deselects every chip in the list.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        chip => {
            if (chip !== skip) {
                chip.deselect();
            }
        }));
        this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     * @private
     * @return {?}
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => {
                if (chip.selected) {
                    this._selectionModel.select(chip);
                }
            }));
            this.stateChanges.next();
        }
    }
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    _propagateChanges(fallbackValue) {
        /** @type {?} */
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip.value));
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * When blurred, mark the field as touched when focus moved outside the chip list.
     * @return {?}
     */
    _blur() {
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    if (!this.focused) {
                        this._markAsTouched();
                    }
                }));
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    }
    /**
     * Mark the field as touched
     * @return {?}
     */
    _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    _allowFocusEscape() {
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._tabIndex = this._userTabIndex || 0;
                this._changeDetectorRef.markForCheck();
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _resetChips() {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    }
    /**
     * @private
     * @return {?}
     */
    _dropSubscriptions() {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    }
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    _listenToChipsSelection() {
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.source.selected
                ? this._selectionModel.select(event.source)
                : this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!this.multiple) {
                this.chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                chip => {
                    if (!this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                }));
            }
            if (event.isUserInput) {
                this._propagateChanges();
            }
        }));
    }
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    _listenToChipsFocus() {
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            let chipIndex = this.chips.toArray().indexOf(event.chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItem(chipIndex);
            }
            this.stateChanges.next();
        }));
        this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
         * @return {?}
         */
        () => {
            this._blur();
            this.stateChanges.next();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _listenToChipsRemoved() {
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const chip = event.chip;
            /** @type {?} */
            const chipIndex = this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                this._lastDestroyedChipIndex = chipIndex;
            }
        }));
    }
    /**
     * Checks whether an event comes from inside a chip element.
     * @private
     * @param {?} event
     * @return {?}
     */
    _originatesFromChip(event) {
        /** @type {?} */
        let currentElement = (/** @type {?} */ (event.target));
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    /**
     * Checks whether any of the chips is focused.
     * @private
     * @return {?}
     */
    _hasFocusedChip() {
        return this.chips.some((/**
         * @param {?} chip
         * @return {?}
         */
        chip => chip._hasFocus));
    }
    /**
     * Syncs the list's state with the individual chips.
     * @private
     * @return {?}
     */
    _syncChipsState() {
        if (this.chips) {
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => {
                chip.disabled = this._disabled;
                chip._chipListMultiple = this.multiple;
            }));
        }
    }
}
MatChipList.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'mat-chip-list',
                template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
                exportAs: 'matChipList',
                host: {
                    '[attr.tabindex]': 'disabled ? null : _tabIndex',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-required]': 'role ? required : null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.role]': 'role',
                    '[class.mat-chip-list-disabled]': 'disabled',
                    '[class.mat-chip-list-invalid]': 'errorState',
                    '[class.mat-chip-list-required]': 'required',
                    '[attr.aria-orientation]': 'ariaOrientation',
                    'class': 'mat-chip-list',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                    '(keydown)': '_keydown($event)',
                    '[id]': '_uid',
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], useExisting: MatChipList }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
            }] }
];
/** @nocollapse */
MatChipList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
];
MatChipList.propDecorators = {
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-orientation',] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chip-input.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Represents an input event on a `matChipInput`.
 * @record
 */
function MatChipInputEvent() { }
if (false) {}
// Increasing integer for generating unique ids.
/** @type {?} */
let nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
class MatChipInput {
    /**
     * @param {?} _elementRef
     * @param {?} _defaultOptions
     */
    constructor(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */
        this.placeholder = '';
        /**
         * Unique id for the input.
         */
        this.id = `mat-chip-list-input-${nextUniqueId$1++}`;
        this._disabled = false;
        this._inputElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    /**
     * Register input for chip list
     * @param {?} value
     * @return {?}
     */
    set chipList(value) {
        if (value) {
            this._chipList = value;
            this._chipList.registerInput(this);
        }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     * @return {?}
     */
    get addOnBlur() { return this._addOnBlur; }
    /**
     * @param {?} value
     * @return {?}
     */
    set addOnBlur(value) { this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /**
     * Whether the input is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /**
     * Whether the input is empty.
     * @return {?}
     */
    get empty() { return !this._inputElement.value; }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._chipList.stateChanges.next();
    }
    /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    _keydown(event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    }
    /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    _blur() {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    }
    /**
     * @return {?}
     */
    _focus() {
        this.focused = true;
        this._chipList.stateChanges.next();
    }
    /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    _emitChipEnd(event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    _onInput() {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    }
    /**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._inputElement.focus(options);
    }
    /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    _isSeparatorKey(event) {
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event)) {
            return false;
        }
        /** @type {?} */
        const separators = this.separatorKeyCodes;
        /** @type {?} */
        const keyCode = event.keyCode;
        return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
    }
}
MatChipInput.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'input[matChipInputFor]',
                exportAs: 'matChipInput, matChipInputFor',
                host: {
                    'class': 'mat-chip-input mat-input-element',
                    '(keydown)': '_keydown($event)',
                    '(blur)': '_blur()',
                    '(focus)': '_focus()',
                    '(input)': '_onInput()',
                    '[id]': 'id',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.placeholder]': 'placeholder || null',
                    '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    '[attr.aria-required]': '_chipList && _chipList.required || null',
                }
            },] }
];
/** @nocollapse */
MatChipInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
];
MatChipInput.propDecorators = {
    chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputFor',] }],
    addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputAddOnBlur',] }],
    separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputSeparatorKeyCodes',] }],
    chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['matChipInputTokenEnd',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/chips-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const ɵ0 = ({
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
});
class MatChipsModule {
}
MatChipsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"],
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: (/** @type {?} */ (ɵ0))
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/chips/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=chips.js.map


/***/ })

}]);
//# sourceMappingURL=default~autofocus-autofocus-module-ngfactory~chart-chart-module-ngfactory~confirmation-confirmation-~725fd03c-es2015.js.map