import FirstSection from "./component/FirstSection"
import Header from "./component/Header"
import Navbar from "./component/Navbar"

function App() {


  return (
    <>
    <Navbar />
    <Header head ="The library for web and native user interfaces"/>
    <FirstSection title="Create user interfaces  from components " desc ="React lets you build user interfaces out of individual pieces called components.Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps." subdesc="Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations."/>
    <FirstSection title="Write components with code and markup "   desc ="React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming." subdesc="This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete."/>
    <Header head="Welcome to theReact community" />
    </>
  )
}

export default App
