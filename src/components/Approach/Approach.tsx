import React from 'react';
import { Trans } from 'react-i18next';

import { IconCustom } from 'other/lib';
import './Approach.scss';

const Approach = () => {
  return (
    <section className="Approach" id="approach-section">
      <div className="app-container">
        <figure className="Approach__img">
          <img src="assets/img-contact.jpg" alt="Stanislav Stadnyk" />
        </figure>
        <div className="Approach__text">
          <h2 className="Title__h2">
            <strong>
              <Trans i18nKey="approach_title">
                individual <br />
                approach
              </Trans>
            </strong>
          </h2>
          <p>
            <Trans i18nKey="approach_text">
              We are attentive to each user, listen to all wishes and respond to
              requests as quickly as possible. <br /> We are open to wishes for
              improving our service for your convenience.
            </Trans>
          </p>
          <figure className="Approach__img--mobile">
            <img src="assets/img-contact.jpg" alt="Stanislav Stadnyk" />
          </figure>
          <div className="Approach__contacts">
            <div className="Approach__person">
              <strong>Stanislav Stadnyk</strong> Director
            </div>
            <ul className="Approach__list">
              <li>
                <IconCustom type="phone" />
                <a href="tel:+429365700">+990033300</a>
              </li>
              <li>
                <IconCustom type="email" />
                <a href="mailto:stanislav.stadnyk@gmail.com">
                  stanislav.stadnyk@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
