"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserSettings1652367743993 = void 0;
class AddUserSettings1652367743993 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE "${tablePrefix}user" ADD COLUMN settings json`);
        await queryRunner.query(`ALTER TABLE "${tablePrefix}user" ALTER COLUMN "personalizationAnswers" TYPE json USING to_jsonb("personalizationAnswers")::json;`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`ALTER TABLE "${tablePrefix}user" DROP COLUMN settings`);
    }
}
exports.AddUserSettings1652367743993 = AddUserSettings1652367743993;
//# sourceMappingURL=1652367743993-AddUserSettings.js.map