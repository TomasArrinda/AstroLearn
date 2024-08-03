/* eslint-disable no-undef */
// Right click on the script name and hit "Run" to execute
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Storage", function () {
  it("test initial value", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();
    console.log("storage deployed at:" + storage.address);
    expect((await storage.retrieveNum()).toNumber()).to.equal(0);
    expect((await storage.retrieveMessage().length == 0));
  });
  it("test updating and retrieving updated value", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();
    const storage2 = await ethers.getContractAt("Storage", storage.address);
    const setValue = await storage2.storeNum(56);
    await storage2.storeMessage("Nothing broke, what a miracle!");
    await setValue.wait();
    expect((await storage2.retrieveNum()).toNumber()).to.equal(56);
    expect((await storage2.retrieveMessage().length == 30));
  });
});