const getPlanets = async (key, page) => {
  const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`);

  return response.json();
};

export default getPlanets;
