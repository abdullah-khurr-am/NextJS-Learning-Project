import axios from "axios";

export const getStaticPaths = async() =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data;

    const paths = data.map((ninja)=>{
        return{
            params:{ id:ninja.id.toString() }
        }
    });

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.id;
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.data;

    return{
        props:{ninja:data}
    }
}

const Details = ({ninja}) => {
    return ( <div>
        <h1>Details 1</h1>
        <h2>{ninja.name}</h2>
    </div> );
}
 
export default Details;