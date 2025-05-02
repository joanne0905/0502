let video;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  video = createCapture(VIDEO); // 擷取攝影機影像
  video.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  video.hide(); // 隱藏原始影像，僅顯示在畫布上
}

function draw() {
  background(220);
  // 將影像顯示在畫布中間
  image(video, (width - video.width) / 2, (height - video.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  video.size(windowWidth * 0.8, windowHeight * 0.8); // 重新調整影像大小
}
