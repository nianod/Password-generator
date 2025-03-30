



const password = (length = 12) =>{

    const lowercase = "abcdefghijklmnopqrstuvwyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "|*()!@$#%^&[{'>,.?\/=+_-=}<;]:'"


    const allCharcters = lowercase + uppercase +symbols + numbers;

    let  passId = "";


    for( let i = 0; i < length; i++) {

        const randomIdx = Math.floor(Math.random() * allCharcters.length);


        passId += allCharcters[randomIdx]
    }
    return passId;
}


for(let i = 0; i < 100; i++) {

    console.log(`${i+1}. ${password()}`);
}