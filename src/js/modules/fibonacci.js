app.fib = (function($){
  'use strict';

  function init(){
    fib();
  }

  function fib() {
    // Created by Tim Inman
    // http://codepen.io/thehack/pen/PzaaAk
    var canvas = document.getElementById('fibonacci');
    var context = canvas.getContext("2d");
    var width = window.innerWidth;
    var height = window.innerHeight;
    canvas.height = height;
    canvas.width = width;

    // This will help instruct where each successive square is placed.
    var directions = [
      [-1, -1],
      [-1, 1],
      [1, 1],
      [1, -1]
    ];

    // This will help instruct where each successive arc is placed.
    var arcs = [
      [0, 1.5],
      [1.5, 1],
      [1, 0.5],
      [0.5, 0]
    ];

    var colors = [
      ['#ffc100'],
      ['#ff9a00'],
      ['#ff7400'],
      ['#ff4d00']
    ];
    var size = 5;
    var startX = (width - size) / 2;
    var startY = (height - 5) / 2;

    function fibonacciSpiral(startX, startY, size, lastValue, value, step, xAdjust, yAdjust, lastYAdjust, i) {
      if (i > 3) {
        i = 0;
      }
      if (step == 1) {
        var yAdjust = size;
        //var lastYAdjust = 10;
      }
      if (value > 6008) {
        return
      } else {
        context.arc(startX + xAdjust * directions[i][0], startY + yAdjust * directions[i][1], value * size, arcs[i][0] * Math.PI, arcs[i][1] * Math.PI, true);
        i++
        if ((step % 2 == 0)) {
          var old = yAdjust;
          fibonacciSpiral(startX, startY, size, value, (lastValue + value), (step + 1), xAdjust, Math.pow((Math.sqrt(lastYAdjust) + Math.sqrt(yAdjust)), 2), old, i)

        }
        if (step % 2 != 0) {
          fibonacciSpiral(startX, startY, size, value, (lastValue + value), (step + 1), xAdjust + yAdjust, yAdjust, lastYAdjust, i)
        }

      }
    }

    var ways = [
      [-1, -1],
      [-1, -1],
      [-1, +1],
      [+1, -1]
    ];

    function drawRect(startX, startY, size, moveX, moveY, lastValue, value, i) {
      if (value > 6008) {
        return
      }
      context.fillStyle = colors[i];
      context.fillRect(startX + ways[i][0] * moveX * size, startY + ways[i][1] * moveY * size, value * size, value * size);
      context.rect(startX + ways[i][0] * moveX * size, startY + ways[i][1] * moveY * size, value * size, value * size);
      if (i == 3) {
        drawRect(startX, startY, size, (moveX + moveY), (lastValue + value + moveY), value, (lastValue + value), 0);
      } else if (i == 0) {
        drawRect(startX, startY, size, (lastValue + value + moveX), moveY, value, (lastValue + value), (i + 1));
      } else if (i == 1) {
        drawRect(startX, startY, size, moveX, (value - moveY), value, (lastValue + value), (i + 1));
      } else {
        drawRect(startX, startY, size, value - moveX, (lastValue - moveY), value, (lastValue + value), (i + 1));

      }
    }
    var size = 1;

    var renderActual = function(deltaT) {
      if (size > 6.8) {
        size = 1;
      }

      context.beginPath()
      context.clearRect(0, 0, canvas.width, canvas.height);
      fibonacciSpiral(startX, startY, size, 1, 1, 0, 0, 0, 0, 0);
      drawRect(startX, startY, size, 0, 1, 1, 1, 0);

      context.strokeStyle = '#1C110A'
      context.stroke();
      var d = 1 + (deltaT / 1000);
      if (d > 1) {
        size = size * d;
      } 
    }

    function animLoop( render, element ) {
        var running = true;
        var lastFrame = +new Date;
        
        document.body.onkeyup = function(e) {
          if (e.keyCode == 32) {
            running = !running; 
            if (running) {
              loop(lastFrame);
            }
          }
        }
      
        function loop( now ) {
            if ( running !== false ) {
                requestAnimationFrame( loop, element );
                running = render( now - lastFrame );
                lastFrame = now;
            }
        }
        loop( lastFrame);
    }

    animLoop(renderActual, canvas);

  }


  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
