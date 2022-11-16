import lodgings from '../../data/logements.json';
import { useState } from 'react';

export default function Cache() {
  const [data, setData] = useState();
  setData(lodgings);
}
