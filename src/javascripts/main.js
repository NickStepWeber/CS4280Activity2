require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

let std_name = "Nicholas Stephenson"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

import * as d3 from "d3";

let board = d3.select('main')
    .append('svg')
    .attr('width', '808px')
    .attr('height', '808px')
    .style('border-style', 'solid')
    .style('border-color', 'gray')
    .style('border-width', '4px')

let squares = []

for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        squares[(i * 8) + j] = board.append('rect')
            .attr('x', (j * 100).toString() + 'px')
            .attr('y', (i * 100).toString() + 'px')
            .attr('width', '100px')
            .attr('height', '100px')
            .style('stroke', 'gray')
            .style('stroke-width', '8px')

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