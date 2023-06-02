import type { ICredentialDataDecryptedObject } from 'n8n-workflow';
import type clientOAuth2 from 'client-oauth2';
export declare const getClientCredentialsToken: (oAuth2Client: clientOAuth2, credentials: ICredentialDataDecryptedObject) => Promise<clientOAuth2.Token>;
