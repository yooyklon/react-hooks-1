import React, { useEffect, useState } from "react";

import List from "./components/List";

import Details from "./components/Details";

function App() {
  const [list, setList] = useState([]);

  const [currentElement, setCurrentElement] = useState({});

  function changeElement(element) {
    setCurrentElement(element);
  }

  useEffect(() => {
    console.log('useEffect');
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => response.json())
      .then((list) => setList(list));
  }, []);

  return <div className='container'>
    <div className='wrapper'>
      <List list={list} currentElement={currentElement} changeElement={changeElement} />
      <Details info={currentElement} />
    </div>
  </div>
}

export default App;
