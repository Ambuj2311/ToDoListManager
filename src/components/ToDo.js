import React, { useState } from "react";
import './ToDo.css';

const ToDo = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);


    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return; // Prevent adding empty items
        setList([...list, input.trim()]);
        setInput("");
    };

    const handleDelete = (index) => {
        const newList = [
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ];
        setList(newList);
    };

    const handleEdit = (index) => {
        const editedItem = prompt("Edit item:", list[index]);
        if (editedItem) {
            const newList = list.map((item, i) => (i === index ? editedItem : item));
            setList(newList);
        }
    };

    return (
        <>
       
        <div className="todo-container">
            <header className="todo-header">
    <h2>"Tick Off Your ToDos" <br/> with <br/> <span> ToDo List Manager </span> </h2>
</header>
            <form onSubmit={handleSubmit}>
                <div className="todo-input">
                    <input
                        type="text"
                        value={input}
                        onChange={handleChange}
                        placeholder="Add a new task..."
                    />
                    <button type="submit">Add Item</button>
                </div>
            </form>
            <ul className="todo-list">
                {list.map((item, i) => (
                    <li key={i} className="todo-item">
                        <span>{item}</span>
                        <div className="todo-buttons">
                            <button id="editbtn" onClick={() => handleEdit(i)}>Edit</button>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default ToDo;
