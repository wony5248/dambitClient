import { Menu, Scissors, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentView: "home" | "management";
  onViewChange: (view: "home" | "management") => void;
}

export function Header({ currentView, onViewChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onViewChange("home")}
          >
            <Scissors className="w-8 h-8 text-purple-600" />
            <span className="text-purple-600">담빛헤어</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {currentView === "home" ? (
              <>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  홈
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  서비스
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  갤러리
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  예약
                </button>
                <Button
                  onClick={() => onViewChange("management")}
                  variant="outline"
                >
                  예약 관리
                </Button>
              </>
            ) : (
              <Button onClick={() => onViewChange("home")} variant="outline">
                홈으로
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {currentView === "home" ? (
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-left"
                >
                  홈
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-left"
                >
                  서비스
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-left"
                >
                  갤러리
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-gray-700 hover:text-purple-600 transition-colors text-left"
                >
                  예약
                </button>
                <Button
                  onClick={() => {
                    onViewChange("management");
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  예약 관리
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  onViewChange("home");
                  setMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full"
              >
                홈으로
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
