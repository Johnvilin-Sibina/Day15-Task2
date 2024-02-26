function create_label(tagname, attr1name, attr1value, attr2name, attr2value, content) {
    var label = document.createElement(tagname);
    label.setAttribute(attr1name, attr1value);
    label.setAttribute(attr2name, attr2value);
    label.innerHTML = content;
    return label;
}
function create_break(tagname) {
    var br = document.createElement(tagname);
    return br;
}
function create_input(tagname, attr1name, attr1value, attr2name, attr2value, attr3name, attr3value) {
    var input = document.createElement(tagname);
    input.setAttribute(attr1name, attr1value);
    input.setAttribute(attr2name, attr2value);
    input.setAttribute(attr3name, attr3value);
    return input;
}

function gender_input(tagname, attr1name, attr1value, attr2name, attr2value, attr3name, attr3value) {
    var gender_input = document.createElement(tagname);
    gender_input.setAttribute(attr1name, attr1value);
    gender_input.setAttribute(attr2name, attr2value);
    gender_input.setAttribute(attr3name, attr3value);
    return gender_input;
}

function food_input(tagname, attr1name, attr1value, attr2name, attr2value) {
    var food_input = document.createElement(tagname);
    food_input.setAttribute(attr1name, attr1value);
    food_input.setAttribute(attr2name, attr2value);
    return food_input;
}

var div = document.createElement("div");

var label1 = create_label("label", "for", "firstname", "class", "main", "First Name:");
var br1 = create_break("br");
var input1 = create_input("input", "type", "text", "id", "firstname", "class", "main2");
var br2 = create_break("br");

var label2 = create_label("label", "for", "lastname", "class", "main", "Last Name:");
var br3 = create_break("br");
var input2 = create_input("input", "type", "text", "id", "lastname", "class", "main2");
var br4 = create_break("br");

var label3 = create_label("label", "for", "address", "class", "main", "Address:");
var br5 = create_break("br");
var input3 = create_input("input", "type", "text", "id", "address", "class", "main2");
var br6 = create_break("br");

var label4 = create_label("label", "for", "pincode", "class", "main", "Pincode:");
var br7 = create_break("br");
var input4 = create_input("input", "type", "number", "id", "pincode", "class", "main2");
var br8 = create_break("br");

var label5 = create_label("label", "for", "gender", "class", "main", "Gender:");
var br9 = create_break("br");
var label6 = create_label("label", "for", "Male", "class", "main1", "Male");
var input5 = gender_input("input", "type", "radio", "name", "gender", "id", "Male");
var label7 = create_label("label", "for", "Female", "class", "main1", "Female");
var input6 = gender_input("input", "type", "radio", "name", "gender", "id", "Female");
var label8 = create_label("label", "for", "Transgender", "class", "main1", "Transgender");
var input7 = gender_input("input", "type", "radio", "name", "gender", "id", "Transgender");
var br10 = create_break("br");

var label9 = create_label("label", "for", "food", "class", "main", "Choice of Food: (Must choose atleast 2 options)");
var br11 = create_break("br");
var input8 = food_input("input", "type", "checkbox", "id", "South_Indian");
var label10 = create_label("label", "for", "South_Indian", "class", "main1", "South Indian");
var br12 = create_break("br");
var input9 = food_input("input", "type", "checkbox", "id", "North_Indian");
var label11 = create_label("label", "for", "North_Indian", "class", "main1", "North Indian");
var br13 = create_break("br");
var input10 = food_input("input", "type", "checkbox", "id", "Italian");
var label12 = create_label("label", "for", "Italian", "class", "main1", "Italian");
var br14 = create_break("br");
var input11 = food_input("input", "type", "checkbox", "id", "Chinese");
var label13 = create_label("label", "for", "Chinese", "class", "main1", "Chinese");
var br15 = create_break("br");
var input12 = food_input("input", "type", "checkbox", "id", "Continental");
var label14 = create_label("label", "for", "Continental", "class", "main1", "Continental");
var br16 = create_break("br");

var label15 = create_label("label", "for", "state", "class", "main", "State:");
var br17 = create_break("br");
var input13 = create_input("input", "type", "text", "id", "state", "class", "main2");
var br18 = create_break("br");

var label16 = create_label("label", "for", "country", "class", "main", "Country:");
var br19 = create_break("br");
var input14 = create_input("input", "type", "text", "id", "country", "class", "main2");
var br20 = create_break("br");
var br21 = create_break("br");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("onclick", "display_data()");
button.innerHTML = "Submit";

function create_th(tagname, content) {
    var th = document.createElement(tagname);
    th.innerHTML = content;
    return th;
}

function create_td(tagname,attrname, attrvalue,content) {
    var td = document.createElement(tagname);
    td.setAttribute(attrname,attrvalue);
    td.innerHTML = content;
    return td;
}

function display_data() {

    var td1_data = document.getElementById("firstname").value;
    var td2_data = document.getElementById("lastname").value;
    var td3_data = document.getElementById("address").value;
    var td4_data = document.getElementById("pincode").value;
    var gender_data = document.querySelector('input[type="radio"]:checked');
    var td5_data = gender_data ? gender_data.id : "";
    var food_choices = document.querySelectorAll('input[type="checkbox"]:checked');
    var td6_data = "";
    for (var i = 0; i < food_choices.length; i++) {
        td6_data += food_choices[i].id + ", ";
    }
    var td7_data = document.getElementById("state").value;
    var td8_data = document.getElementById("country").value;

    console.log(td1_data);
    console.log(td2_data);
    console.log(td3_data);
    console.log(td4_data);
    console.log(td5_data);
    console.log(td6_data);
    console.log(td7_data);
    console.log(td8_data);

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    thead.className = "heading";
    var th1 = create_th("th","First Name");
    var th2 = create_th("th","Last Name");
    var th3 = create_th("th","Address");
    var th4 = create_th("th","Pincode");
    var th5 = create_th("th","Gender");
    var th6 = create_th("th","Food Choice");
    var th7 = create_th("th","State");
    var th8 = create_th("th","Country");

    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    var td1 = create_td("td","class","info", td1_data)
    var td2 = create_td("td","class","info", td2_data)
    var td3 = create_td("td","class","info", td3_data)
    var td4 = create_td("td","class","info", td4_data)
    var td5 = create_td("td","class","info", td5_data)
    var td6 = create_td("td","class","info", td6_data)
    var td7 = create_td("td","class","info", td7_data)
    var td8 = create_td("td","class","info", td8_data)
    
    thead.append(th1, th2, th3, th4, th5, th6, th7, th8)
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    tbody.append(tr);
    table.append(thead, tbody)
    document.body.append(table)
}


div.append(label1, br1, input1, br2, label2, br3, input2, br4, label3, br5, input3, br6, label4, br7, input4, br8, label5, br9, label6, input5, label7, input6, label8, input7, br10, label9, br11, input8, label10, br12, input9, label11, br13,
    input10, label12, br14, input11, label13, br15, input12, label14, br16, label15, br17, input13, br18, label16, br19, 
    input14, br20,br21, button);
document.body.append(div);


