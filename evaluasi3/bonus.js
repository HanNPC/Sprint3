const checkUserHosting = async (hostEmail, callback) => {
    let hostEmailData  = await fetch(`https://www.omdbapi.com/?apikey=dca61bcc&s=avengers${hostEmail}`)
    let hostEmailJson = await hostEmailData.json();
    return hostEmailJson;
   }
   
   const getActivity = async () => {
    let jsonData = await activitiesActions.checkUserHosting(theEmail);
   }

   //Aku tidak paham