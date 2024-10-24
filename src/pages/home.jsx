import { Link } from 'react-router-dom' // This imports the Link component from the react-router-dom library, which is used to create navigation links between different pages in a React application.

function Home() {

  return (
    <>
      <p><main>Bienvenue
        <Link to="/profile/12"> profile 12 </Link>
        <Link to="/profile/18"> profile 18 </Link>
      </main></p>

    </>
  )
}

export default Home
