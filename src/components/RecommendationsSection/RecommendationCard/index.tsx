import Image from "next/image";

import style from "./recomendationCard.module.css";

interface Props {
  profilePicture: string;
  username: string;
  description: string;
  role: string;
}

export default function RecommendationCard({
  profilePicture,
  username,
  description,
  role,
}: Props) {
  return (
    <div
      className={`p-7 w-full min-w-[523px] h-[256px] bg-white rounded-lg ${style.shadowCard}`}
    >
      <div className="flex gap-4 mb-4 w-full">
        <Image
          src={profilePicture}
          width={64}
          height={64}
          alt="profile"
          className="rounded-full h-16 w-16 object-cover"
        />
        <div>
          <p className="font-semibold text-lg text-[#2B2D33]">{username}</p>
          <p className="text-base text-[#999EAD]">{role}</p>
        </div>
      </div>
      <div>
        <p className="text-base text-secondary-text line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
}
