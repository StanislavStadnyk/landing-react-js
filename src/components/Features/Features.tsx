import React from 'react';
import { Trans } from 'react-i18next';

import { IconCustom } from 'other/lib';
import './Features.scss';

const Features = () => {
  return (
    <div className="Features">
      <div className="app-container">
        <div className="Features__col">
          <div className="Features__icon">
            <IconCustom type="atom" />
          </div>
          <strong className="Features__title">
            <Trans i18nKey="features_uniqueAIS">
              unique <br /> AIS
            </Trans>
          </strong>
        </div>

        <div className="Features__col">
          <div className="Features__icon">
            <IconCustom type="infinity" />
          </div>
          <strong className="Features__title">
            <Trans i18nKey="features_database">
              database always <br /> up to date
            </Trans>
          </strong>
        </div>

        <div className="Features__col">
          <div className="Features__icon">
            <IconCustom type="weather" />
          </div>
          <strong className="Features__title">
            <Trans i18nKey="features_weather">
              weather <br /> forecast
            </Trans>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Features;
