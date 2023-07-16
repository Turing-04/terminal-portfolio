const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(180);
    getInputValue();
   
    removeInput();
    await delay(180);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to my Terminal portfolio");
  await delay(500);
  createText(`<pre> 
   ___ _ __ (_) __ _ _ __ ___   __ _| |_(_)_  __
  / _ \\ '_ \\| |/ _\` | '_ \` _ \\ / _\` | __| \\ \\/ /
 |  __/ | | | | (_| | | | | | | (_| | |_| |>  < 
  \\___|_| |_|_|\\__, |_| |_| |_|\\__,_|\\__|_/_/\\_\\
               |___/          
  </pre>`)
            

  await delay(200);

  createText("Initializing the server...");
  await delay(1200); 

  const p = document.createElement("p");
  p.innerHTML = `Type '<span style="color:#66C2CD">help</span>' to find out about basic available commands.`;
  app.appendChild(p);

  await delay(350);
  new_line();
}


function new_line(){
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
  
  const value = document.querySelector("input").value.trim();
  if(value === "help"){
    trueValue(value);
    
    createCode("all", "To list all available commands.");
    createCode("about me", "Who am i and what do i do.");
    createCode("all", "To list all available commands.");
    createCode("socials", "All my social networks.");
    // createCode("clear", "Clean the terminal.");
    // createCode("exit", "Exit the terminal.");
    createCode("sudo rm -rf /*", "Don't do this !!");
  } 
  else if(value==="all") {
    trueValue(value);
    // rajouter toutes les commandes dispos
    createText("all, help, whoami, ctf, github, sudo rm -rf /*, clear, exit, pgp");

    createText("use '<span style='color:#66C2CD'>all -d</span>' to see a description of all commands");
  } 
  else if(value==="all -d") {
    trueValue(value);
    // rajouter toutes les commandes dispos
    createHelp("all","To list all available commands.");
    createHelp("help","For basic commands.");
    createHelp("whoami","A (very) short bio.");
    createHelp("github","My github profile.");
    createHelp("ctf","My CTF info and accounts.");
    //createHelp("social", "All my social networks."); -> leetcode, codeChef, GH, linkedin ?
    // skills ou prog languages
    createHelp("sudo rm -rf /*","Don't do this !!");
    createHelp("clear", "To clear the terminal.");
    createHelp("exit", "To close the terminal.");
    createHelp("pgp", "My PGP key to contact me securely.");
  }  

  else if(value === "github"){
    trueValue(value);
    createText("<a href='https://github.com/turing-04' target='_blank'><i class='fab fa-github white'></i> github.com/turing-04</a>")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hey,")
    createText("I'm a cybersecurity master student at ETHZ and EPFL. ")
    createText("I like doing CTFs (Capture The Flag), I've played on my own as \"Turing-04\" and now \"Enigmatix\" but also with \
    swiss teams <a href='https://polygl0ts.ch/' target='_blank'>Polygl0ts</a>  \
     and <a href='https://ctftime.org/team/42934' target='_blank'>Organizers</a>.")

  }
  else if(value === "social"){ // to delete ?
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
  else if(value ==="ls" || value==="ll" || value==="ls -al" || value==="ls -la" || value==="la") {
    trueValue(value);
    createText("Nothing to see here :/");
    createText(`Type '<span style="color:#66C2CD">all</span>' to see the list of available commands.`);
  } else if(value ==="exit") {
    trueValue(value);
    createText("Bye !"); 
    setTimeout(() => {
      window.close();
    }, 1000);
  } else if(value ==="ctf") {
    trueValue(value);
    createText("I've played on my own as \"Turing-04\" and now \"Enigmatix\" but also with \
    swiss teams <a href='https://polygl0ts.ch/' target='_blank'>Polygl0ts</a>  \
      and <a href='https://ctftime.org/team/42934' target='_blank'>Organizers</a>.");
    createText("my CTF profiles :");
    //picoCTF profile:
    createText("<a href='https://picoctf.com/users/turing-04' target='_blank'><i class='fas fa-user white'></i> picoCTF</a>");
    //tryhackme profile:
    createText("<a href='https://tryhackme.com/p/turing04' target='_blank'><i class='fas fa-user white'></i> TryHackMe</a>");
    //rootme profile:
    createText("<a href='https://www.root-me.org/Turing-04?lang=en' target='_blank'><i class='fas fa-user white'></i> RootMe</a>");
  } else if(value==="github") {
    trueValue(value);
    createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
  } else if(value==="pgp" || value==="gpg") {
    trueValue(value);
    createText(`<pre>-----BEGIN PGP PUBLIC KEY BLOCK----- 

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
Ig==
=G2Av
-----END PGP PUBLIC KEY BLOCK----- </pre>`
    );
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
  p.innerHTML = text 
  app.appendChild(p);
}

function createHelp(code, text){
  const p = document.createElement("p");
  p.innerHTML = "<span style='color:#66C2CD'>" + code + "</span>: " + text ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal()