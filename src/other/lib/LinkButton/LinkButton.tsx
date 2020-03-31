import React, { ReactElement, FC } from 'react';
import Button, { ButtonProps } from '../Button/Button';

const LinkButton: FC<ButtonProps> = ({
  className,
  type,
  to,
  target,
  children
}: ButtonProps): ReactElement => (
  <Button to={to} type={type} target={target} className={className}>
    {children}
  </Button>
);

export default LinkButton;
