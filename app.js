import yargs from "yargs"
import { hideBin } from 'yargs/helpers'
import { saveContact } from "./contacts.js"
import fs from 'fs'
yargs(hideBin(process.argv)).command(
    'add',
    'Masukkan Data',
    function(yargs){
        return yargs.options({
            'nama': {
                describe : "Nama Lengkap",
                demandOption : true,
                type : 'string',
            },
            'email'  : {
                describe : 'Email Lengkap',
                demandOption : false,
                type : 'string'
            },
            'noHp' : {
                describe : 'Nomor Handphone',
                demandOption : true,
                type : 'string'
            }

            })},
    function({nama,email,noHp}){
        saveContact(nama,email,noHp)
    } 
).parse()



// import { saveContact,question } from "./contacts.js"
// const main = async () => {
//     const nama = await question("Nama Kamu : ")
//     const email = await question("Email Kamu : ")
//     const noHp = await question("No Hp Kamu : ")
//     saveContact(nama,email,noHp)
// }

// main()