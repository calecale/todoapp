import React, { useState } from "react"; 


const ToDoList = () => {
  const [inputValue, setInputValue] = useState('');

  const [todos,setTodos]= useState([]);

  const handleChange =(event) => {
    const value = event.target.value;
    setInputValue(value);

  };

  const handleSubmit =(e) => {
    e.preventDefault(); //da se ne refresuje forma prilikom svakog submita

    if(!inputValue){
      return alert('Morate popuniti input polje pre submit-a forme');

    }

    setTodos([...todos, inputValue]);
    setInputValue('');

  };

  const removeTodo =(todo) => {
    const filteredTodos = todos.filter((t) => t !== todo)
    setTodos(filteredTodos); //vraca novi niz vrednosti bez te stavke koju smo izabrali da obrise
  };


return( //praksa je da kad se pise on_ dalje se nastavlja handle_
  <div>
    <form onSubmit={handleSubmit}>  
      <input type="text" value={inputValue} onChange={handleChange}/>
      <input type="submit" value="Add todo"/> 

    </form>
    <div>
      {todos.map((todo, index) => (
        <div key={index}> 
          <span>{todo}</span>
          <button onClick={() => removeTodo(todo)}>X</button> 
          
        </div>
      ))}
    </div>
  </div>
);

};

//napravi novu komponentu koja ce zameniti logiku za brisanje todo itema znaci umesto ovog diva ispod form taga npr todoitem i todoitem.jsx

export default ToDoList;