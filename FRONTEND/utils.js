const formatDate = (data) =>{
    const currentDate = new Date(data);
    const options = { 
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        hour12: false
    };

    let formattedDate = currentDate.toLocaleDateString('pt-BR',options)
    return formattedDate.replace(',', ' às') + 'hs';
}

function randomColor(vetorColor) {
    const index = Math.floor(Math.random()*3);
    return vetorColor[index];
}

function darkColor() {
    let darkPalete= ['092635', '1B4242', '3A4D39','555843', '495E57', '45474B']
    return randomColor(darkPalete) ;
}

function lightColor() {
    let lightPalete= ['88AB8E', 'AFC8AD', 'A7D397', '88AB8E', 'AFC8AD', '9EC8B9']
    return randomColor(lightPalete) ;
}


export {formatDate, lightColor, darkColor}