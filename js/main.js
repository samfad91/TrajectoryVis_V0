var diameter = 700,
    padding = 120,
    radius = diameter / 2 - padding;

var svg = d3.select("svg")
    .attr("width", diameter)
    .attr("height", diameter);

var stratify = d3.stratify()
    .id(d => d.name);

var cluster = d3.cluster()
    .size([Math.PI * 2, radius]);

var line = d3.line()
    .x(d => getX(d))
    .y(d => getY(d))
    // .curve(d3.curveBasis); //bug: d3.curveBasis doesn't have beta
    .curve(d3.curveBundle);

var node,
    link;

d3.json("/data/00.07.2020.json").then(function (data) {
    addParentNode(data);
    var root = stratify(data);
    cluster(root);
    var leaves = root.leaves();

    var g = svg.append("g")
        .attr("transform", "translate(" + [diameter / 2, diameter / 2] + ")");

    node = g.append("g")
        .selectAll("text")
        .data(leaves)
        .enter().append("text")
        .attr("transform", d => "translate(" + [getX(d), getY(d)] + ") " + //if not translate, rotate will behave strange
            "rotate(" + (d.x * 180 / Math.PI - (isLeft(d) ? 180 : 0)) + ")")
        .attr("text-anchor", d => isLeft(d) ? "end" : "start")
        .attr("dx", d => isLeft(d) ? "-0.7em" : "0.7em")
        .attr("dy", "0.3em")
        .text(d => d.data.shortName)
        .on("mouseover", mouseovered)
        .on("mouseout", mouseouted);

    link = g.append("g")
        .selectAll("path")
        .data(getPaths(leaves))
        .enter().append("path")
        .each(d => { d.source = d[0]; d.target = d[d.length - 1]; })
        .attr("d", line);
});

function addParentNode(data) {
    var map = {};
    data.forEach(node => { map[node.name] = node; });

    var node,
        newNode,
        index,
        id;
    for (var i = 0; i < data.length; i++) {
        node = data[i];
        index = node.name.lastIndexOf(".");
        id = node.name.substring(0, index);
        node.parentId = id;
        node.shortName = node.name.substring(index + 1);
        if (!map[id]) {
            newNode = { name: id };
            data.push(newNode);
            map[id] = newNode;
        }
    }
    data.pop(); //remove the one with name "", since it causes multi-root error.
}

function getPaths(leaves) {
    var map = {};
    leaves.forEach(leaf => { map[leaf.data.name] = leaf; });

    var paths = [];
    leaves.forEach(leaf => {
        leaf.data.imports.forEach(name => {
            paths.push(leaf.path(map[name]));
        });
    });
    return paths;
}

function mouseovered(d) {
    node.each(n => { n.target = n.source = false; });
    link.classed("link--target", l => { if (l.target === d) return l.source.source = true; })
        .classed("link--source", l => { if (l.source === d) return l.target.target = true; })
        .filter(l => l.target === d || l.source === d)
        .raise();
    node.classed("node--source", n => n.source)
        .classed("node--target", n => n.target)
    console.log(d3.selectAll(".link--target"));
}

function mouseouted(d) {
    link.classed("link--source", false)
        .classed("link--target", false);
    node.classed("node--source", false)
        .classed("node--target", false);
}

function getX(d) {
    return d.y * Math.cos(d.x);
}

function getY(d) {
    return d.y * Math.sin(d.x);
}

function isLeft(d) {
    return d.x > Math.PI * 0.5 && d.x < Math.PI * 1.5;
}