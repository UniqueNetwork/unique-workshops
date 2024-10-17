import { getSdk } from "./utils/getSdk";

export const createNFTs = async (collectionId: number) => {
  const { chain } = await getSdk();

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
        },
      },
      {
        data: {
          image:
            "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/QmcoYfn9Cym1gzBtPWShKnHFSZ3YXFn6jqAqrVsdikYEFC",
          attributes: [
            { trait_type: "animal", value: "cat" },
            { trait_type: "size", value: "small" },
          ],
          media: {
            whitepaper: {
              type: "pdf",
              url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
            },
            sound: {
              type: "audio",
              url: "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/QmczdtkaBbPQDw4CYw4XtSbWEePjLSjwvAYqM4XYavE3MA",
            },
          },
        },
      },
      {
        data: {
          image:
            "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/QmdWEnQCRtcfGY29jkeaP7utQGr6TxH8aJzd7giby1KMyt",
          attributes: [
            { trait_type: "animal", value: "dog" },
            { trait_type: "size", value: "medium" },
          ],
          media: {
            whitepaper: {
              type: "pdf",
              url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
            },
            sound: {
              type: "audio",
              url: "https://orange-impressed-bonobo-853.mypinata.cloud/ipfs/QmRq389hSdYNXis7CnQBaMsAwVZGtwJECxbeC59yo369YG",
            },
          },
        },
      },
    ],
  });

  return result.map((r) => {
    ({ collectionId, tokenId: r.tokenId });
  });
};
