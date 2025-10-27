'use client';

import WormholeConnect, {
    type config,
  } from '@wormhole-foundation/wormhole-connect';
import {
  nttRoutes,
} from '@wormhole-foundation/wormhole-connect/ntt';

const wormholeConfig: config.WormholeConnectConfig = {
  network: 'Mainnet',
  chains: ['Solana', 'Base', 'Ethereum', 'Bsc', 'Avalanche'],
  tokens: ['USA'],
  ui: {
    title: 'Wormhole NTT UI',
    defaultInputs: {
      fromChain: 'Solana',
      toChain: 'Base'
    },
    disableUserInputtedTokens: true,
    // walletConnectProjectId: '', 
  },
  rpcs: {
    Solana: 'https://mainnet.helius-rpc.com/?api-key=',
    Base: 'https://base-mainnet.g.alchemy.com/v2/',
    Ethereum: 'https://eth-mainnet.g.alchemy.com/v2/',
    Bsc: 'https://bnb-mainnet.g.alchemy.com/v2/',
    Avalanche: 'https://avax-mainnet.g.alchemy.com/v2/',
  },
  routes: [
    ...nttRoutes({
      tokens: {
        USA: [
          {
            chain: 'Solana',
            manager: 'NtTfQrAwS18E1sqsJKVw5gBf1oEeCrmNGZSWYEcepDX',
            token: '69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs',
            transceiver: [
              {
                address: '52JduK4EXhb43LjAZQn52cW5pzxrhxzw1NUrQQmtFVmn',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Base',
            manager: '0x2804b30EF28C609565c3973A70fC3EB5802D354f',
            token: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929',
            transceiver: [
              {
                address: '0x6DF7DA0eB91BcE55F57C076e44c702dF9b6f4261',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Ethereum',
            manager: '0x97F162B82189648107690878950479bC29AC87Ea',
            token: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929',
            transceiver: [
              {
                address: '0x0A223f36995e3f24541c4bB8F6d0Cc17247213b0',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Bsc',
            manager: '0x2804b30EF28C609565c3973A70fC3EB5802D354f',
            token: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929',
            transceiver: [
              {
                address: '0x6DF7DA0eB91BcE55F57C076e44c702dF9b6f4261',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Avalanche',
            manager: '0x2804b30EF28C609565c3973A70fC3EB5802D354f',
            token: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929',
            transceiver: [
              {
                address: '0x6DF7DA0eB91BcE55F57C076e44c702dF9b6f4261',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    USA: {
      symbol: 'USA',
      tokenId: {
        chain: 'Solana',
        address: '69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs'
      },
      icon: 'https://magenta-obliged-skink-750.mypinata.cloud/ipfs/bafybeighe2vilqsdjdkuqcw22hfbavue4h2he4gxioaadh5dxxflqx3p4q',
      decimals: 6
    },
    USAbase: {
      symbol: 'USA',
      tokenId: {
        chain: 'Base',
        address: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929'
      },
      icon: 'https://magenta-obliged-skink-750.mypinata.cloud/ipfs/bafybeighe2vilqsdjdkuqcw22hfbavue4h2he4gxioaadh5dxxflqx3p4q',
      decimals: 18
    },
    USAethereum: {
      symbol: 'USA',
      tokenId: {
        chain: 'Ethereum',
        address: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929'
      },
      icon: 'https://magenta-obliged-skink-750.mypinata.cloud/ipfs/bafybeighe2vilqsdjdkuqcw22hfbavue4h2he4gxioaadh5dxxflqx3p4q',
      decimals: 18
    },
    USAbsc: {
      symbol: 'USA',
      tokenId: {
        chain: 'Bsc',
        address: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929'
      },
      icon: 'https://magenta-obliged-skink-750.mypinata.cloud/ipfs/bafybeighe2vilqsdjdkuqcw22hfbavue4h2he4gxioaadh5dxxflqx3p4q',
      decimals: 18
    },
    USAavalanche: {
      symbol: 'USA',
      tokenId: {
        chain: 'Avalanche',
        address: '0x5A0d87957B5De72E6acC2810F5AeaCCad257c929'
      },
      icon: 'https://magenta-obliged-skink-750.mypinata.cloud/ipfs/bafybeighe2vilqsdjdkuqcw22hfbavue4h2he4gxioaadh5dxxflqx3p4q',
      decimals: 18
    },
  }
}

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '480px' }}>
        <WormholeConnect 
          config={wormholeConfig} 
          theme={{ mode: 'dark', primary: '#78c4b6' }} 
        />
      </div>
    </div>
  )
} 
