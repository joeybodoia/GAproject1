// Creating classes for the two fighters

class UserFighter {
    constructor(name, health, power, accuracy){
        this.name = name
        this.health = health
        this.power = power
        this.accuracy =accuracy
    }
    attack() {
        if (Math.random()*100 <= this.accuracy){
            return 'attack successful'
        } else {
            return 'attack missed'
        }
    }
    checkStats(){
        alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
    }
    forfeit(){
        alert(`${this.name} has forfeited`)
    }

}


// AJAX
// generate character options:
$('#generate').on('click', (event) => {
    $('#drag').css({'display':'block'})
    $('.characterPics').empty()
    for (let i=1;i<9;i++) {
        event.preventDefault()
        randomID = Math.floor(Math.random()*400)
    
        $.ajax({
            url: `https://www.superheroapi.com/api.php/2668094310098995/${randomID}` 
        }).then(
            (data)=>{    
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
            // alert("I am dropped");
            $('.player').css({'display':'hidden'})
            $(this).append($(ui.draggable).css({width:'70%',height:'55%','margin-top':'-10%','max-width':'200px','align-self':'center','border':'4px solid rgb(255,235,0)'}))
            
        } 
        } ); 
        } );


// const startGame = () => {
//     alert('Match starting')
//     console.log($('#player1').children().eq(1).attr('id'))
//     console.log($('#player2').children().eq(1).attr('id'))
//     const player1ID = $('#player1').children().eq(1).attr('id')
//     const player2ID = $('#player2').children().eq(1).attr('id')
//     const ajax1 = $.ajax({ 
//         dataType: "json",
//         url: `https://www.superheroapi.com/api.php/2668094310098995/${player1ID}`,
//         async: true,
//         success: function(result) {}                     
//       });
      
      
//       const ajax2 = $.ajax({ 
//         dataType: "json",
//         url:`https://www.superheroapi.com/api.php/2668094310098995/${player2ID}`,
//         async: true,
//         success: function(result) {}  
//       });
      
//       $.when( ajax1 , ajax2  ).done(function( player1, player2 ) {
//         //  console.log(a1[0].name)
//         //  console.log(a2[0].powerstats)
//          const fighter1 = new UserFighter(`${player1[0].name}`,100, player1[0].powerstats.power, player1[0].powerstats.combat)
//          console.log(fighter1)
//          const fighter2 = new UserFighter(`${player2[0].name}`,100, player2[0].powerstats.power, player2[0].powerstats.combat)
//          console.log(fighter2)
//          alert(`Welcome to Superhero Showdown! Today's fight is between ${player1[0].name} and ${player2[0].name}`)
//          console.log(fighter1.accuracy)
//          console.log(fighter1.attack())
//          while (true) {
//              attackInput = prompt(`${player1[0].name} sees an opening, would you like him to attack? [y] [n]`)
//              if (attackInput == 'y') {
//                  fighter1.attack()
//                  console.log(fighter1.accuracy)
//                  console.log(fighter1.attack())
//                  alert('attack has been fired!')
//                  if (fighter1.attack() == 'attack successful') {
//                      fighter2.health -= fighter1.power/5
//                      console.log(fighter2.health)
//                      alert(`${fighter2.name} hit! ${fighter1.power/5} damage done!`)
//                      if (fighter2.health <= 0){
//                         alert(`${fighter2.name} has been defeated!`)
//                         alert(`${fighter1.name} is the winner`)
//                         break
//                      } else {
//                          alert(`${fighter2.name} has ${fighter2.health} health left`)
//                          attackInput = prompt(`${player2[0].name} sees an opening, would you like him to attack? [y] [n]`)
//                         if (attackInput == 'y') {
//                             fighter2.attack()
//                             // console.log(fighter2.accuracy)
//                             // console.log(fighter2.attack())
//                             alert('attack has been fired!')
//                             if (fighter2.attack() == 'attack successful') {
//                                 fighter1.health -= fighter2.power/5
//                                 console.log(fighter1.health)
//                                 alert(`${fighter1.name} hit! ${fighter2.power/5} damage done!`)
//                                 if (fighter1.health <= 0){
//                                 alert(`${fighter1.name} has been defeated!`)
//                                 alert(`${fighter2.name} is the winner`)
//                                 break
//                                 } else {
//                                     alert(`${fighter1.name} has ${fighter1.health} health left`)
//                                 }

//                             }else {
//                                 alert('attack missed!')
//                             }
                            
//                         }
//                     }

//                  }else {
//                      alert('attack missed!')
//                      attackInput = prompt(`${player2[0].name} sees an opening, would you like him to attack? [y] [n]`)
//                     if (attackInput == 'y') {
//                         fighter2.attack()
//                         // console.log(fighter2.accuracy)
//                         // console.log(fighter2.attack())
//                         alert('attack has been fired!')
//                         if (fighter2.attack() == 'attack successful') {
//                             fighter1.health -= fighter2.power/5
//                             console.log(fighter1.health)
//                             alert(`${fighter1.name} hit! ${fighter2.power/5} damage done!`)
//                             if (fighter1.health <= 0){
//                             alert(`${fighter1.name} has been defeated!`)
//                             alert(`${fighter2.name} is the winner`)
//                             break
//                             } else {
//                                 alert(`${fighter1.name} has ${fighter1.health} health left`)
//                             }

//                         }else {
//                             alert('attack missed!')
//                         }
                        
//                     }
//                  }
                 
//              }
             
//          }


//       });

// }



const startGame = () => {
    $modal = $('#modal')
    $modal.css('display', 'block' )
    $('#p1').prepend($('#player1').children().eq(1).css({'border':'3px solid black','margin-top':'5px'}))
    $('#p2').prepend($('#player2').children().eq(1).css({'border':'3px solid black','margin-top':'5px'}))
    // console.log($('#player1').children().eq(1).attr('id'))
    // alert('Match starting')
    console.log($('#p1').children().eq(0).attr('id'))
    console.log($('#p2').children().eq(0).attr('id'))
    const player1ID = $('#p1').children().eq(0).attr('id')
    const player2ID = $('#p2').children().eq(0).attr('id')
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
      
      $.when( ajax1 , ajax2  ).done(function( player1, player2 ) {
        //  console.log(a1[0].name)
        //  console.log(a2[0].powerstats)
        //  const fighter1 = new UserFighter(`${player1[0].name}`,100, player1[0].powerstats.power, player1[0].powerstats.combat)
         const fighter1 = new UserFighter(`${player1[0].name}`,100, player1[0].powerstats.power, 100)
         console.log(fighter1)
         const fighter2 = new UserFighter(`${player2[0].name}`,100, player2[0].powerstats.power, 100)
        //  const fighter2 = new UserFighter(`${player2[0].name}`,100, player2[0].powerstats.power, player2[0].powerstats.combat)
         console.log(fighter2)
         alert(`Welcome to Superhero Showdown! Today's fight is between ${player1[0].name} and ${player2[0].name}`)
        //  console.log(fighter1.accuracy)
        //  console.log(fighter1.attack())
         const f1Attack = () => {
            fighter1.attack()
            console.log(fighter1.attack())
            //  alert('attack has been fired!')
             if (fighter1.attack() == 'attack successful') {
                fighter2.health -= fighter1.power/2
                $('.healthBar2').css({'width':`${fighter2.health}%`})
                // console.log(fighter2.health)
                // alert(`${fighter2.name} hit! ${fighter1.power/5} damage done!`)
                if (fighter2.health <= 0){
                    alert(`${fighter2.name} has been defeated!`)
                    alert(`${fighter1.name} is the winner`)
                    } else {
                        alert(`${fighter2.name} has ${fighter2.health} health left`)
                    }
            }else {
                alert('Attack missed!')
            }
         }
         $('#attack1').on('click', f1Attack)
        
         const f2Attack = () => {
             fighter2.attack()
            //  alert('attack has been fired!')
             if (fighter2.attack() == 'attack successful') {
                fighter1.health -= fighter2.power/5
                $('.healthBar1').css({'width':`${fighter1.health}%`})
                // console.log(fighter1.health)
                // alert(`${fighter1.name} hit! ${fighter2.power/5} damage done!`)
                if (fighter1.health <= 0){
                    alert(`${fighter1.name} has been defeated!`)
                    alert(`${fighter2.name} is the winner`)
                    } else {
                        alert(`${fighter1.name} has ${fighter1.health} health left`)
                    }
            }else {
                alert('Attack missed!')
            }
         }
         $('#attack2').on('click', f2Attack)

         const checkStats1 = () => {
            const $modal2 = $('#modal2')
            $modal2.css('display', 'block' )
            $('#stats1').html(`Stats: <br/><br/><br/>Name: ${fighter1.name} <br/> <br/> Health: ${fighter1.health} <br/> <br/> Power: ${fighter1.power} <br/><br/> Accuracy: ${fighter1.accuracy}`).css({'font-family': 'Bangers','font-size':'2vw','text-shadow': '1px 1px 1px rgb(255,235,0)'})

         }

         const checkStats2 = () => {
            const $modal2 = $('#modal2')
            $modal2.css('display', 'block' )
            $('#modal-textbox2').css({'background-color':'rgb(255,235,0)'} )
            $('.modal-buttons2').css({'background-color':'rgb(247, 10, 10)'})
            $('#stats1').html(`Stats: <br/><br/><br/>Name: ${fighter1.name} <br/> <br/> Health: ${fighter1.health} <br/> <br/> Power: ${fighter1.power} <br/><br/> Accuracy: ${fighter1.accuracy}`).css({'font-family': 'Bangers','font-size':'2vw','text-shadow': '1px 1px 1px rgb(247, 10, 10)'})

         }
         $('#checkStats1').on('click',checkStats1)
         $('#checkStats2').on('click',checkStats2)
         $('#close2').on('click',()=>{
             $('#modal2').css('display','none')
         })

      })

    }





// game logic:
$('#start').on('click', startGame)