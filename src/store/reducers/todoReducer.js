import { toast } from "react-toastify";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data
        case "ADD_TODO":
            toast.success("A task was added..", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
            })
            return [action.todo.data, ...state];
        case "UPDATE_TODO":
            toast.success("A task was updated..", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
            })
            return state.map((todo) => todo._id === action.todo.data._id ? action.todo.data : todo
            );
        case "CHECK_TODO":
            toast.success("A task status was changed..", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
            })
            return state.map((todo) => todo._id === action.todo.data._id ? action.todo.data : todo
            );
        case "DELETE_TODO":
            toast.success("A task was deleted..", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000
            })
            return state.filter((todo) => 
            todo._id !== action.id 
            );
        default:
            return state;
    }
};

export default todoReducer;