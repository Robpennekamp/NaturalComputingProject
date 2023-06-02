"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRunningExecutionStatus1677237073720 = void 0;
class UpdateRunningExecutionStatus1677237073720 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`UPDATE "${tablePrefix}execution_entity" SET "status" = 'failed' WHERE "status" = 'running' AND "finished"=0 AND "stoppedAt" IS NOT NULL;`);
        await queryRunner.query(`UPDATE "${tablePrefix}execution_entity" SET "status" = 'success' WHERE "status" = 'running' AND "finished"=1 AND "stoppedAt" IS NOT NULL;`);
    }
}
exports.UpdateRunningExecutionStatus1677237073720 = UpdateRunningExecutionStatus1677237073720;
//# sourceMappingURL=1677237073720-UpdateRunningExecutionStatus.js.map