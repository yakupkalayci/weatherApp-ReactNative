// Import Reanimated
import Animated, {Layout, FadeInRight} from 'react-native-reanimated';

// Import Store
import {useAppSelector} from '../../store/hooks';

// Import Partials
import Header from './_partials/Header';
import Description from './_partials/Description';
import Details from './_partials/Details';
import Timely from './_partials/Timely';

// Import Types
import {WeatherDataType} from '../../common/types/weatherData';

interface IWeatherDetailsContainerProps {
  city: string;
  data: WeatherDataType;
}

function WeatherDetailsContainer(props: IWeatherDetailsContainerProps): JSX.Element {
  // destruct props
  const {city, data} = props;

  // variables
  const lang = useAppSelector(state => state.weather.lang);

  return (
    <Animated.View entering={FadeInRight} layout={Layout.springify()}>
      <Header city={city} temp={data?.current.temp} />
      <Description
        icon={data?.current.weather[0].icon}
        main={data?.current.weather[0].main}
        description={data?.current.weather[0].description}
        lang={lang}
      />
      <Details
        humidity={data?.current.humidity}
        wind_speed={data?.current.wind_speed}
        feels_like={data?.current.feels_like}
        min={data?.daily[0].temp.min}
        max={data?.daily[0].temp.max}
      />
      <Timely
        title={'COMPONENTS.WEATHER_DETAILS.SECTION_TITLES.HOURLY'}
        data={data?.hourly}
      />
      <Timely
        title={'COMPONENTS.WEATHER_DETAILS.SECTION_TITLES.DAILY'}
        data={data?.daily}
      />
    </Animated.View>
  );
}

export default WeatherDetailsContainer;
