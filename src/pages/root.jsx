import Footer from '../composants/footer'
import Header from '../composants/header'
import {Outlet} from 'react-router-dom'

export default function Root() {
    return (
        <>
        <Header />
        <main className="container">
            <Outlet />
        </main>
        <Footer />
    </>
    )
}
