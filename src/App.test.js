import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  const email = await screen.findByText(/testSender@galvanize.com/i);
  expect(email).toBeInTheDocument();
});

// Next: Test clicking the compose button
test('sending a message makes the text boxes clear', () => {
  render(<App />);
  // test everything
  userEvent.type(screen.queryByText(/From/), 'marjorie@c.com');
  userEvent.type(screen.queryByText(/Subject/), 'Taxes');
  userEvent.type(screen.queryByText(/Message/), 'Please do them');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  const textBox = screen.getByRole('textbox', { name: /from/i });
  expect(textBox).toBeEmptyDOMElement();
});
