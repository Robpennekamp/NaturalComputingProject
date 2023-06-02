import type express from 'express';
import type { CredentialRequest } from '../../../types';
export declare const validCredentialType: (req: CredentialRequest.Create, res: express.Response, next: express.NextFunction) => express.Response | void;
export declare const validCredentialsProperties: (req: CredentialRequest.Create, res: express.Response, next: express.NextFunction) => express.Response | void;
