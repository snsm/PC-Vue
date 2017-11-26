const Mock = require('mockjs');

// 菜单栏目 API
Mock.mock('/api/menu',{
    "data": {
        "result": [
            {
                "id": "1",
                "menu_name": "图文产品",
                "menu_type":[
                    {"id": "1", "name": "文书" ,"time":"2017-10-31 20:05:36","is_hot":"0","url":"/index"},
                    {"id": "2", "name": "国画" ,"time":"2017-10-31 20:05:36","is_hot":"0","url":"/index"},
                    {"id": "3", "name": "宗谱" ,"time":"2017-10-31 20:05:36","is_hot":"1","url":"/index"}
                ],
                "last": false
            },
            {
                "id": "2",
                "menu_name": "文物产品",
                "menu_type":[
                    {"id": "1", "name": "古董" ,"time":"2017-10-31 20:05:36","is_hot":"1","url":"/index"},
                    {"id": "2", "name": "牌匾" ,"time":"2017-10-31 20:05:36","is_hot":"0","url":"/index"},
                    {"id": "3", "name": "玩物" ,"time":"2017-10-31 20:05:36","is_hot":"0","url":"/index"}
                ],
                "last": true
            }
        ]
    },
    "code": "0000",
    "mgs": "success"
});