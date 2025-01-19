/**
 * =============================================================================
 *                          InfiniteSlider Component
 *          Created by StarPlatinumSan (github.com/StarPlatinumSan)
 * -----------------------------------------------------------------------------
 * This component is a flexible, infinitely scrolling slider for React.
 * It can accept text, images, or any valid JSX elements to slide from right
 * to left automatically. On hover, it pauses. Feel free to customize
 * animation duration, item width, and height via props.
 *
 * EXAMPLE:
 *
 *  <InfiniteSlider
 *    items={[
 *      <div>Item1</div>,
 *      <div>Item2</div>,
 *      <div>Item3</div>,
 *      ...
 *    ]}
 *    sliderWidth="100%"
 *    itemWidth="120px"
 *    itemHeight="60px"
 *    duration={15}
 *  />
 *
 * =============================================================================
 */

import React, { FC, useState, CSSProperties, HTMLAttributes } from "react";
import "../styles/InfiniteSlider.css";

interface InfiniteSliderProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The array of items to display (text, images, or any valid JSX).
	 * Each item is rendered as a separate sliding element.
	 */
	items: React.ReactNode[];

	/**
	 * The width of the entire visible slider.
	 * You may modify it at your liking.
	 * Default: "100%"
	 */
	sliderWidth: string;

	/**
	 * The width of each sliding item (e.g., "100px", "5rem", "auto").
	 * This value is used by the CSS animation to decide how far items travel.
	 * Default: "100px"
	 */
	itemWidth?: string;

	/**
	 * The height of each sliding item (e.g., "50px", "3rem", "auto").
	 * This value also affects the bounding box of each item in the slider.
	 * Default: "50px"
	 */
	itemHeight?: string;

	/**
	 * The duration in seconds for a single full slide from right to left.
	 * A smaller number means faster scrolling. A larger number means slower scrolling.
	 * Default: 15
	 */
	duration?: number;
}

interface InfiniteSliderCSSProperties extends CSSProperties {
	/*  
        Used For: The width of each sliding item.
        Base Value in CSS: 100px
        Where It’s Used:
        width: var(--itemWidth); on the .sponsor elements.
        The keyframe animation uses it to calculate how far left items should travel. 
    */
	"--itemWidth"?: string;

	/* 
        Used For: The height of each sliding item.
        Base Value in CSS: 50px
        Where It’s Used:
        height: var(--itemHeight); on the .sponsor elements.
    */
	"--itemHeight"?: string;

	/* 
        Used For: The total time (in seconds) for an item to move fully from right to left.
        Base Value in CSS: 15s (15 seconds)
        Where It’s Used:
        animation-duration: var(--duration); for the .sponsor animation speed.
    */
	"--duration"?: string;

	/*  
        Used For: The total number of sliding items in the carousel.
        Base Value in CSS: 1 (but updated dynamically based on items.length).
        Where It’s Used:
        In the calculation of animation-delay: calc((var(--duration) / var(--count)) * var(--position) * -1);
        This ensures each item is spaced out evenly in time rather than starting all at once.
    */
	"--count"?: string;

	/* Automated attribute to give a position to each element in the slider */
	"--position"?: number | string;
}

const InfiniteSlider: FC<InfiniteSliderProps> = ({ items, sliderWidth = "100%", itemWidth = "100px", itemHeight = "50px", duration = 15, className = "", style = {}, ...rest }) => {
	const [paused, setPaused] = useState(false);
	const reversedItems = [...items].reverse();

	return (
		<div
			className={`infinite-slider ${paused ? "paused" : ""} ${className}`}
			style={
				{
					...style,
					width: `${sliderWidth}`,
					"--itemWidth": itemWidth,
					"--itemHeight": itemHeight,
					"--duration": `${duration}s`,
					"--count": items.length.toString(),
				} as InfiniteSliderCSSProperties
			}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			{...rest}
		>
			<div className="list">
				{reversedItems.map((itemContent, index) => (
					<div
						className="sponsor"
						key={index}
						style={
							{
								"--position": index,
							} as InfiniteSliderCSSProperties
						}
					>
						{itemContent}
					</div>
				))}
			</div>
		</div>
	);
};

export default InfiniteSlider;
