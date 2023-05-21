const fs = require('fs')

fs.readFile('common.txt', 'utf8', (err, data) => {
  if (err) throw err
  const lines = data.split('\n')
  const filtered = lines.filter(line => line.length <= 9)

  fs.writeFile('common-9.txt', filtered.join('\n'), err => {
    if (err) throw err
    console.log('Arquivo salvo!')
  })

})