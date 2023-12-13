import { PatternFormat } from "react-number-format";

const PhoneInput = ({ field, ...props }) => {
  return (    
    <PatternFormat
      {...field}
      {...props}

      format="+38 (0##) ### ## ##"
      mask="_"
      allowEmptyFormatting
    />
  );
}

  const fields = [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name*',
      placeholder: "First Name",
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name*',
      placeholder: "Last Name",
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone*',
      component: PhoneInput,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email*',
      placeholder: "Email",
    },
    {
      name: 'state',
      label: 'State*',
      component: "select",
      options: ['Select a country', 'Ukraine', 'Poland', 'Germany', 'Great Britain']
    },
    {
      name: 'city',
      type: 'text',
      label: 'City*',
      placeholder: "City",
    },
    {
      name: 'street',
      type: 'text',
      label: 'treet Address*',
      placeholder: "Street Address",
    },
    {
      name: 'aptSuiteUnit',
      type: 'text',
      label: 'Apt, suite, unit*',
      placeholder: "apartment, suite, unit, etc. (optional)",
    },
  ];

  export default fields;

