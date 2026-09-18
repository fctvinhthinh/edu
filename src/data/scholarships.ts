import type { Scholarship } from "@/types";

export const scholarships: Scholarship[] = [
  {
    id: "1",
    title: "Học bổng MOE Đài Loan 2025",
    country: "Đài Loan",
    value: "15.000 - 20.000 NTD/tháng",
    deadline: "2025-04-30",
    level: "Đại học, Thạc sĩ",
    conditions: [
      "GPA từ 7.0 trở lên",
      "Không phải công dân Đài Loan",
      "Được chấp nhận vào trường đại học Đài Loan",
      "Không nhận học bổng khác từ Chính phủ Đài Loan",
    ],
    description:
      "Học bổng của Bộ Giáo dục Đài Loan (MOE) dành cho sinh viên quốc tế, hỗ trợ học phí và sinh hoạt phí hàng tháng.",
    link: "/hoc-bong/moe-dai-loan-2025",
  },
  {
    id: "2",
    title: "Học bổng ICDF Đài Loan 2025",
    country: "Đài Loan",
    value: "Toàn phần (học phí + 15.000 NTD/tháng + vé máy bay)",
    deadline: "2025-03-31",
    level: "Đại học, Thạc sĩ, Tiến sĩ",
    conditions: [
      "Công dân các nước đang phát triển",
      "GPA từ 8.0 trở lên",
      "Không quá 40 tuổi",
      "Sức khỏe tốt",
    ],
    description:
      "Học bổng ICDF (International Cooperation and Development Fund) của Đài Loan là học bổng toàn phần bao gồm học phí, sinh hoạt phí và vé máy bay khứ hồi.",
    link: "/hoc-bong/icdf-dai-loan-2025",
  },
  {
    id: "3",
    title: "Học bổng Chính phủ Trung Quốc CSC 2025",
    country: "Trung Quốc",
    value: "Toàn phần (học phí + 2.500 CNY/tháng + ký túc xá)",
    deadline: "2025-04-30",
    level: "Đại học, Thạc sĩ, Tiến sĩ",
    conditions: [
      "Không phải công dân Trung Quốc",
      "GPA từ 7.5 trở lên",
      "Dưới 25 tuổi (Đại học), dưới 35 tuổi (Thạc sĩ)",
      "Sức khỏe tốt",
    ],
    description:
      "Học bổng Chính phủ Trung Quốc (CSC - China Scholarship Council) là học bổng toàn phần danh giá nhất Trung Quốc, bao gồm học phí, ký túc xá và sinh hoạt phí hàng tháng.",
    link: "/hoc-bong/csc-trung-quoc-2025",
  },
  {
    id: "4",
    title: "Học bổng Khổng Tử (Confucius Institute) 2025",
    country: "Trung Quốc",
    value: "Học phí + 2.000 CNY/tháng",
    deadline: "2025-05-31",
    level: "Đại học",
    conditions: [
      "Tốt nghiệp THPT",
      "Có HSK 2 trở lên hoặc đam mê tiếng Trung",
      "Không quá 25 tuổi",
      "Hạnh kiểm tốt",
    ],
    description:
      "Học bổng Viện Khổng Tử dành cho sinh viên muốn học tiếng Trung và văn hóa Trung Quốc, được cấp bởi Hanban (Văn phòng Hội đồng Ngôn ngữ Trung Quốc Quốc tế).",
    link: "/hoc-bong/khong-tu-2025",
  },
  {
    id: "5",
    title: "Học bổng Chính phủ Nhật Bản MEXT 2025",
    country: "Nhật Bản",
    value: "Toàn phần (học phí + ~117.000 Yên/tháng)",
    deadline: "2025-05-15",
    level: "Đại học, Thạc sĩ, Tiến sĩ",
    conditions: [
      "Tuổi từ 17-25 (bậc đại học)",
      "Điểm GPA từ 8.0 trở lên",
      "Sức khỏe tốt",
      "Không mang quốc tịch Nhật",
    ],
    description:
      "Học bổng MEXT (Monbukagakusho) là học bổng danh giá nhất của Chính phủ Nhật Bản, bao gồm toàn bộ học phí, vé máy bay và trợ cấp sinh hoạt.",
    link: "/hoc-bong/mext-2025",
  },
  {
    id: "6",
    title: "Học bổng Chính phủ Hàn Quốc GKS 2025",
    country: "Hàn Quốc",
    value: "Toàn phần (học phí + 900.000 KRW/tháng)",
    deadline: "2025-03-31",
    level: "Đại học, Thạc sĩ, Tiến sĩ",
    conditions: [
      "Tuổi dưới 25 (bậc đại học)",
      "GPA từ 8.0 trở lên",
      "Không có quốc tịch Hàn",
      "Sức khỏe tốt",
    ],
    description:
      "Học bổng GKS (Global Korea Scholarship) do Chính phủ Hàn Quốc tài trợ, bao gồm học phí toàn phần, trợ cấp sinh hoạt và khóa học tiếng Hàn 1 năm.",
    link: "/hoc-bong/gks-2025",
  },
];
