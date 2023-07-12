import "./form-number.styles.scss";

const FormNumber = ({ label, value, onChange }) => {
  return (
    <div className="group">
      <input
        type="number"
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

export default FormNumber;
