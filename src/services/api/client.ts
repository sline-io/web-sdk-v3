import config from "config";

type Request = {
  url: string;
  options: RequestInit;
  resolve: (responseData: unknown) => void;
};

const pendingRequests: Request[] = [];

export const apiClient = {
  get: async (path: string): Promise<unknown> =>
    new Promise((resolve, reject) => {
      const url = config.apiBaseUrl + path;
      const options: RequestInit = {
        method: "GET",
        headers: { Authorization: `Bearer ${config.apiToken}` },
      };

      if (!config.apiToken) {
        pendingRequests.push({ url, options, resolve });
        return;
      }

      fetch(url, options)
        .then(async (response) => {
          try {
            const data = await response.json();

            if (String(response.status).startsWith("2")) {
              resolve(data);
            } else {
              reject(data);
            }
          } catch (error) {
            reject(error);
          }
        })
        .catch(reject);
    }),

  post: async (path: string, data: unknown): Promise<unknown> =>
    new Promise((resolve, reject) => {
      const url = config.apiBaseUrl + path;
      const options: RequestInit = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      if (!config.apiToken) {
        pendingRequests.push({ url, options, resolve });
        return;
      }

      fetch(url, options)
        .then(async (response) => {
          try {
            const data = await response.json();

            if (String(response.status).startsWith("2")) {
              resolve(data);
            } else {
              reject(data);
            }
          } catch (error) {
            reject(error);
          }
        })
        .catch(reject);
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
  if (test) {
    config.apiBaseUrl = "https://api.stg.sline.io/v3";
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

  config.apiToken = (await response.json())["access_token"];

  await Promise.all(
    pendingRequests.map(async (request) => {
      request.options.headers = {
        ...request.options.headers,
        Authorization: `Bearer ${config.apiToken}`,
      };

      const response = await fetch(request.url, request.options);
      request.resolve(await response.json());
    })
  );

  pendingRequests.splice(0, pendingRequests.length);
};
