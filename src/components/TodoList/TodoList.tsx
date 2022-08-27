import { Todo } from '../../App';
import clipboard from '../../assets/clipboard.svg';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface TodosProps {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    onClickTodo: (id: string) => void;
}

export function TodoList({ todos, onDeleteTodo, onClickTodo }: TodosProps) {
    return (
        <div className={styles.wrapper}>
            <header>
                <span>
                    Tarefas criadas<strong>{todos.length}</strong>
                </span>
                <span>
                    Concluídas
                    <strong>{
                        todos.length === 0 ?
                            0 :
                            todos.reduce((previousValue, todo) => (todo.done ? previousValue + 1 : previousValue), 0) + ' de ' + todos.length}
                    </strong>
                </span>
            </header>
            {todos.length === 0 ? (
                <main className={styles.mainEmpty}>
                    <img src={clipboard} alt="prancheta" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </main>
            ) : (
                <main className={styles.mainWithContent}>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onClickTodo={onClickTodo} />
                    ))}
                </main>
            )}
        </div>
    );
}
