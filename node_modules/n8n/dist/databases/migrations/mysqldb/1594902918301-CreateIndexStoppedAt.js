"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexStoppedAt1594902918301 = void 0;
class CreateIndexStoppedAt1594902918301 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('CREATE INDEX `IDX_' +
            tablePrefix +
            'cefb067df2402f6aed0638a6c1` ON `' +
            tablePrefix +
            'execution_entity` (`stoppedAt`)');
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query('DROP INDEX `IDX_' +
            tablePrefix +
            'cefb067df2402f6aed0638a6c1` ON `' +
            tablePrefix +
            'execution_entity`');
    }
}
exports.CreateIndexStoppedAt1594902918301 = CreateIndexStoppedAt1594902918301;
//# sourceMappingURL=1594902918301-CreateIndexStoppedAt.js.map