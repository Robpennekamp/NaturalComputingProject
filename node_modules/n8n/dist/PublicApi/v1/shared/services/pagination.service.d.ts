import type { CursorPagination, OffsetPagination, PaginationCursorDecoded, PaginationOffsetDecoded } from '../../../types';
export declare const decodeCursor: (cursor: string) => PaginationOffsetDecoded | PaginationCursorDecoded;
export declare const encodeNextCursor: (pagination: OffsetPagination | CursorPagination) => string | null;
