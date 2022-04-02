<script type="text/javascript">

		var last = "geo";

		var od,max,min,color,anim=700,scale_x,scale_y;

		var svg = d3.select("#svg").append("g").attr("class","container");
		//load data file
		d3.csv("https://raw.githubusercontent.com/MORAKEB/data/master/data1.csv", function(error, data){
			od = d3.layout.odmap({
				width:550,
				height:550,
				geo:true
			});

			od.data(data);
			//od.toggle();

			var d = od.geo(od.geo());

			updateData(d);
		});

		d3.select("#toggle-btn").on("click", function(){ od.toggle(); updateControls(); });
		d3.selectAll("select").on("change", function(){ updateControls(); });
        //the function of controlling changes
        
		function updateControls(){
			var outer_sel = document.getElementById("outer");
			var outer =	outer_sel.options[outer_sel.selectedIndex].value;

			var inner_sel = document.getElementById("inner");
			var inner =	inner_sel.options[inner_sel.selectedIndex].value;

			var d;
			switch(inner){
				case "geo": d = od.geo(); break;
				case "nmap": d = od.nmap(); break;
			}

			var dd;
			switch(outer){
				case "geo": dd = od.geo(d); break;
				case "nmap": dd = od.nmap(d); break;
			}

			updateData(dd);
		}

		function updateData(d){
			color = d3.scale.linear().domain([0,d.smax])
    			.range(['rgba(255,0,0,0)', 'rgba(255,0,0,1)']);

    		//Scale for the inner rectangles
    		scale_x = ((d.data[0].data.data[0].width/(d.width/d.data[0].width))/d.data[0].data.data[0].width);
    		scale_y = ((d.data[0].data.data[0].height/(d.height/d.data[0].height))/d.data[0].data.data[0].height);

    		//Create Groups
			var groups = svg.selectAll("g.group").data(d.data);

			groups.enter().append("g")
				.attr("class", "group");

			groups.transition().duration(anim).ease("cubic")
				.attr("transform", function(d){ return "translate("+d.x+","+d.y+") scale("+scale_x+","+scale_y+")"; });

			groups.exit().remove();

			//Create Sub-Groups
			var subgroups = groups.selectAll("rect.data").data(function(d){ return d.data.data; });

			subgroups.enter().append("rect")
				.attr("class", "data")
				.style("stroke", "#000");

			subgroups.transition().duration(anim).ease("cubic")
				.style("fill", function(d){ return color(d.amount);})
				.attr("width", function(d){ return d.width; })
				.attr("height", function(d){ return d.height; })
				.attr("x", function(d){ return d.x; })
				.attr("y", function(d){ return d.y; });

			subgroups.exit().remove();

			//Draw Borders
			var border = svg.selectAll("rect.border").data(d.data);

			border.enter().append("rect")
				.attr("class", "border")
				.style("fill", "none");

			border.transition().duration(anim).ease("cubic")
				.style("stroke", "#000")
				.attr("width", function(d){ return d.width; })
				.attr("height", function(d){ return d.height; })
				.attr("x", function(d){ return d.x; })
				.attr("y", function(d){ return d.y; });

			border.exit().remove();

			
		}

	</script>