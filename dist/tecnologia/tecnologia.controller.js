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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnologiaController = void 0;
const common_1 = require("@nestjs/common");
const tecnologia_service_1 = require("./tecnologia.service");
const create_tecnologia_dto_1 = require("./dto/create-tecnologia.dto");
const update_tecnologia_dto_1 = require("./dto/update-tecnologia.dto");
let TecnologiaController = class TecnologiaController {
    constructor(tecnologiaService) {
        this.tecnologiaService = tecnologiaService;
    }
    create(createTecnologiaDto) {
        return this.tecnologiaService.create(createTecnologiaDto);
    }
    findAll(options) {
        return this.tecnologiaService.findAll(+options.take, +options.skip);
    }
    seed() {
        return this.tecnologiaService.seed();
    }
    findOne(id) {
        return this.tecnologiaService.findOne(id);
    }
    update(id, updateTecnologiaDto) {
        return this.tecnologiaService.update(id, updateTecnologiaDto);
    }
    remove(id) {
        return this.tecnologiaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tecnologia_dto_1.CreateTecnologiaDto]),
    __metadata("design:returntype", void 0)
], TecnologiaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('seed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TecnologiaController.prototype, "seed", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TecnologiaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tecnologia_dto_1.UpdateTecnologiaDto]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TecnologiaController.prototype, "remove", null);
TecnologiaController = __decorate([
    (0, common_1.Controller)('tecnologia'),
    __metadata("design:paramtypes", [tecnologia_service_1.TecnologiaService])
], TecnologiaController);
exports.TecnologiaController = TecnologiaController;
//# sourceMappingURL=tecnologia.controller.js.map