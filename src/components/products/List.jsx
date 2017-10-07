import React  from 'react';

//function List({ data}) {

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div className="todo-list list-group">
                {this.props.category}
                {this.props.data.map(todo =>
                    <div className="todo list-group-item justify-content-between" key={todo.id}>
                        <label>
                            {todo.name}
                        </label>
                    </div>
                )}

            </div>
        );
    }

}

export default List;

