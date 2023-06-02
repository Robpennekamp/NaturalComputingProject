"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVariables1677501636752 = void 0;
class CreateVariables1677501636752 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			CREATE TABLE ${tablePrefix}variables (
				id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
				"key" TEXT NOT NULL,
				"type" TEXT NOT NULL DEFAULT ('string'),
				value TEXT,
				UNIQUE("key")
			);
		`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE ${tablePrefix}variables;`);
    }
}
exports.CreateVariables1677501636752 = CreateVariables1677501636752;
//# sourceMappingURL=1677501636752-CreateVariables.js.map