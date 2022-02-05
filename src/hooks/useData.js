import { useContext } from 'react';
import dataContext from '../context/index.js';

const useData = () => useContext(dataContext);

export default useData;
