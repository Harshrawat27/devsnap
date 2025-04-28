// types/waitlist.ts
export interface WaitlistEntry {
  email: string;
  signupDate: Date;
  source?: string;
  referral?: string; // Added referral field
  metadata?: Record<string, any>;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface WaitlistFormState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
  isVisible: boolean;
  errorMessage: string | null;
}
