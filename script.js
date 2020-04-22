$(document).ready(function(){
    var value1 = $('.materialize-textarea')
    
        
       var handler = function(){
           if(value1.val().trim() !== "") {
       var result = $('ul').prepend(`<li class="collection-item">${value1.val()}</li>`).hide()
       result.fadeIn(500)
        value1.val("")
       }
    }

    $('.btn').on('click', handler)
    $(value1).on("keypress", function(e){
        if(e.code === 'Enter'){
            event.preventDefault()
            handler()
        }
        
    })
})
       

// window.onload = function(){
//     var value1 = document.querySelector('.materialize-textarea')
//     var btn = document.querySelector('.btn')
//     var ul = document.querySelector('ul')


//     var handler = function() {
//         if(value1.value.trim() !== ""){
//             ul.insertAdjacentHTML('afterbegin', `<li class="collection-item">${value1.value}</li>`)
//             value1.value = ""
//         }
//     }
//     btn.addEventListener('click', handler)
//     value1.addEventListener('keypress', function(e){
//         if(e.code === 'Enter'){
//             e.preventDefault()
//            handler()
//         }
//     })
    
// }
