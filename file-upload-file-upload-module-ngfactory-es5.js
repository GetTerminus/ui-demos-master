function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-upload-file-upload-module-ngfactory"], {
  /***/
  "../../dist/libs/ui/file-upload/fesm2015/terminus-ui-file-upload.js":
  /*!****************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/file-upload/fesm2015/terminus-ui-file-upload.js ***!
    \****************************************************************************************************************/

  /*! exports provided: TS_ACCEPTED_MIME_TYPES, TsDropProtectionService, TsFileUploadComponent, TsFileUploadModule, TsImageDimensions, TsSelectedFile */

  /***/
  function distLibsUiFileUploadFesm2015TerminusUiFileUploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TS_ACCEPTED_MIME_TYPES", function () {
      return TS_ACCEPTED_MIME_TYPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsDropProtectionService", function () {
      return TsDropProtectionService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFileUploadComponent", function () {
      return TsFileUploadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFileUploadModule", function () {
      return TsFileUploadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsImageDimensions", function () {
      return TsImageDimensions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsSelectedFile", function () {
      return TsSelectedFile;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-icon-button */
    "../../dist/libs/ui/icon-button/fesm2015/terminus-ui-icon-button.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @terminus/ngx-tools/coercion */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-coercion.js");
    /* harmony import */


    var _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ngx-tools/keycodes */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-keycodes.js");
    /* harmony import */


    var _terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ngx-tools/type-guards */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-type-guards.js");
    /* harmony import */


    var _terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ngx-tools/utilities */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-utilities.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @terminus/ui-utilities */
    "../../dist/libs/ui/utilities/fesm2015/terminus-ui-utilities.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var TsDropProtectionService = /*#__PURE__*/function () {
      function TsDropProtectionService(windowService) {
        _classCallCheck(this, TsDropProtectionService);

        this.windowService = windowService;
        this.hasProtection = false;
      }
      /**
       * Add drop protection
       */


      _createClass(TsDropProtectionService, [{
        key: "add",
        value: function add() {
          if (!this.hasProtection) {
            this.windowService.nativeWindow.addEventListener('dragover', this.prevent, false);
            this.windowService.nativeWindow.addEventListener('drop', this.prevent, false);
            this.hasProtection = true;
          }
        }
        /**
         * Remove drop protection
         */

      }, {
        key: "remove",
        value: function remove() {
          if (this.hasProtection) {
            this.windowService.nativeWindow.removeEventListener('dragover', this.prevent, false);
            this.windowService.nativeWindow.removeEventListener('drop', this.prevent, false);
            this.hasProtection = false;
          }
        }
        /**
         * Prevent default
         *
         * NOTE: In order to remove an event listener we need a reference to a method that does not change.
         *
         * @param e - The event
         */

      }, {
        key: "prevent",
        value: function prevent(e) {
          e.preventDefault();
        }
      }]);

      return TsDropProtectionService;
    }();

    TsDropProtectionService.ctorParameters = function () {
      return [{
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"]
      }];
    };

    TsDropProtectionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"]])], TsDropProtectionService);
    /**
     * Define an array of all allowed mime types for {@link TsFileUploadComponent}
     */

    var TS_ACCEPTED_MIME_TYPES = ['text/csv', 'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'video/mp4', 'video/x-flv', 'video/webm', 'video/quicktime', 'video/mpeg'];
    /**
     * A class to store dimensions for an image
     *
     * @param width - The image width
     * @param height - The image height
     */

    var TsImageDimensions = function TsImageDimensions(width, height) {
      _classCallCheck(this, TsImageDimensions);

      this.width = width;
      this.height = height;
    };
    /**
     * The number of bytes per kilobyte (for calculations)
     */


    var BYTES_PER_KB = 1024;
    var typesWithoutDimensionValidation = ['text/csv', 'video/mp4'];
    /**
     * Manage a single selected file
     *
     * @param file - The selected file
     * @param imageDimensionConstraints - An array of image dimension constraints {@link TsFileImageDimensionConstraints}
     * @param typeConstraint - An array of allowed MIME types {@link TsFileAcceptedMimeTypes}
     * @param maxSize - The maximum size in kilobytes
     * @param ratioConstraint - An array of allowed image ratios in form of ImageRatio
     */

    var TsSelectedFile = /*#__PURE__*/function () {
      function TsSelectedFile(file, imageDimensionConstraints, typeConstraint, maxSize, ratioConstraint) {
        var _this = this;

        _classCallCheck(this, TsSelectedFile);

        this.file = file;
        this.imageDimensionConstraints = imageDimensionConstraints;
        this.typeConstraint = typeConstraint;
        this.maxSize = maxSize;
        this.ratioConstraint = ratioConstraint;
        this.validations = {
          fileType: false,
          fileSize: false,
          imageDimensions: false,
          imageRatio: false
        };
        this.fileReader = new FileReader();
        /**
         * BehaviorSubject to alert consumers when all calculations are complete
         */

        this.fileLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__["BehaviorSubject"](this.fileReference);
        this.mimeType = this.file.type;
        this.size = Math.ceil(this.file.size / BYTES_PER_KB);
        this.name = this.file.name; // Begin the validation chain by validating image dimensions

        this.determineImageDimensions(function () {
          // Validate mime-type
          // istanbul ignore else
          if (_this.typeConstraint && _this.typeConstraint.indexOf(_this.file.type) >= 0) {
            _this.validations.fileType = true;
          } // Validate file size
          // istanbul ignore else


          if (_this.size <= _this.maxSize) {
            _this.validations.fileSize = true;
          } // Emit the file once all calculations are complete


          _this.fileLoaded$.next(_this);
        });
      }
      /**
       * Get the image width
       *
       * @returns The width of the image if it exists
       */


      _createClass(TsSelectedFile, [{
        key: "determineImageDimensions",

        /**
         * Determine the dimensions and ratio of an image
         *
         * @param callback - A function to call after the dimensions have been calculated (asynchronously)
         */
        value: function determineImageDimensions(callback) {
          var _this2 = this;

          var img;

          if (typeNeedsDimensionValidation(this.mimeType)) {
            // Create an image so that dimensions can be determined
            img = new Image();

            this.fileReader.onload = function (v) {
              // istanbul ignore else
              if (img) {
                if (Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__["isString"])(_this2.fileReader.result)) {
                  img.src = _this2.fileReader.result;
                } else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
                  // eslint-disable-next-line no-console
                  console.warn("".concat(img, " is not returning a string."));
                }
              }
            };

            img.onload = function (v) {
              // istanbul ignore else
              if (img) {
                _this2.dimensions = new TsImageDimensions(img.naturalWidth, img.naturalHeight);
              } // Validate dimensions and ratio


              _this2.validations.imageDimensions = _this2.validateImageDimensions(_this2.imageDimensionConstraints);
              _this2.validations.imageRatio = _this2.validateImageRatio(_this2.ratioConstraint); // Call the callback if one exists
              // istanbul ignore else

              if (callback) {
                callback();
              }
            };
          } else {
            // We are not dealing with an image:
            // istanbul ignore else
            if (callback) {
              callback();
            } // Since this is not an image, set dimension/ratio validation to `true` to 'bypass'


            this.validations.imageDimensions = true;
            this.validations.imageRatio = true;
          } // Read the file (this triggers the FileReader load event)


          this.fileReader.readAsDataURL(this.file);
        }
        /**
         * Validate the image dimensions
         *
         * @param constraints - The constraints this the image dimensions must fit
         * @returns The validation result
         */

      }, {
        key: "validateImageDimensions",
        value: function validateImageDimensions(constraints) {
          if (!constraints || constraints.length < 1) {
            return true;
          }

          var width = this.width;
          var height = this.height;

          var _iterator = _createForOfIteratorHelper(constraints),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var constraint = _step.value;
              var heightIsValid = height >= constraint.height.min && height <= constraint.height.max;
              var widthIsValid = width >= constraint.width.min && width <= constraint.width.max;

              if (heightIsValid && widthIsValid) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
        /**
         * Validate the image ratios
         *
         * @param constraints - The constrains that the image ratio must fit
         * @returns The validation result
         */

      }, {
        key: "validateImageRatio",
        value: function validateImageRatio(constraints) {
          if (!constraints) {
            return true;
          }

          var ratios = constraints.map(function (r) {
            return r.widthRatio / r.heightRatio;
          });

          var _iterator2 = _createForOfIteratorHelper(ratios),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var r = _step2.value;
              var ratio = this.width / this.height;

              if (this.isSame(r, ratio)) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
        /**
         * A utility function to determine whether two numbers are the same
         *
         * @param number1 - one number
         * @param number2 - another number
         * @returns Whether these two numbers are the same
         */

      }, {
        key: "isSame",
        value: function isSame(number1, number2) {
          var minimumAmountToConsiderMatch = .001;
          return Math.abs((number1 - number2) / number1) < minimumAmountToConsiderMatch;
        }
      }, {
        key: "width",
        get: function get() {
          return this.dimensions ? this.dimensions.width : 0;
        }
        /**
         * Get the image height
         *
         * @returns The height of the image if it exists
         */

      }, {
        key: "height",
        get: function get() {
          return this.dimensions ? this.dimensions.height : 0;
        }
        /**
         * Get a boolean representing if the file is a CSV
         *
         * @returns Is a CSV
         */

      }, {
        key: "isCSV",
        get: function get() {
          return this.mimeType.includes('csv');
        }
        /**
         * Get a boolean representing if the file is an image
         *
         * @returns Is an image
         */

      }, {
        key: "isImage",
        get: function get() {
          return this.mimeType.includes('image');
        }
        /**
         * Get a boolean representing if the file is a video
         *
         * @returns Is a video
         */

      }, {
        key: "isVideo",
        get: function get() {
          return this.mimeType.includes('video');
        }
        /**
         * Get the file contents
         *
         * @returns The FileReader results
         */

      }, {
        key: "fileContents",
        get: function get() {
          if (Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__["isString"])(this.fileReader.result)) {
            return this.fileReader.result;
          } else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            // eslint-disable-next-line no-console
            console.warn("".concat(this.fileReader.result, " is not returning a string."));
          }

          return '';
        }
        /**
         * Get the validation status
         *
         * @returns Is valid
         */

      }, {
        key: "isValid",
        get: function get() {
          return this.validations.fileType && this.validations.fileSize && this.validations.imageDimensions && this.validations.imageRatio;
        }
      }]);

      return TsSelectedFile;
    }();
    /**
     * Determine if the passed in type needs dimension validation
     *
     * @param type - The file type
     * @returns If it needs dimension validation
     */


    function typeNeedsDimensionValidation(type) {
      var allTypes = TS_ACCEPTED_MIME_TYPES.slice();
      var itemsNeedingValidation = allTypes.filter(function (item) {
        return !typesWithoutDimensionValidation.includes(item);
      });
      return itemsNeedingValidation.indexOf(type) >= 0;
    }

    var TsFileUploadComponent_1;
    /**
     * The maximum file size in bytes
     *
     * NOTE: Currently nginx has a hard limit of 10mb
     */
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers

    var MAXIMUM_KILOBYTES_PER_FILE = 10 * 1024;
    /**
     * Unique ID for each instance
     */

    var nextUniqueId = 0;
    /**
     * This is the file-upload UI Component
     *
     * @example
     * <ts-file-upload
     *              accept="['image/png', 'image/jpg']"
     *              dimensionConstraints="myConstraints" (see TsFileImageDimensionConstraints)
     *              [formControl]="myForm.get('myControl')"
     *              [hideButton]="false"
     *              id="my-id"
     *              [isDisabled]="true"
     *              maximumKilobytesPerFile="{{ 10 * 1024 }}"
     *              [multiple]="false"
     *              [progress]="myUploadProgress"
     *              ratioConstraints="['2:1', '3:4']"
     *              [seedFile]="myFile"
     *              theme="primary"
     *              (cleared)="fileWasCleared($event)"
     *              (enter)="userDragBegin($event)"
     *              (exit)="userDragEnd($event)"
     *              (selected)="handleFile($event)"
     *              (selectedMultiple)="handleMultipleFiles($event)"
     * ></ts-file-upload>
     *
     * <example-url>https://getterminus.github.io/ui-demos-release/components/file-upload</example-url>
     */

    var TsFileUploadComponent = TsFileUploadComponent_1 = /*#__PURE__*/function (_terminus_ui_utilitie) {
      _inherits(TsFileUploadComponent, _terminus_ui_utilitie);

      var _super = _createSuper(TsFileUploadComponent);

      function TsFileUploadComponent(documentService, elementRef, changeDetectorRef, dropProtectionService) {
        var _this3;

        _classCallCheck(this, TsFileUploadComponent);

        _this3 = _super.call(this);
        _this3.documentService = documentService;
        _this3.elementRef = elementRef;
        _this3.changeDetectorRef = changeDetectorRef;
        _this3.dropProtectionService = dropProtectionService;
        /**
         * Define the default component ID
         */

        _this3.uid = "ts-file-upload-".concat(nextUniqueId++);
        /**
         * A flag that represents an in-progress drag movement
         */

        _this3.dragInProgress = false;
        /**
         * Define the flexbox layout gap
         */

        _this3.layoutGap = _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_18__["TS_SPACING"].small[0];
        _this3._acceptedTypes = TS_ACCEPTED_MIME_TYPES.slice();
        _this3._formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        /**
         * Define if the 'select files' button should be visible. DO NOT USE.
         */

        _this3.hideButton = false;
        _this3._id = _this3.uid;
        /**
         * Define if the component is disabled
         */

        _this3.isDisabled = false;
        _this3._maximumKilobytesPerFile = MAXIMUM_KILOBYTES_PER_FILE;
        /**
         * Define if multiple files may be uploaded
         */

        _this3.multiple = false;
        _this3._progress = 0;
        /**
         * Define the theme. See {@link TsStyleThemeTypes}.
         */

        _this3.theme = 'primary';
        /**
         * Event emitted when the user clears a loaded file
         */

        _this3.cleared = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the user's cursor enters the field while dragging a file
         */

        _this3.enter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the user's cursor exits the field while dragging a file
         */

        _this3.exit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the user drops or selects a file
         */

        _this3.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the user drops or selects multiple files
         */

        _this3.selectedMultiple = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Update the inner value when the formControl value is updated
         *
         * @param value - The value to set
         */

        _this3.updateInnerValue = function (value) {
          _this3.value = value; // NOTE: This `if` is to avoid: `Error: ViewDestroyedError: Attempt to use a destroyed view: detectChanges`
          // istanbul ignore else
          // eslint-disable-next-line dot-notation

          if (!_this3.changeDetectorRef['destroyed']) {
            _this3.changeDetectorRef.detectChanges();
          }
        };

        _this3.virtualFileInput = _this3.createFileInput();
        return _this3;
      }
      /**
       * Get the file select button text
       */


      _createClass(TsFileUploadComponent, [{
        key: "handleDragover",

        /**
         * HostListeners
         *
         * @param event
         */
        value: function handleDragover(event) {
          // istanbul ignore else
          if (!this.isDisabled) {
            this.preventAndStopEventPropagation(event);
            this.enter.emit(true);
            this.dragInProgress = true;
          }
        }
      }, {
        key: "handleDragleave",
        value: function handleDragleave(event) {
          // istanbul ignore else
          if (!this.isDisabled) {
            this.preventAndStopEventPropagation(event);
            this.exit.emit(true);
            this.dragInProgress = false;
          }
        }
      }, {
        key: "handleDrop",
        value: function handleDrop(event) {
          // istanbul ignore else
          if (!this.isDisabled) {
            this.preventAndStopEventPropagation(event);
            this.dragInProgress = false;
            this.collectFilesFromEvent(event);
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          // istanbul ignore else
          if (!this.isDisabled) {
            this.promptForFiles();
          }
        }
        /**
         * Enable drop protection
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dropProtectionService.add();

          if (this.formControl) {
            this.formControl.valueChanges.pipe(Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_17__["untilComponentDestroyed"])(this)).subscribe(function () {
              // NOTE: This `if` is to avoid: `Error: ViewDestroyedError: Attempt to use a destroyed view: detectChanges`
              // istanbul ignore else
              // eslint-disable-next-line dot-notation
              if (!_this4.changeDetectorRef['destroyed']) {
                _this4.changeDetectorRef.detectChanges();
              }
            });
          }
        }
        /**
         * Update the virtual file input when the change event is fired
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.virtualFileInput.addEventListener('change', this.onVirtualInputElementChange.bind(this));
          this.updateVirtualFileInputAttrs(this.virtualFileInput);
        }
        /**
         * Update the virtual file input's attrs when specific inputs change
         *
         * @param changes - The changed inputs
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // istanbul ignore else
          if (Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_17__["inputHasChanged"])(changes, 'multiple') || Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_17__["inputHasChanged"])(changes, 'accept')) {
            this.updateVirtualFileInputAttrs(this.virtualFileInput);
            this.registerOnChangeFn(this.updateInnerValue);
          }
        }
        /**
         * Remove event listener when the component is destroyed
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // istanbul ignore else
          if (this.virtualFileInput) {
            this.virtualFileInput.removeEventListener('change', this.onVirtualInputElementChange.bind(this));
          }

          this.dropProtectionService.remove();
        }
        /**
         * Handle the 'enter' keydown event
         *
         * @param event - The keyboard event
         */

      }, {
        key: "handleKeydown",
        value: function handleKeydown(event) {
          if (event.code === _terminus_ngx_tools_keycodes__WEBPACK_IMPORTED_MODULE_15__["KEYS"].ENTER.code) {
            this.promptForFiles();
            this.elementRef.nativeElement.blur();
          }
        }
        /**
         * Open the file selection window when the user interacts
         */

      }, {
        key: "promptForFiles",
        value: function promptForFiles() {
          this.virtualFileInput.click();
        }
        /**
         * Remove a loaded file, clear validation and emit event
         *
         * @param event - The event
         */

      }, {
        key: "removeFile",
        value: function removeFile(event) {
          if (event) {
            this.preventAndStopEventPropagation(event);
          }

          this.file = undefined;
          this.clearValidationMessages();
          this.cleared.emit(true);
        }
        /**
         * Create a virtual file input
         *
         * @returns The HTMLInputElement for file collection
         */

      }, {
        key: "createFileInput",
        value: function createFileInput() {
          // eslint-disable-next-line deprecation/deprecation
          var input = this.documentService.document.createElement('input');
          input.setAttribute('type', 'file');
          input.style.display = 'none';
          return input;
        }
        /**
         * Get all selected files from an event
         *
         * @param event - The event
         */

      }, {
        key: "collectFilesFromEvent",
        value: function collectFilesFromEvent(event) {
          var _this5 = this;

          var files;

          if (Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__["isDragEvent"])(event)) {
            files = event.dataTransfer && event.dataTransfer.files ? event.dataTransfer.files : undefined;
          }

          if (event.target && Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__["isHTMLInputElement"])(event.target)) {
            files = event.target.files ? event.target.files : undefined;
          }

          if ((!files || files.length < 1) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
            throw Error('TsFileUpload: Event contained no file.');
          } // Convert the FileList to an Array


          var filesArray = files ? Array.from(files)
          /* istanbul ignore next - Unreachable */
          : []; // If multiple were selected, simply emit the event and return. Currently, this component only supports single files.

          if (filesArray.length > 1) {
            this.selectedMultiple.emit(filesArray);
            return;
          }

          var file = filesArray[0] ? filesArray[0]
          /* istanbul ignore next - Unreachable */
          : undefined; // istanbul ignore else

          if (file) {
            var newFile = new TsSelectedFile(file, this.dimensionConstraints, this.acceptedTypes, this.maximumKilobytesPerFile, this._ratioConstraints);
            newFile.fileLoaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (t) {
              return !!t;
            }), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_17__["untilComponentDestroyed"])(this)).subscribe(function (f) {
              _this5.formControl.setValue(f.file);

              _this5.selected.emit(f);

              _this5.setUpNewFile(f);
            });
          }
        }
        /**
         * Register our custom onChange function
         *
         * @param fn - The onChange function
         */

      }, {
        key: "registerOnChangeFn",
        value: function registerOnChangeFn(fn) {
          // istanbul ignore else
          if (this.formControl) {
            this.formControl.registerOnChange(fn);
          }
        }
        /**
         * Set file and set up preview and validations
         *
         * @param file - The file
         */

      }, {
        key: "setUpNewFile",
        value: function setUpNewFile(file) {
          if (!file) {
            return;
          }

          this.file = file;
          this.setValidationMessages(file);
          this.changeDetectorRef.markForCheck();
        }
        /**
         * Listen for changes to the virtual input
         *
         * @param event - The event
         */

      }, {
        key: "onVirtualInputElementChange",
        value: function onVirtualInputElementChange(event) {
          // istanbul ignore else
          if (!this.isDisabled) {
            this.collectFilesFromEvent(event);
            this.virtualFileInput.value = '';
          }
        }
        /*
         * Stops event propagation
         *
         * NOTE: Making this static seems to break our tests.
         */

      }, {
        key: "preventAndStopEventPropagation",
        value: function preventAndStopEventPropagation(event) {
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * Update the attributes of the virtual file input based on @Inputs
         *
         * @param input - The HTML input element
         */

      }, {
        key: "updateVirtualFileInputAttrs",
        value: function updateVirtualFileInputAttrs(input) {
          var hasMultipleSetting = input.hasAttribute('multiple'); // Should set multiple
          // istanbul ignore else

          if (this.multiple && !hasMultipleSetting) {
            this.virtualFileInput.setAttribute('multiple', 'true');
          } // Should remove multiple
          // istanbul ignore else


          if (!this.multiple && hasMultipleSetting) {
            this.virtualFileInput.removeAttribute('multiple');
          } // Should set accept
          // istanbul ignore else


          if (this.acceptedTypes) {
            this.virtualFileInput.setAttribute('accept', this.acceptedTypes.toString());
          }
        }
        /**
         * Set validation messages
         *
         * @param file - The file
         */

      }, {
        key: "setValidationMessages",
        value: function setValidationMessages(file) {
          if (!file) {
            return;
          }

          var errors = {};
          var responses = {
            fileSize: {
              valid: false,
              actual: file.size,
              max: this.maximumKilobytesPerFile
            },
            fileType: {
              valid: false,
              actual: file.mimeType,
              accepted: this.acceptedTypes.join(', ')
            },
            imageDimensions: {
              valid: false,
              actual: file.dimensions
            },
            imageRatio: {
              valid: false,
              actual: file.width / file.height
            }
          };
          var validations = Object.keys(file.validations); // eslint-disable-next-line @typescript-eslint/prefer-for-of

          for (var i = 0; i < validations.length; i += 1) {
            var key = validations[i];

            if (!file.validations[key]) {
              errors[key] = responses[key];
            }
          }

          if (Object.keys(errors).length === 0) {
            this.formControl.setErrors(null);
          } else {
            this.formControl.setErrors(errors);
          }

          this.formControl.markAsTouched();
          this.changeDetectorRef.markForCheck();
        }
        /**
         * Clear all validation messages
         */

      }, {
        key: "clearValidationMessages",
        value: function clearValidationMessages() {
          this.formControl.setErrors(null);
          this.changeDetectorRef.markForCheck();
        }
        /**
         * Parse ratio from Array of string to Array of ImageRatio
         *
         * @param ratios - Array of string
         * @returns - Array of ImageRatio
         */

      }, {
        key: "parseRatioStringToObject",
        value: function parseRatioStringToObject(ratios) {
          if (!ratios) {
            return undefined;
          }

          var parsedImageRatio = [];
          ratios.map(function (r) {
            return parsedImageRatio.push({
              widthRatio: Number(r.split(':')[0]),
              heightRatio: Number(r.split(':')[1])
            });
          });
          return parsedImageRatio;
        }
        /**
         * Parse ratio from Array of ImageRatio to Array of string
         *
         * @param ratios - Array of ImageRatio
         * @returns - Array of string
         */

      }, {
        key: "parseRatioToString",
        value: function parseRatioToString(ratios) {
          if (!ratios) {
            return undefined;
          }

          var parsedRatio = [];
          ratios.map(function (r) {
            return parsedRatio.push("".concat(r.widthRatio.toString(), ":").concat(r.heightRatio.toString()));
          });
          return parsedRatio;
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
        key: "buttonMessage",
        get: function get() {
          return this.dragInProgress ? "Drop File".concat(this.multiple ? 's' : '') : "Select File".concat(this.multiple ? 's' : '');
        }
        /**
         * Compose and expose all hints to the template
         *
         * @returns An array of hints
         */

      }, {
        key: "hints",
        get: function get() {
          var hints = [];
          var types = this.acceptedTypes.slice().map(function (v) {
            return v.split('/')[1];
          }).join(', ');
          var allowsImage = this.acceptedTypes.indexOf('image/png') >= 0 || this.acceptedTypes.indexOf('image/jpeg') >= 0 || this.acceptedTypes.indexOf('image/jpg') >= 0;

          if (allowsImage && this.supportedImageDimensions.length > 0) {
            hints.push("Must be a valid dimension: ".concat(this.supportedImageDimensions));
          }

          hints.push("Must be ".concat(types));
          hints.push("Must be under ".concat(this.maximumKilobytesPerFile.toLocaleString(), "kb"));

          if (this.ratioConstraints) {
            hints.push("Must have valid image ratio of ".concat(this.ratioConstraints.join(' or '), " "));
          }

          return hints;
        }
        /**
         * Compose supported image dimensions as a string
         *
         * @returns A string containing all allowed image dimensions
         */

      }, {
        key: "supportedImageDimensions",
        get: function get() {
          var myString = ''; // istanbul ignore else

          if (this.dimensionConstraints) {
            var constraints = this.dimensionConstraints.slice();

            var _iterator3 = _createForOfIteratorHelper(constraints),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var c = _step3.value;

                // If not the first item, add a comma between the last item and the new
                if (myString.length > 0) {
                  myString += ', ';
                } // If a fixed size


                if (c.height.min === c.height.max && c.width.min === c.width.max) {
                  myString += "".concat(c.width.min.toLocaleString(), "x").concat(c.height.min.toLocaleString());
                } else {
                  // Dealing with a size range
                  var height = c.height.min === c.height.max ? c.height.min.toLocaleString() : "".concat(c.height.min.toLocaleString(), "-").concat(c.height.max.toLocaleString());
                  var width = c.width.min === c.width.max ? c.width.min.toLocaleString() : "".concat(c.width.min.toLocaleString(), "-").concat(c.width.max.toLocaleString());
                  var range = "".concat(width, "x").concat(height);
                  myString += range;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          return myString;
        }
        /**
         * Define the accepted mime types
         *
         * @param value
         */

      }, {
        key: "accept",
        set: function set(value) {
          if (value) {
            this._acceptedTypes = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceArray"])(value);
          } else {
            this._acceptedTypes = TS_ACCEPTED_MIME_TYPES.slice();
          }
        } // NOTE: Setter name is different to allow different types passed in vs returned

      }, {
        key: "acceptedTypes",
        get: function get() {
          return this._acceptedTypes;
        }
        /**
         * Define maximum and minimum pixel dimensions for images
         *
         * @param value
         */

      }, {
        key: "dimensionConstraints",
        set: function set(value) {
          this._sizeConstraints = value;
        },
        get: function get() {
          return this._sizeConstraints;
        }
        /**
         * Create a form control to manage validation messages
         *
         * @param ctrl
         */

      }, {
        key: "formControl",
        set: function set(ctrl) {
          this._formControl = ctrl ? ctrl : new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        },
        get: function get() {
          return this._formControl;
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
         * Define the maximum file size in kilobytes
         *
         * @param value
         */

      }, {
        key: "maximumKilobytesPerFile",
        set: function set(value) {
          this._maximumKilobytesPerFile = value || MAXIMUM_KILOBYTES_PER_FILE;
        },
        get: function get() {
          return this._maximumKilobytesPerFile;
        }
        /**
         * Define the upload progress
         *
         * @param value
         */

      }, {
        key: "progress",
        set: function set(value) {
          this._progress = Object(_terminus_ngx_tools_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceNumberProperty"])(value);
        },
        get: function get() {
          return this._progress;
        }
        /**
         * Define supported ratio for images
         *
         * @param values
         */

      }, {
        key: "ratioConstraints",
        set: function set(values) {
          if (values) {
            var _iterator4 = _createForOfIteratorHelper(values),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var value = _step4.value;
                var v = value.split(':');
                var minPartsForValidRatio = 2;

                if (v.length !== minPartsForValidRatio || !Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__["isNumber"])(v[0]) || !Object(_terminus_ngx_tools_type_guards__WEBPACK_IMPORTED_MODULE_16__["isNumber"])(v[1])) {
                  throw new Error('TsFileUploadComponent: An array of image ratios should be formatted as ["1:2", "3:4"]');
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          this._ratioConstraints = this.parseRatioStringToObject(values);
        },
        get: function get() {
          return this.parseRatioToString(this._ratioConstraints);
        }
        /**
         * Seed an existing file (used for multiple upload hack)
         *
         * @param file
         */

      }, {
        key: "seedFile",
        set: function set(file) {
          var _this6 = this;

          this._seedFile = file;

          if (file) {
            var newFile = new TsSelectedFile(file, this.dimensionConstraints, this.acceptedTypes, this.maximumKilobytesPerFile, this._ratioConstraints);
            newFile.fileLoaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(function (t) {
              return t !== undefined;
            }), Object(_terminus_ngx_tools_utilities__WEBPACK_IMPORTED_MODULE_17__["untilComponentDestroyed"])(this)).subscribe(function (f) {
              _this6.formControl.setValue(f.file);

              _this6.selected.emit(f);

              _this6.setUpNewFile(f);
            });
          }
        },
        get: function get() {
          return this._seedFile;
        }
      }]);

      return TsFileUploadComponent;
    }(_terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_19__["TsReactiveFormBaseComponent"]);

    TsFileUploadComponent.ctorParameters = function () {
      return [{
        type: _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: TsDropProtectionService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('preview'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], TsFileUploadComponent.prototype, "preview", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], TsFileUploadComponent.prototype, "accept", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TsFileUploadComponent.prototype, "dimensionConstraints", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]])], TsFileUploadComponent.prototype, "formControl", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "hideButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], TsFileUploadComponent.prototype, "id", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], TsFileUploadComponent.prototype, "maximumKilobytesPerFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "multiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], TsFileUploadComponent.prototype, "progress", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], TsFileUploadComponent.prototype, "ratioConstraints", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", File), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [File])], TsFileUploadComponent.prototype, "seedFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], TsFileUploadComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "cleared", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "enter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "exit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "selected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TsFileUploadComponent.prototype, "selectedMultiple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('dragover', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TsFileUploadComponent.prototype, "handleDragover", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('dragleave', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TsFileUploadComponent.prototype, "handleDragleave", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TsFileUploadComponent.prototype, "handleDrop", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], TsFileUploadComponent.prototype, "handleClick", null);
    TsFileUploadComponent = TsFileUploadComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ts-file-upload',
      template: "<div\n  class=\"c-file-upload qa-file-upload\"\n  [class.c-file-upload--disabled]=\"isDisabled\"\n  [class.c-file-upload--drag]=\"dragInProgress\"\n  [class.c-file-upload--file]=\"file\"\n  [class.c-file-upload--error]=\"file && !file.isValid\"\n  [id]=\"id\"\n  tabindex=\"1\"\n  fxLayout=\"column\"\n>\n  <div\n    fxLayout=\"row\"\n    fxLayoutAlign=\"start center\"\n    [fxLayoutGap]=\"layoutGap\"\n  >\n    <div\n      class=\"c-file-upload__empty qa-file-upload-empty\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"start center\"\n      fxFlex=\"grow\"\n      *ngIf=\"!file\"\n    >\n      <!--\n        NOTE: If the copy isn't touching the </ts-icon> closing tag too much space will exist between the icon and text\n      -->\n      <ts-icon [inline]=\"true\">\n        cloud_upload\n      </ts-icon>Drop file{{ multiple ? 's' : '' }} here\n      {{ hideButton ? 'or click to select' : '' }}\n    </div>\n\n    <div\n      class=\"c-file-upload__file\"\n      [class.c-file-upload__file--hidden]=\"!file\"\n      fxFlex\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center start\"\n    >\n\n      <div\n        fxFill\n        fxLayout=\"row\"\n        fxLayoutAlign=\"start center\"\n      >\n        <div\n          class=\"c-file-upload__preview qa-file-upload-preview\"\n          [hidden]=\"!file\"\n          fxFlex=\"noshrink\"\n        >\n          <img\n            #preview\n            alt=\"\"\n            [attr.src]=\"file?.fileContents\"\n            *ngIf=\"file?.isImage\"\n          >\n\n          <ts-icon\n            [svgIcon]=\"'csv'\"\n            *ngIf=\"file?.isCSV\"\n          ></ts-icon>\n        </div>\n\n        <div\n          class=\"c-file-upload__filename qa-file-upload-name\"\n          fxFlex=\"grow\"\n          fxLayout=\"row\"\n          fxLayoutAlign=\"start center\"\n          title=\"{{ file?.name }}\"\n        >\n          <div class=\"c-file-upload__filename-inner\">\n            {{ file?.name }}\n          </div>\n        </div>\n\n        <ts-tooltip tooltipValue=\"Remove file\">\n          <ts-icon-button\n            class=\"c-file-upload__remove qa-file-upload-remove\"\n            theme=\"warn\"\n            actionName=\"Reset\"\n            (click)=\"removeFile($event)\"\n          >clear</ts-icon-button>\n        </ts-tooltip>\n      </div>\n    </div>\n\n    <ts-button\n      class=\"c-file-upload__prompt qa-file-upload-prompt\"\n      [class.c-file-upload__prompt--hidden]=\"hideButton\"\n      [theme]=\"theme\"\n      [isDisabled]=\"dragInProgress || isDisabled\"\n      (clicked)=\"promptForFiles()\"\n    >\n      {{ buttonMessage }}\n    </ts-button>\n  </div>\n\n  <mat-progress-bar\n    *ngIf=\"file && progress > 0\"\n    class=\"c-file-upload__progress qa-file-upload-progress\"\n    mode=\"determinate\"\n    [value]=\"progress\"\n    [color]=\"theme\"\n  ></mat-progress-bar>\n</div>\n\n<div\n  fxLayout=\"column\"\n  fxLayout.gt-xs=\"row\"\n>\n  <ts-validation-messages\n    fxFlex=\"noshrink\"\n    class=\"qa-file-upload-validation-messages\"\n    *ngIf=\"formControl && formControl.errors\"\n    [control]=\"formControl\"\n  ></ts-validation-messages>\n\n\n  <div fxFlex=\"grow\" class=\"c-file-upload__hints qa-file-upload-hints\">\n    <div\n      class=\"c-file-upload__hint\"\n      *ngFor=\"let hint of hints; trackBy: trackByFn\"\n    >\n      {{ hint }}\n    </div>\n  </div>\n</div>\n",
      host: {
        'class': 'ts-file-upload',
        '(keydown)': 'handleKeydown($event)'
      },
      providers: [Object(_terminus_ui_utilities__WEBPACK_IMPORTED_MODULE_19__["ControlValueAccessorProviderFactory"])(TsFileUploadComponent_1)],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      exportAs: 'tsFileUpload',
      styles: [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-file-upload{display:block;position:relative}.ts-file-upload .c-file-upload:not(.c-file-upload--disabled){cursor:pointer}.ts-file-upload+.ts-file-upload{margin-top:24px}.c-file-upload{border:1px dashed #cecdd1;border-radius:3px;padding:12px;transition:background-color .2s ease-out,border-color .2s ease-out;will-change:background-color,border-color}.c-file-upload:focus:not(.c-file-upload--disabled),.c-file-upload:hover:not(.c-file-upload--disabled){border-color:#1777b6}.c-file-upload--drag{background-color:#d3eaf9;border-color:#1777b6}.c-file-upload--drag .c-file-upload__remove{opacity:0}.c-file-upload--file{border-color:#1777b6}.c-file-upload--error{border-color:#c8604d}.c-file-upload.c-file-upload--disabled .c-file-upload__empty{color:#cecdd1}.c-file-upload .c-file-upload__file{font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;font-family:Lucida Console,Monaco,DejaVu Sans Mono,monospace;color:#757575;overflow:auto;position:relative}.c-file-upload .c-file-upload__file--hidden{position:absolute;visibility:hidden}.c-file-upload .c-file-upload__empty{color:#757575}.c-file-upload .c-file-upload__empty .ts-icon{margin-right:4px}.c-file-upload .c-file-upload__preview{border:1px solid #cecdd1;border-radius:3px;height:2.375rem;margin-right:12px;max-width:4.75rem;overflow:hidden;padding:4px;position:relative}.c-file-upload .c-file-upload__preview img{display:block;max-height:100%;max-width:100%}.c-file-upload .c-file-upload__filename{overflow:hidden}.c-file-upload .c-file-upload__filename-inner{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.c-file-upload .c-file-upload__remove{transition:color .2s,opacity .1s;will-change:color,opacity}.c-file-upload .c-file-upload__progress{display:block;margin-top:12px}.c-file-upload .c-file-upload__progress .mat-progress-bar-buffer{background-color:#d3eaf9}.c-file-upload .c-file-upload__prompt{pointer-events:none}.c-file-upload .c-file-upload__prompt--hidden{position:absolute;visibility:hidden}.c-file-upload__hints{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;color:#999;font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;padding:.3em .4em .2em;text-align:right}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], TsDropProtectionService])], TsFileUploadComponent);

    var TsFileUploadModule = function TsFileUploadModule() {
      _classCallCheck(this, TsFileUploadModule);
    };

    TsFileUploadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_7__["TsButtonModule"], _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_9__["TsIconButtonModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_8__["TsIconModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_11__["TsTooltipModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesModule"]],
      declarations: [TsFileUploadComponent],
      providers: [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_10__["TsDatePipe"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], TsDropProtectionService],
      exports: [TsFileUploadComponent]
    })], TsFileUploadModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=terminus-ui-file-upload.js.map

    /***/
  },

  /***/
  "../../dist/libs/ui/file-upload/terminus-ui-file-upload.ngfactory.js":
  /*!*****************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/dist/libs/ui/file-upload/terminus-ui-file-upload.ngfactory.js ***!
    \*****************************************************************************************************************/

  /*! exports provided: TsFileUploadModuleNgFactory, RenderType_TsFileUploadComponent, View_TsFileUploadComponent_0, View_TsFileUploadComponent_Host_0, TsFileUploadComponentNgFactory */

  /***/
  function distLibsUiFileUploadTerminusUiFileUploadNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFileUploadModuleNgFactory", function () {
      return TsFileUploadModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TsFileUploadComponent", function () {
      return RenderType_TsFileUploadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsFileUploadComponent_0", function () {
      return View_TsFileUploadComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TsFileUploadComponent_Host_0", function () {
      return View_TsFileUploadComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TsFileUploadComponentNgFactory", function () {
      return TsFileUploadComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @terminus/ui-file-upload */
    "../../dist/libs/ui/file-upload/fesm2015/terminus-ui-file-upload.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @terminus/ui-icon-button */
    "../../dist/libs/ui/icon-button/fesm2015/terminus-ui-icon-button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../icon/terminus-ui-icon.ngfactory */
    "../../dist/libs/ui/icon/terminus-ui-icon.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _node_modules_angular_material_progress_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/progress-bar/index.ngfactory */
    "../../node_modules/@angular/material/progress-bar/index.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _validation_messages_terminus_ui_validation_messages_ngfactory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../validation-messages/terminus-ui-validation-messages.ngfactory */
    "../../dist/libs/ui/validation-messages/terminus-ui-validation-messages.ngfactory.js");
    /* harmony import */


    var _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../tooltip/terminus-ui-tooltip.ngfactory */
    "../../dist/libs/ui/tooltip/terminus-ui-tooltip.ngfactory.js");
    /* harmony import */


    var _icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../icon-button/terminus-ui-icon-button.ngfactory */
    "../../dist/libs/ui/icon-button/terminus-ui-icon-button.ngfactory.js");
    /* harmony import */


    var _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../button/terminus-ui-button.ngfactory */
    "../../dist/libs/ui/button/terminus-ui-button.ngfactory.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var TsFileUploadModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsFileUploadModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsDropProtectionService"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsDropProtectionService"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_25__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_25__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_26__["TsIconButtonModule"], _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_26__["TsIconButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_27__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_29__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_29__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_11__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsFileUploadModule"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsFileUploadModule"], [])]);
    });

    var styles_TsFileUploadComponent = [":root{--swift-ease-out-duration:var(--ts-animation-time-duration-400);--swift-ease-out-timing-function:cubic-bezier(.25, .8, .25, 1);--swift-ease-in-duration:var(--ts-animation-time-duration-300);--swift-ease-in-timing-function:cubic-bezier(.55, 0, .55, .2)}.cdk-drag{position:relative}.cdk-drag:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag .cdk-drag-handle{color:#cecdd1;cursor:ns-resize;position:absolute;right:8px}.cdk-drag.cdk-drag-preview{--shadow:0 5px 5px -3px rgba(0, 0, 0, .2),0 8px 10px 1px rgba(0, 0, 0, .14),0 3px 14px 2px rgba(0, 0, 0, .12);background-color:#fafafa;box-shadow:var(--shadow);min-height:50px;padding:0!important}.cdk-drag.cdk-drag-preview .c-checkbox{margin-left:16px}.cdk-drag-placeholder{--drop-bg:#cce8d5;--drop-border:#7fd09c;background:var(--drop-bg);border:2px dotted var(--drop-border);cursor:ns-resize;transition:transform 250ms cubic-bezier(0,0,.2,1)}.u-visually-hidden{border:0;-webkit-clip-path:rect(0,0,0,0);clip-path:rect(0,0,0,0);display:block;height:1px;margin:-1px;overflow:hidden;padding:0;pointer-events:none;position:absolute;visibility:hidden;width:1px}.ts-file-upload{display:block;position:relative}.ts-file-upload .c-file-upload:not(.c-file-upload--disabled){cursor:pointer}.ts-file-upload+.ts-file-upload{margin-top:24px}.c-file-upload{border:1px dashed #cecdd1;border-radius:3px;padding:12px;transition:background-color .2s ease-out,border-color .2s ease-out;will-change:background-color,border-color}.c-file-upload:focus:not(.c-file-upload--disabled),.c-file-upload:hover:not(.c-file-upload--disabled){border-color:#1777b6}.c-file-upload--drag{background-color:#d3eaf9;border-color:#1777b6}.c-file-upload--drag .c-file-upload__remove{opacity:0}.c-file-upload--file{border-color:#1777b6}.c-file-upload--error{border-color:#c8604d}.c-file-upload.c-file-upload--disabled .c-file-upload__empty{color:#cecdd1}.c-file-upload .c-file-upload__file{font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;font-family:Lucida Console,Monaco,DejaVu Sans Mono,monospace;color:#757575;overflow:auto;position:relative}.c-file-upload .c-file-upload__file--hidden{position:absolute;visibility:hidden}.c-file-upload .c-file-upload__empty{color:#757575}.c-file-upload .c-file-upload__empty .ts-icon{margin-right:4px}.c-file-upload .c-file-upload__preview{border:1px solid #cecdd1;border-radius:3px;height:2.375rem;margin-right:12px;max-width:4.75rem;overflow:hidden;padding:4px;position:relative}.c-file-upload .c-file-upload__preview img{display:block;max-height:100%;max-width:100%}.c-file-upload .c-file-upload__filename{overflow:hidden}.c-file-upload .c-file-upload__filename-inner{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.c-file-upload .c-file-upload__remove{transition:color .2s,opacity .1s;will-change:color,opacity}.c-file-upload .c-file-upload__progress{display:block;margin-top:12px}.c-file-upload .c-file-upload__progress .mat-progress-bar-buffer{background-color:#d3eaf9}.c-file-upload .c-file-upload__prompt{pointer-events:none}.c-file-upload .c-file-upload__prompt--hidden{position:absolute;visibility:hidden}.c-file-upload__hints{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;color:#999;font-size:75%;font-weight:400;letter-spacing:.01em;line-height:1.5;padding:.3em .4em .2em;text-align:right}"];

    var RenderType_TsFileUploadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TsFileUploadComponent,
      data: {}
    });

    function View_TsFileUploadComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "c-file-upload__empty qa-file-upload-empty"], ["fxFlex", "grow"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 2, "ts-icon", [["class", "ts-icon"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_TsIconComponent_0"], _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["DomSanitizer"]], {
        inline: [0, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, [" cloud_upload "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["Drop file", " here ", " "]))], function (_ck, _v) {
        var currVal_0 = "row";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = "start center";

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = "grow";

        _ck(_v, 3, 0, currVal_2);

        var currVal_8 = true;

        _ck(_v, 5, 0, currVal_8);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).inline;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).theme === "primary";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).theme === "accent";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).theme === "warn";

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).background;

        _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_9 = _co.multiple ? "s" : "";
        var currVal_10 = _co.hideButton ? "or click to select" : "";

        _ck(_v, 7, 0, currVal_9, currVal_10);
      });
    }

    function View_TsFileUploadComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[1, 0], ["preview", 1]], null, 0, "img", [["alt", ""]], [[1, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.file == null ? null : _co.file.fileContents;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_TsFileUploadComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ts-icon", [["class", "ts-icon"]], [[2, "ts-icon--inline", null], [2, "ts-icon--primary", null], [2, "ts-icon--accent", null], [2, "ts-icon--warn", null], [2, "ts-icon--background", null]], null, null, _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_TsIconComponent_0"], _icon_terminus_ui_icon_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_TsIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_24__["TsIconComponent"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["DomSanitizer"]], {
        svgIcon: [0, "svgIcon"]
      }, null)], function (_ck, _v) {
        var currVal_5 = "csv";

        _ck(_v, 1, 0, currVal_5);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).inline;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "primary";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "accent";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).theme === "warn";

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).background;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      });
    }

    function View_TsFileUploadComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "c-file-upload__progress qa-file-upload-progress mat-progress-bar"], ["mode", "determinate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_32__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MAT_PROGRESS_BAR_LOCATION"]]], {
        color: [0, "color"],
        value: [1, "value"],
        mode: [2, "mode"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.theme;
        var currVal_4 = _co.progress;
        var currVal_5 = "determinate";

        _ck(_v, 1, 0, currVal_3, currVal_4, currVal_5);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "indeterminate" || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "query" ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).value;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isNoopAnimation;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_TsFileUploadComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-validation-messages", [["class", "qa-file-upload-validation-messages ts-validation-messages"], ["fxFlex", "noshrink"]], null, null, null, _validation_messages_terminus_ui_validation_messages_ngfactory__WEBPACK_IMPORTED_MODULE_34__["View_TsValidationMessagesComponent_0"], _validation_messages_terminus_ui_validation_messages_ngfactory__WEBPACK_IMPORTED_MODULE_34__["RenderType_TsValidationMessagesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesComponent"], [_terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_12__["TsValidationMessagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        control: [0, "control"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "noshrink";

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.formControl;

        _ck(_v, 2, 0, currVal_1);
      }, null);
    }

    function View_TsFileUploadComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "c-file-upload__hint"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_TsFileUploadComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        preview: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 37, "div", [["class", "c-file-upload qa-file-upload"], ["fxLayout", "column"], ["tabindex", "1"]], [[2, "c-file-upload--disabled", null], [2, "c-file-upload--drag", null], [2, "c-file-upload--file", null], [2, "c-file-upload--error", null], [8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 33, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsFileUploadComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 24, "div", [["class", "c-file-upload__file"], ["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center start"]], [[2, "c-file-upload__file--hidden", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 20, "div", [["fxFill", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 5, "div", [["class", "c-file-upload__preview qa-file-upload-preview"], ["fxFlex", "noshrink"]], [[8, "hidden", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsFileUploadComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsFileUploadComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 5, "div", [["class", "c-file-upload__filename qa-file-upload-name"], ["fxFlex", "grow"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], [[8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutAlignStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayoutAlign: [0, "fxLayoutAlign"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "div", [["class", "c-file-upload__filename-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](28, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 4, "ts-tooltip", [["class", "ts-tooltip"], ["tooltipValue", "Remove file"]], null, null, null, _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_35__["View_TsTooltipComponent_0"], _tooltip_terminus_ui_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_35__["RenderType_TsTooltipComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 49152, null, 0, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_29__["TsTooltipComponent"], [], {
        tooltipValue: [0, "tooltipValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, 0, 2, "ts-icon-button", [["actionName", "Reset"], ["class", "c-file-upload__remove qa-file-upload-remove ts-icon-button"], ["theme", "warn"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeFile($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_TsIconButtonComponent_0"], _icon_button_terminus_ui_icon_button_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_TsIconButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 49152, null, 0, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_26__["TsIconButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        actionName: [0, "actionName"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["clear"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 2, "ts-button", [["class", "c-file-upload__prompt qa-file-upload-prompt ts-button"]], [[2, "c-file-upload__prompt--hidden", null]], [[null, "clicked"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("clicked" === en) {
          var pd_0 = _co.promptForFiles() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_37__["View_TsButtonComponent_0"], _button_terminus_ui_button_ngfactory__WEBPACK_IMPORTED_MODULE_37__["RenderType_TsButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 245760, null, 0, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_25__["TsButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsWindowService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        isDisabled: [0, "isDisabled"],
        theme: [1, "theme"]
      }, {
        clicked: "clicked"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsFileUploadComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 7, "div", [["fxLayout", "column"], ["fxLayout.gt-xs", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.gt-xs": [1, "fxLayout.gt-xs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsFileUploadComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 3, "div", [["class", "c-file-upload__hints qa-file-upload-hints"], ["fxFlex", "grow"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_4__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TsFileUploadComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_5 = "column";

        _ck(_v, 2, 0, currVal_5);

        var currVal_6 = "row";

        _ck(_v, 4, 0, currVal_6);

        var currVal_7 = _co.layoutGap;

        _ck(_v, 5, 0, currVal_7);

        var currVal_8 = "start center";

        _ck(_v, 6, 0, currVal_8);

        var currVal_9 = !_co.file;

        _ck(_v, 8, 0, currVal_9);

        var currVal_11 = "column";

        _ck(_v, 10, 0, currVal_11);

        var currVal_12 = "center start";

        _ck(_v, 11, 0, currVal_12);

        var currVal_13 = "";

        _ck(_v, 12, 0, currVal_13);

        var currVal_14 = "row";

        _ck(_v, 14, 0, currVal_14);

        var currVal_15 = "start center";

        _ck(_v, 15, 0, currVal_15);

        var currVal_17 = "noshrink";

        _ck(_v, 18, 0, currVal_17);

        var currVal_18 = _co.file == null ? null : _co.file.isImage;

        _ck(_v, 20, 0, currVal_18);

        var currVal_19 = _co.file == null ? null : _co.file.isCSV;

        _ck(_v, 22, 0, currVal_19);

        var currVal_21 = "row";

        _ck(_v, 24, 0, currVal_21);

        var currVal_22 = "start center";

        _ck(_v, 25, 0, currVal_22);

        var currVal_23 = "grow";

        _ck(_v, 26, 0, currVal_23);

        var currVal_25 = "Remove file";

        _ck(_v, 30, 0, currVal_25);

        var currVal_26 = "Reset";

        _ck(_v, 32, 0, currVal_26);

        var currVal_28 = _co.dragInProgress || _co.isDisabled;
        var currVal_29 = _co.theme;

        _ck(_v, 35, 0, currVal_28, currVal_29);

        var currVal_31 = _co.file && _co.progress > 0;

        _ck(_v, 38, 0, currVal_31);

        var currVal_32 = "column";
        var currVal_33 = "row";

        _ck(_v, 40, 0, currVal_32, currVal_33);

        var currVal_34 = _co.formControl && _co.formControl.errors;

        _ck(_v, 42, 0, currVal_34);

        var currVal_35 = "grow";

        _ck(_v, 44, 0, currVal_35);

        var currVal_36 = _co.hints;
        var currVal_37 = _co.trackByFn;

        _ck(_v, 46, 0, currVal_36, currVal_37);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isDisabled;
        var currVal_1 = _co.dragInProgress;
        var currVal_2 = _co.file;
        var currVal_3 = _co.file && !_co.file.isValid;
        var currVal_4 = _co.id;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

        var currVal_10 = !_co.file;

        _ck(_v, 9, 0, currVal_10);

        var currVal_16 = !_co.file;

        _ck(_v, 17, 0, currVal_16);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.file == null ? null : _co.file.name, "");

        _ck(_v, 23, 0, currVal_20);

        var currVal_24 = _co.file == null ? null : _co.file.name;

        _ck(_v, 28, 0, currVal_24);

        var currVal_27 = _co.hideButton;

        _ck(_v, 34, 0, currVal_27);

        var currVal_30 = _co.buttonMessage;

        _ck(_v, 36, 0, currVal_30);
      });
    }

    function View_TsFileUploadComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-file-upload", [["class", "ts-file-upload"]], null, [[null, "keydown"], [null, "dragover"], [null, "dragleave"], [null, "drop"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("dragover" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleDragover($event) !== false;
          ad = pd_1 && ad;
        }

        if ("dragleave" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleDragleave($event) !== false;
          ad = pd_2 && ad;
        }

        if ("drop" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleDrop($event) !== false;
          ad = pd_3 && ad;
        }

        if ("click" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleClick() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, View_TsFileUploadComponent_0, RenderType_TsFileUploadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsFileUploadComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1818624, null, 0, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsFileUploadComponent"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsDropProtectionService"]], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, null);
    }

    var TsFileUploadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ts-file-upload", _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_1__["TsFileUploadComponent"], View_TsFileUploadComponent_Host_0, {
      formControl: "formControl",
      accept: "accept",
      dimensionConstraints: "dimensionConstraints",
      hideButton: "hideButton",
      id: "id",
      isDisabled: "isDisabled",
      maximumKilobytesPerFile: "maximumKilobytesPerFile",
      multiple: "multiple",
      progress: "progress",
      ratioConstraints: "ratioConstraints",
      seedFile: "seedFile",
      theme: "theme"
    }, {
      cleared: "cleared",
      enter: "enter",
      exit: "exit",
      selected: "selected",
      selectedMultiple: "selectedMultiple"
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
  "../../node_modules/@angular/material/fesm2015/progress-bar.js":
  /*!***********************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/material/fesm2015/progress-bar.js ***!
    \***********************************************************************************************************/

  /*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */

  /***/
  function node_modulesAngularMaterialFesm2015ProgressBarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
      return MAT_PROGRESS_BAR_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
      return MAT_PROGRESS_BAR_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
      return MatProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
      return MatProgressBarModule;
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


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/progress-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Last animation end data.
     * @record
     */


    function ProgressAnimationEnd() {}

    if (false) {} // Boilerplate for applying mixins to MatProgressBar.

    /**
     * \@docs-private
     */


    var MatProgressBarBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressBarBase(_elementRef) {
      _classCallCheck(this, MatProgressBarBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
    /**
     * Injection token used to provide the current location to `MatProgressBar`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
      providedIn: 'root',
      factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
    });
    /**
     * Stubbed out location for `MatProgressBar`.
     * \@docs-private
     * @record
     */

    function MatProgressBarLocation() {}

    if (false) {}
    /**
     * \@docs-private
     * @return {?}
     */


    function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * Counter used to generate unique IDs for progress bars.
     * @type {?}
     */


    var progressbarId = 0;
    /**
     * `<mat-progress-bar>` component.
     */

    var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
      _inherits(MatProgressBar, _MatProgressBarMixinB);

      var _super2 = _createSuper(MatProgressBar);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?=} _animationMode
       * @param {?=} location
       */
      function MatProgressBar(_elementRef, _ngZone, _animationMode,
      /**
       * @deprecated `location` parameter to be made required.
       * @breaking-change 8.0.0
       */
      location) {
        var _this7;

        _classCallCheck(this, MatProgressBar);

        _this7 = _super2.call(this, _elementRef);
        _this7._elementRef = _elementRef;
        _this7._ngZone = _ngZone;
        _this7._animationMode = _animationMode;
        /**
         * Flag that indicates whether NoopAnimations mode is set to true.
         */

        _this7._isNoopAnimation = false;
        _this7._value = 0;
        _this7._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */

        _this7.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Reference to animation end subscription to be unsubscribed on destroy.
         */

        _this7._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */

        _this7.mode = 'determinate';
        /**
         * ID of the progress bar.
         */

        _this7.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.

        /** @type {?} */

        var path = location ? location.getPathname().split('#')[0] : '';
        _this7._rectangleFillValue = "url('".concat(path, "#").concat(_this7.progressbarId, "')");
        _this7._isNoopAnimation = _animationMode === 'NoopAnimations';
        return _this7;
      }
      /**
       * Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.
       * @return {?}
       */


      _createClass(MatProgressBar, [{
        key: "_primaryTransform",

        /**
         * Gets the current transform value for the progress bar's primary indicator.
         * @return {?}
         */
        value: function _primaryTransform() {
          /** @type {?} */
          var scale = this.value / 100;
          return {
            transform: "scaleX(".concat(scale, ")")
          };
        }
        /**
         * Gets the current transform value for the progress bar's buffer indicator. Only used if the
         * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
         * @return {?}
         */

      }, {
        key: "_bufferTransform",
        value: function _bufferTransform() {
          if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return {
              transform: "scaleX(".concat(scale, ")")
            };
          }

          return null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this8 = this;

          // Run outside angular so change detection didn't get triggered on every transition end
          // instead only on the animation that we care about (primary value bar's transitionend)
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var element = _this8._primaryValueBar.nativeElement;
            _this8._animationEndSubscription =
            /** @type {?} */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e.target === element;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this8.mode === 'determinate' || _this8.mode === 'buffer') {
                _this8._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this8.animationEnd.next({
                    value: _this8.value
                  });
                });
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._animationEndSubscription.unsubscribe();
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
        }
        /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */

      }, {
        key: "bufferValue",
        get: function get() {
          return this._bufferValue;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._bufferValue = clamp(v || 0);
        }
      }]);

      return MatProgressBar;
    }(_MatProgressBarMixinBase);

    MatProgressBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-progress-bar',
        exportAs: 'matProgressBar',
        host: {
          'role': 'progressbar',
          'aria-valuemin': '0',
          'aria-valuemax': '100',
          '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
          '[attr.mode]': 'mode',
          'class': 'mat-progress-bar',
          '[class._mat-animation-noopable]': '_isNoopAnimation'
        },
        inputs: ['color'],
        template: "<!--\n  The background div is named as such because it appears below the other divs and is not sized based\n  on values.\n-->\n<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n  <defs>\n    <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n    </pattern>\n  </defs>\n  <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n</svg>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
      }]
    }];
    /** @nocollapse */

    MatProgressBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_BAR_LOCATION]
        }]
      }];
    };

    MatProgressBar.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _primaryValueBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['primaryValueBar']
      }],
      animationEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * Clamps a value to be between two numbers, by default 0 and 100.
     * @param {?} v
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */


    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      return Math.max(min, Math.min(max, v));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/progress-bar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressBarModule = function MatProgressBarModule() {
      _classCallCheck(this, MatProgressBarModule);
    };

    MatProgressBarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        declarations: [MatProgressBar]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/progress-bar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=progress-bar.js.map

    /***/
  },

  /***/
  "../../node_modules/@angular/material/progress-bar/index.ngfactory.js":
  /*!******************************************************************************************************************!*\
    !*** /home/runner/work/terminus-oss/terminus-oss/node_modules/@angular/material/progress-bar/index.ngfactory.js ***!
    \******************************************************************************************************************/

  /*! exports provided: MatProgressBarModuleNgFactory, RenderType_MatProgressBar, View_MatProgressBar_0, View_MatProgressBar_Host_0, MatProgressBarNgFactory */

  /***/
  function node_modulesAngularMaterialProgressBarIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarModuleNgFactory", function () {
      return MatProgressBarModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatProgressBar", function () {
      return RenderType_MatProgressBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatProgressBar_0", function () {
      return View_MatProgressBar_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatProgressBar_Host_0", function () {
      return View_MatProgressBar_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarNgFactory", function () {
      return MatProgressBarNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/fesm2015/progress-bar.js");
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var MatProgressBarModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], [])]);
    });

    var styles_MatProgressBar = [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"];

    var RenderType_MatProgressBar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatProgressBar,
      data: {}
    });

    function View_MatProgressBar_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        _primaryValueBar: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, ":svg:svg", [["class", "mat-progress-bar-background mat-progress-bar-element"], ["focusable", "false"], ["height", "4"], ["width", "100%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, ":svg:pattern", [["height", "4"], ["patternUnits", "userSpaceOnUse"], ["width", "8"], ["x", "4"], ["y", "0"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, ":svg:circle", [["cx", "2"], ["cy", "2"], ["r", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, ":svg:rect", [["height", "100%"], ["width", "100%"]], [[1, "fill", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [["class", "mat-progress-bar-buffer mat-progress-bar-element"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, [[1, 0], ["primaryValueBar", 1]], null, 1, "div", [["class", "mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
        ngStyle: [0, "ngStyle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "div", [["class", "mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _co._bufferTransform();

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _co._primaryTransform();

        _ck(_v, 9, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.progressbarId;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _co._rectangleFillValue;

        _ck(_v, 5, 0, currVal_1);
      });
    }

    function View_MatProgressBar_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, View_MatProgressBar_0, RenderType_MatProgressBar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_PROGRESS_BAR_LOCATION"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "indeterminate" || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode === "query" ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).value;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).mode;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._isNoopAnimation;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    var MatProgressBarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-progress-bar", _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"], View_MatProgressBar_Host_0, {
      color: "color",
      value: "value",
      bufferValue: "bufferValue",
      mode: "mode"
    }, {
      animationEnd: "animationEnd"
    }, []);
    /***/

  },

  /***/
  "./src/app/components/file-upload/file-upload-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/file-upload/file-upload-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: FileUploadRoutingModule */

  /***/
  function srcAppComponentsFileUploadFileUploadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadRoutingModule", function () {
      return FileUploadRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./file-upload.component */
    "./src/app/components/file-upload/file-upload.component.ts");

    var routes = [{
      path: '',
      component: _file_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"]
    }];

    var FileUploadRoutingModule = function FileUploadRoutingModule() {
      _classCallCheck(this, FileUploadRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/file-upload/file-upload.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ./src/app/components/file-upload/file-upload.component.ngfactory.js ***!
    \***************************************************************************/

  /*! exports provided: RenderType_FileUploadComponent, View_FileUploadComponent_0, View_FileUploadComponent_Host_0, FileUploadComponentNgFactory */

  /***/
  function srcAppComponentsFileUploadFileUploadComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FileUploadComponent", function () {
      return RenderType_FileUploadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FileUploadComponent_0", function () {
      return View_FileUploadComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FileUploadComponent_Host_0", function () {
      return View_FileUploadComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponentNgFactory", function () {
      return FileUploadComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/option/terminus-ui-option.ngfactory */
    "../../dist/libs/ui/option/terminus-ui-option.ngfactory.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _dist_libs_ui_file_upload_terminus_ui_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/file-upload/terminus-ui-file-upload.ngfactory */
    "../../dist/libs/ui/file-upload/terminus-ui-file-upload.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @terminus/ui-file-upload */
    "../../dist/libs/ui/file-upload/fesm2015/terminus-ui-file-upload.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/card/terminus-ui-card.ngfactory */
    "../../dist/libs/ui/card/terminus-ui-card.ngfactory.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory */
    "../../dist/libs/ui/toggle/terminus-ui-toggle.ngfactory.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _dist_libs_ui_input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/input/terminus-ui-input.ngfactory */
    "../../dist/libs/ui/input/terminus-ui-input.ngfactory.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../../../../dist/libs/ui/select/terminus-ui-select.ngfactory */
    "../../dist/libs/ui/select/terminus-ui-select.ngfactory.js");
    /* harmony import */


    var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @terminus/ui-select */
    "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _file_upload_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./file-upload.component */
    "./src/app/components/file-upload/file-upload.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_FileUploadComponent = [];

    var RenderType_FileUploadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_FileUploadComponent,
      data: {}
    });

    function View_FileUploadComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ts-option", [["class", "ts-option"], ["role", "option"]], [[2, "ts-selected", null], [2, "ts-option--multiple", null], [2, "ts-option--active", null], [2, "ts-option--disabled", null], [2, "ts-option--template", null], [1, "tabindex", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [1, "title", 0], [8, "id", 0]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selectViaInteraction() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TsOptionComponent_0"], _dist_libs_ui_option_terminus_ui_option_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TsOptionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 9617408, [[2, 4]], 2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TsOptionComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTION_PARENT_COMPONENT"]], [2, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTGROUP_PARENT_COMPONENT"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        optionTemplate: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, {
        displayElementRef: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, 0, ["", ""]))], function (_ck, _v) {
        var currVal_10 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_10);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).allowMultiple;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).active;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).optionTemplate;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).tabIndex;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected.toString();

        var currVal_7 = !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).isDisabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).title;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_11 = _v.context.$implicit;

        _ck(_v, 4, 0, currVal_11);
      });
    }

    function View_FileUploadComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ts-file-upload", [["class", "ts-file-upload"]], null, [[null, "selected"], [null, "cleared"], [null, "keydown"], [null, "dragover"], [null, "dragleave"], [null, "drop"], [null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("dragover" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleDragover($event) !== false;
          ad = pd_1 && ad;
        }

        if ("dragleave" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleDragleave($event) !== false;
          ad = pd_2 && ad;
        }

        if ("drop" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleDrop($event) !== false;
          ad = pd_3 && ad;
        }

        if ("click" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).handleClick() !== false;
          ad = pd_4 && ad;
        }

        if ("selected" === en) {
          var pd_5 = _co.selected($event) !== false;
          ad = pd_5 && ad;
        }

        if ("cleared" === en) {
          var pd_6 = _co.clearFile(_v.parent.context.$implicit.id) !== false;
          ad = pd_6 && ad;
        }

        return ad;
      }, _dist_libs_ui_file_upload_terminus_ui_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsFileUploadComponent_0"], _dist_libs_ui_file_upload_terminus_ui_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsFileUploadComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__["TsFileUploadComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 1818624, null, 0, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__["TsFileUploadComponent"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__["TsDropProtectionService"]], {
        accept: [0, "accept"],
        dimensionConstraints: [1, "dimensionConstraints"],
        seedFile: [2, "seedFile"]
      }, {
        cleared: "cleared",
        selected: "selected"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.mimeTypes;
        var currVal_1 = _co.constraints;
        var currVal_2 = _v.parent.context.$implicit.file;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
      }, null);
    }

    function View_FileUploadComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_FileUploadComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.fileExists(_v.context.$implicit.id);

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_FileUploadComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 60, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_9__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_10__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "h3", [["tsVerticalSpacing", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_10__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Demo Controls"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, 0, 54, "div", [["fxLayout", "column"], ["fxLayoutGap", "24px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 6, "ts-toggle", [["class", "ts-toggle"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.multiple = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsToggleComponent_0"], _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__["TsToggleComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Allow multiple selections"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 6, "ts-toggle", [["class", "ts-toggle"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.hideButton = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsToggleComponent_0"], _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__["TsToggleComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Hide button"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 6, "ts-toggle", [["class", "ts-toggle"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.disabled = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TsToggleComponent_0"], _dist_libs_ui_toggle_terminus_ui_toggle_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TsToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 49152, null, 0, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__["TsToggleComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_15__["TsToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Disabled"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 27, "div", [["fxLayout", "row"], ["fxLayoutGap", "24px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 1720320, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["LayoutGapStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxLayoutGap: [0, "fxLayoutGap"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 8, "ts-input", [["class", "ts-input"], ["label", "Max Size (kb)"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-input--datepicker", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.maxKb = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _dist_libs_ui_input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TsInputComponent_0"], _dist_libs_ui_input_terminus_ui_input_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TsInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_17__["TsFormFieldControl"], null, [_terminus_ui_input__WEBPACK_IMPORTED_MODULE_18__["TsInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_LOCALE"], "en-US", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["DateAdapter"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_18__["TsDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 6209536, null, 0, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_18__["TsInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_21__["AutofillMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_22__["TsDatePipe"], [8, null], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["DateAdapter"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], {
        label: [0, "label"],
        type: [1, "type"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_18__["TS_DATE_FORMATS"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 14, "div", [["fxFlex", "noshrink"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 12, "ts-select", [["class", "ts-select"], ["label", "Allowed MIME types"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ts-select--required", null], [2, "ts-select--disabled", null], [1, "aria-owns", 0], [1, "aria-required", 0], [1, "aria-multiselectable", 0], [1, "tabindex", 0]], [[null, "ngModelChange"], [null, "selectionChange"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_1 = (_co.mimeTypes = $event) !== false;
          ad = pd_1 && ad;
        }

        if ("selectionChange" === en) {
          var pd_2 = _co.mimeTypeChange($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_TsSelectComponent_0"], _dist_libs_ui_select_terminus_ui_select_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_TsSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_2__["TS_OPTION_PARENT_COMPONENT"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_24__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_17__["TsFormFieldControl"], null, [_terminus_ui_select__WEBPACK_IMPORTED_MODULE_24__["TsSelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [8, null]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 1818624, null, 3, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_24__["TsSelectComponent"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], {
        allowMultiple: [0, "allowMultiple"],
        label: [1, "label"]
      }, {
        selectionChange: "selectionChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        customTrigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](256, null, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MAT_CHECKBOX_DEFAULT_OPTIONS"], {
        clickAction: "noop"
      }, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 1, 1, null, View_FileUploadComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 7, "ts-card", [["class", "ts-card"], ["tsVerticalSpacing", ""]], null, null, null, _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TsCardComponent_0"], _dist_libs_ui_card_terminus_ui_card_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TsCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 49152, null, 0, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_9__["TsCardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 16384, null, 0, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_10__["TsVerticalSpacingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        tsVerticalSpacing: [0, "tsVerticalSpacing"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, 0, 2, "ts-file-upload", [["class", "ts-file-upload"]], null, [[null, "selected"], [null, "selectedMultiple"], [null, "cleared"], [null, "keydown"], [null, "dragover"], [null, "dragleave"], [null, "drop"], [null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("dragover" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).handleDragover($event) !== false;
          ad = pd_1 && ad;
        }

        if ("dragleave" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).handleDragleave($event) !== false;
          ad = pd_2 && ad;
        }

        if ("drop" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).handleDrop($event) !== false;
          ad = pd_3 && ad;
        }

        if ("click" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).handleClick() !== false;
          ad = pd_4 && ad;
        }

        if ("selected" === en) {
          var pd_5 = _co.selected($event) !== false;
          ad = pd_5 && ad;
        }

        if ("selectedMultiple" === en) {
          var pd_6 = _co.selectedMultiple($event) !== false;
          ad = pd_6 && ad;
        }

        if ("cleared" === en) {
          var pd_7 = (_co.file = null) !== false;
          ad = pd_7 && ad;
        }

        return ad;
      }, _dist_libs_ui_file_upload_terminus_ui_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TsFileUploadComponent_0"], _dist_libs_ui_file_upload_terminus_ui_file_upload_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TsFileUploadComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__["TsFileUploadComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 1818624, null, 0, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__["TsFileUploadComponent"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_6__["TsDocumentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_5__["TsDropProtectionService"]], {
        accept: [0, "accept"],
        dimensionConstraints: [1, "dimensionConstraints"],
        hideButton: [2, "hideButton"],
        isDisabled: [3, "isDisabled"],
        maximumKilobytesPerFile: [4, "maximumKilobytesPerFile"],
        multiple: [5, "multiple"],
        progress: [6, "progress"],
        ratioConstraints: [7, "ratioConstraints"]
      }, {
        cleared: "cleared",
        selected: "selected",
        selectedMultiple: "selectedMultiple"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_FileUploadComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = "";

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = "column";

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = "24px";

        _ck(_v, 8, 0, currVal_3);

        var currVal_11 = _co.multiple;

        _ck(_v, 13, 0, currVal_11);

        var currVal_19 = _co.hideButton;

        _ck(_v, 21, 0, currVal_19);

        var currVal_27 = _co.disabled;

        _ck(_v, 29, 0, currVal_27);

        var currVal_28 = "row";

        _ck(_v, 34, 0, currVal_28);

        var currVal_29 = "24px";

        _ck(_v, 35, 0, currVal_29);

        var currVal_38 = _co.maxKb;

        _ck(_v, 39, 0, currVal_38);

        var currVal_39 = "Max Size (kb)";
        var currVal_40 = "number";

        _ck(_v, 44, 0, currVal_39, currVal_40);

        var currVal_41 = "noshrink";

        _ck(_v, 47, 0, currVal_41);

        var currVal_55 = _co.mimeTypes;

        _ck(_v, 51, 0, currVal_55);

        var currVal_56 = true;
        var currVal_57 = "Allowed MIME types";

        _ck(_v, 54, 0, currVal_56, currVal_57);

        var currVal_58 = _co.mimeTypeOptions;

        _ck(_v, 60, 0, currVal_58);

        var currVal_59 = "";

        _ck(_v, 63, 0, currVal_59);

        var currVal_60 = _co.mimeTypes;
        var currVal_61 = _co.constraints;
        var currVal_62 = _co.hideButton;
        var currVal_63 = _co.disabled;
        var currVal_64 = _co.maxKb;
        var currVal_65 = _co.multiple;
        var currVal_66 = _co.progress;
        var currVal_67 = _co.ratioConstraints;

        _ck(_v, 66, 0, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67);

        var currVal_68 = _co.files;

        _ck(_v, 68, 0, currVal_68);
      }, function (_ck, _v) {
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassValid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).ngClassPending;

        _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassUntouched;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassTouched;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassPristine;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassDirty;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassValid;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassInvalid;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).ngClassPending;

        _ck(_v, 18, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassUntouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassTouched;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassPristine;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassDirty;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassValid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassInvalid;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).ngClassPending;

        _ck(_v, 26, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassUntouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassTouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassPristine;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassDirty;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassValid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassInvalid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 41).ngClassPending;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).datepicker;

        _ck(_v, 37, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37);

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassUntouched;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassTouched;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassPristine;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassDirty;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassValid;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassInvalid;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).ngClassPending;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).isRequired;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).isDisabled;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).optionIds : null;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).isRequired.toString();

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).allowMultiple;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).tabIndex;

        _ck(_v, 48, 1, [currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54]);
      });
    }

    function View_FileUploadComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "demo-file-upload", [], null, null, null, View_FileUploadComponent_0, RenderType_FileUploadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _file_upload_component__WEBPACK_IMPORTED_MODULE_27__["FileUploadComponent"], [], null, null)], null, null);
    }

    var FileUploadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("demo-file-upload", _file_upload_component__WEBPACK_IMPORTED_MODULE_27__["FileUploadComponent"], View_FileUploadComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/file-upload/file-upload.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/file-upload/file-upload.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FileUploadComponent */

  /***/
  function srcAppComponentsFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });

    var CONSTRAINTS_MOCK = [{
      height: {
        min: 50,
        max: 100
      },
      width: {
        min: 50,
        max: 100
      }
    }, {
      height: {
        min: 72,
        max: 72
      },
      width: {
        min: 72,
        max: 72
      }
    }, {
      height: {
        min: 400,
        max: 500
      },
      width: {
        min: 700,
        max: 800
      }
    }, {
      height: {
        min: 300,
        max: 600
      },
      width: {
        min: 100,
        max: 300
      }
    }, {
      height: {
        min: 600,
        max: 600
      },
      width: {
        min: 160,
        max: 160
      }
    }, {
      height: {
        min: 2500,
        max: 2500
      },
      width: {
        min: 30000,
        max: 30000
      }
    }];

    var FileUploadComponent = /*#__PURE__*/function () {
      function FileUploadComponent() {
        _classCallCheck(this, FileUploadComponent);

        this.mimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        this.files = [];
        this.constraints = CONSTRAINTS_MOCK.slice();
        this.progress = 0;
        this.multiple = true;
        this.hideButton = false;
        this.mimeTypeOptions = ['image/png', 'image/jpg', 'image/jpeg', 'text/csv', 'video/mp4', 'video/x-flv', 'video/webm', 'video/quicktime', 'video/mpeg'];
        this.ratioConstraints = ['1:2', '1.9:1', '5:1'];
        this.disabled = false;
      }

      _createClass(FileUploadComponent, [{
        key: "selected",
        value: function selected(e) {
          console.log('DEMO: selected: ', e);
          this.file = e;
          this.startProgress();
        }
      }, {
        key: "mimeTypeChange",
        value: function mimeTypeChange(change) {
          if (change.value.length < 1) {
            this.mimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
          }
        }
      }, {
        key: "startProgress",
        value: function startProgress() {
          var _this9 = this;

          this.progress = 0;
          var counting = setInterval(function () {
            if (_this9.progress < 100) {
              _this9.progress++;
            } else {
              clearInterval(counting);
            }
          }, 20);
        }
      }, {
        key: "selectedMultiple",
        value: function selectedMultiple(e) {
          console.log('DEMO: selected multiple: ', e);
          var index = -1;
          this.files = e.map(function (f) {
            index = index + 1;
            return {
              id: index,
              file: f
            };
          });
        }
      }, {
        key: "clearFile",
        value: function clearFile(id) {
          if (!this.files || this.files.length < 1) {
            return;
          }

          this.files = this.files.filter(function (obj) {
            return obj.id !== id;
          });
        }
      }, {
        key: "fileExists",
        value: function fileExists(id) {
          if (!this.files || this.files.length < 1) {
            return false;
          }

          var found = this.files.find(function (v) {
            return v.id === id;
          });
          return !!found;
        }
      }]);

      return FileUploadComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/file-upload/file-upload.module.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/components/file-upload/file-upload.module.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: FileUploadModuleNgFactory */

  /***/
  function srcAppComponentsFileUploadFileUploadModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModuleNgFactory", function () {
      return FileUploadModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _file_upload_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./file-upload.module */
    "./src/app/components/file-upload/file-upload.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
    "../../node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _file_upload_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./file-upload.component.ngfactory */
    "./src/app/components/file-upload/file-upload.component.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/tooltip/index.ngfactory */
    "../../node_modules/@angular/material/tooltip/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/dialog/index.ngfactory */
    "../../node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/datepicker/index.ngfactory */
    "../../node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "../../node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @terminus/ngx-tools/browser */
    "../../node_modules/@terminus/ngx-tools/fesm2015/terminus-ngx-tools-browser.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "../../node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/fesm2015/tooltip.js");
    /* harmony import */


    var _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @terminus/ui-pipes */
    "../../dist/libs/ui/pipes/fesm2015/terminus-ui-pipes.js");
    /* harmony import */


    var _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @terminus/ui-validation-messages */
    "../../dist/libs/ui/validation-messages/fesm2015/terminus-ui-validation-messages.js");
    /* harmony import */


    var _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @terminus/ui-file-upload */
    "../../dist/libs/ui/file-upload/fesm2015/terminus-ui-file-upload.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "../../node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "../../node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @terminus/ui-validators */
    "../../dist/libs/ui/validators/fesm2015/terminus-ui-validators.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./file-upload-routing.module */
    "./src/app/components/file-upload/file-upload-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "../../node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "../../node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @terminus/ui-icon */
    "../../dist/libs/ui/icon/fesm2015/terminus-ui-icon.js");
    /* harmony import */


    var _terminus_ui_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @terminus/ui-card */
    "../../dist/libs/ui/card/fesm2015/terminus-ui-card.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "../../node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _terminus_ui_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @terminus/ui-button */
    "../../dist/libs/ui/button/fesm2015/terminus-ui-button.js");
    /* harmony import */


    var _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @terminus/ui-icon-button */
    "../../dist/libs/ui/icon-button/fesm2015/terminus-ui-icon-button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @terminus/ui-tooltip */
    "../../dist/libs/ui/tooltip/fesm2015/terminus-ui-tooltip.js");
    /* harmony import */


    var _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @terminus/ui-form-field */
    "../../dist/libs/ui/form-field/fesm2015/terminus-ui-form-field.js");
    /* harmony import */


    var _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @terminus/ui-input */
    "../../dist/libs/ui/input/fesm2015/terminus-ui-input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @terminus/ui-checkbox */
    "../../dist/libs/ui/checkbox/fesm2015/terminus-ui-checkbox.js");
    /* harmony import */


    var _terminus_ui_option__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @terminus/ui-option */
    "../../dist/libs/ui/option/fesm2015/terminus-ui-option.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/chips */
    "../../node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _terminus_ui_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @terminus/ui-select */
    "../../dist/libs/ui/select/fesm2015/terminus-ui-select.js");
    /* harmony import */


    var _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @terminus/ui-spacing */
    "../../dist/libs/ui/spacing/fesm2015/terminus-ui-spacing.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @terminus/ui-toggle */
    "../../dist/libs/ui/toggle/fesm2015/terminus-ui-toggle.js");
    /* harmony import */


    var _file_upload_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./file-upload.component */
    "./src/app/components/file-upload/file-upload.component.ts");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "../../node_modules/@angular/cdk/fesm2015/keycodes.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var FileUploadModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_file_upload_module__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _file_upload_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponentNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["MatCalendarHeaderNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsWindowService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsWindowService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsAbbreviateNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsAbbreviateNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsDatePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsDatePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsRoundNumberPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsRoundNumberPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsSentenceCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsSentenceCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTimeAgoPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTimeAgoPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTitleCasePipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTruncateAtPipe"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsTruncateAtPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesService"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesService"], [_terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsDatePipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsDocumentService"], _terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsDocumentService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_17__["TsDropProtectionService"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_17__["TsDropProtectionService"], [_terminus_ngx_tools_browser__WEBPACK_IMPORTED_MODULE_10__["TsWindowService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_22__["TsValidatorsService"], _terminus_ui_validators__WEBPACK_IMPORTED_MODULE_22__["TsValidatorsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_24__["FileUploadRoutingModule"], _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_24__["FileUploadRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_27__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_8__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__["TsIconModule"], _terminus_ui_icon__WEBPACK_IMPORTED_MODULE_31__["TsIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_card__WEBPACK_IMPORTED_MODULE_32__["TsCardModule"], _terminus_ui_card__WEBPACK_IMPORTED_MODULE_32__["TsCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_button__WEBPACK_IMPORTED_MODULE_36__["TsButtonModule"], _terminus_ui_button__WEBPACK_IMPORTED_MODULE_36__["TsButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_37__["TsIconButtonModule"], _terminus_ui_icon_button__WEBPACK_IMPORTED_MODULE_37__["TsIconButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_40__["TsTooltipModule"], _terminus_ui_tooltip__WEBPACK_IMPORTED_MODULE_40__["TsTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsPipesModule"], _terminus_ui_pipes__WEBPACK_IMPORTED_MODULE_15__["TsPipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesModule"], _terminus_ui_validation_messages__WEBPACK_IMPORTED_MODULE_16__["TsValidationMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_17__["TsFileUploadModule"], _terminus_ui_file_upload__WEBPACK_IMPORTED_MODULE_17__["TsFileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__["TsFormFieldModule"], _terminus_ui_form_field__WEBPACK_IMPORTED_MODULE_41__["TsFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TsInputModule"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TsInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_44__["TsCheckboxModule"], _terminus_ui_checkbox__WEBPACK_IMPORTED_MODULE_44__["TsCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_option__WEBPACK_IMPORTED_MODULE_45__["TsOptionModule"], _terminus_ui_option__WEBPACK_IMPORTED_MODULE_45__["TsOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_select__WEBPACK_IMPORTED_MODULE_47__["TsSelectModule"], _terminus_ui_select__WEBPACK_IMPORTED_MODULE_47__["TsSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_48__["TsSpacingModule"], _terminus_ui_spacing__WEBPACK_IMPORTED_MODULE_48__["TsSpacingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_50__["TsToggleModule"], _terminus_ui_toggle__WEBPACK_IMPORTED_MODULE_50__["TsToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _file_upload_module__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"], _file_upload_module__WEBPACK_IMPORTED_MODULE_1__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () {
        return [[{
          path: "",
          component: _file_upload_component__WEBPACK_IMPORTED_MODULE_51__["FileUploadComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_FORMATS"], _terminus_ui_input__WEBPACK_IMPORTED_MODULE_42__["TS_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_46__["MAT_CHIPS_DEFAULT_OPTIONS"], {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_52__["ENTER"]]
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/file-upload/file-upload.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/file-upload/file-upload.module.ts ***!
    \**************************************************************/

  /*! exports provided: FileUploadModule */

  /***/
  function srcAppComponentsFileUploadFileUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });

    var FileUploadModule = function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=file-upload-file-upload-module-ngfactory-es5.js.map