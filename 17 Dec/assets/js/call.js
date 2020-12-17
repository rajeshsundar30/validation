$(document).ready(function(){
    $(".loaderDiv").hide();
    let tableBody =$("#tableBody");
    
    function userId() {
        $(".loaderDiv").show();
        let Posts = [];
        $.get("https://jsonplaceholder.typicode.com/posts", function(data,status){
            if(status === "success"){
                let table = [];
                Posts = data;
                for(i=0;  i<Posts.length; i++){
                    let obj = Posts[i];
                    let tr = `<tr>
                            <td>${obj.id}</td>
                            <td>${obj.title}</td>
                            <td>${obj.body}</td>
                    </tr>`;
                    // table.push[tr];
                    tableBody.append(tr)

                }
                $(".loaderDiv").hide();
            }
        })
    }
       $(".user").click(function(){
        $(".Text-center").text("User list")
           userId();
           tableBody.html("")
       })

      $(".photo").click(function(){
        $(".loaderDiv").show();
        $(".Text-center").text("Photo List")
        let photo = [];
        tableBody.html("")

        $.get("https://jsonplaceholder.typicode.com/photos", function (data,status){
            if(status === "success"){
                photo = data;
                for(i=0; i<photo.length; i++){
                    let obj = photo[i];
                    let tr = `<tr>
                    <td>${obj.id}</td>
                    <td>${obj.title}</td>
                    <td><img src="${obj.url}" alt="" style="width:10rem;"></td>
            </tr>`;
                tableBody.append(tr);
                }
                $(".loaderDiv").hide();
            }
        })
      })
     $(".album").click(function(){
        $(".loaderDiv").show();
        $(".Text-center").text("Album List")
        let album = [];
        tableBody.html("")
        $.get("https://jsonplaceholder.typicode.com/albums", function (data,status){
            if(status === "success"){
                album = data;
                for(i=0; i<album.length; i++){
                    let obj = album[i];
                    let tr =`<tr>
                       <td>${obj.id}</td>
                       <td>${obj.title}</td>
                       <td>${""}</td>
                    </tr>`;
                    tableBody.append(tr)
                }
                $(".loaderDiv").hide();
            }
        })
     });
     userId();
    });