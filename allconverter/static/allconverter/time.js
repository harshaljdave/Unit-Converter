document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("inp").onkeyup = conversion
    document.getElementById("iparam").onchange = conversion
    document.getElementById("oparam").onchange = conversion
    document.getElementById("oup").onkeyup = reversion
})

function conversion(){
    x = document.getElementById("inp").value
    x = parseFloat(x)
    console.log(x)
    i = document.getElementById("iparam").value
    o = document.getElementById("oparam").value

    if (i == "" || o == "") {
        return 0
    }
    else{

        switch (i) {

            case "mus":
                x=x/1000000
                break;

            case "ms":
                x=x/1000
                break;

            case "m":
                x=x*60
                break;

            case "h":
                x=x*3600
                break;

            case "d":
                x=x*86400  //(3600*24)
                break;

            case "w":
                x=x*604800  //(3600*24*7)
                break;
            
            case "s":
            default:
                break;
        }

        switch (o) {

            case "mus":
                x=x*1000000
                break;

            case "ms":
                x=x*1000
                break;

            case "m":
                x=x/60
                break;

            case "h":
                x=x/3600
                break;

            case "d":
                x=x/86400  //(3600*24)
                break;

            case "w":
                x=x/604800  //(3600*24*7)
                break;
            
            case "s":
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
    console.log(z)
    i = document.getElementById("iparam").value
    o = document.getElementById("oparam").value

    if (i == "" || o == "") {
        return 0
    }
    else{

        switch (o) {

            case "mus":
                z = z/1000000
                break;

            case "ms":
                z = z/1000
                break;

            case "m":
                z = z*60
                break;

            case "h":
                z = z*3600
                break;

            case "d":
                z = z*86400  //(3600*24)
                break;

            case "w":
                z = z*604800  //(3600*24*7)
                break;
            
            case "s":
            default:
                break;
        }

        switch (i) {

            case "mus":
                z = z*1000000
                break;

            case "ms":
                z = z*1000
                break;

            case "m":
                z = z/60
                break;

            case "h":
                z = z/3600
                break;

            case "d":
                z = z/86400  //(3600*24)
                break;

            case "w":
                z = z/604800  //(3600*24*7)
                break;
            
            case "s":
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}