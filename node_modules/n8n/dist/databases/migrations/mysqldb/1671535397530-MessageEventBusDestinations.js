"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEventBusDestinations1671535397530 = void 0;
class MessageEventBusDestinations1671535397530 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE TABLE ${tablePrefix}event_destinations (` +
            '`id` varchar(36) PRIMARY KEY NOT NULL,' +
            '`destination` text NOT NULL,' +
            '`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, ' +
            '`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP' +
            ") ENGINE='InnoDB';");
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE "${tablePrefix}event_destinations"`);
    }
}
exports.MessageEventBusDestinations1671535397530 = MessageEventBusDestinations1671535397530;
//# sourceMappingURL=1671535397530-MessageEventBusDestinations.js.map