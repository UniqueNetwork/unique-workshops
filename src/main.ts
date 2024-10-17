import { createCollection } from "./collection";
import { createNFTs } from "./nft";

const main = async () => {
  const collection = await createCollection();
  console.log(
    `Collection created: https://uniquescan.io/opal/collections/${collection}`
  );
  const nfts = await createNFTs(collection);
  console.log("NFTs created");
};

main().catch((e) => {
  console.log("Something went wrong");
  throw e;
});
