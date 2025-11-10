import hair2 from "../assets/hairShop.jpg";
import hair3 from "../assets/hairShop2.jpg";
import hair4 from "../assets/hairShop3.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: hair4,
    alt: "살롱 인테리어",
  },
  {
    src: hair3,
    alt: "살롱 인테리어",
  },
  {
    src: hair2,
    alt: "살롱 인테리어",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-purple-600 mb-4">갤러리</h2>
          <p className="text-gray-600">담빛헤어의 작업 포트폴리오</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
