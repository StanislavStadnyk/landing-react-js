import React, { ReactNode } from 'react';

import InfoSection from './InfoSection/InfoSection';
import { infoSection } from 'other/translations/en/common.json';
import './InfoSections.scss';

interface ISectionProps {
  title: string;
  text: string;
  img: string;
}

const InfoSections = () => {
  const renderSection = (section: ISectionProps, index: number): ReactNode => {
    const { title, text, img } = section;
    const isEven = index % 2 ? true : false;

    return (
      <InfoSection
        title={title}
        text={text}
        img={img}
        alignRight={isEven}
        key={title}
      />
    );
  };

  const infoSections: Array<ReactNode> = infoSection.map(renderSection);

  return (
    <div className="InfoSections">
      <div className="app-container">{infoSections}</div>
    </div>
  );
};

export default InfoSections;
