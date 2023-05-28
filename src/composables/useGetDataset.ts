import { UserForm, UserForSend } from "../types/user";

import useChangeFormatDate from "./useChangeFormatDate";

export default () => {
  const getDataForForm = (data: UserForSend): UserForm => {
    return {
      fullName: `${data.firstName} ${data.lastName} ${data.middleName ? data.middleName : ''}`,
      birthDate: useChangeFormatDate(data.birthDate, 'DD.MM.YYYY'),
      description: data.description,
    };
  }

  const getDataForSend = (data: UserForm): UserForSend => {
    return {
      firstName: data.fullName.split(' ')[0],
      lastName: data.fullName.split(' ')[1],
      middleName: data.fullName.split(' ')[2],
      birthDate: useChangeFormatDate(data.birthDate, 'YYYY-MM-DD'),
      description: data.description,
    };
  }
  return {
    getDataForForm,
    getDataForSend,
  }
}