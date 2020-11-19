import React from 'react';
import { UI } from '@nexys/material-components';
import { Data } from './type';
import Link from './link';

import LinkAdd from './link/add';

import * as U from './utils';

const FormUI = (props: { data: Data }) => {
  const [data, setData] = React.useState<Data>(props.data);

  React.useEffect(() => {
    setData(props.data);
  }, [props]);

  const handleChange = (field: {
    name: keyof Pick<Data, 'name' | 'title' | 'phone' | 'email'>;
    value: string;
  }) => {
    data[field.name] = field.value;

    setData({ ...data });
  };

  const handleChangePic = (v: string) => {
    data.picture.src = v;
    setData({ ...data });
  };

  return (
    <>
      <UI.Form.Input<Data>
        data={data}
        name="name"
        placeholder={'Full Name'}
        onChange={v => handleChange({ name: 'name', value: String(v.value) })}
      />

      <UI.Form.Input<Data>
        data={data}
        name="title"
        placeholder={'Title'}
        onChange={v => handleChange({ name: 'title', value: String(v.value) })}
      />
      <UI.Form.Input<Data>
        data={data}
        name="email"
        placeholder={'Email'}
        onChange={v => handleChange({ name: 'email', value: String(v.value) })}
      />

      <UI.Form.Input<Data>
        data={data}
        name="phone"
        placeholder={'Phone'}
        onChange={v => handleChange({ name: 'phone', value: String(v.value) })}
      />

      <UI.Form.Input<typeof data.picture>
        data={data.picture}
        name="src"
        placeholder={'Image Link'}
        onChange={v => handleChangePic(String(v.value))}
      />

      <ul>
        {data.links.map((link, key) => (
          <li key={key}>
            {link.name}:{' '}
            <small>
              <a href={link.href}>{link.href}</a>
            </small>
          </li>
        ))}
      </ul>

      <LinkAdd
        label={'add a link'}
        onSubmit={href => {
          if (!href.match(/^http[s]{0,1}:\/\//)) {
            alert('not a valid link');
            return Promise.resolve(undefined);
          }

          const { links } = data;

          const name = U.nameFromLink(href);
          const icon = U.iconFromLink(href);

          const item = {
            name,
            icon,
            href
          };
          data.links = [...links, item];

          setData({ ...data });

          return Promise.resolve(undefined);
        }}
      />

      {data.picture.src !== '' && (
        <img src={data.picture.src} alt={data.name} />
      )}

      {data.name !== '' &&
        // data.title !== '' &&
        data.email !== '' &&
        data.phone !== '' &&
        data.picture.src !== '' && <Link data={data} />}
    </>
  );
};

export default FormUI;
