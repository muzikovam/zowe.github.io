//const fs = require('fs-extra');
//const docusign = require('docusign-esign');

let harmonica= document.querySelector("#harmonica");


let title = document.querySelector("#my_title");
let btn = document.querySelector("#myButon");
btn.addEventListener('click', async function () {
    //alert(my_textbox.value);
    const bla = await fetch("https://account-d.docusign.com/oauth/auth?response_type=token&scope=signature&client_id=6fae2312-7c3f-454a-969b-490247d8f80e",{
        method: "GET",
    });
    console.log(bla);
});