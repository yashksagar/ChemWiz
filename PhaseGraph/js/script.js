

var xScale = d3.scale.linear().domain([0, 360]).range([-150, 1700]);


$(function(){
	
	var colors = [
		'26e000','2fe300','37e700','45ea00','51ef00',
		'61f800','6bfb00','77ff02','80ff05','8cff09',
		'93ff0b','9eff09','a9ff07','c2ff03','d7ff07',
		'f2ff0a','fff30a','ffdc09','ffce0a','ffc30a',
		'ffb509','ffa808','ff9908','ff8607','ff7005',
		'ff5f04','ff4f03','f83a00','ee2b00','e52000'
	];
	
	var rad2deg = 180/Math.PI;
	var deg = 0;
	var bars = $('#bars');
	
	for(var i=0;i<colors.length;i++){
		
		deg = i*12;
		
		// Create the colorbars
		
		$('<div class="colorBar">').css({
			backgroundColor: '#'+colors[i],
			transform:'rotate('+deg+'deg)',
			top: -Math.sin(deg/rad2deg)*80+100,
			left: Math.cos((180 - deg)/rad2deg)*80+100,
		}).appendTo(bars);
	}
	
	var colorBars = bars.find('.colorBar');
	var numBars = 0, lastNum = -1;
	
	$('#control').knobKnob({
		snap : 10,
		value: 33.15,
		turn : function(ratio,degree){
			numBars = Math.round(colorBars.length*ratio);
			
			
			//alert(degree);
			curTemp = xScale(degree);
			document.getElementById("temperatureBar").innerHTML = "" + Math.round(xScale(degree)) + "&degc";
			
			//updateSlider(curTemp);
			
			// Update the dom only when the number of active bars
			// changes, instead of on every move
			
			if(numBars == lastNum){
				return false;
			}
			lastNum = numBars;
			
			colorBars.removeClass('active').slice(0, numBars).addClass('active');
		}
	});
	
	
	
	
	
	
	
	
	// hacky Kludge of the millenium starts below =D
	
	var rad2deg = 180/Math.PI;
	var deg1 = 0;
	var bars1 = $('#bars1');
	
	for(var i=0;i<colors.length;i++){
		
		deg1 = i*12;
		
		// Create the colorbars
		
		$('<div class="colorBar1">').css({
			backgroundColor: '#'+colors[i],
			transform:'rotate('+deg1+'deg)',
			top: -Math.sin(deg1/rad2deg)*80+100,
			left: Math.cos((180 - deg1)/rad2deg)*80+100,
		}).appendTo(bars1);
	}
	
	var colorBars1 = bars1.find('.colorBar1');
	var numBars1 = 0, lastNum1 = -1;
	
	$('#control1').knobKnob({
		snap : 10,
		value: 180,
		turn : function(ratio,degree){
			numBars1 = Math.round(colorBars1.length*ratio);
			
			curPressure = Math.round(pressureScale(degree));
			document.getElementById("pressureBar").innerHTML = "" + curPressure + " kPa";
			copyToArray();
			
			
			if(numBars1 == lastNum1){
				return false;
			}
			lastNum1 = numBars1;
			
			colorBars1.removeClass('active1').slice(0, numBars1).addClass('active1');
		}
	});
	
});
