
export default function initValue(userData){
  return{
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    street: userData.street || '',
    aptSuiteUnit: userData.aptSuiteUnit || '',
    city: userData.city || '',
    state: userData.state || 'Select a country',
    postalCode: userData.postalCode || '',
    phone: userData.phone || '',
    email: userData.email || '',
    saveInformation: false || '',
  }
}