import {addTodo, toggleTodo} from "./todoActions";

const mapState = () => {};

// STOP doing this:
const mapDispatch = (dispatch) => ({
    addTodo : (text) => dispatch(addTodo(text)),
    toggleTodo : (index) => dispatch(toggleTodo(index))
})

// START doing this!
const mapDispatch = {addTodo, toggleTodo};

class TodoList extends React.Component {
    state = {todoText : ""};

    onAddTodoClicked = () => {
        this.props.addTodo(this.state.todoText);
    }
}

export default connect(mapState, mapDispatch)(TodoList);