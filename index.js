var catalog = [{
  "title": "The Legend of Zelda: Majora's Mask 3D",
  "id": 1,
  "category": "Nintendo 3DS"
}, {
  "title": "Super Smash Bros.",
  "id": 2,
  "category": "Nintendo 3DS"
}, {
  "title": "Super Smash Bros.",
  "id": 3,
  "category": "Nintendo WiiU"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 4,
  "category": "Nintendo WiiU"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 5,
  "category": "Xbox One"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 6,
  "category": "PlayStation 4"
}, {
  "title": "Far Cry 4",
  "id": 7,
  "category": "PlayStation 4"
}, {
  "title": "Far Cry 4",
  "id": 8,
  "category": "Xbox One"
}, {
  "title": "Call of Duty: Advanced Warfare",
  "id": 9,
  "category": "PlayStation 4"
}, {
  "title": "Call of Duty: Advanced Warfare",
  "id": 10,
  "category": "Xbox One"
}]

$(function() {
  function gameConsoles() {
    var gameStations = [];
    $('input[type=checkbox]:checked').each(function() {
      gameStations.push(this.value);
    })
    return gameStations;
  }

    var consoles = gameConsoles()
  $('form').on('click', function() {
    consoles = gameConsoles()

    var hide = []
    var show = []
    
    catalog.forEach(function(item) {
    var checked = false

    consoles.forEach(function(console) {
      if (item.category === console) {
        show.push(item)
      }
      })
      if (checked === false) {
        hide.push(item)
      }
    })

    hide.map(function(item) {
      $('[data-id="' + item.id + '"]').hide();
    })

    show.map(function(item) {
      $('[data-id="' + item.id + '"]').show();
    })
  })
})

console.log('loaded')





