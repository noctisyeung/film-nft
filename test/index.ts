import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeter = await Greeter.deploy('Hello, world!');
    await greeter.deployed();

    expect(await greeter.greet()).to.equal('Hello, world!');

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal('Hola, mundo!');
  });

  describe('FilmNFT', function () {
    it('Should return mint and transfer NFT to someone', async function () {
      const NYKHFILM = await ethers.getContractFactory('FilmNFT');
      const filmInstance = await NYKHFILM.deploy();
      await filmInstance.deployed();

      const seller = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
      const metaUri = 'cid/test.jpeg';

      const balance = await filmInstance.balanceOf(seller);
      expect(balance).to.equal(0);

      let newMintedToken = await filmInstance.payToMint(seller, metaUri, {
        value: ethers.utils.parseEther('0.1'),
      });

      await newMintedToken.wait();
      const newBalance = await filmInstance.balanceOf(seller);
      expect(newBalance).to.equal(1);

      expect(await filmInstance.isContentOwned(metaUri)).to.equal(true);
    });
  });
});
