"use strict";
(self["webpackChunk_cattr_frontend_application"] = self["webpackChunk_cattr_frontend_application"] || []).push([["resources_frontend_core_modules_Projects_views_ProjectMembers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectMembersUser_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectMembersUser.vue */ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue");
/* harmony import */ var _components_Preloader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Preloader.vue */ "./resources/frontend/core/components/Preloader.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProjectMembersSearchableList',
  components: {
    ProjectMembersUser: _ProjectMembersUser_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Preloader: _components_Preloader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    selectedUsers: {
      type: Array,
      default: () => []
    },
    addable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      search: ''
    };
  },
  computed: {
    filteredUsers() {
      if (this.search.length > 0) {
        return this.filterList(this.search, this.value, 'full_name');
      }
      return this.value;
    }
  },
  methods: {
    onRoleChange(roleId, userId) {
      const users = Array.from(this.value);
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex === -1) {
        return;
      }
      users[userIndex]['pivot'] = {
        role_id: roleId
      };
      this.$emit('input', users);
    },
    onClick(user) {
      const users = this.selectedUsers;
      const userIndex = users.findIndex(u => u.id === user.id);
      if (userIndex > -1) {
        users.splice(userIndex, 1);
      } else {
        users.push(user);
      }
      this.$emit('on-select', users);
    },
    filterList(q, list, field) {
      const words = q.split(' ').map(s => s.trim()).filter(s => s.length !== 0);
      const hasTrailingSpace = q.endsWith(' ');
      const escapeRegExp = s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regexString = words.map((word, i) => {
        if (i + 1 === words.length && !hasTrailingSpace) return `(?=.*\\b${escapeRegExp(word)})`;
        return `(?=.*\\b${escapeRegExp(word)}\\b)`;
      }).join('');
      const searchRegex = new RegExp(`${regexString}.+`, 'gi');
      return list.filter(item => searchRegex.test(item[field]));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_UserAvatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/UserAvatar.vue */ "./resources/frontend/core/components/UserAvatar.vue");
/* harmony import */ var _components_RoleSelect_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/RoleSelect.vue */ "./resources/frontend/core/components/RoleSelect.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProjectMembersUser',
  components: {
    UserAvatar: _components_UserAvatar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RoleSelect: _components_RoleSelect_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    user: {
      required: true,
      type: Object
    },
    selected: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    roleId: {
      get() {
        const roleId = this.user?.pivot?.role_id;
        if (roleId === undefined) {
          const defaultRoleId = 2;
          this.$emit('role-change', defaultRoleId);
          return defaultRoleId;
        }
        return roleId;
      },
      set(roleId) {
        this.$emit('role-change', roleId);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_resource_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/resource/project.service */ "./resources/frontend/core/services/resource/project.service.js");
/* harmony import */ var _services_resource_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/resource/user.service */ "./resources/frontend/core/services/resource/user.service.js");
/* harmony import */ var _components_ProjectMembersSearchableList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectMembersSearchableList.vue */ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProjectMembers',
  components: {
    ProjectMembersSearchableList: _components_ProjectMembersSearchableList_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    return {
      project: {},
      projectUsers: [],
      users: [],
      projectService: new _services_resource_project_service__WEBPACK_IMPORTED_MODULE_0__["default"](),
      usersService: new _services_resource_user_service__WEBPACK_IMPORTED_MODULE_1__["default"](),
      selectedUsersToAdd: [],
      selectedUsersToRemove: [],
      saving: false,
      fetching: false
    };
  },
  async mounted() {
    try {
      this.fetching = true;
      const project = await this.projectService.getItem(this.$route.params[this.projectService.getIdParam()]);
      this.project = project.data.data;
      const projectUsers = await this.projectService.getMembers(this.$route.params[this.projectService.getIdParam()]);
      this.projectUsers = projectUsers.data.data.users;
      const params = {
        global_scope: true
      };
      this.users = await this.usersService.getAll({
        params,
        headers: {
          'X-Paginate': 'false'
        }
      });
    } catch (e) {
      //
    } finally {
      this.fetching = false;
    }
  },
  methods: {
    async save() {
      let userRoles = [];
      this.projectUsers.forEach(user => userRoles.push({
        user_id: user.id,
        role_id: user.pivot.role_id
      }));
      const data = {
        project_id: this.project.id,
        user_roles: userRoles
      };
      try {
        this.saving = true;
        await this.projectService.bulkEditMembers(data);
        this.$Notify({
          type: 'success',
          title: this.$t('notification.save.success.title'),
          message: this.$t('notification.save.success.message')
        });
      } catch (e) {
        //
      } finally {
        this.saving = false;
      }
    },
    onUserSelect(selectedUsers) {
      this.selectedUsersToAdd = selectedUsers;
    },
    onProjectUserSelect(selectedUsers) {
      this.selectedUsersToRemove = selectedUsers;
    },
    addUsers() {
      const users = this.users.filter(user => {
        for (const selectedUser of this.selectedUsersToAdd) {
          if (selectedUser.id === user.id) {
            this.selectedUsersToAdd.splice(this.selectedUsersToAdd.findIndex(user => user.id === selectedUser.id), 1);
            return true;
          }
        }
        return false;
      });
      this.projectUsers = [...this.projectUsers, ...users];
    },
    removeUsers() {
      if (this.selectedUsersToRemove.length) {
        this.projectUsers = this.projectUsers.filter(user => {
          for (const selectedUser of this.selectedUsersToRemove) {
            if (selectedUser.id === user.id) {
              this.selectedUsersToRemove.splice(this.selectedUsersToRemove.findIndex(user => user.id === selectedUser.id), 1);
              return false;
            }
          }
          return true;
        });
      }
    }
  },
  computed: {
    addableUsers() {
      const users = Array.from(this.users);
      if (this.projectUsers.length) {
        const addedUsersIds = this.projectUsers.map(u => u[this.usersService.getIdParam()]);
        addedUsersIds.forEach(id => {
          users.splice(users.findIndex(user => {
            return user[this.usersService.getIdParam()] === id;
          }), 1);
        });
      }
      return users;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("at-input", {
    staticClass: "search-input",
    attrs: {
      placeholder: _vm.$t("control.search")
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }, [_c("template", {
    slot: "prepend"
  }, [_c("i", {
    staticClass: "icon icon-search"
  })])], 2), _vm._v(" "), _c("ul", {
    staticClass: "user-list"
  }, [_vm.loading ? _c("preloader", {
    staticClass: "user-list__preloader"
  }) : _vm._l(_vm.filteredUsers, function (user, index) {
    return _c("project-members-user", {
      key: index,
      staticClass: "list-item",
      attrs: {
        user: user,
        selected: _vm.selectedUsers.includes(user),
        addable: _vm.addable
      },
      on: {
        "role-change": function ($event) {
          return _vm.onRoleChange($event, user.id);
        },
        click: function ($event) {
          return _vm.onClick(user);
        }
      }
    });
  })], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "user-item flex flex-middle",
    class: {
      "user-item--selected": _vm.selected
    },
    on: {
      click: function ($event) {
        return _vm.$emit("click", $event);
      }
    }
  }, [_c("user-avatar", {
    staticClass: "user-item__avatar",
    attrs: {
      user: _vm.user
    }
  }), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.user.full_name))]), _vm._v(" "), !_vm.addable ? _c("role-select", {
    staticClass: "user-item__role-select",
    attrs: {
      "exclude-roles": ["admin"]
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
      }
    },
    scopedSlots: _vm._u([{
      key: "role_manager_description",
      fn: function () {
        return [_vm._v("\n            " + _vm._s(_vm.$t("project-roles-description.manager")) + "\n        ")];
      },
      proxy: true
    }, {
      key: "role_auditor_description",
      fn: function () {
        return [_vm._v("\n            " + _vm._s(_vm.$t("project-roles-description.auditor")) + "\n        ")];
      },
      proxy: true
    }, {
      key: "role_user_description",
      fn: function () {
        return [_vm._v("\n            " + _vm._s(_vm.$t("project-roles-description.user")) + "\n        ")];
      },
      proxy: true
    }], null, false, 2322550089),
    model: {
      value: _vm.roleId,
      callback: function ($$v) {
        _vm.roleId = $$v;
      },
      expression: "roleId"
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true ***!
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
    staticClass: "container"
  }, [_c("div", {
    staticClass: "at-container"
  }, [_c("div", {
    staticClass: "crud crud__content"
  }, [_c("div", {
    staticClass: "page-controls"
  }, [_c("h1", {
    staticClass: "page-title crud__title"
  }, [_vm._v(_vm._s(_vm.$t("projects.project_members")))]), _vm._v(" "), _c("div", {
    staticClass: "control-items"
  }, [_c("div", {
    staticClass: "control-item"
  }, [_c("at-button", {
    attrs: {
      size: "large"
    },
    on: {
      click: function ($event) {
        return _vm.$router.go(-1);
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("control.back")))])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "project-members-form"
  }, [_c("div", {
    staticClass: "row flex-middle flex-between"
  }, [_c("div", {
    staticClass: "col-md-11"
  }, [_c("project-members-searchable-list", {
    attrs: {
      addable: "",
      loading: _vm.fetching,
      "selected-users": _vm.selectedUsersToAdd
    },
    on: {
      "on-select": _vm.onUserSelect
    },
    model: {
      value: _vm.addableUsers,
      callback: function ($$v) {
        _vm.addableUsers = $$v;
      },
      expression: "addableUsers"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-1"
  }, [_c("at-button", {
    staticClass: "project-members-form__action-btn",
    attrs: {
      type: "info",
      hollow: "",
      size: "small",
      disabled: !_vm.selectedUsersToAdd.length
    },
    on: {
      click: _vm.addUsers
    }
  }, [_c("i", {
    staticClass: "icon icon-chevrons-right"
  })]), _vm._v(" "), _c("at-button", {
    staticClass: "project-members-form__action-btn",
    attrs: {
      type: "info",
      hollow: "",
      size: "small",
      disabled: !_vm.selectedUsersToRemove.length
    },
    on: {
      click: _vm.removeUsers
    }
  }, [_c("i", {
    staticClass: "icon icon-chevrons-left"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-11"
  }, [_c("project-members-searchable-list", {
    attrs: {
      loading: _vm.fetching,
      "selected-users": _vm.selectedUsersToRemove
    },
    on: {
      "on-select": _vm.onProjectUserSelect
    },
    model: {
      value: _vm.projectUsers,
      callback: function ($$v) {
        _vm.projectUsers = $$v;
      },
      expression: "projectUsers"
    }
  })], 1)]), _vm._v(" "), _c("at-button", {
    attrs: {
      size: "large",
      type: "primary",
      loading: _vm.saving,
      disabled: _vm.saving
    },
    on: {
      click: function ($event) {
        return _vm.save();
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("control.save")))])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectMembersSearchableList_vue_vue_type_template_id_4bb58797_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true */ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true");
/* harmony import */ var _ProjectMembersSearchableList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectMembersSearchableList.vue?vue&type=script&lang=js */ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectMembersSearchableList_vue_vue_type_style_index_0_id_4bb58797_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true */ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectMembersSearchableList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectMembersSearchableList_vue_vue_type_template_id_4bb58797_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectMembersSearchableList_vue_vue_type_template_id_4bb58797_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4bb58797",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue":
/*!************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectMembersUser_vue_vue_type_template_id_6123a43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true */ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true");
/* harmony import */ var _ProjectMembersUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectMembersUser.vue?vue&type=script&lang=js */ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectMembersUser_vue_vue_type_style_index_0_id_6123a43c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true */ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectMembersUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectMembersUser_vue_vue_type_template_id_6123a43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectMembersUser_vue_vue_type_template_id_6123a43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6123a43c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue":
/*!***************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/views/ProjectMembers.vue ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectMembers_vue_vue_type_template_id_dbb4f9da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true */ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true");
/* harmony import */ var _ProjectMembers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectMembers.vue?vue&type=script&lang=js */ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectMembers_vue_vue_type_style_index_0_id_dbb4f9da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true */ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProjectMembers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectMembers_vue_vue_type_template_id_dbb4f9da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectMembers_vue_vue_type_template_id_dbb4f9da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dbb4f9da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/frontend/core/modules/Projects/views/ProjectMembers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersSearchableList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembersSearchableList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersSearchableList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembersUser.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersSearchableList_vue_vue_type_template_id_4bb58797_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersSearchableList_vue_vue_type_template_id_4bb58797_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersSearchableList_vue_vue_type_template_id_4bb58797_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=template&id=4bb58797&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersUser_vue_vue_type_template_id_6123a43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersUser_vue_vue_type_template_id_6123a43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersUser_vue_vue_type_template_id_6123a43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=template&id=6123a43c&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembers_vue_vue_type_template_id_dbb4f9da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembers_vue_vue_type_template_id_dbb4f9da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembers_vue_vue_type_template_id_dbb4f9da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=template&id=dbb4f9da&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersSearchableList_vue_vue_type_style_index_0_id_4bb58797_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersSearchableList.vue?vue&type=style&index=0&id=4bb58797&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembersUser_vue_vue_type_style_index_0_id_6123a43c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/components/ProjectMembersUser.vue?vue&type=style&index=0&id=6123a43c&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectMembers_vue_vue_type_style_index_0_id_dbb4f9da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/frontend/core/modules/Projects/views/ProjectMembers.vue?vue&type=style&index=0&id=dbb4f9da&lang=scss&scoped=true");


/***/ })

}]);