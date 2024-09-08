import Image from "next/image";

const AvatarURLs = [
  "/images/avatars/avatar-1.jpeg",
  "/images/avatars/avatar-2.avif",
  "/images/avatars/avatar-3.avif",
  "/images/avatars/avatar-4.avif",
  "/images/avatars/avatar-5.avif",
];

export default function AvatarStack() {
  return (
    <div className="relative">
      <div className="flex -space-x-2">
        {AvatarURLs.map((url, index) => (
          <Image
            key={index}
            src={url}
            width={40}
            height={40}
            className="inline-block size-10 rounded-full ring-2 ring-white dark:ring-gray-800"
            alt="Avatar of a person"
          />
        ))}
      </div>
    </div>
  );
}
