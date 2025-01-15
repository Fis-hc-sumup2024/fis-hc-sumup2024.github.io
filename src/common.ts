export const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export function randomNumber() {
  return Math.floor(Math.random() * 1001);
}

export function getRandomWithIgnore(ignore: number[] = []): number {
  const range = 130;
  let randomNumber: number;

  do {
    randomNumber = Math.floor(Math.random() * range) + 1;
  } while (ignore.includes(randomNumber));

  return randomNumber;
}

export function getRandomItemByDiagnosId(
  diagnosId: number
): (typeof diagnosItems)[number] | null {
  const filteredItems = diagnosItems.filter(
    (item) => item.diagnosId === diagnosId
  );

  if (filteredItems.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filteredItems.length);
  return filteredItems[randomIndex];
}

export const regexValidAccount = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;

export const diagnosCategories = [
  {
    id: 1,
    diagnosName: "Viêm màng túi",
  },
  {
    id: 2,
    diagnosName: "Sợ thứ hai",
  },
  {
    id: 3,
    diagnosName: "Lười vận động mãn tính",
  },
  {
    id: 4,
    diagnosName: "Ám ảnh deadline",
  },
  {
    id: 5,
    diagnosName: "Nghiện cà phê",
  },
  {
    id: 6,
    diagnosName: "Gõ bàn phím giả vờ bận",
  },
  {
    id: 7,
    diagnosName: "Teamwork nhưng thành Tao-work",
  },
  {
    id: 8,
    diagnosName: "Họp lằm họp lốn",
  },
  {
    id: 9,
    diagnosName: "Ám ảnh thưởng Tết",
  },
  {
    id: 10,
    diagnosName: "Thất lạc đồ văn phòng mãn tính",
  },
];

export const diagnosItems = [
  {
    id: 1,
    diagnosId: 1,
    treatment: {
      "Phương pháp điều trị": "Hít thở và chấp nhận thực tại",
      "Liều dùng":
        "Thực hiện 3 lần mỗi ngày, đặc biệt là sau khi nhìn số dư tài khoản",
    },
  },
  {
    id: 2,
    diagnosId: 1,
    treatment: {
      "Liệu pháp điều trị": "Tắt app Shopee và Lazada",
      "Lời khuyên":
        "Nếu không mua thì bạn không mất tiền. Nếu không mở app thì bạn không thấy sale. Vậy là bạn … khỏi bệnh",
    },
  },
  {
    id: 3,
    diagnosId: 1,
    treatment: {
      "Cách chữa dân gian": "Xem số dư tài khoản mỗi sáng",
      "Lời khuyên":
        "Nhìn số dư tài khoản đủ lâu, bạn sẽ học được cách yêu những gì mình đang có: Ví rỗng và lòng tự trọng!",
    },
  },
  {
    id: 4,
    diagnosId: 1,
    treatment: {
      "Châm cứu tâm lý": "Xin ứng lương sớm",
      "Lời khuyên":
        "Hôm nay ứng lương, ngày mai ăn mì. Đổi bữa hôm nay để no bụng ngày mai",
    },
  },
  {
    id: 5,
    diagnosId: 1,
    treatment: {
      "Phẫu thuật ví": "Tiền ít tiêu nhỏ",
      "Lời khuyên": "Bớt tiêu tiền là cách tốt nhất để giữ ví còn nguyên màng",
    },
  },
  {
    id: 6,
    diagnosId: 1,
    treatment: {
      "Liệu pháp tâm linh": "Tụng kinh túi rỗng",
      "Lời khuyên":
        "Tâm an thì túi khoẻ. Nhưng đừng quên nhắn sếp chuyển lương đúng hạn",
    },
  },
  {
    id: 7,
    diagnosId: 1,
    treatment: {
      "Điều trị dứt điểm": "Tìm người yêu giàu",
      "Lời khuyên":
        "Túi của mình rỗng, nhưng túi của ai đó có thể đầy. Hãy cùng nhau chữa bệnh viêm màng túi",
    },
  },
  {
    id: 8,
    diagnosId: 1,
    treatment: {
      "Vaccine phòng bệnh": "Không lướt TikTok lúc sale",
      "Lời khuyên":
        "Không thấy quảng cáo thì không có nhu cầu. Đó là sự thật, không phải lý thuyết!",
    },
  },
  {
    id: 9,
    diagnosId: 1,
    treatment: {
      "Bài thuốc thần kỳ": "Gọi mẹ mỗi ngày",
      "Lời khuyên":
        "Mẹ luôn là bác sĩ chữa bệnh viêm màng túi nhanh nhất, nhưng nhớ đừng lạm dụng liều quá thường xuyên nhé",
    },
  },
  {
    id: 10,
    diagnosId: 1,
    treatment: {
      "Phương pháp tâm lý": "Lạc quan khi túi không có gì",
      "Lời khuyên":
        "Không có tiền thì không sợ bị trộm, sống an yên là cách chữa bệnh tuyệt vời",
    },
  },
  {
    id: 11,
    diagnosId: 1,
    treatment: {
      "Thực đơn": "Ăn mì cứu đói",
      "Lời khuyên": "Còn mì là còn sống, ví rỗng mà bụng vẫn no",
    },
  },
  {
    id: 12,
    diagnosId: 1,
    treatment: {
      "Vaccine phòng bệnh": "Ngưng lướt Shopee",
      "Lời khuyên": "Giỏ hàng trống, ví sẽ đầy",
    },
  },
  {
    id: 13,
    diagnosId: 1,
    treatment: {
      "Chương trình": "Vé máy bay về tuổi thơ",
      "Lời khuyên": "Cơm nhà luôn là món ăn chữa lành chiếc ví",
    },
  },
  {
    id: 14,
    diagnosId: 1,
    treatment: {
      "Liệu pháp": "Thẻ tích lũy niềm đau",
      "Lời khuyên": "Tiết kiệm là chiếc cầu nối từ ví rỗng đến tài khoản đầy",
    },
  },
  {
    id: 15,
    diagnosId: 1,
    treatment: {
      "Tập yoga": "Thả lỏng nhu cầu",
      "Lời khuyên": "Tâm tĩnh, ví đầy",
    },
  },
  {
    id: 16,
    diagnosId: 2,
    treatment: {
      "Liệu pháp tâm lý": "Xem Thứ Hai là … Thứ Sáu",
      "Lời khuyên":
        "Thứ Hai không đáng sợ, chỉ cần bạn quên hôm nay là ngày gì",
    },
  },
  {
    id: 17,
    diagnosId: 2,
    treatment: {
      "Trị liệu tâm lý": "Khen sếp mỗi sáng Thứ Hai",
      "Lời khuyên": "Tâm lý tốt, Thứ Hai sẽ nhẹ như không",
    },
  },
  {
    id: 18,
    diagnosId: 2,
    treatment: {
      "Bài thuốc thần kỳ": "Đếm ngược đến Thứ Bảy",
      "Lời khuyên": "Từng bước nhỏ, cuối tuần không xa",
    },
  },
  {
    id: 19,
    diagnosId: 2,
    treatment: {
      Vaccine: "Chủ Nhật không overthinking",
      "Lời khuyên":
        "Không có Thứ Hai đáng sợ, chỉ có Chủ Nhật nghĩ nhiều mà thôi",
    },
  },
  {
    id: 20,
    diagnosId: 2,
    treatment: {
      "Phương pháp": "Đừng để đồng hồ báo thức làm bạn đau đớn",
      "Lời khuyên": "Thức dậy nhẹ nhàng, Thứ Hai bỗng nhiên dễ thương",
    },
  },
  {
    id: 21,
    diagnosId: 2,
    treatment: {
      "Gói trị liệu": "Thưởng bản thân",
      "Lời khuyên": "Mỗi Thứ Hai là một cơ hội để nhận thưởng",
    },
  },
  {
    id: 22,
    diagnosId: 2,
    treatment: {
      "Phương pháp tự chữa": "Tăng lương",
      "Lời khuyên": "Khi lương đủ cao, Thứ Hai chỉ là một ngày đẹp trời ^^",
    },
  },
  {
    id: 23,
    diagnosId: 2,
    treatment: {
      "Dùng trà thảo mộc": "Thứ Hai hổng sợ ai",
      "Lời khuyên": "Trà này uống vào, Thứ Hai cũng phải sợ bạn",
    },
  },
  {
    id: 24,
    diagnosId: 2,
    treatment: {
      "Dùng cao dán": "Hết sợ Thứ Hai",
      "Lời khuyên": "Niềm tin là sức mạnh, Thứ Hai sẽ không thắng nổi bạn!",
    },
  },
  {
    id: 25,
    diagnosId: 2,
    treatment: {
      "Dùng mũ bảo hộ": "Chống sét tâm lý Thứ Hai",
      "Lời khuyên": "Tâm lý vững, Thứ Hai chẳng là gì",
    },
  },
  {
    id: 26,
    diagnosId: 2,
    treatment: {
      "Dùng thuốc nhỏ mắt": "Xóa sổ Thứ Hai",
      "Lời khuyên": "Đôi mắt mờ, Thứ Hai không rõ mặt",
    },
  },
  {
    id: 27,
    diagnosId: 3,
    treatment: {
      Vaccine: "Chạy bộ 5s",
      "Lời khuyên":
        "Hãy bắt đầu bằng bước nhỏ, vì dù gì ngồi một chỗ cũng chẳng làm bạn giàu hơn đâu",
    },
  },
  {
    id: 28,
    diagnosId: 3,
    treatment: {
      "Bài thuốc": "Chơi game thực tế ảo",
      "Lời khuyên":
        "Nếu không muốn vận động thật, hãy vận động trong game. Miễn là bạn không ngồi yên",
    },
  },
  {
    id: 29,
    diagnosId: 3,
    treatment: {
      "Đơn thuốc": "Dọn nhà giải toả tâm trí",
      "Lời khuyên":
        "Sạch nhà sạch cả bệnh, bạn không chỉ vận động mà còn được sống trong sự ngăn nắp",
    },
  },
  {
    id: 30,
    diagnosId: 3,
    treatment: {
      "Liệu pháp": "Mèo kêu cứu",
      "Lời khuyên": "Một chú mèo năng động, một trái tim khoẻ mạnh hơn",
    },
  },
  {
    id: 31,
    diagnosId: 3,
    treatment: {
      Vaccine: "10 bước thần kỳ",
      "Lời khuyên":
        "10 bước mỗi giờ là liều thuốc thần kỳ, đẩy lùi bệnh lười vận động mãn tính",
    },
  },
  {
    id: 32,
    diagnosId: 3,
    treatment: {
      "Liệu pháp": "Đi bộ trốn deadline",
      "Lời khuyên": "Không ai có thể phạt bạn vì trốn việc… để vận động",
    },
  },
  {
    id: 33,
    diagnosId: 3,
    treatment: {
      "Thực đơn": "Nước 3 lít",
      "Lời khuyên":
        "Cách vận động tốt nhất là từ nhà vệ sinh trở về bàn làm việc",
    },
  },
  {
    id: 34,
    diagnosId: 3,
    treatment: {
      "Bài thuốc": "Thang bộ cấp cứu",
      "Lời khuyên": "Thang bộ là bác sĩ riêng của bạn, không cần đặt lịch hẹn",
    },
  },
  {
    id: 35,
    diagnosId: 3,
    treatment: {
      "Liệu pháp": "Lên lịch hẹn",
      "Lời khuyên": "Lười với bản thân thì được, nhưng đừng để bạn bè biết",
    },
  },
  {
    id: 36,
    diagnosId: 3,
    treatment: {
      "Đơn thuốc": "Hẹn hò năng động",
      "Lời khuyên": "Tình yêu vận động sẽ đẩy lùi bệnh lười mãn tính",
    },
  },
  {
    id: 37,
    diagnosId: 4,
    treatment: {
      Vaccine: "Ngủ một giấc đã rồi tính",
      "Lời khuyên": "Khi tinh thần tươi mới, deadline chỉ là chuyện nhỏ",
    },
  },
  {
    id: 38,
    diagnosId: 4,
    treatment: {
      "Bài thuốc": "Deadline cũ, việc mới",
      "Lời khuyên": "Chia deadline ra, bạn sẽ thấy nó bé xíu xiuuuuu",
    },
  },
  {
    id: 39,
    diagnosId: 4,
    treatment: {
      "Liệu pháp": "Deadline karaoke",
      "Lời khuyên": "Hét lên để cảm thấy deadline chỉ là bài nhạc vui",
    },
  },
  {
    id: 40,
    diagnosId: 4,
    treatment: {
      "Phương pháp": "Giả vờ mất mạng",
      "Lời khuyên": "Thời gian offline đôi khi giúp bạn làm việc hiệu quả hơn",
    },
  },
  {
    id: 41,
    diagnosId: 4,
    treatment: {
      "Bài thuốc": "Hẹn hò cùng deadline",
      "Lời khuyên":
        "Tưởng tượng deadline là nyc - Đối diện một lần, quên nó mãi mãi",
    },
  },
  {
    id: 42,
    diagnosId: 4,
    treatment: {
      Vaccine: "Deadline giảm tốc",
      "Lời khuyên": "Bình tĩnh sống, deadline sẽ tự tan biến",
    },
  },
  {
    id: 43,
    diagnosId: 4,
    treatment: {
      "Phương pháp": "Đồng đội gánh hộ",
      "Lời khuyên": "Deadline là của tập thể, đừng cố làm người hùng cô đơn",
    },
  },
  {
    id: 44,
    diagnosId: 4,
    treatment: {
      "Bài thuốc": "Deadline chạy bộ",
      "Lời khuyên": "Deadline dí, nhưng bạn nhanh hơn deadline",
    },
  },
  {
    id: 45,
    diagnosId: 4,
    treatment: {
      Vaccine: "Đàm phán với sếp",
      "Lời khuyên":
        "Hỏi không mất tiền, xin thêm thời gian không làm bạn nghèo",
    },
  },
  {
    id: 46,
    diagnosId: 4,
    treatment: {
      "Phương pháp": "Deadline ngược",
      "Lời khuyên":
        "Khi bạn là người điều khiển deadline, nó sẽ không làm bạn sợ",
    },
  },
  {
    id: 47,
    diagnosId: 5,
    treatment: {
      Vaccine: "Uống nước lọc thần kỳ",
      "Lời khuyên": "Cà phê giúp tỉnh táo, nhưng nước lọc mới giúp trường thọ",
    },
  },
  {
    id: 48,
    diagnosId: 5,
    treatment: {
      "Bài thuốc": "Giả vờ hết cà phê",
      "Lời khuyên":
        "Khi không còn cà phê, bạn sẽ phát hiện sức mạnh tiềm ẩn trong chính mình",
    },
  },
  {
    id: 49,
    diagnosId: 5,
    treatment: {
      "Phương pháp": "Chuyển đổi tình yêu",
      "Lời khuyên": "Hãy yêu trà như cách bạn từng yêu cà phêee",
    },
  },
  {
    id: 50,
    diagnosId: 5,
    treatment: {
      "Liệu pháp tâm lý": "Cốc cà phê rỗng",
      "Lời khuyên": "Đôi khi, tưởng tượng là tất cả những gì bạn cần",
    },
  },
  {
    id: 51,
    diagnosId: 5,
    treatment: {
      Vaccine: "Cà phê loãng",
      "Lời khuyên": "Cà phê nhạt dần, nhưng tình yêu bản thân thì đậm hơn",
    },
  },
  {
    id: 52,
    diagnosId: 5,
    treatment: {
      "Phương pháp": "Thay thế bằng socola",
      "Lời khuyên": "Ngọt ngào luôn là giải pháp tốt hơn đắng cay",
    },
  },
  {
    id: 53,
    diagnosId: 5,
    treatment: {
      "Liệu pháp": "Giả vờ hết tiền",
      "Lời khuyên":
        "Nước lọc giúp bạn tỉnh táo … khi nghĩ về số tiền tiết kiệm được",
    },
  },
  {
    id: 54,
    diagnosId: 5,
    treatment: {
      "Kẹo ngậm": "Hương cà phê fake",
      "Lời khuyên": "Không có cà phê thật thì cà phê giả vẫn ổn",
    },
  },
  {
    id: 55,
    diagnosId: 5,
    treatment: {
      "Liệu pháp": "Cà phê không caffeine",
      "Lời khuyên":
        "Decaf (Cà phê không caffeine) - Lựa chọn hoàn hảo cho tâm hồn không muốn run tay",
    },
  },
  {
    id: 56,
    diagnosId: 5,
    treatment: {
      Vaccine: "Sống chậm",
      "Lời khuyên": "Tĩnh lặng là liều thuốc tốt nhất, không cần thêm caffeine",
    },
  },
  {
    id: 57,
    diagnosId: 6,
    treatment: {
      "Bài thuốc": "Công việc thật sự",
      "Lời khuyên": "Nếu phải gõ, hãy gõ thứ gì đó tạo ra lương",
    },
  },
  {
    id: 58,
    diagnosId: 6,
    treatment: {
      Vaccine: "Nhìn đồng hồ",
      "Lời khuyên": "Còn thời gian để giả vờ, nghĩa là bạn chưa đủ bận…",
    },
  },
  {
    id: 59,
    diagnosId: 6,
    treatment: {
      "Phương pháp": "Tạo âm thanh thật sự",
      "Lời khuyên":
        "Giả vờ là một nghệ thuật, nhưng đừng để nghệ thuật này … lãng phí thời gian",
    },
  },
  {
    id: 60,
    diagnosId: 7,
    treatment: {
      "Bài thuốc": "Đổi tên nhóm thành Tao-team",
      "Lời khuyên":
        "Khi tên nhóm đúng với bản chất, bạn sẽ cảm thấy đỡ oan uổng hơn",
    },
  },
  {
    id: 61,
    diagnosId: 7,
    treatment: {
      "Phương pháp": "Tháo pin leader",
      "Lời khuyên":
        "Hãy cho team của bạn nếm trải một chút hỗn loạn, để họ hiểu giá trị của bạn",
    },
  },
  {
    id: 62,
    diagnosId: 7,
    treatment: {
      "Bài thuốc": "Checklist thần thánh",
      "Lời khuyên": "Trách nhiệm chỉ được chia đều khi nó được ghi lại rõ ràng",
    },
  },
  {
    id: 63,
    diagnosId: 7,
    treatment: {
      "Phương pháp": "Phần thưởng đảo ngược",
      "Lời khuyên": "Sự công bằng đôi khi đến từ một ly trà sữa",
    },
  },
  {
    id: 64,
    diagnosId: 7,
    treatment: {
      Vaccine: "Kể chuyện đau lòng",
      "Lời khuyên": "Một chút drama đôi khi cần thiết để teamwork thành công",
    },
  },
  {
    id: 65,
    diagnosId: 8,
    treatment: {
      Vaccine: "Tắt mic, bật mute",
      "Lời khuyên":
        "Không phải cuộc họp nào cũng cần nghe, và không phải lúc nào bạn cũng cần tỉnh",
    },
  },
  {
    id: 66,
    diagnosId: 8,
    treatment: {
      "Phương pháp": "Nội dung tối thượng",
      "Lời khuyên": "Không có mục tiêu, không có họp",
    },
  },
  {
    id: 67,
    diagnosId: 8,
    treatment: {
      "Bài thuốc": "Họp nhanh kiểu Fast & Furious",
      "Lời khuyên": "Nhanh như chớp, xong việc là tan",
    },
  },
  {
    id: 68,
    diagnosId: 8,
    treatment: {
      "Bài thuốc": "Giảm họp, tăng ăn",
      "Lời khuyên": "Khi bụng no, mọi người ít tranh cãi",
    },
  },
  {
    id: 69,
    diagnosId: 9,
    treatment: {
      "Phương pháp": "Thưởng ít cũng là thưởng",
      "Lời khuyên":
        "Đừng so sánh thưởng của mình với người khác, so rồi chỉ thêm đau",
    },
  },
  {
    id: 70,
    diagnosId: 9,
    treatment: {
      "Liệu pháp": "Tiền thưởng trong tâm",
      "Lời khuyên": "Tiền thưởng trong tâm là tiền thưởng bất tử",
    },
  },
  {
    id: 71,
    diagnosId: 9,
    treatment: {
      Vaccine: "Người thân hỏi thưởng, tự động tắt máy",
      "Lời khuyên": "Thưởng không đủ, đừng lo, nhà vẫn còn gói mì",
    },
  },
  {
    id: 72,
    diagnosId: 9,
    treatment: {
      "Liệu pháp": "Tập trung vào cái khác",
      "Lời khuyên":
        "Tiền thưởng chỉ là phù du, cái chính là thần thái ngày Tết",
    },
  },
  {
    id: 73,
    diagnosId: 10,
    treatment: {
      Vaccine: "Gắn định vị toàn bộ đồ đạc",
      "Lời khuyên": "Khi công nghệ lên ngôi, đồ thất lạc không còn là mối lo",
    },
  },
  {
    id: 74,
    diagnosId: 10,
    treatment: {
      "Triệu tập": "Pháp sư triệu hồi đồ vật",
      "Lời khuyên":
        "Đồ không tìm thấy không có nghĩa là mất, mà là đang chơi trốn tìm với bạn!",
    },
  },
  {
    id: 75,
    diagnosId: 10,
    treatment: {
      "Bài tập": "Không rời đồ ra khỏi tầm mắt",
      "Lời khuyên":
        "Thà mang tất cả trên người còn hơn để chúng lưu lạc trong không gian văn phòng",
    },
  },
  {
    id: 76,
    diagnosId: 10,
    treatment: {
      "Liệu pháp": "Chỉ dùng đồ của đồng nghiệp",
      "Lời khuyên":
        "Đừng để việc mượn đồ biến bạn thành 'cơn ác mộng văn phòng'",
    },
  },
  {
    id: 77,
    diagnosId: 10,
    treatment: {
      "Triệu hồi": "Đội đặc nhiệm tìm đồ",
      "Lời khuyên":
        "Tình đồng nghiệp đôi khi đến từ những điều nhỏ bé như tìm lại chiếc bút",
    },
  },
  {
    id: 78,
    diagnosId: 10,
    treatment: {
      "Đăng ký khóa học": "Tư duy nhớ vị trí đồ đạc cơ bản",
      "Lời khuyên":
        "Hãy bắt đầu từ việc nhớ mình đã để đồ ở đâu, rồi cuộc đời sẽ dễ dàng hơn",
    },
  },
  {
    id: 79,
    diagnosId: 10,
    treatment: {
      "Phát động phong trào": "Ai nhặt được đồ, trả liền tay",
      "Lời khuyên":
        "Thất lạc đồ không đáng sợ, chỉ sợ thất lạc niềm tin ở đồng nghiệp",
    },
  },
  {
    id: 80,
    diagnosId: 10,
    treatment: {
      "Liệu pháp tâm lý": "Mất là thay, tìm không chi!",
      "Lời khuyên": "Đồ mới là động lực mới để làm việc hiệu quả",
    },
  },
];
