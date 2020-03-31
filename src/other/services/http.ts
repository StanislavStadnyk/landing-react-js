import { DEV_API_URL, PROD_API_URL } from '../constants';
import { isProdHost } from '../utils';

export function http(endpoint: string, params = {}): Promise<any> {
  const url: string = getRequestUrl(endpoint);
  const request: Partial<Request> = getRequestParams(params);

  return fetch(url, request)
    .then(handleResponse)
    .catch((error: Error) => {
      window.console.error(error.message);
      throw error;
    });
}

function getRequestUrl(endpoint: string): string {
  const baseUrl: string = isProdHost() ? PROD_API_URL : DEV_API_URL;
  return `${baseUrl}${endpoint}`;
}

function getRequestParams({
  body,
  headers,
  ...params
}: Partial<Request>): Partial<Request> {
  const _body = body ? JSON.stringify(body) : null;
  const _headers = {
    'Content-Type': 'application/json',
    ...(headers || {})
  };

  return {
    ...params,
    body: _body,
    headers: _headers
  } as any;
}

async function handleResponse(res: Response): Promise<any> {
  const { code, data, errors, message } = await res.json();
  return {
    code,
    data,
    errors,
    message,
    ...res
  };
}
