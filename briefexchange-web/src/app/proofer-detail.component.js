"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by chooper on 2/16/17.
 */
// Keep the Input import for now, we'll remove it later:
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var proofer_service_1 = require('./proofer.service');
var proofer_1 = require('./proofer');
var ProoferDetailComponent = (function () {
    function ProoferDetailComponent(prooferService, route, location) {
        this.prooferService = prooferService;
        this.route = route;
        this.location = location;
    }
    ProoferDetailComponent.prototype.save = function () {
        var _this = this;
        this.prooferService.update(this.proofer)
            .then(function () { return _this.goBack(); });
    };
    ProoferDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.prooferService.getProofer(+params['id']); })
            .subscribe(function (hero) { return _this.proofer = hero; });
    };
    ProoferDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', proofer_1.Proofer)
    ], ProoferDetailComponent.prototype, "proofer", void 0);
    ProoferDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-proofer-detail',
            templateUrl: './proofer-detail.component.html',
            styleUrls: ['./proofer-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [proofer_service_1.ProoferService, router_1.ActivatedRoute, common_1.Location])
    ], ProoferDetailComponent);
    return ProoferDetailComponent;
}());
exports.ProoferDetailComponent = ProoferDetailComponent;
//# sourceMappingURL=proofer-detail.component.js.map