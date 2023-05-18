const data = [
    {
        id: 0,
        name: 'Silver Box #0',
        image: '/images/box0.png',
        description: 'CORE DOGE NFT 1'
    },
    {
        id: 1,
        name: 'Gold Box #1',
        image: '/images/box1.png',
        description: 'CORE DOGE NFT 2'
    },
    {
        id: 2,
        name: 'Ruby Box #2',
        image: '/images/box2.png',
        description: 'CORE DOGE NFT 3'
    }
]

export default function handler(req, res) {
    res.send(data);
}