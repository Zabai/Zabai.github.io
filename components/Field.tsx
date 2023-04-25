import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  label?: string;
  styles?: {
    container?: string;
  };
};

export default function Field({ children, label, styles }: Props) {
  return (
    <div className={`field ${styles?.container ?? ''}`}>
      {label && <label className="label">{label}</label>}
      <div className="control">{children}</div>
    </div>
  );
}
