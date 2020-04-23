import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex() {
    document.querySelector("#index_page").style.right = "-100%";
    Router.push("/Welcome");
}

const Index = () =>
    <div id="index_page" onClick={ClickIndex}>
    Hello.
    </div>

export default Index;