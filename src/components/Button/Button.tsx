import React, { ReactChild, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../theme';
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
  required?: true | false
}

const AppButton = (props: any) => {
  const { children, variant, onClick, type, className, color, fullWidth, required, ...other } = props;
  return (
    <ThemeProvider theme={Theme}>
      <Button
        variant={variant}
        onClick={onClick}
        type={type}
        className={className}
        color={color}
        fullWidth={fullWidth}
        {...other}
      >
        {children}
      </Button>
    </ThemeProvider>

  );
};

export default AppButton;
