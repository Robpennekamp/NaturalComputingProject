"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeStoppedAtNullable1607431743768 = void 0;
class MakeStoppedAtNullable1607431743768 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE ' + tablePrefix + 'execution_entity ALTER COLUMN "stoppedAt" DROP NOT NULL');
    }
}
exports.MakeStoppedAtNullable1607431743768 = MakeStoppedAtNullable1607431743768;
//# sourceMappingURL=1607431743768-MakeStoppedAtNullable.js.map