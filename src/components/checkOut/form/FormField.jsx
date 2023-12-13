import { ErrorMessage } from 'formik';
import { ErrorMessageStyle, FieldLabel, FieldStyle, FieldWrapper } from '../CheckOut.styled';

export default function FormField({ fieldData }) {
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={fieldData.name}>{fieldData.label}</FieldLabel>
      <FieldStyle
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        id={fieldData.name}
        component={fieldData.component}
        type={fieldData.type}
      >
        {fieldData.options &&
          fieldData.options.map((elem, index) => (
            <option value={elem} key={index}>
              {elem}
            </option>
          ))}
      </FieldStyle>

      <ErrorMessageStyle>
        <ErrorMessage name={fieldData.name} />
      </ErrorMessageStyle>
    </FieldWrapper>
  );
}
