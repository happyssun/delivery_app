import DeliveryCard from "./card/DeliveryCard";
import MainCard from "./card/MainCard";

export default function MainSection() {
  const property = [
    {
      title: "배달",
      description: "세상은 넓고 맛집은 없다",
      imageURL: "/images/main/delivery.png",
    },
    {
      title: "B마트",
      description: "장보기도 더 빠르게",
      imageURL: "/images/main/mart.png",
    },
    {
      title: "배민스토어",
      description: "배달은 지금 옵니다",
      imageURL: "/images/main/store.png",
    },
  ];

  return (
    <section className="h-full  bg-gray-200">
      <div className="flex">
        {property.map((value: any, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
      <DeliveryCard />
      <div>banner Carousel</div>
      <div>icon menu</div>
      <div>우리동네</div>
    </section>
  );
}
