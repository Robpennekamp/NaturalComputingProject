"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWaitColumnId1626183952959 = void 0;
class AddWaitColumnId1626183952959 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'execution_entity` ADD `waitTill` DATETIME NULL');
        await queryRunner.query('CREATE INDEX `IDX_' +
            tablePrefix +
            'ca4a71b47f28ac6ea88293a8e2` ON `' +
            tablePrefix +
            'execution_entity` (`waitTill`)');
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query('DROP INDEX `IDX_' +
            tablePrefix +
            'ca4a71b47f28ac6ea88293a8e2` ON `' +
            tablePrefix +
            'execution_entity`');
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'execution_entity` DROP COLUMN `waitTill`');
    }
}
exports.AddWaitColumnId1626183952959 = AddWaitColumnId1626183952959;
//# sourceMappingURL=1626183952959-AddWaitColumn.js.map