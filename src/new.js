const discordBtn = document.querySelector('.all_btn a:nth-child(3)');
const discordtext = document.querySelector('.discord');

var text = 'aknutcherx#2602'

discordBtn.addEventListener('click', ()=>{
    if(discordtext.innerHTML = 'Discord'){
        discordtext.innerHTML = text;
    }
    else if(discordtext.innerHTML = text){
        discordtext.innerHTML = 'Discord';
    }
});