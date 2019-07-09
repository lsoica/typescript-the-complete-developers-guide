import React from 'react';
import { Todo, deleteTodos, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
    deleteTodos(id: number): any;
}

class _App extends React.Component<AppProps> {
    onButtonClick = () => {
        this.props.fetchTodos();
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodos(id);
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
                    {todo.title}
                </div>
            );
        });
    }

    componentDidMount() {
        this.props.fetchTodos();
    }
    render() {
        console.log(this.props.todos);
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return { todos: state.todos };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodos }
)(_App);
