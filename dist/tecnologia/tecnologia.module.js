"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnologiaModule = void 0;
const common_1 = require("@nestjs/common");
const tecnologia_service_1 = require("./tecnologia.service");
const tecnologia_controller_1 = require("./tecnologia.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const core_1 = require("@nestjs/core");
let TecnologiaModule = class TecnologiaModule {
};
TecnologiaModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [tecnologia_controller_1.TecnologiaController],
        providers: [
            tecnologia_service_1.TecnologiaService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_1.ClassSerializerInterceptor,
            },
        ],
    })
], TecnologiaModule);
exports.TecnologiaModule = TecnologiaModule;
//# sourceMappingURL=tecnologia.module.js.map