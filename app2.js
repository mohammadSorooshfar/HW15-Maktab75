const headers = ["Month", "Sales", "Amount"];
const bodyData = [
  ["January", 85, "$13,555.00"],
  ["January", 85, "$13,555.00"],
  ["January", 85, "$13,555.00"],
  ["January", 85, "$13,555.00"],
  ["January", 85, "$13,555.00"],
  ["January", 85, "$13,555.00"],
];
let table = $("<table></table>");
table.css({
  "border-collapse": "collapse",
  width: "100%",
  "text-align": "center",
});
let thead = $("<thead></thead>");
let trHead = $("<tr></tr>");
for (let i = 0; i < headers.length; i++) {
  let th = $(`<th>${headers[i]}</th>`);
  th.css({
    border: "1px solid #ddd",
    padding: "8px",
  });
  trHead.append(th);
}
thead.append(trHead);
table.append(thead);
let tbody = $("<tbody></tbody>");
for (let i = 0; i < bodyData.length; i++) {
  let tr = $("<tr></tr>");
  for (let j = 0; j < headers.length; j++) {
    let td = $(`<td>${bodyData[i][j]}</td>`);
    td.css({
      border: "1px solid #ddd",
      padding: "8px",
    });
    tr.append(td);
  }
  if (i % 2 == 0) {
    tr.css({
      "background-color": "#f2f2f2",
    });
  }
  tbody.append(tr);
}
table.append(tbody);
$("body").append(table);
