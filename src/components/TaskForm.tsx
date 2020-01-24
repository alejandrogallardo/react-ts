import * as React from 'react'

import { ITask } from './Task'

export class TaskForm extends React.Component<ITaskFormProps, any> {

    constructor(props: ITaskFormProps){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    getCurrentTimeStamp(){
        return new Date().getTime()
    }

    handleNewTask(e: React.FormEvent<HTMLFormElement>){
        // console.log('Guardando...')
        e.preventDefault()
        
        const newTask: ITask = {
            id: this.getCurrentTimeStamp(),
            title: this.state.title,
            description: this.state.description,
            completed: false
        }

        console.log(newTask)
        this.props.addNewTask(newTask)
        this.setState({title: '', description: ''})
    }

    handleInputChange( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ){
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(value)
    }

    render() {
        return(
            <div className="card card-body mt-5">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input name="title" type="text" className="form-control" placeholder="Titulo" onChange={e => this.handleInputChange(e)} value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <textarea name="description" className="form-control" placeholder="Descripción" onChange={e => this.handleInputChange(e)} value={ this.state.description }></textarea>
                    </div>
                    <button className="btn btn-success" type="submit">Hola</button>
                </form>
            </div>
        )
    }
}

interface ITaskFormProps {
    addNewTask: ( task: ITask ) => void
}

interface ITaskFormState {
    title: string;
    description: string;
}