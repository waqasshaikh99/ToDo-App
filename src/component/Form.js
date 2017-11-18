import React from 'react';

const Form = (props) =>
{
    return(
        <div className="form-group">
        <h1>To-Do <small>List</small></h1>
        <form className="form" onSubmit={props.add_data}>
            <input type="text" className="form-control" value={props.new_details} onChange={props.addnew}/>
            <button type="submit" className="btn btn btn-primary">Add</button>
        </form>
        </div>
    )
}

export default Form;