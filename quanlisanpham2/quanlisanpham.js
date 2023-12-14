var data=[]


function add(){
    var item_id=document.getElementById("productID1").value
    var item_name=document.getElementById("productName1").value
    var item_price=document.getElementById("productPrice1").value

    var item={
        Id : item_id,
        Name : item_name,
        Price : item_price
    }


    let index = data.findIndex((c)=>c.Id==item.Id)

    if(index >= 0){
        data.splice(index,1,item)
    }else{
        data.push(item)
    }


    render()
    clear()
}

function render(){
    table=`<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>`

for(let i=0;i<data.length;i++){
    table += `<tr>
    <td>${data[i].Id}</td>
    <td>${data[i].Name}</td>
    <td>${data[i].Price}</td>
    <td>
    <button onclick="deleteItem(${data[i].Id})">Delete</button>
    <button onclick="editItem(${data[i].Id})">Edit</button>
    </td>
</tr>`
}

document.getElementById("render").innerHTML = table

}

function clear(){
    document.getElementById("productID1").value="";
    document.getElementById("productName1").value="";
    document.getElementById("productPrice1").value=""
}

function deleteItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].Id==x){
            data.splice(i,1)
            render()
        }
    }
}

function editItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].Id==x){
            document.getElementById("productID1").value = data[i].Id
            document.getElementById("productName1").value = data[i].Name
            document.getElementById("productPrice1").value = data[i].Price
        }
    }
}