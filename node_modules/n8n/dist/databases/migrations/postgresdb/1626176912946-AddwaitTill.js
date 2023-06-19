"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddwaitTill1626176912946 = void 0;
class AddwaitTill1626176912946 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE ${tablePrefix}execution_entity ADD "waitTill" TIMESTAMP`);
        await queryRunner.query(`CREATE INDEX IF NOT EXISTS IDX_${tablePrefix}ca4a71b47f28ac6ea88293a8e2 ON ${tablePrefix}execution_entity ("waitTill")`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP INDEX IDX_${tablePrefix}ca4a71b47f28ac6ea88293a8e2`);
        await queryRunner.query(`ALTER TABLE ${tablePrefix}webhook_entity DROP COLUMN "waitTill"`);
    }
}
exports.AddwaitTill1626176912946 = AddwaitTill1626176912946;
//# sourceMappingURL=1626176912946-AddwaitTill.js.map