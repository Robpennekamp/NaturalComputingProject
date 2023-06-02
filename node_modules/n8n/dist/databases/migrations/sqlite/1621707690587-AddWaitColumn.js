"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWaitColumn1621707690587 = void 0;
class AddWaitColumn1621707690587 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE IF EXISTS "${tablePrefix}temporary_execution_entity"`);
        await queryRunner.query(`CREATE TABLE "${tablePrefix}temporary_execution_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "data" text NOT NULL, "finished" boolean NOT NULL, "mode" varchar NOT NULL, "retryOf" varchar, "retrySuccessId" varchar, "startedAt" datetime NOT NULL, "stoppedAt" datetime, "workflowData" text NOT NULL, "workflowId" varchar, "waitTill" DATETIME)`);
        await queryRunner.query(`INSERT INTO "${tablePrefix}temporary_execution_entity"("id", "data", "finished", "mode", "retryOf", "retrySuccessId", "startedAt", "stoppedAt", "workflowData", "workflowId") SELECT "id", "data", "finished", "mode", "retryOf", "retrySuccessId", "startedAt", "stoppedAt", "workflowData", "workflowId" FROM "${tablePrefix}execution_entity"`);
        await queryRunner.query(`DROP TABLE "${tablePrefix}execution_entity"`);
        await queryRunner.query(`ALTER TABLE "${tablePrefix}temporary_execution_entity" RENAME TO "${tablePrefix}execution_entity"`);
        await queryRunner.query(`CREATE INDEX "IDX_${tablePrefix}cefb067df2402f6aed0638a6c1" ON "${tablePrefix}execution_entity" ("stoppedAt")`);
        await queryRunner.query(`CREATE INDEX "IDX_${tablePrefix}ca4a71b47f28ac6ea88293a8e2" ON "${tablePrefix}execution_entity" ("waitTill")`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "${tablePrefix}temporary_execution_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "data" text NOT NULL, "finished" boolean NOT NULL, "mode" varchar NOT NULL, "retryOf" varchar, "retrySuccessId" varchar, "startedAt" datetime NOT NULL, "stoppedAt" datetime, "workflowData" text NOT NULL, "workflowId" varchar)`);
        await queryRunner.query(`INSERT INTO "${tablePrefix}temporary_execution_entity"("id", "data", "finished", "mode", "retryOf", "retrySuccessId", "startedAt", "stoppedAt", "workflowData", "workflowId") SELECT "id", "data", "finished", "mode", "retryOf", "retrySuccessId", "startedAt", "stoppedAt", "workflowData", "workflowId" FROM "${tablePrefix}execution_entity"`);
        await queryRunner.query(`DROP TABLE "${tablePrefix}execution_entity"`);
        await queryRunner.query(`ALTER TABLE "${tablePrefix}temporary_execution_entity" RENAME TO "${tablePrefix}execution_entity"`);
        await queryRunner.query(`CREATE INDEX "IDX_${tablePrefix}cefb067df2402f6aed0638a6c1" ON "${tablePrefix}execution_entity" ("stoppedAt")`);
    }
}
exports.AddWaitColumn1621707690587 = AddWaitColumn1621707690587;
//# sourceMappingURL=1621707690587-AddWaitColumn.js.map