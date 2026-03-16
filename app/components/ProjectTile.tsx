import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProjectTileProps {
  projectUrl: string;
  bacgroundImage: StaticImageData;
  title: string;
  Skills: string;
}
const ProjectTile = (props: ProjectTileProps) => {
  return (
    <div>
      <Link href={`${props.projectUrl}`}>
        <div className="relative flex items-center justify-center h-96  w-full shadow-xl shadow-grey-400 rounded-xl p-4 group hover:bg-linear-to-r from-[#5651e5] to-[#709dff]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            height={375}
            src={props.bacgroundImage}
            alt={`/${props.bacgroundImage}`}
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-white tracking-wider text-center">
              {props.title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">{props.Skills}</p>

            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectTile;
