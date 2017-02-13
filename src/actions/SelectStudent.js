export default function SelectStudent(student){
	console.log(student);
	//every action MUST RETURN AT LEAST A TYPE
	//we will have action.type, action.payload
	return {
		type: "PICK_STUDENT",
		//payload is what you actually want to return
		payload: student
	}
}