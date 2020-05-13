export var data = {
    veganismType: "",
    veganismMakeOrDIY: "",
    veganismLocation: "",
    veganismBudget: ""
}

export function changeData(d) {
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}