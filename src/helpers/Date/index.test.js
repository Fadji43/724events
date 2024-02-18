import { getMonth } from './index';

describe('getMonth function', () => {
  it('returns "janvier" for date 2022-01-01', () => {
    const testDate = new Date('2022-01-01');
    const expectedMonth = 'janvier';
    const actualMonth = getMonth(testDate);
    expect(actualMonth).toBe(expectedMonth);
  });

  it('returns "juillet" for date 2022-07-08', () => {
    const testDate = new Date('2022-07-08');
    const expectedMonth = 'juillet';

    const actualMonth = getMonth(testDate);

    expect(actualMonth).toBe(expectedMonth);
  });
});