import './App.css';
import { PageLayout } from './components/pageLayout/styles'
import Ruter from './components/Ruter';
import TimeDate from './components/TimeDate'
import Weather from './components/Weather';
import SiteGlobalStyles from './styles/globalStyles';

function App() {
  return (
    <>
      <SiteGlobalStyles />
      <PageLayout>
        <TimeDate />

        <Weather />
        <Ruter></Ruter>
      </PageLayout>
    </>

  );
}

export default App;

