import React from 'react';
import { Trans } from 'react-i18next';

import { LinkButton, IconCustom } from 'other/lib';
import './InfoStatistic.scss';

const InfoStatistic = () => {
  return (
    <section className="InfoStatistic">
      <div className="app-container">
        <div className="InfoStatistic__col">
          <div className="InfoStatistic__num">
            <div>
              <strong>
                <Trans i18nKey="infoStatistic_num_1">400+</Trans>
              </strong>
              <span>
                <Trans i18nKey="infoStatistic_text_1">working items</Trans>
              </span>
            </div>
            <div>
              <strong>
                <Trans i18nKey="infoStatistic_num_2">15+</Trans>
              </strong>
              <span>
                <Trans i18nKey="infoStatistic_text_2">countries</Trans>
              </span>
            </div>
          </div>
        </div>

        <div className="InfoStatistic__col">
          <div className="InfoStatistic__holder">
            <h2>
              <Trans i18nKey="infoStatistic_title">Want to join them?</Trans>
            </h2>
            <LinkButton
              scrollToId="approach-section"
              scrollOffset={-68}
              type="link"
              color="success"
              size="lg"
              iconPos="right"
              className="app-text-inherit"
            >
              Contact us <IconCustom type="right-chevron" />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoStatistic;
