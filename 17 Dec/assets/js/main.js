$(document).ready(function () {
    let posts = [];
    let Photos = [];
    let Album = [];
    let tableBody = $('#tableBody');
    
    $(".user").click(function(){

    $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
        if (status === 'success') {
            let tableData = [];
            posts = data;
            for(i=0; i<posts.length;i++){   
                let obj = posts[i]
                let tr = `<tr>
                        <td>${obj.id}</td>
                        <td>${obj.title}</td>
                        <td>${obj.body}</td>
                </tr>`;
                tableData.push(tr);
            }
            tableBody.append(tableData)
        }
    })
    });
    // $(".photo").click(function(){
    //     $.get("https://jsonplaceholder.typicode.com/photos", function(data,status){
    //         console.log(Data: "data" nStatus: "status");
    //         if(status === "success") {
    //             let tableData = [];
    //             Photos.data;
    //             for(i=0; i<Photos.length; i++){
    //                 let obj = [];
    //             }

    //         }
    //     })
    });