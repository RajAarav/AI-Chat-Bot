let prompt=document.querySelector("#prompt")


function createChatBox(html,classes) {
  let div=document.createElement("div")
  div.classList.add(classes)
}



function handlechatResponse(message) {
  let html=`<img src="images/pngwing.com.png" alt="" id="userImage" width="36">
        <div class="user-chat-area">
          ${message}
        </div>`
        let userChatBox=createChatBox(html,"user-chat-box")
}


prompt.addEventListener("keydown",(e)=>{
  if(e.key=="Enter") {
    handlechatResponse(prompt.value)
  }
})