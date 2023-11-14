import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}
export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={clsx(styles.checkbox, className)}
      {...props}
    />
  );
}
