"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCredentialUsageTable1665754637026 = void 0;
class RemoveCredentialUsageTable1665754637026 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE \`${tablePrefix}credential_usage\``);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE TABLE \`${tablePrefix}credential_usage\` (` +
            '`workflowId` int NOT NULL,' +
            '`nodeId` char(200) NOT NULL,' +
            "`credentialId` int NOT NULL DEFAULT '1'," +
            '`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            '`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
            'PRIMARY KEY (`workflowId`, `nodeId`, `credentialId`)' +
            ") ENGINE='InnoDB';");
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}credential_usage\` ADD CONSTRAINT \`FK_${tablePrefix}518e1ece107b859ca6ce9ed2487f7e23\` FOREIGN KEY (\`workflowId\`) REFERENCES \`${tablePrefix}workflow_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}credential_usage\` ADD CONSTRAINT \`FK_${tablePrefix}7ce200a20ade7ae89fa7901da896993f\` FOREIGN KEY (\`credentialId\`) REFERENCES \`${tablePrefix}credentials_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }
}
exports.RemoveCredentialUsageTable1665754637026 = RemoveCredentialUsageTable1665754637026;
//# sourceMappingURL=1665754637026-RemoveCredentialUsageTable.js.map