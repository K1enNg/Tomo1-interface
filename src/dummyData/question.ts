interface Question {
    questionId: string;
    type: "yes-no" | "multiple" | "input_answer";
}

export const YESNO_QUESTION_LIST = [
    {
        questionId: "Q_1",
        type: "yes-no",
        question: [
            "Ba mẹ bấm chạy đoạn âm thanh sau nhé",
            "Bé có phản ứng gì với âm thanh tần số cao như tiếng chuông không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
        // audioPlayer: require("../../assets/images/AudioPlayerET.png"),
    },
    {
        questionId: "Q_2",
        type: "yes-no",
        question: ["Bé có phát ra âm thanh nào không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_3",
        type: "single",
        question: ["Bé có tạo ra các âm “o”, “ô”, “u” hay “a” không"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_4",
        type: "yes-no",
        question: ["Bé có cười thành tiếng không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_5",
        type: "yes-no",
        question: ["Bé có réo cười không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_6",
        type: "yes-no",
        question: [
            "Bé có quay đầu theo khi nghe thấy âm thanh như tiếng lục lạc, tiếng gọi không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_7",
        type: "yes-no",
        question: ["Bé có quay đầu hướng về tiếng gọi không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_8",
        type: "yes-no",
        question: [
            "Bé có nói được các âm tiết đơn như “ba”, “đa”, “ma” không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_9",
        type: "yes-no",
        question: [
            "Bé có chủ động bắt chước âm nói của người lớn dù chưa chính xác không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_10",
        type: "yes-no",
        question: ["Bé có nói được “ba ba”, “ma ma” không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_11",
        type: "yes-no",
        question: [
            "Bé có nói được “ba ba ba”, “ma ma ma” (âm tiết từ 3 lần trở lên) không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_12",
        type: "yes-no",
        question: ["Bé có nói bập bẹ không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_13",
        type: "yes-no",
        question: ["Bé có nói “ba ba”, “ma ma” với ba mẹ không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_14",
        type: "yes-no",
        question: ["Bé có nói được 1 từ đơn không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_15",
        type: "yes-no",
        question: ["Bé có nói được 2 từ đơn không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_16",
        type: "yes-no",
        question: ["Bé có nói được 3 từ đơn không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_17",
        type: "yes-no",
        question: ["Bé có nói được 6 từ đơn không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_18",
        type: "yes-no",
        question: ["Bé có nói được câu gồm 2 từ không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_19",
        type: "yes-no",
        question: [
            "Những người ít tiếp xúc với bé có hiểu được lời bé nói không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_20",
        type: "yes-no",
        question: ["Bé có trả lời khi được yêu cầu kể tên 1 màu sắc không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
    {
        questionId: "Q_21",
        type: "count_correct",
        question: [
            "Ba mẹ yêu cầu trẻ chỉ và đếm số lượng hình khối hiển thị trên màn hình.",
            "Bé có trả lời đúng câu hỏi không?",
        ],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
        image: "",
    },
    {
        questionId: "Q_22",
        type: "yes-no",
        question: ["Bé có kể tên được 4 màu sắc không?"],
        choices: ["Có", "Không", "Không rõ/Không hợp tác"],
    },
];

export const MULTIPLE_QUESTION_LIST = [
    {
        questionId: "Q_1",
        type: "multiple",
        question:
            "Ba mẹ cho bé nhìn hình và đọc ngẫu nhiên tên hình để bé tự chỉ, không ra hiệu bằng mắt hay tay. Sau đó ấn chọn những hình bé chỉ được nhé.",
        choices: ["cat", "horse", "bird", "dog", "girl", "Bé không hợp tác"],
    },
    {
        questionId: "Q_2",
        type: "multiple",
        question:
            "Ba mẹ chỉ vào hình và cho bé tự đọc tên. Sau đó ấn chọn những ô bé đọc được,ba mẹ không nhắc bé.",
        choices: ["cat", "horse", "bird", "dog", "girl", "Bé không hợp tác"],
    },
    {
        questionId: "Q_3",
        type: "multiple",
        question:
            "Ba mẹ gọi tên các bộ phận trên cơ thể sau đây và yêu cầu bé chỉ vào bộ phận tương ứng nhé (có thể sử dụng búp bê).",
        choices: [
            "Mắt",
            "Mũi",
            "Tai",
            "Miệng",
            "Tay",
            "Chân",
            "Bụng",
            "Tóc",
            "Bé không hợp tác",
        ],
    },
    {
        questionId: "Q_4",
        type: "multiple",
        question:
            "Sau đây sẽ có giọng đọc các con vật, ba mẹ yêu cầu bé chỉ vào các hình được đọc tương ứng nhé.",
        choices: ["cat", "horse", "bird", "dog", "girl", "Bé không hợp tác"],
        audio: "",
    },
];

export const CC_QUESTION_LIST = [
    {
        questionId: "Q_1",
        type: "multiple",
        question:
            "1. Con sẽ làm gì khi đang lạnh?\n2. Con sẽ làm gì khi mệt?\n3. Con sẽ làm gì khi đói? Bé trả lời được mấy câu hỏi?",
        choices: ["0 câu", "1 câu", "2 câu", "3 câu", "Bé không hợp tác"],
    },
    {
        questionId: "Q_2",
        type: "multiple",
        question:
            "1. Cái cốc dùng để làm gì?\n2. Cái ghế dùng để làm gì?\n3. Cái bút chì dùng để làm gì? Bé trả lời được mấy câu hỏi?",
        choices: ["0 câu", "1 câu", "2 câu", "3 câu", "Bé không hợp tác"],
    },
    {
        questionId: "Q_3",
        type: "multiple",
        question:
            "Ba mẹ yêu cầu trẻ chỉ và đếm số lượng hình khối hiển thị trên màn hình. Bé trả lời được mấy câu hỏi?",
        choices: ["1 câu", "2 câu", "3 câu", "Bé không hợp tác"],
    },
    {
        questionId: "Q_4",
        type: "multiple",
        question:
            "Ba mẹ chuẩn bị 1 đồ vật bất kì (VD: cái bút). Ba mẹ yêu cầu bé: (1) đặt bút trên bàn (2) đặt bút dưới bàn (3) đặt bút trước mặt (4) đặt bút ra sau lưng. Bé làm theo được bao nhiêu yêu cầu?",
        choices: [
            "0 yêu cầu",
            "1 yêu cầu",
            "2 yêu cầu",
            "3 yêu cầu",
            "4 yêu cầu",
            "Bé không hợp tác",
        ],
    },
    {
        questionId: "Q_5",
        type: "multiple",
        question:
            "Ba mẹ đặt câu hỏi: (1) Con voi thì to, con chuột thì …? (2) Lửa thì nóng, nước đá thì …? (3) Ban ngày trời sáng, ban đêm trời …? Bé trả lời được mấy câu hỏi?",
        choices: ["0 câu", "1 câu", "2 câu", "3 câu", "Bé không hợp tác"],
    },
];
