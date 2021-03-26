/* Effet Navbar */

            var nav = document.querySelector('nav');

            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 100) {
                    nav.classList.add('bg-dark', 'shadow',);
                } else {
                    nav.classList.remove('bg-dark', 'shadow');
                }
            });
    
/* Fin effet Navbar*/ 




/* Timelime */

const allRonds = document.querySelectorAll('.rond'); /* tous les ronds*/
const allBoxes = document.querySelectorAll('.box'); /* toutes les boxs*/

/* Création d'un controler avec ScrollMagic = container à toutes les animations scene / en scroll*/

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    /* Pour chaque box, valeur courante Box */

    for(i = 0; i < allRonds.length; i++){
        //i = itérer avec cette boucle for ; i qui vont passer = tous les ronds //
    
        if(allRonds[i].getAttribute('data-anim') === /*strictement égal*/ box.getAttribute('data-anim')){
        
            //si la box a le même attribut que le rond : tween > greensock */
        
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
        
        // La méthode for each permet de faire une action sur toutes les boxs depuis notre tableau (all boxs). //
        // Pour chaque box > chercher le rond correspondant. A chaque fois : boucle "for" qui va aller itérer à travers
         //le tableau (allRonds = document.queryblabla avec tous les ronds. Si même attribut > se correspondent. //
    
        let scene = new ScrollMagic.Scene({
        
            //le rond en question // 
        
            triggerElement: allRonds/*de*/[i],//qui correspond à la box//
        reverse: true
    })
    
    //On lui rajoute à cette scene, l'animation crée au-dessus//
    
    .setTween(tween)
    
    //.addIndicators() //Pour mieux s'y retrouver//
    
    .addTo(controller)
}
    }

})




