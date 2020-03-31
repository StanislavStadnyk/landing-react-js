import React, { ReactNode } from 'react';
import { Trans } from 'react-i18next';

import { referenceSection_list } from 'other/translations/en/common.json';
import './Reference.scss';

interface IItemProps {
  text: string;
  img: string;
}

const Reference = () => {
  const renderItem = (item: IItemProps) => {
    const { text, img } = item;
    return (
      <li key={text}>
        <img src={`assets/flags/${img}`} alt={text} width="33" />
        {text}
      </li>
    );
  };

  const list: Array<ReactNode> = referenceSection_list.map(renderItem);

  return (
    <section className="Reference">
      <div className="app-container">
        <h2 className="Title__h2">
          <strong>
            <Trans i18nKey="referenceSection_title">reference list</Trans>
          </strong>
        </h2>
        <ul className="Reference__list">{list}</ul>
      </div>
    </section>
  );
};

export default Reference;
