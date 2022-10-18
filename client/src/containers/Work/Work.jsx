import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Title } from "../../components";

const Works = [
  {
    title: "title1",
    description: "description1",
    projectLink: "projectLink1",
    codeLink: "codeLink1",
    imgUrl: "assets/images/sssss 1.png",
    tags: ["UI/UX", "React JS"],
  },
  {
    title: "title2",
    description: "description2",
    projectLink: "string",
    codeLink: "title",
    imgUrl: "assets/images/sssss 1.png",
    tags: ["Web App", "Mobile App"],
  },
  {
    title: "title3",
    description: "description3",
    projectLink: "string",
    codeLink: "title",
    imgUrl: "assets/images/sssss 1.png",
    tags: ["Web App", "React JS"],
  },
  {
    title: "title4",
    description: "description",
    projectLink: "string",
    codeLink: "title",
    imgUrl: "assets/images/sssss 1.png",
    tags: ["UI/UX", "React JS"],
  },
];

const Work = () => {
  const works = Works;
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    if (works) {
      setFilterWork(works);
    }
  }, [works]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));

        console.log(filterWork, activeFilter);
      }
    }, 500);
  };

  return (
    <>
      <div className="works app__flex">
        <Title Title={"My Works"} underTitle={"Featured Projects"} />

        <div className="app__work-filter">
          {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Work;
