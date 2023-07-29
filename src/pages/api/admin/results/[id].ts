import { NextApiRequest, NextApiResponse } from 'next';
import { adminUserKey, Collections } from '@constants';
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
  if (req.headers.userkey !== adminUserKey) {
    res.status(403).json('403');
    return;
  }

  await apiHandler({ req, res, collectionName: Collections.Results });
}
