import { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import data from '../../data/logements.json';

console.log(data[0]);
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <p>Home page </p>
      {data.map((e) => {
        return <Card key={e.id} data={e}></Card>;
      })}
      <Footer />
    </Fragment>
  );
}
