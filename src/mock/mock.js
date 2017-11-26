const Mock = require('mockjs');

Mock.mock('http://test.pw',{
    "menu": [
        {
            "menu_name": "图文产品",
            "menu_type":[
                {"id": "1", "name": "文书" ,"time":"2017-10-31 20:05:36"},
                {"id": "2", "name": "国画" ,"time":"2017-10-31 20:05:36"},
                {"id": "3", "name": "宗谱" ,"time":"2017-10-31 20:05:36"},
            ]
        }
    ],
});