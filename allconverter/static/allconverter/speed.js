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

            case "kmph":
                x = x / 3.6
                break;
            
            case "miph":
                x = x / 2.237
                break;

            case "kn":
                x = x / 1.944
                break;

            case "mps":
            default:
                break;
        }

        switch (o) {

            case "kmph":
                x = x * 3.6
                break;
            
            case "miph":
                x = x * 2.237
                break;

            case "kn":
                x = x * 1.944
                break;

            case "mps":
            default:
                break;
        }
    }
    if(x != NaN)
        document.getElementById("oup").value = x
}

function reversion() {
    z = document.getElementById("oup").value
    z = parseFloat(z)
    i = document.getElementById("iparam").value
    o = document.getElementById("oparam").value

    if (i == "" || o == "") {
        return 0
    }
    else{

        switch (o) {

            case "kmph":
                z = z / 3.6
                break;
            
            case "miph":
                z = z / 2.237
                break;

            case "kn":
                z = z / 1.944
                break;

            case "mps":
            default:
                break;
        }

        switch (i) {

            case "kmph":
                z = z * 3.6
                break;
            
            case "miph":
                z = z * 2.237
                break;

            case "kn":
                z = z * 1.944
                break;

            case "mps":
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}