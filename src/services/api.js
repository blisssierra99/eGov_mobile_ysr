/**
 * API Service - Handles all network requests to AP Government backend
 */

const BASE_URL = 'https://api.egov.ap.gov.in/v1';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

/**
 * Makes an authenticated API request
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options
 * @param {string} token - Auth token
 * @returns {Promise<object>} Response data
 */
const apiRequest = async (endpoint, options = {}, token = null) => {
  const headers = {...DEFAULT_HEADERS};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {...headers, ...options.headers},
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'An error occurred. Please try again.');
    }

    return data;
  } catch (error) {
    if (error.message === 'Network request failed') {
      throw new Error(
        'No internet connection. Please check your network and try again.',
      );
    }
    throw error;
  }
};

/**
 * Sends OTP to the provided mobile number
 * @param {string} mobile - 10-digit mobile number
 * @returns {Promise<object>} Response with request ID
 */
export const sendOTP = async mobile => {
  return apiRequest('/auth/send-otp', {
    method: 'POST',
    body: JSON.stringify({mobile}),
  });
};

/**
 * Verifies OTP and returns authentication token
 * @param {string} mobile - 10-digit mobile number
 * @param {string} otp - 6-digit OTP
 * @param {string} requestId - OTP request ID
 * @returns {Promise<object>} Auth token and user data
 */
export const verifyOTP = async (mobile, otp, requestId) => {
  return apiRequest('/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({mobile, otp, requestId}),
  });
};

/**
 * Fetches list of all active government schemes
 * @param {string} token - Auth token
 * @param {object} filters - Optional filters (category, status)
 * @returns {Promise<Array>} List of schemes
 */
export const getSchemes = async (token, filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const endpoint = params ? `/schemes?${params}` : '/schemes';
  return apiRequest(endpoint, {method: 'GET'}, token);
};

/**
 * Fetches details of a specific scheme
 * @param {string} token - Auth token
 * @param {string} schemeId - Scheme ID
 * @returns {Promise<object>} Scheme details
 */
export const getSchemeDetails = async (token, schemeId) => {
  return apiRequest(`/schemes/${schemeId}`, {method: 'GET'}, token);
};

/**
 * Checks eligibility for a scheme based on Aadhaar data
 * @param {string} token - Auth token
 * @param {string} schemeId - Scheme ID
 * @returns {Promise<object>} Eligibility result
 */
export const checkEligibility = async (token, schemeId) => {
  return apiRequest(
    `/schemes/${schemeId}/eligibility`,
    {method: 'GET'},
    token,
  );
};

/**
 * Submits an application for a scheme
 * @param {string} token - Auth token
 * @param {string} schemeId - Scheme ID
 * @param {object} applicationData - Application form data
 * @returns {Promise<object>} Application confirmation
 */
export const applyForScheme = async (token, schemeId, applicationData) => {
  return apiRequest(
    `/applications`,
    {
      method: 'POST',
      body: JSON.stringify({schemeId, ...applicationData}),
    },
    token,
  );
};

/**
 * Fetches user's applications
 * @param {string} token - Auth token
 * @returns {Promise<Array>} List of applications
 */
export const getMyApplications = async token => {
  return apiRequest('/applications/my', {method: 'GET'}, token);
};

/**
 * Fetches user profile
 * @param {string} token - Auth token
 * @returns {Promise<object>} User profile data
 */
export const getUserProfile = async token => {
  return apiRequest('/user/profile', {method: 'GET'}, token);
};

/**
 * Submits a grievance
 * @param {string} token - Auth token
 * @param {object} grievanceData - Grievance form data
 * @returns {Promise<object>} Grievance confirmation
 */
export const submitGrievance = async (token, grievanceData) => {
  return apiRequest(
    '/grievances',
    {
      method: 'POST',
      body: JSON.stringify(grievanceData),
    },
    token,
  );
};
