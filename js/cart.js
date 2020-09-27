// JavaScript Document
var vm = new Vue({
	el: "#app",
	data: {
		products: [
			{
				name: "大理石花紋-紫",
				thumb: "img/soap1.jpg",
				content: "大理石花紋系列，純天然手工皂，帶有薰衣草香氣，使用後有效紓解疲勞，提升睡眠品質，自家/旅遊皆適用。",
				price: "150",
				amount: 0,
				amountShow: 1,
				id: "tab1",
			},
			{
				name: "大理石花紋-金",
				thumb: "img/soap2.jpg",
				content: "大理石花紋系列，純天然手工皂，帶有甜橙香氣，使用後有效紓解疲勞，提升睡眠品質，自家/旅遊皆適用。",
				price: "150",
				amount: 0,
				amountShow: 1,
				id: "tab2",
			},
			{
				name: "禮盒系列(四入)",
				thumb: "img/soap3.jpg",
				content: "禮盒系列，純天然手工皂，包含清香、薰衣草、玫瑰、柑橘四種香氣，使用後有效紓解疲勞，提升睡眠品質，適用於送禮。",
				price: "550",
				amount: 0,
				amountShow: 1,
				id: "tab3",
			},
			{
				name: "智慧手錶",
				thumb: "img/3c1.jpg",
				content: "最新研發智慧型手錶，具有健康檢測、通話、GPS定位等多種用途，針對手部舒適度進行改良，輕巧方便、時尚與效能兼具。",
				price: "12000",
				amount: 0,
				amountShow: 1,
				id: "tab4",
			},
			{
				name: "全罩式耳機",
				thumb: "img/3c2.jpg",
				content: "全罩式藍芽耳機，以重低音為主，具高音質與優良的平衡性，降躁效果佳，完美體現全罩式耳機的環繞音效，充電5分鐘可續航3小時。",
				price: "3000",
				amount: 0,
				amountShow: 1,
				id: "tab5",
			},
			{
				name: "筆記型電腦",
				thumb: "img/3c3.jpg",
				content: "輕薄型筆電，為可拆式螢幕，高效能、高續航力、高解析度，現在買就送正版office軟體，具有三年保固期。",
				price: "38000",
				amount: 0,
				amountShow: 1,
				id: "tab6",
			},
			{
				name: "雞蛋仔",
				thumb: "img/dessert1.jpg",
				content: "烤的皮脆內軟的雞蛋仔，淋上甜蜜的巧克力與滑順的冰淇淋，體驗冰火兩重天的味覺饗宴，獨立物流可保證食物的新鮮。",
				price: "55",
				amount: 0,
				amountShow: 1,
				id: "tab7",
			},
			{
				name: "五穀麵包",
				thumb: "img/bread1.jpg",
				content: "剛出爐熱呼呼香噴噴的五穀麵包，具有恰到好處的嚼勁，內陷有核桃、葡萄乾等的健康配料，獨立物流可保證食物的新鮮。",
				price: "30",
				amount: 0,
				amountShow: 1,
				id: "tab8",
			},
			{
				name: "水果派",
				thumb: "img/cake1.jpg",
				content: "香軟蓬鬆的蛋糕與奶油層層疊加，加上櫻桃、藍莓、草莓等多種水果，酸酸甜甜，多層次的口感讓大人小孩都愛不嗜口。",
				price: "250",
				amount: 0,
				amountShow: 1,
				id: "tab9",
			},
			{
				name: "登山包",
				thumb: "img/pack1.jpg",
				content: "具防水、防塵、大容量等多功能，外出/長途旅遊必備，內部附有多夾層，外部靠背海綿設計可持續使用不悶汗。",
				price: "500",
				amount: 0,
				amountShow: 1,
				id: "tab10",
			},
			{
				name: "防水運動鞋",
				thumb: "img/shoes1.jpg",
				content: "線條感流暢設計，任何穿搭皆適合，防水、輕便、具高度靈活性，運動時防震效果佳，可有效保護腳部。",
				price: "2000",
				amount: 0,
				amountShow: 1,
				id: "tab11",
			},
			{
				name: "韓式耳夾/耳環",
				thumb: "img/accessories1.jpg",
				content: "具有對稱與不對秤兩種樣式，優雅兼具時尚，約會/旅遊等場合與服裝搭配讓氣質更加不凡，下單時請標注耳環/耳夾。",
				price: "350",
				amount: 0,
				amountShow: 1,
				id: "tab12",
			}
		]
	},
	methods: {
		minusOne(product){
			product.amountShow--
			product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow 
		},
		addOne(product){
			product.amountShow++
			product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow 
		},
		addToCart(product){
			product.amount += product.amountShow
		},
		remove(product){
			product.amount = 0
		},
	},
	computed: {
		productInCart(){
			return this.products
			.filter(p => p.amount)
			.map(p => {
				p.sum = p.amount*p.price
				p.num = p.amount
				return p
			})
		},
		total(){
			return this.productInCart
			.reduce((sum,p)=> (p.sum+sum),0)
		},
		num(){
			return this.productInCart
			.reduce((num,p)=> (p.num+num),0)
		},
	}
})






















