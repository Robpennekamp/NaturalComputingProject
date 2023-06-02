"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStatusToExecutions1674138566000 = void 0;
class AddStatusToExecutions1674138566000 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}execution_entity\` ADD COLUMN "status" varchar`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}execution_entity\` DROP COLUMN "status"`);
    }
}
exports.AddStatusToExecutions1674138566000 = AddStatusToExecutions1674138566000;
//# sourceMappingURL=1674138566000-AddStatusToExecutions.js.map