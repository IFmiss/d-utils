/**
 * 动态加载css样式
 * @param url link的地址
 * @param config link属性配置
 * @returns Promise<void>
 */
function loadCss(
  url: string,
  config?: Partial<Omit<HTMLLinkElement, "href">>
): Promise<Event> {
  return new Promise((resolve, reject) => {
    try {
      const link = document.createElement("link");
      link.href = url;
      for (const k in config) {
        link[k] = config[k];
      }
      document.getElementsByTagName("head")[0].appendChild(link);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

export default loadCss;
