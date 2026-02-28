/**
 * Tests for validation utilities
 */

import {
  isValidMobile,
  isValidOTP,
  isValidAadhaar,
  maskMobile,
  formatDate,
  formatCurrency,
} from '../src/utils/validation';

describe('Validation Utilities', () => {
  describe('isValidMobile', () => {
    it('accepts valid mobile numbers starting with 6-9', () => {
      expect(isValidMobile('9876543210')).toBe(true);
      expect(isValidMobile('8765432109')).toBe(true);
      expect(isValidMobile('7654321098')).toBe(true);
      expect(isValidMobile('6543210987')).toBe(true);
    });

    it('rejects mobile numbers starting with 0-5', () => {
      expect(isValidMobile('5876543210')).toBe(false);
      expect(isValidMobile('1234567890')).toBe(false);
    });

    it('rejects mobile numbers with wrong length', () => {
      expect(isValidMobile('987654321')).toBe(false);   // 9 digits
      expect(isValidMobile('98765432101')).toBe(false); // 11 digits
    });

    it('rejects non-numeric mobile numbers', () => {
      expect(isValidMobile('987654321a')).toBe(false);
      expect(isValidMobile('')).toBe(false);
    });
  });

  describe('isValidOTP', () => {
    it('accepts a 6-digit numeric OTP', () => {
      expect(isValidOTP('123456')).toBe(true);
      expect(isValidOTP('000000')).toBe(true);
    });

    it('rejects OTPs that are not 6 digits', () => {
      expect(isValidOTP('12345')).toBe(false);
      expect(isValidOTP('1234567')).toBe(false);
    });

    it('rejects non-numeric OTPs', () => {
      expect(isValidOTP('12345a')).toBe(false);
      expect(isValidOTP('')).toBe(false);
    });
  });

  describe('isValidAadhaar', () => {
    it('accepts a valid 12-digit Aadhaar number', () => {
      expect(isValidAadhaar('123456789012')).toBe(true);
      expect(isValidAadhaar('1234 5678 9012')).toBe(true);
    });

    it('rejects invalid Aadhaar numbers', () => {
      expect(isValidAadhaar('12345678901')).toBe(false);  // 11 digits
      expect(isValidAadhaar('1234567890123')).toBe(false); // 13 digits
      expect(isValidAadhaar('12345678901a')).toBe(false);
    });
  });

  describe('maskMobile', () => {
    it('masks the middle digits of a mobile number', () => {
      expect(maskMobile('9876543210')).toBe('+91 XXXXXX3210');
    });

    it('returns the input unchanged if too short', () => {
      expect(maskMobile('98765')).toBe('98765');
    });

    it('handles null and undefined gracefully', () => {
      expect(maskMobile(null)).toBeNull();
      expect(maskMobile(undefined)).toBeUndefined();
    });
  });

  describe('formatCurrency', () => {
    it('formats currency with rupee symbol', () => {
      expect(formatCurrency(0)).toBe('₹0');
      expect(formatCurrency(1000)).toBe('₹1,000');
    });

    it('handles null and undefined', () => {
      expect(formatCurrency(null)).toBe('₹0');
      expect(formatCurrency(undefined)).toBe('₹0');
    });
  });

  describe('formatDate', () => {
    it('returns empty string for falsy input', () => {
      expect(formatDate('')).toBe('');
      expect(formatDate(null)).toBe('');
    });

    it('formats a valid ISO date string', () => {
      const result = formatDate('2024-01-15T00:00:00Z');
      expect(result).toContain('2024');
    });
  });
});
