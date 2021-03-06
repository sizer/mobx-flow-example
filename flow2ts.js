const flow2typescript = require('./flow-to-typescript/dist/src')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const convertJS2TS = path => path.replace('\.js', '\.ts').replace('src', 'ts')

const compile2TS = (file) => (
  flow2typescript.compile(
    fs.readFileSync(file, 'utf-8'),
    file,
  ).then(ts => {
    fs.promises.mkdir(path.dirname(convertJS2TS(file)), { recursive: true })
    return ts
  }).then(ts => {
    fs.writeFileSync(convertJS2TS(file), ts)
  })
)

let pattern = 'src/**/*.js*'

glob(pattern, (_, files) => { files.forEach(file => compile2TS(file)) } )
