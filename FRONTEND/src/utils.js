const formatDate = (data) => {
    const currentDate = new Date(data);
    const options = {
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        hour12: false
    };

    let formattedDate = currentDate.toLocaleDateString('pt-BR', options)
    return formattedDate.replace(',', ' às') + 'hs';
}

const randomInt = (value) => {
    return Math.floor(Math.random() * value)
}

const randomColors = () => {
    let darkPalette = ['191970', '000080', '00008B', '0000CD', '483D8B', '4682B4', '708090']
    let lightPalette = ['B0C4DE', 'ADD8E6', '87CEEB', '87CEFA', '00BFFF', '6495ED', '778899']

    let colors = []
    colors.push(darkPalette)
    colors.push(lightPalette)

    return {
        dark: colors[0][randomInt(colors[0].length)],
        light: colors[1][randomInt(colors[1].length)]
    }
}

export { formatDate, randomColors }