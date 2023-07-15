
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to my Terminal portfolio");
  //await delay(500);
  createText("Initializing the server...");
  //await delay(1200); 

  const p = document.createElement("p");
  p.innerHTML = `Type '<span style="color:#66C2CD">help</span>' to see a list of available commands.`;
  app.appendChild(p);

  //await delay(350);
  new_line();
}


function new_line(){
  //const p = document.createElement("p");
  //const span1 = document.createElement("span");
  //const span2 = document.createElement("span");
  //p.setAttribute("class", "path")
  //p.textContent = "# user";
  //span1.textContent = " in";
  //span2.textContent = " ~/heber-leonard";
  //p.appendChild(span1);
  //p.appendChild(span2);
  //app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("style", "font-size: 14px;")
  i.setAttribute("class", "fas fa-arrow-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);

    // write man {command name} to learn more about a specific function
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    createCode("sudo rm -rf /*", "Don't do this !!");

    
  }
  else if(value === "github"){
    trueValue(value);
    createText("<a href='https://github.com/turing-04' target='_blank'><i class='fab fa-github white'></i> github.com/turing-04</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hey,")
    createText("I'm a cybersecurity master student at ETHZ and EPFL. ")
    createText("I like doing CTF, I've played on my own as \"Turing-04\" and now \"Enigmatix\" but also with \
    swiss teams <a href='https://polygl0ts.ch/' target='_blank'>Polygl0ts</a>  \
     and <a href='https://ctftime.org/team/42934' target='_blank'>Organizers</a>.")

  }
  else if(value === "social"){
    trueValue(value); 
    createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
    // Discord
    //createText("<a href='https://www.linkedin.com/in/heber-leonard/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/heber-leonard</a>")
    // rootme
    //createText("<a href='https://www.instagram.com/heber_leonard/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/heber_leonard</a>")
    // Tryhackme
    // picoCTF
  }
  else if(value === "sudo rm -rf /*" || value === "sudo rm -rf /" || value === "sudo rm -rf / --no-preserve-root" || value === "sudo rm -fr /*"){
    trueValue(value);
    // create text bonjour with line-height 0.3 using createText()
    
    createText(`<pre style='line-height:0.7'>    ________________<br>
    < how dare you ? ><br>
    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾<br>
      \\                   / \\  //\\ <br>
       \\    |\\___/|      /   \\//  \\ <br>
            /0  0  \\__  /    //  | \\ \\  <br>
           /     /  \\/_/    //   |  \\  \\  <br>
           @_^_@'/   \\/_   //    |   \\   \\ <br>
           //_^_/     \\/_ //     |    \\    \\ <br>
        ( //) |        \///       |     \\     \\ <br>
      ( / /) _|_ /   )  //       |      \\     _\\ <br>
    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\.-~        .-~~~^-.<br>
  (( / / )) ,-{        _      \`-.|.-~-.           .~         \`.<br>
 (( // / ))  '/\\      /                 ~-. _ .-~      .-~^-.  \\ <br>
 (( /// ))      \`.   {            }                   /      \\  \\ <br>
  (( / ))     .----~-.\        \\-'                 .~         \\  \`. \^-.<br>
             ///.----..>        \\             _ -~             \`.  ^-\`  ^-_<br>
               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~<br>
                                                                  /.-~<br>
                                                                  </span></pre>`)
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value ==="ls") {
    trueValue(value);
    createText("Nothing to see here :/");
    createText(`Type '<span style="color:#66C2CD">help</span>' to see a list of available commands.`);
  }
  else{
    falseValue(value);
    createText(`${value}: command not found`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");

  // to get an arrow
  //  i.setAttribute("class", "fas fa-arrow-right icone")
  i.setAttribute("class", "fas fa-arrow-right icone")
  i.setAttribute("style", "font-size: 14px;")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}


function falseValue(value){
  
  const div = document.createElement("section")
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("style", "font-size: 14px;")
  i.setAttribute("class", "fas fa-arrow-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  p.innerHTML = text ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();