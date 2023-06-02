"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerCaseUserEmail1648740597343 = void 0;
class LowerCaseUserEmail1648740597343 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`
			UPDATE ${tablePrefix}user
			SET email = LOWER(email);
		`);
    }
}
exports.LowerCaseUserEmail1648740597343 = LowerCaseUserEmail1648740597343;
//# sourceMappingURL=1648740597343-LowerCaseUserEmail.js.map