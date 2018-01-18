var arr=["2018-01-17", "2018-02-22", "2018-03-22", "2018-04-18", "2018-05-24", "2018-06-28", "2018-07-01", "2018-08-23", "2018-09-27", "2018-10-17", "2018-11-15", "2018-12-20"];
var loc=[];
loc[0]="Luncheon";
loc[3]="Luncheon";
loc[6]="No Meeting";
loc[9]="Luncheon";
for(var i=0;i<arr.length;i++){
  loc[i]= loc[i]===undefined?'Maple Room': loc[i];
}

function createCalTable(d, l){
var today=moment().format().slice(0,10);
var tbl=document.getElementById('eventTable');
  d.forEach(function(val, key){
    if (val>today){
    var row=tbl.insertRow(key);
    var d1=row.insertCell(0);
      d1.align='center';
    var d2=row.insertCell(1);
    d1.innerHTML= l[key]!='No Meeting'?moment(val).format('dddd, MMM Do'):'<em>'+moment(val).format('MMMM')+'</em>';
    d2.innerHTML=l[key];
    }
   });
}

createCalTable(arr, loc);