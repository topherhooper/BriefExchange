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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var proofer_service_1 = require('./proofer.service');
var ProofersComponent = (function () {
    function ProofersComponent(router, prooferService) {
        this.router = router;
        this.prooferService = prooferService;
    }
    ProofersComponent.prototype.delete = function (proofer) {
        var _this = this;
        this.prooferService
            .delete(proofer.id)
            .then(function () {
            _this.proofers = _this.proofers.filter(function (h) { return h !== proofer; });
            if (_this.selectedProofer === proofer) {
                _this.selectedProofer = null;
            }
        });
    };
    ProofersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.prooferService.create(name)
            .then(function (proofer) {
            _this.proofers.push(proofer);
            _this.selectedProofer = null;
        });
    };
    ProofersComponent.prototype.getProofers = function () {
        var _this = this;
        this.prooferService.getProofers().then(function (proofers) { return _this.proofers = proofers; });
    };
    ProofersComponent.prototype.ngOnInit = function () {
        this.getProofers();
    };
    ProofersComponent.prototype.onSelect = function (proofer) {
        this.selectedProofer = proofer;
    };
    ProofersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedProofer.id]);
    };
    ProofersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-proofers',
            templateUrl: './proofers.component.html',
            styleUrls: ['./proofers.component.css'],
            providers: [proofer_service_1.ProoferService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, proofer_service_1.ProoferService])
    ], ProofersComponent);
    return ProofersComponent;
}());
exports.ProofersComponent = ProofersComponent;
//# sourceMappingURL=proofers.component.js.map