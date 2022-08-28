import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const url = `mongodb+srv://mrtnprzk:dG9JNuuiiiw35CzQ@cluster0.coymc.mongodb.net/auth-demo?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(url);

  return client;
}