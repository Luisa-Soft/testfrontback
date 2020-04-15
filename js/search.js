    const words = [
        { name: 'welcome', value: 500 },
        { name: 'family', value: 500 },
        { name: 'diez', value: 500 },
        { name: 'equis', value: 500 },
        { name: 'support', value: 500 },
        { name: 'join', value: 500 },
        { name: 'supply', value: 500 },
        { name: 'group', value: 500 },
        { name: 'management', value: 500 },
        { name: 'peaple', value: 500 },
        { name: 'food', value: 500 },
        { name: 'service', value: 500 },
        { name: 'horeca', value: 500 },
        { name: 'relationships', value: 500 },
        { name: 'clients', value: 500 },
        { name: 'helpers', value: 500 },
        { name: 'provideers', value: 500 },
        { name: 'innovation', value: 500 },
        { name: 'opportunities', value: 500 },
        { name: 'values', value: 500 },
        { name: 'integrity', value: 500 },
        { name: 'empathy', value: 500 },
        { name: 'optimism', value: 500 },
        { name: 'respect', value: 500 },
        { name: 'confidence', value: 500 },
        { name: 'altruism', value: 500 },
        { name: 'Welcome', value: 500 },
        { name: 'Welcome', value: 500 },
    ]

    const searchform = document.querySelector("#input-word");
    const boton = document.querySelector("#side-search-open");
    const find = document.querySelector('#find');

    const filters = () => {
        //console.log(searchform.value);
        const texts = searchform.value.toLowerCase();
        for (let word of words) {
            let name = word.name.toLowerCase();
            if (name.indexOf(text) !== -1) {
                find.innerHTML
            }
        }
    }

    boton.addEventListener('click', filters)