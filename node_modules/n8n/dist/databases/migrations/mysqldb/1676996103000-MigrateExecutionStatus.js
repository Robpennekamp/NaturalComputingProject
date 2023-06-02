"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateExecutionStatus1676996103000 = void 0;
class MigrateExecutionStatus1676996103000 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`UPDATE \`${tablePrefix}execution_entity\` SET status='waiting' WHERE status IS NULL AND \`waitTill\` IS NOT NULL;`);
        await queryRunner.query(`UPDATE \`${tablePrefix}execution_entity\` SET status='failed' WHERE status IS NULL AND finished=0 AND \`stoppedAt\` IS NOT NULL;`);
        await queryRunner.query(`UPDATE \`${tablePrefix}execution_entity\` SET status='success' WHERE status IS NULL AND finished=1 AND \`stoppedAt\` IS NOT NULL;`);
        await queryRunner.query(`UPDATE \`${tablePrefix}execution_entity\` SET status='crashed' WHERE status IS NULL;`);
    }
}
exports.MigrateExecutionStatus1676996103000 = MigrateExecutionStatus1676996103000;
//# sourceMappingURL=1676996103000-MigrateExecutionStatus.js.map