import Clearsky_day from './clearsky_day'
import Clearsky_night from './clearsky_night'
import Cloudy from './cloudy';

interface ObjectLiteral {
    [key: string]: JSX.Element;
  }

const weatherIcons: ObjectLiteral = {
    clearsky_day: <Clearsky_day></Clearsky_day>,
    clearsky_night: <Clearsky_night></Clearsky_night>,
    cloudy: <Cloudy></Cloudy>
}

export default weatherIcons  