import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Tokens from './components/Tokens'
import GarrysCollectionPage from './screens/GarrysCollectionPage'
import Home from './screens/Home'
import PostDetailPage from './screens/PostDetailPage'
import Slider from './components/Slider'

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/postdetail' component={PostDetailPage} />
                    <Route  path='/library' component={Tokens} />
                    <Route  path='/garryscollection' component={GarrysCollectionPage} />
                    <Route path='/slider' component={Slider}/>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default Routes
