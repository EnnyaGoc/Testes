import { TestContext } from "node:test";

test('deve somar dois números', () => {
    // Arrange
    const num1 = 2, num2 = 3;
  
    // Act
    const resultado = somar(num1, num2);
  
    // Assert
    expect(resultado).toBe(5);
  });


  //usar o describe
/*
  describe("Função somar”, () => {
    test("deve retornar 3 quando somamos 1 e 2", () => {
      expect(sum(1, 2)).toBe(3);
    });
  
    test("deve retornar -1 quando somamos -2 e 1", () => {
      expect(sum(-2, 1)).toBe(-1);
    });
  
    test("deve retornar 0 quando somamos 0 e 0", () => {
      expect(sum(0, 0)).toBe(0);
    });
  });
  */
