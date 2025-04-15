
function factorial(n: number): number {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

export function com(n: number, r: number) {
    return factorial(n) / (factorial(n - r) * factorial(r))
}
export function per(n: number, r: number) {
    return factorial(n) / (factorial(n - r))
}
