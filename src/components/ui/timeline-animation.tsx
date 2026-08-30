'use client';

import type { ReactNode, RefObject } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'motion/react';

interface TimelineContentProps {
  children: ReactNode;
  /** Índice de este elemento dentro de la secuencia; se pasa como `custom` a customVariants. */
  animationNum: number;
  /** Ref compartida: cuando ESTE elemento entra en viewport, todos los TimelineContent de la
   * secuencia (indexados por animationNum) animan juntos con su propio delay escalonado. */
  timelineRef: RefObject<HTMLElement | null>;
  customVariants: Variants;
  as?: "div" | "span" | "p" | "h2" | "h3" | "li";
  className?: string;
}

/**
 * Envoltorio de reveal escalonado (Motion) para secuencias de elementos que comparten
 * un mismo punto de disparo (timelineRef) pero cada uno anima con su propio delay
 * según customVariants.visible(animationNum). Patrón local, no es un paquete de npm.
 */
export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  as = 'div',
  className,
}: TimelineContentProps) {
  const reduce = useReducedMotion();
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const MotionTag = motion[as];

  return (
    <MotionTag
      custom={animationNum}
      initial={reduce ? false : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
