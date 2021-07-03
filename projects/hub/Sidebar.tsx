import Image from "next/image";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Projects, projectProps } from "../object";

export const Divider = ({ className }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`bg-primary-700 mx-4 w-8 ${className}`} style={{ height: "2px" }}></span>;
};

export const Sidebar = () => {
  const [projects, setProjects] = useState([]);
  const { push } = useRouter();
  const redirect = (path: string) => {
    push(path, undefined, { shallow: true });
  };

  useEffect(() => {
    const func = async () => {
      const projects = new Projects(["hub", "package_tracker", "lookup"]);
      await projects.__init__();
      setProjects(projects.getActiveArray());
    };

    func();
  }, []);

  return (
    <div className="max-h-screen h-full flex flex-col items-center w-80 mr-7">
      <span className="flex justify-center items-center p-6 cursor-pointer">
        <IoMenuOutline className="h-4 w-4" />
      </span>
      <Divider className="mb-3" />
      <div className=" w-full flex flex-col items-center">
        {projects.map((project) => {
          const { path, key, icon }: projectProps = project;

          return (
            <span className="px-4 py-3 rounded-15 h-full w-full cursor-pointer" key={key} onClick={() => redirect(path)}>
              <Image src={icon} alt={key} className="h-8 w-8 rounded-15" draggable={false} />
            </span>
          );
        })}
      </div>

      <Divider className="mt-3" />
    </div>
  );
};

export default Sidebar;
