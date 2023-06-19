"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRunningExecutionStatus1677236854063 = void 0;
class UpdateRunningExecutionStatus1677236854063 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`UPDATE "${tablePrefix}execution_entity" SET "status" = 'failed' WHERE "status" = 'running' AND "finished"=false AND "stoppedAt" IS NOT NULL;`);
        await queryRunner.query(`UPDATE "${tablePrefix}execution_entity" SET "status" = 'success' WHERE "status" = 'running' AND "finished"=true AND "stoppedAt" IS NOT NULL;`);
    }
}
exports.UpdateRunningExecutionStatus1677236854063 = UpdateRunningExecutionStatus1677236854063;
//# sourceMappingURL=1677236854063-UpdateRunningExecutionStatus.js.map