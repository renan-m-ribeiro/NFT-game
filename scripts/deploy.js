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
      "https://imgur.com/zhuB2jA.jpg", // Kenshin image
      "https://imgur.com/e8ajrkv.jpg", // Sanosuke image
      "https://imgur.com/YoaLu2h.jpg", // Yahiko image
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
    console.log("Contrato deployado no endereço:", gameContract.address);
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