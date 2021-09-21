import React, { useState } from "react";
import { Container , BoxToDo , Box_I_B , BoxList , BoxUl , BoxLi} from "./StyleToDo"
import img from "../img/lixeira_png.png"
const Todo = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const add = () => {
        if (task !== "") {
            const taskNova = {
                task: task,
                id: Date.now()
            };
            setList([...list, taskNova]);
        }
    };

    const excluir = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const prevent = (e) => {
        e.preventDefault();
    };

    return (
        <Container onSubmit={(e) => prevent(e)}>
            <BoxToDo>
                <Box_I_B>
                    <input placeholder="Digite" onChange={(ev) => setTask(ev.target.value)} />
                    <button onClick={add}>+</button>
                </Box_I_B>
                <BoxList>
                    {list.map((item, index) => (
                        <BoxUl key={index}>
                            <BoxLi>
                                {item.task}
                                <img  src={img} alt="..." onClick={() => excluir(item.id)}/>
                            </BoxLi>
                        </BoxUl>
                    ))}
                </BoxList>
            </BoxToDo>
        </Container>
    );
};

export default Todo;


