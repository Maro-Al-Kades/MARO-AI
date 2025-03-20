import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <Button>{t("title")}</Button>
    </div>
  );
};

export default Home;
