import { HttpMethods } from 'src/constants/api';
import { deleteDocument } from './deleteDocument';
import { saveDocument } from './saveDocument';
import { getCollection } from './getCollection';
import { ApiHandlerParams } from './types';

/**
 * Универсальный обработчик апи
 * @param req: NextApiRequest
 * @param res: NextApiResponse
 * @param collectionName: Collections
 */
export const apiHandler = async ({ req, res, collectionName }: ApiHandlerParams) => {
  const collection = await getCollection(collectionName);

  if (req.method === HttpMethods.Post) {
    const editedDocument = JSON.parse(req.body);

    await saveDocument({ editedDocument, res, collectionName });
    return true;
  }

  if (req.method === HttpMethods.Delete) {
    const deletedDocument = JSON.parse(req.body);

    await deleteDocument({ deletedDocument, res, collectionName });
    return true;
  }

  try {
    const docs = await collection.find({}).toArray();

    return res.status(200).json(docs);
  } catch (err) {
    return res.status(403).end(`что-то пошло не так при запросе документов ${collectionName}`);
  }
};
