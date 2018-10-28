var express = require('express');
var router = express.Router();

var data = {
    code: '0',
    msg: '处理成功',
    data: {}
}


router.post('/user/register.htm', function (req, res, next) {

    data.data = {
        tel: '123456789'
    }
    res.json(data)
})



router.post('/user/login.htm', function (req, res, next) {

    data.data = {
        tel: '123456789',
        userId: 'A0000000000000000000000001',
        flag: 1, // 0-已经申请过1-未申请
        imgUrl: '' // 素材路径 flag为1时返回,页面头部图片
    }
    res.json(data)
})

router.post('/user/sendMsg.htm', function (req, res, next) {

    data.data = {
        tel: '123456789',
        telMsg: 555555
    }
    res.json(data)
})

router.post('/user/forpostPwd.htm', function (req, res, next) {

    data.data = {
        tel: '17557283492'
    }
    res.json(data)
})

// 用户申请列表
router.post('/product/applyList.htm', function (req, res, next) {

    data.data = {
        tel: '17557283492',
        userId: '1122',
        currentPage: 1,
        pageSize: 20,
        data: [{
                pid: 123,
                pname: "YOUNG卡（青年版）",
                imgUrl: '../../../static/img/pro-creditcard01.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '每月首笔取现免手续费生日月尊享双倍积分',
            },
            {
                pid: 123,
                pname: "HelloKitty粉丝信用卡",
                imgUrl: '../../../static/img/pro-creditcard02.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '刷卡达标赢钱包多款精美卡面设计',
            },
            {
                pid: 123,
                pname: "王者荣耀联名卡",
                imgUrl: '../../../static/img/pro-creditcard04.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '打比赛 赢积分刷卡达标赠新秀丽双肩包',
            },
            {
                pid: 123,
                pname: "HelloKitty粉丝信用卡",
                imgUrl: '../../../static/img/pro-creditcard02.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '刷卡达标赢钱包多款精美卡面设计',
            },
            {
                pid: 123,
                pname: "王者荣耀联名卡",
                imgUrl: '../../../static/img/pro-creditcard04.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '打比赛 赢积分刷卡达标赠新秀丽双肩包',
            },
            {
                pid: 123,
                pname: "HelloKitty粉丝信用卡",
                imgUrl: '../../../static/img/pro-creditcard02.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '刷卡达标赢钱包多款精美卡面设计',
            },
            {
                pid: 123,
                pname: "王者荣耀联名卡",
                imgUrl: '../../../static/img/pro-creditcard04.jpg',
                applyTime: '2018-8-28 : 1111',
                customServiceTel: '4480-2410-110',
                desc: '打比赛 赢积分刷卡达标赠新秀丽双肩包',
            },

        ]
    }
    res.json(data)
})



// 贷款产品列表
router.post('/product/productList.htm', function (req, res, next) {

    data.data = [{
            pid: 123,
            pname: "够花",
            imgUrl: '../../static/img/pro-loan01.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "小黑鱼信贷",
            imgUrl: '../../static/img/pro-loan03.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '3秒放款，1000~20万随你花',
            min: 1000,
            max: 200000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "小黑鱼信贷",
            imgUrl: '../../static/img/pro-loan03.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '3秒放款，1000~20万随你花',
            min: 1000,
            max: 200000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        }
    ]

    res.json(data)
})

// 贷款产品列表
router.post('/product/creditCardList.htm', function (req, res, next) {

    data.data = [{
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard01.jpg',
            name: 'YOUNG卡（青年版）', // 信用卡银行名称
            num: '88256', // 成功申请的人数
            remark: '每月首笔取现免手续费生日月尊享双倍积分'
        },
        {
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard02.jpg',
            name: 'HelloKitty粉丝信用卡', // 信用卡银行名称
            num: '188256', // 成功申请的人数
            remark: '刷卡达标赢钱包多款精美卡面设计'
        },
        {
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard03.jpg',
            name: '火影忍者信用卡', // 信用卡银行名称
            num: '2313881256', // 成功申请的人数
            remark: '刷卡达标赢美旅双肩包 火影忍者粉丝专属信用卡'
        },
        {
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard02.jpg',
            name: '王者荣耀联名卡', // 信用卡银行名称
            num: '88,256', // 成功申请的人数
            remark: '打比赛 赢积分刷卡达标赠新秀丽双肩包'
        },
        {
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard01.jpg',
            name: 'YOUNG卡（青年版）', // 信用卡银行名称
            num: '88,256', // 成功申请的人数
            remark: '每月首笔取现免手续费生日月尊享双倍积分'
        },
        {
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard02.jpg',
            name: '王者荣耀联名卡', // 信用卡银行名称
            num: '88,256', // 成功申请的人数
            remark: '打比赛 赢积分刷卡达标赠新秀丽双肩包'
        },
        {
            id: 123,
            url: "https://www.baidu.com/",
            imgUrl: '../../static/img/pro-creditcard01.jpg',
            name: 'YOUNG卡（青年版）', // 信用卡银行名称
            num: '88,256', // 成功申请的人数
            remark: '每月首笔取现免手续费生日月尊享双倍积分'
        }
    ]
    res.json(data)
})

// 大额信息录入头部素材
// /product/bigAmountTopImg.htm
router.post('/product/userInfo.htm', function (req, res, next) {
    res.json(data)
})


// /product/recommendOne.htm

router.post('/product/recommendOne.htm', function (req, res, next) {

    data.data = [{
        pid: 123,
        pname: "第三方url",
        amountLimit: '', // 贷款额度
        remark: ''
    }]
    res.json(data)
})

// 、/product/hotProductList.htm

router.post('/product/hotProductList.htm', function (req, res, next) {

    data.hotLoanData = [{
        pid: 12,
        pname: 'hao',
        imgPath: 'www.baidu.com',
        rate: '',
        rataType: '',
        remark: '',
        min: ' ',
        max: ''
    }]
    data.hotCardData = [{
        pid: 12,
        pname: 'hao',
        imgPath: 'www.baidu.com',
        rate: '',
        rataType: '',
        remark: '',
    }]
    data.tk = '' // 随机token
    data.sign = '' // 加签信息
    res.json(data)
})

// /index/trumpetList.htm

router.post('/index/trumpetList.htm', function (req, res, next) {

    data.data = {
        tel: 's手机号',
        channel: '渠道',
        amount: '借款金额'
    } // 加签信息
    res.json(data)
})


// 轮播图
router.post('/index/trumpetList.htm', function (req, res, next) {

    data.data = {
        tel: 's手机号',
        channel: '渠道',
        amount: '借款金额'
    } // 加签信息
    res.json(data)
})

// /product/detailItem.htm

router.post('/product/detailItem.htm', function (req, res, next) {

    data.data = {
        pid: 's手机号',
        pname: 'pname',
        amount: '借款金额',
        unit: '借款单位',
        minAmount: '100',
        maxAmount: '10000',
        minLimit: '最小期限',
        maxLimit: '最大期限',
        rAmount: '到期应还金额',
        rType: '还款方式0-一次 1-按月',
        Rate: '参考日利率',
        fastTime: '最快放款时间',
        fastUnit: '最快放款时间单位',
        io: '申请流程',
        applyRemark: '申请资格',
        productRemark: '产品介绍',

    } // 加签信息
    res.json(data)
})


router.post('/product/save.htm', function (req, res, next) {
    res.json(data)
})

router.post('/product/index', function (req, res, next) {
    var data = {
        "code": "0",
        "data": {
            "hotCData": [
                {
                    id: 123,
                    url: "https://www.baidu.com/",
                    imgUrl: '../../static/img/pro-creditcard01.jpg',
                    name: 'YOUNG卡（青年版）', // 信用卡银行名称
                    num: '88,256', // 成功申请的人数
                    remark: '每月首笔取现免手续费生日月尊享双倍积分'
                },
                {
                    id: 123,
                    url: "https://www.baidu.com/",
                    imgUrl: '../../static/img/pro-creditcard02.jpg',
                    name: '王者荣耀联名卡', // 信用卡银行名称
                    num: '88,256', // 成功申请的人数
                    remark: '打比赛 赢积分刷卡达标赠新秀丽双肩包'
                },
                {
                    id: 123,
                    url: "https://www.baidu.com/",
                    imgUrl: '../../static/img/pro-creditcard03.jpg',
                    name: '王者荣耀联名卡', // 信用卡银行名称
                    num: '88,256', // 成功申请的人数
                    remark: '打比赛 赢积分刷卡达标赠新秀丽双肩包'
                }
            ],
            "recommendData": [],
            "hotLData": [
                {
                    pid: 123,
                    pname: "闪电卡",
                    imgUrl: '../../static/img/pro-loan02.png',
                    applyTime: '2018-8-28 : 1111',
                    rate: '0.01%',
                    rataType: '', // 利率类型，默认0日利率
                    remark: '7~14天，30秒审批',
                    min: 1000,
                    max: 20000
                },
                {
                    pid: 123,
                    pname: "小黑鱼信贷",
                    imgUrl: '../../static/img/pro-loan03.png',
                    applyTime: '2018-8-28 : 1111',
                    rate: '0.01%',
                    rataType: '', // 利率类型，默认0日利率
                    remark: '3秒放款，1000~20万随你花',
                    min: 1000,
                    max: 200000
                },
                {
                    pid: 123,
                    pname: "小黑鱼信贷",
                    imgUrl: '../../static/img/pro-loan03.png',
                    applyTime: '2018-8-28 : 1111',
                    rate: '0.01%',
                    rataType: '', // 利率类型，默认0日利率
                    remark: '3秒放款，1000~20万随你花',
                    min: 1000,
                    max: 200000
                },
                {
                    pid: 123,
                    pname: "小黑鱼信贷",
                    imgUrl: '../../static/img/pro-loan03.png',
                    applyTime: '2018-8-28 : 1111',
                    rate: '0.01%',
                    rataType: '', // 利率类型，默认0日利率
                    remark: '3秒放款，1000~20万随你花',
                    min: 1000,
                    max: 200000
                }
            ],
            "hornData": [{
                "amount": "1000",
                "channel": "0",
                "tel": "15603602224"
            }, {
                "amount": "4000",
                "channel": "1",
                "tel": "13408518920"
            }, {
                "amount": "0000",
                "channel": "2",
                "tel": "15702468755"
            }, {
                "amount": "0000",
                "channel": "3",
                "tel": "15200936828"
            }, {
                "amount": "2000",
                "channel": "4",
                "tel": "13405680573"
            }, {
                "amount": "7000",
                "channel": "5",
                "tel": "15203684291"
            }, {
                "amount": "0000",
                "channel": "6",
                "tel": "15607550800"
            }, {
                "amount": "3000",
                "channel": "7",
                "tel": "15306206601"
            }, {
                "amount": "4000",
                "channel": "8",
                "tel": "15506994472"
            }, {
                "amount": "2000",
                "channel": "9",
                "tel": "13501760163"
            }]
        },
        "msg": "成功"
    }
    res.json(data)

})


router.post('/product/indexProductList.htm', function (req, res, next) {

    data.data = [{
            pid: 123,
            pname: "够花",
            imgUrl: '../../static/img/pro-loan01.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "小黑鱼信贷",
            imgUrl: '../../static/img/pro-loan03.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '3秒放款，1000~20万随你花',
            min: 1000,
            max: 200000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "闪电卡",
            imgUrl: '../../static/img/pro-loan02.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '7~14天，30秒审批',
            min: 1000,
            max: 20000
        },
        {
            pid: 123,
            pname: "小黑鱼信贷",
            imgUrl: '../../static/img/pro-loan03.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.01%',
            rataType: '', // 利率类型，默认0日利率
            remark: '3秒放款，1000~20万随你花',
            min: 1000,
            max: 200000
        },
        {
            pid: 123,
            pname: "悟空贷",
            imgUrl: '../../static/img/pro-loan04.png',
            applyTime: '2018-8-28 : 1111',
            rate: '0.05%',
            rataType: '', // 利率类型，默认0日利率
            remark: '极速无抵押贷款',
            min: 1000,
            max: 20000
        }
    ]

    res.json(data)
})



module.exports = router;