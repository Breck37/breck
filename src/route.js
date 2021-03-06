import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Mission from './components/Mission'
import Contact from './components/Contact'

export default (
    <div>
        <Switch>
             <Route exact path='/' component={LandingPage} />
             <Route path='/meet' component={Main} />
             <Route path='/projects' component={Projects} />
             <Route path='/about' component={About} />
             <Route path='/futuremission' component={Mission} />
             <Route path='/contactbrent' component={Contact} />
        </Switch>
    </div>
)