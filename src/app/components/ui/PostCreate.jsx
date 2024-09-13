
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
// import RichTextInput from 'ra-input-rich-text';

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} />
            <TextInput source="teaser" multiline={true} label="Short description" />
            {/* <RichTextInput source="body" /> */}
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);