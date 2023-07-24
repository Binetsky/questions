import { HttpMethods } from '@constants';
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
export const apiHandler = async ({
  req, res, collectionName,
}: ApiHandlerParams) => {
  const collection = await getCollection(collectionName);

  if (req.method === HttpMethods.Post) {
    const editedDocument = JSON.parse(req.body);

    await saveDocument({ editedDocument, res, collectionName });
    return true;
  }

  if (req.method === HttpMethods.Delete) {
    const deletedDocument = JSON.parse(req.body);

    await deleteDocument({ deletedDocumentId: deletedDocument.id, res, collectionName });
    return true;
  }

  try {
    const filterField = req?.query?.filterField?.toString() || undefined;
    const surveyId = req?.query?.surveyId?.toString() || undefined;
    const docs = await collection.find(filterField && surveyId ? { [filterField]: surveyId } : {}).toArray();

    return res.status(200).json(docs);
  } catch (err) {
    return res.status(403).end(`что-то пошло не так при запросе документов ${collectionName}`);
  }
};
