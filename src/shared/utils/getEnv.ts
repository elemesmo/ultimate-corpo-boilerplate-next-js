export function getEnv() {
  if (process.env.NEXT_PUBLIC_ENV === 'staging') {
    return 'staging';
  }

  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    return 'production';
  }

  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    return 'development';
  }

  if (!process.env.NEXT_PUBLIC_ENV || process.env.NEXT_PUBLIC_ENV === 'local') {
    return 'local';
  }

  return 'unknown';
}
