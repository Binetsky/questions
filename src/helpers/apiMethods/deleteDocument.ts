import { ObjectID } from 'mongodb';
import { getCollection } from './getCollection';
import { DeleteDocumentParams } from './types';

/**
 * Хелпер для удаления документа в mongo
 * @param deletedDocument: CommonDocumentStore - удаляемый документ
 * @param res: NextApiResponse - обьект ответа апи
 * @param collectionName: Collections - имя коллекции
 */
export const deleteDocument = async ({ deletedDocumentId, res, collectionName }: DeleteDocumentParams) => {
  const collection = await getCollection(collectionName);

  try {
    const result = await collection.findOneAndDelete(
      { _id: new ObjectID(deletedDocumentId) },
    );

    return res.status(200).json(result.value);
  } catch (err) {
    return res.status(403).end(`что-то пошло не так при удалении документа в ${collectionName}`);
  }
};
