import hairShop from "../assets/hairShop4.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-purple-600 mb-4">담빛헤어</h1>
            <p className="text-gray-600 mb-8">
              고객님께 정성을 다하는 1:1 책임시술제 담빛헤어 입니다. <br />
              <br />
              당신만의 특별한 스타일을 완성해드립니다. 전문 헤어 디자이너가 최신
              트렌드와 개인의 매력을 조화롭게 표현합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToBooking} size="lg">
                지금 예약하기
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                size="lg"
              >
                서비스 보기
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={hairShop}
                alt="담빛헤어 살롱"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
