const DisplayTodo = (props) => {
    const deleteTodoFormChild = (id) => {
        props.deleteTodoInParent(id);
    }
    
    const listTodo = props.childData;
    return (
        <div>
            <div>-------- list To Do ---------</div>
            {listTodo.map((item, index) => {
                return (
                <div id={item.id} key={item.id} onClick={() => deleteTodoFormChild(item.id)} >{item.name}</div>
                )
            })}
        </div>
    )
}

export default DisplayTodo;