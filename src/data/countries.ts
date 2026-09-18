import type { Country } from "@/types";

export const countries: Country[] = [
  {
    id: "1",
    slug: "dai-loan",
    name: "Đài Loan",
    flag: "🇹🇼",
    image: "/images/taiwan.jpg",
    cost: "150 - 300 triệu/năm",
    duration: "4 năm",
    description:
      "Đài Loan là điểm đến du học hàng đầu với chi phí hợp lý, môi trường học tập tiên tiến và cơ hội việc làm sau tốt nghiệp rất cao.",
    partTimeWage: "168 NTD/giờ (~130.000 VNĐ)",
    topCities: ["Đài Bắc", "Đài Trung", "Cao Hùng", "Tân Trúc"],
    conditions: [
      "Tốt nghiệp THPT",
      "Điểm GPA từ 6.5 trở lên",
      "Chứng minh tài chính 200 triệu",
      "Không yêu cầu IELTS/TOEFL (có thể học tiếng Trung)",
    ],
    topUniversities: [
      { name: "Đại học Quốc gia Đài Loan (NTU)", ranking: "Top 100 thế giới", location: "Đài Bắc" },
      { name: "Đại học Thanh Hoa Quốc gia (NTHU)", ranking: "Top 200 thế giới", location: "Tân Trúc" },
      { name: "Đại học Chính Trị Quốc gia (NCCU)", location: "Đài Bắc" },
      { name: "Đại học Sư phạm Quốc gia (NTNU)", location: "Đài Bắc" },
    ],
    scholarships: [
      "Học bổng Chính phủ Đài Loan (MOE) - 15.000 NTD/tháng",
      "Học bổng ICDF - Toàn phần",
      "Học bổng của từng trường đại học",
    ],
    faqs: [
      {
        question: "Chi phí sinh hoạt ở Đài Loan như thế nào?",
        answer: "Chi phí sinh hoạt khoảng 8-12 triệu VNĐ/tháng bao gồm thuê nhà, ăn uống và đi lại.",
      },
      {
        question: "Sinh viên có được đi làm thêm không?",
        answer: "Có, sinh viên được phép làm thêm tối đa 20 giờ/tuần với mức lương tối thiểu 168 NTD/giờ.",
      },
    ],
    pros: ["Chi phí thấp", "Học bổng nhiều", "An toàn", "Dễ xin Visa", "Cộng đồng người Việt lớn"],
  },
  {
    id: "2",
    slug: "trung-quoc",
    name: "Trung Quốc",
    flag: "🇨🇳",
    image: "/images/china.jpg",
    cost: "80 - 200 triệu/năm",
    duration: "4 năm",
    description:
      "Trung Quốc là điểm đến du học với chi phí rất hợp lý, nhiều học bổng hấp dẫn từ chính phủ, nền giáo dục ngày càng phát triển và cơ hội nghề nghiệp rộng mở trong bối cảnh kinh tế tăng trưởng mạnh.",
    partTimeWage: "15 - 25 CNY/giờ (~50.000 VNĐ)",
    topCities: ["Bắc Kinh", "Thượng Hải", "Quảng Châu", "Thâm Quyến", "Thành Đô"],
    conditions: [
      "Tốt nghiệp THPT",
      "Điểm GPA từ 6.0 trở lên",
      "Chứng minh tài chính 150 triệu",
      "HSK 3 trở lên hoặc học dự bị tiếng Trung 1 năm",
    ],
    topUniversities: [
      { name: "Đại học Bắc Kinh (PKU)", ranking: "Top 20 thế giới", location: "Bắc Kinh" },
      { name: "Đại học Thanh Hoa (THU)", ranking: "Top 20 thế giới", location: "Bắc Kinh" },
      { name: "Đại học Phục Đán", ranking: "Top 50 thế giới", location: "Thượng Hải" },
      { name: "Đại học Giao thông Thượng Hải (SJTU)", ranking: "Top 60 thế giới", location: "Thượng Hải" },
    ],
    scholarships: [
      "Học bổng Chính phủ Trung Quốc (CSC) - Toàn phần",
      "Học bổng Khổng Tử - Học tiếng Trung miễn phí",
      "Học bổng tỉnh/thành phố - Bán phần",
      "Học bổng của từng trường đại học",
    ],
    faqs: [
      {
        question: "Chi phí sinh hoạt ở Trung Quốc như thế nào?",
        answer: "Chi phí sinh hoạt khoảng 5-10 triệu VNĐ/tháng tùy thành phố. Các thành phố nhỏ sẽ rẻ hơn Bắc Kinh hay Thượng Hải.",
      },
      {
        question: "Có cần biết tiếng Trung không?",
        answer: "Không bắt buộc ban đầu. Bạn có thể học dự bị tiếng Trung 1 năm trước khi vào chương trình chính. Nhiều trường cũng có chương trình dạy bằng tiếng Anh.",
      },
    ],
    pros: ["Chi phí rất thấp", "Học bổng CSC hấp dẫn", "Nền kinh tế lớn thứ 2 thế giới", "Gần Việt Nam", "Nhiều ngành đào tạo"],
  },
  {
    id: "3",
    slug: "nhat-ban",
    name: "Nhật Bản",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    cost: "300 - 500 triệu/năm",
    duration: "2-4 năm",
    description:
      "Nhật Bản nổi tiếng với nền giáo dục chất lượng cao, công nghệ tiên tiến và văn hóa độc đáo. Cơ hội việc làm sau tốt nghiệp rất rộng mở.",
    partTimeWage: "1.000 - 1.500 Yên/giờ (~170.000 VNĐ)",
    topCities: ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Fukuoka"],
    conditions: [
      "Tốt nghiệp THPT hoặc Cao đẳng",
      "Học tiếng Nhật N5 trở lên (hoặc học dự bị 1-2 năm)",
      "Chứng minh tài chính 300 triệu",
      "Lý lịch tư pháp sạch",
    ],
    topUniversities: [
      { name: "Đại học Tokyo", ranking: "Top 30 thế giới", location: "Tokyo" },
      { name: "Đại học Kyoto", ranking: "Top 50 thế giới", location: "Kyoto" },
      { name: "Đại học Osaka", ranking: "Top 100 thế giới", location: "Osaka" },
      { name: "Đại học Waseda", location: "Tokyo" },
    ],
    scholarships: [
      "Học bổng MEXT - Toàn phần (Chính phủ Nhật)",
      "Học bổng JASSO - 48.000 Yên/tháng",
      "Học bổng của từng trường đại học",
    ],
    faqs: [
      {
        question: "Có cần biết tiếng Nhật để du học không?",
        answer: "Hầu hết các trường yêu cầu tiếng Nhật N2 hoặc N1. Bạn có thể học dự bị 1-2 năm trước khi vào đại học.",
      },
      {
        question: "Chi phí sinh hoạt ở Nhật như thế nào?",
        answer: "Chi phí khoảng 15-25 triệu VNĐ/tháng tùy thành phố. Tokyo đắt nhất.",
      },
    ],
    pros: ["Công nghệ tiên tiến", "Văn hóa phong phú", "Học bổng nhiều", "Việc làm tốt", "An toàn"],
  },
  {
    id: "4",
    slug: "han-quoc",
    name: "Hàn Quốc",
    flag: "🇰🇷",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80",
    cost: "200 - 400 triệu/năm",
    duration: "4 năm",
    description:
      "Hàn Quốc thu hút sinh viên với văn hóa K-pop, K-drama, công nghệ hiện đại và các trường đại học top châu Á.",
    partTimeWage: "9.860 KRW/giờ (~190.000 VNĐ)",
    topCities: ["Seoul", "Busan", "Daegu", "Incheon"],
    conditions: [
      "Tốt nghiệp THPT",
      "GPA từ 7.0 trở lên",
      "Không cần tiếng Hàn (có thể học khóa tiếng Hàn 1 năm)",
      "Chứng minh tài chính 250 triệu",
    ],
    topUniversities: [
      { name: "Đại học Quốc gia Seoul (SNU)", ranking: "Top 50 châu Á", location: "Seoul" },
      { name: "Đại học Yonsei", ranking: "Top 100 thế giới", location: "Seoul" },
      { name: "Đại học Korea (KU)", location: "Seoul" },
      { name: "Đại học Sungkyunkwan (SKKU)", location: "Seoul" },
    ],
    scholarships: [
      "Học bổng GKS (Chính phủ Hàn Quốc) - Toàn phần",
      "Học bổng KGSP - 900.000 KRW/tháng",
      "Học bổng của từng trường đại học",
    ],
    faqs: [
      {
        question: "Văn hóa sống ở Hàn Quốc như thế nào?",
        answer: "Hàn Quốc có văn hóa sống hiện đại, an toàn và thuận tiện với hệ thống giao thông công cộng xuất sắc.",
      },
    ],
    pros: ["Văn hóa trẻ trung", "Học bổng hấp dẫn", "Cơ hội việc làm tốt", "Gần Việt Nam"],
  },
];

export const featuredCountries = countries.slice(0, 4);
