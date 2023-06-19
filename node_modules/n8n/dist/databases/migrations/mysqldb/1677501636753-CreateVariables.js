"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVariables1677501636753 = void 0;
class CreateVariables1677501636753 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			CREATE TABLE ${tablePrefix}variables (
				id int(11) auto_increment NOT NULL PRIMARY KEY,
				\`key\` VARCHAR(50) NOT NULL,
				\`type\` VARCHAR(50) DEFAULT 'string' NOT NULL,
				value VARCHAR(255) NULL,
				UNIQUE (\`key\`)
			)
			ENGINE=InnoDB;
		`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE ${tablePrefix}variables;`);
    }
}
exports.CreateVariables1677501636753 = CreateVariables1677501636753;
//# sourceMappingURL=1677501636753-CreateVariables.js.map