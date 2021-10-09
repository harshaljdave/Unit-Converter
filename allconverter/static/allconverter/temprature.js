

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("inp").onkeyup = conversion
    document.getElementById("oup").onkeyup = reversion
    document.getElementById("iparam").onchange = conversion
    document.getElementById("oparam").onchange = conversion
})

function reversion(){
    var z = document.getElementById("oup").value
    z = parseFloat(z)
    var i = document.getElementById("iparam").value
    console.log(i)
    var o = document.getElementById("oparam").value
    console.log(o)
    if (i == "" || o == "") {
        return 0
    }
    else{
        if (o === "K" && i ==="C") {
            z = z - 273.15
        }
        else if (o === "K" && i === "F"){
            z = (z - 273.15) * 9/5 + 32
        }
        else if (o === "C" && i === "K"){
            z = z + 273.15
        }
        else if (o === "C" && i === "F"){
            z = (z * 9/5) + 32
        }
        else if (o === "F" && i === "K"){
            z = (z - 32) * 5/9 + 273.15
        }
        else if (o === "F" && i === "C"){
            z = (z - 32) * 5/9
        }
        else{
            z=z
        }
    }
    document.getElementById("inp").value = z
}

function conversion(){
    var x = document.getElementById("inp").value
    x = parseFloat(x)
    console.log(x)
    var i = document.getElementById("iparam").value
    console.log(i)
    var o = document.getElementById("oparam").value
    console.log(o)

    if (i == "" || o == "") {
        return 0
    }
    else{
        if (i === "K" && o ==="C") {
            x = x - 273.15
        }
        else if (i === "K" && o === "F"){
            x = (x - 273.15) * 9/5 + 32
        }
        else if (i === "C" && o === "K"){
            x = x + 273.15
        }
        else if (i === "C" && o === "F"){
            x = (x * 9/5) + 32
        }
        else if (i === "F" && o === "K"){
            x = (x - 32) * 5/9 + 273.15
        }
        else if (i === "F" && o === "C"){
            x = (x - 32) * 5/9
        }
        else{
            x=x
        }
    }
    document.getElementById("oup").value = x
}