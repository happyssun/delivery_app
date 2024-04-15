import Image from "next/image";

export default function MainCard({ property }: { property: any }) {
  return (
    <>
      <div className="relative w-full p-2 jestify-between gap-2 ">
        <div className="w-full p-2 bg-white  h-32 rounded-xl">
          <div className="flex flex-col w-full">
            <h2 className="text-xl font-blod">{property.title}</h2>
            <p className="w-24">{property.description}</p>
          </div>
        </div>

        {/* image url */}
        <Image
          src={property.imageURL}
          alt={property.title}
          height={720}
          width={720}
          className="absolute right-4 bottom-4 bg-teal-300 w-10 h-10 rounded-full"
        />
      </div>
    </>
  );
}
