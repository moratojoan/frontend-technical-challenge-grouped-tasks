import { render } from '@testing-library/react';

import GroupedTasks from '@/components/GroupedTasks/index.client';
import groupedTasks from './mocks/groupedTasks.json';
import allCheckedGroupedTasks from './mocks/allCheckedGroupedTasks.json';
import allUnCheckedGroupedTasks from './mocks/allUnCheckedGroupedTasks.json';

describe('Progress', () => {
  it('Out of a total value of 423, only one task with value 36 is checked and shows a progress of 8.51%.', async () => {
    const { getByText } = render(
      <GroupedTasks initialGroupedTasks={groupedTasks} />
    );
    expect(getByText('8.51%')).toBeInTheDocument();
  });

  it('all checked tasks show an 100% of progress', async () => {
    const { getByText } = render(
      <GroupedTasks initialGroupedTasks={allCheckedGroupedTasks} />
    );
    expect(getByText('100%')).toBeInTheDocument();
  });

  it('all unchecked tasks show an 0% of progress', async () => {
    const { getByText } = render(
      <GroupedTasks initialGroupedTasks={allUnCheckedGroupedTasks} />
    );
    expect(getByText('0%')).toBeInTheDocument();
  });
});
