var eater; // = document.getElementById('nameSearch').value;
var table = document.getElementById('eaterStats').innerHTML;
var index = 0;

document.getElementById('button').addEventListener('click', function()
{
    eater = document.getElementById('nameSearch').value;
    eater = eater.toLowerCase();
    for (i = 2; i < 6; i += 1){
        document.getElementsByTagName('td')[i].innerHTML = "";
    }
    displayInfo();
})


//for (i = 0; i < item1.length; i += 1)
//{}
function displayInfo()
{
    var description ="";
    for (c = 0; c < 6; c += 1)
    {
        if (c == 0)
        {
            document.getElementsByTagName('td')[c].innerHTML = "Amount";
        }

        if (c == 1)
        {
            document.getElementsByTagName('td')[c].innerHTML = "Food";
        }

        if (c == 2)
        {
            document.getElementsByTagName('td')[c].innerHTML = "Time";
        }
        if (c == 3)
        {
                while (index < proEater.length)
                {
                    if (eater === proEater[index].record_holder)
                    {
                        description += eater + " consumed " + proEater[index].amount + "lbs." + '<br>'+ '<br>';
                    }
                    index += 1;
                }
            document.getElementsByTagName('td')[c].innerHTML = description; 
            description = "";   
            index = 0;
        }

        if (c == 4)
        {
                while (index < proEater.length)
                {
                    if (eater === proEater[index].record_holder)
                    {
                        description += "of " + proEater[index].food + '<br>'+'<br>';
                    }
                    index += 1;
                }
            document.getElementsByTagName('td')[c].innerHTML = description; 
            description = "";   
            index = 0;
        }

        if (c == 5)
        {
            table += '<td>';
                while (index < proEater.length)
                {
                    if (eater === proEater[index].record_holder)
                    {
                        description += "in " + proEater[index].time + " minutes" + '<br>' + '<br>';
                    }
                    index += 1;
                }
            document.getElementsByTagName('td')[c].innerHTML = description; 
            description = "";   
            index = 0;
        }
    }
}

displayInfo();