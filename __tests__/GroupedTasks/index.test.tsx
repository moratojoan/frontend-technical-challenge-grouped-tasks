import { render } from '@testing-library/react';
import GroupedTasks from '@/components/GroupedTasks';
import groupedTasks from './mocks/groupedTasks.json';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';

const server = setupServer(
  rest.get(
    'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(groupedTasks));
    }
  )
);
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('GroupedTasks', () => {
  it('fetch and shows data', async () => {
    const { getByText } = render(await GroupedTasks());

    for (const group of groupedTasks) {
      expect(getByText(group.name)).toBeInTheDocument();
    }
  });

  it("shows an error message when there's a fetching error", async () => {
    server.use(
      rest.get(
        'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    const { getByText } = render(await GroupedTasks());

    expect(
      getByText('An error occurred during data fetching')
    ).toBeInTheDocument();
  });
});
