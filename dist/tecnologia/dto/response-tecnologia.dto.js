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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnologiaResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
class TecnologiaResponseDto {
    constructor(partial) {
        Object.assign(this, partial);
    }
    createdAt() {
        return this.created_at;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], TecnologiaResponseDto.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'createdAt' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TecnologiaResponseDto.prototype, "createdAt", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], TecnologiaResponseDto.prototype, "updated_at", void 0);
exports.TecnologiaResponseDto = TecnologiaResponseDto;
//# sourceMappingURL=response-tecnologia.dto.js.map