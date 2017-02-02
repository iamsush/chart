	function random_gen(min, max)
	{
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max-min+1)) + min;
	}

	function getRandomColor() {
	    // var letters = '0123456789ABCDEF';
	    // var color = '#';
	    // for (var i = 0; i < 6; i++ ) {
	    //     color += letters[Math.floor(Math.random() * 16)];
	    // }
	    color = "rgba("
	    for (var i =0; i<3; i++){
	    	temp_color = Math.floor(Math.random()*(255));
	    	color += temp_color
	    	color += ", "
	    }
	    
	    return color;
	}
function create_data()
{
	var sdata = [];
	var labels = [];
	var colors = [];
	var border_color = [];
	var count = 5;
	var rand_string = ["Maths", "Physics", "Chem", "Bio", "Eco"];
	for (var i=0; i<count; i++)
	{
		labels.push(rand_string[i]);
		var temp = getRandomColor();
		colors.push(temp+"0.30)");
		border_color.push(temp+"0.5)");

		sdata.push(random_gen(100, 500));

	}

	var data = {
	    labels: labels,
	    datasets: [
	        {
	            data: sdata,
	            backgroundColor:colors,
	            borderColor: border_color,
	            borderWidth: 1
	        }]
	};
	return data;
}


	var button_id1 = document.getElementById("b1");
	button_id1.onclick = function(){button_1()};

	var button_id2 = document.getElementById("b2");
    button_id2.onclick = function(){button_2()};

	var button_id3 = document.getElementById("b3");
    button_id3.onclick = function(){button_3()};


	var button_id4 = document.getElementById("b4");
    button_id4.onclick = function(){button_4()};

	function button_1()
	{
		var baap = document.getElementById('baap');
  		Chart.defaults.global.legend.display = true;

		baap.innerHTML = "&nbsp;";
		baap.innerHTML = "<canvas id=\"myChart\" width=\"600\" height=\"600\"></canvas>";
		var context = document.getElementById('myChart').getContext('2d');

		var myPieChart = new Chart(context,{
		    type: 'pie',
		    data: create_data(),
		    options: 
		    {
		    	responsive : true,
		    	maintainAspectRatio: false
	
		    }
		});
	}


	function button_2()
    {

		var baap = document.getElementById('baap');
		baap.innerHTML = "&nbsp;";
		baap.innerHTML = "<canvas id=\"myChart\" width=\"600\" height=\"600\" style = \"padding-top:2%;\"></canvas>";
        var ctx = document.getElementById("myChart").getContext('2d');

        Chart.defaults.global.legend.display = false;
        var myChart = new Chart(ctx, {
            type: 'bar',

            data: create_data(),
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                responsive : true,
                maintainAspectRatio: false

            }
        });

	}

	function button_3()
    {

		var baap = document.getElementById('baap');
		baap.innerHTML = "&nbsp;";
		baap.innerHTML = "<canvas id=\"myChart\" width=\"600\" height=\"600\" style = \"padding-top:2%;\"></canvas>";
        var ctx = document.getElementById("myChart").getContext('2d');

        Chart.defaults.global.legend.display = false;
        var myChart = new Chart(ctx, {
            type: 'line',

            data: create_data(),
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                responsive : true,
                maintainAspectRatio: false

            }
        });

	}

	function button_4()
    {

		var baap = document.getElementById('baap');
		baap.innerHTML = "&nbsp;";
		baap.innerHTML = "<canvas id=\"myChart\" width=\"600\" height=\"600\" style = \"padding-top:2%;\"></canvas>";
        var ctx = document.getElementById("myChart").getContext('2d');

        Chart.defaults.global.legend.display = false;
        var myChart = new Chart(ctx, {
            type: 'radar',

            data: create_data(),
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                responsive : true,
                maintainAspectRatio: false

            }
        });

	}