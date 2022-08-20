import { saveContact,question } from "./contacts.js"

const main = async () => {
    const nama = await question("Nama Kamu : ")
    const email = await question("Email Kamu : ")
    const noHp = await question("No Hp Kamu : ")
    saveContact(nama,email,noHp)
}

main()