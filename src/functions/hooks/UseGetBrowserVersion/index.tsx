import { getUserAgent } from '../../commons';

export const useGetBrowserVersion = (): { name: string; version: string } => {
  const userAgent = getUserAgent();
  const browser =
    userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident|edge|edg|samsungbrowser|silk|nokiabrowser(?=\/))\/?\s*(\d+)/i
    ) || [];

  // IE, MSIE
  const ie = userAgent.match(/\b(trident|msie)\/?(\d+)/i);
  if (ie !== null) {
    const ie11 = userAgent.match(/\brv[ :]+(\d+)/g);
    return ie11 !== null ? { name: 'IE', version: ie11[0].split(':')[1] } : { name: browser[1], version: browser[2] };
  }

  if (browser[1] === 'Chrome') {
    const opera = userAgent.match(/\bOPR\/(\d+)/i);
    if (opera !== null) {
      return { name: 'Opera', version: opera[1] };
    }

    const edge = userAgent.match(/\b(edge|edg)\/(\d+)/i);
    if (edge !== null) {
      return parseInt(edge[2]) >= 74
        ? { name: 'Edge-Chromium', version: edge[2] }
        : { name: 'EdgeHTML', version: edge[2] };
    }
    return { name: browser[1], version: browser[2] };
  }

  if (browser[1] === 'Safari') {
    const safari = userAgent.match(/version\/(\d+(\.\d+))/i);
    if (safari !== null) {
      return { name: browser[1], version: safari[1] };
    }
  }

  // Firefox, SamsungBrowser, Silk, NokiaBrowser
  return { name: browser[1], version: browser[2] };
};
