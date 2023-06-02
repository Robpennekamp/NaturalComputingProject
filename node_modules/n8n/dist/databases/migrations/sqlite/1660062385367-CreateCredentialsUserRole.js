"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCredentialsUserRole1660062385367 = void 0;
class CreateCredentialsUserRole1660062385367 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			INSERT INTO "${tablePrefix}role" (name, scope)
			VALUES ("user", "credential")
			ON CONFLICT DO NOTHING;
		`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			DELETE FROM "${tablePrefix}role" WHERE name='user' AND scope='credential';
		`);
    }
}
exports.CreateCredentialsUserRole1660062385367 = CreateCredentialsUserRole1660062385367;
//# sourceMappingURL=1660062385367-CreateCredentialsUserRole.js.map