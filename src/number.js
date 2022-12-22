
function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 300,
        config: { mass: 1, tension: 20, friction: 10 },

    });
    return <animated.div>{number.to((n) => n.tofixed(0))}</animated.div>

}
