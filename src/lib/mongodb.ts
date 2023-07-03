// взято из официальной документации по монго https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/
import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;

// eslint-disable-next-line import/no-mutable-exports
let mongoPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Укажите URI вашего MongoDB в файле .env');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global.mongoClientPromise) {
    client = new MongoClient(uri);
    global.mongoClientPromise = client.connect();
  }

  mongoPromise = global.mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  mongoPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongoPromise;
