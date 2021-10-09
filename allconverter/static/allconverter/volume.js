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

            case 'ml':
                x=x/1000
                break;

            case 'm3':
                x=x/0.001
                break;

            case 'ft3':
                x=x/0.0353147
                break;

            case 'in3':
                x=x/61.0237
                break;

            case 'USg':
                x=x/0.264172
                break;

            case 'UKg':
                x=x/0.219969204701183
                break;

            case 'l':
            default:
                break;
        }

        switch (o) {
            case 'l':
                break;

            case 'ml':
                x=x*1000
                break;
    
            case 'm3':
                x=x*0.001
                break;

            case 'ft3':
                x=x*0.0353147
                break;

            case 'in3':
                x=x*61.0237
                break;

            case 'USg':
                x=x*0.264172
                break;

            case 'UKg':
                x=x*0.219969204701183
                break;

            case 'l':
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

            case 'ml':
                z=z/1000
                break;

            case 'm3':
                z=z/0.001
                break;

            case 'ft3':
                z=z/0.0353147
                break;

            case 'in3':
                z=z/61.0237
                break;

            case 'USg':
                z=z/0.264172
                break;

            case 'UKg':
                z=z/0.219969204701183
                break;

            case 'l':
            default:
                break;
        }

        switch (i) {
            case 'l':
                break;

            case 'ml':
                z=z*1000
                break;
    
            case 'm3':
                z=z*0.001
                break;

            case 'ft3':
                z=z*0.0353147
                break;

            case 'in3':
                z=z*61.0237
                break;

            case 'USg':
                z=z*0.264172
                break;

            case 'UKg':
                z=z*0.219969204701183
                break;

            case 'l':
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}