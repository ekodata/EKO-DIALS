/*
* Trending line chart
*/
//var randomScalingFactor = function(){ return Math.round(Math.random()*10)};
var trendingLineChart;
var data = {
	labels : ["I/Lekki","Yaba","Ikeja","Eti-Osa","L/Island","Agege","Alimosho"],
	datasets : [
		{
			label: "First dataset",
			fillColor : "rgba(128, 222, 234, 0.6)",
			strokeColor : "#ffffff",
			pointColor : "#00bcd4",
			pointStrokeColor : "#ffffff",
			pointHighlightFill : "#ffffff",
			pointHighlightStroke : "#ffffff",
			data: [100, 50, 20, 40, 80, 50, 80]
		},
		{
			label: "Second dataset",
			fillColor : "rgba(128, 222, 234, 0.3)",
			strokeColor : "#80deea",
			pointColor : "#00bcd4",
			pointStrokeColor : "#80deea",
			pointHighlightFill : "#80deea",
			pointHighlightStroke : "#80deea",
			data: [60, 20, 90, 80, 50, 85, 40]
		}
	]
};

setInterval(function(){
  // Get a random index point
  var indexToUpdate = Math.round(Math.random() * (data.labels.length-1));
  if (typeof trendingLineChart != "undefined"){
	  // Update one of the points in the second dataset
	  if(trendingLineChart.datasets[0].points[indexToUpdate].value){
	  		trendingLineChart.datasets[0].points[indexToUpdate].value = Math.round(Math.random() * 100);
	  }
	  if(trendingLineChart.datasets[1].points[indexToUpdate].value){
	  		trendingLineChart.datasets[1].points[indexToUpdate].value = Math.round(Math.random() * 100);	
	  }
	  trendingLineChart.update();
  }
  	
  
}, 2000);


/*
Polor Chart Widget
*/
 
var doughnutData = [
	{
		value: 3000,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Citizens"
	},
	{
		value: 1000,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Company"
	},
	{
		value: 260,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Others(Foreigners)"
	}

];

/*
Trending Bar Chart
*/

var dataBarChart = {
    labels : ["JAN","FEB","MAR","APR","MAY","JUNE"],
    datasets: [
        {
            label: "Bar dataset",
            fillColor: "#46BFBD",
            strokeColor: "#46BFBD",
            highlightFill: "rgba(70, 191, 189, 0.4)",
            highlightStroke: "rgba(70, 191, 189, 0.9)",
            data: [6, 9, 8, 4, 6, 7]
        }
    ]
};

var nReloads1 = 0;
var min1 = 1;
var max1 = 10;
var l1 =0;
var trendingBarChart;
function updateBarChart() {	
	if (typeof trendingBarChart != "undefined") {
	  	nReloads1++; 	
		var x = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
		trendingBarChart.addData([x], dataBarChart.labels[l1]);
		trendingBarChart.removeData();
		l1++;
		if( l1 == dataBarChart.labels.length){ l1 = 0;} 
	}
}
setInterval(updateBarChart, 5000);

/*
Trending Bar Chart
*/
var radarChartData = {
	labels: ["MyBankUSSD", "In-App", "EkoWallet", "Bank Teller", "USSD"],
	datasets: [
		{
			label: "First dataset",
			fillColor: "rgba(255,255,255,0.2)",
			strokeColor: "#fff",
			pointColor: "#00796b",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#fff",
			data: [5,6,7,8,6]
		}
	],
};
	

var nReloads2 = 0;
var min2 = 1;
var max2 = 10;
var l2 =0;
var trendingRadarChart;
function trendingRadarChartupdate() {	
	if (typeof trendingRadarChart != "undefined") {
		nReloads2++;
		var x = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;	
		trendingRadarChart.addData([x], radarChartData.labels[l2]);
		var y = trendingRadarChart.removeData();
		l2++;
		if( l2 == radarChartData.labels.length){ l2 = 0;}
	}
}
setInterval(trendingRadarChartupdate, 5000);
		
/*
Pie chart 
*/
var pieData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "America"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Canada"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "UK"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Europe"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Australia"
				}

			];
/*
Line Chart
*/
var lineChartData = {
	labels : ["AKD","IKJ","EPE","KSF","KRD","APP"],
	datasets : [
		{
			label: "My dataset",
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "#fff",
			pointColor : "#00796b ",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data: [65, 45, 50, 30, 63, 45]
		}
	]

}

var polarData = [
		{
			value: 4800,
			color:"#f44336",
			highlight: "#FF5A5E",
			label: "Oshodi/Isolo"
		},
		{
			value: 6000,
			color: "#9c27b0",
			highlight: "#ce93d8",
			label: "Ibeju-Lekki"
		},
		{
			value: 1800,
			color: "#3f51b5",
			highlight: "#7986cb",
			label: "Ikeja"
		},
		{
			value: 4000,
			color: "#2196f3 ",
			highlight: "#90caf9",
			label: "Apapa"
		},
		{
			value: 5500,
			color: "#ff9800",
			highlight: "#ffb74d",
			label: "Alimosho"
		},
		{
			value: 2100,
			color: "#009688",
			highlight: "#80cbc4",
			label: "Agege"
		},
		{
			value: 5000,
			color: "#00acc1",
			highlight: "#4dd0e1",
			label: "Kosofe"
		},
		{
			value: 3500,
			color: "#4caf50",
			highlight: "#81c784",
			label: "Epe"
		}



	];	
		



window.onload = function(){
	var trendingLineChart = document.getElementById("trending-line-chart").getContext("2d");
	window.trendingLineChart = new Chart(trendingLineChart).Line(data, {		
		scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart		
		scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines		
		scaleGridLineWidth : 1,//Number - Width of the grid lines		
		scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)		
		scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)		
		bezierCurve : true,//Boolean - Whether the line is curved between points		
		bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points		
		pointDot : true,//Boolean - Whether to show a dot for each point		
		pointDotRadius : 5,//Number - Radius of each point dot in pixels		
		pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke		
		pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point		
		datasetStroke : true,//Boolean - Whether to show a stroke for datasets		
		datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke		
		datasetFill : true,//Boolean - Whether to fill the dataset with a colour				
		animationSteps: 15,// Number - Number of animation steps		
		animationEasing: "easeOutQuart",// String - Animation easing effect			
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
		scaleFontSize: 12,// Number - Scale label font size in pixels		
		scaleFontStyle: "normal",// String - Scale label font weight style		
		scaleFontColor: "#fff",// String - Scale label font colour
		tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events		
		tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour		
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
		tooltipFontSize: 12,// Number - Tooltip label font size in pixels
		tooltipFontColor: "#000",// String - Tooltip label font colour		
		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
		tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels		
		tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style		
		tooltipTitleFontColor: "#000",// String - Tooltip title font colour		
		tooltipYPadding: 8,// Number - pixel width of padding around tooltip text		
		tooltipXPadding: 16,// Number - pixel width of padding around tooltip text		
		tooltipCaretSize: 10,// Number - Size of the caret on the tooltip		
		tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border		
		tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
		responsive: true
		});

		var doughnutChart = document.getElementById("doughnut-chart").getContext("2d");
		window.myDoughnut = new Chart(doughnutChart).Doughnut(doughnutData, {
			segmentStrokeColor : "#fff",
			tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
			percentageInnerCutout : 50,
			animationSteps : 15,
			segmentStrokeWidth : 4,
			animateScale: true,
			percentageInnerCutout : 60,
			responsive : true
		});

		var trendingBarChart = document.getElementById("trending-bar-chart").getContext("2d");
		window.trendingBarChart = new Chart(trendingBarChart).Bar(dataBarChart,{
			scaleShowGridLines : false,///Boolean - Whether grid lines are shown across the chart
			showScale: true,
			animationSteps:15,
			tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
			responsive : true
		});

		window.trendingRadarChart = new Chart(document.getElementById("trending-radar-chart").getContext("2d")).Radar(radarChartData, {
		    
		    angleLineColor : "rgba(255,255,255,0.5)",//String - Colour of the angle line		    
		    pointLabelFontFamily : "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label	
		    pointLabelFontColor : "#fff",//String - Point label font colour
		    pointDotRadius : 4,
		    animationSteps:15,
		    pointDotStrokeWidth : 2,
		    pointLabelFontSize : 12,
			responsive: true
		});

		// var pieChartArea = document.getElementById("pie-chart-area").getContext("2d");
		// window.pieChartArea = new Chart(pieChartArea).Pie(pieData,{
		// 	responsive: true		
		// });

		var lineChart = document.getElementById("line-chart").getContext("2d");
		window.lineChart = new Chart(lineChart).Line(lineChartData, {
			scaleShowGridLines : false,
			bezierCurve : false,
			scaleFontSize: 12,
			scaleFontStyle: "normal",
			scaleFontColor: "#fff",
			responsive: true,			
		});

		var polarChartCountry = document.getElementById("polar-chart-country").getContext("2d");
		window.polarChartCountry = new Chart(polarChartCountry).PolarArea(polarData, {
			segmentStrokeWidth : 1,			
			responsive:true
		});

};
