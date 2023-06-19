"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertifyCorrectCollation1623936588000 = void 0;
class CertifyCorrectCollation1623936588000 {
    async up({ queryRunner, tablePrefix, dbType, dbName }) {
        if (dbType === 'mariadb') {
            return;
        }
        const checkCollationExistence = (await queryRunner.query("show collation where collation like 'utf8mb4_0900_ai_ci';"));
        let collation = 'utf8mb4_general_ci';
        if (checkCollationExistence.length > 0) {
            collation = 'utf8mb4_0900_ai_ci';
        }
        await queryRunner.query(`ALTER DATABASE \`${dbName}\` CHARACTER SET utf8mb4 COLLATE ${collation};`);
        for (const tableName of [
            'credentials_entity',
            'execution_entity',
            'tag_entity',
            'webhook_entity',
            'workflow_entity',
            'workflows_tags',
        ]) {
            await queryRunner.query(`ALTER TABLE ${tablePrefix}${tableName} CONVERT TO CHARACTER SET utf8mb4 COLLATE ${collation};`);
        }
    }
}
exports.CertifyCorrectCollation1623936588000 = CertifyCorrectCollation1623936588000;
//# sourceMappingURL=1623936588000-CertifyCorrectCollation.js.map