import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

import CardItem from '../../components/CardItem';
import Header from '../../components/Header';


interface RepositoryDTO {
  id: string;
  full_name: string;
  description: string;
  avatar: string;
  owner: {
    avatar_url:string;
  }
}


const Home: React.FC = () => {

  // States

  let [searchState, setSearchState] = useState("");
  const [repositoriesState, setRepositoriesState] = useState([]);

  // Handles

  function handleSearchState() {
    const searchField = document.getElementById('search-field') as HTMLInputElement;
    const searched = searchField.value

    axios
      .get(`https://api.github.com/search/repositories?q=${searched}`)
      .then(repositories => {

        return setRepositoriesState(repositories.data.items);
      }).catch((err) => console.error('Axios error'))

    searchField.value = "";
    setSearchState((searchState = searched));

    return searchState;
  }



  return (
    <div className="container">
      <div id="content">
        <Header />

        <p>Explore repositórios no Github</p>

        <div id="search-group">
          <input id="search-field" type="text" placeholder="Digite aqui" />
          <button id="search-button" onClick={() => handleSearchState()}>Pesquisar</button>
        </div>

        <main>
          {
            repositoriesState &&
              repositoriesState.map(
              (repository: RepositoryDTO) => (
                <CardItem
                  key={repository.id}
                  full_name={repository.full_name}
                  description={repository.description}
                  avatar={repository.owner.avatar_url}
                />
              ))}
        </main>




      </div>
    </div>
  );
}


export default Home;
