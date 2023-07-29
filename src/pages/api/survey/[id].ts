import { NextApiRequest, NextApiResponse } from 'next';
import { adminUserKey, Collections, HttpMethods } from '@constants';
import { getCollection } from '@helpers/apiMethods/getCollection';

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

  if (req.method === HttpMethods.Get && req.query.id) {
    const collection = await getCollection(Collections.Surveys);
    const docs = await collection.find({}).toArray();

    const currentDoc = docs.find((documentItem) => documentItem._id.toString() === req.query.id);

    if (currentDoc) {
      res.status(200).json(currentDoc);
    }

    if (!currentDoc) {
      res.status(404).json('404');
    }
  }

  res.status(404).json('404');
}
