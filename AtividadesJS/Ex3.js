const form = document.querySelector("form")
const resp = document.querySelector("h3")
const vetorresp = document.querySelector("h4")


form.addEventListener('submit', (e) => {
        e.preventDefault();

        let vetor = [];
        let soma = 0;
        let l = 0;

        for (let i = 0; i < 10; i++) {
            vetor[i] = Math.floor(Math.random() * 100) + 1;
        }

        for (let i = 0; i < 10; i++) {
            soma += vetor[i];
        }

        vetorresp.textContent = vetor;
        resp.textContent = soma;
        
})