import React from "react";
import { easeInOut, motion } from "motion/react"
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-50%">
      <div className="hero-content flex-col lg:flex-row">
     
        <div className="flex-1">
          <h1 motion className="text-5xl font-bold">Box Jobs News!</h1>
          <motion.h1 
          animate={{x:50 ,color: ['green'] }}
          transition={{duration:2, delay:1,ease:easeInOut, repeat:Infinity}}
          className="text-5xl font-bold">Box <motion.span animate={{color:['#b215bd','#21db14','#ab910e']}} transition={{delay:1.5, repeat:Infinity}}>Jobs</motion.span> News!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

          <div className="flex-1">
         <motion.img
          src={team1}
          animate={{y:[50, 100, 50] ,}}
          transition={{duration:10, repeat:Infinity}}
          className="max-w-sm w-52 max-h-52   rounded-t-3xl rounded-br-3xl border-l-4 border-b-4  border-green-400 "
        />
         <motion.img
          src={team2}
          animate={{x:[100, 150, 100] ,}}
          transition={{duration:10, repeat:Infinity}}
          className="max-w-sm w-64 max-h-52   rounded-t-3xl rounded-br-3xl border-r-4 border-b-4  border-green-400 "
        />
       </div>
      </div>
    </div>
  );
};

export default Banner;
