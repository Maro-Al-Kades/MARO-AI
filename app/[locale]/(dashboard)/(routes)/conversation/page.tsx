import { useTranslations } from "next-intl";
import Heading from "../../_components/Heading";

const ConversationRoute = () => {
  const t = useTranslations("ConversationRoute");
  return (
    <div>
      <Heading
        title={t("title")}
        description={t("description")}
        bgColor={t("bgColor")}
        iconColor={t("iconColor")}
        icon={`hugeicons:ai-chat-02`}
      />
    </div>
  );
};

export default ConversationRoute;
