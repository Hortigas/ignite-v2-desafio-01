import { Todo } from '../../App';
import trash from './../../assets/trash.svg';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: string) => void;
    onClickTodo: (id: string) => void;
}

export function TodoItem({ todo, onDeleteTodo, onClickTodo }: TodoItemProps) {
    return (<div className={styles.wrapper}>
        <input onClick={() => onClickTodo(todo.id)} type="checkbox" defaultChecked={todo.done} ></input>
        <span className={todo.done ? styles.del : ''}>{todo.content}</span>
        <a href="#" onClick={() => onDeleteTodo(todo.id)}><img src={trash}></img></a>
    </div>)
}