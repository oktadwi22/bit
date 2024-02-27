import H1 from "@/common/component/element/H1";
import React, { useState } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { StakingItem } from "@/common/constant/StakingItem";
import { AnimatePresence, motion } from "framer-motion";
import Image from "@/common/component/element/Image";
import { FaEthereum } from "react-icons/fa6";
import { HiEllipsisVertical } from "react-icons/hi2";
import { RiDownloadLine } from "react-icons/ri";
import clsx from "clsx";
import ButtonIcon from "@/common/component/element/ButtonIcon";
import { GoPlus } from "react-icons/go";
import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import Head from "next/head";

export default function Staking() {
  const [open, setOpen] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [choice, setChoice] = useState<boolean>(false);

  const handleOpen = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedItem(index);
  };

  const selectedIndex = selectedItem !== null ? StakingItem[selectedItem] : null


  return (
    <div className="w-full flex justify-center items-center">
            <Head>
        <title>Stake - BitEstate</title>
      </Head>

    <div className="h-auto  max-w-[1500px] items-center flex flex-col justify-center px-5 lg:px-10 mt-32  w-full  overflow-hidden">
      <div className="w-full py-10 lg:px-10">
        <H1
          title="Staking"
          textColor="white"
          className="text-3xl font-semibold"
        />
      </div>
      <div className="w-full  overflow-hidden hidden lg:flex justify-center items-center lg:px-20">
        <div className="w-full max-lg:overflow-scroll flex justify-beetwen items-center">
          <div className="basis-[72%] max-lg:mr-[130px]">
            <h1>Token</h1>
          </div>
          
        </div>  
      </div>
      <div className="w-full xl:px-20 py-5 overflow-hidden">
        {/* <Card /> */}
        <ComponentTransition className="w-full flex flex-col   gap-5 justify-start  items-start">
      {StakingItem?.map((item, index) => (
        <motion.div
          key={index}
          className={clsx(
            open === index ? "lg:h-[300px] h-[550px]" : "lg:h-[90px] h-[300px]",
            "w-full transition-all duration-300  relative top-0 bg-gradient-to-b from-[#1F1F1F] to-neutral-800 px-5 py-5 rounded-3xl flex-col flex justify-between items-center "
          )}
        >
          <motion.div
            className={clsx(`absolute inset-0 glowcard z-0 rounded-3xl`)}
          ></motion.div>
          <div className="w-full lg:flex-row flex-col flex justify-between gap-10 relative">
            <div
              className={`flex items-center justify-between gap-3 lg:gap-10 hover:cursor-pointer`}
              onClick={() => handleOpen(index)}
            >
              <div className="flex items-center">
                <Image
                  className="w-full h-auto"
                  src={item.iconCrypto1}
                  alt="Coin Bit Estate"
                  width={40}
                  height={40}
                />
                <FaEthereum size={40} />
              </div>
              <div className="flex items-center">
                <h1 className="text-xl font-semibold">
                  {item.titleCrypto1} - {item.titleCrypto2}
                </h1>
              </div>

              {/* Button More Dekstop */}
              <div className="flex lg:hidden justify-start items-center relative  ">
                <button className="w-auto bg-neutral-700 flex justify-center items-center px-3 py-3 rounded-2xl">
                  <HiEllipsisVertical size={30} />
                </button>
              </div>

            </div>
            <div className={`flex  gap-14 items-center`}>
              <div className="">
                <h1>APR</h1>
                <h1>{item.apr}</h1>
              </div>
              <div>
                <h1>Reward</h1>
                <h1>{item.reward}</h1>
              </div>
              <div>
                <h1>Earned</h1>
                <h1 className="text-lg font-medium text-[#01a2e9]">
                  {item.earned}
                </h1>
              </div>
            </div>
            <div className={`hidden lg:flex gap-1 items-center `}>
              <div className="w-full flex items-center ">
                <button className="w-full flex items-center gap-1 px-5 py-2 rounded-3xl bg-[#01a2e9]">
                  <RiDownloadLine size={15} />
                  <h1>Claim</h1>
                </button>
              </div>
            </div>

            {/* Button More Mobile */}
            <div className="lg:flex hidden justify-start items-center relative  ">
              <button
                
                className="w-auto bg-neutral-700 flex justify-center items-center px-3 py-3 rounded-2xl"
              >
                <HiEllipsisVertical size={20} />
              </button>
            </div>

          </div>
          <div
            className={clsx(
              open === index ? "block" : "hidden",
              `w-full flex flex-col gap-5 items-start relative`
            )}
          >
            <div className="w-full gap-5 grid sm:grid-cols-2  md:grid-cols-3 items-center">
              <div className="w-full flex flex-col">
                <h1>Your Deposit</h1>
                <h1 className="text-4xl font-semibold">
                  {item.deposit}{" "}
                  <span className="!text-xl !text-neutral-400">
                    {item.shortDeposit}
                  </span>
                </h1>
              </div>
              <div className="w-full flex flex-col">
                <h1>Share</h1>
                <h1 className="text-4xl font-semibold">
                  {item.share}
                  <span className="!text-xl !text-neutral-400">%</span>
                </h1>
              </div>

              <div className="w-full flex flex-col">
                <h1>Earning</h1>
                <h1 className="text-4xl font-semibold text-[#01a2e9]">
                  {item.earning}{" "}
                  <span className="!text-xl !text-neutral-400">
                    {item.shortEarning}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              open === index ? "block" : "hidden",
              `w-full relative`
            )}
          >
            <div className="w-full flex gap-5">
              <ButtonIcon
                onClick={() => handleOpenModal(index)}
                icon={<GoPlus size={20} />}
                title="Stake"
              />
              <ButtonIcon icon={<GrFormSubtract size={20} />} />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="">
        <AnimatePresence>
      {openModal && (
        <motion.div 
        initial={{
          translateY: 50,
          scale: 0.70,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1
        }}
        exit={{
          translateY: 50,
          scale: 0.70,
          opacity: 0
        }}
        className="w-[80%] md:w-[60%] xl:w-[50%] left-[10%] 2xl:w-[25%] mx-auto rounded-3xl flex  inset-44  h-[400px]  bg-neutral-900 fixed z-[999]">
          <div className="w-full justify-center items-center py-2 ">
            <button
              className=" w-auto flex items-end justify-end relative left-[80%] 2xl:left-[90%]"
              onClick={() => setOpenModal(!openModal)}
            >
              <GrFormClose size={50} />
            </button>
            <div className="w-auto flex justify-center items-center py-2">
              <div className="w-auto px-1 py-1 bg-[#3f3f3f88] rounded-2xl flex gap-2 overflow-hidden">
                <button
                  onClick={() => setChoice(!choice)}
                  className={clsx(
                    choice === false && "bg-[#01a2e9]",
                    `text-white px-3 py-2 rounded-[12px] transition-all duration-300`
                  )}
                >
                  <h1>Stake</h1>
                </button>
                <button
                  onClick={() => setChoice(!choice)}
                  className={clsx(
                    choice === true && "bg-[#01a2e9]",
                    `text-white px-3 py-2 rounded-[12px] transition-all duration-300`
                  )}
                >
                  <h1>Withdraw</h1>
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-10 py-5">
              <div className="flex flex-row flex-wrap w-full justify-between items-center">
                <div className="flex items-center gap-1">
                  {selectedIndex?.iconCrypto1 && (
                    <Image
                      className="w-full h-auto"
                      src={selectedIndex?.iconCrypto1}
                      alt="Coin Bit Estate"
                      width={20}
                      height={20}
                    />
                  )}
                  <h1 className="text-lg font-semibold">
                    {selectedIndex?.titleCrypto1}
                  </h1>
                </div>
                <div>Balance: $ {selectedIndex?.balance}</div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-10">
              <input
                type="number"
                className="w-full bg-transparent border-[1px] py-2 rounded-2xl px-2"
                placeholder="0.0"
              />
            </div>
            <div className="w-full flex justify-end items-end px-10 gap-3 mt-2">
              <div className="px-2 border-[1px] border-[#01a2e9] rounded-full">
                <h1>20%</h1>
              </div>
              <div className="px-2 border-[1px] border-[#01a2e9] rounded-full">
                <h1>50%</h1>
              </div>
              <div className="px-2 border-[1px] border-[#01a2e9] rounded-full">
                <h1>90%</h1>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-10 py-10">
              {/* Stake & Withdraw Button Logic */}

              {choice === false ? (
                <motion.button
                  className="px-5 py-2 bg-[#01a2e9] rounded-2xl w-full"
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <h1 className="text-black font-semibold">Stake</h1>
                </motion.button>
              ) : (
                <motion.button
                  className="px-5 py-2 bg-[#01a2e9] rounded-2xl w-full"
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <h1 className="text-black font-semibold">Withdraw</h1>
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      </div>
    </ComponentTransition>
      </div>
      <div
        className={`absolute  z-[-9] glowbg w-[200px] md:w-[300px] md:h-[300px] left-0 h-[200px] top-[250px]`}
      ></div>
    </div>
    </div>

  );
}


