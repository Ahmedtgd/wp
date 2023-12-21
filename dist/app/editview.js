"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["editview"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/RenderableField.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/RenderableField.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RenderableField',
  props: {
    render: {
      required: true,
      type: Function
    },
    value: {
      default: Object
    },
    field: {
      required: true,
      type: Object
    },
    values: {
      type: Object
    },
    setValue: {
      type: Function
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('user', ['companyData'])),
  methods: {
    inputHandler(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },
    focusHandler(evt) {
      this.$emit('focus', evt);
    },
    blurHandler(evt) {
      this.$emit('blur', evt);
    }
  },
  render(h) {
    return this.render(h, {
      inputHandler: this.inputHandler,
      currentValue: this.currentValue,
      focusHandler: this.focusHandler,
      blurHandler: this.blurHandler,
      field: this.field,
      values: this.values,
      setValue: this.setValue,
      companyData: this.companyData
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ResourceSelect.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ResourceSelect.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/string */ "./resources/frontend/core/utils/string.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResourceSelect',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    service: {
      type: Object
    },
    clearable: {
      type: Boolean,
      default: () => false
    }
  },
  async created() {
    try {
      this.options = await this.service.getAll({
        headers: {
          'X-Paginate': 'false'
        }
      });
      await this.$nextTick();
      if (this.$refs.select && Object.prototype.hasOwnProperty.call(this.$refs.select, '$children')) {
        this.$refs.select.$children.forEach(option => {
          option.hidden = false;
        });
      }
    } catch ({
      response
    }) {
      if (true) {
        console.warn(response ? response : 'request to resource is canceled');
      }
    }
  },
  data() {
    return {
      options: []
    };
  },
  methods: {
    ucfirst: _utils_string__WEBPACK_IMPORTED_MODULE_0__.ucfirst,
    getName() {
      let object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const names = ['full_name'];
      let key = 'name';
      if (typeof object === 'object') {
        let keys = Object.keys(object);
        for (let i = 0; i <= names.length; i++) {
          if (keys.indexOf(names[i]) !== -1) {
            key = names[i];
            break;
          }
        }
        return object[key] ?? '';
      }
    },
    formattedLabel(option) {
      const name = this.getName(option);
      return name ? this.ucfirst(name) : '';
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_RenderableField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/RenderableField */ "./resources/frontend/core/components/RenderableField.vue");
/* harmony import */ var _components_ResourceSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ResourceSelect */ "./resources/frontend/core/components/ResourceSelect.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/string */ "./resources/frontend/core/utils/string.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditView',
  components: {
    RenderableField: _components_RenderableField__WEBPACK_IMPORTED_MODULE_0__["default"],
    ResourceSelect: _components_ResourceSelect__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_3__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_3__.ValidationObserver
  },
  data() {
    const meta = this.$route.meta;
    const pageData = meta.pageData || {};
    return {
      service: meta.service,
      fields: meta.fields || [],
      values: {},
      filters: this.$route.meta.filters,
      pageData: {
        title: pageData.title,
        topComponents: pageData.topComponents || [],
        bottomComponents: pageData.bottomComponents || [],
        type: pageData.type || 'new',
        routeNamedSection: pageData.editRouteName || '',
        pageControls: this.$route.meta.pageData.pageControls || [],
        editRouteName: pageData.editRouteName || ''
      },
      isLoading: false,
      isDataLoading: false,
      afterSubmitCallback: meta.afterSubmitCallback
    };
  },
  async mounted() {
    if (!Object.values(this.values).length) {
      await this.fetchData();
    }
  },
  async beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.fetchData();
      next();
    });
  },
  async beforeRouteUpdate(to, from, next) {
    await this.fetchData();
    next();
  },
  methods: {
    ucfirst: _utils_string__WEBPACK_IMPORTED_MODULE_2__.ucfirst,
    async fetchData() {
      this.isDataLoading = true;
      if (this.pageData.type === 'edit') {
        try {
          const {
            data
          } = await this.service.getItem(this.$route.params[this.service.getIdParam()], this.filters);
          this.values = _objectSpread(_objectSpread({}, this.values), data.data);
        } catch ({
          response
        }) {
          if (response && Object.prototype.hasOwnProperty.call(response, 'data') && response.data.error_type === 'query.item_not_found') {
            this.$router.replace({
              name: 'forbidden'
            });
          }
        }
      } else if (this.pageData.type === 'new') {
        this.fields.forEach(field => {
          if (field.default !== undefined) {
            this.values[field.key] = typeof field.default === 'function' ? field.default(this.$store) : field.default;
          }
        });
      }
      this.isDataLoading = false;
    },
    async submit() {
      const valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.isLoading = true;
      try {
        const data = (await this.service.save(this.values, this.pageData.type === 'new')).data;
        this.$Notify({
          type: 'success',
          title: this.$t('notification.record.save.success.title'),
          message: this.$t('notification.record.save.success.message')
        });
        this.isLoading = false;
        if (this.afterSubmitCallback) {
          this.afterSubmitCallback();
        } else if (this.pageData.type === 'new') {
          this.$router.push({
            name: this.$route.meta.navigation.view,
            params: {
              id: data.res[this.service.getIdParam()]
            }
          });
        }
      } catch ({
        response
      }) {
        this.isLoading = false;
        this.$refs.form.setErrors(response.data.info);
      }
    },
    handleClick(button) {
      button.onClick(this, this.values[this.service.getIdParam()]);
    },
    checkRenderCondition(button) {
      return typeof button.renderCondition !== 'undefined' ? button.renderCondition(this) : true;
    },
    setValue(key, value) {
      this.$set(this.values, key, value);
    },
    isDisplayable(field) {
      if (typeof field.displayable === 'function') {
        return field.displayable(this);
      }
      if (typeof field.displayable !== 'undefined') {
        return !!field.displayable;
      }
      return true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ResourceSelect.vue?vue&type=template&id=58298b88":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ResourceSelect.vue?vue&type=template&id=58298b88 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.options.length ? _c("at-select", {
    ref: "select",
    attrs: {
      placeholder: _vm.$t("control.select"),
      filterable: "",
      clearable: "clearable"
    },
    model: {
      value: _vm.model,
      callback: function ($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  }, _vm._l(_vm.options, function (option) {
    return _c("at-option", {
      key: option.id,
      attrs: {
        label: _vm.formattedLabel(option),
        value: option.id
      }
    });
  }), 1) : _c("at-input", {
    attrs: {
      disabled: ""
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=template&id=2dea6a04&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=template&id=2dea6a04&scoped=true ***!
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
    staticClass: "container crud"
  }, [_c("div", {
    staticClass: "at-container crud__content crud__edit-view"
  }, [_c("div", {
    staticClass: "page-controls"
  }, [_c("h1", {
    staticClass: "control-item title"
  }, [_vm._v("\n                " + _vm._s(_vm.$route.params.id ? `${_vm.$t(_vm.pageData.title)} #${_vm.$route.params.id}` : `${_vm.$t(_vm.pageData.title)}`) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "control-items"
  }, [_vm.pageData.pageControls && _vm.pageData.pageControls.length > 0 ? [_vm._l(_vm.pageData.pageControls, function (button, key) {
    return [_vm.checkRenderCondition(button) ? _c("at-button", {
      key: key,
      staticClass: "control-item",
      attrs: {
        size: "large",
        type: button.renderType || "",
        icon: button.icon || ""
      },
      on: {
        click: function ($event) {
          return _vm.handleClick(button);
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t(button.label)) + "\n                        ")]) : _vm._e()];
  })] : _vm._e(), _vm._v(" "), _c("at-button", {
    staticClass: "control-item",
    attrs: {
      size: "large"
    },
    on: {
      click: function ($event) {
        return _vm.$router.go(-1);
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("control.back")) + "\n                ")])], 2)]), _vm._v(" "), _vm._l(_vm.pageData.topComponents, function (component, index) {
    return _c(component, {
      key: index,
      tag: "component",
      attrs: {
        parent: this
      }
    });
  }), _vm._v(" "), _c("validation-observer", {
    ref: "form",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (_ref) {
        let {
          invalid
        } = _ref;
        return [_c("div", {
          staticClass: "data-entries"
        }, [_vm._l(_vm.fields, function (field, key) {
          return [_vm.isDisplayable(field) ? [_c("div", {
            key: key,
            staticClass: "data-entry"
          }, [_c("div", {
            staticClass: "row"
          }, [_c("div", {
            staticClass: "col-6"
          }, [field.tooltipValue ? _c("at-tooltip", {
            attrs: {
              content: _vm.$t(field.tooltipValue),
              placement: "top-left"
            }
          }, [_c("u", {
            staticClass: "label label-tooltip"
          }, [_vm._v("\n                                            " + _vm._s(_vm.$t(field.label)) + "\n                                            "), field.required ? _c("span", [_vm._v("*")]) : _vm._e()])]) : _c("p", {
            staticClass: "label"
          }, [_vm._v("\n                                        " + _vm._s(_vm.$t(field.label)) + "\n                                        "), field.required ? _c("span", [_vm._v("*")]) : _vm._e()])], 1), _vm._v(" "), _vm.isDataLoading && _vm.pageData.type === "edit" ? _c("at-input", {
            staticClass: "col-18",
            attrs: {
              disabled: ""
            }
          }) : _c("div", {
            staticClass: "col-18"
          }, [typeof field.render !== "undefined" ? _c("validation-provider", {
            attrs: {
              rules: typeof field.rules === "string" ? field.rules : field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref2) {
                let {
                  errors
                } = _ref2;
                return [_c("renderable-field", {
                  class: {
                    "at-select--error at-input--error has-error": errors.length > 0
                  },
                  attrs: {
                    render: field.render,
                    field: field,
                    values: _vm.values,
                    setValue: _vm.setValue
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.key === "email" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required|email" : "",
              name: field.key,
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref3) {
                let {
                  errors
                } = _ref3;
                return [_c("at-input", {
                  attrs: {
                    placeholder: _vm.$t(field.placeholder) || "",
                    type: field.frontendType || "",
                    status: errors.length > 0 ? "error" : ""
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.type === "input" || field.type === "text" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref4) {
                let {
                  errors
                } = _ref4;
                return [_c("at-input", {
                  attrs: {
                    placeholder: _vm.$t(field.placeholder) || "",
                    type: field.frontendType || "",
                    status: errors.length > 0 ? "error" : ""
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.type === "number" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref5) {
                let {
                  errors
                } = _ref5;
                return [_c("at-input-number", {
                  attrs: {
                    min: field.minValue,
                    max: field.maxValue
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.type === "select" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref6) {
                let {
                  errors
                } = _ref6;
                return [_c("at-select", {
                  class: {
                    "at-select--error": errors.length > 0
                  },
                  attrs: {
                    placeholder: _vm.$t("control.select")
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }, _vm._l(field.options, function (option, optionKey) {
                  return _c("at-option", {
                    key: optionKey,
                    attrs: {
                      value: option.value
                    }
                  }, [_vm._v(_vm._s(_vm.ucfirst(_vm.$t(option.label))) + "\n                                            ")]);
                }), 1), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.type === "checkbox" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref7) {
                let {
                  errors
                } = _ref7;
                return [_c("at-checkbox", {
                  attrs: {
                    label: ""
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.type === "resource-select" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref8) {
                let {
                  errors
                } = _ref8;
                return [_c("resource-select", {
                  class: {
                    "at-select--error": errors.length > 0
                  },
                  attrs: {
                    service: field.service
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : field.type === "textarea" ? _c("validation-provider", {
            attrs: {
              rules: field.required ? "required" : "",
              name: _vm.$t(field.label),
              vid: field.key
            },
            scopedSlots: _vm._u([{
              key: "default",
              fn: function (_ref9) {
                let {
                  errors
                } = _ref9;
                return [_c("at-textarea", {
                  class: {
                    "at-textarea--error": errors.length > 0
                  },
                  attrs: {
                    autosize: "",
                    "min-rows": "2",
                    placeholder: _vm.$t(field.placeholder) || ""
                  },
                  model: {
                    value: _vm.values[field.key],
                    callback: function ($$v) {
                      _vm.$set(_vm.values, field.key, $$v);
                    },
                    expression: "values[field.key]"
                  }
                }), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
              }
            }], null, true)
          }) : _vm._e()], 1)], 1)])] : _vm._e()];
        })], 2), _vm._v(" "), _vm._l(_vm.pageData.bottomComponents, function (component, index) {
          return _c(component, {
            key: index,
            tag: "component",
            attrs: {
              parent: this
            }
          });
        }), _vm._v(" "), _c("at-button", {
          attrs: {
            type: "primary",
            disabled: invalid || _vm.isLoading,
            loading: _vm.isLoading
          },
          on: {
            click: _vm.submit
          }
        }, [_vm._v(_vm._s(_vm.$t("control.save")))])];
      }
    }])
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/components/RenderableField.vue":
/*!****************************************************************!*\
  !*** ./resources/frontend/core/components/RenderableField.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderableField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderableField.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/RenderableField.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _RenderableField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/RenderableField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/ResourceSelect.vue":
/*!***************************************************************!*\
  !*** ./resources/frontend/core/components/ResourceSelect.vue ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceSelect_vue_vue_type_template_id_58298b88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceSelect.vue?vue&type=template&id=58298b88 */ "./resources/frontend/core/components/ResourceSelect.vue?vue&type=template&id=58298b88");
/* harmony import */ var _ResourceSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceSelect.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/ResourceSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceSelect_vue_vue_type_template_id_58298b88__WEBPACK_IMPORTED_MODULE_0__.render,
  _ResourceSelect_vue_vue_type_template_id_58298b88__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/ResourceSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Crud/EditView.vue":
/*!*********************************************************!*\
  !*** ./resources/frontend/core/views/Crud/EditView.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditView_vue_vue_type_template_id_2dea6a04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditView.vue?vue&type=template&id=2dea6a04&scoped=true */ "./resources/frontend/core/views/Crud/EditView.vue?vue&type=template&id=2dea6a04&scoped=true");
/* harmony import */ var _EditView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditView.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Crud/EditView.vue?vue&type=script&lang=js");
/* harmony import */ var _EditView_vue_vue_type_style_index_0_id_2dea6a04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true */ "./resources/frontend/core/views/Crud/EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditView_vue_vue_type_template_id_2dea6a04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditView_vue_vue_type_template_id_2dea6a04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2dea6a04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Crud/EditView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/RenderableField.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/frontend/core/components/RenderableField.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderableField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RenderableField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/RenderableField.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenderableField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/ResourceSelect.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/frontend/core/components/ResourceSelect.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResourceSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ResourceSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Crud/EditView.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/frontend/core/views/Crud/EditView.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/ResourceSelect.vue?vue&type=template&id=58298b88":
/*!*********************************************************************************************!*\
  !*** ./resources/frontend/core/components/ResourceSelect.vue?vue&type=template&id=58298b88 ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSelect_vue_vue_type_template_id_58298b88__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSelect_vue_vue_type_template_id_58298b88__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceSelect_vue_vue_type_template_id_58298b88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResourceSelect.vue?vue&type=template&id=58298b88 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ResourceSelect.vue?vue&type=template&id=58298b88");


/***/ }),

/***/ "./resources/frontend/core/views/Crud/EditView.vue?vue&type=template&id=2dea6a04&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Crud/EditView.vue?vue&type=template&id=2dea6a04&scoped=true ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_2dea6a04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_2dea6a04_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_2dea6a04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditView.vue?vue&type=template&id=2dea6a04&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=template&id=2dea6a04&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Crud/EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Crud/EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_2dea6a04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Crud/EditView.vue?vue&type=style&index=0&id=2dea6a04&lang=scss&scoped=true");


/***/ })

}]);