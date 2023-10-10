const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];

const generateDomainNames = () => {
    const result = [];
    for (const p of pronoun) {
        for (const a of adj) {
            for (const n of noun) {
                const domainName = p + a + n + '.com';
                result.push(domainName);
            }
        }
    }
    return result;
};

document.getElementById('generate').addEventListener('click', () => {
    const domainNames = generateDomainNames();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (const name of domainNames) {
        const domainLink = document.createElement('a');
        domainLink.href = `http://${name}`;
        domainLink.textContent = name;
        domainLink.target = '_blank';
        resultDiv.appendChild(domainLink);
        resultDiv.appendChild(document.createElement('br'));
    }
});
