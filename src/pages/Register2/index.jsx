import { useCounterContext } from "../../components/hooks/useCounterContext";
import classes from "./Register2.module.css";

const Register2 = ({ formData, setFormData }) => {
  const { setRegisterSteps } = useCounterContext();

  return (
    <div className={classes.formContainer2}>
      <form>
        <div>
          <label htmlFor="city">Service City*</label>
          <select name="" id="city">
            <option
              onChange={(e) => {
                setFormData({ ...formData, city: e });
              }}
              value={formData.city}
            >
              London
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="area">Service Area*</label>
          <select name="" id="area">
            <option
              onChange={(e) => {
                setFormData({ ...formData, Area: e });
              }}
              value={formData.Area}
            >
              United Kingdom
            </option>
          </select>
        </div>
      </form>

      <div className={classes.row}>
        <button onClick={() => setRegisterSteps(0)}>Previous</button>
        <button onClick={() => setRegisterSteps(2)}>Next</button>
      </div>
    </div>
  );
};

export default Register2;
