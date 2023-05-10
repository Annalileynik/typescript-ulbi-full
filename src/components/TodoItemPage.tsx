import React, {FC, useEffect, useState} from "react";
import {ITodo} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


interface TodoItemPageParams {
    id:number;
}
const TodoItemPage :FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null);


    // @ts-ignore
    const params = useParams<TodoItemPageParams>();
    const navigate = useNavigate()
    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo | null>(`https://jsonplaceholder.typicode.com/todos/` + params.id);
            setTodo(response.data);
        }
        catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchTodo()
    }, []);
    return (
        <div>
            <button onClick={()=>navigate('/todos')} > Back Todos</button>
            <h1>{todo?.title}</h1>
        </div>
    );
};

export default TodoItemPage;
