import React from "react";
import { useWizard } from "react-use-wizard";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
    };
  },
};

type Props = {
  previousStep: React.MutableRefObject<number>;
};

export const AnimatedStep: React.FC<any> = React.memo(
  ({ children, previousStep: previousStepIndex }) => {
    const { activeStep } = useWizard();

    React.useEffect(() => {
      return () => {
        previousStepIndex.current = activeStep;
      };
    }, [activeStep, previousStepIndex]);

    return (
      <motion.div
        custom={activeStep - previousStepIndex.current}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {children}
      </motion.div>
    );
  }
);

type StepProps = {
  number: number;
  withCallback?: boolean;
};

export const Step: React.FC<any> = React.memo(
  ({ number, withCallback = true }) => {
    const { isLoading, handleStep } = useWizard();

    if (withCallback) {
      handleStep(() => {
        alert("Going to next step");
      });
    }

    return (
      <div className="border rounded-md p-4 flex flex-col min-h-[15ch] justify-center items-center">
        <p>(Sync) Step {number}</p>
        {isLoading && <p>Loading...</p>}
      </div>
    );
  }
);
