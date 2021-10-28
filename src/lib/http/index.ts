import Log from "./../log/index";
import stringifyUrl from "./../stringifyUrl";

export interface RequestInitWrapper extends RequestInit {
  timeout?: number;
  showTip?: boolean;
  query?: object;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type HttpContentType =
  | "application/json;charset=UTF-8"
  | "application/x-www-form-urlencoded; charset=UTF-8";

export interface InterfaceType<T> {
  status: number;
  msg: string;
  result: T;
}

function timeout(ms: number = 12 * 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        msg: "可能由于网络状态等原因，暂无数据",
        status: 0,
        result: null,
      });
    }, ms);
  });
}

async function http<T>(
  url: RequestInfo,
  c?: RequestInitWrapper
): Promise<InterfaceType<T>> {
  let newUrl = url;
  console.info("url", url);
  if (c && c.query && Object.keys(c.query).length > 0) {
    newUrl = `${url}?${stringifyUrl(c.query)}`;
  }
  const config = Object.assign(
    {},
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      showTip: true,
    },
    c
  );

  const requestQueue = [
    timeout(config.timeout),
    window.fetch(`${newUrl}`, config),
  ];
  return new Promise((resolve, reject) => {
    Promise.race(requestQueue)
      .then((response: Response | any) => {
        if (response.ok || (response.status >= 200 && response.status < 300)) {
          response.json().then((res: InterfaceType<T>) => {
            if (res.status && res.status === 200) {
              resolve(res);
              return;
            }
            if (config.showTip && res.msg) {
              Log.error(res.msg);
            }
            reject(res);
          });
        } else {
          response && response.msg && Log.error(response.msg);
          reject(response);
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

interface StringObj {
  [props: string]: any;
}

export function formatRequestBody(params: StringObj) {
  const newParamas = new URLSearchParams();
  for (const k in params) {
    newParamas.append(k, params[k]);
  }
  return newParamas;
}

export default http;
