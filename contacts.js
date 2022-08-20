import fs from 'fs'
import process, { stdout } from 'process'
import redline from 'readline'

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}
const dataPath = "./data/contacts.json"

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

const rl = redline.createInterface({
    input: process.stdin,
    output: stdout
})

export const question = (pertanyaan) => { 
    return new Promise((res,rej) => {
    rl.question(pertanyaan, (nama) => {
        res(nama)
    })
})}

export const saveContact = (nama,email,noHp) => {
    const data = {nama,email,noHp}
    let dataFile
    const read = fs.readFileSync(dataPath,'utf-8')
    dataFile = JSON.parse(read)
    dataFile.push(data)
    fs.writeFileSync(dataPath,`${JSON.stringify(dataFile)}`)
    rl.close()
}