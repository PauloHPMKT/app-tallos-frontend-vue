export default interface INewUser {
  cod_user: null,
  name: '',
  email: '',
  contact: '',
  cpf: '',
  description: '',
  password: '',
  location: {
    address: {
      street: '',
      complement: '',
      zipcode: '',
      neighborhood: '',
      city: '',
      state: '',
      country: '',
    },
  },
  roles: '',
  dept: '',
  corporative_email: '',
  atuation_area: '',
}