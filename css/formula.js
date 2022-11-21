const Forma_kalkulacije= document.getElementById('bmi'),
      kalkulacija_visina= document.getElementById('visina'),
      kalkulacija_tezina= document.getElementById('tezina'),
      kalkulacija_poruka= document.getElementById('kalkulacija_poruka')
    
const izracunaj_BMI= (e) =>{
    e.preventDefault()

    //provera
    if(kalkulacija_visina.value === '' || kalkulacija_tezina.value === ''){
       kalkulacija_poruka.classList.add('crvena_boja')
       kalkulacija_poruka.textContent= 'Unesite sva polja!'

    //timeout za poruku
//    setTimeout(() => {
//        kalkulacija_poruka.textContent=''
//    }, 9000)
} 
else{
   kalkulacija_poruka.classList.remove('crvena_boja')
   kalkulacija_poruka.classList.add('kalkulacija_poruka')
    //Formula
    const cm= kalkulacija_visina.value/100,
          kg=kalkulacija_tezina.value,
          bmi=Math.round(kg/(cm*cm))

    //Prikaz poruke
        if(bmi< 18.5){
        kalkulacija_poruka.textContent=`Vaš BMI je ${bmi} što znači da je u pitanju neuhranjenost.`
        }
        else if(bmi< 25){
            kalkulacija_poruka.textContent=`Vaš BMI je ${bmi} što znači da je u pitanju normalna telesna težina.`
        }
        else if(bmi<30){
            kalkulacija_poruka.textContent=`Vaš BMI je ${bmi}  što znači da je u pitanju prekomerna telesna težina.`
        }
        else{
            kalkulacija_poruka.textContent=`Vaš BMI je ${bmi} što znači da je u pitanju gojaznost.`
        }
        //Resetovanje forme
          setTimeout(() => {
        kalkulacija_tezina.value=''
        kalkulacija_visina.value=''
    }, 1);

    setTimeout(() => {
        kalkulacija_poruka.textContent=''
    }, 5000);
    } 
}
Forma_kalkulacije.addEventListener('submit',izracunaj_BMI)
