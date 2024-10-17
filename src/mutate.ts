import { getSdk } from "./utils/getSdk";
import {Sr25519Account} from "@unique-nft/sr25519";

const main = async () => {
  /// Validate arguments
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Error: provide args: npm run mutate -- <collectionId> <tokenId>");
    console.error("For example: npm run mutate -- 4433 2");
    return;
  }

  const collectionId = parseInt(args[0]);
  const tokenId = parseInt(args[1]);

  if (isNaN(collectionId) || isNaN(tokenId)) {
    console.error("Error: collectionId and tokenId should be numbers");
    console.error("For example: npm run mutate -- 4433 2");
    return;
  }

  // get the SDK
  const {chain} = await getSdk();

  // generate some random key
  const randomPublicKey = Sr25519Account.fromUri(Sr25519Account.generateMnemonic()).publicKey;

  // set some random image to the token
  console.log("Setting token image. Please wait...");
  await chain.token.updateNft({
    collectionId, tokenId, data: {image: `https://picsum.photos/seed/${randomPublicKey}/300`}
  })

  console.log(`Token image changed: https://uniquescan.io/opal/tokens/${collectionId}/${tokenId}`)
};

main();
