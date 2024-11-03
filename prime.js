function isPrime(n) {
    if (n <= 1) return false; // Bilangan <= 1 bukan prima
    if (n <= 3) return true;  // 2 dan 3 adalah bilangan prima

    if (n % 2 === 0 || n % 3 === 0) return false; // Kelipatan 2 dan 3 bukan prima

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

console.log(isPrime(7));  
console.log(isPrime(10)); 
