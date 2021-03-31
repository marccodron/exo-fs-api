//    Affiche à l'écran les strings passées en arguments.
//    node echo.js hello hard fork
//    hello hard fork

if (process.argv.length < 3) {
  console.log('hello hard fork')
  process.exit(3)
}

let echo = []
for (let i = 2; i <= process.argv.length; i++) {
  echo.push(process.argv[i])
}
console.log(echo.join(' '))