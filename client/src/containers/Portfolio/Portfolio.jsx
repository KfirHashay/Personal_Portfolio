import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {staggerContainer} from '../../utils/motion';

import {Loader} from '../../components';

import instance from '../../http-common';

import {AppWrap} from '../../wrapper';

import {FiLink2, TitleText} from '../../components';

const Portfolio = () => {
  const [portfolio, SetPortfolio] = useState([]);
  const [filter, SetFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const [activeFilter, setActiveFilter] = useState('All');

  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);

    instance
      .get('/portfolio', {signal: signal})
      .then((response) => {
        SetPortfolio(response.data);
        SetFilter(response.data);
      })
      .then(
        setTimeout(() => {
          setLoading(false);
        }, 1500)
      )
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setLoading(false);
      controller.abort();
    };
  }, []);

  const handleportfolioFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if (item === 'All') {
        SetFilter(portfolio);
      } else {
        SetFilter(portfolio.filter((filterData) => filterData.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.25}}
          className="portfolio app__flex"
        >
          <TitleText Title={'My portfolio'} underTitle={'Featured Projects'} align={'flex'} />

          <div className="app__portfolio-filter">
            {['UI/UX', 'Web App', 'FireBase', 'React JS', 'All'].map((item, index) => (
              <div
                key={index}
                onClick={() => handleportfolioFilter(item)}
                className={`app__portfolio-filter-item app__flex p-text ${
                  activeFilter === item ? 'item-active' : ''
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <motion.div
            animate={animateCard}
            transition={{duration: 0.5, delayChildren: 0.5}}
            className="app__portfolio-portfolio"
          >
            {filter.map((CardData, index) => (
              <div className="app__portfolio-item app__flex" key={index}>
                <div className="app__portfolio-img app__flex">
                  <img src={CardData.imgUrl} alt={CardData.title} />

                  <motion.div
                    whileInView={{opacity: [0, 0.2, 0.7]}}
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                    className="app__portfolio-hover app__flex"
                  ></motion.div>
                </div>

                <div className="app__portfolio-content app__flex">
                  <h4 className="title">{CardData.title}</h4>
                  <p className="p-text app__flex portfolio-description" style={{marginTop: 10}}>
                    {CardData.description}
                  </p>
                </div>
                <div className="app__portfolio-bottom">
                  <div className="app__portfolio-tag">
                    <motion.p
                      whileHover={{scale: [1, 0.9]}}
                      transition={{duration: 0.25}}
                      className="tag"
                    >
                      {CardData.tags[0]}
                    </motion.p>
                    <motion.p
                      whileHover={{scale: [1, 0.88]}}
                      transition={{duration: 0.25}}
                      className="tag"
                    >
                      {CardData.tags[1]}
                    </motion.p>
                  </div>
                  <motion.a
                    whileHover={{scale: [1, 0.88]}}
                    transition={{duration: 0.25}}
                    className="svgCon"
                    href={CardData.projectURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLink2 />
                  </motion.a>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AppWrap(Portfolio, 'portfolio');

// function getPortfolio() {
//   SetLoading(true);
//   console.log('loading items:', loading);
//   const q = query(collection(db, 'portfolio'));

//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     const NewPortfolio = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     SetPortfolio(NewPortfolio);
//     SetLoading(false);
//     SetFilter(NewPortfolio);
//   });

//   console.log('portfolio:', portfolio);
//   console.log('Done');

//   return () => unsubscribe();
// }

// useEffect(() => {
//   getPortfolio();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
