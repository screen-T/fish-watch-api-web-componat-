export class componat2 extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback()
    {
        var titre=this.getAttribute("titre")
        var description=this.getAttribute("description")
        var image=this.getAttribute("image-data")
        var cholesterol=this.getAttribute("image-data")
        this.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${titre}</h5>
                    <p class="card-text">${description}</p>
                    ${cholesterol}
                </div>
        </div>
        `
    }
}