export class CalculadoraService {

  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }

  restar(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return num1 / num2;
  }

  factorial(num1: number): number {
    if (num1 < 0) {
      throw new Error('No se puede calcular el factorial de un número negativo');
    }
    if (num1 === 0 || num1 === 1) {
      return 1;
    }
    return num1 * this.factorial(num1 - 1);
  }
}
