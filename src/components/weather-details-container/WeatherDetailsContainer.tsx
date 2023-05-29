// Import Partials
import Header from "./_partials/Header";
import Description from "./_partials/Description";
import Details from "./_partials/Details";
import Timely from "./_partials/Timely";

interface IWeatherDetailsContainerProps {
    city: string;
    data: any;
}

function WeatherDetailsContainer(props: IWeatherDetailsContainerProps): JSX.Element {

    // destruct props
    const { city, data } = props;

    return (
        <>
            <Header city={city} temp={data?.current.temp} />
            <Description icon={data?.current.weather[0].icon} main={data?.current.weather[0].main} description={data?.current.weather[0].description} />
            <Details humidity={data?.current.humidity} wind_speed={data?.current.wind_speed} feels_like={data?.current.feels_like} min={data?.daily[0].temp.min} max={data?.daily[0].temp.max} />
            <Timely title='Hourly' data={data?.hourly} />
            <Timely title='Daily' data={data?.daily} />
        </>
    )
}

export default WeatherDetailsContainer;