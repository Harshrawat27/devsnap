// utils/email.ts
/**
 * Extracts a username from an email address
 * @param email The email address to extract from
 * @returns The extracted username
 */
export function extractUsernameFromEmail(email: string): string {
  if (!email || !email.includes('@')) {
    return '';
  }

  // Split the email at the @ symbol and take the first part
  const [username] = email.split('@');
  return username;
}
