import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import { ethers } from 'ethers';
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const init = useCallback(
    async artifact => {
      if (artifact) {
        const web3 = new Web3(Web3.givenProvider);
        console.log(Web3.givenProvider);
        const accounts = await web3.eth.requestAccounts();
        const networkID = await web3.eth.net.getId();
        // const { abi } = artifact;
        const abi= [
          {
            "inputs": [],
            "name": "readd",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "update",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "newValue",
                "type": "uint256"
              }
            ],
            "name": "write",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ];
        let address, contract;
        // if (window.ethereum) {
        //   await window.ethereum.request({ method: 'eth_requestAccounts' });
        //   const provider = new ethers.providers.Web3Provider(window.ethereum);
        //   const signer = new ethers.Wallet('90b2b03f5c9919f9a472362627d5704fb67f8bd2271e6619ccb05f1d7c695e7d', provider);
        //   const smcontract = new ethers.Contract('0xDCe1ea8E6bdf5A0133acfaF34767E569950Fd855', abi, signer);
        //   const value = await smcontract.read();
        //   console.log(value);
        // }
        try {
          // address = artifact.networks[networkID].address;
          address= '0xD268533F949D5DC4A8e965Ab892a6cb17744695B';
          contract = new web3.eth.Contract(abi, address);
        } catch (err) {
          console.error(err);
        }
        dispatch({
          type: actions.init,
          data: { artifact, web3, accounts, networkID, contract }
        });
      }
    }, []);

  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/SimpleStorage.json");
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  return (
    <EthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
