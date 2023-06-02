"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexStoppedAt1594825041918 = void 0;
class CreateIndexStoppedAt1594825041918 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE INDEX "IDX_${tablePrefix}cefb067df2402f6aed0638a6c1" ON "${tablePrefix}execution_entity" ("stoppedAt") `);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP INDEX "IDX_${tablePrefix}cefb067df2402f6aed0638a6c1"`);
    }
}
exports.CreateIndexStoppedAt1594825041918 = CreateIndexStoppedAt1594825041918;
//# sourceMappingURL=1594825041918-CreateIndexStoppedAt.js.map