import { motion } from 'framer-motion';

function AnimatedTabs({ id, name, index, active, handleClick }) {
  return (
    <button
      key={index}
      onClick={() => handleClick(id)}
      className={`${active === id ? 'tabNoHover' : 'tabHover'} tab`}
      style={{
        WebkitTapHighlightColor: 'transparent',
        background: 'none',
      }}
    >
      {active === id && (
        <motion.div
          layoutId="bubble"
          className="bubble_tab"
          style={{ borderRadius: 9999 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="span_tab">{name}</span>
    </button>
  );
}

export default AnimatedTabs;
