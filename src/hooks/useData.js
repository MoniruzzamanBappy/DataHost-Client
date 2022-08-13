
import { useState } from 'react';
import { useEffect } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://datahost.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return [data, setData];
};

export default useData;