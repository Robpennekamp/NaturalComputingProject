"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeDataSize1615306975123 = void 0;
class ChangeDataSize1615306975123 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'execution_entity` MODIFY COLUMN `data` MEDIUMTEXT NOT NULL');
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'execution_entity` MODIFY COLUMN `data` TEXT NOT NULL');
    }
}
exports.ChangeDataSize1615306975123 = ChangeDataSize1615306975123;
//# sourceMappingURL=1615306975123-ChangeDataSize.js.map