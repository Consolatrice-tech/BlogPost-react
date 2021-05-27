import Home from '../view/Home';
import Signin from '../view/SigninView';
import Signup from '../view/SignupView';
import Dashboard from '../view/Dashboard';
import ViewBlog from '../view/ViewBlog';
import {Route, Switch} from 'react-router-dom';

const Index=()=>{
return (
<Switch>

    <Route component={Home} exact path={["/","/home"]}/>
    <Route component={Signin} exact path={["/signin"]}/>
    <Route component={Signup} exact path={["/signup"]}/>
    <Route component={Dashboard} exact path={["/dashboard"]}/>
  <Route component={ViewBlog} exact path={["/view/blog/:blogId"]}/>
</Switch>
)
}
export default Index;