import { setupServer } from 'msw/node';

import { http, HttpResponse } from 'msw';

const changeColorModeUrl = `http://localhost:3000/api/user/color-mode`;
const changeColorModeHandler = http.post(changeColorModeUrl, () => {
  const response = HttpResponse.json({ nextColorMode: 'dark' });
  return response;
});

export const handlers = [changeColorModeHandler];

export const mswServer = setupServer(...handlers);
