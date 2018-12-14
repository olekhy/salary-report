linePlotInitializer = (data) => {
    const colorScale = d3.scaleOrdinal()
        .domain(["Male", "Female"])
        .range(["#80b1d3", "#fb8072"]);

    const groupedData = processLineChartData(data, CURRENT_SALARY, SEX);

    const salaryLineChart = lineChart()
        .width(width)
        .height(height)
        .colorScale(colorScale)
        .data(groupedData);

    d3.select("#line-chart-area")
        .call(salaryLineChart);
};