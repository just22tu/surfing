let body = $response.body;
let obj = JSON.parse(body);

// 获取当前请求的URL
const url = $request.url;

// 匹配不同的路径
const isPK = /\/leo-game-pk\/.+\/pk\/match/.test(url);
const isExams = /\/leo-math\/.+\/exams/.test(url);

function processQuestions(questions) {
    const firstQuestion = questions[0];
    return firstQuestion ? [firstQuestion] : [];
}

// 处理PK逻辑
if (isPK && obj.examVO && obj.examVO.questions && obj.examVO.questions.length > 0) {
    obj.examVO.questions = processQuestions(obj.examVO.questions);
    const firstQuestion = obj.examVO.questions[0];
    if (firstQuestion && firstQuestion.answer) {
        firstQuestion.answers = [""];
    }

// 处理练习场逻辑
} else if (isExams && obj.questions && obj.questions.length > 0) {
    obj.questions = processQuestions(obj.questions);
    const firstQuestion = obj.questions[0];
    if (firstQuestion && firstQuestion.answer) {
        firstQuestion.answers = [""];
    }
}

body = JSON.stringify(obj);
$done({ body });
