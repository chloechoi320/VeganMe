export var data = {
    veganismType: "",
    veganismMakeOrDIY: "",
    veganismLocation: "",
    veganismBudget: "",
    clickedLocation: ""
}

if (process.browser) {
    var sessiondata = sessionStorage.getItem("data");
    if(sessiondata !== null){
		changeData(JSON.parse(sessiondata));
	}
}


export function changeData(d) {
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}