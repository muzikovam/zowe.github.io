//const fs = require('fs-extra');
//const docusign = require('docusign-esign');

let harmonica= document.querySelector("#harmonica");


let title = document.querySelector("#my_title");
let btn = document.querySelector("#myButon");
btn.addEventListener('click', async function () {
    alert(process.env.GH_SECRET);
    //alert(my_textbox.value);
    const bla = await fetch("https://account-d.docusign.com/oauth/auth?response_type=token&scope=signature&client_id=6fae2312-7c3f-454a-969b-490247d8f80e&redirect_uri=https://muzikovam.github.io/zowe.github.io/form.html",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    });
    console.log(bla);
    var creds = JSON.stringify({
  Username: "muzikovam@gmail.com",
  Password: "password",
  IntegratorKey: "integratorKey"
});
});