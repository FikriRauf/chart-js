const physical_attribute_name = [
    "strength", 
    "explosive",
    "power",
    "stamina", 
    "edurance", 
    "speed",
    "agility",
    "mobility",
    "stability",
    "flexibility",
];



const physical_attribute_length = physical_attribute_name.length;
var ctx = document.getElementById('myChart').getContext('2d');



function getPhysicalAttributeValues(form) {        
    let physical_attribute_value_holder = []

    for (var i = 0; i < physical_attribute_length; i++) {
        physical_attribute_value_holder[i] = form[i].value
        localStorage.setItem('physical_attribute_value_holder', JSON.stringify(physical_attribute_value_holder))
    }
}

function setInputValue () {
    let holder = document.getElementsByTagName("input")
    console.log(holder.length)
    
    for(var i = 0; i <= physical_attribute_length; i++ ) {
        console.log(holder[i])
        holder[i].setAttribute("value", physical_attribute_value_holder[i])
    }
    
}

function createNewLabelAndInputNodes () {
    let newLabelNode = document.createElement("label");
    let newInputNode = document.createElement("input");

    newInputNode.setAttribute("type", "number");
    newInputNode.setAttribute("min", "0");
    newInputNode.setAttribute("max", "100");
    newInputNode.setAttribute("placeholder", "0");

    return {
        newLabelNode,
        newInputNode
    };
}

function getParentAndSubmitNodesAndFormLength () {
    let form_length = physical_attribute_form.length;
    let last_element_index = form_length - 1;
    
    let parentNode = physical_attribute_form[last_element_index].parentNode;
    let referSubmitNode = physical_attribute_form[last_element_index];

    return {
        parentNode,
        referSubmitNode,
        form_length
    };
}

function insertNewLabelAndInputNode () {
    let {parentNode, referSubmitNode, form_length} = getParentAndSubmitNodesAndFormLength();
    
    for (form_length; form_length <= physical_attribute_length; form_length++) {
        const {newLabelNode, newInputNode} = createNewLabelAndInputNodes();
        
        parentNode.insertBefore(newLabelNode, referSubmitNode)
        parentNode.insertBefore(newInputNode, referSubmitNode)
    }
}

function createInputLabels () {
    var physical_attribute_element = document.getElementsByTagName("label");
    
    for (var i = 0; i < physical_attribute_name.length; i++) {
        physical_attribute_element[i].innerText = physical_attribute_name[i]
    }
}


function createGraphDatasets () {
    let arrayHolder;
    let valueHolder = localStorage.physical_attribute_value_holder;
    
    if (valueHolder != null) {
        
        let holder = JSON.parse(valueHolder);
        console.log(holder)
        arrayHolder = holder;
    } else {
        arrayHolder = [65, 59, 90, 81, 56, 55, 40];
    }
    
    const MyFirstDataset = {
            label: 'My First Dataset',
            data: arrayHolder,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
    };
    
    const MyFourthDataset = {
        data: [1, 1, 1, 1, 1, 1, 1],
        fill: false
    };

    const MyFifthDataset = {
        data: [100, 100, 100, 100, 100, 100, 100],
        fill: false,
        showLine: false
    }

    return {
        first_dataset: MyFirstDataset,
        second_dataset: MyFourthDataset,
        third_dataset: MyFifthDataset
    };
}

function createGraphSetting () {
    const {first_dataset, second_dataset, third_dataset} = createGraphDatasets();
    
    const data = {
        labels: physical_attribute_name,
        datasets: [
            first_dataset,
            second_dataset,
            third_dataset
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
              },
              point: {
                  pointRadius: 0
              }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
            
        },
    });
}


// setInputValue();
insertNewLabelAndInputNode();
createInputLabels();
createGraphInterface();