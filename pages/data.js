export var data = {
    veganismType: "",
    veganismMakeOrDIY: "",
    veganismLocation: "",
    veganismBudget: ""
}

if (process.browser) {
    var sessiondata = sessionStorage.getItem("data");
    changeData(JSON.parse(sessiondata));
}

export function changeData(d) {
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}