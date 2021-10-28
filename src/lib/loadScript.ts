/**
 * @description 动态加载script标签
 * @param url  script 的地址
 * @param config  script配置
 * @returns Promise<Event> onload的 e
 */
function loadScript(
  url: string,
  config?: Partial<Omit<HTMLScriptElement, "src" | "onload" | "onerror">>
): Promise<Event> {
  return new Promise((resolve, reject) => {
    try {
      const body = document.body || document.getElementsByTagName("body")[0];
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      for (const k in config) {
        script[k] = config[k];
      }
      body.appendChild(script);
    } catch (e) {
      reject(e);
    }
  });
}

export default loadScript;
