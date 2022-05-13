//The following code we used for task 1 was taken from "https://www.w3schools.com/howto/howto_js_sort_table.asp" and adapted it for our table.
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table1");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 2); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}

//Function that resets the contents of the table without refreshing the web page
function reset() 
{
  resetTable();
  $.get("https://wt.ops.labs.vu.nl/api22/51644dd5/reset", null, fetchData);
}
$("#reset").on("click", reset);
//Function that gets the input from the server and introduces it dynamically into the empty table
function getData(data) 
{
  resetTable();
  for (let product of data)
   {
      $("#table1 #inputLine").before('<tr id="dataLine"> '+
      '<td><img src="'+product.image+'" alt="'+product.model+' Image"></td> '+
      '<td>'+product.brand+'</td> '+
      '<td>'+product.model+'</td> '+
      '<td>'+product.screensize+'"</td> '+
      '<td colspan="2">'+product.os+'</td> '+
  '</tr>');
   }
}

function fetchData()
{
  $.get("https://wt.ops.labs.vu.nl/api22/51644dd5", null, getData);
}

$(function() 
{
        fetchData();
});

function addLine() 
{
  let requestData = 
  {
    brand: $("#brand").val(),
    model: $("#model").val(),
    os: getOperatingSystem(),
    image: $("#image").val(),
    screensize: $("#screensize").val()
  };
  $.post("https://wt.ops.labs.vu.nl/api22/51644dd5", requestData, function()
  {
    fetchData();
    $("#brand").val("");
    $("#model").val("");
    $("#image").val("");
    $('#os input[type="radio"]').prop( "checked", false );
    $("#screensize").val("");
  }, "json");
}



function getOperatingSystem()
{
  if($("#os #iOs").is(":checked")) 
  {
    return $("#os #iOs").val();
  }
  else 
  {
    return $("#os #android").val();
  }
}

$("#submit").on("click", addLine);

function resetTable()
{
  for (let product of $("#table1 #dataLine"))
  {
    product.remove();
  }
}