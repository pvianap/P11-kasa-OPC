import { Fragment } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../data/logements.json';
import imgBanner from '../../assets/banner.png';
import './home.scss';

export default function Home() {
  return (
    <Fragment>
      <Banner img={imgBanner} text="Chez vous, partout et ailleurs" />
      <div className="container">
        {data.map((e) => {
          return <Card key={e.id} data={e}></Card>;
        })}
      </div>
    </Fragment>
  );
}
