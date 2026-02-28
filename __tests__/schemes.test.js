/**
 * Tests for scheme data constants
 */

import {SCHEMES, SCHEME_CATEGORIES} from '../src/constants/schemes';

describe('Scheme Constants', () => {
  describe('SCHEME_CATEGORIES', () => {
    it('contains the expected number of categories', () => {
      expect(SCHEME_CATEGORIES.length).toBeGreaterThan(0);
    });

    it('each category has required fields', () => {
      SCHEME_CATEGORIES.forEach(category => {
        expect(category).toHaveProperty('id');
        expect(category).toHaveProperty('name');
        expect(category).toHaveProperty('icon');
        expect(category).toHaveProperty('color');
        expect(category).toHaveProperty('description');
      });
    });

    it('all category IDs are unique', () => {
      const ids = SCHEME_CATEGORIES.map(c => c.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('SCHEMES', () => {
    it('contains the expected number of schemes', () => {
      expect(SCHEMES.length).toBeGreaterThan(0);
    });

    it('each scheme has required fields', () => {
      SCHEMES.forEach(scheme => {
        expect(scheme).toHaveProperty('id');
        expect(scheme).toHaveProperty('name');
        expect(scheme).toHaveProperty('category');
        expect(scheme).toHaveProperty('categoryId');
        expect(scheme).toHaveProperty('shortDescription');
        expect(scheme).toHaveProperty('description');
        expect(scheme).toHaveProperty('benefits');
        expect(scheme).toHaveProperty('eligibility');
        expect(scheme).toHaveProperty('documents');
        expect(scheme).toHaveProperty('status');
      });
    });

    it('all scheme IDs are unique', () => {
      const ids = SCHEMES.map(s => s.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('each scheme has at least one benefit', () => {
      SCHEMES.forEach(scheme => {
        expect(scheme.benefits.length).toBeGreaterThan(0);
      });
    });

    it('each scheme has at least one eligibility criterion', () => {
      SCHEMES.forEach(scheme => {
        expect(scheme.eligibility.length).toBeGreaterThan(0);
      });
    });

    it('scheme categoryId references a valid category', () => {
      const categoryIds = new Set(SCHEME_CATEGORIES.map(c => c.id));
      SCHEMES.forEach(scheme => {
        expect(categoryIds.has(scheme.categoryId)).toBe(true);
      });
    });
  });
});
