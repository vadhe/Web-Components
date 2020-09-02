const getDataCovid = () => {
  const onButtonSearchClicked = async () => {
    try {
      const response = await fetch("https://covid19.mathdro.id/api/");

      const responseJson = await response.json();
      if (responseJson.error) {
        console.log(responseJson.message);
      } else {
        // console.log(responseJson);
        renderResponse(responseJson);
      }
    } catch (message) {
      console.log(message);
    }
  };

  onButtonSearchClicked();

  const renderResponse = (e) => {
    let confirmed, recovered, deaths;
    confirmed = document.querySelector("#confirmed");
    recovered = document.querySelector("#recovered");
    deaths = document.querySelector("#deaths");
    confirmed.append(e.confirmed.value);
    recovered.append(e.recovered.value);
    deaths.append(e.deaths.value);
  };
};

export default getDataCovid;
