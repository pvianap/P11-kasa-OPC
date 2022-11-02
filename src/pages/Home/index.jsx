import { Fragment } from 'react';
import Card from '../../components/Card';
import data from '../../data/logements.json';
import './home.scss';
import Banner from '../../assets/banner.png';

console.log(data[0]);
export default function Home() {
  return (
    <Fragment>
      <div className="banner">
        <img src={Banner} alt="banner" />
        <div className="banner__filter"></div>
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      </div>
      <div className="container">
        {data.map((e) => {
          return <Card key={e.id} data={e}></Card>;
        })}
      </div>
    </Fragment>
  );
}
