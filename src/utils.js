export const fetchStatus=(response)=>{
  if(!response.ok){
    sessionStorage.setItem('networkError',response.toString())
    console.log(response)
    // return Promise.reject(new Error(response.statusText))
    return new Error(response.statusText)
    // return response.statusText.json()
  }
  return response.json()
}


export const setHJson = (i, method, b) => {
    i = {
        method,
        mode:'cors',
        headers:new Headers({
            "Content-Type":"application/json",
            // "Authorization":`JWT ${sessionStorage.getItem(process.env.REACT_APP_TOKEN_NAME)}`
        })
    }
    if (b) {
        i.body = JSON.stringify(b)
    }
    return i
};
