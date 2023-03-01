function Learn_funcs() {
    let name = document.getElementById('currentName');
    var result = (`Good evening ${name.value}`)
    alert(result)
}

function Umnozh() {
    function multiplyNumeric(obj) {
        for (key in obj) {
            if (typeof obj[key] == 'number') obj[key] *= 2;
        }

        alert(obj[key])
    }
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    multiplyNumeric(menu);
}