const Field = ({name, type, placeholder, label, formik}) => {
  return (
    <div className={`field field-${name}`}>
      <label htmlFor={name}>{label}</label>
      <input 
        className={
          formik.touched[name] && formik.errors[name] 
          ? 'hasError'
          : ''
        }
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
      />
      {
        formik.touched[name] && formik.errors[name] 
        ? <p className="errorMsg">{formik.errors[name]}</p>
        : <p className="errorMsg">&nbsp;</p>
      }
    </div>
  )
}

export default Field;