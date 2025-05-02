let video;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  video = createCapture(VIDEO); // 擷取攝影機影像
  video.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  video.hide(); // 隱藏原始影像，僅顯示在畫布上

  // 建立與 video 一樣大小的 graphics
  graphics = createGraphics(video.width, video.height);
}

function draw() {
  background(220);

  // 更新 graphics 的內容
  updateGraphics();

  // 顯示 video
  translate(width / 2, height / 2); // 將原點移到畫布中心
  //scale(-1, 1); // 水平翻轉影像
  image(video, -video.width / 2, -video.height / 2); // 繪製影像，居中顯示

  // 顯示 graphics 在 video 上方
  image(graphics, -video.width / 2, -video.height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  video.size(windowWidth * 0.8, windowHeight * 0.8); // 重新調整影像大小
  graphics = createGraphics(video.width, video.height); // 重新建立 graphics
}

function updateGraphics() {
  graphics.background(0); // 設定背景為黑色
  video.loadPixels(); // 確保 video 的像素資料已更新
  for (let x = 0; x < video.width; x += 20) {
    for (let y = 0; y < video.height; y += 20) {
      let col = video.get(x, y); // 擷取 video 中相對位置的顏色
      graphics.fill(col);
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製寬高為 15 的圓
    }
  }
}
