"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import CopyContractBox from "./CopyContract";

export default function Header() {
  const images = [
    {
      src: "/images/nft_00.png",
      height: 360,
      width: 360,
      blurWidth: 8,
      blurHeight: 8,
    },
    {
      src: "/images/nft_01.png",
      height: 360,
      width: 360,
      blurWidth: 8,
      blurHeight: 8,
    },
    {
      src: "/images/nft_03.png",
      height: 360,
      width: 360,
      blurWidth: 8,
      blurHeight: 8,
    },
    {
      src: "/images/nft_04.png",
      height: 360,
      width: 360,
      blurWidth: 8,
      blurHeight: 8,
    },
  ];
  const particlesOpts = JSON.parse(
    '{"autoPlay":true,"background":{"color":{"value":"transparent"},"image":"","position":"50% 50%","repeat":"no-repeat","size":"cover","opacity":1},"backgroundMask":{"composite":"destination-out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"defaultThemes":{},"delay":0,"fullScreen":{"enable":false,"zIndex":1},"detectRetina":true,"duration":0,"fpsLimit":120,"interactivity":{"detectsOn":"window","events":{},"modes":{"attract":{"distance":200,"duration":0.4,"easing":"ease-out-quad","factor":1,"maxSpeed":50,"speed":1},"bounce":{"distance":200},"bubble":{"distance":400,"duration":2,"mix":false,"opacity":0.8,"size":40,"divs":{"distance":200,"duration":0.4,"mix":false,"selectors":[]}},"connect":{"distance":80,"links":{"opacity":0.5},"radius":60},"grab":{"distance":400,"links":{"blink":false,"consent":false,"opacity":1}},"push":{"default":true,"groups":[],"quantity":4},"remove":{"quantity":2},"repulse":{"distance":200,"duration":0.4,"factor":100,"speed":1,"maxSpeed":50,"easing":"ease-out-quad","divs":{"distance":200,"duration":0.4,"factor":100,"speed":1,"maxSpeed":50,"easing":"ease-out-quad","selectors":[]}},"slow":{"factor":3,"radius":200},"trail":{"delay":1,"pauseOnStop":false,"quantity":1},"light":{"area":{"gradient":{"start":{"value":"#ffffff"},"stop":{"value":"#000000"}},"radius":1000},"shadow":{"color":{"value":"#000000"},"length":2000}}}},"manualParticles":[],"particles":{"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"collisions":{"absorb":{"speed":2},"bounce":{"horizontal":{"random":{"enable":false,"minimumValue":0.1},"value":1},"vertical":{"random":{"enable":false,"minimumValue":0.1},"value":1}},"enable":false,"mode":"bounce","overlap":{"enable":true,"retries":0}},"color":{"value":"#ffffff","animation":{"h":{"count":0,"enable":false,"offset":0,"speed":1,"decay":0,"sync":true},"s":{"count":0,"enable":false,"offset":0,"speed":1,"decay":0,"sync":true},"l":{"count":0,"enable":false,"offset":0,"speed":1,"decay":0,"sync":true}}},"groups":{},"move":{"angle":{"offset":0,"value":90},"attract":{"distance":200,"enable":false,"rotate":{"x":600,"y":1200}},"center":{"x":50,"y":50,"mode":"percent","radius":0},"decay":0,"distance":{},"direction":"none","drift":0,"enable":true,"gravity":{"acceleration":9.81,"enable":false,"inverse":false,"maxSpeed":50},"path":{"clamp":true,"delay":{"random":{"enable":false,"minimumValue":0},"value":0},"enable":false,"options":{}},"outModes":{"default":"out","bottom":"out","left":"out","right":"out","top":"out"},"random":false,"size":false,"speed":2,"spin":{"acceleration":0,"enable":false},"straight":false,"trail":{"enable":false,"length":10,"fill":{}},"vibrate":false,"warp":false},"number":{"limit":0,"value":15},"opacity":{"random":{"enable":true,"minimumValue":0.1},"value":{"min":0.1,"max":1},"animation":{"count":0,"enable":true,"speed":1,"decay":0,"sync":false,"destroy":"none","startValue":"random","minimumValue":0.2}},"reduceDuplicates":false,"shadow":{"blur":0,"color":{"value":"#000"},"enable":false,"offset":{"x":0,"y":0}},"shape":{"options":{"character":{"fill":false,"font":"Verdana","style":"","value":"*","weight":"400"},"char":{"fill":false,"font":"Verdana","style":"","value":"*","weight":"400"},"polygon":{"sides":5},"star":{"sides":5},"image":[],"images":[]},"type":"image"},"size":{"random":{"enable":false,"minimumValue":1},"value":28,"animation":{"count":0,"enable":false,"speed":40,"decay":0,"sync":false,"destroy":"none","startValue":"random","minimumValue":0.1}},"stroke":{"width":0,"color":{"value":"#000000","animation":{"h":{"count":0,"enable":false,"offset":0,"speed":1,"decay":0,"sync":true},"s":{"count":0,"enable":false,"offset":0,"speed":1,"decay":0,"sync":true},"l":{"count":0,"enable":false,"offset":0,"speed":1,"decay":0,"sync":true}}}},"zIndex":{"random":{"enable":false,"minimumValue":0},"value":0,"opacityRate":1,"sizeRate":1,"velocityRate":1},"life":{"count":0,"delay":{"random":{"enable":false,"minimumValue":0},"value":0,"sync":false},"duration":{"random":{"enable":false,"minimumValue":0.0001},"value":0,"sync":false}},"rotate":{"random":{"enable":true,"minimumValue":0},"value":0,"animation":{"enable":true,"speed":5,"decay":0,"sync":false},"direction":"random","path":false},"destroy":{"bounds":{},"mode":"none","split":{"count":1,"factor":{"random":{"enable":false,"minimumValue":0},"value":3},"rate":{"random":{"enable":false,"minimumValue":0},"value":{"min":4,"max":9}},"sizeOffset":true,"particles":{}}},"roll":{"darken":{"enable":false,"value":0},"enable":false,"enlighten":{"enable":false,"value":0},"mode":"vertical","speed":25},"tilt":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"decay":0,"sync":false},"direction":"clockwise","enable":false},"twinkle":{"lines":{"enable":false,"frequency":0.05,"opacity":1},"particles":{"enable":false,"frequency":0.05,"opacity":1}},"wobble":{"distance":5,"enable":false,"speed":{"angle":50,"move":10}},"orbit":{"animation":{"count":0,"enable":false,"speed":1,"decay":0,"sync":false},"enable":false,"opacity":1,"rotation":{"random":{"enable":false,"minimumValue":0},"value":45},"width":1},"links":{"blink":false,"color":{"value":"#000"},"consent":false,"distance":150,"enable":false,"frequency":1,"opacity":0.4,"shadow":{"blur":5,"color":{"value":"#000"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"repulse":{"random":{"enable":false,"minimumValue":0},"value":0,"enabled":false,"distance":1,"duration":1,"factor":1,"speed":1}},"pauseOnBlur":true,"pauseOnOutsideViewport":true,"responsive":[],"smooth":false,"style":{},"themes":[],"zLayers":100}'
  );
  particlesOpts.particles.shape.options.image = images;
  particlesOpts.particles.shape.options.images = images;

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="flex relative flex-col justify-center items-center py-20 w-full h-screen bg-gray-800 shadow-2xl shadow-gray-900">
      <div className="flex absolute top-5 left-6 z-10 gap-x-1">
        <p className="text-3xl text-pepe font-clash-semi">Pexi Infinity</p>
        <Image
          src="/images/nft_02.png"
          width={40}
          height={40}
          alt="axie soyak"
          decoding="async"
          loading="lazy"
          className="object-contain"
        />
      </div>
      <p className="relative z-10 text-7xl text-center uppercase text-pepe font-clash-bold">
        $PIY
      </p>
      <div className="relative w-full h-80">
        <Image
          src="/images/logo_rounded.png"
          alt="drop crown meme"
          loading="lazy"
          decoding="async"
          width={60}
          height={60}
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
          className="object-contain"
        />
      </div>
      <p className="relative z-10 mt-10 text-2xl text-pepe font-clash-semi">
        Contract Address
      </p>
      {/* <p className="relative z-10 px-2 text-lg break-all text-pepe font-clash-semi">0x000000000000000000000000000000000000dEaD</p> */}
      <CopyContractBox />
      <a
        className="relative z-10 py-3 px-5 mt-5 text-white rounded-full bg-pepe font-clash-semi w-48 text-center border"
        href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x000000000000000000000000000000000000dEaD"
      >
        BUY
      </a>
      <a
        className="relative z-10 py-3 px-5 mt-5 text-white rounded-full bg-pepe font-clash-semi w-36 text-center border"
        href="https://twitter.com/pexiinfinity"
      >
        Twitter
      </a>
      <a
        className="relative z-10 py-3 px-5 mt-5 text-white rounded-full bg-pepe font-clash-semi w-36 text-center border"
        href="https://t.me/Pexiinfinity"
      >
        Telegram
      </a>
      <a
        className="relative z-10 py-3 px-5 mt-5 text-white rounded-full bg-pepe font-clash-semi w-36 text-center border"
        href="#"
      >
        Dextools
      </a>
      <Particles
        className="absolute w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOpts}
      />
    </div>
  );
}
