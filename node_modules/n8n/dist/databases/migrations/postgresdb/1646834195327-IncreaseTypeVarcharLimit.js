"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseTypeVarcharLimit1646834195327 = void 0;
class IncreaseTypeVarcharLimit1646834195327 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE ${tablePrefix}credentials_entity ALTER COLUMN "type" TYPE VARCHAR(128)`);
    }
}
exports.IncreaseTypeVarcharLimit1646834195327 = IncreaseTypeVarcharLimit1646834195327;
//# sourceMappingURL=1646834195327-IncreaseTypeVarcharLimit.js.map