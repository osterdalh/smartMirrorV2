import './App.css';
// import { PageLayout } from './components/PageLayout/styles'
import PageLayout from './components/PageLayout'
import Ruter from './components/Ruter';
import TimeDate from './components/TimeDate'
import Weather from './components/Weather';
import SiteGlobalStyles from './styles/globalStyles';
import { stopPlaces } from './components/Ruter/types'
import Calendar from './components/Calendar';
import React from 'react';
import PageModal from './components/Modal';

const App: React.FC = () => {

  return (
    <>
      <PageModal>
        <div>
          <button onClick={() => {
            if (localStorage) {
              localStorage.setItem(
                "rgl-8",
                JSON.stringify({

                })
              );
            }


          }}>Reset Layout</button>
        </div>
      </PageModal>
      <SiteGlobalStyles />
      <PageLayout>
        <TimeDate />
        <Calendar />
        {/* <Weather /> */}
        {
          stopPlaces.map(stopPlace => {
            return <Ruter key={stopPlace.id} stopPlace={stopPlace}></Ruter>
          })
        }

      </PageLayout>

    </>

  );
}

export default App;

