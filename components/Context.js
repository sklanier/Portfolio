import React, { createContext, useState } from 'react';
import project_data from '../data/project_data';

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {

    const [data, setData] = useState(project_data);

return(

   <Provider value={[data, setData]}>

      {props.children}

   </Provider>

 );

}