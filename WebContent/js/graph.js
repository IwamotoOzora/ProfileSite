/*section4の図形一覧*/
/*レーダーチャート*/
var ctx01 = document.getElementById('radarChart');
var radarChart = new Chart(ctx01,{
	type: 'radar',
	data: {
		labels:["神経質","変人","積極性","好奇心","運動神経"],
		datasets:[{
			label: '特徴メーター',
			data:[4, 5, 2, 4, 1],
			backgroundColor: 'RGBA(242,106,82,0.5)',
			borderColor: 'RGBA(235,245,247,1)',
			borderWidth: 0.5,
			pointBackgroundColor: 'RGB(46,106,177)'
		}]
	},
	options: {
		title: {
			display: true,
			text: '特徴'
		},
		scale: {
			ticks: {
				suggestedMin: 0,
				suggestedMax: 5,
				stepSize: 1,
				callback: function(value, index, values){
					return value
				}
			}
		}
	}
})

/*円グラフ*/
var ctx02 = document.getElementById('myPieChart');
var myPieChart = new Chart(ctx02,{
	type: 'pie',
	data: {
		labels: ['書店', 'カフェ', '自宅', 'ライブハウス'],
		datasets: [{
			backgroundColor: [
				  '#BB5179',
	              '#FAFF67',
	              '#58A27C',
	              '#3C00FF'
			],
			data: [40, 30, 20, 10]
		}]
	},
	options: {
		title: {
			display: true,
			text: '出没地　割合'
		}
	}
});

/*折れ線グラフ*/
var ctx03 = document.getElementById('myLineChart');
var myLineChart = new Chart(ctx03, {
	type: 'line',
	data: {
		labels: ['小学生', '中学生', '高校生', '大学生', '現在'],
		datasets: [
		  {
			  label: '幸福度指数',
		      data: [32, 45, 20, 41, 38],
		      borderColor: 'rgba(0,0,255,1)',
	       	  backgroundColor: 'rgba(0,0,0,0)'
		  }
	    ],
	 },
	 options: {
	   title: {
		   display: true,
		   text: '幸福(小～今)'
	   },
	   scales: {
		   yAxes: [{
			 ticks: {
			   suggestedMax: 50,
			   suggestedMin: 0,
			   stepSize: 10,
			   callback: function(value, index, values){
				   return value
			   }
			   }
		   }]
	   },
	 }
});