# Open Weather Map #

openweathermap

JSON Pharse

```json
{
    "coord": {
        "lon": 84.75,
        "lat": 25.77
    },
    "weather": [
        {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 31,
        "feels_like": 34.52,
        "temp_min": 31,
        "temp_max": 31,
        "pressure": 1001,
        "humidity": 58
    },
    "visibility": 4000,
    "wind": {
        "speed": 1.5,
        "deg": 260
    },
    "clouds": {
        "all": 75
    },
    "dt": 1601552174,
    "sys": {
        "type": 1,
        "id": 9129,
        "country": "IN",
        "sunrise": 1601511191,
        "sunset": 1601554075
    },
    "timezone": 19800,
    "id": 1274353,
    "name": "Chāpra",
    "cod": 200
}
```

Fields in API response

- <code> coord </code>
    - <code> coord.lon </code> City geo location, longitude
    - <code> coord.lat </code> City geo location, latitude

- <code> weather </code> (more info Weather condition codes)
    - <code> weather.id </code> Weather condition id
    - <code> weather.main </code> Group of weather parameters (Rain, Snow, Extreme etc.)
    - <code> weather.description </code> Weather condition within the group. You can get the output in your language.
    - <code> weather.icon </code> Weather icon id

- <code> base </code> Internal parameter

- <code> main </code> 
    - <code> main.temp </code> Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    - <code> main.feels_like </code> Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    - <code> main.pressure </code> Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    - <code> main.humidity </code> Humidity, %
    - <code> main.temp_min </code> Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    - <code> main.temp_max </code> Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    - <code> main.sea_level </code> Atmospheric pressure on the sea level, hPa
    - <code> main.grnd_level </code> Atmospheric pressure on the ground level, hPa

- <code> wind </code>
    - <code> wind.speed </code> Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    - <code> wind.deg </code> Wind direction, degrees (meteorological)
    - <code> wind.gust </code> Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour

- <code> clouds </code>
    - <code> clouds.all </code> Cloudiness, %

- <code> rain </code>
    - <code> rain.1h </code> Rain volume for the last 1 hour, mm
    - <code> rain.3h </code> Rain volume for the last 3 hours, mm

- <code> snow </code>
    - <code> snow.1h </code> Snow volume for the last 1 hour, mm
    - <code> snow.3h </code> Snow volume for the last 3 hours, mm

- <code> dt </code> Time of data calculation, unix, UTC

- <code> sys </code>
    - <code> sys.type </code> Internal parameter
    - <code> sys.id </code> Internal parameter
    - <code> sys.message </code> Internal parameter
    - <code> sys.country </code> Country code (GB, JP etc.)
    - <code> sys.sunrise </code> Sunrise time, unix, UTC
    - <code> sys.sunset </code> Sunset time, unix, UTC

- <code> timezone Shift </code> in seconds from UTC
- <code> id </code> City ID
- <code> name </code> City name
- <code> cod </code> Internal parameter