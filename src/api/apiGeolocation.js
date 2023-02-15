import api from './apiConfig'

const getGeolocation = (city) =>
      api.get(
        '/geo/1.0/direct?&limit=1',
        {
          params: { q: `${city}`},
        }
      );
    
export default getGeolocation