(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["report.timeuse"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/time */ "./resources/frontend/core/utils/time.js");
/* harmony import */ var _moduleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/moduleLoader */ "./resources/frontend/core/moduleLoader.js");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UserAvatar */ "./resources/frontend/core/components/UserAvatar.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    reportsList: {}
  },
  components: {
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    let projectRoute = {},
      taskRoute = {};
    Object.values((0,_moduleLoader__WEBPACK_IMPORTED_MODULE_1__.getModuleList)()).forEach(i => {
      const moduleName = i.moduleInstance.getModuleName();
      if (moduleName === 'AmazingCat_TasksModule') {
        taskRoute = i.moduleInstance.getRoutes().find(route => route.name.includes('view'));
      }
      if (moduleName === 'AmazingCat_ProjectsModule') {
        projectRoute = i.moduleInstance.getRoutes().find(route => route.name.includes('view'));
      }
    });
    return {
      data: [],
      total_time: null,
      taskViewRoute: taskRoute.name,
      projectViewRoute: projectRoute.name
    };
  },
  methods: {
    formatDurationString: _utils_time__WEBPACK_IMPORTED_MODULE_0__.formatDurationString,
    getUserPercentage(minutes, totalTime) {
      return Math.floor(minutes * 100 / totalTime);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimeUseReport_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeUseReport/List */ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue");
/* harmony import */ var _services_resource_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/resource/user.service */ "./resources/frontend/core/services/resource/user.service.js");
/* harmony import */ var _internal_TimeUseReport_service_time_use_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _internal/TimeUseReport/service/time-use-report.service */ "./resources/frontend/core/modules/TimeUseReport/service/time-use-report.service.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/time */ "./resources/frontend/core/utils/time.js");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Preloader */ "./resources/frontend/core/components/Preloader.vue");
/* harmony import */ var _components_UserSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UserSelect */ "./resources/frontend/core/components/UserSelect.vue");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Calendar */ "./resources/frontend/core/components/Calendar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









const timeUseService = new _internal_TimeUseReport_service_time_use_report_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
const usersService = new _services_resource_user_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    List: _TimeUseReport_List__WEBPACK_IMPORTED_MODULE_0__["default"],
    Preloader: _components_Preloader__WEBPACK_IMPORTED_MODULE_4__["default"],
    UserSelect: _components_UserSelect__WEBPACK_IMPORTED_MODULE_5__["default"],
    Calendar: _components_Calendar__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data() {
    const sessionStorageKey = 'amazingcat.session.storage.timeuse_report';
    return {
      datepickerDateStart: '',
      datepickerDateEnd: '',
      userReportsList: [],
      isDataLoading: false,
      userIDs: [],
      sessionStorageKey: sessionStorageKey
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapGetters)('user', ['companyData'])), {}, {
    totalTime() {
      return this.userReportsList.reduce((total, current) => total + current.time, 0);
    }
  }),
  methods: {
    formatDurationString: _utils_time__WEBPACK_IMPORTED_MODULE_3__.formatDurationString,
    async sendRequests() {
      try {
        this.users = (await usersService.getAll()).data;
        await this.getReport();
      } catch ({
        response
      }) {
        if (true) {
          console.warn(response ? response : 'request to users is canceled');
        }
      }
    },
    getReport: lodash_debounce__WEBPACK_IMPORTED_MODULE_7___default()(async function () {
      if (this.userIDs === 'undefined' || !this.datepickerDateStart) {
        return;
      }
      this.isDataLoading = true;
      try {
        const {
          data
        } = await timeUseService.getReport((0,_utils_time__WEBPACK_IMPORTED_MODULE_3__.getStartOfDayInTimezone)(this.datepickerDateStart, this.companyData.timezone), (0,_utils_time__WEBPACK_IMPORTED_MODULE_3__.getEndOfDayInTimezone)(this.datepickerDateEnd, this.companyData.timezone), this.userIDs);
        this.userReportsList = data.data;
      } catch ({
        response
      }) {
        if (true) {
          console.warn(response ? response : 'request to time use report is canceled');
        }
      }
      this.isDataLoading = false;
    }, 350),
    onUsersChange(userIDs) {
      this.userIDs = userIDs;
      if (this._isMounted) {
        this.getReport();
      }
    },
    onCalendarChange(_ref) {
      let {
        start,
        end
      } = _ref;
      this.datepickerDateStart = start;
      this.datepickerDateEnd = end;
      this.getReport();
    },
    onTimezoneChange(timezone) {
      this.setTimezone(timezone);
      this.getReport();
    }
  },
  async mounted() {
    // FIXME: on first run companyData.timezone is undefined
    await this.sendRequests();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=template&id=fd0caf98&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=template&id=fd0caf98&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return Object.keys(_vm.reportsList).length ? _c("div", [_c("at-collapse", {
    staticClass: "list",
    attrs: {
      simple: ""
    }
  }, _vm._l(_vm.reportsList, function (userReport, index) {
    return _c("at-collapse-item", {
      key: index,
      staticClass: "list__item"
    }, [_c("div", {
      staticClass: "item-header",
      attrs: {
        slot: "title"
      },
      slot: "title"
    }, [_c("div", {
      staticClass: "row flex-middle"
    }, [_c("div", {
      staticClass: "col-xs-4 col-md-2 col-lg-1"
    }, [_c("UserAvatar", {
      attrs: {
        user: userReport.user,
        size: 35
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-xs-10 col-md-10 col-lg-13"
    }, [_c("span", {
      staticClass: "h5"
    }, [_vm._v(_vm._s(userReport.user.full_name))])]), _vm._v(" "), _c("div", {
      staticClass: "col-xs-offset-3 col-xs-7 col-md-3 col-lg-2"
    }, [_c("span", {
      staticClass: "h4"
    }, [_vm._v(_vm._s(_vm.formatDurationString(userReport.time)))])]), _vm._v(" "), _c("div", {
      staticClass: "col-xs-5 col-md-9 col-lg-8 d-xs-none"
    }, [_c("at-progress", {
      staticClass: "time-percentage",
      attrs: {
        percent: _vm.getUserPercentage(userReport.time, userReport.time),
        status: "success",
        "stroke-width": 15
      }
    })], 1)])]), _vm._v(" "), _vm._l(userReport.tasks, function (task) {
      return _c("div", {
        key: task.task_id,
        staticClass: "row flex-middle at-collapse__header"
      }, [_c("div", {
        staticClass: "col-xs-7 col-md-6 col-lg-7 text-ellipsis"
      }, [_c("router-link", {
        staticClass: "h5 link",
        attrs: {
          title: task.project_name,
          to: {
            name: _vm.projectViewRoute,
            params: {
              id: task.project_id
            }
          }
        }
      }, [_vm._v("\n                        " + _vm._s(task.project_name) + "\n                    ")])], 1), _vm._v(" "), _c("div", {
        staticClass: "col-xs-7 col-md-6 col-lg-7 text-ellipsis"
      }, [_c("router-link", {
        staticClass: "h5 link",
        attrs: {
          title: task.name,
          to: {
            name: _vm.taskViewRoute,
            params: {
              id: task.task_id
            }
          }
        }
      }, [_vm._v("\n                        " + _vm._s(task.task_name) + "\n                    ")])], 1), _vm._v(" "), _c("div", {
        staticClass: "col-xs-offset-3 col-xs-7 col-md-3 col-lg-2"
      }, [_c("span", {
        staticClass: "h4"
      }, [_vm._v(_vm._s(_vm.formatDurationString(task.time)))])]), _vm._v(" "), _c("div", {
        staticClass: "col-xs-5 col-md-9 col-lg-8 d-xs-none"
      }, [_c("at-progress", {
        attrs: {
          percent: _vm.getUserPercentage(task.time, userReport.time),
          "stroke-width": 15,
          status: "success"
        }
      })], 1)]);
    })], 2);
  }), 1)], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "time-use-report"
  }, [_c("h1", {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.$t("navigation.time-use-report")))]), _vm._v(" "), _c("div", {
    staticClass: "controls-row"
  }, [_c("div", {
    staticClass: "calendar controls-row__item"
  }, [_c("Calendar", {
    attrs: {
      sessionStorageKey: _vm.sessionStorageKey
    },
    on: {
      change: _vm.onCalendarChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "select controls-row__item"
  }, [_c("UserSelect", {
    on: {
      change: _vm.onUsersChange
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "controls-row__item controls-row__item--left-auto"
  }, [_vm.companyData.timezone ? _c("small", [_vm._v("\n                " + _vm._s(_vm.$t("project-report.report_timezone", [_vm.companyData.timezone])) + "\n            ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "at-container"
  }, [_c("div", {
    staticClass: "total-time-row"
  }, [_c("span", {
    staticClass: "total-time-label"
  }, [_vm._v(_vm._s(_vm.$t("field.total_time")))]), _vm._v(" "), _c("span", {
    staticClass: "total-time-value"
  }, [_vm._v(_vm._s(_vm.formatDurationString(_vm.totalTime)))])]), _vm._v(" "), Object.keys(_vm.userReportsList).length && !_vm.isDataLoading ? _c("div", [_c("list", {
    attrs: {
      reportsList: _vm.userReportsList
    }
  })], 1) : _c("div", {
    staticClass: "at-container__inner no-data"
  }, [_vm.isDataLoading ? _c("preloader") : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("message.no_data")))])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/service/time-use-report.service.js":
/*!******************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/service/time-use-report.service.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TimeUseReportService; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/report.service */ "./resources/frontend/core/services/report.service.js");


class TimeUseReportService extends _services_report_service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @returns {Promise<AxiosResponse<T>>}
   * @param startAt
   * @param endAt
   * @param users
   */
  async getReport(startAt, endAt, users) {
    return await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('report/time', {
      start_at: startAt,
      end_at: endAt,
      users
    });
  }
}

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue":
/*!*********************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue":
/*!************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_fd0caf98_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=fd0caf98&scoped=true */ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=template&id=fd0caf98&scoped=true");
/* harmony import */ var _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js */ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=script&lang=js");
/* harmony import */ var _List_vue_vue_type_style_index_0_id_fd0caf98_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true */ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_fd0caf98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_fd0caf98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fd0caf98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue":
/*!*******************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimeuseReport_vue_vue_type_template_id_4a65d2a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true */ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true");
/* harmony import */ var _TimeuseReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeuseReport.vue?vue&type=script&lang=js */ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=script&lang=js");
/* harmony import */ var _TimeuseReport_vue_vue_type_style_index_0_id_4a65d2a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true */ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TimeuseReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimeuseReport_vue_vue_type_template_id_4a65d2a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TimeuseReport_vue_vue_type_template_id_4a65d2a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4a65d2a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeuseReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeuseReport.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeuseReport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_2aad669c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=template&id=2aad669c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=template&id=2aad669c&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=template&id=fd0caf98&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=template&id=fd0caf98&scoped=true ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_fd0caf98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_fd0caf98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_fd0caf98_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=fd0caf98&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=template&id=fd0caf98&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeuseReport_vue_vue_type_template_id_4a65d2a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeuseReport_vue_vue_type_template_id_4a65d2a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeuseReport_vue_vue_type_template_id_4a65d2a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=template&id=4a65d2a9&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_2aad669c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/Calendar.vue?vue&type=style&index=0&id=2aad669c&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_fd0caf98_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeUseReport/List.vue?vue&type=style&index=0&id=fd0caf98&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeuseReport_vue_vue_type_style_index_0_id_4a65d2a9_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/TimeUseReport/views/TimeuseReport.vue?vue&type=style&index=0&id=4a65d2a9&lang=scss&scoped=true");


/***/ })

}]);