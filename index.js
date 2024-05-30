const box = document.getElementById("pbox")
const length=12

const uplet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const downlet="abcdefghijklmnopqrstuvwxyz"
const num="0123456789"
const sym="$%_+/"

const allchars = uplet + downlet + num + sym

function createPass(){
    let pass="";
    pass += uplet[Math.floor(Math.random()*uplet.length)]
    pass += downlet[Math.floor(Math.random()*downlet.length)]
    pass += num[Math.floor(Math.random()*num.length)]
    pass += sym[Math.floor(Math.random()*sym.length)]

    while (length > pass.length){
        pass += allchars[Math.floor(Math.random()*allchars.length)]
    }

    box.value = pass;
}

function copyPass() {
    box.select()
    document.execCommand("copy")
}