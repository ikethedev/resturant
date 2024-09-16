
import createElement from "./utility"

class Nav{
    constructor() {
        this.render = this.render.bind(this);
        this.createNavContent = this.createNavContent.bind(this);
    }

    render(){
       return this.createNavContent()
    }

    createNavContent(){
        const navList = createElement("ul", "", "nav-list", "nav-list")  
        const navItem1 = createElement("li", "Home", "home", "nav-item")
        const navItem2 = createElement("li", "Menu", "menu", "nav-item")
        const navItem3 = createElement("li", "Contact", "contact", "nav-item")
        navList.append(navItem1, navItem2, navItem3)   
        return navList
    }
}

const nav = new Nav();

export default nav;