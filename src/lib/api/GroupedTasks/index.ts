import { type TasksGroup } from '@/lib/domain/GroupedTasks';
import { type ApiDefaultError, type ApiResponse } from '../types';

const GROUPED_TASKS_URL =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress';

export async function getGroupedTasks(): Promise<
  ApiResponse<TasksGroup[], ApiDefaultError>
> {
  try {
    const response = await fetch(GROUPED_TASKS_URL);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: {
        message: 'An error occurred during data fetching',
      },
    };
  }
}
