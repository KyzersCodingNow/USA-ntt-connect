"use client"

import dynamic from "next/dynamic"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import Image from "next/image"

// Dynamically import WormholeConnect to avoid SSR issues
const WormholeConnect = dynamic(() => import("@wormhole-foundation/wormhole-connect"), { ssr: false })

const wormholeConfig = {
  network: "Mainnet",
  chains: ["Solana", "Base", "Ethereum", "Bsc", "Avalanche"],
  tokens: ["USA"],
  ui: {
    title: "USA Token Bridge",
    defaultInputs: {
      fromChain: "Solana",
      toChain: "Base",
    },
    disableUserInputtedTokens: true,
  },
  rpcs: {
    Solana: "https://mainnet.helius-rpc.com/?api-key=",
    Base: "https://base-mainnet.g.alchemy.com/v2/-L5AwwQOAv8yWZ4cy2K5d",
    Ethereum: "https://eth-mainnet.g.alchemy.com/v2/-L5AwwQOAv8yWZ4cy2K5d",
    Bsc: "https://bnb-mainnet.g.alchemy.com/v2/-L5AwwQOAv8yWZ4cy2K5d",
    Avalanche: "https://avax-mainnet.g.alchemy.com/v2/-L5AwwQOAv8yWZ4cy2K5d",
  },
  tokensConfig: {
    USA: {
      key: "USA",
      symbol: "USA",
      nativeChain: "Solana",
      tokenId: {
        chain: "Solana",
        address: "69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs",
      },
      icon: "https://magenta-obliged-skink-750.mypinata.cloud/ipfs/bafybeighe2vilqsdjdkuqcw22hfbavue4h2he4gxioaadh5dxxflqx3p4q",
      decimals: 6,
      color: "#DC2626",
    },
  },
  nttGroups: {
    USA_NTT: {
      nttManagers: [
        {
          chainName: "Solana",
          address: "NtTfQrAwS18E1sqsJKVw5gBf1oEeCrmNGZSWYEcepDX",
          tokenKey: "USA",
          transceivers: [
            {
              address: "52JduK4EXhb43LjAZQn52cW5pzxrhxzw1NUrQQmtFVmn",
              type: "wormhole",
            },
          ],
        },
        {
          chainName: "Base",
          address: "0x2804b30EF28C609565c3973A70fC3EB5802D354f",
          tokenKey: "USA",
          transceivers: [
            {
              address: "0x6DF7DA0eB91BcE55F57C076e44c702dF9b6f4261",
              type: "wormhole",
            },
          ],
        },
        {
          chainName: "Ethereum",
          address: "0x97F162B82189648107690878950479bC29AC87Ea",
          tokenKey: "USA",
          transceivers: [
            {
              address: "0x0A223f36995e3f24541c4bB8F6d0Cc17247213b0",
              type: "wormhole",
            },
          ],
        },
        {
          chainName: "Bsc",
          address: "0x2804b30EF28C609565c3973A70fC3EB5802D354f",
          tokenKey: "USA",
          transceivers: [
            {
              address: "0x6DF7DA0eB91BcE55F57C076e44c702dF9b6f4261",
              type: "wormhole",
            },
          ],
        },
        {
          chainName: "Avalanche",
          address: "0x2804b30EF28C609565c3973A70fC3EB5802D354f",
          tokenKey: "USA",
          transceivers: [
            {
              address: "0x6DF7DA0eB91BcE55F57C076e44c702dF9b6f4261",
              type: "wormhole",
            },
          ],
        },
      ],
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.1),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Live on Mainnet - FREEDOM ENABLED
            </div>

            <div className="mb-8 flex justify-center">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 animate-bounce-slow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GzaAy2sWQAADnX3-Ml8RZkvkUETbeqah81t2tYCjoI0oYw.jpeg"
                  alt="USA Token Eagle Mascot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              BRIDGE USA TOKEN
              <br />
              <span className="text-primary">ACROSS THE LAND OF THE FREE</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
              Exercise your CONSTITUTIONAL RIGHT to transfer USA tokens between Solana, Base, Ethereum, BSC, and
              Avalanche. Because FREEDOM doesn't stop at one blockchain. 🦅
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#bridge"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                BRIDGE FOR FREEDOM
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent"
              >
                Learn the Way of Liberty
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="border-b border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Why Bridge with the Power of FREEDOM?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Technology so advanced, it makes the Founding Fathers proud 🇺🇸
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Fort Knox Secure</h3>
              <p className="text-muted-foreground">
                Protected by more layers than the Declaration of Independence. Battle-tested and audit-approved.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Lightning Fast Liberty</h3>
              <p className="text-muted-foreground">
                Faster than a bald eagle in flight. Your tokens cross chains at the speed of FREEDOM.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Coast-to-Coast Coverage</h3>
              <p className="text-muted-foreground">
                5 blockchains united under one banner. E Pluribus Unum, but make it crypto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              UNITED NETWORKS OF AMERICA
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["Solana", "Base", "Ethereum", "BSC", "Avalanche"].map((chain) => (
                <div
                  key={chain}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground shadow-sm"
                >
                  {chain}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Widget */}
      <section id="bridge" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Bridge Your USA Tokens to VICTORY</h2>
            <p className="text-muted-foreground">
              Connect your wallet and exercise your right to bridge. No taxation without representation! 🗽
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <WormholeConnect config={wormholeConfig} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Powered by Wormhole Connect • USA Token Bridge • In Crypto We Trust</p>
            <p className="mt-2">Always verify contract addresses before bridging. Stay vigilant, patriot! 🦅</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
