import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Phone, Scissors, Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Booking {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: string;
  createdAt: string;
}

const serviceNames: Record<string, string> = {
  cut: "커트",
  color: "염색",
  perm: "펌",
  treatment: "트리트먼트",
  "cut-color": "커트 + 염색",
  "cut-perm": "커트 + 펌",
};

export function BookingManagement() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const res = await fetch(`${API_URL}/bookings`, {
        method: "GET",
      });
      const bookings = await res.json();

      // 날짜순 정렬 (최신순)
      bookings.sort((a: Booking, b: Booking) => {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        return dateB.getTime() - dateA.getTime();
      });

      setBookings(bookings);
    } catch (error) {
      console.error("예약 목록 불러오기 실패:", error);
      toast.error("예약 정보를 불러오는 중 오류가 발생했습니다.");
    }
  };

  const deleteBooking = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/bookings/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("서버 에러");
      setBookings((prev) => prev.filter((b) => b.id !== id));
      toast.success("예약이 삭제되었습니다.");
    } catch (error) {
      toast.error("예약 삭제 중 오류가 발생했습니다.");
    }
  };

  const updateStatus = (id: string, newStatus: string) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    );
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
    toast.success("예약 상태가 변경되었습니다.");
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-purple-600 mb-2">예약 관리</h1>
          <p className="text-gray-600">전체 예약 {bookings.length}건</p>
        </div>

        {bookings.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">예약 내역이 없습니다.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        {booking.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4" />
                        {booking.phone}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        booking.status === "확정" ? "default" : "secondary"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Scissors className="w-4 h-4" />
                      <span>
                        {serviceNames[booking.service] || booking.service}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                  </div>

                  {booking.notes && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-700">
                        <span className="text-gray-500">요청사항:</span>{" "}
                        {booking.notes}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {booking.status === "확정" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(booking.id, "완료")}
                      >
                        완료 처리
                      </Button>
                    )}
                    {booking.status === "완료" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStatus(booking.id, "확정")}
                      >
                        확정으로 변경
                      </Button>
                    )}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4 mr-2" />
                          삭제
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            예약을 삭제하시겠습니까?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            이 작업은 되돌릴 수 없습니다. 예약 정보가 영구적으로
                            삭제됩니다.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>취소</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteBooking(booking.id)}
                          >
                            삭제
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
