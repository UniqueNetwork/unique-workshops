import { getSdk } from "./utils/getSdk";

export const createCollection = async () => {
  const { chain } = await getSdk();

  const { result } = await chain.collection.create({
    // Basic collection metadata
    name: "Metadata 2",
    description: "Unique Metadata 2.0",
    symbol: "MTD",
    info: {
      cover_image: {url: "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/Qmcg9JLXUfBeHesdcu8ANd5kR7r1V7HeBc4EaKNTQv3YBa"}
    }
    // You can add more options https://docs.unique.network/build/sdk/v2/collections.html
    // limits: {}
    // permissions: {}
    // ...
  });

  return result.collectionId;
};
