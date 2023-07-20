import { NextApiRequest, NextApiResponse } from 'next';
import { Collections } from '@constants';
import { apiHandler } from '@helpers/apiMethods/apiHandler';

/**
 * Апи для получения доступа к опросам
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await apiHandler({ req, res, collectionName: Collections.Results });
}
