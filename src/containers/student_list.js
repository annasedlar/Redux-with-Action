import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//provider and connect are the main two times we use react-redux. The other two have their own things
//react-redux just connects them together

import SelectStudent from '../actions/SelectStudent.js';
//bindActionCreators is a function in redux that will trigger the action through every single reducers
import { bindActionCreators } from 'redux'; 

class StudentList extends Component{
	// we have access to this.props.students, because we brought it in below in mapStateToProps
	render(){
		// console.log(this.props.students); 
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li key={index} onClick={()=>this.props.SelectStudent(student)}>
					{student.name}
				</li>
			)
		});
		return(
			<div>
				<h1>Bootcamp Students:</h1>
				<h3>Click on a student</h3>
				{studentArray}
				<h2>You picked: {this.props.selectedStudent}</h2>
			</div>
		)
	}
}

//this function will tie together whatever is returned from the reducer we call to this.props
//this is the glue between redux state and THIS component knowing about it
//Another way - we are going to pick our reducers and they will be available to the component
//as this.props.NAMEBELOW
//use when you wanna map (and eventually display something)
function mapStateToProps(state){
	//gets state from connect, which gets it from react-redux
	return{
	students: state.students,
	selectedStudent: state.studentPicker
	}
};

//use when you want stuff to do (onClick, etc..)
function mapDispatchToProps(dispatch){
	//new thing from redux. expects an object
	return bindActionCreators({
		SelectStudent: SelectStudent
	}, dispatch)
}; 


//a component that has redux state and actions (redux is now aware of what's happening)
//connect takes an argument, will return a function, for which StudentList is an argument
//redux state is first param, redux action is second
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);  



