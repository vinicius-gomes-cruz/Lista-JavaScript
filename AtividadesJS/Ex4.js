const form = document.querySelector("form")
const resp = document.querySelector("h3")
const vetorresp2 = document.querySelector("h4")

function ehPrimo(n) {
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index == 0) {
            return false;
        }
    }
    return true;
}

form.addEventListener('submit', (e) => {
        e.preventDefault();

        let vetor = [];
        let vetorresp = [];
        let soma = 0;
        let ehprimo = false;
        let l = 0;

        for (let i = 0; i < 10; i++) {
            vetor[i] = Math.floor(Math.random() * 100) + 1;
        }

        for (let i = 0; i < 10; i++) {
            ehprimo = ehPrimo(vetor[i]);
            if (ehprimo) {
                vetorresp[l] = vetor[i];
                l++;
            }
        }

        vetorresp2.textContent = vetor;
        resp.textContent = vetorresp;
        
})