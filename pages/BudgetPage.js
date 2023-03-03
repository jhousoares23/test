import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function BudgetPage() {
  const [budget, setBudget] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/api/budgets/${id}`).then(response => {
      setBudget(response.data);
    });
  }, [id]);

  if (!budget) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>{budget.name}</h1>
      <p>{budget.description}</p>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string().email('O email é inválido').required('O email é obrigatório'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post(`/api/budgets/${id}/submit`, values)
            .then(response => {
              alert('Orçamento enviado com sucesso!');
            })
            .catch(error => {
              alert('Erro ao enviar o orçamento');
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <Field className="form-control" type="text" name="name" />
              <div className="text-danger">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field className="form-control" type="email" name="email" />
              <div className="text-danger">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BudgetPage;