
   window.onload=function(){
   var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
   if (mobile) {
       alert("You are using a mobile device. Please revisit on a computer");
   } else {
      alert("no");
   }
 }
