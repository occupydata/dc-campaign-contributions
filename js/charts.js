function gvisDataBarChartID165c317a1c751 ()
{
  var data = new google.visualization.DataTable();
  var datajson =
[
 [
 "2002",
    3831867,
    1309317,
     323345,
     187910,
     240607,
     141936,
      20525 
],
[
 "2004",
    1747581,
     796085,
      53099,
      85550,
      78425,
      26425,
       8050 
],
[
 "2006",
    8046194,
    3442087,
     252215,
     216259,
      68060,
      51667,
      38916 
],
[
 "2007",
     909379,
     369292,
     139580,
      18050,
      30627,
        850,
       5000 
],
[
 "2008",
    2021564,
    1083916,
     141078,
      56200,
     155129,
       8250,
       6779 
],
[
 "2010",
    7030413,
    3697277,
     144764,
     192366,
     119549,
      10600,
      54475 
],
[
 "2011",
     580822,
     204549,
      13153,
       5250,
      11326,
        500,
      18250 
],
[
 "2012",
    1210655,
     630425,
      76139,
      11950,
      25040,
       1500,
      16750 
] 
];
data.addColumn('string','year');
data.addColumn('number','Individual');
data.addColumn('number','Corporation');
data.addColumn('number','Candidate');
data.addColumn('number','Political Action Committee');
data.addColumn('number','Other');
data.addColumn('number','Business Partnership');
data.addColumn('number','Labor Union');
data.addRows(datajson);
var formatter = new google.visualization.NumberFormat({prefix: '$', groupingSymbol:',',fractionDigits:0});
formatter.format(data,1);
formatter.format(data,2);
formatter.format(data,3);
formatter.format(data,4);
formatter.format(data,5);
formatter.format(data,6);
formatter.format(data,7);
return(data);
}
 
// jsDrawChart
function drawChartBarChartID165c317a1c751() {
  var data = gvisDataBarChartID165c317a1c751();
  var options = {};
options["allowHtml"] = true;
options["focusTarget"] = "category";
options["hAxis"] = {format:'$###,###,###', minValue:0};
options["legend"] = "right";
options["title"] = "Contributions by Type of Contributor and Election Cycle";

     var chart = new google.visualization.BarChart(
       document.getElementById('BarChartID165c317a1c751')
     );
     chart.draw(data,options);
    

}
  
 
// jsDisplayChart 
function displayChartBarChartID165c317a1c751()
{
  google.load("visualization", "1", { packages:["corechart"] }); 
  google.setOnLoadCallback(drawChartBarChartID165c317a1c751);
}
 
// jsChart 
displayChartBarChartID165c317a1c751()




function gvisDataBarChartID165c33405968f ()
{
  var data = new google.visualization.DataTable();
  var datajson =
[
 [
 "Stanley Martin Commercial, Inc.",
      41765 
],
[
 "Dynamic Concepts, Inc.",
      36450 
],
[
 "Lottery Technology Enterprises",
      34550 
],
[
 "Fort Myer Construction Corporation",
      31500 
],
[
 "DC Healthcare Systems, Inc.",
      30500 
],
[
 "Manatt, Phelps & Phillips, LLP",
      25400 
],
[
 "The Temple Group, Inc.",
      25000 
],
[
 "The John Akridge Company",
      24600 
],
[
 "Forney Enterprises, Inc.",
      24400 
],
[
 "Borger Management, Inc.",
      23500 
] 
];
data.addColumn('string','corp');
data.addColumn('number','Total Contributions');
data.addRows(datajson);
var formatter = new google.visualization.NumberFormat({prefix: '$', groupingSymbol:',',fractionDigits:0});
formatter.format(data,1);
return(data);
}
 
// jsDrawChart
function drawChartBarChartID165c33405968f() {
  var data = gvisDataBarChartID165c33405968f();
  var options = {};
options["allowHtml"] = true;
options["hAxis"] = {format:'$###,###,###', minValue:0};
options["legend"] = "none";
options["vAxis"] = {textStyle: {fontSize: 10}};
options["title"] = "Top Ten Corporate Contributors, 2002-2012 Elections";

     var chart = new google.visualization.BarChart(
       document.getElementById('BarChartID165c33405968f')
     );
     chart.draw(data,options);
    

}
  
 
// jsDisplayChart 
function displayChartBarChartID165c33405968f()
{
  google.load("visualization", "1", { packages:["corechart"] }); 
  google.setOnLoadCallback(drawChartBarChartID165c33405968f);
}
 
// jsChart 
displayChartBarChartID165c33405968f()




function gvisDataBarChartID165c3473158db ()
{
  var data = new google.visualization.DataTable();
  var datajson =
[
 [
 "Ward 1",
      23400,
  607066.23 
],
[
 "Ward 2",
   93097.95,
   217702.9 
],
[
 "Ward 3",
      20575,
  513976.76 
],
[
 "Ward 4",
   47276.99,
  984149.44 
],
[
 "Ward 5",
     105949,
 1427511.36 
],
[
 "Ward 6",
   35172.99,
  456769.14 
],
[
 "Ward 7",
       8000,
 1070518.73 
],
[
 "Ward 8",
      32150,
  791072.57 
],
[
 "Citywide",
 3006159.79,
 2092399.56 
] 
];
data.addColumn('string','ward');
data.addColumn('number','Within Ward/City');
data.addColumn('number','Outside of Ward/City');
data.addRows(datajson);
var formatter = new google.visualization.NumberFormat({prefix: '$', groupingSymbol:',',fractionDigits:0});
formatter.format(data,1);
formatter.format(data,2);
return(data);
}
 
// jsDrawChart
function drawChartBarChartID165c3473158db() {
  var data = gvisDataBarChartID165c3473158db();
  var options = {};
options["allowHtml"] = true;
options["focusTarget"] = "category";
options["hAxis"] = {format:'$###,###,###', minValue:0};
options["legend"] = "top";
options["title"] = "Contribution from Corporations Based Inside or Outside of Candidates' Constituencies, 2002-2012 Elections";
options["vAxis"] = {title: 'Type of Race'};

     var chart = new google.visualization.BarChart(
       document.getElementById('BarChartID165c3473158db')
     );
     chart.draw(data,options);
    

}
  
 
// jsDisplayChart 
function displayChartBarChartID165c3473158db()
{
  google.load("visualization", "1", { packages:["corechart"] }); 
  google.setOnLoadCallback(drawChartBarChartID165c3473158db);
}
 
// jsChart 
displayChartBarChartID165c3473158db()




function gvisDataLineChartID165c378c0b660 ()
{
  var data = new google.visualization.DataTable();
  var datajson =
[
 [
 "2002",
0.1130360471 
],
[
 "2004",
0.09697462899 
],
[
 "2006",
0.1092360523 
],
[
 "2007",
0.1557031772 
],
[
 "2008",
0.2085031612 
],
[
 "2010",
0.1263091743 
],
[
 "2011",
0.1271089203 
],
[
 "2012",
0.198278857 
] 
];
data.addColumn('string','year');
data.addColumn('number','Puppet Percentage');
data.addRows(datajson);
var formatter = new google.visualization.NumberFormat({ pattern: '#,###.#%'});
formatter.format(data,1);
return(data);
}
 
// jsDrawChart
function drawChartLineChartID165c378c0b660() {
  var data = gvisDataLineChartID165c378c0b660();
  var options = {};
options["allowHtml"] = true;
options["vAxis"] = {format:'#,###%', minValue:0};
options["legend"] = "none";
options["title"] = "Percentage of Total Corporate Contributions from Puppet Corporations";

     var chart = new google.visualization.LineChart(
       document.getElementById('LineChartID165c378c0b660')
     );
     chart.draw(data,options);
    

}
  
 
// jsDisplayChart 
function displayChartLineChartID165c378c0b660()
{
  google.load("visualization", "1", { packages:["corechart"] }); 
  google.setOnLoadCallback(drawChartLineChartID165c378c0b660);
}
 
// jsChart 
displayChartLineChartID165c378c0b660()
