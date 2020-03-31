import React, { ReactElement, FC } from 'react';
import classNames from 'classnames';
import { Trans, useTranslation } from 'react-i18next';

import './InfoSection.scss';

interface InfoSectionProps {
  title: string;
  text: string;
  img: string;
  alignRight?: boolean;
}

const InfoSection: FC<InfoSectionProps> = ({
  title,
  text,
  img,
  alignRight
}: InfoSectionProps): ReactElement => {
  const { i18n } = useTranslation();

  const classes = classNames('InfoSection', {
    'InfoSection--alignRight': alignRight
  });

  return (
    <section className={classes}>
      <div className="InfoSection__text">
        <div className="InfoSection__holder">
          <h2 className="Title__h2">
            <strong>
              <Trans i18nKey={title}>{title}</Trans>
            </strong>
          </h2>
          <p>
            <Trans i18nKey={text}>{text}</Trans>
          </p>
        </div>
      </div>

      <figure className="InfoSection__img">
        <img src={`assets/${img}`} alt={i18n.t(text)} />
      </figure>
    </section>
  );
};

export default InfoSection;
