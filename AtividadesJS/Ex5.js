const form = document.querySelector("form")
const resp = document.querySelector("h3")
const vetorresp2 = document.querySelector("h4")

form.addEventListener('submit', (e) => {
        e.preventDefault();

        let vetor = [];
        let media = 0;
        let soma = 0;
        let l = 0;

        for (let i = 0; i < 5; i++) {
            vetor[i] = Math.floor(Math.random() * 100) + 1;
        }

        for (let i = 0; i < 5; i++) {
            soma += vetor[i];
        }

        media = soma / 5;

        vetorresp2.textContent = vetor;
        resp.textContent = media;
        
})