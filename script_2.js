import {ethers} from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.4/ethers.min.js";

const address = "0x359Ab2b7163Af148FF2e77f2FAEC255DC5CEa392";
const ABI = ["function getValue() public view returns(uint256)",
             "function AddNumber(uint256 _firstNumber, uint256 _secondNumber) public"          
    ];

const privatekey = "6cf75a06ba2e952ab52cc40444925994f456a1af0163e1cb19e44987b5dfff74";
const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/68d5e602045040fcbb3ecc41d59ee720');

const main = async() => {
    const wallet = new ethers.Wallet(privatekey,provider);
    const contract = new ethers.Contract(address,ABI,wallet);

    const tx = await contract.AddNumber(25,23);
    const receipt = await tx.wait();
    console.log('Transaction hash : ',tx.hash);

    const Read = await contract.getValue();

    console.log(Read.toString());

}
main(); 
