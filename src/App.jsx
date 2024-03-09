import './App.css'
import Books from './components/Books'; 
import data from './data/data.json'


function App() {
  return (
    <>
     <header className="header">
        <div className="container header__container">
          <div className="header__nav">
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Use cases</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>
          <div className="header__btn--part">
            <h4 className='login'>Log in</h4>
            <button>Request a demo</button>
          </div>
        </div>
      </header>
      <div className="container section__container">
            {data.map(data => (
                    <Books
                        key={data.id}
                        language={data.language}
                        country={data.country}
                        link={data.link}
                        author={data.author}
                        pages={data.pages}
                        title={data.title}
                        year={data.year}
                    />
              ))}
          </div>
     <footer className="footer">
        <div className="container footer__container">
         <h1 className='name'>Xasanboy Muhammaddinov</h1>
        </div>
      </footer>
    </>
  )
}

export default App
