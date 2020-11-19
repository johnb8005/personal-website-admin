import React from 'react';
import Title from 'common/title';
import FormUI from './form-ui';
import { Data } from './type';

import DataSamples from '../../data/sample';

const initialData: Data = {
  name: '',
  title: '',
  email: '',
  phone: '',
  picture: { src: '' },
  links: [],
  linksFooter: []
};

export default () => {
  const [data, setData] = React.useState<Data>(initialData);

  return (
    <>
      <Title
        title="Generate your personal virtual business card"
        type="pageTitle"
      />

      <ul>
        <li onClick={() => setData(initialData)}>Initial Data</li>
        {DataSamples.map((d, i) => (
          <li key={i} onClick={() => setData(d)}>
            {d.name}
          </li>
        ))}
      </ul>

      <FormUI data={data} />
    </>
  );
};
