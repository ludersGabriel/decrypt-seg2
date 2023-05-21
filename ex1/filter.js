const fs = require('fs')

fs.readFile('dicio.txt', 'utf8', (err, data) => {
  if (err) throw err
  const lines = data.split('\n')
  const filtered = lines.filter(line => line.length <= 5)

  fs.writeFile('filtered.txt', filtered.join('\n'), err => {
    if (err) throw err
    console.log('Arquivo salvo!')
  })

})