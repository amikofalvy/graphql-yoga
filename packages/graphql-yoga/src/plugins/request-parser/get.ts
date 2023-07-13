import { URLSearchParams } from '@whatwg-node/fetch';
import { GraphQLParams } from '../../types.js';
import { handleURLSearchParams } from './utils.js';

export function isGETRequest(request: Request) {
  return request.method === 'GET';
}

export function parseGETRequest(request: Request): GraphQLParams {
  const [, queryString = ''] = request.url.split('?');
  const searchParams = new URLSearchParams(queryString);
  return handleURLSearchParams(searchParams);
}
