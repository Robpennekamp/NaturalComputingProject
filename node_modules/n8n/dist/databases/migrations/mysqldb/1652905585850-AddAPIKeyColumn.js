"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAPIKeyColumn1652905585850 = void 0;
class AddAPIKeyColumn1652905585850 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'user` ADD COLUMN `apiKey` VARCHAR(255)');
        await queryRunner.query('CREATE UNIQUE INDEX `UQ_' +
            tablePrefix +
            'ie0zomxves9w3p774drfrkxtj5` ON `' +
            tablePrefix +
            'user` (`apiKey`)');
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP INDEX \`UQ_${tablePrefix}ie0zomxves9w3p774drfrkxtj5\` ON \`${tablePrefix}user\``);
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'user` DROP COLUMN `apiKey`');
    }
}
exports.AddAPIKeyColumn1652905585850 = AddAPIKeyColumn1652905585850;
//# sourceMappingURL=1652905585850-AddAPIKeyColumn.js.map