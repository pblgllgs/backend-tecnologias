"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigutarion = void 0;
const EnvConfigutarion = () => ({
    environment: process.env.NODE_ENV || 'dev',
    database_url: process.env.POSTGRESDB,
    port: process.env.PORT || 3002,
});
exports.EnvConfigutarion = EnvConfigutarion;
//# sourceMappingURL=app.config.js.map