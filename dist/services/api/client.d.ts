export declare const apiClient: {
    get: (path: string) => Promise<unknown>;
    post: (path: string, data: unknown) => Promise<unknown>;
};
type ApiClientInitializeOptions = {
    clientId: string;
    clientSecret: string;
    test: boolean;
};
export declare const initializeApiClient: ({ clientId, clientSecret, test, }: ApiClientInitializeOptions) => Promise<void>;
export {};
