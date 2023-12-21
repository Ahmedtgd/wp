"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["Register"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResetPassword',
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationObserver
  },
  created() {
    if (this.$route.query.token) {
      this.token = this.$route.query.token;
      this.validateToken();
    } else {
      this.$router.push({
        name: 'not-found'
      });
    }
  },
  data() {
    return {
      email: null,
      password: null,
      passwordConfirmation: null,
      fullName: null,
      token: null,
      isTokenValid: false,
      isLoading: false,
      isRegisterSuccess: false,
      errorMessage: null
    };
  },
  methods: {
    async validateToken() {
      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/auth/register/${this.token}`);
        this.email = data.email;
        this.isTokenValid = true;
      } catch ({
        response
      }) {
        if (response.status === 404) {
          this.$router.replace({
            name: 'not-found'
          });
        }
      }
    },
    async register() {
      this.isLoading = true;
      const data = {
        email: this.email,
        full_name: this.fullName,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      try {
        await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`auth/register/${this.token}`, data);
        this.isRegisterSuccess = true;
      } catch ({
        response
      }) {
        this.errorMessage = response.data.error;
      } finally {
        this.isLoading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=template&id=1a6ea0ae&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=template&id=1a6ea0ae&scoped=true ***!
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
    staticClass: "content-wrapper"
  }, [_vm.isTokenValid ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "at-container"
  }, [_c("div", {
    staticClass: "at-container__inner"
  }, [_vm.isRegisterSuccess ? _c("div", [_c("div", {
    staticClass: "header-text"
  }, [_c("i", {
    staticClass: "icon icon-check"
  }), _vm._v(" "), _c("h2", {
    staticClass: "header-text__title"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("register.success_title")) + "\n                        ")]), _vm._v(" "), _c("p", {
    staticClass: "header-text__subtitle"
  }, [_vm._v(_vm._s(_vm.$t("register.success_subtitle")))]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/auth/login"
    }
  }, [_vm._v(_vm._s(_vm.$t("reset.go_away")))])], 1)]) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 col-offset-9"
  }, [_c("div", {
    staticClass: "header-text"
  }, [_c("h2", {
    staticClass: "header-text__title"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("register.title")) + "\n                            ")]), _vm._v(" "), _c("p", {
    staticClass: "header-text__subtitle"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("register.subtitle")) + "\n                            ")])]), _vm._v(" "), _vm.errorMessage ? _c("at-alert", {
    staticClass: "alert",
    attrs: {
      type: "error",
      closable: "",
      message: _vm.errorMessage
    },
    on: {
      "on-close": function ($event) {
        _vm.errorMessage = null;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref) {
        let {
          invalid
        } = _ref;
        return [_c("validation-provider", {
          attrs: {
            rules: "required|email",
            name: "E-mail"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref2) {
              let {
                errors
              } = _ref2;
              return [_c("div", {
                staticClass: "input-group"
              }, [_c("small", [_vm._v("E-Mail")]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: "login",
                  status: errors.length > 0 ? "error" : "",
                  placeholder: "E-Mail",
                  icon: "mail",
                  type: "text",
                  disabled: "true"
                },
                model: {
                  value: _vm.email,
                  callback: function ($$v) {
                    _vm.email = $$v;
                  },
                  expression: "email"
                }
              }), _vm._v(" "), _c("p", {
                staticClass: "error-message"
              }, [_c("small", [_vm._v(_vm._s(errors[0]))])])], 1)];
            }
          }], null, true)
        }), _vm._v(" "), _c("validation-provider", {
          attrs: {
            rules: "required",
            name: _vm.$t("field.full_name")
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref3) {
              let {
                errors
              } = _ref3;
              return [_c("div", {
                staticClass: "input-group"
              }, [_c("small", [_vm._v(_vm._s(_vm.$t("field.full_name")))]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: "full_name",
                  status: errors.length > 0 ? "error" : "",
                  placeholder: _vm.$t("field.full_name"),
                  icon: "user",
                  type: "text"
                },
                model: {
                  value: _vm.fullName,
                  callback: function ($$v) {
                    _vm.fullName = $$v;
                  },
                  expression: "fullName"
                }
              }), _vm._v(" "), _c("p", {
                staticClass: "error-message"
              }, [_c("small", [_vm._v(_vm._s(errors[0]))])])], 1)];
            }
          }], null, true)
        }), _vm._v(" "), _c("validation-provider", {
          attrs: {
            rules: "required|min:6",
            vid: "password",
            name: _vm.$t("field.password")
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref4) {
              let {
                errors
              } = _ref4;
              return [_c("div", {
                staticClass: "input-group"
              }, [_c("small", [_vm._v(_vm._s(_vm.$t("field.password")))]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: "password",
                  status: errors.length > 0 ? "error" : "",
                  placeholder: _vm.$t("field.full_name"),
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.password,
                  callback: function ($$v) {
                    _vm.password = $$v;
                  },
                  expression: "password"
                }
              }), _vm._v(" "), _c("p", {
                staticClass: "error-message"
              }, [_c("small", [_vm._v(_vm._s(errors[0]))])])], 1)];
            }
          }], null, true)
        }), _vm._v(" "), _c("validation-provider", {
          attrs: {
            rules: "required|min:6|confirmed:password",
            name: _vm.$t("reset.confirm_password")
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref5) {
              let {
                errors
              } = _ref5;
              return [_c("div", {
                staticClass: "input-group"
              }, [_c("small", [_vm._v(_vm._s(_vm.$t("reset.confirm_password")))]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: "passwordConfirmation",
                  status: errors.length > 0 ? "error" : "",
                  placeholder: _vm.$t("reset.confirm_password"),
                  icon: "lock",
                  type: "password"
                },
                model: {
                  value: _vm.passwordConfirmation,
                  callback: function ($$v) {
                    _vm.passwordConfirmation = $$v;
                  },
                  expression: "passwordConfirmation"
                }
              }), _vm._v(" "), _c("p", {
                staticClass: "error-message"
              }, [_c("small", [_vm._v(_vm._s(errors[0]))])])], 1)];
            }
          }], null, true)
        }), _vm._v(" "), _c("at-button", {
          staticClass: "btn",
          attrs: {
            "native-type": "submit",
            type: "primary",
            disabled: invalid || _vm.isLoading,
            loading: _vm.isLoading
          },
          on: {
            click: _vm.register
          }
        }, [_vm._v(_vm._s(_vm.$t("register.register_btn")))])];
      }
    }], null, false, 98700120)
  })], 1)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/views/Auth/Register.vue":
/*!*********************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Register.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1a6ea0ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1a6ea0ae&scoped=true */ "./resources/frontend/core/views/Auth/Register.vue?vue&type=template&id=1a6ea0ae&scoped=true");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Auth/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_1a6ea0ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true */ "./resources/frontend/core/views/Auth/Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_1a6ea0ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_1a6ea0ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1a6ea0ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Auth/Register.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Register.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Auth/Register.vue?vue&type=template&id=1a6ea0ae&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Register.vue?vue&type=template&id=1a6ea0ae&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1a6ea0ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1a6ea0ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1a6ea0ae_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=1a6ea0ae&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=template&id=1a6ea0ae&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Auth/Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_1a6ea0ae_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/Register.vue?vue&type=style&index=0&id=1a6ea0ae&lang=scss&scoped=true");


/***/ })

}]);