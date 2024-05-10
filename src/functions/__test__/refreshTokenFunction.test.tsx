import { mocked } from 'ts-jest/utils';
import axios from 'axios';
import getDataCommerce from '../Get-data-commerce';
//import refreshTokenFunction from '../refreshTokenFunction';

jest.mock('../Get-data-commerce');

const mCommerce = mocked(getDataCommerce);

jest.mock('axios', () => {
  const mAxiosInstance = {
    post: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  };
  return {
    create: jest.fn(() => mAxiosInstance)
  };
});
describe('Refresh token test function ', () => {
  it('Refresh token resolved all data', async () => {
    const tokens = {
      accessToken:
        'IcAULP8wdfULr6lHL8MT8gqdn/t4bwpQZx6E4daaeb/xp8kzUfKRvVX5tSzvd5pQOvInee5S2X451KKPAkGdlfWDEcwaRVr6gUR9O+ylb9RZ7+gJ36dYPfKZ5ROd0YFZU10biK3CxAlL5pSvsQG9Gov2uH2hpAYrulBpPZqSR5DlM8dsIgfE5MvkCfdaxKHPcXOt+kA1ePoVPf0RHAG/ZonqSaNOePTAdm59ZLmaHwgRg0bruEawvRX3GWHXCltKBNM7eCRYe/Qm/ZqUEuit76qrHtxGj9Adlb5gFWFsRpb6Vw60z3kQZO+n0xTHQ6ZMUL0x0TXajbBsOsuhe47jid1cR9f7iE0SeEciUKTGzp4/t6DlMB94dDFSelrX1JLF/sdLpru9ZY58bJZr+3ZKrF1IHDnnBqiaSdwL7n3n2foznVZt45eZVueU04Xg0RwBIiT+bMHQ+/jNHWH0eQuzAngpxlHDyLpms4Mgd+e+zZPryzJnz0NtYq75ebuG7oaEXQWyHkhqTlaZsf+7bKrGBLvT6oiUvRFgHDxTcvEKesmCMrGBrclA+CAVIXYiVt2lLByLV7LDNHdJ1KGbfD8JRWn58OEYNGtD7k08+n8eAHyJ5XhMIt1pALnJsxJ9pGlIPqXTFHPLN1ZMY+FPc2csv0MZGrQ/vowBwkuOUakEcqj6U0/54diM/XWMVCG9P6m9FcI5R5fn7fowkvbh0lR/QSXgxe5ThYWXljuoQ1EhKTN8/piAEZVNp8pBzIfyORQEGHND1ZsJ5Di9/tOeDf5+PMKRlI6ywWGEO5ik2pRUdpm1t+f/EHCB083MSfZXdfaAey1ZXJ98ZbKkoXXklxEJvFRiCRUpJAgkQ+YuVJBhXuYqZWw4GhYoKEYSA9nBbyEJWMflRggVEAVKVPJIpJJsGLpHtn/RrK/s5VF7nLHQJCAe+jPz/bEh0XRqUVPVG0eQpVn1HlWIvsr6HfTMuKOQ4gSza2UVy6GREg0BOqFzO7DJb6LzkMYsNsED2CNrKicZ5nhSFptXIUqPqS3zfL/b3A7NmyeecLRi0/wtISowNDJfTv4tj0ORzdd/I/YIboJEp4rDF1f9yta6WAhIZZZKe8FvOcJZyPaYGlmhlzkfzHVRxvoQFC8qG7aPMjZ5/c9hwQvADOh/GfZP0a3Um0jiCqAxg5KDHAbV6dJW/hsflo8SKQKwth7AxqpCUETJd8Dxs65yh8EbTMYch1hQbSMnwJHCwFw4LarfDsU5mYNY1m9jAvZ2QIEEfobnYR6uqc4eLxQ2HmHM4z7XTMnuOLxa2sIPBjyti92BNOMWH4z24KP7vlwZRZfEy8vlbJXBGqMSfsWlPL8c9yWm30keaoSy1kC308XVCuJ3ZGtvVT39Lapdb78xGv2ynxc7v4OVVhvHO29M/FeuMjlP8StDM9Oi7JeYbn/Yqzw9W0C5rqUJVxY=',
      refreshToken:
        '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',
      idToken:
        '8Rh8ahCgOxd+2CgUkzBL11Fy52+o4eF6/vUusozZbvf1dumIL9MUPCiGK8yOV88J2z0+02Owdy2iVklGFSLaK7HdmP7CdWaxLJpQ+SJ5JA5Z7+gJ36dYPfKZ5ROd0YFZU10biK3CxAlL5pSvsQG9Gov2uH2hpAYrulBpPZqSR5DlM8dsIgfE5MvkCfdaxKHPcXOt+kA1ePoVPf0RHAG/ZonqSaNOePTAdm59ZLmaHwgRg0bruEawvRX3GWHXCltKoe5A65N4h7J0s4gVQp7jATzy4IuDPO9FtUsJdr6u/A7U9tEMz4TS6nW1KTnFrT9Yzgev7gMRQpjV5SC3FbrVrMcLgVZxTqYcRMVX8DCwECKqRMraiWrSoAWR5wOVCr8Z3RJoxIstaQnvUFyEO0d44j8fqcyCfWsJA55+I6JISQGGZYHl4E9tZdoLwWoFRnWDP6r1k7pHnGxOmkgCFH+sVDkChAlP18ydUZQELgEPDQnM1F4IA3eVjBe59xq2nB4Fuh5gBEVUf0TNmDwaocKuuIF3vRD0ggHGlTzV8avf96/4oqvg0iT1WfG7wvDIkrfYxD8P7ietIeyvgKyenIZIdTJP2Rj8dJopJuQNOiDNtyPtqD9G4qPIRQzpv6jwXg2ASgkIbVZrcNOAttMGqxRzrgDC6BVsWshbQ4DdzTm8ZhWfozF8gW65u7l8meFfiWZKnpGv7GLAGC4gaSWSd5vhdVZquf6yPAFv8XO32kBoOkhHih/vMB+nfwBhD26k6KaYWQtKxAB2MzRP7ixRi+7J+iaL4I3lG6rwN3n2s6NQ+5fmceZEfmqXOyou1PFGtCuLu48DkYsusdE54aC2tDOFXAo6wfho/m/TEH3USQKU9gAgTDlpMG0IKd1L7AaGwDWXtTaQ29967i4HukG3+tXkPsILiiFJUtuS33W6yAJ+FpwjvZMZPoIbkfbV5oSvNd61QYXIzaHJ4EXjpjtv54BvjQmNiNoopZ/1iqeQnqiUbY95D0aCIzHsr+yJOhpMvmegomfd+qSU9dO8bVHucO97VrbJk1s7t3hW2FZGxrif6NT4wlcxSzjWUVXYj3g41j+qBRZ9eb5VzJNEzP2pJpY102LnT7DZpunPTCY5FKT6Y7HqXeAJs6IAj3tcfdRldP8Izej0dYscUQyqRrUVH0Bo20k+9U3Fv46Ruqh6D/uGN21Yli+auViBv4LQhucApvkGWS9VOTRqN6/QkA170ovXCBsmnMXhOu103TYk/fzXjP6OChxJZWlXmbZgpOX8AN1zwQZkK8+8/plG5jVJtfd7GRCALr/QXRnpw9ivVD2KcIQA9ws9B5uAFx7PSVfko6O505EGmXag78qJ9Xy4KKvXvWGX2VKxBQGrrUgLmP6ad9HUVzRBH5E+bp+e3DEWvx5XP4c/SdFD+ujEg6PO3Axg1uvb2rBAzqfHqY4+HpksNyAGWMrSnbDyjineyNeqE6VT5rmpT3ynj27+TEW/39eHYYq5d4ts8MbBnBaMOBjlP1Li+csvY+GRrH76I93xw6xOplp2PlNqkqitX4qgLWMQ1rdgUB3WfswVnQWbPKM3VV9rLSCjzcUcQ63lWVpzZVKaXu7nZH3GiAjOqsdgvjB/pxXu1gQBMFSEI4nuOXYrHnd2Q6JrY+6VAnmhfbQb5Bkhry13Q+XZaB23JkSlsT6zvmzxIR110llQvqp0TFamxPdE17FURFtKUZjXB6FtsPHuTTaXeeBjbRXUnN/El5dvjJpcnezPVQRaEfBe7AGXcooTpZbzk2QxDY0wJ+EvD38NwTLZJeDSq5S+nRe7oKbb6o1o2thPgAXgxHYY+jAEKMiV+QI+GsQYN2PK+uaIB+qMFgUsZ0W9R7guzZUhbs1DL1FIaTBlLS1rKDhskJdqxA5tRXCVYxlmpcmfHaYMKKE9Zce5gzxSUGuq+aZJBIr8sF19eW01xWjXYRzuAdx7aMU=',
      dateExpirationAccessToken: 'test-date',
      sub: '9c7a9747-cf74-40d5-b6c3-24c3aac75ba9',
      sessionExpirationIn: '420',
      pwExpired: 'N',
      inactiveUser: 'N',
      menubar:
        'eyJhbGciOiJIUzUxMiJ9.eyJib2R5IjpbeyJpZE9wdGlvbiI6IjEiLCJuYW1lIjoiZGFzaGJvYXJkIiwicGF0aCI6Ii9kYWxlLXBvcnRhbC1mcm9udGVuZC1wb3J0YWwtZW5yb2xsbWVudC9pbmljaW8iLCJpY29uIjoibWRpSG9tZSIsIm9yZGVyIjoiMSIsIm9wdGlvbnNMaXN0IjpbXSwiZ3JvdXAiOiIxIn0seyJpZE9wdGlvbiI6IjIiLCJuYW1lIjoicmVwb3J0cyIsInBhdGgiOiIvZGFsZS1wYXNhcmVsYS1mcm9udGVuZC1yZXBvcnRzLWRhc2hib2FyZC8iLCJpY29uIjoibWRpQ2hhcnRCb3giLCJvcmRlciI6IjIiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMSJ9LHsiaWRPcHRpb24iOiIzIiwibmFtZSI6InByb2ZpbGUiLCJwYXRoIjoiL2RhbGUtcG9ydGFsLWZyb250ZW5kLXBvcnRhbC1lbnJvbGxtZW50L3BlcmZpbC1jbGllbnRlIiwiaWNvbiI6Im1kaUFjY291bnQiLCJvcmRlciI6IjMiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMSJ9LHsiaWRPcHRpb24iOiI0IiwibmFtZSI6InN1cHBvcnQiLCJwYXRoIjoiL2RhbGUtcG9ydGFsLWZyb250ZW5kLXBvcnRhbC1lbnJvbGxtZW50L3NvcG9ydGUiLCJpY29uIjoibWRpRmFjZUFnZW50Iiwib3JkZXIiOiI0Iiwib3B0aW9uc0xpc3QiOltdLCJncm91cCI6IjEifSx7ImlkT3B0aW9uIjoiNSIsIm5hbWUiOiJub3RpZmljYXRpb25zIiwicGF0aCI6Ii9kYWxlLXBvcnRhbC1mcm9udGVuZC1wb3J0YWwtZW5yb2xsbWVudC9ub3RpZmljYWNpb25lcyIsImljb24iOiJtZGlCZWxsIiwib3JkZXIiOiIxIiwib3B0aW9uc0xpc3QiOltdLCJncm91cCI6IjIifSx7ImlkT3B0aW9uIjoiNiIsIm5hbWUiOiJzZXR0aW5ncyIsInBhdGgiOiIvZGFsZS1wb3J0YWwtZnJvbnRlbmQtcG9ydGFsLWVucm9sbG1lbnQvYWp1c3RlcyIsImljb24iOiJtZGlDb2ciLCJvcmRlciI6IjIiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMiJ9LHsiaWRPcHRpb24iOiI3IiwibmFtZSI6ImhlbHAiLCJwYXRoIjoiL2RhbGUtcG9ydGFsLWZyb250ZW5kLXBvcnRhbC1lbnJvbGxtZW50L2F5dWRhIiwiaWNvbiI6Im1kaUhlbHBDaXJjbGUiLCJvcmRlciI6IjMiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMiJ9XSwiaWF0IjoxNjQyNzgzMzYyLCJqdGkiOiJmYjEwY2YxYy03YWU5LTRlZDgtYTY0Mi03NWI3ZTAzZGNhMDIifQ.p5OR-WpczIbGeox5Rii0ZsI5-4i3GlcDl1INju0M-9RVb0jUpnvknSD6IhWPN1skj14XMTWDKvxRrpETzEGj6A',
      __typename: 'LoginToken'
    };
    const value = {
      username: 'Username'
    };
    mCommerce.mockResolvedValue(value);
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        data: {
          data: {
            refreshToken: {
              stateCode: 'code-test',
              newExpiration: 'code-test',
              accessToken: 'code-test',
              idToken: 'code-test'
            }
          }
        }
      })
    );
    //await refreshTokenFunction(tokens);
  });
  it('Refresh token resolved without all data', async () => {
    const tokens = {
      accessToken:
        'IcAULP8wdfULr6lHL8MT8gqdn/t4bwpQZx6E4daaeb/xp8kzUfKRvVX5tSzvd5pQOvInee5S2X451KKPAkGdlfWDEcwaRVr6gUR9O+ylb9RZ7+gJ36dYPfKZ5ROd0YFZU10biK3CxAlL5pSvsQG9Gov2uH2hpAYrulBpPZqSR5DlM8dsIgfE5MvkCfdaxKHPcXOt+kA1ePoVPf0RHAG/ZonqSaNOePTAdm59ZLmaHwgRg0bruEawvRX3GWHXCltKBNM7eCRYe/Qm/ZqUEuit76qrHtxGj9Adlb5gFWFsRpb6Vw60z3kQZO+n0xTHQ6ZMUL0x0TXajbBsOsuhe47jid1cR9f7iE0SeEciUKTGzp4/t6DlMB94dDFSelrX1JLF/sdLpru9ZY58bJZr+3ZKrF1IHDnnBqiaSdwL7n3n2foznVZt45eZVueU04Xg0RwBIiT+bMHQ+/jNHWH0eQuzAngpxlHDyLpms4Mgd+e+zZPryzJnz0NtYq75ebuG7oaEXQWyHkhqTlaZsf+7bKrGBLvT6oiUvRFgHDxTcvEKesmCMrGBrclA+CAVIXYiVt2lLByLV7LDNHdJ1KGbfD8JRWn58OEYNGtD7k08+n8eAHyJ5XhMIt1pALnJsxJ9pGlIPqXTFHPLN1ZMY+FPc2csv0MZGrQ/vowBwkuOUakEcqj6U0/54diM/XWMVCG9P6m9FcI5R5fn7fowkvbh0lR/QSXgxe5ThYWXljuoQ1EhKTN8/piAEZVNp8pBzIfyORQEGHND1ZsJ5Di9/tOeDf5+PMKRlI6ywWGEO5ik2pRUdpm1t+f/EHCB083MSfZXdfaAey1ZXJ98ZbKkoXXklxEJvFRiCRUpJAgkQ+YuVJBhXuYqZWw4GhYoKEYSA9nBbyEJWMflRggVEAVKVPJIpJJsGLpHtn/RrK/s5VF7nLHQJCAe+jPz/bEh0XRqUVPVG0eQpVn1HlWIvsr6HfTMuKOQ4gSza2UVy6GREg0BOqFzO7DJb6LzkMYsNsED2CNrKicZ5nhSFptXIUqPqS3zfL/b3A7NmyeecLRi0/wtISowNDJfTv4tj0ORzdd/I/YIboJEp4rDF1f9yta6WAhIZZZKe8FvOcJZyPaYGlmhlzkfzHVRxvoQFC8qG7aPMjZ5/c9hwQvADOh/GfZP0a3Um0jiCqAxg5KDHAbV6dJW/hsflo8SKQKwth7AxqpCUETJd8Dxs65yh8EbTMYch1hQbSMnwJHCwFw4LarfDsU5mYNY1m9jAvZ2QIEEfobnYR6uqc4eLxQ2HmHM4z7XTMnuOLxa2sIPBjyti92BNOMWH4z24KP7vlwZRZfEy8vlbJXBGqMSfsWlPL8c9yWm30keaoSy1kC308XVCuJ3ZGtvVT39Lapdb78xGv2ynxc7v4OVVhvHO29M/FeuMjlP8StDM9Oi7JeYbn/Yqzw9W0C5rqUJVxY=',
      refreshToken:
        'lvbjNrJ6dZTJ/JqwOe4ygiobDHtZdbHrWIyK7EXLHD518lVZRybSvLadsLq5mA8WZkNY2Qa+oM+Gv1uJhWrAvAVG3rKuF+VnFoQZGZf0sSl3f+nvU+ncRSgoP9kkGQkRJlx29pMzvbw9Yth9SdAtCkOg94v2Qm0CPUjXezQpyGxV8Msb+3ny+bGpWAkBTItxEFHAQE4MxvxFATm4iBgITZt4P8ry53nL6kTFCi4BVtsF0uqSDLMWHNEGfIEs9tzXl2sfL4T7Z1rf/M3vW/sCkouoVxWyjaDFoazfXdid+34PYA4wZmkgUN0ksKye8/DzPgNnE9YGIPTJJy9BTPv/FMi9f4PguqcMwicd8y0YPYmU1gQ2ej568gHa6en8m4sWzy0VLA0Ou5R78Vg6cIoFG2lOWChA1kQA5VXEjYHOYj7xIO5Z2pmtm4xRiF6XVH4RRkbFeQTmJewogLaMd6Zzb5OY1VP76GzbAnh2lLpVdwi1435QFEVuAYRsD5jx+/6WJL51GP+pesQ4s5/vUMmVQxjef7d2lCTxzIVuL3UM6bW+rrBK2m2Gv7mjOOuVZxW8YBiKKiQVJoa0vnLRiFeZ0YG0jN9lz+1Sl6rpSLnQX52Ie7AfDfQJjtKr52KxlyowVYePA78DdRgzMobucBrd0CzT7xQXxYWxAd6BTmsfRjw440v1ZtK9Z+vz2j8RAHsuAS6Aetvh74zRSLuYMFFTFucFeRC/zfcUllMmZUj/4pw/zdNhr3lswRGsqbJLT5TuRUiIyyDmiA1GUfD6ciCMb+FUJXSrqjY3oiQIRpGxJoakqq5tgY5GTg4+7gYjbw/V88tOXpOYDL4T8LCNRwRVZREVQjkXJ6VJ3OiHIXThO2RYsWxIZyqUGZQ1mUYrvnqP8cWMUiuof0alfQNn5R2dStvn3CbJ7vzx1u8Qb+GHIr2znWtafUxI1gOzjOUmL7NgzIFZJb6SrUzyqmVM3LFCeF682qjQ8w77V2UvrU157hEXmzIE9e0ZfL2HIyrPWxWbOCLDC2ti8NI2+f9zeQ8+hcnNR9QaHzOSKHkVFnVKyIl/T0nE7Wot/65JfgRYfDQUtZorS8xSY0rt/P6sgrV34QnO8UkgxAyUCzh5FeR5MkbLIQeJ4xaH9B0IeNCgMvgwXxmWsOoERzlG+UYWaLyUwxwt9610BA5V2e5WWKOi9jf49VNefyMFAGhbw+Gfw08xvEHV12H+Lvgjp3Ws5setg0S27TRpUbojZLUo5jlNMD73gUSxjGtrNQbBlBC/gor8sfrYDFQIMKN3g0kMw9+z3U+cyq9r/pvFTiPtqltIIuHczZBkvHHpvU847LaRp4q62MnatrBymybj5yWUo5FJdBTRNLINUNXkTIdT7jiRRtCIwEMG038Y+/Oh7HmI3i84pP1YyPpzmkKUl2CV+ov4iQNFekzgIo9qKRFfyJV8/F1GFlhRnQvayolm/2IsM/+vWkBoB0iQUOJRADCSSM3hZaA++K82cqO6Aucw/aJGX3NvHXMf2zIyMP455eFKukrqcUYp2HvtHA5eGjhMfpXq4+/Pk2ZLUHqlH3FqZCvZsTaFQprk5ScV8/woM5t6xAZsQuMiyjHlHZ5MgZBfNBvZRdArv9eBOgEB5rlMG0m8E/6tb8W+TfJ+nglfRPBa74Y2koqIos2VG+CHlDLx9kLQtT/A+jKfqzZchKjxFGmA72VZGnB/GzwmrjywX9eIrbrEs8qdxR7uvuLFtppXtVnABpRn4lUMJHPv3nLk6mMrM5WH6WMkD4x34/1ghqsv/SOrrUBbOtpt6szmv9sNWKUAoONw/6Gah9sGLBvi6g+aLgPzF8gTAvrkcMMrrsqsaK8czW/QbaU0AqgbSB8WUizCsPcsEpXXBFYEH8rQYNyrgGfXGB6Grdhm+KE4ZyfcNJXAgf2UkEizQFfzDlx3E21BsXpiozGZ2l0rJ5nKmlTIzRu8DBD/KbqshN1PdV226d9E7sVxK24cg+Mqg0EeBH2JVUmBkLafLbfvSi8y8/+eYfIzwY7xEDJqiCcnDVe87WQo8+Cw7i1D8A4Kt53jfRk4fLJHzoubSRVKHrtYmiBG3SWqSUJLi+qzmaTc7F8Hj7i9+wvafcuTvjme6g/+pZ54POA2NC8WysMoUAvilAMQPRy3e+cdoUKybgWbm0/tXZAl05+e96WH6REt/xPSYaE/WrMqsSsddtkmIU4fA2NFsSb2EGKAMRJoqS92cIKw5qGPty0Ia+O9mV/WpEo9bfbBixJEh2h94Nku16LleLr4So5JXiHq2Cp6ne6kzl5AV5vnlHLhv74IXaMce09LzgCEsg==',
      idToken:
        '8Rh8ahCgOxd+2CgUkzBL11Fy52+o4eF6/vUusozZbvf1dumIL9MUPCiGK8yOV88J2z0+02Owdy2iVklGFSLaK7HdmP7CdWaxLJpQ+SJ5JA5Z7+gJ36dYPfKZ5ROd0YFZU10biK3CxAlL5pSvsQG9Gov2uH2hpAYrulBpPZqSR5DlM8dsIgfE5MvkCfdaxKHPcXOt+kA1ePoVPf0RHAG/ZonqSaNOePTAdm59ZLmaHwgRg0bruEawvRX3GWHXCltKoe5A65N4h7J0s4gVQp7jATzy4IuDPO9FtUsJdr6u/A7U9tEMz4TS6nW1KTnFrT9Yzgev7gMRQpjV5SC3FbrVrMcLgVZxTqYcRMVX8DCwECKqRMraiWrSoAWR5wOVCr8Z3RJoxIstaQnvUFyEO0d44j8fqcyCfWsJA55+I6JISQGGZYHl4E9tZdoLwWoFRnWDP6r1k7pHnGxOmkgCFH+sVDkChAlP18ydUZQELgEPDQnM1F4IA3eVjBe59xq2nB4Fuh5gBEVUf0TNmDwaocKuuIF3vRD0ggHGlTzV8avf96/4oqvg0iT1WfG7wvDIkrfYxD8P7ietIeyvgKyenIZIdTJP2Rj8dJopJuQNOiDNtyPtqD9G4qPIRQzpv6jwXg2ASgkIbVZrcNOAttMGqxRzrgDC6BVsWshbQ4DdzTm8ZhWfozF8gW65u7l8meFfiWZKnpGv7GLAGC4gaSWSd5vhdVZquf6yPAFv8XO32kBoOkhHih/vMB+nfwBhD26k6KaYWQtKxAB2MzRP7ixRi+7J+iaL4I3lG6rwN3n2s6NQ+5fmceZEfmqXOyou1PFGtCuLu48DkYsusdE54aC2tDOFXAo6wfho/m/TEH3USQKU9gAgTDlpMG0IKd1L7AaGwDWXtTaQ29967i4HukG3+tXkPsILiiFJUtuS33W6yAJ+FpwjvZMZPoIbkfbV5oSvNd61QYXIzaHJ4EXjpjtv54BvjQmNiNoopZ/1iqeQnqiUbY95D0aCIzHsr+yJOhpMvmegomfd+qSU9dO8bVHucO97VrbJk1s7t3hW2FZGxrif6NT4wlcxSzjWUVXYj3g41j+qBRZ9eb5VzJNEzP2pJpY102LnT7DZpunPTCY5FKT6Y7HqXeAJs6IAj3tcfdRldP8Izej0dYscUQyqRrUVH0Bo20k+9U3Fv46Ruqh6D/uGN21Yli+auViBv4LQhucApvkGWS9VOTRqN6/QkA170ovXCBsmnMXhOu103TYk/fzXjP6OChxJZWlXmbZgpOX8AN1zwQZkK8+8/plG5jVJtfd7GRCALr/QXRnpw9ivVD2KcIQA9ws9B5uAFx7PSVfko6O505EGmXag78qJ9Xy4KKvXvWGX2VKxBQGrrUgLmP6ad9HUVzRBH5E+bp+e3DEWvx5XP4c/SdFD+ujEg6PO3Axg1uvb2rBAzqfHqY4+HpksNyAGWMrSnbDyjineyNeqE6VT5rmpT3ynj27+TEW/39eHYYq5d4ts8MbBnBaMOBjlP1Li+csvY+GRrH76I93xw6xOplp2PlNqkqitX4qgLWMQ1rdgUB3WfswVnQWbPKM3VV9rLSCjzcUcQ63lWVpzZVKaXu7nZH3GiAjOqsdgvjB/pxXu1gQBMFSEI4nuOXYrHnd2Q6JrY+6VAnmhfbQb5Bkhry13Q+XZaB23JkSlsT6zvmzxIR110llQvqp0TFamxPdE17FURFtKUZjXB6FtsPHuTTaXeeBjbRXUnN/El5dvjJpcnezPVQRaEfBe7AGXcooTpZbzk2QxDY0wJ+EvD38NwTLZJeDSq5S+nRe7oKbb6o1o2thPgAXgxHYY+jAEKMiV+QI+GsQYN2PK+uaIB+qMFgUsZ0W9R7guzZUhbs1DL1FIaTBlLS1rKDhskJdqxA5tRXCVYxlmpcmfHaYMKKE9Zce5gzxSUGuq+aZJBIr8sF19eW01xWjXYRzuAdx7aMU=',
      dateExpirationAccessToken: 'test-date',
      sub: '9c7a9747-cf74-40d5-b6c3-24c3aac75ba9',
      sessionExpirationIn: '420',
      pwExpired: 'N',
      inactiveUser: 'N',
      menubar:
        'eyJhbGciOiJIUzUxMiJ9.eyJib2R5IjpbeyJpZE9wdGlvbiI6IjEiLCJuYW1lIjoiZGFzaGJvYXJkIiwicGF0aCI6Ii9kYWxlLXBvcnRhbC1mcm9udGVuZC1wb3J0YWwtZW5yb2xsbWVudC9pbmljaW8iLCJpY29uIjoibWRpSG9tZSIsIm9yZGVyIjoiMSIsIm9wdGlvbnNMaXN0IjpbXSwiZ3JvdXAiOiIxIn0seyJpZE9wdGlvbiI6IjIiLCJuYW1lIjoicmVwb3J0cyIsInBhdGgiOiIvZGFsZS1wYXNhcmVsYS1mcm9udGVuZC1yZXBvcnRzLWRhc2hib2FyZC8iLCJpY29uIjoibWRpQ2hhcnRCb3giLCJvcmRlciI6IjIiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMSJ9LHsiaWRPcHRpb24iOiIzIiwibmFtZSI6InByb2ZpbGUiLCJwYXRoIjoiL2RhbGUtcG9ydGFsLWZyb250ZW5kLXBvcnRhbC1lbnJvbGxtZW50L3BlcmZpbC1jbGllbnRlIiwiaWNvbiI6Im1kaUFjY291bnQiLCJvcmRlciI6IjMiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMSJ9LHsiaWRPcHRpb24iOiI0IiwibmFtZSI6InN1cHBvcnQiLCJwYXRoIjoiL2RhbGUtcG9ydGFsLWZyb250ZW5kLXBvcnRhbC1lbnJvbGxtZW50L3NvcG9ydGUiLCJpY29uIjoibWRpRmFjZUFnZW50Iiwib3JkZXIiOiI0Iiwib3B0aW9uc0xpc3QiOltdLCJncm91cCI6IjEifSx7ImlkT3B0aW9uIjoiNSIsIm5hbWUiOiJub3RpZmljYXRpb25zIiwicGF0aCI6Ii9kYWxlLXBvcnRhbC1mcm9udGVuZC1wb3J0YWwtZW5yb2xsbWVudC9ub3RpZmljYWNpb25lcyIsImljb24iOiJtZGlCZWxsIiwib3JkZXIiOiIxIiwib3B0aW9uc0xpc3QiOltdLCJncm91cCI6IjIifSx7ImlkT3B0aW9uIjoiNiIsIm5hbWUiOiJzZXR0aW5ncyIsInBhdGgiOiIvZGFsZS1wb3J0YWwtZnJvbnRlbmQtcG9ydGFsLWVucm9sbG1lbnQvYWp1c3RlcyIsImljb24iOiJtZGlDb2ciLCJvcmRlciI6IjIiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMiJ9LHsiaWRPcHRpb24iOiI3IiwibmFtZSI6ImhlbHAiLCJwYXRoIjoiL2RhbGUtcG9ydGFsLWZyb250ZW5kLXBvcnRhbC1lbnJvbGxtZW50L2F5dWRhIiwiaWNvbiI6Im1kaUhlbHBDaXJjbGUiLCJvcmRlciI6IjMiLCJvcHRpb25zTGlzdCI6W10sImdyb3VwIjoiMiJ9XSwiaWF0IjoxNjQyNzgzMzYyLCJqdGkiOiJmYjEwY2YxYy03YWU5LTRlZDgtYTY0Mi03NWI3ZTAzZGNhMDIifQ.p5OR-WpczIbGeox5Rii0ZsI5-4i3GlcDl1INju0M-9RVb0jUpnvknSD6IhWPN1skj14XMTWDKvxRrpETzEGj6A',
      __typename: 'LoginToken'
    };
    const value = {
      username: 'Username'
    };
    mCommerce.mockResolvedValue(value);
    (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
      Promise.resolve({
        data: {
          data: {
            refreshToken: {
              stateCode: 'code-test',
              newExpiration: 'code-test',
              accessToken: 'code-test',
              idToken: null
            }
          }
        }
      })
    );
    //await refreshTokenFunction(tokens);
  });
  // it('Refresh token rejected', async () => {
  //   const tokens =
  //     'IcAULP8wdfULr6lHL8MT8gqdn/t4bwpQZx6E4daaeb/xp8kzUfKRvVX5tSzvd5pQOvInee5S2X451KKPAkGdlfWDEcwaRVr6gUR9O+ylb9RZ7+gJ36dYPfKZ5ROd0YFZU10biK3CxAlL5pSvsQG9Gov2uH2hpAYrulBpPZqSR5DlM8dsIgfE5MvkCfdaxKHPcXOt+kA1ePoVPf0RHAG/ZonqSaNOePTAdm59ZLmaHwgRg0bruEawvRX3GWHXCltKBNM7eCRYe/Qm/ZqUEuit76qrHtxGj9Adlb5gFWFsRpb6Vw60z3kQZO+n0xTHQ6ZMUL0x0TXajbBsOsuhe47jid1cR9f7iE0SeEciUKTGzp4/t6DlMB94dDFSelrX1JLF/sdLpru9ZY58bJZr+3ZKrF1IHDnnBqiaSdwL7n3n2foznVZt45eZVueU04Xg0RwBIiT+bMHQ+/jNHWH0eQuzAngpxlHDyLpms4Mgd+e+zZPryzJnz0NtYq75ebuG7oaEXQWyHkhqTlaZsf+7bKrGBLvT6oiUvRFgHDxTcvEKesmCMrGBrclA+CAVIXYiVt2lLByLV7LDNHdJ1KGbfD8JRWn58OEYNGtD7k08+n8eAHyJ5XhMIt1pALnJsxJ9pGlIPqXTFHPLN1ZMY+FPc2csv0MZGrQ/vowBwkuOUakEcqj6U0/54diM/XWMVCG9P6m9FcI5R5fn7fowkvbh0lR/QSXgxe5ThYWXljuoQ1EhKTN8/piAEZVNp8pBzIfyORQEGHND1ZsJ5Di9/tOeDf5+PMKRlI6ywWGEO5ik2pRUdpm1t+f/EHCB083MSfZXdfaAey1ZXJ98ZbKkoXXklxEJvFRiCRUpJAgkQ+YuVJBhXuYqZWw4GhYoKEYSA9nBbyEJWMflRggVEAVKVPJIpJJsGLpHtn/RrK/s5VF7nLHQJCAe+jPz/bEh0XRqUVPVG0eQpVn1HlWIvsr6HfTMuKOQ4gSza2UVy6GREg0BOqFzO7DJb6LzkMYsNsED2CNrKicZ5nhSFptXIUqPqS3zfL/b3A7NmyeecLRi0/wtISowNDJfTv4tj0ORzdd/I/YIboJEp4rDF1f9yta6WAhIZZZKe8FvOcJZyPaYGlmhlzkfzHVRxvoQFC8qG7aPMjZ5/c9hwQvADOh/GfZP0a3Um0jiCqAxg5KDHAbV6dJW/hsflo8SKQKwth7AxqpCUETJd8Dxs65yh8EbTMYch1hQbSMnwJHCwFw4LarfDsU5mYNY1m9jAvZ2QIEEfobnYR6uqc4eLxQ2HmHM4z7XTMnuOLxa2sIPBjyti92BNOMWH4z24KP7vlwZRZfEy8vlbJXBGqMSfsWlPL8c9yWm30keaoSy1kC308XVCuJ3ZGtvVT39Lapdb78xGv2ynxc7v4OVVhvHO29M/FeuMjlP8StDM9Oi7JeYbn/Yqzw9W0C5rqUJVxY=", "refreshToken": "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", "idToken": "8Rh8ahCgOxd+2CgUkzBL11Fy52+o4eF6/vUusozZbvf1dumIL9MUPCiGK8yOV88J2z0+02Owdy2iVklGFSLaK7HdmP7CdWaxLJpQ+SJ5JA5Z7+gJ36dYPfKZ5ROd0YFZU10biK3CxAlL5pSvsQG9Gov2uH2hpAYrulBpPZqSR5DlM8dsIgfE5MvkCfdaxKHPcXOt+kA1ePoVPf0RHAG/ZonqSaNOePTAdm59ZLmaHwgRg0bruEawvRX3GWHXCltKoe5A65N4h7J0s4gVQp7jATzy4IuDPO9FtUsJdr6u/A7U9tEMz4TS6nW1KTnFrT9Yzgev7gMRQpjV5SC3FbrVrMcLgVZxTqYcRMVX8DCwECKqRMraiWrSoAWR5wOVCr8Z3RJoxIstaQnvUFyEO0d44j8fqcyCfWsJA55+I6JISQGGZYHl4E9tZdoLwWoFRnWDP6r1k7pHnGxOmkgCFH+sVDkChAlP18ydUZQELgEPDQnM1F4IA3eVjBe59xq2nB4Fuh5gBEVUf0TNmDwaocKuuIF3vRD0ggHGlTzV8avf96/4oqvg0iT1WfG7wvDIkrfYxD8P7ietIeyvgKyenIZIdTJP2Rj8dJopJuQNOiDNtyPtqD9G4qPIRQzpv6jwXg2ASgkIbVZrcNOAttMGqxRzrgDC6BVsWshbQ4DdzTm8ZhWfozF8gW65u7l8meFfiWZKnpGv7GLAGC4gaSWSd5vhdVZquf6yPAFv8XO32kBoOkhHih/vMB+nfwBhD26k6KaYWQtKxAB2MzRP7ixRi+7J+iaL4I3lG6rwN3n2s6NQ+5fmceZEfmqXOyou1PFGtCuLu48DkYsusdE54aC2tDOFXAo6wfho/m/TEH3USQKU9gAgTDlpMG0IKd1L7AaGwDWXtTaQ29967i4HukG3+tXkPsILiiFJUtuS33W6yAJ+FpwjvZMZPoIbkfbV5oSvNd61QYXIzaHJ4EXjpjtv54BvjQmNiNoopZ/1iqeQnqiUbY95D0aCIzHsr+yJOhpMvmegomfd+qSU9dO8bVHucO97VrbJk1s7t3hW2FZGxrif6NT4wlcxSzjWUVXYj3g41j+qBRZ9eb5VzJNEzP2pJpY102LnT7DZpunPTCY5FKT6Y7HqXeAJs6IAj3tcfdRldP8Izej0dYscUQyqRrUVH0Bo20k+9U3Fv46Ruqh6D/uGN21Yli+auViBv4LQhucApvkGWS9VOTRqN6/QkA170ovXCBsmnMXhOu103TYk/fzXjP6OChxJZWlXmbZgpOX8AN1zwQZkK8+8/plG5jVJtfd7GRCALr/QXRnpw9ivVD2KcIQA9ws9B5uAFx7PSVfko6O505EGmXag78qJ9Xy4KKvXvWGX2VKxBQGrrUgLmP6ad9HUVzRBH5E+bp+e3DEWvx5XP4c/SdFD+ujEg6PO3Axg1uvb2rBAzqfHqY4+HpksNyAGWMrSnbDyjineyNeqE6VT5rmpT3ynj27+TEW/39eHYYq5d4ts8MbBnBaMOBjlP1Li+csvY+GRrH76I93xw6xOplp2PlNqkqitX4qgLWMQ1rdgUB3WfswVnQWbPKM3VV9rLSCjzcUcQ63lWVpzZVKaXu7nZH3GiAjOqsdgvjB/pxXu1gQBMFSEI4nuOXYrHnd2Q6JrY+6VAnmhfbQb5Bkhry13Q+XZaB23JkSlsT6zvmzxIR110llQvqp0TFamxPdE17FURFtKUZjXB6FtsPHuTTaXeeBjbRXUnN/El5dvjJpcnezPVQRaEfBe7AGXcooTpZbzk2QxDY0wJ+EvD38NwTLZJeDSq5S+nRe7oKbb6o1o2thPgAXgxHYY+jAEKMiV+QI+GsQYN2PK+uaIB+qMFgUsZ0W9R7guzZUhbs1DL1FIaTBlLS1rKDhskJdqxA5tRXCVYxlmpcmfHaYMKKE9Zce5gzxSUGuq+aZJBIr8sF19eW01xWjXYRzuAdx7aMU=';
  //   const value = {
  //     username: 'Username'
  //   };
  //   mCommerce.mockResolvedValue(value);
  //   (axios.create().post as jest.Mocked<any>).mockImplementation(() =>
  //     Promise.reject({ response: { status: 'code-test' } })
  //   );
  //   await refreshTokenFunction(tokens);
  // });
});
