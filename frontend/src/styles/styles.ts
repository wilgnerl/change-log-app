import { extendTheme } from "@chakra-ui/react";
import "@fontsource/metropolis";
import "@fontsource/roboto-slab";

const customThemes = {
	colors:{
		black:{
			1000: "#2F3437",
			900: "#37352f",
			500: "#505558",
			100: "#FFFFFF"
		},
		gray:{
			1000: "#454E4B",
			500: "#979A9B",
			100: "#EBECED"
		},
		brown:{
			1000: "#434040",
			500: "#937264",
			100: "#E9E5E3"
		},
		orange:{
			1000: "#584A3A",
			500: "#FFA344",
			100: "#FAEBDD"
		},
		yellow:{
			1000: "#59563B",
			500: "#FFDC49",
			100: "#FBF3DB"
		},
		green:{
			1000: "#354C4B",
			500: "#4DAB9A",
			100: "#DDEDEA"
		},
		blue:{
			1000: "#364954",
			500: "#529CCA",
			100: "#DDEBF1"
		},
		purple:{
			1000: "#443F57",
			500: "#9A6DD7",
			100: "#EAE4F2"
		},
		pink:{
			1000: "#533B4C",
			500: "#E255A1",
			100: "#F4DFEB"
		},
		red:{
			1000: "#594141",
			500: "#FF7369",
			100: "#FBE4E4"
		},

	},
	styles:{
		global:{
			"html, body": {
				backgroundColor: "black.1000",
				width: "100%",
				height: "100%"
			},
		}
	},
	fonts: {
		heading: "'Metropolis', roboto-slab",
		body: "'Metropolis', roboto-slab",
	},
};

const theme = extendTheme(customThemes);

export default theme;