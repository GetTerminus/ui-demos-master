(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover-popover-module-ngfactory"],{

/***/ "../../dist/libs/ui/popover/fesm2015/terminus-ui-popover.js":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/popover/fesm2015/terminus-ui-popover.js ***!
  \********************************************************************************************************/
/*! exports provided: TsPopoverComponent, TsPopoverModule, TsPopoverPositions, TsPopoverTriggerDirective, TsTriggers, tsPopoverPositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsPopoverComponent", function() { return TsPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsPopoverModule", function() { return TsPopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsPopoverPositions", function() { return TsPopoverPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsPopoverTriggerDirective", function() { return TsPopoverTriggerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsTriggers", function() { return TsTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsPopoverPositions", function() { return tsPopoverPositions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "../../node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @terminus/ui-utilities */ "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @terminus/ngx-tools/keycodes */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");
/* harmony import */ var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @terminus/ngx-tools/utilities */ "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");










/**
 * List of accepted positions
 */
const tsPopoverPositions = [
    'top',
    'bottom',
    'left',
    'right',
    'top-start',
    'bottom-start',
    'right-start',
    'top-end',
    'bottom-end',
    'left-end',
    'right-end',
    'top-end',
    'bottom-end',
    'left-end',
    'right-end',
    'auto',
    'auto-start',
    'auto-end',
];
/**
 * A class of defined positions.
 */
class TsPopoverPositions {
}
TsPopoverPositions.Top = 'top';
TsPopoverPositions.Bottom = 'bottom';
TsPopoverPositions.Left = 'left';
TsPopoverPositions.Right = 'right';
TsPopoverPositions.TopStart = 'top-start';
TsPopoverPositions.BottomStart = 'bottom-start';
TsPopoverPositions.LeftStart = 'left-start';
TsPopoverPositions.RightStart = 'right-start';
TsPopoverPositions.TopEnd = 'top-end';
TsPopoverPositions.BottomEnd = 'bottom-end';
TsPopoverPositions.LeftEnd = 'left-end';
TsPopoverPositions.RightEnd = 'right-end';
TsPopoverPositions.Auto = 'auto';
TsPopoverPositions.AutoStart = 'auto-start';
TsPopoverPositions.AutoEnd = 'auto-end';
/**
 * A class of Triggers.
 */
class TsTriggers {
}
TsTriggers.CLICK = 'click';

/**
 * A popover component that supports rich HTML
 *
 * @example
 * <ts-popover
 *              #myPopper
 *              (onHidden)="myFunction($event)"
 *              (onUpdate)="myFunction($event)"
 *              (popoverHidden)="myFunction($event)"
 *              (popoverShown)="myFunction($event)"
 * >
 *              My popover content
 * </ts-popover>
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/popover</example-url>
 */
let TsPopoverComponent = class TsPopoverComponent {
    constructor(CDR) {
        this.CDR = CDR;
        /**
         * The display type of the popover element
         */
        this.displayType = 'none';
        /**
         * The opacity of popover element
         */
        this.opacity = 0;
        /**
         * aria hidden attribute - it requires a string value.
         */
        this.ariaHidden = 'true';
        /**
         * Whether the element is visible
         */
        this.visibility = false;
        /**
         * ID set by trigger and pass to popover element
         */
        this.id = '';
        /**
         * Options needed for popper.js
         */
        this.popoverOptions = {
            placement: TsPopoverPositions.Bottom,
            trigger: TsTriggers.CLICK,
        };
        /**
         * Event emitted when the popover is hidden
         */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the popover is updated
         */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the popover is hidden
         */
        this.popoverHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the popover is shown
         */
        this.popoverShown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * Check whether popper.js has been properly imported.
     */
    ngOnInit() {
        if (!_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"]) {
            throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_4__["TsUILibraryError"]('TsPopoverComponent: popper.js is not available to reference.');
        }
    }
    /**
     * Destroy the instance when component is destroyed.
     */
    ngOnDestroy() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
    }
    /**
     * When popover is hidden, destroy the instance, toggle visibility to false and emit onHidden event.
     */
    hide() {
        // istanbul ignore else
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
        this.toggleVisibility(false);
        this.onHidden.emit();
    }
    /**
     * When popover is shown, instantiate popper instance, does update and toggle visibility.
     *
     * @param options - PopoverOptions
     */
    show(options) {
        if (!this.referenceObject) {
            return;
        }
        this.onUpdate.emit(this.popoverInstance);
        this.popoverInstance = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.referenceObject, this.popoverViewRef.nativeElement, options);
        this.scheduleUpdate();
        this.toggleVisibility(true);
    }
    /**
     * When popover is scheduled to be updated, call popper.js update
     */
    scheduleUpdate() {
        this.popoverInstance && this.popoverInstance.update();
    }
    /**
     * Based on visibility, adjust visual settings
     *
     * @param visibility - boolean
     */
    toggleVisibility(visibility) {
        if (visibility) {
            this.opacity = 1;
            this.displayType = 'block';
            this.ariaHidden = 'false';
            this.visibility = true;
        }
        else {
            this.opacity = 0;
            this.displayType = 'none';
            this.ariaHidden = 'true';
            this.visibility = false;
        }
        // istanbul ignore else
        // eslint-disable-next-line dot-notation
        if (!this.CDR['destroyed']) {
            this.CDR.detectChanges();
        }
    }
};
TsPopoverComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('popoverViewRef', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
], TsPopoverComponent.prototype, "popoverViewRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverComponent.prototype, "onHidden", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverComponent.prototype, "onUpdate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverComponent.prototype, "popoverHidden", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverComponent.prototype, "popoverShown", void 0);
TsPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ts-popover',
        template: "<div\n  #popoverViewRef\n  class=\"popover__container\"\n  [ngClass]=\"{\n    'c-popover--visible': visibility,\n    'c-popover--hidden': !visibility\n  }\"\n  attr.aria-hidden=\"{{ariaHidden}}\"\n  attr.role=\"{{popoverOptions.ariaRole}}\"\n  [attr.aria-labelledby]=\"id\"\n>\n  <div class=\"popover__inner\">\n    <ng-content></ng-content>\n  </div>\n  <div data-popper-arrow class=\"popover__arrow\">\n  </div>\n</div>\n",
        host: { class: 'ts-popover' },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        exportAs: 'tsPopoverComponent',
        styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.popover__container{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;padding:16px;position:absolute}.popover__container .popover__arrow{border-color:#fafafa;border-style:solid;height:0;position:absolute;width:0}.popover__container.c-popover--visible{display:block;opacity:1}.popover__container.c-popover--hidden{display:none;opacity:0}.popover__container[data-popper-placement^=top]{margin-bottom:5px}.popover__container[data-popper-placement^=top] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-width:5px 5px 0;bottom:-5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0}.popover__container[data-popper-placement^=bottom]{margin-top:5px}.popover__container[data-popper-placement^=bottom] .popover__arrow{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:0 5px 5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0;top:-5px}.popover__container[data-popper-placement^=right]{margin-left:5px}.popover__container[data-popper-placement^=right] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-top-color:transparent;border-width:5px 5px 5px 0;left:-5px;margin-left:0;margin-right:0;top:calc(50% - 5px)}.popover__container[data-popper-placement^=left]{display:block;margin-right:5px}.popover__container[data-popper-placement^=left] .popover__arrow{border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:5px 0 5px 5px;margin-left:0;margin-right:0;right:-5px;top:calc(50% - 5px)}"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], TsPopoverComponent);

var TsPopoverTriggerDirective_1;
// Unique ID for each instance
let nextUniqueId = 0;
/**
 * A directive that adds popover trigger functionality
 *
 * @example
 * <button
 *              tsPopoverTrigger="popper1"
 *              [defaultOpened]="defaultOpened"
 *              [hideOnBlur]="false"
 *              id="my-id"
 *              [popover]="popper1"
 *              [position]="position"
 *              (popoverOnCreate)="myFunction($event)"
 *              (popoverOnShown)="myFunction($event)"
 *              (popoverOnHidden)="myFunction($event)"
 *              (popoverOnUpdate)="myFunction($event)"
 * />
 *
 * <example-url>https://getterminus.github.io/ui-demos-release/components/popover</example-url>
 */
let TsPopoverTriggerDirective = TsPopoverTriggerDirective_1 = class TsPopoverTriggerDirective {
    constructor(viewContainerRef, changeDetectorRef, elementRef, ngZone) {
        this.viewContainerRef = viewContainerRef;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        /**
         * Define the UID
         */
        this.uid = `ts-popover-trigger-${nextUniqueId++}`;
        /**
         * Whether current popover is open or not.
         */
        this.isOpen = false;
        /**
         * Whether popover is opened on load.
         */
        this.defaultOpened = false;
        /**
         * Whether popover closes when click outside.
         */
        this.hideOnBlur = true;
        this._id = this.uid;
        this._position = TsPopoverPositions.Bottom;
        /**
         * Emit when create popover.
         */
        this.popoverOnCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emit when popover is shown.
         */
        this.popoverOnShown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emit when popover is hidden.
         */
        this.popoverOnHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Emit when popover is updated.
         */
        this.popoverOnUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Re-enter the zone only if the `ESC` key is pressed
         */
        this.ngZone.runOutsideAngular(() => {
            // eslint-disable-next-line deprecation/deprecation
            (Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.elementRef.nativeElement, 'keydown'))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event.code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_7__["KEYS"].ESCAPE.code), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe(event => this.ngZone.run(() => {
                this.hide();
                event.stopPropagation();
                event.preventDefault();
            }));
        });
    }
    /**
     * Define an ID for the directive
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
     * Set position of where popover opens
     *
     * @param value
     */
    set position(value) {
        if (tsPopoverPositions.indexOf(value) < 0) {
            throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_4__["TsUILibraryError"](`"${value}" is not an allowed position value.`);
        }
        this._position = value || TsPopoverPositions.Bottom;
    }
    get position() {
        return this._position;
    }
    /**
     * Register the click to decide whether it's inside the element or out.
     *
     * @param targetElement
     */
    onClick(targetElement) {
        const clickedInside = this.popover.popoverViewRef.nativeElement.contains(targetElement);
        if (!clickedInside && this.hideOnBlur) {
            this.hide();
        }
    }
    /**
     * When directive initiated, it assigns a reference to popover component and also register on click event.
     */
    ngOnInit() {
        this.popover.referenceObject = this.viewContainerRef.element.nativeElement;
        this.setContentProperties(this.popover);
        // eslint-disable-next-line deprecation/deprecation
        (Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.elementRef.nativeElement, 'click'))
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe(event => {
            this.toggle();
            event.stopPropagation();
            event.preventDefault();
        });
    }
    /**
     * After the default change detector has completed checking all content, it decides on popover status based on defaultOpened input.
     */
    ngAfterContentInit() {
        if (this.defaultOpened) {
            this.show();
        }
    }
    /**
     * Once content is initialized and checked, assign custom id to popover id
     */
    ngAfterContentChecked() {
        if (this.popover) {
            this.popover.id = this.id;
        }
    }
    /**
     * When changes happen, assign current position value to popover's popoverOption
     *
     * @param changes - SimpleChange
     */
    ngOnChanges(changes) {
        if (changes.position) {
            this.popover.popoverOptions.placement = changes.position.currentValue;
        }
    }
    /**
     * Needed for untilComponentDestroyed
     */
    ngOnDestroy() { }
    /**
     * Set popover options
     *
     * @param popperRef - TsPopoverComponent
     */
    setContentProperties(popperRef) {
        popperRef.popoverOptions = Object.assign(Object.assign({}, TsPopoverTriggerDirective_1.defaultOptions), { placement: this.position });
        popperRef.onHidden
            .pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this))
            .subscribe(_ => this.popoverOnUpdate.emit(this.popover));
    }
    /**
     * Toggle between show and hide.
     */
    toggle() {
        this.isOpen ? this.hide() : this.show();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * Hide the popover.
     */
    hide() {
        this.isOpen = false;
        this.popover.hide();
        this.popoverOnHidden.emit(this.popover);
    }
    /**
     * Show the popover.
     */
    show() {
        this.isOpen = true;
        this.popover.show(this.popover.popoverOptions);
        this.popoverOnShown.emit(this.popover);
    }
};
/**
 * Default options for popper
 *
 * For now we only support click, so it specifies click here. But could support more if needed.
 */
TsPopoverTriggerDirective.defaultOptions = {
    trigger: TsTriggers.CLICK,
    ariaRole: 'popover',
    placement: TsPopoverPositions.Bottom,
};
TsPopoverTriggerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverTriggerDirective.prototype, "defaultOpened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverTriggerDirective.prototype, "hideOnBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsPopoverTriggerDirective.prototype, "id", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TsPopoverComponent)
], TsPopoverTriggerDirective.prototype, "popover", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], TsPopoverTriggerDirective.prototype, "position", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverTriggerDirective.prototype, "popoverOnCreate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverTriggerDirective.prototype, "popoverOnShown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverTriggerDirective.prototype, "popoverOnHidden", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TsPopoverTriggerDirective.prototype, "popoverOnUpdate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:click', ['$event.target']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HTMLElement]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TsPopoverTriggerDirective.prototype, "onClick", null);
TsPopoverTriggerDirective = TsPopoverTriggerDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[tsPopoverTrigger]',
        host: { class: 'ts-popover-trigger' },
        exportAs: 'tsPopoverTrigger',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
], TsPopoverTriggerDirective);

let TsPopoverModule = class TsPopoverModule {
};
TsPopoverModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [
            TsPopoverComponent,
            TsPopoverTriggerDirective,
        ],
        exports: [
            TsPopoverComponent,
            TsPopoverTriggerDirective,
        ],
    })
], TsPopoverModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=terminus-ui-popover.js.map


/***/ }),

/***/ "../../dist/libs/ui/popover/terminus-ui-popover.ngfactory.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/popover/terminus-ui-popover.ngfactory.js ***!
  \*********************************************************************************************************/
/*! exports provided: TsPopoverModuleNgFactory, RenderType_TsPopoverComponent, View_TsPopoverComponent_0, View_TsPopoverComponent_Host_0, TsPopoverComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsPopoverModuleNgFactory", function() { return TsPopoverModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TsPopoverComponent", function() { return RenderType_TsPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsPopoverComponent_0", function() { return View_TsPopoverComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TsPopoverComponent_Host_0", function() { return View_TsPopoverComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsPopoverComponentNgFactory", function() { return TsPopoverComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @terminus/ui-popover */ "../../dist/libs/ui/popover/fesm2015/terminus-ui-popover.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var TsPopoverModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_popover__WEBPACK_IMPORTED_MODULE_1__["TsPopoverModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_1__["TsPopoverModule"], _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_1__["TsPopoverModule"], [])]); });

var styles_TsPopoverComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.popover__container{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);background-color:#fafafa;padding:16px;position:absolute}.popover__container .popover__arrow{border-color:#fafafa;border-style:solid;height:0;position:absolute;width:0}.popover__container.c-popover--visible{display:block;opacity:1}.popover__container.c-popover--hidden{display:none;opacity:0}.popover__container[data-popper-placement^=top]{margin-bottom:5px}.popover__container[data-popper-placement^=top] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-width:5px 5px 0;bottom:-5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0}.popover__container[data-popper-placement^=bottom]{margin-top:5px}.popover__container[data-popper-placement^=bottom] .popover__arrow{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:0 5px 5px;left:calc(50% - 5px);margin-bottom:0;margin-top:0;top:-5px}.popover__container[data-popper-placement^=right]{margin-left:5px}.popover__container[data-popper-placement^=right] .popover__arrow{border-bottom-color:transparent;border-left-color:transparent;border-top-color:transparent;border-width:5px 5px 5px 0;left:-5px;margin-left:0;margin-right:0;top:calc(50% - 5px)}.popover__container[data-popper-placement^=left]{display:block;margin-right:5px}.popover__container[data-popper-placement^=left] .popover__arrow{border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:5px 0 5px 5px;margin-left:0;margin-right:0;right:-5px;top:calc(50% - 5px)}"];
var RenderType_TsPopoverComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TsPopoverComponent, data: {} });

function View_TsPopoverComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { popoverViewRef: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["popoverViewRef", 1]], null, 5, "div", [["class", "popover__container"]], [[1, "aria-hidden", 0], [1, "role", 0], [1, "aria-labelledby", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { "c-popover--visible": 0, "c-popover--hidden": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["class", "popover__inner"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "div", [["class", "popover__arrow"], ["data-popper-arrow", ""]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "popover__container"; var currVal_4 = _ck(_v, 3, 0, _co.visibility, !_co.visibility); _ck(_v, 2, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.ariaHidden, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.popoverOptions.ariaRole, ""); var currVal_2 = _co.id; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }); }
function View_TsPopoverComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-popover", [["class", "ts-popover"]], null, null, null, View_TsPopoverComponent_0, RenderType_TsPopoverComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_1__["TsPopoverComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TsPopoverComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-popover", _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_1__["TsPopoverComponent"], View_TsPopoverComponent_Host_0, {}, { onHidden: "onHidden", onUpdate: "onUpdate", popoverHidden: "popoverHidden", popoverShown: "popoverShown" }, ["*"]);



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && next.isSameNode(parent)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getBorders.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getBorders.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBorders; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function toNumber(cssValue) {
  return parseFloat(cssValue) || 0;
}

function getBorders(element) {
  var computedStyle = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) ? Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) : {};
  return {
    top: toNumber(computedStyle.borderTopWidth),
    right: toNumber(computedStyle.borderRightWidth),
    bottom: toNumber(computedStyle.borderBottomWidth),
    left: toNumber(computedStyle.borderLeftWidth)
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDecorations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getDecorations.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDecorations.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "../../node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");














function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var canEscapeClipping = ['absolute', 'fixed'].includes(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position);
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  }

  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    var decorations = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? Object(_getDecorations_js__WEBPACK_IMPORTED_MODULE_9__["default"])(clippingParent) : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
    accRect.top = Math.max(rect.top + decorations.top, accRect.top);
    accRect.right = Math.min(rect.right - decorations.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left + decorations.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getBorders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBorders.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBorders.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




 // offsets without `border`

function getInnerOffsets(offsetParent) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
  var borders = Object(_getBorders_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent);
  return {
    x: rect.x + borders.left,
    y: rect.y + borders.top
  };
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (!isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body') {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__["isHTMLElement"])(offsetParent)) {
      offsets = getInnerOffsets(offsetParent);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getDecorations.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getDecorations.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDecorations; });
/* harmony import */ var _getBorders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorders.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBorders.js");
 // Borders + scrollbars

function getDecorations(element) {
  var borders = Object(_getBorders_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  return {
    top: borders.top,
    right: element.offsetWidth - (element.clientWidth + borders.right),
    bottom: element.offsetHeight - (element.clientHeight + borders.bottom),
    left: borders.left
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*******************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
function getDocumentElement(element) {
  return element.ownerDocument.documentElement;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCompositeRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");




function getDocumentRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var documentRect = Object(_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element), win);
  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;
  return documentRect;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");




 // https://stackoverflow.com/a/9851769/2059996

var isFirefox = function isFirefox() {
  return typeof window.InstallTrigger !== 'undefined';
};

function getTrueOffsetParent(element) {
  var offsetParent;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || !(offsetParent = element.offsetParent) || // https://github.com/popperjs/popper.js/issues/837
  isFirefox() && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'fixed') {
    return null;
  }

  return offsetParent;
}

function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return element.parentNode || // DOM Element detected
  // $FlowFixMe: need a better way to handle this...
  element.host || // ShadowRoot detected
  document.ownerDocument || // Fallback to ownerDocument if available
  document.documentElement // Or to documentElement if everything else fails
  ;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].includes(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node))) {
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node)) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
      return node;
    }
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  return {
    width: win.innerWidth,
    height: win.innerHeight,
    x: 0,
    y: 0
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if ({}.toString.call(node) !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \***********************************************************************************************************/
/*! exports provided: isElement, isHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement;
}



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].includes(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element));
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!******************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");




function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) === 'body';
  var target = isBody ? Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/enums.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/enums.js ***!
  \********************************************************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements =
/*#__PURE__*/
basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements =
/*#__PURE__*/
[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/index.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "../../node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/debounce.js */ "../../node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "../../node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "../../node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types.js */ "../../node_modules/@popperjs/core/lib/types.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_types_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_11__) if(["popperGenerator","createPopper","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_js__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_10__["modifierPhases"]; });














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided to Popper, they must be either a valid DOM element, virtual element, or a jQuery-wrapped DOM element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__["default"])([].concat(state.options.modifiers.filter(function (modifier) {
          return !defaultModifiers.find(function (_ref) {
            var name = _ref.name;
            return name === modifier.name;
          });
        }), defaultModifiers.map(function (defaultModifier) {
          return Object.assign({}, defaultModifier, {}, state.options.modifiers.find(function (_ref2) {
            var name = _ref2.name;
            return name === defaultModifier.name;
          }));
        }))); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_7__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref3) {
            var name = _ref3.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_6__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_10__["auto"]) {
            var flipModifier = orderedModifiers.find(function (_ref4) {
              var name = _ref4.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }
        } // Strip out disabled modifiers


        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref5) {
        var name = _ref5.name,
            _ref5$options = _ref5.options,
            options = _ref5$options === void 0 ? {} : _ref5$options,
            effect = _ref5.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper =
/*#__PURE__*/
popperGenerator();

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.entries(attributes).forEach(function (_ref2) {
      var name = _ref2[0],
          value = _ref2[1];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref3) {
  var state = _ref3.state;
  var initialStyles = {
    position: 'absolute',
    left: '0',
    top: '0'
  };
  Object.assign(state.elements.popper.style, initialStyles);
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? Object.assign({}, state.styles[name]) : initialStyles);
      var attributes = state.attributes[name] || {}; // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        var _Object$assign;

        return Object.assign({}, style, (_Object$assign = {}, _Object$assign[String(property)] = '', _Object$assign));
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        return element.removeAttribute(attribute);
      });
    });
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "../../node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "../../node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");









function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_7__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_7__["right"]].includes(basePlacement);
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_7__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_7__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_7__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_7__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var center = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(paddingObject[minProp], state.rects.popper[len] / 2 - arrowRect[len] / 2 + centerToReference, state.rects.popper[len] - arrowRect[len] - paddingObject[maxProp]); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding; // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_5__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_6__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_7__["basePlacements"]))
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \**************************************************************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = window.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      y = y - offsetParent.clientHeight + popperRect.height;
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"];
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      x = x - offsetParent.clientWidth + popperRect.width;
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (window.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;
  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  }; // popper offsets are always available

  state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
    offsets: state.modifiersData.popperOffsets,
    position: state.options.strategy,
    adaptive: adaptive
  }))); // arrow offsets may not be available

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/uniqueBy.js */ "../../node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");









function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_6__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_5__["default"])([preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_6__["auto"] ? acc.concat(Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations
    })) : acc.concat(placement);
  }, []), function (placement) {
    return placement;
  });
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_6__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_6__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_6__["bottom"]].includes(_basePlacement);
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_6__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_6__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_6__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_6__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [overflow[_basePlacement] <= 0, overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0];

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*******************************************************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].includes(basePlacement) ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].includes(basePlacement) ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;
  state.modifiersData.popperOffsets.x += x;
  state.modifiersData.popperOffsets.y += y;
  state.modifiersData[name] = data;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "../../node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "../../node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "../../node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");










function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, Math.abs(referenceRect[len] - arrowRect[len]), arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = state.modifiersData.popperOffsets[mainAxis] + minOffset - offsetModifierValue;
    var tetherMax = state.modifiersData.popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    state.modifiersData.popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_min, _offset, _max);

    state.modifiersData.popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/popper.js":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/popper.js ***!
  \*********************************************************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "../../node_modules/@popperjs/core/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "../../node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "../../node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "../../node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "../../node_modules/@popperjs/core/lib/modifiers/hide.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper =
/*#__PURE__*/
Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/types.js":
/*!********************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/types.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return placement.includes(variation);
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"]; // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/debounce.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "../../node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js");









function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, {}, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].includes(key) ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].includes(key) ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/format.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/format.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!*********************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(placement) ? 'x' : 'y';
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!**************************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), {}, paddingObject);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "../../node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (!_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].includes(modifier.phase)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/within.js":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@popperjs/core/lib/utils/within.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/***/ }),

/***/ "./src/app/components/popover/popover-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/popover/popover-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PopoverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverRoutingModule", function() { return PopoverRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component */ "./src/app/components/popover/popover.component.ts");


const routes = [
    {
        path: '',
        component: _popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"],
    },
];
class PopoverRoutingModule {
}


/***/ }),

/***/ "./src/app/components/popover/popover.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/popover/popover.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_PopoverComponent, View_PopoverComponent_0, View_PopoverComponent_Host_0, PopoverComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PopoverComponent", function() { return RenderType_PopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PopoverComponent_0", function() { return View_PopoverComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PopoverComponent_Host_0", function() { return View_PopoverComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponentNgFactory", function() { return PopoverComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @terminus/ui-popover */ "../../dist/libs/ui/popover/fesm2015/terminus-ui-popover.js");
/* harmony import */ var _dist_libs_ui_popover_terminus_ui_popover_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../dist/libs/ui/popover/terminus-ui-popover.ngfactory */ "../../dist/libs/ui/popover/terminus-ui-popover.ngfactory.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover.component */ "./src/app/components/popover/popover.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





var styles_PopoverComponent = [];
var RenderType_PopoverComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_PopoverComponent, data: {} });

function View_PopoverComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 25, "div", [["class", "demo-popover"], ["style", "max-width: 200px; height: 600px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 21, "select", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.example1select = $event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.change() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 3, "option", [["value", "top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Top"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 3, "option", [["value", "right"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Right"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 3, "option", [["value", "bottom"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bottom"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 3, "option", [["value", "left"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Left"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 16777216, null, null, 2, "button", [["class", "ts-popover-trigger"], ["style", "margin: 200px 250px;"], ["tsPopoverTrigger", "popper1"]], null, [[null, "popoverOnShown"], [null, "popoverOnHidden"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).onClick($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("popoverOnShown" === en)) {
        var pd_1 = (_co.popoverOnShown($event) !== false);
        ad = (pd_1 && ad);
    } if (("popoverOnHidden" === en)) {
        var pd_2 = (_co.popoverOnHidden($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 3883008, null, 0, _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_2__["TsPopoverTriggerDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], { defaultOpened: [0, "defaultOpened"], id: [1, "id"], popover: [2, "popover"], position: [3, "position"] }, { popoverOnShown: "popoverOnShown", popoverOnHidden: "popoverOnHidden" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Click me!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 5, "ts-popover", [["class", "ts-popover"]], null, null, null, _dist_libs_ui_popover_terminus_ui_popover_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsPopoverComponent_0"], _dist_libs_ui_popover_terminus_ui_popover_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsPopoverComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 245760, [["popper1", 4]], 0, _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_2__["TsPopoverComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, 0, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["My Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, 0, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Other random content."]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.example1select; _ck(_v, 4, 0, currVal_7); var currVal_8 = "top"; _ck(_v, 8, 0, currVal_8); var currVal_9 = "top"; _ck(_v, 9, 0, currVal_9); var currVal_10 = "right"; _ck(_v, 12, 0, currVal_10); var currVal_11 = "right"; _ck(_v, 13, 0, currVal_11); var currVal_12 = "bottom"; _ck(_v, 16, 0, currVal_12); var currVal_13 = "bottom"; _ck(_v, 17, 0, currVal_13); var currVal_14 = "left"; _ck(_v, 20, 0, currVal_14); var currVal_15 = "left"; _ck(_v, 21, 0, currVal_15); var currVal_16 = false; var currVal_17 = _co.myId; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 27); var currVal_19 = _co.example1select; _ck(_v, 24, 0, currVal_16, currVal_17, currVal_18, currVal_19); _ck(_v, 27, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_PopoverComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-popover", [], null, null, null, View_PopoverComponent_0, RenderType_PopoverComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
var PopoverComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-popover", _popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], View_PopoverComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");


class PopoverComponent {
    constructor(elem) {
        this.elem = elem;
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('bottom');
        this.positions = ['bottom', 'top', 'left', 'right'];
        this.myId = 'custom-id';
        this.example1select = 'right';
    }
    popoverOnShown(event) {
        console.log('popper on shown emitted event: ', event);
    }
    popoverOnHidden(event) {
        console.log('popover on hidden emitted event: ', event);
    }
    change() {
        setTimeout(() => {
            this.elem.nativeElement.querySelector('.ts-popover-trigger').dispatchEvent(new Event('click'));
        }, 100);
    }
}


/***/ }),

/***/ "./src/app/components/popover/popover.module.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/components/popover/popover.module.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: PopoverModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModuleNgFactory", function() { return PopoverModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popover_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.module */ "./src/app/components/popover/popover.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.component.ngfactory */ "./src/app/components/popover/popover.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */ "../../node_modules/@angular/material/dialog/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */ "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/core */ "../../node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @terminus/ui-pipes */ "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
/* harmony import */ var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @terminus/ui-validation-messages */ "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @terminus/ui-validators */ "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
/* harmony import */ var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @terminus/ui-selection-list */ "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./popover-routing.module */ "./src/app/components/popover/popover-routing.module.ts");
/* harmony import */ var _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @terminus/ui-popover */ "../../dist/libs/ui/popover/fesm2015/terminus-ui-popover.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/grid */ "../../node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @terminus/ui-checkbox */ "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @terminus/ui-icon */ "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
/* harmony import */ var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @terminus/ui-chip */ "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
/* harmony import */ var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @terminus/ui-form-field */ "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @terminus/ui-input */ "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
/* harmony import */ var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @terminus/ui-option */ "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
/* harmony import */ var _popover_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./popover.component */ "./src/app/components/popover/popover.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 









































var PopoverModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_popover_module__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _popover_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["PopoverComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_13__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_13__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_18__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _popover_routing_module__WEBPACK_IMPORTED_MODULE_21__["PopoverRoutingModule"], _popover_routing_module__WEBPACK_IMPORTED_MODULE_21__["PopoverRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_22__["TsPopoverModule"], _terminus_ui_popover__WEBPACK_IMPORTED_MODULE_22__["TsPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_25__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_25__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_32__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_34__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_34__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_35__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_35__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_12__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_13__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_13__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_36__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_36__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_37__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_27__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_19__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _popover_module__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"], _popover_module__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_20__["ROUTES"], function () { return [[{ path: "", component: _popover_component__WEBPACK_IMPORTED_MODULE_40__["PopoverComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_38__["TS_DATE_FORMATS"], [])]); });



/***/ }),

/***/ "./src/app/components/popover/popover.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/popover/popover.module.ts ***!
  \******************************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
class PopoverModule {
}


/***/ })

}]);
//# sourceMappingURL=popover-popover-module-ngfactory-es2015.js.map