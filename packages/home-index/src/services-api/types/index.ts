export interface IApiResponse<T> {
  errCode: number;
  errMsg: string;
  data: T;
}

/**
 * 使用给定的数据、错误代码和错误消息格式化API响应。
 *
 * @param data - 要包含在API响应中的数据。
 * @param errCode - API响应的错误代码。默认为0。
 * @param errMsg - API响应的错误消息。默认为空字符串。
 * @returns 格式化的API响应对象。
 */
export function formatApiResponse<T>(
  data: T,
  errCode = 0,
  errMsg = "",
): IApiResponse<T> {
  return {
    errCode: errCode,
    errMsg: errMsg,
    data,
  };
}
