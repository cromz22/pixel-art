(function(){
  'use strict';

  var box_color = "black";
  var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext('2d');
  var dnld = document.getElementById("dnld");

  function dwnld() {
    var base64_data = canvas.toDataURL('image/png'),
        bin_data = atob(base64_data.replace(/^.*,/, '')),
        len = bin_data.length,
        buf = new Uint8Array(len);

    for(var i=0; i<len; i++) {
      buf[i] = bin_data.charCodeAt(i);
    }

    var blob_data = new Blob([buf], {type: 'image/png'}),
        created_url = window.URL.createObjectURL(blob_data);

    dnld.setAttribute("href", created_url);
    dnld.setAttribute("download", "image.png");
  }

  function change_color(color) {
    box_color = color;
  }

  function clear_canvas() {
    ctx.clearRect(0, 0, 640, 480);
  }

  function onClick(e) {
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    console.log("x:", x, "y:", y);
    drawRect(x, y, 20, 20);
  }

  function drawRect(x, y, width, height) {
    ctx.fillStyle = box_color;
    ctx.fillRect(x, y, width, height);
  }

  document.getElementById("yellow").addEventListener('click', function() { change_color("yellow"); }, false);
  document.getElementById("orange").addEventListener('click', function() { change_color("orange"); }, false);
  document.getElementById("lightgreen").addEventListener('click', function() { change_color("lightgreen"); }, false);
  document.getElementById("green").addEventListener('click', function() { change_color("green"); }, false);
  document.getElementById("skyblue").addEventListener('click', function() { change_color("skyblue"); }, false);
  document.getElementById("blue").addEventListener('click', function() { change_color("blue"); }, false);
  document.getElementById("purple").addEventListener('click', function() { change_color("purple"); }, false);
  document.getElementById("red").addEventListener('click', function() { change_color("red"); }, false);
  document.getElementById("brown").addEventListener('click', function() { change_color("brown"); }, false);
  document.getElementById("black").addEventListener('click', function() { change_color("black"); }, false);
  document.getElementById("grey").addEventListener('click', function() { change_color("grey"); }, false);
  document.getElementById("white").addEventListener('click', function() { change_color("white"); }, false);
  document.getElementById("clear").addEventListener('click', clear_canvas, false);

  canvas.addEventListener('click', onClick, false);
  dnld.addEventListener('click', dwnld, false);

/*
  referring...  https://qiita.com/kyrieleison/items/a3ebf7c55295c3e7d8f0
  trying to simplify referring... https://teratail.com/questions/54493
  var ary = [];
    $('.button').each( function() {
      var src = $(this).attr('id');
      ary.push(src);
    });
    console.log(ary);
*/

})();
