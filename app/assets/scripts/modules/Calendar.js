var arr=["2018-04-18", "2018-05-24", "2018-06-28", "2018-07-01", "2018-08-23", "2018-09-27", "2018-10-17", "2018-11-15", "2018-12-20"];
var loc=[];
loc[6]="No Meeting";
loc[9]="Offsite";
for(var i=0;i<arr.length;i++){
  loc[i]= loc[i]===undefined?'Meeting Room': loc[i];
}

function createCalTable(d, l){
var today=moment().format().slice(0,10);
    var cnt=0;
var tbl=document.getElementById('eventTable');
  d.forEach(function(val, key){
    if (val>today){
        if (cnt===0){
          document.getElementById('noEv').style.display='none';
        }
        cnt++;
    var row=tbl.insertRow((key+1));
    var d1=row.insertCell(0);
      d1.align='center';
    var d2=row.insertCell(1);
    d1.innerHTML= l[key]!='No Meeting'?moment(val).format('ddd, MMM Do, YYYY'):'<em>'+moment(val).format('MMMM, YYYY')+'</em>';
    d2.innerHTML=l[key];
    }
   });
   var minHt=140+(cnt*32)+'px';
   document.getElementById('sched').style.minHeight=minHt;
}

createCalTable(arr, loc);
