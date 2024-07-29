

const GRAPHIC_OPTIONS = new Map(
	[
		["Resolution", "90"],
		["V-Sync", "80"],
		["Anti-Aliasing", "70"],
		["Texture Quality", "60"],
		["Shadow Quality", "50"],
		["Ambient Occlusion", "40"],
		["Anisotropic Filtering", "30"],
		["Lighting Quality", "20"],
		["Post Processing", "10"],
		["Effects Quality", "00"],
		["Volumetric Lighting/Fog", "10"],
		["Reflection Quality", "20"],
		["Depth of Field", "30"],
		["Motion Blur", "40"],
		["Mesh/Model Quality", "50"],
		["Terrain Quality", "60"],
		["Tessellation", "70"],
		["LOD (Level of Detail)", "80"],
		["Foliage Quality", "90"],
		["Bloom", "00"],
		["Chromatic Aberration", "90"],
		["Film Grain", "80"],
		["Dynamic Shadows", "70"],
		["Screen Space Reflections", "60"],
		["Particle Quality", "50"],
		["Texture Streaming", "40"],
	],
);

GRAPHIC_OPTIONS.forEach((option) => {
	console.log(option);
	if(option >= 50) {
		console.log(`High impact`);
	} else if(option >= 40 && option < 50) {
		console.log(`Medium impact`);
	} else {
		console.log(`Low impact`);
	}
});