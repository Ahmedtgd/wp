"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["DesktopLogin"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DesktopLogin',
  async mounted() {
    this.isLoading = true;
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('auth/desktop-key');
      this.current += 1;
      this.transferStatus = 'finish';
      this.token = data.access_token;
    } catch ({
      response
    }) {
      this.transferStatus = 'error';
      if (true) {
        console.warn(response ? response : 'Issuing desktop key has been canceled');
      }
    }
    this.isLoading = false;
  },
  data() {
    return {
      current: 0,
      transferStatus: 'process',
      openStatus: 'wait',
      token: null
    };
  },
  methods: {
    click() {
      if (this.transferStatus === 'error' || this.openStatus === 'error') {
        window.location.reload();
      } else if (this.transferStatus === 'finish' && (this.openStatus === 'wait' || this.openStatus === 'process')) {
        this.current += 1;
        this.openStatus = 'process';
        const client = window.open(`cattr://authenticate?url=${encodeURIComponent(process.env.VUE_APP_API_URL || `${window.location.origin}/api`)}&token=${this.token}`);
        const failFunction = () => {
          if (this.openStatus !== 'finish') {
            this.openStatus = 'error';
          }
        };
        const timeout = setTimeout(failFunction, 1);
        client.onblur = () => {
          clearTimeout(timeout);
          if (this.openStatus !== 'error') {
            this.openStatus = 'finish';
          }
        };
        client.onunload = client.onclose = () => {
          clearTimeout(timeout);
          failFunction();
        };
      } else {
        window.history.back();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true ***!
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
    staticClass: "desktop-key content-wrapper"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "at-container crud__content"
  }, [_c("div", {
    staticClass: "at-container__inner"
  }, [_c("h2", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "auth.desktop.header",
      expression: "'auth.desktop.header'"
    }]
  })]), _vm._v(" "), _c("at-steps", {
    staticClass: "col-lg-offset-7",
    attrs: {
      current: _vm.current
    }
  }, [_c("at-step", {
    attrs: {
      icon: _vm.transferStatus === "process" ? "icon-lock" : undefined,
      status: _vm.transferStatus,
      description: _vm.$t("auth.desktop.step1"),
      title: _vm.$t("auth.desktop.step", {
        n: 1
      })
    }
  }), _vm._v(" "), _c("at-step", {
    attrs: {
      icon: _vm.openStatus !== "finish" && _vm.openStatus !== "error" ? "icon-monitor" : undefined,
      status: _vm.openStatus,
      description: _vm.$t("auth.desktop.step2"),
      title: _vm.$t("auth.desktop.step", {
        n: 2
      })
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.transferStatus === "finish" && _vm.openStatus === "error" ? _c("div", {
    staticClass: "col-10 col-offset-7"
  }, [_c("p", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "auth.desktop.error",
      expression: "'auth.desktop.error'"
    }]
  }), _vm._v(" "), _c("i18n", {
    attrs: {
      path: "auth.desktop.download",
      tag: "p"
    }
  }, [_c("a", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "auth.desktop.download_button",
      expression: "'auth.desktop.download_button'"
    }],
    attrs: {
      href: "https://cattr.app/desktop",
      target: "_blank"
    }
  })])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-6 col-offset-9"
  }, [_c("at-button", {
    attrs: {
      type: _vm.transferStatus === "finish" ? _vm.openStatus === "finish" ? "success" : "primary" : "error"
    },
    on: {
      click: _vm.click
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.transferStatus === "error" || _vm.openStatus === "error" ? _vm.$t("auth.desktop.retry") : _vm.transferStatus === "finish" && _vm.openStatus !== "finish" ? _vm.$t("auth.desktop.open") : _vm.transferStatus === "finish" && _vm.openStatus === "finish" ? _vm.$t("auth.desktop.finish") : _vm.$t("auth.desktop.cancel")) + "\n                    ")])], 1)])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/views/DesktopLogin.vue":
/*!********************************************************!*\
  !*** ./resources/frontend/core/views/DesktopLogin.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopLogin_vue_vue_type_template_id_5603db79_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true */ "./resources/frontend/core/views/DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true");
/* harmony import */ var _DesktopLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopLogin.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/DesktopLogin.vue?vue&type=script&lang=js");
/* harmony import */ var _DesktopLogin_vue_vue_type_style_index_0_id_5603db79_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true */ "./resources/frontend/core/views/DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DesktopLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopLogin_vue_vue_type_template_id_5603db79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DesktopLogin_vue_vue_type_template_id_5603db79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5603db79",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/DesktopLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/DesktopLogin.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/frontend/core/views/DesktopLogin.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesktopLogin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/frontend/core/views/DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopLogin_vue_vue_type_template_id_5603db79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopLogin_vue_vue_type_template_id_5603db79_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopLogin_vue_vue_type_template_id_5603db79_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=template&id=5603db79&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopLogin_vue_vue_type_style_index_0_id_5603db79_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/DesktopLogin.vue?vue&type=style&index=0&id=5603db79&lang=scss&scoped=true");


/***/ })

}]);