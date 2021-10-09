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
        
            case "Ha":
                x=x*10000
                break;

            case "cm2":
                x=x/10000
                break;

            case "ac":
                x=x*4046.86
                break;

            case "in2":
                x=x/1550
                break;

            case "ft2":
                x=x/10.764
                break;

            case "km2":
                x=x*1000000
                break;

            case "yd2":
                x=x/1.196
                break;

            case "mi2":
                x=x*2590000
                break;
            
            case "m2":
            default:
                break;
        }

        switch (o) {
        
            case "Ha":
                x=x/10000
                break;

            case "cm2":
                x=x*10000
                break;

            case "ac":
                x=x/4046.86
                break;

            case "in2":
                x=x*1550
                break;

            case "ft2":
                x=x*10.764
                break;

            case "km2":
                x=x/1000000
                break;

            case "yd2":
                x=x*1.196
                break;

            case "mi2":
                x=x/2590000
                break;
                
            case "m2":
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
        
            case "Ha":
                z=z*10000
                break;

            case "cm2":
                z=z/10000
                break;

            case "ac":
                z=z*4046.86
                break;

            case "in2":
                z=z/1550
                break;

            case "ft2":
                z=z/10.764
                break;

            case "km2":
                z=z*1000000
                break;

            case "yd2":
                z=z/1.196
                break;

            case "mi2":
                z=z*2590000
                break;
            
            case "m2":
            default:
                break;
        }

        switch (i) {
        
            case "Ha":
                z=z/10000
                break;

            case "cm2":
                z=z*10000
                break;

            case "ac":
                z=z/4046.86
                break;

            case "in2":
                z=z*1550
                break;

            case "ft2":
                z=z*10.764
                break;

            case "km2":
                z=z/1000000
                break;

            case "yd2":
                z=z*1.196
                break;

            case "mi2":
                z=z/2590000
                break;
                
            case "m2":
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}