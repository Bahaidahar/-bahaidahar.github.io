import React from "react";
import { Dialog } from "./Dialog";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return <Dialog triggerContent={t("contact")}></Dialog>;
};

export default Footer;
