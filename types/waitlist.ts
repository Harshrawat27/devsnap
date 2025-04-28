// types/waitlist.ts
export interface WaitlistEntry {
  email: string;
  username: string; // Extracted from email
  signupDate: Date;
  source?: string;
  referral?: string; // Username of the person who referred
  referralCount: number; // Count of how many people this user has referred
  metadata?: Record<string, any>;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
  username?: string;
}

export interface WaitlistFormState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  isVisible: boolean;
  errorMessage: string | null;
  username?: string;
}
