let bar = document.getElementsByClassName("header__point")[0];
let page = document.getElementsByClassName("page")[0];
let main = document.getElementsByClassName("main")[0];
let footer = document.getElementsByClassName("footer")[0];

for(let i=0; i<=2; i++){
    let theme = () =>{
        let argumentpassed = i;
        change(argumentpassed);
    }
    document.getElementsByClassName("header__number")[i].addEventListener("click", theme)
}
function change(argumentpassed){
    if(argumentpassed==0){
        bar.classList.remove("header__point--middle");
        bar.classList.remove("header__point--right");
        bar.classList.add("header__point--left");
        page.classList.remove("page--second");
        page.classList.add("page--first");
        page.classList.remove("page--third");
        main.classList.add("main--first");
        main.classList.remove("main--second")
        main.classList.remove("main--remove");
        footer.classList.add("footer--first");
        footer.classList.remove("footer--second");
        footer.classList.remove("footer--third");
    }
    else if(argumentpassed==1){
        bar.classList.add("header__point--middle");
        bar.classList.remove("header__point--right");
        bar.classList.remove("header__point--left");
        page.classList.add("page--second");
        page.classList.remove("page--first");
        page.classList.remove("page--third");
        main.classList.remove("main--first");
        main.classList.add("main--second")
        main.classList.remove("main--remove");
        footer.classList.remove("footer--first");
        footer.classList.add("footer--second");
        footer.classList.remove("footer--third");
    }
    else if(argumentpassed==2){
        bar.classList.remove("header__point--middle");
        bar.classList.add("header__point--right");
        bar.classList.remove("header__point--left");
        page.classList.remove("page--second");
        page.classList.remove("page--first");
        page.classList.add("page--third");
        main.classList.remove("main--first");
        main.classList.remove("main--second")
        main.classList.add("main--remove");
        footer.classList.remove("footer--first");
        footer.classList.remove("footer--second");
        footer.classList.add("footer--third");
    }
    else{
        console.log("Something went wrong")
    }
}
for(let j=0; j<=18; j++){
    let conduct = () =>{
        let buttonpassed = j;
        calculate(buttonpassed);
    }
    document.getElementsByClassName("footer__button")[j].addEventListener("click", conduct);
}
function calculate(buttonpassed){
    let screen = document.getElementsByClassName("main__output")[0];
    switch(buttonpassed){
        case 0:
        case 1:
        case 2:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            if(screen.innerHTML == "0" ){
                screen.innerHTML = document.getElementsByClassName("footer__button")[buttonpassed].innerHTML;
            }   
            else{
                screen.innerHTML += document.getElementsByClassName("footer__button")[buttonpassed].innerHTML;
            }
            break;
        case 3:
            if(screen.innerHTML.length == 1 && screen.innerHTML == "0"){
                console.log("pierdol sie");
                break;
            }
            else if(screen.innerHTML.length == 1 ){
                screen.innerHTML = "0";
                break;
            }
            else{
                let valuelist = screen.innerHTML;
                valuelist.split('');
                let valuelist2 = Object.assign([], valuelist);
                valuelist2.pop();
                let output = "";
                for(let i=0; i<valuelist2.length; i++){
                    output += valuelist2[i];
                }
                screen.innerHTML = output;
                break;
                }
                let valuelist = screen.innerHTML;
                valuelist.split('');
                let valuelist2 = Object.assign([], valuelist);
                valuelist2.pop();
                let output = "";
                for(let i=0; i<valuelist2.length; i++){
                    output += valuelist2[i];
            
                screen.innerHTML = output;
                break;
                }
        case 16:
            screen.innerHTML = "0";
            break;
        case 17:
            let result = screen.innerHTML;
            Number(result);
            screen.innerHTML = result;
        }
        
}