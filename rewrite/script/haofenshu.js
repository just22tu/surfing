var url = $request.url;
var obj = JSON.parse($response.body);

if (url.indexOf("/user-snapshot") !== -1) {
obj.data.syInfo={
      "vipEndTime" : 4092640548000,
      "vipLevel" : 1,
      "province" : ""
    };
obj.data.examMemberType=1;
obj.data.isPay=true;
obj.data.isMember=true;
obj.data.isExamMember=true;
obj.data.linkedStudent.accountType=1;
obj.data.hadBoundNpss=true;

}else if (url.indexOf("/payment-info") !== -1) {
obj.data={
    "lastLiveCourseMemberBegin" : 0,
    "studyCoinFloat" : 99999,
    "lastMemberBegin" : 0,
    "timestamp" : 1705651232016,
    "studyCoin" : 99999,
    "lastLiveCourseMemberEnd" : 4092640548000,
    "isLiveCourseMember" : true,
    "lastMemberEnd" : 4092640548000,
    "liveCourseDebitCards" : [

    ],
    "hasAvailableStudyPackage" : true,
    "isMember" : true,
    "examReportRightsCards" : [

    ],
    "payedFudaoLead" : true,
    "memberToBeExpire" : false
  }
}

$done({ body: JSON.stringify(obj) });