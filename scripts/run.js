const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      // Character names
      [
        "Kenshin",
        "Sanosuke", 
        "Yahiko"
      ],
      // Image URLs
      [
        "https://imgur.com/pUV8yj0", // Kenshin image
        "https://imgur.com/I25flmU", // Sanosuke image
        "https://imgur.com/LTJRjlZ", // Yahiko image
      ],
      // HP values
      [
        150, // Kenshin HP
        200, // Sanosuke HP
        100 // Yahiko HP
      ],
      // Attack damage values
      [
        100, // Kenshin attack damage 
        50, // Sanosuke attack damage 
        150 // Yahiko attack damage
      ],    
      //Boss Attributes
      "Death Samurai", // Boss name
      "https://imgur.com/PcDaFG8.jpg", // Boss image
      1000, // Boss HP
      50 // Boss Attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    //let returnedTokenUri = await gameContract.tokenURI(1);
    //console.log("TokenURI:", returnedTokenUri);
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