// Função para testar (simulando a lógica do seu app)
const formatarTemp = (temp) => `${Math.round(temp)}°C`;

test('Deve arredondar 25.6 para 26°C', () => {
  expect(formatarTemp(25.6)).toBe('26°C');
});

test('Deve manter o sinal em temperaturas negativas', () => {
  expect(formatarTemp(-5.2)).toBe('-5°C');
});