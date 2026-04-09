"use client";

import { motion } from "framer-motion";

export default function RoboticArm({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid crosshairs background */}
      {[100, 200, 300, 400].map((x) =>
        [100, 200, 300, 400].map((y) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: (x + y) * 0.002, duration: 1.5 }}
          >
            <line x1={x} y1={y - 4} x2={x} y2={y + 4} stroke="#1A6B6A" strokeWidth="0.5" />
            <line x1={x - 4} y1={y} x2={x + 4} y2={y} stroke="#1A6B6A" strokeWidth="0.5" />
          </motion.g>
        ))
      )}

      {/* Base platform */}
      <motion.rect
        x="180" y="420" width="140" height="12" rx="2"
        stroke="#1A6B6A" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.rect
        x="200" y="408" width="100" height="14" rx="2"
        stroke="#1A6B6A" strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Base joint circle */}
      <motion.circle
        cx="250" cy="400" r="18"
        stroke="#1A6B6A" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.4 }}
      />
      <motion.circle
        cx="250" cy="400" r="6"
        fill="#1A6B6A"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />

      {/* Lower arm segment */}
      <motion.g
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "250px", originY: "400px" }}
      >
        <motion.line
          x1="250" y1="382" x2="210" y2="280"
          stroke="#1A6B6A" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.line
          x1="250" y1="382" x2="230" y2="280"
          stroke="#1A6B6A" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />

        {/* Elbow joint */}
        <motion.circle
          cx="220" cy="280" r="14"
          stroke="#1A6B6A" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.circle
          cx="220" cy="280" r="4"
          fill="#1A6B6A"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 2 }}
        />

        {/* Upper arm segment */}
        <motion.g
          animate={{ rotate: [1, -3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ originX: "220px", originY: "280px" }}
        >
          <motion.line
            x1="220" y1="266" x2="280" y2="170"
            stroke="#1A6B6A" strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
          <motion.line
            x1="220" y1="266" x2="260" y2="175"
            stroke="#1A6B6A" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />

          {/* Wrist joint */}
          <motion.circle
            cx="270" cy="172" r="10"
            stroke="#1A6B6A" strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />

          {/* End effector / gripper */}
          <motion.g
            animate={{ rotate: [0, -5, 0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "270px", originY: "172px" }}
          >
            <motion.line
              x1="270" y1="162" x2="290" y2="130"
              stroke="#1A6B6A" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1, delay: 1.6 }}
            />
            <motion.line
              x1="290" y1="130" x2="305" y2="115"
              stroke="#1A6B6A" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />
            <motion.line
              x1="290" y1="130" x2="280" y2="110"
              stroke="#1A6B6A" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            />

            {/* Active welding point glow */}
            <motion.circle
              cx="295" cy="112"
              r="3"
              fill="#1A6B6A"
              animate={{
                opacity: [0.3, 1, 0.3],
                r: [2, 4, 2],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="295" cy="112"
              r="12"
              fill="none"
              stroke="#1A6B6A"
              strokeWidth="0.5"
              animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        </motion.g>
      </motion.g>

      {/* Measurement lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <line x1="165" y1="400" x2="165" y2="280" stroke="#1A6B6A" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="155" y="340" fill="#1A6B6A" fontSize="8" textAnchor="end" fontFamily="monospace">120mm</text>
        <line x1="220" y1="255" x2="280" y2="155" stroke="#1A6B6A" strokeWidth="0.5" strokeDasharray="3 3" />
      </motion.g>

      {/* Data readout overlay */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        <motion.text
          x="340" y="180"
          fill="#1A6B6A"
          fontSize="9"
          fontFamily="monospace"
          opacity={0.5}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          J1: 42.3°
        </motion.text>
        <motion.text
          x="340" y="195"
          fill="#1A6B6A"
          fontSize="9"
          fontFamily="monospace"
          opacity={0.5}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          J2: -18.7°
        </motion.text>
        <motion.text
          x="340" y="210"
          fill="#1A6B6A"
          fontSize="9"
          fontFamily="monospace"
          opacity={0.5}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          TORQUE: 94.2 Nm
        </motion.text>
        <motion.text
          x="340" y="225"
          fill="#1A6B6A"
          fontSize="9"
          fontFamily="monospace"
          opacity={0.5}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          STATUS: ACTIVE
        </motion.text>
      </motion.g>

      {/* Outer technical frame corners */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <polyline points="30,30 30,60" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="30,30 60,30" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="470,30 440,30" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="470,30 470,60" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="30,470 30,440" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="30,470 60,470" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="470,470 440,470" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
        <polyline points="470,470 470,440" stroke="#1A6B6A" strokeWidth="0.5" fill="none" />
      </motion.g>
    </svg>
  );
}
