let prompt=document.querySelector("#prompt")

// function applied on div chatbox
function createChatBox(html,classes) {
  let div=document.createElement("div")
  div.classList.add(classes)
}


// function to handle the user chat after enter in user chat box 
function handlechatResponse(message) {
  let html=`<img src="images/pngwing.com.png" alt="" id="userImage" width="36">
        <div class="user-chat-area">
          ${message}
        </div>`
        let userChatBox=createChatBox(html,"user-chat-box")
}

// if event key is enter then execute it 
// after enter handles the data written in user text box
prompt.addEventListener("keydown",(e)=>{
  if(e.key=="Enter") {
    handlechatResponse(prompt.value)
  }
})
