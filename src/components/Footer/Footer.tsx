import React from 'react';
import { Trans } from 'react-i18next';

import {
  MAIN_PAGE_URL,
  TERMS_URL,
  CONDITIONS_URL,
  FACEBOOK_URL,
  LOGO,
  WEBSITE
} from 'other/constants';
import { Button, IconCustom, LinkButton } from 'other/lib';
import './Footer.scss';

const Footer = () => {
  const logoSrc = 'assets/logos/logo.png';

  return (
    <footer className="Footer">
      <div className="app-container">
        <a
          className="Logo"
          href={MAIN_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoSrc} alt={LOGO} width="260" />
        </a>

        <div className="Footer__row">
          <ul className="Footer__nav">
            <li>
              <a href={TERMS_URL} target="_blank" rel="noopener noreferrer">
                <Trans i18nKey="btn_terms">Terms</Trans>
              </a>
            </li>
            <li>
              <a
                href={CONDITIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Trans i18nKey="btn_privacy">Privacy</Trans>
              </a>
            </li>
            <li>
              <LinkButton
                className="app-btn-reset"
                scrollToId="approach-section"
                scrollOffset={-68}
                type="link"
              >
                <Trans i18nKey="btn_contactUs">Contact Us</Trans>
              </LinkButton>
            </li>
            <li className="app-d-md-inline-block app-d-none">
              <a
                href={FACEBOOK_URL}
                className="Footer__facebook app-text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Trans i18nKey="btn_followUs">Follow Us</Trans>
                <img
                  src="/assets/icon-facebook.svg"
                  width="28"
                  alt="Facebook"
                />
              </a>
            </li>
          </ul>

          <Button scrollToId="trial-section" scrollOffset={-68} iconPos="right">
            <Trans i18nKey="btn_tryTrial">try trial now</Trans>
            <IconCustom type="right-arrow" />
          </Button>
        </div>
      </div>
      <div className="Footer__bottom app-container">
        <a href={MAIN_PAGE_URL} target="_blank" rel="noopener noreferrer">
          {WEBSITE}
        </a>

        <a
          href={FACEBOOK_URL}
          className="Footer__facebook app-text-capitalize app-d-md-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans i18nKey="btn_followUs">Follow Us</Trans>
          <img src="/assets/icon-facebook.svg" width="28" alt="Facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
