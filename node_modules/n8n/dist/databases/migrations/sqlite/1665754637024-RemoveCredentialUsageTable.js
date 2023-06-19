"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCredentialUsageTable1665754637024 = void 0;
class RemoveCredentialUsageTable1665754637024 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE "${tablePrefix}credential_usage"`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE TABLE "${tablePrefix}credential_usage" (` +
            '"workflowId"	integer NOT NULL,' +
            '"nodeId"	varchar NOT NULL,' +
            '"credentialId"	integer NOT NULL,' +
            "\"createdAt\"	datetime(3) NOT NULL DEFAULT 'STRFTIME(''%Y-%m-%d %H:%M:%f'', ''NOW'')'," +
            "\"updatedAt\"	datetime(3) NOT NULL DEFAULT 'STRFTIME(''%Y-%m-%d %H:%M:%f'', ''NOW'')'," +
            'PRIMARY KEY("workflowId", "nodeId", "credentialId"), ' +
            `CONSTRAINT "FK_${tablePrefix}518e1ece107b859ca6ce9ed2487f7e23" FOREIGN KEY ("workflowId") REFERENCES "${tablePrefix}workflow_entity" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, ` +
            `CONSTRAINT "FK_${tablePrefix}7ce200a20ade7ae89fa7901da896993f" FOREIGN KEY ("credentialId") REFERENCES "${tablePrefix}credentials_entity" ("id") ON DELETE CASCADE ON UPDATE NO ACTION ` +
            ');');
    }
}
exports.RemoveCredentialUsageTable1665754637024 = RemoveCredentialUsageTable1665754637024;
//# sourceMappingURL=1665754637024-RemoveCredentialUsageTable.js.map