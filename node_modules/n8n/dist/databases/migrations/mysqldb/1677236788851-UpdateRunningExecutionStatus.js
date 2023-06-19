"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRunningExecutionStatus1677236788851 = void 0;
class UpdateRunningExecutionStatus1677236788851 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`UPDATE \`${tablePrefix}execution_entity\` SET status='failed' WHERE status = 'running' AND finished=0 AND \`stoppedAt\` IS NOT NULL;`);
        await queryRunner.query(`UPDATE \`${tablePrefix}execution_entity\` SET status='success' WHERE status = 'running' AND finished=1 AND \`stoppedAt\` IS NOT NULL;`);
    }
}
exports.UpdateRunningExecutionStatus1677236788851 = UpdateRunningExecutionStatus1677236788851;
//# sourceMappingURL=1677236788851-UpdateRunningExecutionStatus.js.map