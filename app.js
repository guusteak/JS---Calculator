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