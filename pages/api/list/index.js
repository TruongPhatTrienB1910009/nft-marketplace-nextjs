const data = [
    {
        id: 0,
        name: 'Silver Box',
        image: 'https://nft-marketplace-nextjs-rho.vercel.app/images/box0.png',
        description: 'CORE DOGE NFT 1'
    },
    {
        id: 1,
        name: 'Gold Box',
        image: 'https://nft-marketplace-nextjs-rho.vercel.app/images/box1.png',
        description: 'CORE DOGE NFT 2'
    },
    {
        id: 2,
        name: 'Ruby Box',
        image: 'https://nft-marketplace-nextjs-rho.vercel.app/images/box2.png',
        description: 'CORE DOGE NFT 3'
    }
]

export default function handler(req, res) {
    res.send(data);
}