import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.min.js";

const provider = new ethers.providers.JsonRpcProvider('YourAPIkeylink');

const address = '';

const main = async() => {
    const balance = await provider.getBalance(address);
    console.log(`\nBalance ETH in the account --> ${ethers.utils.formatEther(balance)} ETH\n`);
}

main();
