"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
    values: {
      type: Array,
      default: () => []
    },
    keyField: {
      type: String,
      required: true
    },
    labelField: {
      type: String,
      required: true
    },
    valueField: {
      type: String,
      required: true
    }
  },
  methods: {
    onChange(index, value) {
      const values = [...this.values];
      values[index][this.valueField] = value;
      this.$emit('change', values);
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ListBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ListBox */ "./resources/frontend/core/components/ListBox.vue");
/* harmony import */ var _components_RenderableField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/RenderableField */ "./resources/frontend/core/components/RenderableField.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DynamicSettings',
  components: {
    RenderableField: _components_RenderableField__WEBPACK_IMPORTED_MODULE_1__["default"],
    ListBox: _components_ListBox__WEBPACK_IMPORTED_MODULE_0__["default"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__.ValidationObserver,
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__.ValidationProvider
  },
  data() {
    return {
      section: {},
      values: {},
      isLoading: false
    };
  },
  mounted() {
    this.fetchSectionData();
  },
  watch: {
    sections() {
      this.fetchSectionData();
    }
  },
  computed: {
    sections() {
      return this.$store.getters['settings/sections'];
    },
    groups() {
      if (!this.section) {
        return {};
      }
      const {
        fields
      } = this.section;
      if (!fields) {
        return {};
      }
      return Object.keys(fields).map(key => ({
        key,
        field: fields[key]
      })).reduce((groups, _ref) => {
        let {
          key,
          field
        } = _ref;
        const groupKey = field.group || 'default';
        if (!groups[groupKey]) {
          groups[groupKey] = {};
        }
        groups[groupKey][key] = field;
        return groups;
      }, {});
    }
  },
  methods: {
    handleInputNumber(ev, key) {
      let number = ev.target.valueAsNumber;
      if (ev.target.max && number > ev.target.max) {
        number = Number(ev.target.max);
        ev.target.valueAsNumber = number;
        ev.target.value = String(number);
      }
      if (ev.target.min && number < ev.target.min) {
        number = Number(ev.target.min);
        ev.target.valueAsNumber = number;
        ev.target.value = String(number);
      }
      this.values[key] = number;
    },
    fetchSectionData() {
      const name = this.$route.name;
      this.section = this.$store.getters['settings/sections'].find(s => s.pathName === name);
      if (this.section) {
        this.values = _objectSpread(_objectSpread({}, this.values), this.section.data);
      }
    },
    removeReadonly(el) {
      if (el.target.getAttribute('readonly') === 'readonly') {
        el.target.removeAttribute('readonly');
      }
    },
    getSelectOptions(field, values) {
      const {
        options
      } = field.fieldOptions;
      if (typeof options === 'function') {
        return options({
          field,
          values
        });
      }
      return options;
    },
    async submit() {
      const valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.isLoading = true;
      try {
        await this.section.service.save(this.values);
        this.$Notify({
          type: 'success',
          title: this.$t('notification.settings.save.success.title'),
          message: this.$t('notification.settings.save.success.message')
        });
      } catch ({
        response
      }) {
        if (typeof response !== 'undefined' && Object.prototype.hasOwnProperty.call(response, 'data') && Object.prototype.hasOwnProperty.call(response.data, 'info')) {
          this.$refs.form.setErrors(response.data.info);
        }
      } finally {
        this.isLoading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Settings',
  computed: {
    sections() {
      return this.$store.getters['settings/sections'].filter(section => section.scope === 'settings').sort((a, b) => a.order - b.order);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=template&id=f77d5842&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=template&id=f77d5842&scoped=true ***!
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
  return _c("ul", {
    staticClass: "listbox"
  }, _vm._l(_vm.values, function (value, index) {
    return _c("li", {
      key: value[_vm.keyField],
      staticClass: "listbox__item"
    }, [_c("at-checkbox", {
      attrs: {
        checked: value[_vm.valueField]
      },
      on: {
        "on-change": function ($event) {
          return _vm.onChange(index, $event);
        }
      }
    }, [_vm._v("\n            " + _vm._s(value[_vm.labelField]) + "\n        ")])], 1);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [this.section ? _c("h1", {
    staticClass: "page-title settings__title"
  }, [_vm._v(_vm._s(_vm.$t(this.section.label)))]) : _vm._e(), _vm._v(" "), this.section && _vm.values ? [_vm._l(this.section.topComponents, function (component, index) {
    return _c(component, {
      key: index,
      tag: "component",
      attrs: {
        parent: this
      }
    });
  }), _vm._v(" "), _c("validation-observer", {
    ref: "form"
  }, [_c("div", {
    staticClass: "data-entries"
  }, [_vm._l(this.groups, function (fields, groupKey) {
    return [_vm._l(fields, function (field, key) {
      return [(typeof field.displayable === "function" ? field.displayable(_vm.$store) : true) ? [_c("div", {
        key: key,
        staticClass: "data-entry"
      }, [_c("div", {
        staticClass: "row"
      }, [_c("div", {
        staticClass: "col-6 label"
      }, [field.tooltipValue ? _c("at-tooltip", {
        attrs: {
          content: _vm.$t(field.tooltipValue),
          placement: "top-right"
        }
      }, [_c("u", {
        staticClass: "label label-tooltip"
      }, [_vm._v("\n                                                " + _vm._s(_vm.$t(field.label)) + "\n                                                "), field.required ? _c("span", [_vm._v("*")]) : _vm._e()])]) : _c("p", {
        staticClass: "label"
      }, [_vm._v("\n                                            " + _vm._s(_vm.$t(field.label)) + "\n                                            "), field.required ? _c("span", [_vm._v("*")]) : _vm._e()])], 1), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [typeof field.render === "function" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref) {
            let {
              errors
            } = _ref;
            return [_c("renderable-field", {
              staticClass: "with-margin",
              class: {
                "at-select--error at-input--error has-error": errors.length > 0
              },
              attrs: {
                render: field.render,
                field: field,
                values: _vm.values
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
      }) : field.fieldOptions.type === "input" || field.fieldOptions.type === "text" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref2) {
            let {
              errors
            } = _ref2;
            return [_c("at-input", {
              attrs: {
                readonly: field.fieldOptions.disableAutocomplete || false,
                placeholder: _vm.$t(field.fieldOptions.placeholder) || "",
                type: field.fieldOptions.frontendType || "",
                status: errors.length > 0 ? "error" : ""
              },
              on: {
                focus: _vm.removeReadonly
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
      }) : field.fieldOptions.type === "number" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref3) {
            let {
              errors
            } = _ref3;
            return [_c("at-input-number", {
              attrs: {
                min: field.minValue,
                max: field.maxValue,
                size: "large"
              },
              on: {
                blur: function ($event) {
                  return _vm.handleInputNumber($event, field.key);
                }
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
      }) : field.fieldOptions.type === "select" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref4) {
            let {
              errors
            } = _ref4;
            return [_c("at-select", {
              staticClass: "with-margin",
              model: {
                value: _vm.values[field.key],
                callback: function ($$v) {
                  _vm.$set(_vm.values, field.key, $$v);
                },
                expression: "values[field.key]"
              }
            }, _vm._l(_vm.getSelectOptions(field, _vm.values), function (option, optionKey) {
              return _c("at-option", {
                key: optionKey,
                attrs: {
                  value: option.value
                }
              }, [_vm._v(_vm._s(_vm.$t(option.label)) + "\n                                                ")]);
            }), 1), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
          }
        }], null, true)
      }) : field.fieldOptions.type === "textarea" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref5) {
            let {
              errors
            } = _ref5;
            return [_c("at-textarea", {
              staticClass: "with-margin",
              class: {
                "at-textarea--error": errors.length > 0
              },
              attrs: {
                autosize: ""
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
      }) : field.fieldOptions.type === "listbox" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref6) {
            let {
              errors
            } = _ref6;
            return [_c("ListBox", {
              attrs: {
                keyField: field.fieldOptions.keyField,
                labelField: field.fieldOptions.labelField,
                valueField: field.fieldOptions.valueField
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
      }) : field.fieldOptions.type === "checkbox" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
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
      }) : field.fieldOptions.type === "switch" ? _c("validation-provider", {
        attrs: {
          rules: field.rules || "",
          name: _vm.$t(field.label),
          vid: field.key
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function (_ref8) {
            let {
              errors
            } = _ref8;
            return [field.fieldOptions.checkedText ? _c("span", {
              domProps: {
                innerHTML: _vm._s(field.fieldOptions.checkedText)
              }
            }) : _vm._e(), _vm._v(" "), _c("at-switch", {
              attrs: {
                size: "large"
              },
              on: {
                change: function ($event) {
                  return _vm.$set(_vm.values, field.key, $event);
                }
              },
              scopedSlots: _vm._u([field.fieldOptions.innerCheckedText ? {
                key: "checkedText",
                fn: function () {
                  return [_c("span", {
                    domProps: {
                      innerHTML: _vm._s(field.fieldOptions.innerCheckedText)
                    }
                  })];
                },
                proxy: true
              } : null, field.fieldOptions.innerUnCheckedText ? {
                key: "unCheckedText",
                fn: function () {
                  return [_c("span", {
                    domProps: {
                      innerHTML: _vm._s(field.fieldOptions.innerUnCheckedText)
                    }
                  })];
                },
                proxy: true
              } : null], null, true),
              model: {
                value: _vm.values[field.key],
                callback: function ($$v) {
                  _vm.$set(_vm.values, field.key, $$v);
                },
                expression: "values[field.key]"
              }
            }), _vm._v(" "), field.fieldOptions.unCheckedText ? _c("span", {
              domProps: {
                innerHTML: _vm._s(field.fieldOptions.unCheckedText)
              }
            }) : _vm._e(), _vm._v(" "), _c("small", [_vm._v(_vm._s(errors[0]))])];
          }
        }], null, true)
      }) : _vm._e()], 1)])])] : _vm._e()];
    }), _vm._v(" "), _c("hr", {
      key: groupKey,
      staticClass: "group-divider"
    })];
  })], 2), _vm._v(" "), _vm._l(this.section.bottomComponents, function (component, index) {
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
      loading: _vm.isLoading,
      disabled: _vm.isLoading
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.$t("control.save")) + "\n            ")])], 2)] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=template&id=4c1d2cda&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=template&id=4c1d2cda&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container"
  }, [_c("h1", {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.$t("navigation.settings")))]), _vm._v(" "), _c("div", {
    staticClass: "at-container settings"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_vm.sections ? _c("at-menu", {
    staticClass: "settings__menu",
    attrs: {
      router: "",
      mode: "vertical"
    }
  }, [_vm._l(_vm.sections, function (section, key) {
    return [section.access ? _c("at-menu-item", {
      key: key,
      attrs: {
        to: {
          name: section.pathName
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t(section.label)) + "\n                        ")]) : _vm._e()];
  })], 2) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "col-19"
  }, [_c("div", {
    staticClass: "settings__content"
  }, [_c("router-view")], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/components/ListBox.vue":
/*!********************************************************!*\
  !*** ./resources/frontend/core/components/ListBox.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListBox_vue_vue_type_template_id_f77d5842_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListBox.vue?vue&type=template&id=f77d5842&scoped=true */ "./resources/frontend/core/components/ListBox.vue?vue&type=template&id=f77d5842&scoped=true");
/* harmony import */ var _ListBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListBox.vue?vue&type=script&lang=js */ "./resources/frontend/core/components/ListBox.vue?vue&type=script&lang=js");
/* harmony import */ var _ListBox_vue_vue_type_style_index_0_id_f77d5842_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true */ "./resources/frontend/core/components/ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListBox_vue_vue_type_template_id_f77d5842_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ListBox_vue_vue_type_template_id_f77d5842_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f77d5842",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/components/ListBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "./resources/frontend/core/views/Settings/DynamicSettings.vue":
/*!********************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/DynamicSettings.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DynamicSettings_vue_vue_type_template_id_5bfbc87c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true */ "./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true");
/* harmony import */ var _DynamicSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicSettings.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=script&lang=js");
/* harmony import */ var _DynamicSettings_vue_vue_type_style_index_0_id_5bfbc87c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true */ "./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DynamicSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DynamicSettings_vue_vue_type_template_id_5bfbc87c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DynamicSettings_vue_vue_type_template_id_5bfbc87c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5bfbc87c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Settings/DynamicSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/views/Settings/Settings.vue":
/*!*************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/Settings.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_4c1d2cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=4c1d2cda&scoped=true */ "./resources/frontend/core/views/Settings/Settings.vue?vue&type=template&id=4c1d2cda&scoped=true");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js */ "./resources/frontend/core/views/Settings/Settings.vue?vue&type=script&lang=js");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_4c1d2cda_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true */ "./resources/frontend/core/views/Settings/Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_4c1d2cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_4c1d2cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4c1d2cda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/views/Settings/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/components/ListBox.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/frontend/core/components/ListBox.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListBox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicSettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/views/Settings/Settings.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/Settings.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/components/ListBox.vue?vue&type=template&id=f77d5842&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/frontend/core/components/ListBox.vue?vue&type=template&id=f77d5842&scoped=true ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_template_id_f77d5842_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_template_id_f77d5842_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_template_id_f77d5842_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListBox.vue?vue&type=template&id=f77d5842&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=template&id=f77d5842&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicSettings_vue_vue_type_template_id_5bfbc87c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicSettings_vue_vue_type_template_id_5bfbc87c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicSettings_vue_vue_type_template_id_5bfbc87c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=template&id=5bfbc87c&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Settings/Settings.vue?vue&type=template&id=4c1d2cda&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/Settings.vue?vue&type=template&id=4c1d2cda&scoped=true ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4c1d2cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4c1d2cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4c1d2cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=4c1d2cda&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=template&id=4c1d2cda&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/components/ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/frontend/core/components/ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ListBox_vue_vue_type_style_index_0_id_f77d5842_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/components/ListBox.vue?vue&type=style&index=0&id=f77d5842&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicSettings_vue_vue_type_style_index_0_id_5bfbc87c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/DynamicSettings.vue?vue&type=style&index=0&id=5bfbc87c&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/views/Settings/Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/frontend/core/views/Settings/Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_4c1d2cda_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/views/Settings/Settings.vue?vue&type=style&index=0&id=4c1d2cda&lang=scss&scoped=true");


/***/ })

}]);