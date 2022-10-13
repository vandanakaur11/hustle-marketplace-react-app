import { useCounterContext } from "./../../components/hooks/useCounterContext";
import styles from "./Register3.module.css";

const Register3 = ({ formData, setFormData }) => {
  const { setRegisterSteps } = useCounterContext();

  const handleSubmit = () => {
    setRegisterSteps(3);
    console.log(formData);
  };

  return (
    <>
      <div className={styles.terms_condition}>
        <h3>Terms and Conditions</h3>

        <div>
          <input
            type="checkbox"
            checked={formData.checkBox1}
            id="checkbox1"
            onChange={() => {
              setFormData({ ...formData, checkBox1: !false });
            }}
          />
          <label htmlFor="checkbox1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            checked={formData.checkBox2}
            id="checkbox2"
            onChange={() => {
              setFormData({ ...formData, checkBox2: !false });
            }}
          />
          <label htmlFor="checkbox2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </label>
        </div>

        <div className={styles.row}>
          <button onClick={() => setRegisterSteps(1)}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Register3;
