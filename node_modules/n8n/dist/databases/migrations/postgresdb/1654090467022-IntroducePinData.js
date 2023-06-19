"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntroducePinData1654090467022 = void 0;
class IntroducePinData1654090467022 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE ${tablePrefix}workflow_entity ADD "pinData" json`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE ${tablePrefix}workflow_entity DROP COLUMN "pinData"`);
    }
}
exports.IntroducePinData1654090467022 = IntroducePinData1654090467022;
//# sourceMappingURL=1654090467022-IntroducePinData.js.map