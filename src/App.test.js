import { render, screen } from '@testing-library/react';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './components/App';
import AllMessages from './components/AllMessages';
import Message from './components/Message';

const emails = [{
  sender: 'testSender@galvanize.com',
  recipient: 'test-recipient@galvanize.com',
  subject: 'Learning how to mock an API',
  message: 'Please work!',
  date: '2020-03-23T18:25:43.511Z',
  id: 19,
}];

const server = setupServer(
  rest.get('http://localhost:3001/emails', (req, res, ctx) => res(ctx.json(emails))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the queried email', async () => {
  render(<App />);
  await screen.findByText(/testSender/i);
  const email = screen.getByText(/testSender@galvanize.com/i);
  screen.debug();
  expect(email).toBeInTheDocument();
});

// test('AllMessages displays a message', () => {
//   render(<Message />);
//   screen.debug();
// });
