import {
  type TasksGroup,
  checkIfAllTaskAreCompleted,
} from '@/lib/domain/GroupedTasks';
import { ChevronDown } from '@/components/ui/icons/ChevronDown';
import { ChevronUp } from '@/components/ui/icons/ChevronUp';
import { ClipboardCheck } from '@/components/ui/icons/ClipboardCheck';
import { ClipboardList } from '@/components/ui/icons/ClipboardList';
import clsx from 'clsx';
import styles from './styles.module.css';

interface SummaryProps {
  open: boolean;
  tasksGroup: TasksGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Summary({ open, tasksGroup, onClick }: SummaryProps) {
  const isCompleted = checkIfAllTaskAreCompleted(tasksGroup);
  return (
    <summary
      onClick={onClick}
      className={clsx(
        styles.group_summary,
        isCompleted && styles.group_completed
      )}
    >
      <span>
        {isCompleted ? <ClipboardCheck /> : <ClipboardList />}
        {tasksGroup.name}
      </span>
      <span>
        {open ? (
          <>
            {'Hide'} <ChevronUp />
          </>
        ) : (
          <>
            {'Show'} <ChevronDown />
          </>
        )}
      </span>
    </summary>
  );
}
