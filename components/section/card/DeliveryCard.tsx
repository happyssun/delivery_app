"use client";

import Image from "next/image";

const deliveryIcons = [
  {
    iconURL: "/images/foods/pizza.png",
    title: "패스트푸드",
  },
  {
    iconURL: "/images/foods/bibimbap.png",
    title: "한식",
  },

  {
    iconURL: "/images/foods/ramen.png",
    title: "일식",
  },
  {
    iconURL: "/images/foods/salad.png",
    title: "건강식",
  },
  {
    iconURL: "/images/foods/diet.png",
    title: "다이어트식",
  },
  {
    iconURL: "/images/foods/pizza.png",
    title: "패스트푸드",
  },
  {
    iconURL: "/images/foods/bibimbap.png",
    title: "한식",
  },

  {
    iconURL: "/images/foods/ramen.png",
    title: "일식",
  },
  {
    iconURL: "/images/foods/salad.png",
    title: "건강식",
  },
  {
    iconURL: "/images/foods/diet.png",
    title: "다이어트식",
  },
];
export default function DeliveryCard() {
  return (
    <>
      <div className="p-2">
        <div className="w-full flex flex-col  bg-white p-2 rounded-xl">
          <div className="flex w-full justify-between">
            <div className="flex gap-2 items-center">
              <h2 className="text-xl font-bold">알뜰&middot;한집배달</h2>
              <p className="text-sm text-gray-700">
                <span className="bg-teal-300/20">배민1</span> 365일 할인 중!
              </p>
            </div>

            {/* arrow icon */}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-8 content-center items-center justify-center">
            {deliveryIcons.map((value: any, index: number) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center"
              >
                <Image
                  alt={value.title}
                  width={48}
                  height={48}
                  src={value.iconURL}
                ></Image>
                <p className="text-sm">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
