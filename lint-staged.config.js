module.exports = {
  'src/**/*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --cache --fix --max-warnings=0',
    'npm run test -- --bail',
  ],
  '*.json': ['prettier --write'],
};
