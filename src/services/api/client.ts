let baseUrl = "https://api.prod.sline.io/v3";
let accessToken: string | undefined;

type Request = {
  url: string;
  options: RequestInit;
  resolve: (responseData: unknown) => void;
};

const pendingRequests: Request[] = [];

export const apiClient = {
  get: async (path: string): Promise<unknown> =>
    new Promise(async (resolve, reject) => {
      const url = baseUrl + path;
      const options: RequestInit = {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      };

      if (!accessToken) {
        pendingRequests.push({ url, options, resolve });
        return;
      }

      try {
        const response = await fetch(url, options);
        resolve(await response.json());
      } catch (e) {
        reject(e);
      }
    }),

  post: async (path: string, data: unknown): Promise<unknown> =>
    new Promise(async (resolve, reject) => {
      const url = baseUrl + path;
      const options: RequestInit = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      if (!accessToken) {
        pendingRequests.push({ url, options, resolve });
        return;
      }

      try {
        const response = await fetch(url, options);
        resolve(await response.json());
      } catch (e) {
        reject(e);
      }
    }),
};

type ApiClientInitializeOptions = {
  clientId: string;
  clientSecret: string;
  test: boolean;
};

export const initializeApiClient = async ({
  clientId,
  clientSecret,
  test,
}: ApiClientInitializeOptions) => {
  accessToken = undefined;

  if (test) {
    baseUrl = "https://api.stg.sline.io/v3";
  }

  const response = await fetch(
    "https://judy-sline-dev.eu.auth0.com/oauth/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        audience: "https://judy.authorization.tenant.com",
        grant_type: "client_credentials",
      }),
    }
  );

  if (response.status === 401) throw Error("Invalid credentials.");

  accessToken = (await response.json())["access_token"];

  await Promise.all(
    pendingRequests.map(async (request) => {
      request.options.headers = {
        ...request.options.headers,
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await fetch(request.url, request.options);
      request.resolve(await response.json());
    })
  );
};
