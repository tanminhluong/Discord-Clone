"use client";

interface NavigationItemProps {
  id: string;
  name: string;
  imgUrl: string;
}

import { ActionToolTip } from "@/components/action-tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export const NavigationItem = ({ id, name, imgUrl }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };
  return (
    <ActionToolTip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relavtie flex items-center">
        <div
          className={cn(
            "absolute le0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imgUrl} alt="Server" />
        </div>
      </button>
    </ActionToolTip>
  );
};
