/**
 * Validation utilities for form inputs
 */

/**
 * Validates a 10-digit Indian mobile number
 * @param {string} mobile - Mobile number string
 * @returns {boolean} True if valid
 */
export const isValidMobile = mobile => /^[6-9]\d{9}$/.test(mobile);

/**
 * Validates a 6-digit OTP
 * @param {string} otp - OTP string
 * @returns {boolean} True if valid
 */
export const isValidOTP = otp => /^\d{6}$/.test(otp);

/**
 * Validates a 12-digit Aadhaar number
 * @param {string} aadhaar - Aadhaar number string
 * @returns {boolean} True if valid
 */
export const isValidAadhaar = aadhaar => /^\d{12}$/.test(aadhaar.replace(/\s/g, ''));

/**
 * Formats a mobile number for display (masks middle digits)
 * @param {string} mobile - 10-digit mobile number
 * @returns {string} Masked mobile number
 */
export const maskMobile = mobile => {
  if (!mobile || mobile.length < 10) {
    return mobile;
  }
  return `+91 XXXXXX${mobile.slice(-4)}`;
};

/**
 * Formats a date string to a readable format
 * @param {string} dateStr - ISO date string
 * @returns {string} Formatted date (e.g., "15 Jan 2024")
 */
export const formatDate = dateStr => {
  if (!dateStr) {
    return '';
  }
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Formats a currency amount in Indian format
 * @param {number} amount - Amount in rupees
 * @returns {string} Formatted amount (e.g., "₹1,50,000")
 */
export const formatCurrency = amount => {
  if (amount === null || amount === undefined) {
    return '₹0';
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};
