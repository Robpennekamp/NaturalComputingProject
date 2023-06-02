"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowStatistics1664196174001 = void 0;
class WorkflowStatistics1664196174001 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE TABLE ${tablePrefix}workflow_statistics (
				"count" INTEGER DEFAULT 0,
				"latestEvent" TIMESTAMP,
				"name" VARCHAR(128) NOT NULL,
				"workflowId" INTEGER,
				PRIMARY KEY("workflowId", "name"),
				FOREIGN KEY("workflowId") REFERENCES ${tablePrefix}workflow_entity("id") ON DELETE CASCADE
			)`);
        await queryRunner.query(`ALTER TABLE ${tablePrefix}workflow_entity ADD COLUMN "dataLoaded" BOOLEAN DEFAULT false;`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE ${tablePrefix}workflow_statistics`);
        await queryRunner.query(`ALTER TABLE ${tablePrefix}workflow_entity DROP COLUMN dataLoaded`);
    }
}
exports.WorkflowStatistics1664196174001 = WorkflowStatistics1664196174001;
//# sourceMappingURL=1664196174001-WorkflowStatistics.js.map