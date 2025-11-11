//Import necessary Classes
import ApiConnection from "./apiConn.js";

document.addEventListener('DOMContentLoaded', () => {
    //console.log('script loaded in:',window.location.pathname);

    const apiConn = new ApiConnection();    
    
    //****************/
    const title = document.getElementById('thrones')
    if (title) {
        const mainUrl = 'https://cvsistemas.com.mx/api/v2/characters/';
        document.addEventListener('DOMContentLoaded', apiConn.loadCharacters(mainUrl));
        const searchCharacter = async () => {
            const throneId = document.getElementById('thronesSearch').value.toLowerCase();//console.log(throneId);
            if(throneId) {
                try {
                    const response = await axios.get(`${mainUrl}${throneId}`);
                    const throneGrid = document.getElementById('thronesGrid');
                    throneGrid.innerHTML = '';   //Clear Grid before populate it
                    const throneCard = apiConn.createThronesCard(response.data);
                    throneGrid.appendChild(throneCard);
                } catch (error) {
                    console.log('Error while searching character:', error);
                }
            }
        }

        document.getElementById('searchButton').addEventListener('click', searchCharacter);
        document.getElementById('thronesSearch').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('search');
                searchCharacter();
            }
        });
    } else {
        const mainUrl = 'https://cvsistemas.com.mx/api/v2/continents/';
        document.addEventListener('DOMContentLoaded', apiConn.loadContinents(mainUrl));
        const searchCharacter = async () => {
            const continentId = document.getElementById('continentsSearch').value.toLowerCase();//console.log(continentId);
            if(continentId) {
                try {
                    const response = await axios.get(`${mainUrl}${continentId}`);
                    const continentGrid = document.getElementById('continentsGrid');
                    continentGrid.innerHTML = '';   //Clear Grid before populate it
                    const continentCard = apiConn.createContinentCard(response.data);
                    continentGrid.appendChild(continentCard);
                } catch (error) {
                    console.log('Error while searching continent:', error);
                }
            }
        }

        document.getElementById('searchButton').addEventListener('click', searchCharacter);
        document.getElementById('continentsSearch').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('search');
                searchCharacter();
            }
        });
    }
});