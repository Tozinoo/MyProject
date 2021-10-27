import React, { Component } from "react";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import TodoListTemplate from "./components/TodoListTemplate";

class App extends Component {
    id = 2;
    state = {
        input: "",
        todos: [
            { id: 0, text: "여기에 ", checked: false },
            { id: 1, text: "추가됩니다!!", checked: true },
        ],
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    };
    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
            }),
        });
    };
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleCreate();
        }
    };
    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex((todo) => todo.id === id);

        const selected = todos[index];

        this.setState({
            todos: [
                ...todos.slice(0, index),
                {
                    ...selected,
                    checked: !selected.checked,
                },
                ...todos.slice(index + 1, todos.length),
            ],
        });
    };
    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo) => todo.id !== id),
        });
    };
    render() {
        const { input, todos } = this.state;
        const {
            handleToggle,
            handleChange,
            handleCreate,
            handleKeyPress,
            handleRemove,
        } = this;
        return (
            <TodoListTemplate
                form={
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        );
    }
}

export default App;
