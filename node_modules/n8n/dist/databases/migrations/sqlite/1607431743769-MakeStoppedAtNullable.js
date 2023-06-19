"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeStoppedAtNullable1607431743769 = void 0;
class MakeStoppedAtNullable1607431743769 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('PRAGMA writable_schema = 1;');
        await queryRunner.query(`UPDATE SQLITE_MASTER SET SQL = 'CREATE TABLE IF NOT EXISTS "${tablePrefix}execution_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "data" text NOT NULL, "finished" boolean NOT NULL, "mode" varchar NOT NULL, "retryOf" varchar, "retrySuccessId" varchar, "startedAt" datetime NOT NULL, "stoppedAt" datetime, "workflowData" text NOT NULL, "workflowId" varchar)' WHERE NAME = "${tablePrefix}execution_entity";`);
        await queryRunner.query('PRAGMA writable_schema = 0;');
    }
}
exports.MakeStoppedAtNullable1607431743769 = MakeStoppedAtNullable1607431743769;
//# sourceMappingURL=1607431743769-MakeStoppedAtNullable.js.map