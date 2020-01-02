import Mock from  "mockjs"
Mock.mock("/get_data",{
	"list|10":[
		{
			"id|+1":1,
			"title":"@ctitle(2)",
			"content":"@ctitle()",
			"img":"@Image(100,@Color)"
		}
	]
})
