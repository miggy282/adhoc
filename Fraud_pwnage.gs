//By Miguel Sullivan <miguel.sullivan@gmail.com>
function MyPwnage() {
// Random Mgs 
 var msg = [
              "I have prayed for your pain to ease a little...",
              "Let me pray on this for a day or two, and I will tell you what God shows me...",
              "We are all here on earth to help other",
              "I am saddened to hear about your situation",
              "I am humbled to know that God chose me to be your window to salvation.",
              "How are you today? I had a dream about you that made me worry."
           ];
 var rand_msg = msg[Math.floor(Math.random() * msg.length)];
 var label = GmailApp.getUserLabelByName("pwned_fraud");
 var threads = label.getThreads();
  
 // Begin the pwn
  for (var i = 0; i < threads.length; i++) {
    var sender = threads[i].getMessages()[0].getFrom();
    var subject = threads[i].getMessages()[0].getSubject();
   
    if (threads[i].getMessageCount() == null) {
         Logger.log("No one to pwn...");
    }
    else { 
         GmailApp.sendEmail(sender, subject, rand_msg)
         Logger.log(threads[i].getId());
     } 
   }
}
