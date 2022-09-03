const mongoDB = () => {
  return "aaa";
};

export default mongoDB;

// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGO_URI) {
//   throw new Error("Add Mongo URI to file.");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri!, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = client?.connect();
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;
