(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/IncidentReporting/i18n/i18n.properties":
/*!******************************************************************!*\
  !*** ./build.definitions/IncidentReporting/i18n/i18n.properties ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/AppUpdateFailure.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/AppUpdateFailure.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/IncidentReporting/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/AppUpdateSuccess.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/AppUpdateSuccess.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/IncidentReporting/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/IncidentReporting/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/IncidentHistory/IncidentHistory_DeleteConfirmation.js":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/IncidentHistory/IncidentHistory_DeleteConfirmation.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/IncidentReporting/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/IncidentReporting/Actions/IncidentHistory/IncidentHistory_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/IncidentPhotos/IncidentPhotos_DeleteConfirmation.js":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/IncidentPhotos/IncidentPhotos_DeleteConfirmation.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/IncidentReporting/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/OnWillUpdate.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/OnWillUpdate.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/IncidentReporting/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/ResetAppSettingsAndLogout.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/ResetAppSettingsAndLogout.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/IncidentReporting/Actions/Logout.action');
  }
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Rules/SafetyIncidents/SafetyIncidents_DeleteConfirmation.js":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Rules/SafetyIncidents/SafetyIncidents_DeleteConfirmation.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/IncidentReporting/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Styles/Styles.css":
/*!***************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Styles/Styles.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/IncidentReporting/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/IncidentReporting/Styles/Styles.less":
/*!****************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Styles/Styles.less ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/IncidentReporting/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/IncidentReporting/Styles/Styles.light.css":
/*!*********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Styles/Styles.light.css ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/IncidentReporting/Styles/Styles.light.nss":
/*!*********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Styles/Styles.light.nss ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!******************************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.8.0/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Detail.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Detail.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"IncidentHistory Detail","DesignTimeTarget":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"IncidentHistory","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Edit.action","Position":"right","SystemItem":"Edit"},{"OnPress":"/IncidentReporting/Rules/IncidentHistory/IncidentHistory_DeleteConfirmation.js","Position":"right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"","HeadlineText":"{ID}","Subhead":"{createdAt}","Tags":[],"BodyText":"","Footnote":"{modifiedAt}","Description":"{createdBy}","StatusText":"{modifiedBy}","StatusImage":"","SubstatusImage":"","SubstatusText":"{oldStatus_code}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Created On","Value":"{createdAt}"},{"KeyName":"Created By","Value":"{createdBy}"},{"KeyName":"Changed On","Value":"{modifiedAt}"},{"KeyName":"Changed By","Value":"{modifiedBy}"},{"KeyName":"OldCategory","Value":"{oldStatus_code}"},{"KeyName":"NewCategory","Value":"{newStatus_code}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"IncidentHistory_Detail"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Edit.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Edit.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update IncidentHistory Detail","DesignTimeTarget":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"IncidentHistory","QueryOptions":""},"ActionBar":{"Items":[{"Position":"left","SystemItem":"Cancel","OnPress":"/IncidentReporting/Actions/CloseModalPage_Cancel.action"},{"Position":"right","SystemItem":"Save","OnPress":"/IncidentReporting/Actions/IncidentHistory/IncidentHistory_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OldCategory","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"IncidentStatus","Service":"/IncidentReporting/Services/PA49930U00.service"}},"Value":"{oldStatus_code}","_Name":"oldStatus_code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"NewCategory","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"IncidentStatus","Service":"/IncidentReporting/Services/PA49930U00.service"}},"Value":"{newStatus_code}","_Name":"newStatus_code","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"IncidentHistory_Edit"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Detail.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Detail.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"IncidentPhotos Detail","DesignTimeTarget":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"IncidentPhotos","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Edit.action","Position":"right","SystemItem":"Edit"},{"OnPress":"/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DetailPopover.action","Position":"right","Text":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"/IncidentReporting/Services/PA49930U00.service/{@odata.readLink}/image","HeadlineText":"{ID}","Subhead":"{createdAt}","Tags":[],"BodyText":"","Footnote":"{modifiedAt}","Description":"{createdBy}","StatusText":"{modifiedBy}","StatusImage":"","SubstatusImage":"","SubstatusText":"{imageType}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Created On","Value":"{createdAt}"},{"KeyName":"Created By","Value":"{createdBy}"},{"KeyName":"Changed On","Value":"{modifiedAt}"},{"KeyName":"Changed By","Value":"{modifiedBy}"},{"KeyName":"imageType","Value":"{imageType}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"IncidentPhotos_Detail"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Edit.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Edit.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update IncidentPhotos Detail","DesignTimeTarget":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"IncidentPhotos","QueryOptions":""},"ActionBar":{"Items":[{"Position":"left","SystemItem":"Cancel","OnPress":"/IncidentReporting/Actions/CloseModalPage_Cancel.action"},{"Position":"right","SystemItem":"Save","OnPress":"/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"imageType","_Name":"imageType","Value":"{imageType}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"IncidentPhotos_Edit"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/Main.page":
/*!*************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/Main.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Main","Controls":[{"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"Buttons":[{"OnPress":"/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_List.action","TextAlignment":"center","Title":"SafetyIncidents"}],"_Name":"SectionButtonTable0","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","ToolBar":{"Controls":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/IncidentReporting/Actions/LogoutMessage.action"},{"_Name":"UpdateToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Update","Enabled":true,"Clickable":true,"OnPress":"/IncidentReporting/Actions/AppUpdateProgressBanner.action","Visible":"$(PLT,true,true,false)"}]}}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Create.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Create.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"title","Caption":"Title"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"category_code","IsEditable":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Category","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"Category","Service":"/IncidentReporting/Services/PA49930U00.service"}}},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"priority_code","IsEditable":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Priority","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"Priority","Service":"/IncidentReporting/Services/PA49930U00.service"}}},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"incidentStatus_code","IsEditable":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"IncidentStatus","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"IncidentStatus","Service":"/IncidentReporting/Services/PA49930U00.service"}}},{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"description","Caption":"Description"},{"_Type":"Control.Type.FormCell.DatePicker","_Name":"incidentResolutionDate","Caption":"ResolutionDate","Mode":"Date"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"SafetyIncidents_Create","Caption":"Create SafetyIncidents Detail","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"left","IsIconCircular":false,"OnPress":"/IncidentReporting/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"right","IsIconCircular":false,"OnPress":"/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.page":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.page ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/IncidentReporting/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel"},{"OnPress":"/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.action","Position":"right","SystemItem":"Save"}]},"Caption":"Create IncidentHistory","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OldCategory","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"IncidentStatus","Service":"/IncidentReporting/Services/PA49930U00.service"}},"_Name":"oldStatus_code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"NewCategory","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"IncidentStatus","Service":"/IncidentReporting/Services/PA49930U00.service"}},"_Name":"newStatus_code","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SafetyIncidents_CreateIncidentHistory"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.page":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.page ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/IncidentReporting/Actions/CloseModalPage_Cancel.action","Position":"left","SystemItem":"Cancel"},{"OnPress":"/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.action","Position":"right","SystemItem":"Save"}]},"Caption":"Create IncidentPhotos","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"imageType","_Name":"imageType","_Type":"Control.Type.FormCell.SimpleProperty"},{"AttachmentTitle":"image","AttachmentAddTitle":"Browse","AttachmentActionType":["AddPhoto","TakePhoto","SelectFile"],"AllowedFileTypes":["jpg","png","gif"],"_Name":"image","_Type":"Control.Type.FormCell.Attachment"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SafetyIncidents_CreateIncidentPhotos"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Detail.page":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Detail.page ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"SafetyIncidents Detail","DesignTimeTarget":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"SafetyIncidents","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Edit.action","Position":"right","SystemItem":"Edit"},{"OnPress":"/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DetailPopover.action","Position":"right","Text":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"DetailImage":"","HeadlineText":"{title}","Subhead":"{createdAt}","Tags":[],"BodyText":"","Footnote":"{modifiedAt}","Description":"{createdBy}","StatusText":"{modifiedBy}","StatusImage":"","SubstatusImage":"","SubstatusText":"{category_code}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Created On","Value":"{createdAt}"},{"KeyName":"Created By","Value":"{createdBy}"},{"KeyName":"Changed On","Value":"{modifiedAt}"},{"KeyName":"Changed By","Value":"{modifiedBy}"},{"KeyName":"Title","Value":"{title}"},{"KeyName":"Category","Value":"{category_code}"},{"KeyName":"Priority","Value":"{priority_code}"},{"KeyName":"IncidentStatus","Value":"{incidentStatus_code}"},{"KeyName":"Description","Value":"{description}"},{"KeyName":"ResolutionDate","Value":"{incidentResolutionDate}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"incidentPhotos"},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{createdBy}","DetailImage":"/IncidentReporting/Services/PA49930U00.service/{@odata.readLink}/image","DetailImageIsCircular":false,"Icons":[],"StatusImage":"","Title":"{ID}","Footnote":"{modifiedAt}","PreserveIconStackSpacing":false,"StatusText":"{modifiedBy}","Subhead":"{createdAt}","SubstatusText":"{imageType}","OnPress":"/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/incidentPhotos","Service":"/IncidentReporting/Services/PA49930U00.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"incidentHistory"},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{createdBy}","DetailImage":"","DetailImageIsCircular":false,"Icons":[],"StatusImage":"","Title":"{ID}","Footnote":"{modifiedAt}","PreserveIconStackSpacing":false,"StatusText":"{modifiedBy}","Subhead":"{createdAt}","SubstatusText":"{oldStatus_code}","OnPress":"/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/incidentHistory","Service":"/IncidentReporting/Services/PA49930U00.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["IncidentPhotos","IncidentHistory"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SafetyIncidents_Detail"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Edit.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Edit.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update SafetyIncidents Detail","DesignTimeTarget":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"SafetyIncidents","QueryOptions":""},"ActionBar":{"Items":[{"Position":"left","SystemItem":"Cancel","OnPress":"/IncidentReporting/Actions/CloseModalPage_Cancel.action"},{"Position":"right","SystemItem":"Save","OnPress":"/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"Title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Category","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"Category","Service":"/IncidentReporting/Services/PA49930U00.service"}},"Value":"{category_code}","_Name":"category_code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Priority","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"Priority","Service":"/IncidentReporting/Services/PA49930U00.service"}},"Value":"{priority_code}","_Name":"priority_code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"IncidentStatus","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{name}","ReturnValue":"{code}","Target":{"EntitySet":"IncidentStatus","Service":"/IncidentReporting/Services/PA49930U00.service"}},"Value":"{incidentStatus_code}","_Name":"incidentStatus_code","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Date","_Name":"incidentResolutionDate","Value":"{incidentResolutionDate}","Caption":"ResolutionDate","_Type":"Control.Type.FormCell.DatePicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"SafetyIncidents_Edit"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_List.page":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_List.page ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"none","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"SafetyIncidents","QueryOptions":"$top=9&$expand=category,priority,incidentStatus,incidentPhotos&$orderby=createdAt desc","ServerSidePaging":true},"_Name":"SectionObjectTable0","EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{title}","Subhead":"{description}","Footnote":"{category/name}","Description":"{createdBy}","StatusText":"{incidentStatus/name}","SubstatusText":"{modifiedBy}","DetailImageIsCircular":false,"PreserveIconStackSpacing":false,"AccessoryType":"disclosureIndicator","OnPress":"/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Detail.action"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."}}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"SafetyIncidents_List","Caption":"Incident List","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Add","Position":"right","IsIconCircular":false,"OnPress":"/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Create.action"}],"_Name":"ActionBar1"},"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Logout","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/IncidentReporting/Actions/Logout.action"}]}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_List.page","OnLaunch":["/IncidentReporting/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/IncidentReporting/Rules/OnWillUpdate.js","OnDidUpdate":"/IncidentReporting/Actions/Service/InitializeOnline.action","Styles":"/IncidentReporting/Styles/Styles.css","Version":"/IncidentReporting/Globals/AppDefinition_Version.global","Localization":"/IncidentReporting/i18n/i18n.properties","_Name":"IncidentReporting","StyleSheets":{"Styles":{"css":"/IncidentReporting/Styles/Styles.light.css","ios":"/IncidentReporting/Styles/Styles.light.nss","android":"/IncidentReporting/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/IncidentReporting/Styles/Styles.light.nss","android":"/IncidentReporting/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/AppUpdate.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/AppUpdate.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/IncidentReporting/Rules/AppUpdateFailure.js","OnSuccess":"/IncidentReporting/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/AppUpdateFailureMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/AppUpdateFailureMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/AppUpdateProgressBanner.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/AppUpdateProgressBanner.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/IncidentReporting/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/AppUpdateSuccessMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/AppUpdateSuccessMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/CloseModalPage_Cancel.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/CloseModalPage_Cancel.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/CloseModalPage_Complete.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/CloseModalPage_Complete.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/ClosePage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/ClosePage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/CreateEntityFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/CreateEntityFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/CreateEntitySuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/CreateEntitySuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/IncidentReporting/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/DeleteConfirmation.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/DeleteConfirmation.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/DeleteEntityFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/DeleteEntityFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/DeleteEntitySuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/DeleteEntitySuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/IncidentReporting/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentHistory/IncidentHistory_DeleteEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentHistory/IncidentHistory_DeleteEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"IncidentHistory","Service":"/IncidentReporting/Services/PA49930U00.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/IncidentReporting/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/IncidentReporting/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentHistory/IncidentHistory_UpdateEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentHistory/IncidentHistory_UpdateEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"IncidentHistory","Service":"/IncidentReporting/Services/PA49930U00.service","ReadLink":"{@odata.readLink}"},"Properties":{"oldStatus_code":"#Control:oldStatus_code/#SelectedValue","newStatus_code":"#Control:newStatus_code/#SelectedValue"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/IncidentReporting/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/IncidentReporting/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Detail.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Detail.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Detail.page"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Edit.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Edit.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DeleteEntity.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DeleteEntity.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"IncidentPhotos","Service":"/IncidentReporting/Services/PA49930U00.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/IncidentReporting/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/IncidentReporting/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DetailPopover.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DetailPopover.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Open Document","OnPress":"/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_OpenDocument.action"},{"Title":"Delete","OnPress":"/IncidentReporting/Rules/IncidentPhotos/IncidentPhotos_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_OpenDocument.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_OpenDocument.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenDocument","Path":"/IncidentReporting/Services/PA49930U00.service/{@odata.readLink}/image","MimeType":"image/jpeg"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UpdateEntity.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UpdateEntity.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"IncidentPhotos","Service":"/IncidentReporting/Services/PA49930U00.service","ReadLink":"{@odata.readLink}"},"Properties":{"imageType":"#Control:imageType/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/IncidentReporting/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/IncidentReporting/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UploadStream.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UploadStream.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UploadStream","Target":{"Service":"/IncidentReporting/Services/PA49930U00.service","EntitySet":"IncidentPhotos","ReadLink":"{@odata.readLink}"},"Properties":{"image":"#Control:image/#Value"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"uploadstream"},"OnSuccess":"/IncidentReporting/Actions/UploadStreamSuccessMessage.action","OnFailure":"/IncidentReporting/Actions/UploadStreamFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Detail.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Detail.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Detail.page"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Edit.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Edit.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/Logout.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/Logout.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/LogoutMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/LogoutMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/IncidentReporting/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/OnWillUpdate.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/OnWillUpdate.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Create.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Create.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentHistory.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentHistory.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentPhotos.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentPhotos.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Detail.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Detail.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Detail.page"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Edit.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Edit.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_List.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_List.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_List.page"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/IncidentReporting/Actions/CreateEntityFailureMessage.action","OnSuccess":"/IncidentReporting/Actions/CreateEntitySuccessMessage.action","Properties":{"title":"#Control:title/#Value","category_code":"#Control:category_code/#SelectedValue","priority_code":"#Control:priority_code/#SelectedValue","incidentStatus_code":"#Control:incidentStatus_code/#SelectedValue","description":"#Control:description/#Value","incidentResolutionDate":"#Control:incidentResolutionDate/#Value"},"Target":{"EntitySet":"SafetyIncidents","Service":"/IncidentReporting/Services/PA49930U00.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"incidentHistory","Target":{"EntitySet":"SafetyIncidents","ReadLink":"{@odata.readLink}"}},"OnFailure":"/IncidentReporting/Actions/CreateEntityFailureMessage.action","OnSuccess":"/IncidentReporting/Actions/CreateEntitySuccessMessage.action","Properties":{"oldStatus_code":"#Control:oldStatus_code/#SelectedValue","newStatus_code":"#Control:newStatus_code/#SelectedValue"},"Target":{"EntitySet":"IncidentHistory","Service":"/IncidentReporting/Services/PA49930U00.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"incidentPhotos","Target":{"EntitySet":"SafetyIncidents","ReadLink":"{@odata.readLink}"}},"OnFailure":"/IncidentReporting/Actions/CreateEntityFailureMessage.action","OnSuccess":"/IncidentReporting/Actions/CreateEntitySuccessMessage.action","Properties":{"imageType":"#Control:imageType/#Value"},"Target":{"EntitySet":"IncidentPhotos","Service":"/IncidentReporting/Services/PA49930U00.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DeleteEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DeleteEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"SafetyIncidents","Service":"/IncidentReporting/Services/PA49930U00.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/IncidentReporting/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/IncidentReporting/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DetailPopover.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DetailPopover.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add IncidentPhotos","OnPress":"/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentPhotos.action"},{"Title":"Add IncidentHistory","OnPress":"/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentHistory.action"},{"Title":"Delete","OnPress":"/IncidentReporting/Rules/SafetyIncidents/SafetyIncidents_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_UpdateEntity.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_UpdateEntity.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"SafetyIncidents","Service":"/IncidentReporting/Services/PA49930U00.service","ReadLink":"{@odata.readLink}"},"Properties":{"title":"#Control:title/#Value","category_code":"#Control:category_code/#SelectedValue","priority_code":"#Control:priority_code/#SelectedValue","incidentStatus_code":"#Control:incidentStatus_code/#SelectedValue","description":"#Control:description/#Value","incidentResolutionDate":"#Control:incidentResolutionDate/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/IncidentReporting/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/IncidentReporting/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/Service/InitializeOnline.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/Service/InitializeOnline.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/IncidentReporting/Services/PA49930U00.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/IncidentReporting/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/IncidentReporting/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/Service/InitializeOnlineFailureMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/UpdateEntityFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/UpdateEntityFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/UpdateEntitySuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/UpdateEntitySuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/IncidentReporting/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/UploadStreamFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/UploadStreamFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload stream failure - {#ActionResults:uploadstream/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Actions/UploadStreamSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Actions/UploadStreamSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Stream uploaded","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/IncidentReporting/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Globals/AppDefinition_Version.global":
/*!**********************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Globals/AppDefinition_Version.global ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/IncidentReporting/Services/PA49930U00.service":
/*!*************************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Services/PA49930U00.service ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"PA49930U00","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let incidentreporting_actions_appupdate_action = __webpack_require__(/*! ./IncidentReporting/Actions/AppUpdate.action */ "./build.definitions/IncidentReporting/Actions/AppUpdate.action")
let incidentreporting_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/AppUpdateFailureMessage.action */ "./build.definitions/IncidentReporting/Actions/AppUpdateFailureMessage.action")
let incidentreporting_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./IncidentReporting/Actions/AppUpdateProgressBanner.action */ "./build.definitions/IncidentReporting/Actions/AppUpdateProgressBanner.action")
let incidentreporting_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/IncidentReporting/Actions/AppUpdateSuccessMessage.action")
let incidentreporting_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./IncidentReporting/Actions/CloseModalPage_Cancel.action */ "./build.definitions/IncidentReporting/Actions/CloseModalPage_Cancel.action")
let incidentreporting_actions_closemodalpage_complete_action = __webpack_require__(/*! ./IncidentReporting/Actions/CloseModalPage_Complete.action */ "./build.definitions/IncidentReporting/Actions/CloseModalPage_Complete.action")
let incidentreporting_actions_closepage_action = __webpack_require__(/*! ./IncidentReporting/Actions/ClosePage.action */ "./build.definitions/IncidentReporting/Actions/ClosePage.action")
let incidentreporting_actions_createentityfailuremessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/CreateEntityFailureMessage.action */ "./build.definitions/IncidentReporting/Actions/CreateEntityFailureMessage.action")
let incidentreporting_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/IncidentReporting/Actions/CreateEntitySuccessMessage.action")
let incidentreporting_actions_deleteconfirmation_action = __webpack_require__(/*! ./IncidentReporting/Actions/DeleteConfirmation.action */ "./build.definitions/IncidentReporting/Actions/DeleteConfirmation.action")
let incidentreporting_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/IncidentReporting/Actions/DeleteEntityFailureMessage.action")
let incidentreporting_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/IncidentReporting/Actions/DeleteEntitySuccessMessage.action")
let incidentreporting_actions_incidenthistory_incidenthistory_deleteentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentHistory/IncidentHistory_DeleteEntity.action */ "./build.definitions/IncidentReporting/Actions/IncidentHistory/IncidentHistory_DeleteEntity.action")
let incidentreporting_actions_incidenthistory_incidenthistory_updateentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentHistory/IncidentHistory_UpdateEntity.action */ "./build.definitions/IncidentReporting/Actions/IncidentHistory/IncidentHistory_UpdateEntity.action")
let incidentreporting_actions_incidenthistory_navtoincidenthistory_detail_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Detail.action */ "./build.definitions/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Detail.action")
let incidentreporting_actions_incidenthistory_navtoincidenthistory_edit_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Edit.action */ "./build.definitions/IncidentReporting/Actions/IncidentHistory/NavToIncidentHistory_Edit.action")
let incidentreporting_actions_incidentphotos_incidentphotos_deleteentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DeleteEntity.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DeleteEntity.action")
let incidentreporting_actions_incidentphotos_incidentphotos_detailpopover_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DetailPopover.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_DetailPopover.action")
let incidentreporting_actions_incidentphotos_incidentphotos_opendocument_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_OpenDocument.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_OpenDocument.action")
let incidentreporting_actions_incidentphotos_incidentphotos_updateentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UpdateEntity.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UpdateEntity.action")
let incidentreporting_actions_incidentphotos_incidentphotos_uploadstream_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UploadStream.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/IncidentPhotos_UploadStream.action")
let incidentreporting_actions_incidentphotos_navtoincidentphotos_detail_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Detail.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Detail.action")
let incidentreporting_actions_incidentphotos_navtoincidentphotos_edit_action = __webpack_require__(/*! ./IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Edit.action */ "./build.definitions/IncidentReporting/Actions/IncidentPhotos/NavToIncidentPhotos_Edit.action")
let incidentreporting_actions_logout_action = __webpack_require__(/*! ./IncidentReporting/Actions/Logout.action */ "./build.definitions/IncidentReporting/Actions/Logout.action")
let incidentreporting_actions_logoutmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/LogoutMessage.action */ "./build.definitions/IncidentReporting/Actions/LogoutMessage.action")
let incidentreporting_actions_onwillupdate_action = __webpack_require__(/*! ./IncidentReporting/Actions/OnWillUpdate.action */ "./build.definitions/IncidentReporting/Actions/OnWillUpdate.action")
let incidentreporting_actions_safetyincidents_navtosafetyincidents_create_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Create.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Create.action")
let incidentreporting_actions_safetyincidents_navtosafetyincidents_createincidenthistory_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentHistory.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentHistory.action")
let incidentreporting_actions_safetyincidents_navtosafetyincidents_createincidentphotos_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentPhotos.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_CreateIncidentPhotos.action")
let incidentreporting_actions_safetyincidents_navtosafetyincidents_detail_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Detail.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Detail.action")
let incidentreporting_actions_safetyincidents_navtosafetyincidents_edit_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Edit.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_Edit.action")
let incidentreporting_actions_safetyincidents_navtosafetyincidents_list_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_List.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/NavToSafetyIncidents_List.action")
let incidentreporting_actions_safetyincidents_safetyincidents_createentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateEntity.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateEntity.action")
let incidentreporting_actions_safetyincidents_safetyincidents_createincidenthistory_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.action")
let incidentreporting_actions_safetyincidents_safetyincidents_createincidentphotos_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.action")
let incidentreporting_actions_safetyincidents_safetyincidents_deleteentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DeleteEntity.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DeleteEntity.action")
let incidentreporting_actions_safetyincidents_safetyincidents_detailpopover_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DetailPopover.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_DetailPopover.action")
let incidentreporting_actions_safetyincidents_safetyincidents_updateentity_action = __webpack_require__(/*! ./IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_UpdateEntity.action */ "./build.definitions/IncidentReporting/Actions/SafetyIncidents/SafetyIncidents_UpdateEntity.action")
let incidentreporting_actions_service_initializeonline_action = __webpack_require__(/*! ./IncidentReporting/Actions/Service/InitializeOnline.action */ "./build.definitions/IncidentReporting/Actions/Service/InitializeOnline.action")
let incidentreporting_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/IncidentReporting/Actions/Service/InitializeOnlineFailureMessage.action")
let incidentreporting_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/IncidentReporting/Actions/Service/InitializeOnlineSuccessMessage.action")
let incidentreporting_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/IncidentReporting/Actions/UpdateEntityFailureMessage.action")
let incidentreporting_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/IncidentReporting/Actions/UpdateEntitySuccessMessage.action")
let incidentreporting_actions_uploadstreamfailuremessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/UploadStreamFailureMessage.action */ "./build.definitions/IncidentReporting/Actions/UploadStreamFailureMessage.action")
let incidentreporting_actions_uploadstreamsuccessmessage_action = __webpack_require__(/*! ./IncidentReporting/Actions/UploadStreamSuccessMessage.action */ "./build.definitions/IncidentReporting/Actions/UploadStreamSuccessMessage.action")
let incidentreporting_globals_appdefinition_version_global = __webpack_require__(/*! ./IncidentReporting/Globals/AppDefinition_Version.global */ "./build.definitions/IncidentReporting/Globals/AppDefinition_Version.global")
let incidentreporting_i18n_i18n_properties = __webpack_require__(/*! ./IncidentReporting/i18n/i18n.properties */ "./build.definitions/IncidentReporting/i18n/i18n.properties")
let incidentreporting_jsconfig_json = __webpack_require__(/*! ./IncidentReporting/jsconfig.json */ "./build.definitions/IncidentReporting/jsconfig.json")
let incidentreporting_pages_incidenthistory_incidenthistory_detail_page = __webpack_require__(/*! ./IncidentReporting/Pages/IncidentHistory/IncidentHistory_Detail.page */ "./build.definitions/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Detail.page")
let incidentreporting_pages_incidenthistory_incidenthistory_edit_page = __webpack_require__(/*! ./IncidentReporting/Pages/IncidentHistory/IncidentHistory_Edit.page */ "./build.definitions/IncidentReporting/Pages/IncidentHistory/IncidentHistory_Edit.page")
let incidentreporting_pages_incidentphotos_incidentphotos_detail_page = __webpack_require__(/*! ./IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Detail.page */ "./build.definitions/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Detail.page")
let incidentreporting_pages_incidentphotos_incidentphotos_edit_page = __webpack_require__(/*! ./IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Edit.page */ "./build.definitions/IncidentReporting/Pages/IncidentPhotos/IncidentPhotos_Edit.page")
let incidentreporting_pages_main_page = __webpack_require__(/*! ./IncidentReporting/Pages/Main.page */ "./build.definitions/IncidentReporting/Pages/Main.page")
let incidentreporting_pages_safetyincidents_safetyincidents_create_page = __webpack_require__(/*! ./IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Create.page */ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Create.page")
let incidentreporting_pages_safetyincidents_safetyincidents_createincidenthistory_page = __webpack_require__(/*! ./IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.page */ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentHistory.page")
let incidentreporting_pages_safetyincidents_safetyincidents_createincidentphotos_page = __webpack_require__(/*! ./IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.page */ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_CreateIncidentPhotos.page")
let incidentreporting_pages_safetyincidents_safetyincidents_detail_page = __webpack_require__(/*! ./IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Detail.page */ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Detail.page")
let incidentreporting_pages_safetyincidents_safetyincidents_edit_page = __webpack_require__(/*! ./IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Edit.page */ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_Edit.page")
let incidentreporting_pages_safetyincidents_safetyincidents_list_page = __webpack_require__(/*! ./IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_List.page */ "./build.definitions/IncidentReporting/Pages/SafetyIncidents/SafetyIncidents_List.page")
let incidentreporting_rules_appupdatefailure_js = __webpack_require__(/*! ./IncidentReporting/Rules/AppUpdateFailure.js */ "./build.definitions/IncidentReporting/Rules/AppUpdateFailure.js")
let incidentreporting_rules_appupdatesuccess_js = __webpack_require__(/*! ./IncidentReporting/Rules/AppUpdateSuccess.js */ "./build.definitions/IncidentReporting/Rules/AppUpdateSuccess.js")
let incidentreporting_rules_incidenthistory_incidenthistory_deleteconfirmation_js = __webpack_require__(/*! ./IncidentReporting/Rules/IncidentHistory/IncidentHistory_DeleteConfirmation.js */ "./build.definitions/IncidentReporting/Rules/IncidentHistory/IncidentHistory_DeleteConfirmation.js")
let incidentreporting_rules_incidentphotos_incidentphotos_deleteconfirmation_js = __webpack_require__(/*! ./IncidentReporting/Rules/IncidentPhotos/IncidentPhotos_DeleteConfirmation.js */ "./build.definitions/IncidentReporting/Rules/IncidentPhotos/IncidentPhotos_DeleteConfirmation.js")
let incidentreporting_rules_onwillupdate_js = __webpack_require__(/*! ./IncidentReporting/Rules/OnWillUpdate.js */ "./build.definitions/IncidentReporting/Rules/OnWillUpdate.js")
let incidentreporting_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./IncidentReporting/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/IncidentReporting/Rules/ResetAppSettingsAndLogout.js")
let incidentreporting_rules_safetyincidents_safetyincidents_deleteconfirmation_js = __webpack_require__(/*! ./IncidentReporting/Rules/SafetyIncidents/SafetyIncidents_DeleteConfirmation.js */ "./build.definitions/IncidentReporting/Rules/SafetyIncidents/SafetyIncidents_DeleteConfirmation.js")
let incidentreporting_services_pa49930u00_service = __webpack_require__(/*! ./IncidentReporting/Services/PA49930U00.service */ "./build.definitions/IncidentReporting/Services/PA49930U00.service")
let incidentreporting_styles_styles_css = __webpack_require__(/*! ./IncidentReporting/Styles/Styles.css */ "./build.definitions/IncidentReporting/Styles/Styles.css")
let incidentreporting_styles_styles_less = __webpack_require__(/*! ./IncidentReporting/Styles/Styles.less */ "./build.definitions/IncidentReporting/Styles/Styles.less")
let incidentreporting_styles_styles_light_css = __webpack_require__(/*! ./IncidentReporting/Styles/Styles.light.css */ "./build.definitions/IncidentReporting/Styles/Styles.light.css")
let incidentreporting_styles_styles_light_json = __webpack_require__(/*! ./IncidentReporting/Styles/Styles.light.json */ "./build.definitions/IncidentReporting/Styles/Styles.light.json")
let incidentreporting_styles_styles_light_nss = __webpack_require__(/*! ./IncidentReporting/Styles/Styles.light.nss */ "./build.definitions/IncidentReporting/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	incidentreporting_actions_appupdate_action : incidentreporting_actions_appupdate_action,
	incidentreporting_actions_appupdatefailuremessage_action : incidentreporting_actions_appupdatefailuremessage_action,
	incidentreporting_actions_appupdateprogressbanner_action : incidentreporting_actions_appupdateprogressbanner_action,
	incidentreporting_actions_appupdatesuccessmessage_action : incidentreporting_actions_appupdatesuccessmessage_action,
	incidentreporting_actions_closemodalpage_cancel_action : incidentreporting_actions_closemodalpage_cancel_action,
	incidentreporting_actions_closemodalpage_complete_action : incidentreporting_actions_closemodalpage_complete_action,
	incidentreporting_actions_closepage_action : incidentreporting_actions_closepage_action,
	incidentreporting_actions_createentityfailuremessage_action : incidentreporting_actions_createentityfailuremessage_action,
	incidentreporting_actions_createentitysuccessmessage_action : incidentreporting_actions_createentitysuccessmessage_action,
	incidentreporting_actions_deleteconfirmation_action : incidentreporting_actions_deleteconfirmation_action,
	incidentreporting_actions_deleteentityfailuremessage_action : incidentreporting_actions_deleteentityfailuremessage_action,
	incidentreporting_actions_deleteentitysuccessmessage_action : incidentreporting_actions_deleteentitysuccessmessage_action,
	incidentreporting_actions_incidenthistory_incidenthistory_deleteentity_action : incidentreporting_actions_incidenthistory_incidenthistory_deleteentity_action,
	incidentreporting_actions_incidenthistory_incidenthistory_updateentity_action : incidentreporting_actions_incidenthistory_incidenthistory_updateentity_action,
	incidentreporting_actions_incidenthistory_navtoincidenthistory_detail_action : incidentreporting_actions_incidenthistory_navtoincidenthistory_detail_action,
	incidentreporting_actions_incidenthistory_navtoincidenthistory_edit_action : incidentreporting_actions_incidenthistory_navtoincidenthistory_edit_action,
	incidentreporting_actions_incidentphotos_incidentphotos_deleteentity_action : incidentreporting_actions_incidentphotos_incidentphotos_deleteentity_action,
	incidentreporting_actions_incidentphotos_incidentphotos_detailpopover_action : incidentreporting_actions_incidentphotos_incidentphotos_detailpopover_action,
	incidentreporting_actions_incidentphotos_incidentphotos_opendocument_action : incidentreporting_actions_incidentphotos_incidentphotos_opendocument_action,
	incidentreporting_actions_incidentphotos_incidentphotos_updateentity_action : incidentreporting_actions_incidentphotos_incidentphotos_updateentity_action,
	incidentreporting_actions_incidentphotos_incidentphotos_uploadstream_action : incidentreporting_actions_incidentphotos_incidentphotos_uploadstream_action,
	incidentreporting_actions_incidentphotos_navtoincidentphotos_detail_action : incidentreporting_actions_incidentphotos_navtoincidentphotos_detail_action,
	incidentreporting_actions_incidentphotos_navtoincidentphotos_edit_action : incidentreporting_actions_incidentphotos_navtoincidentphotos_edit_action,
	incidentreporting_actions_logout_action : incidentreporting_actions_logout_action,
	incidentreporting_actions_logoutmessage_action : incidentreporting_actions_logoutmessage_action,
	incidentreporting_actions_onwillupdate_action : incidentreporting_actions_onwillupdate_action,
	incidentreporting_actions_safetyincidents_navtosafetyincidents_create_action : incidentreporting_actions_safetyincidents_navtosafetyincidents_create_action,
	incidentreporting_actions_safetyincidents_navtosafetyincidents_createincidenthistory_action : incidentreporting_actions_safetyincidents_navtosafetyincidents_createincidenthistory_action,
	incidentreporting_actions_safetyincidents_navtosafetyincidents_createincidentphotos_action : incidentreporting_actions_safetyincidents_navtosafetyincidents_createincidentphotos_action,
	incidentreporting_actions_safetyincidents_navtosafetyincidents_detail_action : incidentreporting_actions_safetyincidents_navtosafetyincidents_detail_action,
	incidentreporting_actions_safetyincidents_navtosafetyincidents_edit_action : incidentreporting_actions_safetyincidents_navtosafetyincidents_edit_action,
	incidentreporting_actions_safetyincidents_navtosafetyincidents_list_action : incidentreporting_actions_safetyincidents_navtosafetyincidents_list_action,
	incidentreporting_actions_safetyincidents_safetyincidents_createentity_action : incidentreporting_actions_safetyincidents_safetyincidents_createentity_action,
	incidentreporting_actions_safetyincidents_safetyincidents_createincidenthistory_action : incidentreporting_actions_safetyincidents_safetyincidents_createincidenthistory_action,
	incidentreporting_actions_safetyincidents_safetyincidents_createincidentphotos_action : incidentreporting_actions_safetyincidents_safetyincidents_createincidentphotos_action,
	incidentreporting_actions_safetyincidents_safetyincidents_deleteentity_action : incidentreporting_actions_safetyincidents_safetyincidents_deleteentity_action,
	incidentreporting_actions_safetyincidents_safetyincidents_detailpopover_action : incidentreporting_actions_safetyincidents_safetyincidents_detailpopover_action,
	incidentreporting_actions_safetyincidents_safetyincidents_updateentity_action : incidentreporting_actions_safetyincidents_safetyincidents_updateentity_action,
	incidentreporting_actions_service_initializeonline_action : incidentreporting_actions_service_initializeonline_action,
	incidentreporting_actions_service_initializeonlinefailuremessage_action : incidentreporting_actions_service_initializeonlinefailuremessage_action,
	incidentreporting_actions_service_initializeonlinesuccessmessage_action : incidentreporting_actions_service_initializeonlinesuccessmessage_action,
	incidentreporting_actions_updateentityfailuremessage_action : incidentreporting_actions_updateentityfailuremessage_action,
	incidentreporting_actions_updateentitysuccessmessage_action : incidentreporting_actions_updateentitysuccessmessage_action,
	incidentreporting_actions_uploadstreamfailuremessage_action : incidentreporting_actions_uploadstreamfailuremessage_action,
	incidentreporting_actions_uploadstreamsuccessmessage_action : incidentreporting_actions_uploadstreamsuccessmessage_action,
	incidentreporting_globals_appdefinition_version_global : incidentreporting_globals_appdefinition_version_global,
	incidentreporting_i18n_i18n_properties : incidentreporting_i18n_i18n_properties,
	incidentreporting_jsconfig_json : incidentreporting_jsconfig_json,
	incidentreporting_pages_incidenthistory_incidenthistory_detail_page : incidentreporting_pages_incidenthistory_incidenthistory_detail_page,
	incidentreporting_pages_incidenthistory_incidenthistory_edit_page : incidentreporting_pages_incidenthistory_incidenthistory_edit_page,
	incidentreporting_pages_incidentphotos_incidentphotos_detail_page : incidentreporting_pages_incidentphotos_incidentphotos_detail_page,
	incidentreporting_pages_incidentphotos_incidentphotos_edit_page : incidentreporting_pages_incidentphotos_incidentphotos_edit_page,
	incidentreporting_pages_main_page : incidentreporting_pages_main_page,
	incidentreporting_pages_safetyincidents_safetyincidents_create_page : incidentreporting_pages_safetyincidents_safetyincidents_create_page,
	incidentreporting_pages_safetyincidents_safetyincidents_createincidenthistory_page : incidentreporting_pages_safetyincidents_safetyincidents_createincidenthistory_page,
	incidentreporting_pages_safetyincidents_safetyincidents_createincidentphotos_page : incidentreporting_pages_safetyincidents_safetyincidents_createincidentphotos_page,
	incidentreporting_pages_safetyincidents_safetyincidents_detail_page : incidentreporting_pages_safetyincidents_safetyincidents_detail_page,
	incidentreporting_pages_safetyincidents_safetyincidents_edit_page : incidentreporting_pages_safetyincidents_safetyincidents_edit_page,
	incidentreporting_pages_safetyincidents_safetyincidents_list_page : incidentreporting_pages_safetyincidents_safetyincidents_list_page,
	incidentreporting_rules_appupdatefailure_js : incidentreporting_rules_appupdatefailure_js,
	incidentreporting_rules_appupdatesuccess_js : incidentreporting_rules_appupdatesuccess_js,
	incidentreporting_rules_incidenthistory_incidenthistory_deleteconfirmation_js : incidentreporting_rules_incidenthistory_incidenthistory_deleteconfirmation_js,
	incidentreporting_rules_incidentphotos_incidentphotos_deleteconfirmation_js : incidentreporting_rules_incidentphotos_incidentphotos_deleteconfirmation_js,
	incidentreporting_rules_onwillupdate_js : incidentreporting_rules_onwillupdate_js,
	incidentreporting_rules_resetappsettingsandlogout_js : incidentreporting_rules_resetappsettingsandlogout_js,
	incidentreporting_rules_safetyincidents_safetyincidents_deleteconfirmation_js : incidentreporting_rules_safetyincidents_safetyincidents_deleteconfirmation_js,
	incidentreporting_services_pa49930u00_service : incidentreporting_services_pa49930u00_service,
	incidentreporting_styles_styles_css : incidentreporting_styles_styles_css,
	incidentreporting_styles_styles_less : incidentreporting_styles_styles_less,
	incidentreporting_styles_styles_light_css : incidentreporting_styles_styles_light_css,
	incidentreporting_styles_styles_light_json : incidentreporting_styles_styles_light_json,
	incidentreporting_styles_styles_light_nss : incidentreporting_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/IncidentReporting/Styles/Styles.light.json":
/*!**********************************************************************!*\
  !*** ./build.definitions/IncidentReporting/Styles/Styles.light.json ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/IncidentReporting/jsconfig.json":
/*!***********************************************************!*\
  !*** ./build.definitions/IncidentReporting/jsconfig.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"commonjs","target":"es5","experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"lib":["es6","dom"],"baseUrl":"."},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map