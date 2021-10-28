/**
 * @description 复制网页文字到剪切板，之后可以粘贴在任何可粘贴的地方
 * @param { String } str 拷贝的内容
 * @example
 * copyText('hello world')
 */
function copyText(str: string): void {
  const textArea = document.createElement("textarea");
  textArea.style.cssText =
    "position: absolute; top: -1000px; right: -1000px; z-index: -1000;";
  document.body.appendChild(textArea);
  textArea.value = str;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

export default copyText;
