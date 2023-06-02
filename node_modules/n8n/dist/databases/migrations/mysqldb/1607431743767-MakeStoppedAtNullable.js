"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeStoppedAtNullable1607431743767 = void 0;
class MakeStoppedAtNullable1607431743767 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'execution_entity` MODIFY `stoppedAt` datetime');
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query('ALTER TABLE `' + tablePrefix + 'execution_entity` MODIFY `stoppedAt` datetime NOT NULL');
    }
}
exports.MakeStoppedAtNullable1607431743767 = MakeStoppedAtNullable1607431743767;
//# sourceMappingURL=1607431743767-MakeStoppedAtNullable.js.map