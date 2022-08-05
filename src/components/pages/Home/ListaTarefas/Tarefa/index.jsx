import React from 'react';
const Tarefa = ({id, titulo, completed}) => {
    return ( 
        <li key={id}>{titulo}</li>
     );
}
 
export default Tarefa;