"use strict";

drawLine();

function drawLine() {

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.lineWidth = 3;
context.fillStyle = "black";
context.beginPath();
context.rect(0, 0, 300, 300);
context.stroke();
context.fill();
context.stroke();

context.lineWidth = 3;
context.fillStyle = "limegreen";
context.beginPath();
context.rect(125, 25, 50, 50);
context.stroke();
context.fill();
context.stroke();

context.lineWidth = 3;
context.fillStyle = "limegreen";
context.beginPath();
context.rect(125, 125, 50, 50);
context.stroke();
context.fill();
context.stroke();

context.lineWidth = 3;
context.fillStyle = "limegreen";
context.beginPath();
context.rect(75, 175, 50, 50);
context.stroke();
context.fill();
context.stroke();

context.lineWidth = 3;
context.fillStyle = "limegreen";
context.beginPath();
context.rect(175, 175, 50, 50);
context.stroke();
context.fill();
context.stroke();

context.lineWidth = 3;
context.fillStyle = "limegreen";
context.beginPath();
context.rect(25, 75, 50, 100);
context.stroke();
context.fill();
context.stroke();

context.lineWidth = 3;
context.fillStyle = "limegreen";
context.beginPath();
context.rect(225, 75, 50, 100);
context.stroke();
context.fill();
context.stroke();
}

