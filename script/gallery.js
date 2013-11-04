function ShowImage(img){
             document.getElementById("imagebox").src = img.src;
             document.getElementById("imagebox").alt = img.alt;
             document.getElementById("imageanchor").href = img.src
             document.getElementById("imageanchor").title = img.title
            }