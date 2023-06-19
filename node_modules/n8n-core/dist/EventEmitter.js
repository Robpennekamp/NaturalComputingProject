"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventEmitter = void 0;
const events_1 = __importDefault(require("events"));
class N8NEventEmitter extends events_1.default {
    constructor() {
        super(...arguments);
        this.types = {
            nodeFetchedData: 'nodeFetchedData',
            workflowExecutionCompleted: 'workflowExecutionCompleted',
        };
    }
}
exports.eventEmitter = new N8NEventEmitter();
//# sourceMappingURL=EventEmitter.js.map