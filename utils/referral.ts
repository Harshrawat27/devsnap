// utils/referral.ts
/**
 * Utilities for handling referral tracking
 */

const REFERRAL_STORAGE_KEY = 'devsnapReferral';

/**
 * Extracts referral code from URL and stores it in localStorage
 * @returns The extracted referral code, if present
 */
export function captureReferralFromURL(): string | null {
  if (typeof window === 'undefined') return null;

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const referral = urlParams.get('ref');

  if (referral) {
    // Store in localStorage for persistence
    localStorage.setItem(REFERRAL_STORAGE_KEY, referral);
    return referral;
  }

  return null;
}

/**
 * Gets the stored referral code from localStorage
 * @returns The stored referral code, if present
 */
export function getStoredReferral(): string | null {
  if (typeof window === 'undefined') return null;

  return localStorage.getItem(REFERRAL_STORAGE_KEY);
}

/**
 * Clears the stored referral code
 */
export function clearStoredReferral(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(REFERRAL_STORAGE_KEY);
}
