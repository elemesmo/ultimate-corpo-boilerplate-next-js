// import { type Session } from 'next-auth';
import axios, { type CreateAxiosDefaults } from 'axios';

// export type FailedRequest = {
//   onSuccess: (token?: string) => void;
//   onFailure: (error: AxiosError) => void;
// };

// const MAX_RETRY_COUNT = 3;

class ApiBuilder {
  private static instance: ApiBuilder;

  // private session: Session | null = null;

  // private isRefreshing = false;

  // private failedRequestsQueue: FailedRequest[] = [];

  // private retryCount = 0;

  private constructor() {
    /** TIP: on client, get session to feed 'this.session' */
  }

  public static getInstance(): ApiBuilder {
    if (!ApiBuilder.instance) {
      ApiBuilder.instance = new ApiBuilder();
    }
    return ApiBuilder.instance;
  }

  public mount(config: CreateAxiosDefaults = {}) {
    const api = axios.create({
      ...config,
      withCredentials: true,
      paramsSerializer: { indexes: null },
    });

    /** TIP: refresh-token flow here with axios interceptors */
    // api.interceptors.request.use
    // api.interceptors.response.use

    return api;
  }
}

export const nextApi = ApiBuilder.getInstance().mount({
  baseURL: `${process.env.NEXT_PUBLIC_NEXT_API_URL}`,
});

// export const serviceApi = ApiBuilder.getInstance().mount({
//   baseURL: `${process.env.NEXT_PUBLIC_SERVICE_API_URL}`,
// });
