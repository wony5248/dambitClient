import { useState } from "react";
import { Booking } from "./components/Booking";
import { BookingManagement } from "./components/BookingManagement";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "management">("home");

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onViewChange={setCurrentView} />

      {currentView === "home" ? (
        <>
          <Hero />
          <Services />
          <Gallery />
          <Booking />
        </>
      ) : (
        <BookingManagement />
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">담빛헤어</h3>
              <p className="text-gray-400">
                당신의 아름다움을 위한 최고의 선택
              </p>
            </div>
            <div>
              <h3 className="mb-4">영업시간</h3>
              <p className="text-gray-400">
                월요일: 10:00 - 19:00
                <br />
                화요일: 10:00 - 19:00
                <br />
                수요일: 휴무
                <br />
                목요일: 10:00 - 19:00
                <br />
                금요일: 10:00 - 19:00
                <br />
                토요일: 10:00 - 19:00
                <br />
                일요일: 10:00 - 19:00
                <br />
              </p>
            </div>
            <div>
              <h3 className="mb-4">연락처</h3>
              <p className="text-gray-400">
                전화: 031-715-6601
                <br />
                주소: 경기 성남시 분당구 금곡동 206 대덕프라자 1층
                <br />
                이메일: info@dambithair.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 담빛헤어. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
