import '@testing-library/jest-dom';
import { mswServer } from './api.mock';

process.env.NEXT_PUBLIC_NEXT_API_URL = 'http://localhost:3000/api';
// process.env.NEXT_PUBLIC_SERVICE_API_URL="http://localhost:3003";
process.env.NEXTAUTH_SECRET = 'mRArr86n+5CIkeoIY7Ts3SyBFAv7uhkyKZqA9VR+xpo=';
process.env.NEXTAUTH_URL = 'http://localhost:3000';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
