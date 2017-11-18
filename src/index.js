import React from 'react';
import ReactDom from 'react-dom'
import Todoitem from './component/Todoitem';
import Form from './component/Form';
import './index.css';
class Todolist extends React.Component
{	
	constructor()
	{
		super();
		
		this.addnew = this.addnew.bind(this);
		this.adddata = this.adddata.bind(this);
		this.delete = this.delete.bind(this);
		
		this.state = {
			details:[
				{name:'Waqas'},
				{name:'Ali'},
				{name:'haider'},
				{name:'Kamran'}
			],
			new_details:''
		}
	}

	addnew(newvalue)
	{
		this.setState({
			new_details:newvalue.target.value
		})
	}
	adddata(event)
	{
		event.preventDefault();
		let details = this.state.details;
		let new_details = this.state.new_details;
		details.push({
			name:new_details
		})
		this.setState({
			details,
			new_details:''
		})
	}
	delete(index)
	{
		console.log(index);
		let details = this.state.details;
		details.splice(index,1);

		this.setState({details});
	}

	render(){
		
		return(
		<section>
			<Form 
				add_data={this.adddata} 
				new_details={this.state.new_details}  
				addnew={this.addnew}
			/>
			<ul className="list-unstyled todo"> 
			{ 
				this.state.details.map((details,index) => {
					return <Todoitem 
								key = {details.name} 
								detail = {details}
								index ={index}
								deleteItem = {this.delete} 
							/>
				})
			}
			</ul>
		</section>
		)
	}
}

ReactDom.render(<Todolist/>,document.getElementById('root'));