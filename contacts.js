import fs from 'fs'
import chalk from 'chalk'
import validator from 'validator'

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}
const dataPath = "./data/contacts.json"

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

export const saveContact = (nama,email,noHp) => {
    const data = {nama,email,noHp}
    let dataFile
    const read = fs.readFileSync(dataPath,'utf-8')
    dataFile = JSON.parse(read)
    
    const duplicate = dataFile.find((contact) => contact.nama === nama)

    if(duplicate || !validator.isEmail(email) || !!validator.isMobilePhone(noHp,'id-ID')){
        duplicate && console.log(chalk.red.inverse.bold('Contact Sudah Terdaftar'));
        !validator.isEmail(email) && console.log(chalk.red.inverse.bold('Email Salah'))
        !validator.isMobilePhone(noHp,'id-ID') && console.log(chalk.red.inverse.bold('Pastikan Nomor hp diisi'))
        return false
    }



    dataFile.push(data)
    fs.writeFileSync(dataPath,`${JSON.stringify(dataFile)}`)
}

export const listContact = () => {
    const data = fs.readFileSync(dataPath,'utf-8')
    const parseData = JSON.parse(data)
    console.log("");
    console.log(chalk.inverse.green("Daftar Contact"));
    parseData.forEach((element,i) => {
        console.log(`${i + 1}. ${element.nama} - ${element.email}`);
    });
    console.log("");

}

export const detailContact = (nama) => {
    const data = fs.readFileSync(dataPath,'utf-8')
    const newData = JSON.parse(data)
    newData.find(data => data.nama.toLowerCase() === nama.toLowerCase() && console.log(data))

}

export const deleteContact = (nama) => {
    const data = fs.readFileSync(dataPath,'utf-8')
    const newData = JSON.parse(data)
    const dataFilter = newData.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase())
    if (newData.length === dataFilter.length) {
        console.log("Nama tidak ditemukan");
        return false
    }
    fs.writeFileSync('data/contacts.json',JSON.stringify(dataFilter))
    console.log('Data berhasil dihapus');
}