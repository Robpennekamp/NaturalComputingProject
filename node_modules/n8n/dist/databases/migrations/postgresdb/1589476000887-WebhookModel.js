"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookModel1589476000887 = void 0;
class WebhookModel1589476000887 {
    async up({ queryRunner, tablePrefix }) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS ${tablePrefix}webhook_entity ("workflowId" integer NOT NULL, "webhookPath" character varying NOT NULL, "method" character varying NOT NULL, "node" character varying NOT NULL, CONSTRAINT "PK_${tablePrefix}b21ace2e13596ccd87dc9bf4ea6" PRIMARY KEY ("webhookPath", "method"))`);
    }
    async down({ queryRunner, tablePrefix }) {
        await queryRunner.query(`DROP TABLE ${tablePrefix}webhook_entity`);
    }
}
exports.WebhookModel1589476000887 = WebhookModel1589476000887;
//# sourceMappingURL=1589476000887-WebhookModel.js.map