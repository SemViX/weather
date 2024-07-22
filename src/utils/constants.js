import clear_sky_bg from '../backgrounds/clear_sly.png';
import night_sky from '../backgrounds/night_clear_sky.png';
import cloud from '../backgrounds/few_clouds.png';
import night_cloud from '../backgrounds/night_clouds.png';
import mist from '../backgrounds/mist.png';
import thunderstorm from '../backgrounds/thunderstorm.png';
import rain from '../backgrounds/rain.png';
import shower_rain from '../backgrounds/shower_rain.png';
import snow from '../backgrounds/snow.png';
import night_snow from '../backgrounds/night_snow.png';
import night_mist from '../backgrounds/night_mist.png'
import broken_clouds from '../backgrounds/broken_clouds.png';
export const BACKGROUND = {
    '01d': clear_sky_bg,
    '01n': night_sky,
    '02d': cloud,
    '03d': cloud,
    '04d': broken_clouds,
    '02n': night_cloud,
    '03n': night_cloud,
    '04n': night_cloud,
    '09d': shower_rain,
    '09n': shower_rain,
    '10d': rain,
    '10n': rain,
    '11d': thunderstorm,
    '11n': thunderstorm,
    '13d': snow,
    '13n': night_snow,
    '50d': mist,
    '50n': night_mist
}