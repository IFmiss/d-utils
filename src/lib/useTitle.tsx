import { useEffect } from 'react';

export default function (titleStr: string) {
  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    if (title) {
      title.innerText = titleStr;
      return;
    }
    // 创建一个title
    const head = document.head;
    const titleEle = document.createElement('title');
    titleEle.innerText = titleStr;
    head.appendChild(titleEle);
  }, []);
}
