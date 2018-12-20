/* Projet - Le code du stagiaire 
~ Lisez le README.md pour plus d'informations ~
*/

import gameServer from './gameServer'

const seedURL = 'https://lp1.eu/courses/Programming/JS/GameOfLife/seeds/'
const updateTime = 1000

gameServer.onMessage = (message) => {
    const messageData = message.data
        /* 
           Je comprends pas trop ce que je reçois ici quand 
           le serveur m'envoie des infos ?! 
           Ça ressemble à un objet JS mais je peux rien 
           faire avec... NUL
        */
    // console.log('LA DATA', messageData)
}

gameServer
    .loadSeed(seedURL)
    .then((seed) => {
        /* 
           Je reçois bien une seed ici !
        */
        gameServer.init(seed) // On m'a dit d'utiliser ça mais ça retourne RIEN
    })
    .catch((error) => {
        console.error(error)
    })

const interval = setInterval(() => {
    gameServer.next()
}, updateTime)
