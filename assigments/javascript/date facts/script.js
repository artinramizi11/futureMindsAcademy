
    const submitForm = document.querySelector('#submit')
    const dayValue = document.querySelector('#day');
    const monthValue = document.querySelector('#month');
    const facts = document.querySelector('.facts');


    const numbersAPI = async function(month,day) {
        const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e156e37a69msh78d05030e2ecdd0p12754bjsna31a6ed3678e',
            'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
        }
    };


    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.text();
        return data;

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    }

    submitForm.addEventListener('click', async function(e){
        const month = monthValue.value;
        const day = dayValue.value;

        e.preventDefault()

        const requests = [
            numbersAPI(month,day),
            numbersAPI(month,day),
            numbersAPI(month,day)
        ];

        try {
            const [fact1, fact2, fact3] = await Promise.all(requests);
    
            // Display the facts
            facts.innerHTML = `
                <p>Fact 1: ${fact1}</p>
                <p>Fact 2: ${fact2}</p>
                <p>Fact 3: ${fact3}</p>
            `;
        } catch(error){
            console.log(error)
        }
      
    })