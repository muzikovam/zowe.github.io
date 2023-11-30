//const fs = require('fs-extra');
//const docusign = require('docusign-esign');

let harmonica= document.querySelector("#harmonica");


let title = document.querySelector("#my_title");
let btn = document.querySelector("#myButon");
btn.addEventListener('click', async function () {
    //alert(my_textbox.value);
    const bla = await fetch("https://account-d.docusign.com/oauth/auth?response_type=token&scope=signature&client_id=43c63a23-b847-41f3-bdea-aee2bf86bf44",{
        method: "GET",
    });
    console.log(bla);
});