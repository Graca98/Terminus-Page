"use client";

import { useState } from "react";
import Link from "next/link";
import "./Pricing.css";
import text from "./PricingText.json";
import PricingTab from "./PricingTab";
import PricingInfo from "./PricingInfo";

const Pricing = () => {
  const [checked, setChecked] = useState(false);
  const [price, setPrice] = useState({
    vip: `${text.czVip} Kč`,
    evip: `${text.czEvip} Kč`,
    donator: `${text.czDonator} Kč`,
  });

  const handlePrice = () => {
    setPrice(
      checked
        ? {
          vip: `${text.czVip} Kč`,
          evip: `${text.czEvip} Kč`,
          donator: `${text.czDonator} Kč`,
        }
        : {
          vip: `${text.euroVip} €`,
          evip: `${text.euroEvip} €`,
          donator: `${text.euroDonator} €`,
        },
    );
    setChecked(!checked);
    // setChecked(false)dddddddddddd
  };

  return (
    <>
      <section className="container-default mb-16 md:mb-20 lg:mb-40">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {text.heading}
          </h2>
          <p className="mb-5 font-light text-gray-700 sm:text-xl">
            {text.mainDesc}
          </p>
        </div>

        {/* Checkbox toggle */}
        <div className="flex justify-center lg:justify-end mb-6 lg:mb-10">
          <span className="label-text text-gray-700 place-self-center">Kč</span>
          <input
            type="checkbox"
            className="switch switch-xl md:switch-lg switch-primary mx-2 place-self-center"
            checked={checked}
            onChange={handlePrice}
          />
          <span className="label-text text-gray-700 place-self-center">
            Euro
          </span>
        </div>

        {/* <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-6 lg:space-y-0 ">
          {/* <!-- Pricing Card --> */}
          <div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 border-yellow-300 shadow xl:p-8 lg:hover:scale-105 transition ease-in-out duration-300">
            <h3 className="mb-4 text-2xl font-semibold">VIP</h3>
            <p className="font-light text-gray-500 sm:text-lg">
              {text.vipDesc}
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{price.vip}</span>
              <span className="text-gray-500">/měsíc</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.vip1}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.vip2}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.vip3}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.vip4}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.vip5}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 invisible"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="">
                  <Link href="/vip/skyblock#vip">Zobrazit více...</Link>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Koupit
            </a>
          </div>

          {/* <!-- Pricing Card Evip --> */}
          <div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 lg:border-4 border-cyan-400 shadow xl:p-8 lg:scale-105 lg:hover:scale-110 transition ease-in-out duration-300">
            <h3 className="mb-4 text-2xl font-semibold">EVIP</h3>
            <p className="font-light text-gray-500 sm:text-lg">
              {text.evipDesc}
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{price.evip}</span>
              <span className="text-gray-500">/měsíc</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.evip1}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.evip2}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.evip3}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.evip4}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.evip5}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 invisible"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="">
                  <button>Zobrazit více...</button>
                </span>
              </li>
            </ul>
            <a
              href="https://tcrafteu.craftingstore.net/package/1121244"
              className="text-black bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Koupit
            </a>
          </div>

          {/* <!-- Pricing Card Donator--> */}
          <div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 border-purple-700 shadow xl:p-8 lg:hover:scale-105 transition ease-in-out duration-300">
            <h3 className="mb-4 text-2xl font-semibold">Donator</h3>
            <p className="font-light text-gray-500 sm:text-lg">
              {text.donatorDesc}
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">
                {price.donator}
              </span>
              <span className="text-gray-500">/měsíc</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.donator1}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.donator2}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.donator3}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.donator4}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{text.donator5}</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 invisible"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="">
                  <button>Zobrazit více...</button>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Koupit
            </a>
          </div>
        </div>
      </section>

      {/* Přepínání mezi tabem a odstavcema */}
      <section className="hidden">
        {/* Vyhody v tabulce */}
        <div className="">
          <PricingTab
            vip={price.vip}
            evip={price.evip}
            donator={price.donator}
          ></PricingTab>
        </div>

        {/* Výhody v sekcích */}
        <div className="hidden">
          <PricingInfo></PricingInfo>
        </div>
      </section>

      <section className="container-default mb-8 lg:mb-20 pt-8 hidden">
        <div className="text-gray-900 bg-white rounded-lg border-2 border-purple-700 shadow p-6 xl:p-8">
          <div id="vip">
            <h2 className="text-lg font-bold underline">VIP Výhody</h2>
            <ul className="list-inside">
              <li>$2500 v neoznačených bankovkách ihned</li>
              <li>Připojíš se na plný server a při AFKování nebudeš vyhozen</li>
              <li>Používání CMI heal cedulek</li>
              <li>Barevný text (pro nápovědu napiš /colors, /colorpicker)</li>
              <li>Tvorba Chestshopu zdarma</li>
              <li>Možnost mít až 7 aukcí</li>
              <li>150 leteckého kreditu každý den, který se připojíš</li>
              <li>
                Nový VIP ostrov (pro více informací použijte warp na cedulce)
              </li>
              <li>
                /is biome - změna biomi ostrova (Desert, Nether, Jungle, Swamp,
                Snowy Plains)
              </li>
              <li>/is settings - Ovládání počasí a růstu rostlin/stromů</li>
              <li>
                /repair (&lt;$1000, pouze předměty bez enchantů, co hodinu,
                funguje pouze na VIP)
              </li>
              <li>
                /ah search {"<slovo>"} - Vyhledá předmět v aukci dle názvu, nebo
                prodejce
              </li>
              <li>/back - Vrácení na minulou pozici (i po smrti)</li>
              <li>/feed - Doplní jídlo (co 10 minut)</li>
              <li>/near - Zobrazí hráče v okolí</li>
              <li>/me - Způsob psaní do chatu</li>
              <li>/wb - Přenosný crafting table</li>
              <li>/skin - Nastavení libovolného skinu</li>
              <li>/sethome, /home - Nastavení až 3 domovů</li>
              <li>/kit redstone - Redstone, quartz (co 1.2 hodin)</li>
              <li>/kit key - VIP klíč do automatu (co 20 hodin)</li>
              <li>
                /kit vip - Jednorázový VIP balíček (více informací na cedulích)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
