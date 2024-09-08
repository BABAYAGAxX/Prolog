import StarIcon from "~/svgs/star.svg";

export default function Ratings() {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="h-5 w-5" />
      ))}
    </div>
  );
}
