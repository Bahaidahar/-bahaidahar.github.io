import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface DialogProps {
  triggerContent: ReactNode;
}

export const Dialog = ({ triggerContent }: DialogProps) => {
  const t = useTranslations("Projects");
  const message = t("message");
  const messangers = [
    {
      item: faTelegram,
      href: `https://t.me/bahaebaha`,
      text: "Telegram",
    },
    {
      item: faWhatsapp,
      href: "https://wa.me/87057315777?text=" + encodeURIComponent(message),
      text: "Whatsapp",
    },
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <footer className="z-20 fixed bottom-0 cursor-pointer hover:bg-white/10 w-full p-4 flex items-center justify-center gap-4 transition-all duration-300 ease-in-out">
          {triggerContent}
        </footer>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-white/20 backdrop-blur-xl ">
        <AlertDialogHeader className="relative">
          <AlertDialogCancel className=" absolute -right-10 -top-10 rounded-full border border-white/30 bg-white/10 size-[40px] hover:bg-white/20 transition-all duration-300 ease-in-out">
            X
          </AlertDialogCancel>
          <AlertDialogTitle>{t("how-contact")}</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {messangers.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  target="_blank"
                  className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-purple-200 cursor-pointer flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={item.item} className=" size-[50px]" />
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
