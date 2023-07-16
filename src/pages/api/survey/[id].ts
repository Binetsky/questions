import { NextApiRequest, NextApiResponse } from 'next';
import { Collections, HttpMethods } from '@constants';
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
  // Todo: тут будет проверка на то что в req.headers был передан корректный token для доступа к апи
  if (false) {
    console.log(req.headers);
    return res.status(403).end('403');
  }

  if (req.method === HttpMethods.Get && req.query.id) {
    const collection = await getCollection(Collections.Surveys);
    const docs = await collection.find({}).toArray();

    const currentDoc = docs.find((documentItem) => documentItem._id.toString() === req.query.id);

    if (currentDoc) {
      return res.status(200).json(currentDoc);
    }

    if (!currentDoc) {
      return res.status(404).json('404');
    }
  }

  return res.status(404).json('404');
}
