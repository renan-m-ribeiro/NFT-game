const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Kenshin", "Sanosuke", "Yahiko"],
          [
              "https://imgur.com/pUV8yj0",
              "https://imgur.com/I25flmU",
              "https://imgur.com/LTJRjlZ",
          ],
      [100, 200, 25], // HP values
      [100, 50, 25] // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Mintou NFT #1");
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Mintou NFT #2");
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Mintou NFT #3");
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    console.log("Fim do deploy e mint!");

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("TokenURI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();