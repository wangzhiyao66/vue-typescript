let html = document.getElementsByTagName('html')[0];
if (html) {
  // var w = window.innerHeight;
  let w = window.innerWidth;
  let fontSize = (w > 1440 ? 1440 : w) / 1440 * 20;
  // var fontSize = w / 1440 * 20;
  html.style.fontSize = fontSize + 'px';
  /*已经适配来当前的设备*/
}
/*响应*/
window.onload = function () {
  let resizeTime: any = null;
  window.onresize = function () {
    // var w = window.innerHeight;
    let w = window.innerWidth;
    let fontSize = (w > 1440 ? 1440 : w) / 1440 * 20;
    // var fontSize = w / 1440 * 20;
    html.style.fontSize = fontSize + 'px';
    if (resizeTime) {
      clearTimeout(resizeTime);
    }
    resizeTime = setTimeout(() => {
      // @ts-ignore
      window['resizeExecute'] && window['resizeExecute'](); // resize 时调用点击地图两侧的左右边栏，重置地图上的参数
    }, 300);
  }
}
