import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useSelector, useDispatch } from 'react-redux';
import * as walletActions from '../store/modules/walletInfo';
import * as networkActions from '../store/modules/networkInfo';
import * as userActions from '../store/modules/userInfo';
import supportedChains from "../data/Chain/chain";
import { FixedNumber } from '../utils/fixedNumber';

export default function TopWrap(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    var index = parseInt(localStorage.getItem("wallet_index")); 
    if(index != NaN){ 
      ConnectWallet(0);
    }else{ 
      ConnectWallet(index);
    }        
    var user = JSON.parse(localStorage.getItem("user")); 
    if (user != null) {
      if(user.set == true){
        dispatch(userActions.setUserInfo(user))
      } 
    }

  });

  const ConnectWallet = async (index) => {
    try {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: process.env.NEXT_PUBLIC_INFURA_ID
          }
        },
      };
      const web3modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
        providerOptions
      })
      let provider;
      if (index === 0) {
        provider = await web3modal.connect();
      } else {
        provider = await web3modal.connectTo("walletconnect");
      }
      const web3 = new Web3(provider);
      web3.eth.extend({
        methods: [
          {
            name: "chainId",
            call: "eth_chainId",
            outputFormatter: web3.utils.hexToNumber
          }
        ]
      });
      initData(provider, web3, index);
      await subscribeProvider(provider, web3, index);
    } catch (e) {
      console.log(">>>error", e)
    }
  }

  const subscribeProvider = async (provider, web3, index) => {
    if (!provider.on) {
      return;
    }
    provider.on('chainChanged', async (chainId) => {
      initData(provider, web3, index)
    });
    provider.on('networkChanged', async (networkId) => {
      initData(provider, web3, index)
    });
    provider.on('accountsChanged', async (account) => {
      if (account.length > 0) {
        initData(provider, web3, index)
      } else {
        var wData = {
          set: false,
          data: {
          }
        }
        dispatch(walletActions.setWalletInfo(wData));
        var nData = {
          set: false,
          data: {}
        }
        console.log('>>>>>call???=====')
        dispatch(networkActions.setNetworkInfo(nData))
      }
    });
  }

  const initData = async (provier, web3, index) => {
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const networkId = await web3.eth.net.getId();
    const chainId = await web3.eth.chainId();
    const balanceWei = await web3.eth.getBalance(address);
    const balance = web3.utils.fromWei(balanceWei.toString(), 'ether');
    var wData = {
      set: true,
      data: {
        address,
        networkId,
        chainId,
        balance: FixedNumber(balance),
      }
    }
    dispatch(walletActions.setWalletInfo(wData));
    supportedChains.forEach((item) => {
      if (item.chain_id == chainId) {
        var nData = {
          set: true,
          data: item
        }
        dispatch(networkActions.setNetworkInfo(nData))
      }
    })
    localStorage.setItem("wallet_index", index);
  }

  return (
    <div>
      {props.children}
    </div>
  );

}

