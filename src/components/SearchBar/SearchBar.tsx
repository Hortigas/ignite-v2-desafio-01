import { useState } from 'react';
import addIcon from '../../assets/add-icon.svg';
import styles from './SearchBar.module.scss';

interface AddTodoBarProps {
    addNewTodo: (content: string) => void
}

export function AddTodoBar({ addNewTodo }: AddTodoBarProps) {
    const [todoText, setTodoText] = useState('');

    function handleOnClickAddTodo() {
        addNewTodo(todoText);
        setTodoText('');
    }

    function OnChangeInputTodo(event: any) {
        setTodoText(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <input value={todoText} onChange={OnChangeInputTodo} placeholder="Adicione uma nova tarefa" type="text"></input>
            <button onClick={handleOnClickAddTodo}>Criar <img src={addIcon} /></button>
        </div>
    )
}