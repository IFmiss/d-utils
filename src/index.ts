import {
  addClass,
  calcSameEleLength,
  loadCss,
  loadScript,
  Log,
  memo,
  omitStr,
} from "./lib/index";

const add = memo((a) => {
  console.info(100 + a);
  return 100 + a;
});

add(2);
add(2);
loadCss(
  "https://daiwei.site/web_next/_next/static/css/styles.f02299a1.chunk.css"
);
addClass(document.body, "d-utils");
Log.info("d-utils");
