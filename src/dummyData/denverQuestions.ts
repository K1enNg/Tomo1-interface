import type { DenverLanguageQuestion } from '../types/denver.types';

// Images/Audio placeholders (would normally be imports)
const AudioPlayerImg = "path/to/audio/player.png";

/**
 * Denver Developmental Screening Test - Language Domain Questions
 * Age ranges are in months
 * Questions are ordered from earliest to latest typical age
 */
export const DENVER_LANGUAGE_QUESTIONS: DenverLanguageQuestion[] = [
    // --- 0-3 months ---
    {
        questionId: 'L_001',
        text: 'Bé có phản ứng gì với âm thanh tần số cao như tiếng chuông không?',
        ageMonthMin: 0,
        ageMonthMax: 3,
        category: 'receptive',
        type: 'yes-no',
        audio: AudioPlayerImg // conceptual placeholder
    },
    {
        questionId: 'L_002',
        text: 'Bé có phát ra âm thanh nào không?',
        ageMonthMin: 0,
        ageMonthMax: 3,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_003',
        text: 'Bé có tạo ra các âm "o", "ô", "u" hay "a" không',
        ageMonthMin: 1,
        ageMonthMax: 4,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- 3-6 months ---
    {
        questionId: 'L_004',
        text: 'Bé có cười thành tiếng không?',
        ageMonthMin: 2,
        ageMonthMax: 5,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_005',
        text: 'Bé có réo cười không?',
        ageMonthMin: 3,
        ageMonthMax: 6,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_006',
        text: 'Bé có quay đầu theo khi nghe thấy âm thanh như tiếng lục lạc, tiếng gọi không?',
        ageMonthMin: 3,
        ageMonthMax: 6,
        category: 'receptive',
        type: 'yes-no',
    },

    // --- 6-9 months ---
    {
        questionId: 'L_007',
        text: 'Bé có quay đầu hướng về tiếng gọi không?',
        ageMonthMin: 6,
        ageMonthMax: 9,
        category: 'receptive',
        type: 'yes-no',
    },
    {
        questionId: 'L_008',
        text: 'Bé có nói được các âm tiết đơn như "ba", "đa", "ma" không?',
        ageMonthMin: 6,
        ageMonthMax: 9,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- 9-12 months ---
    {
        questionId: 'L_009',
        text: 'Bé có chủ động bắt chước âm nói của người lớn dù chưa chính xác không?',
        ageMonthMin: 7,
        ageMonthMax: 10,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_010',
        text: 'Bé có nói được "ba ba", "ma ma" không?',
        ageMonthMin: 8,
        ageMonthMax: 12,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_011',
        text: 'Bé có nói được "ba ba ba", "ma ma ma" (âm tiết từ 3 lần trở lên) không?',
        ageMonthMin: 9,
        ageMonthMax: 13,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- 12-15 months ---
    {
        questionId: 'L_012',
        text: 'Bé có nói bập bẹ không?',
        ageMonthMin: 10,
        ageMonthMax: 15,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_013',
        text: 'Bé có nói "ba ba", "ma ma" với ba mẹ không?',
        ageMonthMin: 11,
        ageMonthMax: 15,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- 15-18 months ---
    {
        questionId: 'L_014',
        text: 'Bé có nói được 1 từ đơn không?',
        ageMonthMin: 12,
        ageMonthMax: 18,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- Migrated Multiple Choice Questions (Approx 18-24m) ---
    {
        questionId: 'L_MCQ_01',
        text: 'Ba mẹ cho bé nhìn hình và đọc ngẫu nhiên tên hình để bé tự chỉ. Sau đó ấn chọn những hình bé chỉ được nhé:',
        ageMonthMin: 15,
        ageMonthMax: 24,
        category: 'receptive',
        type: 'multiple',
        options: ["Con mèo", "Con ngựa", "Con chim", "Con chó", "Em bé"],
        minCorrect: 2
    },
    {
        questionId: 'L_MCQ_02',
        text: 'Ba mẹ chỉ vào hình và cho bé tự đọc tên. Sau đó ấn chọn những ô bé đọc được:',
        ageMonthMin: 18,
        ageMonthMax: 24,
        category: 'expressive',
        type: 'multiple',
        options: ["Con mèo", "Con ngựa", "Con chim", "Con chó", "Em bé"],
        minCorrect: 2
    },

    // --- 18-24 months ---
    {
        questionId: 'L_015',
        text: 'Bé có nói được 2 từ đơn không?',
        ageMonthMin: 16,
        ageMonthMax: 24,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_016',
        text: 'Bé có nói được 3 từ đơn không?',
        ageMonthMin: 18,
        ageMonthMax: 24,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_MCQ_03',
        text: 'Ba mẹ gọi tên các bộ phận trên cơ thể (hoặc búp bê) và yêu cầu bé chỉ. Bé chỉ được những bộ phận nào?',
        ageMonthMin: 18,
        ageMonthMax: 24,
        category: 'receptive',
        type: 'multiple',
        options: ["Mắt", "Mũi", "Tai", "Miệng", "Tay", "Chân", "Bụng", "Tóc"],
        minCorrect: 3 // Standard Denver usually requires pointing to 1 named body part at this age, typically more by 2y
    },

    // --- 24-30 months ---
    {
        questionId: 'L_017',
        text: 'Bé có nói được 6 từ đơn không?',
        ageMonthMin: 18,
        ageMonthMax: 30,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_018',
        text: 'Bé có nói được câu gồm 2 từ không?',
        ageMonthMin: 20,
        ageMonthMax: 30,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_019',
        text: 'Những người ít tiếp xúc với bé có hiểu được lời bé nói không?',
        ageMonthMin: 20,
        ageMonthMax: 30,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- 30-36 months ---
    {
        questionId: 'L_020',
        text: 'Bé có trả lời khi được yêu cầu kể tên 1 màu sắc không?',
        ageMonthMin: 24,
        ageMonthMax: 36,
        category: 'receptive',
        type: 'yes-no',
    },
    {
        questionId: 'L_021',
        text: 'Bé có trả lời đúng khi được hỏi "Cái này là gì?" về các hình ảnh không?',
        ageMonthMin: 24,
        ageMonthMax: 36,
        category: 'receptive',
        type: 'yes-no',
    },
    {
        questionId: 'L_024',
        text: 'Bé có hiểu các khái niệm về số lượng như "một", "hai", "nhiều" không?',
        ageMonthMin: 24,
        ageMonthMax: 36,
        category: 'receptive',
        type: 'yes-no',
    },

    // --- 36-42 months ---
    {
        questionId: 'L_022',
        text: 'Bé có kể tên được 4 màu sắc không?',
        ageMonthMin: 30,
        ageMonthMax: 42,
        category: 'expressive',
        type: 'yes-no',
    },
    {
        questionId: 'L_023',
        text: 'Bé có hiểu các khái niệm về kích thước như "to", "nhỏ" không?',
        ageMonthMin: 30,
        ageMonthMax: 42,
        category: 'receptive',
        type: 'yes-no',
    },
    {
        questionId: 'L_025',
        text: 'Bé có nói được câu đơn gồm 3-4 từ không?',
        ageMonthMin: 30,
        ageMonthMax: 42,
        category: 'expressive',
        type: 'yes-no',
    },

    // --- CC Questions Migrated ---
    {
        questionId: 'L_CC_01',
        text: 'Bé trả lời được các câu hỏi: Con làm gì khi lạnh? (mặc áo, đắp chăn), khi mệt? (ngủ, nghỉ), khi đói? (ăn, uống sữa).',
        ageMonthMin: 36,
        ageMonthMax: 48,
        category: 'expressive',
        type: 'multiple',
        options: ["Khi lạnh", "Khi mệt", "Khi đói"],
        minCorrect: 2
    },
    {
        questionId: 'L_CC_02',
        text: 'Bé biết công dụng của: Cái cốc (uống nước), Cái ghế (ngồi), Cái bút chì (viết/vẽ) không?',
        ageMonthMin: 36,
        ageMonthMax: 48,
        category: 'expressive',
        type: 'multiple',
        options: ["Cái cốc", "Cái ghế", "Cái bút chì"],
        minCorrect: 2
    },
    {
        questionId: 'L_CC_04',
        text: 'Bé có làm theo được các mệnh lệnh về vị trí (đặt bút trên bàn, dưới bàn, trước mặt, sau lưng)?',
        ageMonthMin: 40,
        ageMonthMax: 54,
        category: 'receptive',
        type: 'multiple',
        options: ["Trên bàn", "Dưới bàn", "Trước mặt", "Sau lưng"],
        minCorrect: 2
    },
    {
        questionId: 'L_CC_05',
        text: 'Bé có trả lời được các câu đối lập: Con voi to - con chuột... (nhỏ/bé); Lửa nóng - nước đá... (lạnh); Ban ngày sáng - ban đêm... (tối)?',
        ageMonthMin: 42,
        ageMonthMax: 60,
        category: 'expressive',
        type: 'multiple',
        options: ["Voi/Chuột", "Lửa/Nước đá", "Ngày/Đêm"],
        minCorrect: 2
    }
];

/**
 * Get questions that apply to a specific age (in months)
 */
export function getQuestionsForAge(ageMonths: number): DenverLanguageQuestion[] {
    return DENVER_LANGUAGE_QUESTIONS.filter(
        (q) => ageMonths >= q.ageMonthMin && ageMonths <= q.ageMonthMax
    );
}

/**
 * Get questions ordered from latest to earliest for backward questioning
 */
export function getQuestionsForAgeBackward(ageMonths: number): DenverLanguageQuestion[] {
    return getQuestionsForAge(ageMonths).reverse();
}

/**
 * Get all questions that intersect at or before the given age
 */
export function getApplicableQuestions(ageMonths: number): DenverLanguageQuestion[] {
    return DENVER_LANGUAGE_QUESTIONS.filter((q) => ageMonths >= q.ageMonthMin);
}