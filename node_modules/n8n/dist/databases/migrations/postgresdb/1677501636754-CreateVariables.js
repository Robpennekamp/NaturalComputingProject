"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVariables1677501636754 = void 0;
class CreateVariables1677501636754 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			CREATE TABLE ${tablePrefix}variables (
				id serial4 NOT NULL PRIMARY KEY,
				"key" varchar(50) NOT NULL,
				"type" varchar(50) NOT NULL DEFAULT 'string',
				value varchar(255) NULL,
				UNIQUE ("key")
			);
		`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE ${tablePrefix}variables;`);
    }
}
exports.CreateVariables1677501636754 = CreateVariables1677501636754;
//# sourceMappingURL=1677501636754-CreateVariables.js.map