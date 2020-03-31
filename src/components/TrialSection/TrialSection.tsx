import React, { useState } from 'react';
import { Trans } from 'react-i18next';

import './TrialSection.scss';
import { ENDPOINTS } from '../../other/constants';
import TrialForm from './TrialForm';
import { http } from '../../other/services/http';

const TrialSection = () => {
  const handlerOnSubmit = (email: string): void => {
    setLoading(true);

    http(ENDPOINTS.REGISTER, {
      body: { email },
      method: 'POST'
    })
      .then(({ errors }) => {
        const status = errors === null ? 'resolve' : 'reject';
        setDataResponse(status);
      })
      .catch(() => {
        setDataResponse('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onResetStatus = () => {
    setDataResponse(null); // it have to be a NULL, because Child component checks it
  };

  const [dataResponse, setDataResponse] = useState<
    'resolve' | 'reject' | 'error' | null
  >(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <section className="TrialSection" id="trial-section">
      <div className="app-container">
        <div className="TrialSection__holder">
          <h2>
            <Trans i18nKey="trialSection_title">
              Start Your Free Trial Now
            </Trans>
          </h2>
          <p>
            <Trans i18nKey="trialSection_text">
              Sign up for a trial account and try all advantages
            </Trans>
          </p>

          <TrialForm
            submit={handlerOnSubmit}
            resetStatus={onResetStatus}
            responseStatus={dataResponse}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
