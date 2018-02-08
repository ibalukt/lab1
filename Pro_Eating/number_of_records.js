var text = document.getElementById('numTest');

    var category = "record_holder";
    var numberOfRecords = [];
    var total = 0;
    var wins = 0;
    var newItem;
    var temp;


var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor ='black';
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'bar',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
        label: "Number of Records Set",
        backgroundColor: 'rgb(184, 18, 18)',
        borderColor: 'black',
        data: [],
        }]
    },

    // Configuration options go here
    options: {
        responsive:true,
        maintainAspectRation:false,

        legend: {
            labels: {
                fontColor:'black'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
       }
    }
});



var item1 = chart.data.labels;
var item2 = chart.data.datasets[0].data;

//console.log(chart.data.labels);
console.log(myChart);

for (i = 0; i < proEater.length; i += 1)
    {

        temp = proEater[i].record_holder;

        ///numberOfRecords.push(0);
        //chart.data.labels.push(temp);

        for (j = 0; j < proEater.length; j+=1)
        {


            //This checks the current item being evaluated against all the other one now in the labels list.
            if ((temp == item1[j]) && (j < i)) 
            {
                // If the item is already in the label list, don't add the new item to the list
                newItem = false;
                break;
            }
            else
            {
                // If the item is not already in the label's list then add it
                newItem = true;                        
            }
        }
        //console.log(newItem);
        //It the item is a new item than add the item to the list.
        if (newItem === true)
        {     
            numberOfRecords.push(0);
            item1.push(temp);
        }
    }
              

for (i = 0; i < item1.length; i += 1)
    {

        for (j = 0; j < proEater.length; j+=1)
        {
                
            temp = proEater[j].record_holder; 


            if (item1[i] === temp)
            {
                numberOfRecords[i] += 1;
            }
        }
        item2.push(numberOfRecords[i]);
        //chart.data.datasets[0].data.push(numberOfRecords[i]);
    }

console.log(chart.data.labels);
console.log(chart.data.datasets[0].data);
