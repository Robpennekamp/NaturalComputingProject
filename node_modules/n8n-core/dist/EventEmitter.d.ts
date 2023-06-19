/// <reference types="node" />
import EventEmitter from 'events';
interface EventTypes {
    nodeFetchedData: string;
    workflowExecutionCompleted: string;
}
declare class N8NEventEmitter extends EventEmitter {
    types: EventTypes;
}
export declare const eventEmitter: N8NEventEmitter;
export {};
