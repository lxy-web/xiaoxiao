let Mock=require("mockjs")
let fs=require("fs")
let data=Mock.mock({
    "list|40":[{
        "id|+1":1,
        "name":"@cname()",
        "title":"@ctitle()"
    }]
})

fs.writeFileSync("./list.json",JSON.stringify(data,"null","\t"))