import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Layout from '../layout/layout';
import About from '../screens/aboutus/about';
import Account from '../screens/account/account';
import Contact from '../screens/contact/contact';
import Home from '../screens/home/home';
import Services from '../screens/services/services';
import AcademicPaperWriting from '../screens/services/servicesInner/academicPaperWriting';
import Admissionservices from '../screens/services/servicesInner/admissionServices';
import Assignments from '../screens/services/servicesInner/assignments';
import Dissertationservices from '../screens/services/servicesInner/dissertationServices';
import Proofreading from '../screens/services/servicesInner/proofreading';
import Rewriting from '../screens/services/servicesInner/rewriting';
import Writers from '../screens/writers/writers';

export default class route extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout>
                        <Route exact path='/about' component={About} />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/writers' component={Writers} />
                        <Route exact path='/account' component={Account}/>
                        <Route exact path='/services' component={Services}/>
                        <Route exact path='/academicPaperWriting' component={AcademicPaperWriting}/>
                        <Route exact path='/rewriting' component={Rewriting}/>
                        <Route exact path='/proofreading' component={Proofreading}/>
                        <Route exact path='/admissionServices' component={Admissionservices}/>
                        <Route exact path='/dissertationServices' component={Dissertationservices}/>
                        <Route exact path='/assignments' component={Assignments}/>
                    </Layout>
                </Switch>
            </Router>
        )
    }
}
