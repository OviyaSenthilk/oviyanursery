import Image from "next/image";

export default function Gallery() {
  const photos = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="px-4 sm:px-8 md:px-12 py-16 bg-white text-gray-900"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Our Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((img, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg bg-gray-100"
          >
            <Image
              src={img}
              alt="School Photo"
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 active:scale-100"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
