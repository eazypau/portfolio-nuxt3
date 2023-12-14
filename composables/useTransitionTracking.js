const transitionCompletedOnce = ref(false);

export const useTransitionTracking = () => {
  const trackTransitionCompleted = () => {
    transitionCompletedOnce.value = true;
  };

  return {
    transitionCompletedOnce,
    trackTransitionCompleted,
  };
};
