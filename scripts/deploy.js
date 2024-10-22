async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const Token= await ethers.getContractFactory("MyToken");
    //Deploy the contract
    const token = await Token.deploy();
    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0)) // Exits the process with success if it runs successfully
    .catch((error) =>{
        console.error(error); //Log any errors
        process.exit(1); //Exit the process with failure if an occur occurs
    })