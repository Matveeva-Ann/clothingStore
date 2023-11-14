
export default async function sendRequest (url){
  try {
    const respond = await fetch(url);
    const result = await respond.json();
    return result;
  } catch(e){
    console.log(e)
    throw e;
  }
}
