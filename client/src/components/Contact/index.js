import React from 'react';
import { useTranslation } from "react-i18next";

import ContactLayout from '../../layouts/Contact';

import { DEPARTMENTS } from "../../constants/admin";

const Contact = () => {
  const { t } = useTranslation();
  const allDepartments = DEPARTMENTS.map((oneDepartment) => ({
      name: t(`contact.${oneDepartment}.name`),
      email: t(`contact.${oneDepartment}.email`),
      description: t(`contact.${oneDepartment}.description`)
  }))
  return (
    <ContactLayout
      departments={allDepartments}
    />
  );
};

export default Contact;
