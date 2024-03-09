import './index.css'
import img from '../../assets/react.svg'
function Books(props) {
   return (
      <>
         <div key={props.id} className="card">
            <h1>author: {props.author}</h1>
            <h1>country: {props.country}</h1>
            <h1>language: {props.language}</h1>
            <a href={props.link}>link</a>
            <h1>pages: {props.pages}</h1>
            <h1>title: {props.title}</h1>
            <h1>year: {props.year}</h1>
         </div>
      </>
   )
}

export default Books;