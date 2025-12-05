import Image from "next/image";

export default function Gallery() {
  const photos = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-semibold mb-5">Our Gallery</h2>

      <div className="grid grid-cols-3 gap-4">
        {photos.map((img, i) => (
          <Image 
            key={i}
            src={img}
            width={400}
            height={300}
            alt="School Photo"
          />
        ))}
      </div>
    </section>
  );
}
