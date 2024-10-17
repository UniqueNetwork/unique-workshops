# Unique Metadata v2

This workshop demonstrates the capabilities of Unique Metadata v2.

### Before we start

- Create a Substrate account
- Get `OPL` (testnet) tokens: https://t.me/unique2faucet_opal_bot
- Create `.env` from `.env-example` and set your mnemonic phrase
- Run `npm install`

---

## Create collection and NFTs

```sh
npm run create
```

Let's give an overview of the provided code examples:

### Initializing the SDK

[`src/utils/getSdk.ts`](./src/utils/getSdk.ts)

```ts
import { UniqueChain } from "@unique-nft/sdk";
import { Sr25519Account } from "@unique-nft/sr25519";

export const getSdk = async () => {
  // 1. Put your mnemonic seed phrase
  // 2. Top-up your balance with OPL tokens: @unique2faucet_opal_bot
  const account = Sr25519Account.fromUri(
    "tenant wreck walnut cycle duck dove vintage fault dress mercy shrug evolve"
  );

  const chain = UniqueChain({
    // public endpoints list: https://docs.unique.network/reference/sdk-endpoints.html
    baseUrl: "https://rest.unique.network/v2/opal",
    account,
  });

  return {chain, account};
}
```

This script utilizes the `@unique-nft/sdk` and `@unique-nft/sr25519` packages.

Using your seed phrase, it initializes an account with `Sr25519Account.fromUri`. Set your seed phrase, and remember to top up your balance. For this example, we use the Opal testnet, and you can receive `OPL` tokens for free using the [Telegram faucet bot](https://t.me/unique2faucet_opal_bot).

```ts
const account = Sr25519Account.fromUri(
  "todo set your own secret seed phrase here."
);
```

Then, it initializes the SDK with the Opal network's public endpoint and the initialized account. By default, all subsequent transactions will be executed on behalf of this account.

```ts
const chain = UniqueChain({
  // Public endpoints list: https://docs.unique.network/reference/sdk-endpoints.html
  baseUrl: "https://rest.unique.network/v2/opal",
  account,
});
```

### Creating a collection

[`src/collection.ts`](./src/collection.ts)

This script uses the SDK initialization and executes a collection creation transaction on behalf of the initialized account.

```ts
const { result } = await chain.collection.create({
  // Basic collection metadata
  name: "Metadata 2",
  description: "Unique Metadata 2.0",
  symbol: "MTD",
  info: {
  cover_image: {url: "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/Qmcg9JLXUfBeHesdcu8ANd5kR7r1V7HeBc4EaKNTQv3YBa"}
  }
});
```

This script sets the basic collection metadata. For more about collection configuration, check the [official documentation](https://docs.unique.network/build/sdk/v2/collections.html).

The `result` will contain all the information about the created collection. The script returns `collectionId` – the unique identifier of the created collection.

```ts
...
return result.collectionId;
```

### Creating NFTs

[`src/nft.ts`](./src/nft.ts)

This script creates NFTs using the collectionId of the previously created collection.

```ts
const { result } = await chain.token.mintNFTs({
  collectionId, // NFTs are part of the collection
  ...
```

We also need to provide metadata for the NFTs. The basic metadata you likely want to set are the token image and attributes.

```ts
const { result } = await chain.token.mintNFTs({
  collectionId,
  tokens: [
    {
      data: {
        image:
          "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/QmNNk6zuBgVmR5pusP3M7X6tubXXHPUkkzsfAfSKdWkptK",
        attributes: [
          { trait_type: "animal", value: "horse" },
          { trait_type: "size", value: "big" },
        ],
        ...
      },
    },
    {
      // The second NFT's metadata
      ...
    }
```

Here is how your NFT will look on [Unique Scan](https://uniquescan.io/opal/tokens/4091/1)

<image src="./images/basic-nft.png"></image>

You may also want to set more advanced metadata, connect audio or a PDF file, or specify customization parameters. In this example, we associate animal sounds with a PDF file.

```ts
media: {
  whitepaper: {
    type: "pdf",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  sound: {
    type: "audio",
    url: "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/QmYCk6D2jApXeY26ifgzkVXrfLPP4KpJe943Xx2urLBL91",
  },
},
```

You can read more about Unique Metadata and available parameters in the [documentation](https://docs.unique.network/reference/schemas)

## Frontend

You can use the [react template](https://github.com/UniqueNetwork/unique-react-template) for a rapid development experience. This template provides account management and basic UI components you may utilize in your application.

Clone the repository and install packages:

```sh
git clone git@github.com:UniqueNetwork/unique-react-template.git
cd ./unique-react-template
yarn
```

Run the project; it will automatically open the page with the template.

```sh
yarn start
```

Connect the account used for minting and navigate to the account page to see your NFTs. Alternatively, you may manually set the URL of the created NFT. For collection ID `4091` and token ID `2`, navigate to the `http://localhost:3002/token/4091/2` page.

<image src="./images/template.png"></image>

Learn how the template works in the [repository documentation](https://github.com/UniqueNetwork/unique-react-template).