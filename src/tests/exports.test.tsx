import * as Features from '~/features';
import * as Views from '~/views';
import * as Widgets from '~/widgets';

describe('Exports', () => {
  describe('Widgets', () => {
    it('should have exports', () => {
      expect(Widgets).toEqual(expect.any(Object));
    });

    it('should not have undefined exports', () => {
      Object.keys(Widgets).forEach(k => {
        expect(Widgets).not.toHaveProperty(k, undefined);
      });
    });
  });
  describe('Views', () => {
    it('should have exports', () => {
      expect(Views).toEqual(expect.any(Object));
    });

    it('should not have undefined exports', () => {
      Object.keys(Views).forEach(k => {
        expect(Views).not.toHaveProperty(k, undefined);
      });
    });
  });
  describe('Features', () => {
    it('should have exports', () => {
      expect(Features).toEqual(expect.any(Object));
    });

    it('should not have undefined exports', () => {
      Object.keys(Features).forEach(k => {
        expect(Features).not.toHaveProperty(k, undefined);
      });
    });
  });
});
