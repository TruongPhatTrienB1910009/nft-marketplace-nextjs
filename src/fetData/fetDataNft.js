const abi = require("../abi/marketplace.json");
const Web3 = require("web3");
const web3 = new Web3('https://rpc-core.icecreamswap.com');
const contractAddress = '0x6EFCA034E8f6745858976d9b4A41bDc60D6691e6';

const contract = new web3.eth.Contract(abi, contractAddress);

export const getNftType = async (NftId) => {
    const result = await contract.methods.NFT_TYPE(NftId).call()
    return result;
}
