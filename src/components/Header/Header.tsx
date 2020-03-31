import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Trans } from 'react-i18next';

import { MAIN_PAGE_URL, LOGO } from 'other/constants';
import { Button, IconCustom } from 'other/lib';
import './Header.scss';

const Header = () => {
  const [isSticky, setSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = window.pageYOffset > 0;
      setSticky(sticky);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const classes = classNames('Header', {
    Header__sticky: isSticky
  });

  const logoSrc = 'assets/logos/logo.png';

  return (
    <header className={classes}>
      <div className="app-container">
        <a
          className="Logo"
          href={MAIN_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoSrc} alt={LOGO} width="260" />
        </a>

        <div className="Header__btns">
          <Button scrollToId="approach-section" scrollOffset={-68} type="link">
            <Trans i18nKey="btn_contactUs">contact us</Trans>
          </Button>
          <Button scrollToId="trial-section" scrollOffset={-68} iconPos="right">
            <Trans i18nKey="btn_tryTrial">try trial now</Trans>
            <IconCustom type="right-arrow" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
