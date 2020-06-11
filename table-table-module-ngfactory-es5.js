function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js":
  /*!**************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/sort/fesm2015/terminus-ui-sort.js ***!
    \**************************************************************************************************/

  /*! exports provided: TS_SORT_HEADER_INTL_PROVIDER, TS_SORT_HEADER_INTL_PROVIDER_FACTORY, TsSortDirective, TsSortHeaderComponent, TsSortHeaderIntl, TsSortModule, tsSortAnimations */

  /***/
  function distLibsUiSortFesm2015TerminusUiSortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_SORT_HEADER_INTL_PROVIDER", function () {
      return TS_SORT_HEADER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return TS_SORT_HEADER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSortDirective", function () {
      return TsSortDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSortHeaderComponent", function () {
      return TsSortHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSortHeaderIntl", function () {
      return TsSortHeaderIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSortModule", function () {
      return TsSortModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tsSortAnimations", function () {
      return tsSortAnimations;
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


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/coercion */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
    /* harmony import */


    var _terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ngx-tools/type-guards */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-type-guards.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /**
     * To modify the labels and text displayed, create a new instance of TsSortHeaderIntl and
     * include it in a custom provider.
     */


    var TsSortHeaderIntl = function TsSortHeaderIntl() {
      _classCallCheck(this, TsSortHeaderIntl);

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

      this.sortButtonLabel = function (id) {
        return "Change sorting for ".concat(id);
      };
      /**
       * A label to describe the current sort (visible only to screenreaders)
       *
       * @param id
       * @param direction
       */


      this.sortDescriptionLabel = function (id, direction) {
        return "Sorted by ".concat(id, " ").concat(direction === 'asc' ? 'ascending' : 'descending');
      };
    };

    TsSortHeaderIntl = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], TsSortHeaderIntl);
    /**
     * Factory to return an instance of TsSortHeaderIntl
     *
     * @param parentIntl
     */

    var TS_SORT_HEADER_INTL_PROVIDER_FACTORY = function TS_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new TsSortHeaderIntl();
    };
    /**
     * TsSortHeaderIntl provider declaration
     */


    var TS_SORT_HEADER_INTL_PROVIDER = {
      // If there is already an TsSortHeaderIntl available, use that. Otherwise, provide a new one.
      provide: TsSortHeaderIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), TsSortHeaderIntl]],
      useFactory: TS_SORT_HEADER_INTL_PROVIDER_FACTORY
    };

    var getSortDuplicateSortableIdError = function getSortDuplicateSortableIdError(id) {
      return Error("Cannot have two TsSortables with the same id (".concat(id, ")."));
    };

    var getSortHeaderNotContainedWithinSortError = function getSortHeaderNotContainedWithinSortError() {
      return Error("TsSortHeader must be placed within a parent element with the TsSort directive.");
    };

    var getSortHeaderMissingIdError = function getSortHeaderMissingIdError() {
      return Error("TsSortHeader must be provided with a unique id.");
    };

    var getSortInvalidDirectionError = function getSortInvalidDirectionError(direction) {
      return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
    };
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


    var TsSortDirective = /*#__PURE__*/function () {
      function TsSortDirective() {
        _classCallCheck(this, TsSortDirective);

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


      _createClass(TsSortDirective, [{
        key: "ngOnChanges",

        /**
         * Trigger next on all changes
         */
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * Complete the observable on destroy
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * Register function to be used by the contained TsSortables. Adds the TsSortable to the
         * collection of TsSortables.
         *
         * @param sortable
         */

      }, {
        key: "register",
        value: function register(sortable) {
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

      }, {
        key: "deregister",
        value: function deregister(sortable) {
          this.sortables["delete"](sortable.id);
        }
        /**
         * Sets the active sort id and determines the new sort direction
         *
         * @param sortable
         */

      }, {
        key: "sort",
        value: function sort(sortable) {
          if (this.active === sortable.id) {
            this.direction = this.getNextSortDirection(sortable);
          } else {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
          }

          this.sortChange.next({
            active: this.active,
            direction: this.direction
          });
        }
        /**
         * Returns the next sort direction of the active sortable, checking for potential overrides
         *
         * @param sortable
         */

      }, {
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortable) {
          if (!sortable) {
            return '';
          } // Get the sort direction cycle with the potential sortable overrides.


          var disableClearDoesntExist = Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__["isNull"])(sortable.disableClear) || Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(sortable.disableClear);
          var disableClear = disableClearDoesntExist ? this.disableClear : sortable.disableClear;
          var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

          var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

          if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
          }

          return sortDirectionCycle[nextDirectionIndex];
        }
      }, {
        key: "direction",
        set: function set(direction) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
          }

          this._direction = direction;
        },
        get: function get() {
          return this._direction;
        }
      }]);

      return TsSortDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortActive'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsSortDirective.prototype, "active", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortStart'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsSortDirective.prototype, "start", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortDirection'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsSortDirective.prototype, "direction", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('tsSortDisableClear'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsSortDirective.prototype, "disableClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('tsSortChange'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsSortDirective.prototype, "sortChange", void 0);
    TsSortDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
      selector: '[tsSort]',
      exportAs: 'tsSort',
      // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled: tsSortDisabled']
    })], TsSortDirective);
    /**
     * Returns the sort direction cycle to use given the provided parameters of order and clear
     *
     * @param start
     * @param disableClear
     */

    function getSortDirectionCycle(start, disableClear) {
      var sortOrder = ['asc', 'desc'];

      if (start === 'desc') {
        sortOrder.reverse();
      }

      if (!disableClear) {
        sortOrder.push('');
      }

      return sortOrder;
    }

    var SORT_ANIMATION_TRANSITION = "".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["AnimationDurations"].ENTERING, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["AnimationCurves"].STANDARD_CURVE);
    /** Animations used by TsSort. */

    var tsSortAnimations = {
      /**
       * Animation that moves the sort indicator
       */
      indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateY(0px)'
      })), // 10px is the height of the sort indicator, minus the width of the pointers
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateY(10px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc <=> desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the left pointer of the indicator based on the sorting direction
       */
      leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc <=> desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the right pointer of the indicator based on the sorting direction
       */
      rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc <=> desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that moves the indicator in and out of view when sorting is enabled/disabled
       */
      indicatorToggle: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicatorToggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateY(25%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none',
        opacity: 1
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('asc => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none',
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateY(-25%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none',
        opacity: 1
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('desc => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none',
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translateY(25%)',
        opacity: 0
      })])))])
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

    var TsSortHeaderComponent = /*#__PURE__*/function () {
      function TsSortHeaderComponent(_intl, changeDetectorRef, _sort, _cdkColumnDef) {
        _classCallCheck(this, TsSortHeaderComponent);

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


      _createClass(TsSortHeaderComponent, [{
        key: "ngOnInit",

        /**
         * Default to cdk column name
         */
        value: function ngOnInit() {
          var _this = this;

          // Mark directive for change detection after any of these changes
          // eslint-disable-next-line deprecation/deprecation
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_8__["untilComponentDestroyed"])(this)).subscribe(function () {
            return _this.changeDetectorRef.markForCheck();
          });

          if (!this.id && this._cdkColumnDef) {
            this.id = this._cdkColumnDef.name;
          }

          this._sort.register(this);
        }
        /**
         * Deregister sort and unsubscribe from observables
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._sort.deregister(this);
        }
        /**
         * Handles click events on the header
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (!this._isDisabled()) {
            this._sort.sort(this);
          }
        }
        /**
         * Whether this TsSortHeader is currently sorted in either ascending or descending order
         */

      }, {
        key: "_isSorted",
        value: function _isSorted() {
          return this._sort.active === this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /**
         * Whether this TsSortHeader is disabled
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled() {
          return this._sort.disabled || this.disabled;
        }
      }, {
        key: "disableClear",
        set: function set(value) {
          /* istanbul ignore if */
          if (!Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_7__["isBoolean"])(value) && value && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            // eslint-disable-next-line no-console
            console.warn("TsSortHeaderComponent: \"disableClear\" value is not a boolean. " + "String values of 'true' and 'false' will no longer be coerced to a true boolean with the next release.");
          }

          this._disableClear = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
        },
        get: function get() {
          return this._disableClear;
        }
      }]);

      return TsSortHeaderComponent;
    }();

    TsSortHeaderComponent.ctorParameters = function () {
      return [{
        type: TsSortHeaderIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: TsSortDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ts-sort-header'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsSortHeaderComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsSortHeaderComponent.prototype, "arrowPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsSortHeaderComponent.prototype, "start", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], TsSortHeaderComponent.prototype, "disableClear", null);
    TsSortHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      // NOTE: This component needs to be added to another component so we need a non-element selector
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: '[ts-sort-header]',
      // tslint:enable: component-selector
      template: "<div\n  class=\"ts-sort-header-container\"\n  [class.ts-sort-header-position-before]=\"arrowPosition == 'before'\"\n>\n  <button\n    class=\"ts-sort-header-button\"\n    type=\"button\"\n    [attr.aria-label]=\"_intl.sortButtonLabel(id)\"\n    [attr.disabled]=\"_isDisabled() || null\"\n    (click)=\"_handleClick()\"\n  >\n    <ng-content></ng-content>\n\n    <ts-icon\n      class=\"ts-sort-header-container__icon\"\n      [class.ts-sort-header-container__icon--hidden]=\"_isSorted()\"\n    >swap_vert</ts-icon>\n\n    <div\n      class=\"ts-sort-header-arrow\"\n      *ngIf=\"_isSorted()\"\n      [@indicatorToggle]=\"_sort.direction\"\n    >\n      <div class=\"ts-sort-header-stem\"></div>\n\n      <div class=\"ts-sort-header-indicator\" [@indicator]=\"_sort.direction\" >\n        <div class=\"ts-sort-header-pointer-left\" [@leftPointer]=\"_sort.direction\"></div>\n        <div class=\"ts-sort-header-pointer-right\" [@rightPointer]=\"_sort.direction\"></div>\n        <div class=\"ts-sort-header-pointer-middle\"></div>\n      </div>\n    </div>\n  </button>\n</div>\n\n<span class=\"cdk-visually-hidden\" *ngIf=\"_isSorted()\">\n  &nbsp;{{ _intl.sortDescriptionLabel(id, _sort.direction) }}\n</span>\n",
      host: {
        'class': 'ts-sortable',
        '[class.ts-sort-header-sorted]': '_isSorted()',
        '[class.ts-sort-header-disabled]': '_isDisabled()'
      },
      preserveWhitespaces: false,
      // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['disabled'],
      animations: [tsSortAnimations.indicator, tsSortAnimations.leftPointer, tsSortAnimations.rightPointer, tsSortAnimations.indicatorToggle],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsSortHeader',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-sort-header-container{align-items:center;display:flex;position:relative}.ts-sort-header-disabled .ts-sort-header-container{cursor:default}.ts-sort-header-container__icon{opacity:0;position:absolute;right:0;top:50%;transform:translate(22%,-42%);transition:opacity .2s ease-out .2s}.ts-sort-header-container__icon--hidden{opacity:0;transition:opacity .1s ease-out .1s}.ts-sort-header-position-before{flex-direction:row-reverse}.ts-sort-header-button{align-items:center;background:0 0;border:none;color:currentColor;cursor:pointer;display:block;font:inherit;outline:0;overflow:hidden;padding:0 1.4em 0 0;position:relative;text-overflow:ellipsis}.ts-sort-header-button:focus .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden),.ts-sort-header-button:hover .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden){opacity:1}.ts-sort-header-arrow{display:flex;height:12px;margin:-2px 0 0 6px;min-width:12px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:12px}.ts-sort-header-position-before .ts-sort-header-arrow{margin:0 6px 0 0}.ts-sort-header-stem{align-items:center;background:currentColor;display:flex;height:10px;margin:auto;width:2px}.ts-sort-header-indicator{align-items:center;display:flex;height:2px;left:0;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:100%}.ts-sort-header-pointer-middle{background:currentColor;height:2px;margin:auto;transform:rotate(45deg);width:2px}.ts-sort-header-pointer-left,.ts-sort-header-pointer-right{background:currentColor;height:2px;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:6px}.ts-sort-header-pointer-left{left:0;transform-origin:right}.ts-sort-header-pointer-right{right:0;transform-origin:left}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TsSortHeaderIntl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], TsSortDirective, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkColumnDef"]])], TsSortHeaderComponent);
    /**
     * Much of this was lifted directly from Angular Material. I highly recommend checking out their
     * source code: https://github.com/angular/material2/tree/master/src/lib/sort
     */

    var TsSortModule = function TsSortModule() {
      _classCallCheck(this, TsSortModule);
    };

    TsSortModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_3__["TsIconModule"]],
      providers: [TS_SORT_HEADER_INTL_PROVIDER],
      declarations: [TsSortDirective, TsSortHeaderComponent],
      exports: [TsSortDirective, TsSortHeaderComponent]
    })], TsSortModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-sort.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/sort/terminus-ui-sort.ngfactory.js":
  /*!***************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/sort/terminus-ui-sort.ngfactory.js ***!
    \***************************************************************************************************/

  /*! exports provided: TsSortModuleNgFactory, RenderType_TsSortHeaderComponent, View_TsSortHeaderComponent_0, View_TsSortHeaderComponent_Host_0, TsSortHeaderComponentNgFactory */

  /***/
  function distLibsUiSortTerminusUiSortNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSortModuleNgFactory", function () {
      return TsSortModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsSortHeaderComponent", function () {
      return RenderType_TsSortHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsSortHeaderComponent_0", function () {
      return View_TsSortHeaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsSortHeaderComponent_Host_0", function () {
      return View_TsSortHeaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSortHeaderComponentNgFactory", function () {
      return TsSortHeaderComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-sort */
    "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../icon/terminus-ui-icon.ngfactory */
    "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsSortModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderIntl"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TS_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortModule"], [])]);
    });

    var styles_TsSortHeaderComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-sort-header-container{align-items:center;display:flex;position:relative}.ts-sort-header-disabled .ts-sort-header-container{cursor:default}.ts-sort-header-container__icon{opacity:0;position:absolute;right:0;top:50%;transform:translate(22%,-42%);transition:opacity .2s ease-out .2s}.ts-sort-header-container__icon--hidden{opacity:0;transition:opacity .1s ease-out .1s}.ts-sort-header-position-before{flex-direction:row-reverse}.ts-sort-header-button{align-items:center;background:0 0;border:none;color:currentColor;cursor:pointer;display:block;font:inherit;outline:0;overflow:hidden;padding:0 1.4em 0 0;position:relative;text-overflow:ellipsis}.ts-sort-header-button:focus .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden),.ts-sort-header-button:hover .ts-sort-header-container__icon:not(.ts-sort-header-container__icon--hidden){opacity:1}.ts-sort-header-arrow{display:flex;height:12px;margin:-2px 0 0 6px;min-width:12px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:12px}.ts-sort-header-position-before .ts-sort-header-arrow{margin:0 6px 0 0}.ts-sort-header-stem{align-items:center;background:currentColor;display:flex;height:10px;margin:auto;width:2px}.ts-sort-header-indicator{align-items:center;display:flex;height:2px;left:0;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:100%}.ts-sort-header-pointer-middle{background:currentColor;height:2px;margin:auto;transform:rotate(45deg);width:2px}.ts-sort-header-pointer-left,.ts-sort-header-pointer-right{background:currentColor;height:2px;position:absolute;top:0;transition:225ms cubic-bezier(.4,0,.2,1);width:6px}.ts-sort-header-pointer-left{left:0;transform-origin:right}.ts-sort-header-pointer-right{right:0;transform-origin:left}"];

    var RenderType_TsSortHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsSortHeaderComponent,
      data: {
        "animation": [{
          type: 7,
          name: "indicator",
          definitions: [{
            type: 0,
            name: "asc",
            styles: {
              type: 6,
              styles: {
                transform: "translateY(0px)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "desc",
            styles: {
              type: 6,
              styles: {
                transform: "translateY(10px)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "asc <=> desc",
            animation: {
              type: 4,
              styles: null,
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }],
          options: {}
        }, {
          type: 7,
          name: "leftPointer",
          definitions: [{
            type: 0,
            name: "asc",
            styles: {
              type: 6,
              styles: {
                transform: "rotate(-45deg)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "desc",
            styles: {
              type: 6,
              styles: {
                transform: "rotate(45deg)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "asc <=> desc",
            animation: {
              type: 4,
              styles: null,
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }],
          options: {}
        }, {
          type: 7,
          name: "rightPointer",
          definitions: [{
            type: 0,
            name: "asc",
            styles: {
              type: 6,
              styles: {
                transform: "rotate(45deg)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "desc",
            styles: {
              type: 6,
              styles: {
                transform: "rotate(-45deg)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "asc <=> desc",
            animation: {
              type: 4,
              styles: null,
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }],
          options: {}
        }, {
          type: 7,
          name: "indicatorToggle",
          definitions: [{
            type: 1,
            expr: "void => asc",
            animation: {
              type: 4,
              styles: {
                type: 5,
                steps: [{
                  type: 6,
                  styles: {
                    transform: "translateY(25%)",
                    opacity: 0
                  },
                  offset: null
                }, {
                  type: 6,
                  styles: {
                    transform: "none",
                    opacity: 1
                  },
                  offset: null
                }]
              },
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }, {
            type: 1,
            expr: "asc => void",
            animation: {
              type: 4,
              styles: {
                type: 5,
                steps: [{
                  type: 6,
                  styles: {
                    transform: "none",
                    opacity: 1
                  },
                  offset: null
                }, {
                  type: 6,
                  styles: {
                    transform: "translateY(-25%)",
                    opacity: 0
                  },
                  offset: null
                }]
              },
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }, {
            type: 1,
            expr: "void => desc",
            animation: {
              type: 4,
              styles: {
                type: 5,
                steps: [{
                  type: 6,
                  styles: {
                    transform: "translateY(-25%)",
                    opacity: 0
                  },
                  offset: null
                }, {
                  type: 6,
                  styles: {
                    transform: "none",
                    opacity: 1
                  },
                  offset: null
                }]
              },
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }, {
            type: 1,
            expr: "desc => void",
            animation: {
              type: 4,
              styles: {
                type: 5,
                steps: [{
                  type: 6,
                  styles: {
                    transform: "none",
                    opacity: 1
                  },
                  offset: null
                }, {
                  type: 6,
                  styles: {
                    transform: "translateY(25%)",
                    opacity: 0
                  },
                  offset: null
                }]
              },
              timings: "225ms cubic-bezier(0.4,0.0,0.2,1)"
            },
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_TsSortHeaderComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["class", "ts-sort-header-arrow"]], [[24, "@indicatorToggle", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "div", [["class", "ts-sort-header-stem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["class", "ts-sort-header-indicator"]], [[24, "@indicator", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 0, "div", [["class", "ts-sort-header-pointer-left"]], [[24, "@leftPointer", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "div", [["class", "ts-sort-header-pointer-right"]], [[24, "@rightPointer", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "div", [["class", "ts-sort-header-pointer-middle"]], null, null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._sort.direction;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co._sort.direction;

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = _co._sort.direction;

        _ck(_v, 3, 0, currVal_2);

        var currVal_3 = _co._sort.direction;

        _ck(_v, 4, 0, currVal_3);
      });
    }

    function View_TsSortHeaderComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "cdk-visually-hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" \xA0", "\n"]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co._intl.sortDescriptionLabel(_co.id, _co._sort.direction);

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TsSortHeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "ts-sort-header-container"]], [[2, "ts-sort-header-position-before", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "button", [["class", "ts-sort-header-button"], ["type", "button"]], [[1, "aria-label", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co._handleClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "ts-icon", [["class", "ts-sort-header-container__icon ts-icon"]], [[2, "ts-sort-header-container__icon--hidden", null], [2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_7__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["swap_vert"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsSortHeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsSortHeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_9 = _co._isSorted();

        _ck(_v, 7, 0, currVal_9);

        var currVal_10 = _co._isSorted();

        _ck(_v, 9, 0, currVal_10);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.arrowPosition == "before";

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co._intl.sortButtonLabel(_co.id);

        var currVal_2 = _co._isDisabled() || null;

        _ck(_v, 1, 0, currVal_1, currVal_2);

        var currVal_3 = _co._isSorted();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).theme === "primary";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).theme === "accent";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).theme === "warn";

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).background;

        _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
      });
    }

    function View_TsSortHeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "ts-sortable"], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null]], null, null, View_TsSortHeaderComponent_0, RenderType_TsSortHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkColumnDef"]]], {
        id: [0, "id"]
      }, null)], function (_ck, _v) {
        var currVal_2 = "";

        _ck(_v, 1, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isSorted();

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isDisabled();

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    var TsSortHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("[ts-sort-header]", _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_1__["TsSortHeaderComponent"], View_TsSortHeaderComponent_Host_0, {
      disabled: "disabled",
      id: "ts-sort-header",
      arrowPosition: "arrowPosition",
      start: "start",
      disableClear: "disableClear"
    }, {}, ["*"]);
    /***/

  },

  /***/
  "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js":
  /*!****************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/table/fesm2015/terminus-ui-table.js ***!
    \****************************************************************************************************/

  /*! exports provided: TS_TABLE_MIN_COLUMN_WIDTH, TsCellDefDirective, TsCellDirective, TsColumnDefDirective, TsFooterCellDefDirective, TsFooterCellDirective, TsFooterRowComponent, TsFooterRowDefDirective, TsHeaderCellDefDirective, TsHeaderCellDirective, TsHeaderCellResizeEvent, TsHeaderRowComponent, TsHeaderRowDefDirective, TsRowComponent, TsRowDefDirective, TsTableColumnsChangeEvent, TsTableComponent, TsTableDataSource, TsTableModule, setColumnAlignment, tsTableColumnAlignmentTypesArray */

  /***/
  function distLibsUiTableFesm2015TerminusUiTableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_TABLE_MIN_COLUMN_WIDTH", function () {
      return TS_TABLE_MIN_COLUMN_WIDTH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCellDefDirective", function () {
      return TsCellDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsCellDirective", function () {
      return TsCellDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsColumnDefDirective", function () {
      return TsColumnDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFooterCellDefDirective", function () {
      return TsFooterCellDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFooterCellDirective", function () {
      return TsFooterCellDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFooterRowComponent", function () {
      return TsFooterRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFooterRowDefDirective", function () {
      return TsFooterRowDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsHeaderCellDefDirective", function () {
      return TsHeaderCellDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsHeaderCellDirective", function () {
      return TsHeaderCellDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsHeaderCellResizeEvent", function () {
      return TsHeaderCellResizeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsHeaderRowComponent", function () {
      return TsHeaderRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsHeaderRowDefDirective", function () {
      return TsHeaderRowDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsRowComponent", function () {
      return TsRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsRowDefDirective", function () {
      return TsRowDefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTableColumnsChangeEvent", function () {
      return TsTableColumnsChangeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTableComponent", function () {
      return TsTableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTableDataSource", function () {
      return TsTableDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTableModule", function () {
      return TsTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setColumnAlignment", function () {
      return setColumnAlignment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tsTableColumnAlignmentTypesArray", function () {
      return tsTableColumnAlignmentTypesArray;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @terminus/ui-paginator */
    "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
    /* harmony import */


    var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-sort */
    "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /* harmony import */


    var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-utilities */
    "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");

    var TsColumnDefDirective_1;
    /**
     * An array of the allowed {@link TsTableColumnAlignment} for checking values
     */

    var tsTableColumnAlignmentTypesArray = ['left', 'center', 'right'];
    /**
     * Column definition for the {@link TsTableComponent}.
     *
     * Defines a set of cells available for a table column.
     */

    var TsColumnDefDirective = TsColumnDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W) {
      _inherits(TsColumnDefDirective, _angular_cdk_table__W);

      var _super = _createSuper(TsColumnDefDirective);

      function TsColumnDefDirective(elementRef) {
        var _this2;

        _classCallCheck(this, TsColumnDefDirective);

        _this2 = _super.call(this);
        _this2.elementRef = elementRef;
        /**
         * Define if the column should stick to the start
         */

        _this2.sticky = false;
        /**
         * Define if a column should stick to the end
         */

        _this2.stickyEnd = false;
        return _this2;
      }

      return TsColumnDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]);

    TsColumnDefDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('tsColumnDef'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsColumnDefDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsColumnDefDirective.prototype, "alignment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsColumnDefDirective.prototype, "sticky", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsColumnDefDirective.prototype, "stickyEnd", void 0);
    TsColumnDefDirective = TsColumnDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsColumnDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
        useExisting: TsColumnDefDirective_1
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: TsColumnDefDirective_1
      }]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], TsColumnDefDirective);
    var TsCellDefDirective_1, TsHeaderCellDefDirective_1, TsHeaderCellDirective_1, TsFooterCellDefDirective_1;
    /**
     * The minimum width for columns
     */

    var TS_TABLE_MIN_COLUMN_WIDTH = 70; // Unique ID for each instance

    var cellNextUniqueId = 0;
    var headerNextUniqueId = 0;
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
          throw new _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_10__["TsUILibraryError"]("TsCellDirective: \"".concat(column.alignment, "\" is not an allowed alignment.") + "See \"TsTableColumnAlignment\" type for available options.");
        }

        renderer.addClass(elementRef.nativeElement, "ts-cell--align-".concat(column.alignment));
      }
    }
    /**
     * Cell definition for the {@link TsTableComponent}.
     *
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var TsCellDefDirective = TsCellDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W2) {
      _inherits(TsCellDefDirective, _angular_cdk_table__W2);

      var _super2 = _createSuper(TsCellDefDirective);

      function TsCellDefDirective() {
        _classCallCheck(this, TsCellDefDirective);

        return _super2.apply(this, arguments);
      }

      return TsCellDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]);

    TsCellDefDirective = TsCellDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
        useExisting: TsCellDefDirective_1
      }]
    })], TsCellDefDirective);
    /**
     * Header cell definition for the {@link TsTableComponent}.
     *
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */

    var TsHeaderCellDefDirective = TsHeaderCellDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W3) {
      _inherits(TsHeaderCellDefDirective, _angular_cdk_table__W3);

      var _super3 = _createSuper(TsHeaderCellDefDirective);

      function TsHeaderCellDefDirective() {
        _classCallCheck(this, TsHeaderCellDefDirective);

        return _super3.apply(this, arguments);
      }

      return TsHeaderCellDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]);

    TsHeaderCellDefDirective = TsHeaderCellDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsHeaderCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
        useExisting: TsHeaderCellDefDirective_1
      }]
    })], TsHeaderCellDefDirective);
    /**
     * Define the event object for header cell resize events
     */

    var TsHeaderCellResizeEvent = function TsHeaderCellResizeEvent( // The header cell instance that originated the event
    instance, // The new width
    width) {
      _classCallCheck(this, TsHeaderCellResizeEvent);

      this.instance = instance;
      this.width = width;
    };
    /**
     * Header cell template container that adds the right classes and role.
     */


    var TsHeaderCellDirective = TsHeaderCellDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W4) {
      _inherits(TsHeaderCellDirective, _angular_cdk_table__W4);

      var _super4 = _createSuper(TsHeaderCellDirective);

      function TsHeaderCellDirective(columnDef, elementRef, renderer, documentService, ngZone) {
        var _this3;

        _classCallCheck(this, TsHeaderCellDirective);

        _this3 = _super4.call(this, columnDef, elementRef);
        _this3.columnDef = columnDef;
        _this3.elementRef = elementRef;
        _this3.renderer = renderer;
        _this3.documentService = documentService;
        _this3.ngZone = ngZone;
        /**
         * Stream used inside takeUntil pipes
         */

        _this3.killStream$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Define the class for the resizable element
         */

        _this3.resizerClass = 'ts-header-cell__resizer';
        /**
         * Store the starting offset when a resize event begins
         */

        _this3.startOffsetX = 0;
        /**
         * Store the starting width of a cell before resizing
         */

        _this3.startWidth = 0;
        /**
         * Define the default component ID
         */

        _this3.uid = "ts-table-header-cell-".concat(headerNextUniqueId++);
        /**
         * Store the current cell width
         */

        _this3.width = 'auto';
        /**
         * Event emitted when the cell is resized
         */

        _this3.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        return _this3;
      }
      /**
       * Return the current set width
       */


      _createClass(TsHeaderCellDirective, [{
        key: "ngOnInit",

        /**
         * Initial setup
         */
        value: function ngOnInit() {
          this.column = this.columnDef;
          this.elementRef.nativeElement.classList.add("ts-column-".concat(this.column.cssClassFriendlyName)); // eslint-disable-next-line no-underscore-dangle

          if (this.column._stickyEnd) {
            this.elementRef.nativeElement.classList.add("ts-table__column--sticky-end");
          }

          if (this.column.sticky) {
            this.elementRef.nativeElement.classList.add("ts-table__column--sticky");
          }

          setColumnAlignment(this.column, this.renderer, this.elementRef);
        }
        /**
         * Remove all event listeners when destroyed
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.killStream$.complete();
        }
        /**
         * Inject the resize 'grabber' element.
         *
         * Called by {@link TsTableComponent}
         */

      }, {
        key: "injectResizeElement",
        value: function injectResizeElement() {
          var _this4 = this;

          // If the element has been injected before, remove it
          if (this.resizeElement) {
            this.renderer.removeChild(this.elementRef.nativeElement, this.resizeElement);
          }

          var resizeElement = this.renderer.createElement('span');
          resizeElement.classList.add(this.resizerClass);
          resizeElement.classList.add("".concat(this.resizerClass, "--").concat(this.columnDef.cssClassFriendlyName));
          resizeElement.title = 'Drag to resize column.';
          this.renderer.appendChild(this.elementRef.nativeElement, resizeElement);
          this.ngZone.runOutsideAngular(function () {
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'mousedown').pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(_this4)).subscribe(function (e) {
              return _this4.onResizeColumn(e);
            }); // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation

            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'click').pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(_this4)).subscribe(function (e) {
              return e.stopPropagation();
            }); // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation

            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'mouseenter').pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(_this4)).subscribe(function () {
              return _this4.syncHoverClass(true);
            }); // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation

            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(resizeElement, 'mouseleave').pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(_this4)).subscribe(function () {
              return _this4.syncHoverClass(false);
            });
          });
        }
        /**
         * Return the new width if above the minimum width
         *
         * @param start - The starting width
         * @param difference - The amount moved
         * @returns The final column width
         */

      }, {
        key: "onResizeColumn",

        /**
         * Save initial width and offset, bind to more events
         *
         * @param event - The mouse event
         */
        value: function onResizeColumn(event) {
          var _this5 = this;

          this.startOffsetX = event.clientX;
          this.startWidth = this.cellWidth; // TODO: Refactor deprecation
          // eslint-disable-next-line deprecation/deprecation

          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.documentService.document, 'mousemove').pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.killStream$)).subscribe(function (e) {
            var diff = e.clientX - _this5.startOffsetX;
            var newWidth = TsHeaderCellDirective_1.determineWidth(_this5.startWidth, diff); // istanbul ignore else

            if (newWidth) {
              _this5.setColumnWidth(newWidth);
            }
          }); // TODO: Refactor deprecation
          // eslint-disable-next-line deprecation/deprecation

          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.documentService.document, 'mouseup').pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            _this5.startOffsetX = 0;
            _this5.startWidth = 0;

            _this5.killStream$.next(void 0);

            _this5.resized.emit(new TsHeaderCellResizeEvent(_this5, _this5.elementRef.nativeElement.offsetWidth));
          });
        }
        /**
         * Set the column width style and save the width
         *
         * @param width - The width to set
         */

      }, {
        key: "setColumnWidth",
        value: function setColumnWidth(width) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'width', "".concat(width, "px"));
          this.width = "".concat(width, "px");
        }
        /**
         * Sync the hovered class
         *
         * @param isHovered - Whether the resize element is currently hovered
         */

      }, {
        key: "syncHoverClass",
        value: function syncHoverClass(isHovered) {
          isHovered ? this.renderer.addClass(this.elementRef.nativeElement, 'ts-cell--resizing') : this.renderer.removeClass(this.elementRef.nativeElement, 'ts-cell--resizing');
        }
      }, {
        key: "cellWidth",
        get: function get() {
          return parseInt(this.width, 0);
        }
        /**
         * Return a reference to the resize element
         */

      }, {
        key: "resizeElement",
        get: function get() {
          return this.elementRef.nativeElement.querySelector(".".concat(this.resizerClass));
        }
      }], [{
        key: "determineWidth",
        value: function determineWidth(start, difference) {
          var total = start + difference;
          return total >= TS_TABLE_MIN_COLUMN_WIDTH ? total : TS_TABLE_MIN_COLUMN_WIDTH;
        }
      }]);

      return TsHeaderCellDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]);

    TsHeaderCellDirective.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsDocumentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsHeaderCellDirective.prototype, "resized", void 0);
    TsHeaderCellDirective = TsHeaderCellDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: 'ts-header-cell, th[ts-header-cell]',
      host: {
        'class': 'ts-header-cell',
        'role': 'columnheader',
        '[id]': 'uid'
      },
      exportAs: 'tsHeaderCell'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], TsHeaderCellDirective);
    /**
     * Cell template container that adds the right classes and role.
     */

    var TsCellDirective = /*#__PURE__*/function (_angular_cdk_table__W5) {
      _inherits(TsCellDirective, _angular_cdk_table__W5);

      var _super5 = _createSuper(TsCellDirective);

      function TsCellDirective(elementRef, columnDef, renderer) {
        var _this6;

        _classCallCheck(this, TsCellDirective);

        _this6 = _super5.call(this, columnDef, elementRef);
        _this6.elementRef = elementRef;
        _this6.columnDef = columnDef;
        _this6.renderer = renderer;
        /**
         * Define the default component ID
         */

        _this6.uid = "ts-table-cell-".concat(cellNextUniqueId++);
        return _this6;
      }
      /**
       * Initial setup
       */


      _createClass(TsCellDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // HACK: Changing the type in the constructor from `CdkColumnDef` to `TsColumnDefDirective` doesn't seem to play well with the CDK.
          // Coercing the type here is a hack, but allows us to reference properties that do not exist on the underlying `CdkColumnDef`.
          this.column = this.columnDef; // Set a custom class for each column

          this.elementRef.nativeElement.classList.add("ts-column-".concat(this.column.cssClassFriendlyName));
          setColumnAlignment(this.column, this.renderer, this.elementRef); // eslint-disable-next-line no-underscore-dangle

          if (this.column._stickyEnd) {
            this.elementRef.nativeElement.classList.add("ts-table__column--sticky-end");
          }

          if (this.column.sticky) {
            this.elementRef.nativeElement.classList.add("ts-table__column--sticky");
          }
        }
      }]);

      return TsCellDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]);

    TsCellDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }];
    };

    TsCellDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: 'ts-cell, td[ts-cell]',
      host: {
        "class": 'ts-cell',
        role: 'gridcell'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])], TsCellDirective);
    /**
     * Footer cell definition for the mat-table.
     *
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */

    var TsFooterCellDefDirective = TsFooterCellDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W6) {
      _inherits(TsFooterCellDefDirective, _angular_cdk_table__W6);

      var _super6 = _createSuper(TsFooterCellDefDirective);

      function TsFooterCellDefDirective() {
        _classCallCheck(this, TsFooterCellDefDirective);

        return _super6.apply(this, arguments);
      }

      return TsFooterCellDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]);

    TsFooterCellDefDirective = TsFooterCellDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsFooterCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
        useExisting: TsFooterCellDefDirective_1
      }]
    })], TsFooterCellDefDirective);
    /**
     * Footer cell template container that adds the right classes and role.
     */

    var TsFooterCellDirective = /*#__PURE__*/function (_angular_cdk_table__W7) {
      _inherits(TsFooterCellDirective, _angular_cdk_table__W7);

      var _super7 = _createSuper(TsFooterCellDirective);

      function TsFooterCellDirective(columnDef, elementRef, renderer) {
        var _this7;

        _classCallCheck(this, TsFooterCellDirective);

        _this7 = _super7.call(this, columnDef, elementRef);
        _this7.columnDef = columnDef;
        _this7.elementRef = elementRef;
        _this7.renderer = renderer;
        return _this7;
      }
      /**
       * Initial setup
       */


      _createClass(TsFooterCellDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // HACK: Changing the type in the constructor from `CdkColumnDef` to `TsColumnDefDirective` doesn't seem to play well with the CDK.
          // Coercing the type here is a hack, but allows us to reference properties that do not exist on the underlying `CdkColumnDef`.
          this.column = this.columnDef; // Set a custom class for each column

          this.elementRef.nativeElement.classList.add("ts-column-".concat(this.column.cssClassFriendlyName));
          setColumnAlignment(this.column, this.renderer, this.elementRef); // eslint-disable-next-line no-underscore-dangle

          if (this.column._stickyEnd) {
            this.elementRef.nativeElement.classList.add("ts-table__column--sticky-end");
          }

          if (this.column.sticky) {
            this.elementRef.nativeElement.classList.add("ts-table__column--sticky");
          }
        }
      }]);

      return TsFooterCellDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]);

    TsFooterCellDirective.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }];
    };

    TsFooterCellDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: 'ts-footer-cell, td[ts-footer-cell]',
      host: {
        "class": 'ts-footer-cell',
        role: 'gridcell'
      }
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])], TsFooterCellDirective);
    var TsHeaderRowDefDirective_1, TsFooterRowDefDirective_1, TsFooterRowComponent_1, TsRowDefDirective_1;
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */

    var TsHeaderRowComponent = /*#__PURE__*/function (_angular_cdk_table__W8) {
      _inherits(TsHeaderRowComponent, _angular_cdk_table__W8);

      var _super8 = _createSuper(TsHeaderRowComponent);

      function TsHeaderRowComponent(elementRef) {
        var _this8;

        _classCallCheck(this, TsHeaderRowComponent);

        _this8 = _super8.call(this);
        _this8.elementRef = elementRef;
        return _this8;
      }

      return TsHeaderRowComponent;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]);

    TsHeaderRowComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    TsHeaderRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ts-header-row, tr[ts-header-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
      host: {
        "class": 'ts-header-row',
        role: 'row'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      exportAs: 'tsHeaderRow',
      preserveWhitespaces: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], TsHeaderRowComponent);
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */

    var TsRowComponent = /*#__PURE__*/function (_angular_cdk_table__W9) {
      _inherits(TsRowComponent, _angular_cdk_table__W9);

      var _super9 = _createSuper(TsRowComponent);

      function TsRowComponent(elementRef) {
        var _this9;

        _classCallCheck(this, TsRowComponent);

        _this9 = _super9.call(this);
        _this9.elementRef = elementRef;
        return _this9;
      }

      return TsRowComponent;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]);

    TsRowComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    TsRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ts-row, tr[ts-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
      host: {
        "class": 'ts-row',
        role: 'row'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      exportAs: 'tsRow',
      preserveWhitespaces: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])], TsRowComponent);
    /**
     * Header row definition for the {@link TsTableComponent}.
     *
     * Captures the header row's template and other header properties such as the columns to display.
     */

    var TsHeaderRowDefDirective = TsHeaderRowDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W10) {
      _inherits(TsHeaderRowDefDirective, _angular_cdk_table__W10);

      var _super10 = _createSuper(TsHeaderRowDefDirective);

      function TsHeaderRowDefDirective() {
        _classCallCheck(this, TsHeaderRowDefDirective);

        return _super10.apply(this, arguments);
      }

      return TsHeaderRowDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]);

    TsHeaderRowDefDirective = TsHeaderRowDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsHeaderRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
        useExisting: TsHeaderRowDefDirective_1
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
        useExisting: TsHeaderRowComponent
      }],
      // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['columns: tsHeaderRowDef', 'sticky: tsHeaderRowDefSticky']
    })], TsHeaderRowDefDirective);
    /**
     * Footer row definition for the {@link TsTableComponent}.
     *
     * Captures the footer row's template and other footer properties such as the columns to display.
     */

    var TsFooterRowDefDirective = TsFooterRowDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W11) {
      _inherits(TsFooterRowDefDirective, _angular_cdk_table__W11);

      var _super11 = _createSuper(TsFooterRowDefDirective);

      function TsFooterRowDefDirective() {
        _classCallCheck(this, TsFooterRowDefDirective);

        return _super11.apply(this, arguments);
      }

      return TsFooterRowDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]);

    TsFooterRowDefDirective = TsFooterRowDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsFooterRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
        useExisting: TsFooterRowDefDirective_1
      }],
      // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['columns: tsFooterRowDef', 'sticky: tsFooterRowDefSticky']
    })], TsFooterRowDefDirective);
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */

    var TsFooterRowComponent = TsFooterRowComponent_1 = /*#__PURE__*/function (_angular_cdk_table__W12) {
      _inherits(TsFooterRowComponent, _angular_cdk_table__W12);

      var _super12 = _createSuper(TsFooterRowComponent);

      function TsFooterRowComponent() {
        _classCallCheck(this, TsFooterRowComponent);

        return _super12.apply(this, arguments);
      }

      return TsFooterRowComponent;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]);

    TsFooterRowComponent = TsFooterRowComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ts-footer-row, tr[ts-footer-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
      host: {
        "class": 'ts-footer-row',
        role: 'row'
      },
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
        useExisting: TsFooterRowComponent_1
      }],
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      exportAs: 'tsFooterRow'
    })], TsFooterRowComponent);
    /**
     * Data row definition for the {@link TsTableComponent}.
     *
     * Captures the header row's template and other row properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     */

    var TsRowDefDirective = TsRowDefDirective_1 = /*#__PURE__*/function (_angular_cdk_table__W13) {
      _inherits(TsRowDefDirective, _angular_cdk_table__W13);

      var _super13 = _createSuper(TsRowDefDirective);

      function TsRowDefDirective() {
        _classCallCheck(this, TsRowDefDirective);

        return _super13.apply(this, arguments);
      }

      return TsRowDefDirective;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]);

    TsRowDefDirective = TsRowDefDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({
      selector: '[tsRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
        useExisting: TsRowDefDirective_1
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
        useExisting: TsRowComponent
      }],
      // NOTE: @Inputs are defined here rather than using decorators since we are extending the @Inputs of the base class
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['columns: tsRowDefColumns', 'when: tsRowDefWhen']
    })], TsRowDefDirective);
    var TsTableComponent_1;
    /**
     * The default debounce delay for column sizing update calls
     */

    var COLUMN_DEBOUNCE_DELAY = 100;
    var VIEWPORT_DEBOUNCE = 500;
    /**
     * The payload for a columns change event
     */

    var TsTableColumnsChangeEvent = function TsTableColumnsChangeEvent( // The table instance that originated the event
    table, // The updated array of columns
    columns) {
      _classCallCheck(this, TsTableColumnsChangeEvent);

      this.table = table;
      this.columns = columns;
    }; // Unique ID for each instance


    var nextUniqueId = 0;
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

    var TsTableComponent = TsTableComponent_1 =
    /*#__PURE__*/
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (_angular_cdk_table__W14) {
      _inherits(TsTableComponent, _angular_cdk_table__W14);

      var _super14 = _createSuper(TsTableComponent);

      function TsTableComponent(platform, renderer, differs, changeDetectorRef, role, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document, dir, elementRef, ngZone, windowService, viewportRuler) {
        var _this10;

        _classCallCheck(this, TsTableComponent);

        _this10 = _super14.call(this, differs, changeDetectorRef, elementRef, role, dir, document, platform);
        _this10.platform = platform;
        _this10.renderer = renderer;
        _this10.differs = differs;
        _this10.changeDetectorRef = changeDetectorRef;
        _this10.document = document;
        _this10.dir = dir;
        _this10.elementRef = elementRef;
        _this10.ngZone = ngZone;
        _this10.windowService = windowService;
        _this10.viewportRuler = viewportRuler;
        /**
         * Combined stream of all of the columns resized events
         */

        _this10.columnResizeChanges$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(function () {
          if (_this10.headerCells && _this10.headerCells.length) {
            // TODO: Refactor deprecation
            // eslint-disable-next-line deprecation/deprecation
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"]).apply(void 0, _toConsumableArray(_this10.headerCells.map(function (cell) {
              return cell.resized;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('instance'), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(_assertThisInitialized(_this10)));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // In that case, return a stream that we'll replace with the real one once everything is in place.


          return _this10.ngZone.onStable.asObservable() // TODO: Refactor deprecation
          // eslint-disable-next-line deprecation/deprecation
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () {
            return _this10.columnResizeChanges$;
          }));
        });
        /**
         * Create a debounced function to update CDK sticky styles
         */

        _this10.debouncedStickyColumnUpdate = Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["debounce"])(_this10.updateStickyColumnStyles, COLUMN_DEBOUNCE_DELAY);
        /**
         * Store a mutable array of internal column definitions
         */

        _this10.columnsInternal = [];
        /**
         * Override the sticky CSS class set by the `CdkTable`
         */

        _this10.stickyCssClass = 'ts-table--sticky';
        /**
         * Define the default component ID
         */

        _this10.uid = "ts-table-".concat(nextUniqueId++);
        _this10._columns = [];
        /**
         * Define the density of the cells
         */

        _this10.density = 'comfy';
        _this10._id = _this10.uid;
        /**
         * Emit when a column is resized
         *
         * NOTE: This output is not debounce or throttled and may be called repeatedly
         */

        _this10.columnsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        return _this10;
      }
      /**
       * Return a simple array of column names
       *
       * Used by {@link TsHeaderRowDefDirective} and {@link TsRowDefDirective}.
       */


      _createClass(TsTableComponent, [{
        key: "ngOnInit",

        /**
         * Subscribe to viewport changes
         */
        value: function ngOnInit() {
          var _this11 = this;

          _get(_getPrototypeOf(TsTableComponent.prototype), "ngOnInit", this).call(this);

          this.viewportChange$ = this.viewportRuler.change(VIEWPORT_DEBOUNCE).pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this));
          this.viewportChange$.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(function () {
            _this11.windowService.nativeWindow.requestAnimationFrame(function () {
              _this11.updateInternalColumns(_this11.getFreshColumnsCopy());

              _this11.columnsChange.emit(new TsTableColumnsChangeEvent(_this11, _this11.columnsToSendToConsumer));
            });
          });
        }
        /**
         * Set up header cell changes subscription
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.subscribeToHeaderCellChanges();
        }
        /**
         * Subscribe to column resize events
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this12 = this;

          this.columnResizeChanges$.subscribe(function (v) {
            _this12.updateLastColumnWidth(); // Update the recorded width for the changed column


            var found = _this12.columnsInternal.find(function (column) {
              return column.name === v.columnDef.name;
            }); // istanbul ignore else


            if (found) {
              found.width = v.cellWidth;
            }

            _this12.columnsChange.emit(new TsTableColumnsChangeEvent(_this12, _this12.columnsToSendToConsumer));
          });
        }
        /**
         * NOTE: Must be present for `untilComponentDestroyed`
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
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

      }, {
        key: "addRemainingSpaceToLastColumn",
        value: function addRemainingSpaceToLastColumn(columns, remainingWidth) {
          var lastColumn = columns[columns.length - 1];
          lastColumn.width = lastColumn.width + remainingWidth;
          return columns;
        }
        /**
         * Return a fresh clone of the passed in array of columns
         *
         * @param columns - The array of columns to clone
         * @returns The array of fresh columns
         */

      }, {
        key: "getFreshColumnsCopy",
        value: function getFreshColumnsCopy() {
          var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
          return columns.slice().map(function (c) {
            return Object.assign({}, c);
          });
        }
        /**
         * Set the column widths for all columns passed in
         *
         * @param columns - The array of columns
         */

      }, {
        key: "setAllColumnsToDefinedWidths",
        value: function setAllColumnsToDefinedWidths(columns) {
          var _iterator = _createForOfIteratorHelper(columns),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var column = _step.value;
              this.setColumnWidthStyle(column.name, column.width, false);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
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

      }, {
        key: "setColumnWidthStyle",
        value: function setColumnWidthStyle(columnName, width) {
          var updateStickCells = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          // eslint-disable-next-line no-underscore-dangle
          var columnDirective = this.headerCells.find(function (cell) {
            return cell.columnDef._name === columnName;
          }); // istanbul ignore else

          if (columnDirective) {
            columnDirective.setColumnWidth(width); // istanbul ignore else

            if (updateStickCells) {
              this.updateStickyCellsIfNeeded();
            }
          }
        }
        /**
         * Set up subscription to header cell changes
         */

      }, {
        key: "subscribeToHeaderCellChanges",
        value: function subscribeToHeaderCellChanges() {
          var _this13 = this;

          if (this.headerCellSubscription) {
            this.headerCellSubscription.unsubscribe();
          }

          this.headerCellSubscription = this.headerCells.changes.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_9__["untilComponentDestroyed"])(this)).subscribe(function () {
            // 1. Set user widths
            _this13.setAllColumnsToDefinedWidths(_this13.getFreshColumnsCopy()); // 2. Add space to last column as needed


            _this13.updateLastColumnWidth(); // 3. Set all widths to internal columns


            _this13.setAllColumnsToDefinedWidths(_this13.getFreshColumnsCopy(_this13.columnsInternal)); // 4. Alert the consumer


            _this13.columnsChange.emit(new TsTableColumnsChangeEvent(_this13, _this13.columnsToSendToConsumer)); // Inject the header cell resize element in every cell except the last (last column is not resizable)


            _this13.headerCells.forEach(function (headerCellDirective, i) {
              if (i !== _this13.headerCells.length - 1) {
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

      }, {
        key: "updateInternalColumns",
        value: function updateInternalColumns(columns) {
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

      }, {
        key: "updateLastColumnWidth",
        value: function updateLastColumnWidth() {
          // 1. Determine last column width
          var columns = this.getFreshColumnsCopy();
          var lastIndex = columns.length - 1;
          var lastColumn = columns[lastIndex];
          var newWidth = lastColumn.width;

          if (!this.hasOverflowX) {
            newWidth = lastColumn.width + this.remainingTableSpace;
          } // 2. Set the width


          this.setColumnWidthStyle(lastColumn.name, newWidth); // 3. Update internal columns

          this.columnsInternal[lastIndex].width = newWidth;
        }
        /**
         * Trigger an update on sticky cells if they exist
         */

      }, {
        key: "updateStickyCellsIfNeeded",
        value: function updateStickyCellsIfNeeded() {
          // NOTE: To lessen the thrashing, only call the sticky column updater if there are defined sticky columns
          var stickyCells = this.headerCells.toArray().filter(function (c) {
            return c.columnDef.sticky || c.columnDef.stickyEnd;
          }); // istanbul ignore else

          if (stickyCells.length) {
            this.debouncedStickyColumnUpdate();
          }
        }
      }, {
        key: "columnNames",
        get: function get() {
          return this.columns.map(function (c) {
            return c.name;
          });
        }
        /**
         * Build array of columns to emit out to the consumer
         */

      }, {
        key: "columnsToSendToConsumer",
        get: function get() {
          var internalColumns = this.getFreshColumnsCopy(this.columnsInternal);
          var userColumns = this.getFreshColumnsCopy();
          var lastIndex = internalColumns.length - 1; // Reset the last column width to the consumer defined width

          internalColumns[lastIndex].width = userColumns[lastIndex].width;
          return internalColumns;
        }
        /**
         * Return the width of the element wrapping the table
         */

      }, {
        key: "containerWidth",
        get: function get() {
          return this.parentElement.offsetWidth;
        }
        /**
         * Determine if the container around the table has overflow (ie the table is scrollable)
         */

      }, {
        key: "hasOverflowX",
        get: function get() {
          return this.parentElement.scrollWidth > this.tableWidth;
        }
        /**
         * Return the parent HTMLElement
         */

      }, {
        key: "parentElement",
        get: function get() {
          return this.elementRef.nativeElement.parentNode;
        }
        /**
         * Determine the remaining space in the table after the columns take up their needed width
         */

      }, {
        key: "remainingTableSpace",
        get: function get() {
          // NOTE: The outer borders take up 2px so we subtract them here to avoid a 2px overflow.
          var borderOffset = 2;
          var remainingWidth = this.containerWidth - this.totalWidthOfColumns - borderOffset;
          return remainingWidth > 0 ? remainingWidth : 0;
        }
        /**
         * Return the width of the table
         */

      }, {
        key: "tableWidth",
        get: function get() {
          return this.elementRef.nativeElement.offsetWidth;
        }
        /**
         * Return the total width of all visible columns
         */

      }, {
        key: "totalWidthOfColumns",
        get: function get() {
          var currentWidths = this.headerCells.map(function (hc) {
            return hc.cellWidth;
          });
          var userWidths = this.columns.map(function (v) {
            return v.width;
          });
          var columnsToReduce = currentWidths.slice(); // NOTE: Since the last column is never resized by the user, we should use the original size for the last column and the current
          // size for all other columns.

          var lastIndex = userWidths.length - 1;
          columnsToReduce[lastIndex] = this.columns[lastIndex].width;
          return columnsToReduce.reduce(function (a, b) {
            return a + b;
          }, 0);
        }
        /**
         * Define the array of columns
         *
         * @param value
         */

      }, {
        key: "columns",
        set: function set(value) {
          // istanbul ignore else
          if (value && value.length > 0) {
            this._columns = this.getFreshColumnsCopy(value);
            this.columnsInternal = this.getFreshColumnsCopy(value);
          }
        },
        get: function get() {
          return this._columns;
        }
        /**
         * Define a custom ID
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
      }]);

      return TsTableComponent;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]);

    TsTableComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
          args: ['role']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(TsHeaderCellDirective, {
      descendants: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], TsTableComponent.prototype, "headerCells", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"])(TsRowComponent), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"])], TsTableComponent.prototype, "rows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TsTableComponent.prototype, "columns", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsTableComponent.prototype, "density", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsTableComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsTableComponent.prototype, "columnsChange", void 0);
    TsTableComponent = TsTableComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'ts-table, table[ts-table]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
      host: {
        'class': 'ts-table',
        '[class.ts-table--comfy]': 'density === "comfy"',
        '[class.ts-table--compact]': 'density === "compact"',
        '[id]': 'id'
      },
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
        useExisting: TsTableComponent_1
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      exportAs: 'tsTable',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-table{--table-bg:#fafafa;--header-bg:#cecdd1;--header-text-color:#302d35;--border-color:#cecdd1;--header-border-color:#999;--drop-bg:#e8eef3;--z-index-base-context:2;--z-index-resize-background:calc(var(--z-index-base-context) + 1);--z-index-resize-grabber:calc(var(--z-index-resize-background) + 1);--cell-padding:16px;--sticky-end-z:50;--grip-vertical-adjustment:50%;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border-collapse:separate;border-spacing:unset;max-height:100%;table-layout:fixed;width:100%}.ts-table :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-table h1,.ts-table h2,.ts-table h3,.ts-table h4,.ts-table h5,.ts-table p{margin:unset}.ts-table:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-table.ts-table--compact{--cell-padding:4px;--grip-vertical-adjustment:calc(50% - 4px)}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell{overflow:hidden}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell .ts-header-cell__resizer{transform:translateX(40%)}.ts-table .ts-header-row{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;background-color:var(--header-bg);color:var(--header-text-color);font-weight:700;transition:background-color .2s ease-out}.ts-table .ts-header-row::after{content:'';display:block}.ts-table .ts-row{border-bottom:1px solid var(--border-color)}.ts-table .ts-row:hover .ts-cell{background-color:var(--drop-bg)}.ts-table .ts-row::after{content:'';display:inline-block;min-height:inherit}.ts-table .ts-cell,.ts-table .ts-footer-cell,.ts-table .ts-header-cell{min-height:inherit;position:relative;text-align:left;word-wrap:break-word}.ts-table .ts-cell.ts-table__column--sticky-end,.ts-table .ts-footer-cell.ts-table__column--sticky-end,.ts-table .ts-header-cell.ts-table__column--sticky-end{border-left:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-footer-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-header-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end){border-right:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-column-no-wrap,.ts-table .ts-footer-cell.ts-column-no-wrap,.ts-table .ts-header-cell.ts-column-no-wrap{white-space:nowrap}.ts-table .ts-cell--align-right,.ts-table .ts-footer-cell--align-right,.ts-table .ts-header-cell--align-right{text-align:right}.ts-table .ts-cell--align-right .ts-sort-header-container,.ts-table .ts-footer-cell--align-right .ts-sort-header-container,.ts-table .ts-header-cell--align-right .ts-sort-header-container{justify-content:flex-end}.ts-table .ts-cell--align-left,.ts-table .ts-footer-cell--align-left,.ts-table .ts-header-cell--align-left{text-align:left}.ts-table .ts-cell--align-center,.ts-table .ts-footer-cell--align-center,.ts-table .ts-header-cell--align-center{text-align:center}.ts-table .ts-cell,.ts-table .ts-footer-cell{background-color:var(--table-bg);overflow:hidden;padding:var(--cell-padding);text-overflow:ellipsis;transition:background-color .2s ease-out;white-space:nowrap}.ts-table .ts-cell.ts-table__column--sticky,.ts-table .ts-footer-cell.ts-table__column--sticky{background-color:var(--table-bg)}.ts-table .ts-header-cell{background-color:var(--header-bg);border-color:var(--header-border-color);padding:var(--cell-padding)}.ts-table .ts-header-cell:not(:last-of-type){position:relative}.ts-table .ts-header-cell:not(:last-of-type)::after{background-color:var(--header-border-color);bottom:0;content:'';display:block;left:calc(100% - 1px);opacity:0;position:absolute;top:0;transition:opacity .2s ease-out;width:1px;z-index:var(--z-index-base-context)}.ts-table .ts-header-cell:not(:last-of-type):focus::after,.ts-table .ts-header-cell:not(:last-of-type):hover::after{opacity:1}.ts-table .ts-header-cell.ts-sort-header-sorted{color:#2f854d}.ts-table .ts-header-cell:nth-child(1){z-index:39!important}.ts-table .ts-header-cell:nth-child(2){z-index:38!important}.ts-table .ts-header-cell:nth-child(3){z-index:37!important}.ts-table .ts-header-cell:nth-child(4){z-index:36!important}.ts-table .ts-header-cell:nth-child(5){z-index:35!important}.ts-table .ts-header-cell:nth-child(6){z-index:34!important}.ts-table .ts-header-cell:nth-child(7){z-index:33!important}.ts-table .ts-header-cell:nth-child(8){z-index:32!important}.ts-table .ts-header-cell:nth-child(9){z-index:31!important}.ts-table .ts-header-cell:nth-child(10){z-index:30!important}.ts-table .ts-header-cell:nth-child(11){z-index:29!important}.ts-table .ts-header-cell:nth-child(12){z-index:28!important}.ts-table .ts-header-cell:nth-child(13){z-index:27!important}.ts-table .ts-header-cell:nth-child(14){z-index:26!important}.ts-table .ts-header-cell:nth-child(15){z-index:25!important}.ts-table .ts-header-cell:nth-child(16){z-index:24!important}.ts-table .ts-header-cell:nth-child(17){z-index:23!important}.ts-table .ts-header-cell:nth-child(18){z-index:22!important}.ts-table .ts-header-cell:nth-child(19){z-index:21!important}.ts-table .ts-header-cell:nth-child(20){z-index:20!important}.ts-table .ts-header-cell:nth-child(21){z-index:19!important}.ts-table .ts-header-cell:nth-child(22){z-index:18!important}.ts-table .ts-header-cell:nth-child(23){z-index:17!important}.ts-table .ts-header-cell:nth-child(24){z-index:16!important}.ts-table .ts-header-cell:nth-child(25){z-index:15!important}.ts-table .ts-header-cell:nth-child(26){z-index:14!important}.ts-table .ts-header-cell:nth-child(27){z-index:13!important}.ts-table .ts-header-cell:nth-child(28){z-index:12!important}.ts-table .ts-header-cell:nth-child(29){z-index:11!important}.ts-table .ts-header-cell:nth-child(30){z-index:10!important}.ts-table .ts-header-cell:nth-child(31){z-index:9!important}.ts-table .ts-header-cell:nth-child(32){z-index:8!important}.ts-table .ts-header-cell:nth-child(33){z-index:7!important}.ts-table .ts-header-cell:nth-child(34){z-index:6!important}.ts-table .ts-header-cell:nth-child(35){z-index:5!important}.ts-table .ts-header-cell:nth-child(36){z-index:4!important}.ts-table .ts-header-cell:nth-child(37){z-index:3!important}.ts-table .ts-header-cell:nth-child(38){z-index:2!important}.ts-table .ts-header-cell:nth-child(39){z-index:1!important}.ts-table .ts-header-cell:nth-child(40){z-index:0!important}.ts-table .ts-header-cell.ts-table__column--sticky-end{z-index:var(--sticky-end-z)!important}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer{opacity:1}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer::before{width:7px}.ts-table .ts-header-cell__resizer{bottom:-1px;cursor:col-resize;display:block;opacity:0;position:absolute;right:0;top:-1px;transform:translateX(50%);transition:opacity .2s ease-out;width:24px;z-index:calc(var(--z-index-resize-background))}.ts-table .ts-header-cell__resizer::before{background-color:#00538a;bottom:1px;content:'';display:block;left:50%;position:absolute;top:0;transform:translateX(-50%);transition:width .1s ease-out;width:1px}.ts-table .ts-header-cell__resizer::after{--grabber-icon-font-size:14px;color:#f2f0f7;content:'\\2026';display:block;font-size:var(--grabber-icon-font-size);height:11px;left:50%;position:absolute;top:30%;transform:rotate(90deg) translate(var(--grip-vertical-adjustment),-3px);z-index:var(--z-index-resize-grabber)}"]
    }) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    , Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"])('role')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], String, Object, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]])], TsTableComponent);
    /**
     * Data source that accepts a client-side data array and includes native support of filtering,
     * sorting (using {@link TsSortDirective}), and paginator (using {@link TsPaginatorComponent}).
     */

    var TsTableDataSource = /*#__PURE__*/function () {
      /**
       * Set up data and change subscriptions
       *
       * @param initialData
       */
      function TsTableDataSource() {
        var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TsTableDataSource);

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


      _createClass(TsTableDataSource, [{
        key: "_updateChangeSubscription",

        /**
         * Subscribe to changes that should trigger an update to the table's rendered rows. When the
         * changes occur, process the current state of the filter, sort, and pagination along with the
         * provided base data and send it to the table for rendering.
         */
        value: function _updateChangeSubscription() {
          var _this14 = this;

          if (this._renderChangesSubscription) {
            this._renderChangesSubscription.unsubscribe();
          } // Watch for base data or filter changes to provide a filtered set of data.


          this._renderChangesSubscription = this._data // Watched for paged data changes and send the result to the table to render.
          .subscribe(function (data) {
            return _this14._renderData.next(data);
          });
        }
        /**
         * Used by the {@link TsTableComponent}. Called when it connects to the data source.
         */

      }, {
        key: "connect",
        value: function connect() {
          return this._renderData;
        }
        /**
         * Used by the {@link TsTableComponent}. Called when it is destroyed. No-op.
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }, {
        key: "data",
        set: function set(data) {
          this._data.next(data);
        },
        get: function get() {
          return this._data.value;
        }
      }]);

      return TsTableDataSource;
    }(); // NOTE: Moving declarations/exports items into shared array breaks documentation generation.


    var TsTableModule = function TsTableModule() {
      _classCallCheck(this, TsTableModule);
    };

    TsTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_4__["TsPaginatorModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_5__["TsSortModule"]],
      declarations: [// Table
      TsTableComponent, // Template definitions
      TsHeaderCellDefDirective, TsHeaderRowDefDirective, TsColumnDefDirective, TsCellDefDirective, TsRowDefDirective, TsFooterCellDefDirective, TsFooterRowDefDirective, // Cell directives
      TsHeaderCellDirective, TsCellDirective, TsFooterCellDirective, // Row directives
      TsHeaderRowComponent, TsRowComponent, TsFooterRowComponent],
      exports: [// Table
      TsTableComponent, // Template definitions
      TsHeaderCellDefDirective, TsHeaderRowDefDirective, TsColumnDefDirective, TsCellDefDirective, TsRowDefDirective, TsFooterCellDefDirective, TsFooterRowDefDirective, // Cell directives
      TsHeaderCellDirective, TsCellDirective, TsFooterCellDirective, // Row directives
      TsHeaderRowComponent, TsRowComponent, TsFooterRowComponent]
    })], TsTableModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-table.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/table/terminus-ui-table.ngfactory.js":
  /*!*****************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/table/terminus-ui-table.ngfactory.js ***!
    \*****************************************************************************************************/

  /*! exports provided: TsTableModuleNgFactory, RenderType_TsHeaderRowComponent, View_TsHeaderRowComponent_0, View_TsHeaderRowComponent_Host_0, TsHeaderRowComponentNgFactory, RenderType_TsRowComponent, View_TsRowComponent_0, View_TsRowComponent_Host_0, TsRowComponentNgFactory, RenderType_TsFooterRowComponent, View_TsFooterRowComponent_0, View_TsFooterRowComponent_Host_0, TsFooterRowComponentNgFactory, RenderType_TsTableComponent, View_TsTableComponent_0, View_TsTableComponent_Host_0, TsTableComponentNgFactory */

  /***/
  function distLibsUiTableTerminusUiTableNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTableModuleNgFactory", function () {
      return TsTableModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsHeaderRowComponent", function () {
      return RenderType_TsHeaderRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsHeaderRowComponent_0", function () {
      return View_TsHeaderRowComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsHeaderRowComponent_Host_0", function () {
      return View_TsHeaderRowComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsHeaderRowComponentNgFactory", function () {
      return TsHeaderRowComponentNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsRowComponent", function () {
      return RenderType_TsRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsRowComponent_0", function () {
      return View_TsRowComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsRowComponent_Host_0", function () {
      return View_TsRowComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsRowComponentNgFactory", function () {
      return TsRowComponentNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsFooterRowComponent", function () {
      return RenderType_TsFooterRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsFooterRowComponent_0", function () {
      return View_TsFooterRowComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsFooterRowComponent_Host_0", function () {
      return View_TsFooterRowComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFooterRowComponentNgFactory", function () {
      return TsFooterRowComponentNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsTableComponent", function () {
      return RenderType_TsTableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsTableComponent_0", function () {
      return View_TsTableComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsTableComponent_Host_0", function () {
      return View_TsTableComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsTableComponentNgFactory", function () {
      return TsTableComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-table */
    "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/dialog/index.ngfactory */
    "../../node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */
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


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @terminus/ui-validators */
    "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
    /* harmony import */


    var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @terminus/ui-selection-list */
    "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @terminus/ui-sort */
    "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @terminus/ui-menu */
    "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @terminus/ui-paginator */
    "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsTableModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_19__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_19__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortHeaderIntl"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TS_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_24__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_26__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_32__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_32__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_33__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_33__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_34__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_36__["TsMenuModule"], _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_36__["TsMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_39__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_40__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_13__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_14__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_20__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_43__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_43__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_44__["TsPaginatorModule"], _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_44__["TsPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_22__["TsSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableModule"], _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TS_DATE_FORMATS"], [])]);
    });

    var styles_TsHeaderRowComponent = [];

    var RenderType_TsHeaderRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsHeaderRowComponent,
      data: {}
    });

    function View_TsHeaderRowComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null);
    }

    function View_TsHeaderRowComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-header-row", [["class", "ts-header-row"], ["role", "row"]], null, null, null, View_TsHeaderRowComponent_0, RenderType_TsHeaderRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsHeaderRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null);
    }

    var TsHeaderRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-header-row, tr[ts-header-row]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsHeaderRowComponent"], View_TsHeaderRowComponent_Host_0, {}, {}, []);

    var styles_TsRowComponent = [];

    var RenderType_TsRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsRowComponent,
      data: {}
    });

    function View_TsRowComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null);
    }

    function View_TsRowComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-row", [["class", "ts-row"], ["role", "row"]], null, null, null, View_TsRowComponent_0, RenderType_TsRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null);
    }

    var TsRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-row, tr[ts-row]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsRowComponent"], View_TsRowComponent_Host_0, {}, {}, []);

    var styles_TsFooterRowComponent = [];

    var RenderType_TsFooterRowComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsFooterRowComponent,
      data: {}
    });

    function View_TsFooterRowComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null);
    }

    function View_TsFooterRowComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-footer-row", [["class", "ts-footer-row"], ["role", "row"]], null, null, null, View_TsFooterRowComponent_0, RenderType_TsFooterRowComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkFooterRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsFooterRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsFooterRowComponent"], [], null, null)], null, null);
    }

    var TsFooterRowComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-footer-row, tr[ts-footer-row]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsFooterRowComponent"], View_TsFooterRowComponent_Host_0, {}, {}, []);

    var styles_TsTableComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-table{--table-bg:#fafafa;--header-bg:#cecdd1;--header-text-color:#302d35;--border-color:#cecdd1;--header-border-color:#999;--drop-bg:#e8eef3;--z-index-base-context:2;--z-index-resize-background:calc(var(--z-index-base-context) + 1);--z-index-resize-grabber:calc(var(--z-index-resize-background) + 1);--cell-padding:16px;--sticky-end-z:50;--grip-vertical-adjustment:50%;font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;letter-spacing:.01em;font-weight:400;border-collapse:separate;border-spacing:unset;max-height:100%;table-layout:fixed;width:100%}.ts-table :not(.mat-form-field-label-wrapper){box-sizing:border-box}.ts-table h1,.ts-table h2,.ts-table h3,.ts-table h4,.ts-table h5,.ts-table p{margin:unset}.ts-table:not(.c-button):not(.c-input):not(.c-select):not(.ts-checkbox){line-height:20px}.ts-table.ts-table--compact{--cell-padding:4px;--grip-vertical-adjustment:calc(50% - 4px)}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell{overflow:hidden}.ts-table .ts-table__column--sticky-end:last-of-type.ts-header-cell .ts-header-cell__resizer{transform:translateX(40%)}.ts-table .ts-header-row{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.02em;background-color:var(--header-bg);color:var(--header-text-color);font-weight:700;transition:background-color .2s ease-out}.ts-table .ts-header-row::after{content:'';display:block}.ts-table .ts-row{border-bottom:1px solid var(--border-color)}.ts-table .ts-row:hover .ts-cell{background-color:var(--drop-bg)}.ts-table .ts-row::after{content:'';display:inline-block;min-height:inherit}.ts-table .ts-cell,.ts-table .ts-footer-cell,.ts-table .ts-header-cell{min-height:inherit;position:relative;text-align:left;word-wrap:break-word}.ts-table .ts-cell.ts-table__column--sticky-end,.ts-table .ts-footer-cell.ts-table__column--sticky-end,.ts-table .ts-header-cell.ts-table__column--sticky-end{border-left:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-footer-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end),.ts-table .ts-header-cell.ts-table__column--sticky:not(.ts-table__column--sticky-end){border-right:2px solid var(--header-border-color)}.ts-table .ts-cell.ts-column-no-wrap,.ts-table .ts-footer-cell.ts-column-no-wrap,.ts-table .ts-header-cell.ts-column-no-wrap{white-space:nowrap}.ts-table .ts-cell--align-right,.ts-table .ts-footer-cell--align-right,.ts-table .ts-header-cell--align-right{text-align:right}.ts-table .ts-cell--align-right .ts-sort-header-container,.ts-table .ts-footer-cell--align-right .ts-sort-header-container,.ts-table .ts-header-cell--align-right .ts-sort-header-container{justify-content:flex-end}.ts-table .ts-cell--align-left,.ts-table .ts-footer-cell--align-left,.ts-table .ts-header-cell--align-left{text-align:left}.ts-table .ts-cell--align-center,.ts-table .ts-footer-cell--align-center,.ts-table .ts-header-cell--align-center{text-align:center}.ts-table .ts-cell,.ts-table .ts-footer-cell{background-color:var(--table-bg);overflow:hidden;padding:var(--cell-padding);text-overflow:ellipsis;transition:background-color .2s ease-out;white-space:nowrap}.ts-table .ts-cell.ts-table__column--sticky,.ts-table .ts-footer-cell.ts-table__column--sticky{background-color:var(--table-bg)}.ts-table .ts-header-cell{background-color:var(--header-bg);border-color:var(--header-border-color);padding:var(--cell-padding)}.ts-table .ts-header-cell:not(:last-of-type){position:relative}.ts-table .ts-header-cell:not(:last-of-type)::after{background-color:var(--header-border-color);bottom:0;content:'';display:block;left:calc(100% - 1px);opacity:0;position:absolute;top:0;transition:opacity .2s ease-out;width:1px;z-index:var(--z-index-base-context)}.ts-table .ts-header-cell:not(:last-of-type):focus::after,.ts-table .ts-header-cell:not(:last-of-type):hover::after{opacity:1}.ts-table .ts-header-cell.ts-sort-header-sorted{color:#2f854d}.ts-table .ts-header-cell:nth-child(1){z-index:39!important}.ts-table .ts-header-cell:nth-child(2){z-index:38!important}.ts-table .ts-header-cell:nth-child(3){z-index:37!important}.ts-table .ts-header-cell:nth-child(4){z-index:36!important}.ts-table .ts-header-cell:nth-child(5){z-index:35!important}.ts-table .ts-header-cell:nth-child(6){z-index:34!important}.ts-table .ts-header-cell:nth-child(7){z-index:33!important}.ts-table .ts-header-cell:nth-child(8){z-index:32!important}.ts-table .ts-header-cell:nth-child(9){z-index:31!important}.ts-table .ts-header-cell:nth-child(10){z-index:30!important}.ts-table .ts-header-cell:nth-child(11){z-index:29!important}.ts-table .ts-header-cell:nth-child(12){z-index:28!important}.ts-table .ts-header-cell:nth-child(13){z-index:27!important}.ts-table .ts-header-cell:nth-child(14){z-index:26!important}.ts-table .ts-header-cell:nth-child(15){z-index:25!important}.ts-table .ts-header-cell:nth-child(16){z-index:24!important}.ts-table .ts-header-cell:nth-child(17){z-index:23!important}.ts-table .ts-header-cell:nth-child(18){z-index:22!important}.ts-table .ts-header-cell:nth-child(19){z-index:21!important}.ts-table .ts-header-cell:nth-child(20){z-index:20!important}.ts-table .ts-header-cell:nth-child(21){z-index:19!important}.ts-table .ts-header-cell:nth-child(22){z-index:18!important}.ts-table .ts-header-cell:nth-child(23){z-index:17!important}.ts-table .ts-header-cell:nth-child(24){z-index:16!important}.ts-table .ts-header-cell:nth-child(25){z-index:15!important}.ts-table .ts-header-cell:nth-child(26){z-index:14!important}.ts-table .ts-header-cell:nth-child(27){z-index:13!important}.ts-table .ts-header-cell:nth-child(28){z-index:12!important}.ts-table .ts-header-cell:nth-child(29){z-index:11!important}.ts-table .ts-header-cell:nth-child(30){z-index:10!important}.ts-table .ts-header-cell:nth-child(31){z-index:9!important}.ts-table .ts-header-cell:nth-child(32){z-index:8!important}.ts-table .ts-header-cell:nth-child(33){z-index:7!important}.ts-table .ts-header-cell:nth-child(34){z-index:6!important}.ts-table .ts-header-cell:nth-child(35){z-index:5!important}.ts-table .ts-header-cell:nth-child(36){z-index:4!important}.ts-table .ts-header-cell:nth-child(37){z-index:3!important}.ts-table .ts-header-cell:nth-child(38){z-index:2!important}.ts-table .ts-header-cell:nth-child(39){z-index:1!important}.ts-table .ts-header-cell:nth-child(40){z-index:0!important}.ts-table .ts-header-cell.ts-table__column--sticky-end{z-index:var(--sticky-end-z)!important}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer{opacity:1}.ts-table .ts-header-cell.ts-cell--resizing .ts-header-cell__resizer::before{width:7px}.ts-table .ts-header-cell__resizer{bottom:-1px;cursor:col-resize;display:block;opacity:0;position:absolute;right:0;top:-1px;transform:translateX(50%);transition:opacity .2s ease-out;width:24px;z-index:calc(var(--z-index-resize-background))}.ts-table .ts-header-cell__resizer::before{background-color:#00538a;bottom:1px;content:'';display:block;left:50%;position:absolute;top:0;transform:translateX(-50%);transition:width .1s ease-out;width:1px}.ts-table .ts-header-cell__resizer::after{--grabber-icon-font-size:14px;color:#f2f0f7;content:'\\2026';display:block;font-size:var(--grabber-icon-font-size);height:11px;left:50%;position:absolute;top:30%;transform:rotate(90deg) translate(var(--grip-vertical-adjustment),-3px);z-index:var(--z-index-resize-grabber)}"];

    var RenderType_TsTableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsTableComponent,
      data: {}
    });

    function View_TsTableComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        _rowOutlet: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {
        _headerRowOutlet: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, {
        _footerRowOutlet: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[2, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["HeaderRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, [[1, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["DataRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, [[3, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["FooterRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null);
    }

    function View_TsTableComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "ts-table", [["class", "ts-table"]], [[2, "ts-table--comfy", null], [2, "ts-table--compact", null], [8, "id", 0]], null, null, View_TsTableComponent_0, RenderType_TsTableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_23__["CdkTable"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 11780096, null, 6, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableComponent"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_8__["TsWindowService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ViewportRuler"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _contentColumnDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _contentRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        _contentHeaderRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        _contentFooterRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        headerCells: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, {
        rows: 1
      })], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).density === "comfy";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).density === "compact";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).id;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    var TsTableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-table, table[ts-table]", _terminus_ui_table__WEBPACK_IMPORTED_MODULE_1__["TsTableComponent"], View_TsTableComponent_Host_0, {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: "multiTemplateDataRows",
      columns: "columns",
      density: "density",
      id: "id"
    }, {
      columnsChange: "columnsChange"
    }, ["caption"]);
    /***/

  },

  /***/
  "../../node_modules/@angular/cdk/fesm2015/drag-drop.js":
  /*!***************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/cdk/fesm2015/drag-drop.js ***!
    \***************************************************************************************************/

  /*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_CONFIG_FACTORY, CDK_DROP_LIST, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem, ɵangular_material_src_cdk_drag_drop_drag_drop_b */

  /***/
  function node_modulesAngularCdkFesm2015DragDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () {
      return CDK_DRAG_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function () {
      return CDK_DRAG_CONFIG_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () {
      return CDK_DROP_LIST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDrag", function () {
      return CdkDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () {
      return CdkDragHandle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () {
      return CdkDragPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () {
      return CdkDragPreview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropList", function () {
      return CdkDropList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () {
      return CdkDropListGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDrop", function () {
      return DragDrop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropModule", function () {
      return DragDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () {
      return DragDropRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRef", function () {
      return DragRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropListRef", function () {
      return DropListRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () {
      return copyArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () {
      return moveItemInArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () {
      return transferArrayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_drag_drop_drag_drop_b", function () {
      return CDK_DRAG_PARENT;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
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


    function DragCSSStyleDeclaration() {}

    if (false) {}
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * \@docs-private
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] =
          /** @type {?} */
          source[key];
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
      var userSelect = enable ? '' : 'none';
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
      var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
      return parseFloat(value) * multiplier;
    }
    /**
     * Gets the transform transition duration, including the delay, of an element in milliseconds.
     * @param {?} element
     * @return {?}
     */


    function getTransformTransitionDurationInMs(element) {
      /** @type {?} */
      var computedStyle = getComputedStyle(element);
      /** @type {?} */

      var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
      /** @type {?} */

      var property = transitionedProperties.find(
      /**
      * @param {?} prop
      * @return {?}
      */
      function (prop) {
        return prop === 'transform' || prop === 'all';
      }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

      if (!property) {
        return 0;
      } // Get the index of the property that we're interested in and match
      // it up to the same index in `transition-delay` and `transition-duration`.

      /** @type {?} */


      var propertyIndex = transitionedProperties.indexOf(property);
      /** @type {?} */

      var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
      /** @type {?} */

      var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
      return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
    }
    /**
     * Parses out multiple values from a computed style into an array.
     * @param {?} computedStyle
     * @param {?} name
     * @return {?}
     */


    function parseCssPropertyValue(computedStyle, name) {
      /** @type {?} */
      var value = computedStyle.getPropertyValue(name);
      return value.split(',').map(
      /**
      * @param {?} part
      * @return {?}
      */
      function (part) {
        return part.trim();
      });
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
      var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
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
      var top = clientRect.top,
          bottom = clientRect.bottom,
          left = clientRect.left,
          right = clientRect.right;
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
      var top = rect.top,
          right = rect.right,
          bottom = rect.bottom,
          left = rect.left,
          width = rect.width,
          height = rect.height;
      /** @type {?} */

      var xThreshold = width * threshold;
      /** @type {?} */

      var yThreshold = height * threshold;
      return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
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


    function ScrollPosition() {}

    if (false) {}
    /**
     * Keeps track of the scroll position and dimensions of the parents of an element.
     */


    var ParentPositionTracker = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       * @param {?} _viewportRuler
       */
      function ParentPositionTracker(_document, _viewportRuler) {
        _classCallCheck(this, ParentPositionTracker);

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


      _createClass(ParentPositionTracker, [{
        key: "clear",
        value: function clear() {
          this.positions.clear();
        }
        /**
         * Caches the positions. Should be called at the beginning of a drag sequence.
         * @param {?} elements
         * @return {?}
         */

      }, {
        key: "cache",
        value: function cache(elements) {
          var _this15 = this;

          this.clear();
          this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition()
          });
          elements.forEach(
          /**
          * @param {?} element
          * @return {?}
          */
          function (element) {
            _this15.positions.set(element, {
              scrollPosition: {
                top: element.scrollTop,
                left: element.scrollLeft
              },
              clientRect: getMutableClientRect(element)
            });
          });
        }
        /**
         * Handles scrolling while a drag is taking place.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleScroll",
        value: function handleScroll(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var cachedPosition = this.positions.get(target);

          if (!cachedPosition) {
            return null;
          } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
          // parent is the `document`, we use the `documentElement`, because IE doesn't support
          // `contains` on the `document`.

          /** @type {?} */


          var scrolledParentNode = target === this._document ? target.documentElement : target;
          /** @type {?} */

          var scrollPosition = cachedPosition.scrollPosition;
          /** @type {?} */

          var newTop;
          /** @type {?} */

          var newLeft;

          if (target === this._document) {
            /** @type {?} */
            var viewportScrollPosition =
            /** @type {?} */
            this._viewportRuler.getViewportScrollPosition();

            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
          } else {
            newTop =
            /** @type {?} */
            target.scrollTop;
            newLeft =
            /** @type {?} */
            target.scrollLeft;
          }
          /** @type {?} */


          var topDifference = scrollPosition.top - newTop;
          /** @type {?} */

          var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
          // parents that are inside the element that was scrolled.

          this.positions.forEach(
          /**
          * @param {?} position
          * @param {?} node
          * @return {?}
          */
          function (position, node) {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
              adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
          });
          scrollPosition.top = newTop;
          scrollPosition.left = newLeft;
          return {
            top: topDifference,
            left: leftDifference
          };
        }
      }]);

      return ParentPositionTracker;
    }();

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


    function DragRefConfig() {}

    if (false) {}
    /**
     * Options that can be used to bind a passive event listener.
     * @type {?}
     */


    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Options that can be used to bind an active event listener.
     * @type {?}
     */

    var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
      passive: false
    });
    /**
     * Time in milliseconds for which to ignore mouse events, after
     * receiving a touch event. Used to avoid doing double work for
     * touch devices where the browser fires fake mouse events, in
     * addition to touch events.
     * @type {?}
     */

    var MOUSE_EVENT_IGNORE_TIME = 800;
    /**
     * Internal compile-time-only representation of a `DragRef`.
     * Used to avoid circular import issues between the `DragRef` and the `DropListRef`.
     * \@docs-private
     * @record
     */

    function DragRefInternal() {}
    /**
     * Template that can be used to create a drag helper element (e.g. a preview or a placeholder).
     * @record
     * @template T
     */


    function DragHelperTemplate() {}

    if (false) {}
    /**
     * Template that can be used to create a drag preview element.
     * @record
     * @template T
     */


    function DragPreviewTemplate() {}

    if (false) {}
    /**
     * Point on the page or within an element.
     * @record
     */


    function Point() {}

    if (false) {}
    /**
     * Reference to a draggable item. Used to manipulate or dispose of the item.
     * @template T
     */


    var DragRef = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _config
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this16 = this;

        _classCallCheck(this, DragRef);

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

        this._passiveTransform = {
          x: 0,
          y: 0
        };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */

        this._activeTransform = {
          x: 0,
          y: 0
        };
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

        this._pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this16.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


          if (_this16._handles.length) {
            /** @type {?} */
            var targetHandle = _this16._handles.find(
            /**
            * @param {?} handle
            * @return {?}
            */
            function (handle) {
              /** @type {?} */
              var target = event.target;
              return !!target && (target === handle || handle.contains(
              /** @type {?} */
              target));
            });

            if (targetHandle && !_this16._disabledHandles.has(targetHandle) && !_this16.disabled) {
              _this16._initializeDragSequence(targetHandle, event);
            }
          } else if (!_this16.disabled) {
            _this16._initializeDragSequence(_this16._rootElement, event);
          }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */


        this._pointerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Prevent the default action as early as possible in order to block
          // native actions like dragging the selected text or images with the mouse.
          event.preventDefault();
          /** @type {?} */

          var pointerPosition = _this16._getPointerPositionOnPage(event);

          if (!_this16._hasStartedDragging) {
            /** @type {?} */
            var distanceX = Math.abs(pointerPosition.x - _this16._pickupPositionOnPage.x);
            /** @type {?} */

            var distanceY = Math.abs(pointerPosition.y - _this16._pickupPositionOnPage.y);
            /** @type {?} */

            var isOverThreshold = distanceX + distanceY >= _this16._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
            // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
            // in the `pointerMove` subscription, because we're not guaranteed to have one move event
            // per pixel of movement (e.g. if the user moves their pointer quickly).

            if (isOverThreshold) {
              /** @type {?} */
              var isDelayElapsed = Date.now() >= _this16._dragStartTime + _this16._getDragStartDelay(event);

              if (!isDelayElapsed) {
                _this16._endDragSequence(event);

                return;
              } // Prevent other drag sequences from starting while something in the container is still
              // being dragged. This can happen while we're waiting for the drop animation to finish
              // and can cause errors, because some elements might still be moving around.


              if (!_this16._dropContainer || !_this16._dropContainer.isDragging()) {
                _this16._hasStartedDragging = true;

                _this16._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this16._startDragSequence(event);
                });
              }
            }

            return;
          } // We only need the preview dimensions if we have a boundary element.


          if (_this16._boundaryElement) {
            // Cache the preview element rect if we haven't cached it already or if
            // we cached it too early before the element dimensions were computed.
            if (!_this16._previewRect || !_this16._previewRect.width && !_this16._previewRect.height) {
              _this16._previewRect = (_this16._preview || _this16._rootElement).getBoundingClientRect();
            }
          }
          /** @type {?} */


          var constrainedPointerPosition = _this16._getConstrainedPointerPosition(pointerPosition);

          _this16._hasMoved = true;

          _this16._updatePointerDirectionDelta(constrainedPointerPosition);

          if (_this16._dropContainer) {
            _this16._updateActiveDropContainer(constrainedPointerPosition);
          } else {
            /** @type {?} */
            var activeTransform = _this16._activeTransform;
            activeTransform.x = constrainedPointerPosition.x - _this16._pickupPositionOnPage.x + _this16._passiveTransform.x;
            activeTransform.y = constrainedPointerPosition.y - _this16._pickupPositionOnPage.y + _this16._passiveTransform.y;

            _this16._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


            if (typeof SVGElement !== 'undefined' && _this16._rootElement instanceof SVGElement) {
              /** @type {?} */
              var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

              _this16._rootElement.setAttribute('transform', appliedTransform);
            }
          } // Since this event gets fired for every pixel while dragging, we only
          // want to fire it if the consumer opted into it. Also we have to
          // re-enter the zone because we run all of the events on the outside.


          if (_this16._moveEvents.observers.length) {
            _this16._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this16._moveEvents.next({
                source: _this16,
                pointerPosition: constrainedPointerPosition,
                event: event,
                distance: _this16._getDragDistance(constrainedPointerPosition),
                delta: _this16._pointerDirectionDelta
              });
            });
          }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */


        this._pointerUp =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this16._endDragSequence(event);
        };

        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

        _dragDropRegistry.registerDragItem(this);
      }
      /**
       * Whether starting to drag this element is disabled.
       * @return {?}
       */


      _createClass(DragRef, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._placeholder;
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._rootElement;
        }
        /**
         * Gets the currently-visible element that represents the drag item.
         * While dragging this is the placeholder, otherwise it's the root element.
         * @return {?}
         */

      }, {
        key: "getVisibleElement",
        value: function getVisibleElement() {
          return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
        }
        /**
         * Registers the handles that can be used to drag the element.
         * @template THIS
         * @this {THIS}
         * @param {?} handles
         * @return {THIS}
         */

      }, {
        key: "withHandles",
        value: function withHandles(handles) {
          /** @type {?} */
          this._handles = handles.map(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle);
          });

          /** @type {?} */
          this._handles.forEach(
          /**
          * @param {?} handle
          * @return {?}
          */
          function (handle) {
            return toggleNativeDragInteractions(handle, false);
          });

          /** @type {?} */
          this._toggleNativeDragInteractions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag preview.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the preview.
         * @return {THIS}
         */

      }, {
        key: "withPreviewTemplate",
        value: function withPreviewTemplate(template) {
          /** @type {?} */
          this._previewTemplate = template;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Registers the template that should be used for the drag placeholder.
         * @template THIS
         * @this {THIS}
         * @param {?} template Template that from which to stamp out the placeholder.
         * @return {THIS}
         */

      }, {
        key: "withPlaceholderTemplate",
        value: function withPlaceholderTemplate(template) {
          /** @type {?} */
          this._placeholderTemplate = template;
          return (
            /** @type {?} */
            this
          );
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

      }, {
        key: "withRootElement",
        value: function withRootElement(rootElement) {
          var _this17 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);

          if (element !==
          /** @type {?} */
          this._rootElement) {
            if (
            /** @type {?} */
            this._rootElement) {
              /** @type {?} */
              this._removeRootElementListeners(
              /** @type {?} */
              this._rootElement);
            }

            /** @type {?} */
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              element.addEventListener('mousedown',
              /** @type {?} */
              _this17._pointerDown, activeEventListenerOptions);
              element.addEventListener('touchstart',
              /** @type {?} */
              _this17._pointerDown, passiveEventListenerOptions);
            });

            /** @type {?} */
            this._initialTransform = undefined;

            /** @type {?} */
            this._rootElement = element;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Element to which the draggable's position will be constrained.
         * @template THIS
         * @this {THIS}
         * @param {?} boundaryElement
         * @return {THIS}
         */

      }, {
        key: "withBoundaryElement",
        value: function withBoundaryElement(boundaryElement) {
          var _this18 = this;

          /** @type {?} */
          this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;

          /** @type {?} */
          this._resizeSubscription.unsubscribe();

          if (boundaryElement) {
            /** @type {?} */
            this._resizeSubscription =
            /** @type {?} */
            this._viewportRuler.change(10).subscribe(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                _this18._containInsideBoundaryOnResize()
              );
            });
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Removes the dragging functionality from the DOM element.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
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

          this._boundaryElement = this._rootElement = this._placeholderTemplate = this._previewTemplate = this._anchor =
          /** @type {?} */
          null;
        }
        /**
         * Checks whether the element is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._rootElement.style.transform = this._initialTransform || '';
          this._activeTransform = {
            x: 0,
            y: 0
          };
          this._passiveTransform = {
            x: 0,
            y: 0
          };
        }
        /**
         * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
         * @param {?} handle Handle element that should be disabled.
         * @return {?}
         */

      }, {
        key: "disableHandle",
        value: function disableHandle(handle) {
          if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
          }
        }
        /**
         * Enables a handle, if it has been disabled.
         * @param {?} handle Handle element to be enabled.
         * @return {?}
         */

      }, {
        key: "enableHandle",
        value: function enableHandle(handle) {
          this._disabledHandles["delete"](handle);
        }
        /**
         * Sets the layout direction of the draggable item.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the container that the item is part of.
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "_withDropContainer",
        value: function _withDropContainer(container) {
          this._dropContainer = container;
        }
        /**
         * Gets the current position in pixels the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          /** @type {?} */
          var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
          return {
            x: position.x,
            y: position.y
          };
        }
        /**
         * Sets the current position in pixels the draggable outside of a drop container.
         * @template THIS
         * @this {THIS}
         * @param {?} value New position to be set.
         * @return {THIS}
         */

      }, {
        key: "setFreeDragPosition",
        value: function setFreeDragPosition(value) {
          /** @type {?} */
          this._activeTransform = {
            x: 0,
            y: 0
          };

          /** @type {?} */
          this._passiveTransform.x = value.x;

          /** @type {?} */
          this._passiveTransform.y = value.y;

          if (!
          /** @type {?} */
          this._dropContainer) {
            /** @type {?} */
            this._applyRootElementTransform(value.x, value.y);
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the item's sort order based on the last-known pointer position.
         * @return {?}
         */

      }, {
        key: "_sortFromLastPointerPosition",
        value: function _sortFromLastPointerPosition() {
          /** @type {?} */
          var position = this._pointerPositionAtLastDirectionChange;

          if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position));
          }
        }
        /**
         * Unsubscribes from the global subscriptions.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeSubscriptions",
        value: function _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe();

          this._pointerUpSubscription.unsubscribe();

          this._scrollSubscription.unsubscribe();
        }
        /**
         * Destroys the preview element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPreview",
        value: function _destroyPreview() {
          if (this._preview) {
            removeNode(this._preview);
          }

          if (this._previewRef) {
            this._previewRef.destroy();
          }

          this._preview = this._previewRef =
          /** @type {?} */
          null;
        }
        /**
         * Destroys the placeholder element and its ViewRef.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPlaceholder",
        value: function _destroyPlaceholder() {
          if (this._placeholder) {
            removeNode(this._placeholder);
          }

          if (this._placeholderRef) {
            this._placeholderRef.destroy();
          }

          this._placeholder = this._placeholderRef =
          /** @type {?} */
          null;
        }
        /**
         * Clears subscriptions and stops the dragging sequence.
         * @private
         * @param {?} event Browser event object that ended the sequence.
         * @return {?}
         */

      }, {
        key: "_endDragSequence",
        value: function _endDragSequence(event) {
          var _this19 = this;

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

          this.released.next({
            source: this
          });

          if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();

            this._animatePreviewToPlaceholder().then(
            /**
            * @return {?}
            */
            function () {
              _this19._cleanupDragArtifacts(event);

              _this19._cleanupCachedDimensions();

              _this19._dragDropRegistry.stopDragging(_this19);
            });
          } else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this19.ended.next({
                source: _this19,
                distance: _this19._getDragDistance(_this19._getPointerPositionOnPage(event))
              });
            });

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

      }, {
        key: "_startDragSequence",
        value: function _startDragSequence(event) {
          // Emit the event on the item before the one on the container.
          this.started.next({
            source: this
          });

          if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
          }

          this._toggleNativeDragInteractions();
          /** @type {?} */


          var dropContainer = this._dropContainer;

          if (dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */

            var parent =
            /** @type {?} */
            element.parentNode;
            /** @type {?} */

            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */


            var placeholder = this._placeholder = this._createPlaceholderElement();
            /** @type {?} */


            var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


            parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

            element.style.display = 'none';

            this._document.body.appendChild(parent.replaceChild(placeholder, element));

            getPreviewInsertionPoint(this._document).appendChild(preview);
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
          } else {
            this._initialContainer = this._initialIndex =
            /** @type {?} */
            undefined;
          } // Important to run after we've called `start` on the parent container
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

      }, {
        key: "_initializeDragSequence",
        value: function _initializeDragSequence(referenceElement, event) {
          var _this20 = this;

          // Always stop propagation for the event that initializes
          // the dragging sequence, in order to prevent it from potentially
          // starting another sequence for a draggable parent somewhere up the DOM tree.
          event.stopPropagation();
          /** @type {?} */

          var isDragging = this.isDragging();
          /** @type {?} */

          var isTouchSequence = isTouchEvent(event);
          /** @type {?} */

          var isAuxiliaryMouseButton = !isTouchSequence &&
          /** @type {?} */
          event.button !== 0;
          /** @type {?} */

          var rootElement = this._rootElement;
          /** @type {?} */

          var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
          // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
          // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
          // it's flaky and it fails if the user drags it away quickly. Also note that we only want
          // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
          // events from firing on touch devices.

          if (event.target &&
          /** @type {?} */
          event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
          } // Abort if the user is already dragging or is using a mouse button other than the primary one.


          if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
          } // If we've got handles, we need to disable the tap highlight on the entire root element,
          // otherwise iOS will still add it, even though all the drag interactions on the handle
          // are disabled.


          if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
          }

          this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
          // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

          this._removeSubscriptions();

          this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
          this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
          this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @param {?} scrollEvent
          * @return {?}
          */
          function (scrollEvent) {
            _this20._updateOnScroll(scrollEvent);
          });

          if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
          } // If we have a custom preview we can't know ahead of time how large it'll be so we position
          // it next to the cursor. The exception is when the consumer has opted into making the preview
          // the same size as the root element, in which case we do know the size.

          /** @type {?} */


          var previewTemplate = this._previewTemplate;
          this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
            x: 0,
            y: 0
          } : this._getPointerPositionInElement(referenceElement, event);
          /** @type {?} */

          var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);

          this._pointerDirectionDelta = {
            x: 0,
            y: 0
          };
          this._pointerPositionAtLastDirectionChange = {
            x: pointerPosition.x,
            y: pointerPosition.y
          };
          this._dragStartTime = Date.now();

          this._dragDropRegistry.startDragging(this, event);
        }
        /**
         * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_cleanupDragArtifacts",
        value: function _cleanupDragArtifacts(event) {
          var _this21 = this;

          // Restore the element's visibility and insert it at its old position in the DOM.
          // It's important that we maintain the position, because moving the element around in the DOM
          // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
          // while moving the existing elements in all other cases.
          this._rootElement.style.display = '';

          /** @type {?} */
          this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

          this._destroyPreview();

          this._destroyPlaceholder();

          this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container =
            /** @type {?} */
            _this21._dropContainer;
            /** @type {?} */

            var currentIndex = container.getItemIndex(_this21);
            /** @type {?} */

            var pointerPosition = _this21._getPointerPositionOnPage(event);
            /** @type {?} */


            var distance = _this21._getDragDistance(_this21._getPointerPositionOnPage(event));
            /** @type {?} */


            var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

            _this21.ended.next({
              source: _this21,
              distance: distance
            });

            _this21.dropped.next({
              item: _this21,
              currentIndex: currentIndex,
              previousIndex: _this21._initialIndex,
              container: container,
              previousContainer: _this21._initialContainer,
              isPointerOverContainer: isPointerOverContainer,
              distance: distance
            });

            container.drop(_this21, currentIndex, _this21._initialContainer, isPointerOverContainer, distance, _this21._initialIndex);
            _this21._dropContainer = _this21._initialContainer;
          });
        }
        /**
         * Updates the item's position in its drop container, or moves it
         * into a new one, depending on its current drag position.
         * @private
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "_updateActiveDropContainer",
        value: function _updateActiveDropContainer(_ref) {
          var _this22 = this;

          var x = _ref.x,
              y = _ref.y;

          // Drop container that draggable has been moved into.

          /** @type {?} */
          var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
          // initial container, check whether the it's over the initial container. This handles the
          // case where two containers are connected one way and the user tries to undo dragging an
          // item into a new container.


          if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
          }

          if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              // Notify the old container that the item has left.
              _this22.exited.next({
                item: _this22,
                container:
                /** @type {?} */
                _this22._dropContainer
              });

              /** @type {?} */
              _this22._dropContainer.exit(_this22); // Notify the new container that the item has entered.


              _this22._dropContainer =
              /** @type {?} */
              newContainer;

              _this22._dropContainer.enter(_this22, x, y, newContainer === _this22._initialContainer && // If we're re-entering the initial container and sorting is disabled,
              // put item the into its starting index to begin with.
              newContainer.sortingDisabled ? _this22._initialIndex : undefined);

              _this22.entered.next({
                item: _this22,
                container:
                /** @type {?} */
                newContainer,
                currentIndex:
                /** @type {?} */
                newContainer.getItemIndex(_this22)
              });
            });
          }

          /** @type {?} */
          this._dropContainer._startScrollingIfNecessary(x, y);

          /** @type {?} */
          this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

          this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
        }
        /**
         * Creates the element that will be rendered next to the user's pointer
         * and will be used as a preview of the element that is being dragged.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPreviewElement",
        value: function _createPreviewElement() {
          /** @type {?} */
          var previewConfig = this._previewTemplate;
          /** @type {?} */

          var previewClass = this.previewClass;
          /** @type {?} */

          var previewTemplate = previewConfig ? previewConfig.template : null;
          /** @type {?} */

          var preview;

          if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.

            /** @type {?} */
            var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            /** @type {?} */

            var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;

            if (previewConfig.matchSize) {
              matchElementSize(preview,
              /** @type {?} */
              rootRect);
            } else {
              preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
          } else {
            /** @type {?} */
            var element = this._rootElement;
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
            zIndex: "".concat(this._config.zIndex || 1000)
          });
          toggleNativeDragInteractions(preview, false);
          preview.classList.add('cdk-drag-preview');
          preview.setAttribute('dir', this._direction);

          if (previewClass) {
            if (Array.isArray(previewClass)) {
              previewClass.forEach(
              /**
              * @param {?} className
              * @return {?}
              */
              function (className) {
                return preview.classList.add(className);
              });
            } else {
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

      }, {
        key: "_animatePreviewToPlaceholder",
        value: function _animatePreviewToPlaceholder() {
          var _this23 = this;

          // If the user hasn't moved yet, the transitionend event won't fire.
          if (!this._hasMoved) {
            return Promise.resolve();
          }
          /** @type {?} */


          var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


          this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


          this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
          // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
          // apply its style, we take advantage of the available info to figure out whether we need to
          // bind the event in the first place.

          /** @type {?} */

          var duration = getTransformTransitionDurationInMs(this._preview);

          if (duration === 0) {
            return Promise.resolve();
          }

          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              /** @type {?} */
              var handler =
              /** @type {?} */

              /**
              * @param {?} event
              * @return {?}
              */
              function handler(event) {
                if (!event || event.target === _this23._preview && event.propertyName === 'transform') {
                  _this23._preview.removeEventListener('transitionend', handler);

                  resolve();
                  clearTimeout(timeout);
                }
              }; // If a transition is short enough, the browser might not fire the `transitionend` event.
              // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
              // fire if the transition hasn't completed when it was supposed to.

              /** @type {?} */


              var timeout = setTimeout(
              /** @type {?} */
              handler, duration * 1.5);

              _this23._preview.addEventListener('transitionend', handler);
            });
          });
        }
        /**
         * Creates an element that will be shown instead of the current element while dragging.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPlaceholderElement",
        value: function _createPlaceholderElement() {
          /** @type {?} */
          var placeholderConfig = this._placeholderTemplate;
          /** @type {?} */

          var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
          /** @type {?} */

          var placeholder;

          if (placeholderTemplate) {
            this._placeholderRef =
            /** @type {?} */
            placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate,
            /** @type {?} */
            placeholderConfig.context);

            this._placeholderRef.detectChanges();

            placeholder = getRootNode(this._placeholderRef, this._document);
          } else {
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

      }, {
        key: "_getPointerPositionInElement",
        value: function _getPointerPositionInElement(referenceElement, event) {
          /** @type {?} */
          var elementRect = this._rootElement.getBoundingClientRect();
          /** @type {?} */


          var handleElement = referenceElement === this._rootElement ? null : referenceElement;
          /** @type {?} */

          var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
          /** @type {?} */

          var point = isTouchEvent(event) ? event.targetTouches[0] : event;
          /** @type {?} */

          var scrollPosition = this._getViewportScrollPosition();
          /** @type {?} */


          var x = point.pageX - referenceRect.left - scrollPosition.left;
          /** @type {?} */

          var y = point.pageY - referenceRect.top - scrollPosition.top;
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

      }, {
        key: "_getPointerPositionOnPage",
        value: function _getPointerPositionOnPage(event) {
          // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.

          /** @type {?} */
          var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
          /** @type {?} */

          var scrollPosition = this._getViewportScrollPosition();

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

      }, {
        key: "_getConstrainedPointerPosition",
        value: function _getConstrainedPointerPosition(point) {
          /** @type {?} */
          var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
          /** @type {?} */

          var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

          if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
          } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
          }

          if (this._boundaryRect) {
            var _this$_pickupPosition = this._pickupPositionInElement,
                pickupX = _this$_pickupPosition.x,
                pickupY = _this$_pickupPosition.y;
            /** @type {?} */

            var boundaryRect = this._boundaryRect;
            /** @type {?} */

            var previewRect =
            /** @type {?} */
            this._previewRect;
            /** @type {?} */

            var minY = boundaryRect.top + pickupY;
            /** @type {?} */

            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */

            var minX = boundaryRect.left + pickupX;
            /** @type {?} */

            var maxX = boundaryRect.right - (previewRect.width - pickupX);
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

      }, {
        key: "_updatePointerDirectionDelta",
        value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
          var x = pointerPositionOnPage.x,
              y = pointerPositionOnPage.y;
          /** @type {?} */

          var delta = this._pointerDirectionDelta;
          /** @type {?} */

          var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

          /** @type {?} */

          var changeX = Math.abs(x - positionSinceLastChange.x);
          /** @type {?} */

          var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
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

      }, {
        key: "_toggleNativeDragInteractions",
        value: function _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) {
            return;
          }
          /** @type {?} */


          var shouldEnable = this._handles.length > 0 || !this.isDragging();

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

      }, {
        key: "_removeRootElementListeners",
        value: function _removeRootElementListeners(element) {
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

      }, {
        key: "_applyRootElementTransform",
        value: function _applyRootElementTransform(x, y) {
          /** @type {?} */
          var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
          // we don't want our own transforms to stack on top of each other.

          if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
          } // Preserve the previous `transform` value, if there was one. Note that we apply our own
          // transform before the user's, because things like rotation can affect which direction
          // the element will be translated towards.


          this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
        }
        /**
         * Gets the distance that the user has dragged during the current drag sequence.
         * @private
         * @param {?} currentPosition Current position of the user's pointer.
         * @return {?}
         */

      }, {
        key: "_getDragDistance",
        value: function _getDragDistance(currentPosition) {
          /** @type {?} */
          var pickupPosition = this._pickupPositionOnPage;

          if (pickupPosition) {
            return {
              x: currentPosition.x - pickupPosition.x,
              y: currentPosition.y - pickupPosition.y
            };
          }

          return {
            x: 0,
            y: 0
          };
        }
        /**
         * Cleans up any cached element dimensions that we don't need after dragging has stopped.
         * @private
         * @return {?}
         */

      }, {
        key: "_cleanupCachedDimensions",
        value: function _cleanupCachedDimensions() {
          this._boundaryRect = this._previewRect = undefined;

          this._parentPositions.clear();
        }
        /**
         * Checks whether the element is still inside its boundary after the viewport has been resized.
         * If not, the position is adjusted so that the element fits again.
         * @private
         * @return {?}
         */

      }, {
        key: "_containInsideBoundaryOnResize",
        value: function _containInsideBoundaryOnResize() {
          var _this$_passiveTransfo = this._passiveTransform,
              x = _this$_passiveTransfo.x,
              y = _this$_passiveTransfo.y;

          if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
            return;
          }
          /** @type {?} */


          var boundaryRect = this._boundaryElement.getBoundingClientRect();
          /** @type {?} */


          var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
          // different tab). Don't do anything in this case so we don't clear the user's position.


          if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
            return;
          }
          /** @type {?} */


          var leftOverflow = boundaryRect.left - elementRect.left;
          /** @type {?} */

          var rightOverflow = elementRect.right - boundaryRect.right;
          /** @type {?} */

          var topOverflow = boundaryRect.top - elementRect.top;
          /** @type {?} */

          var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
          // do much to make it fit so we just anchor it to the left.

          if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
              x += leftOverflow;
            }

            if (rightOverflow > 0) {
              x -= rightOverflow;
            }
          } else {
            x = 0;
          } // If the element has become taller than the boundary, we can't
          // do much to make it fit so we just anchor it to the top.


          if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
              y += topOverflow;
            }

            if (bottomOverflow > 0) {
              y -= bottomOverflow;
            }
          } else {
            y = 0;
          }

          if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({
              y: y,
              x: x
            });
          }
        }
        /**
         * Gets the drag start delay, based on the event type.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getDragStartDelay",
        value: function _getDragStartDelay(event) {
          /** @type {?} */
          var value = this.dragStartDelay;

          if (typeof value === 'number') {
            return value;
          } else if (isTouchEvent(event)) {
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

      }, {
        key: "_updateOnScroll",
        value: function _updateOnScroll(event) {
          /** @type {?} */
          var scrollDifference = this._parentPositions.handleScroll(event); // ClientRect dimensions are based on the page's scroll position so
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

      }, {
        key: "_getViewportScrollPosition",
        value: function _getViewportScrollPosition() {
          /** @type {?} */
          var cachedPosition = this._parentPositions.positions.get(this._document);

          return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._toggleNativeDragInteractions();
          }
        }
      }]);

      return DragRef;
    }();

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
      return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
    }
    /**
     * Creates a deep clone of an element.
     * @param {?} node
     * @return {?}
     */


    function deepCloneNode(node) {
      /** @type {?} */
      var clone =
      /** @type {?} */
      node.cloneNode(true);
      /** @type {?} */

      var descendantsWithId = clone.querySelectorAll('[id]');
      /** @type {?} */

      var descendantCanvases = node.querySelectorAll('canvas'); // Remove the `id` to avoid having multiple elements with the same id on the page.

      clone.removeAttribute('id');

      for (var i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
      } // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
      // We match up the cloned canvas to their sources using their index in the DOM.


      if (descendantCanvases.length) {
        /** @type {?} */
        var cloneCanvases = clone.querySelectorAll('canvas');

        for (var _i2 = 0; _i2 < descendantCanvases.length; _i2++) {
          /** @type {?} */
          var correspondingCloneContext = cloneCanvases[_i2].getContext('2d');

          if (correspondingCloneContext) {
            correspondingCloneContext.drawImage(descendantCanvases[_i2], 0, 0);
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
      return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
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
      var rootNodes = viewRef.rootNodes;

      if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return (
          /** @type {?} */
          rootNodes[0]
        );
      }
      /** @type {?} */


      var wrapper = _document.createElement('div');

      rootNodes.forEach(
      /**
      * @param {?} node
      * @return {?}
      */
      function (node) {
        return wrapper.appendChild(node);
      });
      return wrapper;
    }
    /**
     * Matches the target element's size to the source's size.
     * @param {?} target Element that needs to be resized.
     * @param {?} sourceRect Dimensions of the source element.
     * @return {?}
     */


    function matchElementSize(target, sourceRect) {
      target.style.width = "".concat(sourceRect.width, "px");
      target.style.height = "".concat(sourceRect.height, "px");
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
      var from = clamp$1(fromIndex, array.length - 1);
      /** @type {?} */

      var to = clamp$1(toIndex, array.length - 1);

      if (from === to) {
        return;
      }
      /** @type {?} */


      var target = array[from];
      /** @type {?} */

      var delta = to < from ? -1 : 1;

      for (var i = from; i !== to; i += delta) {
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
      var from = clamp$1(currentIndex, currentArray.length - 1);
      /** @type {?} */

      var to = clamp$1(targetIndex, targetArray.length);

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
      var to = clamp$1(targetIndex, targetArray.length);

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


    var DROP_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
     * viewport. The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var SCROLL_PROXIMITY_THRESHOLD = 0.05;
    /**
     * Number of pixels to scroll for each frame when auto-scrolling an element.
     * The value comes from trying it out manually until it feels right.
     * @type {?}
     */

    var AUTO_SCROLL_STEP = 2;
    /**
     * Entry in the position cache for draggable items.
     * \@docs-private
     * @record
     */

    function CachedItemPosition() {}

    if (false) {}
    /** @enum {number} */


    var AutoScrollVerticalDirection = {
      NONE: 0,
      UP: 1,
      DOWN: 2
    };
    /** @enum {number} */

    var AutoScrollHorizontalDirection = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2
    };
    /**
     * Internal compile-time-only representation of a `DropListRef`.
     * Used to avoid circular import issues between the `DropListRef` and the `DragRef`.
     * \@docs-private
     * @record
     */

    function DropListRefInternal() {}
    /**
     * Reference to a drop list. Used to manipulate or dispose of the container.
     * @template T
     */


    var DropListRef = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} _dragDropRegistry
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       */
      function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        var _this24 = this;

        _classCallCheck(this, DropListRef);

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

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
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

        this._previousSwap = {
          drag:
          /** @type {?} */
          null,
          delta: 0
        };
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

        this._verticalScrollDirection = 0
        /* NONE */
        ;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */

        this._horizontalScrollDirection = 0
        /* NONE */
        ;
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

        this._startScrollInterval =
        /**
        * @return {?}
        */
        function () {
          _this24._stopScrolling();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this24._stopScrollTimers)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var node = _this24._scrollNode;

            if (_this24._verticalScrollDirection === 1
            /* UP */
            ) {
                incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this24._verticalScrollDirection === 2
            /* DOWN */
            ) {
                incrementVerticalScroll(node, AUTO_SCROLL_STEP);
              }

            if (_this24._horizontalScrollDirection === 1
            /* LEFT */
            ) {
                incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
              } else if (_this24._horizontalScrollDirection === 2
            /* RIGHT */
            ) {
                incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
              }
          });
        };

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


      _createClass(DropListRef, [{
        key: "dispose",
        value: function dispose() {
          this._stopScrolling();

          this._stopScrollTimers.complete();

          this._viewportScrollSubscription.unsubscribe();

          this.beforeStarted.complete();
          this.entered.complete();
          this.exited.complete();
          this.dropped.complete();
          this.sorted.complete();

          this._activeSiblings.clear();

          this._scrollNode =
          /** @type {?} */
          null;

          this._parentPositions.clear();

          this._dragDropRegistry.removeDropContainer(this);
        }
        /**
         * Whether an item from this list is currently being dragged.
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging() {
          return this._isDragging;
        }
        /**
         * Starts dragging an item.
         * @return {?}
         */

      }, {
        key: "start",
        value: function start() {
          var _this25 = this;

          /** @type {?} */
          var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
          this.beforeStarted.next();
          this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
          // scrolling. The browser seems to round the value based on the snapping points which means
          // that we can't increment/decrement the scroll position.

          this._initialScrollSnap = styles.msScrollSnapType ||
          /** @type {?} */
          styles.scrollSnapType || '';

          /** @type {?} */
          styles.scrollSnapType = styles.msScrollSnapType = 'none';

          this._cacheItems();

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._startReceiving(_this25);
          });

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

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY, index) {
          this.start(); // If sorting is disabled, we want the item to return to its starting
          // position if the user is returning it to its initial container.

          /** @type {?} */

          var newIndex;

          if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

            if (newIndex === -1) {
              // We use the coordinates of where the item entered the drop
              // zone to figure out at which index it should be inserted.
              newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
          } else {
            newIndex = index;
          }
          /** @type {?} */


          var activeDraggables = this._activeDraggables;
          /** @type {?} */

          var currentIndex = activeDraggables.indexOf(item);
          /** @type {?} */

          var placeholder = item.getPlaceholderElement();
          /** @type {?} */

          var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
          // it means that we're trying to restore the item to its initial position. In this
          // case we should use the next item from the list as the reference.

          if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
          } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
          // into another container and back again), we have to ensure that it isn't duplicated.


          if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
          } // Don't use items that are being dragged as a reference, because
          // their element has been moved down to the bottom of the body.


          if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();

            /** @type {?} */
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
          } else {
            /** @type {?} */
            var _element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

            if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
              _element.insertBefore(placeholder, activeDraggables[0].getRootElement());

              activeDraggables.unshift(item);
            } else {
              _element.appendChild(placeholder);

              activeDraggables.push(item);
            }
          } // The transform needs to be cleared so it doesn't throw off the measurements.


          placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
          // but we need to refresh them since the amount of items has changed and also parent rects.

          this._cacheItemPositions();

          this._cacheParentPositions();

          this.entered.next({
            item: item,
            container: this,
            currentIndex: this.getItemIndex(item)
          });
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._reset();

          this.exited.next({
            item: item,
            container: this
          });
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

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
          this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


          if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
          }

          this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousIndex,
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer,
            distance: distance
          });
        }
        /**
         * Sets the draggable items that are a part of this list.
         * @template THIS
         * @this {THIS}
         * @param {?} items Items that are a part of this list.
         * @return {THIS}
         */

      }, {
        key: "withItems",
        value: function withItems(items) {
          var _this26 = this;

          /** @type {?} */
          var previousItems =
          /** @type {?} */
          this._draggables;

          /** @type {?} */
          this._draggables = items;
          items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._withDropContainer(
            /** @type {?} */
            _this26);
          });

          if (
          /** @type {?} */
          this.isDragging()) {
            /** @type {?} */
            var draggedItems = previousItems.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.isDragging();
            }); // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.

            if (draggedItems.every(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return items.indexOf(item) === -1;
            })) {
              /** @type {?} */
              this._reset();
            } else {
              /** @type {?} */
              this._cacheItems();
            }
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction of the drop list.
         * @template THIS
         * @this {THIS}
         * @param {?} direction
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(direction) {
          /** @type {?} */
          this._direction = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the containers that are connected to this one. When two or more containers are
         * connected, the user will be allowed to transfer items between them.
         * @template THIS
         * @this {THIS}
         * @param {?} connectedTo Other containers that the current containers should be connected to.
         * @return {THIS}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(_connectedTo) {
          /** @type {?} */
          this._siblings = _connectedTo.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the orientation of the container.
         * @template THIS
         * @this {THIS}
         * @param {?} orientation New orientation for the container.
         * @return {THIS}
         */

      }, {
        key: "withOrientation",
        value: function withOrientation(orientation) {
          /** @type {?} */
          this._orientation = orientation;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets which parent elements are can be scrolled while the user is dragging.
         * @template THIS
         * @this {THIS}
         * @param {?} elements Elements that can be scrolled.
         * @return {THIS}
         */

      }, {
        key: "withScrollableParents",
        value: function withScrollableParents(elements) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(
          /** @type {?} */
          this.element); // We always allow the current element to be scrollable
          // so we need to ensure that it's in the array.

          /** @type {?} */
          this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(_toConsumableArray(elements)) : elements.slice();
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the scrollable parents that are registered with this drop container.
         * @return {?}
         */

      }, {
        key: "getScrollableParents",
        value: function getScrollableParents() {
          return this._scrollableElements;
        }
        /**
         * Figures out the index of an item in the container.
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          if (!this._isDragging) {
            return this._draggables.indexOf(item);
          } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
          // The rest of the logic still stands no matter what orientation we're in, however
          // we need to invert the array when determining the index.

          /** @type {?} */


          var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
          return findIndex(items,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
        }
        /**
         * Whether the list is able to receive the item that
         * is currently being dragged inside a connected drop list.
         * @return {?}
         */

      }, {
        key: "isReceiving",
        value: function isReceiving() {
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

      }, {
        key: "_sortItem",
        value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
          // Don't sort the item if sorting is disabled or it's out of range.
          if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
          }
          /** @type {?} */


          var siblings = this._itemPositions;
          /** @type {?} */

          var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

          if (newIndex === -1 && siblings.length > 0) {
            return;
          }
          /** @type {?} */


          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentIndex = findIndex(siblings,
          /**
          * @param {?} currentItem
          * @return {?}
          */
          function (currentItem) {
            return currentItem.drag === item;
          });
          /** @type {?} */

          var siblingAtNewPosition = siblings[newIndex];
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var newPosition = siblingAtNewPosition.clientRect;
          /** @type {?} */

          var delta = currentIndex > newIndex ? 1 : -1;
          this._previousSwap.drag = siblingAtNewPosition.drag;
          this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y; // How many pixels the item's placeholder should be offset.

          /** @type {?} */

          var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.

          /** @type {?} */


          var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
          // We use this to check whether an item has been moved as a result of the sorting.

          /** @type {?} */


          var oldOrder = siblings.slice(); // Shuffle the array in place.

          moveItemInArray(siblings, currentIndex, newIndex);
          this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
          });
          siblings.forEach(
          /**
          * @param {?} sibling
          * @param {?} index
          * @return {?}
          */
          function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
              return;
            }
            /** @type {?} */


            var isDraggedItem = sibling.drag === item;
            /** @type {?} */

            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */

            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

            sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.

            if (isHorizontal) {
              // Round the transforms since some browsers will
              // blur the elements, for sub-pixel transforms.
              elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
              adjustClientRect(sibling.clientRect, 0, offset);
            } else {
              elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
              adjustClientRect(sibling.clientRect, offset, 0);
            }
          });
        }
        /**
         * Checks whether the user's pointer is close to the edges of either the
         * viewport or the drop list and starts the auto-scroll sequence.
         * @param {?} pointerX User's pointer position along the x axis.
         * @param {?} pointerY User's pointer position along the y axis.
         * @return {?}
         */

      }, {
        key: "_startScrollingIfNecessary",
        value: function _startScrollingIfNecessary(pointerX, pointerY) {
          var _this27 = this;

          if (this.autoScrollDisabled) {
            return;
          }
          /** @type {?} */


          var scrollNode;
          /** @type {?} */

          var verticalScrollDirection = 0
          /* NONE */
          ;
          /** @type {?} */

          var horizontalScrollDirection = 0
          /* NONE */
          ; // Check whether we should start scrolling any of the parent containers.

          this._parentPositions.positions.forEach(
          /**
          * @param {?} position
          * @param {?} element
          * @return {?}
          */
          function (position, element) {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === _this27._document || !position.clientRect || scrollNode) {
              return;
            }

            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
              var _getElementScrollDire = getElementScrollDirections(
              /** @type {?} */
              element, position.clientRect, pointerX, pointerY);

              var _getElementScrollDire2 = _slicedToArray(_getElementScrollDire, 2);

              verticalScrollDirection = _getElementScrollDire2[0];
              horizontalScrollDirection = _getElementScrollDire2[1];

              if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode =
                /** @type {?} */
                element;
              }
            }
          }); // Otherwise check if we can start scrolling the viewport.


          if (!verticalScrollDirection && !horizontalScrollDirection) {
            var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
                width = _this$_viewportRuler$.width,
                height = _this$_viewportRuler$.height;
            /** @type {?} */


            var clientRect = {
              width: width,
              height: height,
              top: 0,
              right: width,
              bottom: height,
              left: 0
            };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
          }

          if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;

            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
              this._ngZone.runOutsideAngular(this._startScrollInterval);
            } else {
              this._stopScrolling();
            }
          }
        }
        /**
         * Stops any currently-running auto-scroll sequences.
         * @return {?}
         */

      }, {
        key: "_stopScrolling",
        value: function _stopScrolling() {
          this._stopScrollTimers.next();
        }
        /**
         * Caches the positions of the configured scrollable parents.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheParentPositions",
        value: function _cacheParentPositions() {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);

          this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
          // so we can take advantage of the cached `ClientRect`.


          this._clientRect =
          /** @type {?} */

          /** @type {?} */
          this._parentPositions.positions.get(element).clientRect;
        }
        /**
         * Refreshes the position cache of the items and sibling containers.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItemPositions",
        value: function _cacheItemPositions() {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          this._itemPositions = this._activeDraggables.map(
          /**
          * @param {?} drag
          * @return {?}
          */
          function (drag) {
            /** @type {?} */
            var elementToMeasure = drag.getVisibleElement();
            return {
              drag: drag,
              offset: 0,
              clientRect: getMutableClientRect(elementToMeasure)
            };
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
          });
        }
        /**
         * Resets the container to its initial state.
         * @private
         * @return {?}
         */

      }, {
        key: "_reset",
        value: function _reset() {
          var _this28 = this;

          this._isDragging = false;
          /** @type {?} */

          var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;

          /** @type {?} */
          styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

          this._activeDraggables.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var rootElement = item.getRootElement();

            if (rootElement) {
              rootElement.style.transform = '';
            }
          });

          this._siblings.forEach(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._stopReceiving(_this28);
          });

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

      }, {
        key: "_getSiblingOffsetPx",
        value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var currentPosition = siblings[currentIndex].clientRect;
          /** @type {?} */

          var immediateSibling = siblings[currentIndex + delta * -1];
          /** @type {?} */

          var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

          if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */

            var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.

            if (delta === -1) {
              siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            } else {
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

      }, {
        key: "_getItemOffsetPx",
        value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          /** @type {?} */

          var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

          if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
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

      }, {
        key: "_shouldEnterAsFirstChild",
        value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
          if (!this._activeDraggables.length) {
            return false;
          }
          /** @type {?} */


          var itemPositions = this._itemPositions;
          /** @type {?} */

          var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
          // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

          /** @type {?} */

          var reversed = itemPositions[0].drag !== this._activeDraggables[0];

          if (reversed) {
            /** @type {?} */
            var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
          } else {
            /** @type {?} */
            var firstItemRect = itemPositions[0].clientRect;
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

      }, {
        key: "_getItemIndexFromPointerPosition",
        value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
          var _this29 = this;

          /** @type {?} */
          var isHorizontal = this._orientation === 'horizontal';
          return findIndex(this._itemPositions,
          /**
          * @param {?} __0
          * @param {?} _
          * @param {?} array
          * @return {?}
          */
          function (_ref2, _, array) {
            var drag = _ref2.drag,
                clientRect = _ref2.clientRect;

            if (drag === item) {
              // If there's only one item left in the container, it must be
              // the dragged item itself so we use it as a reference.
              return array.length < 2;
            }

            if (delta) {
              /** @type {?} */
              var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, and they didn't change
              // the direction in which they're dragging, we don't consider it a direction swap.

              if (drag === _this29._previousSwap.drag && direction === _this29._previousSwap.delta) {
                return false;
              }
            }

            return isHorizontal ? // Round these down since most browsers report client rects with
            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
            pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
          });
        }
        /**
         * Caches the current items in the list and their positions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheItems",
        value: function _cacheItems() {
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

      }, {
        key: "_isOverContainer",
        value: function _isOverContainer(x, y) {
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

      }, {
        key: "_getSiblingContainerFromPosition",
        value: function _getSiblingContainerFromPosition(item, x, y) {
          return this._siblings.find(
          /**
          * @param {?} sibling
          * @return {?}
          */
          function (sibling) {
            return sibling._canReceive(item, x, y);
          });
        }
        /**
         * Checks whether the drop list can receive the passed-in item.
         * @param {?} item Item that is being dragged into the list.
         * @param {?} x Position of the item along the X axis.
         * @param {?} y Position of the item along the Y axis.
         * @return {?}
         */

      }, {
        key: "_canReceive",
        value: function _canReceive(item, x, y) {
          if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
          }
          /** @type {?} */


          var elementFromPoint =
          /** @type {?} */
          this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
          // the client rect is probably scrolled out of the view.


          if (!elementFromPoint) {
            return false;
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
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

      }, {
        key: "_startReceiving",
        value: function _startReceiving(sibling) {
          /** @type {?} */
          var activeSiblings = this._activeSiblings;

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

      }, {
        key: "_stopReceiving",
        value: function _stopReceiving(sibling) {
          this._activeSiblings["delete"](sibling);

          this._viewportScrollSubscription.unsubscribe();
        }
        /**
         * Starts listening to scroll events on the viewport.
         * Used for updating the internal state of the list.
         * @private
         * @return {?}
         */

      }, {
        key: "_listenToScrollEvents",
        value: function _listenToScrollEvents() {
          var _this30 = this;

          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (_this30.isDragging()) {
              /** @type {?} */
              var scrollDifference = _this30._parentPositions.handleScroll(event);

              if (scrollDifference) {
                // Since we know the amount that the user has scrolled we can shift all of the
                // client rectangles ourselves. This is cheaper than re-measuring everything and
                // we can avoid inconsistent behavior where we might be measuring the element before
                // its position has changed.
                _this30._itemPositions.forEach(
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref3) {
                  var clientRect = _ref3.clientRect;
                  adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                }); // We need two loops for this, because we want all of the cached
                // positions to be up-to-date before we re-sort the item.


                _this30._itemPositions.forEach(
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref4) {
                  var drag = _ref4.drag;

                  if (_this30._dragDropRegistry.isDragging(drag)) {
                    // We need to re-sort the item manually, because the pointer move
                    // events won't be dispatched while the user is scrolling.
                    drag._sortFromLastPointerPosition();
                  }
                });
              }
            } else if (_this30.isReceiving()) {
              _this30._cacheParentPositions();
            }
          });
        }
        /**
         * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
         * than saving it in property directly on init, because we want to resolve it as late as possible
         * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
         * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
         * @private
         * @return {?}
         */

      }, {
        key: "_getShadowRoot",
        value: function _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            /** @type {?} */
            var shadowRoot =
            /** @type {?} */
            Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
          }

          return this._cachedShadowRoot;
        }
      }]);

      return DropListRef;
    }();

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
      for (var i = 0; i < array.length; i++) {
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
        /** @type {?} */
        node.scrollBy(0, amount);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollTop += amount;
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
        /** @type {?} */
        node.scrollBy(amount, 0);
      } else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.

        /** @type {?} */
        node.scrollLeft += amount;
      }
    }
    /**
     * Gets whether the vertical auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerY Position of the user's pointer along the y axis.
     * @return {?}
     */


    function getVerticalScrollDirection(clientRect, pointerY) {
      var top = clientRect.top,
          bottom = clientRect.bottom,
          height = clientRect.height;
      /** @type {?} */

      var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1
        /* UP */
        ;
      } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2
        /* DOWN */
        ;
      }

      return 0
      /* NONE */
      ;
    }
    /**
     * Gets whether the horizontal auto-scroll direction of a node.
     * @param {?} clientRect Dimensions of the node.
     * @param {?} pointerX Position of the user's pointer along the x axis.
     * @return {?}
     */


    function getHorizontalScrollDirection(clientRect, pointerX) {
      var left = clientRect.left,
          right = clientRect.right,
          width = clientRect.width;
      /** @type {?} */

      var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

      if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1
        /* LEFT */
        ;
      } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2
        /* RIGHT */
        ;
      }

      return 0
      /* NONE */
      ;
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
      var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
      /** @type {?} */

      var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
      /** @type {?} */

      var verticalScrollDirection = 0
      /* NONE */
      ;
      /** @type {?} */

      var horizontalScrollDirection = 0
      /* NONE */
      ; // Note that we here we do some extra checks for whether the element is actually scrollable in
      // a certain direction and we only assign the scroll direction if it is. We do this so that we
      // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
      // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

      if (computedVertical) {
        /** @type {?} */
        var scrollTop = element.scrollTop;

        if (computedVertical === 1
        /* UP */
        ) {
            if (scrollTop > 0) {
              verticalScrollDirection = 1
              /* UP */
              ;
            }
          } else if (element.scrollHeight - scrollTop > element.clientHeight) {
          verticalScrollDirection = 2
          /* DOWN */
          ;
        }
      }

      if (computedHorizontal) {
        /** @type {?} */
        var scrollLeft = element.scrollLeft;

        if (computedHorizontal === 1
        /* LEFT */
        ) {
            if (scrollLeft > 0) {
              horizontalScrollDirection = 1
              /* LEFT */
              ;
            }
          } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
          horizontalScrollDirection = 2
          /* RIGHT */
          ;
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


    var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
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

    var DragDropRegistry = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _document
       */
      function DragDropRegistry(_ngZone, _document) {
        var _this31 = this;

        _classCallCheck(this, DragDropRegistry);

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

        this._preventDefaultWhileDragging =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this31._activeDragInstances.size) {
            event.preventDefault();
          }
        };

        this._document = _document;
      }
      /**
       * Adds a drop container to the registry.
       * @param {?} drop
       * @return {?}
       */


      _createClass(DragDropRegistry, [{
        key: "registerDropContainer",
        value: function registerDropContainer(drop) {
          if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
          }
        }
        /**
         * Adds a drag item instance to the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "registerDragItem",
        value: function registerDragItem(drag) {
          var _this32 = this;

          this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
          // won't preventDefault on a dynamically-added `touchmove` listener.
          // See https://bugs.webkit.org/show_bug.cgi?id=184250.


          if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The event handler has to be explicitly active,
              // because newer browsers make it passive by default.
              _this32._document.addEventListener('touchmove', _this32._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
          }
        }
        /**
         * Removes a drop container from the registry.
         * @param {?} drop
         * @return {?}
         */

      }, {
        key: "removeDropContainer",
        value: function removeDropContainer(drop) {
          this._dropInstances["delete"](drop);
        }
        /**
         * Removes a drag item instance from the registry.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "removeDragItem",
        value: function removeDragItem(drag) {
          this._dragInstances["delete"](drag);

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

      }, {
        key: "startDragging",
        value: function startDragging(drag, event) {
          var _this33 = this;

          // Do not process the same drag twice to avoid memory leaks and redundant listeners
          if (this._activeDragInstances.has(drag)) {
            return;
          }

          this._activeDragInstances.add(drag);

          if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var _isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */


            var moveEvent = _isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */

            var upEvent = _isTouchEvent ? 'touchend' : 'mouseup'; // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.

            this._globalListeners.set(moveEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this33.pointerMove.next(
                /** @type {?} */
                e);
              },
              options: activeCapturingEventOptions
            }).set(upEvent, {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this33.pointerUp.next(
                /** @type {?} */
                e);
              },
              options: true
            }).set('scroll', {
              handler:
              /**
              * @param {?} e
              * @return {?}
              */
              function handler(e) {
                return _this33.scroll.next(e);
              },
              // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
              // the document. See https://github.com/angular/components/issues/17144.
              options: true
            }) // Preventing the default action on `mousemove` isn't enough to disable text selection
            // on Safari so we need to prevent the selection event as well. Alternatively this can
            // be done by setting `user-select: none` on the `body`, however it has causes a style
            // recalculation which can be expensive on pages with a lot of elements.
            .set('selectstart', {
              handler: this._preventDefaultWhileDragging,
              options: activeCapturingEventOptions
            });

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this33._globalListeners.forEach(
              /**
              * @param {?} config
              * @param {?} name
              * @return {?}
              */
              function (config, name) {
                _this33._document.addEventListener(name, config.handler, config.options);
              });
            });
          }
        }
        /**
         * Stops dragging a drag item instance.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "stopDragging",
        value: function stopDragging(drag) {
          this._activeDragInstances["delete"](drag);

          if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
          }
        }
        /**
         * Gets whether a drag item instance is currently being dragged.
         * @param {?} drag
         * @return {?}
         */

      }, {
        key: "isDragging",
        value: function isDragging(drag) {
          return this._activeDragInstances.has(drag);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this34 = this;

          this._dragInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this34.removeDragItem(instance);
          });

          this._dropInstances.forEach(
          /**
          * @param {?} instance
          * @return {?}
          */
          function (instance) {
            return _this34.removeDropContainer(instance);
          });

          this._clearGlobalListeners();

          this.pointerMove.complete();
          this.pointerUp.complete();
        }
        /**
         * Clears out the global event listeners from the `document`.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearGlobalListeners",
        value: function _clearGlobalListeners() {
          var _this35 = this;

          this._globalListeners.forEach(
          /**
          * @param {?} config
          * @param {?} name
          * @return {?}
          */
          function (config, name) {
            _this35._document.removeEventListener(name, config.handler, config.options);
          });

          this._globalListeners.clear();
        }
      }]);

      return DragDropRegistry;
    }();

    DragDropRegistry.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DragDropRegistry.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DragDropRegistry_Factory() {
        return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: DragDropRegistry,
      providedIn: "root"
    });

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


    var DEFAULT_CONFIG = {
      dragStartThreshold: 5,
      pointerDirectionChangeThreshold: 5
    };
    /**
     * Service that allows for drag-and-drop functionality to be attached to DOM elements.
     */

    var DragDrop = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?} _dragDropRegistry
       */
      function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        _classCallCheck(this, DragDrop);

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


      _createClass(DragDrop, [{
        key: "createDrag",
        value: function createDrag(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
          return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
        }
        /**
         * Turns an element into a drop list.
         * @template T
         * @param {?} element Element to which to attach the drop list functionality.
         * @return {?}
         */

      }, {
        key: "createDropList",
        value: function createDropList(element) {
          return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
        }
      }]);

      return DragDrop;
    }();

    DragDrop.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DragDrop.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]
      }, {
        type: DragDropRegistry
      }];
    };
    /** @nocollapse */


    DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function DragDrop_Factory() {
        return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry));
      },
      token: DragDrop,
      providedIn: "root"
    });

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


    function CdkDragStart() {}

    if (false) {}
    /**
     * Event emitted when the user releases an item, before any animations have started.
     * @record
     * @template T
     */


    function CdkDragRelease() {}

    if (false) {}
    /**
     * Event emitted when the user stops dragging a draggable.
     * @record
     * @template T
     */


    function CdkDragEnd() {}

    if (false) {}
    /**
     * Event emitted when the user moves an item into a new drop container.
     * @record
     * @template T, I
     */


    function CdkDragEnter() {}

    if (false) {}
    /**
     * Event emitted when the user removes an item from a
     * drop container by moving it into another one.
     * @record
     * @template T, I
     */


    function CdkDragExit() {}

    if (false) {}
    /**
     * Event emitted when the user drops a draggable item inside a drop container.
     * @record
     * @template T, O
     */


    function CdkDragDrop() {}

    if (false) {}
    /**
     * Event emitted as the user is dragging a draggable item.
     * @record
     * @template T
     */


    function CdkDragMove() {}

    if (false) {}
    /**
     * Event emitted when the user swaps the position of two drag items.
     * @record
     * @template T, I
     */


    function CdkDragSortEvent() {}

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


    var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/directives/drag-handle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Handle that can be used to drag and CdkDrag instance.
     */

    var CdkDragHandle = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?=} parentDrag
       */
      function CdkDragHandle(element, parentDrag) {
        _classCallCheck(this, CdkDragHandle);

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


      _createClass(CdkDragHandle, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

          this._stateChanges.next(this);
        }
      }]);

      return CdkDragHandle;
    }();

    CdkDragHandle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkDragHandle]',
        host: {
          'class': 'cdk-drag-handle'
        }
      }]
    }];
    /** @nocollapse */

    CdkDragHandle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_PARENT]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    CdkDragHandle.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragHandleDisabled']
      }]
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


    var CdkDragPlaceholder =
    /**
     * @param {?} templateRef
     */
    function CdkDragPlaceholder(templateRef) {
      _classCallCheck(this, CdkDragPlaceholder);

      this.templateRef = templateRef;
    };

    CdkDragPlaceholder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[cdkDragPlaceholder]'
      }]
    }];
    /** @nocollapse */

    CdkDragPlaceholder.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    CdkDragPlaceholder.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
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


    var CdkDragPreview = /*#__PURE__*/function () {
      /**
       * @param {?} templateRef
       */
      function CdkDragPreview(templateRef) {
        _classCallCheck(this, CdkDragPreview);

        this.templateRef = templateRef;
        this._matchSize = false;
      }
      /**
       * Whether the preview should preserve the same size as the item that is being dragged.
       * @return {?}
       */


      _createClass(CdkDragPreview, [{
        key: "matchSize",
        get: function get() {
          return this._matchSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDragPreview;
    }();

    CdkDragPreview.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[cdkDragPreview]'
      }]
    }];
    /** @nocollapse */

    CdkDragPreview.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    CdkDragPreview.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      matchSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
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


    var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');
    /**
     * Object that can be used to configure the drag
     * items and drop lists within a module or a component.
     * @record
     */

    function DragDropConfig() {}

    if (false) {}
    /**
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 10.0.0
     * \@docs-private
     * @return {?}
     */


    function CDK_DRAG_CONFIG_FACTORY() {
      return {
        dragStartThreshold: 5,
        pointerDirectionChangeThreshold: 5
      };
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


    var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DROP_LIST');
    /**
     * Element that can be moved inside a CdkDropList container.
     * @template T
     */

    var CdkDrag = /*#__PURE__*/function () {
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
      function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        var _this36 = this;

        _classCallCheck(this, CdkDrag);

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

        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this36._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} movedEvent
          * @return {?}
          */
          function (movedEvent) {
            return {
              source: _this36,
              pointerPosition: movedEvent.pointerPosition,
              event: movedEvent.event,
              delta: movedEvent.delta,
              distance: movedEvent.distance
            };
          })).subscribe(observer);

          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
            }
          );
        });
        this._dragRef = dragDrop.createDrag(element, {
          dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
          pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
          zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;

        if (config) {
          this._assignDefaults(config);
        } // Note that usually the container is assigned when the drop list is picks up the item, but in
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


      _createClass(CdkDrag, [{
        key: "getPlaceholderElement",

        /**
         * Returns the element that is being used as a placeholder
         * while the current element is being dragged.
         * @return {?}
         */
        value: function getPlaceholderElement() {
          return this._dragRef.getPlaceholderElement();
        }
        /**
         * Returns the root draggable element.
         * @return {?}
         */

      }, {
        key: "getRootElement",
        value: function getRootElement() {
          return this._dragRef.getRootElement();
        }
        /**
         * Resets a standalone drag item to its initial position.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._dragRef.reset();
        }
        /**
         * Gets the pixel coordinates of the draggable outside of a drop container.
         * @return {?}
         */

      }, {
        key: "getFreeDragPosition",
        value: function getFreeDragPosition() {
          return this._dragRef.getFreeDragPosition();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this37 = this;

          // We need to wait for the zone to stabilize, in order for the reference
          // element to be in the proper place in the DOM. This is mostly relevant
          // for draggable elements inside portals since they get stamped out in
          // their original DOM position and then they get transferred to the portal.
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this37._updateRootElement(); // Listen for any newly-added handles.


            _this37._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(_this37._handles), // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              /** @type {?} */
              var childHandleElements = handles.filter(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle._parentDrag === _this37;
              }).map(
              /**
              * @param {?} handle
              * @return {?}
              */
              function (handle) {
                return handle.element;
              });

              _this37._dragRef.withHandles(childHandleElements);
            }), // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(
            /**
            * @param {?} handles
            * @return {?}
            */
            function (handles) {
              return (
                /** @type {?} */
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(handles.map(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                })))
              );
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this37._destroyed)).subscribe(
            /**
            * @param {?} handleInstance
            * @return {?}
            */
            function (handleInstance) {
              // Enabled/disable the handle that changed in the DragRef.

              /** @type {?} */
              var dragRef = _this37._dragRef;
              /** @type {?} */

              var handle = handleInstance.element.nativeElement;
              handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });

            if (_this37.freeDragPosition) {
              _this37._dragRef.setFreeDragPosition(_this37.freeDragPosition);
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var rootSelectorChange = changes['rootElementSelector'];
          /** @type {?} */

          var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
          // handled in `ngAfterViewInit` where it needs to be deferred.

          if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
          } // Skip the first change since it's being handled in `ngAfterViewInit`.


          if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
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

      }, {
        key: "_updateRootElement",
        value: function _updateRootElement() {
          /** @type {?} */
          var element = this.element.nativeElement;
          /** @type {?} */

          var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

          if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
          }

          this._dragRef.withRootElement(rootElement || element);
        }
        /**
         * Gets the boundary element, based on the `boundaryElement` value.
         * @private
         * @return {?}
         */

      }, {
        key: "_getBoundaryElement",
        value: function _getBoundaryElement() {
          /** @type {?} */
          var boundary = this.boundaryElement;

          if (!boundary) {
            return null;
          }

          if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);

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

      }, {
        key: "_syncInputs",
        value: function _syncInputs(ref) {
          var _this38 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!ref.isDragging()) {
              /** @type {?} */
              var dir = _this38._dir;
              /** @type {?} */

              var dragStartDelay = _this38.dragStartDelay;
              /** @type {?} */

              var placeholder = _this38._placeholderTemplate ? {
                template: _this38._placeholderTemplate.templateRef,
                context: _this38._placeholderTemplate.data,
                viewContainer: _this38._viewContainerRef
              } : null;
              /** @type {?} */

              var preview = _this38._previewTemplate ? {
                template: _this38._previewTemplate.templateRef,
                context: _this38._previewTemplate.data,
                matchSize: _this38._previewTemplate.matchSize,
                viewContainer: _this38._viewContainerRef
              } : null;
              ref.disabled = _this38.disabled;
              ref.lockAxis = _this38.lockAxis;
              ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
              ref.constrainPosition = _this38.constrainPosition;
              ref.previewClass = _this38.previewClass;
              ref.withBoundaryElement(_this38._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

              if (dir) {
                ref.withDirection(dir.value);
              }
            }
          });
        }
        /**
         * Handles the events from the underlying `DragRef`.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this39 = this;

          ref.started.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this39.started.emit({
              source: _this39
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this39._changeDetectorRef.markForCheck();
          });
          ref.released.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this39.released.emit({
              source: _this39
            });
          });
          ref.ended.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this39.ended.emit({
              source: _this39,
              distance: event.distance
            }); // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.


            _this39._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this39.entered.emit({
              container: event.container.data,
              item: _this39,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this39.exited.emit({
              container: event.container.data,
              item: _this39
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this39.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              isPointerOverContainer: event.isPointerOverContainer,
              item: _this39,
              distance: event.distance
            });
          });
        }
        /**
         * Assigns the default input values based on a provided config object.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_assignDefaults",
        value: function _assignDefaults(config) {
          var lockAxis = config.lockAxis,
              dragStartDelay = config.dragStartDelay,
              constrainPosition = config.constrainPosition,
              previewClass = config.previewClass,
              boundaryElement = config.boundaryElement,
              draggingDisabled = config.draggingDisabled,
              rootElementSelector = config.rootElementSelector;
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
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.dropContainer && this.dropContainer.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          this._dragRef.disabled = this._disabled;
        }
      }]);

      return CdkDrag;
    }();

    CdkDrag.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkDrag]',
        exportAs: 'cdkDrag',
        host: {
          'class': 'cdk-drag',
          '[class.cdk-drag-disabled]': 'disabled',
          '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
        },
        providers: [{
          provide: CDK_DRAG_PARENT,
          useExisting: CdkDrag
        }]
      }]
    }];
    /** @nocollapse */

    CdkDrag.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DROP_LIST]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    CdkDrag.propDecorators = {
      _handles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkDragHandle, {
          descendants: true
        }]
      }],
      _previewTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkDragPreview]
      }],
      _placeholderTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkDragPlaceholder]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragData']
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragLockAxis']
      }],
      rootElementSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragRootElement']
      }],
      boundaryElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragBoundary']
      }],
      dragStartDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragStartDelay']
      }],
      freeDragPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragFreeDragPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragDisabled']
      }],
      constrainPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragConstrainPosition']
      }],
      previewClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDragPreviewClass']
      }],
      started: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragStarted']
      }],
      released: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragReleased']
      }],
      ended: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragEnded']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragExited']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragDropped']
      }],
      moved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDragMoved']
      }]
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
      var currentElement =
      /** @type {?} */
      element.parentElement;

      while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
        /** @type {?} */
        currentElement.msMatchesSelector(selector)) {
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


    var CdkDropListGroup = /*#__PURE__*/function () {
      function CdkDropListGroup() {
        _classCallCheck(this, CdkDropListGroup);

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


      _createClass(CdkDropListGroup, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._items.clear();
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropListGroup;
    }();

    CdkDropListGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkDropListGroup]',
        exportAs: 'cdkDropListGroup'
      }]
    }];
    CdkDropListGroup.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListGroupDisabled']
      }]
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


    var _uniqueIdCounter = 0;
    /**
     * Internal compile-time-only representation of a `CdkDropList`.
     * Used to avoid circular import issues between the `CdkDropList` and the `CdkDrag`.
     * \@docs-private
     * @record
     */

    function CdkDropListInternal() {}

    var ɵ0 = undefined;
    /**
     * Container that wraps a set of draggable items.
     * @template T
     */

    var CdkDropList = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} dragDrop
       * @param {?} _changeDetectorRef
       * @param {?=} _dir
       * @param {?=} _group
       * @param {?=} _scrollDispatcher
       * @param {?=} config
       */
      function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group, _scrollDispatcher, config) {
        var _this40 = this;

        _classCallCheck(this, CdkDropList);

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

        this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */

        this.enterPredicate =
        /**
        * @return {?}
        */
        function () {
          return true;
        };
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

        this._dropListRef.enterPredicate =
        /**
        * @param {?} drag
        * @param {?} drop
        * @return {?}
        */
        function (drag, drop) {
          return _this40.enterPredicate(drag.data, drop.data);
        };

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


      _createClass(CdkDropList, [{
        key: "addItem",

        /**
         * Registers an items with the drop list.
         * @param {?} item
         * @return {?}
         */
        value: function addItem(item) {
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

      }, {
        key: "removeItem",
        value: function removeItem(item) {
          this._unsortedItems["delete"](item);

          if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
          }
        }
        /**
         * Gets the registered items in the list, sorted by their position in the DOM.
         * @return {?}
         */

      }, {
        key: "getSortedItems",
        value: function getSortedItems() {
          return Array.from(this._unsortedItems).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise


            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var index = CdkDropList._dropLists.indexOf(this);

          if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
          }

          if (this._group) {
            this._group._items["delete"](this);
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

      }, {
        key: "start",
        value: function start() {
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

      }, {
        key: "drop",
        value: function drop(item, currentIndex, previousContainer, isPointerOverContainer) {
          this._dropListRef.drop(item._dragRef, currentIndex, previousContainer._dropListRef, isPointerOverContainer, {
            x: 0,
            y: 0
          });
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

      }, {
        key: "enter",
        value: function enter(item, pointerX, pointerY) {
          this._dropListRef.enter(item._dragRef, pointerX, pointerY);
        }
        /**
         * Removes an item from the container after it was dragged into another container by the user.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item that was dragged out.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(item) {
          this._dropListRef.exit(item._dragRef);
        }
        /**
         * Figures out the index of an item in the container.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 10.0.0
         * @param {?} item Item whose index should be determined.
         * @return {?}
         */

      }, {
        key: "getItemIndex",
        value: function getItemIndex(item) {
          return this._dropListRef.getItemIndex(item._dragRef);
        }
        /**
         * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_setupInputSyncSubscription",
        value: function _setupInputSyncSubscription(ref) {
          var _this41 = this;

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return ref.withDirection(value);
            });
          }

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(_this41.connectedTo).map(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return typeof drop === 'string' ?
              /** @type {?} */
              CdkDropList._dropLists.find(
              /**
              * @param {?} list
              * @return {?}
              */
              function (list) {
                return list.id === drop;
              }) : drop;
            });

            if (_this41._group) {
              _this41._group._items.forEach(
              /**
              * @param {?} drop
              * @return {?}
              */
              function (drop) {
                if (siblings.indexOf(drop) === -1) {
                  siblings.push(drop);
                }
              });
            } // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.


            if (!_this41._scrollableParentsResolved && _this41._scrollDispatcher) {
              /** @type {?} */
              var scrollableParents = _this41._scrollDispatcher.getAncestorScrollContainers(_this41.element).map(
              /**
              * @param {?} scrollable
              * @return {?}
              */
              function (scrollable) {
                return scrollable.getElementRef().nativeElement;
              });

              _this41._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
              // shouldn't be able to change without the drop list being destroyed.


              _this41._scrollableParentsResolved = true;
            }

            ref.disabled = _this41.disabled;
            ref.lockAxis = _this41.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this41.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(_this41.autoScrollDisabled);
            ref.connectedTo(siblings.filter(
            /**
            * @param {?} drop
            * @return {?}
            */
            function (drop) {
              return drop && drop !== _this41;
            }).map(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return list._dropListRef;
            })).withOrientation(_this41.orientation);
          });
        }
        /**
         * Handles events from the underlying DropListRef.
         * @private
         * @param {?} ref
         * @return {?}
         */

      }, {
        key: "_handleEvents",
        value: function _handleEvents(ref) {
          var _this42 = this;

          ref.beforeStarted.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this42._syncItemsWithRef();

            _this42._changeDetectorRef.markForCheck();
          });
          ref.entered.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this42.entered.emit({
              container: _this42,
              item: event.item.data,
              currentIndex: event.currentIndex
            });
          });
          ref.exited.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this42.exited.emit({
              container: _this42,
              item: event.item.data
            });

            _this42._changeDetectorRef.markForCheck();
          });
          ref.sorted.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this42.sorted.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              container: _this42,
              item: event.item.data
            });
          });
          ref.dropped.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this42.dropped.emit({
              previousIndex: event.previousIndex,
              currentIndex: event.currentIndex,
              previousContainer: event.previousContainer.data,
              container: event.container.data,
              item: event.item.data,
              isPointerOverContainer: event.isPointerOverContainer,
              distance: event.distance
            }); // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.


            _this42._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Assigns the default input values based on a provided config object.
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_assignDefaults",
        value: function _assignDefaults(config) {
          var lockAxis = config.lockAxis,
              draggingDisabled = config.draggingDisabled,
              sortingDisabled = config.sortingDisabled,
              listAutoScrollDisabled = config.listAutoScrollDisabled,
              listOrientation = config.listOrientation;
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

      }, {
        key: "_syncItemsWithRef",
        value: function _syncItemsWithRef() {
          this._dropListRef.withItems(this.getSortedItems().map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._dragRef;
          }));
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || !!this._group && this._group.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Usually we sync the directive and ref state right before dragging starts, in order to have
          // a single point of failure and to avoid having to use setters for everything. `disabled` is
          // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
          // the user in a disabled state, so we also need to sync it as it's being set.
          this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkDropList;
    }();
    /**
     * Keeps track of the drop lists that are currently on the page.
     */


    CdkDropList._dropLists = [];
    CdkDropList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkDropList], cdk-drop-list',
        exportAs: 'cdkDropList',
        providers: [// Prevent child drop lists from picking up the same group as their parent.
        {
          provide: CdkDropListGroup,
          useValue: ɵ0
        }, {
          provide: CDK_DROP_LIST,
          useExisting: CdkDropList
        }],
        host: {
          'class': 'cdk-drop-list',
          '[id]': 'id',
          '[class.cdk-drop-list-disabled]': 'disabled',
          '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
          '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
        }
      }]
    }];
    /** @nocollapse */

    CdkDropList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: DragDrop
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: CdkDropListGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [CDK_DRAG_CONFIG]
        }]
      }];
    };

    CdkDropList.propDecorators = {
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListConnectedTo']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListData']
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListOrientation']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lockAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListLockAxis']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListDisabled']
      }],
      sortingDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListSortingDisabled']
      }],
      enterPredicate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListEnterPredicate']
      }],
      autoScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cdkDropListAutoScrollDisabled']
      }],
      dropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListDropped']
      }],
      entered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListEntered']
      }],
      exited: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListExited']
      }],
      sorted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['cdkDropListSorted']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/drag-drop-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DragDropModule = function DragDropModule() {
      _classCallCheck(this, DragDropModule);
    };

    DragDropModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
        exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
        providers: [DragDrop]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/drag-drop/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=drag-drop.js.map

    /***/
  },

  /***/
  "../../node_modules/@angular/cdk/fesm2015/table.js":
  /*!***********************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/cdk/fesm2015/table.js ***!
    \***********************************************************************************************/

  /*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */

  /***/
  function node_modulesAngularCdkFesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
      return BaseCdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
      return BaseRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
      return CDK_ROW_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function () {
      return CDK_TABLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
      return CDK_TABLE_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
      return CdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
      return CdkCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
      return CdkCellOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
      return CdkColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
      return CdkFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
      return CdkFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
      return CdkFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
      return CdkFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
      return CdkHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
      return CdkHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
      return CdkHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
      return CdkHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
      return CdkRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
      return CdkRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
      return CdkTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
      return CdkTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
      return CdkTextColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
      return DataRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
      return FooterRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
      return HeaderRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
      return STICKY_DIRECTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
      return StickyStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
      return TEXT_COLUMN_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
      return mixinHasStickyInput;
    });
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/fesm2015/collections.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"];
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
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


    function CanStick() {}

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
      return /*#__PURE__*/function (_base) {
        _inherits(_class, _base);

        var _super15 = _createSuper(_class);

        /**
         * @param {...?} args
         */
        function _class() {
          var _this43;

          _classCallCheck(this, _class);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this43 = _super15.call.apply(_super15, [this].concat(args));
          _this43._sticky = false;
          /**
           * Whether the sticky input has changed since it was last checked.
           */

          _this43._hasStickyChanged = false;
          return _this43;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */


        _createClass(_class, [{
          key: "hasStickyChanged",

          /**
           * Whether the sticky value has changed since this was last called.
           * @return {?}
           */
          value: function hasStickyChanged() {
            /** @type {?} */
            var hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
          }
          /**
           * Resets the dirty check for cases where the sticky state has been used without checking.
           * @return {?}
           */

        }, {
          key: "resetStickyChanged",
          value: function resetStickyChanged() {
            this._hasStickyChanged = false;
          }
        }, {
          key: "sticky",
          get: function get() {
            return this._sticky;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            /** @type {?} */
            var prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
          }
        }]);

        return _class;
      }(base);
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


    var CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('CDK_TABLE');
    /**
     * Configurable options for `CdkTextColumn`.
     * @record
     * @template T
     */

    function TextColumnOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to specify the text column options.
     * @type {?}
     */


    var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('text-column-options');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/cell.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base interface for a cell definition. Captures a column's cell template definition.
     * @record
     */

    function CellDef() {}

    if (false) {}
    /**
     * Cell definition for a CDK table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var CdkCellDef =
    /**
     * @param {?} template
     */
    function CdkCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkCellDef);

      this.template = template;
    };

    CdkCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkCellDef]'
      }]
    }];
    /** @nocollapse */

    CdkCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }];
    };

    if (false) {}
    /**
     * Header cell definition for a CDK table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */


    var CdkHeaderCellDef =
    /**
     * @param {?} template
     */
    function CdkHeaderCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkHeaderCellDef);

      this.template = template;
    };

    CdkHeaderCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkHeaderCellDef]'
      }]
    }];
    /** @nocollapse */

    CdkHeaderCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }];
    };

    if (false) {}
    /**
     * Footer cell definition for a CDK table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */


    var CdkFooterCellDef =
    /**
     * @param {?} template
     */
    function CdkFooterCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkFooterCellDef);

      this.template = template;
    };

    CdkFooterCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkFooterCellDef]'
      }]
    }];
    /** @nocollapse */

    CdkFooterCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }];
    };

    if (false) {} // Boilerplate for applying mixins to CdkColumnDef.

    /**
     * \@docs-private
     */


    var CdkColumnDefBase = function CdkColumnDefBase() {
      _classCallCheck(this, CdkColumnDefBase);
    };
    /** @type {?} */


    var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
    /**
     * Column definition for the CDK table.
     * Defines a set of cells available for a table column.
     */


    var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
      _inherits(CdkColumnDef, _CdkColumnDefBase2);

      var _super16 = _createSuper(CdkColumnDef);

      /**
       * @param {?=} _table
       */
      function CdkColumnDef(_table) {
        var _this44;

        _classCallCheck(this, CdkColumnDef);

        _this44 = _super16.call(this);
        _this44._table = _table;
        _this44._stickyEnd = false;
        return _this44;
      }
      /**
       * Unique name for this column.
       * @return {?}
       */


      _createClass(CdkColumnDef, [{
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
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

      }, {
        key: "stickyEnd",
        get: function get() {
          return this._stickyEnd;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          /** @type {?} */
          var prevValue = this._stickyEnd;
          this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          this._hasStickyChanged = prevValue !== this._stickyEnd;
        }
      }]);

      return CdkColumnDef;
    }(_CdkColumnDefBase);

    CdkColumnDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkColumnDef]',
        inputs: ['sticky'],
        providers: [{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: CdkColumnDef
        }]
      }]
    }];
    /** @nocollapse */

    CdkColumnDef.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }];
    };

    CdkColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
        args: ['cdkColumnDef']
      }],
      stickyEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
        args: ['stickyEnd']
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
        args: [CdkCellDef]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
        args: [CdkHeaderCellDef]
      }],
      footerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
        args: [CdkFooterCellDef]
      }]
    };

    if (false) {}
    /**
     * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
     */


    var BaseCdkCell =
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    function BaseCdkCell(columnDef, elementRef) {
      _classCallCheck(this, BaseCdkCell);

      /** @type {?} */
      var columnClassName = "cdk-column-".concat(columnDef.cssClassFriendlyName);
      elementRef.nativeElement.classList.add(columnClassName);
    };
    /**
     * Header cell template container that adds the right classes and role.
     */


    var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
      _inherits(CdkHeaderCell, _BaseCdkCell);

      var _super17 = _createSuper(CdkHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkHeaderCell(columnDef, elementRef) {
        _classCallCheck(this, CdkHeaderCell);

        return _super17.call(this, columnDef, elementRef);
      }

      return CdkHeaderCell;
    }(BaseCdkCell);

    CdkHeaderCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: 'cdk-header-cell, th[cdk-header-cell]',
        host: {
          'class': 'cdk-header-cell',
          'role': 'columnheader'
        }
      }]
    }];
    /** @nocollapse */

    CdkHeaderCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
      _inherits(CdkFooterCell, _BaseCdkCell2);

      var _super18 = _createSuper(CdkFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkFooterCell(columnDef, elementRef) {
        _classCallCheck(this, CdkFooterCell);

        return _super18.call(this, columnDef, elementRef);
      }

      return CdkFooterCell;
    }(BaseCdkCell);

    CdkFooterCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: 'cdk-footer-cell, td[cdk-footer-cell]',
        host: {
          'class': 'cdk-footer-cell',
          'role': 'gridcell'
        }
      }]
    }];
    /** @nocollapse */

    CdkFooterCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };
    /**
     * Cell template container that adds the right classes and role.
     */


    var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
      _inherits(CdkCell, _BaseCdkCell3);

      var _super19 = _createSuper(CdkCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkCell(columnDef, elementRef) {
        _classCallCheck(this, CdkCell);

        return _super19.call(this, columnDef, elementRef);
      }

      return CdkCell;
    }(BaseCdkCell);

    CdkCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: 'cdk-cell, td[cdk-cell]',
        host: {
          'class': 'cdk-cell',
          'role': 'gridcell'
        }
      }]
    }];
    /** @nocollapse */

    CdkCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };
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


    var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
    /**
     * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
     * for changes and notifying the table.
     * @abstract
     */

    var BaseRowDef = /*#__PURE__*/function () {
      /**
       * @param {?} template
       * @param {?} _differs
       */
      function BaseRowDef(template, _differs) {
        _classCallCheck(this, BaseRowDef);

        this.template = template;
        this._differs = _differs;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(BaseRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Create a new columns differ if one does not yet exist. Initialize it based on initial value
          // of the columns property or an empty array if none is provided.
          if (!this._columnsDiffer) {
            /** @type {?} */
            var columns = changes['columns'] && changes['columns'].currentValue || [];
            this._columnsDiffer = this._differs.find(columns).create();

            this._columnsDiffer.diff(columns);
          }
        }
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         * @return {?}
         */

      }, {
        key: "getColumnsDiff",
        value: function getColumnsDiff() {
          return this._columnsDiffer.diff(this.columns);
        }
        /**
         * Gets this row def's relevant cell template from the provided column def.
         * @param {?} column
         * @return {?}
         */

      }, {
        key: "extractCellTemplate",
        value: function extractCellTemplate(column) {
          if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
          }

          if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
          } else {
            return column.cell.template;
          }
        }
      }]);

      return BaseRowDef;
    }();

    BaseRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"]
    }];
    /** @nocollapse */

    BaseRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"]
      }];
    };

    if (false) {} // Boilerplate for applying mixins to CdkHeaderRowDef.

    /**
     * \@docs-private
     */


    var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
      _inherits(CdkHeaderRowDefBase, _BaseRowDef);

      var _super20 = _createSuper(CdkHeaderRowDefBase);

      function CdkHeaderRowDefBase() {
        _classCallCheck(this, CdkHeaderRowDefBase);

        return _super20.apply(this, arguments);
      }

      return CdkHeaderRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
    /**
     * Header row definition for the CDK table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
      _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

      var _super21 = _createSuper(CdkHeaderRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkHeaderRowDef(template, _differs, _table) {
        var _this45;

        _classCallCheck(this, CdkHeaderRowDef);

        _this45 = _super21.call(this, template, _differs);
        _this45._table = _table;
        return _this45;
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkHeaderRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkHeaderRowDef;
    }(_CdkHeaderRowDefBase);

    CdkHeaderRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkHeaderRowDef]',
        inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
      }]
    }];
    /** @nocollapse */

    CdkHeaderRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }];
    };

    if (false) {} // Boilerplate for applying mixins to CdkFooterRowDef.

    /**
     * \@docs-private
     */


    var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
      _inherits(CdkFooterRowDefBase, _BaseRowDef2);

      var _super22 = _createSuper(CdkFooterRowDefBase);

      function CdkFooterRowDefBase() {
        _classCallCheck(this, CdkFooterRowDefBase);

        return _super22.apply(this, arguments);
      }

      return CdkFooterRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
    /**
     * Footer row definition for the CDK table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */


    var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
      _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

      var _super23 = _createSuper(CdkFooterRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkFooterRowDef(template, _differs, _table) {
        var _this46;

        _classCallCheck(this, CdkFooterRowDef);

        _this46 = _super23.call(this, template, _differs);
        _this46._table = _table;
        return _this46;
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkFooterRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkFooterRowDef;
    }(_CdkFooterRowDefBase);

    CdkFooterRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkFooterRowDef]',
        inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
      }]
    }];
    /** @nocollapse */

    CdkFooterRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * Data row definition for the CDK table.
     * Captures the header row's template and other row properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */


    var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
      _inherits(CdkRowDef, _BaseRowDef3);

      var _super24 = _createSuper(CdkRowDef);

      // TODO(andrewseguin): Add an input for providing a switch function to determine
      //   if this template should be used.

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkRowDef(template, _differs, _table) {
        var _this47;

        _classCallCheck(this, CdkRowDef);

        _this47 = _super24.call(this, template, _differs);
        _this47._table = _table;
        return _this47;
      }

      return CdkRowDef;
    }(BaseRowDef);

    CdkRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkRowDef]',
        inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
      }]
    }];
    /** @nocollapse */

    CdkRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * Context provided to the row cells when `multiTemplateDataRows` is false
     * @record
     * @template T
     */


    function CdkCellOutletRowContext() {}

    if (false) {}
    /**
     * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
     * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
     * `renderIndex`.
     * @record
     * @template T
     */


    function CdkCellOutletMultiRowContext() {}

    if (false) {}
    /**
     * Outlet for rendering cells inside of a row or header row.
     * \@docs-private
     */


    var CdkCellOutlet = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainer
       */
      function CdkCellOutlet(_viewContainer) {
        _classCallCheck(this, CdkCellOutlet);

        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
      }
      /**
       * @return {?}
       */


      _createClass(CdkCellOutlet, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // If this was the last outlet being rendered in the view, remove the reference
          // from the static property after it has been destroyed to avoid leaking memory.
          if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
          }
        }
      }]);

      return CdkCellOutlet;
    }();
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */


    CdkCellOutlet.mostRecentCellOutlet = null;
    CdkCellOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[cdkCellOutlet]'
      }]
    }];
    /** @nocollapse */

    CdkCellOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
      }];
    };

    if (false) {}
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkHeaderRow = function CdkHeaderRow() {
      _classCallCheck(this, CdkHeaderRow);
    };

    CdkHeaderRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
      args: [{
        selector: 'cdk-header-row, tr[cdk-header-row]',
        template: CDK_ROW_TEMPLATE,
        host: {
          'class': 'cdk-header-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None
      }]
    }];
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */

    var CdkFooterRow = function CdkFooterRow() {
      _classCallCheck(this, CdkFooterRow);
    };

    CdkFooterRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
      args: [{
        selector: 'cdk-footer-row, tr[cdk-footer-row]',
        template: CDK_ROW_TEMPLATE,
        host: {
          'class': 'cdk-footer-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None
      }]
    }];
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */

    var CdkRow = function CdkRow() {
      _classCallCheck(this, CdkRow);
    };

    CdkRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
      args: [{
        selector: 'cdk-row, tr[cdk-row]',
        template: CDK_ROW_TEMPLATE,
        host: {
          'class': 'cdk-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None
      }]
    }];
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

    var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
    /**
     * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
     * \@docs-private
     */

    var StickyStyler = /*#__PURE__*/function () {
      /**
       * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
       *     that uses the native `<table>` element.
       * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
       *     sticky positioning applied.
       * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
       *     by reversing left/right positions.
       * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
       */
      function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction) {
        var _isBrowser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        _classCallCheck(this, StickyStyler);

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


      _createClass(StickyStyler, [{
        key: "clearStickyPositioning",
        value: function clearStickyPositioning(rows, stickyDirections) {
          var _iterator2 = _createForOfIteratorHelper(rows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var row = _step2.value;

              // If the row isn't an element (e.g. if it's an `ng-container`),
              // it won't have inline styles or `children` so we skip it.
              if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
              }

              this._removeStickyStyle(row, stickyDirections);

              for (var i = 0; i < row.children.length; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                this._removeStickyStyle(cell, stickyDirections);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
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

      }, {
        key: "updateStickyColumns",
        value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
          /** @type {?} */
          var hasStickyColumns = stickyStartStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          }) || stickyEndStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          });

          if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
          }
          /** @type {?} */


          var firstRow = rows[0];
          /** @type {?} */

          var numCells = firstRow.children.length;
          /** @type {?} */

          var cellWidths = this._getCellWidths(firstRow);
          /** @type {?} */


          var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
          /** @type {?} */


          var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
          /** @type {?} */


          var isRtl = this.direction === 'rtl';

          var _iterator3 = _createForOfIteratorHelper(rows),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var row = _step3.value;

              for (var i = 0; i < numCells; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                if (stickyStartStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }

                if (stickyEndStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
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

      }, {
        key: "stickRows",
        value: function stickRows(rowsToStick, stickyStates, position) {
          // Since we can't measure the rows on the server, we can't stick the rows properly.
          if (!this._isBrowser) {
            return;
          } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
          // position such that the last row stuck will be "bottom: 0px" and so on.

          /** @type {?} */


          var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
          /** @type {?} */

          var stickyHeight = 0;

          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
              continue;
            }
            /** @type {?} */


            var row = rows[rowIndex];

            if (this._isNativeHtmlTable) {
              for (var j = 0; j < row.children.length; j++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[j];

                this._addStickyStyle(cell, position, stickyHeight);
              }
            } else {
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

      }, {
        key: "updateStickyFooterContainer",
        value: function updateStickyFooterContainer(tableElement, stickyStates) {
          if (!this._isNativeHtmlTable) {
            return;
          }
          /** @type {?} */


          var tfoot =
          /** @type {?} */
          tableElement.querySelector('tfoot');

          if (stickyStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return !state;
          })) {
            this._removeStickyStyle(tfoot, ['bottom']);
          } else {
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

      }, {
        key: "_removeStickyStyle",
        value: function _removeStickyStyle(element, stickyDirections) {
          var _iterator4 = _createForOfIteratorHelper(stickyDirections),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var dir = _step4.value;
              element.style[dir] = '';
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          element.style.zIndex = this._getCalculatedZIndex(element); // If the element no longer has any more sticky directions, remove sticky positioning and
          // the sticky CSS class.

          /** @type {?} */

          var hasDirection = STICKY_DIRECTIONS.some(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            return !!element.style[dir];
          });

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

      }, {
        key: "_addStickyStyle",
        value: function _addStickyStyle(element, dir, dirValue) {
          element.classList.add(this._stickCellCss);
          element.style[dir] = "".concat(dirValue, "px");
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

      }, {
        key: "_getCalculatedZIndex",
        value: function _getCalculatedZIndex(element) {
          /** @type {?} */
          var zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1
          };
          /** @type {?} */

          var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

          var _iterator5 = _createForOfIteratorHelper(
          /** @type {?} */
          STICKY_DIRECTIONS),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var dir = _step5.value;

              if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return zIndex ? "".concat(zIndex) : '';
        }
        /**
         * Gets the widths for each cell in the provided row.
         * @param {?} row
         * @return {?}
         */

      }, {
        key: "_getCellWidths",
        value: function _getCellWidths(row) {
          /** @type {?} */
          var cellWidths = [];
          /** @type {?} */

          var firstRowCells = row.children;

          for (var i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            var cell =
            /** @type {?} */
            firstRowCells[i];
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

      }, {
        key: "_getStickyStartColumnPositions",
        value: function _getStickyStartColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = 0; i < widths.length; i++) {
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

      }, {
        key: "_getStickyEndColumnPositions",
        value: function _getStickyEndColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
      }]);

      return StickyStyler;
    }();

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
      return Error("Could not find column with id \"".concat(id, "\"."));
    }
    /**
     * Returns an error to be thrown when two column definitions have the same name.
     * \@docs-private
     * @param {?} name
     * @return {?}
     */


    function getTableDuplicateColumnNameError(name) {
      return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
    }
    /**
     * Returns an error to be thrown when there are multiple rows that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTableMultipleDefaultRowDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching row defs for a particular set of data.
     * \@docs-private
     * @param {?} data
     * @return {?}
     */


    function getTableMissingMatchingRowDefError(data) {
      return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
    }
    /**
     * Returns an error to be thrown when there is no row definitions present in the content.
     * \@docs-private
     * @return {?}
     */


    function getTableMissingRowDefsError() {
      return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
    }
    /**
     * Returns an error to be thrown when the data source does not match the compatible types.
     * \@docs-private
     * @return {?}
     */


    function getTableUnknownDataSourceError() {
      return Error("Provided data source did not match an array, Observable, or DataSource");
    }
    /**
     * Returns an error to be thrown when the text column cannot find a parent table to inject.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingParentTableError() {
      return Error("Text column could not find a parent table for registration.");
    }
    /**
     * Returns an error to be thrown when a table text column doesn't have a name.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingNameError() {
      return Error("Table text column must have a name.");
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


    function RowOutlet() {}

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert data rows.
     * \@docs-private
     */


    var DataRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function DataRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, DataRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    DataRowOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[rowOutlet]'
      }]
    }];
    /** @nocollapse */

    DataRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the header.
     * \@docs-private
     */


    var HeaderRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function HeaderRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, HeaderRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    HeaderRowOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[headerRowOutlet]'
      }]
    }];
    /** @nocollapse */

    HeaderRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the footer.
     * \@docs-private
     */


    var FooterRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function FooterRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, FooterRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    FooterRowOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
      args: [{
        selector: '[footerRowOutlet]'
      }]
    }];
    /** @nocollapse */

    FooterRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * The table template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * \@docs-private
     * @type {?}
     */


    var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
    // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
    "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
    /**
     * Interface used to conveniently type the possible context interfaces for the render row.
     * \@docs-private
     * @record
     * @template T
     */

    function RowContext() {}
    /**
     * Class used to conveniently type the embedded view ref for rows with a context.
     * \@docs-private
     * @abstract
     * @template T
     */


    var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
      _inherits(RowViewRef, _angular_core__WEBPAC);

      var _super25 = _createSuper(RowViewRef);

      function RowViewRef() {
        _classCallCheck(this, RowViewRef);

        return _super25.apply(this, arguments);
      }

      return RowViewRef;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_5__["EmbeddedViewRef"]);
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


    function RenderRow() {}

    if (false) {}
    /**
     * A data table that can render a header row, data rows, and a footer row.
     * Uses the dataSource input to determine the data to be rendered. The data can be provided either
     * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
     * connect function that will return an Observable stream that emits the data array to render.
     * @template T
     */


    var CdkTable = /*#__PURE__*/function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} role
       * @param {?} _dir
       * @param {?} _document
       * @param {?} _platform
       */
      function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        _classCallCheck(this, CdkTable);

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
        this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });

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


      _createClass(CdkTable, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this48 = this;

          this._setupStickyStyler();

          if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
          } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
          // the user has provided a custom trackBy, return the result of that function as evaluated
          // with the values of the `RenderRow`'s data and index.


          this._dataDiffer = this._differs.find([]).create(
          /**
          * @param {?} _i
          * @param {?} dataRow
          * @return {?}
          */
          function (_i, dataRow) {
            return _this48.trackBy ? _this48.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
          this._cacheRowDefs();

          this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


          if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
          } // Render updates if the list of columns have been changed for the header, row, or footer defs.


          this._renderUpdatedColumns(); // If the header row definition has been changed, trigger a render to the header row.


          if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();

            this._headerRowDefChanged = false;
          } // If the footer row definition has been changed, trigger a render to the footer row.


          if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();

            this._footerRowDefChanged = false;
          } // If there is a data source and row definitions, connect to the data source unless a
          // connection has already been made.


          if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
          }

          this._checkStickyStates();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
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

      }, {
        key: "renderRows",
        value: function renderRows() {
          var _this49 = this;

          this._renderRows = this._getAllRenderRows();
          /** @type {?} */

          var changes = this._dataDiffer.diff(this._renderRows);

          if (!changes) {
            return;
          }
          /** @type {?} */


          var viewContainer = this._rowOutlet.viewContainer;
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} prevIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
              _this49._insertRow(record.item,
              /** @type {?} */
              currentIndex);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              prevIndex);
            } else {
              /** @type {?} */
              var view =
              /** @type {?} */
              viewContainer.get(
              /** @type {?} */
              prevIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          }); // Update the meta context of a row's context data (index, count, first, last, ...)

          this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
          // e.g. if trackBy matched data on some property but the actual data reference changed.


          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var rowView =
            /** @type {?} */
            viewContainer.get(
            /** @type {?} */
            record.currentIndex);
            rowView.context.$implicit = record.item.data;
          });
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

      }, {
        key: "setHeaderRowDef",
        value: function setHeaderRowDef(headerRowDef) {
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

      }, {
        key: "setFooterRowDef",
        value: function setFooterRowDef(footerRowDef) {
          this._customFooterRowDefs = new Set([footerRowDef]);
          this._footerRowDefChanged = true;
        }
        /**
         * Adds a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "addColumnDef",
        value: function addColumnDef(columnDef) {
          this._customColumnDefs.add(columnDef);
        }
        /**
         * Removes a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "removeColumnDef",
        value: function removeColumnDef(columnDef) {
          this._customColumnDefs["delete"](columnDef);
        }
        /**
         * Adds a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "addRowDef",
        value: function addRowDef(rowDef) {
          this._customRowDefs.add(rowDef);
        }
        /**
         * Removes a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "removeRowDef",
        value: function removeRowDef(rowDef) {
          this._customRowDefs["delete"](rowDef);
        }
        /**
         * Adds a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "addHeaderRowDef",
        value: function addHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs.add(headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Removes a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "removeHeaderRowDef",
        value: function removeHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs["delete"](headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Adds a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "addFooterRowDef",
        value: function addFooterRowDef(footerRowDef) {
          this._customFooterRowDefs.add(footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Removes a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "removeFooterRowDef",
        value: function removeFooterRowDef(footerRowDef) {
          this._customFooterRowDefs["delete"](footerRowDef);

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

      }, {
        key: "updateStickyHeaderRowStyles",
        value: function updateStickyHeaderRowStyles() {
          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var thead = tableElement.querySelector('thead');

          if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._headerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

          this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyFooterRowStyles",
        value: function updateStickyFooterRowStyles() {
          /** @type {?} */
          var footerRows = this._getRenderedRows(this._footerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var tfoot = tableElement.querySelector('tfoot');

          if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._footerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

          this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

          this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyColumnStyles",
        value: function updateStickyColumnStyles() {
          var _this50 = this;

          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var dataRows = this._getRenderedRows(this._rowOutlet);
          /** @type {?} */


          var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
          // sticky columns span across all table sections (header, data, footer)


          this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


          headerRows.forEach(
          /**
          * @param {?} headerRow
          * @param {?} i
          * @return {?}
          */
          function (headerRow, i) {
            _this50._addStickyColumnStyles([headerRow], _this50._headerRowDefs[i]);
          }); // Update the sticky styles for each data row depending on its def's sticky state

          this._rowDefs.forEach(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            // Collect all the rows rendered with this row definition.

            /** @type {?} */
            var rows = [];

            for (var i = 0; i < dataRows.length; i++) {
              if (_this50._renderRows[i].rowDef === rowDef) {
                rows.push(dataRows[i]);
              }
            }

            _this50._addStickyColumnStyles(rows, rowDef);
          }); // Update the sticky styles for each footer row depending on the def's sticky state


          footerRows.forEach(
          /**
          * @param {?} footerRow
          * @param {?} i
          * @return {?}
          */
          function (footerRow, i) {
            _this50._addStickyColumnStyles([footerRow], _this50._footerRowDefs[i]);
          }); // Reset the dirty state of the sticky input change since it has been used.

          Array.from(this._columnDefsByName.values()).forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAllRenderRows",
        value: function _getAllRenderRows() {
          /** @type {?} */
          var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
          // new cache while unused ones can be picked up by garbage collection.

          /** @type {?} */

          var prevCachedRenderRows = this._cachedRenderRowsMap;
          this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
          // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

          for (var i = 0; i < this._data.length; i++) {
            /** @type {?} */
            var data = this._data[i];
            /** @type {?} */

            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

            if (!this._cachedRenderRowsMap.has(data)) {
              this._cachedRenderRowsMap.set(data, new WeakMap());
            }

            for (var j = 0; j < renderRowsForData.length; j++) {
              /** @type {?} */
              var renderRow = renderRowsForData[j];
              /** @type {?} */

              var cache =
              /** @type {?} */
              this._cachedRenderRowsMap.get(renderRow.data);

              if (cache.has(renderRow.rowDef)) {
                /** @type {?} */
                cache.get(renderRow.rowDef).push(renderRow);
              } else {
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

      }, {
        key: "_getRenderRowsForData",
        value: function _getRenderRowsForData(data, dataIndex, cache) {
          /** @type {?} */
          var rowDefs = this._getRowDefs(data, dataIndex);

          return rowDefs.map(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            /** @type {?} */
            var cachedRenderRows = cache && cache.has(rowDef) ?
            /** @type {?} */
            cache.get(rowDef) : [];

            if (cachedRenderRows.length) {
              /** @type {?} */
              var dataRow =
              /** @type {?} */
              cachedRenderRows.shift();
              dataRow.dataIndex = dataIndex;
              return dataRow;
            } else {
              return {
                data: data,
                rowDef: rowDef,
                dataIndex: dataIndex
              };
            }
          });
        }
        /**
         * Update the map containing the content's column definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheColumnDefs",
        value: function _cacheColumnDefs() {
          var _this51 = this;

          this._columnDefsByName.clear();
          /** @type {?} */


          var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
          columnDefs.forEach(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            if (_this51._columnDefsByName.has(columnDef.name)) {
              throw getTableDuplicateColumnNameError(columnDef.name);
            }

            _this51._columnDefsByName.set(columnDef.name, columnDef);
          });
        }
        /**
         * Update the list of all available row definitions that can be used.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheRowDefs",
        value: function _cacheRowDefs() {
          this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
          this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
          this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

          /** @type {?} */

          var defaultRowDefs = this._rowDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

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

      }, {
        key: "_renderUpdatedColumns",
        value: function _renderUpdatedColumns() {
          /** @type {?} */
          var columnsDiffReducer =
          /**
          * @param {?} acc
          * @param {?} def
          * @return {?}
          */
          function columnsDiffReducer(acc, def) {
            return acc || !!def.getColumnsDiff();
          }; // Force re-render data rows if the list of column definitions have changed.


          if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
          } // Force re-render header/footer rows if the list of column definitions have changed..


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

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          this._data = [];

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          } // Stop listening for data from the previous data source.


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

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this52 = this;

          // If no data source has been set, there is nothing to observe for changes.
          if (!this.dataSource) {
            return;
          }
          /** @type {?} */


          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
          } else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
          }

          if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
          }

          this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this52._data = data || [];

            _this52.renderRows();
          });
        }
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderHeaderRows",
        value: function _forceRenderHeaderRows() {
          var _this53 = this;

          // Clear the header row outlet if any content exists.
          if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
          }

          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this53._renderRow(_this53._headerRowOutlet, def, i);
          });

          this.updateStickyHeaderRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderFooterRows",
        value: function _forceRenderFooterRows() {
          var _this54 = this;

          // Clear the footer row outlet if any content exists.
          if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
          }

          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this54._renderRow(_this54._footerRowOutlet, def, i);
          });

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

      }, {
        key: "_addStickyColumnStyles",
        value: function _addStickyColumnStyles(rows, rowDef) {
          var _this55 = this;

          /** @type {?} */
          var columnDefs = Array.from(rowDef.columns || []).map(
          /**
          * @param {?} columnName
          * @return {?}
          */
          function (columnName) {
            /** @type {?} */
            var columnDef = _this55._columnDefsByName.get(columnName);

            if (!columnDef) {
              throw getTableUnknownColumnError(columnName);
            }

            return (
              /** @type {?} */
              columnDef
            );
          });
          /** @type {?} */

          var stickyStartStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.sticky;
          });
          /** @type {?} */

          var stickyEndStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.stickyEnd;
          });

          this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        }
        /**
         * Gets the list of rows that have been rendered in the row outlet.
         * @param {?} rowOutlet
         * @return {?}
         */

      }, {
        key: "_getRenderedRows",
        value: function _getRenderedRows(rowOutlet) {
          /** @type {?} */
          var renderedRows = [];

          for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */

            /** @type {?} */
            rowOutlet.viewContainer.get(i);
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

      }, {
        key: "_getRowDefs",
        value: function _getRowDefs(data, dataIndex) {
          if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
          }
          /** @type {?} */


          var rowDefs = [];

          if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return !def.when || def.when(dataIndex, data);
            });
          } else {
            /** @type {?} */
            var rowDef = this._rowDefs.find(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return def.when && def.when(dataIndex, data);
            }) || this._defaultRowDef;

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

      }, {
        key: "_insertRow",
        value: function _insertRow(renderRow, renderIndex) {
          /** @type {?} */
          var rowDef = renderRow.rowDef;
          /** @type {?} */

          var context = {
            $implicit: renderRow.data
          };

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

      }, {
        key: "_renderRow",
        value: function _renderRow(outlet, rowDef, index) {
          var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
          outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

          var _iterator6 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var cellTemplate = _step6.value;

              if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRowIndexContext",
        value: function _updateRowIndexContext() {
          /** @type {?} */
          var viewContainer = this._rowOutlet.viewContainer;

          for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            viewContainer.get(renderIndex);
            /** @type {?} */

            var context =
            /** @type {?} */
            viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;

            if (this.multiTemplateDataRows) {
              context.dataIndex = this._renderRows[renderIndex].dataIndex;
              context.renderIndex = renderIndex;
            } else {
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

      }, {
        key: "_getCellTemplates",
        value: function _getCellTemplates(rowDef) {
          var _this56 = this;

          if (!rowDef || !rowDef.columns) {
            return [];
          }

          return Array.from(rowDef.columns,
          /**
          * @param {?} columnId
          * @return {?}
          */
          function (columnId) {
            /** @type {?} */
            var column = _this56._columnDefsByName.get(columnId);

            if (!column) {
              throw getTableUnknownColumnError(columnId);
            }

            return rowDef.extractCellTemplate(column);
          });
        }
        /**
         * Adds native table sections (e.g. tbody) and moves the row outlets into them.
         * @private
         * @return {?}
         */

      }, {
        key: "_applyNativeTableSections",
        value: function _applyNativeTableSections() {
          /** @type {?} */
          var documentFragment = this._document.createDocumentFragment();
          /** @type {?} */


          var sections = [{
            tag: 'thead',
            outlet: this._headerRowOutlet
          }, {
            tag: 'tbody',
            outlet: this._rowOutlet
          }, {
            tag: 'tfoot',
            outlet: this._footerRowOutlet
          }];

          for (var _i3 = 0, _sections = sections; _i3 < _sections.length; _i3++) {
            var section = _sections[_i3];

            /** @type {?} */
            var element = this._document.createElement(section.tag);

            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
          } // Use a DocumentFragment so we don't hit the DOM on each iteration.


          this._elementRef.nativeElement.appendChild(documentFragment);
        }
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderDataRows",
        value: function _forceRenderDataRows() {
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

      }, {
        key: "_checkStickyStates",
        value: function _checkStickyStates() {
          /** @type {?} */
          var stickyCheckReducer =
          /**
          * @param {?} acc
          * @param {?} d
          * @return {?}
          */
          function stickyCheckReducer(acc, d) {
            return acc || d.hasStickyChanged();
          }; // Note that the check needs to occur for every definition since it notifies the definition
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

      }, {
        key: "_setupStickyStyler",
        value: function _setupStickyStyler() {
          var _this57 = this;

          /** @type {?} */
          var direction = this._dir ? this._dir.value : 'ltr';
          this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
          (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this57._stickyStyler.direction = value;

            _this57.updateStickyColumnStyles();
          });
        }
        /**
         * Filters definitions that belong to this table from a QueryList.
         * @private
         * @template I
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_getOwnDefs",
        value: function _getOwnDefs(items) {
          var _this58 = this;

          return items.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item._table || item._table === _this58;
          });
        }
      }, {
        key: "trackBy",
        get: function get() {
          return this._trackByFn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["isDevMode"])() && fn != null && typeof fn !== 'function' &&
          /** @type {?} */
          console &&
          /** @type {?} */
          console.warn) {
            console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
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

      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
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

      }, {
        key: "multiTemplateDataRows",
        get: function get() {
          return this._multiTemplateDataRows;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
          // this setter will be invoked before the row outlet has been defined hence the null check.

          if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
          }
        }
      }]);

      return CdkTable;
    }();

    CdkTable.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
      args: [{
        selector: 'cdk-table, table[cdk-table]',
        exportAs: 'cdkTable',
        template: CDK_TABLE_TEMPLATE,
        host: {
          'class': 'cdk-table'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
        // The view for `MatTable` consists entirely of templates declared in other views. As they are
        // declared elsewhere, they are checked when their declaration points are checked.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default,
        providers: [{
          provide: CDK_TABLE,
          useExisting: CdkTable
        }]
      }]
    }];
    /** @nocollapse */

    CdkTable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Attribute"],
          args: ['role']
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    CdkTable.propDecorators = {
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      multiTemplateDataRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      _rowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [DataRowOutlet, {
          "static": true
        }]
      }],
      _headerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [HeaderRowOutlet, {
          "static": true
        }]
      }],
      _footerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [FooterRowOutlet, {
          "static": true
        }]
      }],
      _contentColumnDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkColumnDef, {
          descendants: true
        }]
      }],
      _contentRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkRowDef, {
          descendants: true
        }]
      }],
      _contentHeaderRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkHeaderRowDef, {
          descendants: true
        }]
      }],
      _contentFooterRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkFooterRowDef, {
          descendants: true
        }]
      }]
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


    var CdkTextColumn = /*#__PURE__*/function () {
      /**
       * @param {?} _table
       * @param {?} _options
       */
      function CdkTextColumn(_table, _options) {
        _classCallCheck(this, CdkTextColumn);

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


      _createClass(CdkTextColumn, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._syncColumnDefName();

          if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
          }

          if (!this.dataAccessor) {
            this.dataAccessor = this._options.defaultDataAccessor ||
            /**
            * @param {?} data
            * @param {?} name
            * @return {?}
            */
            function (data, name) {
              return (
                /** @type {?} */
                data[name]
              );
            };
          }

          if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;

            this._table.addColumnDef(this.columnDef);
          } else {
            throw getTableTextColumnMissingParentTableError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._table) {
            this._table.removeColumnDef(this.columnDef);
          }
        }
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         * @return {?}
         */

      }, {
        key: "_createDefaultHeaderText",
        value: function _createDefaultHeaderText() {
          /** @type {?} */
          var name = this.name;

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

      }, {
        key: "_syncColumnDefName",
        value: function _syncColumnDefName() {
          if (this.columnDef) {
            this.columnDef.name = this.name;
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          this._name = name; // With Ivy, inputs can be initialized before static query results are
          // available. In that case, we defer the synchronization until "ngOnInit" fires.

          this._syncColumnDefName();
        }
      }]);

      return CdkTextColumn;
    }();

    CdkTextColumn.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
      args: [{
        selector: 'cdk-text-column',
        template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
        // Change detection is intentionally not set to OnPush. This component's template will be provided
        // to the table to be inserted into its view. This is problematic when change detection runs since
        // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
        // mean's the template in the table's view will not have the updated value (and in fact will cause
        // an ExpressionChangedAfterItHasBeenCheckedError).
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].Default
      }]
    }];
    /** @nocollapse */

    CdkTextColumn.ctorParameters = function () {
      return [{
        type: CdkTable,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [TEXT_COLUMN_OPTIONS]
        }]
      }];
    };

    CdkTextColumn.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      headerText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      dataAccessor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      justify: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      columnDef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [CdkColumnDef, {
          "static": true
        }]
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [CdkCellDef, {
          "static": true
        }]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [CdkHeaderCellDef, {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn];

    var CdkTableModule = function CdkTableModule() {
      _classCallCheck(this, CdkTableModule);
    };

    CdkTableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
      args: [{
        exports: EXPORTED_DECLARATIONS,
        declarations: EXPORTED_DECLARATIONS
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=table.js.map

    /***/
  },

  /***/
  "./src/app/components/table/table-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/table/table-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: TableRoutingModule */

  /***/
  function srcAppComponentsTableTableRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function () {
      return TableRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./table.component */
    "./src/app/components/table/table.component.ts");

    var routes = [{
      path: '',
      component: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]
    }];

    var TableRoutingModule = function TableRoutingModule() {
      _classCallCheck(this, TableRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/table/table.component.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/components/table/table.component.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: RenderType_TableComponent, View_TableComponent_0, View_TableComponent_Host_0, TableComponentNgFactory */

  /***/
  function srcAppComponentsTableTableComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TableComponent", function () {
      return RenderType_TableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TableComponent_0", function () {
      return View_TableComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TableComponent_Host_0", function () {
      return View_TableComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponentNgFactory", function () {
      return TableComponentNgFactory;
    });
    /* harmony import */


    var _table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./table.component.scss.shim.ngstyle */
    "./src/app/components/table/table.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/checkbox/terminus-ui-checkbox.ngfactory */
    "../../dist/libs/ui/checkbox/terminus-ui-checkbox.ngfactory.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/icon/terminus-ui-icon.ngfactory */
    "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @terminus/ui-table */
    "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/sort/terminus-ui-sort.ngfactory */
    "../../dist/libs/ui/sort/terminus-ui-sort.ngfactory.js");
    /* harmony import */


    var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-sort */
    "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
    /* harmony import */


    var _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/table/terminus-ui-table.ngfactory */
    "../../dist/libs/ui/table/terminus-ui-table.ngfactory.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _dist_libs_ui_menu_terminus_ui_menu_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/menu/terminus-ui-menu.ngfactory */
    "../../dist/libs/ui/menu/terminus-ui-menu.ngfactory.js");
    /* harmony import */


    var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @terminus/ui-menu */
    "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _dist_libs_ui_paginator_terminus_ui_paginator_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/paginator/terminus-ui-paginator.ngfactory */
    "../../dist/libs/ui/paginator/terminus-ui-paginator.ngfactory.js");
    /* harmony import */


    var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ui-paginator */
    "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
    /* harmony import */


    var _table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./table.component */
    "./src/app/components/table/table.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_TableComponent = [_table_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TableComponent,
      data: {}
    });

    function View_TableComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null);
    }

    function View_TableComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 18, "ts-checkbox", [["cdkDrag", ""], ["class", "cdk-drag ts-checkbox"], ["theme", "accent"]], [[2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null], [1, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = $event.stopPropagation() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TsCheckboxComponent_0"], _dist_libs_ui_checkbox_terminus_ui_checkbox_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TsCheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, null, 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        _handles: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _previewTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _placeholderTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__["TsCheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        formControl: [0, "formControl"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_6__["TsCheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_p"]]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "ts-icon", [["cdkDragHandle", ""], ["class", "cdk-drag-handle ts-icon"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = ($event.preventDefault() && $event.stopPropagation()) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 147456, [[4, 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDragHandle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵangular_material_src_cdk_drag_drop_drag_drop_b"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["drag_indicator"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, 0, 1, null, View_TableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, [[6, 4]], 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDragPlaceholder"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit.control;
        var currVal_11 = "accent";

        _ck(_v, 6, 0, currVal_10, currVal_11);

        var currVal_12 = _v.context.$implicit.control;

        _ck(_v, 8, 0, currVal_12);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).id;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_13 = _v.context.$implicit.display;

        _ck(_v, 13, 0, currVal_13);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).inline;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).theme === "primary";
        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).theme === "accent";
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).theme === "warn";

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).background;

        _ck(_v, 14, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
      });
    }

    function View_TableComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "form", [["cdkDropList", ""], ["cdkDropListLockAxis", "y"], ["class", "cdk-drop-list"], ["novalidate", ""]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "cdkDropListDropped"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("cdkDropListDropped" === en) {
          var pd_2 = _co.columnDropped($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollDispatcher"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"]]], {
        lockAxis: [0, "lockAxis"]
      }, {
        dropped: "cdkDropListDropped"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_11 = "y";

        _ck(_v, 2, 0, currVal_11);

        var currVal_12 = _co.columnsForm;

        _ck(_v, 4, 0, currVal_12);

        var currVal_13 = _co.allPossibleColumns;

        _ck(_v, 9, 0, currVal_13);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isDragging();

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isReceiving();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]);
      });
    }

    function View_TableComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.title;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TEST footer content"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], {
        id: [0, "id"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Updated"]))], function (_ck, _v) {
        var currVal_3 = "";

        _ck(_v, 1, 0, currVal_3);

        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted();

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_TableComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.updated_at, "shortDate"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comments"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.comments;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["427"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], {
        id: [0, "id"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Assignee"]))], function (_ck, _v) {
        var currVal_3 = "";

        _ck(_v, 1, 0, currVal_3);

        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted();

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_TableComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.login;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], {
        id: [0, "id"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Number"]))], function (_ck, _v) {
        var currVal_3 = "";

        _ck(_v, 1, 0, currVal_3);

        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted();

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_TableComponent_17(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.number;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_18(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_19(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Labels"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_21(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ","]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TableComponent_20(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TableComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        var currVal_0 = _v.context.$implicit.labels;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_TableComponent_22(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_23(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "th", [["class", "ts-sortable ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""], ["ts-sort-header", ""]], [[2, "ts-sort-header-sorted", null], [2, "ts-sort-header-disabled", null], [8, "id", 0]], null, null, _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsSortHeaderComponent_0"], _dist_libs_ui_sort_terminus_ui_sort_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsSortHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderComponent"], [_terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"]]], {
        id: [0, "id"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Created"]))], function (_ck, _v) {
        var currVal_3 = "";

        _ck(_v, 1, 0, currVal_3);

        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isSorted();

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).uid;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_TableComponent_24(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.created_at, "shortDate"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_25(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.latestCreationDate;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_26(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Body "]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_27(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "truncate"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.sanitize(_v.context.$implicit.body);

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_28(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_29(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_30(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.state;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_31(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_32(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ID"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_33(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.id;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_TableComponent_34(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_35(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "ts-header-cell"], ["role", "columnheader"], ["ts-header-cell", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, [[11, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).uid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TableComponent_36(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "td", [["class", "ts-cell"], ["role", "gridcell"], ["ts-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "ts-icon", [["class", "ts-icon"], ["theme", "accent"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]], {
        theme: [0, "theme"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["open_in_new"]))], function (_ck, _v) {
        _ck(_v, 1, 0);

        var currVal_6 = "accent";

        _ck(_v, 4, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.html_url, "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).inline;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).theme === "primary";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).theme === "accent";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).theme === "warn";

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).background;

        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5);
      });
    }

    function View_TableComponent_37(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "ts-footer-cell"], ["role", "gridcell"], ["ts-footer-cell", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDirective"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_TableComponent_38(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "tr", [["class", "ts-header-row"], ["role", "row"], ["ts-header-row", ""]], null, null, null, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsHeaderRowComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsHeaderRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null);
    }

    function View_TableComponent_39(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "tr", [["class", "ts-row"], ["role", "row"], ["ts-row", ""]], null, null, null, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsRowComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, [[12, 4]], 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null);
    }

    function View_TableComponent_40(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "ts-footer-row"], ["role", "row"], ["ts-footer-row", ""]], null, null, null, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsFooterRowComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsFooterRowComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowComponent"], [], null, null)], null, null);
    }

    function View_TableComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        sort: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, {
        paginator: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, {
        myTable: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 44, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"], ["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_21__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 32, "div", [["style", "font-size: 12px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" To get around GitHub rate limiting, we cache response data by default. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Clear cached data and/or disable below. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "label", [["style", "margin-right: 1rem;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Use cached data: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "input", [["type", "checkbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onChange($event.target.checked) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.useCachedData = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.clearCachedData() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Clear cached GitHub data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 16, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 15, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Table density: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 13, "select", [["id", "density"], ["name", "density"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.density = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "option", [["value", "comfy"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comfy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 3, "option", [["value", "compact"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Compact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 4, "ts-menu", [["class", "ts-menu"], ["theme", "accent"]], [[2, "ts-menu--disabled", null]], null, null, _dist_libs_ui_menu_terminus_ui_menu_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_TsMenuComponent_0"], _dist_libs_ui_menu_terminus_ui_menu_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_TsMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 4308992, null, 0, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_23__["TsMenuComponent"], [], {
        menuItemsTemplate: [0, "menuItemsTemplate"],
        theme: [1, "theme"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 1, "ts-icon", [["class", "ts-icon"], ["svgIcon", "table_large_plus"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsIconComponent_0"], _dist_libs_ui_icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_9__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]], {
        svgIcon: [0, "svgIcon"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Edit Columns "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["columns", 2]], null, 0, null, View_TableComponent_1)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 196, "div", [["class", "example-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 195, "table", [["class", "ts-table"], ["ts-table", ""], ["tsSort", ""], ["tsVerticalSpacing", ""]], [[2, "ts-table--comfy", null], [2, "ts-table--compact", null], [8, "id", 0]], [[null, "columnsChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("columnsChange" === en) {
          var pd_0 = _co.columnsChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_TsTableComponent_0"], _dist_libs_ui_table_terminus_ui_table_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_TsTableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTable"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsTableComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, [[1, 4]], 0, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_17__["TsSortDirective"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_21__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 11780096, [[3, 4], ["myTable", 4]], 6, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsTableComponent"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_15__["TsWindowService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]], {
        trackBy: [0, "trackBy"],
        dataSource: [1, "dataSource"],
        columns: [2, "columns"],
        density: [3, "density"]
      }, {
        columnsChange: "columnsChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _contentColumnDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _contentRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _contentHeaderRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        _contentFooterRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        headerCells: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        rows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"],
        sticky: [1, "sticky"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[14, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[13, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"],
        alignment: [1, "alignment"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[17, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[16, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[18, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 13, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"],
        alignment: [1, "alignment"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[20, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[19, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0, null, View_TableComponent_12)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[23, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[22, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[24, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"],
        alignment: [1, "alignment"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[26, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[25, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[27, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[29, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[28, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](153, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[30, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](157, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 31, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 33, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[32, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[31, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[33, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](179, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[35, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](182, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[34, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[36, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](195, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[38, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[37, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](201, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[39, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](205, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"],
        alignment: [1, "alignment"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](211, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[41, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[40, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](217, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](219, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](221, 16384, null, 3, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkColumnDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsColumnDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](227, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[44, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](230, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[43, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](233, 16384, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[45, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterCellDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterCellDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 3, null, View_TableComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](237, 540672, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CDK_TABLE"]]], {
        columns: [0, "columns"],
        sticky: [1, "sticky"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[9, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkHeaderRowDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsHeaderRowDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 3, null, View_TableComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkRow"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](241, 540672, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CDK_TABLE"]]], {
        columns: [0, "columns"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkRowDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsRowDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_TableComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](244, 540672, null, 0, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowDefDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CDK_TABLE"]]], {
        columns: [0, "columns"],
        sticky: [1, "sticky"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkFooterRowDef"], null, [_terminus_ui_table__WEBPACK_IMPORTED_MODULE_13__["TsFooterRowDefDirective"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end start"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](247, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](248, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_20__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 1, "ts-paginator", [["class", "ts-paginator"], ["recordCountTooHighMessage", "Please refine your filters."]], null, [[null, "pageSelect"], [null, "recordsPerPageChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("pageSelect" === en) {
          var pd_0 = _co.onPageSelect($event) !== false;
          ad = pd_0 && ad;
        }

        if ("recordsPerPageChange" === en) {
          var pd_1 = _co.perPageChange($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_paginator_terminus_ui_paginator_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_TsPaginatorComponent_0"], _dist_libs_ui_paginator_terminus_ui_paginator_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_TsPaginatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](250, 4767744, [[2, 4]], 0, _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_26__["TsPaginatorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        totalRecords: [0, "totalRecords"],
        recordCountTooHighMessage: [1, "recordCountTooHighMessage"]
      }, {
        pageSelect: "pageSelect",
        recordsPerPageChange: "recordsPerPageChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.log() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Log column definitions"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "row";

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = "space-between center";

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = "";

        _ck(_v, 7, 0, currVal_2);

        var currVal_10 = _co.useCachedData;

        _ck(_v, 19, 0, currVal_10);

        var currVal_18 = "density";
        var currVal_19 = _co.density;

        _ck(_v, 30, 0, currVal_18, currVal_19);

        var currVal_20 = "comfy";

        _ck(_v, 34, 0, currVal_20);

        var currVal_21 = "comfy";

        _ck(_v, 35, 0, currVal_21);

        var currVal_22 = "compact";

        _ck(_v, 38, 0, currVal_22);

        var currVal_23 = "compact";

        _ck(_v, 39, 0, currVal_23);

        var currVal_24 = "";

        _ck(_v, 42, 0, currVal_24);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48);

        var currVal_27 = "accent";

        _ck(_v, 44, 0, currVal_26, currVal_27);

        var currVal_33 = "table_large_plus";

        _ck(_v, 46, 0, currVal_33);

        var currVal_37 = "";

        _ck(_v, 53, 0, currVal_37);

        var currVal_38 = _co.trackBy;
        var currVal_39 = _co.dataSource;
        var currVal_40 = _co.visibleColumns;
        var currVal_41 = _co.density;

        _ck(_v, 54, 0, currVal_38, currVal_39, currVal_40, currVal_41);

        var currVal_42 = "title";
        var currVal_43 = "";

        _ck(_v, 63, 0, currVal_42, currVal_43);

        var currVal_44 = "updated";
        var currVal_45 = "right";

        _ck(_v, 79, 0, currVal_44, currVal_45);

        var currVal_46 = "comments";
        var currVal_47 = "right";

        _ck(_v, 95, 0, currVal_46, currVal_47);

        var currVal_48 = "assignee";

        _ck(_v, 109, 0, currVal_48);

        var currVal_49 = "number";
        var currVal_50 = "right";

        _ck(_v, 125, 0, currVal_49, currVal_50);

        var currVal_51 = "labels";

        _ck(_v, 141, 0, currVal_51);

        var currVal_52 = "created";

        _ck(_v, 157, 0, currVal_52);

        var currVal_53 = "body";

        _ck(_v, 173, 0, currVal_53);

        var currVal_54 = "state";

        _ck(_v, 189, 0, currVal_54);

        var currVal_55 = "id";
        var currVal_56 = "right";

        _ck(_v, 205, 0, currVal_55, currVal_56);

        var currVal_57 = "html_url";

        _ck(_v, 221, 0, currVal_57);

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).columnNames;

        var currVal_59 = true;

        _ck(_v, 237, 0, currVal_58, currVal_59);

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).columnNames;

        _ck(_v, 241, 0, currVal_60);

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).columnNames;

        var currVal_62 = true;

        _ck(_v, 244, 0, currVal_61, currVal_62);

        var currVal_63 = "row";

        _ck(_v, 247, 0, currVal_63);

        var currVal_64 = "end start";

        _ck(_v, 248, 0, currVal_64);

        var currVal_65 = _co.resultsLength;
        var currVal_66 = "Please refine your filters.";

        _ck(_v, 250, 0, currVal_65, currVal_66);
      }, function (_ck, _v) {
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending;

        _ck(_v, 16, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassUntouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassTouched;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPristine;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassDirty;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassValid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassInvalid;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).ngClassPending;

        _ck(_v, 27, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).isDisabled;

        _ck(_v, 43, 0, currVal_25);

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).inline;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).theme === "primary";
        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).theme === "accent";
        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).theme === "warn";

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).background;

        _ck(_v, 45, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).density === "comfy";
        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).density === "compact";

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).id;

        _ck(_v, 50, 0, currVal_34, currVal_35, currVal_36);
      });
    }

    function View_TableComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "demo-table", [], null, null, null, View_TableComponent_0, RenderType_TableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _table_component__WEBPACK_IMPORTED_MODULE_27__["TableComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("demo-table", _table_component__WEBPACK_IMPORTED_MODULE_27__["TableComponent"], View_TableComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/table/table.component.scss.shim.ngstyle.js":
  /*!***********************************************************************!*\
    !*** ./src/app/components/table/table.component.scss.shim.ngstyle.js ***!
    \***********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsTableTableComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = [".example-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  width: 100%;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Rlcm1pbnVzLW9zcy90ZXJtaW51cy1vc3MvYXBwcy9zaG93Y2FzZS11aS9zcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJhcHBzL3Nob3djYXNlLXVpL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FDQ2I7O0FERUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQ0N4QiIsImZpbGUiOiJhcHBzL3Nob3djYXNlLXVpL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cnVuY2F0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHJ1bmNhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuIl19 */"];
    /***/
  },

  /***/
  "./src/app/components/table/table.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/table/table.component.ts ***!
    \*****************************************************/

  /*! exports provided: ExampleHttpDao, TableComponent */

  /***/
  function srcAppComponentsTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function () {
      return ExampleHttpDao;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /* harmony import */


    var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ui-paginator */
    "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
    /* harmony import */


    var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-sort */
    "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
    /* harmony import */


    var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-table */
    "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
    /**
     * An example database that the data source uses to retrieve data for the table.
     */


    var ExampleHttpDao = /*#__PURE__*/function () {
      function ExampleHttpDao(http) {
        _classCallCheck(this, ExampleHttpDao);

        this.http = http;
      }

      _createClass(ExampleHttpDao, [{
        key: "getRepoIssues",
        value: function getRepoIssues(sort, order, page, perPage) {
          console.log('Hitting the GitHub API');
          var href = "https://api.github.com/search/issues";
          var requestUrl = "".concat(href, "?q=repo:GetTerminus/terminus-ui");
          var requestParams = "&sort=".concat(sort, "&order=").concat(order, "&page=").concat(page + 1, "&per_page=").concat(perPage);
          return this.http.get("".concat(requestUrl).concat(requestParams));
        }
      }]);

      return ExampleHttpDao;
    }();

    var TableComponent = /*#__PURE__*/function () {
      function TableComponent(domSanitizer, http, formBuilder, changeDetectorRef) {
        _classCallCheck(this, TableComponent);

        this.domSanitizer = domSanitizer;
        this.http = http;
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.columnsSource = [{
          display: 'Title',
          name: 'title',
          width: 300,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        }, {
          display: 'Comments',
          name: 'comments',
          width: 100,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        }, {
          display: 'Number',
          name: 'number',
          width: 100,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        }, {
          display: 'Updated',
          name: 'updated',
          width: 200,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        }, {
          display: 'State',
          name: 'state',
          width: 100,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        }, {
          display: 'Labels',
          name: 'labels',
          width: 200,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        }, // {
        //   display: 'Body',
        //   name: 'body',
        //   width: '260px',
        //   control: new FormControl(true),
        // },
        {
          display: 'Assignee',
          name: 'assignee',
          width: 200,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        }, {
          display: 'ID',
          name: 'id',
          width: 100,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        }, {
          display: 'Created',
          name: 'created',
          width: 100,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        }, {
          display: 'View',
          name: 'html_url',
          width: 100,
          control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        }];
        this.savedResponse = null;
        this.useCachedData = true;
        this.allPossibleColumns = this.columnsSource.slice();
        this.columnsForm = this.formBuilder.group({});
        this.dataSource = new _terminus_ui_table__WEBPACK_IMPORTED_MODULE_10__["TsTableDataSource"]();
        this.resultsLength = 0;
        this.density = 'comfy';
        this.visibleColumns = [];
        this.allFormControlChanges$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, _toConsumableArray(this.allPossibleColumns.map(function (c) {
          return c.control && c.control.valueChanges;
        })));
        this.latestCreationDate = new Date(2020, 2, 23);
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setVisibleColumns();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this59 = this;

          this.setUpTable();
          this.allFormControlChanges$.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_7__["untilComponentDestroyed"])(this)).subscribe(function (change) {
            _this59.setVisibleColumns();
          });
        } // NOTE: Needed for untilComponentDestroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "setVisibleColumns",
        value: function setVisibleColumns() {
          this.visibleColumns = this.allPossibleColumns.filter(function (c) {
            return c.control && c.control.value;
          });
          console.log('DEMO: setVisibleColumns', this.visibleColumns);
        }
        /**
         * Set up the database, sorting and API calls
         */

      }, {
        key: "setUpTable",
        value: function setUpTable() {
          var _this60 = this;

          this.exampleDatabase = new ExampleHttpDao(this.http); // If the user changes the sort order, reset back to the first page.

          this.sort.sortChange.subscribe(function () {
            _this60.paginator.currentPageIndex = 0;
          }); // Fetch new data anytime the sort is changed, the page is changed, or the records shown per
          // page is changed

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sort.sortChange, this.paginator.pageSelect, this.paginator.recordsPerPageChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            if (_this60.useCachedData && _this60.savedResponse && _this60.savedResponse.items) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this60.savedResponse);
            }

            return _this60.exampleDatabase.getRepoIssues(_this60.sort.active, _this60.sort.direction, _this60.paginator.currentPageIndex, _this60.paginator.recordsPerPage);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            // console.log('Demo: fetched data: ', data);
            _this60.savedResponse = data;
            _this60.resultsLength = data.total_count;
            return data.items;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
            console.warn('GitHub API rate limit has been reached!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
          })).subscribe(function (data) {
            _this60.dataSource.data = data;
          });
        }
      }, {
        key: "clearCachedData",
        value: function clearCachedData() {
          this.savedResponse = null;
        }
        /**
         * Sanitize HTML content before injecting it
         *
         * @param content - The HTML to sanitize
         * @returns The safe HTML
         */

      }, {
        key: "sanitize",
        value: function sanitize(content) {
          return this.domSanitizer.bypassSecurityTrustHtml(content);
        }
        /**
         * Reorder columns list when a list item is dropped
         *
         * @param event - The drop event
         */

      }, {
        key: "columnDropped",
        value: function columnDropped(event) {
          var columns = this.allPossibleColumns.slice();
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(columns, event.previousIndex, event.currentIndex);
          this.allPossibleColumns = columns;
          this.setVisibleColumns();
          this.changeDetectorRef.detectChanges();
        }
      }, {
        key: "trackBy",
        value: function trackBy(index, item) {
          return item.number;
        } // Log functions for Demo purposes

      }, {
        key: "perPageChange",
        value: function perPageChange(e) {
          console.log('DEMO: Records per page changed: ', e);
        }
      }, {
        key: "onPageSelect",
        value: function onPageSelect(e) {
          console.log('DEMO: Page selected: ', e);
        }
      }, {
        key: "columnsChange",
        value: function columnsChange(e) {
          // NOTE: Commented out due to the volume - uncomment as needed for demo purposes.
          console.log('DEMO: Columns change: ', e);
        }
      }, {
        key: "log",
        value: function log() {
          console.log('Demo: columns: ', this.myTable.columns);
        }
      }]);

      return TableComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/table/table.module.ngfactory.js":
  /*!************************************************************!*\
    !*** ./src/app/components/table/table.module.ngfactory.js ***!
    \************************************************************/

  /*! exports provided: TableModuleNgFactory */

  /***/
  function srcAppComponentsTableTableModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableModuleNgFactory", function () {
      return TableModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _table_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./table.module */
    "./src/app/components/table/table.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _table_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table.component.ngfactory */
    "./src/app/components/table/table.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */
    "../../node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "../../node_modules/@angular/cdk/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @terminus/ui-validators */
    "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
    /* harmony import */


    var _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-selection-list */
    "../../dist/libs/ui/selection-list/fesm2015/terminus-ui-selection-list.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ui-sort */
    "../../dist/libs/ui/sort/fesm2015/terminus-ui-sort.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _table_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./table-routing.module */
    "./src/app/components/table/table-routing.module.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @terminus/ui-menu */
    "../../dist/libs/ui/menu/fesm2015/terminus-ui-menu.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @terminus/ui-chip */
    "../../dist/libs/ui/chip/fesm2015/terminus-ui-chip.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @terminus/ui-paginator */
    "../../dist/libs/ui/paginator/fesm2015/terminus-ui-paginator.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/chips */
    "../../node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @terminus/ui-select */
    "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/cdk/table */
    "../../node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _terminus_ui_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @terminus/ui-table */
    "../../dist/libs/ui/table/fesm2015/terminus-ui-table.js");
    /* harmony import */


    var _table_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./table.component */
    "./src/app/components/table/table.component.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TableModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_table_module__WEBPACK_IMPORTED_MODULE_1__["TableModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _table_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TableComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["ɵangular_material_src_material_menu_menu_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_16__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_16__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_23__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_23__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TS_SELECTION_LIST_SCROLL_STRATEGY"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TS_SELECTION_LIST_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortHeaderIntl"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TS_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_29__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_29__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_10__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_31__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_31__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_31__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _table_routing_module__WEBPACK_IMPORTED_MODULE_32__["TableRoutingModule"], _table_routing_module__WEBPACK_IMPORTED_MODULE_32__["TableRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_35__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_35__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_36__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_36__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_38__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenuDirectivesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_42__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_42__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_43__["TsMenuModule"], _terminus_ui_menu__WEBPACK_IMPORTED_MODULE_43__["TsMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_44__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_44__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_45__["TsChipModule"], _terminus_ui_chip__WEBPACK_IMPORTED_MODULE_45__["TsChipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_17__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_18__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_46__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_46__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TsSelectionListModule"], _terminus_ui_selection_list__WEBPACK_IMPORTED_MODULE_24__["TsSelectionListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_48__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_48__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_49__["TsPaginatorModule"], _terminus_ui_paginator__WEBPACK_IMPORTED_MODULE_49__["TsPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_51__["TsSelectModule"], _terminus_ui_select__WEBPACK_IMPORTED_MODULE_51__["TsSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortModule"], _terminus_ui_sort__WEBPACK_IMPORTED_MODULE_26__["TsSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_52__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_52__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_53__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_53__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_table__WEBPACK_IMPORTED_MODULE_54__["TsTableModule"], _terminus_ui_table__WEBPACK_IMPORTED_MODULE_54__["TsTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _table_module__WEBPACK_IMPORTED_MODULE_1__["TableModule"], _table_module__WEBPACK_IMPORTED_MODULE_1__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_31__["ROUTES"], function () {
        return [[{
          path: "",
          component: _table_component__WEBPACK_IMPORTED_MODULE_55__["TableComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_47__["TS_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_50__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_56__["ENTER"]]
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/table/table.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/table/table.module.ts ***!
    \**************************************************/

  /*! exports provided: TableModule */

  /***/
  function srcAppComponentsTableTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableModule", function () {
      return TableModule;
    });

    var TableModule = function TableModule() {
      _classCallCheck(this, TableModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=table-table-module-ngfactory-es5.js.map