import * as ngforage from '../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';
import GetDataUser from '../Get-data-user';

jest.mock('../../tools/ngforage.config');
const mGetIndexeddb: any = mocked(ngforage.getIndexeddb);

describe('testing Get Data User', () => {
  it('service get data user', async () => {
    const value = {
      user_info:
        'U2FsdGVkX1859xHRCMG5rpGpZfk3pAYjCQjIRY82iGFp7nh7TwDhflA67cI4XziD0qzXH5l5P9CWbK75Kg/8ZqFRKVqjDYl5xCrBu6YRP9f19CvqtfdR6LKZZodzK/+X1wVgEbbcQi8PFa2wTx0r84Mwe4A1U+btPp6ydV6ZPt5e31HchEwLf7tNWsGh4LzJZIj671Zk+xQtEq1bmxujQx+cTpdA6BIBN11vV5qo0pTu8JlvJWhltEGr+MWDByFgJxbA9JLiQ02HRj8rYF+xo0QHJNjqp+JVgiPf1goX4FHuRfLvC82WxkvxIpGVI8RVfipXNFcsRlGDjyKjVBUufjdYm4XgxH4S3GHY99eu8ePUf9KYyQrc5jY9NEMlPHvz/ugVWyfIiK+zRTuR6tN4NUjhvC/k+qtuY+sx84yFvnrmXwlAku9bmk43mRxs6yPnrj8RTO+JOC45+Y0JkutjpA0LRWlcShjhQ5obBurtiAqM3aKzsN5noikB7OfeU6AikPotpbZ+YA8IyxOhhYDi5ACtcXKgqoZa5JOjKdm/aQw='
    };

    mGetIndexeddb.mockResolvedValue(value);

    await GetDataUser();
  });
});
