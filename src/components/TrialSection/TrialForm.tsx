import React, { Fragment, ReactElement, FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import * as EmailValidator from 'email-validator';

import { Button, IconCustom, Spinner } from 'other/lib';
import { TERMS_URL, CONDITIONS_URL } from 'other/constants';
import './TrialForm.scss';

interface IFormProps {
  submit: (email: string) => void;
  resetStatus: () => void;
  responseStatus: 'resolve' | 'reject' | 'error' | null;
  isLoading: boolean;
}

const TrialForm: FC<IFormProps> = (props: IFormProps): ReactElement => {
  const { submit, resetStatus, responseStatus, isLoading } = props;
  const { i18n } = useTranslation();

  const [inputValue, setInputValue] = useState<string>('');
  const [isInputValid, setInputValid] = useState<boolean>(true);
  const [isInputChecked, setInputCheck] = useState<boolean>(false);

  const [errorResponseMsg, setErrorResponseMsg] = useState<string | null>(null);
  const [validResponseMsg, setValidResponseMsg] = useState<string | null>(null);

  useEffect(() => {
    switch (responseStatus) {
      case 'resolve':
        return setValidResponseMsg(i18n.t('trialSection_msgResponseResolve'));
      case 'reject':
        return setErrorResponseMsg(i18n.t('trialSection_msgResponseReject'));
      case 'error':
        return setErrorResponseMsg(i18n.t('trialSection_msgResponseError'));
      default:
        return;
    }
  }, [responseStatus, i18n]);

  const resetResponse = () => {
    if (responseStatus !== null) {
      resetStatus();
      setErrorResponseMsg(null);
      setValidResponseMsg(null);
    }
  };

  const handlerOnEmailChange = (e: any) => {
    setInputValue(e.target.value);
    if (!isInputValid) setInputValid(EmailValidator.validate(e.target.value));
    resetResponse();
  };

  const handlerOnCheckboxChange = () => {
    setInputCheck(!isInputChecked);
    resetResponse();
  };

  const handlerOnSubmit = () => {
    setInputCheck(false);
    setInputValid(EmailValidator.validate(inputValue));

    if (EmailValidator.validate(inputValue)) {
      submit(inputValue);
      setInputValid(true);
    }
  };

  const showMessages = () => {
    return (
      <Fragment>
        {validResponseMsg && (
          <span className="Form__valid">{validResponseMsg}</span>
        )}
        {(errorEmailMsg || errorResponseMsg) && (
          <span className="Form__error">
            {errorEmailMsg}
            {errorResponseMsg}
          </span>
        )}
      </Fragment>
    );
  };

  const isBtnDisabled = !(inputValue !== '' && isInputChecked);

  const errorEmailMsg = !isInputValid && i18n.t('trialSection_msgInvalidEmail');

  const classes = classNames('FormControl', {
    FormControl__error: !isInputValid || errorResponseMsg,
    FormControl__valid: validResponseMsg
  });

  const textPlaceholder = i18n.t('trialSection_placeholder');

  const buttonContent = isLoading ? (
    <Spinner />
  ) : (
    <span>
      <Trans i18nKey="btn_getStarted">get started</Trans>
      <IconCustom type="right-arrow" />
    </span>
  );

  const labelContent = (
    <Trans i18nKey="trialSection_label">
      I have read and agreed to the <a href={TERMS_URL}>Terms</a> and{' '}
      <a href={CONDITIONS_URL}>Conditions</a>
    </Trans>
  );

  return (
    <div className="Form">
      {showMessages()}
      <div className="Form__row">
        <input
          className={classes}
          type="email"
          placeholder={textPlaceholder}
          onChange={handlerOnEmailChange}
          value={inputValue}
        />
        <Button
          className="app-d-sm-none"
          onClick={handlerOnSubmit}
          type="primary"
          size="lg"
          iconPos="right"
          disabled={isBtnDisabled}
        >
          {buttonContent}
        </Button>
      </div>

      <label>
        <input
          type="checkbox"
          checked={isInputChecked}
          onChange={handlerOnCheckboxChange}
        />
        {labelContent}
      </label>

      <Button
        className="app-d-sm-block app-d-none"
        onClick={handlerOnSubmit}
        type="primary"
        size="lg"
        iconPos="right"
        disabled={isBtnDisabled}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

export default TrialForm;
