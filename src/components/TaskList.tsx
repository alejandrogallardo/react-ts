import * as React from 'react'

import { ITask } from './Task'

export class TaskList extends React.Component<ITaskListProps, any> {

    render(): JSX.Element[] {
        return this.props.tasks.map((task: ITask, i: number) => {
            return (
                <div className="col-md-4 mt-5" key={task.id}>
                    <div className="card card-body">
                        <h3 className="card-title">{ task.title }</h3>
                        <p>{ task.description }</p>
                        <button onClick={() => this.props.deleteTask(task.id)} className="btn btn-danger">delete</button>
                    </div>
                </div>
            )
        })
    }

    // render(){
    //     return(
    //         <div>
    //             <h1>Hola</h1>
    //         </div>
    //     )
    // }

}

interface ITaskListProps {
    tasks: ITask[]
    deleteTask: ( id: number ) => void
}