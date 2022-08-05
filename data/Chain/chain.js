
const supportedChains = [
    {
        name: "Ethereum Mainnet",
        short_name: "eth",
        chain: "ETH",
        network: "mainnet",
        chain_id: 1,
        network_id: 1,
        rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ethereum",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },
      {
        name: "Ethereum Ropsten",
        short_name: "rop",
        chain: "ETH",
        network: "ropsten",
        chain_id: 3,
        network_id: 3,
        rpc_url: "https://ropsten.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ethereum",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },
      {
        name: "Ethereum Rinkeby",
        short_name: "rin",
        chain: "ETH",
        network: "rinkeby",
        chain_id: 4,
        network_id: 4,
        rpc_url: "https://rinkeby.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ethereum",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },  
      {
        name: "Ethereum Kovan",
        short_name: "kov",
        chain: "ETH",
        network: "kovan",
        chain_id: 42,
        network_id: 42,
        rpc_url: "https://kovan.infura.io/v3/%API_KEY%",
        native_currency: {
          symbol: "ETH",
          name: "Ethereum",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },
      {
        name: "Ethereum Classic Mainnet",
        short_name: "etc",
        chain: "ETC",
        network: "mainnet",
        chain_id: 61,
        network_id: 1,
        rpc_url: "https://ethereumclassic.network",
        native_currency: {
          symbol: "ETH",
          name: "Ethereum",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },   
      {
        name: "Binance Smart Chain",
        short_name: "bsc",
        chain: "smartchain",
        network: "mainnet",
        chain_id: 56,
        network_id: 56,
        rpc_url: "https://bsc-dataseed1.defibit.io/",
        native_currency: {
          symbol: "BNB",
          name: "BNB",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },
      {
        name: "Binance Smart Test Chain",
        short_name: "bsc",
        chain: "smartchain",
        network: "testnet",
        chain_id: 97,
        network_id: 97,
        rpc_url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        native_currency: {
          symbol: "BNB",
          name: "BNB",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      }
];

export default supportedChains;