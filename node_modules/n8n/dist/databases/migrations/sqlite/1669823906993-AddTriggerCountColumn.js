"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTriggerCountColumn1669823906993 = void 0;
class AddTriggerCountColumn1669823906993 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}workflow_entity\` ADD COLUMN "triggerCount" integer NOT NULL DEFAULT 0`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}workflow_entity\` DROP COLUMN "triggerCount"`);
    }
}
exports.AddTriggerCountColumn1669823906993 = AddTriggerCountColumn1669823906993;
//# sourceMappingURL=1669823906993-AddTriggerCountColumn.js.map