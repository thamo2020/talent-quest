import React from 'react';
import './Joblist.css';
import { motion } from 'framer-motion';

const Joblist = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <span className='j-header'>Explore Latest &nbsp;</span>
      <motion.div
        className="table-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Experience</th>
              <th>Apply</th>
              <th>CV Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UI/UX Engineer</td>
              <td>ABC pvt ltd</td>
              <td>1 year</td>
              <td><button className='btn-nav'>Easy Apply</button></td>
              <td>Not yet applied</td>
            </tr>
            <tr>
              <td>Software Engineer</td>
              <td>ABC pvt ltd</td>
              <td>2 years</td>
              <td><button className='btn-nav dis'>Applied</button></td>
              <td>Your CV viewed </td>
            </tr>
            <tr>
              <td>Cloud Engineer</td>
              <td>ABC pvt ltd</td>
              <td>3+ years</td>
              <td><button className='btn-nav dis'>Applied</button></td>
              <td>Your CV downloaded </td>
            </tr>
          </tbody>
        </table>
        <span className='jobtext'>
          Click <a href="" className='explore'>here</a> to explore more jobs
        </span>
      </motion.div>
    </div>
  );
}

export default Joblist;
