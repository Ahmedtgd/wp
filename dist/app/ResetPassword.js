"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["ResetPassword"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/auth.service */ "./resources/frontend/core/services/auth.service.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResetPassword',
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationObserver
  },
  created() {
    if (this.$route.query.token && this.$route.query.email) {
      this.currentStep = 2;
      this.validateToken();
    }
  },
  data() {
    return {
      email: null,
      password: null,
      passwordConfirmation: null,
      currentStep: 0,
      disabledForm: false,
      isValidToken: true,
      authService: new _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"]()
    };
  },
  methods: {
    async resetPassword() {
      this.disabledForm = true;
      const payload = {
        email: this.email
      };
      try {
        await this.authService.resetPasswordRequest(payload);
        this.currentStep = 1;
      } catch (e) {
        //
      } finally {
        this.disabledForm = false;
      }
    },
    async validateToken() {
      const payload = {
        email: this.$route.query.email,
        token: this.$route.query.token
      };
      try {
        await this.authService.resetPasswordValidateToken(payload);
        this.isValidToken = true;
      } catch (e) {
        this.isValidToken = false;
      }
    },
    async submitNewPassword() {
      this.disabledForm = true;
      const payload = {
        email: this.$route.query.email,
        token: this.$route.query.token,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      try {
        await this.authService.resetPasswordProcess(payload);
        this.currentStep = 3;
        this.disabledForm = false;
      } catch (e) {
        //
      } finally {
        this.disabledForm = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "at-container crud__content"
  }, [_c("at-steps", {
    staticClass: "steps col-lg-offset-4",
    attrs: {
      current: _vm.currentStep
    }
  }, [_c("at-step", {
    attrs: {
      title: _vm.$t("reset.step", {
        n: 1
      }),
      description: _vm.$t("reset.step_description.step_1")
    }
  }), _vm._v(" "), _c("at-step", {
    attrs: {
      title: _vm.$t("reset.step", {
        n: 2
      }),
      description: _vm.$t("reset.step_description.step_2")
    }
  }), _vm._v(" "), _c("at-step", {
    attrs: {
      title: _vm.$t("reset.step", {
        n: 3
      }),
      description: _vm.$t("reset.step_description.step_3")
    }
  }), _vm._v(" "), _c("at-step", {
    attrs: {
      title: _vm.$t("reset.step", {
        n: 4
      }),
      description: _vm.$t("reset.step_description.step_4")
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.currentStep == 0 ? _c("div", {
    staticClass: "col-6 col-offset-9"
  }, [_c("validation-observer", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref) {
        let {
          invalid
        } = _ref;
        return [_c("div", {
          staticClass: "header-text"
        }, [_c("h2", {
          staticClass: "header-text__title"
        }, [_vm._v("\n                                " + _vm._s(_vm.$t("reset.tabs.enter_email.title")) + "\n                            ")]), _vm._v(" "), _c("p", {
          staticClass: "header-text__subtitle"
        }, [_vm._v("\n                                " + _vm._s(_vm.$t("reset.tabs.enter_email.subtitle")) + "\n                            ")])]), _vm._v(" "), _c("validation-provider", {
          attrs: {
            rules: "required|email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref2) {
              let {
                errors
              } = _ref2;
              return [_c("small", [_vm._v("E-Mail")]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: "login",
                  status: errors.length > 0 ? "error" : "",
                  placeholder: "E-Mail",
                  icon: "mail",
                  type: "text",
                  disabled: _vm.disabledForm
                },
                model: {
                  value: _vm.email,
                  callback: function ($$v) {
                    _vm.email = $$v;
                  },
                  expression: "email"
                }
              })];
            }
          }], null, true)
        }), _vm._v(" "), _c("at-button", {
          staticClass: "btn",
          attrs: {
            "native-type": "submit",
            type: "primary",
            disabled: invalid || _vm.disabledForm
          },
          on: {
            click: _vm.resetPassword
          }
        }, [_vm._v(_vm._s(_vm.$t("reset.reset_password")))])];
      }
    }], null, false, 2488146663)
  })], 1) : _vm._e(), _vm._v(" "), _vm.currentStep == 1 ? _c("div", {
    staticClass: "col-6 col-offset-9"
  }, [_c("div", {
    staticClass: "header-text"
  }, [_c("i", {
    staticClass: "icon icon-mail"
  }), _vm._v(" "), _c("h2", {
    staticClass: "header-text__title"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("reset.tabs.check_email.title")) + "\n                        ")]), _vm._v(" "), _c("p", {
    staticClass: "header-text__subtitle"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("reset.tabs.check_email.subtitle")) + "\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.currentStep == 2 ? _c("div", {
    staticClass: "col-6 col-offset-9"
  }, [_vm.isValidToken ? _c("validation-observer", {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref3) {
        let {
          invalid
        } = _ref3;
        return [_c("div", {
          staticClass: "header-text"
        }, [_c("h2", {
          staticClass: "header-text__title"
        }, [_vm._v("\n                                " + _vm._s(_vm.$t("reset.tabs.new_password.title")) + "\n                            ")]), _vm._v(" "), _c("p", {
          staticClass: "header-text__subtitle"
        }, [_vm._v("\n                                " + _vm._s(_vm.$t("reset.tabs.new_password.subtitle")) + "\n                            ")])]), _vm._v(" "), _c("validation-provider", {
          attrs: {
            rules: "required|min:6",
            name: _vm.$t("field.password"),
            vid: "password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref4) {
              let {
                errors
              } = _ref4;
              return [_c("small", [_vm._v(_vm._s(_vm.$t("field.password")))]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: _vm.$t("field.password"),
                  status: errors.length > 0 ? "error" : "",
                  placeholder: _vm.$t("field.password"),
                  icon: "lock",
                  type: "password",
                  disabled: _vm.disabledForm
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
              }, [_c("small", [_vm._v(_vm._s(errors[0]))])])];
            }
          }], null, true)
        }), _vm._v(" "), _c("validation-provider", {
          attrs: {
            rules: "required|min:6|confirmed:password",
            name: _vm.$t("reset.confirm_password"),
            vid: "passwordConfirmation"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function (_ref5) {
              let {
                errors
              } = _ref5;
              return [_c("small", [_vm._v(_vm._s(_vm.$t("reset.confirm_password")))]), _vm._v(" "), _c("at-input", {
                attrs: {
                  name: "passwordConfirmation",
                  status: errors.length > 0 ? "error" : "",
                  placeholder: _vm.$t("reset.confirm_password"),
                  icon: "lock",
                  type: "password",
                  disabled: _vm.disabledForm
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
              }, [_c("small", [_vm._v(_vm._s(errors[0]))])])];
            }
          }], null, true)
        }), _vm._v(" "), _c("at-button", {
          staticClass: "btn",
          attrs: {
            "native-type": "submit",
            type: "primary",
            disabled: invalid || _vm.disabledForm
          },
          on: {
            click: _vm.submitNewPassword
          }
        }, [_vm._v(_vm._s(_vm.$t("control.submit")))])];
      }
    }], null, false, 382323629)
  }) : _c("div", [_c("div", {
    staticClass: "header-text"
  }, [_c("h2", {
    staticClass: "header-text__title"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("reset.page_is_not_available")) + "\n                            ")]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/auth/login"
    }
  }, [_vm._v(_vm._s(_vm.$t("reset.go_away")))])], 1)])], 1) : _vm._e(), _vm._v(" "), _vm.currentStep == 3 ? _c("div", {
    staticClass: "col-6 col-offset-9"
  }, [_c("div", {
    staticClass: "header-text"
  }, [_c("i", {
    staticClass: "icon icon-check"
  }), _vm._v(" "), _c("h2", {
    staticClass: "header-text__title"
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("reset.tabs.success.title")) + "\n                        ")]), _vm._v(" "), _c("p", {
    staticClass: "header-text__subtitle"
  }), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/auth/login"
    }
  }, [_vm._v(_vm._s(_vm.$t("reset.go_away")))])], 1)]) : _vm._e()])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/frontend/core/services/auth.service.js":
/*!**********************************************************!*\
  !*** ./resources/frontend/core/services/auth.service.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

class AuthService {
  resetPasswordRequest(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('auth/password/reset/request', data);
  }
  resetPasswordValidateToken(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('auth/password/reset/validate', data);
  }
  resetPasswordProcess(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('auth/password/reset/process', data);
  }
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/views/Auth/ResetPassword.vue":
/*!**************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/ResetPassword.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_5f351ce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true */ "./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=script&lang=js");
/* harmony import */ var _ResetPassword_vue_vue_type_style_index_0_id_5f351ce2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true */ "./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_5f351ce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_5f351ce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5f351ce2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Auth/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_5f351ce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_5f351ce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_5f351ce2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=template&id=5f351ce2&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_style_index_0_id_5f351ce2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Auth/ResetPassword.vue?vue&type=style&index=0&id=5f351ce2&lang=scss&scoped=true");


/***/ })

}]);