// Função para calcular o desconto
function calcularValorComDesconto(preco, desconto) {
    if (desconto < 0 || desconto > 100) throw new Error('Desconto inválido');
    return preco - (preco * desconto) / 100;
  }
  
  // Teste unitário
  test('calcular desconto corretamente', () => {
    const resultado = calcularValorComDesconto(100, 20);
    expect(resultado).toBe(80); // valor esperado
  });