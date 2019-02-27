function dynamicTable() {                      //function to create input field for Date & Description 
    var date = document.createElement("input");//also to create add and remove button
    date.setAttribute("type", "date");
    date.setAttribute("id", "date");
    document.body.appendChild(date);

    var description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("id", "description");
    document.body.appendChild(description);

    var add = document.createElement("button");
    add.innerHTML = "add";
    document.body.appendChild(add);
    add.setAttribute("id", "add");

    var cancel = document.createElement("button");
    cancel.innerHTML = "cancel";
    document.body.appendChild(cancel);
    cancel.setAttribute("id", "cancel");

    afterClick();

}
function afterClick() {           //function for event listener  add and remove button

    document.getElementById("add").addEventListener('click', function (event) {
        event.preventDefault();
        var dateParameter = document.getElementById("date").value;
        var descriptionParameter = document.getElementById("description").value;
        if((dateParameter=='')|| dateParameter=='')
        {
            alert("date or description is empty");
        }
        else{
        createTable(dateParameter, descriptionParameter);}


    });

    document.getElementById("cancel").addEventListener('click', function (event) {
        let previousDate=document.getElementById('date');
        let previousDescription=document.getElementById('description');
        let previousAdd=document.getElementById('add');
        let previousCancel=document.getElementById('cancel');
        previousDate.remove();
        previousDescription.remove();
        previousAdd.remove();
        previousCancel.remove();

    });
}
var table = document.createElement('table');          //creating table header |Date|Description|
table.setAttribute('id','table');
var tr = document.createElement('tr');             //table row for Date and Description header
var thdate = document.createElement('th');
var textdate = document.createTextNode('Date');
thdate.appendChild(textdate);
tr.appendChild(thdate);
var thdescription = document.createElement('th');
var textdescription = document.createTextNode('Descrition');
thdescription.appendChild(textdescription);
tr.appendChild(thdescription);
table.appendChild(tr);

var arrayObject=[];                               //INITIALIZING ARRRAY FOR STORING OBJECTS

function createTable(dateParameter, descriptionParameter) {      //FUNCTION TO CREATE TABLE FROM ARRAY OF OBJECTS
    
    //PUSHING OBJECTS INTO ARRAY WITH DATE,DESCRIPTION KEYS AND ITS VALUES 
    arrayObject.push({'date':dateParameter,'description':descriptionParameter});
    console.log(arrayObject);
    for(let i=0; i<arrayObject.length; i++)   //LOOP TO ADD OBJECT VALUES INTO TABLE
    {
        var tr1 = document.createElement('tr');     //table row for date and description data in table
        tr1.setAttribute('id',"id"+i);
        var th1=document.createElement('th');       //table header for date in tr1
        var text1 = document.createTextNode(arrayObject[i].date);
        th1.appendChild(text1);
        tr1.appendChild(th1);
        var th2 = document.createElement('th');     //table header for description in tr1
        var text2=document.createTextNode(arrayObject[i].description);
        th2.appendChild(text2);
        tr1.appendChild(th2);
        var th3=document.createElement('th');      //table header for delete button in tr1
        var remove = document.createElement("button");
        remove.innerHTML="delete";
        th3.appendChild(remove);
        remove.setAttribute('onclick',"removeClick(id"+i+")");   //ON CLICK ON REMOVE WILL TRIGGER removeClick()
        tr1.appendChild(th3);
    }
        table.appendChild(tr1);
        document.body.appendChild(table);

}
function removeClick( row )                           //function to remove row on which delete button is clicked
{ 
    row.remove();       
    
}