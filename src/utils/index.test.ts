import { summ } from './index';

describe('Utils tests', () => {
    it('should return summ result', () => {
       const result =  summ(5,6)

        expect(result).toBe(11)
    });
})