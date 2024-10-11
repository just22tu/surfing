let body = $response.body;
let obj = JSON.parse(body);

if (obj.examVO && obj.examVO.questions && obj.examVO.questions.length > 0) {
    // obj.examVO.updatedTime = 0; 
    // obj.examVO.correctCnt = obj.examVO.questionCnt;
    // obj.examVO.costTime = 0;

    const firstQuestion = obj.examVO.questions[0];
    obj.examVO.questions = firstQuestion ? [firstQuestion] : [];

    if (firstQuestion && firstQuestion.answer) {
        firstQuestion.answers = [""];

        // firstQuestion.status = 1;

        // firstQuestion.userAnswer = "";
    }

    body = JSON.stringify(obj);
}

$done({ body });
