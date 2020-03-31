import React from 'react';

// Components
import Header from 'components/Header/Header';
import Intro from 'components/Intro/Intro';
import Features from 'components/Features/Features';
import InfoSections from 'components/InfoSections/InfoSections';
import Reference from 'components/Reference/Reference';
import InfoStatistic from 'components/InfoStatistic/InfoStatistic';
import Video from 'components/Video/Video';
import TrialSection from 'components/TrialSection/TrialSection';
import Approach from 'components/Approach/Approach';
import Footer from 'components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <InfoSections />
      <Reference />
      <InfoStatistic />
      <Video />
      <TrialSection />
      <Approach />
      <Footer />
    </div>
  );
};

export default App;
