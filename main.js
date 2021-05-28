const table = document.getElementById('table')
const final = document.getElementById('final')


table.addEventListener('click', (e) => {

    if (e.target.className.indexOf('active') === -1) {
        e.target.className += ' active';
    }

    const one = document.getElementById('one').className.includes('active')
    const two = document.getElementById('two').className.includes('active')
    const three = document.getElementById('three').className.includes('active')
    const four = document.getElementById('four').className.includes('active')
    const five = document.getElementById('five').className.includes('active')
    const six = document.getElementById('six').className.includes('active')
    const seven = document.getElementById('seven').className.includes('active')
    const eight = document.getElementById('eight').className.includes('active')
    const nine = document.getElementById('nine').className.includes('active')
    const ten = document.getElementById('ten').className.includes('active')

    if (e.target.id === 'one') {
        document.getElementById('two').classList.remove('active')
  
    }
    else if (e.target.id === 'two') {
        document.getElementById('one').classList.remove('active')
    }

    if (e.target.id === 'three') {
        document.getElementById('four').classList.remove('active')
    }
    else if (e.target.id === 'four') {
        document.getElementById('three').classList.remove('active')
    }

    if (e.target.id === 'five') {
        document.getElementById('six').classList.remove('active')
    }
    else if (e.target.id === 'six') {
        document.getElementById('five').classList.remove('active')
    }

    if (e.target.id === 'seven') {
        document.getElementById('eight').classList.remove('active')
    }
    else if (e.target.id === 'eight') {
        document.getElementById('seven').classList.remove('active')
    }

    if (e.target.id === 'nine') {
        document.getElementById('ten').classList.remove('active')
    }
    else if (e.target.id === 'ten') {
        document.getElementById('nine').classList.remove('active')
    }


    if ((one || two) && (three || four) && (five || six) && (seven || eight) && (nine || ten)) {
        final.disabled = false;
    }
    else {
        final.disabled = true;
    }

})