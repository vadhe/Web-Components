import "../component/search.js";

const searchByKey = () => {
  const keyword = document.querySelector("search-component");
  //const clubListElement = document.querySelector("club-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await fetch(
        `https://covid19.mathdro.id/api/countries/${keyword.value}`
      );

      const responJson = await result.json();

      renderResult(responJson);
    } catch {
      const error = await fetch(
        `https://covid19.mathdro.id/api/countries/${keyword.value}`
      );

      const errorJson = await error.json();
      handleError(errorJson)
    }
  };

  const renderResult = results => {
    
    let result = document.getElementById('result');
    result.classList.add('animate-bounce');
    result.innerHTML = `
         
    <div class="bg-yellow-500 mt-2 rounded h-20 text-center pt-4">
        <h1 class="text-md font-bold text-white capitalize">confirmed</h1>
        <p class="text-sm font-bold text-white uppercase">${results.confirmed.value}</p>
      </div>
      <div class="bg-red-500 mt-2 rounded h-20 text-center pt-4">
        <h1 class="text-md font-bold text-white capitalize">Recovered</h1>
        <p class="text-sm font-bold text-white uppercase" > ${results.recovered.value}</p>
      </div>
      <div class="bg-blue-500 mt-2 rounded h-20 text-center pt-4">
        <h1 class="text-md font-bold text-white capitalize">deaths</h1>
        <p class="text-sm font-bold text-white uppercase">${results.deaths.value}</p>
      </div>
    `
    setTimeout(function() {
      result.classList.remove('animate-bounce');
    }, 1000);
    
   
  };
  

  const handleError = e => {

    alert(e.error.message);

  };
  
  // const errors = message => {
  //   alert(message);
  // ;

  keyword.clickEvent = onButtonSearchClicked;
};

export default searchByKey;
