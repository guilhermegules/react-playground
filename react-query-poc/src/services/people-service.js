const getPeople = async (key, page) => {
  const response = await fetch(`http://swapi.dev/api/people/?page=${page}`);

  return response.json();
};

export default getPeople;
