import { getNftType } from "../../../src/fetData/fetDataNft";
const data = [
    {
        id: 0,
        name: 'Silver Box',
        image: `https://nft-marketplace-nextjs-roan.vercel.app/images/box0.png`,
        description: 'CORE DOGE NFT 1'
    },
    {
        id: 1,
        name: 'Gold Box',
        image: 'https://nft-marketplace-nextjs-roan.vercel.app/images/box1.png',
        description: 'CORE DOGE NFT 2'
    },
    {
        id: 2,
        name: 'Ruby Box',
        image: 'https://nft-marketplace-nextjs-roan.vercel.app/images/box2.png',
        description: 'CORE DOGE NFT 3'
    }
]



export default async function handler(req, res) {
    const { pid } = req.query;
    const Type = await getNftType(pid);
    console.log(location.hostname)
    // res.send(data[Type]);
}