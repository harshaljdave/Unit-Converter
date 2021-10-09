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

            case "B":
                x=x/1048576 //1,048,576
                break;

            case "KB":
                x=x/1024
                break;

            case "GB":
                x=x*1024
                break;

            case "TB":
                x=x*1048576  //1,048,576
                break;

            case "PB":
                x=x*1073741824 //1,073,741,824
                break;

            case "MB":
            default:
                break;
        }

        switch (o) {

            case "B":
                x=x*1048576 //1,048,576
                break;

            case "KB":
                x=x*1024
                break;

            case "GB":
                x=x/1024
                break;

            case "TB":
                x=x/1048576  //1,048,576
                break;

            case "PB":
                x=x/1073741824 //1,073,741,824
                break;

            case "MB":
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

            case "B":
                z=z/1048576 //1,048,576
                break;

            case "KB":
                z=z/1024
                break;

            case "GB":
                z=z*1024
                break;

            case "TB":
                z=z*1048576  //1,048,576
                break;

            case "PB":
                z=z*1073741824 //1,073,741,824
                break;

            case "MB":
            default:
                break;
        }

        switch (i) {

            case "B":
                z=z*1048576 //1,048,576
                break;

            case "KB":
                z=z*1024
                break;

            case "GB":
                z=z/1024
                break;

            case "TB":
                z=z/1048576  //1,048,576
                break;

            case "PB":
                z=z/1073741824 //1,073,741,824
                break;

            case "MB":
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}