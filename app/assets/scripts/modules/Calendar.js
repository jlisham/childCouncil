const arr = [
  "2018-01-15",
  "2018-02-15",
  "2018-03-15",
  "2018-04-15",
  "2018-05-15",
  "2018-06-15",
  "2018-07-15",
  "2018-08-15",
  "2018-09-15",
  "2018-10-15",
  "2018-11-15",
  "2018-12-15",
  "2019-01-15",
  "2019-02-15",
  "2019-03-15",
  "2019-04-15",
  "2019-05-15",
  "2019-06-15",
  "2019-07-15",
  "2019-08-15",
  "2019-09-15",
  "2019-10-15",
  "2019-11-15",
  "2019-12-15"
];
const today = new Date().toISOString().slice(0, 10);
let loc = [];
loc[6] = "No Meeting";
loc[9] = "Offsite";
let upcoming = arr.filter(dt => {
  return dt > today;
});

function createCalTable() {
  let row, d1, d2;
  const tbl = document.getElementById("eventTable");
  for (let [key, val] of upcoming.entries()) {
    if (key > 11) {
      break;
    }
    loc[key] = loc[key] === undefined ? "Meeting Room" : loc[key];
    row = tbl.insertRow(key + 1);
    d1 = row.insertCell(0);
    d2 = row.insertCell(1);
    d1.align = "center";
    d1.innerHTML =
      loc[key] != "No Meeting"
        ? moment(val).format("ddd, MMM Do, YYYY")
        : "<em>" + moment(val).format("MMMM, YYYY") + "</em>";
    d2.innerHTML = loc[key];
    var minHt = 140 * 32 + "px";
    document.getElementById("sched").style.minHeight = minHt;
  }
}
if (upcoming.length > 0) {
  document.getElementById("noEv").style.display = "none";
  createCalTable();
}
