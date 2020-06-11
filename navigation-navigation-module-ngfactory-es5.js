function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/navigation/fesm2015/terminus-ui-navigation.js":
  /*!**************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/navigation/fesm2015/terminus-ui-navigation.js ***!
    \**************************************************************************************************************/

  /*! exports provided: TsNavigationComponent, TsNavigationModule, isLinkItem */

  /***/
  function distLibsUiNavigationFesm2015TerminusUiNavigationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsNavigationComponent", function () {
      return TsNavigationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsNavigationModule", function () {
      return TsNavigationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLinkItem", function () {
      return isLinkItem;
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /**
     * Determine if a navigation item is a {@link TsNavigationLinkItem}
     *
     * @param x - The item to check
     * @returns True if the item is a TsNavigationLinkItem
     */


    var isLinkItem = function isLinkItem(x) {
      return !!x.destination;
    };

    var DEFAULT_USER_NAME_MAX_LENGTH = 20;
    var DEFAULT_WELCOME_MESSAGE_MAX_LENGTH = 20;
    /**
     * This is the navigation UI Component
     *
     * @example
     * <ts-navigation
     *              [items]="navigationItems$ | async"
     *              [user]="currentUser$ | async"
     *              userNameLength="20"
     *              welcomeMessage="Hi!"
     *              welcomeMsgLength="25"
     *              (itemSelected)="myMethod($event)"
     * ></ts-navigation>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/navigation</example-url>
     */

    var TsNavigationComponent = /*#__PURE__*/function () {
      function TsNavigationComponent(changeDetectorRef) {
        _classCallCheck(this, TsNavigationComponent);

        this.changeDetectorRef = changeDetectorRef;
        /**
         * Define an array of widths at which to break the navigation
         */

        this.breakWidths = [];
        /**
         * Define the list of hidden items
         */

        this.hiddenItems = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]([]);
        /**
         * The collection of visible navigation items
         */

        this.visibleItems = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]([]);
        /**
         * Define the user name length
         */

        this.userNameLength = DEFAULT_USER_NAME_MAX_LENGTH;
        /**
         * Define the welcome message
         */

        this.welcomeMessage = 'Welcome';
        /**
         * Define the welcome message length
         */

        this.welcomeMsgLength = DEFAULT_WELCOME_MESSAGE_MAX_LENGTH;
        /**
         * Emit the click event with the {@link TsNavigationPayload}
         */

        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }
      /**
       * Getter to return the available navigation width
       *
       * @returns The available navigation space
       */


      _createClass(TsNavigationComponent, [{
        key: "onResize",

        /**
         * Trigger a layout update when the window resizes
         */
        value: function onResize() {
          this.updateLists();
        }
        /**
         * Set up initial link groups
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setUpInitialArrays(this.pristineItems);
        }
        /**
         * Trigger initial layout update after the view initializes
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.generateBreakWidths();
          this.updateLists();
          this.changeDetectorRef.detectChanges();
        }
        /**
         * Generate the array of breakWidths
         */

      }, {
        key: "generateBreakWidths",
        value: function generateBreakWidths() {
          var _this = this;

          var totalSpace = 0;
          this.breakWidths.length = 0; // Loop through the visible links

          this.visibleLinkElement.forEach(function (item) {
            // Tally up the total space
            totalSpace += item.nativeElement.offsetWidth; // Add the total space as a breakpoint

            _this.breakWidths.push(totalSpace);
          });
        }
        /**
         * Clone the nav items and split into the initially visible/hidden lists
         *
         * @param items - The complete list of navigation items
         */

      }, {
        key: "setUpInitialArrays",
        value: function setUpInitialArrays(items) {
          var _this2 = this;

          // Clone the items and define the external flag for links only
          var allItems = items.map(function (i) {
            var item = Object.assign({}, i);

            if (isLinkItem(item)) {
              item.isExternal = _this2.isExternalLink(item.destination);
            }

            return item;
          }); // Create an object with the arrays separated

          var splitArrays = Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_11__["groupBy"])(allItems, 'alwaysHidden'); // Push the separated arrays

          this.visibleItems.next(splitArrays["false"]);
          this.hiddenItems.next(splitArrays["true"]);
          this.changeDetectorRef.detectChanges();
        }
        /**
         * Move items between the two lists as required by the available space
         */

      }, {
        key: "updateLists",
        value: function updateLists() {
          var requiredSpace = this.breakWidths[this.visibleItemsLength - 1]; // If there is not enough space

          if (requiredSpace > this.availableSpace) {
            // Pull the last link out of the visible array
            var currentVisible = this.visibleItems.getValue();
            var itemToMove = currentVisible.pop();
            var updatedHiddenArray = this.hiddenItems.getValue(); // If an item was found, add it to the beginning of the hidden items array
            // istanbul ignore else

            if (itemToMove) {
              updatedHiddenArray.unshift(itemToMove);
            } // Push out the updated value


            this.hiddenItems.next(updatedHiddenArray); // Trigger another layout check

            this.updateLists();
          } else if (this.availableSpace > this.breakWidths[this.visibleItemsLength]) {
            // Else, if there is more than enough space
            // Pull the first item from the hidden array
            var currentHidden = this.hiddenItems.getValue();

            var _itemToMove = currentHidden.shift();

            var updatedVisibleArray = this.visibleItems.getValue(); // If an item was found, add it to the beginning of the hidden items array
            // istanbul ignore else

            if (_itemToMove) {
              updatedVisibleArray.push(_itemToMove);
            } // Add it to the end of the visible array


            this.visibleItems.next(updatedVisibleArray);
          }

          this.changeDetectorRef.detectChanges();
        }
        /**
         * If the destination is a string and begins with `http`
         *
         * @param destination - The destination to check
         * @returns Boolean determining if the link is external
         */

      }, {
        key: "isExternalLink",
        value: function isExternalLink(destination) {
          return destination.indexOf('http') >= 0;
        }
        /**
         * Function for tracking for-loops changes
         *
         * @param index - The item index
         * @returns The unique ID
         */

      }, {
        key: "trackByFn",
        value: function trackByFn(index) {
          return index;
        }
      }, {
        key: "availableSpace",
        get: function get() {
          var NAV_WIDTH_BUFFER = 10;
          return this.visibleItemsList.nativeElement.offsetWidth - NAV_WIDTH_BUFFER;
        }
        /**
         * Getter to return the user's full name if it exists
         *
         * @returns The user's full name
         */

      }, {
        key: "usersFullName",
        get: function get() {
          var userExists = !!this.user;
          var nameExists = userExists && this.user.fullName.length > 0;
          return userExists && nameExists ? this.user.fullName : null;
        }
        /**
         * Getter to return the count of visible items
         *
         * @returns The number of visible items
         */

      }, {
        key: "visibleItemsLength",
        get: function get() {
          return this.visibleItems.getValue().length;
        }
        /**
         * Accept the array of navigation items and trigger setup
         *
         * @param value
         */

      }, {
        key: "items",
        set: function set(value) {
          // Filter out disabled items
          this.pristineItems = value.filter(function (item) {
            return !item.isDisabled;
          });
          this.setUpInitialArrays(this.pristineItems);
          this.generateBreakWidths();
          this.updateLists();
        }
      }]);

      return TsNavigationComponent;
    }();

    TsNavigationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TsNavigationComponent.prototype, "items", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsNavigationComponent.prototype, "user", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsNavigationComponent.prototype, "userNameLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsNavigationComponent.prototype, "welcomeMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsNavigationComponent.prototype, "welcomeMsgLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('visibleItemsList', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], TsNavigationComponent.prototype, "visibleItemsList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('visibleLinkElement'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])], TsNavigationComponent.prototype, "visibleLinkElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])], TsNavigationComponent.prototype, "action", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:resize'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TsNavigationComponent.prototype, "onResize", null);
    TsNavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-navigation',
      template: "<nav class=\"c-navigation t-dark qa-navigation\" fxLayout=\"row\">\n\n  <div\n    class=\"c-navigation__items qa-navigation-items\"\n    #visibleItemsList\n    fxFlex=\"1 1 auto\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"end stretch\"\n  >\n\n    <ng-container *ngFor=\"let item of visibleItems | async; trackBy: trackByFn\">\n\n      <a\n        class=\"c-navigation__item qa-navigation-item\"\n        routerLink=\"{{ item.destination }}\"\n        routerLinkActive=\"c-navigation__item--active\"\n        [routerLinkActiveOptions]=\"{exact: true}\"\n        *ngIf=\"item.destination && !item.isExternal\"\n        #visibleLinkElement\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        tabindex=\"0\"\n      >\n        <span class=\"c-navigation__item-inner\">\n          {{ item.name }}\n        </span>\n      </a>\n\n      <a\n        class=\"c-navigation__item qa-navigation-item\"\n        *ngIf=\"item.destination && item.isExternal\"\n        href=\"{{ item.destination }}\"\n        #visibleLinkElement\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        tabindex=\"0\"\n      >\n        <span class=\"c-navigation__item-inner\">\n          {{ item.name }}\n        </span>\n      </a>\n\n      <a\n        class=\"c-navigation__item qa-navigation-item\"\n        *ngIf=\"!item.destination\"\n        #visibleLinkElement\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        tabindex=\"0\"\n        (click)=\"action.emit({event: $event, action: item.action})\"\n      >\n        <span class=\"c-navigation__item-inner\">\n          {{ item.name }}\n        </span>\n      </a>\n    </ng-container>\n\n  </div>\n\n\n  <button\n    class=\"c-navigation__trigger qa-navigation-secondary-trigger\"\n    [ngClass]=\"{'c-navigation__trigger--separator': visibleItemsLength}\"\n    mat-button\n    [matMenuTriggerFor]=\"secondaryNav\"\n    fxFlex=\"none\"\n    tabindex=\"0\"\n  >\n    <span class=\"c-navigation__trigger-welcome\" *ngIf=\"welcomeMessage.length>welcomeMsgLength\">\n      <ts-tooltip\n        [tooltipValue]=\"welcomeMessage\"\n      >\n        {{ welcomeMessage | tsTruncateAt:welcomeMsgLength }}\n      </ts-tooltip>\n    </span>\n    <span class=\"c-navigation__trigger-welcome\" *ngIf=\"welcomeMessage.length<=welcomeMsgLength\">\n      {{ welcomeMessage }}\n    </span>\n    <br *ngIf=\"usersFullName\">\n    <span *ngIf=\"usersFullName && usersFullName.length > userNameLength\">\n      <ts-tooltip\n        [tooltipValue]=\"usersFullName\"\n      >\n        {{ usersFullName | tsTruncateAt:userNameLength }}\n      </ts-tooltip>\n    </span>\n    <span *ngIf=\"usersFullName && usersFullName.length <= userNameLength\">\n        {{ usersFullName }}\n    </span>\n\n    <ts-icon class=\"c-navigation__trigger-icon\">\n      keyboard_arrow_down\n    </ts-icon>\n  </button>\n\n\n\n\n  <mat-menu\n    class=\"c-navigation__hidden-items qa-navigation-secondary-items\"\n    #secondaryNav=\"matMenu\"\n    xPosition=\"before\"\n    [overlapTrigger]=\"false\"\n  >\n\n    <ng-container *ngFor=\"let item of hiddenItems | async; trackBy: trackByFn\">\n      <a\n        class=\"c-navigation__hidden-item qa-navigation-secondary-item\"\n        [ngClass]=\"{'c-navigation__hidden-item--admin': item.alwaysHidden}\"\n        routerLink=\"{{ item.destination }}\"\n        *ngIf=\"item.destination && !item.isExternal\"\n        mat-menu-item\n        #hiddenLinkElement\n      >\n        {{ item.name }}\n      </a>\n\n      <a\n        class=\"c-navigation__hidden-item qa-navigation-secondary-item\"\n        [ngClass]=\"{'c-navigation__hidden-item--admin': item.alwaysHidden}\"\n        href=\"{{ item.destination }}\"\n        *ngIf=\"item.destination && item.isExternal\"\n        mat-menu-item\n        #hiddenLinkElement\n      >\n        {{ item.name }}\n      </a>\n\n      <a\n        class=\"c-navigation__hidden-item qa-navigation-secondary-item\"\n        [ngClass]=\"{'c-navigation__hidden-item--admin': item.alwaysHidden}\"\n        *ngIf=\"!item.destination\"\n        mat-menu-item\n        #hiddenLinkElement\n        (click)=\"action.emit({event: $event, action: item.action})\"\n      >\n        {{ item.name }}\n      </a>\n    </ng-container>\n\n  </mat-menu>\n\n</nav>\n",
      host: {
        "class": 'ts-navigation'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      exportAs: 'tsNavigation',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-navigation{display:inline-block;flex:1 1 auto;max-width:100%;overflow:hidden}.ts-navigation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-navigation h1,.ts-navigation h2,.ts-navigation h3,.ts-navigation h4,.ts-navigation h5,.ts-navigation p{margin:unset}.ts-navigation .c-navigation{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:500;background-color:#00538a;color:#fafafa}.c-navigation .c-navigation__items{overflow:hidden;padding-right:16px}.c-navigation .c-navigation__item{color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;letter-spacing:.04em;padding:0 16px;position:relative;text-decoration:none}.c-navigation .c-navigation__item--active,.c-navigation .c-navigation__item:focus,.c-navigation .c-navigation__item:hover{outline:0}.c-navigation .c-navigation__item--active .c-navigation__item-inner::after,.c-navigation .c-navigation__item:focus .c-navigation__item-inner::after,.c-navigation .c-navigation__item:hover .c-navigation__item-inner::after{opacity:1;transition-duration:.2s}.c-navigation .c-navigation__item-inner{display:block;white-space:nowrap;width:100%}.c-navigation .c-navigation__item-inner::after{background-color:#fafafa;bottom:0;content:'';height:4px;left:50%;opacity:0;position:absolute;transform:translateX(-50%);transition:opacity .1s ease-in-out;width:calc(100% - 32px);will-change:opacity}.c-navigation .c-navigation__trigger{background-color:transparent;border:0;cursor:pointer;outline:0;text-align:center;display:block;letter-spacing:.04em;line-height:24px}.c-navigation .c-navigation__trigger:focus{outline:0}.c-navigation .c-navigation__trigger::after{background-color:rgba(250,250,250,.5);bottom:15%;content:'';height:70%;left:0;position:absolute;top:15%;width:1px}.c-navigation .c-navigation__trigger .mat-button-wrapper{display:inline-block;padding:8px 24px 8px 16px;position:relative;text-align:right}.c-navigation .c-navigation__trigger-welcome{font-weight:400}.c-navigation .c-navigation__trigger-icon{position:absolute;right:0;transform:translateY(1px)}.c-navigation__hidden-items{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;position:relative}.c-navigation__hidden-items:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.c-navigation__hidden-items.mat-menu-panel{border-top-left-radius:0;border-top-right-radius:0}.c-navigation__hidden-items .mat-menu-content{background-color:#00538a;padding:0}.c-navigation__hidden-items .mat-menu-content .mat-menu-item{color:#fafafa}.c-navigation__hidden-items .c-navigation__hidden-item--admin{background-color:#0c4271}.c-navigation__hidden-items .c-navigation__hidden-item--admin.mat-menu-item{color:#cecdd1}.c-navigation__hidden-items .c-navigation__hidden-item:not(.c-navigation__hidden-item--admin)+.c-navigation__hidden-item--admin::before{background-color:#1666b1;content:'';display:block;height:1px;left:0;opacity:.6;position:absolute;right:0;top:0}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])], TsNavigationComponent);

    var TsNavigationModule = function TsNavigationModule() {
      _classCallCheck(this, TsNavigationModule);
    };

    TsNavigationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_8__["TsPipesModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__["TsTooltipModule"]],
      declarations: [TsNavigationComponent],
      exports: [TsNavigationComponent]
    })], TsNavigationModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-navigation.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/navigation/terminus-ui-navigation.ngfactory.js":
  /*!***************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/navigation/terminus-ui-navigation.ngfactory.js ***!
    \***************************************************************************************************************/

  /*! exports provided: TsNavigationModuleNgFactory, RenderType_TsNavigationComponent, View_TsNavigationComponent_0, View_TsNavigationComponent_Host_0, TsNavigationComponentNgFactory */

  /***/
  function distLibsUiNavigationTerminusUiNavigationNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsNavigationModuleNgFactory", function () {
      return TsNavigationModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsNavigationComponent", function () {
      return RenderType_TsNavigationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsNavigationComponent_0", function () {
      return View_TsNavigationComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsNavigationComponent_Host_0", function () {
      return View_TsNavigationComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsNavigationComponentNgFactory", function () {
      return TsNavigationComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-navigation */
    "../../dist/libs/ui/navigation/fesm2015/terminus-ui-navigation.js");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../tooltip/terminus-ui-tooltip.ngfactory */
    "../../dist/libs/ui/tooltip/terminus-ui-tooltip.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/menu/index.ngfactory */
    "../../node_modules/@angular/material/menu/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "../../node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../icon/terminus-ui-icon.ngfactory */
    "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsNavigationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_1__["TsNavigationModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_14__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_14__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_25__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_25__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_1__["TsNavigationModule"], _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_1__["TsNavigationModule"], [])]);
    });

    var styles_TsNavigationComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-navigation{display:inline-block;flex:1 1 auto;max-width:100%;overflow:hidden}.ts-navigation :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-navigation h1,.ts-navigation h2,.ts-navigation h3,.ts-navigation h4,.ts-navigation h5,.ts-navigation p{margin:unset}.ts-navigation .c-navigation{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:500;background-color:#00538a;color:#fafafa}.c-navigation .c-navigation__items{overflow:hidden;padding-right:16px}.c-navigation .c-navigation__item{color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;letter-spacing:.04em;padding:0 16px;position:relative;text-decoration:none}.c-navigation .c-navigation__item--active,.c-navigation .c-navigation__item:focus,.c-navigation .c-navigation__item:hover{outline:0}.c-navigation .c-navigation__item--active .c-navigation__item-inner::after,.c-navigation .c-navigation__item:focus .c-navigation__item-inner::after,.c-navigation .c-navigation__item:hover .c-navigation__item-inner::after{opacity:1;transition-duration:.2s}.c-navigation .c-navigation__item-inner{display:block;white-space:nowrap;width:100%}.c-navigation .c-navigation__item-inner::after{background-color:#fafafa;bottom:0;content:'';height:4px;left:50%;opacity:0;position:absolute;transform:translateX(-50%);transition:opacity .1s ease-in-out;width:calc(100% - 32px);will-change:opacity}.c-navigation .c-navigation__trigger{background-color:transparent;border:0;cursor:pointer;outline:0;text-align:center;display:block;letter-spacing:.04em;line-height:24px}.c-navigation .c-navigation__trigger:focus{outline:0}.c-navigation .c-navigation__trigger::after{background-color:rgba(250,250,250,.5);bottom:15%;content:'';height:70%;left:0;position:absolute;top:15%;width:1px}.c-navigation .c-navigation__trigger .mat-button-wrapper{display:inline-block;padding:8px 24px 8px 16px;position:relative;text-align:right}.c-navigation .c-navigation__trigger-welcome{font-weight:400}.c-navigation .c-navigation__trigger-icon{position:absolute;right:0;transform:translateY(1px)}.c-navigation__hidden-items{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;position:relative}.c-navigation__hidden-items:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.c-navigation__hidden-items.mat-menu-panel{border-top-left-radius:0;border-top-right-radius:0}.c-navigation__hidden-items .mat-menu-content{background-color:#00538a;padding:0}.c-navigation__hidden-items .mat-menu-content .mat-menu-item{color:#fafafa}.c-navigation__hidden-items .c-navigation__hidden-item--admin{background-color:#0c4271}.c-navigation__hidden-items .c-navigation__hidden-item--admin.mat-menu-item{color:#cecdd1}.c-navigation__hidden-items .c-navigation__hidden-item:not(.c-navigation__hidden-item--admin)+.c-navigation__hidden-item--admin::before{background-color:#1666b1;content:'';display:block;height:1px;left:0;opacity:.6;position:absolute;right:0;top:0}"];

    var RenderType_TsNavigationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsNavigationComponent,
      data: {}
    });

    function View_TsNavigationComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["visibleLinkElement", 1]], null, 9, "a", [["class", "c-navigation__item qa-navigation-item"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["routerLinkActive", "c-navigation__item--active"], ["tabindex", "0"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"]]], {
        routerLinkActiveOptions: [0, "routerLinkActiveOptions"],
        routerLinkActive: [1, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        linksWithHrefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](7, {
        exact: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "span", [["class", "c-navigation__item-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, [" ", " "]))], function (_ck, _v) {
        var currVal_2 = "row";

        _ck(_v, 1, 0, currVal_2);

        var currVal_3 = "center center";

        _ck(_v, 2, 0, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.destination, "");

        _ck(_v, 3, 0, currVal_4);

        var currVal_5 = _ck(_v, 7, 0, true);

        var currVal_6 = "c-navigation__item--active";

        _ck(_v, 4, 0, currVal_5, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).target;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).href;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_7 = _v.parent.context.$implicit.name;

        _ck(_v, 9, 0, currVal_7);
      });
    }

    function View_TsNavigationComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["visibleLinkElement", 1]], null, 4, "a", [["class", "c-navigation__item qa-navigation-item"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["tabindex", "0"]], [[8, "href", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "c-navigation__item-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) {
        var currVal_1 = "row";

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = "center center";

        _ck(_v, 2, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.destination, "");

        _ck(_v, 0, 0, currVal_0);

        var currVal_3 = _v.parent.context.$implicit.name;

        _ck(_v, 4, 0, currVal_3);
      });
    }

    function View_TsNavigationComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[2, 0], ["visibleLinkElement", 1]], null, 4, "a", [["class", "c-navigation__item qa-navigation-item"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["tabindex", "0"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.action.emit({
            event: $event,
            action: _v.parent.context.$implicit.action
          }) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [["class", "c-navigation__item-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "center center";

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit.name;

        _ck(_v, 4, 0, currVal_2);
      });
    }

    function View_TsNavigationComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsNavigationComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsNavigationComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsNavigationComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.destination && !_v.context.$implicit.isExternal;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.destination && _v.context.$implicit.isExternal;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = !_v.context.$implicit.destination;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_TsNavigationComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "span", [["class", "c-navigation__trigger-welcome"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "ts-tooltip", [["class", "ts-tooltip"]], null, null, null, _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_TsTooltipComponent_0"], _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_TsTooltipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_25__["TsTooltipComponent"], [], {
        tooltipValue: [0, "tooltipValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 2)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.welcomeMessage;

        _ck(_v, 2, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), _co.welcomeMessage, _co.welcomeMsgLength));

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_TsNavigationComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "c-navigation__trigger-welcome"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.welcomeMessage;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TsNavigationComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null);
    }

    function View_TsNavigationComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "ts-tooltip", [["class", "ts-tooltip"]], null, null, null, _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_TsTooltipComponent_0"], _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_TsTooltipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_25__["TsTooltipComponent"], [], {
        tooltipValue: [0, "tooltipValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 2)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.usersFullName;

        _ck(_v, 2, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), _co.usersFullName, _co.userNameLength));

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_TsNavigationComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.usersFullName;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TsNavigationComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "a", [["class", "c-navigation__hidden-item qa-navigation-secondary-item mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
        "c-navigation__hidden-item--admin": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], {
        ngClass: [0, "ngClass"],
        klass: [1, "klass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, {
        "c-navigation__hidden-item--admin": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, [[5, 4], [6, 4], ["hiddenLinkElement", 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_PANEL"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_9 = "c-navigation__hidden-item qa-navigation-secondary-item";

        var currVal_10 = _ck(_v, 2, 0, _v.parent.context.$implicit.alwaysHidden);

        _ck(_v, 1, 0, currVal_9, currVal_10);

        var currVal_11 = _ck(_v, 4, 0, _v.parent.context.$implicit.alwaysHidden);

        var currVal_12 = "c-navigation__hidden-item qa-navigation-secondary-item";

        _ck(_v, 3, 0, currVal_11, currVal_12);

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.destination, "");

        _ck(_v, 6, 0, currVal_13);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).role;

        var currVal_1 = true;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._highlighted;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._triggersSubmenu;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._getTabIndex();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled || null;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).target;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).href;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_14 = _v.parent.context.$implicit.name;

        _ck(_v, 7, 0, currVal_14);
      });
    }

    function View_TsNavigationComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "a", [["class", "c-navigation__hidden-item qa-navigation-secondary-item mat-focus-indicator"], ["mat-menu-item", ""]], [[8, "href", 4], [1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
        "c-navigation__hidden-item--admin": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], {
        ngClass: [0, "ngClass"],
        klass: [1, "klass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, {
        "c-navigation__hidden-item--admin": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, [[5, 4], [6, 4], ["hiddenLinkElement", 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_8 = "c-navigation__hidden-item qa-navigation-secondary-item";

        var currVal_9 = _ck(_v, 2, 0, _v.parent.context.$implicit.alwaysHidden);

        _ck(_v, 1, 0, currVal_8, currVal_9);

        var currVal_10 = _ck(_v, 4, 0, _v.parent.context.$implicit.alwaysHidden);

        var currVal_11 = "c-navigation__hidden-item qa-navigation-secondary-item";

        _ck(_v, 3, 0, currVal_10, currVal_11);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.destination, "");

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).role;

        var currVal_2 = true;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._highlighted;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._triggersSubmenu;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._getTabIndex();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled.toString();

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled || null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_12 = _v.parent.context.$implicit.name;

        _ck(_v, 6, 0, currVal_12);
      });
    }

    function View_TsNavigationComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "a", [["class", "c-navigation__hidden-item qa-navigation-secondary-item mat-focus-indicator"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item", null], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._checkDisabled($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._handleMouseEnter() !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.action.emit({
            event: $event,
            action: _v.parent.context.$implicit.action
          }) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_MatMenuItem_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](2, {
        "c-navigation__hidden-item--admin": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], {
        ngClass: [0, "ngClass"],
        klass: [1, "klass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](4, {
        "c-navigation__hidden-item--admin": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, [[5, 4], [6, 4], ["hiddenLinkElement", 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_PANEL"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, 0, [" ", " "]))], function (_ck, _v) {
        var currVal_7 = "c-navigation__hidden-item qa-navigation-secondary-item";

        var currVal_8 = _ck(_v, 2, 0, _v.parent.context.$implicit.alwaysHidden);

        _ck(_v, 1, 0, currVal_7, currVal_8);

        var currVal_9 = _ck(_v, 4, 0, _v.parent.context.$implicit.alwaysHidden);

        var currVal_10 = "c-navigation__hidden-item qa-navigation-secondary-item";

        _ck(_v, 3, 0, currVal_9, currVal_10);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).role;

        var currVal_1 = true;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._highlighted;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._triggersSubmenu;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._getTabIndex();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled || null;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_11 = _v.parent.context.$implicit.name;

        _ck(_v, 6, 0, currVal_11);
      });
    }

    function View_TsNavigationComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsNavigationComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsNavigationComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsNavigationComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.destination && !_v.context.$implicit.isExternal;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.destination && _v.context.$implicit.isExternal;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = !_v.context.$implicit.destination;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_TsNavigationComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_9__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        visibleItemsList: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        visibleLinkElement: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 39, "nav", [["class", "c-navigation t-dark qa-navigation"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[1, 0], ["visibleItemsList", 1]], null, 6, "div", [["class", "c-navigation__items qa-navigation-items"], ["fxFlex", "1 1 auto"], ["fxLayout", "row"], ["fxLayoutAlign", "end stretch"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_TsNavigationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 16777216, null, null, 20, "button", [["aria-haspopup", "true"], ["class", "c-navigation__trigger qa-navigation-secondary-trigger mat-focus-indicator mat-menu-trigger"], ["fxFlex", "none"], ["mat-button", ""], ["tabindex", "0"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0], [1, "aria-controls", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._handleMousedown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19)._handleClick($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](14, {
        "c-navigation__trigger--separator": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_5__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], {
        ngClass: [0, "ngClass"],
        klass: [1, "klass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](17, {
        "c-navigation__trigger--separator": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"]], {
        menu: [0, "menu"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsNavigationComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsNavigationComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsNavigationComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsNavigationComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TsNavigationComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, 0, 2, "ts-icon", [["class", "c-navigation__trigger-icon ts-icon"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_TsIconComponent_0"], _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" keyboard_arrow_down "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 9, "mat-menu", [["class", "c-navigation__hidden-items qa-navigation-secondary-items"], ["xPosition", "before"]], null, null, null, _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View__MatMenu_0"], _node_modules_angular_material_menu_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType__MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_PANEL"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 1294336, [["secondaryNav", 4]], 3, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_DEFAULT_OPTIONS"]], {
        xPosition: [0, "xPosition"],
        overlapTrigger: [1, "overlapTrigger"],
        panelClass: [2, "panelClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        _allItems: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {
        items: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, {
        lazyContent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 2, null, View_TsNavigationComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";

        _ck(_v, 4, 0, currVal_0);

        var currVal_1 = "row";

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = "end stretch";

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = "1 1 auto";

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).transform(_co.visibleItems));

        var currVal_5 = _co.trackByFn;

        _ck(_v, 10, 0, currVal_4, currVal_5);

        var currVal_10 = "c-navigation__trigger qa-navigation-secondary-trigger";

        var currVal_11 = _ck(_v, 14, 0, _co.visibleItemsLength);

        _ck(_v, 13, 0, currVal_10, currVal_11);

        var currVal_12 = "none";

        _ck(_v, 15, 0, currVal_12);

        var currVal_13 = _ck(_v, 17, 0, _co.visibleItemsLength);

        var currVal_14 = "c-navigation__trigger qa-navigation-secondary-trigger";

        _ck(_v, 16, 0, currVal_13, currVal_14);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36);

        _ck(_v, 19, 0, currVal_15);

        var currVal_16 = _co.welcomeMessage.length > _co.welcomeMsgLength;

        _ck(_v, 21, 0, currVal_16);

        var currVal_17 = _co.welcomeMessage.length <= _co.welcomeMsgLength;

        _ck(_v, 23, 0, currVal_17);

        var currVal_18 = _co.usersFullName;

        _ck(_v, 25, 0, currVal_18);

        var currVal_19 = _co.usersFullName && _co.usersFullName.length > _co.userNameLength;

        _ck(_v, 27, 0, currVal_19);

        var currVal_20 = _co.usersFullName && _co.usersFullName.length <= _co.userNameLength;

        _ck(_v, 29, 0, currVal_20);

        var currVal_26 = "before";
        var currVal_27 = false;
        var currVal_28 = "c-navigation__hidden-items qa-navigation-secondary-items";

        _ck(_v, 36, 0, currVal_26, currVal_27, currVal_28);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).transform(_co.hiddenItems));

        var currVal_30 = _co.trackByFn;

        _ck(_v, 41, 0, currVal_29, currVal_30);
      }, function (_ck, _v) {
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).disabled || null;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18)._animationMode === "NoopAnimations";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).menuOpen || null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).menuOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 19).menu.panelId : null;

        _ck(_v, 12, 0, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).inline;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).theme === "primary";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).theme === "accent";
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).theme === "warn";

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).background;

        _ck(_v, 30, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
      });
    }

    function View_TsNavigationComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-navigation", [["class", "ts-navigation"]], null, [["window", "resize"]], function (_v, en, $event) {
        var ad = true;

        if ("window:resize" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onResize() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, View_TsNavigationComponent_0, RenderType_TsNavigationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_1__["TsNavigationComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TsNavigationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-navigation", _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_1__["TsNavigationComponent"], View_TsNavigationComponent_Host_0, {
      items: "items",
      user: "user",
      userNameLength: "userNameLength",
      welcomeMessage: "welcomeMessage",
      welcomeMsgLength: "welcomeMsgLength"
    }, {
      action: "action"
    }, []);
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
  "./src/app/components/navigation/navigation-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/navigation/navigation-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: NavigationRoutingModule */

  /***/
  function srcAppComponentsNavigationNavigationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationRoutingModule", function () {
      return NavigationRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.component */
    "./src/app/components/navigation/navigation.component.ts");

    var routes = [{
      path: '',
      component: _navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]
    }];

    var NavigationRoutingModule = function NavigationRoutingModule() {
      _classCallCheck(this, NavigationRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/navigation/navigation.component.ngfactory.js":
  /*!*************************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ngfactory.js ***!
    \*************************************************************************/

  /*! exports provided: RenderType_NavigationComponent, View_NavigationComponent_0, View_NavigationComponent_Host_0, NavigationComponentNgFactory */

  /***/
  function srcAppComponentsNavigationNavigationComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_NavigationComponent", function () {
      return RenderType_NavigationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NavigationComponent_0", function () {
      return View_NavigationComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NavigationComponent_Host_0", function () {
      return View_NavigationComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponentNgFactory", function () {
      return NavigationComponentNgFactory;
    });
    /* harmony import */


    var _navigation_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./navigation.component.scss.shim.ngstyle */
    "./src/app/components/navigation/navigation.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */
    "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_navigation_terminus_ui_navigation_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/navigation/terminus-ui-navigation.ngfactory */
    "../../dist/libs/ui/navigation/terminus-ui-navigation.ngfactory.js");
    /* harmony import */


    var _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ui-navigation */
    "../../dist/libs/ui/navigation/fesm2015/terminus-ui-navigation.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_NavigationComponent = [_navigation_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_NavigationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_NavigationComponent,
      data: {}
    });

    function View_NavigationComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "h3", [["tsCardTitle", ""], ["tsVerticalSpacing", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardTitleDirective"], [[3, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_3__["TsCardComponent"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_4__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Demo Controls "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.updateNav() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Update Nav"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 12, "div", [["class", "outer"], ["fxLayout", "row"], ["fxLayoutAlign", "space-between stretch"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "div", [["fxFlex", "none"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Logo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "ts-navigation", [["class", "ts-navigation"], ["userNameLength", "10"], ["welcomeMsgLength", "30"]], null, [[null, "action"], ["window", "resize"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("window:resize" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onResize() !== false;
          ad = pd_0 && ad;
        }

        if ("action" === en) {
          var pd_1 = _co.triggerAction($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_navigation_terminus_ui_navigation_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TsNavigationComponent_0"], _dist_libs_ui_navigation_terminus_ui_navigation_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TsNavigationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4308992, null, 0, _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_8__["TsNavigationComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        items: [0, "items"],
        user: [1, "user"],
        userNameLength: [2, "userNameLength"],
        welcomeMessage: [3, "welcomeMessage"],
        welcomeMsgLength: [4, "welcomeMsgLength"]
      }, {
        action: "action"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_2 = "";

        _ck(_v, 5, 0, currVal_2);

        var currVal_3 = "row";

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = "space-between stretch";

        _ck(_v, 11, 0, currVal_4);

        var currVal_5 = "row";

        _ck(_v, 13, 0, currVal_5);

        var currVal_6 = "center center";

        _ck(_v, 14, 0, currVal_6);

        var currVal_7 = "none";

        _ck(_v, 15, 0, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform(_co.navigationItems$));

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform(_co.currentUser$));

        var currVal_10 = "10";
        var currVal_11 = _co.myMessage;
        var currVal_12 = "30";

        _ck(_v, 19, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).tsCardTitle;

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_NavigationComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "demo-navigation", [], null, null, null, View_NavigationComponent_0, RenderType_NavigationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], [], null, null)], null, null);
    }

    var NavigationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("demo-navigation", _navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], View_NavigationComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/navigation/navigation.component.scss.shim.ngstyle.js":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.scss.shim.ngstyle.js ***!
    \*********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsNavigationNavigationComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["[_ngcontent-%COMP%]:root {\n  --swift-ease-out-duration: var(--ts-animation-time-duration-400);\n  --swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1);\n  --swift-ease-in-duration: var(--ts-animation-time-duration-300);\n  --swift-ease-in-timing-function: cubic-bezier(.55, 0, .55, .2);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.cdk-drag[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag[_ngcontent-%COMP%]   .cdk-drag-handle[_ngcontent-%COMP%] {\n  color: #cecdd1;\n  cursor: ns-resize;\n  position: absolute;\n  right: 8px;\n}\n.cdk-drag.cdk-drag-preview[_ngcontent-%COMP%] {\n  \n  --shadow:\n      0 5px 5px -3px rgba(0, 0, 0, .2),\n      0 8px 10px 1px rgba(0, 0, 0, .14),\n      0 3px 14px 2px rgba(0, 0, 0, .12);\n  background-color: #fafafa;\n  box-shadow: var(--shadow);\n  min-height: 50px;\n  \n  padding: 0 !important;\n}\n.cdk-drag.cdk-drag-preview[_ngcontent-%COMP%]   .c-checkbox[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  --drop-bg: #cce8d5;\n  --drop-border: #7fd09c;\n  background: var(--drop-bg);\n  border: 2px dotted var(--drop-border);\n  cursor: ns-resize;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.u-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  -webkit-clip-path: rect(0, 0, 0, 0);\n          clip-path: rect(0, 0, 0, 0);\n  display: block;\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  pointer-events: none;\n  position: absolute;\n  visibility: hidden;\n  width: 1px;\n}\n\n\n.outer[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: #00538a;\n}\n.outer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fafafa;\n  padding: 0 1rem;\n}\na[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rlcm1pbnVzLW9zcy90ZXJtaW51cy1vc3Mvbm9kZV9tb2R1bGVzL0B0ZXJtaW51cy91aS1zdHlsZXMvaGVscGVycy5zY3NzIiwiYXBwcy9zaG93Y2FzZS11aS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGVybWludXMtb3NzL3Rlcm1pbnVzLW9zcy9hcHBzL3Nob3djYXNlLXVpL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QUR1QkY7Ozs7OztFQ2hCRTtBRDZCRjs7RUMxQkU7QUQrQkY7O0VDNUJFO0FEaUNGOztFQzlCRTtBRG9DRjtFQUNFLGdFQUEwQjtFQUMxQiwrREFBaUM7RUFDakMsK0RBQXlCO0VBQ3pCLDhEQUFnQztBQ2xDbEM7QUQ0Q0E7O0VDeENFO0FEd0RGOzs7Ozs7Ozs7Ozs7RUMzQ0U7QURvSEY7O0VDakhFO0FEOElGOzs7Ozs7Ozs7O0VDbklFO0FEMEpGOzs7Ozs7OztFQ2pKRTtBRGdLRjs7Ozs7RUMxSkU7QURnTEY7O0VDN0tFO0FEa0xGOztFQy9LRTtBRG9MRjs7RUNqTEU7QUR5TEY7O0VDdExFO0FEMkxGOztFQ3hMRTtBRDZMRjs7RUMxTEU7QUR3TUY7O0VDck1FO0FEK01GOztFQzVNRTtBRHFORjs7Ozs7Ozs7Ozs7O0VDeE1FO0FEd1ZGOzs7Ozs7O0VDaFZFO0FEOFZGOzs7O0VDelZFO0FEaVdGOzs7Ozs7OztFQ3hWRTtBRHNYRjs7Ozs7Ozs7Ozs7RUMxV0U7QUR3WUY7Ozs7OztFQ2pZRTtBRDRZRjs7Ozs7Ozs7Ozs7RUNoWUU7QURtWkY7Ozs7Ozs7RUMzWUU7QUQrY0Y7Ozs7O0VDemNFO0FEbWRGOzs7Ozs7O0VDM2NFO0FEMGVGOzs7Ozs7Ozs7Ozs7RUM3ZEU7QUQrZkY7Ozs7Ozs7Ozs7Ozs7Ozs7RUM5ZUU7QURvZ0JGOzs7Ozs7Ozs7Ozs7OztFQ3JmRTtBRGtoQkY7Ozs7Ozs7OztFQ3hnQkU7QURtaUJGOzs7Ozs7Ozs7Ozs7O0VDcmhCRTtBRDBpQkY7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDeGhCRTtBRG9rQkY7Ozs7Ozs7OztFQzFqQkU7QUQra0JGOztFQzVrQkU7QUR5bUJGOzs7Ozs7Ozs7O0VDOWxCRTtBRHFuQkY7Ozs7Ozs7O0VDNW1CRTtBRGlwQkY7O0VDOW9CRTtBRG1wQkY7O0VDaHBCRTtBRHdwQkY7O0VDcnBCRTtBRDBwQkY7O0VDdnBCRTtBRDRwQkY7O0VDenBCRTtBRDhwQkY7O0VDM3BCRTtBRGdxQkY7O0VDN3BCRTtBRG1xQkY7O0VDaHFCRTtBRHFxQkY7O0VDbHFCRTtBRHVxQkY7O0VDcHFCRTtBRHlxQkY7O0VDdHFCRTtBRDJxQkY7O0VDeHFCRTtBRDhxQkY7O0VDM3FCRTtBRGdyQkY7O0VDN3FCRTtBRGtyQkY7O0VDL3FCRTtBRG9yQkY7O0VDanJCRTtBRHNyQkY7O0VDbnJCRTtBRDJyQkY7O0VDeHJCRTtBRDZyQkY7O0VDMXJCRTtBRCtyQkY7O0VDNXJCRTtBRGtzQkY7O0VDL3JCRTtBRG9zQkY7O0VDanNCRTtBRHNzQkY7O0VDbnNCRTtBRHlzQkY7O0VDdHNCRTtBRDJzQkY7O0VDeHNCRTtBRDZzQkY7O0VDMXNCRTtBRGd0QkY7Ozs7RUMzc0JFO0FENHZCRjs7Ozs7Ozs7OztFQ2p2QkU7QUQ4d0JGOztFQzN3QkU7QUR5eEJGOzs7Ozs7OztFQ2h4QkU7QURxekJGOztFQ2x6QkU7QURzMUJGOztFQ24xQkU7QUR1M0JGOztFQ3AzQkU7QUQwNUJGOztFQ3Y1QkU7QURvN0JGOzs7Ozs7Ozs7O0VDejZCRTtBRGc4QkY7Ozs7Ozs7O0VDdjdCRTtBRG84QkY7O0VDajhCRTtBRHM4QkY7O0VDbjhCRTtBRDI4QkY7O0VDeDhCRTtBRDY4QkY7O0VDMThCRTtBRCs4QkY7O0VDNThCRTtBRGk5QkY7O0VDOThCRTtBRG05QkY7O0VDaDlCRTtBRHM5QkY7O0VDbjlCRTtBRHc5QkY7O0VDcjlCRTtBRDA5QkY7O0VDdjlCRTtBRDQ5QkY7O0VDejlCRTtBRDg5QkY7O0VDMzlCRTtBRGkrQkY7O0VDOTlCRTtBRG0rQkY7O0VDaCtCRTtBRHErQkY7O0VDbCtCRTtBRHUrQkY7O0VDcCtCRTtBRHkrQkY7O0VDdCtCRTtBRDgrQkY7O0VDMytCRTtBRGcvQkY7O0VDNytCRTtBRGsvQkY7O0VDLytCRTtBRHEvQkY7O0VDbC9CRTtBRHUvQkY7O0VDcC9CRTtBRHkvQkY7O0VDdC9CRTtBRDQvQkY7O0VDei9CRTtBRDgvQkY7O0VDMy9CRTtBRGdnQ0Y7O0VDNy9CRTtBRG1nQ0Y7Ozs7RUM5L0JFO0FEK2lDRjs7Ozs7Ozs7OztFQ3BpQ0U7QURpa0NGOztFQzlqQ0U7QUQ0a0NGOzs7Ozs7OztFQ25rQ0U7QUR3bUNGOztFQ3JtQ0U7QUR5b0NGOztFQ3RvQ0U7QUQwcUNGOztFQ3ZxQ0U7QUQ2c0NGOztFQzFzQ0U7QUR1dUNGOzs7Ozs7Ozs7O0VDNXRDRTtBRG12Q0Y7Ozs7Ozs7O0VDMXVDRTtBRHV2Q0Y7Ozs7RUNsdkNFO0FEMHZDRjs7Ozs7Ozs7RUNqdkNFO0FEK3dDRjs7Ozs7Ozs7Ozs7RUNud0NFO0FEa3lDRjtFQUVFLGtCQUFrQjtBQ2p5Q3BCO0FEK3hDQTtFQU1JLHNEQUFxRDtBQ2p5Q3pEO0FEMnhDQTtFQVVJLGNBMTZCMkI7RUEyNkIzQixpQkE1SE87RUE2SFAsa0JBQWtCO0VBQ2xCLFVBOUR3QjtBQ251QzVCO0FEb3hDQTtFQWtCSSw2RUFBQTtFQUNBOzs7dUNBQVM7RUFJVCx5QkE5OEJ3QjtFQSs4QnhCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFFaEIseURBQUE7RUFDQSxxQkFBcUI7QUNueUN6QjtBRHV3Q0E7RUErQk0saUJBdjhDVTtBQ3FLaEI7QUR3eUNBO0VBR0Usa0JBQVU7RUFDVixzQkFBYztFQUNkLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFFckMsaUJBOUpTO0VBK0pULHNEQUFxRDtBQ3h5Q3ZEO0FEMnlDQTs7Ozs7OztFQ2x5Q0U7QUQ4ekNGOzs7Ozs7O0VDdHpDRTtBRGkxQ0Y7Ozs7O0VDMzBDRTtBRHUxQ0Y7Ozs7Ozs7O0VDOTBDRTtBRGczQ0Y7Ozs7Ozs7OztFQ3QyQ0U7QUQwM0NGOzs7Ozs7Ozs7Ozs7OztFQzMyQ0U7QURtNUNGOzs7Ozs7OztFQzE0Q0U7QUQyNUNGOzs7OztFQ3I1Q0U7QURnN0NGOztFQzc2Q0U7QURrN0NGOztFQy82Q0U7QURvN0NGOztFQ2o3Q0U7QUR5N0NGOztFQ3Q3Q0U7QUQyN0NGOztFQ3g3Q0U7QUQ2N0NGOztFQzE3Q0U7QUR3OENGOztFQ3I4Q0U7QUQrOENGOztFQzU4Q0U7QURxOUNGOzs7Ozs7Ozs7Ozs7RUN4OENFO0FEd2xERjs7Ozs7OztFQ2hsREU7QUQ4bERGOzs7O0VDemxERTtBRGltREY7Ozs7Ozs7O0VDeGxERTtBRHNuREY7Ozs7Ozs7Ozs7O0VDMW1ERTtBRHdvREY7Ozs7O0VDbG9ERTtBRHFwREY7Ozs7Ozs7O0VDNW9ERTtBRHlxREY7O0VDdHFERTtBRDJxREY7O0VDeHFERTtBRGdyREY7O0VDN3FERTtBRGtyREY7O0VDL3FERTtBRG9yREY7O0VDanJERTtBRHNyREY7O0VDbnJERTtBRHdyREY7O0VDcnJERTtBRDJyREY7O0VDeHJERTtBRDZyREY7O0VDMXJERTtBRCtyREY7O0VDNXJERTtBRGlzREY7O0VDOXJERTtBRG1zREY7O0VDaHNERTtBRHNzREY7O0VDbnNERTtBRHdzREY7O0VDcnNERTtBRDBzREY7O0VDdnNERTtBRDRzREY7O0VDenNERTtBRDhzREY7O0VDM3NERTtBRG10REY7O0VDaHRERTtBRHF0REY7O0VDbHRERTtBRHV0REY7O0VDcHRERTtBRDB0REY7O0VDdnRERTtBRDR0REY7O0VDenRERTtBRDh0REY7O0VDM3RERTtBRGl1REY7O0VDOXRERTtBRG11REY7O0VDaHVERTtBRHF1REY7O0VDbHVERTtBRHd1REY7Ozs7RUNudURFO0FEb3hERjs7Ozs7Ozs7OztFQ3p3REU7QURzeURGOztFQ255REU7QURpekRGOzs7Ozs7OztFQ3h5REU7QUQ2MERGOztFQzEwREU7QUQ4MkRGOztFQzMyREU7QUQrNERGOztFQzU0REU7QURzN0RGOzs7O0VDajdERTtBRHMvREY7Ozs7OztFQy8rREU7QUQwL0RGOzs7Ozs7Ozs7OztFQzkrREU7QURpZ0VGOzs7Ozs7O0VDei9ERTtBRDZqRUY7Ozs7O0VDdmpFRTtBRGlrRUY7Ozs7Ozs7RUN6akVFO0FEd2xFRjs7Ozs7Ozs7Ozs7O0VDM2tFRTtBRDZtRUY7Ozs7Ozs7Ozs7Ozs7Ozs7RUM1bEVFO0FEa25FRjs7Ozs7Ozs7Ozs7Ozs7RUNubUVFO0FEZ29FRjs7Ozs7Ozs7O0VDdG5FRTtBRGlwRUY7Ozs7Ozs7Ozs7Ozs7RUNub0VFO0FEd3BFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7RUN0b0VFO0FEa3JFRjs7Ozs7Ozs7O0VDeHFFRTtBRDZyRUY7Ozs7RUN4ckVFO0FEZ3NFRjs7Ozs7Ozs7RUN2ckVFO0FEcXRFRjs7Ozs7Ozs7Ozs7RUN6c0VFO0FEcXVFRjs7Ozs7RUMvdEVFO0FEMnVFRjs7Ozs7Ozs7RUNsdUVFO0FEb3dFRjs7Ozs7Ozs7O0VDMXZFRTtBRDh3RUY7Ozs7Ozs7Ozs7Ozs7O0VDL3ZFRTtBRHV5RUY7Ozs7Ozs7O0VDOXhFRTtBRCt5RUY7Ozs7O0VDenlFRTtBRGcwRUY7Ozs7OztFQ3p6RUU7QUQwMEVGOzs7Ozs7OztFQ2owRUU7QURxMUVGOzs7Ozs7Ozs7Ozs7OztFQ3QwRUU7QUR3M0VGOztFQ3IzRUU7QUQwM0VGOztFQ3YzRUU7QUQ0M0VGOztFQ3ozRUU7QURpNEVGOztFQzkzRUU7QURtNEVGOztFQ2g0RUU7QURxNEVGOztFQ2w0RUU7QURnNUVGOztFQzc0RUU7QUR1NUVGOztFQ3A1RUU7QUQ2NUVGOzs7Ozs7Ozs7Ozs7RUNoNUVFO0FEZ2lGRjs7Ozs7OztFQ3hoRkU7QURzaUZGOzs7OztFQ2hpRkU7QUQ0aUZGOzs7Ozs7OztFQ25pRkU7QURxa0ZGOzs7Ozs7Ozs7RUMzakZFO0FEK2tGRjs7Ozs7Ozs7Ozs7Ozs7RUNoa0ZFO0FEd21GRjs7Ozs7Ozs7RUMvbEZFO0FEZ25GRjs7Ozs7RUMxbUZFO0FEbW9GRjs7RUNob0ZFO0FEbW9GRjtFQXBCRSxTQUFTO0VBRVQsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUUzQixjQUFjO0VBQ2QsV0FOeUI7RUFPekIsWUFQeUI7RUFRekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQWJ5QjtBQ2ptRjNCO0FEMG5GQTs7Ozs7O0VDbG5GRTtBRG1vRkY7Ozs7Ozs7O0VDMW5GRTtBQ3Z4Q0Y7RUZzckdJLDBIQTlRd0I7RUV0NkYxQix5QkYrK0JzQjtBQzBTeEI7QUMzeENBO0VBS0ksY0ZnOEJ3QjtFRS83QnhCLGVBQWU7QUQweENuQjtBQ3R4Q0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBRHl4Q2QiLCJmaWxlIjoiYXBwcy9zaG93Y2FzZS11aS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG1peGluIHRoYXQgZW5hYmxlcyBoaWRkZW4gc3R5bGVzIGZvciBhIG5lc3RlZCBjZGsgY2xhc3NcbiAqL1xuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgICRzbWFsbGVzdC1hZGp1c3RtZW50OiAxcHg7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblxuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogJHNtYWxsZXN0LWFkanVzdG1lbnQ7XG4gICAgbWFyZ2luOiAtJHNtYWxsZXN0LWFkanVzdG1lbnQ7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6ICRzbWFsbGVzdC1hZGp1c3RtZW50O1xuICB9XG59XG5cbi8qKlxuICogQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4gKiB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4gKiBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbiAqIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4gKiAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4gKi9cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUpIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgcHJpbWFyeSBlYXNpbmcgZGVmaW5pdGlvblxuICovXG4kZy1lYXNpbmc6IGN1YmljLWJlemllciguMjYsIC44NiwgLjQ0LCAuOTg1KSAhZGVmYXVsdDtcblxuLyoqXG4gKiBUaGUgbWF0ZXJpYWwgYmFja2dyb3VuZCBlYXNpbmcgZGVmaW5pdGlvblxuICovXG4kZy1tYXRlcmlhbC1iYWNrZ3JvdW5kLWVhc2luZzogY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWRlZmF1bHQ7XG5cbi8qKlxuICogVGhlIG1hdGVyaWFsIHNoYWRvdyBlYXNpbmcgZGVmaW5pdGlvblxuICovXG4kZy1tYXRlcmlhbC1zaGFkb3ctZWFzaW5nOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSAhZGVmYXVsdDtcblxuLy8gQW5pbWF0aW9ucyBmcm9tIE1hdGVyaWFsXG46cm9vdCB7XG4gIC0tc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IHZhcigtLXRzLWFuaW1hdGlvbi10aW1lLWR1cmF0aW9uLTQwMCk7XG4gIC0tc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgLS1zd2lmdC1lYXNlLWluLWR1cmF0aW9uOiB2YXIoLS10cy1hbmltYXRpb24tdGltZS1kdXJhdGlvbi0zMDApO1xuICAtLXN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbn1cblxuLy8gQ3VycmVudGx5IHVzZWQgaW4gZXhwYW5zaW9uIHBhbmVsIGNvbXBvbmVudFxuJGctYW5pbWF0aW9uLWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSAhZGVmYXVsdDtcbiRnLWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuJGctdGFiLWFuaW1hdGlvbi1kdXJhdGlvbjogMjAwbXMgIWRlZmF1bHQ7XG4kZy10YWItZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllciguMzUsIDAsIC4yNSwgMSkgIWRlZmF1bHQ7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgcG9zc2libGUgYnJlYWtwb2ludHNcbiAqL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdsYXlvdXQteHMnLFxuICAnbGF5b3V0LWd0LXhzJyxcbiAgJ2xheW91dC1zbScsXG4gICdsYXlvdXQtZ3Qtc20nLFxuICAnbGF5b3V0LW1hdCcsXG4gICdsYXlvdXQtZ3QtbWF0JyxcbiAgJ2xheW91dC1sZycsXG4gICdsYXlvdXQtZ3QtbGcnLFxuICAnbGF5b3V0LXhsJ1xuKTtcblxuXG4vKipcbiAqIFdyYXAgc3R5bGVzIGluIGEgbWVkaWEgcXVlcnlcbiAqXG4gKiBAcGFyYW0gJHBvaW50XG4gKiAgVGhlIGRlc2lyZWQgYnJlYWtwb2ludFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBicChsYXlvdXQtZ3QteHMpIHtcbiAqICAgIHdpZHRoOiAzMCU7XG4gKiAgfVxuICogIEBpbmNsdWRlIGJwKGxheW91dC14cykge1xuICogICAgd2lkdGg6IDEwMCU7XG4gKiAgfVxuICovXG5AbWl4aW4gYnAoJHBvaW50KSB7XG4gIEBpZiBpbmRleCgkYnJlYWtwb2ludHMsICRwb2ludCkge1xuICAgIEBpZiAkcG9pbnQgPT0gJ2xheW91dC14cycge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkcG9pbnQgPT0gJ2xheW91dC1ndC14cycge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkcG9pbnQgPT0gJ2xheW91dC1zbScge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRwb2ludCA9PSAnbGF5b3V0LWd0LXNtJyB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRwb2ludCA9PSAnbGF5b3V0LW1hdCcge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkcG9pbnQgPT0gJ2xheW91dC1ndC1tYXQnIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRwb2ludCA9PSAnbGF5b3V0LWxnJyB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkcG9pbnQgPT0gJ2xheW91dC1ndC1sZycge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJHBvaW50ID09ICdsYXlvdXQteGwnIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ1RoZXJlIGlzIG5vIGJyZWFrcG9pbnQgYCN7JHBvaW50fWAgaW4gdGhpcyBsaXN0OyBjaG9vc2Ugb25lIG9mOiAjeyRicmVha3BvaW50c30nO1xuICB9XG59XG5cbi8qKlxuICogVGhlIG1hcCBvZiBhdmFpbGFibGUgY3Vyc29yc1xuICovXG4kZy1jdXJzb3JzOiAoXG4gIC8qIEluZGljYXRlcyBhbiBhbGlhcyBvciBjb3B5IHdpbGwgYmUgbWFkZSAqL1xuICBhbGlhcyxcbiAgLyogTGV0IHRoZSBicm93c2VyIGRlY2lkZSAqL1xuICBhdXRvLFxuICAvKiBJbmRpY2F0ZXMgYWJpbGl0eSB0byByZXNpemUgYSBwaWVjZSBvZiB0aGUgZG9tOyBvZnRlbiBhIHRhYmxlIGNvbHVtbiAqL1xuICBjb2wtcmVzaXplLFxuICAvKiBJbmRpY2F0ZXMgYWJpbGl0eSB0byBjb3B5ICovXG4gIGNvcHksXG4gIC8qIFJlc2V0IHRvIHRoZSBkZWZhdWx0IGN1cnNvciAqL1xuICBkZWZhdWx0LFxuICAvKiBJbmRpY2F0ZXMgaGVscCBpcyBhdmFpbGFibGUgKi9cbiAgaGVscCxcbiAgLyogSW5kaWNhdGVzIHRoZSBhYmlsaXR5IHRvIGRyYWcgYW4gaXRlbSAqL1xuICBtb3ZlLFxuICAvKiBJbmRpY2F0ZXMgbm8gYXZhaWxhYmxlIGludGVyYWN0aW9uICovXG4gIG5vdC1hbGxvd2VkLFxuICAvKiBJbmRpY2F0ZXMgdGhlIGFiaWxpdHkgdG8gbW92ZSBOb3J0aCBhbmQgU291dGggKi9cbiAgbnMtcmVzaXplLFxuICAvKiBJbmRpY2F0ZXMgaW50ZXJhY3Rpb24gKi9cbiAgcG9pbnRlcixcbiAgLyogSW5kaWNhdGVzIHRleHQgY29udHJvbHMgKi9cbiAgdGV4dCxcbik7XG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNwYWNlIGZyb20gdGhlICRnLWN1cnNvcnMgbGlzdC5cbiAqXG4gKiBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gZW5mb3JjZSB3aGljaCBjdXJzb3JzIGNhbiBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBjdXJzb3IgdmFsdWUgdG8gdXNlLiBEZWZhdWx0OiBhdXRvXG4gKiBAZXhhbXBsZVxuICogIGN1cnNvcjogY3Vyc29yKCk7XG4gKiAgY3Vyc29yOiBjdXJzb3IocG9pbnRlcik7XG4gKi9cbkBmdW5jdGlvbiBjdXJzb3IoJHR5cGU6IGF1dG8pIHtcbiAgJGluZGV4OiBpbmRleCgkZy1jdXJzb3JzLCAkdHlwZSk7XG5cbiAgLy8gVmVyaWZ5IHRoZSB0eXBlIGV4aXN0c1xuICBAaWYgKCRpbmRleCA9PSBudWxsKSB7XG4gICAgQGVycm9yICdJbnZhbGlkIGN1cnNvciB0eXBlIG5hbWU6IGAjeyR0eXBlfWAuIEFsbG93ZWQgdHlwZXM6IFwiI3skZy1jdXJzb3JzfVwiJztcbiAgfVxuXG4gIEByZXR1cm4gbnRoKCRnLWN1cnNvcnMsICRpbmRleCk7XG59XG5cblxuLyoqXG4gKiBJbmNsdWRlIGEgY3VzdG9tIGN1cnNvclxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBjdXJzb3IgdmFsdWUgdG8gdXNlLlxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBjdXJzb3I7XG4gKiAgQGluY2x1ZGUgY3Vyc29yKHBvaW50ZXIpO1xuICovXG5AbWl4aW4gY3Vyc29yKCR0eXBlKSB7XG4gIGN1cnNvcjogY3Vyc29yKCR0eXBlKTtcbn1cblxuXG5cbi8qKlxuICogUmVzZXQgYnV0dG9uIHN0eWxlc1xuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgYnV0dG9uLWJhc2U7XG4gKi9cbkBtaXhpbiBidXR0b24tYmFzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogY3Vyc29yKHBvaW50ZXIpO1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuXG4vLyBOT1RFOiBEaXNhYmxpbmcgdGhlIHN0cmljdCB2YWx1ZSBydWxlIGFzIHdlIG5lZWQgdG8gYnVpbGQgb3VyIHR5cGUgc3R5bGVzXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBzY2FsZS11bmxpbWl0ZWQvZGVjbGFyYXRpb24tc3RyaWN0LXZhbHVlXG5cblxuLyoqXG4gKiBUaGUgYmFzZSB0eXBlZmFjZVxuICovXG4kdHlwZV9fZmFtaWx5LS1iYXNlOiAje1JvYm90bywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZn0gIWRlZmF1bHQ7XG5cbi8qKlxuICogVGhlIG1vbm9zcGFjZWQgdHlwZWZhY2UgZmFtaWx5XG4gKi9cbiR0eXBlX19mYW1pbHktLW1vbm9zcGFjZWQ6ICN7J0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCAnRGVqYVZ1IFNhbnMgTW9ubycsIG1vbm9zcGFjZX0gIWRlZmF1bHQ7XG5cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBlZmFjZXNcbiAqL1xuJHR5cG9ncmFwaHktdHlwZWZhY2VzOiAoXG4gICdwcmltYXJ5JzogJHR5cGVfX2ZhbWlseS0tYmFzZSxcbiAgJ21vbm9zcGFjZWQnOiAkdHlwZV9fZmFtaWx5LS1tb25vc3BhY2VkXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIHR5cG9ncmFwaHkgc2l6ZVxuICovXG4kdHlwZV9fc2l6ZS0tYmFzZTogMTZweCAhZGVmYXVsdDtcblxuLyoqXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHdlaWdodFxuICovXG4kdHlwZV9fd2VpZ2h0LS1iYXNlOiA0MDAgIWRlZmF1bHQ7XG5cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBvZ3JhcGh5IGZvcm1hdHNcbiAqL1xuJHR5cG9ncmFwaHktZm9ybWF0czogKFxuICAnZGlzcGxheScsXG4gICdoZWFkbGluZScsXG4gICd0aXRsZScsXG4gICdzdWJoZWFkJyxcbiAgJ2JvZHknLFxuICAnY2FwdGlvbicsXG4gICdmaXhlZHdpZHRoJyxcbiAgJ2hpbnQnXG4pO1xuXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwb2dyYXBoeSBsZXZlbHMgZm9yIHRoZSBgZGlzcGxheWAgZm9ybWF0XG4gKi9cbiR0eXBvZ3JhcGh5LWRpc3BsYXktbGV2ZWxzOiAoXG4gIDEsXG4gIDIsXG4gIDMsXG4gIDRcbik7XG5cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBvZ3JhcGh5IGxldmVscyBmb3IgdGhlIGBib2R5YCBmb3JtYXRcbiAqL1xuJHR5cG9ncmFwaHktYm9keS1sZXZlbHM6IChcbiAgMSxcbiAgMlxuKTtcblxuXG4vKipcbiAqIFJldHVybiB0eXBvZ3JhcGh5IHN0eWxlcyBiYXNlZCBvbiB0aGUgZm9ybWF0IGFuZCBsZXZlbFxuICpcbiAqIEBwYXJhbSAkZm9ybWF0XG4gKiAgT25lIG9mIHRoZSBhdmFpbGFibGUgZm9ybWF0cyBkZWZpbmVkIHdpdGhpbiAkdHlwb2dyYXBoeS1mb3JtYXRzLiBEZWZhdWx0OiAnYm9keScuXG4gKiBAcGFyYW0gJGxldmVsXG4gKiAgT25lIG9mIHRoZSBhY2NlcHRlZCBsZXZlbHMgZm9yIHRoZSBwYXNzZWQgaW4gZm9ybWF0LiBEZWZhdWx0OiAxXG4gKiBAcGFyYW0gJHR5cGVmYWNlXG4gKiAgT25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZWZhY2VzIGRlZmluZWQgaW4gJHR5cG9ncmFwaHktdHlwZWZhY2VzLiBEZWZhdWx0OiAncHJpbWFyeSdcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdHlwb2dyYXBoeTtcbiAqICBAaW5jbHVkZSB0eXBvZ3JhcGh5KGRpc3BsYXksIDQpO1xuICovXG5AbWl4aW4gdHlwb2dyYXBoeSgkZm9ybWF0OiAnYm9keScsICRsZXZlbDogMSwgJHR5cGVmYWNlOiAncHJpbWFyeScpIHtcbiAgLy8gVmVyaWZ5IHRoZSBmb3JtYXQgaXMgdmFsaWRcbiAgQGlmIGluZGV4KCR0eXBvZ3JhcGh5LWZvcm1hdHMsICRmb3JtYXQpID09IG51bGwge1xuICAgIEBlcnJvciAnSW52YWxpZCB0eXBvZ3JhcGh5IGZvcm1hdDogYCN7JGZvcm1hdH1gLiBBbGxvd2VkIGZvcm1hdHM6ICN7JHR5cG9ncmFwaHktZm9ybWF0c30nO1xuICB9XG5cbiAgLy8gVmVyaWZ5IHRoZSB0eXBlZmFjZSBpcyB2YWxpZFxuICBAaWYgbm90KG1hcC1oYXMta2V5KCR0eXBvZ3JhcGh5LXR5cGVmYWNlcywgJHR5cGVmYWNlKSkge1xuICAgICRhbGxvd2VkOiBtYXAta2V5cygkdHlwb2dyYXBoeS10eXBlZmFjZXMpO1xuICAgIEBlcnJvciAnSW52YWxpZCB0eXBvZ3JhcGh5IHR5cGVmYWNlOiBgI3skdHlwZWZhY2V9YC4gQWxsb3dlZCB0eXBlZmFjZXM6ICN7JGFsbG93ZWR9JztcbiAgfSBAZWxzZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHR5cG9ncmFwaHktdHlwZWZhY2VzLCAkdHlwZWZhY2UpO1xuICB9XG5cblxuICAvLyBESVNQTEFZXG4gIEBpZiAkZm9ybWF0ID09ICdkaXNwbGF5JyB7XG4gICAgLy8gVmVyaWZ5IHRoZSBsZXZlbCBpcyB2YWxpZCBmb3IgdGhpcyBmb3JtYXRcbiAgICBAaWYgaW5kZXgoJHR5cG9ncmFwaHktZGlzcGxheS1sZXZlbHMsICRsZXZlbCkgPT0gbnVsbCB7XG4gICAgICBAZXJyb3IgJ0ludmFsaWQgZGlzcGxheSBmb3JtYXQgbGV2ZWw6IGAjeyRsZXZlbH1gLiBBbGxvd2VkIGxldmVsczogI3skdHlwb2dyYXBoeS1kaXNwbGF5LWxldmVsc30nO1xuICAgIH1cblxuICAgIEBpZiAkbGV2ZWwgPT0gMSB7XG4gICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgQGlmICRsZXZlbCA9PSAyIHtcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICB9XG5cbiAgICBAaWYgJGxldmVsID09IDMge1xuICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAwNWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgfVxuXG4gICAgQGlmICRsZXZlbCA9PSA0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTEycHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDFlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMTJweDtcbiAgICB9XG4gIH1cblxuXG4gIC8vIEhFQURMSU5FXG4gIEBpZiAkZm9ybWF0ID09ICdoZWFkbGluZScge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG5cblxuICAvLyBUSVRMRVxuICBAaWYgJGZvcm1hdCA9PSAndGl0bGUnIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAwNWVtO1xuICB9XG5cblxuICAvLyBTVUJIRUFEXG4gIEBpZiAkZm9ybWF0ID09ICdzdWJoZWFkJyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5cblxuICAvLyBCT0RZXG4gIEBpZiAkZm9ybWF0ID09ICdib2R5JyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDFlbTtcblxuICAgIC8vIFZlcmlmeSB0aGUgbGV2ZWwgaXMgdmFsaWQgZm9yIHRoaXMgZm9ybWF0XG4gICAgQGlmIGluZGV4KCR0eXBvZ3JhcGh5LWJvZHktbGV2ZWxzLCAkbGV2ZWwpID09IG51bGwge1xuICAgICAgQGVycm9yICdJbnZhbGlkIGJvZHkgZm9ybWF0IGxldmVsOiBgI3skbGV2ZWx9YC4gQWxsb3dlZCBsZXZlbHM6ICN7JHR5cG9ncmFwaHktYm9keS1sZXZlbHN9JztcbiAgICB9XG5cbiAgICBAaWYgJGxldmVsID09IDEge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgLy8gVE9ETzogb3ZlcndyaXRlIGluIGZpbGVzIHJhdGhlciB0aGFuIHRoaXMgbmVzdGVkIGNoYWluICh0b28gc3BlY2lmaWMpIGh0dHBzOi8vZ2l0aHViLmNvbS9HZXRUZXJtaW51cy90ZXJtaW51cy11aS9pc3N1ZXMvMTE1MlxuICAgICAgLy8gRG9uJ3QgYXBwbHkgY3VzdG9tIGxpbmUtaGVpZ2h0IHRvIGJ1dHRvbnNcbiAgICAgICY6bm90KC5jLWJ1dHRvbikge1xuICAgICAgICAmOm5vdCguYy1pbnB1dCkge1xuICAgICAgICAgICY6bm90KC5jLXNlbGVjdCkge1xuICAgICAgICAgICAgJjpub3QoLnRzLWNoZWNrYm94KSB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkbGV2ZWwgPT0gMiB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gQ0FQVElPTlxuICBAaWYgJGZvcm1hdCA9PSAnY2FwdGlvbicge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAyZW07XG4gIH1cblxuXG4gIC8vIEZJWEVEV0lEVEhcbiAgQGlmICRmb3JtYXQgPT0gJ2ZpeGVkd2lkdGgnIHtcbiAgICBmb250LWZhbWlseTogJHR5cGVfX2ZhbWlseS0tbW9ub3NwYWNlZDtcbiAgfVxuXG5cbiAgLy8gSGludHMgKGZvciBpbnB1dHMpXG4gIEBpZiAkZm9ybWF0ID09ICdoaW50JyB7XG4gICAgY29sb3I6IGNvbG9yKHV0aWxpdHkpO1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuXG4vKipcbiAqIFRydW5jYXRlIG92ZXJmbG93aW5nIHRleHQgd2l0aCBhbiBlbGxpcHNpc1xuICpcbiAqIEBtaXhpbiB0eXBvZ3JhcGh5XG4gKiBAc2VjdGlvbiBTdHlsZSBIZWxwZXJzXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHRydW5jYXRlLW92ZXJmbG93O1xuICovXG5AbWl4aW4gdHJ1bmNhdGUtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKipcbiAqIFRoZSBzcGFjaW5nIGRlZmF1bHRcbiAqXG4gKiBAc2VjdGlvbiBTcGFjaW5nXG4gKi9cbiRnLXNwYWNpbmc6IDE2cHggIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxheW91dCBzcGFjaW5nc1xuICpcbiAqIFNtYWxsOiAxMiwgOCwgNFxuICogQmFzZTogMTZcbiAqIExhcmdlOiAyNCwgMzIsIDQwLCA0OCwgNTYsIDcyLCA5NlxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuJGctc3BhY2luZ3M6IChcbiAgc21hbGw6ICAoXG4gICAgMjogZmxvb3IoJGctc3BhY2luZyAvIDQpLFxuICAgIDE6IGZsb29yKCRnLXNwYWNpbmcgLyAyKSxcbiAgICAwOiBmbG9vcigkZy1zcGFjaW5nIC0gNCksXG4gICksXG4gIGRlZmF1bHQ6IChcbiAgICAwOiAkZy1zcGFjaW5nLFxuICApLFxuICBsYXJnZTogKFxuICAgIDA6IGNlaWwoJGctc3BhY2luZyAvIDIgKiAzKSxcbiAgICAxOiBjZWlsKCRnLXNwYWNpbmcgLyAyICogNCksXG4gICAgMjogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDUpLFxuICAgIDM6IGNlaWwoJGctc3BhY2luZyAvIDIgKiA2KSxcbiAgICA0OiBjZWlsKCRnLXNwYWNpbmcgLyAyICogNyksXG4gICAgNTogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDkpLFxuICAgIDY6IGNlaWwoJGctc3BhY2luZyAvIDIgKiAxMiksXG4gIClcbik7XG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNwYWNlIGZyb20gdGhlICRnLXNwYWNpbmdzIG1hcFxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBzcGFjaW5nIG1hcCB0byB1c2UuIERlZmF1bHQ6IGRlZmF1bHRcbiAqIEBwYXJhbSAkc2l6ZVxuICogIFRoZSB2YWx1ZSBkZXNpcmVkIGZyb20gdGhlIG1hcC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGRlZmF1bHQpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UsIDQpO1xuICovXG5AZnVuY3Rpb24gc3BhY2luZygkdHlwZTogZGVmYXVsdCwgJHNpemU6IDApIHtcbiAgLy8gVmVyaWZ5IHRoZSB0eXBlIGV4aXN0c1xuICBAaWYgbm90KG1hcC1oYXMta2V5KCRnLXNwYWNpbmdzLCAkdHlwZSkpIHtcbiAgICAkYWxsb3dlZC10eXBlczogbWFwLWtleXMoJGctc3BhY2luZ3MpO1xuICAgIEBlcnJvciAnSW52YWxpZCBzcGFjaW5nIHR5cGUgbmFtZTogYCN7JHR5cGV9YC4gQWxsb3dlZCB0eXBlOiAjeyRhbGxvd2VkLXR5cGVzfSc7XG4gIH1cblxuICAvLyBWZXJpZnkgdGhlIHNpemVcbiAgQGlmIG5vdChtYXAtaGFzLWtleShtYXAtZ2V0KCRnLXNwYWNpbmdzLCAkdHlwZSksICRzaXplKSkge1xuICAgICRhbGxvd2VkLXNpemVzOiBtYXAta2V5cyhtYXAtZ2V0KCRnLXNwYWNpbmdzLCAkdHlwZSkpO1xuICAgIEBlcnJvciAnSW52YWxpZCBzaXplOiBgI3skc2l6ZX1gLiBBbGxvd2VkIHNpemVzIGZvciBgI3skdHlwZX1gIGFyZTogI3skYWxsb3dlZC1zaXplc30nO1xuICB9XG5cbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGctc3BhY2luZ3MsICR0eXBlKSwgJHNpemUpO1xufVxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBtYXgtbGluZS1sZW5ndGhcblxuLyoqXG4gKiBCb3ggU2hhZG93IHZhbHVlcyBmcm9tIE1hdGVyaWFsIFNoYWRvdyBJbnRlcnBvbGF0b3JcbiAqXG4gKiAtIEV4aXN0aW5nIGxpYnJhcnkgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vcHJlc3RvcGFzdG8vU0NTUy1NYXRlcmlhbC1TaGFkb3dzXG4gKiAtIEFuZ3VsYXIgTWF0ZXJpYWwgZGVzaWduIG5vdGVzIGhlcmU6IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVczTkdTTHFEWnpqYkJCTFcyQzZ5XzZOVXh0dmRaQVZhSnZnNThMWTNRMEUvcHJldmlld1xuICogLSBSZWZlcmVuY2UgQ29kZVBlbjogaHR0cHM6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFk/ZWRpdG9ycz0wMDFcbiAqL1xuXG4vLyBzdHlsZWxpbnQtZW5hYmxlIG1heC1saW5lLWxlbmd0aFxuXG5cbi8qKlxuICogU2hhZG93IGNvbG9ycy5cbiAqIGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFlcbiAqXG4gKiAtIFVNQlJBOiBcIkEgY29uaWNhbCBzaGFkb3cgZXhjbHVkaW5nIGFsbCBsaWdodCBmcm9tIGEgZ2l2ZW4gc291cmNlOyBfc3BlY2lmaWNhbGx5XzogdGhlIGNvbmljYWxcbiAqIHBhcnQgb2YgdGhlIHNoYWRvdyBvZiBhIGNlbGVzdGlhbCBib2R5IGV4Y2x1ZGluZyBhbGwgbGlnaHQgZnJvbSB0aGUgcHJpbWFyeSBzb3VyY2VcIlxuICogLSBQRU5VTUJSQTogXCJBIHNwYWNlIG9mIHBhcnRpYWwgaWxsdW1pbmF0aW9uIChhcyBpbiBhbiBlY2xpcHNlKSBiZXR3ZWVuIHRoZSBwZXJmZWN0IHNoYWRvdyBvbiBhbGxcbiAqIHNpZGVzIGFuZCB0aGUgZnVsbCBsaWdodFwiXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LUNvbG9yc1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBwbHVnaW4vc3R5bGVsaW50LW5vLWluZGlzdGluZ3Vpc2hhYmxlLWNvbG9yc1xuJGtleS11bWJyYTogcmdiYSgwLCAwLCAwLCAuMik7XG4ka2V5LXBlbnVtYnJhOiByZ2JhKDAsIDAsIDAsIC4xNCk7XG4kYW1iaWVudDogcmdiYSgwLCAwLCAwLCAuMTIpO1xuLy8gc3R5bGVsaW50LWVuYWJsZSBwbHVnaW4vc3R5bGVsaW50LW5vLWluZGlzdGluZ3Vpc2hhYmxlLWNvbG9yc1xuXG5cbi8qKlxuICogSGFuZC1kZXNpZ25lZCByZWZlcmVuY2Ugc2hhZG93IHNldHNcbiAqXG4gKiBTb3VyY2U6IGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFlcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctU2V0c1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4kcmVmZXJlbmNlLXNoYWRvd3M6IChcbiAgKFxuICAgIGVsZXZhdGlvbjogMCxcbiAgICBzaGFkb3dzOiAoXG4gICAgICAoMCwgMCwgMCwgMCwgJGtleS11bWJyYSksXG4gICAgICAoMCwgMCwgMCwgMCwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMCwgMCwgMCwgJGFtYmllbnQpLFxuICAgIClcbiAgKSxcbiAgKFxuICAgIGVsZXZhdGlvbjogMixcbiAgICBzaGFkb3dzOiAoXG4gICAgICAoMCwgMywgMSwgLTIsICRrZXktdW1icmEpLFxuICAgICAgKDAsIDIsIDIsIDAsICRrZXktcGVudW1icmEpLFxuICAgICAgKDAsIDEsIDUsIDAsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDMsXG4gICAgc2hhZG93czogKFxuICAgICAgKDAsIDMsIDMsIC0yLCAka2V5LXVtYnJhKSxcbiAgICAgICgwLCAzLCA0LCAwLCAka2V5LXBlbnVtYnJhKSxcbiAgICAgICgwLCAxLCA4LCAwLCAkYW1iaWVudCksXG4gICAgKVxuICApLFxuICAoXG4gICAgZWxldmF0aW9uOiA0LFxuICAgIHNoYWRvd3M6IChcbiAgICAgICgwLCAyLCA0LCAtMSwgJGtleS11bWJyYSksXG4gICAgICAoMCwgNCwgNSwgMCwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMSwgMTAsIDAsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDYsXG4gICAgc2hhZG93czogKFxuICAgICAgKDAsIDMsIDUsIC0xLCAka2V5LXVtYnJhKSxcbiAgICAgICgwLCA2LCAxMCwgMCwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMSwgMTgsIDAsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDgsXG4gICAgc2hhZG93czogKFxuICAgICAgKDAsIDUsIDUsIC0zLCAka2V5LXVtYnJhKSxcbiAgICAgICgwLCA4LCAxMCwgMSwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMywgMTQsIDIsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDE2LFxuICAgIHNoYWRvd3M6IChcbiAgICAgICgwLCA4LCAxMCwgLTUsICRrZXktdW1icmEpLFxuICAgICAgKDAsIDE2LCAyNCwgMiwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgNiwgMzAsIDUsICRhbWJpZW50KSxcbiAgICApXG4gIClcbik7XG5cblxuLyoqXG4gKiBBbmltYXRpb24gZHVyYXRpb25zXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LUFuaW1hdGlvbi1EdXJhdGlvbnNcbiAqIEBzZWN0aW9uIENvbmZpZyA+IFNoYWRvd3NcbiAqL1xuJG1pbi1hbmltYXRpb24tbGVuZ3RoOiAyNTBtcztcbiRtYXgtYW5pbWF0aW9uLWxlbmd0aDogNDAwbXM7XG5cblxuLyoqXG4gKiBNYXRlcmlhbCBEZXNpZ24gZWxlbWVudCBlbGV2YXRpb25zXG4gKlxuICogU291cmNlOiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbWF0ZXJpYWwtZGVzaWduL2VsZXZhdGlvbi1zaGFkb3dzLmh0bWwjZWxldmF0aW9uLXNoYWRvd3MtZWxldmF0aW9uLWFuZHJvaWRcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctRWxlbWVudHMtTWFwXG4gKiBAc2VjdGlvbiBDb25maWcgPiBTaGFkb3dzXG4gKi9cbiRtYXRlcmlhbC1lbGVtZW50czogKFxuICBkaWFsb2c6ICgyNCksXG4gIHBpY2tlcjogKDI0KSxcbiAgbmF2LWRyYXdlcjogKDE2KSxcbiAgcmlnaHQtZHJhd2VyOiAxNixcbiAgYm90dG9tLXNoZWV0OiAxNixcbiAgZmFiOiA2IDEyIGFjdGl2ZSxcbiAgc3ViLW1lbnUtMzogMTEsXG4gIHN1Yi1tZW51LTI6IDEwLFxuICBzdWItbWVudS0xOiA5LFxuICBtZW51OiA4LFxuICBib3R0b20tbmF2LWJhcjogOCxcbiAgY2FyZDogMiA4IGhvdmVyLFxuICByYWlzZWQtYnV0dG9uOiAyIDggYWN0aXZlLFxuICBzbmFja2JhcjogNixcbiAgYXBwLWJhcjogNCxcbiAgcmVmcmVzaC1pbmRpY2F0b3I6IDMsXG4gIHF1aWNrLWVudHJ5OiAyIDMgYWN0aXZlLFxuICBzZWFyY2gtYmFyOiAyIDMgYWN0aXZlLFxuICBzd2l0Y2g6IDFcbik7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0d28gcmVmZXJlbmNlIHNoYWRvd3Mgd2hvc2UgZWxldmF0aW9ucyBib3VuZCB0aGUgc3BlY2lmaWVkIGVsZXZhdGlvblxuICpcbiAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBzdXBwbGllZCBlbGV2YXRpb24gZXhjZWVkcyB0aGUgbWF4aW11bSByZWZlcmVuY2UgZWxldmF0aW9uLCB0aGUgbGFzdCB0d29cbiAqIHJlZmVyZW5jZSBzaGFkb3dzIGFyZSByZXR1cm5lZC5cbiAqXG4gKiBAbWl4aW4gZmluZC1ib3VuZGluZy1zaGFkb3ctc2V0c1xuICogQHNlY3Rpb24gU2hhZG93LUZ1bmN0aW9uc1xuICogQHBhcmFtICRlbGV2YXRpb25cbiAqICBUaGUgZWxldmF0aW9uXG4gKiBAZXhhbXBsZVxuICogICRmb28gPSBmaW5kLWJvdW5kaW5nLXNoYWRvdy1zZXRzKDIpO1xuICovXG5AZnVuY3Rpb24gZmluZC1ib3VuZGluZy1zaGFkb3ctc2V0cygkZWxldmF0aW9uKSB7XG4gIEBpZiAkZWxldmF0aW9uIDwgMCB7XG4gICAgQGVycm9yICdmaW5kLWJvdW5kaW5nLXNoYWRvdy1zZXRzOiBFbGV2YXRpb24gaXMgbGVzcyB0aGFuIHplcm8nO1xuICB9XG5cbiAgJGxvd2VyOiBudGgoJHJlZmVyZW5jZS1zaGFkb3dzLCBsZW5ndGgoJHJlZmVyZW5jZS1zaGFkb3dzKSAtIDEpO1xuICAkdXBwZXI6IG50aCgkcmVmZXJlbmNlLXNoYWRvd3MsIGxlbmd0aCgkcmVmZXJlbmNlLXNoYWRvd3MpKTtcblxuICBAZm9yICRpIGZyb20gMSB0byBsZW5ndGgoJHJlZmVyZW5jZS1zaGFkb3dzKSB7XG4gICAgJGlubmVyLWxvd2VyOiBudGgoJHJlZmVyZW5jZS1zaGFkb3dzLCAkaSk7XG4gICAgJGlubmVyLXVwcGVyOiBudGgoJHJlZmVyZW5jZS1zaGFkb3dzLCAkaSArIDEpO1xuXG4gICAgQGlmIChtYXAtZ2V0KCRpbm5lci1sb3dlciwgJ2VsZXZhdGlvbicpIDw9ICRlbGV2YXRpb24pIGFuZCAobWFwLWdldCgkaW5uZXItdXBwZXIsICdlbGV2YXRpb24nKSA+ICRlbGV2YXRpb24pIHtcbiAgICAgIEByZXR1cm4gKCRpbm5lci1sb3dlciwgJGlubmVyLXVwcGVyKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuICgkbG93ZXIsICR1cHBlcik7XG59XG5cblxuLyoqXG4gKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHZhbHVlcyBhIGFuZCBiXG4gKlxuICogUmV0dXJucyB0aGUgdmFsdWUgYmV0d2VlbiBhIGFuZCBiIHByb3BvcnRpb25hbCB0byB4ICh3aGVuIHggaXMgYmV0d2VlbiAwIGFuZCAxLiBXaGVuIHggaXMgb3V0c2lkZVxuICogdGhpcyByYW5nZSwgdGhlIHJldHVybiB2YWx1ZSBpcyBhIGxpbmVhciBleHRyYXBvbGF0aW9uKVxuICpcbiAqIEBtaXhpbiBsZXJwXG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJHhcbiAqICBUaGUgcHJvcG9ydGlvbmFsIGNvbnRyb2xcbiAqIEBwYXJhbSAkYVxuICogIFRoZSBzdGFydGluZyB2YWx1ZVxuICogQHBhcmFtICRiXG4gKiAgVGhlIGVuZGluZyB2YWx1ZVxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gbGVycCguMiwgMywgNik7XG4gKi9cbkBmdW5jdGlvbiBsZXJwKCR4LCAkYSwgJGIpIHtcbiAgQHJldHVybiAkYSArICR4ICogKCRiIC0gJGEpO1xufVxuXG5cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBzaGFkb3dzIGJ5IGludGVycG9sYXRpbmcgZWFjaCBwcm9wZXJ0eSBpbmRpdmlkdWFsbHlcbiAqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBiZXR3ZWVuIHNoYWRvdzEgYW5kIHNoYWRvdzIgcHJvcG9ydGlvbmFsIHRvIHggKHdoZW4geCBpcyBiZXR3ZWVuIDAgYW5kIDEuIFdoZW5cbiAqIHggaXMgb3V0c2lkZSB0aGlzIHJhbmdlLCB0aGUgcmV0dXJuIHZhbHVlIGlzIGEgbGluZWFyIGV4dHJhcG9sYXRpb24pLlxuICpcbiAqIEBtaXhpbiBsZXJwLXNoYWRvd1xuICogQHNlY3Rpb24gU2hhZG93LUZ1bmN0aW9uc1xuICogQHBhcmFtICR4XG4gKiAgVGhlIHByb3BvcnRpb25hbCBjb250cm9sXG4gKiBAcGFyYW0gJHNoYWRvdzFcbiAqICBUaGUgc3RhcnRpbmcgc2hhZG93XG4gKiBAcGFyYW0gJHNoYWRvdzJcbiAqICBUaGUgZW5kaW5nIHNoYWRvd1xuICovXG5AZnVuY3Rpb24gbGVycC1zaGFkb3coJHgsICRzaGFkb3cxLCAkc2hhZG93Mikge1xuICAvLyBSb3VuZCBhbGwgcGFyYW1ldGVycywgYXMgc2hhZG93IGRlZmluaXRpb25zIGRvIG5vdCBzdXBwb3J0IHN1YnBpeGVsc1xuICAkbmV3LXg6IHJvdW5kKGxlcnAoJHgsIG50aCgkc2hhZG93MSwgMSksIG50aCgkc2hhZG93MiwgMSkpKTtcbiAgJG5ldy15OiByb3VuZChsZXJwKCR4LCBudGgoJHNoYWRvdzEsIDIpLCBudGgoJHNoYWRvdzIsIDIpKSk7XG4gICRuZXctYmx1cjogcm91bmQobGVycCgkeCwgbnRoKCRzaGFkb3cxLCAzKSwgbnRoKCRzaGFkb3cyLCAzKSkpO1xuICAkbmV3LXNwcmVhZDogcm91bmQobGVycCgkeCwgbnRoKCRzaGFkb3cxLCA0KSwgbnRoKCRzaGFkb3cyLCA0KSkpO1xuICAvLyBObyBuZWVkIHRvIGxlcnAgdGhlIHNoYWRvdyBjb2xvclxuICAkbmV3LWNvbG9yOiBudGgoJHNoYWRvdzEsIDUpO1xuXG4gIC8vIENvZXJjZSB0byBwaXhlbCB2YWx1ZXMgd2hlbiByZXR1cm5pbmdcbiAgQHJldHVybiAoI3skbmV3LXggKyBweH0gI3skbmV3LXkgKyBweH0gI3skbmV3LWJsdXIgKyBweH0gI3skbmV3LXNwcmVhZCArIHB4fSAkbmV3LWNvbG9yKTtcbn1cblxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNldCBvZiBzaGFkb3dzIGF0IGEgZ2l2ZW4gZWxldmF0aW9uXG4gKlxuICogQG1peGluIGNhbGN1bGF0ZS1zaGFkb3ctc2V0LWF0LWRlcHRoXG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJGVsZXZhdGlvblxuICogIFRoZSBkZXNpcmVkIGVsZXZhdGlvblxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gY2FsY3VsYXRlLXNoYWRvdy1zZXQtYXQtZGVwdGgoMik7XG4gKi9cbkBmdW5jdGlvbiBjYWxjdWxhdGUtc2hhZG93LXNldC1hdC1kZXB0aCgkZWxldmF0aW9uKSB7XG4gICRib3VuZHM6IGZpbmQtYm91bmRpbmctc2hhZG93LXNldHMoJGVsZXZhdGlvbik7XG4gICRtaW46IG50aCgkYm91bmRzLCAxKTtcbiAgJG1heDogbnRoKCRib3VuZHMsIDIpO1xuICAkeDogKCRlbGV2YXRpb24gLSBtYXAtZ2V0KCRtaW4sICdlbGV2YXRpb24nKSkgLyAobWFwLWdldCgkbWF4LCAnZWxldmF0aW9uJykgLSBtYXAtZ2V0KCRtaW4sICdlbGV2YXRpb24nKSk7XG4gICRlbGV2YXRpb24tc2hhZG93czogKCk7XG5cbiAgQGZvciAkaSBmcm9tIDEgdG8gbGVuZ3RoKG1hcC1nZXQoJG1pbiwgJ3NoYWRvd3MnKSkgKyAxIHtcbiAgICAkbmV3LXNoYWRvdzogbGVycC1zaGFkb3coJHgsIG50aChtYXAtZ2V0KCRtaW4sICdzaGFkb3dzJyksICRpKSwgbnRoKG1hcC1nZXQoJG1heCwgJ3NoYWRvd3MnKSwgJGkpKTtcbiAgICAkZWxldmF0aW9uLXNoYWRvd3M6IGFwcGVuZCgkZWxldmF0aW9uLXNoYWRvd3MsICRuZXctc2hhZG93LCBjb21tYSk7XG4gIH1cblxuICBAcmV0dXJuICRlbGV2YXRpb24tc2hhZG93cztcbn1cblxuXG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSB0cmFuc2l0aW9uIGZvciBhIGNoYW5nZSBiZXR3ZWVuIDIgZWxldmF0aW9uc1xuICpcbiAqIFRoZSBsYXJnZXIgdGhlIGVsZXZhdGlvbiBjaGFuZ2UgdGhlIGxvbmdlciB0aGUgYW5pbWF0aW9uIHRha2VzXG4gKlxuICogQG1peGluIGVsZXZhdGlvbi10cmFuc2l0aW9uXG4gKiBAc2VjdGlvbiBTaGFkb3ctTWl4aW5zXG4gKiBAcGFyYW0gJGVsZXZhdGlvbi1jaGFuZ2VcbiAqICBUaGUgZWxldmF0aW9uIGNoYW5nZSBhbW91bnRcbiAqIEBwYXJhbSAkZWFzaW5nXG4gKiAgVGhlIGVhc2luZyBmdW5jdGlvbiBvciBuYW1lXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbi10cmFuc2l0aW9uKGRpYWxvZyk7XG4gKi9cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbigkZWxldmF0aW9uLWNoYW5nZTogNiwgJGVhc2luZzogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSkpIHtcbiAgJGR1cmF0aW9uOiBsZXJwKCRlbGV2YXRpb24tY2hhbmdlIC8gMjQsICRtaW4tYW5pbWF0aW9uLWxlbmd0aCwgJG1heC1hbmltYXRpb24tbGVuZ3RoKTtcblxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93ICRkdXJhdGlvbiAkZWFzaW5nO1xufVxuXG5cbi8qKlxuICogR2VuZXJhdGVzIGJveC1zaGFkb3cgYW5kIHRoZSB0cmFuc2l0aW9uIGZvciBhIGdpdmVuIGVsZXZhdGlvblxuICpcbiAqIC0gQSBzaW5nbGUgZWxldmF0aW9uIHdpbGwgZ2VuZXJhdGUgYSBzaW5nbGUgYm94LXNoYWRvdyBzZXRcbiAqIC0gVHdvIGVsZXZhdGlvbnMgYW5kIGEgc3RhdGUgd2lsbCBnZW5lcmF0ZSBhIGRlZmF1bHQgYm94LXNoYWRvdyBzZXQgYW5kIGFub3RoZXIgc2V0IHRoYXQgaXNcbiAqIGFjdGl2YXRlZCBieSB0aGUgc3RhdGUgdGVzdGVkIHdpdGggOmhvdmVyIGFuZCA6YWN0aXZlXG4gKlxuICogQG1peGluIGVsZXZhdGlvblxuICogQHNlY3Rpb24gU2hhZG93LU1peGluc1xuICogQHBhcmFtICRlbGV2YXRpb24xXG4gKiAgVGhlIHN0YXJ0aW5nIGVsZXZhdGlvblxuICogQHBhcmFtICRlbGV2YXRpb24yXG4gKiAgVGhlIGRlc3RpbmF0aW9uIGVsZXZhdGlvblxuICogQHBhcmFtICRzdGF0ZVxuICogIGhvdmVyLCBmb2N1cywgYWN0aXZlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbigyLCA4LCBhY3RpdmUpO1xuICovXG5AbWl4aW4gZWxldmF0aW9uKCRlbGV2YXRpb24xLCAkZWxldmF0aW9uMjogbnVsbCwgJHN0YXRlOiBudWxsKSB7XG4gIEBpZiAkZWxldmF0aW9uMSA9PSAwIHtcbiAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLy8gc3R5bGVsaW50LWVuYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgfSBAZWxzZSB7XG4gICAgYm94LXNoYWRvdzogY2FsY3VsYXRlLXNoYWRvdy1zZXQtYXQtZGVwdGgoJGVsZXZhdGlvbjEpO1xuICB9XG5cbiAgQGlmICRlbGV2YXRpb24yICE9IG51bGwge1xuICAgIC8vIFRPRE86IEZpeCBtaXNzdXNlIG9mIG1peGluIGh0dHBzOi8vZ2l0aHViLmNvbS9HZXRUZXJtaW51cy90ZXJtaW51cy11aS9pc3N1ZXMvMTUyOVxuICAgIEBpbmNsdWRlIGVsZXZhdGlvbi10cmFuc2l0aW9uKCRlbGV2YXRpb24yIC0gJGVsZXZhdGlvbjIpO1xuXG4gICAgJjojeyRzdGF0ZX0ge1xuICAgICAgQGlmICRlbGV2YXRpb24xID09IDAge1xuICAgICAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBzdHlsZWxpbnQtZW5hYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGNhbGN1bGF0ZS1zaGFkb3ctc2V0LWF0LWRlcHRoKCRlbGV2YXRpb24yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgYm94LXNoYWRvdyBhbmQgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzIGZvciBzcGVjaWZpYyBlbGVtZW50cy4gU2VlICRtYXRlcmlhbC1lbGVtZW50cy5cbiAqXG4gKiBAbWl4aW4gZWxldmF0aW9uLWVsZW1lbnRcbiAqIEBzZWN0aW9uIFNoYWRvdy1NaXhpbnNcbiAqIEBwYXJhbSAkZWxlbWVudC1uYW1lXG4gKiAgVGhlIGVsZW1lbnQgdG8gYWRkIGEgc2hhZG93IHRvXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbi1lbGVtZW50KGRpYWxvZyk7XG4gKi9cbkBtaXhpbiBlbGV2YXRpb24tZWxlbWVudCgkZWxlbWVudC1uYW1lKSB7XG4gICRhdHRyOiBtYXAtZ2V0KCRtYXRlcmlhbC1lbGVtZW50cywgJGVsZW1lbnQtbmFtZSk7XG5cbiAgQGlmIGxlbmd0aCgkYXR0cikgPT0gMSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKG50aCgkYXR0ciwgMSkpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24obnRoKCRhdHRyLCAxKSwgbnRoKCRhdHRyLCAyKSwgbnRoKCRhdHRyLCAzKSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFRoZSBtYXAgb2YgYXZhaWxhYmxlIGN1cnNvcnNcbiAqL1xuJGctY3Vyc29yczogKFxuICAvKiBJbmRpY2F0ZXMgYW4gYWxpYXMgb3IgY29weSB3aWxsIGJlIG1hZGUgKi9cbiAgYWxpYXMsXG4gIC8qIExldCB0aGUgYnJvd3NlciBkZWNpZGUgKi9cbiAgYXV0byxcbiAgLyogSW5kaWNhdGVzIGFiaWxpdHkgdG8gcmVzaXplIGEgcGllY2Ugb2YgdGhlIGRvbTsgb2Z0ZW4gYSB0YWJsZSBjb2x1bW4gKi9cbiAgY29sLXJlc2l6ZSxcbiAgLyogSW5kaWNhdGVzIGFiaWxpdHkgdG8gY29weSAqL1xuICBjb3B5LFxuICAvKiBSZXNldCB0byB0aGUgZGVmYXVsdCBjdXJzb3IgKi9cbiAgZGVmYXVsdCxcbiAgLyogSW5kaWNhdGVzIGhlbHAgaXMgYXZhaWxhYmxlICovXG4gIGhlbHAsXG4gIC8qIEluZGljYXRlcyB0aGUgYWJpbGl0eSB0byBkcmFnIGFuIGl0ZW0gKi9cbiAgbW92ZSxcbiAgLyogSW5kaWNhdGVzIG5vIGF2YWlsYWJsZSBpbnRlcmFjdGlvbiAqL1xuICBub3QtYWxsb3dlZCxcbiAgLyogSW5kaWNhdGVzIHRoZSBhYmlsaXR5IHRvIG1vdmUgTm9ydGggYW5kIFNvdXRoICovXG4gIG5zLXJlc2l6ZSxcbiAgLyogSW5kaWNhdGVzIGludGVyYWN0aW9uICovXG4gIHBvaW50ZXIsXG4gIC8qIEluZGljYXRlcyB0ZXh0IGNvbnRyb2xzICovXG4gIHRleHQsXG4pO1xuXG5cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1jdXJzb3JzIGxpc3QuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGVuZm9yY2Ugd2hpY2ggY3Vyc29ycyBjYW4gYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS4gRGVmYXVsdDogYXV0b1xuICogQGV4YW1wbGVcbiAqICBjdXJzb3I6IGN1cnNvcigpO1xuICogIGN1cnNvcjogY3Vyc29yKHBvaW50ZXIpO1xuICovXG5AZnVuY3Rpb24gY3Vyc29yKCR0eXBlOiBhdXRvKSB7XG4gICRpbmRleDogaW5kZXgoJGctY3Vyc29ycywgJHR5cGUpO1xuXG4gIC8vIFZlcmlmeSB0aGUgdHlwZSBleGlzdHNcbiAgQGlmICgkaW5kZXggPT0gbnVsbCkge1xuICAgIEBlcnJvciAnSW52YWxpZCBjdXJzb3IgdHlwZSBuYW1lOiBgI3skdHlwZX1gLiBBbGxvd2VkIHR5cGVzOiBcIiN7JGctY3Vyc29yc31cIic7XG4gIH1cblxuICBAcmV0dXJuIG50aCgkZy1jdXJzb3JzLCAkaW5kZXgpO1xufVxuXG5cbi8qKlxuICogSW5jbHVkZSBhIGN1c3RvbSBjdXJzb3JcbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS5cbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY3Vyc29yO1xuICogIEBpbmNsdWRlIGN1cnNvcihwb2ludGVyKTtcbiAqL1xuQG1peGluIGN1cnNvcigkdHlwZSkge1xuICBjdXJzb3I6IGN1cnNvcigkdHlwZSk7XG59XG5cblxuXG5AbWl4aW4gY2FyZChcbiAgJGFsbG93cy1pbnRlcmFjdGlvbjogZmFsc2Vcbikge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAje3NwYWNpbmcobGFyZ2UpICogMn0pO1xuICBwYWRkaW5nOiBzcGFjaW5nKGxhcmdlKTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAvLyBJZiB0aGUgY2FyZCBhbGxvd3MgaW50ZXJhY3Rpb24sIGdpdmUgaXQgYSBob3ZlciBzdGF0ZVxuICBAaWYgJGFsbG93cy1pbnRlcmFjdGlvbiA9PSB0cnVlIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24tZWxlbWVudChjYXJkKTtcbiAgICBjdXJzb3I6IGN1cnNvcihwb2ludGVyKTtcbiAgfSBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIGluY2x1ZGUgc3RhbmRhcmQgZWxldmF0aW9uXG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKDIpO1xuICB9XG5cbiAgLy8gQ2xhc3MgYWRkZWQgYnkgdGhlIFRzQ2FyZFRpdGxlRGlyZWN0aXZlXG4gIC5jLWNhcmRfX3RpdGxlIHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KHRpdGxlKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1cmUgLSBEYXJrXG4gKi9cbiRjb2xvcl9fcHVyZS0tZGFyazogIzMwMmQzNSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQdXJlIC0gTGlnaHRcbiAqL1xuJGNvbG9yX19wdXJlLS1saWdodDogI2ZhZmFmYSAhZGVmYXVsdDtcblxuXG5cblxuLyoqXG4gKiBVdGlsaXR5IC0gRXh0cmEgRGFya1xuICovXG4kY29sb3JfX3V0aWxpdHktLXhkYXJrOiAjM2UzYzQzICFkZWZhdWx0O1xuXG4vKipcbiAqIFV0aWxpdHkgLSBEYXJrXG4gKi9cbiRjb2xvcl9fdXRpbGl0eS0tZGFyazogIzc1NzU3NSAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5XG4gKi9cbiRjb2xvcl9fdXRpbGl0eTogIzk5OSAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5IC0gTGlnaHRcbiAqL1xuJGNvbG9yX191dGlsaXR5LS1saWdodDogI2NlY2RkMSAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5IC0gRXh0cmEgTGlnaHRcbiAqL1xuJGNvbG9yX191dGlsaXR5LS14bGlnaHQ6ICNmMmYwZjcgIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBQcmltYXJ5IC0gRXh0cmEgRGFya1xuICovXG4kY29sb3JfX3ByaW1hcnktLXhkYXJrOiAjMGEzNzViICFkZWZhdWx0O1xuXG4vKipcbiAqIFByaW1hcnkgLSBEYXJrXG4gKi9cbiRjb2xvcl9fcHJpbWFyeS0tZGFyazogIzBjNDI3MSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5XG4gKi9cbiRjb2xvcl9fcHJpbWFyeTogIzAwNTM4YSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5IC0gTGlnaHRcbiAqL1xuJGNvbG9yX19wcmltYXJ5LS1saWdodDogIzE2NjZiMSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5IC0geExpZ2h0XG4gKi9cbiRjb2xvcl9fcHJpbWFyeS0teGxpZ2h0OiAjMTc3N2I2ICFkZWZhdWx0O1xuXG5cbi8qKlxuICogQWNjZW50IC0gRXh0cmEgRGFya1xuICovXG4kY29sb3JfX2FjY2VudC0teGRhcms6ICMyYjY3M2YgIWRlZmF1bHQ7XG5cbi8qKlxuICogQWNjZW50IC0gRGFya1xuICovXG4kY29sb3JfX2FjY2VudC0tZGFyazogIzMxNzQ0OCAhZGVmYXVsdDtcblxuLyoqXG4gKiBBY2NlbnRcbiAqL1xuJGNvbG9yX19hY2NlbnQ6ICMyZjg1NGQgIWRlZmF1bHQ7XG5cbi8qKlxuICogQWNjZW50IC0gTGlnaHRcbiAqL1xuJGNvbG9yX19hY2NlbnQtLWxpZ2h0OiAjM2I5YjVjICFkZWZhdWx0O1xuXG4vKipcbiAqIEFjY2VudCAtIHhMaWdodFxuICovXG4kY29sb3JfX2FjY2VudC0teGxpZ2h0OiBsaWdodGVuKCRjb2xvcl9fYWNjZW50LCA2MCUpICFkZWZhdWx0O1xuXG5cblxuXG4vKipcbiAqIEVycm9yIC0gRGFya1xuICovXG4kY29sb3JfX2Vycm9yLS1kYXJrOiAjYjU1OTQ5ICFkZWZhdWx0O1xuXG4vKipcbiAqIEVycm9yXG4gKi9cbiRjb2xvcl9fZXJyb3I6ICNjODYwNGQgIWRlZmF1bHQ7XG5cbi8qKlxuICogRXJyb3IgLSBMaWdodFxuICovXG4kY29sb3JfX2Vycm9yLS1saWdodDogI2Q3NmM1OSAhZGVmYXVsdDtcblxuXG4vKipcbiAqIFdhcm4gLSBEYXJrXG4gKi9cbiRjb2xvcl9fd2Fybi0tZGFyazogI2NjOWY0NSAhZGVmYXVsdDtcblxuLyoqXG4gKiBXYXJuXG4gKi9cbiRjb2xvcl9fd2FybjogI2RlYTgzYiAhZGVmYXVsdDtcblxuLyoqXG4gKiBXYXJuIC0gTGlnaHRcbiAqL1xuJGNvbG9yX193YXJuLS1saWdodDogI2U4YjU1MCAhZGVmYXVsdDtcblxuXG4vKipcbiAqIEhpZ2hsaWdodCAtIERhcmtcbiAqL1xuJGNvbG9yX19oaWdobGlnaHQtLWRhcms6ICNkZGQ0NTUgIWRlZmF1bHQ7XG5cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cbiRjb2xvcl9faGlnaGxpZ2h0OiAjZWZlNTU3ICFkZWZhdWx0O1xuXG4vKipcbiAqIEhpZ2hsaWdodCAtIExpZ2h0XG4gKi9cbiRjb2xvcl9faGlnaGxpZ2h0LS1saWdodDogI2Y2ZWY4YiAhZGVmYXVsdDtcblxuXG4vKipcbiAqIFRoZSBtYXAgb2YgY29sb3JzXG4gKlxuICogTm90ZTogQ3VycmVudGx5LCB3YXJuIGFuZCBlcnJvciBhcmUgdGhlIHNhbWUgY29sb3IgaW4gdGhlICRwYWxldHRlcyBtYXAuIE1vcmUgd29yayBuZWVkcyB0byBiZSBkb25lIHRvIHNvbGlkaWZ5IG91ciBwYWxldHRlLlxuICovXG4kcGFsZXR0ZXM6IChcbiAgcHJpbWFyeTogKFxuICAgIHhsaWdodDogJGNvbG9yX19wcmltYXJ5LS14bGlnaHQsXG4gICAgbGlnaHQ6ICRjb2xvcl9fcHJpbWFyeS0tbGlnaHQsXG4gICAgYmFzZTogJGNvbG9yX19wcmltYXJ5LFxuICAgIGRhcms6ICRjb2xvcl9fcHJpbWFyeS0tZGFyayxcbiAgICB4ZGFyazogJGNvbG9yX19wcmltYXJ5LS14ZGFya1xuICApLFxuICBhY2NlbnQ6IChcbiAgICB4bGlnaHQ6ICRjb2xvcl9fYWNjZW50LS14bGlnaHQsXG4gICAgbGlnaHQ6ICRjb2xvcl9fYWNjZW50LS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX2FjY2VudCxcbiAgICBkYXJrOiAkY29sb3JfX2FjY2VudC0tZGFyayxcbiAgICB4ZGFyazogJGNvbG9yX19hY2NlbnQtLXhkYXJrXG4gICksXG4gIGVycm9yOiAoXG4gICAgbGlnaHQ6ICRjb2xvcl9fZXJyb3ItLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9fZXJyb3IsXG4gICAgZGFyazogJGNvbG9yX19lcnJvci0tZGFya1xuICApLFxuICB3YXJuOiAoXG4gICAgbGlnaHQ6ICRjb2xvcl9fZXJyb3ItLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9fZXJyb3IsXG4gICAgZGFyazogJGNvbG9yX19lcnJvci0tZGFya1xuICApLFxuICBoaWdobGlnaHQ6IChcbiAgICBsaWdodDogJGNvbG9yX19oaWdobGlnaHQtLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9faGlnaGxpZ2h0LFxuICAgIGRhcms6ICRjb2xvcl9faGlnaGxpZ2h0LS1kYXJrXG4gICksXG4gIHB1cmU6IChcbiAgICBkYXJrOiAkY29sb3JfX3B1cmUtLWRhcmssXG4gICAgYmFzZTogJGNvbG9yX19wdXJlLS1saWdodFxuICApLFxuICB1dGlsaXR5OiAoXG4gICAgeGxpZ2h0OiAkY29sb3JfX3V0aWxpdHktLXhsaWdodCxcbiAgICBsaWdodDogJGNvbG9yX191dGlsaXR5LS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX3V0aWxpdHksXG4gICAgZGFyazogJGNvbG9yX191dGlsaXR5LS1kYXJrLFxuICAgIHhkYXJrOiAkY29sb3JfX3V0aWxpdHktLXhkYXJrXG4gIClcbik7XG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIGNvbG9yIGZyb20gdGhlIGNvbG9ycyBtYXBcbiAqXG4gKiBAcGFyYW0gJHBhbGV0dGVcbiAqICBUaGUgcGFsZXR0ZSB0byB1c2UgZnJvbSB0aGUgbWFwXG4gKiBAcGFyYW0gJHRvbmVcbiAqICBUaGUgdG9uZSB0byB1c2UgZnJvbSB0aGUgc2VsZWN0ZWQgbWFwLiBEZWZhdWx0OiBiYXNlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGNvbG9yKHByaW1hcnkpO1xuICogIEBpbmNsdWRlIGNvbG9yKGFjY2VudCwgbGlnaHQpO1xuICovXG5AZnVuY3Rpb24gY29sb3IoJHBhbGV0dGUsICR0b25lOiAnYmFzZScpIHtcbiAgLy8gVmVyaWZ5IHRoZSBwYWxldHRlIGV4aXN0cyAoY29sb3IpXG4gIEBpZiBub3QobWFwLWhhcy1rZXkoJHBhbGV0dGVzLCAkcGFsZXR0ZSkpIHtcbiAgICAkYWxsb3dlZDogbWFwLWtleXMoJHBhbGV0dGVzKTtcbiAgICBAZXJyb3IgJ0ludmFsaWQgcGFsZXR0ZSBuYW1lOiBgI3skcGFsZXR0ZX1gLiBBbGxvd2VkIHBhbGV0dGVzOiAjeyRhbGxvd2VkfSc7XG4gIH1cblxuICAvLyBWZXJpZnkgdGhlIHRvbmUgZXhpc3RzICh2YXJpYXRpb24pXG4gIEBpZiBub3QobWFwLWhhcy1rZXkobWFwLWdldCgkcGFsZXR0ZXMsICRwYWxldHRlKSwgJHRvbmUpKSB7XG4gICAgJGFsbG93ZWQ6IG1hcC1rZXlzKG1hcC1nZXQoJHBhbGV0dGVzLCAkcGFsZXR0ZSkpO1xuICAgIEBlcnJvciAnSW52YWxpZCBwYWxldHRlIHRvbmU6IGAjeyR0b25lfWAuIEFsbG93ZWQgdG9uZXMgZm9yIGAjeyRwYWxldHRlfWAgYXJlOiAjeyRhbGxvd2VkfSc7XG4gIH1cblxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZXMsICRwYWxldHRlKSwgJHRvbmUpO1xufVxuXG5cblxuLyoqXG4gKiBUaGUgbWFwIHRoZW1lcyB0byBjb2xvcnNcbiAqL1xuJHRoZW1lLWFuZC1jb2xvcjogKFxuICAncHJpbWFyeSc6ICRjb2xvcl9fcHJpbWFyeSxcbiAgJ2FjY2VudCc6ICRjb2xvcl9fYWNjZW50LFxuICAnZXJyb3InOiAkY29sb3JfX2Vycm9yLFxuICAnd2Fybic6ICRjb2xvcl9fd2FybixcbiAgJ2hpZ2hsaWdodCc6ICRjb2xvcl9faGlnaGxpZ2h0LFxuICAncHVyZSc6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICd1dGlsaXR5JzogJGNvbG9yX191dGlsaXR5XG4pO1xuXG5cbi8qKlxuICogT3V0cHV0IGNvbmRpdGlvbmFsIHN0eWxlcyBmb3IgdGhlIHBvc3NpYmxlIHRoZW1lc1xuICpcbiAqIEBwYXJhbSAkcHJvcGVydHlcbiAqICBUaGUgQ1NTIHByb3BlcnR5IHRoYXQgc2hvdWxkIGJlIGNvbG9yZWQuIERlZmF1bHQ6ICdiYWNrZ3JvdW5kLWNvbG9yJ1xuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSB0aGVtZS1jb2xvcjtcbiAqICBAaW5jbHVkZSB0aGVtZS1jb2xvcignY29sb3InKTtcbiAqL1xuQG1peGluIHRoZW1lLWNvbG9yKCRwcm9wZXJ0eTogJ2JhY2tncm91bmQtY29sb3InKSB7XG4gIC8vIFZlcmlmeSBhbiBhbGxvd2VkIHByb3BlcnR5IHdhcyBwYXNzZWQgaW5cbiAgQGlmIG5vdCgoJHByb3BlcnR5ID09IGJhY2tncm91bmQtY29sb3IpKSBhbmQgbm90KCgkcHJvcGVydHkgPT0gY29sb3IpKSB7XG4gICAgQGVycm9yICdUaGUgYHRoZW1lX19jb2xvcmAgbWl4aW4gb25seSBhY2NlcHRzIGBiYWNrZ3JvdW5kLWNvbG9yYCBvciBgY29sb3JgJztcbiAgfVxuXG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUtYW5kLWNvbG9yIHtcbiAgICA6Om5nLWRlZXAgLnUtdGhlbWUtLSN7JGtleX0gJiB7XG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHV0aWxpdHksIGxpZ2h0KTtcbiAgICAgICAgY29sb3I6IGNvbG9yKHV0aWxpdHkpO1xuICAgICAgfVxuICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgICAgIEBpZiAoJHByb3BlcnR5ID09ICdiYWNrZ3JvdW5kLWNvbG9yJykgYW5kIChub3QoKCRrZXkgPT0gJ3B1cmUnKSkgYW5kIG5vdCgoJGtleSA9PSAnaGlnaGxpZ2h0JykpKSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3JfX3B1cmUtLWxpZ2h0O1xuICAgICAgfVxuXG4gICAgICBAaWYgKCRwcm9wZXJ0eSA9PSAnYmFja2dyb3VuZC1jb2xvcicpIGFuZCAoJGtleSA9PSAnaGlnaGxpZ2h0Jykge1xuICAgICAgICBjb2xvcjogJGNvbG9yX19wdXJlLS1kYXJrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgcHJpbWFyeSBtYXBcbiAqL1xuJHRzLW1hdGVyaWFsLXByaW1hcnk6IChcbiAgNTA6ICRjb2xvcl9fcHJpbWFyeS0teGxpZ2h0LFxuICAxMDA6ICRjb2xvcl9fcHJpbWFyeS0tbGlnaHQsXG4gIDIwMDogJGNvbG9yX19wcmltYXJ5LFxuICAzMDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgNDAwOiAkY29sb3JfX3ByaW1hcnksXG4gIDUwMDogJGNvbG9yX19wcmltYXJ5LFxuICA2MDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgNzAwOiAkY29sb3JfX3ByaW1hcnktLWRhcmssXG4gIDgwMDogJGNvbG9yX19wcmltYXJ5LFxuICA5MDA6ICRjb2xvcl9fcHJpbWFyeS0teGRhcmssXG4gIGExMDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgYTIwMDogJGNvbG9yX19wcmltYXJ5LFxuICBhNDAwOiAkY29sb3JfX3ByaW1hcnksXG4gIGE3MDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAxMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDMwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA0MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDYwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgODAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDkwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhMTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGEyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICApXG4pO1xuXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgYWNjZW50IG1hcFxuICovXG4kdHMtbWF0ZXJpYWwtYWNjZW50OiAoXG4gIDUwOiAkY29sb3JfX2FjY2VudC0teGxpZ2h0LFxuICAxMDA6ICRjb2xvcl9fYWNjZW50LS1saWdodCxcbiAgMjAwOiAkY29sb3JfX2FjY2VudCxcbiAgMzAwOiAkY29sb3JfX2FjY2VudCxcbiAgNDAwOiAkY29sb3JfX2FjY2VudCxcbiAgNTAwOiAkY29sb3JfX2FjY2VudCxcbiAgNjAwOiAkY29sb3JfX2FjY2VudCxcbiAgNzAwOiAkY29sb3JfX2FjY2VudC0tZGFyayxcbiAgODAwOiAkY29sb3JfX2FjY2VudCxcbiAgOTAwOiAkY29sb3JfX2FjY2VudC0teGRhcmssXG4gIGExMDA6ICRjb2xvcl9fYWNjZW50LFxuICBhMjAwOiAkY29sb3JfX2FjY2VudCxcbiAgYTQwMDogJGNvbG9yX19hY2NlbnQsXG4gIGE3MDA6ICRjb2xvcl9fYWNjZW50LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDEwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA1MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDcwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA4MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgOTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGExMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTIwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNDAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGE3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gIClcbik7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBtYXRlcmlhbCBiYXNlZCB3YXJuIG1hcFxuICovXG4kdHMtbWF0ZXJpYWwtd2FybjogKFxuICA1MDogJGNvbG9yX19lcnJvci0tbGlnaHQsXG4gIDEwMDogJGNvbG9yX19lcnJvci0tbGlnaHQsXG4gIDIwMDogJGNvbG9yX19lcnJvcixcbiAgMzAwOiAkY29sb3JfX2Vycm9yLFxuICA0MDA6ICRjb2xvcl9fZXJyb3IsXG4gIDUwMDogJGNvbG9yX19lcnJvcixcbiAgNjAwOiAkY29sb3JfX2Vycm9yLFxuICA3MDA6ICRjb2xvcl9fZXJyb3ItLWRhcmssXG4gIDgwMDogJGNvbG9yX19lcnJvcixcbiAgOTAwOiAkY29sb3JfX2Vycm9yLS1kYXJrLFxuICBhMTAwOiAkY29sb3JfX2Vycm9yLFxuICBhMjAwOiAkY29sb3JfX2Vycm9yLFxuICBhNDAwOiAkY29sb3JfX2Vycm9yLFxuICBhNzAwOiAkY29sb3JfX2Vycm9yLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDEwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA1MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDcwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA4MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgOTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGExMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTIwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNDAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGE3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gIClcbik7XG5cbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbi8qKlxuICogVGhlIG1hcCBvZiBhdmFpbGFibGUgY3Vyc29yc1xuICovXG4kZy1jdXJzb3JzOiAoXG4gIC8qIEluZGljYXRlcyBhbiBhbGlhcyBvciBjb3B5IHdpbGwgYmUgbWFkZSAqL1xuICBhbGlhcyxcbiAgLyogTGV0IHRoZSBicm93c2VyIGRlY2lkZSAqL1xuICBhdXRvLFxuICAvKiBJbmRpY2F0ZXMgYWJpbGl0eSB0byByZXNpemUgYSBwaWVjZSBvZiB0aGUgZG9tOyBvZnRlbiBhIHRhYmxlIGNvbHVtbiAqL1xuICBjb2wtcmVzaXplLFxuICAvKiBJbmRpY2F0ZXMgYWJpbGl0eSB0byBjb3B5ICovXG4gIGNvcHksXG4gIC8qIFJlc2V0IHRvIHRoZSBkZWZhdWx0IGN1cnNvciAqL1xuICBkZWZhdWx0LFxuICAvKiBJbmRpY2F0ZXMgaGVscCBpcyBhdmFpbGFibGUgKi9cbiAgaGVscCxcbiAgLyogSW5kaWNhdGVzIHRoZSBhYmlsaXR5IHRvIGRyYWcgYW4gaXRlbSAqL1xuICBtb3ZlLFxuICAvKiBJbmRpY2F0ZXMgbm8gYXZhaWxhYmxlIGludGVyYWN0aW9uICovXG4gIG5vdC1hbGxvd2VkLFxuICAvKiBJbmRpY2F0ZXMgdGhlIGFiaWxpdHkgdG8gbW92ZSBOb3J0aCBhbmQgU291dGggKi9cbiAgbnMtcmVzaXplLFxuICAvKiBJbmRpY2F0ZXMgaW50ZXJhY3Rpb24gKi9cbiAgcG9pbnRlcixcbiAgLyogSW5kaWNhdGVzIHRleHQgY29udHJvbHMgKi9cbiAgdGV4dCxcbik7XG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNwYWNlIGZyb20gdGhlICRnLWN1cnNvcnMgbGlzdC5cbiAqXG4gKiBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gZW5mb3JjZSB3aGljaCBjdXJzb3JzIGNhbiBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBjdXJzb3IgdmFsdWUgdG8gdXNlLiBEZWZhdWx0OiBhdXRvXG4gKiBAZXhhbXBsZVxuICogIGN1cnNvcjogY3Vyc29yKCk7XG4gKiAgY3Vyc29yOiBjdXJzb3IocG9pbnRlcik7XG4gKi9cbkBmdW5jdGlvbiBjdXJzb3IoJHR5cGU6IGF1dG8pIHtcbiAgJGluZGV4OiBpbmRleCgkZy1jdXJzb3JzLCAkdHlwZSk7XG5cbiAgLy8gVmVyaWZ5IHRoZSB0eXBlIGV4aXN0c1xuICBAaWYgKCRpbmRleCA9PSBudWxsKSB7XG4gICAgQGVycm9yICdJbnZhbGlkIGN1cnNvciB0eXBlIG5hbWU6IGAjeyR0eXBlfWAuIEFsbG93ZWQgdHlwZXM6IFwiI3skZy1jdXJzb3JzfVwiJztcbiAgfVxuXG4gIEByZXR1cm4gbnRoKCRnLWN1cnNvcnMsICRpbmRleCk7XG59XG5cblxuLyoqXG4gKiBJbmNsdWRlIGEgY3VzdG9tIGN1cnNvclxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBjdXJzb3IgdmFsdWUgdG8gdXNlLlxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBjdXJzb3I7XG4gKiAgQGluY2x1ZGUgY3Vyc29yKHBvaW50ZXIpO1xuICovXG5AbWl4aW4gY3Vyc29yKCR0eXBlKSB7XG4gIGN1cnNvcjogY3Vyc29yKCR0eXBlKTtcbn1cblxuLyoqXG4gKiBQdXJlIC0gRGFya1xuICovXG4kY29sb3JfX3B1cmUtLWRhcms6ICMzMDJkMzUgIWRlZmF1bHQ7XG5cbi8qKlxuICogUHVyZSAtIExpZ2h0XG4gKi9cbiRjb2xvcl9fcHVyZS0tbGlnaHQ6ICNmYWZhZmEgIWRlZmF1bHQ7XG5cblxuXG5cbi8qKlxuICogVXRpbGl0eSAtIEV4dHJhIERhcmtcbiAqL1xuJGNvbG9yX191dGlsaXR5LS14ZGFyazogIzNlM2M0MyAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5IC0gRGFya1xuICovXG4kY29sb3JfX3V0aWxpdHktLWRhcms6ICM3NTc1NzUgIWRlZmF1bHQ7XG5cbi8qKlxuICogVXRpbGl0eVxuICovXG4kY29sb3JfX3V0aWxpdHk6ICM5OTkgIWRlZmF1bHQ7XG5cbi8qKlxuICogVXRpbGl0eSAtIExpZ2h0XG4gKi9cbiRjb2xvcl9fdXRpbGl0eS0tbGlnaHQ6ICNjZWNkZDEgIWRlZmF1bHQ7XG5cbi8qKlxuICogVXRpbGl0eSAtIEV4dHJhIExpZ2h0XG4gKi9cbiRjb2xvcl9fdXRpbGl0eS0teGxpZ2h0OiAjZjJmMGY3ICFkZWZhdWx0O1xuXG5cbi8qKlxuICogUHJpbWFyeSAtIEV4dHJhIERhcmtcbiAqL1xuJGNvbG9yX19wcmltYXJ5LS14ZGFyazogIzBhMzc1YiAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5IC0gRGFya1xuICovXG4kY29sb3JfX3ByaW1hcnktLWRhcms6ICMwYzQyNzEgIWRlZmF1bHQ7XG5cbi8qKlxuICogUHJpbWFyeVxuICovXG4kY29sb3JfX3ByaW1hcnk6ICMwMDUzOGEgIWRlZmF1bHQ7XG5cbi8qKlxuICogUHJpbWFyeSAtIExpZ2h0XG4gKi9cbiRjb2xvcl9fcHJpbWFyeS0tbGlnaHQ6ICMxNjY2YjEgIWRlZmF1bHQ7XG5cbi8qKlxuICogUHJpbWFyeSAtIHhMaWdodFxuICovXG4kY29sb3JfX3ByaW1hcnktLXhsaWdodDogIzE3NzdiNiAhZGVmYXVsdDtcblxuXG4vKipcbiAqIEFjY2VudCAtIEV4dHJhIERhcmtcbiAqL1xuJGNvbG9yX19hY2NlbnQtLXhkYXJrOiAjMmI2NzNmICFkZWZhdWx0O1xuXG4vKipcbiAqIEFjY2VudCAtIERhcmtcbiAqL1xuJGNvbG9yX19hY2NlbnQtLWRhcms6ICMzMTc0NDggIWRlZmF1bHQ7XG5cbi8qKlxuICogQWNjZW50XG4gKi9cbiRjb2xvcl9fYWNjZW50OiAjMmY4NTRkICFkZWZhdWx0O1xuXG4vKipcbiAqIEFjY2VudCAtIExpZ2h0XG4gKi9cbiRjb2xvcl9fYWNjZW50LS1saWdodDogIzNiOWI1YyAhZGVmYXVsdDtcblxuLyoqXG4gKiBBY2NlbnQgLSB4TGlnaHRcbiAqL1xuJGNvbG9yX19hY2NlbnQtLXhsaWdodDogbGlnaHRlbigkY29sb3JfX2FjY2VudCwgNjAlKSAhZGVmYXVsdDtcblxuXG5cblxuLyoqXG4gKiBFcnJvciAtIERhcmtcbiAqL1xuJGNvbG9yX19lcnJvci0tZGFyazogI2I1NTk0OSAhZGVmYXVsdDtcblxuLyoqXG4gKiBFcnJvclxuICovXG4kY29sb3JfX2Vycm9yOiAjYzg2MDRkICFkZWZhdWx0O1xuXG4vKipcbiAqIEVycm9yIC0gTGlnaHRcbiAqL1xuJGNvbG9yX19lcnJvci0tbGlnaHQ6ICNkNzZjNTkgIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBXYXJuIC0gRGFya1xuICovXG4kY29sb3JfX3dhcm4tLWRhcms6ICNjYzlmNDUgIWRlZmF1bHQ7XG5cbi8qKlxuICogV2FyblxuICovXG4kY29sb3JfX3dhcm46ICNkZWE4M2IgIWRlZmF1bHQ7XG5cbi8qKlxuICogV2FybiAtIExpZ2h0XG4gKi9cbiRjb2xvcl9fd2Fybi0tbGlnaHQ6ICNlOGI1NTAgIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBIaWdobGlnaHQgLSBEYXJrXG4gKi9cbiRjb2xvcl9faGlnaGxpZ2h0LS1kYXJrOiAjZGRkNDU1ICFkZWZhdWx0O1xuXG4vKipcbiAqIEhpZ2hsaWdodFxuICovXG4kY29sb3JfX2hpZ2hsaWdodDogI2VmZTU1NyAhZGVmYXVsdDtcblxuLyoqXG4gKiBIaWdobGlnaHQgLSBMaWdodFxuICovXG4kY29sb3JfX2hpZ2hsaWdodC0tbGlnaHQ6ICNmNmVmOGIgIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGNvbG9yc1xuICpcbiAqIE5vdGU6IEN1cnJlbnRseSwgd2FybiBhbmQgZXJyb3IgYXJlIHRoZSBzYW1lIGNvbG9yIGluIHRoZSAkcGFsZXR0ZXMgbWFwLiBNb3JlIHdvcmsgbmVlZHMgdG8gYmUgZG9uZSB0byBzb2xpZGlmeSBvdXIgcGFsZXR0ZS5cbiAqL1xuJHBhbGV0dGVzOiAoXG4gIHByaW1hcnk6IChcbiAgICB4bGlnaHQ6ICRjb2xvcl9fcHJpbWFyeS0teGxpZ2h0LFxuICAgIGxpZ2h0OiAkY29sb3JfX3ByaW1hcnktLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9fcHJpbWFyeSxcbiAgICBkYXJrOiAkY29sb3JfX3ByaW1hcnktLWRhcmssXG4gICAgeGRhcms6ICRjb2xvcl9fcHJpbWFyeS0teGRhcmtcbiAgKSxcbiAgYWNjZW50OiAoXG4gICAgeGxpZ2h0OiAkY29sb3JfX2FjY2VudC0teGxpZ2h0LFxuICAgIGxpZ2h0OiAkY29sb3JfX2FjY2VudC0tbGlnaHQsXG4gICAgYmFzZTogJGNvbG9yX19hY2NlbnQsXG4gICAgZGFyazogJGNvbG9yX19hY2NlbnQtLWRhcmssXG4gICAgeGRhcms6ICRjb2xvcl9fYWNjZW50LS14ZGFya1xuICApLFxuICBlcnJvcjogKFxuICAgIGxpZ2h0OiAkY29sb3JfX2Vycm9yLS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX2Vycm9yLFxuICAgIGRhcms6ICRjb2xvcl9fZXJyb3ItLWRhcmtcbiAgKSxcbiAgd2FybjogKFxuICAgIGxpZ2h0OiAkY29sb3JfX2Vycm9yLS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX2Vycm9yLFxuICAgIGRhcms6ICRjb2xvcl9fZXJyb3ItLWRhcmtcbiAgKSxcbiAgaGlnaGxpZ2h0OiAoXG4gICAgbGlnaHQ6ICRjb2xvcl9faGlnaGxpZ2h0LS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX2hpZ2hsaWdodCxcbiAgICBkYXJrOiAkY29sb3JfX2hpZ2hsaWdodC0tZGFya1xuICApLFxuICBwdXJlOiAoXG4gICAgZGFyazogJGNvbG9yX19wdXJlLS1kYXJrLFxuICAgIGJhc2U6ICRjb2xvcl9fcHVyZS0tbGlnaHRcbiAgKSxcbiAgdXRpbGl0eTogKFxuICAgIHhsaWdodDogJGNvbG9yX191dGlsaXR5LS14bGlnaHQsXG4gICAgbGlnaHQ6ICRjb2xvcl9fdXRpbGl0eS0tbGlnaHQsXG4gICAgYmFzZTogJGNvbG9yX191dGlsaXR5LFxuICAgIGRhcms6ICRjb2xvcl9fdXRpbGl0eS0tZGFyayxcbiAgICB4ZGFyazogJGNvbG9yX191dGlsaXR5LS14ZGFya1xuICApXG4pO1xuXG5cbi8qKlxuICogUmV0cmlldmUgYSBjb2xvciBmcm9tIHRoZSBjb2xvcnMgbWFwXG4gKlxuICogQHBhcmFtICRwYWxldHRlXG4gKiAgVGhlIHBhbGV0dGUgdG8gdXNlIGZyb20gdGhlIG1hcFxuICogQHBhcmFtICR0b25lXG4gKiAgVGhlIHRvbmUgdG8gdXNlIGZyb20gdGhlIHNlbGVjdGVkIG1hcC4gRGVmYXVsdDogYmFzZVxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBjb2xvcihwcmltYXJ5KTtcbiAqICBAaW5jbHVkZSBjb2xvcihhY2NlbnQsIGxpZ2h0KTtcbiAqL1xuQGZ1bmN0aW9uIGNvbG9yKCRwYWxldHRlLCAkdG9uZTogJ2Jhc2UnKSB7XG4gIC8vIFZlcmlmeSB0aGUgcGFsZXR0ZSBleGlzdHMgKGNvbG9yKVxuICBAaWYgbm90KG1hcC1oYXMta2V5KCRwYWxldHRlcywgJHBhbGV0dGUpKSB7XG4gICAgJGFsbG93ZWQ6IG1hcC1rZXlzKCRwYWxldHRlcyk7XG4gICAgQGVycm9yICdJbnZhbGlkIHBhbGV0dGUgbmFtZTogYCN7JHBhbGV0dGV9YC4gQWxsb3dlZCBwYWxldHRlczogI3skYWxsb3dlZH0nO1xuICB9XG5cbiAgLy8gVmVyaWZ5IHRoZSB0b25lIGV4aXN0cyAodmFyaWF0aW9uKVxuICBAaWYgbm90KG1hcC1oYXMta2V5KG1hcC1nZXQoJHBhbGV0dGVzLCAkcGFsZXR0ZSksICR0b25lKSkge1xuICAgICRhbGxvd2VkOiBtYXAta2V5cyhtYXAtZ2V0KCRwYWxldHRlcywgJHBhbGV0dGUpKTtcbiAgICBAZXJyb3IgJ0ludmFsaWQgcGFsZXR0ZSB0b25lOiBgI3skdG9uZX1gLiBBbGxvd2VkIHRvbmVzIGZvciBgI3skcGFsZXR0ZX1gIGFyZTogI3skYWxsb3dlZH0nO1xuICB9XG5cbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGVzLCAkcGFsZXR0ZSksICR0b25lKTtcbn1cblxuXG5cbi8qKlxuICogVGhlIG1hcCB0aGVtZXMgdG8gY29sb3JzXG4gKi9cbiR0aGVtZS1hbmQtY29sb3I6IChcbiAgJ3ByaW1hcnknOiAkY29sb3JfX3ByaW1hcnksXG4gICdhY2NlbnQnOiAkY29sb3JfX2FjY2VudCxcbiAgJ2Vycm9yJzogJGNvbG9yX19lcnJvcixcbiAgJ3dhcm4nOiAkY29sb3JfX3dhcm4sXG4gICdoaWdobGlnaHQnOiAkY29sb3JfX2hpZ2hsaWdodCxcbiAgJ3B1cmUnOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAndXRpbGl0eSc6ICRjb2xvcl9fdXRpbGl0eVxuKTtcblxuXG4vKipcbiAqIE91dHB1dCBjb25kaXRpb25hbCBzdHlsZXMgZm9yIHRoZSBwb3NzaWJsZSB0aGVtZXNcbiAqXG4gKiBAcGFyYW0gJHByb3BlcnR5XG4gKiAgVGhlIENTUyBwcm9wZXJ0eSB0aGF0IHNob3VsZCBiZSBjb2xvcmVkLiBEZWZhdWx0OiAnYmFja2dyb3VuZC1jb2xvcidcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdGhlbWUtY29sb3I7XG4gKiAgQGluY2x1ZGUgdGhlbWUtY29sb3IoJ2NvbG9yJyk7XG4gKi9cbkBtaXhpbiB0aGVtZS1jb2xvcigkcHJvcGVydHk6ICdiYWNrZ3JvdW5kLWNvbG9yJykge1xuICAvLyBWZXJpZnkgYW4gYWxsb3dlZCBwcm9wZXJ0eSB3YXMgcGFzc2VkIGluXG4gIEBpZiBub3QoKCRwcm9wZXJ0eSA9PSBiYWNrZ3JvdW5kLWNvbG9yKSkgYW5kIG5vdCgoJHByb3BlcnR5ID09IGNvbG9yKSkge1xuICAgIEBlcnJvciAnVGhlIGB0aGVtZV9fY29sb3JgIG1peGluIG9ubHkgYWNjZXB0cyBgYmFja2dyb3VuZC1jb2xvcmAgb3IgYGNvbG9yYCc7XG4gIH1cblxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRoZW1lLWFuZC1jb2xvciB7XG4gICAgOjpuZy1kZWVwIC51LXRoZW1lLS0jeyRrZXl9ICYge1xuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcih1dGlsaXR5LCBsaWdodCk7XG4gICAgICAgIGNvbG9yOiBjb2xvcih1dGlsaXR5KTtcbiAgICAgIH1cbiAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xuXG4gICAgICBAaWYgKCRwcm9wZXJ0eSA9PSAnYmFja2dyb3VuZC1jb2xvcicpIGFuZCAobm90KCgka2V5ID09ICdwdXJlJykpIGFuZCBub3QoKCRrZXkgPT0gJ2hpZ2hsaWdodCcpKSkge1xuICAgICAgICBjb2xvcjogJGNvbG9yX19wdXJlLS1saWdodDtcbiAgICAgIH1cblxuICAgICAgQGlmICgkcHJvcGVydHkgPT0gJ2JhY2tncm91bmQtY29sb3InKSBhbmQgKCRrZXkgPT0gJ2hpZ2hsaWdodCcpIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcl9fcHVyZS0tZGFyaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuLyoqXG4gKiBEZWZpbmUgdGhlIG1hdGVyaWFsIGJhc2VkIHByaW1hcnkgbWFwXG4gKi9cbiR0cy1tYXRlcmlhbC1wcmltYXJ5OiAoXG4gIDUwOiAkY29sb3JfX3ByaW1hcnktLXhsaWdodCxcbiAgMTAwOiAkY29sb3JfX3ByaW1hcnktLWxpZ2h0LFxuICAyMDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgMzAwOiAkY29sb3JfX3ByaW1hcnksXG4gIDQwMDogJGNvbG9yX19wcmltYXJ5LFxuICA1MDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgNjAwOiAkY29sb3JfX3ByaW1hcnksXG4gIDcwMDogJGNvbG9yX19wcmltYXJ5LS1kYXJrLFxuICA4MDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgOTAwOiAkY29sb3JfX3ByaW1hcnktLXhkYXJrLFxuICBhMTAwOiAkY29sb3JfX3ByaW1hcnksXG4gIGEyMDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgYTQwMDogJGNvbG9yX19wcmltYXJ5LFxuICBhNzAwOiAkY29sb3JfX3ByaW1hcnksXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDIwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAzMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNDAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDUwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA2MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDgwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA5MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTEwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhMjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGE0MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTcwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgKVxuKTtcblxuLyoqXG4gKiBEZWZpbmUgdGhlIG1hdGVyaWFsIGJhc2VkIGFjY2VudCBtYXBcbiAqL1xuJHRzLW1hdGVyaWFsLWFjY2VudDogKFxuICA1MDogJGNvbG9yX19hY2NlbnQtLXhsaWdodCxcbiAgMTAwOiAkY29sb3JfX2FjY2VudC0tbGlnaHQsXG4gIDIwMDogJGNvbG9yX19hY2NlbnQsXG4gIDMwMDogJGNvbG9yX19hY2NlbnQsXG4gIDQwMDogJGNvbG9yX19hY2NlbnQsXG4gIDUwMDogJGNvbG9yX19hY2NlbnQsXG4gIDYwMDogJGNvbG9yX19hY2NlbnQsXG4gIDcwMDogJGNvbG9yX19hY2NlbnQtLWRhcmssXG4gIDgwMDogJGNvbG9yX19hY2NlbnQsXG4gIDkwMDogJGNvbG9yX19hY2NlbnQtLXhkYXJrLFxuICBhMTAwOiAkY29sb3JfX2FjY2VudCxcbiAgYTIwMDogJGNvbG9yX19hY2NlbnQsXG4gIGE0MDA6ICRjb2xvcl9fYWNjZW50LFxuICBhNzAwOiAkY29sb3JfX2FjY2VudCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAxMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDMwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA0MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDYwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgODAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDkwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhMTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGEyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICApXG4pO1xuXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgd2FybiBtYXBcbiAqL1xuJHRzLW1hdGVyaWFsLXdhcm46IChcbiAgNTA6ICRjb2xvcl9fZXJyb3ItLWxpZ2h0LFxuICAxMDA6ICRjb2xvcl9fZXJyb3ItLWxpZ2h0LFxuICAyMDA6ICRjb2xvcl9fZXJyb3IsXG4gIDMwMDogJGNvbG9yX19lcnJvcixcbiAgNDAwOiAkY29sb3JfX2Vycm9yLFxuICA1MDA6ICRjb2xvcl9fZXJyb3IsXG4gIDYwMDogJGNvbG9yX19lcnJvcixcbiAgNzAwOiAkY29sb3JfX2Vycm9yLS1kYXJrLFxuICA4MDA6ICRjb2xvcl9fZXJyb3IsXG4gIDkwMDogJGNvbG9yX19lcnJvci0tZGFyayxcbiAgYTEwMDogJGNvbG9yX19lcnJvcixcbiAgYTIwMDogJGNvbG9yX19lcnJvcixcbiAgYTQwMDogJGNvbG9yX19lcnJvcixcbiAgYTcwMDogJGNvbG9yX19lcnJvcixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAxMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDMwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA0MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDYwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgODAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDkwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhMTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGEyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICApXG4pO1xuXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4vKipcbiAqIFRoZSBtYXAgb2YgYXZhaWxhYmxlIGN1cnNvcnNcbiAqL1xuJGctY3Vyc29yczogKFxuICAvKiBJbmRpY2F0ZXMgYW4gYWxpYXMgb3IgY29weSB3aWxsIGJlIG1hZGUgKi9cbiAgYWxpYXMsXG4gIC8qIExldCB0aGUgYnJvd3NlciBkZWNpZGUgKi9cbiAgYXV0byxcbiAgLyogSW5kaWNhdGVzIGFiaWxpdHkgdG8gcmVzaXplIGEgcGllY2Ugb2YgdGhlIGRvbTsgb2Z0ZW4gYSB0YWJsZSBjb2x1bW4gKi9cbiAgY29sLXJlc2l6ZSxcbiAgLyogSW5kaWNhdGVzIGFiaWxpdHkgdG8gY29weSAqL1xuICBjb3B5LFxuICAvKiBSZXNldCB0byB0aGUgZGVmYXVsdCBjdXJzb3IgKi9cbiAgZGVmYXVsdCxcbiAgLyogSW5kaWNhdGVzIGhlbHAgaXMgYXZhaWxhYmxlICovXG4gIGhlbHAsXG4gIC8qIEluZGljYXRlcyB0aGUgYWJpbGl0eSB0byBkcmFnIGFuIGl0ZW0gKi9cbiAgbW92ZSxcbiAgLyogSW5kaWNhdGVzIG5vIGF2YWlsYWJsZSBpbnRlcmFjdGlvbiAqL1xuICBub3QtYWxsb3dlZCxcbiAgLyogSW5kaWNhdGVzIHRoZSBhYmlsaXR5IHRvIG1vdmUgTm9ydGggYW5kIFNvdXRoICovXG4gIG5zLXJlc2l6ZSxcbiAgLyogSW5kaWNhdGVzIGludGVyYWN0aW9uICovXG4gIHBvaW50ZXIsXG4gIC8qIEluZGljYXRlcyB0ZXh0IGNvbnRyb2xzICovXG4gIHRleHQsXG4pO1xuXG5cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1jdXJzb3JzIGxpc3QuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGVuZm9yY2Ugd2hpY2ggY3Vyc29ycyBjYW4gYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS4gRGVmYXVsdDogYXV0b1xuICogQGV4YW1wbGVcbiAqICBjdXJzb3I6IGN1cnNvcigpO1xuICogIGN1cnNvcjogY3Vyc29yKHBvaW50ZXIpO1xuICovXG5AZnVuY3Rpb24gY3Vyc29yKCR0eXBlOiBhdXRvKSB7XG4gICRpbmRleDogaW5kZXgoJGctY3Vyc29ycywgJHR5cGUpO1xuXG4gIC8vIFZlcmlmeSB0aGUgdHlwZSBleGlzdHNcbiAgQGlmICgkaW5kZXggPT0gbnVsbCkge1xuICAgIEBlcnJvciAnSW52YWxpZCBjdXJzb3IgdHlwZSBuYW1lOiBgI3skdHlwZX1gLiBBbGxvd2VkIHR5cGVzOiBcIiN7JGctY3Vyc29yc31cIic7XG4gIH1cblxuICBAcmV0dXJuIG50aCgkZy1jdXJzb3JzLCAkaW5kZXgpO1xufVxuXG5cbi8qKlxuICogSW5jbHVkZSBhIGN1c3RvbSBjdXJzb3JcbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS5cbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY3Vyc29yO1xuICogIEBpbmNsdWRlIGN1cnNvcihwb2ludGVyKTtcbiAqL1xuQG1peGluIGN1cnNvcigkdHlwZSkge1xuICBjdXJzb3I6IGN1cnNvcigkdHlwZSk7XG59XG5cbi8qKlxuICogVGhlIHNwYWNpbmcgZGVmYXVsdFxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuJGctc3BhY2luZzogMTZweCAhZGVmYXVsdDtcblxuXG4vKipcbiAqIFRoZSBtYXAgb2YgbGF5b3V0IHNwYWNpbmdzXG4gKlxuICogU21hbGw6IDEyLCA4LCA0XG4gKiBCYXNlOiAxNlxuICogTGFyZ2U6IDI0LCAzMiwgNDAsIDQ4LCA1NiwgNzIsIDk2XG4gKlxuICogQHNlY3Rpb24gU3BhY2luZ1xuICovXG4kZy1zcGFjaW5nczogKFxuICBzbWFsbDogIChcbiAgICAyOiBmbG9vcigkZy1zcGFjaW5nIC8gNCksXG4gICAgMTogZmxvb3IoJGctc3BhY2luZyAvIDIpLFxuICAgIDA6IGZsb29yKCRnLXNwYWNpbmcgLSA0KSxcbiAgKSxcbiAgZGVmYXVsdDogKFxuICAgIDA6ICRnLXNwYWNpbmcsXG4gICksXG4gIGxhcmdlOiAoXG4gICAgMDogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDMpLFxuICAgIDE6IGNlaWwoJGctc3BhY2luZyAvIDIgKiA0KSxcbiAgICAyOiBjZWlsKCRnLXNwYWNpbmcgLyAyICogNSksXG4gICAgMzogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDYpLFxuICAgIDQ6IGNlaWwoJGctc3BhY2luZyAvIDIgKiA3KSxcbiAgICA1OiBjZWlsKCRnLXNwYWNpbmcgLyAyICogOSksXG4gICAgNjogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDEyKSxcbiAgKVxuKTtcblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc3BhY2UgZnJvbSB0aGUgJGctc3BhY2luZ3MgbWFwXG4gKlxuICogQHBhcmFtICR0eXBlXG4gKiAgVGhlIHNwYWNpbmcgbWFwIHRvIHVzZS4gRGVmYXVsdDogZGVmYXVsdFxuICogQHBhcmFtICRzaXplXG4gKiAgVGhlIHZhbHVlIGRlc2lyZWQgZnJvbSB0aGUgbWFwLiBEZWZhdWx0OiAwXG4gKiBAZXhhbXBsZVxuICogIHBhZGRpbmc6IHNwYWNpbmcoZGVmYXVsdCk7XG4gKiAgcGFkZGluZzogc3BhY2luZyhsYXJnZSk7XG4gKiAgcGFkZGluZzogc3BhY2luZyhsYXJnZSwgNCk7XG4gKi9cbkBmdW5jdGlvbiBzcGFjaW5nKCR0eXBlOiBkZWZhdWx0LCAkc2l6ZTogMCkge1xuICAvLyBWZXJpZnkgdGhlIHR5cGUgZXhpc3RzXG4gIEBpZiBub3QobWFwLWhhcy1rZXkoJGctc3BhY2luZ3MsICR0eXBlKSkge1xuICAgICRhbGxvd2VkLXR5cGVzOiBtYXAta2V5cygkZy1zcGFjaW5ncyk7XG4gICAgQGVycm9yICdJbnZhbGlkIHNwYWNpbmcgdHlwZSBuYW1lOiBgI3skdHlwZX1gLiBBbGxvd2VkIHR5cGU6ICN7JGFsbG93ZWQtdHlwZXN9JztcbiAgfVxuXG4gIC8vIFZlcmlmeSB0aGUgc2l6ZVxuICBAaWYgbm90KG1hcC1oYXMta2V5KG1hcC1nZXQoJGctc3BhY2luZ3MsICR0eXBlKSwgJHNpemUpKSB7XG4gICAgJGFsbG93ZWQtc2l6ZXM6IG1hcC1rZXlzKG1hcC1nZXQoJGctc3BhY2luZ3MsICR0eXBlKSk7XG4gICAgQGVycm9yICdJbnZhbGlkIHNpemU6IGAjeyRzaXplfWAuIEFsbG93ZWQgc2l6ZXMgZm9yIGAjeyR0eXBlfWAgYXJlOiAjeyRhbGxvd2VkLXNpemVzfSc7XG4gIH1cblxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkZy1zcGFjaW5ncywgJHR5cGUpLCAkc2l6ZSk7XG59XG5cblxuXG4vLyBEcmFnZ2FibGUgaXRlbVxuLmNkay1kcmFnIHtcbiAgLy8gU2V0IHVwIGZvciBkcmFnIGluZGljYXRvclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLy8gQW5pbWF0ZSBpdGVtcyBhcyB0aGV5IGFyZSBkcmFnZ2VkXG4gICY6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpO1xuICB9XG5cbiAgLmNkay1kcmFnLWhhbmRsZSB7XG4gICAgY29sb3I6IGNvbG9yKHV0aWxpdHksIGxpZ2h0KTtcbiAgICBjdXJzb3I6IGN1cnNvcihucy1yZXNpemUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogc3BhY2luZyhzbWFsbCwgMSk7XG4gIH1cblxuICAvLyBDb250YWluZXIgZm9yIGl0ZW0gY3VycmVudGx5IGJlaW5nIG1vdmVkXG4gICYuY2RrLWRyYWctcHJldmlldyB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHBsdWdpbi9zdHlsZWxpbnQtbm8taW5kaXN0aW5ndWlzaGFibGUtY29sb3JzICovXG4gICAgLS1zaGFkb3c6XG4gICAgICAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIC4yKSxcbiAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE0KSxcbiAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvcihwdXJlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgLy8gTk9URTogU2luY2UgdGhlIHdpZHRoIGlzIGR5bmFtaWNhbGx5IHNldCBieSB0aGUgQ0RLLCB3ZSB6ZXJvIG91dCB0aGUgcGFkZGluZyBoZXJlIGFuZCBmYWtlIGl0IHdpdGggbGVmdCBtYXJnaW4gYmVsb3cuXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICAgIC5jLWNoZWNrYm94IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBzcGFjaW5nKGRlZmF1bHQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDb250YWluZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IGRyb3AgbG9jYXRpb25cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICRwcmltYXJ5OiAje2NvbG9yKHByaW1hcnkpfTtcbiAgLy8gVE9ETzogRml4IGhhcmRjb2RlZCBjb2xvcnMgb25jZSB0aGUgY29sb3IgdXBkYXRlIGhhcHBlbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9HZXRUZXJtaW51cy90ZXJtaW51cy11aS9pc3N1ZXMvOTY2XG4gIC0tZHJvcC1iZzogI2NjZThkNTtcbiAgLS1kcm9wLWJvcmRlcjogIzdmZDA5YztcbiAgYmFja2dyb3VuZDogdmFyKC0tZHJvcC1iZyk7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1kcm9wLWJvcmRlcik7XG4gIC8vIE5PVEU6IFRoaXMgaXMgdGhlIGN1cnNvciB0aGUgdXNlciB3aWxsIHNlZSB3aGVuIGRyYWdnaW5nIGFuIGl0ZW0gKHRoZSBkcmFnIHByZXZpZXcgaGFzIGBwb2ludGVyLWV2ZW50czogbm9uZWApXG4gIGN1cnNvcjogY3Vyc29yKG5zLXJlc2l6ZSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpO1xufVxuXG4vKipcbiAqIEEgbWl4aW4gdG8gY29ycmVjdGx5IG5lc3QgcGxhY2Vob2xkZXIgc3R5bGVzXG4gKlxuICogQGV4YW1wbGVcbiAqICBpbnB1dC1wbGFjZWhvbGRlciB7XG4gKiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAqICB9XG4gKi9cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG5cbi8qKlxuICogQSBtaXhpbiB0byBjb3JyZWN0bHkgbmVzdCBwbGFjZWhvbGRlciBzdHlsZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAqICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICogIH1cbiAqL1xuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8qKlxuICogQ2VudGVyIGNoaWxkIGNvbnRlbnQgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5XG4gKlxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBjZW50ZXItY29udGVudDtcbiAqL1xuQG1peGluIGNlbnRlci1jb250ZW50IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgZWFjaCBkaXJlY3Rpb24gaW4gYSBsaXN0XG4gKlxuICogQHBhcmFtICRkaXJlY3Rpb25zXG4gKiAgTGlzdCBvZiBpbml0aWFsIGRpcmVjdGlvbnNcbiAqIEBleGFtcGxlXG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKHRvcCk7XG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKGxlZnQsIGJvdHRvbSk7XG4gKi9cbkBmdW5jdGlvbiBvcHBvc2l0ZS1kaXJlY3Rpb24oJGRpcmVjdGlvbnMpIHtcbiAgJG9wcG9zaXRlLWRpcmVjdGlvbnM6ICgpO1xuICAkZGlyZWN0aW9uLW1hcDogKFxuICAgICd0b3AnOiAnYm90dG9tJyxcbiAgICAncmlnaHQnOiAnbGVmdCcsXG4gICAgJ2JvdHRvbSc6ICd0b3AnLFxuICAgICdsZWZ0JzogJ3JpZ2h0JyxcbiAgICAnY2VudGVyJzogJ2NlbnRlcicsXG4gICAgJ2x0cic6ICdydGwnLFxuICAgICdydGwnOiAnbHRyJ1xuICApO1xuXG4gIEBlYWNoICRkaXJlY3Rpb24gaW4gJGRpcmVjdGlvbnMge1xuICAgICRkaXJlY3Rpb246IHRvLWxvd2VyLWNhc2UoJGRpcmVjdGlvbik7XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbi1tYXAsICRkaXJlY3Rpb24pIHtcbiAgICAgICRvcHBvc2l0ZS1kaXJlY3Rpb25zOiBhcHBlbmQoJG9wcG9zaXRlLWRpcmVjdGlvbnMsIHVucXVvdGUobWFwLWdldCgkZGlyZWN0aW9uLW1hcCwgJGRpcmVjdGlvbikpKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciAnTm8gb3Bwb3NpdGUgZGlyZWN0aW9uIGNhbiBiZSBmb3VuZCBmb3IgYCN7JGRpcmVjdGlvbn1gLiBEaXJlY3Rpb24gb21pdHRlZC4nO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gJG9wcG9zaXRlLWRpcmVjdGlvbnM7XG59XG5cbi8qKlxuICogUHNldWRvIGVsZW1lbnQgYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0gJGRpc3BsYXlcbiAqICBUaGUgZGlzcGxheSB2YWx1ZSAoYmxvY2svaW5saW5lL2V0YylcbiAqIEBwYXJhbSAkcG9zaXRpb25cbiAqICBUaGUgcG9zaXRpb24gc3R5bGUgKGFic29sdXRlL3N0YXRpYy9ldGMpXG4gKiBAcGFyYW0gJGNvbnRlbnRcbiAqICBUaGUgY29udGVudCB2YWx1ZVxuICovXG5AbWl4aW4gcHNldWRvKFxuICAkZGlzcGxheTogYmxvY2ssXG4gICRwb3NpdGlvbjogYWJzb2x1dGUsXG4gICRjb250ZW50OiAnJ1xuKSB7XG4gIGNvbnRlbnQ6ICRjb250ZW50O1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbn1cblxuLyoqXG4gKiBDb250cm9sIHRoZSByYXRpbyBmb3IgcmVzcG9uc2l2ZSBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSAkeFxuICogIFRoZSB4IHJhdGlvXG4gKiBAcGFyYW0gJHlcbiAqICBUaGUgeSByYXRpb1xuICogQHBhcmFtICRwc2V1ZG9cbiAqICBEZXRlcm1pbmUgaWYgYSBwc2V1ZG8gZWxlbWVudCBzaG91bGQgYmUgdXNlZCB0byBjb250cm9sIHRoZSByYXRpby4gRGVmYXVsdDogdHJ1ZVxuICogQHBhcmFtICRpbWFnZVxuICogIFRoZSBpbWFnZSBzb3VyY2UuIERlZmF1bHQ6IG51bGxcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1yYXRpbygzLCA0KTtcbiAqICBAaW5jbHVkZSByZXNwb25zaXZlLXJhdGlvKDIwLCA5LCB0cnVlLCB1cmwoJy9pbWFnZXMvbGFuZGluZy1oZXJvLmpwZycpKTtcbiAqL1xuQG1peGluIHJlc3BvbnNpdmUtcmF0aW8oJHgsICR5LCAkcHNldWRvOiB0cnVlLCAkaW1hZ2U6IG51bGwpIHtcbiAgJHBhZGRpbmc6IHVucXVvdGUoKCggJHkgLyAkeCApICogMTAwKSArICclJyk7XG5cbiAgQGlmICR4ID09IG51bGwgb3IgJHkgPT0gbnVsbCB7XG4gICAgQGVycm9yICdCb3RoIHRoZSB4IGFuZCB5IHJhdGlvcyBtdXN0IGJlIHBhc3NlZCBpbi4nO1xuICB9XG5cbiAgQGlmICRwc2V1ZG8ge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSBwc2V1ZG8oJHBvc2l0aW9uOiByZWxhdGl2ZSk7XG4gICAgICBwYWRkaW5nLXRvcDogJHBhZGRpbmc7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIHBhZGRpbmctdG9wOiAkcGFkZGluZztcbiAgfVxuXG4gIEBpZiBpbWFnZSAhPSBudWxsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5cbi8qKlxuICogRmlsbCB0aGUgcGFyZW50IGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gJG1hcmdpblxuICogIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgZWRnZSBvZiB0aGUgcGFyZW50LiBEZWZhdWx0OiAwXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGZpbGwtcGFyZW50O1xuICogIEBpbmNsdWRlIGZpbGwtcGFyZW50KDFlbSk7XG4gKi9cbkBtaXhpbiB0YWtlLXNwYWNlKCRtYXJnaW46IDApIHtcbiAgYm90dG9tOiAkbWFyZ2luO1xuICBsZWZ0OiAkbWFyZ2luO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAkbWFyZ2luO1xuICB0b3A6ICRtYXJnaW47XG59XG5cbi8qKlxuICogTWFrZSBjb250ZW50IHZpc3VhbGx5IGhpZGRlblxuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuO1xuICovXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuIHtcbiAgJHNtYWxsZXN0LWFkanVzdG1lbnQ6IDFweDtcbiAgYm9yZGVyOiAwO1xuICAvLyBub2luc3BlY3Rpb24gQ3NzSW52YWxpZFByb3BlcnR5VmFsdWVcbiAgY2xpcC1wYXRoOiByZWN0KDAsIDAsIDAsIDApO1xuICAvLyBOb3QgYWxsIHN0eWxlcyBhcHBseSB0byBpbmxpbmUgZWxlbWVudHNcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogJHNtYWxsZXN0LWFkanVzdG1lbnQ7XG4gIG1hcmdpbjogLSRzbWFsbGVzdC1hZGp1c3RtZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAkc21hbGxlc3QtYWRqdXN0bWVudDtcbn1cblxuLy8gTk9URTogRGlzYWJsaW5nIHRoZSBzdHJpY3QgdmFsdWUgcnVsZSBhcyB3ZSBuZWVkIHRvIGJ1aWxkIG91ciB0eXBlIHN0eWxlc1xuLy8gc3R5bGVsaW50LWRpc2FibGUgc2NhbGUtdW5saW1pdGVkL2RlY2xhcmF0aW9uLXN0cmljdC12YWx1ZVxuXG5cbi8qKlxuICogVGhlIGJhc2UgdHlwZWZhY2VcbiAqL1xuJHR5cGVfX2ZhbWlseS0tYmFzZTogI3tSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZ9ICFkZWZhdWx0O1xuXG4vKipcbiAqIFRoZSBtb25vc3BhY2VkIHR5cGVmYWNlIGZhbWlseVxuICovXG4kdHlwZV9fZmFtaWx5LS1tb25vc3BhY2VkOiAjeydMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgJ0RlamFWdSBTYW5zIE1vbm8nLCBtb25vc3BhY2V9ICFkZWZhdWx0O1xuXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwZWZhY2VzXG4gKi9cbiR0eXBvZ3JhcGh5LXR5cGVmYWNlczogKFxuICAncHJpbWFyeSc6ICR0eXBlX19mYW1pbHktLWJhc2UsXG4gICdtb25vc3BhY2VkJzogJHR5cGVfX2ZhbWlseS0tbW9ub3NwYWNlZFxuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHNpemVcbiAqL1xuJHR5cGVfX3NpemUtLWJhc2U6IDE2cHggIWRlZmF1bHQ7XG5cbi8qKlxuICogVGhlIGJhc2UgdHlwb2dyYXBoeSB3ZWlnaHRcbiAqL1xuJHR5cGVfX3dlaWdodC0tYmFzZTogNDAwICFkZWZhdWx0O1xuXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwb2dyYXBoeSBmb3JtYXRzXG4gKi9cbiR0eXBvZ3JhcGh5LWZvcm1hdHM6IChcbiAgJ2Rpc3BsYXknLFxuICAnaGVhZGxpbmUnLFxuICAndGl0bGUnLFxuICAnc3ViaGVhZCcsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnZml4ZWR3aWR0aCcsXG4gICdoaW50J1xuKTtcblxuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cG9ncmFwaHkgbGV2ZWxzIGZvciB0aGUgYGRpc3BsYXlgIGZvcm1hdFxuICovXG4kdHlwb2dyYXBoeS1kaXNwbGF5LWxldmVsczogKFxuICAxLFxuICAyLFxuICAzLFxuICA0XG4pO1xuXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwb2dyYXBoeSBsZXZlbHMgZm9yIHRoZSBgYm9keWAgZm9ybWF0XG4gKi9cbiR0eXBvZ3JhcGh5LWJvZHktbGV2ZWxzOiAoXG4gIDEsXG4gIDJcbik7XG5cblxuLyoqXG4gKiBSZXR1cm4gdHlwb2dyYXBoeSBzdHlsZXMgYmFzZWQgb24gdGhlIGZvcm1hdCBhbmQgbGV2ZWxcbiAqXG4gKiBAcGFyYW0gJGZvcm1hdFxuICogIE9uZSBvZiB0aGUgYXZhaWxhYmxlIGZvcm1hdHMgZGVmaW5lZCB3aXRoaW4gJHR5cG9ncmFwaHktZm9ybWF0cy4gRGVmYXVsdDogJ2JvZHknLlxuICogQHBhcmFtICRsZXZlbFxuICogIE9uZSBvZiB0aGUgYWNjZXB0ZWQgbGV2ZWxzIGZvciB0aGUgcGFzc2VkIGluIGZvcm1hdC4gRGVmYXVsdDogMVxuICogQHBhcmFtICR0eXBlZmFjZVxuICogIE9uZSBvZiB0aGUgYXZhaWxhYmxlIHR5cGVmYWNlcyBkZWZpbmVkIGluICR0eXBvZ3JhcGh5LXR5cGVmYWNlcy4gRGVmYXVsdDogJ3ByaW1hcnknXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHR5cG9ncmFwaHk7XG4gKiAgQGluY2x1ZGUgdHlwb2dyYXBoeShkaXNwbGF5LCA0KTtcbiAqL1xuQG1peGluIHR5cG9ncmFwaHkoJGZvcm1hdDogJ2JvZHknLCAkbGV2ZWw6IDEsICR0eXBlZmFjZTogJ3ByaW1hcnknKSB7XG4gIC8vIFZlcmlmeSB0aGUgZm9ybWF0IGlzIHZhbGlkXG4gIEBpZiBpbmRleCgkdHlwb2dyYXBoeS1mb3JtYXRzLCAkZm9ybWF0KSA9PSBudWxsIHtcbiAgICBAZXJyb3IgJ0ludmFsaWQgdHlwb2dyYXBoeSBmb3JtYXQ6IGAjeyRmb3JtYXR9YC4gQWxsb3dlZCBmb3JtYXRzOiAjeyR0eXBvZ3JhcGh5LWZvcm1hdHN9JztcbiAgfVxuXG4gIC8vIFZlcmlmeSB0aGUgdHlwZWZhY2UgaXMgdmFsaWRcbiAgQGlmIG5vdChtYXAtaGFzLWtleSgkdHlwb2dyYXBoeS10eXBlZmFjZXMsICR0eXBlZmFjZSkpIHtcbiAgICAkYWxsb3dlZDogbWFwLWtleXMoJHR5cG9ncmFwaHktdHlwZWZhY2VzKTtcbiAgICBAZXJyb3IgJ0ludmFsaWQgdHlwb2dyYXBoeSB0eXBlZmFjZTogYCN7JHR5cGVmYWNlfWAuIEFsbG93ZWQgdHlwZWZhY2VzOiAjeyRhbGxvd2VkfSc7XG4gIH0gQGVsc2Uge1xuICAgIGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCR0eXBvZ3JhcGh5LXR5cGVmYWNlcywgJHR5cGVmYWNlKTtcbiAgfVxuXG5cbiAgLy8gRElTUExBWVxuICBAaWYgJGZvcm1hdCA9PSAnZGlzcGxheScge1xuICAgIC8vIFZlcmlmeSB0aGUgbGV2ZWwgaXMgdmFsaWQgZm9yIHRoaXMgZm9ybWF0XG4gICAgQGlmIGluZGV4KCR0eXBvZ3JhcGh5LWRpc3BsYXktbGV2ZWxzLCAkbGV2ZWwpID09IG51bGwge1xuICAgICAgQGVycm9yICdJbnZhbGlkIGRpc3BsYXkgZm9ybWF0IGxldmVsOiBgI3skbGV2ZWx9YC4gQWxsb3dlZCBsZXZlbHM6ICN7JHR5cG9ncmFwaHktZGlzcGxheS1sZXZlbHN9JztcbiAgICB9XG5cbiAgICBAaWYgJGxldmVsID09IDEge1xuICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIEBpZiAkbGV2ZWwgPT0gMiB7XG4gICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgfVxuXG4gICAgQGlmICRsZXZlbCA9PSAzIHtcbiAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLS4wMDVlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIH1cblxuICAgIEBpZiAkbGV2ZWwgPT0gNCB7XG4gICAgICBmb250LXNpemU6IDExMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW07XG4gICAgICBsaW5lLWhlaWdodDogMTEycHg7XG4gICAgfVxuICB9XG5cblxuICAvLyBIRUFETElORVxuICBAaWYgJGZvcm1hdCA9PSAnaGVhZGxpbmUnIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgfVxuXG5cbiAgLy8gVElUTEVcbiAgQGlmICRmb3JtYXQgPT0gJ3RpdGxlJyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMDVlbTtcbiAgfVxuXG5cbiAgLy8gU1VCSEVBRFxuICBAaWYgJGZvcm1hdCA9PSAnc3ViaGVhZCcge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDFlbTtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG5cbiAgLy8gQk9EWVxuICBAaWYgJGZvcm1hdCA9PSAnYm9keScge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxZW07XG5cbiAgICAvLyBWZXJpZnkgdGhlIGxldmVsIGlzIHZhbGlkIGZvciB0aGlzIGZvcm1hdFxuICAgIEBpZiBpbmRleCgkdHlwb2dyYXBoeS1ib2R5LWxldmVscywgJGxldmVsKSA9PSBudWxsIHtcbiAgICAgIEBlcnJvciAnSW52YWxpZCBib2R5IGZvcm1hdCBsZXZlbDogYCN7JGxldmVsfWAuIEFsbG93ZWQgbGV2ZWxzOiAjeyR0eXBvZ3JhcGh5LWJvZHktbGV2ZWxzfSc7XG4gICAgfVxuXG4gICAgQGlmICRsZXZlbCA9PSAxIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgIC8vIFRPRE86IG92ZXJ3cml0ZSBpbiBmaWxlcyByYXRoZXIgdGhhbiB0aGlzIG5lc3RlZCBjaGFpbiAodG9vIHNwZWNpZmljKSBodHRwczovL2dpdGh1Yi5jb20vR2V0VGVybWludXMvdGVybWludXMtdWkvaXNzdWVzLzExNTJcbiAgICAgIC8vIERvbid0IGFwcGx5IGN1c3RvbSBsaW5lLWhlaWdodCB0byBidXR0b25zXG4gICAgICAmOm5vdCguYy1idXR0b24pIHtcbiAgICAgICAgJjpub3QoLmMtaW5wdXQpIHtcbiAgICAgICAgICAmOm5vdCguYy1zZWxlY3QpIHtcbiAgICAgICAgICAgICY6bm90KC50cy1jaGVja2JveCkge1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJGxldmVsID09IDIge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuXG4gIC8vIENBUFRJT05cbiAgQGlmICRmb3JtYXQgPT0gJ2NhcHRpb24nIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xuICB9XG5cblxuICAvLyBGSVhFRFdJRFRIXG4gIEBpZiAkZm9ybWF0ID09ICdmaXhlZHdpZHRoJyB7XG4gICAgZm9udC1mYW1pbHk6ICR0eXBlX19mYW1pbHktLW1vbm9zcGFjZWQ7XG4gIH1cblxuXG4gIC8vIEhpbnRzIChmb3IgaW5wdXRzKVxuICBAaWYgJGZvcm1hdCA9PSAnaGludCcge1xuICAgIGNvbG9yOiBjb2xvcih1dGlsaXR5KTtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cblxuLyoqXG4gKiBUcnVuY2F0ZSBvdmVyZmxvd2luZyB0ZXh0IHdpdGggYW4gZWxsaXBzaXNcbiAqXG4gKiBAbWl4aW4gdHlwb2dyYXBoeVxuICogQHNlY3Rpb24gU3R5bGUgSGVscGVyc1xuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSB0cnVuY2F0ZS1vdmVyZmxvdztcbiAqL1xuQG1peGluIHRydW5jYXRlLW92ZXJmbG93KCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyoqXG4gKiBUaGUgc3BhY2luZyBkZWZhdWx0XG4gKlxuICogQHNlY3Rpb24gU3BhY2luZ1xuICovXG4kZy1zcGFjaW5nOiAxNnB4ICFkZWZhdWx0O1xuXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsYXlvdXQgc3BhY2luZ3NcbiAqXG4gKiBTbWFsbDogMTIsIDgsIDRcbiAqIEJhc2U6IDE2XG4gKiBMYXJnZTogMjQsIDMyLCA0MCwgNDgsIDU2LCA3MiwgOTZcbiAqXG4gKiBAc2VjdGlvbiBTcGFjaW5nXG4gKi9cbiRnLXNwYWNpbmdzOiAoXG4gIHNtYWxsOiAgKFxuICAgIDI6IGZsb29yKCRnLXNwYWNpbmcgLyA0KSxcbiAgICAxOiBmbG9vcigkZy1zcGFjaW5nIC8gMiksXG4gICAgMDogZmxvb3IoJGctc3BhY2luZyAtIDQpLFxuICApLFxuICBkZWZhdWx0OiAoXG4gICAgMDogJGctc3BhY2luZyxcbiAgKSxcbiAgbGFyZ2U6IChcbiAgICAwOiBjZWlsKCRnLXNwYWNpbmcgLyAyICogMyksXG4gICAgMTogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDQpLFxuICAgIDI6IGNlaWwoJGctc3BhY2luZyAvIDIgKiA1KSxcbiAgICAzOiBjZWlsKCRnLXNwYWNpbmcgLyAyICogNiksXG4gICAgNDogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDcpLFxuICAgIDU6IGNlaWwoJGctc3BhY2luZyAvIDIgKiA5KSxcbiAgICA2OiBjZWlsKCRnLXNwYWNpbmcgLyAyICogMTIpLFxuICApXG4pO1xuXG5cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1zcGFjaW5ncyBtYXBcbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgc3BhY2luZyBtYXAgdG8gdXNlLiBEZWZhdWx0OiBkZWZhdWx0XG4gKiBAcGFyYW0gJHNpemVcbiAqICBUaGUgdmFsdWUgZGVzaXJlZCBmcm9tIHRoZSBtYXAuIERlZmF1bHQ6IDBcbiAqIEBleGFtcGxlXG4gKiAgcGFkZGluZzogc3BhY2luZyhkZWZhdWx0KTtcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGxhcmdlKTtcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGxhcmdlLCA0KTtcbiAqL1xuQGZ1bmN0aW9uIHNwYWNpbmcoJHR5cGU6IGRlZmF1bHQsICRzaXplOiAwKSB7XG4gIC8vIFZlcmlmeSB0aGUgdHlwZSBleGlzdHNcbiAgQGlmIG5vdChtYXAtaGFzLWtleSgkZy1zcGFjaW5ncywgJHR5cGUpKSB7XG4gICAgJGFsbG93ZWQtdHlwZXM6IG1hcC1rZXlzKCRnLXNwYWNpbmdzKTtcbiAgICBAZXJyb3IgJ0ludmFsaWQgc3BhY2luZyB0eXBlIG5hbWU6IGAjeyR0eXBlfWAuIEFsbG93ZWQgdHlwZTogI3skYWxsb3dlZC10eXBlc30nO1xuICB9XG5cbiAgLy8gVmVyaWZ5IHRoZSBzaXplXG4gIEBpZiBub3QobWFwLWhhcy1rZXkobWFwLWdldCgkZy1zcGFjaW5ncywgJHR5cGUpLCAkc2l6ZSkpIHtcbiAgICAkYWxsb3dlZC1zaXplczogbWFwLWtleXMobWFwLWdldCgkZy1zcGFjaW5ncywgJHR5cGUpKTtcbiAgICBAZXJyb3IgJ0ludmFsaWQgc2l6ZTogYCN7JHNpemV9YC4gQWxsb3dlZCBzaXplcyBmb3IgYCN7JHR5cGV9YCBhcmU6ICN7JGFsbG93ZWQtc2l6ZXN9JztcbiAgfVxuXG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRnLXNwYWNpbmdzLCAkdHlwZSksICRzaXplKTtcbn1cblxuXG5cbi8qKlxuICogQmFzZSBzdHlsZXMgZm9yIG1lbnUgaXRlbXNcbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIG1lbnUtYmFzZTtcbiAqL1xuQG1peGluIG1lbnUtaXRlbS1iYXNlKCkge1xuICBAaW5jbHVkZSB0cnVuY2F0ZS1vdmVyZmxvdztcbiAgLy8gTmVlZHMgdG8gYmUgYSBibG9jayBmb3IgdGhlIGVsbGlwc2lzIHRvIHdvcmsuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBSZXF1aXJlZCBmb3IgRWRnZSBub3QgdG8gc2hvdyBzY3JvbGxiYXJzIHdoZW4gc2V0dGluZyB0aGUgd2lkdGggbWFudWFsbHkuXG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCBzcGFjaW5nKGRlZmF1bHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC8vIE5lY2Vzc2FyeSB0byByZXNldCBhbmNob3IgdGFnczpcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKipcbiAqIFJlc2V0IGJyb3dzZXIgYW5kIGJvb3RzdHJhcCBzdHlsZXNcbiAqXG4gKiBOT1RFOiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHdlIGNhbm5vdCB1c2UgYSBnbG9iYWwgcmVzZXQgc3R5bGVzaGVldC4gT25jZSB0aGUgZnVsbCBUZXJtaW51cyBhcHBcbiAqIGhhcyB0cmFuc2l0aW9uZWQgdG8gdGhlIFVJIGxpYnJhcnksIHRoaXMgY2FuIGJlIHJlbW92ZWQgaW4gZmF2b3Igb2YgYSBnbG9iYWwgcmVzZXQgc3R5bGVzaGVldC5cbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHJlc2V0O1xuICovXG5AbWl4aW4gcmVzZXQoKSB7XG4gIC8vIEVuZm9yY2UgY29uc2lzdGVudCBzaXppbmdcbiAgLy8gTk9URTogd3JhcHBlcnMgZm9yIE1hdGVyaWFsIGxhYmVscyB1c2UgYSBjdXN0b20gYm94LXNpemluZ1xuICAqIHtcbiAgICAmOm5vdCgubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcikge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIH1cblxuICAvLyBVbnNldCBtYXJnaW5zXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgcCB7XG4gICAgbWFyZ2luOiB1bnNldDtcbiAgfVxufVxuXG4vKipcbiAqIFB1cmUgLSBEYXJrXG4gKi9cbiRjb2xvcl9fcHVyZS0tZGFyazogIzMwMmQzNSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQdXJlIC0gTGlnaHRcbiAqL1xuJGNvbG9yX19wdXJlLS1saWdodDogI2ZhZmFmYSAhZGVmYXVsdDtcblxuXG5cblxuLyoqXG4gKiBVdGlsaXR5IC0gRXh0cmEgRGFya1xuICovXG4kY29sb3JfX3V0aWxpdHktLXhkYXJrOiAjM2UzYzQzICFkZWZhdWx0O1xuXG4vKipcbiAqIFV0aWxpdHkgLSBEYXJrXG4gKi9cbiRjb2xvcl9fdXRpbGl0eS0tZGFyazogIzc1NzU3NSAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5XG4gKi9cbiRjb2xvcl9fdXRpbGl0eTogIzk5OSAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5IC0gTGlnaHRcbiAqL1xuJGNvbG9yX191dGlsaXR5LS1saWdodDogI2NlY2RkMSAhZGVmYXVsdDtcblxuLyoqXG4gKiBVdGlsaXR5IC0gRXh0cmEgTGlnaHRcbiAqL1xuJGNvbG9yX191dGlsaXR5LS14bGlnaHQ6ICNmMmYwZjcgIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBQcmltYXJ5IC0gRXh0cmEgRGFya1xuICovXG4kY29sb3JfX3ByaW1hcnktLXhkYXJrOiAjMGEzNzViICFkZWZhdWx0O1xuXG4vKipcbiAqIFByaW1hcnkgLSBEYXJrXG4gKi9cbiRjb2xvcl9fcHJpbWFyeS0tZGFyazogIzBjNDI3MSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5XG4gKi9cbiRjb2xvcl9fcHJpbWFyeTogIzAwNTM4YSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5IC0gTGlnaHRcbiAqL1xuJGNvbG9yX19wcmltYXJ5LS1saWdodDogIzE2NjZiMSAhZGVmYXVsdDtcblxuLyoqXG4gKiBQcmltYXJ5IC0geExpZ2h0XG4gKi9cbiRjb2xvcl9fcHJpbWFyeS0teGxpZ2h0OiAjMTc3N2I2ICFkZWZhdWx0O1xuXG5cbi8qKlxuICogQWNjZW50IC0gRXh0cmEgRGFya1xuICovXG4kY29sb3JfX2FjY2VudC0teGRhcms6ICMyYjY3M2YgIWRlZmF1bHQ7XG5cbi8qKlxuICogQWNjZW50IC0gRGFya1xuICovXG4kY29sb3JfX2FjY2VudC0tZGFyazogIzMxNzQ0OCAhZGVmYXVsdDtcblxuLyoqXG4gKiBBY2NlbnRcbiAqL1xuJGNvbG9yX19hY2NlbnQ6ICMyZjg1NGQgIWRlZmF1bHQ7XG5cbi8qKlxuICogQWNjZW50IC0gTGlnaHRcbiAqL1xuJGNvbG9yX19hY2NlbnQtLWxpZ2h0OiAjM2I5YjVjICFkZWZhdWx0O1xuXG4vKipcbiAqIEFjY2VudCAtIHhMaWdodFxuICovXG4kY29sb3JfX2FjY2VudC0teGxpZ2h0OiBsaWdodGVuKCRjb2xvcl9fYWNjZW50LCA2MCUpICFkZWZhdWx0O1xuXG5cblxuXG4vKipcbiAqIEVycm9yIC0gRGFya1xuICovXG4kY29sb3JfX2Vycm9yLS1kYXJrOiAjYjU1OTQ5ICFkZWZhdWx0O1xuXG4vKipcbiAqIEVycm9yXG4gKi9cbiRjb2xvcl9fZXJyb3I6ICNjODYwNGQgIWRlZmF1bHQ7XG5cbi8qKlxuICogRXJyb3IgLSBMaWdodFxuICovXG4kY29sb3JfX2Vycm9yLS1saWdodDogI2Q3NmM1OSAhZGVmYXVsdDtcblxuXG4vKipcbiAqIFdhcm4gLSBEYXJrXG4gKi9cbiRjb2xvcl9fd2Fybi0tZGFyazogI2NjOWY0NSAhZGVmYXVsdDtcblxuLyoqXG4gKiBXYXJuXG4gKi9cbiRjb2xvcl9fd2FybjogI2RlYTgzYiAhZGVmYXVsdDtcblxuLyoqXG4gKiBXYXJuIC0gTGlnaHRcbiAqL1xuJGNvbG9yX193YXJuLS1saWdodDogI2U4YjU1MCAhZGVmYXVsdDtcblxuXG4vKipcbiAqIEhpZ2hsaWdodCAtIERhcmtcbiAqL1xuJGNvbG9yX19oaWdobGlnaHQtLWRhcms6ICNkZGQ0NTUgIWRlZmF1bHQ7XG5cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cbiRjb2xvcl9faGlnaGxpZ2h0OiAjZWZlNTU3ICFkZWZhdWx0O1xuXG4vKipcbiAqIEhpZ2hsaWdodCAtIExpZ2h0XG4gKi9cbiRjb2xvcl9faGlnaGxpZ2h0LS1saWdodDogI2Y2ZWY4YiAhZGVmYXVsdDtcblxuXG4vKipcbiAqIFRoZSBtYXAgb2YgY29sb3JzXG4gKlxuICogTm90ZTogQ3VycmVudGx5LCB3YXJuIGFuZCBlcnJvciBhcmUgdGhlIHNhbWUgY29sb3IgaW4gdGhlICRwYWxldHRlcyBtYXAuIE1vcmUgd29yayBuZWVkcyB0byBiZSBkb25lIHRvIHNvbGlkaWZ5IG91ciBwYWxldHRlLlxuICovXG4kcGFsZXR0ZXM6IChcbiAgcHJpbWFyeTogKFxuICAgIHhsaWdodDogJGNvbG9yX19wcmltYXJ5LS14bGlnaHQsXG4gICAgbGlnaHQ6ICRjb2xvcl9fcHJpbWFyeS0tbGlnaHQsXG4gICAgYmFzZTogJGNvbG9yX19wcmltYXJ5LFxuICAgIGRhcms6ICRjb2xvcl9fcHJpbWFyeS0tZGFyayxcbiAgICB4ZGFyazogJGNvbG9yX19wcmltYXJ5LS14ZGFya1xuICApLFxuICBhY2NlbnQ6IChcbiAgICB4bGlnaHQ6ICRjb2xvcl9fYWNjZW50LS14bGlnaHQsXG4gICAgbGlnaHQ6ICRjb2xvcl9fYWNjZW50LS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX2FjY2VudCxcbiAgICBkYXJrOiAkY29sb3JfX2FjY2VudC0tZGFyayxcbiAgICB4ZGFyazogJGNvbG9yX19hY2NlbnQtLXhkYXJrXG4gICksXG4gIGVycm9yOiAoXG4gICAgbGlnaHQ6ICRjb2xvcl9fZXJyb3ItLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9fZXJyb3IsXG4gICAgZGFyazogJGNvbG9yX19lcnJvci0tZGFya1xuICApLFxuICB3YXJuOiAoXG4gICAgbGlnaHQ6ICRjb2xvcl9fZXJyb3ItLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9fZXJyb3IsXG4gICAgZGFyazogJGNvbG9yX19lcnJvci0tZGFya1xuICApLFxuICBoaWdobGlnaHQ6IChcbiAgICBsaWdodDogJGNvbG9yX19oaWdobGlnaHQtLWxpZ2h0LFxuICAgIGJhc2U6ICRjb2xvcl9faGlnaGxpZ2h0LFxuICAgIGRhcms6ICRjb2xvcl9faGlnaGxpZ2h0LS1kYXJrXG4gICksXG4gIHB1cmU6IChcbiAgICBkYXJrOiAkY29sb3JfX3B1cmUtLWRhcmssXG4gICAgYmFzZTogJGNvbG9yX19wdXJlLS1saWdodFxuICApLFxuICB1dGlsaXR5OiAoXG4gICAgeGxpZ2h0OiAkY29sb3JfX3V0aWxpdHktLXhsaWdodCxcbiAgICBsaWdodDogJGNvbG9yX191dGlsaXR5LS1saWdodCxcbiAgICBiYXNlOiAkY29sb3JfX3V0aWxpdHksXG4gICAgZGFyazogJGNvbG9yX191dGlsaXR5LS1kYXJrLFxuICAgIHhkYXJrOiAkY29sb3JfX3V0aWxpdHktLXhkYXJrXG4gIClcbik7XG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIGNvbG9yIGZyb20gdGhlIGNvbG9ycyBtYXBcbiAqXG4gKiBAcGFyYW0gJHBhbGV0dGVcbiAqICBUaGUgcGFsZXR0ZSB0byB1c2UgZnJvbSB0aGUgbWFwXG4gKiBAcGFyYW0gJHRvbmVcbiAqICBUaGUgdG9uZSB0byB1c2UgZnJvbSB0aGUgc2VsZWN0ZWQgbWFwLiBEZWZhdWx0OiBiYXNlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGNvbG9yKHByaW1hcnkpO1xuICogIEBpbmNsdWRlIGNvbG9yKGFjY2VudCwgbGlnaHQpO1xuICovXG5AZnVuY3Rpb24gY29sb3IoJHBhbGV0dGUsICR0b25lOiAnYmFzZScpIHtcbiAgLy8gVmVyaWZ5IHRoZSBwYWxldHRlIGV4aXN0cyAoY29sb3IpXG4gIEBpZiBub3QobWFwLWhhcy1rZXkoJHBhbGV0dGVzLCAkcGFsZXR0ZSkpIHtcbiAgICAkYWxsb3dlZDogbWFwLWtleXMoJHBhbGV0dGVzKTtcbiAgICBAZXJyb3IgJ0ludmFsaWQgcGFsZXR0ZSBuYW1lOiBgI3skcGFsZXR0ZX1gLiBBbGxvd2VkIHBhbGV0dGVzOiAjeyRhbGxvd2VkfSc7XG4gIH1cblxuICAvLyBWZXJpZnkgdGhlIHRvbmUgZXhpc3RzICh2YXJpYXRpb24pXG4gIEBpZiBub3QobWFwLWhhcy1rZXkobWFwLWdldCgkcGFsZXR0ZXMsICRwYWxldHRlKSwgJHRvbmUpKSB7XG4gICAgJGFsbG93ZWQ6IG1hcC1rZXlzKG1hcC1nZXQoJHBhbGV0dGVzLCAkcGFsZXR0ZSkpO1xuICAgIEBlcnJvciAnSW52YWxpZCBwYWxldHRlIHRvbmU6IGAjeyR0b25lfWAuIEFsbG93ZWQgdG9uZXMgZm9yIGAjeyRwYWxldHRlfWAgYXJlOiAjeyRhbGxvd2VkfSc7XG4gIH1cblxuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZXMsICRwYWxldHRlKSwgJHRvbmUpO1xufVxuXG5cblxuLyoqXG4gKiBUaGUgbWFwIHRoZW1lcyB0byBjb2xvcnNcbiAqL1xuJHRoZW1lLWFuZC1jb2xvcjogKFxuICAncHJpbWFyeSc6ICRjb2xvcl9fcHJpbWFyeSxcbiAgJ2FjY2VudCc6ICRjb2xvcl9fYWNjZW50LFxuICAnZXJyb3InOiAkY29sb3JfX2Vycm9yLFxuICAnd2Fybic6ICRjb2xvcl9fd2FybixcbiAgJ2hpZ2hsaWdodCc6ICRjb2xvcl9faGlnaGxpZ2h0LFxuICAncHVyZSc6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICd1dGlsaXR5JzogJGNvbG9yX191dGlsaXR5XG4pO1xuXG5cbi8qKlxuICogT3V0cHV0IGNvbmRpdGlvbmFsIHN0eWxlcyBmb3IgdGhlIHBvc3NpYmxlIHRoZW1lc1xuICpcbiAqIEBwYXJhbSAkcHJvcGVydHlcbiAqICBUaGUgQ1NTIHByb3BlcnR5IHRoYXQgc2hvdWxkIGJlIGNvbG9yZWQuIERlZmF1bHQ6ICdiYWNrZ3JvdW5kLWNvbG9yJ1xuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSB0aGVtZS1jb2xvcjtcbiAqICBAaW5jbHVkZSB0aGVtZS1jb2xvcignY29sb3InKTtcbiAqL1xuQG1peGluIHRoZW1lLWNvbG9yKCRwcm9wZXJ0eTogJ2JhY2tncm91bmQtY29sb3InKSB7XG4gIC8vIFZlcmlmeSBhbiBhbGxvd2VkIHByb3BlcnR5IHdhcyBwYXNzZWQgaW5cbiAgQGlmIG5vdCgoJHByb3BlcnR5ID09IGJhY2tncm91bmQtY29sb3IpKSBhbmQgbm90KCgkcHJvcGVydHkgPT0gY29sb3IpKSB7XG4gICAgQGVycm9yICdUaGUgYHRoZW1lX19jb2xvcmAgbWl4aW4gb25seSBhY2NlcHRzIGBiYWNrZ3JvdW5kLWNvbG9yYCBvciBgY29sb3JgJztcbiAgfVxuXG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUtYW5kLWNvbG9yIHtcbiAgICA6Om5nLWRlZXAgLnUtdGhlbWUtLSN7JGtleX0gJiB7XG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yKHV0aWxpdHksIGxpZ2h0KTtcbiAgICAgICAgY29sb3I6IGNvbG9yKHV0aWxpdHkpO1xuICAgICAgfVxuICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgICAgIEBpZiAoJHByb3BlcnR5ID09ICdiYWNrZ3JvdW5kLWNvbG9yJykgYW5kIChub3QoKCRrZXkgPT0gJ3B1cmUnKSkgYW5kIG5vdCgoJGtleSA9PSAnaGlnaGxpZ2h0JykpKSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3JfX3B1cmUtLWxpZ2h0O1xuICAgICAgfVxuXG4gICAgICBAaWYgKCRwcm9wZXJ0eSA9PSAnYmFja2dyb3VuZC1jb2xvcicpIGFuZCAoJGtleSA9PSAnaGlnaGxpZ2h0Jykge1xuICAgICAgICBjb2xvcjogJGNvbG9yX19wdXJlLS1kYXJrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgcHJpbWFyeSBtYXBcbiAqL1xuJHRzLW1hdGVyaWFsLXByaW1hcnk6IChcbiAgNTA6ICRjb2xvcl9fcHJpbWFyeS0teGxpZ2h0LFxuICAxMDA6ICRjb2xvcl9fcHJpbWFyeS0tbGlnaHQsXG4gIDIwMDogJGNvbG9yX19wcmltYXJ5LFxuICAzMDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgNDAwOiAkY29sb3JfX3ByaW1hcnksXG4gIDUwMDogJGNvbG9yX19wcmltYXJ5LFxuICA2MDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgNzAwOiAkY29sb3JfX3ByaW1hcnktLWRhcmssXG4gIDgwMDogJGNvbG9yX19wcmltYXJ5LFxuICA5MDA6ICRjb2xvcl9fcHJpbWFyeS0teGRhcmssXG4gIGExMDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgYTIwMDogJGNvbG9yX19wcmltYXJ5LFxuICBhNDAwOiAkY29sb3JfX3ByaW1hcnksXG4gIGE3MDA6ICRjb2xvcl9fcHJpbWFyeSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAxMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDMwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA0MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDYwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgODAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDkwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhMTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGEyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICApXG4pO1xuXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgYWNjZW50IG1hcFxuICovXG4kdHMtbWF0ZXJpYWwtYWNjZW50OiAoXG4gIDUwOiAkY29sb3JfX2FjY2VudC0teGxpZ2h0LFxuICAxMDA6ICRjb2xvcl9fYWNjZW50LS1saWdodCxcbiAgMjAwOiAkY29sb3JfX2FjY2VudCxcbiAgMzAwOiAkY29sb3JfX2FjY2VudCxcbiAgNDAwOiAkY29sb3JfX2FjY2VudCxcbiAgNTAwOiAkY29sb3JfX2FjY2VudCxcbiAgNjAwOiAkY29sb3JfX2FjY2VudCxcbiAgNzAwOiAkY29sb3JfX2FjY2VudC0tZGFyayxcbiAgODAwOiAkY29sb3JfX2FjY2VudCxcbiAgOTAwOiAkY29sb3JfX2FjY2VudC0teGRhcmssXG4gIGExMDA6ICRjb2xvcl9fYWNjZW50LFxuICBhMjAwOiAkY29sb3JfX2FjY2VudCxcbiAgYTQwMDogJGNvbG9yX19hY2NlbnQsXG4gIGE3MDA6ICRjb2xvcl9fYWNjZW50LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDEwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA1MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDcwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA4MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgOTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGExMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTIwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNDAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGE3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gIClcbik7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBtYXRlcmlhbCBiYXNlZCB3YXJuIG1hcFxuICovXG4kdHMtbWF0ZXJpYWwtd2FybjogKFxuICA1MDogJGNvbG9yX19lcnJvci0tbGlnaHQsXG4gIDEwMDogJGNvbG9yX19lcnJvci0tbGlnaHQsXG4gIDIwMDogJGNvbG9yX19lcnJvcixcbiAgMzAwOiAkY29sb3JfX2Vycm9yLFxuICA0MDA6ICRjb2xvcl9fZXJyb3IsXG4gIDUwMDogJGNvbG9yX19lcnJvcixcbiAgNjAwOiAkY29sb3JfX2Vycm9yLFxuICA3MDA6ICRjb2xvcl9fZXJyb3ItLWRhcmssXG4gIDgwMDogJGNvbG9yX19lcnJvcixcbiAgOTAwOiAkY29sb3JfX2Vycm9yLS1kYXJrLFxuICBhMTAwOiAkY29sb3JfX2Vycm9yLFxuICBhMjAwOiAkY29sb3JfX2Vycm9yLFxuICBhNDAwOiAkY29sb3JfX2Vycm9yLFxuICBhNzAwOiAkY29sb3JfX2Vycm9yLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDEwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICAyMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgMzAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDQwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA1MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgNjAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIDcwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICA4MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgOTAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGExMDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gICAgYTIwMDogJGNvbG9yX19wdXJlLS1saWdodCxcbiAgICBhNDAwOiAkY29sb3JfX3B1cmUtLWxpZ2h0LFxuICAgIGE3MDA6ICRjb2xvcl9fcHVyZS0tbGlnaHQsXG4gIClcbik7XG5cbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cblxuXG4kZGVmYXVsdENvbG9yOiAje2NvbG9yKHB1cmUpfTtcblxuLyoqXG4gKiBTdHlsZXMgdG8gbWFrZSBzY3JvbGxiYXJzIGFsd2F5cyB2aXNpYmxlIG9uIHdlYmtpdCBicm93c2Vyc1xuICpcbiAqIEBwYXJhbSBjb2xvciAtIFRoZSBjb2xvciBmb3IgdGhlIGJvcmRlciBhbmQgYmFja2dyb3VuZCAoY2Fubm90IGJlIHRyYW5zcGFyZW50KVxuICovXG5AbWl4aW4gdmlzaWJsZS1zY3JvbGxiYXJzKCRjb2xvcjogJGRlZmF1bHRDb2xvcikge1xuICAkd2Via2l0LWRlZmF1bHQtcmFkaXVzOiA4cHg7XG4gICR3ZWJraXQtZGVmYXVsdC1zaXplOiAxMXB4O1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAmOnZlcnRpY2FsIHtcbiAgICAgIHdpZHRoOiAkd2Via2l0LWRlZmF1bHQtc2l6ZTtcbiAgICB9XG5cbiAgICAmOmhvcml6b250YWwge1xuICAgICAgaGVpZ2h0OiAkd2Via2l0LWRlZmF1bHQtc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgJHdlYmtpdC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2Via2l0LWJhY2tncm91bmQtY29sb3I7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6ICR3ZWJraXQtZGVmYXVsdC1yYWRpdXM7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6ICR3ZWJraXQtZGVmYXVsdC1yYWRpdXM7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgfVxufVxuXG5cbkBtaXhpbiBoaWRkZW4tc2Nyb2xsYmFycygpIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAgICY6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJjpob3Jpem9udGFsIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBtYXgtbGluZS1sZW5ndGhcblxuLyoqXG4gKiBCb3ggU2hhZG93IHZhbHVlcyBmcm9tIE1hdGVyaWFsIFNoYWRvdyBJbnRlcnBvbGF0b3JcbiAqXG4gKiAtIEV4aXN0aW5nIGxpYnJhcnkgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vcHJlc3RvcGFzdG8vU0NTUy1NYXRlcmlhbC1TaGFkb3dzXG4gKiAtIEFuZ3VsYXIgTWF0ZXJpYWwgZGVzaWduIG5vdGVzIGhlcmU6IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVczTkdTTHFEWnpqYkJCTFcyQzZ5XzZOVXh0dmRaQVZhSnZnNThMWTNRMEUvcHJldmlld1xuICogLSBSZWZlcmVuY2UgQ29kZVBlbjogaHR0cHM6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFk/ZWRpdG9ycz0wMDFcbiAqL1xuXG4vLyBzdHlsZWxpbnQtZW5hYmxlIG1heC1saW5lLWxlbmd0aFxuXG5cbi8qKlxuICogU2hhZG93IGNvbG9ycy5cbiAqIGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFlcbiAqXG4gKiAtIFVNQlJBOiBcIkEgY29uaWNhbCBzaGFkb3cgZXhjbHVkaW5nIGFsbCBsaWdodCBmcm9tIGEgZ2l2ZW4gc291cmNlOyBfc3BlY2lmaWNhbGx5XzogdGhlIGNvbmljYWxcbiAqIHBhcnQgb2YgdGhlIHNoYWRvdyBvZiBhIGNlbGVzdGlhbCBib2R5IGV4Y2x1ZGluZyBhbGwgbGlnaHQgZnJvbSB0aGUgcHJpbWFyeSBzb3VyY2VcIlxuICogLSBQRU5VTUJSQTogXCJBIHNwYWNlIG9mIHBhcnRpYWwgaWxsdW1pbmF0aW9uIChhcyBpbiBhbiBlY2xpcHNlKSBiZXR3ZWVuIHRoZSBwZXJmZWN0IHNoYWRvdyBvbiBhbGxcbiAqIHNpZGVzIGFuZCB0aGUgZnVsbCBsaWdodFwiXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LUNvbG9yc1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBwbHVnaW4vc3R5bGVsaW50LW5vLWluZGlzdGluZ3Vpc2hhYmxlLWNvbG9yc1xuJGtleS11bWJyYTogcmdiYSgwLCAwLCAwLCAuMik7XG4ka2V5LXBlbnVtYnJhOiByZ2JhKDAsIDAsIDAsIC4xNCk7XG4kYW1iaWVudDogcmdiYSgwLCAwLCAwLCAuMTIpO1xuLy8gc3R5bGVsaW50LWVuYWJsZSBwbHVnaW4vc3R5bGVsaW50LW5vLWluZGlzdGluZ3Vpc2hhYmxlLWNvbG9yc1xuXG5cbi8qKlxuICogSGFuZC1kZXNpZ25lZCByZWZlcmVuY2Ugc2hhZG93IHNldHNcbiAqXG4gKiBTb3VyY2U6IGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFlcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctU2V0c1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4kcmVmZXJlbmNlLXNoYWRvd3M6IChcbiAgKFxuICAgIGVsZXZhdGlvbjogMCxcbiAgICBzaGFkb3dzOiAoXG4gICAgICAoMCwgMCwgMCwgMCwgJGtleS11bWJyYSksXG4gICAgICAoMCwgMCwgMCwgMCwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMCwgMCwgMCwgJGFtYmllbnQpLFxuICAgIClcbiAgKSxcbiAgKFxuICAgIGVsZXZhdGlvbjogMixcbiAgICBzaGFkb3dzOiAoXG4gICAgICAoMCwgMywgMSwgLTIsICRrZXktdW1icmEpLFxuICAgICAgKDAsIDIsIDIsIDAsICRrZXktcGVudW1icmEpLFxuICAgICAgKDAsIDEsIDUsIDAsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDMsXG4gICAgc2hhZG93czogKFxuICAgICAgKDAsIDMsIDMsIC0yLCAka2V5LXVtYnJhKSxcbiAgICAgICgwLCAzLCA0LCAwLCAka2V5LXBlbnVtYnJhKSxcbiAgICAgICgwLCAxLCA4LCAwLCAkYW1iaWVudCksXG4gICAgKVxuICApLFxuICAoXG4gICAgZWxldmF0aW9uOiA0LFxuICAgIHNoYWRvd3M6IChcbiAgICAgICgwLCAyLCA0LCAtMSwgJGtleS11bWJyYSksXG4gICAgICAoMCwgNCwgNSwgMCwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMSwgMTAsIDAsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDYsXG4gICAgc2hhZG93czogKFxuICAgICAgKDAsIDMsIDUsIC0xLCAka2V5LXVtYnJhKSxcbiAgICAgICgwLCA2LCAxMCwgMCwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMSwgMTgsIDAsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDgsXG4gICAgc2hhZG93czogKFxuICAgICAgKDAsIDUsIDUsIC0zLCAka2V5LXVtYnJhKSxcbiAgICAgICgwLCA4LCAxMCwgMSwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgMywgMTQsIDIsICRhbWJpZW50KSxcbiAgICApXG4gICksXG4gIChcbiAgICBlbGV2YXRpb246IDE2LFxuICAgIHNoYWRvd3M6IChcbiAgICAgICgwLCA4LCAxMCwgLTUsICRrZXktdW1icmEpLFxuICAgICAgKDAsIDE2LCAyNCwgMiwgJGtleS1wZW51bWJyYSksXG4gICAgICAoMCwgNiwgMzAsIDUsICRhbWJpZW50KSxcbiAgICApXG4gIClcbik7XG5cblxuLyoqXG4gKiBBbmltYXRpb24gZHVyYXRpb25zXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LUFuaW1hdGlvbi1EdXJhdGlvbnNcbiAqIEBzZWN0aW9uIENvbmZpZyA+IFNoYWRvd3NcbiAqL1xuJG1pbi1hbmltYXRpb24tbGVuZ3RoOiAyNTBtcztcbiRtYXgtYW5pbWF0aW9uLWxlbmd0aDogNDAwbXM7XG5cblxuLyoqXG4gKiBNYXRlcmlhbCBEZXNpZ24gZWxlbWVudCBlbGV2YXRpb25zXG4gKlxuICogU291cmNlOiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbWF0ZXJpYWwtZGVzaWduL2VsZXZhdGlvbi1zaGFkb3dzLmh0bWwjZWxldmF0aW9uLXNoYWRvd3MtZWxldmF0aW9uLWFuZHJvaWRcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctRWxlbWVudHMtTWFwXG4gKiBAc2VjdGlvbiBDb25maWcgPiBTaGFkb3dzXG4gKi9cbiRtYXRlcmlhbC1lbGVtZW50czogKFxuICBkaWFsb2c6ICgyNCksXG4gIHBpY2tlcjogKDI0KSxcbiAgbmF2LWRyYXdlcjogKDE2KSxcbiAgcmlnaHQtZHJhd2VyOiAxNixcbiAgYm90dG9tLXNoZWV0OiAxNixcbiAgZmFiOiA2IDEyIGFjdGl2ZSxcbiAgc3ViLW1lbnUtMzogMTEsXG4gIHN1Yi1tZW51LTI6IDEwLFxuICBzdWItbWVudS0xOiA5LFxuICBtZW51OiA4LFxuICBib3R0b20tbmF2LWJhcjogOCxcbiAgY2FyZDogMiA4IGhvdmVyLFxuICByYWlzZWQtYnV0dG9uOiAyIDggYWN0aXZlLFxuICBzbmFja2JhcjogNixcbiAgYXBwLWJhcjogNCxcbiAgcmVmcmVzaC1pbmRpY2F0b3I6IDMsXG4gIHF1aWNrLWVudHJ5OiAyIDMgYWN0aXZlLFxuICBzZWFyY2gtYmFyOiAyIDMgYWN0aXZlLFxuICBzd2l0Y2g6IDFcbik7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0d28gcmVmZXJlbmNlIHNoYWRvd3Mgd2hvc2UgZWxldmF0aW9ucyBib3VuZCB0aGUgc3BlY2lmaWVkIGVsZXZhdGlvblxuICpcbiAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBzdXBwbGllZCBlbGV2YXRpb24gZXhjZWVkcyB0aGUgbWF4aW11bSByZWZlcmVuY2UgZWxldmF0aW9uLCB0aGUgbGFzdCB0d29cbiAqIHJlZmVyZW5jZSBzaGFkb3dzIGFyZSByZXR1cm5lZC5cbiAqXG4gKiBAbWl4aW4gZmluZC1ib3VuZGluZy1zaGFkb3ctc2V0c1xuICogQHNlY3Rpb24gU2hhZG93LUZ1bmN0aW9uc1xuICogQHBhcmFtICRlbGV2YXRpb25cbiAqICBUaGUgZWxldmF0aW9uXG4gKiBAZXhhbXBsZVxuICogICRmb28gPSBmaW5kLWJvdW5kaW5nLXNoYWRvdy1zZXRzKDIpO1xuICovXG5AZnVuY3Rpb24gZmluZC1ib3VuZGluZy1zaGFkb3ctc2V0cygkZWxldmF0aW9uKSB7XG4gIEBpZiAkZWxldmF0aW9uIDwgMCB7XG4gICAgQGVycm9yICdmaW5kLWJvdW5kaW5nLXNoYWRvdy1zZXRzOiBFbGV2YXRpb24gaXMgbGVzcyB0aGFuIHplcm8nO1xuICB9XG5cbiAgJGxvd2VyOiBudGgoJHJlZmVyZW5jZS1zaGFkb3dzLCBsZW5ndGgoJHJlZmVyZW5jZS1zaGFkb3dzKSAtIDEpO1xuICAkdXBwZXI6IG50aCgkcmVmZXJlbmNlLXNoYWRvd3MsIGxlbmd0aCgkcmVmZXJlbmNlLXNoYWRvd3MpKTtcblxuICBAZm9yICRpIGZyb20gMSB0byBsZW5ndGgoJHJlZmVyZW5jZS1zaGFkb3dzKSB7XG4gICAgJGlubmVyLWxvd2VyOiBudGgoJHJlZmVyZW5jZS1zaGFkb3dzLCAkaSk7XG4gICAgJGlubmVyLXVwcGVyOiBudGgoJHJlZmVyZW5jZS1zaGFkb3dzLCAkaSArIDEpO1xuXG4gICAgQGlmIChtYXAtZ2V0KCRpbm5lci1sb3dlciwgJ2VsZXZhdGlvbicpIDw9ICRlbGV2YXRpb24pIGFuZCAobWFwLWdldCgkaW5uZXItdXBwZXIsICdlbGV2YXRpb24nKSA+ICRlbGV2YXRpb24pIHtcbiAgICAgIEByZXR1cm4gKCRpbm5lci1sb3dlciwgJGlubmVyLXVwcGVyKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuICgkbG93ZXIsICR1cHBlcik7XG59XG5cblxuLyoqXG4gKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHZhbHVlcyBhIGFuZCBiXG4gKlxuICogUmV0dXJucyB0aGUgdmFsdWUgYmV0d2VlbiBhIGFuZCBiIHByb3BvcnRpb25hbCB0byB4ICh3aGVuIHggaXMgYmV0d2VlbiAwIGFuZCAxLiBXaGVuIHggaXMgb3V0c2lkZVxuICogdGhpcyByYW5nZSwgdGhlIHJldHVybiB2YWx1ZSBpcyBhIGxpbmVhciBleHRyYXBvbGF0aW9uKVxuICpcbiAqIEBtaXhpbiBsZXJwXG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJHhcbiAqICBUaGUgcHJvcG9ydGlvbmFsIGNvbnRyb2xcbiAqIEBwYXJhbSAkYVxuICogIFRoZSBzdGFydGluZyB2YWx1ZVxuICogQHBhcmFtICRiXG4gKiAgVGhlIGVuZGluZyB2YWx1ZVxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gbGVycCguMiwgMywgNik7XG4gKi9cbkBmdW5jdGlvbiBsZXJwKCR4LCAkYSwgJGIpIHtcbiAgQHJldHVybiAkYSArICR4ICogKCRiIC0gJGEpO1xufVxuXG5cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBzaGFkb3dzIGJ5IGludGVycG9sYXRpbmcgZWFjaCBwcm9wZXJ0eSBpbmRpdmlkdWFsbHlcbiAqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBiZXR3ZWVuIHNoYWRvdzEgYW5kIHNoYWRvdzIgcHJvcG9ydGlvbmFsIHRvIHggKHdoZW4geCBpcyBiZXR3ZWVuIDAgYW5kIDEuIFdoZW5cbiAqIHggaXMgb3V0c2lkZSB0aGlzIHJhbmdlLCB0aGUgcmV0dXJuIHZhbHVlIGlzIGEgbGluZWFyIGV4dHJhcG9sYXRpb24pLlxuICpcbiAqIEBtaXhpbiBsZXJwLXNoYWRvd1xuICogQHNlY3Rpb24gU2hhZG93LUZ1bmN0aW9uc1xuICogQHBhcmFtICR4XG4gKiAgVGhlIHByb3BvcnRpb25hbCBjb250cm9sXG4gKiBAcGFyYW0gJHNoYWRvdzFcbiAqICBUaGUgc3RhcnRpbmcgc2hhZG93XG4gKiBAcGFyYW0gJHNoYWRvdzJcbiAqICBUaGUgZW5kaW5nIHNoYWRvd1xuICovXG5AZnVuY3Rpb24gbGVycC1zaGFkb3coJHgsICRzaGFkb3cxLCAkc2hhZG93Mikge1xuICAvLyBSb3VuZCBhbGwgcGFyYW1ldGVycywgYXMgc2hhZG93IGRlZmluaXRpb25zIGRvIG5vdCBzdXBwb3J0IHN1YnBpeGVsc1xuICAkbmV3LXg6IHJvdW5kKGxlcnAoJHgsIG50aCgkc2hhZG93MSwgMSksIG50aCgkc2hhZG93MiwgMSkpKTtcbiAgJG5ldy15OiByb3VuZChsZXJwKCR4LCBudGgoJHNoYWRvdzEsIDIpLCBudGgoJHNoYWRvdzIsIDIpKSk7XG4gICRuZXctYmx1cjogcm91bmQobGVycCgkeCwgbnRoKCRzaGFkb3cxLCAzKSwgbnRoKCRzaGFkb3cyLCAzKSkpO1xuICAkbmV3LXNwcmVhZDogcm91bmQobGVycCgkeCwgbnRoKCRzaGFkb3cxLCA0KSwgbnRoKCRzaGFkb3cyLCA0KSkpO1xuICAvLyBObyBuZWVkIHRvIGxlcnAgdGhlIHNoYWRvdyBjb2xvclxuICAkbmV3LWNvbG9yOiBudGgoJHNoYWRvdzEsIDUpO1xuXG4gIC8vIENvZXJjZSB0byBwaXhlbCB2YWx1ZXMgd2hlbiByZXR1cm5pbmdcbiAgQHJldHVybiAoI3skbmV3LXggKyBweH0gI3skbmV3LXkgKyBweH0gI3skbmV3LWJsdXIgKyBweH0gI3skbmV3LXNwcmVhZCArIHB4fSAkbmV3LWNvbG9yKTtcbn1cblxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNldCBvZiBzaGFkb3dzIGF0IGEgZ2l2ZW4gZWxldmF0aW9uXG4gKlxuICogQG1peGluIGNhbGN1bGF0ZS1zaGFkb3ctc2V0LWF0LWRlcHRoXG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJGVsZXZhdGlvblxuICogIFRoZSBkZXNpcmVkIGVsZXZhdGlvblxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gY2FsY3VsYXRlLXNoYWRvdy1zZXQtYXQtZGVwdGgoMik7XG4gKi9cbkBmdW5jdGlvbiBjYWxjdWxhdGUtc2hhZG93LXNldC1hdC1kZXB0aCgkZWxldmF0aW9uKSB7XG4gICRib3VuZHM6IGZpbmQtYm91bmRpbmctc2hhZG93LXNldHMoJGVsZXZhdGlvbik7XG4gICRtaW46IG50aCgkYm91bmRzLCAxKTtcbiAgJG1heDogbnRoKCRib3VuZHMsIDIpO1xuICAkeDogKCRlbGV2YXRpb24gLSBtYXAtZ2V0KCRtaW4sICdlbGV2YXRpb24nKSkgLyAobWFwLWdldCgkbWF4LCAnZWxldmF0aW9uJykgLSBtYXAtZ2V0KCRtaW4sICdlbGV2YXRpb24nKSk7XG4gICRlbGV2YXRpb24tc2hhZG93czogKCk7XG5cbiAgQGZvciAkaSBmcm9tIDEgdG8gbGVuZ3RoKG1hcC1nZXQoJG1pbiwgJ3NoYWRvd3MnKSkgKyAxIHtcbiAgICAkbmV3LXNoYWRvdzogbGVycC1zaGFkb3coJHgsIG50aChtYXAtZ2V0KCRtaW4sICdzaGFkb3dzJyksICRpKSwgbnRoKG1hcC1nZXQoJG1heCwgJ3NoYWRvd3MnKSwgJGkpKTtcbiAgICAkZWxldmF0aW9uLXNoYWRvd3M6IGFwcGVuZCgkZWxldmF0aW9uLXNoYWRvd3MsICRuZXctc2hhZG93LCBjb21tYSk7XG4gIH1cblxuICBAcmV0dXJuICRlbGV2YXRpb24tc2hhZG93cztcbn1cblxuXG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSB0cmFuc2l0aW9uIGZvciBhIGNoYW5nZSBiZXR3ZWVuIDIgZWxldmF0aW9uc1xuICpcbiAqIFRoZSBsYXJnZXIgdGhlIGVsZXZhdGlvbiBjaGFuZ2UgdGhlIGxvbmdlciB0aGUgYW5pbWF0aW9uIHRha2VzXG4gKlxuICogQG1peGluIGVsZXZhdGlvbi10cmFuc2l0aW9uXG4gKiBAc2VjdGlvbiBTaGFkb3ctTWl4aW5zXG4gKiBAcGFyYW0gJGVsZXZhdGlvbi1jaGFuZ2VcbiAqICBUaGUgZWxldmF0aW9uIGNoYW5nZSBhbW91bnRcbiAqIEBwYXJhbSAkZWFzaW5nXG4gKiAgVGhlIGVhc2luZyBmdW5jdGlvbiBvciBuYW1lXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbi10cmFuc2l0aW9uKGRpYWxvZyk7XG4gKi9cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbigkZWxldmF0aW9uLWNoYW5nZTogNiwgJGVhc2luZzogY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSkpIHtcbiAgJGR1cmF0aW9uOiBsZXJwKCRlbGV2YXRpb24tY2hhbmdlIC8gMjQsICRtaW4tYW5pbWF0aW9uLWxlbmd0aCwgJG1heC1hbmltYXRpb24tbGVuZ3RoKTtcblxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93ICRkdXJhdGlvbiAkZWFzaW5nO1xufVxuXG5cbi8qKlxuICogR2VuZXJhdGVzIGJveC1zaGFkb3cgYW5kIHRoZSB0cmFuc2l0aW9uIGZvciBhIGdpdmVuIGVsZXZhdGlvblxuICpcbiAqIC0gQSBzaW5nbGUgZWxldmF0aW9uIHdpbGwgZ2VuZXJhdGUgYSBzaW5nbGUgYm94LXNoYWRvdyBzZXRcbiAqIC0gVHdvIGVsZXZhdGlvbnMgYW5kIGEgc3RhdGUgd2lsbCBnZW5lcmF0ZSBhIGRlZmF1bHQgYm94LXNoYWRvdyBzZXQgYW5kIGFub3RoZXIgc2V0IHRoYXQgaXNcbiAqIGFjdGl2YXRlZCBieSB0aGUgc3RhdGUgdGVzdGVkIHdpdGggOmhvdmVyIGFuZCA6YWN0aXZlXG4gKlxuICogQG1peGluIGVsZXZhdGlvblxuICogQHNlY3Rpb24gU2hhZG93LU1peGluc1xuICogQHBhcmFtICRlbGV2YXRpb24xXG4gKiAgVGhlIHN0YXJ0aW5nIGVsZXZhdGlvblxuICogQHBhcmFtICRlbGV2YXRpb24yXG4gKiAgVGhlIGRlc3RpbmF0aW9uIGVsZXZhdGlvblxuICogQHBhcmFtICRzdGF0ZVxuICogIGhvdmVyLCBmb2N1cywgYWN0aXZlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbigyLCA4LCBhY3RpdmUpO1xuICovXG5AbWl4aW4gZWxldmF0aW9uKCRlbGV2YXRpb24xLCAkZWxldmF0aW9uMjogbnVsbCwgJHN0YXRlOiBudWxsKSB7XG4gIEBpZiAkZWxldmF0aW9uMSA9PSAwIHtcbiAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLy8gc3R5bGVsaW50LWVuYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgfSBAZWxzZSB7XG4gICAgYm94LXNoYWRvdzogY2FsY3VsYXRlLXNoYWRvdy1zZXQtYXQtZGVwdGgoJGVsZXZhdGlvbjEpO1xuICB9XG5cbiAgQGlmICRlbGV2YXRpb24yICE9IG51bGwge1xuICAgIC8vIFRPRE86IEZpeCBtaXNzdXNlIG9mIG1peGluIGh0dHBzOi8vZ2l0aHViLmNvbS9HZXRUZXJtaW51cy90ZXJtaW51cy11aS9pc3N1ZXMvMTUyOVxuICAgIEBpbmNsdWRlIGVsZXZhdGlvbi10cmFuc2l0aW9uKCRlbGV2YXRpb24yIC0gJGVsZXZhdGlvbjIpO1xuXG4gICAgJjojeyRzdGF0ZX0ge1xuICAgICAgQGlmICRlbGV2YXRpb24xID09IDAge1xuICAgICAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBzdHlsZWxpbnQtZW5hYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGNhbGN1bGF0ZS1zaGFkb3ctc2V0LWF0LWRlcHRoKCRlbGV2YXRpb24yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgYm94LXNoYWRvdyBhbmQgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzIGZvciBzcGVjaWZpYyBlbGVtZW50cy4gU2VlICRtYXRlcmlhbC1lbGVtZW50cy5cbiAqXG4gKiBAbWl4aW4gZWxldmF0aW9uLWVsZW1lbnRcbiAqIEBzZWN0aW9uIFNoYWRvdy1NaXhpbnNcbiAqIEBwYXJhbSAkZWxlbWVudC1uYW1lXG4gKiAgVGhlIGVsZW1lbnQgdG8gYWRkIGEgc2hhZG93IHRvXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbi1lbGVtZW50KGRpYWxvZyk7XG4gKi9cbkBtaXhpbiBlbGV2YXRpb24tZWxlbWVudCgkZWxlbWVudC1uYW1lKSB7XG4gICRhdHRyOiBtYXAtZ2V0KCRtYXRlcmlhbC1lbGVtZW50cywgJGVsZW1lbnQtbmFtZSk7XG5cbiAgQGlmIGxlbmd0aCgkYXR0cikgPT0gMSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKG50aCgkYXR0ciwgMSkpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24obnRoKCRhdHRyLCAxKSwgbnRoKCRhdHRyLCAyKSwgbnRoKCRhdHRyLCAzKSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIFRoZSBzcGFjaW5nIGRlZmF1bHRcbiAqXG4gKiBAc2VjdGlvbiBTcGFjaW5nXG4gKi9cbiRnLXNwYWNpbmc6IDE2cHggIWRlZmF1bHQ7XG5cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxheW91dCBzcGFjaW5nc1xuICpcbiAqIFNtYWxsOiAxMiwgOCwgNFxuICogQmFzZTogMTZcbiAqIExhcmdlOiAyNCwgMzIsIDQwLCA0OCwgNTYsIDcyLCA5NlxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuJGctc3BhY2luZ3M6IChcbiAgc21hbGw6ICAoXG4gICAgMjogZmxvb3IoJGctc3BhY2luZyAvIDQpLFxuICAgIDE6IGZsb29yKCRnLXNwYWNpbmcgLyAyKSxcbiAgICAwOiBmbG9vcigkZy1zcGFjaW5nIC0gNCksXG4gICksXG4gIGRlZmF1bHQ6IChcbiAgICAwOiAkZy1zcGFjaW5nLFxuICApLFxuICBsYXJnZTogKFxuICAgIDA6IGNlaWwoJGctc3BhY2luZyAvIDIgKiAzKSxcbiAgICAxOiBjZWlsKCRnLXNwYWNpbmcgLyAyICogNCksXG4gICAgMjogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDUpLFxuICAgIDM6IGNlaWwoJGctc3BhY2luZyAvIDIgKiA2KSxcbiAgICA0OiBjZWlsKCRnLXNwYWNpbmcgLyAyICogNyksXG4gICAgNTogY2VpbCgkZy1zcGFjaW5nIC8gMiAqIDkpLFxuICAgIDY6IGNlaWwoJGctc3BhY2luZyAvIDIgKiAxMiksXG4gIClcbik7XG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNwYWNlIGZyb20gdGhlICRnLXNwYWNpbmdzIG1hcFxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBzcGFjaW5nIG1hcCB0byB1c2UuIERlZmF1bHQ6IGRlZmF1bHRcbiAqIEBwYXJhbSAkc2l6ZVxuICogIFRoZSB2YWx1ZSBkZXNpcmVkIGZyb20gdGhlIG1hcC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGRlZmF1bHQpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UsIDQpO1xuICovXG5AZnVuY3Rpb24gc3BhY2luZygkdHlwZTogZGVmYXVsdCwgJHNpemU6IDApIHtcbiAgLy8gVmVyaWZ5IHRoZSB0eXBlIGV4aXN0c1xuICBAaWYgbm90KG1hcC1oYXMta2V5KCRnLXNwYWNpbmdzLCAkdHlwZSkpIHtcbiAgICAkYWxsb3dlZC10eXBlczogbWFwLWtleXMoJGctc3BhY2luZ3MpO1xuICAgIEBlcnJvciAnSW52YWxpZCBzcGFjaW5nIHR5cGUgbmFtZTogYCN7JHR5cGV9YC4gQWxsb3dlZCB0eXBlOiAjeyRhbGxvd2VkLXR5cGVzfSc7XG4gIH1cblxuICAvLyBWZXJpZnkgdGhlIHNpemVcbiAgQGlmIG5vdChtYXAtaGFzLWtleShtYXAtZ2V0KCRnLXNwYWNpbmdzLCAkdHlwZSksICRzaXplKSkge1xuICAgICRhbGxvd2VkLXNpemVzOiBtYXAta2V5cyhtYXAtZ2V0KCRnLXNwYWNpbmdzLCAkdHlwZSkpO1xuICAgIEBlcnJvciAnSW52YWxpZCBzaXplOiBgI3skc2l6ZX1gLiBBbGxvd2VkIHNpemVzIGZvciBgI3skdHlwZX1gIGFyZTogI3skYWxsb3dlZC1zaXplc30nO1xuICB9XG5cbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGctc3BhY2luZ3MsICR0eXBlKSwgJHNpemUpO1xufVxuXG4vKipcbiAqIENlbnRlciBjaGlsZCBjb250ZW50IHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseVxuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY2VudGVyLWNvbnRlbnQ7XG4gKi9cbkBtaXhpbiBjZW50ZXItY29udGVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uIG9mIGVhY2ggZGlyZWN0aW9uIGluIGEgbGlzdFxuICpcbiAqIEBwYXJhbSAkZGlyZWN0aW9uc1xuICogIExpc3Qgb2YgaW5pdGlhbCBkaXJlY3Rpb25zXG4gKiBAZXhhbXBsZVxuICogIG9wcG9zaXRlLWRpcmVjdGlvbih0b3ApO1xuICogIG9wcG9zaXRlLWRpcmVjdGlvbihsZWZ0LCBib3R0b20pO1xuICovXG5AZnVuY3Rpb24gb3Bwb3NpdGUtZGlyZWN0aW9uKCRkaXJlY3Rpb25zKSB7XG4gICRvcHBvc2l0ZS1kaXJlY3Rpb25zOiAoKTtcbiAgJGRpcmVjdGlvbi1tYXA6IChcbiAgICAndG9wJzogJ2JvdHRvbScsXG4gICAgJ3JpZ2h0JzogJ2xlZnQnLFxuICAgICdib3R0b20nOiAndG9wJyxcbiAgICAnbGVmdCc6ICdyaWdodCcsXG4gICAgJ2NlbnRlcic6ICdjZW50ZXInLFxuICAgICdsdHInOiAncnRsJyxcbiAgICAncnRsJzogJ2x0cidcbiAgKTtcblxuICBAZWFjaCAkZGlyZWN0aW9uIGluICRkaXJlY3Rpb25zIHtcbiAgICAkZGlyZWN0aW9uOiB0by1sb3dlci1jYXNlKCRkaXJlY3Rpb24pO1xuXG4gICAgQGlmIG1hcC1oYXMta2V5KCRkaXJlY3Rpb24tbWFwLCAkZGlyZWN0aW9uKSB7XG4gICAgICAkb3Bwb3NpdGUtZGlyZWN0aW9uczogYXBwZW5kKCRvcHBvc2l0ZS1kaXJlY3Rpb25zLCB1bnF1b3RlKG1hcC1nZXQoJGRpcmVjdGlvbi1tYXAsICRkaXJlY3Rpb24pKSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgJ05vIG9wcG9zaXRlIGRpcmVjdGlvbiBjYW4gYmUgZm91bmQgZm9yIGAjeyRkaXJlY3Rpb259YC4gRGlyZWN0aW9uIG9taXR0ZWQuJztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuICRvcHBvc2l0ZS1kaXJlY3Rpb25zO1xufVxuXG4vKipcbiAqIFBzZXVkbyBlbGVtZW50IGJhc2Ugc3R5bGVzXG4gKlxuICogQHBhcmFtICRkaXNwbGF5XG4gKiAgVGhlIGRpc3BsYXkgdmFsdWUgKGJsb2NrL2lubGluZS9ldGMpXG4gKiBAcGFyYW0gJHBvc2l0aW9uXG4gKiAgVGhlIHBvc2l0aW9uIHN0eWxlIChhYnNvbHV0ZS9zdGF0aWMvZXRjKVxuICogQHBhcmFtICRjb250ZW50XG4gKiAgVGhlIGNvbnRlbnQgdmFsdWVcbiAqL1xuQG1peGluIHBzZXVkbyhcbiAgJGRpc3BsYXk6IGJsb2NrLFxuICAkcG9zaXRpb246IGFic29sdXRlLFxuICAkY29udGVudDogJydcbikge1xuICBjb250ZW50OiAkY29udGVudDtcbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XG59XG5cbi8qKlxuICogQ29udHJvbCB0aGUgcmF0aW8gZm9yIHJlc3BvbnNpdmUgZWxlbWVudHNcbiAqXG4gKiBAcGFyYW0gJHhcbiAqICBUaGUgeCByYXRpb1xuICogQHBhcmFtICR5XG4gKiAgVGhlIHkgcmF0aW9cbiAqIEBwYXJhbSAkcHNldWRvXG4gKiAgRGV0ZXJtaW5lIGlmIGEgcHNldWRvIGVsZW1lbnQgc2hvdWxkIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgcmF0aW8uIERlZmF1bHQ6IHRydWVcbiAqIEBwYXJhbSAkaW1hZ2VcbiAqICBUaGUgaW1hZ2Ugc291cmNlLiBEZWZhdWx0OiBudWxsXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHJlc3BvbnNpdmUtcmF0aW8oMywgNCk7XG4gKiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1yYXRpbygyMCwgOSwgdHJ1ZSwgdXJsKCcvaW1hZ2VzL2xhbmRpbmctaGVyby5qcGcnKSk7XG4gKi9cbkBtaXhpbiByZXNwb25zaXZlLXJhdGlvKCR4LCAkeSwgJHBzZXVkbzogdHJ1ZSwgJGltYWdlOiBudWxsKSB7XG4gICRwYWRkaW5nOiB1bnF1b3RlKCgoICR5IC8gJHggKSAqIDEwMCkgKyAnJScpO1xuXG4gIEBpZiAkeCA9PSBudWxsIG9yICR5ID09IG51bGwge1xuICAgIEBlcnJvciAnQm90aCB0aGUgeCBhbmQgeSByYXRpb3MgbXVzdCBiZSBwYXNzZWQgaW4uJztcbiAgfVxuXG4gIEBpZiAkcHNldWRvIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgQGluY2x1ZGUgcHNldWRvKCRwb3NpdGlvbjogcmVsYXRpdmUpO1xuICAgICAgcGFkZGluZy10b3A6ICRwYWRkaW5nO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBwYWRkaW5nLXRvcDogJHBhZGRpbmc7XG4gIH1cblxuICBAaWYgaW1hZ2UgIT0gbnVsbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxufVxuXG4vKipcbiAqIEZpbGwgdGhlIHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtICRtYXJnaW5cbiAqICBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIHBhcmVudC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudDtcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudCgxZW0pO1xuICovXG5AbWl4aW4gdGFrZS1zcGFjZSgkbWFyZ2luOiAwKSB7XG4gIGJvdHRvbTogJG1hcmdpbjtcbiAgbGVmdDogJG1hcmdpbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogJG1hcmdpbjtcbiAgdG9wOiAkbWFyZ2luO1xufVxuXG4vKipcbiAqIE1ha2UgY29udGVudCB2aXN1YWxseSBoaWRkZW5cbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHZpc3VhbGx5LWhpZGRlbjtcbiAqL1xuQG1peGluIHZpc3VhbGx5LWhpZGRlbiB7XG4gICRzbWFsbGVzdC1hZGp1c3RtZW50OiAxcHg7XG4gIGJvcmRlcjogMDtcbiAgLy8gbm9pbnNwZWN0aW9uIENzc0ludmFsaWRQcm9wZXJ0eVZhbHVlXG4gIGNsaXAtcGF0aDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgLy8gTm90IGFsbCBzdHlsZXMgYXBwbHkgdG8gaW5saW5lIGVsZW1lbnRzXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6ICRzbWFsbGVzdC1hZGp1c3RtZW50O1xuICBtYXJnaW46IC0kc21hbGxlc3QtYWRqdXN0bWVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogJHNtYWxsZXN0LWFkanVzdG1lbnQ7XG59XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgcG9zc2libGUgei1pbmRleCB2YWx1ZXNcbiAqXG4gKiAoaXRlbXMgYXQgdGhlIHRvcCBoYXZlIGEgaGlnaGVyIHZhbHVlKVxuICpcbiAqIEBzZWN0aW9uIENvbmZpZ1xuICovXG4kei1sYXllcnM6IChcbiAgJ2dsb2JhbC1vdmVybGF5JyxcbiAgJ2dsb2JhbC1oZWFkZXInLFxuICAnZHJhd2VyJyxcbiAgJ3Rvb2x0aXAnLFxuICAnYXR0YWNoZWQtcGFuZWwtb3ZlcmxheScsXG4gICdwYW5lbC1oZWFkZXInLFxuICAnbWVudS10cmlnZ2VyJyxcbik7XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIGNvcnJlY3Qgei1pbmRleCB2YWx1ZSBieSBwYXNzaW5nIGluIHRoZSBpdGVtIG5hbWVcbiAqXG4gKiBAcGFyYW0gJG5hbWVcbiAqICBUaGUgbmFtZSBvZiB0aGUgaXRlbSB0aGF0IHNob3VsZCBoYXZlIGFuIGFzc29jaWF0ZWQgei1pbmRleFxuICogQGV4YW1wbGVcbiAqICB6KHRvb2x0aXApO1xuICogIHooYXR0YWNoZWQtcGFuZWwtb3ZlcmxheSk7XG4gKi9cbkBmdW5jdGlvbiB6KCRuYW1lKSB7XG4gIEBpZiBpbmRleCgkei1sYXllcnMsICRuYW1lKSB7XG4gICAgQHJldHVybiAobGVuZ3RoKCR6LWxheWVycykgLSBpbmRleCgkei1sYXllcnMsICRuYW1lKSkgKyA1MDA7XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnVGhlcmUgaXMgbm8gaXRlbSBcIiN7JG5hbWV9XCIgaW4gdGhpcyBsaXN0OyBjaG9vc2Ugb25lIG9mOiAjeyR6LWxheWVyc30nO1xuICAgIEByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5cblxuLyoqXG4gKiBDcmVhdGUgYSB0cmlhbmdsZSBzaGFwZSB1c2luZyBDU1NcbiAqXG4gKiBAbWl4aW4gdHJpYW5nbGVcbiAqIEBzZWN0aW9uIFN0eWxlIEhlbHBlcnNcbiAqIEBwYXJhbSAkZGlyZWN0aW9uXG4gKiAgVHJpYW5nbGUgZGlyZWN0aW9uLCBlaXRoZXIgYHRvcGAsIGByaWdodGAsIGBib3R0b21gIG9yIGBsZWZ0YC5cbiAqIEBwYXJhbSAkY29sb3JcbiAqICBUcmlhbmdsZSBjb2xvci4gRGVmYXVsdDogY3VycmVudGNvbG9yXG4gKiBAcGFyYW0gJHNpemVcbiAqICBUcmlhbmdsZSBzaXplLiBEZWZhdWx0OiAxZW1cbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdHJpYW5nbGUodG9wKTtcbiAqICBAaW5jbHVkZSB0cmlhbmdsZShsZWZ0LCByZWQsIDJlbSk7XG4gKi9cbkBtaXhpbiB0cmlhbmdsZSgkZGlyZWN0aW9uLCAkY29sb3I6IGN1cnJlbnRjb2xvciwgJHNpemU6IDFlbSkge1xuICAkcGVycGVuZGljdWxhci1ib3JkZXJzOiAkc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogeih0b29sdGlwKTtcblxuICBAaWYgbm90IGluZGV4KHRvcCByaWdodCBib3R0b20gbGVmdCwgJGRpcmVjdGlvbikge1xuICAgIEBlcnJvciAnRGlyZWN0aW9uIG11c3QgYmUgZWl0aGVyIGB0b3BgLCBgcmlnaHRgLCBgYm90dG9tYCBvciBgbGVmdGAuJztcbiAgfVxuXG4gIEBpZiAkZGlyZWN0aW9uID09IHRvcCBvciAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRwZXJwZW5kaWN1bGFyLWJvcmRlcnM7XG4gICAgYm9yZGVyLXJpZ2h0OiAkcGVycGVuZGljdWxhci1ib3JkZXJzO1xuICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gcmlnaHQgb3IgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcbiAgICBib3JkZXItYm90dG9tOiAkcGVycGVuZGljdWxhci1ib3JkZXJzO1xuICAgIGJvcmRlci10b3A6ICRwZXJwZW5kaWN1bGFyLWJvcmRlcnM7XG4gIH1cblxuICBAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xuICAgIGJvdHRvbTogMTAwJTtcbiAgfVxuXG4gIEBpZiAkZGlyZWN0aW9uID09IGJvdHRvbSB7XG4gICAgdG9wOiAxMDAlO1xuICB9XG5cbiAgYm9yZGVyLSN7b3Bwb3NpdGUtZGlyZWN0aW9uKCRkaXJlY3Rpb24pfTogKCRzaXplICogMS41KSBzb2xpZCAkY29sb3I7XG59XG5cbi8vIE5PVEU6IERpc2FibGluZyB0aGUgc3RyaWN0IHZhbHVlIHJ1bGUgYXMgd2UgbmVlZCB0byBidWlsZCBvdXIgdHlwZSBzdHlsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHNjYWxlLXVubGltaXRlZC9kZWNsYXJhdGlvbi1zdHJpY3QtdmFsdWVcblxuXG4vKipcbiAqIFRoZSBiYXNlIHR5cGVmYWNlXG4gKi9cbiR0eXBlX19mYW1pbHktLWJhc2U6ICN7Um9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmfSAhZGVmYXVsdDtcblxuLyoqXG4gKiBUaGUgbW9ub3NwYWNlZCB0eXBlZmFjZSBmYW1pbHlcbiAqL1xuJHR5cGVfX2ZhbWlseS0tbW9ub3NwYWNlZDogI3snTHVjaWRhIENvbnNvbGUnLCBNb25hY28sICdEZWphVnUgU2FucyBNb25vJywgbW9ub3NwYWNlfSAhZGVmYXVsdDtcblxuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cGVmYWNlc1xuICovXG4kdHlwb2dyYXBoeS10eXBlZmFjZXM6IChcbiAgJ3ByaW1hcnknOiAkdHlwZV9fZmFtaWx5LS1iYXNlLFxuICAnbW9ub3NwYWNlZCc6ICR0eXBlX19mYW1pbHktLW1vbm9zcGFjZWRcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgdHlwb2dyYXBoeSBzaXplXG4gKi9cbiR0eXBlX19zaXplLS1iYXNlOiAxNnB4ICFkZWZhdWx0O1xuXG4vKipcbiAqIFRoZSBiYXNlIHR5cG9ncmFwaHkgd2VpZ2h0XG4gKi9cbiR0eXBlX193ZWlnaHQtLWJhc2U6IDQwMCAhZGVmYXVsdDtcblxuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cG9ncmFwaHkgZm9ybWF0c1xuICovXG4kdHlwb2dyYXBoeS1mb3JtYXRzOiAoXG4gICdkaXNwbGF5JyxcbiAgJ2hlYWRsaW5lJyxcbiAgJ3RpdGxlJyxcbiAgJ3N1YmhlYWQnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2ZpeGVkd2lkdGgnLFxuICAnaGludCdcbik7XG5cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBvZ3JhcGh5IGxldmVscyBmb3IgdGhlIGBkaXNwbGF5YCBmb3JtYXRcbiAqL1xuJHR5cG9ncmFwaHktZGlzcGxheS1sZXZlbHM6IChcbiAgMSxcbiAgMixcbiAgMyxcbiAgNFxuKTtcblxuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cG9ncmFwaHkgbGV2ZWxzIGZvciB0aGUgYGJvZHlgIGZvcm1hdFxuICovXG4kdHlwb2dyYXBoeS1ib2R5LWxldmVsczogKFxuICAxLFxuICAyXG4pO1xuXG5cbi8qKlxuICogUmV0dXJuIHR5cG9ncmFwaHkgc3R5bGVzIGJhc2VkIG9uIHRoZSBmb3JtYXQgYW5kIGxldmVsXG4gKlxuICogQHBhcmFtICRmb3JtYXRcbiAqICBPbmUgb2YgdGhlIGF2YWlsYWJsZSBmb3JtYXRzIGRlZmluZWQgd2l0aGluICR0eXBvZ3JhcGh5LWZvcm1hdHMuIERlZmF1bHQ6ICdib2R5Jy5cbiAqIEBwYXJhbSAkbGV2ZWxcbiAqICBPbmUgb2YgdGhlIGFjY2VwdGVkIGxldmVscyBmb3IgdGhlIHBhc3NlZCBpbiBmb3JtYXQuIERlZmF1bHQ6IDFcbiAqIEBwYXJhbSAkdHlwZWZhY2VcbiAqICBPbmUgb2YgdGhlIGF2YWlsYWJsZSB0eXBlZmFjZXMgZGVmaW5lZCBpbiAkdHlwb2dyYXBoeS10eXBlZmFjZXMuIERlZmF1bHQ6ICdwcmltYXJ5J1xuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSB0eXBvZ3JhcGh5O1xuICogIEBpbmNsdWRlIHR5cG9ncmFwaHkoZGlzcGxheSwgNCk7XG4gKi9cbkBtaXhpbiB0eXBvZ3JhcGh5KCRmb3JtYXQ6ICdib2R5JywgJGxldmVsOiAxLCAkdHlwZWZhY2U6ICdwcmltYXJ5Jykge1xuICAvLyBWZXJpZnkgdGhlIGZvcm1hdCBpcyB2YWxpZFxuICBAaWYgaW5kZXgoJHR5cG9ncmFwaHktZm9ybWF0cywgJGZvcm1hdCkgPT0gbnVsbCB7XG4gICAgQGVycm9yICdJbnZhbGlkIHR5cG9ncmFwaHkgZm9ybWF0OiBgI3skZm9ybWF0fWAuIEFsbG93ZWQgZm9ybWF0czogI3skdHlwb2dyYXBoeS1mb3JtYXRzfSc7XG4gIH1cblxuICAvLyBWZXJpZnkgdGhlIHR5cGVmYWNlIGlzIHZhbGlkXG4gIEBpZiBub3QobWFwLWhhcy1rZXkoJHR5cG9ncmFwaHktdHlwZWZhY2VzLCAkdHlwZWZhY2UpKSB7XG4gICAgJGFsbG93ZWQ6IG1hcC1rZXlzKCR0eXBvZ3JhcGh5LXR5cGVmYWNlcyk7XG4gICAgQGVycm9yICdJbnZhbGlkIHR5cG9ncmFwaHkgdHlwZWZhY2U6IGAjeyR0eXBlZmFjZX1gLiBBbGxvd2VkIHR5cGVmYWNlczogI3skYWxsb3dlZH0nO1xuICB9IEBlbHNlIHtcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdHlwb2dyYXBoeS10eXBlZmFjZXMsICR0eXBlZmFjZSk7XG4gIH1cblxuXG4gIC8vIERJU1BMQVlcbiAgQGlmICRmb3JtYXQgPT0gJ2Rpc3BsYXknIHtcbiAgICAvLyBWZXJpZnkgdGhlIGxldmVsIGlzIHZhbGlkIGZvciB0aGlzIGZvcm1hdFxuICAgIEBpZiBpbmRleCgkdHlwb2dyYXBoeS1kaXNwbGF5LWxldmVscywgJGxldmVsKSA9PSBudWxsIHtcbiAgICAgIEBlcnJvciAnSW52YWxpZCBkaXNwbGF5IGZvcm1hdCBsZXZlbDogYCN7JGxldmVsfWAuIEFsbG93ZWQgbGV2ZWxzOiAjeyR0eXBvZ3JhcGh5LWRpc3BsYXktbGV2ZWxzfSc7XG4gICAgfVxuXG4gICAgQGlmICRsZXZlbCA9PSAxIHtcbiAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICBAaWYgJGxldmVsID09IDIge1xuICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIH1cblxuICAgIEBpZiAkbGV2ZWwgPT0gMyB7XG4gICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDA1ZW07XG4gICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICB9XG5cbiAgICBAaWYgJGxldmVsID09IDQge1xuICAgICAgZm9udC1zaXplOiAxMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLS4wMWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDExMnB4O1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gSEVBRExJTkVcbiAgQGlmICRmb3JtYXQgPT0gJ2hlYWRsaW5lJyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cblxuXG4gIC8vIFRJVExFXG4gIEBpZiAkZm9ybWF0ID09ICd0aXRsZScge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDA1ZW07XG4gIH1cblxuXG4gIC8vIFNVQkhFQURcbiAgQGlmICRmb3JtYXQgPT0gJ3N1YmhlYWQnIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuXG4gIC8vIEJPRFlcbiAgQGlmICRmb3JtYXQgPT0gJ2JvZHknIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xuXG4gICAgLy8gVmVyaWZ5IHRoZSBsZXZlbCBpcyB2YWxpZCBmb3IgdGhpcyBmb3JtYXRcbiAgICBAaWYgaW5kZXgoJHR5cG9ncmFwaHktYm9keS1sZXZlbHMsICRsZXZlbCkgPT0gbnVsbCB7XG4gICAgICBAZXJyb3IgJ0ludmFsaWQgYm9keSBmb3JtYXQgbGV2ZWw6IGAjeyRsZXZlbH1gLiBBbGxvd2VkIGxldmVsczogI3skdHlwb2dyYXBoeS1ib2R5LWxldmVsc30nO1xuICAgIH1cblxuICAgIEBpZiAkbGV2ZWwgPT0gMSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAvLyBUT0RPOiBvdmVyd3JpdGUgaW4gZmlsZXMgcmF0aGVyIHRoYW4gdGhpcyBuZXN0ZWQgY2hhaW4gKHRvbyBzcGVjaWZpYykgaHR0cHM6Ly9naXRodWIuY29tL0dldFRlcm1pbnVzL3Rlcm1pbnVzLXVpL2lzc3Vlcy8xMTUyXG4gICAgICAvLyBEb24ndCBhcHBseSBjdXN0b20gbGluZS1oZWlnaHQgdG8gYnV0dG9uc1xuICAgICAgJjpub3QoLmMtYnV0dG9uKSB7XG4gICAgICAgICY6bm90KC5jLWlucHV0KSB7XG4gICAgICAgICAgJjpub3QoLmMtc2VsZWN0KSB7XG4gICAgICAgICAgICAmOm5vdCgudHMtY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRsZXZlbCA9PSAyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cblxuICAvLyBDQVBUSU9OXG4gIEBpZiAkZm9ybWF0ID09ICdjYXB0aW9uJyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDJlbTtcbiAgfVxuXG5cbiAgLy8gRklYRURXSURUSFxuICBAaWYgJGZvcm1hdCA9PSAnZml4ZWR3aWR0aCcge1xuICAgIGZvbnQtZmFtaWx5OiAkdHlwZV9fZmFtaWx5LS1tb25vc3BhY2VkO1xuICB9XG5cblxuICAvLyBIaW50cyAoZm9yIGlucHV0cylcbiAgQGlmICRmb3JtYXQgPT0gJ2hpbnQnIHtcbiAgICBjb2xvcjogY29sb3IodXRpbGl0eSk7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuXG5cbi8qKlxuICogVHJ1bmNhdGUgb3ZlcmZsb3dpbmcgdGV4dCB3aXRoIGFuIGVsbGlwc2lzXG4gKlxuICogQG1peGluIHR5cG9ncmFwaHlcbiAqIEBzZWN0aW9uIFN0eWxlIEhlbHBlcnNcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdHJ1bmNhdGUtb3ZlcmZsb3c7XG4gKi9cbkBtaXhpbiB0cnVuY2F0ZS1vdmVyZmxvdygpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qKlxuICogQ2VudGVyIGNoaWxkIGNvbnRlbnQgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5XG4gKlxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBjZW50ZXItY29udGVudDtcbiAqL1xuQG1peGluIGNlbnRlci1jb250ZW50IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgZWFjaCBkaXJlY3Rpb24gaW4gYSBsaXN0XG4gKlxuICogQHBhcmFtICRkaXJlY3Rpb25zXG4gKiAgTGlzdCBvZiBpbml0aWFsIGRpcmVjdGlvbnNcbiAqIEBleGFtcGxlXG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKHRvcCk7XG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKGxlZnQsIGJvdHRvbSk7XG4gKi9cbkBmdW5jdGlvbiBvcHBvc2l0ZS1kaXJlY3Rpb24oJGRpcmVjdGlvbnMpIHtcbiAgJG9wcG9zaXRlLWRpcmVjdGlvbnM6ICgpO1xuICAkZGlyZWN0aW9uLW1hcDogKFxuICAgICd0b3AnOiAnYm90dG9tJyxcbiAgICAncmlnaHQnOiAnbGVmdCcsXG4gICAgJ2JvdHRvbSc6ICd0b3AnLFxuICAgICdsZWZ0JzogJ3JpZ2h0JyxcbiAgICAnY2VudGVyJzogJ2NlbnRlcicsXG4gICAgJ2x0cic6ICdydGwnLFxuICAgICdydGwnOiAnbHRyJ1xuICApO1xuXG4gIEBlYWNoICRkaXJlY3Rpb24gaW4gJGRpcmVjdGlvbnMge1xuICAgICRkaXJlY3Rpb246IHRvLWxvd2VyLWNhc2UoJGRpcmVjdGlvbik7XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGRpcmVjdGlvbi1tYXAsICRkaXJlY3Rpb24pIHtcbiAgICAgICRvcHBvc2l0ZS1kaXJlY3Rpb25zOiBhcHBlbmQoJG9wcG9zaXRlLWRpcmVjdGlvbnMsIHVucXVvdGUobWFwLWdldCgkZGlyZWN0aW9uLW1hcCwgJGRpcmVjdGlvbikpKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciAnTm8gb3Bwb3NpdGUgZGlyZWN0aW9uIGNhbiBiZSBmb3VuZCBmb3IgYCN7JGRpcmVjdGlvbn1gLiBEaXJlY3Rpb24gb21pdHRlZC4nO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gJG9wcG9zaXRlLWRpcmVjdGlvbnM7XG59XG5cbi8qKlxuICogUHNldWRvIGVsZW1lbnQgYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0gJGRpc3BsYXlcbiAqICBUaGUgZGlzcGxheSB2YWx1ZSAoYmxvY2svaW5saW5lL2V0YylcbiAqIEBwYXJhbSAkcG9zaXRpb25cbiAqICBUaGUgcG9zaXRpb24gc3R5bGUgKGFic29sdXRlL3N0YXRpYy9ldGMpXG4gKiBAcGFyYW0gJGNvbnRlbnRcbiAqICBUaGUgY29udGVudCB2YWx1ZVxuICovXG5AbWl4aW4gcHNldWRvKFxuICAkZGlzcGxheTogYmxvY2ssXG4gICRwb3NpdGlvbjogYWJzb2x1dGUsXG4gICRjb250ZW50OiAnJ1xuKSB7XG4gIGNvbnRlbnQ6ICRjb250ZW50O1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcbn1cblxuLyoqXG4gKiBDb250cm9sIHRoZSByYXRpbyBmb3IgcmVzcG9uc2l2ZSBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSAkeFxuICogIFRoZSB4IHJhdGlvXG4gKiBAcGFyYW0gJHlcbiAqICBUaGUgeSByYXRpb1xuICogQHBhcmFtICRwc2V1ZG9cbiAqICBEZXRlcm1pbmUgaWYgYSBwc2V1ZG8gZWxlbWVudCBzaG91bGQgYmUgdXNlZCB0byBjb250cm9sIHRoZSByYXRpby4gRGVmYXVsdDogdHJ1ZVxuICogQHBhcmFtICRpbWFnZVxuICogIFRoZSBpbWFnZSBzb3VyY2UuIERlZmF1bHQ6IG51bGxcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1yYXRpbygzLCA0KTtcbiAqICBAaW5jbHVkZSByZXNwb25zaXZlLXJhdGlvKDIwLCA5LCB0cnVlLCB1cmwoJy9pbWFnZXMvbGFuZGluZy1oZXJvLmpwZycpKTtcbiAqL1xuQG1peGluIHJlc3BvbnNpdmUtcmF0aW8oJHgsICR5LCAkcHNldWRvOiB0cnVlLCAkaW1hZ2U6IG51bGwpIHtcbiAgJHBhZGRpbmc6IHVucXVvdGUoKCggJHkgLyAkeCApICogMTAwKSArICclJyk7XG5cbiAgQGlmICR4ID09IG51bGwgb3IgJHkgPT0gbnVsbCB7XG4gICAgQGVycm9yICdCb3RoIHRoZSB4IGFuZCB5IHJhdGlvcyBtdXN0IGJlIHBhc3NlZCBpbi4nO1xuICB9XG5cbiAgQGlmICRwc2V1ZG8ge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSBwc2V1ZG8oJHBvc2l0aW9uOiByZWxhdGl2ZSk7XG4gICAgICBwYWRkaW5nLXRvcDogJHBhZGRpbmc7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIHBhZGRpbmctdG9wOiAkcGFkZGluZztcbiAgfVxuXG4gIEBpZiBpbWFnZSAhPSBudWxsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltYWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5cbi8qKlxuICogRmlsbCB0aGUgcGFyZW50IGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gJG1hcmdpblxuICogIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgZWRnZSBvZiB0aGUgcGFyZW50LiBEZWZhdWx0OiAwXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGZpbGwtcGFyZW50O1xuICogIEBpbmNsdWRlIGZpbGwtcGFyZW50KDFlbSk7XG4gKi9cbkBtaXhpbiB0YWtlLXNwYWNlKCRtYXJnaW46IDApIHtcbiAgYm90dG9tOiAkbWFyZ2luO1xuICBsZWZ0OiAkbWFyZ2luO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAkbWFyZ2luO1xuICB0b3A6ICRtYXJnaW47XG59XG5cbi8qKlxuICogTWFrZSBjb250ZW50IHZpc3VhbGx5IGhpZGRlblxuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuO1xuICovXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuIHtcbiAgJHNtYWxsZXN0LWFkanVzdG1lbnQ6IDFweDtcbiAgYm9yZGVyOiAwO1xuICAvLyBub2luc3BlY3Rpb24gQ3NzSW52YWxpZFByb3BlcnR5VmFsdWVcbiAgY2xpcC1wYXRoOiByZWN0KDAsIDAsIDAsIDApO1xuICAvLyBOb3QgYWxsIHN0eWxlcyBhcHBseSB0byBpbmxpbmUgZWxlbWVudHNcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogJHNtYWxsZXN0LWFkanVzdG1lbnQ7XG4gIG1hcmdpbjogLSRzbWFsbGVzdC1hZGp1c3RtZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAkc21hbGxlc3QtYWRqdXN0bWVudDtcbn1cblxuXG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyB0byBoaWRlIGFuIGVsZW1lbnRcbiAqL1xuLnUtdmlzdWFsbHktaGlkZGVuIHtcbiAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0IG9mIHBvc3NpYmxlIHotaW5kZXggdmFsdWVzXG4gKlxuICogKGl0ZW1zIGF0IHRoZSB0b3AgaGF2ZSBhIGhpZ2hlciB2YWx1ZSlcbiAqXG4gKiBAc2VjdGlvbiBDb25maWdcbiAqL1xuJHotbGF5ZXJzOiAoXG4gICdnbG9iYWwtb3ZlcmxheScsXG4gICdnbG9iYWwtaGVhZGVyJyxcbiAgJ2RyYXdlcicsXG4gICd0b29sdGlwJyxcbiAgJ2F0dGFjaGVkLXBhbmVsLW92ZXJsYXknLFxuICAncGFuZWwtaGVhZGVyJyxcbiAgJ21lbnUtdHJpZ2dlcicsXG4pO1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBjb3JyZWN0IHotaW5kZXggdmFsdWUgYnkgcGFzc2luZyBpbiB0aGUgaXRlbSBuYW1lXG4gKlxuICogQHBhcmFtICRuYW1lXG4gKiAgVGhlIG5hbWUgb2YgdGhlIGl0ZW0gdGhhdCBzaG91bGQgaGF2ZSBhbiBhc3NvY2lhdGVkIHotaW5kZXhcbiAqIEBleGFtcGxlXG4gKiAgeih0b29sdGlwKTtcbiAqICB6KGF0dGFjaGVkLXBhbmVsLW92ZXJsYXkpO1xuICovXG5AZnVuY3Rpb24geigkbmFtZSkge1xuICBAaWYgaW5kZXgoJHotbGF5ZXJzLCAkbmFtZSkge1xuICAgIEByZXR1cm4gKGxlbmd0aCgkei1sYXllcnMpIC0gaW5kZXgoJHotbGF5ZXJzLCAkbmFtZSkpICsgNTAwO1xuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ1RoZXJlIGlzIG5vIGl0ZW0gXCIjeyRuYW1lfVwiIGluIHRoaXMgbGlzdDsgY2hvb3NlIG9uZSBvZjogI3skei1sYXllcnN9JztcbiAgICBAcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuXG4iLCIvKipcbiAqIEEgbWl4aW4gdGhhdCBlbmFibGVzIGhpZGRlbiBzdHlsZXMgZm9yIGEgbmVzdGVkIGNkayBjbGFzc1xuICovXG4vKipcbiAqIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuICogdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuICogYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4gKiBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuICogICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuICovXG4vKipcbiAqIFRoZSBwcmltYXJ5IGVhc2luZyBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogVGhlIG1hdGVyaWFsIGJhY2tncm91bmQgZWFzaW5nIGRlZmluaXRpb25cbiAqL1xuLyoqXG4gKiBUaGUgbWF0ZXJpYWwgc2hhZG93IGVhc2luZyBkZWZpbml0aW9uXG4gKi9cbjpyb290IHtcbiAgLS1zd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogdmFyKC0tdHMtYW5pbWF0aW9uLXRpbWUtZHVyYXRpb24tNDAwKTtcbiAgLS1zd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xuICAtLXN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IHZhcigtLXRzLWFuaW1hdGlvbi10aW1lLWR1cmF0aW9uLTMwMCk7XG4gIC0tc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xufVxuXG4vKipcbiAqIFRoZSBsaXN0IG9mIHBvc3NpYmxlIGJyZWFrcG9pbnRzXG4gKi9cbi8qKlxuICogV3JhcCBzdHlsZXMgaW4gYSBtZWRpYSBxdWVyeVxuICpcbiAqIEBwYXJhbSAkcG9pbnRcbiAqICBUaGUgZGVzaXJlZCBicmVha3BvaW50XG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGJwKGxheW91dC1ndC14cykge1xuICogICAgd2lkdGg6IDMwJTtcbiAqICB9XG4gKiAgQGluY2x1ZGUgYnAobGF5b3V0LXhzKSB7XG4gKiAgICB3aWR0aDogMTAwJTtcbiAqICB9XG4gKi9cbi8qKlxuICogVGhlIG1hcCBvZiBhdmFpbGFibGUgY3Vyc29yc1xuICovXG4vKipcbiAqIFJldHJpZXZlIGEgc3BhY2UgZnJvbSB0aGUgJGctY3Vyc29ycyBsaXN0LlxuICpcbiAqIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBlbmZvcmNlIHdoaWNoIGN1cnNvcnMgY2FuIGJlIHVzZWQuXG4gKlxuICogQHBhcmFtICR0eXBlXG4gKiAgVGhlIGN1cnNvciB2YWx1ZSB0byB1c2UuIERlZmF1bHQ6IGF1dG9cbiAqIEBleGFtcGxlXG4gKiAgY3Vyc29yOiBjdXJzb3IoKTtcbiAqICBjdXJzb3I6IGN1cnNvcihwb2ludGVyKTtcbiAqL1xuLyoqXG4gKiBJbmNsdWRlIGEgY3VzdG9tIGN1cnNvclxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBjdXJzb3IgdmFsdWUgdG8gdXNlLlxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBjdXJzb3I7XG4gKiAgQGluY2x1ZGUgY3Vyc29yKHBvaW50ZXIpO1xuICovXG4vKipcbiAqIFJlc2V0IGJ1dHRvbiBzdHlsZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGJ1dHRvbi1iYXNlO1xuICovXG4vKipcbiAqIFRoZSBiYXNlIHR5cGVmYWNlXG4gKi9cbi8qKlxuICogVGhlIG1vbm9zcGFjZWQgdHlwZWZhY2UgZmFtaWx5XG4gKi9cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBlZmFjZXNcbiAqL1xuLyoqXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHNpemVcbiAqL1xuLyoqXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHdlaWdodFxuICovXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwb2dyYXBoeSBmb3JtYXRzXG4gKi9cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBvZ3JhcGh5IGxldmVscyBmb3IgdGhlIGBkaXNwbGF5YCBmb3JtYXRcbiAqL1xuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cG9ncmFwaHkgbGV2ZWxzIGZvciB0aGUgYGJvZHlgIGZvcm1hdFxuICovXG4vKipcbiAqIFJldHVybiB0eXBvZ3JhcGh5IHN0eWxlcyBiYXNlZCBvbiB0aGUgZm9ybWF0IGFuZCBsZXZlbFxuICpcbiAqIEBwYXJhbSAkZm9ybWF0XG4gKiAgT25lIG9mIHRoZSBhdmFpbGFibGUgZm9ybWF0cyBkZWZpbmVkIHdpdGhpbiAkdHlwb2dyYXBoeS1mb3JtYXRzLiBEZWZhdWx0OiAnYm9keScuXG4gKiBAcGFyYW0gJGxldmVsXG4gKiAgT25lIG9mIHRoZSBhY2NlcHRlZCBsZXZlbHMgZm9yIHRoZSBwYXNzZWQgaW4gZm9ybWF0LiBEZWZhdWx0OiAxXG4gKiBAcGFyYW0gJHR5cGVmYWNlXG4gKiAgT25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZWZhY2VzIGRlZmluZWQgaW4gJHR5cG9ncmFwaHktdHlwZWZhY2VzLiBEZWZhdWx0OiAncHJpbWFyeSdcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdHlwb2dyYXBoeTtcbiAqICBAaW5jbHVkZSB0eXBvZ3JhcGh5KGRpc3BsYXksIDQpO1xuICovXG4vKipcbiAqIFRydW5jYXRlIG92ZXJmbG93aW5nIHRleHQgd2l0aCBhbiBlbGxpcHNpc1xuICpcbiAqIEBtaXhpbiB0eXBvZ3JhcGh5XG4gKiBAc2VjdGlvbiBTdHlsZSBIZWxwZXJzXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHRydW5jYXRlLW92ZXJmbG93O1xuICovXG4vKipcbiAqIFRoZSBzcGFjaW5nIGRlZmF1bHRcbiAqXG4gKiBAc2VjdGlvbiBTcGFjaW5nXG4gKi9cbi8qKlxuICogVGhlIG1hcCBvZiBsYXlvdXQgc3BhY2luZ3NcbiAqXG4gKiBTbWFsbDogMTIsIDgsIDRcbiAqIEJhc2U6IDE2XG4gKiBMYXJnZTogMjQsIDMyLCA0MCwgNDgsIDU2LCA3MiwgOTZcbiAqXG4gKiBAc2VjdGlvbiBTcGFjaW5nXG4gKi9cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1zcGFjaW5ncyBtYXBcbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgc3BhY2luZyBtYXAgdG8gdXNlLiBEZWZhdWx0OiBkZWZhdWx0XG4gKiBAcGFyYW0gJHNpemVcbiAqICBUaGUgdmFsdWUgZGVzaXJlZCBmcm9tIHRoZSBtYXAuIERlZmF1bHQ6IDBcbiAqIEBleGFtcGxlXG4gKiAgcGFkZGluZzogc3BhY2luZyhkZWZhdWx0KTtcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGxhcmdlKTtcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGxhcmdlLCA0KTtcbiAqL1xuLyoqXG4gKiBCb3ggU2hhZG93IHZhbHVlcyBmcm9tIE1hdGVyaWFsIFNoYWRvdyBJbnRlcnBvbGF0b3JcbiAqXG4gKiAtIEV4aXN0aW5nIGxpYnJhcnkgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vcHJlc3RvcGFzdG8vU0NTUy1NYXRlcmlhbC1TaGFkb3dzXG4gKiAtIEFuZ3VsYXIgTWF0ZXJpYWwgZGVzaWduIG5vdGVzIGhlcmU6IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVczTkdTTHFEWnpqYkJCTFcyQzZ5XzZOVXh0dmRaQVZhSnZnNThMWTNRMEUvcHJldmlld1xuICogLSBSZWZlcmVuY2UgQ29kZVBlbjogaHR0cHM6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFk/ZWRpdG9ycz0wMDFcbiAqL1xuLyoqXG4gKiBTaGFkb3cgY29sb3JzLlxuICogaHR0cDovL2NvZGVwZW4uaW8vc2h5bmRtYW4vcGVuL29qeG1kWVxuICpcbiAqIC0gVU1CUkE6IFwiQSBjb25pY2FsIHNoYWRvdyBleGNsdWRpbmcgYWxsIGxpZ2h0IGZyb20gYSBnaXZlbiBzb3VyY2U7IF9zcGVjaWZpY2FsbHlfOiB0aGUgY29uaWNhbFxuICogcGFydCBvZiB0aGUgc2hhZG93IG9mIGEgY2VsZXN0aWFsIGJvZHkgZXhjbHVkaW5nIGFsbCBsaWdodCBmcm9tIHRoZSBwcmltYXJ5IHNvdXJjZVwiXG4gKiAtIFBFTlVNQlJBOiBcIkEgc3BhY2Ugb2YgcGFydGlhbCBpbGx1bWluYXRpb24gKGFzIGluIGFuIGVjbGlwc2UpIGJldHdlZW4gdGhlIHBlcmZlY3Qgc2hhZG93IG9uIGFsbFxuICogc2lkZXMgYW5kIHRoZSBmdWxsIGxpZ2h0XCJcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctQ29sb3JzXG4gKiBAc2VjdGlvbiBDb25maWcgPiBTaGFkb3dzXG4gKi9cbi8qKlxuICogSGFuZC1kZXNpZ25lZCByZWZlcmVuY2Ugc2hhZG93IHNldHNcbiAqXG4gKiBTb3VyY2U6IGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFlcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctU2V0c1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4vKipcbiAqIEFuaW1hdGlvbiBkdXJhdGlvbnNcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctQW5pbWF0aW9uLUR1cmF0aW9uc1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4vKipcbiAqIE1hdGVyaWFsIERlc2lnbiBlbGVtZW50IGVsZXZhdGlvbnNcbiAqXG4gKiBTb3VyY2U6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tYXRlcmlhbC1kZXNpZ24vZWxldmF0aW9uLXNoYWRvd3MuaHRtbCNlbGV2YXRpb24tc2hhZG93cy1lbGV2YXRpb24tYW5kcm9pZFxuICpcbiAqIEBudWNsaWRlIFNoYWRvdy1FbGVtZW50cy1NYXBcbiAqIEBzZWN0aW9uIENvbmZpZyA+IFNoYWRvd3NcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIHRoZSB0d28gcmVmZXJlbmNlIHNoYWRvd3Mgd2hvc2UgZWxldmF0aW9ucyBib3VuZCB0aGUgc3BlY2lmaWVkIGVsZXZhdGlvblxuICpcbiAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBzdXBwbGllZCBlbGV2YXRpb24gZXhjZWVkcyB0aGUgbWF4aW11bSByZWZlcmVuY2UgZWxldmF0aW9uLCB0aGUgbGFzdCB0d29cbiAqIHJlZmVyZW5jZSBzaGFkb3dzIGFyZSByZXR1cm5lZC5cbiAqXG4gKiBAbWl4aW4gZmluZC1ib3VuZGluZy1zaGFkb3ctc2V0c1xuICogQHNlY3Rpb24gU2hhZG93LUZ1bmN0aW9uc1xuICogQHBhcmFtICRlbGV2YXRpb25cbiAqICBUaGUgZWxldmF0aW9uXG4gKiBAZXhhbXBsZVxuICogICRmb28gPSBmaW5kLWJvdW5kaW5nLXNoYWRvdy1zZXRzKDIpO1xuICovXG4vKipcbiAqIFBlcmZvcm1zIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdmFsdWVzIGEgYW5kIGJcbiAqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBiZXR3ZWVuIGEgYW5kIGIgcHJvcG9ydGlvbmFsIHRvIHggKHdoZW4geCBpcyBiZXR3ZWVuIDAgYW5kIDEuIFdoZW4geCBpcyBvdXRzaWRlXG4gKiB0aGlzIHJhbmdlLCB0aGUgcmV0dXJuIHZhbHVlIGlzIGEgbGluZWFyIGV4dHJhcG9sYXRpb24pXG4gKlxuICogQG1peGluIGxlcnBcbiAqIEBzZWN0aW9uIFNoYWRvdy1GdW5jdGlvbnNcbiAqIEBwYXJhbSAkeFxuICogIFRoZSBwcm9wb3J0aW9uYWwgY29udHJvbFxuICogQHBhcmFtICRhXG4gKiAgVGhlIHN0YXJ0aW5nIHZhbHVlXG4gKiBAcGFyYW0gJGJcbiAqICBUaGUgZW5kaW5nIHZhbHVlXG4gKiBAZXhhbXBsZVxuICogICRmb28gPSBsZXJwKC4yLCAzLCA2KTtcbiAqL1xuLyoqXG4gKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHNoYWRvd3MgYnkgaW50ZXJwb2xhdGluZyBlYWNoIHByb3BlcnR5IGluZGl2aWR1YWxseVxuICpcbiAqIFJldHVybnMgdGhlIHZhbHVlIGJldHdlZW4gc2hhZG93MSBhbmQgc2hhZG93MiBwcm9wb3J0aW9uYWwgdG8geCAod2hlbiB4IGlzIGJldHdlZW4gMCBhbmQgMS4gV2hlblxuICogeCBpcyBvdXRzaWRlIHRoaXMgcmFuZ2UsIHRoZSByZXR1cm4gdmFsdWUgaXMgYSBsaW5lYXIgZXh0cmFwb2xhdGlvbikuXG4gKlxuICogQG1peGluIGxlcnAtc2hhZG93XG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJHhcbiAqICBUaGUgcHJvcG9ydGlvbmFsIGNvbnRyb2xcbiAqIEBwYXJhbSAkc2hhZG93MVxuICogIFRoZSBzdGFydGluZyBzaGFkb3dcbiAqIEBwYXJhbSAkc2hhZG93MlxuICogIFRoZSBlbmRpbmcgc2hhZG93XG4gKi9cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2V0IG9mIHNoYWRvd3MgYXQgYSBnaXZlbiBlbGV2YXRpb25cbiAqXG4gKiBAbWl4aW4gY2FsY3VsYXRlLXNoYWRvdy1zZXQtYXQtZGVwdGhcbiAqIEBzZWN0aW9uIFNoYWRvdy1GdW5jdGlvbnNcbiAqIEBwYXJhbSAkZWxldmF0aW9uXG4gKiAgVGhlIGRlc2lyZWQgZWxldmF0aW9uXG4gKiBAZXhhbXBsZVxuICogICRmb28gPSBjYWxjdWxhdGUtc2hhZG93LXNldC1hdC1kZXB0aCgyKTtcbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIHRyYW5zaXRpb24gZm9yIGEgY2hhbmdlIGJldHdlZW4gMiBlbGV2YXRpb25zXG4gKlxuICogVGhlIGxhcmdlciB0aGUgZWxldmF0aW9uIGNoYW5nZSB0aGUgbG9uZ2VyIHRoZSBhbmltYXRpb24gdGFrZXNcbiAqXG4gKiBAbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb25cbiAqIEBzZWN0aW9uIFNoYWRvdy1NaXhpbnNcbiAqIEBwYXJhbSAkZWxldmF0aW9uLWNoYW5nZVxuICogIFRoZSBlbGV2YXRpb24gY2hhbmdlIGFtb3VudFxuICogQHBhcmFtICRlYXNpbmdcbiAqICBUaGUgZWFzaW5nIGZ1bmN0aW9uIG9yIG5hbWVcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgZWxldmF0aW9uLXRyYW5zaXRpb24oZGlhbG9nKTtcbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgYm94LXNoYWRvdyBhbmQgdGhlIHRyYW5zaXRpb24gZm9yIGEgZ2l2ZW4gZWxldmF0aW9uXG4gKlxuICogLSBBIHNpbmdsZSBlbGV2YXRpb24gd2lsbCBnZW5lcmF0ZSBhIHNpbmdsZSBib3gtc2hhZG93IHNldFxuICogLSBUd28gZWxldmF0aW9ucyBhbmQgYSBzdGF0ZSB3aWxsIGdlbmVyYXRlIGEgZGVmYXVsdCBib3gtc2hhZG93IHNldCBhbmQgYW5vdGhlciBzZXQgdGhhdCBpc1xuICogYWN0aXZhdGVkIGJ5IHRoZSBzdGF0ZSB0ZXN0ZWQgd2l0aCA6aG92ZXIgYW5kIDphY3RpdmVcbiAqXG4gKiBAbWl4aW4gZWxldmF0aW9uXG4gKiBAc2VjdGlvbiBTaGFkb3ctTWl4aW5zXG4gKiBAcGFyYW0gJGVsZXZhdGlvbjFcbiAqICBUaGUgc3RhcnRpbmcgZWxldmF0aW9uXG4gKiBAcGFyYW0gJGVsZXZhdGlvbjJcbiAqICBUaGUgZGVzdGluYXRpb24gZWxldmF0aW9uXG4gKiBAcGFyYW0gJHN0YXRlXG4gKiAgaG92ZXIsIGZvY3VzLCBhY3RpdmVcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgZWxldmF0aW9uKDIsIDgsIGFjdGl2ZSk7XG4gKi9cbi8qKlxuICogUmV0dXJucyBib3gtc2hhZG93IGFuZCB0cmFuc2l0aW9uIHByb3BlcnRpZXMgZm9yIHNwZWNpZmljIGVsZW1lbnRzLiBTZWUgJG1hdGVyaWFsLWVsZW1lbnRzLlxuICpcbiAqIEBtaXhpbiBlbGV2YXRpb24tZWxlbWVudFxuICogQHNlY3Rpb24gU2hhZG93LU1peGluc1xuICogQHBhcmFtICRlbGVtZW50LW5hbWVcbiAqICBUaGUgZWxlbWVudCB0byBhZGQgYSBzaGFkb3cgdG9cbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgZWxldmF0aW9uLWVsZW1lbnQoZGlhbG9nKTtcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGF2YWlsYWJsZSBjdXJzb3JzXG4gKi9cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1jdXJzb3JzIGxpc3QuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGVuZm9yY2Ugd2hpY2ggY3Vyc29ycyBjYW4gYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS4gRGVmYXVsdDogYXV0b1xuICogQGV4YW1wbGVcbiAqICBjdXJzb3I6IGN1cnNvcigpO1xuICogIGN1cnNvcjogY3Vyc29yKHBvaW50ZXIpO1xuICovXG4vKipcbiAqIEluY2x1ZGUgYSBjdXN0b20gY3Vyc29yXG4gKlxuICogQHBhcmFtICR0eXBlXG4gKiAgVGhlIGN1cnNvciB2YWx1ZSB0byB1c2UuXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGN1cnNvcjtcbiAqICBAaW5jbHVkZSBjdXJzb3IocG9pbnRlcik7XG4gKi9cbi8qKlxuICogUHVyZSAtIERhcmtcbiAqL1xuLyoqXG4gKiBQdXJlIC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBVdGlsaXR5IC0gRXh0cmEgRGFya1xuICovXG4vKipcbiAqIFV0aWxpdHkgLSBEYXJrXG4gKi9cbi8qKlxuICogVXRpbGl0eVxuICovXG4vKipcbiAqIFV0aWxpdHkgLSBMaWdodFxuICovXG4vKipcbiAqIFV0aWxpdHkgLSBFeHRyYSBMaWdodFxuICovXG4vKipcbiAqIFByaW1hcnkgLSBFeHRyYSBEYXJrXG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIERhcmtcbiAqL1xuLyoqXG4gKiBQcmltYXJ5XG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIExpZ2h0XG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIHhMaWdodFxuICovXG4vKipcbiAqIEFjY2VudCAtIEV4dHJhIERhcmtcbiAqL1xuLyoqXG4gKiBBY2NlbnQgLSBEYXJrXG4gKi9cbi8qKlxuICogQWNjZW50XG4gKi9cbi8qKlxuICogQWNjZW50IC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBBY2NlbnQgLSB4TGlnaHRcbiAqL1xuLyoqXG4gKiBFcnJvciAtIERhcmtcbiAqL1xuLyoqXG4gKiBFcnJvclxuICovXG4vKipcbiAqIEVycm9yIC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBXYXJuIC0gRGFya1xuICovXG4vKipcbiAqIFdhcm5cbiAqL1xuLyoqXG4gKiBXYXJuIC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBIaWdobGlnaHQgLSBEYXJrXG4gKi9cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cbi8qKlxuICogSGlnaGxpZ2h0IC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGNvbG9yc1xuICpcbiAqIE5vdGU6IEN1cnJlbnRseSwgd2FybiBhbmQgZXJyb3IgYXJlIHRoZSBzYW1lIGNvbG9yIGluIHRoZSAkcGFsZXR0ZXMgbWFwLiBNb3JlIHdvcmsgbmVlZHMgdG8gYmUgZG9uZSB0byBzb2xpZGlmeSBvdXIgcGFsZXR0ZS5cbiAqL1xuLyoqXG4gKiBSZXRyaWV2ZSBhIGNvbG9yIGZyb20gdGhlIGNvbG9ycyBtYXBcbiAqXG4gKiBAcGFyYW0gJHBhbGV0dGVcbiAqICBUaGUgcGFsZXR0ZSB0byB1c2UgZnJvbSB0aGUgbWFwXG4gKiBAcGFyYW0gJHRvbmVcbiAqICBUaGUgdG9uZSB0byB1c2UgZnJvbSB0aGUgc2VsZWN0ZWQgbWFwLiBEZWZhdWx0OiBiYXNlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGNvbG9yKHByaW1hcnkpO1xuICogIEBpbmNsdWRlIGNvbG9yKGFjY2VudCwgbGlnaHQpO1xuICovXG4vKipcbiAqIFRoZSBtYXAgdGhlbWVzIHRvIGNvbG9yc1xuICovXG4vKipcbiAqIE91dHB1dCBjb25kaXRpb25hbCBzdHlsZXMgZm9yIHRoZSBwb3NzaWJsZSB0aGVtZXNcbiAqXG4gKiBAcGFyYW0gJHByb3BlcnR5XG4gKiAgVGhlIENTUyBwcm9wZXJ0eSB0aGF0IHNob3VsZCBiZSBjb2xvcmVkLiBEZWZhdWx0OiAnYmFja2dyb3VuZC1jb2xvcidcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdGhlbWUtY29sb3I7XG4gKiAgQGluY2x1ZGUgdGhlbWUtY29sb3IoJ2NvbG9yJyk7XG4gKi9cbi8qKlxuICogRGVmaW5lIHRoZSBtYXRlcmlhbCBiYXNlZCBwcmltYXJ5IG1hcFxuICovXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgYWNjZW50IG1hcFxuICovXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgd2FybiBtYXBcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGF2YWlsYWJsZSBjdXJzb3JzXG4gKi9cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1jdXJzb3JzIGxpc3QuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGVuZm9yY2Ugd2hpY2ggY3Vyc29ycyBjYW4gYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS4gRGVmYXVsdDogYXV0b1xuICogQGV4YW1wbGVcbiAqICBjdXJzb3I6IGN1cnNvcigpO1xuICogIGN1cnNvcjogY3Vyc29yKHBvaW50ZXIpO1xuICovXG4vKipcbiAqIEluY2x1ZGUgYSBjdXN0b20gY3Vyc29yXG4gKlxuICogQHBhcmFtICR0eXBlXG4gKiAgVGhlIGN1cnNvciB2YWx1ZSB0byB1c2UuXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGN1cnNvcjtcbiAqICBAaW5jbHVkZSBjdXJzb3IocG9pbnRlcik7XG4gKi9cbi8qKlxuICogUHVyZSAtIERhcmtcbiAqL1xuLyoqXG4gKiBQdXJlIC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBVdGlsaXR5IC0gRXh0cmEgRGFya1xuICovXG4vKipcbiAqIFV0aWxpdHkgLSBEYXJrXG4gKi9cbi8qKlxuICogVXRpbGl0eVxuICovXG4vKipcbiAqIFV0aWxpdHkgLSBMaWdodFxuICovXG4vKipcbiAqIFV0aWxpdHkgLSBFeHRyYSBMaWdodFxuICovXG4vKipcbiAqIFByaW1hcnkgLSBFeHRyYSBEYXJrXG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIERhcmtcbiAqL1xuLyoqXG4gKiBQcmltYXJ5XG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIExpZ2h0XG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIHhMaWdodFxuICovXG4vKipcbiAqIEFjY2VudCAtIEV4dHJhIERhcmtcbiAqL1xuLyoqXG4gKiBBY2NlbnQgLSBEYXJrXG4gKi9cbi8qKlxuICogQWNjZW50XG4gKi9cbi8qKlxuICogQWNjZW50IC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBBY2NlbnQgLSB4TGlnaHRcbiAqL1xuLyoqXG4gKiBFcnJvciAtIERhcmtcbiAqL1xuLyoqXG4gKiBFcnJvclxuICovXG4vKipcbiAqIEVycm9yIC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBXYXJuIC0gRGFya1xuICovXG4vKipcbiAqIFdhcm5cbiAqL1xuLyoqXG4gKiBXYXJuIC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBIaWdobGlnaHQgLSBEYXJrXG4gKi9cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cbi8qKlxuICogSGlnaGxpZ2h0IC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGNvbG9yc1xuICpcbiAqIE5vdGU6IEN1cnJlbnRseSwgd2FybiBhbmQgZXJyb3IgYXJlIHRoZSBzYW1lIGNvbG9yIGluIHRoZSAkcGFsZXR0ZXMgbWFwLiBNb3JlIHdvcmsgbmVlZHMgdG8gYmUgZG9uZSB0byBzb2xpZGlmeSBvdXIgcGFsZXR0ZS5cbiAqL1xuLyoqXG4gKiBSZXRyaWV2ZSBhIGNvbG9yIGZyb20gdGhlIGNvbG9ycyBtYXBcbiAqXG4gKiBAcGFyYW0gJHBhbGV0dGVcbiAqICBUaGUgcGFsZXR0ZSB0byB1c2UgZnJvbSB0aGUgbWFwXG4gKiBAcGFyYW0gJHRvbmVcbiAqICBUaGUgdG9uZSB0byB1c2UgZnJvbSB0aGUgc2VsZWN0ZWQgbWFwLiBEZWZhdWx0OiBiYXNlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGNvbG9yKHByaW1hcnkpO1xuICogIEBpbmNsdWRlIGNvbG9yKGFjY2VudCwgbGlnaHQpO1xuICovXG4vKipcbiAqIFRoZSBtYXAgdGhlbWVzIHRvIGNvbG9yc1xuICovXG4vKipcbiAqIE91dHB1dCBjb25kaXRpb25hbCBzdHlsZXMgZm9yIHRoZSBwb3NzaWJsZSB0aGVtZXNcbiAqXG4gKiBAcGFyYW0gJHByb3BlcnR5XG4gKiAgVGhlIENTUyBwcm9wZXJ0eSB0aGF0IHNob3VsZCBiZSBjb2xvcmVkLiBEZWZhdWx0OiAnYmFja2dyb3VuZC1jb2xvcidcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdGhlbWUtY29sb3I7XG4gKiAgQGluY2x1ZGUgdGhlbWUtY29sb3IoJ2NvbG9yJyk7XG4gKi9cbi8qKlxuICogRGVmaW5lIHRoZSBtYXRlcmlhbCBiYXNlZCBwcmltYXJ5IG1hcFxuICovXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgYWNjZW50IG1hcFxuICovXG4vKipcbiAqIERlZmluZSB0aGUgbWF0ZXJpYWwgYmFzZWQgd2FybiBtYXBcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGF2YWlsYWJsZSBjdXJzb3JzXG4gKi9cbi8qKlxuICogUmV0cmlldmUgYSBzcGFjZSBmcm9tIHRoZSAkZy1jdXJzb3JzIGxpc3QuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGVuZm9yY2Ugd2hpY2ggY3Vyc29ycyBjYW4gYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gJHR5cGVcbiAqICBUaGUgY3Vyc29yIHZhbHVlIHRvIHVzZS4gRGVmYXVsdDogYXV0b1xuICogQGV4YW1wbGVcbiAqICBjdXJzb3I6IGN1cnNvcigpO1xuICogIGN1cnNvcjogY3Vyc29yKHBvaW50ZXIpO1xuICovXG4vKipcbiAqIEluY2x1ZGUgYSBjdXN0b20gY3Vyc29yXG4gKlxuICogQHBhcmFtICR0eXBlXG4gKiAgVGhlIGN1cnNvciB2YWx1ZSB0byB1c2UuXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGN1cnNvcjtcbiAqICBAaW5jbHVkZSBjdXJzb3IocG9pbnRlcik7XG4gKi9cbi8qKlxuICogVGhlIHNwYWNpbmcgZGVmYXVsdFxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGxheW91dCBzcGFjaW5nc1xuICpcbiAqIFNtYWxsOiAxMiwgOCwgNFxuICogQmFzZTogMTZcbiAqIExhcmdlOiAyNCwgMzIsIDQwLCA0OCwgNTYsIDcyLCA5NlxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuLyoqXG4gKiBSZXRyaWV2ZSBhIHNwYWNlIGZyb20gdGhlICRnLXNwYWNpbmdzIG1hcFxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBzcGFjaW5nIG1hcCB0byB1c2UuIERlZmF1bHQ6IGRlZmF1bHRcbiAqIEBwYXJhbSAkc2l6ZVxuICogIFRoZSB2YWx1ZSBkZXNpcmVkIGZyb20gdGhlIG1hcC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGRlZmF1bHQpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UsIDQpO1xuICovXG4uY2RrLWRyYWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jZGstZHJhZzpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcmFnIC5jZGstZHJhZy1oYW5kbGUge1xuICBjb2xvcjogI2NlY2RkMTtcbiAgY3Vyc29yOiBucy1yZXNpemU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbn1cblxuLmNkay1kcmFnLmNkay1kcmFnLXByZXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcGx1Z2luL3N0eWxlbGludC1uby1pbmRpc3Rpbmd1aXNoYWJsZS1jb2xvcnMgKi9cbiAgLS1zaGFkb3c6XG4gICAgICAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIC4yKSxcbiAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE0KSxcbiAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstZHJhZy5jZGstZHJhZy1wcmV2aWV3IC5jLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIC0tZHJvcC1iZzogI2NjZThkNTtcbiAgLS1kcm9wLWJvcmRlcjogIzdmZDA5YztcbiAgYmFja2dyb3VuZDogdmFyKC0tZHJvcC1iZyk7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1kcm9wLWJvcmRlcik7XG4gIGN1cnNvcjogbnMtcmVzaXplO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi8qKlxuICogQSBtaXhpbiB0byBjb3JyZWN0bHkgbmVzdCBwbGFjZWhvbGRlciBzdHlsZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAqICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICogIH1cbiAqL1xuLyoqXG4gKiBBIG1peGluIHRvIGNvcnJlY3RseSBuZXN0IHBsYWNlaG9sZGVyIHN0eWxlc1xuICpcbiAqIEBleGFtcGxlXG4gKiAgaW5wdXQtcGxhY2Vob2xkZXIge1xuICogICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gKiAgfVxuICovXG4vKipcbiAqIENlbnRlciBjaGlsZCBjb250ZW50IHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseVxuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY2VudGVyLWNvbnRlbnQ7XG4gKi9cbi8qKlxuICogUmV0dXJuIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgZWFjaCBkaXJlY3Rpb24gaW4gYSBsaXN0XG4gKlxuICogQHBhcmFtICRkaXJlY3Rpb25zXG4gKiAgTGlzdCBvZiBpbml0aWFsIGRpcmVjdGlvbnNcbiAqIEBleGFtcGxlXG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKHRvcCk7XG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKGxlZnQsIGJvdHRvbSk7XG4gKi9cbi8qKlxuICogUHNldWRvIGVsZW1lbnQgYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0gJGRpc3BsYXlcbiAqICBUaGUgZGlzcGxheSB2YWx1ZSAoYmxvY2svaW5saW5lL2V0YylcbiAqIEBwYXJhbSAkcG9zaXRpb25cbiAqICBUaGUgcG9zaXRpb24gc3R5bGUgKGFic29sdXRlL3N0YXRpYy9ldGMpXG4gKiBAcGFyYW0gJGNvbnRlbnRcbiAqICBUaGUgY29udGVudCB2YWx1ZVxuICovXG4vKipcbiAqIENvbnRyb2wgdGhlIHJhdGlvIGZvciByZXNwb25zaXZlIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtICR4XG4gKiAgVGhlIHggcmF0aW9cbiAqIEBwYXJhbSAkeVxuICogIFRoZSB5IHJhdGlvXG4gKiBAcGFyYW0gJHBzZXVkb1xuICogIERldGVybWluZSBpZiBhIHBzZXVkbyBlbGVtZW50IHNob3VsZCBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIHJhdGlvLiBEZWZhdWx0OiB0cnVlXG4gKiBAcGFyYW0gJGltYWdlXG4gKiAgVGhlIGltYWdlIHNvdXJjZS4gRGVmYXVsdDogbnVsbFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSByZXNwb25zaXZlLXJhdGlvKDMsIDQpO1xuICogIEBpbmNsdWRlIHJlc3BvbnNpdmUtcmF0aW8oMjAsIDksIHRydWUsIHVybCgnL2ltYWdlcy9sYW5kaW5nLWhlcm8uanBnJykpO1xuICovXG4vKipcbiAqIEZpbGwgdGhlIHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtICRtYXJnaW5cbiAqICBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIHBhcmVudC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudDtcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudCgxZW0pO1xuICovXG4vKipcbiAqIE1ha2UgY29udGVudCB2aXN1YWxseSBoaWRkZW5cbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHZpc3VhbGx5LWhpZGRlbjtcbiAqL1xuLyoqXG4gKiBUaGUgYmFzZSB0eXBlZmFjZVxuICovXG4vKipcbiAqIFRoZSBtb25vc3BhY2VkIHR5cGVmYWNlIGZhbWlseVxuICovXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwZWZhY2VzXG4gKi9cbi8qKlxuICogVGhlIGJhc2UgdHlwb2dyYXBoeSBzaXplXG4gKi9cbi8qKlxuICogVGhlIGJhc2UgdHlwb2dyYXBoeSB3ZWlnaHRcbiAqL1xuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cG9ncmFwaHkgZm9ybWF0c1xuICovXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwb2dyYXBoeSBsZXZlbHMgZm9yIHRoZSBgZGlzcGxheWAgZm9ybWF0XG4gKi9cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBvZ3JhcGh5IGxldmVscyBmb3IgdGhlIGBib2R5YCBmb3JtYXRcbiAqL1xuLyoqXG4gKiBSZXR1cm4gdHlwb2dyYXBoeSBzdHlsZXMgYmFzZWQgb24gdGhlIGZvcm1hdCBhbmQgbGV2ZWxcbiAqXG4gKiBAcGFyYW0gJGZvcm1hdFxuICogIE9uZSBvZiB0aGUgYXZhaWxhYmxlIGZvcm1hdHMgZGVmaW5lZCB3aXRoaW4gJHR5cG9ncmFwaHktZm9ybWF0cy4gRGVmYXVsdDogJ2JvZHknLlxuICogQHBhcmFtICRsZXZlbFxuICogIE9uZSBvZiB0aGUgYWNjZXB0ZWQgbGV2ZWxzIGZvciB0aGUgcGFzc2VkIGluIGZvcm1hdC4gRGVmYXVsdDogMVxuICogQHBhcmFtICR0eXBlZmFjZVxuICogIE9uZSBvZiB0aGUgYXZhaWxhYmxlIHR5cGVmYWNlcyBkZWZpbmVkIGluICR0eXBvZ3JhcGh5LXR5cGVmYWNlcy4gRGVmYXVsdDogJ3ByaW1hcnknXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHR5cG9ncmFwaHk7XG4gKiAgQGluY2x1ZGUgdHlwb2dyYXBoeShkaXNwbGF5LCA0KTtcbiAqL1xuLyoqXG4gKiBUcnVuY2F0ZSBvdmVyZmxvd2luZyB0ZXh0IHdpdGggYW4gZWxsaXBzaXNcbiAqXG4gKiBAbWl4aW4gdHlwb2dyYXBoeVxuICogQHNlY3Rpb24gU3R5bGUgSGVscGVyc1xuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSB0cnVuY2F0ZS1vdmVyZmxvdztcbiAqL1xuLyoqXG4gKiBUaGUgc3BhY2luZyBkZWZhdWx0XG4gKlxuICogQHNlY3Rpb24gU3BhY2luZ1xuICovXG4vKipcbiAqIFRoZSBtYXAgb2YgbGF5b3V0IHNwYWNpbmdzXG4gKlxuICogU21hbGw6IDEyLCA4LCA0XG4gKiBCYXNlOiAxNlxuICogTGFyZ2U6IDI0LCAzMiwgNDAsIDQ4LCA1NiwgNzIsIDk2XG4gKlxuICogQHNlY3Rpb24gU3BhY2luZ1xuICovXG4vKipcbiAqIFJldHJpZXZlIGEgc3BhY2UgZnJvbSB0aGUgJGctc3BhY2luZ3MgbWFwXG4gKlxuICogQHBhcmFtICR0eXBlXG4gKiAgVGhlIHNwYWNpbmcgbWFwIHRvIHVzZS4gRGVmYXVsdDogZGVmYXVsdFxuICogQHBhcmFtICRzaXplXG4gKiAgVGhlIHZhbHVlIGRlc2lyZWQgZnJvbSB0aGUgbWFwLiBEZWZhdWx0OiAwXG4gKiBAZXhhbXBsZVxuICogIHBhZGRpbmc6IHNwYWNpbmcoZGVmYXVsdCk7XG4gKiAgcGFkZGluZzogc3BhY2luZyhsYXJnZSk7XG4gKiAgcGFkZGluZzogc3BhY2luZyhsYXJnZSwgNCk7XG4gKi9cbi8qKlxuICogQmFzZSBzdHlsZXMgZm9yIG1lbnUgaXRlbXNcbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIG1lbnUtYmFzZTtcbiAqL1xuLyoqXG4gKiBSZXNldCBicm93c2VyIGFuZCBib290c3RyYXAgc3R5bGVzXG4gKlxuICogTk9URTogVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB3ZSBjYW5ub3QgdXNlIGEgZ2xvYmFsIHJlc2V0IHN0eWxlc2hlZXQuIE9uY2UgdGhlIGZ1bGwgVGVybWludXMgYXBwXG4gKiBoYXMgdHJhbnNpdGlvbmVkIHRvIHRoZSBVSSBsaWJyYXJ5LCB0aGlzIGNhbiBiZSByZW1vdmVkIGluIGZhdm9yIG9mIGEgZ2xvYmFsIHJlc2V0IHN0eWxlc2hlZXQuXG4gKlxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSByZXNldDtcbiAqL1xuLyoqXG4gKiBQdXJlIC0gRGFya1xuICovXG4vKipcbiAqIFB1cmUgLSBMaWdodFxuICovXG4vKipcbiAqIFV0aWxpdHkgLSBFeHRyYSBEYXJrXG4gKi9cbi8qKlxuICogVXRpbGl0eSAtIERhcmtcbiAqL1xuLyoqXG4gKiBVdGlsaXR5XG4gKi9cbi8qKlxuICogVXRpbGl0eSAtIExpZ2h0XG4gKi9cbi8qKlxuICogVXRpbGl0eSAtIEV4dHJhIExpZ2h0XG4gKi9cbi8qKlxuICogUHJpbWFyeSAtIEV4dHJhIERhcmtcbiAqL1xuLyoqXG4gKiBQcmltYXJ5IC0gRGFya1xuICovXG4vKipcbiAqIFByaW1hcnlcbiAqL1xuLyoqXG4gKiBQcmltYXJ5IC0gTGlnaHRcbiAqL1xuLyoqXG4gKiBQcmltYXJ5IC0geExpZ2h0XG4gKi9cbi8qKlxuICogQWNjZW50IC0gRXh0cmEgRGFya1xuICovXG4vKipcbiAqIEFjY2VudCAtIERhcmtcbiAqL1xuLyoqXG4gKiBBY2NlbnRcbiAqL1xuLyoqXG4gKiBBY2NlbnQgLSBMaWdodFxuICovXG4vKipcbiAqIEFjY2VudCAtIHhMaWdodFxuICovXG4vKipcbiAqIEVycm9yIC0gRGFya1xuICovXG4vKipcbiAqIEVycm9yXG4gKi9cbi8qKlxuICogRXJyb3IgLSBMaWdodFxuICovXG4vKipcbiAqIFdhcm4gLSBEYXJrXG4gKi9cbi8qKlxuICogV2FyblxuICovXG4vKipcbiAqIFdhcm4gLSBMaWdodFxuICovXG4vKipcbiAqIEhpZ2hsaWdodCAtIERhcmtcbiAqL1xuLyoqXG4gKiBIaWdobGlnaHRcbiAqL1xuLyoqXG4gKiBIaWdobGlnaHQgLSBMaWdodFxuICovXG4vKipcbiAqIFRoZSBtYXAgb2YgY29sb3JzXG4gKlxuICogTm90ZTogQ3VycmVudGx5LCB3YXJuIGFuZCBlcnJvciBhcmUgdGhlIHNhbWUgY29sb3IgaW4gdGhlICRwYWxldHRlcyBtYXAuIE1vcmUgd29yayBuZWVkcyB0byBiZSBkb25lIHRvIHNvbGlkaWZ5IG91ciBwYWxldHRlLlxuICovXG4vKipcbiAqIFJldHJpZXZlIGEgY29sb3IgZnJvbSB0aGUgY29sb3JzIG1hcFxuICpcbiAqIEBwYXJhbSAkcGFsZXR0ZVxuICogIFRoZSBwYWxldHRlIHRvIHVzZSBmcm9tIHRoZSBtYXBcbiAqIEBwYXJhbSAkdG9uZVxuICogIFRoZSB0b25lIHRvIHVzZSBmcm9tIHRoZSBzZWxlY3RlZCBtYXAuIERlZmF1bHQ6IGJhc2VcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY29sb3IocHJpbWFyeSk7XG4gKiAgQGluY2x1ZGUgY29sb3IoYWNjZW50LCBsaWdodCk7XG4gKi9cbi8qKlxuICogVGhlIG1hcCB0aGVtZXMgdG8gY29sb3JzXG4gKi9cbi8qKlxuICogT3V0cHV0IGNvbmRpdGlvbmFsIHN0eWxlcyBmb3IgdGhlIHBvc3NpYmxlIHRoZW1lc1xuICpcbiAqIEBwYXJhbSAkcHJvcGVydHlcbiAqICBUaGUgQ1NTIHByb3BlcnR5IHRoYXQgc2hvdWxkIGJlIGNvbG9yZWQuIERlZmF1bHQ6ICdiYWNrZ3JvdW5kLWNvbG9yJ1xuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSB0aGVtZS1jb2xvcjtcbiAqICBAaW5jbHVkZSB0aGVtZS1jb2xvcignY29sb3InKTtcbiAqL1xuLyoqXG4gKiBEZWZpbmUgdGhlIG1hdGVyaWFsIGJhc2VkIHByaW1hcnkgbWFwXG4gKi9cbi8qKlxuICogRGVmaW5lIHRoZSBtYXRlcmlhbCBiYXNlZCBhY2NlbnQgbWFwXG4gKi9cbi8qKlxuICogRGVmaW5lIHRoZSBtYXRlcmlhbCBiYXNlZCB3YXJuIG1hcFxuICovXG4vKipcbiAqIFN0eWxlcyB0byBtYWtlIHNjcm9sbGJhcnMgYWx3YXlzIHZpc2libGUgb24gd2Via2l0IGJyb3dzZXJzXG4gKlxuICogQHBhcmFtIGNvbG9yIC0gVGhlIGNvbG9yIGZvciB0aGUgYm9yZGVyIGFuZCBiYWNrZ3JvdW5kIChjYW5ub3QgYmUgdHJhbnNwYXJlbnQpXG4gKi9cbi8qKlxuICogQm94IFNoYWRvdyB2YWx1ZXMgZnJvbSBNYXRlcmlhbCBTaGFkb3cgSW50ZXJwb2xhdG9yXG4gKlxuICogLSBFeGlzdGluZyBsaWJyYXJ5IHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL3ByZXN0b3Bhc3RvL1NDU1MtTWF0ZXJpYWwtU2hhZG93c1xuICogLSBBbmd1bGFyIE1hdGVyaWFsIGRlc2lnbiBub3RlcyBoZXJlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFXM05HU0xxRFp6amJCQkxXMkM2eV82TlV4dHZkWkFWYUp2ZzU4TFkzUTBFL3ByZXZpZXdcbiAqIC0gUmVmZXJlbmNlIENvZGVQZW46IGh0dHBzOi8vY29kZXBlbi5pby9zaHluZG1hbi9wZW4vb2p4bWRZP2VkaXRvcnM9MDAxXG4gKi9cbi8qKlxuICogU2hhZG93IGNvbG9ycy5cbiAqIGh0dHA6Ly9jb2RlcGVuLmlvL3NoeW5kbWFuL3Blbi9vanhtZFlcbiAqXG4gKiAtIFVNQlJBOiBcIkEgY29uaWNhbCBzaGFkb3cgZXhjbHVkaW5nIGFsbCBsaWdodCBmcm9tIGEgZ2l2ZW4gc291cmNlOyBfc3BlY2lmaWNhbGx5XzogdGhlIGNvbmljYWxcbiAqIHBhcnQgb2YgdGhlIHNoYWRvdyBvZiBhIGNlbGVzdGlhbCBib2R5IGV4Y2x1ZGluZyBhbGwgbGlnaHQgZnJvbSB0aGUgcHJpbWFyeSBzb3VyY2VcIlxuICogLSBQRU5VTUJSQTogXCJBIHNwYWNlIG9mIHBhcnRpYWwgaWxsdW1pbmF0aW9uIChhcyBpbiBhbiBlY2xpcHNlKSBiZXR3ZWVuIHRoZSBwZXJmZWN0IHNoYWRvdyBvbiBhbGxcbiAqIHNpZGVzIGFuZCB0aGUgZnVsbCBsaWdodFwiXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LUNvbG9yc1xuICogQHNlY3Rpb24gQ29uZmlnID4gU2hhZG93c1xuICovXG4vKipcbiAqIEhhbmQtZGVzaWduZWQgcmVmZXJlbmNlIHNoYWRvdyBzZXRzXG4gKlxuICogU291cmNlOiBodHRwOi8vY29kZXBlbi5pby9zaHluZG1hbi9wZW4vb2p4bWRZXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LVNldHNcbiAqIEBzZWN0aW9uIENvbmZpZyA+IFNoYWRvd3NcbiAqL1xuLyoqXG4gKiBBbmltYXRpb24gZHVyYXRpb25zXG4gKlxuICogQG51Y2xpZGUgU2hhZG93LUFuaW1hdGlvbi1EdXJhdGlvbnNcbiAqIEBzZWN0aW9uIENvbmZpZyA+IFNoYWRvd3NcbiAqL1xuLyoqXG4gKiBNYXRlcmlhbCBEZXNpZ24gZWxlbWVudCBlbGV2YXRpb25zXG4gKlxuICogU291cmNlOiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbWF0ZXJpYWwtZGVzaWduL2VsZXZhdGlvbi1zaGFkb3dzLmh0bWwjZWxldmF0aW9uLXNoYWRvd3MtZWxldmF0aW9uLWFuZHJvaWRcbiAqXG4gKiBAbnVjbGlkZSBTaGFkb3ctRWxlbWVudHMtTWFwXG4gKiBAc2VjdGlvbiBDb25maWcgPiBTaGFkb3dzXG4gKi9cbi8qKlxuICogUmV0dXJucyB0aGUgdHdvIHJlZmVyZW5jZSBzaGFkb3dzIHdob3NlIGVsZXZhdGlvbnMgYm91bmQgdGhlIHNwZWNpZmllZCBlbGV2YXRpb25cbiAqXG4gKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgc3VwcGxpZWQgZWxldmF0aW9uIGV4Y2VlZHMgdGhlIG1heGltdW0gcmVmZXJlbmNlIGVsZXZhdGlvbiwgdGhlIGxhc3QgdHdvXG4gKiByZWZlcmVuY2Ugc2hhZG93cyBhcmUgcmV0dXJuZWQuXG4gKlxuICogQG1peGluIGZpbmQtYm91bmRpbmctc2hhZG93LXNldHNcbiAqIEBzZWN0aW9uIFNoYWRvdy1GdW5jdGlvbnNcbiAqIEBwYXJhbSAkZWxldmF0aW9uXG4gKiAgVGhlIGVsZXZhdGlvblxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gZmluZC1ib3VuZGluZy1zaGFkb3ctc2V0cygyKTtcbiAqL1xuLyoqXG4gKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHZhbHVlcyBhIGFuZCBiXG4gKlxuICogUmV0dXJucyB0aGUgdmFsdWUgYmV0d2VlbiBhIGFuZCBiIHByb3BvcnRpb25hbCB0byB4ICh3aGVuIHggaXMgYmV0d2VlbiAwIGFuZCAxLiBXaGVuIHggaXMgb3V0c2lkZVxuICogdGhpcyByYW5nZSwgdGhlIHJldHVybiB2YWx1ZSBpcyBhIGxpbmVhciBleHRyYXBvbGF0aW9uKVxuICpcbiAqIEBtaXhpbiBsZXJwXG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJHhcbiAqICBUaGUgcHJvcG9ydGlvbmFsIGNvbnRyb2xcbiAqIEBwYXJhbSAkYVxuICogIFRoZSBzdGFydGluZyB2YWx1ZVxuICogQHBhcmFtICRiXG4gKiAgVGhlIGVuZGluZyB2YWx1ZVxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gbGVycCguMiwgMywgNik7XG4gKi9cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBzaGFkb3dzIGJ5IGludGVycG9sYXRpbmcgZWFjaCBwcm9wZXJ0eSBpbmRpdmlkdWFsbHlcbiAqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBiZXR3ZWVuIHNoYWRvdzEgYW5kIHNoYWRvdzIgcHJvcG9ydGlvbmFsIHRvIHggKHdoZW4geCBpcyBiZXR3ZWVuIDAgYW5kIDEuIFdoZW5cbiAqIHggaXMgb3V0c2lkZSB0aGlzIHJhbmdlLCB0aGUgcmV0dXJuIHZhbHVlIGlzIGEgbGluZWFyIGV4dHJhcG9sYXRpb24pLlxuICpcbiAqIEBtaXhpbiBsZXJwLXNoYWRvd1xuICogQHNlY3Rpb24gU2hhZG93LUZ1bmN0aW9uc1xuICogQHBhcmFtICR4XG4gKiAgVGhlIHByb3BvcnRpb25hbCBjb250cm9sXG4gKiBAcGFyYW0gJHNoYWRvdzFcbiAqICBUaGUgc3RhcnRpbmcgc2hhZG93XG4gKiBAcGFyYW0gJHNoYWRvdzJcbiAqICBUaGUgZW5kaW5nIHNoYWRvd1xuICovXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNldCBvZiBzaGFkb3dzIGF0IGEgZ2l2ZW4gZWxldmF0aW9uXG4gKlxuICogQG1peGluIGNhbGN1bGF0ZS1zaGFkb3ctc2V0LWF0LWRlcHRoXG4gKiBAc2VjdGlvbiBTaGFkb3ctRnVuY3Rpb25zXG4gKiBAcGFyYW0gJGVsZXZhdGlvblxuICogIFRoZSBkZXNpcmVkIGVsZXZhdGlvblxuICogQGV4YW1wbGVcbiAqICAkZm9vID0gY2FsY3VsYXRlLXNoYWRvdy1zZXQtYXQtZGVwdGgoMik7XG4gKi9cbi8qKlxuICogR2VuZXJhdGVzIHRoZSB0cmFuc2l0aW9uIGZvciBhIGNoYW5nZSBiZXR3ZWVuIDIgZWxldmF0aW9uc1xuICpcbiAqIFRoZSBsYXJnZXIgdGhlIGVsZXZhdGlvbiBjaGFuZ2UgdGhlIGxvbmdlciB0aGUgYW5pbWF0aW9uIHRha2VzXG4gKlxuICogQG1peGluIGVsZXZhdGlvbi10cmFuc2l0aW9uXG4gKiBAc2VjdGlvbiBTaGFkb3ctTWl4aW5zXG4gKiBAcGFyYW0gJGVsZXZhdGlvbi1jaGFuZ2VcbiAqICBUaGUgZWxldmF0aW9uIGNoYW5nZSBhbW91bnRcbiAqIEBwYXJhbSAkZWFzaW5nXG4gKiAgVGhlIGVhc2luZyBmdW5jdGlvbiBvciBuYW1lXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbi10cmFuc2l0aW9uKGRpYWxvZyk7XG4gKi9cbi8qKlxuICogR2VuZXJhdGVzIGJveC1zaGFkb3cgYW5kIHRoZSB0cmFuc2l0aW9uIGZvciBhIGdpdmVuIGVsZXZhdGlvblxuICpcbiAqIC0gQSBzaW5nbGUgZWxldmF0aW9uIHdpbGwgZ2VuZXJhdGUgYSBzaW5nbGUgYm94LXNoYWRvdyBzZXRcbiAqIC0gVHdvIGVsZXZhdGlvbnMgYW5kIGEgc3RhdGUgd2lsbCBnZW5lcmF0ZSBhIGRlZmF1bHQgYm94LXNoYWRvdyBzZXQgYW5kIGFub3RoZXIgc2V0IHRoYXQgaXNcbiAqIGFjdGl2YXRlZCBieSB0aGUgc3RhdGUgdGVzdGVkIHdpdGggOmhvdmVyIGFuZCA6YWN0aXZlXG4gKlxuICogQG1peGluIGVsZXZhdGlvblxuICogQHNlY3Rpb24gU2hhZG93LU1peGluc1xuICogQHBhcmFtICRlbGV2YXRpb24xXG4gKiAgVGhlIHN0YXJ0aW5nIGVsZXZhdGlvblxuICogQHBhcmFtICRlbGV2YXRpb24yXG4gKiAgVGhlIGRlc3RpbmF0aW9uIGVsZXZhdGlvblxuICogQHBhcmFtICRzdGF0ZVxuICogIGhvdmVyLCBmb2N1cywgYWN0aXZlXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbigyLCA4LCBhY3RpdmUpO1xuICovXG4vKipcbiAqIFJldHVybnMgYm94LXNoYWRvdyBhbmQgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzIGZvciBzcGVjaWZpYyBlbGVtZW50cy4gU2VlICRtYXRlcmlhbC1lbGVtZW50cy5cbiAqXG4gKiBAbWl4aW4gZWxldmF0aW9uLWVsZW1lbnRcbiAqIEBzZWN0aW9uIFNoYWRvdy1NaXhpbnNcbiAqIEBwYXJhbSAkZWxlbWVudC1uYW1lXG4gKiAgVGhlIGVsZW1lbnQgdG8gYWRkIGEgc2hhZG93IHRvXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIGVsZXZhdGlvbi1lbGVtZW50KGRpYWxvZyk7XG4gKi9cbi8qKlxuICogVGhlIHNwYWNpbmcgZGVmYXVsdFxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuLyoqXG4gKiBUaGUgbWFwIG9mIGxheW91dCBzcGFjaW5nc1xuICpcbiAqIFNtYWxsOiAxMiwgOCwgNFxuICogQmFzZTogMTZcbiAqIExhcmdlOiAyNCwgMzIsIDQwLCA0OCwgNTYsIDcyLCA5NlxuICpcbiAqIEBzZWN0aW9uIFNwYWNpbmdcbiAqL1xuLyoqXG4gKiBSZXRyaWV2ZSBhIHNwYWNlIGZyb20gdGhlICRnLXNwYWNpbmdzIG1hcFxuICpcbiAqIEBwYXJhbSAkdHlwZVxuICogIFRoZSBzcGFjaW5nIG1hcCB0byB1c2UuIERlZmF1bHQ6IGRlZmF1bHRcbiAqIEBwYXJhbSAkc2l6ZVxuICogIFRoZSB2YWx1ZSBkZXNpcmVkIGZyb20gdGhlIG1hcC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBwYWRkaW5nOiBzcGFjaW5nKGRlZmF1bHQpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UpO1xuICogIHBhZGRpbmc6IHNwYWNpbmcobGFyZ2UsIDQpO1xuICovXG4vKipcbiAqIENlbnRlciBjaGlsZCBjb250ZW50IHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseVxuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY2VudGVyLWNvbnRlbnQ7XG4gKi9cbi8qKlxuICogUmV0dXJuIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgZWFjaCBkaXJlY3Rpb24gaW4gYSBsaXN0XG4gKlxuICogQHBhcmFtICRkaXJlY3Rpb25zXG4gKiAgTGlzdCBvZiBpbml0aWFsIGRpcmVjdGlvbnNcbiAqIEBleGFtcGxlXG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKHRvcCk7XG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKGxlZnQsIGJvdHRvbSk7XG4gKi9cbi8qKlxuICogUHNldWRvIGVsZW1lbnQgYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0gJGRpc3BsYXlcbiAqICBUaGUgZGlzcGxheSB2YWx1ZSAoYmxvY2svaW5saW5lL2V0YylcbiAqIEBwYXJhbSAkcG9zaXRpb25cbiAqICBUaGUgcG9zaXRpb24gc3R5bGUgKGFic29sdXRlL3N0YXRpYy9ldGMpXG4gKiBAcGFyYW0gJGNvbnRlbnRcbiAqICBUaGUgY29udGVudCB2YWx1ZVxuICovXG4vKipcbiAqIENvbnRyb2wgdGhlIHJhdGlvIGZvciByZXNwb25zaXZlIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtICR4XG4gKiAgVGhlIHggcmF0aW9cbiAqIEBwYXJhbSAkeVxuICogIFRoZSB5IHJhdGlvXG4gKiBAcGFyYW0gJHBzZXVkb1xuICogIERldGVybWluZSBpZiBhIHBzZXVkbyBlbGVtZW50IHNob3VsZCBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIHJhdGlvLiBEZWZhdWx0OiB0cnVlXG4gKiBAcGFyYW0gJGltYWdlXG4gKiAgVGhlIGltYWdlIHNvdXJjZS4gRGVmYXVsdDogbnVsbFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSByZXNwb25zaXZlLXJhdGlvKDMsIDQpO1xuICogIEBpbmNsdWRlIHJlc3BvbnNpdmUtcmF0aW8oMjAsIDksIHRydWUsIHVybCgnL2ltYWdlcy9sYW5kaW5nLWhlcm8uanBnJykpO1xuICovXG4vKipcbiAqIEZpbGwgdGhlIHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtICRtYXJnaW5cbiAqICBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIHBhcmVudC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudDtcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudCgxZW0pO1xuICovXG4vKipcbiAqIE1ha2UgY29udGVudCB2aXN1YWxseSBoaWRkZW5cbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHZpc3VhbGx5LWhpZGRlbjtcbiAqL1xuLyoqXG4gKiBUaGUgbGlzdCBvZiBwb3NzaWJsZSB6LWluZGV4IHZhbHVlc1xuICpcbiAqIChpdGVtcyBhdCB0aGUgdG9wIGhhdmUgYSBoaWdoZXIgdmFsdWUpXG4gKlxuICogQHNlY3Rpb24gQ29uZmlnXG4gKi9cbi8qKlxuICogUmV0cmlldmUgdGhlIGNvcnJlY3Qgei1pbmRleCB2YWx1ZSBieSBwYXNzaW5nIGluIHRoZSBpdGVtIG5hbWVcbiAqXG4gKiBAcGFyYW0gJG5hbWVcbiAqICBUaGUgbmFtZSBvZiB0aGUgaXRlbSB0aGF0IHNob3VsZCBoYXZlIGFuIGFzc29jaWF0ZWQgei1pbmRleFxuICogQGV4YW1wbGVcbiAqICB6KHRvb2x0aXApO1xuICogIHooYXR0YWNoZWQtcGFuZWwtb3ZlcmxheSk7XG4gKi9cbi8qKlxuICogQ3JlYXRlIGEgdHJpYW5nbGUgc2hhcGUgdXNpbmcgQ1NTXG4gKlxuICogQG1peGluIHRyaWFuZ2xlXG4gKiBAc2VjdGlvbiBTdHlsZSBIZWxwZXJzXG4gKiBAcGFyYW0gJGRpcmVjdGlvblxuICogIFRyaWFuZ2xlIGRpcmVjdGlvbiwgZWl0aGVyIGB0b3BgLCBgcmlnaHRgLCBgYm90dG9tYCBvciBgbGVmdGAuXG4gKiBAcGFyYW0gJGNvbG9yXG4gKiAgVHJpYW5nbGUgY29sb3IuIERlZmF1bHQ6IGN1cnJlbnRjb2xvclxuICogQHBhcmFtICRzaXplXG4gKiAgVHJpYW5nbGUgc2l6ZS4gRGVmYXVsdDogMWVtXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHRyaWFuZ2xlKHRvcCk7XG4gKiAgQGluY2x1ZGUgdHJpYW5nbGUobGVmdCwgcmVkLCAyZW0pO1xuICovXG4vKipcbiAqIFRoZSBiYXNlIHR5cGVmYWNlXG4gKi9cbi8qKlxuICogVGhlIG1vbm9zcGFjZWQgdHlwZWZhY2UgZmFtaWx5XG4gKi9cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBlZmFjZXNcbiAqL1xuLyoqXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHNpemVcbiAqL1xuLyoqXG4gKiBUaGUgYmFzZSB0eXBvZ3JhcGh5IHdlaWdodFxuICovXG4vKipcbiAqIFRoZSBhdmFpbGFibGUgdHlwb2dyYXBoeSBmb3JtYXRzXG4gKi9cbi8qKlxuICogVGhlIGF2YWlsYWJsZSB0eXBvZ3JhcGh5IGxldmVscyBmb3IgdGhlIGBkaXNwbGF5YCBmb3JtYXRcbiAqL1xuLyoqXG4gKiBUaGUgYXZhaWxhYmxlIHR5cG9ncmFwaHkgbGV2ZWxzIGZvciB0aGUgYGJvZHlgIGZvcm1hdFxuICovXG4vKipcbiAqIFJldHVybiB0eXBvZ3JhcGh5IHN0eWxlcyBiYXNlZCBvbiB0aGUgZm9ybWF0IGFuZCBsZXZlbFxuICpcbiAqIEBwYXJhbSAkZm9ybWF0XG4gKiAgT25lIG9mIHRoZSBhdmFpbGFibGUgZm9ybWF0cyBkZWZpbmVkIHdpdGhpbiAkdHlwb2dyYXBoeS1mb3JtYXRzLiBEZWZhdWx0OiAnYm9keScuXG4gKiBAcGFyYW0gJGxldmVsXG4gKiAgT25lIG9mIHRoZSBhY2NlcHRlZCBsZXZlbHMgZm9yIHRoZSBwYXNzZWQgaW4gZm9ybWF0LiBEZWZhdWx0OiAxXG4gKiBAcGFyYW0gJHR5cGVmYWNlXG4gKiAgT25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZWZhY2VzIGRlZmluZWQgaW4gJHR5cG9ncmFwaHktdHlwZWZhY2VzLiBEZWZhdWx0OiAncHJpbWFyeSdcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgdHlwb2dyYXBoeTtcbiAqICBAaW5jbHVkZSB0eXBvZ3JhcGh5KGRpc3BsYXksIDQpO1xuICovXG4vKipcbiAqIFRydW5jYXRlIG92ZXJmbG93aW5nIHRleHQgd2l0aCBhbiBlbGxpcHNpc1xuICpcbiAqIEBtaXhpbiB0eXBvZ3JhcGh5XG4gKiBAc2VjdGlvbiBTdHlsZSBIZWxwZXJzXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHRydW5jYXRlLW92ZXJmbG93O1xuICovXG4vKipcbiAqIENlbnRlciBjaGlsZCBjb250ZW50IHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseVxuICpcbiAqIEBleGFtcGxlXG4gKiAgQGluY2x1ZGUgY2VudGVyLWNvbnRlbnQ7XG4gKi9cbi8qKlxuICogUmV0dXJuIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24gb2YgZWFjaCBkaXJlY3Rpb24gaW4gYSBsaXN0XG4gKlxuICogQHBhcmFtICRkaXJlY3Rpb25zXG4gKiAgTGlzdCBvZiBpbml0aWFsIGRpcmVjdGlvbnNcbiAqIEBleGFtcGxlXG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKHRvcCk7XG4gKiAgb3Bwb3NpdGUtZGlyZWN0aW9uKGxlZnQsIGJvdHRvbSk7XG4gKi9cbi8qKlxuICogUHNldWRvIGVsZW1lbnQgYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0gJGRpc3BsYXlcbiAqICBUaGUgZGlzcGxheSB2YWx1ZSAoYmxvY2svaW5saW5lL2V0YylcbiAqIEBwYXJhbSAkcG9zaXRpb25cbiAqICBUaGUgcG9zaXRpb24gc3R5bGUgKGFic29sdXRlL3N0YXRpYy9ldGMpXG4gKiBAcGFyYW0gJGNvbnRlbnRcbiAqICBUaGUgY29udGVudCB2YWx1ZVxuICovXG4vKipcbiAqIENvbnRyb2wgdGhlIHJhdGlvIGZvciByZXNwb25zaXZlIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtICR4XG4gKiAgVGhlIHggcmF0aW9cbiAqIEBwYXJhbSAkeVxuICogIFRoZSB5IHJhdGlvXG4gKiBAcGFyYW0gJHBzZXVkb1xuICogIERldGVybWluZSBpZiBhIHBzZXVkbyBlbGVtZW50IHNob3VsZCBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIHJhdGlvLiBEZWZhdWx0OiB0cnVlXG4gKiBAcGFyYW0gJGltYWdlXG4gKiAgVGhlIGltYWdlIHNvdXJjZS4gRGVmYXVsdDogbnVsbFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSByZXNwb25zaXZlLXJhdGlvKDMsIDQpO1xuICogIEBpbmNsdWRlIHJlc3BvbnNpdmUtcmF0aW8oMjAsIDksIHRydWUsIHVybCgnL2ltYWdlcy9sYW5kaW5nLWhlcm8uanBnJykpO1xuICovXG4vKipcbiAqIEZpbGwgdGhlIHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtICRtYXJnaW5cbiAqICBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIHBhcmVudC4gRGVmYXVsdDogMFxuICogQGV4YW1wbGVcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudDtcbiAqICBAaW5jbHVkZSBmaWxsLXBhcmVudCgxZW0pO1xuICovXG4vKipcbiAqIE1ha2UgY29udGVudCB2aXN1YWxseSBoaWRkZW5cbiAqXG4gKiBAZXhhbXBsZVxuICogIEBpbmNsdWRlIHZpc3VhbGx5LWhpZGRlbjtcbiAqL1xuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIHRvIGhpZGUgYW4gZWxlbWVudFxuICovXG4udS12aXN1YWxseS1oaWRkZW4ge1xuICBib3JkZXI6IDA7XG4gIGNsaXAtcGF0aDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDFweDtcbn1cblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBwb3NzaWJsZSB6LWluZGV4IHZhbHVlc1xuICpcbiAqIChpdGVtcyBhdCB0aGUgdG9wIGhhdmUgYSBoaWdoZXIgdmFsdWUpXG4gKlxuICogQHNlY3Rpb24gQ29uZmlnXG4gKi9cbi8qKlxuICogUmV0cmlldmUgdGhlIGNvcnJlY3Qgei1pbmRleCB2YWx1ZSBieSBwYXNzaW5nIGluIHRoZSBpdGVtIG5hbWVcbiAqXG4gKiBAcGFyYW0gJG5hbWVcbiAqICBUaGUgbmFtZSBvZiB0aGUgaXRlbSB0aGF0IHNob3VsZCBoYXZlIGFuIGFzc29jaWF0ZWQgei1pbmRleFxuICogQGV4YW1wbGVcbiAqICB6KHRvb2x0aXApO1xuICogIHooYXR0YWNoZWQtcGFuZWwtb3ZlcmxheSk7XG4gKi9cbi5vdXRlciB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MzhhO1xufVxuXG4ub3V0ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cbiIsIkBpbXBvcnQgJ35AdGVybWludXMvdWktc3R5bGVzL2hlbHBlcnMnO1xuXG4ub3V0ZXIge1xuICBAaW5jbHVkZSBlbGV2YXRpb24tZWxlbWVudChhcHAtYmFyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IocHJpbWFyeSk7XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6IGNvbG9yKHB1cmUpO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuXG5hIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG59XG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var NAV_ITEMS_MOCK = [{
      name: '1 Components',
      destination: '/components',
      alwaysHidden: false
    }, {
      name: '2 Nav',
      destination: '/components/navigation',
      alwaysHidden: false
    }, {
      name: '3 Buttons',
      destination: ['/components/button'],
      alwaysHidden: false
    }, {
      name: '4 Action',
      action: {
        type: 'Do:thing'
      },
      alwaysHidden: false
    }, {
      name: '5 Menus',
      destination: ['/components/menu'],
      alwaysHidden: false
    }, {
      name: '7 External',
      destination: 'https://google.com',
      alwaysHidden: true
    }, {
      name: '8 Hidden',
      action: {
        type: 'Do:another:thing'
      },
      alwaysHidden: true
    }];
    var NEW_NAV_ITEM = {
      name: '0 Foo',
      action: {
        type: 'my:action'
      },
      alwaysHidden: false
    };

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.currentUser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
          id: 1,
          email: 'max@roadwarrior.com',
          firstname: 'Max',
          lastname: 'Rockatansky',
          fullName: 'Max Rockatansky'
        });
        this.navigationItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(NAV_ITEMS_MOCK);
        this.myMessage = 'Hello, this message is 37 characters.';
      }
      /**
       * Trigger the action defined for the navigation item
       *
       * @param payload - The navigation item
       */


      _createClass(NavigationComponent, [{
        key: "triggerAction",
        value: function triggerAction(payload) {
          console.log('DEMO: triggerAction: ', payload);

          if (payload.event.metaKey) {
            // open the link in a new window
            console.log('DEMO: meta key was used');
          } else {
            // redirect in app
            console.log('DEMO: meta key was NOT used');
          }
        }
      }, {
        key: "updateNav",
        value: function updateNav() {
          var newNav = NAV_ITEMS_MOCK.slice(0);
          newNav.unshift(NEW_NAV_ITEM);
          this.navigationItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(newNav);
        }
      }]);

      return NavigationComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/navigation/navigation.module.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/components/navigation/navigation.module.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: NavigationModuleNgFactory */

  /***/
  function srcAppComponentsNavigationNavigationModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModuleNgFactory", function () {
      return NavigationModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _navigation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.module */
    "./src/app/components/navigation/navigation.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _navigation_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation.component.ngfactory */
    "./src/app/components/navigation/navigation.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./navigation-routing.module */
    "./src/app/components/navigation/navigation-routing.module.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @terminus/ui-navigation */
    "../../dist/libs/ui/navigation/fesm2015/terminus-ui-navigation.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _navigation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var NavigationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_navigation_module__WEBPACK_IMPORTED_MODULE_1__["NavigationModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _navigation_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NavigationComponentNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_6__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _navigation_routing_module__WEBPACK_IMPORTED_MODULE_18__["NavigationRoutingModule"], _navigation_routing_module__WEBPACK_IMPORTED_MODULE_18__["NavigationRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_23__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_23__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_24__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_24__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_27__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_28__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_28__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_29__["TsNavigationModule"], _terminus_ui_navigation__WEBPACK_IMPORTED_MODULE_29__["TsNavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_30__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_30__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _navigation_module__WEBPACK_IMPORTED_MODULE_1__["NavigationModule"], _navigation_module__WEBPACK_IMPORTED_MODULE_1__["NavigationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () {
        return [[{
          path: "",
          component: _navigation_component__WEBPACK_IMPORTED_MODULE_31__["NavigationComponent"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/navigation/navigation.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/navigation/navigation.module.ts ***!
    \************************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcAppComponentsNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
    });

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=navigation-navigation-module-ngfactory-es5.js.map