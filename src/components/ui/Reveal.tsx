'use client';

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** "view": se anima cuando entra al viewport (default, para contenido bajo el fold).
   *  "mount": se anima apenas se monta (para contenido ya visible en el primer paint, como un hero). */
  mode?: "view" | "mount";
  delay?: number;
  y?: number;
  /** Tag semántico a renderizar (div por defecto; article/li/etc. cuando importa la semántica). */
  as?: "div" | "article" | "li" | "section";
}

/**
 * Entrada de fade + translateY reutilizable en todas las secciones del home.
 * Respeta prefers-reduced-motion (useReducedMotion) y usa spring physics,
 * no linear easing, siguiendo el patrón ya establecido en el proyecto.
 */
export function Reveal({ children, className, mode = "view", delay = 0, y = 24, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const hidden = { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };

  const motionProps = mode === "mount"
    ? { initial: reduce ? false : hidden, animate: visible }
    : { initial: reduce ? false : hidden, whileInView: visible, viewport: { once: true, amount: 0.3 } };

  return (
    <MotionTag
      className={className}
      {...motionProps}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    >
      {children}
    </MotionTag>
  );
}
