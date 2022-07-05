$.ajax({
  url: "https://62a22360cc8c0118ef5dabd4.mockapi.io/students",
  type: "GET",
  success: function (result) {
    console.log(result[0]);
    const headers = [
      "id",
      "name",
      "family",
      "birthday",
      "mathgrade",
      "socialstudiesgrade",
      "persiangrade",
      "delete",
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
    for (let i = 0; i < result.length; i++) {
      let tr = $("<tr></tr>");
      let bodyData = Object.values(result[i]);
      let id = bodyData.pop();
      bodyData.unshift(id);
      for (let j = 0; j < headers.length; j++) {
        let td;
        if (j < 7) {
          td = $(`<td>${bodyData[j]}</td>`);
          td.css({
            border: "1px solid #ddd",
            padding: "8px",
          });
        } else {
          td = $(`<button>delete</button>`);
          td.css({
            padding: "10px 20px",
            margin: "5px",
            "background-color": "red",
            border: "none",
          });
          td.on("click", function () {
            $.ajax({
              url: `https://62a22360cc8c0118ef5dabd4.mockapi.io/students/${id}`,
              type: "DELETE",
              success: function (result) {
                tr.remove();
              },
            });
          });
        }
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
  },
});
