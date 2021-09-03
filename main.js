webapi=window.webkitSpeechRecognition;

Speaker=new webapi();


function takeselfie(){

    Speaker.start();
    document.getElementById("displayvoice").innerHTML="";

}


Speaker.onresult=function(event){

     console.log(event);
     var result=event.results[0][0].transcript;
     document.getElementById("displayvoice").innerHTML=result;
     if(result=="take my selfie"){

          speak();
          Webcam.attach(camera);
          
          setTimeout(function(){
               takesnapshot();
               save();

          },3000);
          
     } 
}

function speak(){

     var texttospeech= window.speechSynthesis;

     speakdata= "Taking Your Selfie"

     speakthis=new SpeechSynthesisUtterance(speakdata);
     

     texttospeech.speak(speakthis);


}

Webcam.set({

   height:400,
   width:400,
   image_format:'png',
   png_quality:500

});


camera=document.getElementById("camera");



function takesnapshot(){

Webcam.snap(function(data){

document.getElementById("displayselfie").innerHTML='<img id="selfie" src="'+data+'"/>';
});
}

function save(){

     anchortagid=document.getElementById("downloadselfie");
     saveimg=document.getElementById("selfie").src;
     anchortagid.href=saveimg;
     anchortagid.click();

}