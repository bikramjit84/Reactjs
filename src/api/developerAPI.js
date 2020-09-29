
export const   getDeveloperBios= () => {
    return (
      fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
      .then( (response) => response.json()) 
    );
}


export const addDeveloperBio =(dev) => {
  return (
    fetch("https://tech-services-1000201953.uc.r.appspot.com/developer", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(dev),
    })
  )
}