const fs = require('fs')

function parseCSV(csvText, delimiter = ',') {
  const lines = csvText.split('\n')
  const result = []

  for (let line of lines) {
    const values = []
    let insideQuotes = false
    let currentValue = ''

    for (let char of line) {
      if (char === '"') {
        insideQuotes = !insideQuotes
      } else if (char === delimiter && !insideQuotes) {
        values.push(currentValue)
        currentValue = ''
      } else {
        currentValue += char
      }
    }

    values.push(currentValue)
    result.push(values)
  }

  return result
}
// 读取文件的内容
fs.readFile(
  'app\\src\\internationalization\\config.csv',
  'utf8',
  (err, data) => {
    if (err) {
      console.error('读取文件时出现错误:', err)
      return
    }
    // 打印文件内容
    console.log(data)
    console.log(parseCSV(data))
  }
)

console.log(1)
