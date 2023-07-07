import "./form-input.styles.scss";

const FormInput = ({ label, value, onChange }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" onChange={onChange} />
      {label && (
        <label className={`${value ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
