
export default class ApiConnection {
    constructor() {
        
    }

    createThronesCard = (throne) => {
        const card = document.createElement('div');
        card.classList.add('thrones__card');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('thrones__info');

        const id = document.createElement('div');
        id.classList.add('throne__name');
        id.textContent = `ID: ${throne.id}`;

        const name = document.createElement('div');
        name.classList.add('throne__name');
        name.textContent = throne.fullName;

        const typesDiv = document.createElement('div');
        typesDiv.classList.add('thrones__desc');
        
        const familySpan = document.createElement('span');
        familySpan.classList.add('throne__desc','throne__title');
        familySpan.textContent = `Title: ${throne.title}`;
        typesDiv.appendChild(familySpan);

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('throne__desc','throne__family');
        titleSpan.textContent = `Family: ${throne.family}`;
        typesDiv.appendChild(titleSpan);
        
        infoDiv.appendChild(id);infoDiv.appendChild(name);
        infoDiv.appendChild(typesDiv);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('throne__image__container');

        const image = document.createElement('img');
        image.classList.add('throne__image');
        image.src = throne.imageUrl;
        image.alt = throne.fullName;

        imageContainer.appendChild(image);

        card.appendChild(infoDiv);
        card.appendChild(imageContainer);
        
        return card;
    }

    loadCharacters = async (url) => {
        const throneGrid = document.getElementById('thronesGrid');
        try {
            const response = await axios.get(url);//, {params: {limit:100}});
            //console.log(response);
            const thrones = response.data;
            throneGrid.innerHTML = '';

            //for of allows to finish 1 promise before moving to the next iteration, in this way, it helps iterate successfully
            //with an async structure (await statement) to retrieve data
            for(const throne of thrones) {
                //const detailResponse = await axios.get(pokemon.url);
                //console.log(throne);
                const throneCard = this.createThronesCard(throne);
                throneGrid.appendChild(throneCard);
            }

        } catch (error) {
            console.log('error fetch:', error);
        }
    }

    createContinentCard = (continent) => {
        const card = document.createElement('div');
        card.classList.add('continent__card');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('continent__info');

        const id = document.createElement('div');
        id.classList.add('continent__desc');
        id.textContent = `ID: ${continent.id}`;

        const name = document.createElement('div');
        name.classList.add('continent__desc');
        name.textContent = continent.name;

        infoDiv.appendChild(id);
        infoDiv.appendChild(name);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('continent__image__container');

        const image = document.createElement('img');
        image.classList.add('continent__image');
        image.src = './img/the-earth.jpg';
        image.alt = 'Earth';

        imageContainer.appendChild(image);

        card.appendChild(infoDiv);
        card.appendChild(imageContainer);
        
        return card;
    }

    loadContinents = async (url) => {
        const continentGrid = document.getElementById('continentsGrid');
        try {
            const response = await axios.get(url);//, {params: {limit:100}});
            //console.log(response);
            const continents = response.data;
            continentGrid.innerHTML = '';

            //for of allows to finish 1 promise before moving to the next iteration, in this way, it helps iterate successfully
            //with an async structure (await statement) to retrieve data
            for(const continent of continents) {
                //const detailResponse = await axios.get(pokemon.url);
                console.log(continent);
                const continentCard = this.createContinentCard(continent);
                continentGrid.appendChild(continentCard);
            }

        } catch (error) {
            console.log('error fetch:', error);
        }
    }
}