"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkflowsEditorRole1663755770894 = void 0;
class CreateWorkflowsEditorRole1663755770894 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			INSERT IGNORE INTO ${tablePrefix}role (name, scope)
			VALUES ("editor", "workflow")
		`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			DELETE FROM ${tablePrefix}role WHERE name='user' AND scope='workflow';
		`);
    }
}
exports.CreateWorkflowsEditorRole1663755770894 = CreateWorkflowsEditorRole1663755770894;
//# sourceMappingURL=1663755770894-CreateWorkflowsEditorRole.js.map