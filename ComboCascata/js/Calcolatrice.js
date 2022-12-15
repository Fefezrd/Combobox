/*
* JS Calcolatrice
*/

var digit = Array();
var i=0;

digit[0]=0;
visualizza();

function visualizza()
{
    let display = document.getElementById("display"); 
    display.value = "";     
    
    for (let j=0; j < digit.length; j++)
    {
        display.value = display.value + digit[j]; 
    }
}

function cifra(num)
{
    //controllo il precedente inserimento
    //deve esserci un'operazione altrimenti sovrascrivo

    if (isNaN(digit[i]))
    {
        i++;
        digit[i] = num;
    }
    else
    {
        digit[i] = num;
    }
    visualizza();
}

function operazione(op)
{
    //controllo il precedente inserimento
    //deve esserci un numero altrimenti sovrascrivo
    let totale = 0;

    if (isNaN(digit[i]))
    {
        digit[i] = op;            
    }
    else
    {
        i++;
        digit[i] = op;
    }

    if (op == '=')
    {
        let j =0; 
        {
            if (digit[j+1] == '+')
            {
                totale += digit[j] + digit[j+2];
            }  
            
            if (digit[j+1] == '-')
            {
                totale += digit[j] - digit[j+2];
            }
            
            if (digit[j+1] == '*')
            {
                totale += digit[j] * digit[j+2];
            }
            
            if (digit[j+1] == '/')
            {
                totale += digit[j] / digit[j+2];
            }  
            
            //alert(totale);
            digit[j+4] = totale;
        }
    }
    
    visualizza();
}