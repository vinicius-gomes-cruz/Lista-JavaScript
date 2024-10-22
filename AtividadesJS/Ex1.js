const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener('submit', (e) => {
        e.preventDefault();

        let vetor = [];
        let vetorresp = [];
        let l = 0;

        for (let i = 0; i < 10; i++) {
                vetor[i] = Math.floor(Math.random() * 100) + 1;
        }

        for (let i = 0; i < 10; i++) {
                if (vetor[i] % 2 == 0) {
                      vetorresp[l] = vetor[i];
                      l++;  
                }
        }

        resp.textContent = vetorresp;
        
})