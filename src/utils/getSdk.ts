import { UniqueChain } from "@unique-nft/sdk";
import { Sr25519Account } from "@unique-nft/sr25519";

export const getSdk = async () => {
  // 1. Put your mnemonic seed phrase
  // 2. Top-up your balance with OPL tokens: @unique2faucet_opal_bot
  const account = Sr25519Account.fromUri(
    "TODO set your own seed phrase"
  );

  const chain = UniqueChain({
    // public endpoints list: https://docs.unique.network/reference/sdk-endpoints.html
    baseUrl: "https://rest.unique.network/v2/opal",
    account,
  });

  return {chain, account};
}