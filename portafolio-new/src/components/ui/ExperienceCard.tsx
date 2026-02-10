import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceCardProps {
  company: string;
  initial: string;
  color: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location?: string;
  tags: string[];
  index: number;
}

export default function ExperienceCard({
  company,
  initial,
  color,
  role,
  type,
  period,
  duration,
  location,
  tags,
  index,
}: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 shadow-lg shadow-black/[0.03] dark:shadow-black/20 transition-shadow hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/30"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
          style={{ backgroundColor: color }}
        >
          {initial}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
            {role}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="rounded-full bg-gray-100/80 dark:bg-white/10 px-2.5 py-0.5 font-medium text-gray-600 dark:text-gray-300">
          {type}
        </span>
        {location && (
          <>
            <span className="text-gray-300 dark:text-gray-600">·</span>
            <span className="text-gray-500 dark:text-gray-400">{location}</span>
          </>
        )}
      </div>

      <p className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-200">
        {period}
        <span className="ml-1.5 text-xs font-normal text-gray-400 dark:text-gray-500">
          ({duration})
        </span>
      </p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors group-hover:border-gray-300/80 dark:group-hover:border-white/15"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
