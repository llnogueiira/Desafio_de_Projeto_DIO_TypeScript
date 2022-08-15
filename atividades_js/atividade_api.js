const BASE_URL = 'https://thatcopy.pw/catapi/rest';

const getCats = async () => {
    try {
        const dados = await fetch(BASE_URL);
        const json = await dados.json();
    
        return json.webpurl;
    }
    catch(e){
        console.log(e.message)
    }
}