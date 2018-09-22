(function(){
  'use strict';
  // var url = location.href;  document.write(url);
  // document.write(navigator.userAgent);  sounds interesting..
  // onload, onbeforeunloadも面白そう

  // https://utano.jp/demo/2013/09/canvas_draw_line
  // これみてwidthとheightをこっちで記述する、最終的にはPCとモバイルで分ける

/* 変数定義 */
  var box_color = "black";
  var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext('2d');
  var dnld = document.getElementById("dnld");
  var wb = document.getElementById("wb"),
      bb = document.getElementById("bb");
  var clr = document.getElementById("clear");
  var csWidth, csHeight;

  if(window.matchMedia('(min-width: 700px)').matches) {
    csWidth = 640,
    csHeight = 480;
  } else {
    csWidth = 320,
    csHeight = 320;
  }

  canvas.width = csWidth;
  canvas.height = csHeight;

/* 関数宣言 */
// set background color
  function set_white() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, csWidth, csHeight);
  }
  function set_black() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, csWidth, csHeight);
  }

// color change button
  function change_color(color) {
    box_color = color;
  }

// plot
  function drawRect(x, y, width, height) {
    ctx.fillStyle = box_color;
    ctx.fillRect(x, y, width, height);
  }
  function onClick(e) {
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    console.log("x:", x, "y:", y);
    drawRect(x, y, 20, 20);
  }

// clear
  function clear_canvas() {
    ctx.clearRect(0, 0, csWidth, csHeight);
  }

// download
  function dwnld() {
    var base64_data = canvas.toDataURL('image/png'), // 画像をbase64に変換
        bin_data = atob(base64_data.replace(/^.*,/, '')), // bas64をバイナリに変換
        len = bin_data.length,
        buf = new Uint8Array(len); // バッファを確保, Uint8Arrayはunsigned charみたいなやつ
    for(var i=0; i<len; i++) {
      buf[i] = bin_data.charCodeAt(i); // バイナリをUTF-16のユニコード値に変換してバッファに書き込む
    }
    var blob_data = new Blob([buf], {type: 'image/png'}), // バッファのデータからBlobを生成
        created_url = window.URL.createObjectURL(blob_data); // BlobからURLを生成
    dnld.setAttribute("href", created_url); // 生成したURLに飛ぶ
    dnld.setAttribute("download", "image.png"); // image.pngとしてダウンロード
  }

/* 実行 */
  wb.addEventListener('click', set_white, false);
  bb.addEventListener('click', set_black, false);

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

  canvas.addEventListener('click', onClick, false);

  clr.addEventListener('click', clear_canvas, false);
  dnld.addEventListener('click', dwnld, false);
})();

/*
  referring...  https://qiita.com/kyrieleison/items/a3ebf7c55295c3e7d8f0
  trying to simplify referring... https://teratail.com/questions/54493
  var ary = [];
    $('.button').each( function() {
      var src = $(this).attr('id');
      ary.push(src);
    });
    console.log(ary);
as of 2018/8/31
*/
/*
2018/9/18
https://qiita.com/nekoneko-wanwan/items/2827feaf5a831a0726aa
線を書くの、これみてやろうとしたけど動かないしやりたいことと違った
onDownをうまく活用して書けるんじゃないかと思ってるところ
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 10;
  var csWidth = ctx.width,
      csHeight = ctx.height,
      center = {
        x: csWidth / 2,
        y: csHeight / 2
      };

  function drawHorizontalLine() {
    ctx.beginPath();
    ctx.moveTo(0, center.y);
    ctx.lineTo(csWidth, center.y);
    // ctx.closePath();
    ctx.stroke();
  }

  function drawVerticalLine() {
    ctx.beginPath();
    ctx.moveTo(center.x, 0);
    ctx.lineTo(center.x, csHeight);
    // ctx.closePath();
    ctx.stroke();
  }

  drawHorizontalLine();
  drawVerticalLine();
*/
