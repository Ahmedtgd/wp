"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["screenshots"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/app */ "./resources/frontend/core/config/app.js");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppImage',
  props: {
    src: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: false
    },
    openable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const baseUrl = this.src.indexOf('http') === 0 ? '' : (process.env.VUE_APP_API_URL !== 'null' ? process.env.VUE_APP_API_URL : `${window.location.origin}/api`) + '/';
    const url = baseUrl + this.src;
    return {
      error: this.src === 'none',
      loaded: this.src === 'none',
      url,
      baseUrl
    };
  },
  components: {
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__.Skeleton
  },
  methods: {
    load() {
      if (this.error) return;
      if (this.src === 'none') {
        this.error = true;
        return;
      }
      this.loaded = false;
      if (this.url) {
        URL.revokeObjectURL(this.url);
        this.url = null;
      }
      if (this.src) {
        _config_app__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.src, {
          responseType: 'blob',
          muteError: true
        }).then(_ref => {
          let {
            data
          } = _ref;
          this.url = URL.createObjectURL(data);
        }).catch(() => {
          this.error = true;
        }).finally(() => {
          this.loaded = true;
        });
      }
    },
    handleError() {
      this.error = true;
    }
  },
  mounted() {
    this.load();
  },
  beforeDestroy() {
    if (this.url) {
      URL.revokeObjectURL(this.url);
      this.url = null;
    }
  },
  watch: {
    src() {
      this.error = false;
      this.load();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/time */ "./resources/frontend/core/utils/time.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Calendar',
  props: {
    day: {
      type: Boolean,
      default: true
    },
    week: {
      type: Boolean,
      default: true
    },
    month: {
      type: Boolean,
      default: true
    },
    range: {
      type: Boolean,
      default: true
    },
    initialTab: {
      type: String,
      default: 'day'
    },
    sessionStorageKey: {
      type: String,
      default: 'amazingcat.session.storage'
    }
  },
  data() {
    const {
      query
    } = this.$route;
    const today = this.getDateToday();
    const data = {
      showPopup: false,
      lang: null,
      datePickerLang: {}
    };
    const sessionData = {
      type: sessionStorage.getItem(this.sessionStorageKey + '.type'),
      start: sessionStorage.getItem(this.sessionStorageKey + '.start'),
      end: sessionStorage.getItem(this.sessionStorageKey + '.end')
    };
    if (typeof query['type'] === 'string' && this.validateTab(query['type'])) {
      data.tab = query['type'];
    } else if (typeof sessionData.type === 'string' && this.validateTab(sessionData.type)) {
      data.tab = sessionData.type;
    } else {
      data.tab = this.initialTab;
    }
    if (typeof query['start'] === 'string' && this.validateDate(query['start'])) {
      data.start = query['start'];
    } else if (typeof sessionData.start === 'string' && this.validateDate(sessionData.start)) {
      data.start = sessionData.start;
    } else {
      data.start = today;
    }
    if (typeof query['end'] === 'string' && this.validateDate(query['end'])) {
      data.end = query['end'];
    } else if (typeof sessionData.end === 'string' && this.validateDate(sessionData.end)) {
      data.end = sessionData.end;
    } else {
      data.end = today;
    }
    switch (data.tab) {
      case 'day':
      case 'date':
        data.end = data.start;
        break;
      case 'week':
        {
          const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(data.start, 'YYYY-MM-DD', true);
          if (date.isValid()) {
            data.start = date.startOf('isoWeek').format('YYYY-MM-DD');
            data.end = date.endOf('isoWeek').format('YYYY-MM-DD');
          }
          break;
        }
      case 'month':
        {
          const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(data.start, 'YYYY-MM-DD', true);
          if (date.isValid()) {
            data.start = date.startOf('month').format('YYYY-MM-DD');
            data.end = date.endOf('month').format('YYYY-MM-DD');
          }
          break;
        }
    }
    return data;
  },
  mounted() {
    window.addEventListener('click', this.hidePopup);
    this.saveData(this.tab, this.start, this.end);
    this.emitChangeEvent();
    this.$nextTick(async () => {
      try {
        const locale = await __webpack_require__("./node_modules/vue2-datepicker/locale lazy recursive ^\\.\\/.*$")(`./${this.$i18n.locale}`);
        this.datePickerLang = _objectSpread(_objectSpread({}, locale), {}, {
          formatLocale: _objectSpread(_objectSpread({}, locale.formatLocale), {}, {
            firstDayOfWeek: 1
          }),
          monthFormat: 'MMMM'
        });
      } catch {
        this.datePickerLang = {
          formatLocale: {
            firstDayOfWeek: 1
          },
          monthFormat: 'MMMM'
        };
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hidePopup);
  },
  computed: {
    inputValue() {
      switch (this.tab) {
        case 'date':
        default:
          return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start, 'YYYY-MM-DD').locale(this.$i18n.locale).format('MMM DD, YYYY');
        case 'week':
          {
            const start = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start, 'YYYY-MM-DD').locale(this.$i18n.locale).startOf('isoWeek');
            const end = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end, 'YYYY-MM-DD').locale(this.$i18n.locale).endOf('isoWeek');
            if (start.month() === end.month()) {
              return start.format('MMM DD-') + end.format('DD, YYYY');
            }
            return start.format('MMM DD — ') + end.format('MMM DD, YYYY');
          }
        case 'month':
          return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start, 'YYYY-MM-DD').locale(this.$i18n.locale).startOf('month').format('MMM, YYYY');
        case 'range':
          {
            const start = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start, 'YYYY-MM-DD').locale(this.$i18n.locale);
            const end = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end, 'YYYY-MM-DD').locale(this.$i18n.locale);
            if (start.year() === end.year()) {
              return start.format('MMM DD, — ') + end.format('MMM DD, YYYY');
            } else {
              return start.format('MMM DD, YYYY — ') + end.format('MMM DD, YYYY');
            }
          }
      }
    },
    datePickerType() {
      switch (this.tab) {
        case 'day':
        case 'range':
        default:
          return 'date';
        case 'week':
          return 'week';
        case 'month':
          return 'month';
      }
    },
    datePickerRange() {
      return this.tab === 'range';
    },
    datePickerValue() {
      if (this.tab === 'range') {
        return [moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start, 'YYYY-MM-DD').toDate(), moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end, 'YYYY-MM-DD').toDate()];
      }
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start, 'YYYY-MM-DD').toDate();
    }
  },
  methods: {
    getDateToday: _utils_time__WEBPACK_IMPORTED_MODULE_1__.getDateToday,
    validateTab(tab) {
      return ['day', 'date', 'week', 'month', 'range'].indexOf(tab) !== -1;
    },
    validateDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, 'YYYY-MM-DD', true).isValid();
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    hidePopup() {
      if (this.$el.contains(event.target)) {
        return;
      }
      this.showPopup = false;
    },
    selectPrevious() {
      let start, end;
      switch (this.tab) {
        case 'day':
        default:
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).subtract(1, 'day').format('YYYY-MM-DD');
            start = date;
            end = date;
            break;
          }
        case 'week':
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).subtract(1, 'week');
            start = date.startOf('isoWeek').format('YYYY-MM-DD');
            end = date.endOf('isoWeek').format('YYYY-MM-DD');
            break;
          }
        case 'month':
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).subtract(1, 'month');
            start = date.startOf('month').format('YYYY-MM-DD');
            end = date.endOf('month').format('YYYY-MM-DD');
            break;
          }
        case 'range':
          {
            const diff = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end).diff(this.start, 'days') + 1;
            start = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).subtract(diff, 'days').format('YYYY-MM-DD');
            end = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end).subtract(diff, 'days').format('YYYY-MM-DD');
            break;
          }
      }
      this.saveData(this.tab, start, end);
      this.emitChangeEvent();
    },
    selectNext() {
      let start, end;
      switch (this.tab) {
        case 'day':
        default:
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).add(1, 'day').format('YYYY-MM-DD');
            start = date;
            end = date;
            break;
          }
        case 'week':
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).add(1, 'week');
            start = date.startOf('isoWeek').format('YYYY-MM-DD');
            end = date.endOf('isoWeek').format('YYYY-MM-DD');
            break;
          }
        case 'month':
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).add(1, 'month');
            start = date.startOf('month').format('YYYY-MM-DD');
            end = date.endOf('month').format('YYYY-MM-DD');
            break;
          }
        case 'range':
          {
            const diff = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end).diff(this.start, 'days') + 1;
            start = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.start).add(diff, 'days').format('YYYY-MM-DD');
            end = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.end).add(diff, 'days').format('YYYY-MM-DD');
            break;
          }
      }
      this.saveData(this.tab, start, end);
      this.emitChangeEvent();
    },
    onTabChange(_ref) {
      let {
        index,
        name
      } = _ref;
      this.tab = 'range';
      this.$nextTick(() => {
        this.tab = name;
      });
    },
    setDate(value) {
      let start, end;
      switch (this.tab) {
        case 'day':
        default:
          {
            const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(value).format('YYYY-MM-DD');
            start = date;
            end = date;
            break;
          }
        case 'week':
          start = moment__WEBPACK_IMPORTED_MODULE_0___default()(value).startOf('isoWeek').format('YYYY-MM-DD');
          end = moment__WEBPACK_IMPORTED_MODULE_0___default()(value).endOf('isoWeek').format('YYYY-MM-DD');
          break;
        case 'month':
          start = moment__WEBPACK_IMPORTED_MODULE_0___default()(value).startOf('month').format('YYYY-MM-DD');
          end = moment__WEBPACK_IMPORTED_MODULE_0___default()(value).endOf('month').format('YYYY-MM-DD');
          break;
        case 'range':
          start = moment__WEBPACK_IMPORTED_MODULE_0___default()(value[0]).format('YYYY-MM-DD');
          end = moment__WEBPACK_IMPORTED_MODULE_0___default()(value[1]).format('YYYY-MM-DD');
          break;
      }
      this.saveData(this.tab, start, end);
      this.emitChangeEvent();
    },
    saveData(type, start, end) {
      this.tab = type;
      this.start = start;
      this.end = end;
      sessionStorage.setItem(this.sessionStorageKey + '.type', type);
      sessionStorage.setItem(this.sessionStorageKey + '.start', start);
      sessionStorage.setItem(this.sessionStorageKey + '.end', end);
      const {
        query
      } = this.$route;
      const searchParams = new URLSearchParams({
        type,
        start,
        end
      }).toString();

      // HACK: The native history is used because changing
      // params via Vue Router closes all pending requests
      history.pushState(null, null, `?${searchParams}`);
    },
    emitChangeEvent() {
      this.$emit('change', {
        type: sessionStorage.getItem(this.sessionStorageKey + '.type'),
        start: sessionStorage.getItem(this.sessionStorageKey + '.start'),
        end: sessionStorage.getItem(this.sessionStorageKey + '.end')
      });
    },
    onDateChange(value) {
      this.showPopup = false;
      this.setDate(value);
    },
    setToday() {
      this.tab = 'day';
      this.$refs.tabs.setNavByIndex(0);
      this.setDate(new Date());
      this.hidePopup();
    }
  },
  watch: {
    $route(to, from) {
      const {
        query
      } = to;
      if (typeof query['type'] === 'string' && this.validateTab(query['type'])) {
        sessionStorage.setItem(this.sessionStorageKey + '.type', this.tab = query['type']);
      }
      if (typeof query['start'] === 'string' && this.validateDate(query['start'])) {
        sessionStorage.setItem(this.sessionStorageKey + '.start', this.start = query['start']);
      }
      if (typeof query['end'] === 'string' && this.validateDate(query['end'])) {
        sessionStorage.setItem(this.sessionStorageKey + '.end', this.end = query['end']);
      }
      this.emitChangeEvent();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/resource.service */ "./resources/frontend/core/services/resource.service.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    service: {
      type: _services_resource_service__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    selected: {
      type: [String, Number, Array, Object],
      default: Array
    },
    inputHandler: {
      type: Function
    },
    prependName: {
      type: String,
      default: ''
    },
    showSelectAll: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {
      model: [],
      showCount: true,
      options: []
    };
  },
  async created() {
    try {
      const all = await this.service.getAll({
        headers: {
          'X-Paginate': 'false'
        }
      });
      this.options.push(...all);
      this.$emit('onOptionsLoad', this.options);
    } catch ({
      response
    }) {
      if (true) {
        console.warn(response ? response : 'request to projects is canceled');
      }
    }
    if (Array.isArray(this.selected)) {
      this.model = this.selected;
    }
    this.$nextTick(() => {
      this.model.forEach(modelValue => {
        if (this.$refs.select && Object.prototype.hasOwnProperty.call(this.$refs.select, '$children')) {
          this.$refs.select.$children.forEach(option => {
            if (option.value === modelValue) {
              option.selected = true;
            }
          });
        }
      });
    });
    this.lastQuery = '';
    this.$watch(() => {
      if (this.$refs.select === undefined) {
        return;
      }
      return {
        query: this.$refs.select.query,
        visible: this.$refs.select.visible
      };
    }, _ref => {
      let {
        query,
        visible
      } = _ref;
      if (visible) {
        if (query.length) {
          this.lastQuery = query;
        } else {
          if (['input', 'keypress'].includes(window?.event?.type) || window?.event?.key === 'Backspace') {
            // If query changed by user typing, save query
            this.lastQuery = query;
          } else {
            // If query changed by clicking option and so on, restore query
            this.$refs.select.query = this.lastQuery;
          }
        }
      } else {
        this.lastQuery = query;
      }
    });
  },
  watch: {
    model(value) {
      if (this.inputHandler) {
        this.inputHandler(value);
      }
    }
  },
  methods: {
    selectAll() {
      let predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => true;
      console.log(this.$refs.select);
      const query = this.$refs.select.query.toUpperCase();
      this.model = this.options.filter(_ref2 => {
        let {
          name
        } = _ref2;
        return name.toUpperCase().indexOf(query) !== -1;
      }).filter(predicate).map(_ref3 => {
        let {
          id
        } = _ref3;
        return id;
      });
    },
    clearSelect() {
      this.$emit('input', []);
      this.model = [];
    },
    onClick() {
      if (this.showCount) {
        this.showCount = false;
      } else {
        setTimeout(() => {
          this.showCount = true;
        }, 300);
      }
    },
    onClose() {
      this.$refs.select.query = '';
      if (!this.showCount) {
        setTimeout(() => {
          this.showCount = true;
        }, 300);
      }
    },
    onChange(val) {
      if (this.inputHandler) {
        this.inputHandler(val);
      }
    }
  },
  computed: {
    selectionAmount() {
      return this.model.length;
    },
    allOptionsSelected() {
      return this.options.length === this.selectionAmount;
    },
    placeholderText() {
      const i18nKey = this.placeholder + (this.allOptionsSelected ? '_all' : '');
      return this.$tc(i18nKey, this.selectionAmount, {
        count: this.selectionAmount
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ProjectSelect.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ProjectSelect.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MultiSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/MultiSelect */ "./resources/frontend/core/components/MultiSelect.vue");
/* harmony import */ var _services_resource_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/resource/project.service */ "./resources/frontend/core/services/resource/project.service.js");


const localStorageKey = 'amazingcat.local.storage.project_select';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProjectSelect',
  components: {
    MultiSelect: _components_MultiSelect__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    value: {
      type: Array,
      default: null
    }
  },
  data() {
    const selectedProjectIds = this.value !== null ? this.value : JSON.parse(localStorage.getItem(localStorageKey));
    return {
      projectService: new _services_resource_project_service__WEBPACK_IMPORTED_MODULE_1__["default"](),
      selectedProjectIds,
      ids: []
    };
  },
  methods: {
    onLoad(allSelectOptions) {
      const allProjectIds = allSelectOptions.map(option => option.id);
      this.ids = allProjectIds;
      // Select all options if storage is empty
      if (!localStorage.getItem(localStorageKey)) {
        this.selectedProjectIds = allProjectIds;
        localStorage.setItem(localStorageKey, JSON.stringify(this.selectedProjectIds));
        this.$emit('change', this.selectedProjectIds);
        this.$nextTick(() => this.$emit('loaded'));
        return;
      }

      // Remove options that no longer exists
      const existingProjectIds = this.selectedProjectIds.filter(projectId => allProjectIds.includes(projectId));
      if (this.selectedProjectIds.length > existingProjectIds.length) {
        this.selectedProjectIds = existingProjectIds;
        localStorage.setItem(localStorageKey, JSON.stringify(this.selectedProjectIds));
      }
      this.$emit('change', this.selectedProjectIds);
      this.$nextTick(() => this.$emit('loaded'));
    },
    selectedProjects(values) {
      this.selectedProjectIds = values;
      localStorage.setItem(localStorageKey, JSON.stringify(this.selectedProjectIds));
      this.$emit('change', values);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; },
/* harmony export */   thumbnailPathProvider: function() { return /* binding */ thumbnailPathProvider; }
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppImage */ "./resources/frontend/core/components/AppImage.vue");
/* harmony import */ var _ScreenshotModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreenshotModal */ "./resources/frontend/core/components/ScreenshotModal.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function thumbnailPathProvider(interval) {
  return `time-intervals/${interval.id}/thumb`;
}
const config = {
  thumbnailPathProvider
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Screenshot',
  components: {
    AppImage: _AppImage__WEBPACK_IMPORTED_MODULE_1__["default"],
    ScreenshotModal: _ScreenshotModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    interval: {
      type: Object
    },
    project: {
      type: Object
    },
    task: {
      type: Object
    },
    user: {
      type: Object
    },
    showText: {
      type: Boolean,
      default: true
    },
    showTask: {
      type: Boolean,
      default: true
    },
    showNavigation: {
      type: Boolean,
      default: false
    },
    disableModal: {
      type: Boolean,
      default: false
    },
    lazyImage: {
      type: Boolean,
      default: true
    },
    timezone: {
      type: String
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)('user', ['companyData'])), {}, {
    screenshotTime() {
      const timezone = this.timezone || this.companyData['timezone'];
      if (!timezone || !this.interval.start_at) {
        return;
      }
      return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().utc(this.interval.start_at).tz(this.companyData['timezone'], true).tz(timezone).format('HH:mm');
    }
  }),
  methods: {
    onShow() {
      if (this.disableModal) {
        return;
      }
      this.showModal = true;
      this.$emit('showModalChange', true);
    },
    onHide() {
      this.showModal = false;
      this.$emit('showModalChange', false);
    },
    onRemove() {
      this.onHide();
      this.$emit('remove', this.interval);
    },
    getThumbnailPath(interval) {
      return config.thumbnailPathProvider(interval);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; },
/* harmony export */   screenshotPathProvider: function() { return /* binding */ screenshotPathProvider; }
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppImage */ "./resources/frontend/core/components/AppImage.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function screenshotPathProvider(interval) {
  return `time-intervals/${interval.id}/screenshot`;
}
const config = {
  screenshotPathProvider
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ScreenshotModal',
  components: {
    AppImage: _AppImage__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    project: {
      type: Object
    },
    task: {
      type: Object
    },
    interval: {
      type: Object
    },
    user: {
      type: Object
    },
    showNavigation: {
      type: Boolean,
      default: false
    },
    canRemove: {
      type: Boolean,
      default: true
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)('user', ['companyData'])),
  methods: {
    formatDate(value) {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().utc(value).tz(this.companyData.timezone, true).locale(this.$i18n.locale).format('MMMM D, YYYY — HH:mm:ss (Z)');
    },
    onClose() {
      this.$emit('close');
    },
    onRemove() {
      this.$emit('remove', this.interval.id);
    },
    getScreenshotPath(interval) {
      return config.screenshotPathProvider(interval);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Calendar */ "./resources/frontend/core/components/Calendar.vue");
/* harmony import */ var _components_Screenshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Screenshot */ "./resources/frontend/core/components/Screenshot.vue");
/* harmony import */ var _components_ScreenshotModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ScreenshotModal */ "./resources/frontend/core/components/ScreenshotModal.vue");
/* harmony import */ var _components_UserSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/UserSelect */ "./resources/frontend/core/components/UserSelect.vue");
/* harmony import */ var _services_resource_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/resource/project.service */ "./resources/frontend/core/services/resource/project.service.js");
/* harmony import */ var _services_resource_time_interval_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/resource/time-interval.service */ "./resources/frontend/core/services/resource/time-interval.service.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/time */ "./resources/frontend/core/utils/time.js");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Preloader */ "./resources/frontend/core/components/Preloader.vue");
/* harmony import */ var _components_ProjectSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ProjectSelect */ "./resources/frontend/core/components/ProjectSelect.vue");
/* harmony import */ var _components_TimezonePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/TimezonePicker */ "./resources/frontend/core/components/TimezonePicker.vue");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Screenshots',
  components: {
    Calendar: _components_Calendar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Screenshot: _components_Screenshot__WEBPACK_IMPORTED_MODULE_1__["default"],
    ScreenshotModal: _components_ScreenshotModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    UserSelect: _components_UserSelect__WEBPACK_IMPORTED_MODULE_3__["default"],
    Preloader: _components_Preloader__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProjectSelect: _components_ProjectSelect__WEBPACK_IMPORTED_MODULE_8__["default"],
    TimezonePicker: _components_TimezonePicker__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data() {
    const limit = 15;
    const localStorageKey = 'user-select.users';
    const sessionStorageKey = 'amazingcat.session.storage.screenshots';
    return {
      intervals: [],
      userIDs: null,
      projectsList: [],
      datepickerDateStart: '',
      datepickerDateEnd: '',
      projectService: new _services_resource_project_service__WEBPACK_IMPORTED_MODULE_4__["default"](),
      intervalService: new _services_resource_time_interval_service__WEBPACK_IMPORTED_MODULE_5__["default"](),
      modal: {
        show: false
      },
      limit: limit,
      page: 1,
      intervalsTotal: 0,
      localStorageKey: localStorageKey,
      sessionStorageKey: sessionStorageKey,
      isDataLoading: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)('dashboard', ['timezone'])), (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)('timeline', ['service', 'users'])), (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapGetters)('user', ['user', 'companyData'])),
  watch: {
    companyData() {
      this.getScreenshots();
    },
    timezone() {
      this.getScreenshots();
    }
  },
  async created() {
    window.addEventListener('keydown', this.onKeyDown);
    try {
      await this.getScreenshots();
    } catch ({
      response
    }) {
      if (true) {
        console.log(response ? response : 'request to screenshots is canceled');
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
  },
  methods: _objectSpread(_objectSpread({
    getStartOfDayInTimezone: _utils_time__WEBPACK_IMPORTED_MODULE_6__.getStartOfDayInTimezone,
    getEndOfDayInTimezone: _utils_time__WEBPACK_IMPORTED_MODULE_6__.getEndOfDayInTimezone
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_10__.mapMutations)({
    setTimezone: 'dashboard/setTimezone'
  })), {}, {
    onTimezoneChange(timezone) {
      this.setTimezone(timezone);
    },
    onHide() {
      this.modal.show = false;
    },
    onKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.showPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.showNext();
      }
    },
    showPrevious() {
      const currentIndex = this.intervals.findIndex(x => x.id === this.modal.interval.id);
      if (currentIndex !== 0) {
        this.modal.interval = this.intervals[currentIndex - 1];
      }
    },
    showNext() {
      const currentIndex = this.intervals.findIndex(x => x.id === this.modal.interval.id);
      if (currentIndex + 1 !== this.intervals.length) {
        this.modal.interval = this.intervals[currentIndex + 1];
      }
    },
    showImage(interval) {
      this.modal = {
        interval,
        user: interval.user,
        task: interval.task,
        project: interval.task?.project,
        show: true
      };
    },
    onUsersChange(userIDs) {
      this.userIDs = userIDs;
      if (this._isMounted) {
        this.getScreenshots();
      }
    },
    onProjectsChange(projectIDs) {
      this.projectsList = projectIDs;
      if (this._isMounted) {
        this.getScreenshots();
      }
    },
    onCalendarChange(_ref) {
      let {
        start,
        end
      } = _ref;
      this.datepickerDateStart = start;
      this.datepickerDateEnd = end;
      this.getScreenshots();
    },
    async getScreenshots() {
      if (this.userIDs === 'undefined' || !this.datepickerDateStart || !this.datepickerDateEnd || !this.timezone || !this.companyData.timezone) {
        return;
      }
      this.isDataLoading = true;
      const startAt = (0,_utils_time__WEBPACK_IMPORTED_MODULE_6__.getDateWithTimezoneDifference)(this.datepickerDateStart, this.companyData.timezone, this.timezone);
      const endAt = (0,_utils_time__WEBPACK_IMPORTED_MODULE_6__.getDateWithTimezoneDifference)(this.datepickerDateEnd, this.companyData.timezone, this.timezone, false);
      try {
        const {
          data
        } = await this.intervalService.getAll({
          where: {
            user_id: ['in', this.userIDs],
            'task.project_id': ['in', this.projectsList],
            start_at: ['between', [startAt, endAt]]
          },
          page: this.page,
          with: ['task', 'task.project', 'user']
        });
        this.intervalsTotal = data.pagination.total;
        this.intervals = data.data;
      } catch ({
        response
      }) {
        return;
      }
      this.isDataLoading = false;
    },
    async removeScreenshot(id) {
      try {
        await this.intervalService.deleteItem(id);
        this.$Notify({
          type: 'success',
          title: this.$t('notification.screenshot.delete.success.title'),
          message: this.$t('notification.screenshot.delete.success.message')
        });
        this.intervals = this.intervals.filter(interval => interval.id !== id);
        this.onHide();
      } catch (e) {
        this.$Notify({
          type: 'error',
          title: this.$t('notification.screenshot.delete.error.title'),
          message: this.$t('notification.screenshot.delete.error.message')
        });
      }
    },
    async loadPage(page) {
      this.page = page;
      await this.getScreenshots();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=template&id=714c3918&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=template&id=714c3918&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("transition", {
    attrs: {
      appear: "",
      mode: "out-in",
      name: "fade"
    }
  }, [!_vm.loaded ? _c("Skeleton") : [_c(_vm.openable ? "a" : "div", {
    tag: "component",
    attrs: {
      href: _vm.url,
      target: "_blank"
    }
  }, [_vm.error ? _c("svg", {
    staticClass: "error-image",
    attrs: {
      viewBox: "0 0 280 162",
      x: "0px",
      "xml:space": "preserve",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      y: "0px"
    }
  }, [_c("rect", {
    attrs: {
      height: "162",
      width: "280"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M140,30.59c-27.85,0-50.41,22.56-50.41,50.41s22.56,50.41,50.41,50.41s50.41-22.56,50.41-50.41\n                        S167.85,30.59,140,30.59z M140,121.65c-22.42,0-40.65-18.23-40.65-40.65S117.58,40.35,140,40.35S180.65,58.58,180.65,81\n                        S162.42,121.65,140,121.65z M123.74,77.75c3.6,0,6.5-2.91,6.5-6.5s-2.91-6.5-6.5-6.5s-6.5,2.91-6.5,6.5S120.14,77.75,123.74,77.75z\n                        M156.26,64.74c-3.6,0-6.5,2.91-6.5,6.5s2.91,6.5,6.5,6.5c3.6,0,6.5-2.91,6.5-6.5S159.86,64.74,156.26,64.74z M140,90.76\n                        c-8.17,0-15.85,3.6-21.1,9.88c-1.73,2.07-1.44,5.14,0.63,6.87c2.07,1.71,5.14,1.44,6.87-0.63c3.37-4.05,8.33-6.38,13.6-6.38\n                        s10.22,2.32,13.6,6.38c1.65,1.97,4.7,2.42,6.87,0.63c2.07-1.73,2.34-4.8,0.63-6.87C155.85,94.35,148.17,90.76,140,90.76z"
    }
  })]) : _vm.lazy ? _c("lazy-component", [_c("img", {
    attrs: {
      src: _vm.url,
      alt: "screenshot"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("click", $event);
      },
      error: _vm.handleError
    }
  })]) : _c("img", {
    attrs: {
      src: _vm.url,
      alt: "screenshot"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("click", $event);
      },
      error: _vm.handleError
    }
  })], 1)]], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "calendar",
    on: {
      click: _vm.togglePopup
    }
  }, [_c("at-input", {
    staticClass: "input",
    attrs: {
      readonly: true,
      value: _vm.inputValue
    },
    scopedSlots: _vm._u([{
      key: "prepend",
      fn: function () {
        return [_c("i", {
          staticClass: "icon icon-chevron-left previous",
          on: {
            click: function ($event) {
              $event.stopPropagation();
              $event.preventDefault();
              return _vm.selectPrevious.apply(null, arguments);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "append",
      fn: function () {
        return [_c("i", {
          staticClass: "icon icon-chevron-right next",
          on: {
            click: function ($event) {
              $event.stopPropagation();
              $event.preventDefault();
              return _vm.selectNext.apply(null, arguments);
            }
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("span", {
    staticClass: "calendar-icon icon icon-calendar"
  }), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide-up"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showPopup,
      expression: "showPopup"
    }],
    class: {
      "datepicker-wrapper": true,
      "datepicker-wrapper--range": _vm.datePickerRange,
      "at-select__dropdown at-select__dropdown--bottom": true
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", [_c("at-tabs", {
    ref: "tabs",
    on: {
      "on-change": _vm.onTabChange
    },
    model: {
      value: _vm.tab,
      callback: function ($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_vm.day ? _c("at-tab-pane", {
    attrs: {
      label: _vm.$t("control.day"),
      name: "day"
    }
  }) : _vm._e(), _vm._v(" "), _vm.week ? _c("at-tab-pane", {
    attrs: {
      label: _vm.$t("control.week"),
      name: "week"
    }
  }) : _vm._e(), _vm._v(" "), _vm.month ? _c("at-tab-pane", {
    attrs: {
      label: _vm.$t("control.month"),
      name: "month"
    }
  }) : _vm._e(), _vm._v(" "), _vm.range ? _c("at-tab-pane", {
    attrs: {
      label: _vm.$t("control.range"),
      name: "range"
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c("date-picker", {
    key: _vm.$i18n.locale,
    staticClass: "datepicker",
    attrs: {
      "append-to-body": false,
      clearable: false,
      editable: false,
      inline: true,
      lang: _vm.datePickerLang,
      type: _vm.datePickerType,
      range: _vm.datePickerRange,
      value: _vm.datePickerValue
    },
    on: {
      change: _vm.onDateChange
    },
    scopedSlots: _vm._u([{
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "datepicker__footer"
        }, [_c("button", {
          staticClass: "mx-btn mx-btn-text",
          attrs: {
            size: "small"
          },
          on: {
            click: _vm.setToday
          }
        }, [_vm._v("\n                            " + _vm._s(_vm.$t("control.today")) + "\n                        ")])])];
      },
      proxy: true
    }])
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=template&id=017e6227&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=template&id=017e6227&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "at-select-wrapper"
  }, [_c("at-select", {
    ref: "select",
    attrs: {
      multiple: "",
      filterable: "",
      placeholder: "",
      size: _vm.size
    },
    on: {
      click: _vm.onClick,
      input: _vm.onChange
    },
    model: {
      value: _vm.model,
      callback: function ($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  }, [_vm.showSelectAll ? _c("li", {
    staticClass: "at-select__option",
    on: {
      click: function ($event) {
        return _vm.selectAll();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("control.select_all")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm._t("before-options"), _vm._v(" "), _vm._l(_vm.options, function (option) {
    return _c("at-option", {
      key: option.id,
      attrs: {
        value: option.id,
        label: option.name
      },
      on: {
        "on-select-close": _vm.onClose
      }
    });
  })], 2), _vm._v(" "), _vm.showCount ? _c("span", {
    staticClass: "at-select__placeholder"
  }, [_vm._v("\n        " + _vm._s(_vm.placeholderText) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.model.length > 0 ? _c("i", {
    staticClass: "icon icon-x at-select__clear",
    on: {
      click: function ($event) {
        $event.stopPropagation();
        return _vm.clearSelect.apply(null, arguments);
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ProjectSelect.vue?vue&type=template&id=aaed6cf2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ProjectSelect.vue?vue&type=template&id=aaed6cf2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("multi-select", {
    attrs: {
      placeholder: "control.project_selected",
      inputHandler: _vm.selectedProjects,
      selected: _vm.selectedProjectIds,
      service: _vm.projectService,
      name: "projects",
      size: _vm.size
    },
    on: {
      onOptionsLoad: _vm.onLoad
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=template&id=3d97c344&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=template&id=3d97c344&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "screenshot",
    on: {
      click: function ($event) {
        return _vm.$emit("click", $event);
      }
    }
  }, [_c("AppImage", {
    staticClass: "screenshot__image",
    attrs: {
      "is-blob": true,
      src: _vm.getThumbnailPath(_vm.interval),
      lazy: _vm.lazyImage
    },
    on: {
      click: _vm.onShow
    }
  }), _vm._v(" "), _c("at-tooltip", [_c("template", {
    slot: "content"
  }, [_vm.interval.activity_fill === null ? _c("div", {
    staticClass: "screenshot__activity"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("tooltip.activity_progress.not_tracked")) + "\n            ")]) : _c("div", {
    staticClass: "screenshot__activity"
  }, [_vm.interval.activity_fill !== null ? _c("span", {
    staticClass: "screenshot__overall-activity"
  }, [_vm._v("\n                    " + _vm._s(_vm.$tc("tooltip.activity_progress.overall", _vm.interval.activity_fill, {
    percent: _vm.interval.activity_fill
  })) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "screenshot__device-activity"
  }, [_vm.interval.mouse_fill !== null ? _c("span", [_vm._v("\n                        " + _vm._s(_vm.$tc("tooltip.activity_progress.mouse", _vm.interval.mouse_fill, {
    percent: _vm.interval.mouse_fill
  })) + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm.interval.keyboard_fill !== null ? _c("span", [_vm._v(_vm._s(_vm.$tc("tooltip.activity_progress.keyboard", _vm.interval.keyboard_fill, {
    percent: _vm.interval.keyboard_fill
  })))]) : _vm._e()])])]), _vm._v(" "), _c("at-progress", {
    staticClass: "screenshot__activity-bar",
    attrs: {
      "stroke-width": 5,
      percent: +(+_vm.interval.activity_fill / 2 || 0)
    }
  })], 2), _vm._v(" "), _vm.showText ? _c("div", {
    staticClass: "screenshot__text"
  }, [_vm.task && _vm.showTask ? _c("span", {
    staticClass: "screenshot__task",
    attrs: {
      title: `${_vm.task.task_name} (${_vm.task.project.name})`
    }
  }, [_vm._v("\n            " + _vm._s(_vm.task.task_name) + " (" + _vm._s(_vm.task.project.name) + ")\n        ")]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "screenshot__time"
  }, [_vm._v(_vm._s(_vm.screenshotTime))])]) : _vm._e(), _vm._v(" "), !_vm.disableModal ? _c("ScreenshotModal", {
    attrs: {
      project: _vm.project,
      interval: _vm.interval,
      show: _vm.showModal,
      showNavigation: _vm.showNavigation,
      task: _vm.task,
      user: _vm.user
    },
    on: {
      close: _vm.onHide,
      remove: _vm.onRemove,
      showNext: function ($event) {
        return _vm.$emit("showNext");
      },
      showPrevious: function ($event) {
        return _vm.$emit("showPrevious");
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c("at-modal", {
    staticClass: "modal",
    attrs: {
      width: 900,
      value: true
    },
    on: {
      "on-cancel": _vm.onClose,
      "on-confirm": _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("span", {
          staticClass: "modal-title"
        }, [_vm._v(_vm._s(_vm.$t("field.screenshot")))])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "row"
        }, [_c("div", {
          staticClass: "col"
        }, [_vm.project ? _c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$t("field.project")) + ":")]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_c("router-link", {
          attrs: {
            to: `/projects/view/${_vm.project.id}`
          }
        }, [_vm._v(_vm._s(_vm.project.name))])], 1)]) : _vm._e(), _vm._v(" "), _vm.task ? _c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$t("field.task")) + ":")]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_c("router-link", {
          attrs: {
            to: `/tasks/view/${_vm.task.id}`
          }
        }, [_vm._v(_vm._s(_vm.task.task_name))])], 1)]) : _vm._e(), _vm._v(" "), _vm.user ? _c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$t("field.user")) + ":")]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_vm._v("\n                        " + _vm._s(_vm.user.full_name) + "\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.interval ? _c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$t("field.created_at")) + ":")]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_vm._v(_vm._s(_vm.formatDate(_vm.interval.start_at)))])]) : _vm._e()]), _vm._v(" "), _c("div", {
          staticClass: "col"
        }, [_vm.interval.activity_fill === null ? _c("div", {
          staticClass: "screenshot__activity"
        }, [_vm._v("\n                    " + _vm._s(_vm.$t("tooltip.activity_progress.not_tracked")) + "\n                ")]) : _c("div", {
          staticClass: "screenshot__activity modal-field"
        }, [_c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$tc("tooltip.activity_progress.overall", 0)))]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_vm._v("\n                            " + _vm._s(_vm.interval.activity_fill + "%") + "\n                        ")])]), _vm._v(" "), _vm.interval.mouse_fill !== null ? _c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v("\n                            " + _vm._s(_vm.$t("tooltip.activity_progress.just_mouse")) + "\n                        ")]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_vm._v("\n                            " + _vm._s(_vm.interval.mouse_fill + "%") + "\n                        ")])]) : _vm._e(), _vm._v(" "), _vm.interval.keyboard_fill !== null ? _c("div", {
          staticClass: "modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$t("tooltip.activity_progress.just_keyboard")))]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_vm._v("\n                            " + _vm._s(_vm.interval.keyboard_fill + "%") + "\n                        ")])]) : _vm._e()]), _vm._v(" "), _vm.interval ? _c("div", {
          staticClass: "modal-duration modal-field"
        }, [_c("span", {
          staticClass: "modal-label"
        }, [_vm._v(_vm._s(_vm.$t("field.duration")) + ":")]), _vm._v(" "), _c("span", {
          staticClass: "modal-value"
        }, [_vm._v(_vm._s(_vm.$t("field.duration_value", [_vm.formatDate(_vm.interval.start_at), _vm.formatDate(_vm.interval.end_at)])))])]) : _vm._e()])]), _vm._v(" "), _vm.canRemove ? _c("div", {
          staticClass: "row"
        }, [_c("at-button", {
          staticClass: "modal-remove",
          attrs: {
            type: "text",
            icon: "icon-trash-2"
          },
          on: {
            click: _vm.onRemove
          }
        })], 1) : _vm._e()];
      },
      proxy: true
    }], null, false, 3332807827)
  }, [_vm._v(" "), _vm.interval && _vm.interval.id ? _c("AppImage", {
    staticClass: "modal-screenshot",
    attrs: {
      src: _vm.getScreenshotPath(_vm.interval),
      openable: true
    }
  }) : _vm._e(), _vm._v(" "), _c("at-progress", {
    staticClass: "screenshot__activity-bar",
    attrs: {
      "stroke-width": 7,
      percent: +(+_vm.interval.activity_fill / 2 || 0)
    }
  }), _vm._v(" "), _vm.showNavigation ? _c("div", {
    staticClass: "modal-left"
  }, [_c("at-button", {
    attrs: {
      type: "primary",
      icon: "icon-arrow-left"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("showPrevious");
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.showNavigation ? _c("div", {
    staticClass: "modal-right"
  }, [_c("at-button", {
    attrs: {
      type: "primary",
      icon: "icon-arrow-right"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("showNext");
      }
    }
  })], 1) : _vm._e()], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=template&id=51e580c7&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=template&id=51e580c7&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "screenshots"
  }, [_c("h1", {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.$t("navigation.screenshots")))]), _vm._v(" "), _c("div", {
    staticClass: "controls-row"
  }, [_c("div", {
    staticClass: "controls-row__item"
  }, [_c("Calendar", {
    attrs: {
      sessionStorageKey: _vm.sessionStorageKey
    },
    on: {
      change: _vm.onCalendarChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "controls-row__item"
  }, [_c("UserSelect", {
    on: {
      change: _vm.onUsersChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "controls-row__item"
  }, [_c("ProjectSelect", {
    on: {
      change: _vm.onProjectsChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "controls-row__item"
  }, [_c("TimezonePicker", {
    attrs: {
      value: _vm.timezone
    },
    on: {
      onTimezoneChange: _vm.onTimezoneChange
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "at-container"
  }, [_c("div", {
    staticClass: "at-container__inner"
  }, [this.intervals.length > 0 ? [_c("div", {
    staticClass: "row"
  }, _vm._l(this.intervals, function (interval) {
    return _c("div", {
      key: interval.id,
      staticClass: "col-4 screenshots__card"
    }, [_c("Screenshot", {
      staticClass: "screenshot",
      attrs: {
        disableModal: true,
        interval: interval,
        task: interval.task,
        user: _vm.modal.user,
        timezone: _vm.timezone
      },
      on: {
        click: function ($event) {
          return _vm.showImage(interval);
        }
      }
    })], 1);
  }), 0), _vm._v(" "), _c("ScreenshotModal", {
    attrs: {
      project: _vm.modal.project,
      interval: _vm.modal.interval,
      show: _vm.modal.show,
      showNavigation: true,
      task: _vm.modal.task,
      user: _vm.modal.user
    },
    on: {
      close: _vm.onHide,
      remove: _vm.removeScreenshot,
      showNext: _vm.showNext,
      showPrevious: _vm.showPrevious
    }
  })] : _c("div", {
    staticClass: "no-data"
  }, [_c("span", [_vm._v(_vm._s(_vm.$t("message.no_data")))])]), _vm._v(" "), _vm.isDataLoading ? _c("preloader") : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "screenshots__pagination"
  }, [_c("at-pagination", {
    attrs: {
      total: _vm.intervalsTotal,
      current: _vm.page,
      "page-size": _vm.limit
    },
    on: {
      "page-change": _vm.loadPage
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/components/AppImage.vue":
/*!*********************************************************!*\
  !*** ./resources/frontend/core/components/AppImage.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppImage_vue_vue_type_template_id_714c3918_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppImage.vue?vue&type=template&id=714c3918&scoped=true */ "./resources/frontend/core/components/AppImage.vue?vue&type=template&id=714c3918&scoped=true");
/* harmony import */ var _AppImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppImage.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/AppImage.vue?vue&type=script&lang=js");
/* harmony import */ var _AppImage_vue_vue_type_style_index_0_id_714c3918_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true */ "./resources/frontend/core/components/AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppImage_vue_vue_type_template_id_714c3918_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AppImage_vue_vue_type_template_id_714c3918_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "714c3918",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/AppImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue":
/*!*********************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=2aad669c&scoped=true */ "./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js");
/* harmony import */ var _Calendar_vue_vue_type_style_index_0_id_2aad669c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true */ "./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2aad669c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/MultiSelect.vue":
/*!************************************************************!*\
  !*** ./resources/frontend/core/components/MultiSelect.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiSelect_vue_vue_type_template_id_017e6227_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=template&id=017e6227&scoped=true */ "./resources/frontend/core/components/MultiSelect.vue?vue&type=template&id=017e6227&scoped=true");
/* harmony import */ var _MultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/MultiSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _MultiSelect_vue_vue_type_style_index_0_id_017e6227_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true */ "./resources/frontend/core/components/MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiSelect_vue_vue_type_template_id_017e6227_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MultiSelect_vue_vue_type_template_id_017e6227_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "017e6227",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/MultiSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/ProjectSelect.vue":
/*!**************************************************************!*\
  !*** ./resources/frontend/core/components/ProjectSelect.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectSelect_vue_vue_type_template_id_aaed6cf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectSelect.vue?vue&type=template&id=aaed6cf2 */ "./resources/frontend/core/components/ProjectSelect.vue?vue&type=template&id=aaed6cf2");
/* harmony import */ var _ProjectSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectSelect.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/ProjectSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectSelect_vue_vue_type_template_id_aaed6cf2__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectSelect_vue_vue_type_template_id_aaed6cf2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/ProjectSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/Screenshot.vue":
/*!***********************************************************!*\
  !*** ./resources/frontend/core/components/Screenshot.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* reexport safe */ _Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.config; },
/* harmony export */   thumbnailPathProvider: function() { return /* reexport safe */ _Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.thumbnailPathProvider; }
/* harmony export */ });
/* harmony import */ var _Screenshot_vue_vue_type_template_id_3d97c344_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screenshot.vue?vue&type=template&id=3d97c344&scoped=true */ "./resources/frontend/core/components/Screenshot.vue?vue&type=template&id=3d97c344&scoped=true");
/* harmony import */ var _Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screenshot.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/Screenshot.vue?vue&type=script&lang=js");
/* harmony import */ var _Screenshot_vue_vue_type_style_index_0_id_3d97c344_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true */ "./resources/frontend/core/components/Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Screenshot_vue_vue_type_template_id_3d97c344_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Screenshot_vue_vue_type_template_id_3d97c344_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d97c344",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/Screenshot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/ScreenshotModal.vue":
/*!****************************************************************!*\
  !*** ./resources/frontend/core/components/ScreenshotModal.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* reexport safe */ _ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.config; },
/* harmony export */   screenshotPathProvider: function() { return /* reexport safe */ _ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.screenshotPathProvider; }
/* harmony export */ });
/* harmony import */ var _ScreenshotModal_vue_vue_type_template_id_76e02979_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true */ "./resources/frontend/core/components/ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true");
/* harmony import */ var _ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenshotModal.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/ScreenshotModal.vue?vue&type=script&lang=js");
/* harmony import */ var _ScreenshotModal_vue_vue_type_style_index_0_id_76e02979_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true */ "./resources/frontend/core/components/ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScreenshotModal_vue_vue_type_template_id_76e02979_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ScreenshotModal_vue_vue_type_template_id_76e02979_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76e02979",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/ScreenshotModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue":
/*!***************************************************************************!*\
  !*** ./resources/frontend/core/modules/Screenshots/views/Screenshots.vue ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Screenshots_vue_vue_type_template_id_51e580c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screenshots.vue?vue&type=template&id=51e580c7&scoped=true */ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=template&id=51e580c7&scoped=true");
/* harmony import */ var _Screenshots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screenshots.vue?vue&type=script&lang=js */ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=script&lang=js");
/* harmony import */ var _Screenshots_vue_vue_type_style_index_0_id_51e580c7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true */ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Screenshots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Screenshots_vue_vue_type_template_id_51e580c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Screenshots_vue_vue_type_template_id_51e580c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51e580c7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/modules/Screenshots/views/Screenshots.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/AppImage.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/frontend/core/components/AppImage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppImage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/MultiSelect.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/frontend/core/components/MultiSelect.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/ProjectSelect.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/core/components/ProjectSelect.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ProjectSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/Screenshot.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/frontend/core/components/Screenshot.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.config; },
/* harmony export */   thumbnailPathProvider: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.thumbnailPathProvider; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Screenshot.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/ScreenshotModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/frontend/core/components/ScreenshotModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.config; },
/* harmony export */   screenshotPathProvider: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.screenshotPathProvider; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenshotModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Screenshots.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/AppImage.vue?vue&type=template&id=714c3918&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/components/AppImage.vue?vue&type=template&id=714c3918&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_template_id_714c3918_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_template_id_714c3918_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_template_id_714c3918_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppImage.vue?vue&type=template&id=714c3918&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=template&id=714c3918&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=template&id=2aad669c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/MultiSelect.vue?vue&type=template&id=017e6227&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/frontend/core/components/MultiSelect.vue?vue&type=template&id=017e6227&scoped=true ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_017e6227_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_017e6227_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_template_id_017e6227_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiSelect.vue?vue&type=template&id=017e6227&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=template&id=017e6227&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/ProjectSelect.vue?vue&type=template&id=aaed6cf2":
/*!********************************************************************************************!*\
  !*** ./resources/frontend/core/components/ProjectSelect.vue?vue&type=template&id=aaed6cf2 ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSelect_vue_vue_type_template_id_aaed6cf2__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSelect_vue_vue_type_template_id_aaed6cf2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectSelect_vue_vue_type_template_id_aaed6cf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectSelect.vue?vue&type=template&id=aaed6cf2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ProjectSelect.vue?vue&type=template&id=aaed6cf2");


/***/ }),

/***/ "./resources/frontend/core/components/Screenshot.vue?vue&type=template&id=3d97c344&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/frontend/core/components/Screenshot.vue?vue&type=template&id=3d97c344&scoped=true ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_template_id_3d97c344_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_template_id_3d97c344_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_template_id_3d97c344_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Screenshot.vue?vue&type=template&id=3d97c344&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=template&id=3d97c344&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/frontend/core/components/ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_template_id_76e02979_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_template_id_76e02979_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_template_id_76e02979_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=template&id=76e02979&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=template&id=51e580c7&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=template&id=51e580c7&scoped=true ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshots_vue_vue_type_template_id_51e580c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshots_vue_vue_type_template_id_51e580c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshots_vue_vue_type_template_id_51e580c7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Screenshots.vue?vue&type=template&id=51e580c7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=template&id=51e580c7&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AppImage_vue_vue_type_style_index_0_id_714c3918_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/AppImage.vue?vue&type=style&index=0&id=714c3918&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_2aad669c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiSelect_vue_vue_type_style_index_0_id_017e6227_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/MultiSelect.vue?vue&type=style&index=0&id=017e6227&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshot_vue_vue_type_style_index_0_id_3d97c344_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Screenshot.vue?vue&type=style&index=0&id=3d97c344&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ScreenshotModal_vue_vue_type_style_index_0_id_76e02979_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ScreenshotModal.vue?vue&type=style&index=0&id=76e02979&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Screenshots_vue_vue_type_style_index_0_id_51e580c7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Screenshots/views/Screenshots.vue?vue&type=style&index=0&id=51e580c7&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: function() { return /* binding */ __vue_component__$1; },
/* harmony export */   SkeletonTheme: function() { return /* binding */ __vue_component__; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var DEFAULT_BACKGROUND = '#eeeeee';
var DEFAULT_HIGHLIGHT = '#f5f5f5';
var SkeletonStyle = {
  backgroundColor: DEFAULT_BACKGROUND,
  backgroundImage: "linear-gradient(\n    90deg,\n    ".concat(DEFAULT_BACKGROUND, ",\n    ").concat(DEFAULT_HIGHLIGHT, ",\n    ").concat(DEFAULT_BACKGROUND, "\n  )")
};
var script = {
  name: 'PuSkeletonTheme',
  provide: function provide() {
    return {
      _themeStyle: this.themeStyle,
      _skeletonTheme: this
    };
  },
  props: {
    color: {
      type: String,
      default: DEFAULT_BACKGROUND
    },
    highlight: {
      type: String,
      default: DEFAULT_HIGHLIGHT
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tag: {
      type: String,
      default: 'div'
    },
    loading: {
      type: Boolean,
      default: undefined
    }
  },
  data: function data() {
    return {
      themeStyle: _objectSpread2({}, SkeletonStyle)
    };
  },
  render: function render(h) {
    var color = this.color,
        highlight = this.highlight,
        duration = this.duration;
    this.themeStyle.backgroundColor = color;
    this.themeStyle.backgroundImage = "linear-gradient(\n      90deg,\n      ".concat(color, ",\n      ").concat(highlight, ",\n      ").concat(color, "\n    )");

    if (duration) {
      this.themeStyle.animation = "SkeletonLoading ".concat(duration, "s ease-in-out infinite");
    } else {
      this.themeStyle.animation = '';
      this.themeStyle.backgroundImage = '';
    }

    if (this.tag) {
      return h(this.tag, this.$slots.default);
    }

    return this.$slots.default[0];
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var isEmptyVNode = function isEmptyVNode(children) {
  if (!children) return true;

  var _children = _slicedToArray(children, 1),
      firstNode = _children[0];

  var str = firstNode.text;

  if (str) {
    // remove all line-break and space character
    str = str.replace(/(\n|\r\n|\s)/g, '');
  }

  return typeof firstNode.tag === 'undefined' && !str;
};

var script$1 = {
  name: 'PuSkeleton',
  inject: {
    themeStyle: {
      from: '_themeStyle',
      default: SkeletonStyle
    },
    theme: {
      from: '_skeletonTheme',
      default: {}
    }
  },
  props: {
    prefix: {
      type: String,
      default: 'pu'
    },
    count: {
      type: Number,
      default: 1
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tag: {
      type: String,
      default: 'span'
    },
    width: [String, Number],
    height: [String, Number],
    circle: Boolean,
    loading: undefined
  },
  computed: {
    isLoading: function isLoading() {
      return typeof this.theme.loading !== 'undefined' ? this.theme.loading : this.loading;
    }
  },
  render: function render(h) {
    var width = this.width,
        height = this.height,
        duration = this.duration,
        prefix = this.prefix,
        circle = this.circle,
        count = this.count,
        tag = this.tag,
        isLoading = this.isLoading;
    var classes = ["".concat(prefix, "-skeleton")];
    var elements = [];

    var styles = _objectSpread2({}, this.themeStyle);

    if (duration) {
      styles.animation = "SkeletonLoading ".concat(duration, "s ease-in-out infinite");
    } else {
      styles.backgroundImage = '';
    }

    if (width) styles.width = width;
    if (height) styles.height = height;
    if (circle) styles.borderRadius = '50%';

    for (var i = 0; i < count; i += 1) {
      elements.push(h("span", {
        "key": i,
        "class": classes,
        "style": styles
      }, ["\u200C"]));
    }

    var showLoading = typeof isLoading !== 'undefined' ? isLoading : isEmptyVNode(this.$slots.default);

    if (tag) {
      return h(tag, !showLoading ? this.$slots.default : elements);
    }

    return !showLoading ? this.$slots.default : h("span", [elements]);
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;

/* template */

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-64c55a9f_0", { source: "\n.pu-skeleton {\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  height: inherit;\n}\n@keyframes SkeletonLoading {\n0% {\n    background-position: -200px 0;\n}\n100% {\n    background-position: calc(200px + 100%) 0;\n}\n}\n", map: {"version":3,"sources":["/Users/kit/Projects/resources/vue-loading-skeleton/src/skeleton.vue"],"names":[],"mappings":";AA6FA;EACA,2BAAA;EACA,4BAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;AACA;AAEA;AACA;IACA,6BAAA;AACA;AACA;IACA,yCAAA;AACA;AACA","file":"skeleton.vue","sourcesContent":["<script lang=\"jsx\">\nimport { SkeletonStyle } from './skeleton-theme.vue';\n\nconst isEmptyVNode = (children) => {\n  if (!children) return true;\n\n  const [firstNode] = children;\n  let str = firstNode.text;\n  if (str) {\n    // remove all line-break and space character\n    str = str.replace(/(\\n|\\r\\n|\\s)/g, '');\n  }\n\n  return typeof firstNode.tag === 'undefined' && !str;\n};\n\nexport default {\n  name: 'PuSkeleton',\n  inject: {\n    themeStyle: {\n      from: '_themeStyle',\n      default: SkeletonStyle\n    },\n    theme: {\n      from: '_skeletonTheme',\n      default: ({})\n    }\n  },\n  props: {\n    prefix: {\n      type: String,\n      default: 'pu'\n    },\n    count: {\n      type: Number,\n      default: 1\n    },\n    duration: {\n      type: Number,\n      default: 1.5\n    },\n    tag: {\n      type: String,\n      default: 'span'\n    },\n    width: [String, Number],\n    height: [String, Number],\n    circle: Boolean,\n    loading: undefined\n  },\n  computed: {\n    isLoading() {\n      return typeof this.theme.loading !== 'undefined' ? this.theme.loading : this.loading;\n    }\n  },\n  render(h) {\n    const {\n      width, height, duration, prefix, circle, count, tag, isLoading\n    } = this;\n    const classes = [`${prefix}-skeleton`];\n    const elements = [];\n    const styles = { ...this.themeStyle };\n\n    if (duration) {\n      styles.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;\n    } else {\n      styles.backgroundImage = '';\n    }\n    if (width) styles.width = width;\n    if (height) styles.height = height;\n    if (circle) styles.borderRadius = '50%';\n\n    for (let i = 0; i < count; i += 1) {\n      elements.push(\n        <span\n          key={i}\n          class={classes}\n          style={styles}>\n          &zwnj;\n        </span>\n      );\n    }\n\n    const showLoading = typeof isLoading !== 'undefined' ? isLoading : isEmptyVNode(this.$slots.default);\n    if (tag) {\n      return h(tag, !showLoading ? this.$slots.default : elements);\n    }\n    return (!showLoading ? this.$slots.default : <span>{ elements }</span>);\n  }\n};\n</script>\n\n<style>\n.pu-skeleton {\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  height: inherit;\n}\n\n@keyframes SkeletonLoading {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = undefined;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

var index = {
  install: function install(Vue) {
    Vue.component(__vue_component__$1.name, __vue_component__$1);
    Vue.component(__vue_component__.name, __vue_component__);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ })

}]);