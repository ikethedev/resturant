console.log("running")
import createElement from "./utility";

class HomePage{
    constructor(){
        this.render = this.render.bind(this);
    }

    render(){
       return this.createHeaderContent()
    }

    createHeaderContent(){
        const headerContainer = createElement("div", null, "headerContainer", "headerContainer");
        const headerImg = createElement("img", null, "headerImg", "headerImg", "../assests/heroimg.jpg");
        const headerTitle = createElement("h1", "Resturant", "headerTitle", "headerTitle");
        const headerSubtext = createElement("p", "We are a resturant that serves the best food in town", "headerSubtext", "headerSubtext");
        headerContainer.append(headerImg, headerTitle, headerSubtext);
        return headerContainer;
    }

    helloFromClass(){
        console.log("Hello from class");
    }
}  

const homePage = new HomePage();


export default homePage;
