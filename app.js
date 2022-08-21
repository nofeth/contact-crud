import yargs from "yargs"
import { hideBin } from 'yargs/helpers'
import { deleteContact, detailContact, listContact, saveContact } from "./contacts.js"
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
).demandCommand().parse()

yargs(hideBin(process.argv)).command(
    'list',
    'Menampilkan Data',
    function() {
        return listContact()
    }
).demandCommand().parse()

yargs(hideBin(process.argv)).command(
    'detail',
    'Masukkan Detail Dari Nama',
    function(yargs){
        return yargs.option('nama',{
            describe : 'Nama yang ingin ditampilkan',
            type: 'string'
        })
    },
    function(argv){
        detailContact(argv.nama)
    }
).demandCommand().parse()

yargs(hideBin(process.argv)).command(
    'delete',
    'Masukkan Nama yang ingin dihapus',
    function(yargs){
        return yargs.option('nama',{
            describe : 'Nama yang ingin ditampilkan',
            type: 'string'
        })
    },
    function(argv){
        deleteContact(argv.nama)
    }
).demandCommand().parse()