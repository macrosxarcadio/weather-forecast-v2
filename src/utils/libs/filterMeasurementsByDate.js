const filterMeasurementsByDate = (forecast) => {
  //remove any measurement with the same day
  let forecastResume = forecast.list.filter(
    (forecast, index, forecastlist) =>
      index ===
      forecastlist.findIndex(
        (actual) =>
          actual.dt_txt.split(" ").shift() ===
          forecast.dt_txt.split(" ").shift()
      )
  );
  return forecastResume;
};

export default filterMeasurementsByDate;
