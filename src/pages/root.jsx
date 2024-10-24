import Footer from '../composants/footer'
import Header from '../composants/header'
import { Outlet } from 'react-router-dom'
import AsideNav from '../composants/asidenav'

export default function Root() {
    return (
        <>
            <Header />
            <main className="container">
                <AsideNav />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
