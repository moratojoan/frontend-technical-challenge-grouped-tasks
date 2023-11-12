import GroupedTasks from '@/components/GroupedTasks';
import styles from './page.module.css';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Suspense
          fallback={
            <section>
              <p>Loading...</p>
            </section>
          }
        >
          <GroupedTasks />
        </Suspense>
      </section>
    </main>
  );
}
