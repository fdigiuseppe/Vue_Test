// var app = new Vue({
//   el: '#app1',
//   data: {
//     message: 'Hello Vue!'
//   }
// })


// var link = 'https://jsonplaceholder.typicode.com/users';
// new Vue({
//   el: '#app2',
//   data: {
//     list: null
//   },
//   methods: {
//     getUsers: function () {
//       this.$http.get(link).then(function (response) {
// 				this.list = response.data;
// 				console.log(response.data);
//       }, function (error) {
//         console.log(error.statusText);
//       });
//     }
//   },
//   mounted: function () {
//     this.getUsers();
//   }
// });

// new Vue ({
// 	el: '#app4',
// 	data() {
// 		return {
// 			messages: ['hello', 'vue', 'js'],
// 			shoppingItems: [
// 				{ name: 'apple', price: '10' },
// 				{ name: 'orange', price: '12' }
// 			],
// 			api_stat: [
// 				{
// 					name: "Label1",
// 					api_result: {
// 						api_label: "label_api_1",
// 						api_value: "0"
// 					}
// 				}
// 			]
// 		}
// 	},
// 	methods: {
// 		setData: function () {
// 			this.api_stat[0].api_result.api_value = 1;
// 			console.log(this.api_stat[0].api_result.api_value);
// 		}	
// 	},
// 	mounted: function () {
// 			console.log("test");
// 			console.log(this.api_stat[0].api_result.api_value);
// 			this.setData();
// 			//this.api_stat.api_result.api_value = 1;
// 	},
// 	//template: '<ul><li v-for="item in shoppingItems">{{item.name}} - {{item.price}}</li></ul>'
// 	template: '<ul><li v-for="item in api_stat">{{item.name}} - {{item.api_result.api_value}}</li></ul>'
// });


var api = "https://jsonplaceholder.typicode.com/users";

window.myApp = window.myApp || {};
window.myApp.userData = { "firstName": "John", "lastName": "Doe" };
window.myApp.apiObject = [];

axios.get(api).then(response => {
	//console.log('response ', response.data);
	window.myApp.apiObject = response.data;
	//console.log('window.myApp.apiObject ', window.myApp.apiObject);
	//this.info = response.data
	new Vue({
		el: '#app5',
		data: {
			userData: myApp.userData,
			apiObject: myApp.apiObject
		},
		created: function () {
			// `this` points to the vm instance
			//console.log(this.apiObject);
		}
	});
})
	.catch(error => {
		console.log(error)
		//this.errored = true
	})
	.finally(() => this.loading = false);


Vue.component('stats1', {
	data: function () {
		return {
			apiObject: myApp.apiObject
		}
	},
	methods: {
		setData: function () {
			console.log(this.apiObject);
		}
	},
	mounted: function () {
		this.setData();
	}

});