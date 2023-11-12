import { getGroupedTasks } from '@/lib/api/GroupedTasks';
import GroupedTasksClient from './index.client';

export default async function GroupedTasks() {
  const { data, error } = await getGroupedTasks();

  if (error)
    return (
      <section>
        <p>{error.message}</p>
      </section>
    );
  return <GroupedTasksClient initialGroupedTasks={data} />;
}
