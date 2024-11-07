export interface IApiResponse<T> {
  error?: Error;
  status: number;
  statusText: string;
  data: T;
  count: number;
}
