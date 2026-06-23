import React from "react";
import { motion } from "motion/react";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = "",
  dark = false,
}) => {
  return (
    <div className={`${dark ? "glass-dark" : "glass"} rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

interface StepLineProps {
  number: string;
  title: string;
  description: string;
  duration?: string;
  isLast?: boolean;
}

export const StepLine: React.FC<StepLineProps> = ({
  number,
  title,
  description,
  duration,
  isLast = false,
}) => {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-black text-white shadow-sm">
          {number}
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-sky-600/30 to-transparent" />
        )}
      </div>
      <div className="pb-12 flex-1">
        <div className="flex items-center gap-3 mb-1.5">
          <h4 className="text-sm font-black text-navy-900 uppercase tracking-tight">{title}</h4>
          {duration && (
            <span className="text-[10px] font-bold text-copper-400 bg-copper-50 px-2 py-0.5 rounded-full">
              {duration}
            </span>
          )}
        </div>
        <p className="text-xs text-navy-900/60 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface MetricPillProps {
  value: string;
  label: string;
}

export const MetricPill: React.FC<MetricPillProps> = ({ value, label }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-black text-sky-600 leading-none tracking-tight">{value}</span>
      <span className="text-[10px] font-bold text-navy-900/50 uppercase leading-tight max-w-[80px]">{label}</span>
    </div>
  );
};

interface FeatureCheckProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureCheck: React.FC<FeatureCheckProps> = ({ children, className = "" }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-sky-600/10 flex items-center justify-center">
        <svg className="h-3 w-3 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={`text-xs font-semibold ${className}`}>{children}</span>
    </div>
  );
};

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = "" }) => {
  return (
    <span className={`inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-sky-600 uppercase ${className}`}>
      <span className="h-px w-6 bg-sky-600/30" />
      {children}
    </span>
  );
};
