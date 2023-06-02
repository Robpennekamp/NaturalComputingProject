"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkflowsEditorRole1663755770892 = void 0;
class CreateWorkflowsEditorRole1663755770892 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			INSERT INTO "${tablePrefix}role" (name, scope)
			VALUES ("editor", "workflow")
			ON CONFLICT DO NOTHING;
		`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			DELETE FROM "${tablePrefix}role" WHERE name='user' AND scope='workflow';
		`);
    }
}
exports.CreateWorkflowsEditorRole1663755770892 = CreateWorkflowsEditorRole1663755770892;
//# sourceMappingURL=1663755770892-CreateWorkflowsUserRole.js.map