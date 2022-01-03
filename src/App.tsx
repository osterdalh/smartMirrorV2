import './App.css';
// import { PageLayout } from './components/PageLayout/styles'
import PageLayout from './components/PageLayout'
import Ruter from './components/Ruter';
import TimeDate from './components/TimeDate'
import Weather from './components/Weather';
import SiteGlobalStyles from './styles/globalStyles';
import { stopPlaces } from './components/Ruter/types'
function App() {
  return (
    <>
      <SiteGlobalStyles />
      <PageLayout>
        <TimeDate />
        {/* <Weather /> */}
        {
          stopPlaces.map(stopPlace => {
            return <Ruter key={stopPlace.id} stopPlace={stopPlace}></Ruter>
          })
        }
        <div>
          <button onClick={() => {
            if (localStorage) {
              localStorage.setItem(
                "rgl-8",
                JSON.stringify({
                  
                })
              );
            }


          }}>click me</button>
        </div>
      </PageLayout>
    </>

  );
}


function resetLayout() {
  console.log("hei")
}
export default App;

