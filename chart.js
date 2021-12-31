const physical_attribute_name = [
    "strength", 
    "explosive",
    "stamina", 
    "edurance", 
    "speed",
    "agility",
    "mobility",
    "stability",
    "power",
    "flexibility",
    "intellect"
];

const physical_attribute_length = physical_attribute_name.length;
var ctx = document.getElementById('myChart').getContext('2d');

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


function ResultPrinter(form) {        
    for (var i = 0; i < physical_attribute_length; i++) {
        console.log(form[i].value)        
    }
}

function createNewNodes () {
    let newLabelNode = document.createElement("label");
    let newInputNode = document.createElement("input");

    newInputNode.setAttribute("type", "number");
    newInputNode.setAttribute("min", "0");
    newInputNode.setAttribute("max", "100");
    newInputNode.setAttribute("placeholder", "0");

    return {
        new_label_node: newLabelNode,
        new_input_node: newInputNode
    };
}

function getParentNodeAndSubmitNodeAndFormLength () {
    let form_length = physical_attribute_form.length;
    let last_element_index = form_length - 1;
    
    let parentNode = physical_attribute_form[last_element_index].parentNode;
    let referSubmitNode = physical_attribute_form[last_element_index];

    return {
        parent_node: parentNode,
        refer_submit_node: referSubmitNode,
        form_length: form_length
    };
}

function insertLabelAndInputNode () {
    let {parent_node, refer_submit_node, form_length} = getParentNodeAndSubmitNodeAndFormLength();
    
    for (form_length; form_length <= physical_attribute_length; form_length++) {
        const {new_label_node, new_input_node} = createNewNodes();
        
        parent_node.insertBefore(new_label_node, refer_submit_node)
        parent_node.insertBefore(new_input_node, refer_submit_node)
    }
}

function createInputLables () {
    var physical_attribute_element = document.getElementsByTagName("label");
    console.log(physical_attribute_element)
    
    for (var i = 0; i < physical_attribute_name.length; i++) {
        physical_attribute_element[i].innerText = physical_attribute_name[i]
    }
}


insertLabelAndInputNode();
createInputLables();
createGraphInterface();