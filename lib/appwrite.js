import { Client, Account,ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.fonjidaniel.aora",
  projectId: "6634cbf30017f8b4f3a4",
  databaseId: "6634cef00004cc1e3814",
  userCollectionId: "6634cf390008025aff72",
  videoCollectionId: "6634cf79000a0732d95b",
  storageId: "6634d1c2001104ff35d3",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
