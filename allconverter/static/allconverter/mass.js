document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("inp").onkeyup = conversion
    document.getElementById("iparam").onchange = conversion
    document.getElementById("oparam").onchange = conversion
    document.getElementById("oup").onkeyup = reversion
})

function conversion(){
    x = document.getElementById("inp").value
    x = parseFloat(x)
    i = document.getElementById("iparam").value
    o = document.getElementById("oparam").value

    if (i == "" || o == "") {
        return 0
    }
    else{
        switch (i) {

            case "mg":
                x=x/1000
                break;

            case "kg":
                x=x*1000
                break;

            case "oz":
                x=x*28.3495
                break;

            case "lb":
                x=x*453.592
                break;

            case "t":
                x=x*1000000
                break;

            case "USt":
                x=x*907185
                break;

            case "UKt":
                x=x*1016000
                break;

            case "g":
            default:
                break;
        }

        switch (o) {

            case "mg":
                x=x*1000
                break;

            case "kg":
                x=x/1000
                break;

            case "oz":
                x=x/28.3495
                break;

            case "lb":
                x=x/453.592
                break;

            case "t":
                x=x/1000000
                break;

            case "USt":
                x=x/907185
                break;

            case "UKt":
                x=x/1016000
                break;
            
            case "g":
            default:
                break;
        }
    }
    if(x != NaN)
        document.getElementById("oup").value = x
}

function reversion(){
    z = document.getElementById("oup").value
    z = parseFloat(z)
    i = document.getElementById("iparam").value
    o = document.getElementById("oparam").value

    if (i == "" || o == "") {
        return 0
    }
    else{
        switch (o) {

            case "mg":
                z=z/1000
                break;

            case "kg":
                z=z*1000
                break;

            case "oz":
                z=z*28.3495
                break;

            case "lb":
                z=z*453.592
                break;

            case "t":
                z=z*1000000
                break;

            case "USt":
                z=z*907185
                break;

            case "UKt":
                z=z*1016000
                break;

            case "g":
            default:
                break;
        }

        switch (i) {

            case "mg":
                z=z*1000
                break;

            case "kg":
                z=z/1000
                break;

            case "oz":
                z=z/28.3495
                break;

            case "lb":
                z=z/453.592
                break;

            case "t":
                z=z/1000000
                break;

            case "USt":
                z=z/907185
                break;

            case "UKt":
                z=z/1016000
                break;
            
            case "g":
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}