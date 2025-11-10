import { CalendarToday as CalendarIcon } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface BookingItem {
  id: number;
  name: string;
  date: string;
  time: string;
  service: string;
}

export function Booking() {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
    notes: "",
  });
  const [bookings, setBookings] = useState<BookingItem[]>([]); // ✅ 예약 목록 저장
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ];

  // ✅ 예약 목록 불러오기 함수
  const loadBookings = async () => {
    try {
      const res = await fetch("http://localhost:3000/bookings");
      const data = await res.json();

      data.sort((a: BookingItem, b: BookingItem) => {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        return dateB.getTime() - dateA.getTime();
      });

      setBookings(data);
    } catch (error) {
      console.error("예약 목록 불러오기 실패:", error);
      toast.error("예약 정보를 불러오는 중 오류가 발생했습니다.");
    }
  };

  // ✅ 컴포넌트 마운트 시 예약 목록 불러오기
  useEffect(() => {
    loadBookings();
  }, []);

  // ✅ 선택한 날짜의 예약된 시간대 목록
  const reservedTimes = date
    ? bookings
        .filter((b) => b.date === date.format("YYYY-MM-DD"))
        .map((b) => b.time)
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !date ||
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.time
    ) {
      toast.error("모든 필수 항목을 입력해주세요.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: date.format("YYYY-MM-DD"),
        }),
      });

      if (!res.ok) {
        toast.error("서버 에러");
        return;
      }

      toast.success("예약이 완료되었습니다!");
      loadBookings(); // ✅ 예약 완료 후 목록 갱신
    } catch (error) {
      toast.error("예약 중 오류가 발생했습니다.");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <section
        id="booking"
        style={{ padding: "80px 0", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Typography variant="h5" color="primary" gutterBottom>
              예약하기
            </Typography>
            <Typography color="text.secondary">
              원하시는 날짜와 시간을 선택해주세요
            </Typography>
          </div>

          <Card variant="outlined">
            <CardHeader
              title={<Typography variant="h6">예약 정보</Typography>}
              subheader="예약 후 담당자가 확인 연락을 드립니다"
            />
            <CardContent>
              <form
                onSubmit={handleSubmit}
                style={{ display: "grid", gap: 24 }}
              >
                <TextField
                  label="이름 *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  fullWidth
                />
                <TextField
                  label="연락처 *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  fullWidth
                />

                {/* 서비스 선택 */}
                <FormControl fullWidth>
                  <InputLabel>서비스 *</InputLabel>
                  <Select
                    value={formData.service}
                    label="서비스 *"
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <ListSubheader
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      ✂️ 커트
                    </ListSubheader>
                    <MenuItem value="남성 컷">남성 컷 (22,000원)</MenuItem>
                    <MenuItem value="남성 스켈프컷">
                      남성 스켈프컷 (30,000원)
                    </MenuItem>
                    <MenuItem value="여성 컷">여성 컷 (27,000원)</MenuItem>
                    <MenuItem value="학생 컷">학생 커트 (17,000원)</MenuItem>
                    <MenuItem value="앞머리 컷">앞머리 컷 (3,000원)</MenuItem>

                    <ListSubheader
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      🎨 염색
                    </ListSubheader>
                    <MenuItem value="전체 염색">전체 염색 (95,000원)</MenuItem>
                    <MenuItem value="새치(뿌리) 염색">
                      새치(뿌리) 염색 (65,000원)
                    </MenuItem>

                    <ListSubheader
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      ✨ 펌
                    </ListSubheader>
                    <MenuItem value="일반펌">일반펌 (65,000원)</MenuItem>
                    <MenuItem value="볼륨펌">볼륨펌 (75,000원)</MenuItem>
                    <MenuItem value="드라이펌">드라이펌 (85,000원)</MenuItem>
                    <MenuItem value="크리닉펌">크리닉펌 (100,000원)</MenuItem>
                    <MenuItem value="매직펌">매직펌 (150,000원)</MenuItem>
                    <MenuItem value="셋팅펌">셋팅펌 (130,000원)</MenuItem>
                    <MenuItem value="매직셋팅">매직셋팅 (250,000원)</MenuItem>
                    <MenuItem value="앞머리펌">
                      앞머리펌(커트는 별도입니다.) (25,000원)
                    </MenuItem>
                    <ListSubheader
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      💧 클리닉
                    </ListSubheader>
                    <MenuItem value="두피 클리닉">
                      두피 클리닉 (50,000원)
                    </MenuItem>
                    <MenuItem value="모발 클리닉">
                      모발 클리닉 (70,000원)
                    </MenuItem>
                    <MenuItem value="파워골드 클리닉">
                      [수분&윤기충전 200%]파워골드 클리닉 (150,000원)
                    </MenuItem>
                    <ListSubheader
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      💨 스타일링
                    </ListSubheader>
                    <MenuItem value="힐링 샴푸">힐링 샴푸 (20,000원)</MenuItem>
                    <MenuItem value="드라이">드라이 (25,000원)</MenuItem>
                  </Select>
                </FormControl>

                {/* 날짜 선택 */}
                <DatePicker
                  label="예약 날짜 *"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                    setFormData({ ...formData, time: "" }); // ✅ 날짜 바꾸면 시간 초기화
                  }}
                  disablePast
                  slots={{ openPickerIcon: CalendarIcon }}
                  slotProps={{
                    textField: { fullWidth: true, variant: "outlined" },
                  }}
                />

                {/* 시간 선택 */}
                <FormControl fullWidth disabled={!date}>
                  {" "}
                  {/* ✅ 날짜 선택 전 비활성화 */}
                  <InputLabel>시간 *</InputLabel>
                  <Select
                    value={formData.time}
                    label="시간 *"
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                  >
                    {timeSlots.map((time) => {
                      const isReserved = reservedTimes.includes(time);
                      return (
                        <MenuItem
                          key={time}
                          value={time}
                          disabled={isReserved} // ✅ 예약된 시간 비활성화
                        >
                          {time}
                          {isReserved && " (예약됨)"}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <TextField
                  label="요청사항"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  multiline
                  rows={4}
                  fullWidth
                />

                <Button type="submit" variant="contained" size="large">
                  예약하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity as any} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}
