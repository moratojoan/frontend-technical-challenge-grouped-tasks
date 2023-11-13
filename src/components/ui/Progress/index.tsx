import styles from './styles.module.css';

interface ProgressProps {
  progress: number;
}
export function Progress({ progress }: ProgressProps) {
  return (
    <div className={styles.progress}>
      <div
        className={styles.progress_bar}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span>{progress}%</span>
      </div>
    </div>
  );
}
