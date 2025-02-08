import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ handleChangeQuery }) => {
  const onSubmit = (values) => {
    handleChangeQuery(values.query);
    values.query = "";
  };
  const initialValues = {
    query: "",
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <button type="submit">
            <CiSearch className={s.iconSearch} />
          </button>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for a movie..."
          />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
