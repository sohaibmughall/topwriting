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
import Writemyessay from '../screens/footersection/services/writemyessay';
import Wmdessertation from '../screens/footersection/services/writemydessertation';
import Assignmentwriter from '../screens/footersection/services/AssignmentWriter';
import Lawessay from '../screens/footersection/services/LawEssay';
import Mbaessay from '../screens/footersection/services/MBAEssay';
import Hrmessat from '../screens/footersection/services/HRMEssay';
import Literaturereview from '../screens/footersection/services/LiteratureReview';
import Termofservice from '../screens/footersection/services/TermsofService';
import Refundpolicy from '../screens/footersection/services/Refundpolicy';
import writemyessay from '../screens/footersection/services/writemyessay';
import writemydessertation from '../screens/footersection/services/writemydessertation';
import AssignmentWriter from '../screens/footersection/services/AssignmentWriter';
import LawEssay from '../screens/footersection/services/LawEssay';
import MBAEssay from '../screens/footersection/services/MBAEssay';
import HRMEssay from '../screens/footersection/services/HRMEssay';
import LiteratureReview from '../screens/footersection/services/LiteratureReview';
import TermsofService from '../screens/footersection/services/TermsofService';
import BuyAssignment from '../screens/footersection/Essays/BuyAssignments';
import Coursework from '../screens/footersection/Essays/CourseworkHelp';
import CustomEssay from '../screens/footersection/Essays/CustomEssay';
import FinanceEssay from '../screens/footersection/Essays/FinanceEssay';
import MarketingEssay from '../screens/footersection/Essays/MarketingEssay';
import NursingEssay from '../screens/footersection/Essays/NursingEssay';
import Phdwriters from '../screens/footersection/Essays/Phdwriters';
import BuyAssignments from '../screens/footersection/Essays/BuyAssignments';
import CourseworkHelp from '../screens/footersection/Essays/CourseworkHelp';
import BuyEssay from '../screens/footersection/Needs/BuyEssay';
import AssignmentsHelp from '../screens/footersection/Needs/AssignmentHelp';
import CheapAssignment from '../screens/footersection/Needs/CheapAssignment';
import DomyCourse from '../screens/footersection/Needs/DoMyCoursework';
import EconomicsEssay from '../screens/footersection/Needs/EconomicsEssay';
import EnglishEssay from '../screens/footersection/Needs/EnglishEssay';
import ManagementEssay from '../screens/footersection/Needs/ManagementEssay';
import DoMyCoursework from '../screens/footersection/Needs/DoMyCoursework';
import BuyDisseratation from '../screens/footersection/ASS&ESS/BuyDisseratation';
import DissertationHelp from '../screens/footersection/ASS&ESS/DissertationHelp';
import HistoryEssay from '../screens/footersection/ASS&ESS/HistoryEssay';
import PersonalStatementHelp from '../screens/footersection/ASS&ESS/PersonalStatementHelp';
import SociologyEssay from '../screens/footersection/ASS&ESS/SociologyEssay';
import Faqs from '../screens/footersection/Policies/Faqs';
import PrivacyPolicy from '../screens/footersection/Policies/PrivacyPolicy';
import ReturnPolicy from '../screens/footersection/Policies/ReturnPolicy';
import TermandCondition from '../screens/footersection/Policies/TermandCondition';
import Pages from '../components/pages/pages';
import Linkpages from '../screens/footerlinks/linkpages';
import Footerdata from '../components/footer/footerdata';
import Cart from '../screens/cart/cart';
export default class route extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout>
                        <Route exact path='/about' component={About} />
                        <Route exact path='/home' component={Home} />
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
                        <Route exact path='/writemyessay' component={writemyessay}/>
                        <Route exact path='/writemydessertation' component={writemydessertation}/>
                        <Route exact path='/assignmentwriter' component={AssignmentWriter}/>
                        <Route exact path='/lawessay' component={LawEssay}/>
                        <Route exact path='/mbaessay' component={MBAEssay}/>
                        <Route exact path='/hrmessay' component={HRMEssay}/>
                        <Route exact path='/literaturereview' component={LiteratureReview}/>
                        <Route exact path='/tos' component={TermsofService}/>
                        <Route exact path='/refundpolicy' component={Refundpolicy}/>
                        <Route exact path='/customessay' component={CustomEssay}/>
                        <Route exact path='/phdwriters' component={Phdwriters}/>
                        <Route exact path='/buyassignment' component={BuyAssignments}/>
                        <Route exact path='/coursework' component={CourseworkHelp}/>
                        <Route exact path='/nursingessay' component={NursingEssay}/>
                        <Route exact path='/financerssay' component={FinanceEssay}/>
                        <Route exact path='/marketingessay' component={MarketingEssay}/>
                        <Route exact path='/buyessay' component={BuyEssay}/>
                        <Route exact path='/assignmenthelp' component={AssignmentsHelp}/>
                        <Route exact path='/cheapassignment' component={CheapAssignment}/>
                        <Route exact path='/domycoursework' component={DoMyCoursework}/>
                        <Route exact path='/managementessay' component={ManagementEssay}/>
                        <Route exact path='/economicsessay' component={EconomicsEssay}/>
                        <Route exact path='/englishessay' component={EnglishEssay}/>
                        <Route exact path='/buydisseratation' component={BuyDisseratation}/>
                        <Route exact path='/disserationhelp' component={DissertationHelp}/>
                        <Route exact path='/personalsh' component={PersonalStatementHelp}/>
                        <Route exact path='/historyessay' component={HistoryEssay}/>
                        <Route exact path='/sociologyessay' component={SociologyEssay}/>
                        <Route exact path='/returnpolicy' component={ReturnPolicy}/>
                        <Route exact path='/privacypolicy' component={PrivacyPolicy}/>
                        <Route exact path='/faqs' component={Faqs}/>
                        <Route exact path='/termoc' component={TermandCondition}/>
                        <Route exact path='/writemyessay' component={Linkpages}/>
                        <Route exact path='/cart' component={Cart}/>

                        



                    </Layout>
                </Switch>
            </Router>
        )
    }
}
