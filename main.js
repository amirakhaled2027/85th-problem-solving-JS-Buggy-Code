//The challenge is to try and fix this buggy code, 
//given the inputs true and false.

// function has_bugs(buggy_code) {
// 	if (buggyCode) {
// 		return 'sad days'
// 	} else if {
// 		return 'it's a good day'
// 	}
// }


function has_bugs(buggy_code) {
	if (buggy_code) {
		return 'sad days'
	} else {
		return "it's a good day"
	}
}

console.log(has_bugs(true));
console.log(has_bugs(false));