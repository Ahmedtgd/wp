"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["desktop-login"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_sloganGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/sloganGenerator */ "./resources/frontend/core/helpers/sloganGenerator.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'desktop-login',
  computed: {
    slogan() {
      return (0,_helpers_sloganGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  },
  data() {
    return {
      error: false
    };
  },
  methods: {
    commonLogin() {
      this.$router.replace({
        name: 'auth.login'
      });
    },
    finish() {
      let error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.error = error;
      this.$Loading.error();
    }
  },
  mounted() {
    this.$Loading.start();
    if (location.search.length === 0) {
      this.finish();
    } else {
      const query = location.search.substr(1).split('=');
      if (query[0] !== 'token' && query.length !== 2) {
        this.finish();
      } else {
        const apiService = this.$store.getters['user/apiService'];
        apiService.attemptDesktopLogin(query[1]).then(() => apiService.getCompanyData()).then(() => this.finish(false)).catch(() => this.finish());
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "box"
  }, [_vm._m(0), _vm._v(" "), _vm.error ? [_c("div", [_c("at-alert", {
    staticClass: "login__error",
    attrs: {
      message: _vm.$t("auth.desktop_error"),
      type: "error"
    }
  })], 1), _vm._v(" "), _c("at-button", {
    staticClass: "login__btn",
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.commonLogin
    }
  }, [_vm._v(_vm._s(_vm.$t("auth.switch_to_common")) + "\n                    ")])] : [_c("at-alert", {
    staticClass: "login__error",
    attrs: {
      message: _vm.$t("auth.desktop_working"),
      type: "info"
    }
  })]], 2)]), _vm._v(" "), _c("a", {
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
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "top"
  }, [_c("div", {
    staticClass: "static-message"
  }, [_c("div", {
    staticClass: "logo"
  })]), _vm._v(" "), _c("h1", {
    staticClass: "login__title"
  }, [_vm._v("Cattr")])]);
}];
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/views/Auth/Desktop.vue":
/*!********************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Desktop.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desktop_vue_vue_type_template_id_fc4ebd3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true */ "./resources/frontend/core/views/Auth/Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true");
/* harmony import */ var _Desktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desktop.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Auth/Desktop.vue?vue&type=script&lang=js");
/* harmony import */ var _Desktop_vue_vue_type_style_index_0_id_fc4ebd3e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true */ "./resources/frontend/core/views/Auth/Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Desktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Desktop_vue_vue_type_template_id_fc4ebd3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Desktop_vue_vue_type_template_id_fc4ebd3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fc4ebd3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Auth/Desktop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Auth/Desktop.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Desktop.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Desktop.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Auth/Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktop_vue_vue_type_template_id_fc4ebd3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktop_vue_vue_type_template_id_fc4ebd3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktop_vue_vue_type_template_id_fc4ebd3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=template&id=fc4ebd3e&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Auth/Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Desktop_vue_vue_type_style_index_0_id_fc4ebd3e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Desktop.vue?vue&type=style&index=0&id=fc4ebd3e&lang=scss&scoped=true");


/***/ })

}]);