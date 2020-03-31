import React, { useState } from 'react';
import { Trans } from 'react-i18next';

import { Button, IconCustom, ModalCustom } from 'other/lib';
import './Intro.scss';

const Intro = () => {
  const [isModalOpen, setModalState] = useState<boolean>(false);

  const onToggleModal = () => {
    setModalState(!isModalOpen);
  };

  return (
    <section className="Intro">
      <div className="Intro__holder app-container">
        <strong className="Intro__subTitle">
          <Trans i18nKey="intro_subTitle">Welcome to portfolio!</Trans>
        </strong>
        <h1>
          <Trans i18nKey="intro_title">Unlimited items – one click away!</Trans>
        </h1>
        <p>
          <Trans i18nKey="intro_text">
            portfolio is a sophisticated database with working items, owners,
            working rights and financial statements. We offer you a state-of-the
            art AIS tracking system with unlimited amount of items and my
            fleets.
          </Trans>
        </p>
        <div className="Intro__btns">
          <Button
            scrollToId="trial-section"
            scrollOffset={-68}
            iconPos="right"
            size="lg"
          >
            <Trans i18nKey="btn_tryTrial">try trial now</Trans>
            <IconCustom type="right-arrow" />
          </Button>

          <Button
            type="success"
            iconPos="left"
            size="lg"
            onClick={onToggleModal}
          >
            <IconCustom type="play-button" style={{ fontSize: 29, top: 5 }} />
            <Trans i18nKey="btn_watchVideo">watch the video</Trans>
          </Button>

          <ModalCustom isModalOpen={isModalOpen} toggle={onToggleModal}>
            <div className="VideoResponsiveFrame">
              <iframe
                src="https://player.vimeo.com/video/23237102?color=ffffff&title=0&byline=0&portrait=0"
                width="640"
                height="360"
                allow="autoplay; fullscreen"
                title="Video"
              ></iframe>
            </div>
          </ModalCustom>
        </div>
      </div>

      <video
        className="VideoBG"
        loop
        autoPlay
        preload="auto"
        muted
        poster="assets/bg-intro.jpg"
        src="assets/video/intro-video.mp4"
      />
    </section>
  );
};

export default Intro;
