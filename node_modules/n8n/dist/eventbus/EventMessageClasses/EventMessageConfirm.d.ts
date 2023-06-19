import { DateTime } from 'luxon';
import type { JsonObject, JsonValue } from 'n8n-workflow';
import { EventMessageTypeNames } from 'n8n-workflow';
export interface EventMessageConfirmSource extends JsonObject {
    id: string;
    name: string;
}
export declare class EventMessageConfirm {
    readonly __type = EventMessageTypeNames.confirm;
    readonly confirm: string;
    readonly source?: EventMessageConfirmSource;
    readonly ts: DateTime;
    constructor(confirm: string, source?: EventMessageConfirmSource);
    serialize(): JsonValue;
}
export declare const isEventMessageConfirm: (candidate: unknown) => candidate is EventMessageConfirm;
