const cry = require('crypto')
const fs = require('fs')

const md5 = word => cry.createHash('md5').update(word).digest('hex')

const target = 'e8d95a51f3af4a3b134bf6bb680a213a'

const alphabet = fs.readFileSync('filtered.txt', 'utf8').split('\n')

alphabet.forEach(
  word => {
    const hash = md5(word)

    if (hash === target) {
      console.log(`Password is: ${word}`)
      process.exit(0)
    }
  }
)