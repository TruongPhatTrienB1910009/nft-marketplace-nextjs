const data = [
    { "a": 1 },
    { "b": 2 },
    { "c": 3 }
]

export default function handler(req, res) {
    const { pid } = req.query;
    res.send(data[pid]);
}