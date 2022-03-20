import React, { ReactChild, MouseEvent } from 'react';
import Button from '@mui/material/Button';
export interface AppButtonProps {
  children?: ReactChild | ReactChild[];
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  variant?: 'contained' | 'outlined';
  shape?: 'rounded' | 'square';
  onClick?: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
}

const AppButton = (props: AppButtonProps) => {
  const { children, variant, onClick, type, className, ...other } = props;
  return (
    <Button
      variant={variant}
      onClick={onClick}
      type={type}
      className={className}
      {...other}
    >
      {children}
    </Button>
  );
};

export default AppButton;
