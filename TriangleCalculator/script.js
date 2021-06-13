    function changeBackgroundColor(color) {
        document.body.style.background = color;
    }
    window.addEventListener("load", function() {
        changeBackgroundColor('#d3d3d3');
    })
    
    var canvas = document.getElementById('triangleCanvas');
    var context = canvas.getContext('2d');

    var triangleType = function() {
    var aValue = parseFloat(document.getElementById('a-value').value);
    var bValue = parseFloat(document.getElementById('b-value').value);
    var cValue = parseFloat(document.getElementById('c-value').value);

    var output = document.getElementById('output');

    if(isNaN(aValue) || isNaN(bValue) || isNaN(cValue)) {
        output.innerText = "Enter numbers below, please!";
    }
    else {
        if(aValue + bValue <= cValue || aValue + cValue <= bValue || bValue + cValue <= aValue){
            output.innerText = "Is not possible to calculate this kind of triangle"
        }
        else if(aValue == bValue && bValue == cValue) {
            output.innerText = "Triangle is equilateral";
        }
        else if (aValue == bValue || bValue == cValue || cValue==aValue) {
            output.innerText = "Triangle is isosceles"
        }
        else if(aValue != bValue || bValue != cValue || cValue != aValue) {
            output.innerText = "Triangle is scalene"
        }
    }
    drawTriangle(aValue, bValue, cValue);

};
function drawTriangle(aValue, bValue, cValue) {
    var A = [0, 0];
    var B = [0, aValue];
    var C = [];
    
    C[1] = (aValue * aValue + cValue * cValue - bValue * bValue) / (2 * aValue);
    C[0] = Math.sqrt(cValue * cValue - C[1] * C[1]);
    scale(aValue, bValue, cValue);

    context.beginPath();
    context.moveTo(A[0], A[1]);
    context.lineTo(B[0], B[1]);
    context.lineTo(C[0], C[1]);
    context.closePath();
    
    context.fillStyle = "white";

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.fill();
}

function scale(aValue, bValue, cValue) {

    if(aValue <= 1 && bValue <= 1  && cValue <= 1) {
        context.scale(150,150);
    }
    else if(aValue <= 2 && bValue <= 2  && cValue <= 2) {
        context.scale(75,75);
    }
    else if(aValue <= 3 && bValue <= 3  && cValue <= 3) {
        context.scale(50,50);
    }
    else if(aValue <= 4 && bValue <= 4  && cValue <= 4) {
        context.scale(37,37);
    }
    else if(aValue <= 5 && bValue <= 5  && cValue <= 5) {
        context.scale(30,30);
    }
    else if(aValue <= 6 && bValue <= 6  && cValue <= 6) {
        context.scale(25,25);
    }
    else if(aValue <= 7 && bValue <= 7  && cValue <= 7) {
        context.scale(21,21);
    }
    else if(aValue <= 10 && bValue <=10 && cValue <= 10) {
        context.scale(15, 15);
    }
    else if(aValue <= 15 && bValue <= 15 && cValue <= 15) {
        context.scale(10, 10);
    }
    else if(aValue <= 20 && bValue <= 20 && cValue <= 20) {
        context.scale(7, 7);
    }
    else if(aValue <= 25 && bValue <= 25 && cValue <= 25) {
        context.scale(6, 6);
    }
    else if(aValue <=30 && bValue <= 30 && cValue <= 30) {
        context.scale(5, 5);
    }
    else if(aValue <=40 && bValue <= 40 && cValue <= 40) {
        context.scale(3.7, 3.7);
    }
    else if(aValue <=50 && bValue <= 50 && cValue <= 50) {
        context.scale(3, 3);
    }
    else if(aValue <=70 && bValue <= 70 && cValue <= 70) {
        context.scale(2, 2);
    }
    else if(aValue <=85 && bValue <= 85 && cValue <= 85) {
        context.scale(1.75, 1.75);
    }
    else if(aValue <=100 && bValue <= 100 && cValue <= 100) {
        context.scale(1.5, 1.5);
    }
    else if(aValue <=125 && bValue <= 125 && cValue <= 125) {
        context.scale(1.2, 1.2);
    }
    else if(aValue <=200 && bValue <= 200 && cValue <= 200) {
        context.scale(0.75, 0.75);
    }
    else if(aValue <=250 && bValue <= 250 && cValue <= 250) {
        context.scale(0.6, 0.6);
    }
    else if(aValue <=300 && bValue <= 300 && cValue <= 300) {
        context.scale(0.5, 0.5);
    }
    else if(aValue <=350 && bValue <= 350 && cValue <= 350) {
        context.scale(0.42, 0.42);
    }
    else if(aValue <=400 && bValue <= 400 && cValue <= 400) {
        context.scale(0.37, 0.37);
    }
    else if(aValue <=450 && bValue <= 450 && cValue <= 450) {
        context.scale(0.32, 0.32);
    }
    else if(aValue <=500 && bValue <= 500 && cValue <= 500) {
        context.scale(0.28, 0.28);
    }
}







