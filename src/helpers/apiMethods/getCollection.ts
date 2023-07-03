import mongoPromise from 'src/lib/mongodb';

/**
 * Хелпер для полученния коллекции по имени
 * @param collectionName:string
 * @returns Collection<Document>
 */
export const getCollection = async (collectionName: string) => {
  const client = await mongoPromise;
  const dbName = process.env.MONGODB_DB_NAME || '';
  const db = client.db(dbName);

  return db.collection(collectionName);
};
