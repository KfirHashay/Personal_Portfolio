import React from 'react';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Uploadbtn } from '.';
import useMeasure from 'react-use-measure';

let duration = 0.55;

function ContactPanel({
  isLoading,
  setName,
  setEmail,
  setMessage,
  func,
  func2,
}) {
  return (
    <MotionConfig transition={{ duration }}>
      <div className="form">
        <div className="Panel">
          <ResizablePanel>
            {isLoading ? (
              <div className="formBefore">
                <input
                  type="text"
                  className="input name"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  required
                />
                <input
                  className="input email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <textarea
                  type="text"
                  className="message"
                  placeholder="Message"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  required
                />

                <div className="button-wrapper">
                  <Uploadbtn
                    func={func}
                    isLoading={isLoading}
                    variant="primary"
                  >
                    Send Message
                  </Uploadbtn>
                </div>
              </div>
            ) : (
              <div className="formAfter">
                <p>
                  Thank you for your Message! <br /> I Will get back to you as
                  soon as possible, in the meantime, look around!.
                </p>

                <button className="ResetBtn" onClick={func2}>
                  Send Another
                </button>
              </div>
            )}
          </ResizablePanel>
        </div>
      </div>
    </MotionConfig>
  );
}

function ResizablePanel({ children }) {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || 'auto' }}
      className="ResizablePanel"
    >
      <AnimatePresence initial={true}>
        <motion.div key={JSON.stringify(children, ignoreCircularReferences())}>
          <div ref={ref} className={`relative child`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith('_')) return; // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

export default ContactPanel;
