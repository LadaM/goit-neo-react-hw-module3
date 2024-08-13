import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name cannot exceed 50 characters')
      .required('Name is required'),
    phoneNumber: Yup.string()
       .matches(/^[0-9\\-]+$/, 'Phone number can only contain digits and hyphens')
      .min(3, 'Phone number must be at least 3 characters')
      .max(50, 'Phone number cannot exceed 50 characters')
      .required('Phone number is required'),
  });

  const initialValues = {
    name: '',
    phoneNumber: '',
  };

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className={styles.input}
            />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
            <Field
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className={styles.input}
            />
            <ErrorMessage name="phoneNumber" component="div" className={styles.error} />
          </div>

          <button type="submit" className={styles.button}>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
