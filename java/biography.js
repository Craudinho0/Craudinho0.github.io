document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".services-bio", {
        speed:200,
        loop: true
    })
    .type('sou ', {delay:100}).type('um developer,', {delay:15000}).delete(17).type('web developer', {delay: 15000}).delete(13).type('e gamer!', {delay:15000}).delete(8)
    
    .go()
}) 
