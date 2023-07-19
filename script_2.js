import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.esm.min.js";

import ABI from './ABI.js';


const provider = new ethers.providers.JsonRpcProvider('YourAPIkeylink');



const contractaddress = '';
const contract = new ethers.Contract(contractaddress,ABI,provider);

const main = async() => {
    const name = await contract.name()
    const totalSupply = await contract.totalSupply();
    console.log(`Reading from ${contractaddress}`);
    console.log(`name:${name}`);
    console.log(`totalSupply:${totalSupply}`);
}

main();
