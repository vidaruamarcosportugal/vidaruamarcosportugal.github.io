         
d3.csv("/vidaruamarcosportugal/_data/books.csv", function(d) {
    return {
        rating : +d.rating,
        lenght : +d.lenght,
        exclusive_shelf : d.exclusive_shelf,
        title : d.title
    }
    }).then(function(data) {
        data = data.filter(function(d) {return d.exclusive_shelf == "read"})
        var ratingCount = d3.nest()
                            .key(function(d) { return d.rating })
                            .rollup(function(v) { return v.length; })
                            .entries(data);
        
    height = 200
    width = 700
    margin = {top: 20, right: 10, bottom: 10, left: 35},
    
    yMax = d3.max(ratingCount, d => d.value)
    xDomain = ratingCount.map(d => d.key)
    console.log(ratingCount);
    
    xScale = d3.scaleBand()
               .domain( xDomain )
               .range([ margin.left, width - margin.right - margin.left ])
               .padding(0.5)
    
    yScale = d3.scaleLinear()
               .domain([ 0, yMax ])
               .range([ height - margin.bottom, margin.top ])
    
    xAxis = d3.axisBottom(xScale)
              .tickSizeOuter(0)
    
    yAxis = d3.axisLeft(yScale)
              .tickSizeOuter(0)

        // console.log(ratingCount);
        // console.log(JSON.stringify(ratingCount));
    
    var svg = d3.select(".d3_graph")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)

        svg.append('g')
            .attr('class', 'bars')
            .selectAll('rect')
            .data( ratingCount )
            .join('rect')
            .attr('class', 'bar')
            .attr('x', d => xScale(d.key))
            .attr('y', d => yScale(d.value))
            // bandwidth is a special function of scaleBand
            // it returns the width of the band (bar) based on the configuration
            // we set up earlier
            .attr('width', xScale.bandwidth())
            // remember that yScale(0) is the height of the entire chart
            // so we subtract the y position of the top of the bar yScale(d.value)
            // from it to get the total height of the bar.
            // .attr('height', d => yScale(0) - yScale(ratingCount.rating))
            .attr('height', d => yScale(0) - yScale(d.value))
            .style('fill', '#FF965A')
      
        // Here we render the x axis
        svg.append('g')
            .attr('class', 'x-axis')
            // First set its container's (g) position to the 
            // bottom of the chart
            .attr('transform', `translate(0,${ height - margin.bottom })`)
            // then just call this to render it
            .call( xAxis )
            .style('font-weight', 400)
        
        svg.append('g')
            .attr('class', 'text')
            // .attr("fill", "white")
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", 12)
            .selectAll('text')
            .data( ratingCount )
            .enter()
            .append('text')
            .attr('class', 'bar')
            .attr('x', d => xScale(d.key)+20)
            .attr('y', d => yScale(d.value)-10)
            // This is a "magic number" in svg. It makes sure the text is vertically centered
            .attr('dy', '0.35em')
            // set from which direction the text expands
            // .attr('text-anchor', 'middle')
            .text(d => d.value)
            .style('font-family', 'sans-serif')
            .style('font-size', 12)
            .style('font-weight', 600)
    
      // it works the same for the y axis
    //   svg.append('g')
    //       .attr('class', 'y-axis')    
    //       .attr('transform', `translate(${ margin.left },0)`)
    //       .call( yAxis )

});
