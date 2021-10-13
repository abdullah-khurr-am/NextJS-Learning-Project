import style from "../../styles/Ninjas.module.css";
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").catch(
    (error) => {
      console.log("error");
    }
  );

  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninja = ({ ninjas }) => {
  return (
    <div>
      <h2>NINJA PAGE HERE BRUHH..!</h2>
      <div>
        {ninjas.map((ninja) => {
          return (
            <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
              <div className={style.single}>
                <h2>{ninja.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Ninja;
