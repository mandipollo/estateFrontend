import React from "react";
import { useSpring, animated } from "@react-spring/web";

const NumberAnimation = ({ n, initN }) => {
	const { number } = useSpring({
		from: { number: initN },
		number: n,
		delay: 200,
		config: { mass: 1, tension: 20, friction: 10 },
	});

	return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>;
};

export default NumberAnimation;
