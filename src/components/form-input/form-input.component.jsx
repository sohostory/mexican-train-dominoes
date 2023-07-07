import "./form-input.styles.scss";

const FormInput = ({ label, value, onChange }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={onChange}
      />
      {label && (
        <label className={`${value ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
