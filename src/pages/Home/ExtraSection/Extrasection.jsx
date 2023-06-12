import { motion } from 'framer-motion';

const Extrasection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <motion.div
          className="hero-content flex-col lg:flex-row-reverse"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://images.unsplash.com/photo-1590502148726-931b4b16b63a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0cyUyMGFjYWRlbXklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Devloping Complete Players!
            </motion.h1>
            <motion.p
              className="py-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Improve the game by focusing on main elements.

            </motion.p>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 33 }}></span>
                </span>
                sec
              </div>
            </div>

            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >

              Enroll Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Extrasection;
