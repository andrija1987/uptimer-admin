import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ServerList, ServerEdit, ServerCreate } from './servers';
import Strapi from 'strapi-sdk-javascript/build/main';
import strapiDataProvider from 'ra-dp-strapi';
//import authProvider from './authProvider';

const apiUrl = 'http://dosegljiv.si:1337';
const strapi = new Strapi(apiUrl);

const App = () => (
    <Admin  dataProvider={strapiDataProvider(strapi)}>
        <Resource name="servers" list={ServerList} edit={ServerEdit} create={ServerCreate} />
    </Admin>
);

export default App;