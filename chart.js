const physical_attribute_name = [
    "strength", 
    "explosive",
    "stamina", 
    "edurance", 
    "speed",
    "agility",
    "mobility",
];

const physical_attribute_length = physical_attribute_name.length;
var ctx = document.getElementById('myChart').getContext('2d');


    
function createInputLables () {
    var physical_attribute_element = document.getElementsByTagName('label');
    
    for (var i = 0; i < physical_attribute_name.length; i++) {
        physical_attribute_element[i].innerText = physical_attribute_name[i]
    }
}

function createGraphDatasets () {
    const MyFirstDataset = {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
    };
    
    const MyFourthDataset = {
        data: [1, 1, 1, 1, 1, 1, 1] 
        
    };

    return {
        first_dataset: MyFirstDataset,
        second_dataset: MyFourthDataset
    };
}

function createGraphSetting () {
    const {first_dataset, second_dataset} = createGraphDatasets();
    
    const data = {
        labels: physical_attribute_name,
        datasets: [
            first_dataset,
            second_dataset
        ]
    };

    return data;
}

function createGraphInterface () {    
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: createGraphSetting(),
        options: {
            elements: {
              line: {
                borderWidth: 3
              }
            }
        },
    });
}

function createInputAttributeName () {
    let elementHolder = document.getElementsByTagName("input")
    for (var i = 0; i < physical_attribute_length; i++) {
        elementHolder[i].setAttribute("name", physical_attribute_name[i])
    }
}



function ResultPrinter(form) {        
    for (var i = 0; i < physical_attribute_length; i++) {
        // console.log(form.physical_attribute_name[i].value)

        console.log(form.strength .value)
        console.log(form.explosive.value)
        console.log(form.stamina .value)
        console.log(form.edurance .value)
        console.log(form.speed.value)
        console.log(form.agility.value)
        console.log(form.mobility.value)
        
    }
}


createInputAttributeName();
createInputLables();
createGraphInterface();