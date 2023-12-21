"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["StorageManagementTab"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_resource_about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/resource/about.service */ "./resources/frontend/core/services/resource/about.service.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


const aboutService = new _services_resource_about_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'StorageManagementTab',
  data: () => ({
    storageSpaceMaxUsed: process.env.VUE_APP_STORAGE_SPACE_MAX_USED,
    storage: null,
    thinRequested: false
  }),
  computed: {
    storageSpaceUsed() {
      return Math.round(this.storage.space.used * 100 / this.storage.space.total);
    },
    storageRelativeCleanTime() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.storage.thinning.last).fromNow();
    },
    storageCleanTime() {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(this.storage.thinning.last).format('LLL');
    },
    cleanButtonTitle() {
      return this.$t(!this.storage.screenshots_available || this.storage.thinning.now ? 'about.storage.thin_unavailable' : 'about.storage.thin_available');
    }
  },
  methods: {
    async cleanStorage() {
      this.thinRequested = true;
      try {
        const {
          status
        } = await aboutService.startCleanup();
        if (status === 204) {
          this.$Message.success('Thin has been queued!');
          this.storage.thinning.now = true;
        } else {
          this.$Message.error('Error happened during thin queueing!');
        }
      } catch (e) {
        this.$Message.error('Error happened during thin queueing!');
      } finally {
        this.thinRequested = false;
      }
    },
    getSize(value) {
      if (value < 1024) {
        return `${value} B`;
      }
      const KB = value / 1024;
      if (KB < 1024) {
        return `${Math.round(KB)} KB`;
      }
      const MB = KB / 1024;
      if (MB < 1024) {
        return `${Math.round(MB)} MB`;
      }
      const GB = MB / 1024;
      if (GB < 1024) {
        return `${Math.round(GB)} GB`;
      }
      return `${Math.round(GB / 1024)} TB`;
    }
  },
  async mounted() {
    this.isLoading = true;
    try {
      this.storage = await aboutService.getStorageInfo();
    } catch ({
      response
    }) {
      if (true) {
        console.warn(response ? response : 'request to storage is canceled');
      }
    }
    this.isLoading = false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-offset-9"
  }, [_vm.storage ? [_c("p", {
    staticClass: "row"
  }, [_c("span", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "about.storage.space.used",
      expression: "'about.storage.space.used'"
    }],
    staticClass: "col-6"
  }), _vm._v(" "), _c("at-progress", {
    staticClass: "col-4",
    attrs: {
      percent: _vm.storageSpaceUsed,
      status: _vm.storageSpaceUsed < _vm.storageSpaceMaxUsed ? "error" : "default",
      "stroke-width": 15,
      title: _vm.getSize(_vm.storage.space.used)
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "col-1",
    domProps: {
      innerHTML: _vm._s(`${_vm.storageSpaceUsed}%`)
    }
  })], 1), _vm._v(" "), _c("p", {
    staticClass: "row"
  }, [_c("span", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "about.storage.space.total",
      expression: "'about.storage.space.total'"
    }],
    staticClass: "col-6"
  }), _vm._v(" "), _c("span", {
    staticClass: "col-4"
  }, [_c("at-tag", [_vm._v(_vm._s(_vm.getSize(_vm.storage.space.total)))])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "row"
  }, [_c("span", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "about.storage.space.left",
      expression: "'about.storage.space.left'"
    }],
    staticClass: "col-6"
  }), _vm._v(" "), _c("span", {
    staticClass: "col-4"
  }, [_c("at-tag", [_vm._v(_vm._s(_vm.getSize(_vm.storage.space.left)))])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "row"
  }, [_c("span", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "about.storage.last_thinning",
      expression: "'about.storage.last_thinning'"
    }],
    staticClass: "col-6"
  }), _vm._v(" "), _c("span", {
    staticClass: "col-4"
  }, [_c("at-tag", {
    attrs: {
      title: _vm.storageCleanTime
    }
  }, [_vm._v(_vm._s(_vm.storageRelativeCleanTime))])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "row"
  }, [_c("span", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "about.storage.screenshots_available",
      expression: "'about.storage.screenshots_available'"
    }],
    staticClass: "col-6"
  }), _vm._v(" "), _c("span", {
    staticClass: "col-4"
  }, [_c("at-tag", [_vm._v(_vm._s(_vm.$tc("about.storage.screenshots", _vm.storage.screenshots_available, {
    n: _vm.storage.screenshots_available
  })))])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "row"
  }, [_c("at-button", {
    staticClass: "col-10",
    attrs: {
      disabled: _vm.thinRequested || !_vm.storage.screenshots_available || _vm.storage.thinning.now,
      loading: _vm.thinRequested,
      title: _vm.cleanButtonTitle,
      hollow: ""
    },
    on: {
      click: _vm.cleanStorage
    }
  }, [_vm._v("\n                " + _vm._s(_vm.thinRequested ? "" : _vm.$t("about.storage.thin")) + "\n            ")])], 1)] : _c("p", {
    directives: [{
      name: "t",
      rawName: "v-t",
      value: "about.no_storage",
      expression: "'about.no_storage'"
    }]
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/components/StorageManagementTab.vue":
/*!*********************************************************************!*\
  !*** ./resources/frontend/core/components/StorageManagementTab.vue ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StorageManagementTab_vue_vue_type_template_id_cae32116_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true */ "./resources/frontend/core/components/StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true");
/* harmony import */ var _StorageManagementTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageManagementTab.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/StorageManagementTab.vue?vue&type=script&lang=js");
/* harmony import */ var _StorageManagementTab_vue_vue_type_style_index_0_id_cae32116_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true */ "./resources/frontend/core/components/StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StorageManagementTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StorageManagementTab_vue_vue_type_template_id_cae32116_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _StorageManagementTab_vue_vue_type_template_id_cae32116_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cae32116",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/StorageManagementTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/StorageManagementTab.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/frontend/core/components/StorageManagementTab.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StorageManagementTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StorageManagementTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StorageManagementTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StorageManagementTab_vue_vue_type_template_id_cae32116_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StorageManagementTab_vue_vue_type_template_id_cae32116_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StorageManagementTab_vue_vue_type_template_id_cae32116_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=template&id=cae32116&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StorageManagementTab_vue_vue_type_style_index_0_id_cae32116_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/StorageManagementTab.vue?vue&type=style&index=0&id=cae32116&lang=scss&scoped=true");


/***/ })

}]);