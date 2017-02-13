//reducers return a piece of state

var students = function(state, action){
	var studentsArray =[
		{
			name: "Anna",
			seat: 7
		},
		{
			name: "Connie", 
			seat: 8
		},
		{
			name: "Ryan",
			seat: 9
		},
		{
			name: "Drew", 
			seat: 3
		},
		{
			name: "Liz",
			seat: 5
		},
		{
			name: "Kyle", 
			seat: 4
		}
	];
		// console.log(state); 
		// console.log(action);
		// console.log(action.type); 
	return studentsArray;

	// if(action.type == "PICK_STUDENT"){
	// 	return action.payload; 
	// }else{
	// 	return action.studentsArray;
	// }
}

export default students; 