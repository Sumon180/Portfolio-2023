"use client";
import CopyableBox from "@/components/CopyableBox";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  const text = "Hello, I'm a copyable text! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ullam assumenda animi neque fugiat odio, molestias voluptates cumque obcaecati non? Fugit rem dolores obcaecati quidem, aliquid optio nesciunt reiciendis architecto sunt dolore ipsa corporis. Maiores animi possimus dolore perspiciatis rem dignissimos saepe hic voluptas culpa, recusandae, ratione, illum iste eius. Quia corrupti aspernatur nobis eaque totam, nulla ex obcaecati aut recusandae nesciunt repellendus similique doloribus. In fugiat incidunt, libero pariatur vitae, voluptatibus architecto provident eius est, aut quasi saepe at ipsa a error enim placeat voluptatum ratione harum. Aliquam delectus commodi assumenda odio cumque nulla provident velit facere earum eum voluptate, exercitationem voluptatibus, quia ab veritatis aut! Natus minus recusandae culpa quod quo perspiciatis est modi veritatis quaerat,";

  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 80,
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
          <section id="skills" className="py-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
              <h3 className="text-4xl font-semibold">
                My <span className="text-cyan-600">Skills</span>
              </h3>
              <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
              <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                {skills?.map((skill, i) => (
                  <div
                    key={i}
                    className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                  >
                    <div
                      style={{
                        background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                      }}
                      className="w-32 h-32 flex items-center justify-center rounded-full"
                    >
                      <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                        <span>
                          <FaReact />
                        </span>
                      </div>
                    </div>
                    <p className="text-xl mt-3">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <CopyableBox text={text} />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
