import React from 'react';

// @ts-ignore
import murmur3 from 'murmurhash-js';

import { View, HFlex } from '../View/View.native';

interface Props {
	id: string;
	size?: number;
	dimensions?: number;
	// TODO: type this
	style?: any;
	euclidian?: boolean
}

interface Point {
	x: number;
	y: number;
	color: string;
}

const DEFAULT_DIMENSIONS = 10;
const DEFAULT_RESOLUTION = 5;
const FEATURE_SITES = 4;
const COLORS = [
	'#55EDA6',
	'#55EDC0',
	'#55EDDA',
	'#55E7ED',
	'#55CDED',
	'#5599ED',
	'#557FED',
	'#5466ed',
	'#6055ED',
	'#7A55ED',
	'#9455ED',
	'#AE55ED',
	'#C855ED',
	'#E255ED',
	'#ED55DE',
	'#ED55C4',
];

const MURMUR_HASH_SEED = 0x32f1a902;

function sfc32(a: number, b: number, c: number, d: number) {
	return function () {
		a >>>= 0;
		b >>>= 0;
		c >>>= 0;
		d >>>= 0;
		var t = (a + b) | 0;
		a = b ^ (b >>> 9);
		b = (c + (c << 3)) | 0;
		c = (c << 21) | (c >>> 11);
		d = (d + 1) | 0;
		t = (t + d) | 0;
		c = (c + t) | 0;
		return (t >>> 0) / 4294967296;
	};
}

export const PlaceholderImage: React.FunctionComponent<Props> = (
	props: Props,
) => {
	const dimensions = props.dimensions ?? DEFAULT_DIMENSIONS;
	const resolution = props.size
		? props.size / dimensions
		: DEFAULT_RESOLUTION;

	const chooseFeatureSites = () => {
		const hash = murmur3(props.id, MURMUR_HASH_SEED);
		const hash2 = murmur3(props.id, hash);
		const hash3 = murmur3(props.id, hash2);
		const hash4 = murmur3(props.id, hash3);

		const coords: Point[] = [];

		const rand = sfc32(hash, hash2, hash3, hash4);

		for (let i = 0; i < FEATURE_SITES; i++) {
			const x = Math.floor(rand() * dimensions);
			const y = Math.floor(rand() * dimensions);
			const color = COLORS[Math.floor(rand() * COLORS.length)];
			coords.push({
				x,
				y,
				color,
			});
		}
		return coords;
	};

	const generateImage = () => {
		let points = chooseFeatureSites();
		let canvas: string[][] = [];

		for (var i = 0; i < dimensions; i++) {
			canvas[i] = new Array(dimensions);
		}

		while (points.length > 0) {
			const point = points[0];
			const { x, y, color } = point;

			if (x < 0 || x === dimensions || y < 0 || y === dimensions)
				continue;

			if (!canvas[x][y]) canvas[x][y] = color;

			if (x < dimensions - 1 && !canvas[x + 1][y]) {
				points.push({ x: x + 1, y, color });
			}
			if (x > 0 && !canvas[x - 1][y]) {
				points.push({ x: x - 1, y, color });
			}
			if (y < dimensions - 1 && !canvas[x][y + 1]) {
				points.push({ x, y: y + 1, color });
			}
			if (y > 0 && !canvas[x][y - 1]) {
				points.push({ x, y: y - 1, color });
			}
			if (props.euclidian) {
				if (
					y < dimensions - 1 &&
					x < dimensions - 1 &&
					!canvas[x + 1][y + 1]
				) {
					points.push({ x: x + 1, y: y + 1, color });
				}
				if (y < dimensions - 1 && x > 0 && !canvas[x - 1][y + 1]) {
					points.push({ x: x - 1, y: y + 1, color });
				}
				if (y > 0 && x < dimensions - 1 && !canvas[x + 1][y - 1]) {
					points.push({ x: x + 1, y: y - 1, color });
				}
				if (y > 0 && x > 0 && !canvas[x - 1][y - 1]) {
					points.push({ x: x - 1, y: y - 1, color });
				}
			}

			points = points.slice(1, points.length);
		}

			points = points.slice(1, points.length);
		}
		return canvas;
	};

	const renderImage = () => {
		const image = generateImage();
		const flattenedImage: string[] = [];
		image.forEach((row) => {
			flattenedImage.push(...row);
		});

		return (
			<HFlex
				style={{
					width: dimensions * resolution,
					height: dimensions * resolution,
					flexWrap: 'wrap',
					display: 'flex',
					borderRadius: '100%',
					overflow: 'hidden',
					...props.style,
				}}
			>
				{flattenedImage.map((color) => {
					return (
						<View
							style={{
								backgroundColor: color,
								width: resolution,
								height: resolution,
							}}
						></View>
					);
				})}
			</HFlex>
		);
	};

	return renderImage();
};
