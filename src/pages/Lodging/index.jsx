import { React, Fragment } from 'react';
import Carousel from '../../components/Carousel';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Dropdown from '../../components/Dropdown';
import { useLocation } from 'react-router-dom';
import './lodging.scss';
export default function Lodging() {
  const data = useLocation().state;
  return (
    <Fragment>
      <Carousel data={data.pictures} />
      <main className="lodging">
        <section className="sectionOne">
          <h1 className="sectionOne__title">{data.title}</h1>
          <p className="sectionOne__location">{data.location}</p>
          <div className="sectionOne__tags">
            {data.tags.map((e, index) => {
              return <Tag key={e.index} data={e} />;
            })}
          </div>
        </section>
        <section className="sectionTwo">
          <div className="profile">
            <p className="profile__hostName">{data.host.name}</p>
            <img
              src={data.host.picture}
              alt=""
              className="profile__hostPhoto"
            />
          </div>
          <Rating data={data.rating} />
        </section>
        <section className="sectionDropdown">
          <Dropdown
            data={{ text: data.description, type: 'Description', isBig: false }}
          />
          <Dropdown
            data={{ text: data.equipments, type: 'Équipments', isBig: false }}
          />
        </section>
      </main>
    </Fragment>
  );
}
