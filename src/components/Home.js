import React, { useState } from 'react'
import _ from 'lodash';
import AddTodo from './AddTodo.js';
import DisplayTodo from './DisplayTodo.js';


const Home = () => { 
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: "Whatching youtobe" },
            { id: 'todo2', name: "Using Facebook" },
            { id: 'todo3', name: "Reading book" }
        ]
    )

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    const handleClickBtn = () => {
        if(!todo) {
            alert("Todo's name is not empty")
            return;
        }
        let todoId = randomIntFromInterval(4, 2^53)
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }

        let currentTodolist = _.clone(listTodo);
        currentTodolist.push(todoItem);
        setListTodo(currentTodolist)
        setTodo("");
       
        // setListTodo([...listTodo, todoItem]); //spread operator
    }

    const handleDeleteTodo = (id) => {
        let currentTodolist = _.clone(listTodo);
        currentTodolist = currentTodolist.filter(item => item.id !== id);
        // c2
        // currentTodolist = currentTodolist.filter(item => {
        //     if(item.id !== id) return item
        // });
        setListTodo(currentTodolist);
        

        // c3
        // let arr = [];
        // currentTodolist.map(item => {
        //     if (item.id !== id) arr.push(item)
        //     alert('BANJ CHAWCS CHAWN MUON XOA CHU')
        // })
        // setListTodo(arr)
    }

    const myInfor = {
        chanel: "Ngọc Hải IT",
        age: 22
    }

// props, state: Object (key:value)
    return (
        <div>
            <AddTodo
                todo = {todo}
                setTodo={setTodo}
                handleClickBtn={handleClickBtn}
            />

            <DisplayTodo
                childData={listTodo} // x=y X <- y (y gán cho biến x)
                name={"Lê Ngọc Hải"}
                myInfor={myInfor}
                deleteTodoInParent={handleDeleteTodo}
            />
            
        </div>
    );
}



// class Home extends React.Component {

//     // khai báo
//     state = {
//         name: 'Hải',
//         // chanel: 'Hải 1402'
//     }

//     // gán lại giá trị state
//     render() {
//         return (
//             <div>
//                 <label>Name</label>
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
//                 <br /><br />
//                 Hello To Do list with name = {this.state.name}
//             </div>
//         );
//     }
// }

export default Home;