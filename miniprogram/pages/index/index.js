Page({
	data:{
		num:'-'
	},
	async onShow() {
		const res = await wx.cloud.callContainer({
			path: "/get",
			method: "POST",
			data: {
				//如果你想传数据，在这里
			},
			header: {
				// 服务名字要在这里标明，可以针对于每个服务单独创建API类，具体按照自身业务实现
				'X-WX-SERVICE': ''
			},
			config: {
				// 微信云托管环境，注意不是云开发环境
				env: ""
			}
		});
		console.log(res)
		this.setData({
			num:res.data.number
		})
	}
})