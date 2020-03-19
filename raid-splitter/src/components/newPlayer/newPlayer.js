// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classStyles from "../../utils/constants/classStyles";
import playerRoles from "../../utils/constants/roles";

const NewPlayer = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: '', characterClass: 0, role: 0, note: '', itemPrio: [], alts: [] }}
      onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <Field name="characterClass" as="select" className="my-select">
            {classStyles.map((c, index) => <option value={`${index}`}>{c.className}</option>)}
          </Field>
          <Field name="role" as="select" className="my-select">
            {playerRoles.map((role, index) => <option value={`${index}`}>{role.roleName}</option>)}
          </Field>
          <Field name="note" as="textarea"  className="form-input"/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default NewPlayer;