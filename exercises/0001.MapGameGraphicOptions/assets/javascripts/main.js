
const graphicOptions = new Map(
	[
		[`Textures`, `High`],
		[`Shadows`, `Medium`],
		[`AntiAliasing`, `TAA or FXAA`],
		[`AmbientOcclusion`, `SSAO`],
		[`Lighting`, `High`],
		[`Effects`, `Medium`],
		[`PostProcessing`, `High (Motion Blur Off)`],
		[`Reflections`, `Medium`],
		[`SSR`, `Medium`],
		[`WaterQuality`, `Medium`],
		[`Foliage`, `Medium`],
		[`VolumetricEffects`, `Medium`],
		[`MotionBlur`, `Off`],
		[`DepthOfField`, `Medium`],
		[`Tessellation`, `Off or Low`],
		[`MeshQuality`, `High`],
		[`ParticleQuality`, `Medium`],
		[`TerrainQuality`, `High`],
		[`ViewDistance`, `Medium to High`],
		[`FOV`, `90-100 degrees`],
		[`vSync`, `Off (or Adaptive in drivers)`],
		[`DynamicResolutionScaling`, `Off`],
		[`FutureFrameRendering`, `On`],
		[`HairRendering`, `Off or Low`],
		[`RayTracing`, `Off`],
		[`SubsurfaceScattering`, `Medium`],
		[`AdvancedPhysX`, `Off`],
		[`Bloom`, `On (Medium)`],
		[`ChromaticAberration`, `Off`],
		[`SharpeningFilter`, `On (Low to Medium)`],
		[`FilmGrain`, `Off`],
	]
);

console.log(graphicOptions.size);

// Sorted by Key
const sortedByKey = new Map(
	[...graphicOptions.entries()].sort((a, b) => a[0].localeCompare(b[0]))
);

console.log("Sorted by Key:");
console.log(sortedByKey);

// Sorted by Value
const sortedByValue = new Map(
	[...graphicOptions.entries()].sort((a, b) => a[1].localeCompare(b[1]))
);

console.log("Sorted by Value:");
console.log(sortedByValue);

// Reverse Sorted by Key
const reverseSortedByKey = new Map(
	[...graphicOptions.entries()].sort((a, b) => b[0].localeCompare(a[0]))
);

console.log("Reverse Sorted by Key:");
console.log(reverseSortedByKey);

// Reverse Sorted by Value
const reverseSortedByValue = new Map(
	[...graphicOptions.entries()].sort((a, b) => b[1].localeCompare(a[1]))
);

console.log("Reverse Sorted by Value:");
console.log(reverseSortedByValue);
