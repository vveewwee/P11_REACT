import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Housing from '../pages/Housing'
import Error from '../pages/Error'

export default function AppRouter() {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Home page={'home'} />} />
                <Route path="/about" element={<About page={'about'} />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    )
}
