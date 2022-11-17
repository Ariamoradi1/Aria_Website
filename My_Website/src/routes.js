
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Home from './Home/Home';

const myRoute = [
    {path : '/', element : <Home/>},
    {path : '/Service', element : <Service/>},
    {path : '/Contact Us', element : <Contact/>},
]

export default myRoute
