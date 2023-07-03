import { ObjectID } from 'mongodb';
import { EditedDocumentType, SaveDocumentParams } from './types';
import { getCollection } from './getCollection';

/**
 * Хелпер для сохранения документа в mongo
 * @param editedDocument: CommonDocumentStore - редактируемый документ
 * @param res: NextApiResponse - обьект ответа апи
 * @param collectionName: Collections - имя коллекции
 */
export const saveDocument = async ({ editedDocument, res, collectionName }: SaveDocumentParams) => {
  const collection = await getCollection(collectionName);
  const editedDocumentWithoutId = { ...editedDocument };

  delete (editedDocumentWithoutId as EditedDocumentType)._id;

  try {
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectID(editedDocument._id) },
      {
        $set: {
          ...editedDocumentWithoutId,
        },
      },
      { returnDocument: 'after', upsert: true },
    );

    return res.status(200).json(result.value);
  } catch (err) {
    return res.status(403).end('что-то пошло не так при сохранении документа');
  }
};
