import React from 'react';
import { List, Datagrid, TextField,UrlField,EmailField, TextInput, Edit, SimpleForm, DisabledInput, Create, SelectInput } from 'react-admin';

export const ServerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
           <TextField source="id" />
            <UrlField source="address" />
             <TextField source="type" />
             <TextField source="findString" />
            <TextField source="timeout" />
            <EmailField source="emailNotification" />
        </Datagrid>
    </List>
);

export const ServerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
             <TextInput source="address" />
             <SelectInput source="type" choices={[
    { id: 'host', name: 'host' },
    { id: 'url', name: 'url' }]} />             
    			<TextInput source="findString" />
             <TextInput source="timeout" />
           <TextInput source="emailNotification" />
        </SimpleForm>
    </Edit>
);

export const ServerCreate = props => (
    <Create {...props}>
        <SimpleForm>
                     <TextInput source="address" />
             <SelectInput source="type" choices={[
    { id: 'host', name: 'host' },
    { id: 'url', name: 'url' } ]} />
             	<TextInput source="findString" />
             <TextInput source="timeout" />
           <TextInput source="emailNotification" />
        </SimpleForm>
    </Create>
);