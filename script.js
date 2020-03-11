var up = document.getElementById('phob_UP');

var down = document.getElementById('phob_DOWN');

var phob_arr = [
 'Katie (Katiemonz)\'s Phobos',
 'GZ (GZ-Missfit)\'s Phobos',
 'Puff (dragonpuff17)\'s Phobos',
 'Jade (pure_trashcan)\'s Phobos',
 'Finch (finchart)\'s Phobos',
 'Chip (cchippytime)\'s Phobos',
 'Seb (cmdrhonky)\'s Phobos',
 'Pitou (atomicpitou)\'s Phobos',
 'Justice (justice-acolyte)\'s Phobos',
 'Nat (docboredom)\'s Phobos',
 'Nat (docboredom)\'s SLB Phobos',
 'Rose (roseblazing)\'s Phobos',
 'Ari (blookangaroo)\'s Phobos',
 'Ren (pollitoesbonito)\'s Phobos',
 'Ren (pollitoesbonito)\'s SLB Phobos',
  'gay_chameleon\'s Phobos'
];

 up.innerHTML = "Click on the button to get"
   + " your random phobos fusion"
   + ".<br><br>";

function random(mn, mx) {
 return Math.random() * (mx - mn) + mn;
}

function phob_fuser() {
  phoboyOne = (Math.floor(random(1, 16)) - 1);
  phoboyTwo = (Math.floor(random(1, 16)) - 1);
  if (phoboyOne === phoboyTwo) {
    if (phoboyTwo != 15) {
      phoboyTwo = (phoboyTwo + 1);
    }
    else phoboyTwo = (phoboyTwo - 1);
  }
  down.innerHTML =  phob_arr[phoboyOne] + "<br>+<br>" + phob_arr[phoboyTwo];
}
