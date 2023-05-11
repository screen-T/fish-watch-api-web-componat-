import { componat1 } from "./componat1.js"
import { componat2 } from "./componat2.js"
customElements.define("image-poisson",componat1)
customElements.define("gallry-poisson",componat2)
var info=document.querySelector("#infopoissons")
var gallery=document.querySelector("#gallerypoissons")
var btninfo=document.querySelector("#info")
var btngallery=document.querySelector("#gallery")
var url1="https://origin-east-01-drupal-fishwatch.woc.noaa.gov/api/species"
var url2="https://www.fishwatch.gov/api/species/red-snapper"


function fload(){
    fetch(url1).then(fokrsponse)
}
function fokrsponse(resp){
    resp.json().then(fokdata)
}
function fokdata(data){

    for (let i of data){
        let imsrc ; 
        if(i["Image Gallery"]==null)
        {
            imsrc=""
        }
        else if(!Array.isArray(i["Image Gallery"]))
        {
            imsrc=i["Image Gallery"].src
        }
        else{
            imsrc=i["Image Gallery"][0].src

        }
        info.innerHTML+=`<image-poisson titre="${i["Species Name"]}" description="${i["Quote"]}" image-data="${imsrc}"
        cholesterol="${i["Cholesterol"]}">
        </image-poisson>`
    }
}

function fload2(){
    fetch(url2).then(fokrsponse2)
}
function fokrsponse2(resp){
    resp.json().then(fokdata2)
}
function fokdata2(data){
    for(let i of data)
    {
        let imsrc ; 
        if(i["Image Gallery"]==null)
        {
            imsrc=""
        }
        else if(!Array.isArray(i["Image Gallery"]))
        {
            imsrc=i["Image Gallery"].src
        }
        else{
            imsrc=i["Image Gallery"][0].src

        }
        gallery.innerHTML+=`
        <gallry-poisson titre="${i["Species Name"]}" description="${i["Quote"]}" image-data="${imsrc}"
        cholesterol="${i["Cholesterol"]}>
        <gallery-poisson>`
    }
}

btninfo.addEventListener("click",fload)
btngallery.addEventListener("click",fload)

