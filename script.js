const url = "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json";
async function getData(url) {
    console.log("functionCalled")
    const response = await fetch(url);
    data = await response.json();
    console.log(data);

    const tableBody = document.getElementById('table_body');
    data.forEach(element => {
        let tr = document.createElement('tr');
        console.log(element.image);
        tableBody.appendChild(tr);
        tr.innerHTML = `<td>${element.id}</td><td style="height:70px" ><img src="${element.img_src}" style="width:25px">  ${element.first_name} ${element.last_name}</td> <td>${element.gender}</td> <td>${element.class}</td> <td>${element.marks}</td> <td>${element.passing}</td> <td>${element.email}</td>`;

    });
}

getData(url);

const first_name = [`first_name`];
  first_name.sort((a,b) =>{
    return a.localeCompare(b);
  })
  console.log(first_name);