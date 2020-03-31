import React, { CSSProperties, ReactElement, FC } from 'react';

import './IconCustom.scss';

interface IconCustomProps {
  style?: CSSProperties;
  title?: string;
  type: string;
}

const IconCustom: FC<IconCustomProps> = ({
  title,
  type,
  style
}: IconCustomProps): ReactElement => {
  const classes = `IconCustom icon-${type}`;

  return <span className={classes} style={style} title={title} />;
};

export default IconCustom;
