(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n        \n</head>\n<body>\n\n        <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n                <mat-toolbar color=\"primary\" class=\"toolbar\">\n                        <button mat-icon-button class=\"buttom-nav\" (click)=\"snav.toggle()\">\n                                <mat-icon class=\"menu\">menu</mat-icon>\n                        </button>\n                        <img src=\"assets/img/goflet.png\" class=\"logo\"> \n                </mat-toolbar>\n\n                <mat-sidenav-container class=\"example-sidenav-container\"\n                        [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n                        <mat-sidenav  #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                                [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n                                <mat-nav-list>\n                                        <a mat-list-item [routerLink]=\"nav.route\" *ngFor=\"let nav of fillerNav\">\n                                                <mat-icon>{{nav.icon}} </mat-icon> {{nav.name}}\n                                        </a>\n                                </mat-nav-list>\n                        </mat-sidenav>\n                </mat-sidenav-container>\n        </div>\n\n        <div *ngIf=\"!shouldRun\">aaa</div>\n\n<p class=\"prueba\">PRUEBA</p>\n</body>\n\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/cliente/cliente.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/cliente/cliente.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-admin></app-admin>\n<!DOCTYPE html>\n<html>\n\n<head>\n\n</head>\n\n<body>\n\n    <p>PRUEBA</p>\n   \n        <h4> INFORMACION CLIENTE </h4>\n       <!--   <div class=\"starter-template rounded\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mt-5\">\n\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"enviar(signupForm.value)\">\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-8\">\n                                <label for='item.identi'>No Identificación</label>\n                                <input name=\"doc\" formControlName=\"identi\" type=\"number\" required\n                                    [(ngModel)]='item.identi' id=\"identi\" class=\"form-control\" />\n                                <div\n                                    *ngIf=\"signupForm.get('identi').hasError('required') && signupForm.get('identi').touched\">\n                                    Identificación Requerido</div>\n                            </div>\n                         <div class=\"form-group col-md-2\">\n                                <label for=\"item.tipo\">T. Identificación</label>\n                                <select name=\"tipo\" formControlName=\"tipo\" id=\"tipo\" required [(ngModel)]='item.tipo' class=\"form-control\">\n                                    <option selected value=\"1\"> </option>\n                                </select> \n                            </div>\n                            <p class=\"botom\"><button type=\"submit\" class=\"btn btn-primary\"> Buscar</button> </p>\n                        </div>\n\n\n                     <div class=\"form-group\">\n                            <label for='item.nombre'>Nombre(s)</label>\n                            <input name=\"nombre\" formControlName=\"nombre\" type=\"text\" required [(ngModel)]='item.nombre'\n                                id=\"nombre\" class=\"form-control\" />\n                            <div\n                                *ngIf=\"signupForm.get('nombre').hasError('required') && signupForm.get('nombre').touched\">\n                                Nombre Requerido</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for='item.apellido'>Apellido(s)</label>\n                            <input name=\"apellido\" formControlName=\"apellido\" type=\"text\" required\n                                [(ngModel)]='item.apellido' id=\"apellido\" class=\"form-control\" />\n                            <div\n                                *ngIf=\"signupForm.get('apellido').hasError('required') && signupForm.get('apellido').touched\">\n                                Apellido Requerido</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for='item.telefono'>Telefono(s)</label>\n                            <input name=\"telefono\" formControlName=\"telefono\" type=\"number\" required\n                                [(ngModel)]='item.telefono' id=\"telefono\" class=\"form-control\" />\n                            <div\n                                *ngIf=\"signupForm.get('telefono').hasError('required') && signupForm.get('telefono').touched\">\n                                Telefono Requerido</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for='item.direccion'>Dirección</label>\n                            <input name=\"direccion\" formControlName=\"direccion\" type=\"text\" required\n                                [(ngModel)]='item.direccion' id=\"direccion\" class=\"form-control\" />\n                            <div\n                                *ngIf=\"signupForm.get('direccion').hasError('required') && signupForm.get('direccion').touched\">\n                                Dirección Requerido</div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for='item.email'>Email</label>\n                            <input name=\"email\" formControlName=\"email\" type=\"email\" required [(ngModel)]='item.email'\n                                id=\"email\" class=\"form-control\" />\n                            <div *ngIf=\"signupForm.get('email').hasError('email') && signupForm.get('email').touched\">\n                                Email erroneo</div>\n                        </div>\n\n                       <div class=\"form-row\">\n                      <div class=\"form-group col-md-10\">\n                          <label for=\"inputState\">Estado</label>\n                          <select formControlName=\"estado\" id=\"inputState\" class=\"form-control\">\n                              <option selected value=\"0\"> Desactivado </option>\n                              <option selected value=\"1\"> Activado </option>\n                          </select>\n                      </div>\n                      <div class=\"form-group col-md-2\">\n                          <label for=\"inputZip\">Tipo de Usuario</label>\n                          <select formControlName=\"user\" id=\"inputState\" class=\"form-control\">\n                              <option selected value=\"1\"> </option>\n      \n                          </select>\n                      </div>\n                    </div>\n\n                        <div class=\"form-group text-center\">\n                            <button [disabled]=\"signupForm.invalid\" type=\"submit\"\n                                class=\"btn btn-primary\">Guardar</button>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>-->\n    <div class=\"container\">\n\n    \n\n        <table class=\"table table-striped table-bordered\"  *ngIf=\"hayRegistros(); else sin\" >\n            <tr>\n                <td>Nombre</td>\n                \n                <td>Genero</td>\n                <td>Celular</td>\n                <td>Detalles</td>\n            \n            </tr>\n            <tr *ngFor=\"let usuario of usuarios\">\n                <td>{{usuario.nombre}}</td>\n                \n                <td>{{usuario.genero}}</td>\n                <td>{{usuario.celular}}</td>\n\n                <td>\n                    \n                       <button type=\"submit\" class=\"btn btn-info\" value=\"Detalles\" [routerLink]=\"['informacion', usuario.id]\">\n                        Mas informacion\n                    </button>\n                </td>\n            </tr>\n          </table>\n        <ng-template #sin>\n            <p> No hay usuarios registrados</p>\n        </ng-template>\n\n    </div>\n\n\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/cliente/informacion/informacion.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/cliente/informacion/informacion.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<head>\n\n\n</head>\n\n<body>\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark static-top\">\n                \n                  <a class=\"navbar-brand\" href=\"#\">\n                        <img src=\"assets/img/goflet.png\" class=\"logo\" alt=\"\">\n                      </a>\n              </nav>\n\n<div class=\"container\">\n<table class=\"table table-striped table-bordered\">\n<tr>\n    <td>ID</td>\n    <td>Nombre</td>\n    \n    <td>Gmail</td>\n    <td>Contraseña</td>\n</tr>\n<tr>\n<td> {{info.id}}</td>\n<td> {{info.nombre}}</td>\n\n<td> {{info.email}} </td>\n<td> {{info.password}} </td>\n</tr>\n\n</table>\n\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"Status(signupForm.value)\">\n<mat-form-field class=\"sel\">\n    <mat-label>Estatus</mat-label>\n    <select formControlName=\"status\" required [(ngModel)]='add.status' id=\"status\" matNativeControl required>\n      <option value=\"0\">Desactivar</option>\n      <option value=\"1\">Activar</option>\n    </select>\n    \n    <ng-template #temple>\n            <p> Usuario Activado</p>\n        </ng-template>\n</mat-form-field>\n\n    <button  type=\"submit\" class=\"btn btn-info\">Enviar</button>\n\n</form>\n<p *ngIf=\"user(); else temple\" > </p>\n\n\n<form >\n<div class=\"fotos\">\n\n    <img class=\"foto_trasera\" src=\"{{info.foto_trasera}}\">\n\n\n    <img class=\"foto_frontal\" src={{info.foto_frontal}}>\n</div>\n<!--<input type=\"text\" [(ngModel)]='add.id_f' id=\"id_f\"  name=\"id\" value=\"{{info.id_fotocond}}\">-->\n\n<button routerLink='/admin/cliente' type=\"submit\" class=\"btn btn-eliminar\" (click)=\"eliminar(info.id_usuario)\"> Solicitar Foto </button>\n\n</form>\n</div>\n</body>\n\n\n\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/conductor/conductor.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/conductor/conductor.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-admin></app-admin>\n<!DOCTYPE html>\n<html>\n\n<head>\n\n</head>\n\n<body>\n    <p>PRUEBA</p>\n    <div class=\"container\">\n        <h2>Información Cliente</h2>\n        <form>\n            <div class=\"form-row\">\n                <div class=\"form-row col-md-10\">\n                    <label for=\"document\">Documento:</label>\n                    <input type=\"number\" class=\"form-control\" id=\"doc\" placeholder=\"Identificacion\" name=\"documento\">\n                </div>\n                <div class=\"botom\">\n                    <button type=\"submit\" class=\"btn btn-primary\">Buscar</button>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <label for=\"name\">Nombre:</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Nombre\" name=\"name\">\n            </div>\n            <div class=\"form-row\">\n                <label for=\"name\">Apellidos:</label>\n                <input type=\"text\" class=\"form-control\" id=\"apellido\" placeholder=\"Apellidos\" name=\"name\">\n            </div>\n            <div class=\"form-row\">\n                <label for=\"email\">Email:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\">\n            </div>\n            <div class=\"form-row\">\n                <label for=\"tel\">Telefono:</label>\n                <input type=\"number\" class=\"form-control\" id=\"tel\" placeholder=\"Telefono\" name=\"tel\">\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                    <label for=\"pwd\">Password:</label>\n                    <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Password\" name=\"pswd\">\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"inputState\">Estado</label>\n                    <select id=\"inputState\" class=\"form-control\">\n                        <option selected value=\"0\"> Desactivado </option>\n                        <option selected value=\"1\"> Activado </option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"inputZip\">Tipo de Usuario</label>\n                    <select id=\"inputState\" class=\"form-control\">\n                        <option selected value=\"1\"> </option>\n\n                    </select>\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n        </form>\n\n    </div>\n\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n  <title>HOME</title>\n\n</head>\n<body>\n  \n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark static-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/img/goflet.png\" class=\"logo\" alt=\"\">\n          </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"home\">Home\n                  <span class=\"sr-only\">(current)</span>\n                </a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Servicios</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Contacto</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n  <div class=\"container\">\n    <h1 class=\"mt-4\">Lorem ipsum</h1>\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At explicabo suscipit quod aliquid blanditiis rerum consectetur perferendis facilis officiis ipsa inventore quam numquam quo nihil laboriosam fuga ratione, eius tempore.</p>\n  </div>\n\n\n</body>\n\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n    \n<head>\n\t<title>Go flet</title>\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\" integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\" crossorigin=\"anonymous\">\n</head>\n<body>\n  \n\t<div class=\"row\">\n\t\t<div  class=\"col-md-6 mx-auto mt-5 \">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t<img src=\"assets/img/goflet1.png\" class=\"goflet_logo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center form_container\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"Username\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group mb-2\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" name=\"\" class=\"form-control input_pass\" value=\"\" placeholder=\"Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center mt-3 login_container\">\n\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn login_btn\" routerLink=\"/admin\">Login</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_admin_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/admin/cliente/cliente.component */ "./src/app/component/admin/cliente/cliente.component.ts");
/* harmony import */ var _component_admin_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/admin/conductor/conductor.component */ "./src/app/component/admin/conductor/conductor.component.ts");
/* harmony import */ var _component_admin_cliente_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/admin/cliente/informacion/informacion.component */ "./src/app/component/admin/cliente/informacion/informacion.component.ts");









const routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'admin', component: _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'admin/cliente', component: _component_admin_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_6__["ClienteComponent"] },
    { path: 'admin/conductor', component: _component_admin_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_7__["ConductorComponent"] },
    { path: 'admin/cliente/informacion/:id', component: _component_admin_cliente_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_8__["InformacionComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Login';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_admin_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/admin/cliente/cliente.component */ "./src/app/component/admin/cliente/cliente.component.ts");
/* harmony import */ var _component_admin_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/admin/conductor/conductor.component */ "./src/app/component/admin/conductor/conductor.component.ts");
/* harmony import */ var _services_enviar_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/enviar.service */ "./src/app/services/enviar.service.ts");
/* harmony import */ var _component_admin_cliente_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/admin/cliente/informacion/informacion.component */ "./src/app/component/admin/cliente/informacion/informacion.component.ts");
















//COMPONENTES









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            _component_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
            _component_admin_cliente_cliente_component__WEBPACK_IMPORTED_MODULE_20__["ClienteComponent"],
            _component_admin_conductor_conductor_component__WEBPACK_IMPORTED_MODULE_21__["ConductorComponent"],
            _component_admin_cliente_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_23__["InformacionComponent"]
        ],
        exports: [
            _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                {
                    path: 'login',
                    component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
                },
                {
                    path: 'admin',
                    component: _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"]
                },
                {
                    path: '',
                    component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
                },
            ])
        ],
        providers: [_services_enviar_service__WEBPACK_IMPORTED_MODULE_22__["EnviarService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/admin/admin.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/admin/admin.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.logo {\n  height: 60px;\n  margin-left: 4%;\n}\n\n.buttom-nav {\n  border-radius: 500%;\n  background: #ffffff;\n  position: absolute;\n}\n\n.mat-toolbar.mat-primary {\n  background: #0079AE;\n}\n\n.menu {\n  margin-top: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG92YXJnYXMvRGVza3RvcC9BZG1pbi9zcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDREo7O0FETUU7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FDSEo7O0FES0U7RUFDRTswRkFBQTtFQUVBLE9BQUE7QUNGSjs7QURLRTtFQUNFOytEQUFBO0VBRUEsY0FBQTtBQ0ZKOztBRElFO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNETjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsbUJBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgXG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLnRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gICAgei1pbmRleDogMjtcbiAgfVxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgLmxvZ297XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cbiAgXG4gIC5idXR0b20tbmF2IHtcbiAgICBib3JkZXItcmFkaXVzOiA1MDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3OUFFO1xuICB9XG5cbiAgLm1lbnV7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICB9XG4gICIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgei1pbmRleDogMjtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuXG4uYnV0dG9tLW5hdiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzAwNzlBRTtcbn1cblxuLm1lbnUge1xuICBtYXJnaW4tdG9wOiA0MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/admin/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/admin/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");



let AdminComponent = class AdminComponent {
    constructor(changeDetectorRef, media) {
        //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
        this.fillerNav = [
            { name: "Home", route: "/admin", icon: "home" },
            { name: "Conductor", route: "/admin/cliente", icon: "commute" },
        ];
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem`);
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/component/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/component/admin/cliente/cliente.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/admin/cliente/cliente.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  z-index: 100;\n  position: relative;\n}\n\n.botom {\n  margin-top: 32px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG92YXJnYXMvRGVza3RvcC9BZG1pbi9zcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jbGllbnRlL2NsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3RvbXtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3RvbSB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/admin/cliente/cliente.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/admin/cliente/cliente.component.ts ***!
  \**************************************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_enviar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/enviar.service */ "./src/app/services/enviar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");






let ClienteComponent = class ClienteComponent {
    constructor(_builder, servicio, router) {
        this._builder = _builder;
        this.servicio = servicio;
        this.router = router;
        this.usuarios = null;
        this.usuario = {
            id: null,
            nombre: null,
            apellidos: null,
            genero: null,
            celular: null,
        };
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.usuarios);
        this.item = { identi: null };
        this.signupForm = this._builder.group({
            numDoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.mostrar();
    }
    enviar( /*values*/) {
        //console.log(values);
        /*let formData = new FormData();
        formData.append('controle', '1');
        formData.append('identi', this.item.identi);
        formData.append('tipo', this.item.tipo);
        /*formData.append('nombre', this.item.nombre);
        formData.append('apellido', this.item.apellido);
        formData.append('telefono', this.item.telefono);
        formData.append('direccion', this.item.direccion);
        formData.append('email', this.item.email);*/
        /*
        
            this.servicio.enviar(formData)
            .subscribe(
              (data) => {
                if(data === true){
                  console.log("Registro Guardado con Exito");
                  console.log(data)
                  //this.router.navigate(['listado']);
                  //this.router.navigate(['listado'], { queryParams: { page: this.page + 1 } })
                }else{
                  console.log("Error al registrar");
                  console.warn(data);
                }
              },
              (error) => console.log(error)
            );*/
    }
    mostrar() {
        let formData = new FormData();
        formData.append('controle', '2');
        this.servicio.mostrar(formData).subscribe(result => {
            this.usuarios = result;
            //   this.datos.data.map((element, i) => {
            //     console.log(element)
            //     this.usuarios = element
            //   })
        });
    }
    hayRegistros() {
        if (this.usuarios == null) {
            return false;
        }
        else {
            return true;
        }
    }
};
ClienteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_enviar_service__WEBPACK_IMPORTED_MODULE_3__["EnviarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cliente.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/cliente/cliente.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cliente.component.scss */ "./src/app/component/admin/cliente/cliente.component.scss")).default]
    })
], ClienteComponent);



/***/ }),

/***/ "./src/app/component/admin/cliente/informacion/informacion.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/component/admin/cliente/informacion/informacion.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".foto_frontal {\n  width: 35%;\n  height: 35%;\n  margin-left: 36%;\n  margin-top: 8%;\n  position: absolute;\n}\n\n.sel {\n  margin-right: 30%;\n}\n\n.foto_trasera {\n  width: 35%;\n  height: 35%;\n  position: absolute;\n  margin-top: 8%;\n}\n\n.goflet_logo {\n  position: absolute;\n  width: 10%;\n  height: 10%;\n}\n\n.container {\n  margin-top: 3%;\n}\n\n.btn-eliminar {\n  align-content: center;\n  margin-top: 40%;\n  width: 93%;\n  background: #0079AE;\n  color: white;\n}\n\n.btn-eliminar:focus {\n  box-shadow: none;\n  outline: 0px;\n}\n\n.btn-enviar {\n  margin-right: 20%;\n}\n\n.fotos {\n  align-content: center;\n}\n\n.logo {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG92YXJnYXMvRGVza3RvcC9BZG1pbi9zcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jbGllbnRlL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYWRtaW4vY2xpZW50ZS9pbmZvcm1hY2lvbi9pbmZvcm1hY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBRVEsZ0JBQUE7RUFDQSxZQUFBO0FDRlI7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jbGllbnRlL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvdG9fZnJvbnRhbCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDM1JTtcbiAgICBtYXJnaW4tbGVmdDogMzYlO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4uc2VsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuLmZvdG9fdHJhc2VyYSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDM1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogOCU7XG5cbn1cblxuLmdvZmxldF9sb2dve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogMTAlO1xufVxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uYnRuLWVsaW1pbmFye1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3OUFFIDtcbiAgICBjb2xvcjogd2hpdGUgO1xufVxuXG4uYnRuLWVsaW1pbmFyOmZvY3Vze1xuXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgO1xuICAgICAgICBvdXRsaW5lOiAwcHggO1xuICAgIFxufVxuXG4uYnRuLWVudmlhcntcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn1cblxuLmZvdG9ze1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG59IiwiLmZvdG9fZnJvbnRhbCB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogMzUlO1xuICBtYXJnaW4tbGVmdDogMzYlO1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2VsIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG5cbi5mb3RvX3RyYXNlcmEge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDM1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cblxuLmdvZmxldF9sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uYnRuLWVsaW1pbmFyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIHdpZHRoOiA5MyU7XG4gIGJhY2tncm91bmQ6ICMwMDc5QUU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1lbGltaW5hcjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IDBweDtcbn1cblxuLmJ0bi1lbnZpYXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn1cblxuLmZvdG9zIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/admin/cliente/informacion/informacion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/admin/cliente/informacion/informacion.component.ts ***!
  \******************************************************************************/
/*! exports provided: InformacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionComponent", function() { return InformacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_enviar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/enviar.service */ "./src/app/services/enviar.service.ts");





let InformacionComponent = class InformacionComponent {
    constructor(_route, _builder, servicio, router) {
        this._route = _route;
        this._builder = _builder;
        this.servicio = servicio;
        this.router = router;
        //console.log(this._route.snapshot.paramMap.get('id'))
        this.add = { status: null };
        this.signupForm = this._builder.group({
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
        let id = +this._route.snapshot.paramMap.get('id');
        this.item = `${id}`;
        this.Show();
    }
    Show( /*values*/) {
        //console.log(values);
        let formData = new FormData();
        formData.append('controle', '3');
        formData.append('item', this.item);
        this.servicio.Show(formData).subscribe(result => {
            this.info = result;
            //console.log(result);
            //   this.datos.data.map((element, i) => {
            //     console.log(element)
            //     this.usuarios = element
            //   })
        });
    }
    Status() {
        let formData = new FormData();
        formData.append('controle', '4');
        formData.append('status', this.add.status);
        formData.append('item', this.item);
        this.servicio.Status(formData).subscribe(result => {
            //console.log(this.add.status);
        });
    }
    /*Foto() {
      let formData = new FormData();
      formData.append('controle', '5');
      formData.append('id_f', this.add.id_f);
      this.servicio.Foto(formData).subscribe(
        result => {
          console.log(this.add.id_f)
        }
      )
  
  
    }*/
    eliminar(id) {
        let formData = new FormData();
        formData.append('controle', '5');
        formData.append('id', id);
        this.servicio.eliminar(formData).subscribe((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        });
    }
    user() {
        if (this.add.status == 1) {
            return false;
        }
        else {
            return true;
        }
    }
};
InformacionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_enviar_service__WEBPACK_IMPORTED_MODULE_4__["EnviarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InformacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informacion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./informacion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/cliente/informacion/informacion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./informacion.component.scss */ "./src/app/component/admin/cliente/informacion/informacion.component.scss")).default]
    })
], InformacionComponent);



/***/ }),

/***/ "./src/app/component/admin/conductor/conductor.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/admin/conductor/conductor.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  z-index: 100;\n  position: relative;\n}\n\n.botom {\n  margin-top: 32px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG92YXJnYXMvRGVza3RvcC9BZG1pbi9zcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9jb25kdWN0b3IvY29uZHVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYWRtaW4vY29uZHVjdG9yL2NvbmR1Y3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkbWluL2NvbmR1Y3Rvci9jb25kdWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3RvbXtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSIsIi5jb250YWluZXIge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvdG9tIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/admin/conductor/conductor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/admin/conductor/conductor.component.ts ***!
  \******************************************************************/
/*! exports provided: ConductorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConductorComponent", function() { return ConductorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConductorComponent = class ConductorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConductorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conductor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conductor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/conductor/conductor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conductor.component.scss */ "./src/app/component/admin/conductor/conductor.component.scss")).default]
    })
], ConductorComponent);



/***/ }),

/***/ "./src/app/component/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\n.logo {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG92YXJnYXMvRGVza3RvcC9BZG1pbi9zcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBSUksWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5cblxuLmxvZ297XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG59IiwiYm9keSxcbi5sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/component/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  background: #ffffff;\n}\n\n.logo {\n  position: absolute;\n  height: 170px;\n  width: 170px;\n  top: -75px;\n  border-radius: 50%;\n  background: #ffffff;\n  padding: 10px;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.goflet_logo {\n  height: 150px;\n  width: 150px;\n  border-radius: 15%;\n  border: 2px solid black;\n  margin-top: 10px;\n}\n\n.form_container {\n  margin-top: 200px;\n}\n\n.login_btn {\n  width: 100%;\n  background: #0079AE;\n  color: white;\n}\n\n.login_btn:focus {\n  box-shadow: none;\n  outline: 0px;\n}\n\n.input-group-text {\n  background: #0079AE;\n  color: white;\n  border: 0;\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n\n.input_user,\n.input_pass:focus {\n  box-shadow: none;\n  outline: 0px;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #0079AE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG92YXJnYXMvRGVza3RvcC9BZG1pbi9zcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtBQ0dKOztBRERBOztFQUVJLGdCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5odG1sIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiA7XG59XG5cblxuLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICB0b3A6IC03NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgXG59XG4uZ29mbGV0X2xvZ28ge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcbn1cbi5mb3JtX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgXG59XG4ubG9naW5fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3OUFFIDtcbiAgICBjb2xvcjogd2hpdGUgO1xufVxuLmxvZ2luX2J0bjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSA7XG4gICAgb3V0bGluZTogMHB4IDtcbn1cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3OUFFIDtcbiAgICBjb2xvcjogd2hpdGUgO1xuICAgIGJvcmRlcjogMCA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSA7XG59XG4uaW5wdXRfdXNlcixcbi5pbnB1dF9wYXNzOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lIDtcbiAgICBvdXRsaW5lOiAwcHggO1xufVxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzlBRSA7XG59XG4iLCJib2R5LFxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDE3MHB4O1xuICB0b3A6IC03NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmdvZmxldF9sb2dvIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZm9ybV9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLmxvZ2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUFFO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbl9idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiAwcHg7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYmFja2dyb3VuZDogIzAwNzlBRTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW07XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3M6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiAwcHg7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc5QUU7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
    loginUser(event) {
        event.preventDefault();
        console.log(event);
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/enviar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/enviar.service.ts ***!
  \********************************************/
/*! exports provided: EnviarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviarService", function() { return EnviarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EnviarService = class EnviarService {
    constructor(http) {
        this.http = http;
        this.URL = "http://www.goflet.com.co/api_Goflet/services/";
    }
    /*enviar(item: Object) {
      return this.http.post(`${this.URL}cliente.php`, item);
    }*/
    mostrar(item) {
        return this.http.post(`${this.URL}cliente.php`, item);
    }
    Show(info) {
        return this.http.post(`${this.URL}cliente.php`, info);
    }
    Status(add) {
        return this.http.post(`${this.URL}cliente.php`, add);
    }
    /*Foto(add: Object) {
      return this.http.post(`${this.URL}cliente.php`, add);
  
    } */
    eliminar(add) {
        return this.http.post(`${this.URL}cliente.php`, add);
    }
};
EnviarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EnviarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EnviarService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/camilovargas/Desktop/Admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map