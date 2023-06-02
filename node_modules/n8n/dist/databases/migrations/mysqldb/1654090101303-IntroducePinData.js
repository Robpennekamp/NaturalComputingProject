"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroducePinData1654090101303 = void 0;
class IntroducePinData1654090101303 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}workflow_entity\` ADD \`pinData\` json`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE \`${tablePrefix}workflow_entity\` DROP COLUMN \`pinData\``);
    }
}
exports.IntroducePinData1654090101303 = IntroducePinData1654090101303;
//# sourceMappingURL=1654090101303-IntroducePinData.js.map