"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuthInput',
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationProvider
  },
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    submit() {
      this.$emit('submit');
    }
  },
  watch: {
    'user.email'(value) {
      // Trim space
      this.user.email = value.replace(/\s/, '');
      this.$emit('change', this.user);
    },
    'user.password'() {
      this.$emit('change', this.user);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
/* harmony import */ var _AuthInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthInput */ "./resources/frontend/core/views/Auth/AuthInput.vue");
/* harmony import */ var _helpers_sloganGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/sloganGenerator */ "./resources/frontend/core/helpers/sloganGenerator.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





const config = {
  authInput: _AuthInput__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Login',
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__.ValidationObserver,
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__.VueRecaptcha,
    AuthInput: _AuthInput__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
        recaptcha: null
      },
      recaptchaKey: null,
      error: null,
      isLoading: false
    };
  },
  computed: {
    config() {
      return config;
    },
    slogan() {
      return (0,_helpers_sloganGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  },
  mounted() {
    if (this.$store.getters['user/isLoggedIn']) {
      this.$router.push({
        name: 'dashboard'
      });
    }
  },
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    onCaptchaVerify(response) {
      this.user.recaptcha = response;
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    change(user) {
      this.user = _objectSpread(_objectSpread({}, this.user), user);
    },
    async submit() {
      const valid = await this.$refs.observer.validate();
      if (!valid) {
        return;
      }
      this.$Loading.start();
      this.isLoading = true;
      const apiService = this.$store.getters['user/apiService'];
      try {
        if ('grecaptcha' in window) {
          this.$refs.recaptcha.reset();
        }
        await apiService.attemptLogin(this.user);
        await apiService.getCompanyData();
        this.error = null;
        this.$Loading.finish();
      } catch (e) {
        this.$Loading.error();
        if (lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(e, 'response.status')) {
          if (e.response.status === 429 && this.recaptchaKey === null) {
            this.recaptchaKey = e.response.data.info.site_key;
          }
          let message;
          if (e.response.status === 401) {
            message = this.$t('auth.message.user_not_found');
          } else if (e.response.status === 429) {
            message = this.$t('auth.message.solve_captcha');
          } else if (e.response.status === 503) {
            message = this.$t('auth.message.data_reset');
          } else {
            message = this.$t('auth.message.auth_error');
          }
          this.error = message;
        }
      } finally {
        this.isLoading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=template&id=0148ebf2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=template&id=0148ebf2 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("validation-provider", {
    attrs: {
      rules: "required|email",
      mode: "passive",
      name: "E-mail"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref) {
        let {
          errors
        } = _ref;
        return [_c("div", {
          staticClass: "input-group"
        }, [_c("small", [_vm._v("E-Mail")]), _vm._v(" "), _c("at-input", {
          attrs: {
            name: "login",
            status: errors.length > 0 ? "error" : "",
            placeholder: "E-Mail",
            icon: "mail",
            type: "text",
            required: ""
          },
          nativeOn: {
            keydown: function ($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              $event.preventDefault();
              return _vm.submit.apply(null, arguments);
            }
          },
          model: {
            value: _vm.user.email,
            callback: function ($$v) {
              _vm.$set(_vm.user, "email", $$v);
            },
            expression: "user.email"
          }
        }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])], 1)];
      }
    }])
  }), _vm._v(" "), _c("validation-provider", {
    attrs: {
      rules: "required",
      mode: "passive",
      name: _vm.$t("field.password")
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref2) {
        let {
          errors
        } = _ref2;
        return [_c("div", {
          staticClass: "input-group"
        }, [_c("small", [_vm._v(_vm._s(_vm.$t("field.password")))]), _vm._v(" "), _c("at-input", {
          attrs: {
            name: "password",
            status: errors.length > 0 ? "error" : "",
            placeholder: _vm.$t("field.password"),
            type: "password",
            icon: "lock",
            required: ""
          },
          nativeOn: {
            keydown: function ($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              $event.preventDefault();
              return _vm.submit.apply(null, arguments);
            }
          },
          model: {
            value: _vm.user.password,
            callback: function ($$v) {
              _vm.$set(_vm.user, "password", $$v);
            },
            expression: "user.password"
          }
        }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=template&id=37cc4d24&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=template&id=37cc4d24&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "login row at-row no-gutter"
  }, [_c("div", {
    staticClass: "login__wrap"
  }, [_c("div", {
    staticClass: "login__form"
  }, [_c("validation-observer", {
    ref: "observer",
    staticClass: "box",
    attrs: {
      tag: "div"
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "top"
  }, [_c("div", {
    staticClass: "static-message"
  }, [_c("div", {
    staticClass: "logo"
  })]), _vm._v(" "), _c("h1", {
    staticClass: "login__title"
  }, [_vm._v("Cattr")])]), _vm._v(" "), _c("div", [_vm.error ? _c("at-alert", {
    staticClass: "login__error",
    attrs: {
      type: "error",
      closable: "",
      message: _vm.error
    },
    on: {
      "on-close": function ($event) {
        _vm.error = null;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c(_vm.config.authInput, {
    tag: "component",
    on: {
      change: _vm.change,
      submit: _vm.submit
    }
  }), _vm._v(" "), _vm.recaptchaKey ? _c("vue-recaptcha", {
    ref: "recaptcha",
    staticClass: "recaptcha",
    attrs: {
      loadRecaptchaScript: true,
      sitekey: _vm.recaptchaKey
    },
    on: {
      verify: _vm.onCaptchaVerify,
      expired: _vm.onCaptchaExpired
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("at-button", {
    staticClass: "login__btn",
    attrs: {
      "native-type": "submit",
      type: "primary",
      loading: _vm.isLoading,
      disabled: _vm.isLoading
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.$t("auth.submit")))]), _vm._v(" "), _c("router-link", {
    staticClass: "link",
    attrs: {
      to: "/auth/password/reset"
    }
  }, [_vm._v(_vm._s(_vm.$t("auth.forgot_password")))])], 1)], 1), _vm._v(" "), _c("a", {
    staticClass: "login__slogan",
    attrs: {
      href: "https://cattr.app"
    },
    domProps: {
      innerHTML: _vm._s(_vm.slogan)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "hero col-16"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/frontend/core/helpers/sloganGenerator.js":
/*!************************************************************!*\
  !*** ./resources/frontend/core/helpers/sloganGenerator.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slogans = ['Cattr - a free open source time tracker', 'Manage your time with ease'];
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return slogans[getRandomInt(slogans.length)];
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/views/Auth/AuthInput.vue":
/*!**********************************************************!*\
  !*** ./resources/frontend/core/views/Auth/AuthInput.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthInput_vue_vue_type_template_id_0148ebf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthInput.vue?vue&type=template&id=0148ebf2 */ "./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=template&id=0148ebf2");
/* harmony import */ var _AuthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthInput.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthInput_vue_vue_type_template_id_0148ebf2__WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthInput_vue_vue_type_template_id_0148ebf2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Auth/AuthInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Auth/Login.vue":
/*!******************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Login.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* reexport safe */ _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.config; }
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_37cc4d24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=37cc4d24&scoped=true */ "./resources/frontend/core/views/Auth/Login.vue?vue&type=template&id=37cc4d24&scoped=true");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Auth/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_37cc4d24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true */ "./resources/frontend/core/views/Auth/Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_37cc4d24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_37cc4d24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37cc4d24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Auth/Login.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Login.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.config; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=template&id=0148ebf2":
/*!****************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=template&id=0148ebf2 ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_template_id_0148ebf2__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_template_id_0148ebf2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthInput_vue_vue_type_template_id_0148ebf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthInput.vue?vue&type=template&id=0148ebf2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/AuthInput.vue?vue&type=template&id=0148ebf2");


/***/ }),

/***/ "./resources/frontend/core/views/Auth/Login.vue?vue&type=template&id=37cc4d24&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Login.vue?vue&type=template&id=37cc4d24&scoped=true ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_37cc4d24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_37cc4d24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_37cc4d24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=37cc4d24&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=template&id=37cc4d24&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Auth/Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_37cc4d24_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Login.vue?vue&type=style&index=0&id=37cc4d24&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VueRecaptcha: function() { return /* binding */ Recaptcha; }
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var defer = function defer() {
  var state = false; // Resolved or not

  var callbacks = [];

  var resolve = function resolve() {
    if (state) {
      return;
    }

    state = true;

    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i]();
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }

    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },
    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

var ownProp = Object.prototype.hasOwnProperty;
function createRecaptcha() {
  var deferred = defer();
  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (ownProp.call(window, 'grecaptcha') && ownProp.call(window.grecaptcha, 'render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}
var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var Recaptcha = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    },
    loadRecaptchaScript: {
      type: Boolean,
      "default": true
    },
    recaptchaScriptId: {
      type: String,
      "default": '__RECAPTCHA_SCRIPT'
    },
    recaptchaHost: {
      type: String,
      "default": 'www.google.com'
    },
    language: {
      type: String,
      "default": ''
    }
  },
  emits: ['render', 'verify', 'expired', 'error'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var root = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var widgetId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var emitVerify = function emitVerify(response) {
      emit('verify', response);
    };

    var emitExpired = function emitExpired() {
      emit('expired');
    };

    var emitError = function emitError() {
      emit('error');
    };

    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      recaptcha.checkRecaptchaLoad();

      if (props.loadRecaptchaScript) {
        if (!document.getElementById(props.recaptchaScriptId)) {
          // Note: vueRecaptchaApiLoaded load callback name is per the latest documentation
          var script = document.createElement('script');
          script.id = props.recaptchaScriptId;
          script.src = "https://" + props.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + props.language;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        }
      }

      var opts = _extends({}, props, {
        callback: emitVerify,
        'expired-callback': emitExpired,
        'error-callback': emitError
      });

      var $root = root.value;
      var container = slots["default"] ? $root.children[0] : $root;
      recaptcha.render(container, opts, function (id) {
        widgetId.value = id;
        emit('render', id);
      });
    });
    return {
      root: root,
      widgetId: widgetId,
      reset: function reset() {
        recaptcha.reset(widgetId.value);
      },
      execute: function execute() {
        recaptcha.execute(widgetId.value);
      }
    };
  },
  render: function render() {
    var defaultSlot = this.$slots["default"];
    var defaultContent;

    if (typeof defaultSlot === 'function') {
      defaultContent = defaultSlot();
    } else {
      defaultContent = defaultSlot;
    }

    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
      ref: 'root'
    }, defaultContent);
  }
});




/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.EffectScope; },
/* harmony export */   Vue: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Vue2: function() { return /* binding */ Vue2; },
/* harmony export */   computed: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed; },
/* harmony export */   createApp: function() { return /* binding */ createApp; },
/* harmony export */   customRef: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.customRef; },
/* harmony export */   defineAsyncComponent: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent; },
/* harmony export */   defineComponent: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent; },
/* harmony export */   del: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.del; },
/* harmony export */   effectScope: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effectScope; },
/* harmony export */   getCurrentInstance: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance; },
/* harmony export */   getCurrentScope: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope; },
/* harmony export */   h: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.h; },
/* harmony export */   inject: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.inject; },
/* harmony export */   install: function() { return /* binding */ install; },
/* harmony export */   isProxy: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isProxy; },
/* harmony export */   isReactive: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReactive; },
/* harmony export */   isReadonly: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReadonly; },
/* harmony export */   isRef: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRef; },
/* harmony export */   isShallow: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isShallow; },
/* harmony export */   isVue2: function() { return /* binding */ isVue2; },
/* harmony export */   isVue3: function() { return /* binding */ isVue3; },
/* harmony export */   markRaw: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.markRaw; },
/* harmony export */   mergeDefaults: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults; },
/* harmony export */   nextTick: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.nextTick; },
/* harmony export */   onActivated: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onActivated; },
/* harmony export */   onBeforeMount: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount; },
/* harmony export */   onBeforeUnmount: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount; },
/* harmony export */   onBeforeUpdate: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate; },
/* harmony export */   onDeactivated: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated; },
/* harmony export */   onErrorCaptured: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured; },
/* harmony export */   onMounted: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted; },
/* harmony export */   onRenderTracked: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked; },
/* harmony export */   onRenderTriggered: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered; },
/* harmony export */   onScopeDispose: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose; },
/* harmony export */   onServerPrefetch: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch; },
/* harmony export */   onUnmounted: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted; },
/* harmony export */   onUpdated: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated; },
/* harmony export */   provide: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.provide; },
/* harmony export */   proxyRefs: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.proxyRefs; },
/* harmony export */   reactive: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive; },
/* harmony export */   readonly: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.readonly; },
/* harmony export */   ref: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref; },
/* harmony export */   set: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.set; },
/* harmony export */   shallowReactive: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReactive; },
/* harmony export */   shallowReadonly: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly; },
/* harmony export */   shallowRef: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef; },
/* harmony export */   toRaw: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRaw; },
/* harmony export */   toRef: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRef; },
/* harmony export */   toRefs: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRefs; },
/* harmony export */   triggerRef: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.triggerRef; },
/* harmony export */   unref: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.unref; },
/* harmony export */   useAttrs: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs; },
/* harmony export */   useCssModule: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssModule; },
/* harmony export */   useCssVars: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars; },
/* harmony export */   useListeners: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useListeners; },
/* harmony export */   useSlots: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSlots; },
/* harmony export */   version: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.version; },
/* harmony export */   warn: function() { return /* binding */ warn; },
/* harmony export */   watch: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch; },
/* harmony export */   watchEffect: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect; },
/* harmony export */   watchPostEffect: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect; },
/* harmony export */   watchSyncEffect: function() { return /* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");


var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__["default"]
var warn = vue__WEBPACK_IMPORTED_MODULE_0__["default"].util.warn

function install() {}

// createApp polyfill
function createApp(rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: vue__WEBPACK_IMPORTED_MODULE_0__["default"].config,
    use: vue__WEBPACK_IMPORTED_MODULE_0__["default"].use.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mixin: vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    component: vue__WEBPACK_IMPORTED_MODULE_0__["default"].component.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name, dir)
        return app
      } else {
        return vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}





/***/ })

}]);