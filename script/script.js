$(document).ready(loading);

function loading () {
    $('#myModal').modal('show');
    setTimeout(()=>{
        $('#myModal').modal('hide'); 
    },2500)
}


//Close MAP

 $('#close').click(()=>{
    $('#modalMap').modal('hide');
})
