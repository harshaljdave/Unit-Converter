document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("inp").onkeyup = conversion
    document.getElementById("iparam").onchange = conversion
    document.getElementById("oparam").onchange = conversion
    document.getElementById("oup").onkeyup = reversion
})

function conversion() {
    x = document.getElementById("inp").value
    x = parseFloat(x)
    i = document.getElementById("iparam").value
    o = document.getElementById("oparam").value

    if (i == "" || o == "") {
        return 0
    }
    else{
        switch (i) {
        
            case 'mm':
                x=x/1000
                break;
    
            case 'cm':
                x=x/100
                break;
    
            case 'km':
                x=x*1000
                break;
    
            case 'in':
                x=x/39.3701
                break;
    
            case 'ft':
                x=x/3.28084
                break;
    
            case 'yd':
                x=x/1.09361
                break;
    
            case 'mi':
                x=x/0.000621371
                break;
    
            case 'NM':
                x=x/0.000539957
                break;
            
            case 'm':
            default:
                break;
        }

        switch (o) {
            
            case ('mm'):
                x=x*1000
                break;
        
            case ('cm'):
                x=x*100
                break;

            case ('km'):
                x=x/1000
                break;

            case ('in'):
                x=x*39.3701
                break;

            case ('ft'):
                x=x*3.28084
                break;

            case ('yd'):
                x=x*1.09361
                break;

            case ('mi'):
                x=x*0.000621371
                break;

            case ('NM'):
                x=x*0.000539957
                break;

            case 'm':
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
        
            case 'mm':
                z=z/1000
                break;
    
            case 'cm':
                z=z/100
                break;
    
            case 'km':
                z=z*1000
                break;
    
            case 'in':
                z=z/39.3701
                break;
    
            case 'ft':
                z=z/3.28084
                break;
    
            case 'yd':
                z=z/1.09361
                break;
    
            case 'mi':
                z=z/0.000621371
                break;
    
            case 'NM':
                z=z/0.000539957
                break;
            
            case 'm':
            default:
                break;
        }

        switch (i) {
            
            case ('mm'):
                z=z*1000
                break;
        
            case ('cm'):
                z=z*100
                break;

            case ('km'):
                z=z/1000
                break;

            case ('in'):
                z=z*39.3701
                break;

            case ('ft'):
                z=z*3.28084
                break;

            case ('yd'):
                z=z*1.09361
                break;

            case ('mi'):
                z=z*0.000621371
                break;

            case ('NM'):
                z=z*0.000539957
                break;

            case 'm':
            default:
                break;
        }
    }
    if(z != NaN)
        document.getElementById("inp").value = z
}