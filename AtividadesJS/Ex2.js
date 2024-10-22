const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener('submit', (e) => {
        e.preventDefault();

        let vetor = [];
        let l = 0;
        const numero = Number(form.numero.value);

        for (let i = numero; i > 10; i--){
            vetor[l] = i;
            l++
        }
        
        resp.textContent = vetor;
})