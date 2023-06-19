"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexStoppedAt1594828256133 = void 0;
class CreateIndexStoppedAt1594828256133 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE INDEX IF NOT EXISTS IDX_${tablePrefix}33228da131bb1112247cf52a42 ON ${tablePrefix}execution_entity ("stoppedAt") `);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP INDEX IDX_${tablePrefix}33228da131bb1112247cf52a42`);
    }
}
exports.CreateIndexStoppedAt1594828256133 = CreateIndexStoppedAt1594828256133;
//# sourceMappingURL=1594828256133-CreateIndexStoppedAt.js.map