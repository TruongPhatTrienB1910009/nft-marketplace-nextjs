const abi = require("../abi/marketplace.json");
const Web3 = require("web3");
const web3 = new Web3('https://rpc-core.icecreamswap.com');
const contractAddress = '0x080c9Ec00E41028041C98c6cCcEA87b711Db9F6c';

const contract = new web3.eth.Contract(abi, contractAddress);

export const getNftType = async (NftId) => {
    const result = await contract.methods.NFT_TYPE(NftId).call()
    return result;
}
