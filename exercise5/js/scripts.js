var text = document.getElementById("name");




function fontFunction(){
    var font = document.getElementById("MyFonts").value;
    console.log(font)
    text.style.fontFamily = "Times New Roman, Futura, Canela";
}


//size 

function sizeFunction(){
    
    var checkSize = document.getElementById("size").value;

    text.style.fontSize = checkSize + "px";
}





