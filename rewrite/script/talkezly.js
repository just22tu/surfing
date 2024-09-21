var objc = JSON.parse($response.body);

    objc.value.state=1;
    objc.value.endTime = "2099-09-09 09:09:09";
    objc.value.pointVipNum = 99999;
    objc.value.ifSetOccupation = true;
    objc.value.hasDirectionalDiscount = true;
    objc.value.pointNum = 99999;
    objc.value.isPromotionAmbassador = true;
    objc.value.identifier = 8888;
    objc.value.mgmInviteShow = 1;
    objc.value.bannerDtoList = [];
    objc.value.bigBannerDtoList = [];
    objc.value.couponInfo={};

$done({ body: JSON.stringify(objc) });
