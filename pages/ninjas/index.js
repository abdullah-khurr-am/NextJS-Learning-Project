import {axios} from 'axios';


export const getStaticProps = async() =>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    return {
        props:{
            ninjas: response
        }
    }

}

const Ninja = ({ninjas}) => {
    console.log(ninjas);
    return ( <div>
        <h2>
            NINJA PAGE HERE BRUHH..!
        </h2>
    </div> );
}
 
export default Ninja;