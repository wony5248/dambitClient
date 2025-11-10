import { Droplet, Palette, Scissors, Sparkles, Wind } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const services = [
  {
    icon: Scissors,
    title: "커트",
    description: "얼굴형과 헤어 스타일에 맞는 맞춤 커트",
    price: "22,000원~",
    details: [
      { name: "남성 컷", price: "22,000원" },
      { name: "남성 스켈프컷", price: "30,000원" },
      { name: "여성 컷", price: "27,000원" },
      { name: "학생 컷", price: "17,000원" },
      { name: "앞머리 컷", price: "3,000원" },
    ],
  },
  {
    icon: Palette,
    title: "염색",
    description: "트렌디한 컬러부터 자연스러운 톤까지",
    price: "65,000원~",
    details: [
      { name: "새치(뿌리) 염색", price: "65,000원" },
      { name: "전체 염색", price: "95,000원" },
    ],
  },
  {
    icon: Sparkles,
    title: "펌",
    description: "볼륨펌, 웨이브펌 등 다양한 스타일",
    price: "65,000원~",
    details: [
      { name: "다운펌 (커트는 별도입니다.)", price: "20,000원" },
      { name: "일반펌", price: "65,000원" },
      { name: "볼륨펌", price: "75,000원" },
      { name: "드라이펌", price: "85,000원" },
      { name: "크리닉펌", price: "100,000원" },
      { name: "매직펌", price: "150,000원" },
      { name: "셋팅펌", price: "130,000원" },
      { name: "매직셋팅", price: "250,000원" },
      { name: "앞머리펌(커트는 별도입니다.)", price: "25,000원" },
    ],
  },
  {
    icon: Droplet,
    title: "클리닉",
    description: "손상된 모발을 위한 집중 케어",
    price: "50,000원~",
    details: [
      { name: "두피 클리닉", price: "50,000원" },
      { name: "모발 클리닉", price: "70,000원" },
      { name: "[수분&윤기충전 200%]파워골드 클리닉", price: "150,000원" },
    ],
  },
  {
    icon: Wind,
    title: "스타일링",
    description: "특별한 날을 위한 완벽한 스타일링",
    price: "15,000원~",
    details: [
      { name: "[피로야 가라! 만원의 행복] 힐링 샴푸", price: "20,000원" },
      { name: "[오늘의 주인공] 드라이", price: "25,000원" },
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-purple-600 mb-4">서비스</h2>
          <p className="text-gray-600">담빛헤어가 제공하는 전문 헤어 서비스</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                onClick={() => setSelectedService(service)}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-600">{service.price}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 🟣 모달 영역 */}
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="max-w-md">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-purple-700 flex items-center gap-2">
                  <selectedService.icon className="w-5 h-5" />
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-3">
                {selectedService.details.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="text-gray-700">{item.name}</span>
                    <span className="text-purple-600 font-medium">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                >
                  닫기
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
