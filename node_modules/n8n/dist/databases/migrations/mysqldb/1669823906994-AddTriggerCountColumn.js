"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTriggerCountColumn1669823906994 = void 0;
class AddTriggerCountColumn1669823906994 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE ${tablePrefix}workflow_entity ADD COLUMN triggerCount integer NOT NULL DEFAULT 0`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE ${tablePrefix}workflow_entity DROP COLUMN triggerCount`);
    }
}
exports.AddTriggerCountColumn1669823906994 = AddTriggerCountColumn1669823906994;
//# sourceMappingURL=1669823906994-AddTriggerCountColumn.js.map