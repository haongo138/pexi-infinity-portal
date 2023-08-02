import Image from "next/image";
import CopyContractBox from "./CopyContract";

export default function Header() {
  return (
    <div className="flex flex-col p-8 w-full lg:p-28">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div>
          <p className="text-3xl font-clash-semi text-pepe">About Us</p>
          <p className="text-xl font-clash">
            Welcome to the magical and magical world of "PEXI INFINITY" - the
            unique petting and strategy game on the Erc network (Ethereum).
            <br />
            <br />
            "PEXI INFINITY" is designed for cryptocurrency enthusiasts and
            promises a unique and enjoyable experience as players embark on
            adventures with their adorable pets, creating a powerful team on
            their own farm.
            <br />
            <br />
            The game features exciting elements such as diverse battles, vibrant
            farming, pet breeding to create new species, exploring mystical
            lands, and engaging in both PvE and PvP battles. With the
            integration of the Erc network, the game provides a cryptocurrency
            gaming experience for players.
            <br />
            <br />
            Let's revive GAMEFI together, go go go !!!
          </p>
        </div>
        <div
          className="relative flex-shrink-0 mx-auto w-full h-full"
          style={{ height: "400px", maxWidth: "700px" }}
        >
          <Image
            src="/images/logo_rounded.png"
            alt="pepe holding a dildo"
            loading="lazy"
            decoding="async"
            className="object-contain"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            sizes="100vw"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="grid auto-rows-auto gap-24 mt-32 lg:grid-cols-2 lg:grid-rows-1 grid-col-1">
        <div>
          <p className="text-4xl lg:text-5xl lg:whitespace-nowrap text-pepe font-clash-semi">
            Tokenomics
          </p>
          <p className="mt-3 text-2xl font-clash">
            {String.fromCharCode(10004)} Supply is 1000.000.000 $PIY with 3-3 taxes (for game development)
            <br />
            {String.fromCharCode(10004)} Stealth launched with no presale, LP burnt and contract renounced.
            <br />
            {String.fromCharCode(10004)} All liquidity goes to a multi-sig
            wallet, you can track all activities by the name
          </p>
          <CopyContractBox textToCopy={process.env.CONTRACT_ADDRESS} />
        </div>
        <div>
          <p className="text-4xl lg:text-5xl text-pepe font-clash-semi">
            Roadmap
          </p>
          <p className="self-start mt-2 text-2xl font-clash">
            <span className="text-3xl font-clash-bold text-redzone">0%</span>
            <br /> - $PIY launches with LP burnt & contract renounced
            <br /> - Inital Marketing campaigns
            <br /> - ETH trending (biggest buy bot) & Dextool social update
            <br /> - 300+ holders
          </p>
          <p className="self-start mt-2 text-2xl font-clash">
            <span className="text-3xl font-clash-bold text-redzone">50%</span>
            <br /> - CMC CG listing
            <br /> - Pexi Game is live
            <br /> - 500 holders
            <br /> - AMAs
          </p>
          <p className="self-start mt-2 text-2xl font-clash">
            <span className="text-3xl font-clash-bold text-redzone">99%</span>
            <br /> - First CEX listing
            <br /> - More will be revealed soon ... 
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-32 text-pepe">
        <p className="mb-10 text-6xl font-clash-bold text-pepe">how to buy</p>
        <div className="flex flex-col gap-y-16 font-clash-semi">
          <div className="flex flex-col gap-x-5 sm:flex-row">
            <Image
              src="/images/wallet.webp"
              alt=""
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              className="object-contain"
              style={{ color: "transparent" }}
            />
            <div>
              <p className="text-3xl">get a wallet</p>
              <p className="text-xl text-white">
                download metamask or your wallet of choice from the app store or
                google play store
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-x-5 sm:flex-row">
            <Image
              src="/images/eth.webp"
              alt=""
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              className="object-contain"
              style={{ color: "transparent" }}
            />
            <div>
              <p className="text-3xl">get some ETH</p>
              <p className="text-xl text-white">
                have ETH in your wallet to switch to $PIY. If you don’t have
                any ETH, you can buy directly on metamask, transfer from another
                wallet, or buy on another exchange and send it to your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
