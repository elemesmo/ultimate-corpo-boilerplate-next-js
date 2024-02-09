import { setupServer } from 'msw/node';

// ** Example of a simple mock api endpoint for testing **
// import { http, HttpResponse } from 'msw';

// const changeColorModeUrl = `http://localhost:3000/api/mocked-endpoint`;
// const changeColorModeHandler = http.post(changeColorModeUrl, () => {
//   const response = HttpResponse.json({ ok: true });
//   return response;
// });

export const handlers = []; // [changeColorModeHandler];

export const mswServer = setupServer(...handlers);
