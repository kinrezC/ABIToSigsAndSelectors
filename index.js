const abi = require("./abi");
const { pick } = require("lodash");
const Web3 = require("web3");
const fs = require("fs");

const web3 = new Web3();

const functionSelectors = JSON.stringify(
  abi
    .filter(obj => obj.type == "function")
    .map(obj => pick(obj, ["name", "inputs"]))
    .map(obj => {
      const name = obj.name;
      const argTypes = obj.inputs.map(params => params.type);
      const params = argTypes.join();
      return `${name}(${params})`;
    })
    .map(sig => {
      const bytes = web3.utils.soliditySha3(sig).substring(0, 10);
      return {
        signature: sig,
        selector: bytes
      };
    })
    .reduce((parsedAbi, obj) => {
      parsedAbi[obj.selector] = {
        signature: obj.signature
      };
      return parsedAbi;
    }, {})
);

fs.writeFile("./functionSelectors.json", functionSelectors, err => {
  if (err) {
    console.log(err);
  }
});

const eventSelectors = JSON.stringify(
  abi
    .filter(obj => obj.type == "event")
    .map(obj => pick(obj, ["name", "inputs"]))
    .map(obj => {
      const name = obj.name;
      const argTypes = obj.inputs.map(params => params.type);
      const params = argTypes.join();
      return `${name}(${params})`;
    })
    .map(sig => {
      const bytes = web3.utils.soliditySha3(sig).substring(0, 10);
      return {
        signature: sig,
        selector: bytes
      };
    })
    .reduce((eventSelectors, obj) => {
      eventSelectors[obj.selector] = {
        signature: obj.signature
      };
      return eventSelectors;
    }, {})
);

fs.writeFile("./events.json", eventSelectors, err => {
  if (err) {
    console.log(err);
  }
});
