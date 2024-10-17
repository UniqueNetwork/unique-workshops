import { createCollection } from "./collection";
import { createNFTs } from "./nft";

const main = async () => {
  const collection = await createCollection();
  console.log("Creating a collection. Please wait...");
  console.log(
    `Collection created: https://uniquescan.io/opal/collections/${collection}`
  );

  
  console.log("Creating NFTs. Please wait...");
  const nfts = await createNFTs(collection);
  console.log("NFTs created");
};

main().catch((e) => {
  console.log("Something went wrong");
  throw e;
});
