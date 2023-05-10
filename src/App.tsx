import React from "react";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
                <div>
                    <ul>
                    <li> <Link to={"/"}> Home </Link> </li>
                    <li> <Link to={"/users"}> Users </Link> </li>
                    <li> <Link to={"/todos"}> Todos </Link> </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/users" element={<UsersPage/>}/>
                        <Route path="/users/:id" element={<UserItemPage/>}/>
                        <Route path="/todos" element={<TodosPage/>}/>
                        <Route path="/todos/:id" element={<TodoItemPage/>}/>
                    </Routes>
                </div>

    );
};
export default App;
