if(window.history.replaceState){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
         window.history.replaceState(null,null,window.location.href)
           }    
   const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
    }  
};
  xhttp.open("GET", "friendsToChatCall.php")
  xhttp.send()
  const fetchMessage = new XMLHttpRequest();
  fetchMessage.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("mainchat").innerHTML = this.responseText;
    }  
};
  fetchMessage.open("GET", "fetchmessage.php")
  fetchMessage.send()

function reqGroupForm(){
  const fetchGroupForm = new XMLHttpRequest()
  fetchGroupForm.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      document.getElementById("groupchat").innerHTML = this.responseText
    }
  }
  fetchGroupForm.open("GET","groupForm.php")
  fetchGroupForm.send()
}
const groupCall = new XMLHttpRequest()
groupCall.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
document.getElementById("available_groups").innerHTML = this.response;
  }
}
groupCall.open("GET", "groupToChatCall.php")
groupCall.send()


const myGroups = new XMLHttpRequest()
myGroups.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
document.getElementById("myGroups").innerHTML = this.response;
  }
}
myGroups.open("GET", "groupToChatCall.php")
myGroups.send()