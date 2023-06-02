"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWebhookId1611149998770 = void 0;
class AddWebhookId1611149998770 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'webhook_entity` ADD `webhookId` varchar(255) NULL');
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'webhook_entity` ADD `pathLength` int NULL');
        await queryRunner.query('CREATE INDEX `IDX_' +
            tablePrefix +
            '742496f199721a057051acf4c2` ON `' +
            tablePrefix +
            'webhook_entity` (`webhookId`, `method`, `pathLength`)');
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query('DROP INDEX `IDX_' +
            tablePrefix +
            '742496f199721a057051acf4c2` ON `' +
            tablePrefix +
            'webhook_entity`');
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'webhook_entity` DROP COLUMN `pathLength`');
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'webhook_entity` DROP COLUMN `webhookId`');
    }
}
exports.AddWebhookId1611149998770 = AddWebhookId1611149998770;
//# sourceMappingURL=1611149998770-AddWebhookId.js.map