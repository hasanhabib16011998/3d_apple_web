export const animateWithGsapTimeline = (timeline,rotationRef,rotationSTate,firstTarget,secondTarget,animationProps) => {
    timeline.to(rotationRef.current.rotation,{
        y: rotationSTate,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )

}
