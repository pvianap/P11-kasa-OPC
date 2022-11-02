import { Fragment } from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import data from '../../data/logements.json';
import './home.scss';

console.log(data[0]);
export default function Home() {
  return (
    <Fragment>
      <div className="container">
        {data.map((e) => {
          return <Card key={e.id} data={e}></Card>;
        })}
      </div>
      <Footer />
    </Fragment>
  );
}
