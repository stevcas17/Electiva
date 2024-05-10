import { useGetBrowserVersion } from './index';

describe('useGetBrowserVersion', () => {
  it('returns an object with name and version properties', () => {
    expect(useGetBrowserVersion()).toHaveProperty('name');
    expect(useGetBrowserVersion()).toHaveProperty('version');
  });

  describe('when userAgent is Chrome', () => {
    it('returns the correct browser name and version', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'Chrome', version: '88' });
    });

    it('returns the correct browser name and version when userAgent contains Edge-Chromium', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Edg/88.0.705.74 Safari/537.36';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'Edge-Chromium', version: '88' });
    });
  });

  describe('when userAgent is Opera', () => {
    it('returns the correct browser name and version when userAgent contains OPR', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 OPR/74.0.3911.218 Safari/537.36';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'Opera', version: '74' });
    });
  });

  describe('when userAgent is Safari', () => {
    it('returns the correct browser name and version', () => {
      const userAgent =
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'Safari', version: '14.0' });
    });
  });

  describe('when userAgent is IE', () => {
    it('returns the correct browser name and version when userAgent contains rv', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'IE', version: '11' });
    });

    it('returns the correct browser name and version when userAgent does not contain rv', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; AS; MAAU; rv:11.0) like Gecko';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'IE', version: '11' });
    });

    it('returns the correct browser name and version when userAgent contains EdgeHTML', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Edg/44.18362.449.0 Safari/537.36';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'EdgeHTML', version: '44' });
    });
  });

  describe('when userAgent is Firefox', () => {
    it('returns the correct browser name and version', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'Firefox', version: '85' });
    });
  });

  describe('when userAgent is SamsungBrowser', () => {
    it('returns the correct browser name and version', () => {
      const userAgent =
        'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'SamsungBrowser', version: '14' });
    });
  });

  describe('when userAgent is Silk', () => {
    it('returns the correct browser name and version', () => {
      const userAgent =
        'Mozilla/5.0 (Linux; Android 11; SM-G975U) AppleWebKit/537.36 (KHTML, like Gecko) Silk/93.2.28 like Chrome/93.0.4577.82 Mobile Safari/537.36';
      jest.spyOn(window.navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(useGetBrowserVersion()).toEqual({ name: 'Silk', version: '93' });
    });
  });
});
