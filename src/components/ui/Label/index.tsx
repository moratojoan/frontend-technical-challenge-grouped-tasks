import { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label className={clsx(styles.label, className)} {...props}>
      {children}
    </label>
  );
}
