// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { connect } from "react-redux";
import classStyles from "../../utils/constants/classStyles";
import playerRoles from "../../utils/constants/roles";

import { addPlayer } from "../../data/actions/players";

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
});

const NewPlayer = ({ playerAdd }) => (
  <div>
    <Formik
      initialValues={{ name: '', characterClass: 0, role: 0, note: '', itemPrio: [], alts: [] }}
      onSubmit={(values, { setSubmitting }) => {
          playerAdd(values);
          setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <Field name="characterClass" as="select" className="my-select">
            {classStyles.map((c, index) => <option key={index} value={index}>{c.className}</option>)}
          </Field>
          <Field name="role" as="select" className="my-select">
            {playerRoles.map((role, index) => <option key={index} value={index}>{role.roleName}</option>)}
          </Field>
          <Field name="note" as="textarea" className="form-input"/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);