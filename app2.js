// // Creating classes for the two fighters

// class userFighter {
//     constructor(name, health, power, accuracy){
//         this.name = name
//         this.health = health
//         this.power = power
//         this.accuracy =accuracy
//     }
//     attack() {
//         if (Math.random()*10 <= this.accuracy){
//             return 'attack successful'
//         } else {
//             return 'attack missed'
//         }
//     }
//     checkStats(){
//         alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
//     }
//     forfeit(){
//         alert(`${this.name} has forfeited`)
//     }

// }

// class computerFighter {
//     constructor(name, health, power, accuracy){
//         this.name = name
//         this.health = health
//         this.power = power
//         this.accuracy =accuracy
//     }
//     attack() {
//         if (Math.random()*10 <= this.accuracy){
//             return 'attack successful'
//         } else {
//             return 'attack missed'
//         }
//     }
//     checkStats(){
//         alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
//     }
// }

// $('#battleArena').droppable()

// AJAX

// generate character options:
$('#generate').on('click', (event) => {
    $('.characterPics').empty()
    for (let i=1;i<9;i++) {
        event.preventDefault()
        randomID = Math.floor(Math.random()*400)
        // console.log(randomID)
        $.ajax({
            url: `https://www.superheroapi.com/api.php/2668094310098995/${randomID}` 
        }).then(
            (data)=>{    
                // console.log(data)
                $div = $("<div>")
          .html(
            `<img src="${data.image.url}" onerror=this.src="https://i.imgur.com/9E8YTrtb.jpg" id ='image' width="100px" height='150px'>`
          ).css({ 'border': "5px solid red", height: "150px", 'border-radius':'2px'})
          .addClass("drag")
          .attr("id", `${data.id}`)
          .draggable({helper: 'clone'});
                
                $div.append($('<div>').text(`${data.name}`).attr('id',`${data.id}`).css({'font-family': 'Bangers','font-size':'2vw', 'margin-top':'4px','text-align':'center','text-shadow': '1px 1px 1px white'}))
                $('.characterPics').append($div)
                // $(`#pic${i}`).html(`<img src="${data.image.url}" width="100px" height='150px'>`).css({"border":'2px solid red','height':'150px'})

                $(`${data.id}`).draggable()
                // console.log(data.image)
                // console.log(data.image.url)

            },
            ()=>{
                console.log('bad request')
            }
        )
    }
})


$( function() {
    $('.players' ).droppable( 
        { 
            accept:".drag", 
            drop :function(event,ui) 
        { 
            alert("I am dropped");
            // console.log(ui)
            // console.log(ui.draggable)
            $('.player').css({'display':'hidden'})
            $(this).append($(ui.draggable).css({width:'70%',height:'55%','margin-top':'0','max-width':'400px','align-self':'center','border':'4px solid rgb(255,235,0)'}))
            // $(this).append($(ui.draggable))
            // console.log($('#player1'))
            // console.log($(this))
            // console.log($(event.target))
            // $('#player1').append($('<div>')).text('hello')
            
        } 
        } ); 
        } );

    




const startGame = () => {
    alert('Match starting')
    console.log($('#player1').children().eq(1).attr('id'))
    console.log($('#player2').children().eq(1).attr('id'))
    const player1ID = $('#player1').children().eq(1).attr('id')
    const player2ID = $('#player2').children().eq(1).attr('id')
    const ajax1 = $.ajax({ 
        dataType: "json",
        url: `https://www.superheroapi.com/api.php/2668094310098995/${player1ID}`,
        async: true,
        success: function(result) {}                     
      });
      
      
      const ajax2 = $.ajax({ 
        dataType: "json",
        url:`https://www.superheroapi.com/api.php/2668094310098995/${player2ID}`,
        async: true,
        success: function(result) {}  
      });
      
      $.when( ajax1 , ajax2  ).done(function( a1, a2 ) {
         // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
         // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
         console.log(a1[0].name)
         console.log(a2[0].powerstats)
         
      });

}




// game logic:
$('#start').on('click', startGame)