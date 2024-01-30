require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

let std_name = "Nicholas Stephenson"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

import * as d3 from "d3";

let board = d3.select('main')
    .append('svg')
    .attr('width', 806)
    .attr('height', 806)
    .style('border-style', 'solid')
    .style('border-color', 'gray')
    .style('border-width', 4)

let squares = []

for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        squares[(i * 8) + j] = board.append('rect')
            .attr('x', j * 100)
            .attr('y', i * 100)
            .attr('width', 100)
            .attr('height', 100)
            .style('stroke', 'gray')
            .style('stroke-width', 8)

        if((i + j) % 2 === 0) {
            squares[(i * 8) + j]
                .style('fill', 'black')
        }
        else {
            squares[(i * 8) + j]
                .style('fill', 'darkred')
        }
    }
}